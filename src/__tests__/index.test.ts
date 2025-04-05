import { equal } from 'node:assert/strict';
import { describe, it } from 'node:test';

import { calculateFiscalCode } from '../index.ts';

await describe('FiscalCodeCalculator', async () => {
  await describe("given a person's information", async () => {
    const italianPerson = {
      firstName: 'Mario',
      lastName: 'Rossi',
      birthDate: new Date(1980, 0, 1), // January 1, 1980
      gender: 'M' as const,
      birthPlace: 'ROMA',
      birthProvince: 'RM'
    };

    await describe('when calculating fiscal code', async () => {
      await it('returns the correct fiscal code', async () => {
        const fiscalCode = calculateFiscalCode(italianPerson);
        equal(typeof fiscalCode, 'string');
        equal(fiscalCode.length, 16);
      });
    });
  });
});
