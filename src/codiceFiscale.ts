import { municipalities } from './municipalities.ts';
import type { FiscalCodeData, Person } from './types.ts';

// Cache for municipal codes lookups
let invertedMunicipalCodes: Record<
  string,
  { name: string; province: string }
> | null = null;

/**
 * Build the inverted municipal codes map for efficient lookups
 */
function buildInvertedMunicipalCodes(): Record<
  string,
  { name: string; province: string }
> {
  if (invertedMunicipalCodes) return invertedMunicipalCodes;

  const codes: Record<string, { name: string; province: string }> = {};
  municipalities.forEach((municipality) => {
    codes[municipality.code] = {
      name: municipality.name,
      province: municipality.province
    };
  });

  invertedMunicipalCodes = codes;
  return codes;
}

/**
 * Normalize a string by removing spaces, accents and special characters
 */
export function normalizeString(str: string): string {
  // Convert to uppercase
  str = str.toUpperCase();

  // Remove spaces
  str = str.replace(/\s/g, '');

  // Replace accented characters
  const accentMap: { [key: string]: string } = {
    À: 'A',
    Á: 'A',
    Â: 'A',
    Ã: 'A',
    Ä: 'A',
    Å: 'A',
    È: 'E',
    É: 'E',
    Ê: 'E',
    Ë: 'E',
    Ì: 'I',
    Í: 'I',
    Î: 'I',
    Ï: 'I',
    Ò: 'O',
    Ó: 'O',
    Ô: 'O',
    Õ: 'O',
    Ö: 'O',
    Ù: 'U',
    Ú: 'U',
    Û: 'U',
    Ü: 'U',
    Ñ: 'N',
    Ç: 'C'
  };

  for (const [accented, normal] of Object.entries(accentMap)) {
    str = str.replace(new RegExp(accented, 'g'), normal);
  }

  return str;
}

/**
 * Helper function to extract consonants
 */
export function extractConsonants(str: string): string {
  const consonants = str.toUpperCase().match(/[BCDFGHJKLMNPQRSTVWXYZ]/g);
  return consonants ? consonants.join('') : '';
}

/**
 * Helper function to extract vowels
 */
export function extractVowels(str: string): string {
  const vowels = str.toUpperCase().match(/[AEIOU]/g);
  return vowels ? vowels.join('') : '';
}

/**
 * Calculate the three letters for the last name
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
 * Calculate the three letters for the first name
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
 * Calculate the two digits for the year
 */
export function calculateYearCode(date: Date): string {
  const year = date.getFullYear().toString();
  // Take the last two digits of the year
  return year.slice(-2);
}

/**
 * Calculate the letter for the month
 */
