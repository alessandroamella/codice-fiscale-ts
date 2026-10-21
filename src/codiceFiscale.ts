import type { FiscalCodeData, Municipality, Person } from './types.ts';
import { isForeignPerson, isItalianPerson, validatePerson } from './types.ts';

/**
 * Gets municipality information by code. Codes of suppressed municipalities
 * are resolved too, to the last name they had (uppercase, as published by
 * ANPR), since people born there still carry them in their fiscal code.
 * @param code - The cadastral code to lookup
 * @returns Municipality data
 * @example
 * await getMunicipalityByCode("H501"); // Returns ["H501", "Roma", "RM"]
 * await getMunicipalityByCode("A558"); // Returns ["A558", "PORRETTA TERME", "BO"]
 * @throws If the municipality code is invalid
 */
export async function getMunicipalityByCode(
  code: string
): Promise<Municipality> {
  // Dynamically import municipalities data
  const { municipalities } = await import('./data/municipalities.ts');

  // Find municipality by code
  const municipality = municipalities.find(
    ([cadastralCode]) => cadastralCode === code
  );

  if (municipality) {
    return municipality;
  }

  // Fall back to suppressed municipalities (sorted most recent name first)
  const { historicalMunicipalities } = await import(
    './data/historicalMunicipalities.ts'
  );
  const historical = historicalMunicipalities.find(
    ([cadastralCode]) => cadastralCode === code
  );

  if (!historical) {
    throw new Error(`Invalid municipality code: ${code}`);
  }

  const [cadastralCode, name, province] = historical;
  return [cadastralCode, name, province];
}

/**
 * Normalize a string by removing spaces, accents and special characters
 * @param str - The string to normalize
 * @returns Normalized uppercase string containing only the letters A-Z
 * @example
 * normalizeString("D'Août-Martin"); // Returns "DAOUTMARTIN"
 */
export function normalizeString(str: string): string {
  return (
    str
      .toUpperCase()
      // Decompose accented characters into base letter + combining mark...
      .normalize('NFD')
      // ...then strip the combining marks (covers every Latin accent generically)
      .replace(/\p{M}/gu, '')
      // Drop anything that is not a plain A-Z letter (spaces, apostrophes,
      // hyphens) so composite surnames are treated as a single word.
      .replace(/[^A-Z]/g, '')
  );
}

/**
 * Helper function to extract consonants from a string
 * @param str - The string to extract consonants from
 * @returns A string containing only the consonants
 * @example
 * extractConsonants("Hello"); // Returns "HLL"
 */
export function extractConsonants(str: string): string {
  const consonants = str.toUpperCase().match(/[BCDFGHJKLMNPQRSTVWXYZ]/g);
  return consonants ? consonants.join('') : '';
}

/**
 * Helper function to extract vowels from a string
 * @param str - The string to extract vowels from
 * @returns A string containing only the vowels
 * @example
 * extractVowels("Hello"); // Returns "EO"
 */
export function extractVowels(str: string): string {
  const vowels = str.toUpperCase().match(/[AEIOU]/g);
  return vowels ? vowels.join('') : '';
}

/**
 * Calculate the three letters code for a last name according to fiscal code rules
 * @param lastName - The last name to encode
 * @returns Three-letter code representing the last name
 * @example
 * calculateLastNameCode("Rossi"); // Returns "RSS"
 * calculateLastNameCode("Bo"); // Returns "BOX"
 */
export function calculateLastNameCode(lastName: string): string {
  // Normalize and convert to uppercase
  lastName = normalizeString(lastName);

  // Extract consonants
  const consonants = extractConsonants(lastName);
  // Extract vowels
  const vowels = extractVowels(lastName);

  let result = '';

  // Add consonants first
  result += consonants.slice(0, 3);

  // If there aren't enough consonants, add vowels
  if (result.length < 3) {
    result += vowels.slice(0, 3 - result.length);
  }

  // If there still aren't enough characters, add 'X'
  while (result.length < 3) {
    result += 'X';
  }

  return result;
}

