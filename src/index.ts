export {
  calculateCheckCharacter,
  calculateDayGenderCode,
  calculateFirstNameCode,
  calculateFiscalCode,
  calculateLastNameCode,
  calculateMonthCode,
  calculateYearCode,
  decodeDay,
  decodeFiscalCode,
  decodeMonth,
  decodeYear,
  extractConsonants,
  extractVowels,
  findBirthPlaceByCode,
  getCountryCode,
  getMunicipalCodeFromPlace,
  isValidFiscalCode,
  normalizeString
} from './codiceFiscale.ts';

export type {
  BaseMunicipality,
  BasePerson,
  BilingualMunicipality,
  FiscalCodeData,
  ForeignPerson,
  ItalianMunicipality,
  ItalianPerson,
  Municipality,
  Person
} from './types.ts';
