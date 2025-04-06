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
	BasePerson,
	BilingualMunicipality,
	Country,
	FiscalCodeData,
	ForeignPerson,
	ItalianMunicipality,
	ItalianPerson,
	Municipality,
	Person
} from './types.ts';

export async function getMunicipalities() {
  const { municipalities } = await import('./data/municipalities.ts');
  return municipalities;
}

export async function getCountries() {
  const { countries } = await import('./data/countries.ts');
  return countries;
}