/**
 * Calculate the three letters code for a first name according to fiscal code rules
 * @param firstName - The first name to encode
 * @returns Three-letter code representing the first name
 * @example
 * calculateFirstNameCode("Mario"); // Returns "MRA"
 * calculateFirstNameCode("Luca"); // Returns "LCU"
 */
export function calculateFirstNameCode(firstName: string): string {
  // Normalize and convert to uppercase
  firstName = normalizeString(firstName);

  // Extract consonants
  const consonants = extractConsonants(firstName);
  // Extract vowels
  const vowels = extractVowels(firstName);

  let result = '';

  // If there are at least 4 consonants, take the first, third and fourth
  if (consonants.length >= 4) {
    result = consonants[0]! + consonants[2]! + consonants[3]!;
  }

  // Otherwise take all available consonants
  else {
    result = consonants;

    // If there aren't enough consonants, add vowels
    if (result.length < 3) {
      result += vowels.slice(0, 3 - result.length);
    }

    // If there still aren't enough characters, add 'X'
    while (result.length < 3) {
      result += 'X';
    }
  }

  return result;
}

/**
 * Calculate the two-digit year code from a date
 * @param date - The date to extract the year from
 * @returns Two-digit year code (last two digits of the year)
 * @example
 * calculateYearCode(new Date(1990, 0, 1)); // Returns "90"
 */
export function calculateYearCode(date: Date): string {
  const year = date.getFullYear().toString();
  // Take the last two digits of the year
  return year.slice(-2);
}

/**
 * Calculate the letter code for the month according to fiscal code rules
 * @param date - The date to extract the month from
 * @returns Single letter representing the month
 * @example
 * calculateMonthCode(new Date(1990, 0, 1)); // Returns "A" (for January)
 */
export function calculateMonthCode(date: Date): string {
  const month = date.getMonth() + 1; // January is 0
  return MONTH_NUMBER_TO_LETTER[month]!;
}

/** Month number (1-12) -> fiscal code letter. */
const MONTH_NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'A', // January
  2: 'B', // February
  3: 'C', // March
  4: 'D', // April
  5: 'E', // May
  6: 'H', // June
  7: 'L', // July
  8: 'M', // August
  9: 'P', // September
  10: 'R', // October
  11: 'S', // November
  12: 'T' // December
};

/** Fiscal code letter -> month number (1-12). */
const MONTH_LETTER_TO_NUMBER: { [key: string]: number } = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  H: 6,
  L: 7,
  M: 8,
  P: 9,
  R: 10,
  S: 11,
  T: 12
};

/**
 * Omocodia substitution map (DM 23/12/1976, art. 6): when two people would
 * otherwise share a fiscal code, the numeric characters are replaced from the
 * rightmost, one at a time, with the corresponding letter below.
 * @see https://it.wikipedia.org/wiki/Omocodia
 */
const OMOCODIA_LETTER_TO_DIGIT: { [key: string]: string } = {
  L: '0',
  M: '1',
  N: '2',
  P: '3',
  Q: '4',
  R: '5',
  S: '6',
  T: '7',
  U: '8',
  V: '9'
};

/**
 * Indices (0-based) of the seven numeric characters in the 15-char base code
 * that may be substituted by letters in case of omocodia: the two year digits,
 * the two day digits and the three place-code digits.
 */
const OMOCODIA_POSITIONS = [6, 7, 9, 10, 12, 13, 14];

/**
 * Restore the canonical (all-numeric) form of a fiscal code by reverting any
 * omocodia letter substitutions back to their original digits.
 * @param fiscalCode - A fiscal code, possibly carrying omocodia substitutions
 * @returns The fiscal code with numeric positions normalized back to digits
 * @example
 * normalizeOmocodia("RSSMRA80A01H50MX"); // Returns "RSSMRA80A01H501X"
 */
