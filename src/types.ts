export interface BasePerson {
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: 'M' | 'F';
}

export interface ItalianPerson extends BasePerson {
  birthPlace: string;
  foreignCountry?: never;
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
    !('foreignCountry' in person)
  );
}

/**
 * Type guard to check if a person is a foreign person
 */
export function isForeignPerson(person: Person): person is ForeignPerson {
  return (
    'foreignCountry' in person &&
    typeof person.foreignCountry === 'string' &&
    person.foreignCountry.trim() !== '' &&
    !('birthPlace' in person)
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

  if (
    !person.birthDate ||
    !(person.birthDate instanceof Date) ||
    Number.isNaN(person.birthDate.getTime())
  )
    throw new Error('Valid birth date is required');

  if (!person.gender || !['M', 'F'].includes(person.gender))
    throw new Error('Gender must be either "M" or "F"');

  // Check that either birthPlace or foreignCountry is provided but not both
  if (isItalianPerson(person)) {
    // Additional validation for Italian person if needed
  } else if (isForeignPerson(person)) {
    // Additional validation for Foreign person if needed
  } else {
    throw new Error(
      'Either birthPlace or foreignCountry must be provided, but not both'
    );
  }
}

export type FiscalCodeData = {
  birthDate?: Date;
  gender?: 'M' | 'F';
  firstName?: string;
  lastName?: string;
  birthPlace?: string;
  birthProvince?: string;
  foreignCountry?: string;
};

export type ItalianMunicipality = [
  code: string,
  name: string,
  province: string
];

export type BilingualMunicipality = [
  ...ItalianMunicipality,
  italianName: string,
  foreignName: string
];

export type Municipality = ItalianMunicipality | BilingualMunicipality;

export type Country = [code: string, name: string];
