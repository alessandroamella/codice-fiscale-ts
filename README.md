# codice-fiscale-ts

A TypeScript library for calculating, validating, and decoding Italian Fiscal Codes (Codice Fiscale).

For an introduction and description in Italian, check out [my blog post](https://blog.bitrey.dev/codice-fiscale-ts).

## Why This Library?

This library was created to address several limitations in existing Italian Fiscal Code libraries:

- 🆕 **Automatically Updated Municipalities**: Other libraries like codice-fiscale-js aren't automatically updated when changes are made to the list of municipal cadastral codes. This library uses the [comuni-json](https://github.com/matteocontrini/comuni-json) repository and the [ISTAT API](https://situas-servizi.istat.it/publish/reportspooljson?pfun=61&pdata=01/01/1948) to stay up-to-date.
- 🔒 **Modern TypeScript Support**: Full TypeScript support with proper type definitions, distinguishing between people born in Italy (`ItalianPerson`) and abroad (`ForeignPerson`).
- ⚡ **Tree Shaking Support**: Built with modern ES modules to support tree shaking. For validating a fiscal code (`isValidFiscalCode`), the entire library is under 10kB (~5kB with tree shaking enabled)!
- 🌐 **Standardized Country Codes**: Uses ISO 3166-1 alpha-2 country codes instead of Italian country names when handling people born abroad.
- 🧮 **Comprehensive Features**: Supports both calculation (personal data → fiscal code) and reverse calculation (fiscal code → personal data).
- 🌐 **Cross-Platform**: Works in both browser and Node.js environments, with both CJS and ESM support.
- 🐛 **Well-Documented and Tested**: Every function is documented, tested, and deterministic.

## Installation

```bash
npm install codice-fiscale-ts
# or
yarn add codice-fiscale-ts
# or
pnpm add codice-fiscale-ts
```

## Usage

### Calculating a Fiscal Code

```typescript
import { calculateFiscalCode, type Person } from "codice-fiscale-ts";

const person: Person = {
  firstName: "Mario",
  lastName: "Rossi",
  birthDate: new Date("1990-01-01"),
  gender: "M",
  birthPlace: "Roma"
};

const fiscalCode = await calculateFiscalCode(person);
console.log(fiscalCode); // RSSMRA90A01H501W (example)
```

### Validating a Fiscal Code

```typescript
import { isValidFiscalCode } from "codice-fiscale-ts";

const isValid = isValidFiscalCode("RSSMRA90A01H501W");
console.log(isValid); // true
```

### Decoding a Fiscal Code

```typescript
import { decodeFiscalCode } from "codice-fiscale-ts";

const decodedData = await decodeFiscalCode("RSSMRA90A01H501W");
console.log(decodedData);
/*
{
  birthDate: new Date('1990-01-01'),
  gender: 'M',
  birthPlace: 'Roma',
  birthProvince: 'RM'
}
*/
```

## API Documentation

### Functions

- `calculateFiscalCode(person: Person): Promise<string>` - Calculate a fiscal code from personal data
- `isValidFiscalCode(fiscalCode: string): boolean` - Validate a fiscal code
- `decodeFiscalCode(fiscalCode: string): Promise<FiscalCodeData>` - Decode a fiscal code into its components
- Other utility functions are also available for more granular control

### Utility Functions

- `calculateFirstNameCode(firstName: string): string` - Get the three letters representing a first name
- `calculateLastNameCode(lastName: string): string` - Get the three letters representing a last name
- `calculateYearCode(date: Date): string` - Get the two digits representing the year
- `calculateMonthCode(date: Date): string` - Get the letter representing the month
- `calculateDayGenderCode(date: Date, gender: 'M' | 'F'): string` - Get the two digits for the day and gender
- `calculateCheckCharacter(code: string): string` - Calculate the final check character
- `normalizeString(str: string): string` - Normalize a string by removing spaces, accents and special characters
- `extractConsonants(str: string): string` - Extract consonants from a string
- `extractVowels(str: string): string` - Extract vowels from a string
- `validatePerson(person: Person): void` - Validate that a person object has all required fields
- `isItalianPerson(person: Person): boolean` - Check if a person was born in Italy
- `isForeignPerson(person: Person): boolean` - Check if a person was born abroad
- `findBirthPlaceByCode(code: string): Promise<{name: string, province: string} | undefined>` - Find birth place by cadastral code
- `getMunicipalCodeFromPlace(place: string): Promise<string>` - Get cadastral code from place name
- `getMunicipalities(): Promise<Municipality[]>` - Get all Italian municipalities
- `getCountries(): Promise<Country[]>` - Get all supported foreign countries
- `getCountryCode(countryCode: string): Promise<string>` - Get country code from ISO Alpha2 country code
- `decodeYear(yearCode: string): number` - Decode the year from a fiscal code
- `decodeMonth(monthCode: string): number` - Decode the month from a fiscal code
- `decodeDay(dayCode: number): number` - Decode the day from a fiscal code

### Types

The package exports several TypeScript types to help with type checking:

- `Person` - Basic person data needed for fiscal code calculation
- `ItalianPerson` - Person born in Italy
- `ForeignPerson` - Person born abroad
- `FiscalCodeData` - The decoded components of a fiscal code

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
