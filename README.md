# codice-fiscale-ts

A TypeScript library for calculating, validating, and decoding Italian fiscal codes (codice fiscale).

Try it in the [live demo](https://cf.bitrey.it).

## Why another library?

Other libraries, such as codice-fiscale-js, ship a municipality list that goes stale when cadastral codes change. This one checks the [ISTAT API](https://situas-servizi.istat.it/publish/reportspooljson?pfun=61&pdata=01/01/2026) every week and releases a new version when the list changes.

It also handles suppressed municipalities. Someone born in a municipality that no longer exists (Porretta Terme, for example, merged in 2016) still carries its code. Former names come from the [ANPR archive](https://www.anagrafenazionale.interno.it/wp-content/uploads/ANPR_archivio_comuni.csv), so those codes can be calculated and decoded.

Other differences:

- Types distinguish people born in Italy (`ItalianPerson`) from people born abroad (`ForeignPerson`).
- People born abroad are identified by ISO 3166-1 alpha-2 country codes, not Italian country names.
- Municipality data is loaded lazily. If you only validate codes with `isValidFiscalCode`, the library is under 10kB, or about 5kB with tree shaking.
- It calculates codes from personal data and decodes codes back into personal data.
- It runs in browsers and Node.js, and ships both CJS and ESM builds.
- Every function is documented and tested.

## Installation

```bash
npm install codice-fiscale-ts
# or
yarn add codice-fiscale-ts
# or
pnpm add codice-fiscale-ts
# or
bun add codice-fiscale-ts
```

## Usage

### Calculating a fiscal code

```typescript
import { calculateFiscalCode, type Person } from "codice-fiscale-ts";

const person: Person = {
  firstName: "Mario",
  lastName: "Rossi",
  birthDate: "1990-01-01", // or a Date, e.g. new Date(1990, 0, 1)
  gender: "M",
  birthPlace: "Roma"
};

const fiscalCode = await calculateFiscalCode(person);
console.log(fiscalCode); // RSSMRA90A01H501W
```

> **Dates and time zones:** prefer a `"YYYY-MM-DD"` string for `birthDate`. A
> `Date` is read in local time, and `new Date("1990-01-01")` is midnight UTC,
> which is still December 31st in time zones west of UTC.

Suppressed municipalities and former names also work:

```typescript
await calculateFiscalCode({ ...person, birthDate: "1950-03-10", birthPlace: "Porretta Terme" });
// RSSMRA50C10A558L
```

### Validating a fiscal code

```typescript
import { isValidFiscalCode } from "codice-fiscale-ts";

const isValid = isValidFiscalCode("RSSMRA90A01H501W");
console.log(isValid); // true
```

### Decoding a fiscal code

```typescript
import { decodeFiscalCode } from "codice-fiscale-ts";

const decodedData = await decodeFiscalCode("RSSMRA90A01H501W");
console.log(decodedData);
/*
{
  birthDate: new Date(1990, 0, 1), // local midnight
  birthDateISO: '1990-01-01',
  gender: 'M',
  cadastralCode: 'H501',
  birthPlace: 'Roma',
  birthProvince: 'RM'
}
*/
```

## API

### Functions

- `calculateFiscalCode(person: Person): Promise<string>`: Calculate a fiscal code from personal data
- `isValidFiscalCode(fiscalCode: string): boolean`: Validate a fiscal code
- `decodeFiscalCode(fiscalCode: string): Promise<FiscalCodeData>`: Decode a fiscal code into its components

### Utility functions

- `calculateFirstNameCode(firstName: string): string`: Get the three letters representing a first name
- `calculateLastNameCode(lastName: string): string`: Get the three letters representing a last name
- `calculateYearCode(date: Date): string`: Get the two digits representing the year
- `calculateMonthCode(date: Date): string`: Get the letter representing the month
- `calculateDayGenderCode(date: Date, gender: 'M' | 'F'): string`: Get the two digits for the day and gender
- `calculateCheckCharacter(code: string): string`: Calculate the final check character
- `normalizeString(str: string): string`: Normalize a string by removing spaces, accents and special characters
- `extractConsonants(str: string): string`: Extract consonants from a string
- `extractVowels(str: string): string`: Extract vowels from a string
- `validatePerson(person: Person): void`: Validate that a person object has all required fields
- `isItalianPerson(person: Person): boolean`: Check if a person was born in Italy
- `isForeignPerson(person: Person): boolean`: Check if a person was born abroad
- `getMunicipalityByCode(code: string): Promise<Municipality>`: Get municipality by cadastral code (suppressed ones included)
- `normalizeOmocodia(fiscalCode: string): string`: Revert omocodia substitutions back to digits
- `getMunicipalCodeFromPlace(place: string, province?: string): Promise<string>`: Get cadastral code from place name (current or historical)
- `getMunicipalities(): Promise<Municipality[]>`: Get all Italian municipalities
- `getForeignCountries(): Promise<Country[]>`: Get all supported foreign countries
- `getCountryCode(countryCode: string): Promise<string>`: Get country code from ISO Alpha2 country code
- `decodeYear(yearCode: string): number`: Decode the year from a fiscal code
- `decodeMonth(monthCode: string): number`: Decode the month from a fiscal code
- `decodeDay(dayCode: number): number`: Decode the day from a fiscal code

### Types

- `Person`: Basic person data needed for fiscal code calculation
- `ItalianPerson`: Person born in Italy
- `ForeignPerson`: Person born abroad
- `FiscalCodeData`: The decoded components of a fiscal code

## Contributing

Pull requests are welcome.

## License

MIT. See [LICENSE](LICENSE).
