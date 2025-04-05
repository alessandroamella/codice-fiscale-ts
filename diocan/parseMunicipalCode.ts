import { writeFileSync } from 'node:fs';
import { orderBy } from 'lodash';
import { z } from 'zod';
import comuni from './comuni.json';

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

// Define the Zod schema with only the fields we need
const RawMunicipalitySchema = z
    .object({
        'Denominazione (Italiana e straniera)': z.string(),
        'Denominazione in italiano': z.string(),
        'Denominazione altra lingua': z.string().optional(),
        'Codice Catastale del comune': z.string(),
        'Sigla automobilistica': z.string()
    })
    .passthrough(); // Allow other fields without validation

// Define a schema for the array of municipalities
const RawMunicipalitiesSchema = z.array(RawMunicipalitySchema);

export class MunicipalCodeParser {
    private rawData: z.infer<typeof RawMunicipalitiesSchema>;
    private municipalities: Set<Municipality>;

    constructor() {
        try {
            // Validate the JSON data against our schema
            this.rawData = RawMunicipalitiesSchema.parse(comuni);
            // Transform the validated data to our Municipality interface
            this.municipalities = this.transformToMunicipalities();
        } catch (_error) {
            this.rawData = [];
            this.municipalities = new Set();
        }
    }

    private transformToMunicipalities(): Set<Municipality> {
        const municipalitiesSet = new Set<Municipality>();
        this.rawData.forEach((rawMunicipality) => {
            const name =
                rawMunicipality['Denominazione (Italiana e straniera)'];
            const italianName = rawMunicipality['Denominazione in italiano'];
            const foreignName = rawMunicipality['Denominazione altra lingua'];
            const code = rawMunicipality['Codice Catastale del comune'];
            const province = rawMunicipality['Sigla automobilistica'];

            // Check if it's a bilingual municipality (Italian name differs from full name)
            if (italianName !== name && foreignName) {
                municipalitiesSet.add({
                    name,
                    italianName,
                    foreignName,
                    code,
                    province
                });
            } else {
                // Italian-only municipality
                municipalitiesSet.add({
                    name,
                    code,
                    province
                });
            }
        });
        return municipalitiesSet;
    }

    /**
     * Helper method to check if a municipality is bilingual
     */
    public isBilingual(
        municipality: Municipality
    ): municipality is BilingualMunicipality {
        return 'italianName' in municipality && 'foreignName' in municipality;
    }

    /**
     * Helper method to check if a municipality is Italian-only
     */
    public isItalian(
        municipality: Municipality
    ): municipality is ItalianMunicipality {
        return !this.isBilingual(municipality);
    }

    /**
     * Get all municipalities
     */
    public getAllMunicipalities(): Municipality[] {
        return Array.from(this.municipalities);
    }

    /**
     * Find a municipality by its cadastral code
     */
    public findByMunicipalityCode(code: string): Municipality | null {
        for (const municipality of this.municipalities) {
            if (municipality.code === code) {
                return municipality;
            }
        }
        return null;
    }

    /**
     * Search municipality by name (exact match, case insensitive)
     */
    public searchByName(searchTerm: string): Municipality | null {
        const term = searchTerm.toLowerCase();

        return (
            Array.from(this.municipalities).find((municipality) => {
                if (this.isBilingual(municipality)) {
                    return [
                        municipality.name,
                        municipality.italianName,
                        municipality.foreignName
                    ].some((name) => name.toLowerCase() === term);
                }
                return municipality.name.toLowerCase() === term;
            }) || null
        );
    }

    /**
     * Write municipalities to a TypeScript file that exports the data
     * @param filePath Path to the output TypeScript file
     * @returns True if the write was successful, false otherwise
     */
    public writeToTypeScript(filePath: string): boolean {
        try {
            const data = orderBy(Array.from(this.municipalities), [
                'code',
                'name',
                'province'
            ]);

            // Create TypeScript file content with municipalities export
            const tsContent = `import type { Municipality, ItalianMunicipality, BilingualMunicipality } from './parseMunicipalCode';

export const municipalities: Municipality[] = ${JSON.stringify(data, null, 2)};
`;

            writeFileSync(filePath, tsContent, 'utf8');
            return true;
        } catch (_error) {
            return false;
        }
    }
}