export function calculateMonthCode(date: Date): string {
  const month = date.getMonth() + 1; // January is 0
  const lettersForMonth: { [key: number]: string } = {
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

  return lettersForMonth[month]!;
}

/**
 * Calculate the two digits for the day and gender
 */
export function calculateDayGenderCode(date: Date, gender: 'M' | 'F'): string {
  const day = date.getDate();

  // For women, add 40 to the day
  const codeValue = gender === 'F' ? day + 40 : day;

  // Format the number with leading zero if needed
  return codeValue.toString().padStart(2, '0');
}

/**
 * Get municipal code from place name without requiring province
 */
export function getMunicipalCodeFromPlace(place: string): string {
  const normalizedPlace = place.toUpperCase();

  // Find municipalities that match the place name
  const matches = municipalities.filter(
    (muni) => muni.name.toUpperCase() === normalizedPlace
  );

  if (matches.length === 1) {
    // If only one match, use it
    return matches[0]!.code;
  }
  if (matches.length > 1) {
    // If multiple matches with same name, get a list of options
    const options = matches.map((m) => `${m.name} (${m.province})`).join(', ');
    throw new Error(
      `Multiple municipalities found with name '${place}'. Please specify one of: ${options}`
    );
  }
  throw new Error(`Municipal code not found for place: ${place}`);
}

/**
 * Get country code from ISO Alpha2 country code
 * For foreign countries, the municipal code is 'Z' followed by the first three letters of the country code
 */
export function getCountryCode(countryCode: string): string {
  const normalizedCountryCode = countryCode.toUpperCase();
  // Format: Z + first 3 chars of country code, padded with 0 if needed
  return `Z${normalizedCountryCode.padEnd(3, '0')}`;
}

/**
 * Calculate the final check character
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
 * Find birth place by municipal code (reverse lookup)
 */
export function findBirthPlaceByCode(
  code: string
): { name: string; province: string } | undefined {
  // If it's a Z code (foreign country), it's handled separately via foreignCountry
  if (code.startsWith('Z')) {
    return undefined;
  }

  // Ensure inverted map is initialized
  const codes = buildInvertedMunicipalCodes();
  return codes[code];
}

/**
 * Decode the year from the fiscal code
 */
export function decodeYear(yearCode: string): number {
  const yearNum = Number.parseInt(yearCode);
  const currentYear = new Date().getFullYear();
  const century = Math.floor(currentYear / 100) * 100;

  // Determine the century
  if (yearNum > currentYear % 100) {
    return century - 100 + yearNum;
  }
  return century + yearNum;
}

/**
 * Decode the month from the fiscal code
 */
export function decodeMonth(monthCode: string): number {
  const monthMap: { [key: string]: number } = {
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

  return monthMap[monthCode] || 1;
}

/**
 * Decode the day from the fiscal code
 */
export function decodeDay(dayCode: number): number {
  // For women, subtract 40 from the day
  return dayCode > 40 ? dayCode - 40 : dayCode;
}

/**
 * Calculate the complete fiscal code
 */
export function calculateFiscalCode(person: Person): string {
  const lastNameCode = calculateLastNameCode(person.lastName);
  const firstNameCode = calculateFirstNameCode(person.firstName);
  const yearCode = calculateYearCode(person.birthDate);
  const monthCode = calculateMonthCode(person.birthDate);
  const dayGenderCode = calculateDayGenderCode(person.birthDate, person.gender);

  // Get the municipal code from the birthPlace or foreignCountry
  let municipalCode: string;
  if (person.birthPlace) {
    municipalCode = getMunicipalCodeFromPlace(person.birthPlace);
  } else if (person.foreignCountry) {
    municipalCode = getCountryCode(person.foreignCountry);
  } else {
    throw new Error('Either birthPlace or foreignCountry must be provided');
  }

  // Join the first 15 characters
  const baseCode = [
    lastNameCode,
    firstNameCode,
    yearCode,
    monthCode,
    dayGenderCode,
    municipalCode
  ].join('');

  // Calculate the check character
  const checkCharacter = calculateCheckCharacter(baseCode);

  // Return the complete fiscal code
  return baseCode + checkCharacter;
}

/**
 * Validates if a string is a valid fiscal code
 */
export function isValidFiscalCode(fiscalCode: string): boolean {
  // Normalize the fiscal code
  fiscalCode = fiscalCode.toUpperCase().trim();

  // Check length
  if (fiscalCode.length !== 16) {
    return false;
  }

  // Check format using regex
  const fiscalCodeRegex = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/;
  if (!fiscalCodeRegex.test(fiscalCode)) {
    return false;
  }

  // Check the check character
  const baseCode = fiscalCode.substring(0, 15);
  const checkCharacter = fiscalCode.substring(15, 16);
  const calculatedCheckCharacter = calculateCheckCharacter(baseCode);

  return checkCharacter === calculatedCheckCharacter;
}

/**
 * Decode a fiscal code to extract available information
 */
export function decodeFiscalCode(fiscalCode: string): FiscalCodeData {
  if (!isValidFiscalCode(fiscalCode)) {
    throw new Error('Invalid fiscal code format');
  }

  const yearCode = fiscalCode.substring(6, 8);
  const monthCode = fiscalCode.substring(8, 9);
  const dayGenderCode = Number.parseInt(fiscalCode.substring(9, 11));
  const municipalCode = fiscalCode.substring(11, 15);

  // Extract birth date components
  const year = decodeYear(yearCode);
  const month = decodeMonth(monthCode);
  const day = decodeDay(dayGenderCode);

  // Determine gender
  const gender: 'M' | 'F' = dayGenderCode > 40 ? 'F' : 'M';

  // Check if born outside Italy (Z code)
  if (municipalCode.startsWith('Z')) {
    const foreignCountry = municipalCode.substring(1);
    return {
      birthDate: new Date(year, month - 1, day),
      gender,
      foreignCountry
    };
  }
  // Find birth place by municipal code (reverse lookup)
  const birthPlaceInfo = findBirthPlaceByCode(municipalCode);

  return {
    birthDate: new Date(year, month - 1, day),
    gender,
    birthPlace: birthPlaceInfo?.name,
    birthProvince: birthPlaceInfo?.province
  };
}
