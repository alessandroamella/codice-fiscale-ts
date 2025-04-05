import { MunicipalCodeParser } from './parseMunicipalCode.ts';

// Create a parser instance
const parser = new MunicipalCodeParser();

// Write to JSON file
parser.writeToTypeScript('municipalities.ts');
