# codice-fiscale-ts

A TypeScript library for calculating, validating, and decoding Italian Fiscal Codes (Codice Fiscale).

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
import { calculateFiscalCode, type Person } from 'codice-fiscale-ts';

const person: Person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  birthDate: new Date('1990-01-01'),
  gender: 'M',
  birthPlace: 'Roma'
};

const fiscalCode = calculateFiscalCode(person);
console.log(fiscalCode); // RSSMRA90A01H501W (example)
```

### Validating a Fiscal Code

```typescript
import { isValidFiscalCode } from 'codice-fiscale-ts';

const isValid = isValidFiscalCode('RSSMRA90A01H501W');
console.log(isValid); // true
```

### Decoding a Fiscal Code

```typescript
import { decodeFiscalCode } from 'codice-fiscale-ts';

const decodedData = decodeFiscalCode('RSSMRA90A01H501W');
console.log(decodedData);
/*
{
  lastName: 'RSS',
  firstName: 'MRA',
  birthYear: '1990',
  birthMonth: 'January',
  birthDay: 1,
  gender: 'M',
  birthPlace: 'Roma',
  checkCharacter: 'W'
}
*/
```

## API Documentation

### Functions

- `calculateFiscalCode(person: Person): string` - Calculate a fiscal code from personal data
- `isValidFiscalCode(fiscalCode: string): boolean` - Validate a fiscal code
- `decodeFiscalCode(fiscalCode: string): FiscalCodeData` - Decode a fiscal code into its components
- Other utility functions are also available for more granular control

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
