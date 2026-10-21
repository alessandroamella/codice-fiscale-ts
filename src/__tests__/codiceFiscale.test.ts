import { deepEqual, equal, throws } from 'node:assert/strict';
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
  getMunicipalCodeFromPlace,
  getMunicipalityByCode,
  isForeignPerson,
  isItalianPerson,
  isValidFiscalCode,
  normalizeOmocodia,
  normalizeString,
  validatePerson
} from '../index.ts';

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

    await it('strips apostrophes and hyphens (composite surnames)', async () => {
      equal(normalizeString("D'Août-Martin"), 'DAOUTMARTIN');
      equal(normalizeString("dell'Orto"), 'DELLORTO');
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

    await it('rejects structurally impossible but check-passing codes', async () => {
      // 'O' is not a valid month letter; build a code that nonetheless carries
      // the correct check character so only the semantic check can reject it.
      const badMonth = `RSSMRA80O01H501${calculateCheckCharacter('RSSMRA80O01H501')}`;
      equal(isValidFiscalCode(badMonth), false);

      // Day 00 is impossible.
      const badDay = `RSSMRA80A00H501${calculateCheckCharacter('RSSMRA80A00H501')}`;
      equal(isValidFiscalCode(badDay), false);
    });
  });

  await describe('omocodia', async () => {
    // Mario Rossi, 1 Jan 1980, Roma (M) -> RSSMRA80A01H501U
    const base = 'RSSMRA80A01H501';

    await it('normalizeOmocodia reverts substituted letters to digits', async () => {
      // Substitute the rightmost numeric char (place digit '1' -> 'M').
      equal(normalizeOmocodia('RSSMRA80A01H50M'), base);
      // A code with no substitutions is unchanged.
      equal(normalizeOmocodia(base), base);
    });

    await it('validates a first-level omocode', async () => {
      const omoBase = 'RSSMRA80A01H50M'; // last place digit substituted
      const omocode = omoBase + calculateCheckCharacter(omoBase);
      equal(isValidFiscalCode(omocode), true);
    });

    await it('decodes an omocode to the same data as the canonical code', async () => {
      const canonical = base + calculateCheckCharacter(base);
      const omoBase = 'RSSMRA80A01H50M';
      const omocode = omoBase + calculateCheckCharacter(omoBase);

      const a = await decodeFiscalCode(canonical);
      const b = await decodeFiscalCode(omocode);
      equal(b.birthDate!.getTime(), a.birthDate!.getTime());
      equal(b.gender, a.gender);
      equal(b.birthPlace, a.birthPlace);
    });

    await it('rejects a non-omocodia letter in a numeric slot', async () => {
      // 'A' is not a valid omocodia substitution letter.
      const broken = 'RSSMRA80A01H50A';
      equal(isValidFiscalCode(broken + calculateCheckCharacter(broken)), false);
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
          equal(
            (error as Error).message,
            'Valid birth date is required (a Date or a "YYYY-MM-DD" string)'
          );
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
            'Either birthPlace must be provided with foreignCountry being undefined or "IT", or foreignCountry must be provided (not "IT") without birthPlace'
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
            'Either birthPlace must be provided with foreignCountry being undefined or "IT", or foreignCountry must be provided (not "IT") without birthPlace'
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

  await describe('birth date and time zones', async () => {
    await it('accepts a YYYY-MM-DD string', async () => {
      equal(
        await calculateFiscalCode({ ...testPerson, birthDate: '1980-01-01' }),
        await calculateFiscalCode(testPerson)
      );
    });

    await it('is not shifted by time zones west of UTC', async () => {
      const originalTz = process.env['TZ'];
      process.env['TZ'] = 'America/New_York';
      try {
        // Precondition: a parsed ISO date is the previous day here
        equal(new Date('1980-01-01').getDate(), 31);

        const fiscalCode = await calculateFiscalCode({
          ...testPerson,
          birthDate: '1980-01-01'
        });
        equal(fiscalCode, 'RSSMRA80A01H501U');

        const decoded = await decodeFiscalCode(fiscalCode);
        equal(decoded.birthDateISO, '1980-01-01');
        equal(decoded.birthDate!.getDate(), 1);
      } finally {
        process.env['TZ'] = originalTz;
      }
    });

    await it('rejects malformed or impossible date strings', async () => {
      for (const birthDate of ['1980-1-1', '2023-02-30', 'not a date']) {
        throws(() => validatePerson({ ...testPerson, birthDate }), {
          message:
            'Valid birth date is required (a Date or a "YYYY-MM-DD" string)'
        });
      }
    });

    await it('decodes the birth date as an ISO string', async () => {
      const decoded = await decodeFiscalCode('RSSMRA80A41H501Y');
      equal(decoded.birthDateISO, '1980-01-01');
      equal(decoded.gender, 'F');
    });
  });

  await describe('historical municipalities', async () => {
    await it('calculates the code for a suppressed municipality', async () => {
      // Porretta Terme was merged into Alto Reno Terme in 2016
      const fiscalCode = await calculateFiscalCode({
        ...testPerson,
        birthPlace: 'Porretta Terme',
        birthProvince: undefined
      });
      equal(fiscalCode.substring(11, 15), 'A558');
    });

    await it('decodes a suppressed municipality to its last name', async () => {
      const base = 'RSSMRA80A01A558';
      const decoded = await decodeFiscalCode(
        base + calculateCheckCharacter(base)
      );
      equal(decoded.cadastralCode, 'A558');
      equal(decoded.birthPlace, 'PORRETTA TERME');
      equal(decoded.birthProvince, 'BO');
    });

    await it('resolves former names and historical codes', async () => {
      equal(await getMunicipalCodeFromPlace('Bagni della Porretta'), 'A558');
      equal(await getMunicipalCodeFromPlace('A558'), 'A558');
      deepEqual(await getMunicipalityByCode('A558'), [
        'A558',
        'PORRETTA TERME',
        'BO'
      ]);
    });

    await it('prefers current municipalities over historical names', async () => {
      deepEqual(await getMunicipalityByCode('H501'), ['H501', 'Roma', 'RM']);
    });

    await it('knows recently established municipalities', async () => {
      // Established in 2026 from the merger of Castegnero and Nanto
      equal(await getMunicipalCodeFromPlace('Castegnero Nanto'), 'M439');
    });
  });

  await describe('foreign birth places', async () => {
    await it('leaves foreignCountry out for unmapped country codes', async () => {
      const base = 'RSSMRA80A01Z999';
      const decoded = await decodeFiscalCode(
        base + calculateCheckCharacter(base)
      );
      equal(decoded.cadastralCode, 'Z999');
      equal(decoded.foreignCountry, undefined);
    });

    await it('accepts explicitly undefined optional fields', async () => {
      equal(
        isForeignPerson({ ...testForeignPerson, birthPlace: undefined }),
        true
      );
      equal(
        isItalianPerson({ ...testPerson, foreignCountry: undefined }),
        true
      );
    });
  });
});