export function normalizeOmocodia(fiscalCode: string): string {
  const chars = fiscalCode.toUpperCase().split('');
  for (const pos of OMOCODIA_POSITIONS) {
    const replacement = OMOCODIA_LETTER_TO_DIGIT[chars[pos]!];
    if (replacement) {
      chars[pos] = replacement;
    }
  }
  return chars.join('');
}

/**
 * Calculate the day and gender code according to fiscal code rules
 * @param date - The date to extract the day from
 * @param gender - The gender ('M' for male, 'F' for female)
 * @returns Two-digit code representing day and gender (for females, 40 is added to the day)
 * @example
 * calculateDayGenderCode(new Date(1990, 0, 15), 'M'); // Returns "15"
 * calculateDayGenderCode(new Date(1990, 0, 15), 'F'); // Returns "55"
 */
export function calculateDayGenderCode(date: Date, gender: 'M' | 'F'): string {
  const day = date.getDate();

  // For women, add 40 to the day
  const codeValue = gender === 'F' ? day + 40 : day;

  // Format the number with leading zero if needed
  return codeValue.toString().padStart(2, '0');
}

/**
 * Get cadastral code from place name or cadastral code
 * @param place - The name of the municipality or its cadastral code. For
 * bilingual municipalities either language variant is accepted. Suppressed
 * municipalities and former names are accepted too, when no current
 * municipality matches.
 * @param province - Optional province (e.g. "BZ") used to disambiguate when
 * several municipalities share the same name
 * @returns The cadastral code for the municipality
 * @example
 * await getMunicipalCodeFromPlace("ROMA"); // Returns "H501"
 * await getMunicipalCodeFromPlace("H501"); // Returns "H501"
 * await getMunicipalCodeFromPlace("Peglio", "PU"); // Disambiguates by province
 * await getMunicipalCodeFromPlace("Porretta Terme"); // Returns "A558" (suppressed in 2016)
 * @throws If the place is not found
 */
export async function getMunicipalCodeFromPlace(
  place: string,
  province?: string
): Promise<string> {
  // Dynamically import municipalities data
  const { municipalities } = await import('./data/municipalities.ts');
  const normalizedPlace = normalizeString(place);
  const code = place.trim().toUpperCase();

  // If the place is exactly 4 characters, it might be a cadastral code itself
  const isCode = (cadastralCode: string) => cadastralCode === code;
  if (code.length === 4 && municipalities.some(([c]) => isCode(c))) {
    return code;
  }

  // Match by any name variant (Italian name, plus both names if bilingual).
  const matches = municipalities.filter((municipality) =>
    municipality
      .slice(1)
      .filter((_, index) => index !== 1) // skip the province column
      .some((name) => normalizeString(name) === normalizedPlace)
  );

  if (matches.length > 0) {
    return pickByProvince(matches, province)[0];
  }

  // No current municipality matches: try suppressed ones and former names
  const { historicalMunicipalities } = await import(
    './data/historicalMunicipalities.ts'
  );

  if (code.length === 4 && historicalMunicipalities.some(([c]) => isCode(c))) {
    return code;
  }

  const historicalMatches = historicalMunicipalities.filter(
    ([, name]) => normalizeString(name) === normalizedPlace
  );

  if (historicalMatches.length > 0) {
    return pickByProvince(historicalMatches, province)[0];
  }

  throw new Error(`Invalid birth place: ${place}`);
}

/**
 * When a name is ambiguous, prefer the match in the requested province
 * (if any), otherwise the first match.
 */
function pickByProvince<T extends [string, string, string, ...string[]]>(
  matches: T[],
  province: string | undefined
): T {
  const byProvince =
    province &&
    matches.find(([, , prov]) => prov.toUpperCase() === province.toUpperCase());
  return byProvince || matches[0]!;
}

