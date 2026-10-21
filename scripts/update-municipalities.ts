import fs from 'node:fs';
import path from 'node:path';

// Current municipalities, as of the given date (dd/mm/yyyy)
const ISTAT_API_URL =
  'https://situas-servizi.istat.it/publish/reportspooljson?pfun=61&pdata=';
// Every municipality that ever existed, with validity periods. The GitHub copy
// is a fallback: it is updated less often than the official one.
const ANPR_ARCHIVE_URLS = [
  'https://www.anagrafenazionale.interno.it/wp-content/uploads/ANPR_archivio_comuni.csv',
  'https://raw.githubusercontent.com/italia/anpr/master/src/archivi/ANPR_archivio_comuni.csv'
];

interface IstatMunicipality {
  COD_CATASTO: string;
  COMUNE: string;
  COMUNE_IT?: string;
  COMUNE_A?: string;
  SIGLA_AUTOMOBILISTICA: string;
}

interface AnprMunicipality {
  CODCATASTALE: string;
  DENOMINAZIONE_IT: string;
  SIGLAPROVINCIA: string;
  DATACESSAZIONE: string;
  STATO: string;
}

const dataDir = path.resolve(import.meta.dirname, '../src/data');
const municipalitiesFilePath = path.join(dataDir, 'municipalities.ts');
const historicalFilePath = path.join(dataDir, 'historicalMunicipalities.ts');

async function fetchIstatMunicipalities(): Promise<IstatMunicipality[]> {
  const today = new Date().toLocaleDateString('en-GB', {
    timeZone: 'Europe/Rome'
  });
  console.log(`Fetching municipalities from ISTAT (as of ${today})...`);
  const response = await fetch(ISTAT_API_URL + today);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch ISTAT data: ${response.status} ${response.statusText}`
    );
  }

  const data = (await response.json()) as { resultset?: IstatMunicipality[] };

  if (!Array.isArray(data.resultset)) {
    throw new Error('Invalid ISTAT API response format');
  }

  console.log(`Fetched ${data.resultset.length} municipalities from ISTAT`);
  return data.resultset;
}

/** Minimal CSV parser for the ANPR archive (quoted fields, no newlines). */
function parseCsv(text: string): Record<string, string>[] {
  const parseLine = (line: string): string[] =>
    [...line.matchAll(/(?:^|,)(?:"((?:[^"]|"")*)"|([^,]*))/g)].map(
      (m) => m[1]?.replace(/""/g, '"') ?? m[2] ?? ''
    );

  const [header, ...lines] = text
    .replace(/^﻿/, '')
    .split(/\r?\n/)
    .filter((line) => line.trim() !== '');
  if (!header) {
    throw new Error('Empty ANPR archive');
  }
  const columns = parseLine(header);

  return lines.map((line) => {
    const values = parseLine(line);
    return Object.fromEntries(columns.map((col, i) => [col, values[i] ?? '']));
  });
}

async function fetchAnprArchive(): Promise<AnprMunicipality[]> {
  for (const url of ANPR_ARCHIVE_URLS) {
    console.log(`Fetching municipalities archive from ${url}...`);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const rows = parseCsv(await response.text());
      if (!rows[0]?.['CODCATASTALE']) {
        throw new Error('Invalid ANPR archive format');
      }
      console.log(`Fetched ${rows.length} archive entries from ANPR`);
      return rows as unknown as AnprMunicipality[];
    } catch (error) {
      console.warn(`Failed to fetch ANPR archive from ${url}:`, error);
    }
  }
  throw new Error('Could not fetch the ANPR archive from any source');
}

/** Same normalization as normalizeString in src/codiceFiscale.ts */
function normalize(str: string): string {
  return str
    .toUpperCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[^A-Z]/g, '');
}

function formatMunicipalities(istat: IstatMunicipality[]): unknown[][] {
  return istat
    .filter((m) => m.COD_CATASTO && m.COMUNE && m.SIGLA_AUTOMOBILISTICA)
    .map((m) => {
      const name = m.COMUNE_IT || m.COMUNE;
      return m.COMUNE_IT && m.COMUNE_A
        ? [
            m.COD_CATASTO,
            name,
            m.SIGLA_AUTOMOBILISTICA,
            m.COMUNE_IT,
            m.COMUNE_A
          ]
        : [m.COD_CATASTO, name, m.SIGLA_AUTOMOBILISTICA];
    })
    .sort((a, b) => String(a[1]).localeCompare(String(b[1]), 'it'));
}

/**
 * Names that are no longer in use: suppressed municipalities, and former names
 * of current ones. Sorted by code, most recently ceased first, so a lookup by
 * code finds the last name a municipality had.
 */
function formatHistoricalMunicipalities(
  anpr: AnprMunicipality[],
  current: unknown[][]
): unknown[][] {
  const currentNames = new Map<string, Set<string>>();
  for (const [code, ...names] of current) {
    currentNames.set(
      String(code),
      new Set(names.map((n) => normalize(String(n))))
    );
  }

  // Keep one entry per (code, name), the most recently ceased
  const latest = new Map<string, AnprMunicipality>();
  for (const row of anpr) {
    if (row.STATO !== 'C' || !row.CODCATASTALE || !row.DENOMINAZIONE_IT) {
      continue;
    }
    if (
      currentNames.get(row.CODCATASTALE)?.has(normalize(row.DENOMINAZIONE_IT))
    ) {
      continue;
    }
    const key = `${row.CODCATASTALE}|${normalize(row.DENOMINAZIONE_IT)}`;
    const existing = latest.get(key);
    if (!existing || existing.DATACESSAZIONE < row.DATACESSAZIONE) {
      latest.set(key, row);
    }
  }

  return [...latest.values()]
    .sort(
      (a, b) =>
        a.CODCATASTALE.localeCompare(b.CODCATASTALE) ||
        b.DATACESSAZIONE.localeCompare(a.DATACESSAZIONE)
    )
    .map((row) => [
      row.CODCATASTALE,
      row.DENOMINAZIONE_IT,
      row.SIGLAPROVINCIA,
      row.DATACESSAZIONE
    ]);
}

function renderFile(type: string, name: string, entries: unknown[][]): string {
  return `import type { ${type} } from '../types.ts';

export const ${name}: ${type}[] = [
${entries.map((entry) => `  ${JSON.stringify(entry)}`).join(',\n')}
];
`;
}

/** Writes the file if its content changed; returns whether it did. */
function writeIfChanged(filePath: string, content: string): boolean {
  const current = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, 'utf8')
    : '';
  if (current === content) {
    console.log(`No changes in ${path.basename(filePath)}`);
    return false;
  }
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${path.basename(filePath)}`);
  return true;
}

async function main() {
  try {
    const [istat, anpr] = await Promise.all([
      fetchIstatMunicipalities(),
      fetchAnprArchive()
    ]);

    const municipalities = formatMunicipalities(istat);
    const historical = formatHistoricalMunicipalities(anpr, municipalities);
    console.log(
      `${municipalities.length} current municipalities, ${historical.length} historical names`
    );

    const changed = [
      writeIfChanged(
        municipalitiesFilePath,
        renderFile('Municipality', 'municipalities', municipalities)
      ),
      writeIfChanged(
        historicalFilePath,
        renderFile(
          'HistoricalMunicipality',
          'historicalMunicipalities',
          historical
        )
      )
    ].some(Boolean);

    // Exit with code 1 to indicate changes were made (useful for CI/CD)
    process.exit(changed ? 1 : 0);
  } catch (error) {
    console.error('Error updating municipalities:', error);
    process.exit(2);
  }
}

main();
