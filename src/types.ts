export interface BasePerson {
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: 'M' | 'F';
}

export interface ItalianPerson extends BasePerson {
  birthPlace: string;
  foreignCountry?: never;
}

export interface ForeignPerson extends BasePerson {
  foreignCountry: string;
  birthPlace?: never;
}

export type Person = ItalianPerson | ForeignPerson;

export type FiscalCodeData = Partial<Person> & {
  birthProvince?: string;
};


export type ItalianMunicipality = [
  code: string,
  name: string,
  province: string
];

export type BilingualMunicipality = [
  ...ItalianMunicipality,
  italianName: string,
  foreignName: string
];

export type Municipality = ItalianMunicipality | BilingualMunicipality;

export type Country = [
	code: string,
	name: string
];
