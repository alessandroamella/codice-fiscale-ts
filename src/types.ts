export interface BasePerson {
  firstName: string;
  lastName: string;
  /**
   * Birth date: a `"YYYY-MM-DD"` string (recommended, as it is not affected
   * by time zones) or a `Date`, whose local date is used.
   */
  birthDate: Date | string;
  gender: 'M' | 'F';
}

export interface ItalianPerson extends BasePerson {
  birthPlace: string;
  /** Optional province (e.g. "RM") to disambiguate homonymous municipalities. */
  birthProvince?: string;
  foreignCountry?: 'IT' | undefined;
}

export interface ForeignPerson extends BasePerson {
  foreignCountry: string;
  birthPlace?: never;
}

export type Person = ItalianPerson | ForeignPerson;

/**
 * Type guard to check if a person is an Italian person
 */
export function isItalianPerson(person: Person): person is ItalianPerson {
  return (
    'birthPlace' in person &&
    typeof person.birthPlace === 'string' &&
    person.birthPlace.trim() !== '' &&
    (person.foreignCountry === undefined || person.foreignCountry === 'IT')
  );
}

/**
 * Type guard to check if a person is a foreign person
 */
export function isForeignPerson(person: Person): person is ForeignPerson {
  return (
    'foreignCountry' in person &&
    typeof person.foreignCountry === 'string' &&
    person.foreignCountry.length === 2 && // alpha2 country code
    person.foreignCountry !== 'IT' &&
    person.birthPlace === undefined
  );
}

/**
 * Validates that a person object has all required fields and follows the correct format
 * @throws Error if the person object is invalid
 */
export function validatePerson(person: Person): void {
  if (!person) throw new Error('Person object is required');

  // Check basic required fields
  if (!person.firstName || person.firstName.trim() === '')
    throw new Error('First name is required');

  if (!person.lastName || person.lastName.trim() === '')
    throw new Error('Last name is required');

  if (!isValidBirthDate(person.birthDate))
    throw new Error(
      'Valid birth date is required (a Date or a "YYYY-MM-DD" string)'
    );

  if (!person.gender || !['M', 'F'].includes(person.gender))
    throw new Error('Gender must be either "M" or "F"');

  // Check that either birthPlace is provided with foreignCountry being undefined or 'IT',
  // or foreignCountry is provided (not 'IT') without birthPlace
  if (isItalianPerson(person)) {
    // Additional validation for Italian person if needed
  } else if (isForeignPerson(person)) {
    // Additional validation for Foreign person if needed
  } else {
    throw new Error(
      'Either birthPlace must be provided with foreignCountry being undefined or "IT", or foreignCountry must be provided (not "IT") without birthPlace'
    );
  }
}

/** A valid `Date`, or a `"YYYY-MM-DD"` string naming a real calendar day. */
function isValidBirthDate(birthDate: unknown): boolean {
  if (birthDate instanceof Date) {
    return !Number.isNaN(birthDate.getTime());
  }
  if (typeof birthDate !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(birthDate)) {
    return false;
  }
  // Reject days that don't exist, e.g. "2023-02-30"
  const date = new Date(`${birthDate}T00:00:00Z`);
  return (
    !Number.isNaN(date.getTime()) &&
    date.toISOString().slice(0, 10) === birthDate
  );
}

export type FiscalCodeData = {
  /** Local midnight of the birth day; see `birthDateISO` */
  birthDate?: Date;
  /** Birth date as `"YYYY-MM-DD"`, independent of the time zone */
  birthDateISO?: string;
  gender?: 'M' | 'F';
  firstName?: string;
  lastName?: string;
  birthPlace?: string;
  birthProvince?: string;
  foreignCountry?: string;
  /** Cadastral code of the birth place (municipality, or `Z###` country) */
  cadastralCode?: string;
};

export type ItalianMunicipality = [
  cadastralCode: string,
  name: string,
  province: string
];

export type BilingualMunicipality = [
  ...ItalianMunicipality,
  italianName: string,
  foreignName: string
];

export type Municipality = ItalianMunicipality | BilingualMunicipality;

/**
 * A name no longer in use: a suppressed municipality, or a former name of a
 * current one. Names are uppercase, as published by ANPR.
 */
export type HistoricalMunicipality = [
  cadastralCode: string,
  name: string,
  province: string,
  /** Last day the name was in use (YYYY-MM-DD) */
  ceasedOn: string
];

export type Country = [cadastralCode: string, alpha2: string];
