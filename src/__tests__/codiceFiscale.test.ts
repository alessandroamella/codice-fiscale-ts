import { equal } from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  calculateCheckCharacter,
  calculateDayGenderCode,
  calculateFirstNameCode,
  calculateFiscalCode,
  calculateLastNameCode,
  calculateMonthCode,
  calculateYearCode,
  decodeFiscalCode,
  extractConsonants,
  extractVowels,
  isValidFiscalCode,
  normalizeString
} from '../index.ts';
import { isForeignPerson, isItalianPerson, validatePerson } from '../types.ts';

// Test data
const testPerson = {
  firstName: 'Mario',
  lastName: 'Rossi',
  birthDate: new Date(1980, 0, 1), // January 1, 1980
  gender: 'M' as const,
  birthPlace: 'ROMA',
  birthProvince: 'RM'
};

// Test foreign person
const testForeignPerson = {
  firstName: 'John',
  lastName: 'Smith',
  birthDate: new Date(1980, 0, 1),
  gender: 'M' as const,
  foreignCountry: 'US'
};

await describe('Codice Fiscale Functions', async () => {
  await describe('normalizeString', async () => {
    await it('removes spaces and converts to uppercase', async () => {
      equal(normalizeString('mario rossi'), 'MARIOROSSI');
    });

    await it('replaces accented characters', async () => {
      equal(normalizeString('mArìò Rössì'), 'MARIOROSSI');
    });
  });

  await describe('extractConsonants', async () => {
    await it('extracts only consonants from a string', async () => {
      equal(extractConsonants('Mario'), 'MR');
      equal(extractConsonants('ROSSI'), 'RSS');
      equal(extractConsonants('AEIOU'), '');
    });
  });

  await describe('extractVowels', async () => {
    await it('extracts only vowels from a string', async () => {
      equal(extractVowels('Mario'), 'AIO');
      equal(extractVowels('ROSSI'), 'OI');
      equal(extractVowels('BCDFG'), '');
    });
  });

  await describe('calculateLastNameCode', async () => {
    await it('returns correct code for surname with 3+ consonants', async () => {
      equal(calculateLastNameCode('Rossi'), 'RSS');
    });

    await it('includes vowels when not enough consonants', async () => {
      equal(calculateLastNameCode('Rao'), 'RAO');
    });

    await it('pads with X when not enough letters', async () => {
      equal(calculateLastNameCode('Ra'), 'RAX');
      equal(calculateLastNameCode('R'), 'RXX');
    });
  });

  await describe('calculateFirstNameCode', async () => {
    await it('uses first, third and fourth consonants when 4+ consonants', async () => {
      equal(calculateFirstNameCode('Francesco'), 'FNC');
    });

    await it('uses all consonants when fewer than 4 consonants', async () => {
      equal(calculateFirstNameCode('Mario'), 'MRA');
      equal(calculateFirstNameCode('Maria'), 'MRA');
    });

    await it('includes vowels when not enough consonants', async () => {
      equal(calculateFirstNameCode('Lia'), 'LIA');
    });

    await it('pads with X when not enough letters', async () => {
      equal(calculateFirstNameCode('Lu'), 'LUX');
      equal(calculateFirstNameCode('L'), 'LXX');
    });
  });

  await describe('calculateYearCode', async () => {
    await it('returns last two digits of the year', async () => {
      equal(calculateYearCode(new Date(1980, 0, 1)), '80');
      equal(calculateYearCode(new Date(2023, 0, 1)), '23');
    });
  });

  await describe('calculateMonthCode', async () => {
    await it('returns correct letter for each month', async () => {
      equal(calculateMonthCode(new Date(2023, 0, 1)), 'A'); // January
      equal(calculateMonthCode(new Date(2023, 1, 1)), 'B'); // February
      equal(calculateMonthCode(new Date(2023, 5, 1)), 'H'); // June
      equal(calculateMonthCode(new Date(2023, 11, 1)), 'T'); // December
    });
  });

  await describe('calculateDayGenderCode', async () => {
    await it('returns day number for males', async () => {
      equal(calculateDayGenderCode(new Date(1980, 0, 1), 'M'), '01');
      equal(calculateDayGenderCode(new Date(1980, 0, 15), 'M'), '15');
    });

    await it('returns day number + 40 for females', async () => {
      equal(calculateDayGenderCode(new Date(1980, 0, 1), 'F'), '41');
      equal(calculateDayGenderCode(new Date(1980, 0, 15), 'F'), '55');
    });
  });

  await describe('calculateCheckCharacter', async () => {
    await it('returns the correct check character', async () => {
      // Use a verified example to test the check character
      equal(calculateCheckCharacter('RSSMRA80A01H501'), 'U');
    });
  });

  await describe('calculateFiscalCode', async () => {
    await it('returns the complete fiscal code', async () => {
      const fiscalCode = await calculateFiscalCode(testPerson);
      equal(fiscalCode.length, 16);
      equal(fiscalCode.substring(0, 6), 'RSSMRA');
      equal(fiscalCode.substring(6, 8), '80');
      equal(fiscalCode.substring(8, 9), 'A');
      equal(fiscalCode.substring(9, 11), '01');
    });
  });

  await describe('isValidFiscalCode', async () => {
    await it('validates correct fiscal codes', async () => {
      const fiscalCode = await calculateFiscalCode(testPerson);
      equal(isValidFiscalCode(fiscalCode), true);
    });

    await it('rejects invalid fiscal codes', async () => {
      equal(isValidFiscalCode('INVALID'), false);
      equal(isValidFiscalCode('RSSMRA80A01H501X'), false); // Wrong check character
      equal(isValidFiscalCode('RSSMRA80A01H501'), false); // Too short
    });
  });

  await describe('decodeFiscalCode', async () => {
    await it('decodes a valid fiscal code', async () => {
      const fiscalCode = await calculateFiscalCode(testPerson);
      const decoded = await decodeFiscalCode(fiscalCode);

      equal(decoded.gender, 'M');
      equal(decoded.birthDate!.getFullYear(), 1980);
      equal(decoded.birthDate!.getMonth(), 0); // January
      equal(decoded.birthDate!.getDate(), 1);
    });

    await it('decodes a valid fiscal code for a foreign person', async () => {
      const fiscalCode = await calculateFiscalCode(testForeignPerson);
      const decoded = await decodeFiscalCode(fiscalCode);

      equal(decoded.gender, 'M');
      equal(decoded.birthDate!.getFullYear(), 1980);
      equal(decoded.birthDate!.getMonth(), 0); // January
      equal(decoded.birthDate!.getDate(), 1);
      equal(decoded.foreignCountry, 'US'); // Should extract the foreign country code
      equal(decoded.birthPlace, undefined); // Should not have a birth place
    });

    await it('throws error for invalid fiscal code', async () => {
      try {
        await decodeFiscalCode('INVALID');
        // Should not reach here
        equal(true, false, 'Expected to throw error');
      } catch (error) {
        equal((error as Error).message, 'Invalid fiscal code format');
      }
    });
  });

  await describe('Type validation functions', async () => {
    await describe('isItalianPerson', async () => {
      await it('correctly identifies an Italian person', async () => {
        equal(isItalianPerson(testPerson), true);
        equal(isItalianPerson(testForeignPerson), false);
      });
    });

    await describe('isForeignPerson', async () => {
      await it('correctly identifies a Foreign person', async () => {
        equal(isForeignPerson(testForeignPerson), true);
        equal(isForeignPerson(testPerson), false);
      });
    });

    await describe('validatePerson', async () => {
      await it('validates correct Italian person', async () => {
        // Should not throw
        validatePerson(testPerson);
        equal(true, true); // Just to have an assertion
      });

      await it('validates correct Foreign person', async () => {
        // Should not throw
        validatePerson(testForeignPerson);
        equal(true, true); // Just to have an assertion
      });

      await it('throws error for missing firstName', async () => {
        try {
          validatePerson({
            ...testPerson,
            firstName: ''
          });
          equal(true, false, 'Expected to throw error');
        } catch (error) {
          equal((error as Error).message, 'First name is required');
        }
      });

      await it('throws error for missing lastName', async () => {
        try {
          validatePerson({
            ...testPerson,
            lastName: ''
          });
          equal(true, false, 'Expected to throw error');
        } catch (error) {
          equal((error as Error).message, 'Last name is required');
        }
      });

      await it('throws error for invalid birthDate', async () => {
        try {
          validatePerson({
            ...testPerson,
            birthDate: new Date('invalid-date')
          });
          equal(true, false, 'Expected to throw error');
        } catch (error) {
          equal((error as Error).message, 'Valid birth date is required');
        }
      });

      await it('throws error for invalid gender', async () => {
        try {
          validatePerson({
            ...testPerson,
            gender: 'X' as 'M' | 'F' // Type assertion for test purposes
          });
          equal(true, false, 'Expected to throw error');
        } catch (error) {
          equal((error as Error).message, 'Gender must be either "M" or "F"');
        }
      });

      await it('throws error when both birthPlace and foreignCountry are provided', async () => {
        try {
          // Create object with both birthPlace and foreignCountry for testing
          const invalidPerson = {
            firstName: 'Mario',
            lastName: 'Rossi',
            birthDate: new Date(1980, 0, 1),
            gender: 'M' as const,
            birthPlace: 'ROMA',
            foreignCountry: 'US'
          };
          // Use type assertion for test purposes
          validatePerson(
            invalidPerson as unknown as import('../types.ts').Person
          );
          equal(true, false, 'Expected to throw error');
        } catch (error) {
          equal(
            (error as Error).message,
            'Either birthPlace or foreignCountry must be provided, but not both'
          );
        }
      });

      await it('throws error when neither birthPlace nor foreignCountry is provided', async () => {
        try {
          // Create object without birthPlace or foreignCountry
          const invalidPerson = {
            firstName: 'Mario',
            lastName: 'Rossi',
            birthDate: new Date(1980, 0, 1),
            gender: 'M' as const
          };
          // Use type assertion for test purposes
          validatePerson(
            invalidPerson as unknown as import('../types.ts').Person
          );
          equal(true, false, 'Expected to throw error');
        } catch (error) {
          equal(
            (error as Error).message,
            'Either birthPlace or foreignCountry must be provided, but not both'
          );
        }
      });
    });
  });

  await describe('calculateFiscalCode with validation', async () => {
    await it('throws error for invalid person data', async () => {
      try {
        await calculateFiscalCode({
          ...testPerson,
          firstName: '' // Invalid data
        });
        equal(true, false, 'Expected to throw error');
      } catch (error) {
        equal((error as Error).message, 'First name is required');
      }
    });

    await it('calculates fiscal code for valid Italian person', async () => {
      const fiscalCode = await calculateFiscalCode(testPerson);
      equal(fiscalCode.length, 16);
    });

    await it('calculates fiscal code for valid Foreign person', async () => {
      const fiscalCode = await calculateFiscalCode(testForeignPerson);
      equal(fiscalCode.length, 16);
    });
  });
});
