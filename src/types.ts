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

// Base Municipality interface with common properties
export interface BaseMunicipality {
    name: string;
    code: string;
    province: string;
}

// Italian-only Municipality interface
export interface ItalianMunicipality extends BaseMunicipality {
    italianName?: undefined;
    foreignName?: undefined;
}

// Bilingual Municipality interface (with foreign name)
export interface BilingualMunicipality extends BaseMunicipality {
    italianName: string;
    foreignName: string;
}

// Union type for all Municipality types
export type Municipality = ItalianMunicipality | BilingualMunicipality;