/**
 * Get the country code from ISO Alpha2 country code
 * @param countryCode - The ISO Alpha2 country code (e.g., "US", "FR")
 * @returns The cadastral code for the country (Z followed by three digits)
 * @example
 * await getCountryCode("US"); // Returns "Z404"
 * @throws If the country code is invalid
 */
export async function getCountryCode(countryCode: string): Promise<string> {
  // Dynamically import countries data
  const { countries } = await import('./data/countries.ts');
  const country = countries.find(([, alpha2]) => alpha2 === countryCode);

  if (!country) {
    throw new Error(`Invalid country code: ${countryCode}`);
  }

  return country[0]!;
}

/**
 * Calculate the check character (last character) of the fiscal code
 * @param code - The first 15 characters of the fiscal code
 * @returns The check character
 * @example
 * calculateCheckCharacter("RSSMRA90A15H501"); // Returns a check character like "X"
 */
export function calculateCheckCharacter(code: string): string {
  const evenValues: { [key: string]: number } = {
    '0': 0,
    A: 0,
    '1': 1,
    B: 1,
    '2': 2,
    C: 2,
    '3': 3,
    D: 3,
    '4': 4,
    E: 4,
    '5': 5,
    F: 5,
    '6': 6,
    G: 6,
    '7': 7,
    H: 7,
    '8': 8,
    I: 8,
    '9': 9,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 14,
    P: 15,
    Q: 16,
    R: 17,
    S: 18,
    T: 19,
    U: 20,
    V: 21,
    W: 22,
    X: 23,
    Y: 24,
    Z: 25
  };

  const oddValues: { [key: string]: number } = {
    '0': 1,
    A: 1,
    '1': 0,
    B: 0,
    '2': 5,
    C: 5,
    '3': 7,
    D: 7,
    '4': 9,
    E: 9,
    '5': 13,
    F: 13,
    '6': 15,
    G: 15,
    '7': 17,
    H: 17,
    '8': 19,
    I: 19,
    '9': 21,
    J: 21,
    K: 2,
    L: 4,
    M: 18,
    N: 20,
    O: 11,
    P: 3,
    Q: 6,
    R: 8,
    S: 12,
    T: 14,
    U: 16,
    V: 10,
    W: 22,
    X: 25,
    Y: 24,
    Z: 23
  };

  let sum = 0;

  // Loop through the characters of the code
  for (let i = 0; i < code.length; i++) {
    const char = code[i]!;

    // Odd position (remembering that in JavaScript indices start from 0)
    if (i % 2 === 0) {
      sum += oddValues[char]!;
    }
    // Even position
    else {
      sum += evenValues[char]!;
    }
  }

  // Calculate the remainder of the division by 26
  const remainder = sum % 26;

  // Convert the remainder to a letter
  const checkLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return checkLetters[remainder]!;
}

/**
 * Decode the birth year from the fiscal code's year component
 * @param yearCode - Two-digit year code from the fiscal code
 * @returns Full year (4 digits)
 * @example
 * decodeYear("90"); // Returns 1990 (or could be 2090 depending on current year)
 */
export function decodeYear(
  yearCode: string,
  referenceYear: number = new Date().getFullYear()
): number {
  const yearNum = Number.parseInt(yearCode, 10);
  const century = Math.floor(referenceYear / 100) * 100;

  // A two-digit year is inherently ambiguous (e.g. '07' is both 1907 and
  // 2007 — see "Omocodia su anni di nascita diversi" on Wikipedia). We assume
  // the most recent year that is not in the future relative to referenceYear.
  if (yearNum > referenceYear % 100) {
    return century - 100 + yearNum;
  }
  return century + yearNum;
}

/**
 * Decode the birth month from the fiscal code's month component
 * @param monthCode - One letter month code from the fiscal code
 * @returns Month number (1-12)
 * @example
 * decodeMonth("A"); // Returns 1 (January)
 */
