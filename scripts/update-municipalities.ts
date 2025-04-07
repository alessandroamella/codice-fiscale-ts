import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Define the API URLs
const ISTAT_API_URL =
  'https://situas-servizi.istat.it/publish/reportspooljson?pfun=61&pdata=01/01/1948';
const GITHUB_API_URL =
  'https://raw.githubusercontent.com/matteocontrini/comuni-json/refs/heads/master/comuni.json';

// Define the types for the API responses
interface ApiMunicipality {
  COD_CATASTO: string;
  COMUNE: string;
  COMUNE_IT?: string;
  COMUNE_A?: string;
  SIGLA_AUTOMOBILISTICA: string;
}

interface NewApiMunicipality {
  nome: string;
  codice: string;
  sigla: string;
  codiceCatastale: string;
  provincia: {
    codice: string;
    nome: string;
  };
}

// Path to the municipalities.ts file
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const municipalitiesFilePath = path.resolve(
  __dirname,
  '../src/data/municipalities.ts'
);

async function fetchMunicipalities(): Promise<ApiMunicipality[]> {
  try {
    console.log('Fetching municipalities from API...');
    const response = await fetch(ISTAT_API_URL);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    if (!data.resultset || !Array.isArray(data.resultset)) {
      throw new Error('Invalid API response format');
    }

    console.log(`Fetched ${data.resultset.length} municipalities from API`);
    return data.resultset;
  } catch (error) {
    console.error('Error fetching municipalities:', error);
    throw error;
  }
}

async function fetchNewMunicipalities(): Promise<NewApiMunicipality[]> {
  try {
    console.log('Fetching municipalities from GitHub...');
    const response = await fetch(GITHUB_API_URL);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log(`Fetched ${data.length} municipalities from GitHub`);
    return data;
  } catch (error) {
    console.error('Error fetching municipalities from GitHub:', error);
    throw error;
  }
}

function formatMunicipalitiesArray(
  newMunicipalities: NewApiMunicipality[],
  istatMunicipalities: ApiMunicipality[]
): string[] {
  // Create a map of ISTAT municipalities by cadastral code for quick lookup
  const istatMap = new Map(istatMunicipalities.map((m) => [m.COD_CATASTO, m]));

  const municipalityEntries = newMunicipalities
    .map((municipality) => {
      if (
        !municipality.codiceCatastale ||
        !municipality.nome ||
        !municipality.sigla
      ) {
        console.warn(
          `Skipping incomplete municipality data: ${JSON.stringify(municipality)}`
        );
        return null;
      }

      // Check if we have ISTAT data with foreign names for this municipality
      const istatData = istatMap.get(municipality.codiceCatastale);

      if (istatData?.COMUNE_IT && istatData?.COMUNE_A) {
        // Bilingual municipality
        const municipalityData = [
          municipality.codiceCatastale,
          municipality.nome,
          municipality.sigla,
          istatData.COMUNE_IT,
          istatData.COMUNE_A
        ];
        return `  ${JSON.stringify(municipalityData)}`;
      }

      // Regular municipality
      const municipalityData = [
        municipality.codiceCatastale,
        municipality.nome,
        municipality.sigla
      ];
      return `  ${JSON.stringify(municipalityData)}`;
    })
    .filter((entry): entry is string => entry !== null);

  return municipalityEntries;
}

function getCurrentMunicipalities(): string[] {
  try {
    const content = fs.readFileSync(municipalitiesFilePath, 'utf8');

    // Extract the array entries using regex
    const arrayMatch = content.match(/\[\n([\s\S]+)\n\]/);
    if (!arrayMatch || !arrayMatch[1]) {
      throw new Error('Failed to parse municipalities file');
    }

    // Split by line and filter empty lines and non-array elements
    return arrayMatch[1]
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.startsWith('[') || line.startsWith('  ['));
  } catch (error) {
    console.error('Error reading current municipalities:', error);
    throw error;
  }
}

function hasChanges(current: string[], updated: string[]): boolean {
  // Quick check for length differences
  if (current.length !== updated.length) {
    console.log(
      `Municipality count changed: ${current.length} → ${updated.length}`
    );
    return true;
  }

  // We'll convert both arrays to standardized entries before comparing
  type MunicipalityEntry = [string, string, string, ...string[]];

  // Function to extract the data from a line, regardless of format
  const extractData = (line: string): MunicipalityEntry | null => {
    try {
      // Remove trailing commas
      const cleanLine = line.replace(/,$/, '');

      // Try to parse as JSON first
      if (cleanLine.includes('[')) {
        const match = cleanLine.match(/\[(.*)\]/);
        if (match?.[1]) {
          // Replace single quotes with double quotes for JSON parsing
          const jsonStr = `[${match[1].replace(/'/g, '"')}]`;
          return JSON.parse(jsonStr);
        }
      }
      return null;
    } catch {
      return null;
    }
  };

  // Convert arrays to maps with cadastral code as key
  const currentMap = new Map<string, MunicipalityEntry>();
  const updatedMap = new Map<string, MunicipalityEntry>();

  for (const line of current) {
    const entry = extractData(line);
    if (entry) {
      currentMap.set(entry[0], entry);
    }
  }

  for (const line of updated) {
    const entry = extractData(line);
    if (entry) {
      updatedMap.set(entry[0], entry);
    }
  }

  // Check for any differences
  if (currentMap.size !== updatedMap.size) {
    console.log(
      `Different number of valid entries: ${currentMap.size} → ${updatedMap.size}`
    );
    return true;
  }

  // Check if any entries differ
  for (const [code, updatedEntry] of updatedMap.entries()) {
    const currentEntry = currentMap.get(code);
    if (!currentEntry) {
      console.log(`New municipality found: ${code} (${updatedEntry[1]})`);
      return true;
    }

    // Compare entries
    if (JSON.stringify(currentEntry) !== JSON.stringify(updatedEntry)) {
      console.log(`Municipality ${code} (${updatedEntry[1]}) has changed`);
      return true;
    }
  }

  console.log('No changes detected in municipalities data');
  return false;
}

function updateMunicipalitiesFile(municipalityEntries: string[]): void {
  const fileContent = `import type { Municipality } from '../types.ts';

export const municipalities: Municipality[] = [
${municipalityEntries.join(',\n')}
];
`;

  fs.writeFileSync(municipalitiesFilePath, fileContent);
  console.log(
    `Updated municipalities file with ${municipalityEntries.length} entries`
  );
}

async function main() {
  try {
    // Fetch municipalities from both sources
    const [istatMunicipalities, newMunicipalities] = await Promise.all([
      fetchMunicipalities(),
      fetchNewMunicipalities()
    ]);

    // Format the municipalities into array entries
    const formattedMunicipalities = formatMunicipalitiesArray(
      newMunicipalities,
      istatMunicipalities
    );

    // Get current municipalities
    const currentMunicipalities = getCurrentMunicipalities();

    // Check if there are changes
    if (hasChanges(currentMunicipalities, formattedMunicipalities)) {
      // Update the file
      updateMunicipalitiesFile(formattedMunicipalities);
      console.log('Municipalities file updated successfully');

      // Exit with code 1 to indicate changes were made (useful for CI/CD)
      process.exit(1);
    } else {
      console.log('No changes needed');
      // Exit with code 0 to indicate no changes
      process.exit(0);
    }
  } catch (error) {
    console.error('Error updating municipalities:', error);
    process.exit(2);
  }
}

// Run the script
main();
