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

// Test data
const testPerson = {
  firstName: 'Mario',
  lastName: 'Rossi',
  birthDate: new Date(1980, 0, 1), // January 1, 1980
  gender: 'M' as const,
  birthPlace: 'ROMA',
  birthProvince: 'RM'
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
      const fiscalCode = calculateFiscalCode(testPerson);
      equal(fiscalCode.length, 16);
      equal(fiscalCode.substring(0, 6), 'RSSMRA');
      equal(fiscalCode.substring(6, 8), '80');
      equal(fiscalCode.substring(8, 9), 'A');
      equal(fiscalCode.substring(9, 11), '01');
    });
  });

  await describe('isValidFiscalCode', async () => {
    await it('validates correct fiscal codes', async () => {
      const fiscalCode = calculateFiscalCode(testPerson);
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
      const fiscalCode = calculateFiscalCode(testPerson);
      const decoded = decodeFiscalCode(fiscalCode);

      equal(decoded.gender, 'M');
      equal(decoded.birthDate!.getFullYear(), 1980);
      equal(decoded.birthDate!.getMonth(), 0); // January
      equal(decoded.birthDate!.getDate(), 1);
    });

    await it('throws error for invalid fiscal code', async () => {
      try {
        decodeFiscalCode('INVALID');
        // Should not reach here
        equal(true, false, 'Expected to throw error');
      } catch (error) {
        equal((error as Error).message, 'Invalid fiscal code format');
      }
    });
  });
});
