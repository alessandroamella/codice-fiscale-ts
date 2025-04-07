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
	getCountryCode,
	getMunicipalCodeFromPlace,
	getMunicipalityByCode,
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

export {
	isForeignPerson,
	isItalianPerson,
	validatePerson
} from './types.ts';

import type { Country, Municipality } from './types.ts';

/**
 * Get all Italian municipalities.
 * @returns Array of municipalities with cadastral code, name, province
 * If the municipality is bilingual, the cadastral code will be followed by
 * the italian name and the foreign name.
 * @example
 * ```ts
 * const municipalities = await getMunicipalities();
 * console.log(municipalities); // [['001', 'ROMA', 'RM'], ['002', 'BOLZANO', 'BZ', 'BOLZANO', 'BOZEN']]
 * ```
 */
export async function getMunicipalities(): Promise<Municipality[]> {
	const { municipalities } = await import('./data/municipalities.ts');
	return municipalities;
}

/**
 * Get all supported foreign countries (ISO Alpha2). Italy is not included.
 * @returns Array of countries with cadastral code and ISO Alpha2 code.
 * @example
 * ```ts
 * const countries = await getForeignCountries();
 * console.log(countries); // [['Z001', 'FR'], ['Z002', 'DE']]
 * ```
 */
export async function getForeignCountries(): Promise<Country[]> {
	const { countries } = await import('./data/countries.ts');
	return countries;
}