export function decodeMonth(monthCode: string): number {
  const month = MONTH_LETTER_TO_NUMBER[monthCode.toUpperCase()];
  if (!month) {
    throw new Error(`Invalid month code: ${monthCode}`);
  }
  return month;
}

/**
 * Decode the birth day from the fiscal code's day component
 * @param dayCode - Two-digit day code from the fiscal code
 * @returns Day of month (1-31)
 * @example
 * decodeDay(15); // Returns 15
 * decodeDay(55); // Returns 15 (for females)
 */
export function decodeDay(dayCode: number): number {
  // For women, subtract 40 from the day
  return dayCode > 40 ? dayCode - 40 : dayCode;
}

/**
 * Calculate the complete fiscal code for a person
 * @param person - Object containing person's data. `birthDate` can be a
 * `"YYYY-MM-DD"` string (recommended: it is not affected by time zones) or a
 * `Date`, whose local date is used.
 * @returns The complete 16-character fiscal code
 * @example
 * await calculateFiscalCode(\{
 *   firstName: "Mario",
 *   lastName: "Rossi",
 *   gender: "M",
 *   birthDate: "1990-01-15",
 *   birthPlace: "ROMA"
 * \}); // Returns "RSSMRA90A15H501K"
 * @throws If the person data is invalid
 */
export async function calculateFiscalCode(person: Person): Promise<string> {
  // Validate person object
  validatePerson(person);

  const birthDate = toLocalDate(person.birthDate);
  const lastName = calculateLastNameCode(person.lastName);
  const firstName = calculateFirstNameCode(person.firstName);
  const yearCode = calculateYearCode(birthDate);
  const monthCode = calculateMonthCode(birthDate);
  const dayGenderCode = calculateDayGenderCode(birthDate, person.gender);

  let placeCode: string;

  if (isForeignPerson(person)) {
    placeCode = await getCountryCode(person.foreignCountry);
  } else if (isItalianPerson(person)) {
    placeCode = await getMunicipalCodeFromPlace(
      person.birthPlace,
      person.birthProvince
    );
  } else {
    // This should never happen because validatePerson would throw first
    throw new Error(
      'Either birthPlace must be provided with foreignCountry being undefined or "IT", or foreignCountry must be provided (not "IT") without birthPlace'
    );
  }

  const partialCode =
    lastName + firstName + yearCode + monthCode + dayGenderCode + placeCode;
  const checkChar = calculateCheckCharacter(partialCode);

  return partialCode + checkChar;
}

/**
 * A `"YYYY-MM-DD"` string is a calendar date: turn it into local midnight, so
 * that the local getters used by the code calculators read it back unchanged.
 * Parsing it with `new Date()` would yield UTC midnight instead, which is the
 * previous day in time zones west of UTC.
 */
function toLocalDate(birthDate: Date | string): Date {
  if (birthDate instanceof Date) {
    return birthDate;
  }
  const [year, month, day] = birthDate.split('-').map(Number);
  const date = new Date(2000, month! - 1, day!);
  date.setFullYear(year!);
  return date;
}

/**
 * Validates if a string is a valid fiscal code
 * @param fiscalCode - The fiscal code to validate
 * @returns True if the fiscal code is valid, false otherwise
 * @example
 * isValidFiscalCode("RSSMRA90A15H501X"); // Returns true if valid
 * isValidFiscalCode("INVALID"); // Returns false
 */
export function isValidFiscalCode(fiscalCode: string): boolean {
  // Normalize the fiscal code
  fiscalCode = fiscalCode.toUpperCase().trim();

  // Check length
  if (fiscalCode.length !== 16) {
    return false;
  }

  // Structural check: the six name letters and the three single-letter slots
  // (month, place prefix, check char) must be letters; the seven numeric slots
  // may hold either a digit or an omocodia letter.
  const fiscalCodeRegex =
    /^[A-Z]{6}[A-Z\d]{2}[A-Z][A-Z\d]{2}[A-Z][A-Z\d]{3}[A-Z]$/;
  if (!fiscalCodeRegex.test(fiscalCode)) {
    return false;
  }

  // The check character is computed over the literal code, including any
  // omocodia letters, so verify it before normalizing them away.
  const baseCode = fiscalCode.substring(0, 15);
  if (fiscalCode[15] !== calculateCheckCharacter(baseCode)) {
    return false;
  }

  // Revert omocodia substitutions and verify the numeric slots are now digits;
  // this rejects stray letters that are not valid omocodia substitutions.
  const normalized = normalizeOmocodia(fiscalCode);
  if (!/^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/.test(normalized)) {
    return false;
  }

  // Semantic checks: the month letter must be one of the twelve valid ones...
  if (!(normalized[8]! in MONTH_LETTER_TO_NUMBER)) {
    return false;
  }

  // ...and the day must be in 01-31 (males) or 41-71 (females).
  const day = decodeDay(Number.parseInt(normalized.substring(9, 11), 10));
  if (day < 1 || day > 31) {
    return false;
  }

  return true;
}

/**
 * Decode a fiscal code to extract available information
 * @param fiscalCode - The fiscal code to decode
 * @returns Object containing decoded information (birth date, gender, place).
 * `birthDate` is local midnight of the birth day; prefer `birthDateISO`
 * (`"YYYY-MM-DD"`), which does not depend on the time zone. For people born
 * abroad, `foreignCountry` is left out when the country code is not mapped to
 * an ISO code (e.g. former states); `cadastralCode` is always set.
 * @example
 * await decodeFiscalCode("RSSMRA90A15H501K");
 * // Returns \{
 * //   birthDate: new Date(1990, 0, 15),
 * //   birthDateISO: "1990-01-15",
 * //   gender: "M",
 * //   cadastralCode: "H501",
 * //   birthPlace: "Roma",
 * //   birthProvince: "RM"
 * // \}
 * @throws If the fiscal code is invalid, or its Italian municipality code
 * is unknown
 */
export async function decodeFiscalCode(
  fiscalCode: string
): Promise<FiscalCodeData> {
  if (!isValidFiscalCode(fiscalCode)) {
    throw new Error('Invalid fiscal code format');
  }

  // Revert any omocodia substitutions so the numeric components parse back.
  const normalized = normalizeOmocodia(fiscalCode.toUpperCase().trim());

  const yearCode = normalized.substring(6, 8);
  const monthCode = normalized.substring(8, 9);
  const dayGenderCode = Number.parseInt(normalized.substring(9, 11), 10);
  const municipalCode = normalized.substring(11, 15);

  // Extract birth date components
  const year = decodeYear(yearCode);
  const month = decodeMonth(monthCode);
  const day = decodeDay(dayGenderCode);

  // Determine gender
  const gender: 'M' | 'F' = dayGenderCode > 40 ? 'F' : 'M';

  // Create common person data
  const pad = (n: number) => n.toString().padStart(2, '0');
  const personData: FiscalCodeData = {
    birthDate: toLocalDate(`${year}-${pad(month)}-${pad(day)}`),
    birthDateISO: `${year}-${pad(month)}-${pad(day)}`,
    gender,
    cadastralCode: municipalCode
  };

  // Check if born outside Italy (Z code)
  if (municipalCode.startsWith('Z')) {
    // Need to look up the ISO country code from the cadastral code
    const { countries } = await import('./data/countries.ts');
    const countryEntry = countries.find((c) => c[0] === municipalCode);

    return countryEntry
      ? { ...personData, foreignCountry: countryEntry[1] }
      : personData;
  }
  // Find birth place by cadastral code (reverse lookup)
  const birthPlaceInfo = await getMunicipalityByCode(municipalCode);

  return {
    ...personData,
    birthPlace: birthPlaceInfo[1],
    birthProvince: birthPlaceInfo[2]
  };
}
