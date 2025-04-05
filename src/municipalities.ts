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

export const municipalities: Municipality[] = [
  {
    name: 'Abano Terme',
    code: 'A001',
    province: 'PD'
  },
  {
    name: 'Abbadia Cerreto',
    code: 'A004',
    province: 'LO'
  },
  {
    name: 'Abbadia Lariana',
    code: 'A005',
    province: 'LC'
  },
  {
    name: 'Abbadia San Salvatore',
    code: 'A006',
    province: 'SI'
  },
  {
    name: 'Abbasanta',
    code: 'A007',
    province: 'OR'
  },
  {
    name: 'Abbateggio',
    code: 'A008',
    province: 'PE'
  },
  {
    name: 'Abbiategrasso',
    code: 'A010',
    province: 'MI'
  },
  {
    name: 'Abriola',
    code: 'A013',
    province: 'PZ'
  },
  {
    name: 'Acate',
    code: 'A014',
    province: 'RG'
  },
  {
    name: 'Accadia',
    code: 'A015',
    province: 'FG'
  },
  {
    name: 'Acceglio',
    code: 'A016',
    province: 'CN'
  },
  {
    name: 'Accettura',
    code: 'A017',
    province: 'MT'
  },
  {
    name: 'Acciano',
    code: 'A018',
    province: 'AQ'
  },
  {
    name: 'Accumoli',
    code: 'A019',
    province: 'RI'
  },
  {
    name: 'Acerenza',
    code: 'A020',
    province: 'PZ'
  },
  {
    name: 'Cermes/Tscherms',
    italianName: 'Cermes',
    foreignName: 'Tscherms',
    code: 'A022',
    province: 'BZ'
  },
  {
    name: 'Acerno',
    code: 'A023',
    province: 'SA'
  },
  {
    name: 'Acerra',
    code: 'A024',
    province: 'NA'
  },
  {
    name: 'Aci Bonaccorsi',
    code: 'A025',
    province: 'CT'
  },
  {
    name: 'Aci Castello',
    code: 'A026',
    province: 'CT'
  },
  {
    name: 'Aci Catena',
    code: 'A027',
    province: 'CT'
  },
  {
    name: 'Acireale',
    code: 'A028',
    province: 'CT'
  },
  {
    name: "Aci Sant'Antonio",
    code: 'A029',
    province: 'CT'
  },
  {
    name: 'Acquafondata',
    code: 'A032',
    province: 'FR'
  },
  {
    name: 'Acquaformosa',
    code: 'A033',
    province: 'CS'
  },
  {
    name: 'Acquafredda',
    code: 'A034',
    province: 'BS'
  },
  {
    name: 'Acqualagna',
    code: 'A035',
    province: 'PU'
  },
  {
    name: 'Acquanegra sul Chiese',
    code: 'A038',
    province: 'MN'
  },
  {
    name: 'Acquanegra Cremonese',
    code: 'A039',
    province: 'CR'
  },
  {
    name: 'Acquapendente',
    code: 'A040',
    province: 'VT'
  },
  {
    name: 'Acquappesa',
    code: 'A041',
    province: 'CS'
  },
  {
    name: 'Acquaro',
    code: 'A043',
    province: 'VV'
  },
  {
    name: 'Acquasanta Terme',
    code: 'A044',
    province: 'AP'
  },
  {
    name: 'Acquasparta',
    code: 'A045',
    province: 'TR'
  },
  {
    name: 'Acquaviva Picena',
    code: 'A047',
    province: 'AP'
  },
  {
    name: 'Acquaviva delle Fonti',
    code: 'A048',
    province: 'BA'
  },
  {
    name: 'Acquaviva Platani',
    code: 'A049',
    province: 'CL'
  },
  {
    name: 'Acquaviva Collecroce',
    code: 'A050',
    province: 'CB'
  },
  {
    name: "Acquaviva d'Isernia",
    code: 'A051',
    province: 'IS'
  },
  {
    name: 'Acqui Terme',
    code: 'A052',
    province: 'AL'
  },
  {
    name: 'Acri',
    code: 'A053',
    province: 'CS'
  },
  {
    name: 'Acuto',
    code: 'A054',
    province: 'FR'
  },
  {
    name: 'Adelfia',
    code: 'A055',
    province: 'BA'
  },
  {
    name: 'Adrano',
    code: 'A056',
    province: 'CT'
  },
  {
    name: 'Adrara San Martino',
    code: 'A057',
    province: 'BG'
  },
  {
    name: 'Adrara San Rocco',
    code: 'A058',
    province: 'BG'
  },
  {
    name: 'Adria',
    code: 'A059',
    province: 'RO'
  },
  {
    name: 'Adro',
    code: 'A060',
    province: 'BS'
  },
  {
    name: 'Affi',
    code: 'A061',
    province: 'VR'
  },
  {
    name: 'Affile',
    code: 'A062',
    province: 'RM'
  },
  {
    name: 'Afragola',
    code: 'A064',
    province: 'NA'
  },
  {
    name: 'Africo',
    code: 'A065',
    province: 'RC'
  },
  {
    name: 'Agazzano',
    code: 'A067',
    province: 'PC'
  },
  {
    name: 'Agerola',
    code: 'A068',
    province: 'NA'
  },
  {
    name: 'Aggius',
    code: 'A069',
    province: 'SS'
  },
  {
    name: 'Agira',
    code: 'A070',
    province: 'EN'
  },
  {
    name: 'Agliana',
    code: 'A071',
    province: 'PT'
  },
  {
    name: 'Agliano Terme',
    code: 'A072',
    province: 'AT'
  },
  {
    name: 'Agliè',
    code: 'A074',
    province: 'TO'
  },
  {
    name: 'Agna',
    code: 'A075',
    province: 'PD'
  },
  {
    name: 'Agnadello',
    code: 'A076',
    province: 'CR'
  },
  {
    name: 'Agnana Calabra',
    code: 'A077',
    province: 'RC'
  },
  {
    name: 'Agnone',
    code: 'A080',
    province: 'IS'
  },
  {
    name: 'Villa Latina',
    code: 'A081',
    province: 'FR'
  },
  {
    name: 'Agnosine',
    code: 'A082',
    province: 'BS'
  },
  {
    name: 'Agordo',
    code: 'A083',
    province: 'BL'
  },
  {
    name: 'Agosta',
    code: 'A084',
    province: 'RM'
  },
  {
    name: 'Agra',
    code: 'A085',
    province: 'VA'
  },
  {
    name: 'Agrate Brianza',
    code: 'A087',
    province: 'MB'
  },
  {
    name: 'Agrate Conturbia',
    code: 'A088',
    province: 'NO'
  },
  {
    name: 'Agrigento',
    code: 'A089',
    province: 'AG'
  },
  {
    name: 'Agropoli',
    code: 'A091',
    province: 'SA'
  },
  {
    name: 'Agugliano',
    code: 'A092',
    province: 'AN'
  },
  {
    name: 'Agugliaro',
    code: 'A093',
    province: 'VI'
  },
  {
    name: 'Ayas',
    code: 'A094',
    province: 'AO'
  },
  {
    name: 'Aicurzio',
    code: 'A096',
    province: 'MB'
  },
  {
    name: 'Aidomaggiore',
    code: 'A097',
    province: 'OR'
  },
  {
    name: 'Aidone',
    code: 'A098',
    province: 'EN'
  },
  {
    name: 'Aielli',
    code: 'A100',
    province: 'AQ'
  },
  {
    name: 'Aiello del Sabato',
    code: 'A101',
    province: 'AV'
  },
  {
    name: 'Aiello Calabro',
    code: 'A102',
    province: 'CS'
  },
  {
    name: 'Aiello del Friuli',
    code: 'A103',
    province: 'UD'
  },
  {
    name: 'Aieta',
    code: 'A105',
    province: 'CS'
  },
  {
    name: 'Ailano',
    code: 'A106',
    province: 'CE'
  },
  {
    name: 'Ailoche',
    code: 'A107',
    province: 'BI'
  },
  {
    name: 'Aymavilles',
    code: 'A108',
    province: 'AO'
  },
  {
    name: 'Airasca',
    code: 'A109',
    province: 'TO'
  },
  {
    name: 'Airola',
    code: 'A110',
    province: 'BN'
  },
  {
    name: 'Airole',
    code: 'A111',
    province: 'IM'
  },
  {
    name: 'Airuno',
    code: 'A112',
    province: 'LC'
  },
  {
    name: 'Aisone',
    code: 'A113',
    province: 'CN'
  },
  {
    name: 'Alà dei Sardi',
    code: 'A115',
    province: 'SS'
  },
  {
    name: 'Ala',
    code: 'A116',
    province: 'TN'
  },
  {
    name: 'Ala di Stura',
    code: 'A117',
    province: 'TO'
  },
  {
    name: 'Alagna',
    code: 'A118',
    province: 'PV'
  },
  {
    name: 'Alagna Valsesia',
    code: 'A119',
    province: 'VC'
  },
  {
    name: 'Alanno',
    code: 'A120',
    province: 'PE'
  },
  {
    name: 'Alassio',
    code: 'A122',
    province: 'SV'
  },
  {
    name: 'Alatri',
    code: 'A123',
    province: 'FR'
  },
  {
    name: 'Alba',
    code: 'A124',
    province: 'CN'
  },
  {
    name: 'Alba Adriatica',
    code: 'A125',
    province: 'TE'
  },
  {
    name: 'Albagiara',
    code: 'A126',
    province: 'OR'
  },
  {
    name: 'Albairate',
    code: 'A127',
    province: 'MI'
  },
  {
    name: 'Albanella',
    code: 'A128',
    province: 'SA'
  },
  {
    name: "Albano Sant'Alessandro",
    code: 'A129',
    province: 'BG'
  },
  {
    name: 'Albano Vercellese',
    code: 'A130',
    province: 'VC'
  },
  {
    name: 'Albano di Lucania',
    code: 'A131',
    province: 'PZ'
  },
  {
    name: 'Albano Laziale',
    code: 'A132',
    province: 'RM'
  },
  {
    name: 'Albaredo per San Marco',
    code: 'A135',
    province: 'SO'
  },
  {
    name: "Albaredo d'Adige",
    code: 'A137',
    province: 'VR'
  },
  {
    name: 'Albareto',
    code: 'A138',
    province: 'PR'
  },
  {
    name: 'Albaretto della Torre',
    code: 'A139',
    province: 'CN'
  },
  {
    name: 'Albavilla',
    code: 'A143',
    province: 'CO'
  },
  {
    name: 'Albenga',
    code: 'A145',
    province: 'SV'
  },
  {
    name: 'Albera Ligure',
    code: 'A146',
    province: 'AL'
  },
  {
    name: 'Alberobello',
    code: 'A149',
    province: 'BA'
  },
  {
    name: 'Alberona',
    code: 'A150',
    province: 'FG'
  },
  {
    name: 'Albese con Cassano',
    code: 'A153',
    province: 'CO'
  },
  {
    name: 'Albettone',
    code: 'A154',
    province: 'VI'
  },
  {
    name: 'Albi',
    code: 'A155',
    province: 'CZ'
  },
  {
    name: "Albiano d'Ivrea",
    code: 'A157',
    province: 'TO'
  },
  {
    name: 'Albiano',
    code: 'A158',
    province: 'TN'
  },
  {
    name: 'Albiate',
    code: 'A159',
    province: 'MB'
  },
  {
    name: 'Albidona',
    code: 'A160',
    province: 'CS'
  },
  {
    name: 'Albignasego',
    code: 'A161',
    province: 'PD'
  },
  {
    name: 'Albinea',
    code: 'A162',
    province: 'RE'
  },
  {
    name: 'Albino',
    code: 'A163',
    province: 'BG'
  },
  {
    name: 'Albiolo',
    code: 'A164',
    province: 'CO'
  },
  {
    name: 'Albissola Marina',
    code: 'A165',
    province: 'SV'
  },
  {
    name: 'Albisola Superiore',
    code: 'A166',
    province: 'SV'
  },
  {
    name: 'Albizzate',
    code: 'A167',
    province: 'VA'
  },
  {
    name: 'Albonese',
    code: 'A171',
    province: 'PV'
  },
  {
    name: 'Albosaggia',
    code: 'A172',
    province: 'SO'
  },
  {
    name: 'Albugnano',
    code: 'A173',
    province: 'AT'
  },
  {
    name: 'Albuzzano',
    code: 'A175',
    province: 'PV'
  },
  {
    name: 'Alcamo',
    code: 'A176',
    province: 'TP'
  },
  {
    name: 'Alcara li Fusi',
    code: 'A177',
    province: 'ME'
  },
  {
    name: 'Aldeno',
    code: 'A178',
    province: 'TN'
  },
  {
    name: 'Aldino/Aldein',
    italianName: 'Aldino',
    foreignName: 'Aldein',
    code: 'A179',
    province: 'BZ'
  },
  {
    name: 'Ales',
    code: 'A180',
    province: 'OR'
  },
  {
    name: 'Alessandria della Rocca',
    code: 'A181',
    province: 'AG'
  },
  {
    name: 'Alessandria',
    code: 'A182',
    province: 'AL'
  },
  {
    name: 'Alessandria del Carretto',
    code: 'A183',
    province: 'CS'
  },
  {
    name: 'Alessano',
    code: 'A184',
    province: 'LE'
  },
  {
    name: 'Alezio',
    code: 'A185',
    province: 'LE'
  },
  {
    name: 'Alfano',
    code: 'A186',
    province: 'SA'
  },
  {
    name: 'Alfedena',
    code: 'A187',
    province: 'AQ'
  },
  {
    name: 'Alfianello',
    code: 'A188',
    province: 'BS'
  },
  {
    name: 'Alfiano Natta',
    code: 'A189',
    province: 'AL'
  },
  {
    name: 'Alfonsine',
    code: 'A191',
    province: 'RA'
  },
  {
    name: 'Alghero',
    code: 'A192',
    province: 'SS'
  },
  {
    name: 'Algua',
    code: 'A193',
    province: 'BG'
  },
  {
    name: 'Alì',
    code: 'A194',
    province: 'ME'
  },
  {
    name: 'Alia',
    code: 'A195',
    province: 'PA'
  },
  {
    name: 'Aliano',
    code: 'A196',
    province: 'MT'
  },
  {
    name: 'Alice Bel Colle',
    code: 'A197',
    province: 'AL'
  },
  {
    name: 'Alice Castello',
    code: 'A198',
    province: 'VC'
  },
  {
    name: 'Alife',
    code: 'A200',
    province: 'CE'
  },
  {
    name: 'Alì Terme',
    code: 'A201',
    province: 'ME'
  },
  {
    name: 'Alimena',
    code: 'A202',
    province: 'PA'
  },
  {
    name: 'Aliminusa',
    code: 'A203',
    province: 'PA'
  },
  {
    name: 'Allai',
    code: 'A204',
    province: 'OR'
  },
  {
    name: 'Allein',
    code: 'A205',
    province: 'AO'
  },
  {
    name: 'Alleghe',
    code: 'A206',
    province: 'BL'
  },
  {
    name: 'Allerona',
    code: 'A207',
    province: 'TR'
  },
  {
    name: 'Alliste',
    code: 'A208',
    province: 'LE'
  },
  {
    name: 'Allumiere',
    code: 'A210',
    province: 'RM'
  },
  {
    name: 'Almè',
    code: 'A214',
    province: 'BG'
  },
  {
    name: "Villa d'Almè",
    code: 'A215',
    province: 'BG'
  },
  {
    name: 'Almenno San Bartolomeo',
    code: 'A216',
    province: 'BG'
  },
  {
    name: 'Almenno San Salvatore',
    code: 'A217',
    province: 'BG'
  },
  {
    name: 'Almese',
    code: 'A218',
    province: 'TO'
  },
  {
    name: 'Alonte',
    code: 'A220',
    province: 'VI'
  },
  {
    name: 'Alpette',
    code: 'A221',
    province: 'TO'
  },
  {
    name: 'Alpignano',
    code: 'A222',
    province: 'TO'
  },
  {
    name: 'Alseno',
    code: 'A223',
    province: 'PC'
  },
  {
    name: 'Alserio',
    code: 'A224',
    province: 'CO'
  },
  {
    name: 'Altamura',
    code: 'A225',
    province: 'BA'
  },
  {
    name: 'Altare',
    code: 'A226',
    province: 'SV'
  },
  {
    name: 'Altavilla Monferrato',
    code: 'A227',
    province: 'AL'
  },
  {
    name: 'Altavilla Irpina',
    code: 'A228',
    province: 'AV'
  },
  {
    name: 'Altavilla Milicia',
    code: 'A229',
    province: 'PA'
  },
  {
    name: 'Altavilla Silentina',
    code: 'A230',
    province: 'SA'
  },
  {
    name: 'Altavilla Vicentina',
    code: 'A231',
    province: 'VI'
  },
  {
    name: 'Altidona',
    code: 'A233',
    province: 'FM'
  },
  {
    name: 'Altilia',
    code: 'A234',
    province: 'CS'
  },
  {
    name: 'Altino',
    code: 'A235',
    province: 'CH'
  },
  {
    name: 'Altissimo',
    code: 'A236',
    province: 'VI'
  },
  {
    name: 'Altivole',
    code: 'A237',
    province: 'TV'
  },
  {
    name: 'Alto',
    code: 'A238',
    province: 'CN'
  },
  {
    name: 'Altofonte',
    code: 'A239',
    province: 'PA'
  },
  {
    name: 'Altomonte',
    code: 'A240',
    province: 'CS'
  },
  {
    name: 'Altopascio',
    code: 'A241',
    province: 'LU'
  },
  {
    name: 'Alviano',
    code: 'A242',
    province: 'TR'
  },
  {
    name: 'Alvignano',
    code: 'A243',
    province: 'CE'
  },
  {
    name: 'Alvito',
    code: 'A244',
    province: 'FR'
  },
  {
    name: 'Alzano Scrivia',
    code: 'A245',
    province: 'AL'
  },
  {
    name: 'Alzano Lombardo',
    code: 'A246',
    province: 'BG'
  },
  {
    name: 'Alzate Brianza',
    code: 'A249',
    province: 'CO'
  },
  {
    name: 'Amalfi',
    code: 'A251',
    province: 'SA'
  },
  {
    name: 'Amandola',
    code: 'A252',
    province: 'FM'
  },
  {
    name: 'Amantea',
    code: 'A253',
    province: 'CS'
  },
  {
    name: 'Amaro',
    code: 'A254',
    province: 'UD'
  },
  {
    name: 'Amaroni',
    code: 'A255',
    province: 'CZ'
  },
  {
    name: 'Amaseno',
    code: 'A256',
    province: 'FR'
  },
  {
    name: 'Amato',
    code: 'A257',
    province: 'CZ'
  },
  {
    name: 'Amatrice',
    code: 'A258',
    province: 'RI'
  },
  {
    name: 'Ambivere',
    code: 'A259',
    province: 'BG'
  },
  {
    name: 'Ameglia',
    code: 'A261',
    province: 'SP'
  },
  {
    name: 'Amelia',
    code: 'A262',
    province: 'TR'
  },
  {
    name: 'Amendolara',
    code: 'A263',
    province: 'CS'
  },
  {
    name: 'Ameno',
    code: 'A264',
    province: 'NO'
  },
  {
    name: 'Amorosi',
    code: 'A265',
    province: 'BN'
  },
  {
    name: "Cortina d'Ampezzo",
    code: 'A266',
    province: 'BL'
  },
  {
    name: 'Ampezzo',
    code: 'A267',
    province: 'UD'
  },
  {
    name: 'Anacapri',
    code: 'A268',
    province: 'NA'
  },
  {
    name: 'Anagni',
    code: 'A269',
    province: 'FR'
  },
  {
    name: 'Ancarano',
    code: 'A270',
    province: 'TE'
  },
  {
    name: 'Ancona',
    code: 'A271',
    province: 'AN'
  },
  {
    name: 'Andali',
    code: 'A272',
    province: 'CZ'
  },
  {
    name: 'Andalo Valtellino',
    code: 'A273',
    province: 'SO'
  },
  {
    name: 'Andalo',
    code: 'A274',
    province: 'TN'
  },
  {
    name: 'Andezeno',
    code: 'A275',
    province: 'TO'
  },
  {
    name: 'Andora',
    code: 'A278',
    province: 'SV'
  },
  {
    name: 'Andorno Micca',
    code: 'A280',
    province: 'BI'
  },
  {
    name: 'Andrano',
    code: 'A281',
    province: 'LE'
  },
  {
    name: 'Andrate',
    code: 'A282',
    province: 'TO'
  },
  {
    name: 'Andreis',
    code: 'A283',
    province: 'PN'
  },
  {
    name: 'Andretta',
    code: 'A284',
    province: 'AV'
  },
  {
    name: 'Andria',
    code: 'A285',
    province: 'BT'
  },
  {
    name: 'Andriano/Andrian',
    italianName: 'Andriano',
    foreignName: 'Andrian',
    code: 'A286',
    province: 'BZ'
  },
  {
    name: 'Anela',
    code: 'A287',
    province: 'SS'
  },
  {
    name: 'Anfo',
    code: 'A288',
    province: 'BS'
  },
  {
    name: 'Angera',
    code: 'A290',
    province: 'VA'
  },
  {
    name: 'Anghiari',
    code: 'A291',
    province: 'AR'
  },
  {
    name: 'Angiari',
    code: 'A292',
    province: 'VR'
  },
  {
    name: 'Angolo Terme',
    code: 'A293',
    province: 'BS'
  },
  {
    name: 'Angri',
    code: 'A294',
    province: 'SA'
  },
  {
    name: 'Angrogna',
    code: 'A295',
    province: 'TO'
  },
  {
    name: 'Anguillara Veneta',
    code: 'A296',
    province: 'PD'
  },
  {
    name: 'Anguillara Sabazia',
    code: 'A297',
    province: 'RM'
  },
  {
    name: 'Annicco',
    code: 'A299',
    province: 'CR'
  },
  {
    name: 'Castello di Annone',
    code: 'A300',
    province: 'AT'
  },
  {
    name: 'Annone di Brianza',
    code: 'A301',
    province: 'LC'
  },
  {
    name: 'Annone Veneto',
    code: 'A302',
    province: 'VE'
  },
  {
    name: 'Anoia',
    code: 'A303',
    province: 'RC'
  },
  {
    name: 'Antegnate',
    code: 'A304',
    province: 'BG'
  },
  {
    name: 'Antey-Saint-André',
    code: 'A305',
    province: 'AO'
  },
  {
    name: 'Anterivo/Altrei',
    italianName: 'Anterivo',
    foreignName: 'Altrei',
    code: 'A306',
    province: 'BZ'
  },
  {
    name: 'La Magdeleine',
    code: 'A308',
    province: 'AO'
  },
  {
    name: 'Anticoli Corrado',
    code: 'A309',
    province: 'RM'
  },
  {
    name: 'Fiuggi',
    code: 'A310',
    province: 'FR'
  },
  {
    name: 'Antignano',
    code: 'A312',
    province: 'AT'
  },
  {
    name: 'Antillo',
    code: 'A313',
    province: 'ME'
  },
  {
    name: 'Antonimina',
    code: 'A314',
    province: 'RC'
  },
  {
    name: 'Antrodoco',
    code: 'A315',
    province: 'RI'
  },
  {
    name: 'Antrona Schieranco',
    code: 'A317',
    province: 'VB'
  },
  {
    name: 'Anversa degli Abruzzi',
    code: 'A318',
    province: 'AQ'
  },
  {
    name: 'Anzano del Parco',
    code: 'A319',
    province: 'CO'
  },
  {
    name: 'Anzano di Puglia',
    code: 'A320',
    province: 'FG'
  },
  {
    name: 'Anzi',
    code: 'A321',
    province: 'PZ'
  },
  {
    name: 'Anzio',
    code: 'A323',
    province: 'RM'
  },
  {
    name: "Anzola dell'Emilia",
    code: 'A324',
    province: 'BO'
  },
  {
    name: "Anzola d'Ossola",
    code: 'A325',
    province: 'VB'
  },
  {
    name: 'Aosta',
    code: 'A326',
    province: 'AO'
  },
  {
    name: 'Apecchio',
    code: 'A327',
    province: 'PU'
  },
  {
    name: 'Apice',
    code: 'A328',
    province: 'BN'
  },
  {
    name: 'Apiro',
    code: 'A329',
    province: 'MC'
  },
  {
    name: 'Apollosa',
    code: 'A330',
    province: 'BN'
  },
  {
    name: 'Appiano sulla strada del vino/Eppan an der Weinstraße',
    italianName: 'Appiano sulla strada del vino',
    foreignName: 'Eppan an der Weinstraße',
    code: 'A332',
    province: 'BZ'
  },
  {
    name: 'Appiano Gentile',
    code: 'A333',
    province: 'CO'
  },
  {
    name: 'Appignano',
    code: 'A334',
    province: 'MC'
  },
  {
    name: 'Appignano del Tronto',
    code: 'A335',
    province: 'AP'
  },
  {
    name: 'Aprica',
    code: 'A337',
    province: 'SO'
  },
  {
    name: 'Apricale',
    code: 'A338',
    province: 'IM'
  },
  {
    name: 'Apricena',
    code: 'A339',
    province: 'FG'
  },
  {
    name: 'Aprigliano',
    code: 'A340',
    province: 'CS'
  },
  {
    name: 'Aprilia',
    code: 'A341',
    province: 'LT'
  },
  {
    name: 'Aquara',
    code: 'A343',
    province: 'SA'
  },
  {
    name: "Aquila d'Arroscia",
    code: 'A344',
    province: 'IM'
  },
  {
    name: "L'Aquila",
    code: 'A345',
    province: 'AQ'
  },
  {
    name: 'Aquileia',
    code: 'A346',
    province: 'UD'
  },
  {
    name: 'Aquilonia',
    code: 'A347',
    province: 'AV'
  },
  {
    name: 'Aquino',
    code: 'A348',
    province: 'FR'
  },
  {
    name: 'Aradeo',
    code: 'A350',
    province: 'LE'
  },
  {
    name: 'Aragona',
    code: 'A351',
    province: 'AG'
  },
  {
    name: 'Aramengo',
    code: 'A352',
    province: 'AT'
  },
  {
    name: 'Arba',
    code: 'A354',
    province: 'PN'
  },
  {
    name: 'Tortolì',
    code: 'A355',
    province: 'NU'
  },
  {
    name: 'Arborea',
    code: 'A357',
    province: 'OR'
  },
  {
    name: 'Arborio',
    code: 'A358',
    province: 'VC'
  },
  {
    name: 'Arbus',
    code: 'A359',
    province: 'SU'
  },
  {
    name: 'Arcade',
    code: 'A360',
    province: 'TV'
  },
  {
    name: 'Arce',
    code: 'A363',
    province: 'FR'
  },
  {
    name: 'Arcene',
    code: 'A365',
    province: 'BG'
  },
  {
    name: 'Arcevia',
    code: 'A366',
    province: 'AN'
  },
  {
    name: 'Archi',
    code: 'A367',
    province: 'CH'
  },
  {
    name: "San Nicolò d'Arcidano",
    code: 'A368',
    province: 'OR'
  },
  {
    name: 'Arcidosso',
    code: 'A369',
    province: 'GR'
  },
  {
    name: 'Arcinazzo Romano',
    code: 'A370',
    province: 'RM'
  },
  {
    name: 'Arcisate',
    code: 'A371',
    province: 'VA'
  },
  {
    name: 'Arco',
    code: 'A372',
    province: 'TN'
  },
  {
    name: 'Arcola',
    code: 'A373',
    province: 'SP'
  },
  {
    name: 'Arcole',
    code: 'A374',
    province: 'VR'
  },
  {
    name: 'Arconate',
    code: 'A375',
    province: 'MI'
  },
  {
    name: 'Arcore',
    code: 'A376',
    province: 'MB'
  },
  {
    name: 'Arcugnano',
    code: 'A377',
    province: 'VI'
  },
  {
    name: 'Ardara',
    code: 'A379',
    province: 'SS'
  },
  {
    name: 'Ardauli',
    code: 'A380',
    province: 'OR'
  },
  {
    name: 'Ardenno',
    code: 'A382',
    province: 'SO'
  },
  {
    name: 'Ardesio',
    code: 'A383',
    province: 'BG'
  },
  {
    name: 'Ardore',
    code: 'A385',
    province: 'RC'
  },
  {
    name: 'Arena',
    code: 'A386',
    province: 'VV'
  },
  {
    name: 'Arena Po',
    code: 'A387',
    province: 'PV'
  },
  {
    name: 'Arenzano',
    code: 'A388',
    province: 'GE'
  },
  {
    name: 'Arese',
    code: 'A389',
    province: 'MI'
  },
  {
    name: 'Arezzo',
    code: 'A390',
    province: 'AR'
  },
  {
    name: 'Argegno',
    code: 'A391',
    province: 'CO'
  },
  {
    name: 'Argelato',
    code: 'A392',
    province: 'BO'
  },
  {
    name: 'Argenta',
    code: 'A393',
    province: 'FE'
  },
  {
    name: 'Argentera',
    code: 'A394',
    province: 'CN'
  },
  {
    name: 'Arguello',
    code: 'A396',
    province: 'CN'
  },
  {
    name: 'Argusto',
    code: 'A397',
    province: 'CZ'
  },
  {
    name: 'Ari',
    code: 'A398',
    province: 'CH'
  },
  {
    name: 'Ariano Irpino',
    code: 'A399',
    province: 'AV'
  },
  {
    name: 'Ariano nel Polesine',
    code: 'A400',
    province: 'RO'
  },
  {
    name: 'Ariccia',
    code: 'A401',
    province: 'RM'
  },
  {
    name: 'Arielli',
    code: 'A402',
    province: 'CH'
  },
  {
    name: 'Arienzo',
    code: 'A403',
    province: 'CE'
  },
  {
    name: 'Arignano',
    code: 'A405',
    province: 'TO'
  },
  {
    name: 'Aritzo',
    code: 'A407',
    province: 'NU'
  },
  {
    name: 'Arizzano',
    code: 'A409',
    province: 'VB'
  },
  {
    name: 'Arlena di Castro',
    code: 'A412',
    province: 'VT'
  },
  {
    name: 'Arluno',
    code: 'A413',
    province: 'MI'
  },
  {
    name: 'Armeno',
    code: 'A414',
    province: 'NO'
  },
  {
    name: 'Armento',
    code: 'A415',
    province: 'PZ'
  },
  {
    name: 'Armo',
    code: 'A418',
    province: 'IM'
  },
  {
    name: 'Armungia',
    code: 'A419',
    province: 'SU'
  },
  {
    name: 'Arnara',
    code: 'A421',
    province: 'FR'
  },
  {
    name: 'Arnasco',
    code: 'A422',
    province: 'SV'
  },
  {
    name: 'Arnad',
    code: 'A424',
    province: 'AO'
  },
  {
    name: 'Arnesano',
    code: 'A425',
    province: 'LE'
  },
  {
    name: 'Arola',
    code: 'A427',
    province: 'VB'
  },
  {
    name: 'Arona',
    code: 'A429',
    province: 'NO'
  },
  {
    name: 'Arosio',
    code: 'A430',
    province: 'CO'
  },
  {
    name: 'Arpaia',
    code: 'A431',
    province: 'BN'
  },
  {
    name: 'Arpaise',
    code: 'A432',
    province: 'BN'
  },
  {
    name: 'Arpino',
    code: 'A433',
    province: 'FR'
  },
  {
    name: 'Arquà Petrarca',
    code: 'A434',
    province: 'PD'
  },
  {
    name: 'Arquà Polesine',
    code: 'A435',
    province: 'RO'
  },
  {
    name: 'Arquata Scrivia',
    code: 'A436',
    province: 'AL'
  },
  {
    name: 'Arquata del Tronto',
    code: 'A437',
    province: 'AP'
  },
  {
    name: 'Arre',
    code: 'A438',
    province: 'PD'
  },
  {
    name: 'Arrone',
    code: 'A439',
    province: 'TR'
  },
  {
    name: "Arzago d'Adda",
    code: 'A440',
    province: 'BG'
  },
  {
    name: 'Arsago Seprio',
    code: 'A441',
    province: 'VA'
  },
  {
    name: 'Arsiè',
    code: 'A443',
    province: 'BL'
  },
  {
    name: 'Arsiero',
    code: 'A444',
    province: 'VI'
  },
  {
    name: 'Arsita',
    code: 'A445',
    province: 'TE'
  },
  {
    name: 'Arsoli',
    code: 'A446',
    province: 'RM'
  },
  {
    name: 'Arta Terme',
    code: 'A447',
    province: 'UD'
  },
  {
    name: 'Artegna',
    code: 'A448',
    province: 'UD'
  },
  {
    name: 'Artena',
    code: 'A449',
    province: 'RM'
  },
  {
    name: 'Artogne',
    code: 'A451',
    province: 'BS'
  },
  {
    name: 'Arvier',
    code: 'A452',
    province: 'AO'
  },
  {
    name: 'Arzachena',
    code: 'A453',
    province: 'SS'
  },
  {
    name: 'Arzana',
    code: 'A454',
    province: 'NU'
  },
  {
    name: 'Arzano',
    code: 'A455',
    province: 'NA'
  },
  {
    name: 'Arzergrande',
    code: 'A458',
    province: 'PD'
  },
  {
    name: 'Arzignano',
    code: 'A459',
    province: 'VI'
  },
  {
    name: 'Ascea',
    code: 'A460',
    province: 'SA'
  },
  {
    name: 'Asciano',
    code: 'A461',
    province: 'SI'
  },
  {
    name: 'Ascoli Piceno',
    code: 'A462',
    province: 'AP'
  },
  {
    name: 'Ascoli Satriano',
    code: 'A463',
    province: 'FG'
  },
  {
    name: 'Ascrea',
    code: 'A464',
    province: 'RI'
  },
  {
    name: 'Asiago',
    code: 'A465',
    province: 'VI'
  },
  {
    name: 'Asigliano Vercellese',
    code: 'A466',
    province: 'VC'
  },
  {
    name: 'Asigliano Veneto',
    code: 'A467',
    province: 'VI'
  },
  {
    name: 'Sinalunga',
    code: 'A468',
    province: 'SI'
  },
  {
    name: 'Asola',
    code: 'A470',
    province: 'MN'
  },
  {
    name: 'Asolo',
    code: 'A471',
    province: 'TV'
  },
  {
    name: 'Casperia',
    code: 'A472',
    province: 'RI'
  },
  {
    name: 'Assago',
    code: 'A473',
    province: 'MI'
  },
  {
    name: 'Assemini',
    code: 'A474',
    province: 'CA'
  },
  {
    name: 'Assisi',
    code: 'A475',
    province: 'PG'
  },
  {
    name: 'Asso',
    code: 'A476',
    province: 'CO'
  },
  {
    name: 'Assolo',
    code: 'A477',
    province: 'OR'
  },
  {
    name: 'Assoro',
    code: 'A478',
    province: 'EN'
  },
  {
    name: 'Asti',
    code: 'A479',
    province: 'AT'
  },
  {
    name: 'Asuni',
    code: 'A480',
    province: 'OR'
  },
  {
    name: 'Ateleta',
    code: 'A481',
    province: 'AQ'
  },
  {
    name: 'Atella',
    code: 'A482',
    province: 'PZ'
  },
  {
    name: 'Atena Lucana',
    code: 'A484',
    province: 'SA'
  },
  {
    name: 'Atessa',
    code: 'A485',
    province: 'CH'
  },
  {
    name: 'Atina',
    code: 'A486',
    province: 'FR'
  },
  {
    name: 'Atrani',
    code: 'A487',
    province: 'SA'
  },
  {
    name: 'Atri',
    code: 'A488',
    province: 'TE'
  },
  {
    name: 'Atripalda',
    code: 'A489',
    province: 'AV'
  },
  {
    name: 'Attigliano',
    code: 'A490',
    province: 'TR'
  },
  {
    name: 'Attimis',
    code: 'A491',
    province: 'UD'
  },
  {
    name: 'Atzara',
    code: 'A492',
    province: 'NU'
  },
  {
    name: 'Augusta',
    code: 'A494',
    province: 'SR'
  },
  {
    name: 'Auletta',
    code: 'A495',
    province: 'SA'
  },
  {
    name: 'Aulla',
    code: 'A496',
    province: 'MS'
  },
  {
    name: 'Aurano',
    code: 'A497',
    province: 'VB'
  },
  {
    name: 'Aurigo',
    code: 'A499',
    province: 'IM'
  },
  {
    name: 'Auronzo di Cadore',
    code: 'A501',
    province: 'BL'
  },
  {
    name: 'Ausonia',
    code: 'A502',
    province: 'FR'
  },
  {
    name: 'Austis',
    code: 'A503',
    province: 'NU'
  },
  {
    name: 'Avegno',
    code: 'A506',
    province: 'GE'
  },
  {
    name: 'Avelengo/Hafling',
    italianName: 'Avelengo',
    foreignName: 'Hafling',
    code: 'A507',
    province: 'BZ'
  },
  {
    name: 'Avella',
    code: 'A508',
    province: 'AV'
  },
  {
    name: 'Avellino',
    code: 'A509',
    province: 'AV'
  },
  {
    name: 'Averara',
    code: 'A511',
    province: 'BG'
  },
  {
    name: 'Aversa',
    code: 'A512',
    province: 'CE'
  },
  {
    name: 'Avetrana',
    code: 'A514',
    province: 'TA'
  },
  {
    name: 'Avezzano',
    code: 'A515',
    province: 'AQ'
  },
  {
    name: 'Aviano',
    code: 'A516',
    province: 'PN'
  },
  {
    name: 'Aviatico',
    code: 'A517',
    province: 'BG'
  },
  {
    name: 'Avigliana',
    code: 'A518',
    province: 'TO'
  },
  {
    name: 'Avigliano',
    code: 'A519',
    province: 'PZ'
  },
  {
    name: 'Avio',
    code: 'A520',
    province: 'TN'
  },
  {
    name: 'Avise',
    code: 'A521',
    province: 'AO'
  },
  {
    name: 'Avola',
    code: 'A522',
    province: 'SR'
  },
  {
    name: 'Avolasca',
    code: 'A523',
    province: 'AL'
  },
  {
    name: 'Azeglio',
    code: 'A525',
    province: 'TO'
  },
  {
    name: 'Azzanello',
    code: 'A526',
    province: 'CR'
  },
  {
    name: "Azzano d'Asti",
    code: 'A527',
    province: 'AT'
  },
  {
    name: 'Azzano San Paolo',
    code: 'A528',
    province: 'BG'
  },
  {
    name: 'Azzano Mella',
    code: 'A529',
    province: 'BS'
  },
  {
    name: 'Azzano Decimo',
    code: 'A530',
    province: 'PN'
  },
  {
    name: 'Azzate',
    code: 'A531',
    province: 'VA'
  },
  {
    name: 'Azzio',
    code: 'A532',
    province: 'VA'
  },
  {
    name: 'Azzone',
    code: 'A533',
    province: 'BG'
  },
  {
    name: 'Baceno',
    code: 'A534',
    province: 'VB'
  },
  {
    name: 'Bacoli',
    code: 'A535',
    province: 'NA'
  },
  {
    name: 'Badalucco',
    code: 'A536',
    province: 'IM'
  },
  {
    name: 'Badia/Abtei',
    italianName: 'Badia',
    foreignName: 'Abtei',
    code: 'A537',
    province: 'BZ'
  },
  {
    name: 'Badia Pavese',
    code: 'A538',
    province: 'PV'
  },
  {
    name: 'Badia Polesine',
    code: 'A539',
    province: 'RO'
  },
  {
    name: 'Badia Calavena',
    code: 'A540',
    province: 'VR'
  },
  {
    name: 'Badia Tedalda',
    code: 'A541',
    province: 'AR'
  },
  {
    name: 'Badolato',
    code: 'A542',
    province: 'CZ'
  },
  {
    name: 'Bagaladi',
    code: 'A544',
    province: 'RC'
  },
  {
    name: 'Bagheria',
    code: 'A546',
    province: 'PA'
  },
  {
    name: 'Bagnacavallo',
    code: 'A547',
    province: 'RA'
  },
  {
    name: 'Bagnaria',
    code: 'A550',
    province: 'PV'
  },
  {
    name: 'Bagnara di Romagna',
    code: 'A551',
    province: 'RA'
  },
  {
    name: 'Bagnara Calabra',
    code: 'A552',
    province: 'RC'
  },
  {
    name: 'Bagnaria Arsa',
    code: 'A553',
    province: 'UD'
  },
  {
    name: 'Bagnasco',
    code: 'A555',
    province: 'CN'
  },
  {
    name: 'Bagnatica',
    code: 'A557',
    province: 'BG'
  },
  {
    name: 'Bagni di Lucca',
    code: 'A560',
    province: 'LU'
  },
  {
    name: 'Montecatini-Terme',
    code: 'A561',
    province: 'PT'
  },
  {
    name: 'San Giuliano Terme',
    code: 'A562',
    province: 'PI'
  },
  {
    name: 'Bagno a Ripoli',
    code: 'A564',
    province: 'FI'
  },
  {
    name: 'Bagno di Romagna',
    code: 'A565',
    province: 'FC'
  },
  {
    name: 'Bagnoli Irpino',
    code: 'A566',
    province: 'AV'
  },
  {
    name: 'Bagnoli del Trigno',
    code: 'A567',
    province: 'IS'
  },
  {
    name: 'Bagnoli di Sopra',
    code: 'A568',
    province: 'PD'
  },
  {
    name: 'Bagnolo Mella',
    code: 'A569',
    province: 'BS'
  },
  {
    name: 'Bagnolo Cremasco',
    code: 'A570',
    province: 'CR'
  },
  {
    name: 'Bagnolo Piemonte',
    code: 'A571',
    province: 'CN'
  },
  {
    name: 'Bagnolo del Salento',
    code: 'A572',
    province: 'LE'
  },
  {
    name: 'Bagnolo in Piano',
    code: 'A573',
    province: 'RE'
  },
  {
    name: 'Bagnolo di Po',
    code: 'A574',
    province: 'RO'
  },
  {
    name: 'Bagnolo San Vito',
    code: 'A575',
    province: 'MN'
  },
  {
    name: 'Bagnone',
    code: 'A576',
    province: 'MS'
  },
  {
    name: 'Bagnoregio',
    code: 'A577',
    province: 'VT'
  },
  {
    name: 'Bagolino',
    code: 'A578',
    province: 'BS'
  },
  {
    name: 'Baia e Latina',
    code: 'A579',
    province: 'CE'
  },
  {
    name: 'Baiano',
    code: 'A580',
    province: 'AV'
  },
  {
    name: 'Bajardo',
    code: 'A581',
    province: 'IM'
  },
  {
    name: 'Bairo',
    code: 'A584',
    province: 'TO'
  },
  {
    name: 'Baiso',
    code: 'A586',
    province: 'RE'
  },
  {
    name: 'Balangero',
    code: 'A587',
    province: 'TO'
  },
  {
    name: "Baldichieri d'Asti",
    code: 'A588',
    province: 'AT'
  },
  {
    name: "Baldissero d'Alba",
    code: 'A589',
    province: 'CN'
  },
  {
    name: 'Baldissero Canavese',
    code: 'A590',
    province: 'TO'
  },
  {
    name: 'Baldissero Torinese',
    code: 'A591',
    province: 'TO'
  },
  {
    name: 'Balestrate',
    code: 'A592',
    province: 'PA'
  },
  {
    name: 'Balestrino',
    code: 'A593',
    province: 'SV'
  },
  {
    name: 'Ballabio',
    code: 'A594',
    province: 'LC'
  },
  {
    name: 'Ballao',
    code: 'A597',
    province: 'SU'
  },
  {
    name: 'Balme',
    code: 'A599',
    province: 'TO'
  },
  {
    name: 'Balmuccia',
    code: 'A600',
    province: 'VC'
  },
  {
    name: 'Balocco',
    code: 'A601',
    province: 'VC'
  },
  {
    name: 'Balsorano',
    code: 'A603',
    province: 'AQ'
  },
  {
    name: 'Balvano',
    code: 'A604',
    province: 'PZ'
  },
  {
    name: 'Balzola',
    code: 'A605',
    province: 'AL'
  },
  {
    name: 'Banari',
    code: 'A606',
    province: 'SS'
  },
  {
    name: 'Banchette',
    code: 'A607',
    province: 'TO'
  },
  {
    name: 'Villa Verde',
    code: 'A609',
    province: 'OR'
  },
  {
    name: 'Bannio Anzino',
    code: 'A610',
    province: 'VB'
  },
  {
    name: 'Banzi',
    code: 'A612',
    province: 'PZ'
  },
  {
    name: 'Baone',
    code: 'A613',
    province: 'PD'
  },
  {
    name: 'Baradili',
    code: 'A614',
    province: 'OR'
  },
  {
    name: 'Baragiano',
    code: 'A615',
    province: 'PZ'
  },
  {
    name: 'Baranello',
    code: 'A616',
    province: 'CB'
  },
  {
    name: "Barano d'Ischia",
    code: 'A617',
    province: 'NA'
  },
  {
    name: 'Baranzate',
    code: 'A618',
    province: 'MI'
  },
  {
    name: 'Barasso',
    code: 'A619',
    province: 'VA'
  },
  {
    name: 'Baratili San Pietro',
    code: 'A621',
    province: 'OR'
  },
  {
    name: 'Barbania',
    code: 'A625',
    province: 'TO'
  },
  {
    name: 'Barbara',
    code: 'A626',
    province: 'AN'
  },
  {
    name: 'Barbarano Romano',
    code: 'A628',
    province: 'VT'
  },
  {
    name: 'Barbaresco',
    code: 'A629',
    province: 'CN'
  },
  {
    name: 'Barbariga',
    code: 'A630',
    province: 'BS'
  },
  {
    name: 'Barbata',
    code: 'A631',
    province: 'BG'
  },
  {
    name: 'Barberino di Mugello',
    code: 'A632',
    province: 'FI'
  },
  {
    name: 'Barbianello',
    code: 'A634',
    province: 'PV'
  },
  {
    name: 'Barbiano/Barbian',
    italianName: 'Barbiano',
    foreignName: 'Barbian',
    code: 'A635',
    province: 'BZ'
  },
  {
    name: 'Barbona',
    code: 'A637',
    province: 'PD'
  },
  {
    name: 'Barcellona Pozzo di Gotto',
    code: 'A638',
    province: 'ME'
  },
  {
    name: 'Barcis',
    code: 'A640',
    province: 'PN'
  },
  {
    name: 'Bard',
    code: 'A643',
    province: 'AO'
  },
  {
    name: 'Bardi',
    code: 'A646',
    province: 'PR'
  },
  {
    name: 'Bardineto',
    code: 'A647',
    province: 'SV'
  },
  {
    name: 'Bardolino',
    code: 'A650',
    province: 'VR'
  },
  {
    name: 'Bardonecchia',
    code: 'A651',
    province: 'TO'
  },
  {
    name: 'Bareggio',
    code: 'A652',
    province: 'MI'
  },
  {
    name: 'Barengo',
    code: 'A653',
    province: 'NO'
  },
  {
    name: 'Baressa',
    code: 'A655',
    province: 'OR'
  },
  {
    name: 'Barete',
    code: 'A656',
    province: 'AQ'
  },
  {
    name: 'Barga',
    code: 'A657',
    province: 'LU'
  },
  {
    name: 'Bargagli',
    code: 'A658',
    province: 'GE'
  },
  {
    name: 'Barge',
    code: 'A660',
    province: 'CN'
  },
  {
    name: 'Barghe',
    code: 'A661',
    province: 'BS'
  },
  {
    name: 'Bari',
    code: 'A662',
    province: 'BA'
  },
  {
    name: 'Bari Sardo',
    code: 'A663',
    province: 'NU'
  },
  {
    name: 'Bariano',
    code: 'A664',
    province: 'BG'
  },
  {
    name: 'Baricella',
    code: 'A665',
    province: 'BO'
  },
  {
    name: 'Barile',
    code: 'A666',
    province: 'PZ'
  },
  {
    name: 'Barisciano',
    code: 'A667',
    province: 'AQ'
  },
  {
    name: 'Barlassina',
    code: 'A668',
    province: 'MB'
  },
  {
    name: 'Barletta',
    code: 'A669',
    province: 'BT'
  },
  {
    name: 'Barni',
    code: 'A670',
    province: 'CO'
  },
  {
    name: 'Barolo',
    code: 'A671',
    province: 'CN'
  },
  {
    name: 'Barone Canavese',
    code: 'A673',
    province: 'TO'
  },
  {
    name: 'Baronissi',
    code: 'A674',
    province: 'SA'
  },
  {
    name: 'Barrafranca',
    code: 'A676',
    province: 'EN'
  },
  {
    name: 'Barrali',
    code: 'A677',
    province: 'SU'
  },
  {
    name: 'Barrea',
    code: 'A678',
    province: 'AQ'
  },
  {
    name: 'Barumini',
    code: 'A681',
    province: 'SU'
  },
  {
    name: 'Barzago',
    code: 'A683',
    province: 'LC'
  },
  {
    name: 'Barzana',
    code: 'A684',
    province: 'BG'
  },
  {
    name: 'Barzanò',
    code: 'A686',
    province: 'LC'
  },
  {
    name: 'Barzio',
    code: 'A687',
    province: 'LC'
  },
  {
    name: 'Basaluzzo',
    code: 'A689',
    province: 'AL'
  },
  {
    name: 'Bascapè',
    code: 'A690',
    province: 'PV'
  },
  {
    name: 'Baschi',
    code: 'A691',
    province: 'TR'
  },
  {
    name: 'Basciano',
    code: 'A692',
    province: 'TE'
  },
  {
    name: 'Baselga di Pinè',
    code: 'A694',
    province: 'TN'
  },
  {
    name: 'Baselice',
    code: 'A696',
    province: 'BN'
  },
  {
    name: 'Basiano',
    code: 'A697',
    province: 'MI'
  },
  {
    name: 'Basicò',
    code: 'A698',
    province: 'ME'
  },
  {
    name: 'Basiglio',
    code: 'A699',
    province: 'MI'
  },
  {
    name: 'Basiliano',
    code: 'A700',
    province: 'UD'
  },
  {
    name: 'Vasanello',
    code: 'A701',
    province: 'VT'
  },
  {
    name: 'Bassano Bresciano',
    code: 'A702',
    province: 'BS'
  },
  {
    name: 'Bassano del Grappa',
    code: 'A703',
    province: 'VI'
  },
  {
    name: 'Bassano Romano',
    code: 'A704',
    province: 'VT'
  },
  {
    name: 'Tronzano Lago Maggiore',
    code: 'A705',
    province: 'VA'
  },
  {
    name: 'Bassano in Teverina',
    code: 'A706',
    province: 'VT'
  },
  {
    name: 'Bassiano',
    code: 'A707',
    province: 'LT'
  },
  {
    name: 'Bassignana',
    code: 'A708',
    province: 'AL'
  },
  {
    name: 'Bastia Mondovì',
    code: 'A709',
    province: 'CN'
  },
  {
    name: 'Bastia Umbra',
    code: 'A710',
    province: 'PG'
  },
  {
    name: 'Bastida Pancarana',
    code: 'A712',
    province: 'PV'
  },
  {
    name: 'Bastiglia',
    code: 'A713',
    province: 'MO'
  },
  {
    name: 'Battaglia Terme',
    code: 'A714',
    province: 'PD'
  },
  {
    name: 'Battifollo',
    code: 'A716',
    province: 'CN'
  },
  {
    name: 'Battipaglia',
    code: 'A717',
    province: 'SA'
  },
  {
    name: 'Battuda',
    code: 'A718',
    province: 'PV'
  },
  {
    name: 'Baucina',
    code: 'A719',
    province: 'PA'
  },
  {
    name: 'Boville Ernica',
    code: 'A720',
    province: 'FR'
  },
  {
    name: 'Bauladu',
    code: 'A721',
    province: 'OR'
  },
  {
    name: 'Baunei',
    code: 'A722',
    province: 'NU'
  },
  {
    name: 'Baveno',
    code: 'A725',
    province: 'VB'
  },
  {
    name: 'Bedero Valcuvia',
    code: 'A728',
    province: 'VA'
  },
  {
    name: 'Bedizzole',
    code: 'A729',
    province: 'BS'
  },
  {
    name: 'Bedollo',
    code: 'A730',
    province: 'TN'
  },
  {
    name: 'Bedonia',
    code: 'A731',
    province: 'PR'
  },
  {
    name: 'Bedulita',
    code: 'A732',
    province: 'BG'
  },
  {
    name: 'Bee',
    code: 'A733',
    province: 'VB'
  },
  {
    name: 'Beinasco',
    code: 'A734',
    province: 'TO'
  },
  {
    name: 'Beinette',
    code: 'A735',
    province: 'CN'
  },
  {
    name: 'Belcastro',
    code: 'A736',
    province: 'CZ'
  },
  {
    name: 'Belfiore',
    code: 'A737',
    province: 'VR'
  },
  {
    name: 'Belforte Monferrato',
    code: 'A738',
    province: 'AL'
  },
  {
    name: 'Belforte del Chienti',
    code: 'A739',
    province: 'MC'
  },
  {
    name: "Belforte all'Isauro",
    code: 'A740',
    province: 'PU'
  },
  {
    name: 'Belgioioso',
    code: 'A741',
    province: 'PV'
  },
  {
    name: 'Belgirate',
    code: 'A742',
    province: 'VB'
  },
  {
    name: 'Bella',
    code: 'A743',
    province: 'PZ'
  },
  {
    name: 'Bellano',
    code: 'A745',
    province: 'LC'
  },
  {
    name: 'Bellante',
    code: 'A746',
    province: 'TE'
  },
  {
    name: 'Bellaria-Igea Marina',
    code: 'A747',
    province: 'RN'
  },
  {
    name: 'Bellegra',
    code: 'A749',
    province: 'RM'
  },
  {
    name: 'Bellino',
    code: 'A750',
    province: 'CN'
  },
  {
    name: 'Bellinzago Lombardo',
    code: 'A751',
    province: 'MI'
  },
  {
    name: 'Bellinzago Novarese',
    code: 'A752',
    province: 'NO'
  },
  {
    name: 'Bellona',
    code: 'A755',
    province: 'CE'
  },
  {
    name: 'Bellosguardo',
    code: 'A756',
    province: 'SA'
  },
  {
    name: 'Belluno',
    code: 'A757',
    province: 'BL'
  },
  {
    name: 'Bellusco',
    code: 'A759',
    province: 'MB'
  },
  {
    name: 'Belmonte Piceno',
    code: 'A760',
    province: 'FM'
  },
  {
    name: 'Belmonte del Sannio',
    code: 'A761',
    province: 'IS'
  },
  {
    name: 'Belmonte Calabro',
    code: 'A762',
    province: 'CS'
  },
  {
    name: 'Belmonte Castello',
    code: 'A763',
    province: 'FR'
  },
  {
    name: 'Belmonte Mezzagno',
    code: 'A764',
    province: 'PA'
  },
  {
    name: 'Belmonte in Sabina',
    code: 'A765',
    province: 'RI'
  },
  {
    name: 'Belpasso',
    code: 'A766',
    province: 'CT'
  },
  {
    name: 'Belsito',
    code: 'A768',
    province: 'CS'
  },
  {
    name: 'Belvedere Ostrense',
    code: 'A769',
    province: 'AN'
  },
  {
    name: 'Belveglio',
    code: 'A770',
    province: 'AT'
  },
  {
    name: 'Lizzano in Belvedere',
    code: 'A771',
    province: 'BO'
  },
  {
    name: 'Belvedere di Spinello',
    code: 'A772',
    province: 'KR'
  },
  {
    name: 'Belvedere Marittimo',
    code: 'A773',
    province: 'CS'
  },
  {
    name: 'Belvedere Langhe',
    code: 'A774',
    province: 'CN'
  },
  {
    name: 'Belvì',
    code: 'A776',
    province: 'NU'
  },
  {
    name: 'Bema',
    code: 'A777',
    province: 'SO'
  },
  {
    name: 'Bene Lario',
    code: 'A778',
    province: 'CO'
  },
  {
    name: 'Bene Vagienna',
    code: 'A779',
    province: 'CN'
  },
  {
    name: 'Benestare',
    code: 'A780',
    province: 'RC'
  },
  {
    name: 'Benetutti',
    code: 'A781',
    province: 'SS'
  },
  {
    name: 'Benevello',
    code: 'A782',
    province: 'CN'
  },
  {
    name: 'Benevento',
    code: 'A783',
    province: 'BN'
  },
  {
    name: 'Benna',
    code: 'A784',
    province: 'BI'
  },
  {
    name: 'Bentivoglio',
    code: 'A785',
    province: 'BO'
  },
  {
    name: 'Berbenno',
    code: 'A786',
    province: 'BG'
  },
  {
    name: 'Berbenno di Valtellina',
    code: 'A787',
    province: 'SO'
  },
  {
    name: 'Berceto',
    code: 'A788',
    province: 'PR'
  },
  {
    name: 'Berchidda',
    code: 'A789',
    province: 'SS'
  },
  {
    name: 'Beregazzo con Figliaro',
    code: 'A791',
    province: 'CO'
  },
  {
    name: 'Bereguardo',
    code: 'A792',
    province: 'PV'
  },
  {
    name: 'Bergamasco',
    code: 'A793',
    province: 'AL'
  },
  {
    name: 'Bergamo',
    code: 'A794',
    province: 'BG'
  },
  {
    name: 'Bergantino',
    code: 'A795',
    province: 'RO'
  },
  {
    name: 'Bergeggi',
    code: 'A796',
    province: 'SV'
  },
  {
    name: 'Bergolo',
    code: 'A798',
    province: 'CN'
  },
  {
    name: 'Berlingo',
    code: 'A799',
    province: 'BS'
  },
  {
    name: 'Bernalda',
    code: 'A801',
    province: 'MT'
  },
  {
    name: 'Bernareggio',
    code: 'A802',
    province: 'MB'
  },
  {
    name: 'Bernate Ticino',
    code: 'A804',
    province: 'MI'
  },
  {
    name: 'Bernezzo',
    code: 'A805',
    province: 'CN'
  },
  {
    name: 'Bertinoro',
    code: 'A809',
    province: 'FC'
  },
  {
    name: 'Bertiolo',
    code: 'A810',
    province: 'UD'
  },
  {
    name: 'Bertonico',
    code: 'A811',
    province: 'LO'
  },
  {
    name: 'Berzano di San Pietro',
    code: 'A812',
    province: 'AT'
  },
  {
    name: 'Berzano di Tortona',
    code: 'A813',
    province: 'AL'
  },
  {
    name: 'Berzo San Fermo',
    code: 'A815',
    province: 'BG'
  },
  {
    name: 'Berzo Demo',
    code: 'A816',
    province: 'BS'
  },
  {
    name: 'Berzo Inferiore',
    code: 'A817',
    province: 'BS'
  },
  {
    name: 'Besana in Brianza',
    code: 'A818',
    province: 'MB'
  },
  {
    name: 'Besano',
    code: 'A819',
    province: 'VA'
  },
  {
    name: 'Besate',
    code: 'A820',
    province: 'MI'
  },
  {
    name: 'Besenello',
    code: 'A821',
    province: 'TN'
  },
  {
    name: 'Besenzone',
    code: 'A823',
    province: 'PC'
  },
  {
    name: 'Besnate',
    code: 'A825',
    province: 'VA'
  },
  {
    name: 'Besozzo',
    code: 'A826',
    province: 'VA'
  },
  {
    name: 'Bessude',
    code: 'A827',
    province: 'SS'
  },
  {
    name: 'Bettola',
    code: 'A831',
    province: 'PC'
  },
  {
    name: 'Bettona',
    code: 'A832',
    province: 'PG'
  },
  {
    name: 'Beura-Cardezza',
    code: 'A834',
    province: 'VB'
  },
  {
    name: 'Bevagna',
    code: 'A835',
    province: 'PG'
  },
  {
    name: 'Beverino',
    code: 'A836',
    province: 'SP'
  },
  {
    name: 'Bevilacqua',
    code: 'A837',
    province: 'VR'
  },
  {
    name: 'Biancavilla',
    code: 'A841',
    province: 'CT'
  },
  {
    name: 'Bianchi',
    code: 'A842',
    province: 'CS'
  },
  {
    name: 'Bianco',
    code: 'A843',
    province: 'RC'
  },
  {
    name: 'Biandrate',
    code: 'A844',
    province: 'NO'
  },
  {
    name: 'Biandronno',
    code: 'A845',
    province: 'VA'
  },
  {
    name: 'Bianzano',
    code: 'A846',
    province: 'BG'
  },
  {
    name: 'Bianzè',
    code: 'A847',
    province: 'VC'
  },
  {
    name: 'Bianzone',
    code: 'A848',
    province: 'SO'
  },
  {
    name: 'Biassono',
    code: 'A849',
    province: 'MB'
  },
  {
    name: 'Bibbiano',
    code: 'A850',
    province: 'RE'
  },
  {
    name: 'Bibbiena',
    code: 'A851',
    province: 'AR'
  },
  {
    name: 'Bibbona',
    code: 'A852',
    province: 'LI'
  },
  {
    name: 'Bibiana',
    code: 'A853',
    province: 'TO'
  },
  {
    name: 'Biccari',
    code: 'A854',
    province: 'FG'
  },
  {
    name: 'Bicinicco',
    code: 'A855',
    province: 'UD'
  },
  {
    name: 'Bidonì',
    code: 'A856',
    province: 'OR'
  },
  {
    name: 'Blera',
    code: 'A857',
    province: 'VT'
  },
  {
    name: 'Biella',
    code: 'A859',
    province: 'BI'
  },
  {
    name: 'Bienno',
    code: 'A861',
    province: 'BS'
  },
  {
    name: 'Bieno',
    code: 'A863',
    province: 'TN'
  },
  {
    name: 'Bientina',
    code: 'A864',
    province: 'PI'
  },
  {
    name: 'Binago',
    code: 'A870',
    province: 'CO'
  },
  {
    name: 'Binasco',
    code: 'A872',
    province: 'MI'
  },
  {
    name: 'Binetto',
    code: 'A874',
    province: 'BA'
  },
  {
    name: 'Bioglio',
    code: 'A876',
    province: 'BI'
  },
  {
    name: 'Bionaz',
    code: 'A877',
    province: 'AO'
  },
  {
    name: 'Bione',
    code: 'A878',
    province: 'BS'
  },
  {
    name: 'Birori',
    code: 'A880',
    province: 'NU'
  },
  {
    name: 'Bisaccia',
    code: 'A881',
    province: 'AV'
  },
  {
    name: 'Bisacquino',
    code: 'A882',
    province: 'PA'
  },
  {
    name: 'Bisceglie',
    code: 'A883',
    province: 'BT'
  },
  {
    name: 'Bisegna',
    code: 'A884',
    province: 'AQ'
  },
  {
    name: 'Bisenti',
    code: 'A885',
    province: 'TE'
  },
  {
    name: 'Bisignano',
    code: 'A887',
    province: 'CS'
  },
  {
    name: 'Bistagno',
    code: 'A889',
    province: 'AL'
  },
  {
    name: 'Bisuschio',
    code: 'A891',
    province: 'VA'
  },
  {
    name: 'Bitetto',
    code: 'A892',
    province: 'BA'
  },
  {
    name: 'Bitonto',
    code: 'A893',
    province: 'BA'
  },
  {
    name: 'Bitritto',
    code: 'A894',
    province: 'BA'
  },
  {
    name: 'Bitti',
    code: 'A895',
    province: 'NU'
  },
  {
    name: 'Bivona',
    code: 'A896',
    province: 'AG'
  },
  {
    name: 'Bivongi',
    code: 'A897',
    province: 'RC'
  },
  {
    name: 'Bizzarone',
    code: 'A898',
    province: 'CO'
  },
  {
    name: 'Bleggio Superiore',
    code: 'A902',
    province: 'TN'
  },
  {
    name: 'Blello',
    code: 'A903',
    province: 'BG'
  },
  {
    name: 'Blessagno',
    code: 'A904',
    province: 'CO'
  },
  {
    name: 'Blevio',
    code: 'A905',
    province: 'CO'
  },
  {
    name: 'Boara Pisani',
    code: 'A906',
    province: 'PD'
  },
  {
    name: 'Bobbio',
    code: 'A909',
    province: 'PC'
  },
  {
    name: 'Bobbio Pellice',
    code: 'A910',
    province: 'TO'
  },
  {
    name: 'Boca',
    code: 'A911',
    province: 'NO'
  },
  {
    name: 'Bocchigliero',
    code: 'A912',
    province: 'CS'
  },
  {
    name: 'Boccioleto',
    code: 'A914',
    province: 'VC'
  },
  {
    name: 'Bocenago',
    code: 'A916',
    province: 'TN'
  },
  {
    name: 'Bodio Lomnago',
    code: 'A918',
    province: 'VA'
  },
  {
    name: "Boffalora d'Adda",
    code: 'A919',
    province: 'LO'
  },
  {
    name: 'Boffalora sopra Ticino',
    code: 'A920',
    province: 'MI'
  },
  {
    name: 'Bogliasco',
    code: 'A922',
    province: 'GE'
  },
  {
    name: 'Bognanco',
    code: 'A925',
    province: 'VB'
  },
  {
    name: 'Bogogno',
    code: 'A929',
    province: 'NO'
  },
  {
    name: 'Bojano',
    code: 'A930',
    province: 'CB'
  },
  {
    name: 'Boissano',
    code: 'A931',
    province: 'SV'
  },
  {
    name: 'Bolano',
    code: 'A932',
    province: 'SP'
  },
  {
    name: 'Bolgare',
    code: 'A937',
    province: 'BG'
  },
  {
    name: 'Bollate',
    code: 'A940',
    province: 'MI'
  },
  {
    name: 'Bollengo',
    code: 'A941',
    province: 'TO'
  },
  {
    name: 'Nova Siri',
    code: 'A942',
    province: 'MT'
  },
  {
    name: 'Bologna',
    code: 'A944',
    province: 'BO'
  },
  {
    name: 'Bolognano',
    code: 'A945',
    province: 'PE'
  },
  {
    name: 'Bolognetta',
    code: 'A946',
    province: 'PA'
  },
  {
    name: 'Bolognola',
    code: 'A947',
    province: 'MC'
  },
  {
    name: 'Bolotana',
    code: 'A948',
    province: 'NU'
  },
  {
    name: 'Bolsena',
    code: 'A949',
    province: 'VT'
  },
  {
    name: 'Boltiere',
    code: 'A950',
    province: 'BG'
  },
  {
    name: 'Bolzano/Bozen',
    italianName: 'Bolzano',
    foreignName: 'Bozen',
    code: 'A952',
    province: 'BZ'
  },
  {
    name: 'Bolzano Novarese',
    code: 'A953',
    province: 'NO'
  },
  {
    name: 'Bolzano Vicentino',
    code: 'A954',
    province: 'VI'
  },
  {
    name: 'Bomarzo',
    code: 'A955',
    province: 'VT'
  },
  {
    name: 'Bomba',
    code: 'A956',
    province: 'CH'
  },
  {
    name: 'Bompensiere',
    code: 'A957',
    province: 'CL'
  },
  {
    name: 'Bompietro',
    code: 'A958',
    province: 'PA'
  },
  {
    name: 'Bomporto',
    code: 'A959',
    province: 'MO'
  },
  {
    name: 'Bonarcado',
    code: 'A960',
    province: 'OR'
  },
  {
    name: 'Bonassola',
    code: 'A961',
    province: 'SP'
  },
  {
    name: 'Bonate Sotto',
    code: 'A962',
    province: 'BG'
  },
  {
    name: 'Bonate Sopra',
    code: 'A963',
    province: 'BG'
  },
  {
    name: 'Bonavigo',
    code: 'A964',
    province: 'VR'
  },
  {
    name: 'Bondeno',
    code: 'A965',
    province: 'FE'
  },
  {
    name: 'Bondone',
    code: 'A968',
    province: 'TN'
  },
  {
    name: 'Bonea',
    code: 'A970',
    province: 'BN'
  },
  {
    name: 'Bonefro',
    code: 'A971',
    province: 'CB'
  },
  {
    name: 'Bonemerse',
    code: 'A972',
    province: 'CR'
  },
  {
    name: 'Bonifati',
    code: 'A973',
    province: 'CS'
  },
  {
    name: 'Bonito',
    code: 'A975',
    province: 'AV'
  },
  {
    name: 'Bonnanaro',
    code: 'A976',
    province: 'SS'
  },
  {
    name: 'Bono',
    code: 'A977',
    province: 'SS'
  },
  {
    name: 'Bonorva',
    code: 'A978',
    province: 'SS'
  },
  {
    name: 'Bonvicino',
    code: 'A979',
    province: 'CN'
  },
  {
    name: 'Borbona',
    code: 'A981',
    province: 'RI'
  },
  {
    name: 'Borca di Cadore',
    code: 'A982',
    province: 'BL'
  },
  {
    name: 'Bordano',
    code: 'A983',
    province: 'UD'
  },
  {
    name: 'Bordighera',
    code: 'A984',
    province: 'IM'
  },
  {
    name: 'Bordolano',
    code: 'A986',
    province: 'CR'
  },
  {
    name: 'Bore',
    code: 'A987',
    province: 'PR'
  },
  {
    name: 'Boretto',
    code: 'A988',
    province: 'RE'
  },
  {
    name: 'Borgarello',
    code: 'A989',
    province: 'PV'
  },
  {
    name: 'Borgaro Torinese',
    code: 'A990',
    province: 'TO'
  },
  {
    name: 'Borgetto',
    code: 'A991',
    province: 'PA'
  },
  {
    name: 'Borghetto di Vara',
    code: 'A992',
    province: 'SP'
  },
  {
    name: "Borghetto d'Arroscia",
    code: 'A993',
    province: 'IM'
  },
  {
    name: 'Borghetto Lodigiano',
    code: 'A995',
    province: 'LO'
  },
  {
    name: 'Borgo Velino',
    code: 'A996',
    province: 'RI'
  },
  {
    name: 'Borghetto di Borbera',
    code: 'A998',
    province: 'AL'
  },
  {
    name: 'Borghetto Santo Spirito',
    code: 'A999',
    province: 'SV'
  },
  {
    name: 'Borghi',
    code: 'B001',
    province: 'FC'
  },
  {
    name: 'Borgia',
    code: 'B002',
    province: 'CZ'
  },
  {
    name: 'Borgiallo',
    code: 'B003',
    province: 'TO'
  },
  {
    name: 'Borgio Verezzi',
    code: 'B005',
    province: 'SV'
  },
  {
    name: 'Borgo Valsugana',
    code: 'B006',
    province: 'TN'
  },
  {
    name: 'Borgo a Mozzano',
    code: 'B007',
    province: 'LU'
  },
  {
    name: 'Borgorose',
    code: 'B008',
    province: 'RI'
  },
  {
    name: "Borgo d'Ale",
    code: 'B009',
    province: 'VC'
  },
  {
    name: 'Borgo di Terzo',
    code: 'B010',
    province: 'BG'
  },
  {
    name: 'Motteggiana',
    code: 'B012',
    province: 'MN'
  },
  {
    name: 'Suardi',
    code: 'B014',
    province: 'PV'
  },
  {
    name: "Borgofranco d'Ivrea",
    code: 'B015',
    province: 'TO'
  },
  {
    name: 'Borgolavezzaro',
    code: 'B016',
    province: 'NO'
  },
  {
    name: 'Borgo San Giovanni',
    code: 'B017',
    province: 'LO'
  },
  {
    name: 'Borgomale',
    code: 'B018',
    province: 'CN'
  },
  {
    name: 'Borgomanero',
    code: 'B019',
    province: 'NO'
  },
  {
    name: 'Borgomaro',
    code: 'B020',
    province: 'IM'
  },
  {
    name: 'Borgomasino',
    code: 'B021',
    province: 'TO'
  },
  {
    name: 'Borgone Susa',
    code: 'B024',
    province: 'TO'
  },
  {
    name: 'Borgonovo Val Tidone',
    code: 'B025',
    province: 'PC'
  },
  {
    name: 'Borgo Pace',
    code: 'B026',
    province: 'PU'
  },
  {
    name: 'Borgo Priolo',
    code: 'B028',
    province: 'PV'
  },
  {
    name: 'Borgoratto Alessandrino',
    code: 'B029',
    province: 'AL'
  },
  {
    name: 'Borgoratto Mormorolo',
    code: 'B030',
    province: 'PV'
  },
  {
    name: 'Borgoricco',
    code: 'B031',
    province: 'PD'
  },
  {
    name: 'Borgo San Dalmazzo',
    code: 'B033',
    province: 'CN'
  },
  {
    name: 'Fidenza',
    code: 'B034',
    province: 'PR'
  },
  {
    name: 'Borgo San Giacomo',
    code: 'B035',
    province: 'BS'
  },
  {
    name: 'Borgo San Lorenzo',
    code: 'B036',
    province: 'FI'
  },
  {
    name: 'Borgo San Martino',
    code: 'B037',
    province: 'AL'
  },
  {
    name: 'Borgo San Siro',
    code: 'B038',
    province: 'PV'
  },
  {
    name: 'Borgosatollo',
    code: 'B040',
    province: 'BS'
  },
  {
    name: 'Borgosesia',
    code: 'B041',
    province: 'VC'
  },
  {
    name: 'Borgo Val di Taro',
    code: 'B042',
    province: 'PR'
  },
  {
    name: 'Borgo Ticino',
    code: 'B043',
    province: 'NO'
  },
  {
    name: 'Borgo Tossignano',
    code: 'B044',
    province: 'BO'
  },
  {
    name: 'Borgo Vercelli',
    code: 'B046',
    province: 'VC'
  },
  {
    name: 'Bormida',
    code: 'B048',
    province: 'SV'
  },
  {
    name: 'Bormio',
    code: 'B049',
    province: 'SO'
  },
  {
    name: 'Bornasco',
    code: 'B051',
    province: 'PV'
  },
  {
    name: 'Borno',
    code: 'B054',
    province: 'BS'
  },
  {
    name: 'Boroneddu',
    code: 'B055',
    province: 'OR'
  },
  {
    name: 'Borore',
    code: 'B056',
    province: 'NU'
  },
  {
    name: 'Borrello',
    code: 'B057',
    province: 'CH'
  },
  {
    name: 'Borriana',
    code: 'B058',
    province: 'BI'
  },
  {
    name: 'Borso del Grappa',
    code: 'B061',
    province: 'TV'
  },
  {
    name: 'Bortigali',
    code: 'B062',
    province: 'NU'
  },
  {
    name: 'Bortigiadas',
    code: 'B063',
    province: 'SS'
  },
  {
    name: 'Borutta',
    code: 'B064',
    province: 'SS'
  },
  {
    name: 'Borzonasca',
    code: 'B067',
    province: 'GE'
  },
  {
    name: 'Bosa',
    code: 'B068',
    province: 'OR'
  },
  {
    name: 'Bosaro',
    code: 'B069',
    province: 'RO'
  },
  {
    name: "Boschi Sant'Anna",
    code: 'B070',
    province: 'VR'
  },
  {
    name: 'Bosco Marengo',
    code: 'B071',
    province: 'AL'
  },
  {
    name: 'Bosco Chiesanuova',
    code: 'B073',
    province: 'VR'
  },
  {
    name: 'Bosconero',
    code: 'B075',
    province: 'TO'
  },
  {
    name: 'Boscoreale',
    code: 'B076',
    province: 'NA'
  },
  {
    name: 'Boscotrecase',
    code: 'B077',
    province: 'NA'
  },
  {
    name: 'Bosia',
    code: 'B079',
    province: 'CN'
  },
  {
    name: 'Bosio',
    code: 'B080',
    province: 'AL'
  },
  {
    name: 'Bosisio Parini',
    code: 'B081',
    province: 'LC'
  },
  {
    name: 'Bosnasco',
    code: 'B082',
    province: 'PV'
  },
  {
    name: 'Bossico',
    code: 'B083',
    province: 'BG'
  },
  {
    name: 'Bossolasco',
    code: 'B084',
    province: 'CN'
  },
  {
    name: 'Botricello',
    code: 'B085',
    province: 'CZ'
  },
  {
    name: 'Botrugno',
    code: 'B086',
    province: 'LE'
  },
  {
    name: 'Bottanuco',
    code: 'B088',
    province: 'BG'
  },
  {
    name: 'Botticino',
    code: 'B091',
    province: 'BS'
  },
  {
    name: 'Bottidda',
    code: 'B094',
    province: 'SS'
  },
  {
    name: 'Bova',
    code: 'B097',
    province: 'RC'
  },
  {
    name: 'Bovalino',
    code: 'B098',
    province: 'RC'
  },
  {
    name: 'Bova Marina',
    code: 'B099',
    province: 'RC'
  },
  {
    name: 'Bovegno',
    code: 'B100',
    province: 'BS'
  },
  {
    name: 'Boves',
    code: 'B101',
    province: 'CN'
  },
  {
    name: 'Bovezzo',
    code: 'B102',
    province: 'BS'
  },
  {
    name: 'Bovino',
    code: 'B104',
    province: 'FG'
  },
  {
    name: 'Bovisio-Masciago',
    code: 'B105',
    province: 'MB'
  },
  {
    name: 'Bovolenta',
    code: 'B106',
    province: 'PD'
  },
  {
    name: 'Bovolone',
    code: 'B107',
    province: 'VR'
  },
  {
    name: 'Bozzole',
    code: 'B109',
    province: 'AL'
  },
  {
    name: 'Bozzolo',
    code: 'B110',
    province: 'MN'
  },
  {
    name: 'Bra',
    code: 'B111',
    province: 'CN'
  },
  {
    name: 'Bracca',
    code: 'B112',
    province: 'BG'
  },
  {
    name: 'Bracciano',
    code: 'B114',
    province: 'RM'
  },
  {
    name: 'Bracigliano',
    code: 'B115',
    province: 'SA'
  },
  {
    name: 'Braies/Prags',
    italianName: 'Braies',
    foreignName: 'Prags',
    code: 'B116',
    province: 'BZ'
  },
  {
    name: 'Brallo di Pregola',
    code: 'B117',
    province: 'PV'
  },
  {
    name: 'Brancaleone',
    code: 'B118',
    province: 'RC'
  },
  {
    name: 'Brandico',
    code: 'B120',
    province: 'BS'
  },
  {
    name: 'Brandizzo',
    code: 'B121',
    province: 'TO'
  },
  {
    name: 'Branzi',
    code: 'B123',
    province: 'BG'
  },
  {
    name: 'Braone',
    code: 'B124',
    province: 'BS'
  },
  {
    name: 'Brebbia',
    code: 'B126',
    province: 'VA'
  },
  {
    name: 'Breda di Piave',
    code: 'B128',
    province: 'TV'
  },
  {
    name: 'Castelverde',
    code: 'B129',
    province: 'CR'
  },
  {
    name: 'Breganze',
    code: 'B132',
    province: 'VI'
  },
  {
    name: 'Bregnano',
    code: 'B134',
    province: 'CO'
  },
  {
    name: 'Brembate',
    code: 'B137',
    province: 'BG'
  },
  {
    name: 'Brembate di Sopra',
    code: 'B138',
    province: 'BG'
  },
  {
    name: 'Brembio',
    code: 'B141',
    province: 'LO'
  },
  {
    name: 'Breme',
    code: 'B142',
    province: 'PV'
  },
  {
    name: 'Brendola',
    code: 'B143',
    province: 'VI'
  },
  {
    name: 'Brenna',
    code: 'B144',
    province: 'CO'
  },
  {
    name: 'Brennero/Brenner',
    italianName: 'Brennero',
    foreignName: 'Brenner',
    code: 'B145',
    province: 'BZ'
  },
  {
    name: 'Breno',
    code: 'B149',
    province: 'BS'
  },
  {
    name: 'Brenta',
    code: 'B150',
    province: 'VA'
  },
  {
    name: 'Brentino Belluno',
    code: 'B152',
    province: 'VR'
  },
  {
    name: 'Brentonico',
    code: 'B153',
    province: 'TN'
  },
  {
    name: 'Brenzone sul Garda',
    code: 'B154',
    province: 'VR'
  },
  {
    name: 'Brescello',
    code: 'B156',
    province: 'RE'
  },
  {
    name: 'Brescia',
    code: 'B157',
    province: 'BS'
  },
  {
    name: 'Bresimo',
    code: 'B158',
    province: 'TN'
  },
  {
    name: 'Bressana Bottarone',
    code: 'B159',
    province: 'PV'
  },
  {
    name: 'Bressanone/Brixen',
    italianName: 'Bressanone',
    foreignName: 'Brixen',
    code: 'B160',
    province: 'BZ'
  },
  {
    name: 'Bressanvido',
    code: 'B161',
    province: 'VI'
  },
  {
    name: 'Bresso',
    code: 'B162',
    province: 'MI'
  },
  {
    name: 'Brezzo di Bedero',
    code: 'B166',
    province: 'VA'
  },
  {
    name: 'Briaglia',
    code: 'B167',
    province: 'CN'
  },
  {
    name: 'Briatico',
    code: 'B169',
    province: 'VV'
  },
  {
    name: 'Bricherasio',
    code: 'B171',
    province: 'TO'
  },
  {
    name: 'Brienno',
    code: 'B172',
    province: 'CO'
  },
  {
    name: 'Brienza',
    code: 'B173',
    province: 'PZ'
  },
  {
    name: 'Briga Alta',
    code: 'B175',
    province: 'CN'
  },
  {
    name: 'Briga Novarese',
    code: 'B176',
    province: 'NO'
  },
  {
    name: "Brignano Gera d'Adda",
    code: 'B178',
    province: 'BG'
  },
  {
    name: 'Brignano-Frascata',
    code: 'B179',
    province: 'AL'
  },
  {
    name: 'Brindisi',
    code: 'B180',
    province: 'BR'
  },
  {
    name: 'Brindisi Montagna',
    code: 'B181',
    province: 'PZ'
  },
  {
    name: 'Brinzio',
    code: 'B182',
    province: 'VA'
  },
  {
    name: 'Briona',
    code: 'B183',
    province: 'NO'
  },
  {
    name: 'Brione',
    code: 'B184',
    province: 'BS'
  },
  {
    name: 'Briosco',
    code: 'B187',
    province: 'MB'
  },
  {
    name: 'Brisighella',
    code: 'B188',
    province: 'RA'
  },
  {
    name: 'Brissago-Valtravaglia',
    code: 'B191',
    province: 'VA'
  },
  {
    name: 'Brissogne',
    code: 'B192',
    province: 'AO'
  },
  {
    name: 'Brittoli',
    code: 'B193',
    province: 'PE'
  },
  {
    name: 'Brivio',
    code: 'B194',
    province: 'LC'
  },
  {
    name: 'Broccostella',
    code: 'B195',
    province: 'FR'
  },
  {
    name: 'Brogliano',
    code: 'B196',
    province: 'VI'
  },
  {
    name: 'Brognaturo',
    code: 'B197',
    province: 'VV'
  },
  {
    name: 'Brolo',
    code: 'B198',
    province: 'ME'
  },
  {
    name: 'Brondello',
    code: 'B200',
    province: 'CN'
  },
  {
    name: 'Broni',
    code: 'B201',
    province: 'PV'
  },
  {
    name: 'Bronte',
    code: 'B202',
    province: 'CT'
  },
  {
    name: 'Bronzolo/Branzoll',
    italianName: 'Bronzolo',
    foreignName: 'Branzoll',
    code: 'B203',
    province: 'BZ'
  },
  {
    name: 'Brossasco',
    code: 'B204',
    province: 'CN'
  },
  {
    name: 'Brosso',
    code: 'B205',
    province: 'TO'
  },
  {
    name: 'Brovello-Carpugnino',
    code: 'B207',
    province: 'VB'
  },
  {
    name: 'Brozolo',
    code: 'B209',
    province: 'TO'
  },
  {
    name: 'Brugherio',
    code: 'B212',
    province: 'MB'
  },
  {
    name: 'Brugine',
    code: 'B213',
    province: 'PD'
  },
  {
    name: 'Brugnato',
    code: 'B214',
    province: 'SP'
  },
  {
    name: 'Brugnera',
    code: 'B215',
    province: 'PN'
  },
  {
    name: 'Bruino',
    code: 'B216',
    province: 'TO'
  },
  {
    name: 'Brumano',
    code: 'B217',
    province: 'BG'
  },
  {
    name: 'Brunate',
    code: 'B218',
    province: 'CO'
  },
  {
    name: 'Brunello',
    code: 'B219',
    province: 'VA'
  },
  {
    name: 'Brunico/Bruneck',
    italianName: 'Brunico',
    foreignName: 'Bruneck',
    code: 'B220',
    province: 'BZ'
  },
  {
    name: 'Bruno',
    code: 'B221',
    province: 'AT'
  },
  {
    name: 'Brusaporto',
    code: 'B223',
    province: 'BG'
  },
  {
    name: 'Brusasco',
    code: 'B225',
    province: 'TO'
  },
  {
    name: 'Brusciano',
    code: 'B227',
    province: 'NA'
  },
  {
    name: 'Brusimpiano',
    code: 'B228',
    province: 'VA'
  },
  {
    name: 'Brusnengo',
    code: 'B229',
    province: 'BI'
  },
  {
    name: 'Brusson',
    code: 'B230',
    province: 'AO'
  },
  {
    name: 'Bruzolo',
    code: 'B232',
    province: 'TO'
  },
  {
    name: 'Bruzzano Zeffirio',
    code: 'B234',
    province: 'RC'
  },
  {
    name: 'Bubbiano',
    code: 'B235',
    province: 'MI'
  },
  {
    name: 'Bubbio',
    code: 'B236',
    province: 'AT'
  },
  {
    name: 'Buccheri',
    code: 'B237',
    province: 'SR'
  },
  {
    name: 'Bucchianico',
    code: 'B238',
    province: 'CH'
  },
  {
    name: 'Bucciano',
    code: 'B239',
    province: 'BN'
  },
  {
    name: 'Buccinasco',
    code: 'B240',
    province: 'MI'
  },
  {
    name: 'Buccino',
    code: 'B242',
    province: 'SA'
  },
  {
    name: 'Bucine',
    code: 'B243',
    province: 'AR'
  },
  {
    name: 'Buddusò',
    code: 'B246',
    province: 'SS'
  },
  {
    name: 'Budoia',
    code: 'B247',
    province: 'PN'
  },
  {
    name: 'Budoni',
    code: 'B248',
    province: 'SS'
  },
  {
    name: 'Budrio',
    code: 'B249',
    province: 'BO'
  },
  {
    name: 'Buggerru',
    code: 'B250',
    province: 'SU'
  },
  {
    name: 'Buggiano',
    code: 'B251',
    province: 'PT'
  },
  {
    name: 'Buglio in Monte',
    code: 'B255',
    province: 'SO'
  },
  {
    name: 'Bugnara',
    code: 'B256',
    province: 'AQ'
  },
  {
    name: 'Buguggiate',
    code: 'B258',
    province: 'VA'
  },
  {
    name: 'Buja',
    code: 'B259',
    province: 'UD'
  },
  {
    name: 'Bulciago',
    code: 'B261',
    province: 'LC'
  },
  {
    name: 'Bulgarograsso',
    code: 'B262',
    province: 'CO'
  },
  {
    name: 'Bultei',
    code: 'B264',
    province: 'SS'
  },
  {
    name: 'Bulzi',
    code: 'B265',
    province: 'SS'
  },
  {
    name: 'Buonabitacolo',
    code: 'B266',
    province: 'SA'
  },
  {
    name: 'Buonalbergo',
    code: 'B267',
    province: 'BN'
  },
  {
    name: 'Montebello sul Sangro',
    code: 'B268',
    province: 'CH'
  },
  {
    name: 'Buonconvento',
    code: 'B269',
    province: 'SI'
  },
  {
    name: 'Buonvicino',
    code: 'B270',
    province: 'CS'
  },
  {
    name: 'Burago di Molgora',
    code: 'B272',
    province: 'MB'
  },
  {
    name: 'Burcei',
    code: 'B274',
    province: 'SU'
  },
  {
    name: 'Burgio',
    code: 'B275',
    province: 'AG'
  },
  {
    name: 'Burgos',
    code: 'B276',
    province: 'SS'
  },
  {
    name: 'Buriasco',
    code: 'B278',
    province: 'TO'
  },
  {
    name: 'Burolo',
    code: 'B279',
    province: 'TO'
  },
  {
    name: 'Buronzo',
    code: 'B280',
    province: 'VC'
  },
  {
    name: 'Busachi',
    code: 'B281',
    province: 'OR'
  },
  {
    name: 'Busalla',
    code: 'B282',
    province: 'GE'
  },
  {
    name: 'Busano',
    code: 'B284',
    province: 'TO'
  },
  {
    name: 'Busca',
    code: 'B285',
    province: 'CN'
  },
  {
    name: 'Buscate',
    code: 'B286',
    province: 'MI'
  },
  {
    name: 'Buscemi',
    code: 'B287',
    province: 'SR'
  },
  {
    name: 'Buseto Palizzolo',
    code: 'B288',
    province: 'TP'
  },
  {
    name: 'Busnago',
    code: 'B289',
    province: 'MB'
  },
  {
    name: 'Bussero',
    code: 'B292',
    province: 'MI'
  },
  {
    name: 'Busseto',
    code: 'B293',
    province: 'PR'
  },
  {
    name: 'Bussi sul Tirino',
    code: 'B294',
    province: 'PE'
  },
  {
    name: 'Busso',
    code: 'B295',
    province: 'CB'
  },
  {
    name: 'Bussolengo',
    code: 'B296',
    province: 'VR'
  },
  {
    name: 'Bussoleno',
    code: 'B297',
    province: 'TO'
  },
  {
    name: 'Busto Arsizio',
    code: 'B300',
    province: 'VA'
  },
  {
    name: 'Busto Garolfo',
    code: 'B301',
    province: 'MI'
  },
  {
    name: 'Butera',
    code: 'B302',
    province: 'CL'
  },
  {
    name: 'Buti',
    code: 'B303',
    province: 'PI'
  },
  {
    name: 'Buttapietra',
    code: 'B304',
    province: 'VR'
  },
  {
    name: 'Buttigliera Alta',
    code: 'B305',
    province: 'TO'
  },
  {
    name: "Buttigliera d'Asti",
    code: 'B306',
    province: 'AT'
  },
  {
    name: 'Buttrio',
    code: 'B309',
    province: 'UD'
  },
  {
    name: "San Paolo d'Argon",
    code: 'B310',
    province: 'BG'
  },
  {
    name: 'Cabella Ligure',
    code: 'B311',
    province: 'AL'
  },
  {
    name: 'Castello Cabiaglio',
    code: 'B312',
    province: 'VA'
  },
  {
    name: 'Cabiate',
    code: 'B313',
    province: 'CO'
  },
  {
    name: 'Cabras',
    code: 'B314',
    province: 'OR'
  },
  {
    name: 'Caccamo',
    code: 'B315',
    province: 'PA'
  },
  {
    name: 'Poggio Sannita',
    code: 'B317',
    province: 'IS'
  },
  {
    name: 'Caccuri',
    code: 'B319',
    province: 'KR'
  },
  {
    name: 'Cadegliano-Viconago',
    code: 'B326',
    province: 'VA'
  },
  {
    name: 'Cadelbosco di Sopra',
    code: 'B328',
    province: 'RE'
  },
  {
    name: 'Cadeo',
    code: 'B332',
    province: 'PC'
  },
  {
    name: 'Caderzone Terme',
    code: 'B335',
    province: 'TN'
  },
  {
    name: 'Cadoneghe',
    code: 'B345',
    province: 'PD'
  },
  {
    name: 'Cadorago',
    code: 'B346',
    province: 'CO'
  },
  {
    name: 'Caerano di San Marco',
    code: 'B349',
    province: 'TV'
  },
  {
    name: 'Cafasse',
    code: 'B350',
    province: 'TO'
  },
  {
    name: 'Caggiano',
    code: 'B351',
    province: 'SA'
  },
  {
    name: 'Cagli',
    code: 'B352',
    province: 'PU'
  },
  {
    name: 'Cagliari',
    code: 'B354',
    province: 'CA'
  },
  {
    name: 'Caglio',
    code: 'B355',
    province: 'CO'
  },
  {
    name: 'Cagnano Varano',
    code: 'B357',
    province: 'FG'
  },
  {
    name: 'Cagnano Amiterno',
    code: 'B358',
    province: 'AQ'
  },
  {
    name: 'Caianello',
    code: 'B361',
    province: 'CE'
  },
  {
    name: 'Caiazzo',
    code: 'B362',
    province: 'CE'
  },
  {
    name: 'Caines/Kuens',
    italianName: 'Caines',
    foreignName: 'Kuens',
    code: 'B364',
    province: 'BZ'
  },
  {
    name: 'Caino',
    code: 'B365',
    province: 'BS'
  },
  {
    name: 'Caiolo',
    code: 'B366',
    province: 'SO'
  },
  {
    name: 'Cairano',
    code: 'B367',
    province: 'AV'
  },
  {
    name: 'Cairate',
    code: 'B368',
    province: 'VA'
  },
  {
    name: 'Cairo Montenotte',
    code: 'B369',
    province: 'SV'
  },
  {
    name: 'Caivano',
    code: 'B371',
    province: 'NA'
  },
  {
    name: 'Calabritto',
    code: 'B374',
    province: 'AV'
  },
  {
    name: 'Calalzo di Cadore',
    code: 'B375',
    province: 'BL'
  },
  {
    name: 'Calamandrana',
    code: 'B376',
    province: 'AT'
  },
  {
    name: 'Calamonaci',
    code: 'B377',
    province: 'AG'
  },
  {
    name: 'Calangianus',
    code: 'B378',
    province: 'SS'
  },
  {
    name: 'Calanna',
    code: 'B379',
    province: 'RC'
  },
  {
    name: 'Calasca-Castiglione',
    code: 'B380',
    province: 'VB'
  },
  {
    name: 'Calascibetta',
    code: 'B381',
    province: 'EN'
  },
  {
    name: 'Calascio',
    code: 'B382',
    province: 'AQ'
  },
  {
    name: 'Calasetta',
    code: 'B383',
    province: 'SU'
  },
  {
    name: 'Calatabiano',
    code: 'B384',
    province: 'CT'
  },
  {
    name: 'Calatafimi-Segesta',
    code: 'B385',
    province: 'TP'
  },
  {
    name: 'Lungavilla',
    code: 'B387',
    province: 'PV'
  },
  {
    name: 'Calcata',
    code: 'B388',
    province: 'VT'
  },
  {
    name: 'Calceranica al Lago',
    code: 'B389',
    province: 'TN'
  },
  {
    name: 'Calci',
    code: 'B390',
    province: 'PI'
  },
  {
    name: 'Calciano',
    code: 'B391',
    province: 'MT'
  },
  {
    name: 'Calcinaia',
    code: 'B392',
    province: 'PI'
  },
  {
    name: 'Calcinate',
    code: 'B393',
    province: 'BG'
  },
  {
    name: 'Calcinato',
    code: 'B394',
    province: 'BS'
  },
  {
    name: 'Calcio',
    code: 'B395',
    province: 'BG'
  },
  {
    name: 'Calco',
    code: 'B396',
    province: 'LC'
  },
  {
    name: 'Caldaro sulla strada del vino/Kaltern an der Weinstraße',
    italianName: 'Caldaro sulla strada del vino',
    foreignName: 'Kaltern an der Weinstraße',
    code: 'B397',
    province: 'BZ'
  },
  {
    name: 'Caldarola',
    code: 'B398',
    province: 'MC'
  },
  {
    name: 'Calderara di Reno',
    code: 'B399',
    province: 'BO'
  },
  {
    name: 'Caldes',
    code: 'B400',
    province: 'TN'
  },
  {
    name: 'Caldiero',
    code: 'B402',
    province: 'VR'
  },
  {
    name: 'Caldogno',
    code: 'B403',
    province: 'VI'
  },
  {
    name: 'Caldonazzo',
    code: 'B404',
    province: 'TN'
  },
  {
    name: 'Calendasco',
    code: 'B405',
    province: 'PC'
  },
  {
    name: 'Calenzano',
    code: 'B406',
    province: 'FI'
  },
  {
    name: 'Calestano',
    code: 'B408',
    province: 'PR'
  },
  {
    name: 'Calice Ligure',
    code: 'B409',
    province: 'SV'
  },
  {
    name: 'Calice al Cornoviglio',
    code: 'B410',
    province: 'SP'
  },
  {
    name: 'Calimera',
    code: 'B413',
    province: 'LE'
  },
  {
    name: 'Calitri',
    code: 'B415',
    province: 'AV'
  },
  {
    name: 'Calizzano',
    code: 'B416',
    province: 'SV'
  },
  {
    name: 'Callabiana',
    code: 'B417',
    province: 'BI'
  },
  {
    name: 'Calliano Monferrato',
    code: 'B418',
    province: 'AT'
  },
  {
    name: 'Calliano',
    code: 'B419',
    province: 'TN'
  },
  {
    name: 'Calolziocorte',
    code: 'B423',
    province: 'LC'
  },
  {
    name: 'Calopezzati',
    code: 'B424',
    province: 'CS'
  },
  {
    name: 'Calosso',
    code: 'B425',
    province: 'AT'
  },
  {
    name: 'Caloveto',
    code: 'B426',
    province: 'CS'
  },
  {
    name: 'Caltabellotta',
    code: 'B427',
    province: 'AG'
  },
  {
    name: 'Caltagirone',
    code: 'B428',
    province: 'CT'
  },
  {
    name: 'Caltanissetta',
    code: 'B429',
    province: 'CL'
  },
  {
    name: 'Caltavuturo',
    code: 'B430',
    province: 'PA'
  },
  {
    name: 'Caltignaga',
    code: 'B431',
    province: 'NO'
  },
  {
    name: 'Calto',
    code: 'B432',
    province: 'RO'
  },
  {
    name: 'Caltrano',
    code: 'B433',
    province: 'VI'
  },
  {
    name: "Calusco d'Adda",
    code: 'B434',
    province: 'BG'
  },
  {
    name: 'Caluso',
    code: 'B435',
    province: 'TO'
  },
  {
    name: 'Calvagese della Riviera',
    code: 'B436',
    province: 'BS'
  },
  {
    name: 'Calvanico',
    code: 'B437',
    province: 'SA'
  },
  {
    name: 'Calvatone',
    code: 'B439',
    province: 'CR'
  },
  {
    name: 'Calvello',
    code: 'B440',
    province: 'PZ'
  },
  {
    name: 'Calvene',
    code: 'B441',
    province: 'VI'
  },
  {
    name: 'Calvenzano',
    code: 'B442',
    province: 'BG'
  },
  {
    name: 'Calvera',
    code: 'B443',
    province: 'PZ'
  },
  {
    name: 'Calvi',
    code: 'B444',
    province: 'BN'
  },
  {
    name: 'Calvi Risorta',
    code: 'B445',
    province: 'CE'
  },
  {
    name: "Calvi dell'Umbria",
    code: 'B446',
    province: 'TR'
  },
  {
    name: 'Calvignano',
    code: 'B447',
    province: 'PV'
  },
  {
    name: 'Calvignasco',
    code: 'B448',
    province: 'MI'
  },
  {
    name: 'Calvisano',
    code: 'B450',
    province: 'BS'
  },
  {
    name: 'Calvizzano',
    code: 'B452',
    province: 'NA'
  },
  {
    name: 'Camagna Monferrato',
    code: 'B453',
    province: 'AL'
  },
  {
    name: 'Camaiore',
    code: 'B455',
    province: 'LU'
  },
  {
    name: 'Camandona',
    code: 'B457',
    province: 'BI'
  },
  {
    name: 'Camastra',
    code: 'B460',
    province: 'AG'
  },
  {
    name: 'Cambiago',
    code: 'B461',
    province: 'MI'
  },
  {
    name: 'Cambiano',
    code: 'B462',
    province: 'TO'
  },
  {
    name: 'Cambiasca',
    code: 'B463',
    province: 'VB'
  },
  {
    name: 'Camburzano',
    code: 'B465',
    province: 'BI'
  },
  {
    name: "Sant'Elena Sannita",
    code: 'B466',
    province: 'IS'
  },
  {
    name: 'Camerana',
    code: 'B467',
    province: 'CN'
  },
  {
    name: 'Camerano',
    code: 'B468',
    province: 'AN'
  },
  {
    name: 'Camerano Casasco',
    code: 'B469',
    province: 'AT'
  },
  {
    name: 'Camerata Picena',
    code: 'B470',
    province: 'AN'
  },
  {
    name: 'Camerata Cornello',
    code: 'B471',
    province: 'BG'
  },
  {
    name: 'Camerata Nuova',
    code: 'B472',
    province: 'RM'
  },
  {
    name: 'Cameri',
    code: 'B473',
    province: 'NO'
  },
  {
    name: 'Camerino',
    code: 'B474',
    province: 'MC'
  },
  {
    name: 'Camerota',
    code: 'B476',
    province: 'SA'
  },
  {
    name: 'Camigliano',
    code: 'B477',
    province: 'CE'
  },
  {
    name: 'Camini',
    code: 'B481',
    province: 'RC'
  },
  {
    name: 'Camino',
    code: 'B482',
    province: 'AL'
  },
  {
    name: 'Camino al Tagliamento',
    code: 'B483',
    province: 'UD'
  },
  {
    name: 'Camisano',
    code: 'B484',
    province: 'CR'
  },
  {
    name: 'Camisano Vicentino',
    code: 'B485',
    province: 'VI'
  },
  {
    name: 'Cammarata',
    code: 'B486',
    province: 'AG'
  },
  {
    name: 'Camogli',
    code: 'B490',
    province: 'GE'
  },
  {
    name: 'Chamois',
    code: 'B491',
    province: 'AO'
  },
  {
    name: 'Campagna',
    code: 'B492',
    province: 'SA'
  },
  {
    name: 'Campagna Lupia',
    code: 'B493',
    province: 'VE'
  },
  {
    name: 'Castel Campagnano',
    code: 'B494',
    province: 'CE'
  },
  {
    name: 'Campagnano di Roma',
    code: 'B496',
    province: 'RM'
  },
  {
    name: 'Campagnatico',
    code: 'B497',
    province: 'GR'
  },
  {
    name: 'Campagnola Cremasca',
    code: 'B498',
    province: 'CR'
  },
  {
    name: 'Campagnola Emilia',
    code: 'B499',
    province: 'RE'
  },
  {
    name: 'Campana',
    code: 'B500',
    province: 'CS'
  },
  {
    name: 'Camparada',
    code: 'B501',
    province: 'MB'
  },
  {
    name: 'Campegine',
    code: 'B502',
    province: 'RE'
  },
  {
    name: 'Campello sul Clitunno',
    code: 'B504',
    province: 'PG'
  },
  {
    name: 'Campertogno',
    code: 'B505',
    province: 'VC'
  },
  {
    name: 'Campi Salentina',
    code: 'B506',
    province: 'LE'
  },
  {
    name: 'Campi Bisenzio',
    code: 'B507',
    province: 'FI'
  },
  {
    name: 'Campiglia Marittima',
    code: 'B509',
    province: 'LI'
  },
  {
    name: 'Valprato Soana',
    code: 'B510',
    province: 'TO'
  },
  {
    name: 'Campiglia dei Berici',
    code: 'B511',
    province: 'VI'
  },
  {
    name: 'Campiglione Fenile',
    code: 'B512',
    province: 'TO'
  },
  {
    name: "Campione d'Italia",
    code: 'B513',
    province: 'CO'
  },
  {
    name: 'Campitello di Fassa',
    code: 'B514',
    province: 'TN'
  },
  {
    name: 'Campli',
    code: 'B515',
    province: 'TE'
  },
  {
    name: 'Campo Calabro',
    code: 'B516',
    province: 'RC'
  },
  {
    name: 'Campobasso',
    code: 'B519',
    province: 'CB'
  },
  {
    name: 'Campobello di Licata',
    code: 'B520',
    province: 'AG'
  },
  {
    name: 'Campobello di Mazara',
    code: 'B521',
    province: 'TP'
  },
  {
    name: 'Campochiaro',
    code: 'B522',
    province: 'CB'
  },
  {
    name: 'Campodarsego',
    code: 'B524',
    province: 'PD'
  },
  {
    name: 'Campodenno',
    code: 'B525',
    province: 'TN'
  },
  {
    name: 'Campo di Giove',
    code: 'B526',
    province: 'AQ'
  },
  {
    name: 'Campodimele',
    code: 'B527',
    province: 'LT'
  },
  {
    name: 'Campodipietra',
    code: 'B528',
    province: 'CB'
  },
  {
    name: 'Campo di Trens/Freienfeld',
    italianName: 'Campo di Trens',
    foreignName: 'Freienfeld',
    code: 'B529',
    province: 'BZ'
  },
  {
    name: 'Campodolcino',
    code: 'B530',
    province: 'SO'
  },
  {
    name: 'Campodoro',
    code: 'B531',
    province: 'PD'
  },
  {
    name: 'Campofelice di Roccella',
    code: 'B532',
    province: 'PA'
  },
  {
    name: 'Campofelice di Fitalia',
    code: 'B533',
    province: 'PA'
  },
  {
    name: 'Campofilone',
    code: 'B534',
    province: 'FM'
  },
  {
    name: 'Campofiorito',
    code: 'B535',
    province: 'PA'
  },
  {
    name: 'Campoformido',
    code: 'B536',
    province: 'UD'
  },
  {
    name: 'Campofranco',
    code: 'B537',
    province: 'CL'
  },
  {
    name: 'Campo Ligure',
    code: 'B538',
    province: 'GE'
  },
  {
    name: 'Campogalliano',
    code: 'B539',
    province: 'MO'
  },
  {
    name: 'Champorcher',
    code: 'B540',
    province: 'AO'
  },
  {
    name: 'Campolattaro',
    code: 'B541',
    province: 'BN'
  },
  {
    name: 'Campoli del Monte Taburno',
    code: 'B542',
    province: 'BN'
  },
  {
    name: 'Campoli Appennino',
    code: 'B543',
    province: 'FR'
  },
  {
    name: 'Campolieto',
    code: 'B544',
    province: 'CB'
  },
  {
    name: 'Campolongo Maggiore',
    code: 'B546',
    province: 'VE'
  },
  {
    name: 'Campomaggiore',
    code: 'B549',
    province: 'PZ'
  },
  {
    name: 'Campomarino',
    code: 'B550',
    province: 'CB'
  },
  {
    name: 'Campomorone',
    code: 'B551',
    province: 'GE'
  },
  {
    name: "Campo nell'Elba",
    code: 'B553',
    province: 'LI'
  },
  {
    name: 'Camponogara',
    code: 'B554',
    province: 'VE'
  },
  {
    name: 'Campora',
    code: 'B555',
    province: 'SA'
  },
  {
    name: 'Camporeale',
    code: 'B556',
    province: 'PA'
  },
  {
    name: 'Camporgiano',
    code: 'B557',
    province: 'LU'
  },
  {
    name: 'Camporosso',
    code: 'B559',
    province: 'IM'
  },
  {
    name: 'Camporotondo Etneo',
    code: 'B561',
    province: 'CT'
  },
  {
    name: 'Camporotondo di Fiastrone',
    code: 'B562',
    province: 'MC'
  },
  {
    name: 'Camposampiero',
    code: 'B563',
    province: 'PD'
  },
  {
    name: 'Campo San Martino',
    code: 'B564',
    province: 'PD'
  },
  {
    name: 'Camposano',
    code: 'B565',
    province: 'NA'
  },
  {
    name: 'Camposanto',
    code: 'B566',
    province: 'MO'
  },
  {
    name: 'Campospinoso Albaredo',
    code: 'B567',
    province: 'PV'
  },
  {
    name: 'Campotosto',
    code: 'B569',
    province: 'AQ'
  },
  {
    name: 'Campo Tures/Sand in Taufers',
    italianName: 'Campo Tures',
    foreignName: 'Sand in Taufers',
    code: 'B570',
    province: 'BZ'
  },
  {
    name: 'Camugnano',
    code: 'B572',
    province: 'BO'
  },
  {
    name: 'Canale',
    code: 'B573',
    province: 'CN'
  },
  {
    name: "Canale d'Agordo",
    code: 'B574',
    province: 'BL'
  },
  {
    name: 'Canale Monterano',
    code: 'B576',
    province: 'RM'
  },
  {
    name: 'Canal San Bovo',
    code: 'B577',
    province: 'TN'
  },
  {
    name: 'Canaro',
    code: 'B578',
    province: 'RO'
  },
  {
    name: 'Canazei',
    code: 'B579',
    province: 'TN'
  },
  {
    name: 'Cancellara',
    code: 'B580',
    province: 'PZ'
  },
  {
    name: 'Cancello ed Arnone',
    code: 'B581',
    province: 'CE'
  },
  {
    name: 'Canda',
    code: 'B582',
    province: 'RO'
  },
  {
    name: 'Candela',
    code: 'B584',
    province: 'FG'
  },
  {
    name: 'Candelo',
    code: 'B586',
    province: 'BI'
  },
  {
    name: 'Candia Lomellina',
    code: 'B587',
    province: 'PV'
  },
  {
    name: 'Candia Canavese',
    code: 'B588',
    province: 'TO'
  },
  {
    name: 'Candiana',
    code: 'B589',
    province: 'PD'
  },
  {
    name: 'Candida',
    code: 'B590',
    province: 'AV'
  },
  {
    name: 'Candidoni',
    code: 'B591',
    province: 'RC'
  },
  {
    name: 'Candiolo',
    code: 'B592',
    province: 'TO'
  },
  {
    name: 'Canegrate',
    code: 'B593',
    province: 'MI'
  },
  {
    name: 'Canelli',
    code: 'B594',
    province: 'AT'
  },
  {
    name: 'Orvinio',
    code: 'B595',
    province: 'RI'
  },
  {
    name: 'Canepina',
    code: 'B597',
    province: 'VT'
  },
  {
    name: 'Caneva',
    code: 'B598',
    province: 'PN'
  },
  {
    name: 'Canicattì',
    code: 'B602',
    province: 'AG'
  },
  {
    name: 'Canicattini Bagni',
    code: 'B603',
    province: 'SR'
  },
  {
    name: 'Canino',
    code: 'B604',
    province: 'VT'
  },
  {
    name: 'Canischio',
    code: 'B605',
    province: 'TO'
  },
  {
    name: 'Canistro',
    code: 'B606',
    province: 'AQ'
  },
  {
    name: 'Canna',
    code: 'B607',
    province: 'CS'
  },
  {
    name: 'Cannalonga',
    code: 'B608',
    province: 'SA'
  },
  {
    name: 'Cannara',
    code: 'B609',
    province: 'PG'
  },
  {
    name: 'Cannero Riviera',
    code: 'B610',
    province: 'VB'
  },
  {
    name: "Canneto sull'Oglio",
    code: 'B612',
    province: 'MN'
  },
  {
    name: 'Canneto Pavese',
    code: 'B613',
    province: 'PV'
  },
  {
    name: 'Cannobio',
    code: 'B615',
    province: 'VB'
  },
  {
    name: 'Cannole',
    code: 'B616',
    province: 'LE'
  },
  {
    name: 'Canolo',
    code: 'B617',
    province: 'RC'
  },
  {
    name: "Canonica d'Adda",
    code: 'B618',
    province: 'BG'
  },
  {
    name: 'Canosa di Puglia',
    code: 'B619',
    province: 'BT'
  },
  {
    name: 'Canosa Sannita',
    code: 'B620',
    province: 'CH'
  },
  {
    name: 'Canosio',
    code: 'B621',
    province: 'CN'
  },
  {
    name: 'Cansano',
    code: 'B624',
    province: 'AQ'
  },
  {
    name: 'Cantagallo',
    code: 'B626',
    province: 'PO'
  },
  {
    name: 'Cantalice',
    code: 'B627',
    province: 'RI'
  },
  {
    name: 'Cantalupa',
    code: 'B628',
    province: 'TO'
  },
  {
    name: 'Cantalupo Ligure',
    code: 'B629',
    province: 'AL'
  },
  {
    name: 'Cantalupo nel Sannio',
    code: 'B630',
    province: 'IS'
  },
  {
    name: 'Cantalupo in Sabina',
    code: 'B631',
    province: 'RI'
  },
  {
    name: 'Mandela',
    code: 'B632',
    province: 'RM'
  },
  {
    name: 'Cantarana',
    code: 'B633',
    province: 'AT'
  },
  {
    name: 'Cantello',
    code: 'B634',
    province: 'VA'
  },
  {
    name: 'Canterano',
    code: 'B635',
    province: 'RM'
  },
  {
    name: 'Cantiano',
    code: 'B636',
    province: 'PU'
  },
  {
    name: 'Cantoira',
    code: 'B637',
    province: 'TO'
  },
  {
    name: 'Cantù',
    code: 'B639',
    province: 'CO'
  },
  {
    name: 'Canzano',
    code: 'B640',
    province: 'TE'
  },
  {
    name: 'Canzo',
    code: 'B641',
    province: 'CO'
  },
  {
    name: 'Caorle',
    code: 'B642',
    province: 'VE'
  },
  {
    name: 'Caorso',
    code: 'B643',
    province: 'PC'
  },
  {
    name: 'Capaccio Paestum',
    code: 'B644',
    province: 'SA'
  },
  {
    name: 'Capaci',
    code: 'B645',
    province: 'PA'
  },
  {
    name: 'Capalbio',
    code: 'B646',
    province: 'GR'
  },
  {
    name: 'Capannoli',
    code: 'B647',
    province: 'PI'
  },
  {
    name: 'Capannori',
    code: 'B648',
    province: 'LU'
  },
  {
    name: 'Capena',
    code: 'B649',
    province: 'RM'
  },
  {
    name: 'Capergnanica',
    code: 'B650',
    province: 'CR'
  },
  {
    name: 'Capestrano',
    code: 'B651',
    province: 'AQ'
  },
  {
    name: 'Capiago Intimiano',
    code: 'B653',
    province: 'CO'
  },
  {
    name: 'Capistrano',
    code: 'B655',
    province: 'VV'
  },
  {
    name: 'Capistrello',
    code: 'B656',
    province: 'AQ'
  },
  {
    name: 'Capitignano',
    code: 'B658',
    province: 'AQ'
  },
  {
    name: 'Capizzi',
    code: 'B660',
    province: 'ME'
  },
  {
    name: 'Capizzone',
    code: 'B661',
    province: 'BG'
  },
  {
    name: 'Ponte nelle Alpi',
    code: 'B662',
    province: 'BL'
  },
  {
    name: 'Capodimonte',
    code: 'B663',
    province: 'VT'
  },
  {
    name: 'Capo di Ponte',
    code: 'B664',
    province: 'BS'
  },
  {
    name: "Capo d'Orlando",
    code: 'B666',
    province: 'ME'
  },
  {
    name: 'Capodrise',
    code: 'B667',
    province: 'CE'
  },
  {
    name: 'Capoliveri',
    code: 'B669',
    province: 'LI'
  },
  {
    name: 'Capolona',
    code: 'B670',
    province: 'AR'
  },
  {
    name: 'Caponago',
    code: 'B671',
    province: 'MB'
  },
  {
    name: 'Caporciano',
    code: 'B672',
    province: 'AQ'
  },
  {
    name: 'Caposele',
    code: 'B674',
    province: 'AV'
  },
  {
    name: 'Capoterra',
    code: 'B675',
    province: 'CA'
  },
  {
    name: 'Capovalle',
    code: 'B676',
    province: 'BS'
  },
  {
    name: 'Cappadocia',
    code: 'B677',
    province: 'AQ'
  },
  {
    name: 'Cappella Maggiore',
    code: 'B678',
    province: 'TV'
  },
  {
    name: 'Cappella Cantone',
    code: 'B679',
    province: 'CR'
  },
  {
    name: "Cappella de' Picenardi",
    code: 'B680',
    province: 'CR'
  },
  {
    name: 'Cappelle sul Tavo',
    code: 'B681',
    province: 'PE'
  },
  {
    name: 'Capracotta',
    code: 'B682',
    province: 'IS'
  },
  {
    name: 'Capraia e Limite',
    code: 'B684',
    province: 'FI'
  },
  {
    name: 'Capraia Isola',
    code: 'B685',
    province: 'LI'
  },
  {
    name: 'Capralba',
    code: 'B686',
    province: 'CR'
  },
  {
    name: 'Capranica Prenestina',
    code: 'B687',
    province: 'RM'
  },
  {
    name: 'Capranica',
    code: 'B688',
    province: 'VT'
  },
  {
    name: 'Marzabotto',
    code: 'B689',
    province: 'BO'
  },
  {
    name: 'Caprarica di Lecce',
    code: 'B690',
    province: 'LE'
  },
  {
    name: 'Caprarola',
    code: 'B691',
    province: 'VT'
  },
  {
    name: 'Caprauna',
    code: 'B692',
    province: 'CN'
  },
  {
    name: 'Caprese Michelangelo',
    code: 'B693',
    province: 'AR'
  },
  {
    name: 'Caprezzo',
    code: 'B694',
    province: 'VB'
  },
  {
    name: 'Capri Leone',
    code: 'B695',
    province: 'ME'
  },
  {
    name: 'Capri',
    code: 'B696',
    province: 'NA'
  },
  {
    name: 'Capriana',
    code: 'B697',
    province: 'TN'
  },
  {
    name: 'Capriano del Colle',
    code: 'B698',
    province: 'BS'
  },
  {
    name: "Capriata d'Orba",
    code: 'B701',
    province: 'AL'
  },
  {
    name: 'Capriate San Gervasio',
    code: 'B703',
    province: 'BG'
  },
  {
    name: 'Capriati a Volturno',
    code: 'B704',
    province: 'CE'
  },
  {
    name: 'Caprie',
    code: 'B705',
    province: 'TO'
  },
  {
    name: 'Capriglia Irpina',
    code: 'B706',
    province: 'AV'
  },
  {
    name: 'Capriglio',
    code: 'B707',
    province: 'AT'
  },
  {
    name: 'Caprile',
    code: 'B708',
    province: 'BI'
  },
  {
    name: 'Caprino Veronese',
    code: 'B709',
    province: 'VR'
  },
  {
    name: 'Caprino Bergamasco',
    code: 'B710',
    province: 'BG'
  },
  {
    name: 'Capriolo',
    code: 'B711',
    province: 'BS'
  },
  {
    name: 'Capriva del Friuli',
    code: 'B712',
    province: 'GO'
  },
  {
    name: 'Capua',
    code: 'B715',
    province: 'CE'
  },
  {
    name: 'Capurso',
    code: 'B716',
    province: 'BA'
  },
  {
    name: 'Caraffa di Catanzaro',
    code: 'B717',
    province: 'CZ'
  },
  {
    name: 'Caraffa del Bianco',
    code: 'B718',
    province: 'RC'
  },
  {
    name: 'Caraglio',
    code: 'B719',
    province: 'CN'
  },
  {
    name: 'Caramagna Piemonte',
    code: 'B720',
    province: 'CN'
  },
  {
    name: 'Caramanico Terme',
    code: 'B722',
    province: 'PE'
  },
  {
    name: 'Carapelle',
    code: 'B724',
    province: 'FG'
  },
  {
    name: 'Carapelle Calvisio',
    code: 'B725',
    province: 'AQ'
  },
  {
    name: 'Carasco',
    code: 'B726',
    province: 'GE'
  },
  {
    name: 'Carassai',
    code: 'B727',
    province: 'AP'
  },
  {
    name: 'Carate Brianza',
    code: 'B729',
    province: 'MB'
  },
  {
    name: 'Carate Urio',
    code: 'B730',
    province: 'CO'
  },
  {
    name: 'Caravaggio',
    code: 'B731',
    province: 'BG'
  },
  {
    name: 'Caravate',
    code: 'B732',
    province: 'VA'
  },
  {
    name: 'Caravino',
    code: 'B733',
    province: 'TO'
  },
  {
    name: 'Caravonica',
    code: 'B734',
    province: 'IM'
  },
  {
    name: 'Carbognano',
    code: 'B735',
    province: 'VT'
  },
  {
    name: 'Carbonara Scrivia',
    code: 'B736',
    province: 'AL'
  },
  {
    name: 'Villasimius',
    code: 'B738',
    province: 'SU'
  },
  {
    name: 'Carbonara di Nola',
    code: 'B740',
    province: 'NA'
  },
  {
    name: 'Carbonara al Ticino',
    code: 'B741',
    province: 'PV'
  },
  {
    name: 'Carbonate',
    code: 'B742',
    province: 'CO'
  },
  {
    name: 'Carbone',
    code: 'B743',
    province: 'PZ'
  },
  {
    name: 'Carbonera',
    code: 'B744',
    province: 'TV'
  },
  {
    name: 'Carbonia',
    code: 'B745',
    province: 'SU'
  },
  {
    name: 'Carcare',
    code: 'B748',
    province: 'SV'
  },
  {
    name: 'Carcoforo',
    code: 'B752',
    province: 'VC'
  },
  {
    name: 'Cardano al Campo',
    code: 'B754',
    province: 'VA'
  },
  {
    name: 'Cardè',
    code: 'B755',
    province: 'CN'
  },
  {
    name: 'Cardeto',
    code: 'B756',
    province: 'RC'
  },
  {
    name: 'Cardinale',
    code: 'B758',
    province: 'CZ'
  },
  {
    name: 'Cardito',
    code: 'B759',
    province: 'NA'
  },
  {
    name: 'Careggine',
    code: 'B760',
    province: 'LU'
  },
  {
    name: 'Carema',
    code: 'B762',
    province: 'TO'
  },
  {
    name: 'Carenno',
    code: 'B763',
    province: 'LC'
  },
  {
    name: 'Carentino',
    code: 'B765',
    province: 'AL'
  },
  {
    name: 'Careri',
    code: 'B766',
    province: 'RC'
  },
  {
    name: 'Caresana',
    code: 'B767',
    province: 'VC'
  },
  {
    name: 'Caresanablot',
    code: 'B768',
    province: 'VC'
  },
  {
    name: 'Carezzano',
    code: 'B769',
    province: 'AL'
  },
  {
    name: 'Carfizzi',
    code: 'B771',
    province: 'KR'
  },
  {
    name: 'Cargeghe',
    code: 'B772',
    province: 'SS'
  },
  {
    name: 'Cariati',
    code: 'B774',
    province: 'CS'
  },
  {
    name: 'Carife',
    code: 'B776',
    province: 'AV'
  },
  {
    name: 'Carignano',
    code: 'B777',
    province: 'TO'
  },
  {
    name: 'Carimate',
    code: 'B778',
    province: 'CO'
  },
  {
    name: 'Carinaro',
    code: 'B779',
    province: 'CE'
  },
  {
    name: 'Carini',
    code: 'B780',
    province: 'PA'
  },
  {
    name: 'Carinola',
    code: 'B781',
    province: 'CE'
  },
  {
    name: 'Carisio',
    code: 'B782',
    province: 'VC'
  },
  {
    name: 'Carisolo',
    code: 'B783',
    province: 'TN'
  },
  {
    name: 'Carlantino',
    code: 'B784',
    province: 'FG'
  },
  {
    name: 'Carlazzo',
    code: 'B785',
    province: 'CO'
  },
  {
    name: 'Carlentini',
    code: 'B787',
    province: 'SR'
  },
  {
    name: 'Carlino',
    code: 'B788',
    province: 'UD'
  },
  {
    name: 'Carloforte',
    code: 'B789',
    province: 'SU'
  },
  {
    name: 'Carlopoli',
    code: 'B790',
    province: 'CZ'
  },
  {
    name: 'Carmagnola',
    code: 'B791',
    province: 'TO'
  },
  {
    name: 'Carmiano',
    code: 'B792',
    province: 'LE'
  },
  {
    name: 'Carmignano',
    code: 'B794',
    province: 'PO'
  },
  {
    name: 'Carmignano di Brenta',
    code: 'B795',
    province: 'PD'
  },
  {
    name: 'Carnago',
    code: 'B796',
    province: 'VA'
  },
  {
    name: 'Carnate',
    code: 'B798',
    province: 'MB'
  },
  {
    name: "Cornedo all'Isarco/Karneid",
    italianName: "Cornedo all'Isarco",
    foreignName: 'Karneid',
    code: 'B799',
    province: 'BZ'
  },
  {
    name: 'Carobbio degli Angeli',
    code: 'B801',
    province: 'BG'
  },
  {
    name: 'Carolei',
    code: 'B802',
    province: 'CS'
  },
  {
    name: 'Carona',
    code: 'B803',
    province: 'BG'
  },
  {
    name: 'Caronia',
    code: 'B804',
    province: 'ME'
  },
  {
    name: 'Caronno Pertusella',
    code: 'B805',
    province: 'VA'
  },
  {
    name: 'Caronno Varesino',
    code: 'B807',
    province: 'VA'
  },
  {
    name: 'Carosino',
    code: 'B808',
    province: 'TA'
  },
  {
    name: 'Carovigno',
    code: 'B809',
    province: 'BR'
  },
  {
    name: 'Carovilli',
    code: 'B810',
    province: 'IS'
  },
  {
    name: 'Carpaneto Piacentino',
    code: 'B812',
    province: 'PC'
  },
  {
    name: 'Carpanzano',
    code: 'B813',
    province: 'CS'
  },
  {
    name: 'Carpegna',
    code: 'B816',
    province: 'PU'
  },
  {
    name: 'Carpenedolo',
    code: 'B817',
    province: 'BS'
  },
  {
    name: 'Carpeneto',
    code: 'B818',
    province: 'AL'
  },
  {
    name: 'Carpi',
    code: 'B819',
    province: 'MO'
  },
  {
    name: 'Carpiano',
    code: 'B820',
    province: 'MI'
  },
  {
    name: 'Carpignano Salentino',
    code: 'B822',
    province: 'LE'
  },
  {
    name: 'Carpignano Sesia',
    code: 'B823',
    province: 'NO'
  },
  {
    name: 'Cura Carpignano',
    code: 'B824',
    province: 'PV'
  },
  {
    name: 'Carpineti',
    code: 'B825',
    province: 'RE'
  },
  {
    name: 'Carpineto Sinello',
    code: 'B826',
    province: 'CH'
  },
  {
    name: 'Carpineto della Nora',
    code: 'B827',
    province: 'PE'
  },
  {
    name: 'Carpineto Romano',
    code: 'B828',
    province: 'RM'
  },
  {
    name: 'Carpino',
    code: 'B829',
    province: 'FG'
  },
  {
    name: 'Carpinone',
    code: 'B830',
    province: 'IS'
  },
  {
    name: 'Carrara',
    code: 'B832',
    province: 'MS'
  },
  {
    name: 'Carrè',
    code: 'B835',
    province: 'VI'
  },
  {
    name: 'Carrega Ligure',
    code: 'B836',
    province: 'AL'
  },
  {
    name: 'Carro',
    code: 'B838',
    province: 'SP'
  },
  {
    name: 'Carrodano',
    code: 'B839',
    province: 'SP'
  },
  {
    name: 'Carrosio',
    code: 'B840',
    province: 'AL'
  },
  {
    name: 'Carrù',
    code: 'B841',
    province: 'CN'
  },
  {
    name: 'Carsoli',
    code: 'B842',
    province: 'AQ'
  },
  {
    name: 'Cartigliano',
    code: 'B844',
    province: 'VI'
  },
  {
    name: 'Cartignano',
    code: 'B845',
    province: 'CN'
  },
  {
    name: 'Cartoceto',
    code: 'B846',
    province: 'PU'
  },
  {
    name: 'Cartosio',
    code: 'B847',
    province: 'AL'
  },
  {
    name: 'Cartura',
    code: 'B848',
    province: 'PD'
  },
  {
    name: 'Carugate',
    code: 'B850',
    province: 'MI'
  },
  {
    name: 'Carugo',
    code: 'B851',
    province: 'CO'
  },
  {
    name: 'Carunchio',
    code: 'B853',
    province: 'CH'
  },
  {
    name: 'Carvico',
    code: 'B854',
    province: 'BG'
  },
  {
    name: 'Carzano',
    code: 'B856',
    province: 'TN'
  },
  {
    name: 'Casabona',
    code: 'B857',
    province: 'KR'
  },
  {
    name: 'Casacalenda',
    code: 'B858',
    province: 'CB'
  },
  {
    name: 'Casacanditella',
    code: 'B859',
    province: 'CH'
  },
  {
    name: 'Casagiove',
    code: 'B860',
    province: 'CE'
  },
  {
    name: 'Casalanguida',
    code: 'B861',
    province: 'CH'
  },
  {
    name: 'Casalattico',
    code: 'B862',
    province: 'FR'
  },
  {
    name: 'Casalbeltrame',
    code: 'B864',
    province: 'NO'
  },
  {
    name: 'Casalbordino',
    code: 'B865',
    province: 'CH'
  },
  {
    name: 'Casalbore',
    code: 'B866',
    province: 'AV'
  },
  {
    name: 'Casalborgone',
    code: 'B867',
    province: 'TO'
  },
  {
    name: 'Casalbuono',
    code: 'B868',
    province: 'SA'
  },
  {
    name: 'Casalbuttano ed Uniti',
    code: 'B869',
    province: 'CR'
  },
  {
    name: 'Casal Cermelli',
    code: 'B870',
    province: 'AL'
  },
  {
    name: 'Casalciprano',
    code: 'B871',
    province: 'CB'
  },
  {
    name: 'Casal di Principe',
    code: 'B872',
    province: 'CE'
  },
  {
    name: 'Casalduni',
    code: 'B873',
    province: 'BN'
  },
  {
    name: 'Casale Litta',
    code: 'B875',
    province: 'VA'
  },
  {
    name: 'Casale Corte Cerro',
    code: 'B876',
    province: 'VB'
  },
  {
    name: 'Casale di Scodosia',
    code: 'B877',
    province: 'PD'
  },
  {
    name: 'Casale Marittimo',
    code: 'B878',
    province: 'PI'
  },
  {
    name: 'Casale sul Sile',
    code: 'B879',
    province: 'TV'
  },
  {
    name: 'Casalecchio di Reno',
    code: 'B880',
    province: 'BO'
  },
  {
    name: 'Casale Cremasco-Vidolasco',
    code: 'B881',
    province: 'CR'
  },
  {
    name: 'Casaleggio Boiro',
    code: 'B882',
    province: 'AL'
  },
  {
    name: 'Casaleggio Novara',
    code: 'B883',
    province: 'NO'
  },
  {
    name: 'Casale Monferrato',
    code: 'B885',
    province: 'AL'
  },
  {
    name: 'Casaleone',
    code: 'B886',
    province: 'VR'
  },
  {
    name: 'Casaletto Lodigiano',
    code: 'B887',
    province: 'LO'
  },
  {
    name: 'Casaletto Spartano',
    code: 'B888',
    province: 'SA'
  },
  {
    name: 'Casaletto Ceredano',
    code: 'B889',
    province: 'CR'
  },
  {
    name: 'Casaletto di Sopra',
    code: 'B890',
    province: 'CR'
  },
  {
    name: 'Casaletto Vaprio',
    code: 'B891',
    province: 'CR'
  },
  {
    name: 'Casalfiumanese',
    code: 'B892',
    province: 'BO'
  },
  {
    name: 'Casalgrande',
    code: 'B893',
    province: 'RE'
  },
  {
    name: 'Casalgrasso',
    code: 'B894',
    province: 'CN'
  },
  {
    name: 'Casal Velino',
    code: 'B895',
    province: 'SA'
  },
  {
    name: 'Casalincontrada',
    code: 'B896',
    province: 'CH'
  },
  {
    name: 'Casalino',
    code: 'B897',
    province: 'NO'
  },
  {
    name: 'Casalmaggiore',
    code: 'B898',
    province: 'CR'
  },
  {
    name: 'Casalmaiocco',
    code: 'B899',
    province: 'LO'
  },
  {
    name: 'Casalmorano',
    code: 'B900',
    province: 'CR'
  },
  {
    name: 'Casalmoro',
    code: 'B901',
    province: 'MN'
  },
  {
    name: 'Casalnoceto',
    code: 'B902',
    province: 'AL'
  },
  {
    name: 'Villapiana',
    code: 'B903',
    province: 'CS'
  },
  {
    name: 'Casalnuovo Monterotaro',
    code: 'B904',
    province: 'FG'
  },
  {
    name: 'Casalnuovo di Napoli',
    code: 'B905',
    province: 'NA'
  },
  {
    name: 'San Paolo Albanese',
    code: 'B906',
    province: 'PZ'
  },
  {
    name: 'Casaloldo',
    code: 'B907',
    province: 'MN'
  },
  {
    name: 'Casalpusterlengo',
    code: 'B910',
    province: 'LO'
  },
  {
    name: 'Casalromano',
    code: 'B911',
    province: 'MN'
  },
  {
    name: 'Casalserugo',
    code: 'B912',
    province: 'PD'
  },
  {
    name: 'Pozzaglio ed Uniti',
    code: 'B914',
    province: 'CR'
  },
  {
    name: 'Trinitapoli',
    code: 'B915',
    province: 'BT'
  },
  {
    name: 'Casaluce',
    code: 'B916',
    province: 'CE'
  },
  {
    name: 'Casalvecchio di Puglia',
    code: 'B917',
    province: 'FG'
  },
  {
    name: 'Casalvecchio Siculo',
    code: 'B918',
    province: 'ME'
  },
  {
    name: 'Casalvieri',
    code: 'B919',
    province: 'FR'
  },
  {
    name: 'Casalvolone',
    code: 'B920',
    province: 'NO'
  },
  {
    name: 'Casalzuigno',
    code: 'B921',
    province: 'VA'
  },
  {
    name: 'Casamarciano',
    code: 'B922',
    province: 'NA'
  },
  {
    name: 'Casamassima',
    code: 'B923',
    province: 'BA'
  },
  {
    name: 'Casamicciola Terme',
    code: 'B924',
    province: 'NA'
  },
  {
    name: 'Casandrino',
    code: 'B925',
    province: 'NA'
  },
  {
    name: 'Casanova Lerrone',
    code: 'B927',
    province: 'SV'
  },
  {
    name: 'Casanova Elvo',
    code: 'B928',
    province: 'VC'
  },
  {
    name: 'Casanova Lonati',
    code: 'B929',
    province: 'PV'
  },
  {
    name: 'Casape',
    code: 'B932',
    province: 'RM'
  },
  {
    name: 'Casapinta',
    code: 'B933',
    province: 'BI'
  },
  {
    name: 'Casaprota',
    code: 'B934',
    province: 'RI'
  },
  {
    name: 'Casapulla',
    code: 'B935',
    province: 'CE'
  },
  {
    name: 'Casarano',
    code: 'B936',
    province: 'LE'
  },
  {
    name: 'Casargo',
    code: 'B937',
    province: 'LC'
  },
  {
    name: 'Casarile',
    code: 'B938',
    province: 'MI'
  },
  {
    name: 'Casarza Ligure',
    code: 'B939',
    province: 'GE'
  },
  {
    name: 'Casarsa della Delizia',
    code: 'B940',
    province: 'PN'
  },
  {
    name: 'Casasco',
    code: 'B941',
    province: 'AL'
  },
  {
    name: 'Casatenovo',
    code: 'B943',
    province: 'LC'
  },
  {
    name: 'Casatisma',
    code: 'B945',
    province: 'PV'
  },
  {
    name: 'Casavatore',
    code: 'B946',
    province: 'NA'
  },
  {
    name: 'Casazza',
    code: 'B947',
    province: 'BG'
  },
  {
    name: 'Cascia',
    code: 'B948',
    province: 'PG'
  },
  {
    name: 'Casciago',
    code: 'B949',
    province: 'VA'
  },
  {
    name: 'Cascina',
    code: 'B950',
    province: 'PI'
  },
  {
    name: 'San Giacomo Vercellese',
    code: 'B952',
    province: 'VC'
  },
  {
    name: "Cascinette d'Ivrea",
    code: 'B953',
    province: 'TO'
  },
  {
    name: 'Casei Gerola',
    code: 'B954',
    province: 'PV'
  },
  {
    name: 'Caselette',
    code: 'B955',
    province: 'TO'
  },
  {
    name: 'Casella',
    code: 'B956',
    province: 'GE'
  },
  {
    name: 'Caselle Lurani',
    code: 'B958',
    province: 'LO'
  },
  {
    name: 'Caselle in Pittari',
    code: 'B959',
    province: 'SA'
  },
  {
    name: 'Caselle Torinese',
    code: 'B960',
    province: 'TO'
  },
  {
    name: 'Caselle Landi',
    code: 'B961',
    province: 'LO'
  },
  {
    name: 'Scandicci',
    code: 'B962',
    province: 'FI'
  },
  {
    name: 'Caserta',
    code: 'B963',
    province: 'CE'
  },
  {
    name: 'Casier',
    code: 'B965',
    province: 'TV'
  },
  {
    name: 'Casignana',
    code: 'B966',
    province: 'RC'
  },
  {
    name: 'Casina',
    code: 'B967',
    province: 'RE'
  },
  {
    name: 'Castelsilano',
    code: 'B968',
    province: 'KR'
  },
  {
    name: 'Castel di Casio',
    code: 'B969',
    province: 'BO'
  },
  {
    name: "Casirate d'Adda",
    code: 'B971',
    province: 'BG'
  },
  {
    name: "Caslino d'Erba",
    code: 'B974',
    province: 'CO'
  },
  {
    name: 'Casnate con Bernate',
    code: 'B977',
    province: 'CO'
  },
  {
    name: 'Casnigo',
    code: 'B978',
    province: 'BG'
  },
  {
    name: 'Casola in Lunigiana',
    code: 'B979',
    province: 'MS'
  },
  {
    name: 'Casola di Napoli',
    code: 'B980',
    province: 'NA'
  },
  {
    name: 'Casola Valsenio',
    code: 'B982',
    province: 'RA'
  },
  {
    name: "Casole d'Elsa",
    code: 'B984',
    province: 'SI'
  },
  {
    name: 'Casoli',
    code: 'B985',
    province: 'CH'
  },
  {
    name: 'Casorate Sempione',
    code: 'B987',
    province: 'VA'
  },
  {
    name: 'Casorate Primo',
    code: 'B988',
    province: 'PV'
  },
  {
    name: 'Casorezzo',
    code: 'B989',
    province: 'MI'
  },
  {
    name: 'Casoria',
    code: 'B990',
    province: 'NA'
  },
  {
    name: 'Casorzo Monferrato',
    code: 'B991',
    province: 'AT'
  },
  {
    name: 'Caspoggio',
    code: 'B993',
    province: 'SO'
  },
  {
    name: 'Cassacco',
    code: 'B994',
    province: 'UD'
  },
  {
    name: 'Cassago Brianza',
    code: 'B996',
    province: 'LC'
  },
  {
    name: 'Cassano Irpino',
    code: 'B997',
    province: 'AV'
  },
  {
    name: 'Cassano delle Murge',
    code: 'B998',
    province: 'BA'
  },
  {
    name: 'Cassano Valcuvia',
    code: 'B999',
    province: 'VA'
  },
  {
    name: "Cassano all'Ionio",
    code: 'C002',
    province: 'CS'
  },
  {
    name: "Cassano d'Adda",
    code: 'C003',
    province: 'MI'
  },
  {
    name: 'Cassano Magnago',
    code: 'C004',
    province: 'VA'
  },
  {
    name: 'Cassaro',
    code: 'C006',
    province: 'SR'
  },
  {
    name: 'Cassiglio',
    code: 'C007',
    province: 'BG'
  },
  {
    name: 'Pero',
    code: 'C013',
    province: 'MI'
  },
  {
    name: "Cassina de' Pecchi",
    code: 'C014',
    province: 'MI'
  },
  {
    name: 'Cassina Rizzardi',
    code: 'C020',
    province: 'CO'
  },
  {
    name: 'Cassinasco',
    code: 'C022',
    province: 'AT'
  },
  {
    name: 'Cassina Valsassina',
    code: 'C024',
    province: 'LC'
  },
  {
    name: 'Cassine',
    code: 'C027',
    province: 'AL'
  },
  {
    name: 'Cassinelle',
    code: 'C030',
    province: 'AL'
  },
  {
    name: 'Cassinetta di Lugagnano',
    code: 'C033',
    province: 'MI'
  },
  {
    name: 'Cassino',
    code: 'C034',
    province: 'FR'
  },
  {
    name: 'Cassola',
    code: 'C037',
    province: 'VI'
  },
  {
    name: 'Cassolnovo',
    code: 'C038',
    province: 'PV'
  },
  {
    name: 'Castel Castagna',
    code: 'C040',
    province: 'TE'
  },
  {
    name: 'Castagnaro',
    code: 'C041',
    province: 'VR'
  },
  {
    name: 'Castagneto Carducci',
    code: 'C044',
    province: 'LI'
  },
  {
    name: 'Castagneto Po',
    code: 'C045',
    province: 'TO'
  },
  {
    name: 'Castagnito',
    code: 'C046',
    province: 'CN'
  },
  {
    name: 'Castagnole Monferrato',
    code: 'C047',
    province: 'AT'
  },
  {
    name: 'Castagnole Piemonte',
    code: 'C048',
    province: 'TO'
  },
  {
    name: 'Castagnole delle Lanze',
    code: 'C049',
    province: 'AT'
  },
  {
    name: 'Castana',
    code: 'C050',
    province: 'PV'
  },
  {
    name: "Castell'Umberto",
    code: 'C051',
    province: 'ME'
  },
  {
    name: 'Castano Primo',
    code: 'C052',
    province: 'MI'
  },
  {
    name: 'Casteggio',
    code: 'C053',
    province: 'PV'
  },
  {
    name: 'Castegnato',
    code: 'C055',
    province: 'BS'
  },
  {
    name: 'Castegnero',
    code: 'C056',
    province: 'VI'
  },
  {
    name: 'Castelbaldo',
    code: 'C057',
    province: 'PD'
  },
  {
    name: 'Castel Baronia',
    code: 'C058',
    province: 'AV'
  },
  {
    name: 'Castelbelforte',
    code: 'C059',
    province: 'MN'
  },
  {
    name: 'Castelbellino',
    code: 'C060',
    province: 'AN'
  },
  {
    name: 'Castelbello-Ciardes/Kastelbell-Tschars',
    italianName: 'Castelbello-Ciardes',
    foreignName: 'Kastelbell-Tschars',
    code: 'C062',
    province: 'BZ'
  },
  {
    name: 'Castelbianco',
    code: 'C063',
    province: 'SV'
  },
  {
    name: 'Castel Boglione',
    code: 'C064',
    province: 'AT'
  },
  {
    name: 'Castel Bolognese',
    code: 'C065',
    province: 'RA'
  },
  {
    name: 'Castelbottaccio',
    code: 'C066',
    province: 'CB'
  },
  {
    name: 'Castelbuono',
    code: 'C067',
    province: 'PA'
  },
  {
    name: 'Castelcivita',
    code: 'C069',
    province: 'SA'
  },
  {
    name: 'Servigliano',
    code: 'C070',
    province: 'FM'
  },
  {
    name: 'Castelcovati',
    code: 'C072',
    province: 'BS'
  },
  {
    name: 'Castelcucco',
    code: 'C073',
    province: 'TV'
  },
  {
    name: 'Casteldaccia',
    code: 'C074',
    province: 'PA'
  },
  {
    name: "Castel d'Aiano",
    code: 'C075',
    province: 'BO'
  },
  {
    name: "Castel d'Ario",
    code: 'C076',
    province: 'MN'
  },
  {
    name: "Castel d'Azzano",
    code: 'C078',
    province: 'VR'
  },
  {
    name: 'Castelli Calepio',
    code: 'C079',
    province: 'BG'
  },
  {
    name: 'Casteldelci',
    code: 'C080',
    province: 'RN'
  },
  {
    name: 'Casteldelfino',
    code: 'C081',
    province: 'CN'
  },
  {
    name: 'Castel del Giudice',
    code: 'C082',
    province: 'IS'
  },
  {
    name: 'Castel del Monte',
    code: 'C083',
    province: 'AQ'
  },
  {
    name: 'Castel del Piano',
    code: 'C085',
    province: 'GR'
  },
  {
    name: 'Castel del Rio',
    code: 'C086',
    province: 'BO'
  },
  {
    name: 'Casteldidone',
    code: 'C089',
    province: 'CR'
  },
  {
    name: 'Castel di Ieri',
    code: 'C090',
    province: 'AQ'
  },
  {
    name: 'Castel di Iudica',
    code: 'C091',
    province: 'CT'
  },
  {
    name: 'Castel di Lama',
    code: 'C093',
    province: 'AP'
  },
  {
    name: 'Castel di Lucio',
    code: 'C094',
    province: 'ME'
  },
  {
    name: 'Castel di Sangro',
    code: 'C096',
    province: 'AQ'
  },
  {
    name: 'Castel di Sasso',
    code: 'C097',
    province: 'CE'
  },
  {
    name: 'Castel di Tora',
    code: 'C098',
    province: 'RI'
  },
  {
    name: 'Castelfidardo',
    code: 'C100',
    province: 'AN'
  },
  {
    name: 'Castelfiorentino',
    code: 'C101',
    province: 'FI'
  },
  {
    name: 'Castel Focognano',
    code: 'C102',
    province: 'AR'
  },
  {
    name: 'Castelforte',
    code: 'C104',
    province: 'LT'
  },
  {
    name: 'Castelfranci',
    code: 'C105',
    province: 'AV'
  },
  {
    name: 'Castelfranco in Miscano',
    code: 'C106',
    province: 'BN'
  },
  {
    name: 'Castelfranco Emilia',
    code: 'C107',
    province: 'MO'
  },
  {
    name: 'Castrolibero',
    code: 'C108',
    province: 'CS'
  },
  {
    name: 'Castel Vittorio',
    code: 'C110',
    province: 'IM'
  },
  {
    name: 'Castelfranco Veneto',
    code: 'C111',
    province: 'TV'
  },
  {
    name: 'Castelfranco di Sotto',
    code: 'C113',
    province: 'PI'
  },
  {
    name: 'Castel Frentano',
    code: 'C114',
    province: 'CH'
  },
  {
    name: 'Castel Gabbiano',
    code: 'C115',
    province: 'CR'
  },
  {
    name: 'Castel Gandolfo',
    code: 'C116',
    province: 'RM'
  },
  {
    name: 'Castel Giorgio',
    code: 'C117',
    province: 'TR'
  },
  {
    name: 'Castel Goffredo',
    code: 'C118',
    province: 'MN'
  },
  {
    name: 'Castelgomberto',
    code: 'C119',
    province: 'VI'
  },
  {
    name: 'Castelgrande',
    code: 'C120',
    province: 'PZ'
  },
  {
    name: 'Castel Guelfo di Bologna',
    code: 'C121',
    province: 'BO'
  },
  {
    name: 'Castelguglielmo',
    code: 'C122',
    province: 'RO'
  },
  {
    name: 'Castelguidone',
    code: 'C123',
    province: 'CH'
  },
  {
    name: 'Castellabate',
    code: 'C125',
    province: 'SA'
  },
  {
    name: 'Castellafiume',
    code: 'C126',
    province: 'AQ'
  },
  {
    name: "Castell'Alfero",
    code: 'C127',
    province: 'AT'
  },
  {
    name: 'Castellalto',
    code: 'C128',
    province: 'TE'
  },
  {
    name: 'Castellammare di Stabia',
    code: 'C129',
    province: 'NA'
  },
  {
    name: 'Castellammare del Golfo',
    code: 'C130',
    province: 'TP'
  },
  {
    name: 'Castellamonte',
    code: 'C133',
    province: 'TO'
  },
  {
    name: 'Castellana Grotte',
    code: 'C134',
    province: 'BA'
  },
  {
    name: 'Castellana Sicula',
    code: 'C135',
    province: 'PA'
  },
  {
    name: 'Castellaneta',
    code: 'C136',
    province: 'TA'
  },
  {
    name: 'Castellania Coppi',
    code: 'C137',
    province: 'AL'
  },
  {
    name: 'Castellanza',
    code: 'C139',
    province: 'VA'
  },
  {
    name: 'Castellarano',
    code: 'C141',
    province: 'RE'
  },
  {
    name: 'Castellar Guidobono',
    code: 'C142',
    province: 'AL'
  },
  {
    name: 'Castellaro',
    code: 'C143',
    province: 'IM'
  },
  {
    name: "Castell'Arquato",
    code: 'C145',
    province: 'PC'
  },
  {
    name: "Castell'Azzara",
    code: 'C147',
    province: 'GR'
  },
  {
    name: 'Castellazzo Bormida',
    code: 'C148',
    province: 'AL'
  },
  {
    name: 'Castellazzo Novarese',
    code: 'C149',
    province: 'NO'
  },
  {
    name: 'Castelleone di Suasa',
    code: 'C152',
    province: 'AN'
  },
  {
    name: 'Castelleone',
    code: 'C153',
    province: 'CR'
  },
  {
    name: 'Castellero',
    code: 'C154',
    province: 'AT'
  },
  {
    name: 'Castelletto Cervo',
    code: 'C155',
    province: 'BI'
  },
  {
    name: "Castelletto d'Erro",
    code: 'C156',
    province: 'AL'
  },
  {
    name: 'Castelletto di Branduzzo',
    code: 'C157',
    province: 'PV'
  },
  {
    name: "Castelletto d'Orba",
    code: 'C158',
    province: 'AL'
  },
  {
    name: 'Castelletto Merli',
    code: 'C160',
    province: 'AL'
  },
  {
    name: 'Castelletto Molina',
    code: 'C161',
    province: 'AT'
  },
  {
    name: 'Castelletto Monferrato',
    code: 'C162',
    province: 'AL'
  },
  {
    name: 'Castelletto Stura',
    code: 'C165',
    province: 'CN'
  },
  {
    name: 'Castelletto sopra Ticino',
    code: 'C166',
    province: 'NO'
  },
  {
    name: 'Castelletto Uzzone',
    code: 'C167',
    province: 'CN'
  },
  {
    name: 'Castelli',
    code: 'C169',
    province: 'TE'
  },
  {
    name: 'Castellina in Chianti',
    code: 'C172',
    province: 'SI'
  },
  {
    name: "Castellinaldo d'Alba",
    code: 'C173',
    province: 'CN'
  },
  {
    name: 'Castellina Marittima',
    code: 'C174',
    province: 'PI'
  },
  {
    name: 'Castellino del Biferno',
    code: 'C175',
    province: 'CB'
  },
  {
    name: 'Castellino Tanaro',
    code: 'C176',
    province: 'CN'
  },
  {
    name: 'Castelliri',
    code: 'C177',
    province: 'FR'
  },
  {
    name: 'Castello del Matese',
    code: 'C178',
    province: 'CE'
  },
  {
    name: 'Castelveccana',
    code: 'C181',
    province: 'VA'
  },
  {
    name: 'Castel Condino',
    code: 'C183',
    province: 'TN'
  },
  {
    name: "Castello d'Agogna",
    code: 'C184',
    province: 'PV'
  },
  {
    name: "Castello d'Argile",
    code: 'C185',
    province: 'BO'
  },
  {
    name: "Castello dell'Acqua",
    code: 'C186',
    province: 'SO'
  },
  {
    name: 'Castello di Brianza',
    code: 'C187',
    province: 'LC'
  },
  {
    name: 'Castello di Cisterna',
    code: 'C188',
    province: 'NA'
  },
  {
    name: 'Castello-Molina di Fiemme',
    code: 'C189',
    province: 'TN'
  },
  {
    name: 'Castello di Godego',
    code: 'C190',
    province: 'TV'
  },
  {
    name: 'Castello Tesino',
    code: 'C194',
    province: 'TN'
  },
  {
    name: 'Castellucchio',
    code: 'C195',
    province: 'MN'
  },
  {
    name: 'Castelmauro',
    code: 'C197',
    province: 'CB'
  },
  {
    name: 'Castelluccio dei Sauri',
    code: 'C198',
    province: 'FG'
  },
  {
    name: 'Castelluccio Inferiore',
    code: 'C199',
    province: 'PZ'
  },
  {
    name: 'Castelverrino',
    code: 'C200',
    province: 'IS'
  },
  {
    name: 'Castelluccio Superiore',
    code: 'C201',
    province: 'PZ'
  },
  {
    name: 'Castelluccio Valmaggiore',
    code: 'C202',
    province: 'FG'
  },
  {
    name: 'Castel Madama',
    code: 'C203',
    province: 'RM'
  },
  {
    name: 'Castel Maggiore',
    code: 'C204',
    province: 'BO'
  },
  {
    name: 'Castelmagno',
    code: 'C205',
    province: 'CN'
  },
  {
    name: 'Castelmarte',
    code: 'C206',
    province: 'CO'
  },
  {
    name: 'Castelmassa',
    code: 'C207',
    province: 'RO'
  },
  {
    name: 'Castel Mella',
    code: 'C208',
    province: 'BS'
  },
  {
    name: 'Castelmezzano',
    code: 'C209',
    province: 'PZ'
  },
  {
    name: 'Castelmola',
    code: 'C210',
    province: 'ME'
  },
  {
    name: 'Castel Morrone',
    code: 'C211',
    province: 'CE'
  },
  {
    name: 'Castelnovetto',
    code: 'C213',
    province: 'PV'
  },
  {
    name: 'Castelnuovo di Ceva',
    code: 'C214',
    province: 'CN'
  },
  {
    name: 'Castelnovo Bariano',
    code: 'C215',
    province: 'RO'
  },
  {
    name: 'Castelnuovo',
    code: 'C216',
    province: 'TN'
  },
  {
    name: 'Castelnovo del Friuli',
    code: 'C217',
    province: 'PN'
  },
  {
    name: 'Castelnovo di Sotto',
    code: 'C218',
    province: 'RE'
  },
  {
    name: "Castelnovo ne' Monti",
    code: 'C219',
    province: 'RE'
  },
  {
    name: 'Castelnuovo Bozzente',
    code: 'C220',
    province: 'CO'
  },
  {
    name: 'Castelnuovo della Daunia',
    code: 'C222',
    province: 'FG'
  },
  {
    name: 'Castelnuovo Parano',
    code: 'C223',
    province: 'FR'
  },
  {
    name: 'Castelnuovo di Farfa',
    code: 'C224',
    province: 'RI'
  },
  {
    name: 'Castelnuovo del Garda',
    code: 'C225',
    province: 'VR'
  },
  {
    name: 'Castelnuovo Belbo',
    code: 'C226',
    province: 'AT'
  },
  {
    name: 'Castelnuovo Berardenga',
    code: 'C227',
    province: 'SI'
  },
  {
    name: "Castelnuovo Bocca d'Adda",
    code: 'C228',
    province: 'LO'
  },
  {
    name: 'Castelnuovo Bormida',
    code: 'C229',
    province: 'AL'
  },
  {
    name: 'Castelnuovo Calcea',
    code: 'C230',
    province: 'AT'
  },
  {
    name: 'Castelnuovo Cilento',
    code: 'C231',
    province: 'SA'
  },
  {
    name: 'Castelnuovo Don Bosco',
    code: 'C232',
    province: 'AT'
  },
  {
    name: 'Castelnuovo di Conza',
    code: 'C235',
    province: 'SA'
  },
  {
    name: 'Castelnuovo di Garfagnana',
    code: 'C236',
    province: 'LU'
  },
  {
    name: 'Castelnuovo di Porto',
    code: 'C237',
    province: 'RM'
  },
  {
    name: 'Castelnuovo Magra',
    code: 'C240',
    province: 'SP'
  },
  {
    name: 'Castelnuovo Nigra',
    code: 'C241',
    province: 'TO'
  },
  {
    name: 'Castelnuovo Rangone',
    code: 'C242',
    province: 'MO'
  },
  {
    name: 'Castelnuovo Scrivia',
    code: 'C243',
    province: 'AL'
  },
  {
    name: 'Castelnuovo di Val di Cecina',
    code: 'C244',
    province: 'PI'
  },
  {
    name: 'Castelpagano',
    code: 'C245',
    province: 'BN'
  },
  {
    name: 'Castelpetroso',
    code: 'C246',
    province: 'IS'
  },
  {
    name: 'Castelpizzuto',
    code: 'C247',
    province: 'IS'
  },
  {
    name: 'Castelplanio',
    code: 'C248',
    province: 'AN'
  },
  {
    name: 'Castelpoto',
    code: 'C250',
    province: 'BN'
  },
  {
    name: 'Castelraimondo',
    code: 'C251',
    province: 'MC'
  },
  {
    name: 'Castel Ritaldi',
    code: 'C252',
    province: 'PG'
  },
  {
    name: 'Castel Rocchero',
    code: 'C253',
    province: 'AT'
  },
  {
    name: 'Castelrotto/Kastelruth',
    italianName: 'Castelrotto',
    foreignName: 'Kastelruth',
    code: 'C254',
    province: 'BZ'
  },
  {
    name: 'Castel Rozzone',
    code: 'C255',
    province: 'BG'
  },
  {
    name: 'Castel San Giorgio',
    code: 'C259',
    province: 'SA'
  },
  {
    name: 'Castel San Giovanni',
    code: 'C261',
    province: 'PC'
  },
  {
    name: 'Castel San Lorenzo',
    code: 'C262',
    province: 'SA'
  },
  {
    name: 'Castel San Niccolò',
    code: 'C263',
    province: 'AR'
  },
  {
    name: 'Castel San Pietro Terme',
    code: 'C265',
    province: 'BO'
  },
  {
    name: 'Castel San Pietro Romano',
    code: 'C266',
    province: 'RM'
  },
  {
    name: 'Castelsantangelo sul Nera',
    code: 'C267',
    province: 'MC'
  },
  {
    name: "Castel Sant'Angelo",
    code: 'C268',
    province: 'RI'
  },
  {
    name: "Castel Sant'Elia",
    code: 'C269',
    province: 'VT'
  },
  {
    name: 'Castel San Vincenzo',
    code: 'C270',
    province: 'IS'
  },
  {
    name: 'Castelsaraceno',
    code: 'C271',
    province: 'PZ'
  },
  {
    name: 'Castelsardo',
    code: 'C272',
    province: 'SS'
  },
  {
    name: 'Castelseprio',
    code: 'C273',
    province: 'VA'
  },
  {
    name: 'Castelspina',
    code: 'C274',
    province: 'AL'
  },
  {
    name: 'Casteltermini',
    code: 'C275',
    province: 'AG'
  },
  {
    name: 'Castelvecchio di Rocca Barbena',
    code: 'C276',
    province: 'SV'
  },
  {
    name: 'Castelvecchio Calvisio',
    code: 'C278',
    province: 'AQ'
  },
  {
    name: 'Castelvecchio Subequo',
    code: 'C279',
    province: 'AQ'
  },
  {
    name: 'Castelvenere',
    code: 'C280',
    province: 'BN'
  },
  {
    name: 'Verrès',
    code: 'C282',
    province: 'AO'
  },
  {
    name: 'Castelvetere sul Calore',
    code: 'C283',
    province: 'AV'
  },
  {
    name: 'Castelvetere in Val Fortore',
    code: 'C284',
    province: 'BN'
  },
  {
    name: 'Caulonia',
    code: 'C285',
    province: 'RC'
  },
  {
    name: 'Castelvetrano',
    code: 'C286',
    province: 'TP'
  },
  {
    name: 'Castelvetro di Modena',
    code: 'C287',
    province: 'MO'
  },
  {
    name: 'Castelvetro Piacentino',
    code: 'C288',
    province: 'PC'
  },
  {
    name: 'Castel Viscardo',
    code: 'C289',
    province: 'TR'
  },
  {
    name: 'Castelvisconti',
    code: 'C290',
    province: 'CR'
  },
  {
    name: 'Castel Volturno',
    code: 'C291',
    province: 'CE'
  },
  {
    name: 'Castenaso',
    code: 'C292',
    province: 'BO'
  },
  {
    name: 'Castenedolo',
    code: 'C293',
    province: 'BS'
  },
  {
    name: 'Châtillon',
    code: 'C294',
    province: 'AO'
  },
  {
    name: 'Castiglione dei Pepoli',
    code: 'C296',
    province: 'BO'
  },
  {
    name: 'Castiglione di Sicilia',
    code: 'C297',
    province: 'CT'
  },
  {
    name: 'Castiglione Messer Marino',
    code: 'C298',
    province: 'CH'
  },
  {
    name: 'Castiglione Olona',
    code: 'C300',
    province: 'VA'
  },
  {
    name: 'Castiglione Cosentino',
    code: 'C301',
    province: 'CS'
  },
  {
    name: 'Castiglione Chiavarese',
    code: 'C302',
    province: 'GE'
  },
  {
    name: 'Castiglione di Garfagnana',
    code: 'C303',
    province: 'LU'
  },
  {
    name: "Castiglione d'Adda",
    code: 'C304',
    province: 'LO'
  },
  {
    name: 'Castiglione del Genovesi',
    code: 'C306',
    province: 'SA'
  },
  {
    name: 'Castiglione Torinese',
    code: 'C307',
    province: 'TO'
  },
  {
    name: 'Castiglione a Casauria',
    code: 'C308',
    province: 'PE'
  },
  {
    name: 'Castiglione del Lago',
    code: 'C309',
    province: 'PG'
  },
  {
    name: 'Castiglione della Pescaia',
    code: 'C310',
    province: 'GR'
  },
  {
    name: 'Colledara',
    code: 'C311',
    province: 'TE'
  },
  {
    name: 'Castiglione delle Stiviere',
    code: 'C312',
    province: 'MN'
  },
  {
    name: "Castiglione d'Orcia",
    code: 'C313',
    province: 'SI'
  },
  {
    name: 'Castiglione Falletto',
    code: 'C314',
    province: 'CN'
  },
  {
    name: 'Castiglione in Teverina',
    code: 'C315',
    province: 'VT'
  },
  {
    name: 'Castiglione Messer Raimondo',
    code: 'C316',
    province: 'TE'
  },
  {
    name: 'Castiglione Tinella',
    code: 'C317',
    province: 'CN'
  },
  {
    name: 'Castiglion Fibocchi',
    code: 'C318',
    province: 'AR'
  },
  {
    name: 'Castiglion Fiorentino',
    code: 'C319',
    province: 'AR'
  },
  {
    name: 'Castignano',
    code: 'C321',
    province: 'AP'
  },
  {
    name: 'Castilenti',
    code: 'C322',
    province: 'TE'
  },
  {
    name: 'Castino',
    code: 'C323',
    province: 'CN'
  },
  {
    name: 'Castione della Presolana',
    code: 'C324',
    province: 'BG'
  },
  {
    name: 'Castione Andevenno',
    code: 'C325',
    province: 'SO'
  },
  {
    name: 'Castions di Strada',
    code: 'C327',
    province: 'UD'
  },
  {
    name: 'Castiraga Vidardo',
    code: 'C329',
    province: 'LO'
  },
  {
    name: 'Casto',
    code: 'C330',
    province: 'BS'
  },
  {
    name: 'Castorano',
    code: 'C331',
    province: 'AP'
  },
  {
    name: 'Castrezzato',
    code: 'C332',
    province: 'BS'
  },
  {
    name: 'Castri di Lecce',
    code: 'C334',
    province: 'LE'
  },
  {
    name: "Castrignano de' Greci",
    code: 'C335',
    province: 'LE'
  },
  {
    name: 'Castrignano del Capo',
    code: 'C336',
    province: 'LE'
  },
  {
    name: 'Castro',
    code: 'C337',
    province: 'BG'
  },
  {
    name: 'Castro dei Volsci',
    code: 'C338',
    province: 'FR'
  },
  {
    name: 'Castrocaro Terme e Terra del Sole',
    code: 'C339',
    province: 'FC'
  },
  {
    name: 'Castrocielo',
    code: 'C340',
    province: 'FR'
  },
  {
    name: 'Castrofilippo',
    code: 'C341',
    province: 'AG'
  },
  {
    name: 'Enna',
    code: 'C342',
    province: 'EN'
  },
  {
    name: 'Castronno',
    code: 'C343',
    province: 'VA'
  },
  {
    name: 'Castronovo di Sicilia',
    code: 'C344',
    province: 'PA'
  },
  {
    name: "Castronuovo di Sant'Andrea",
    code: 'C345',
    province: 'PZ'
  },
  {
    name: 'Castropignano',
    code: 'C346',
    province: 'CB'
  },
  {
    name: 'Castroreale',
    code: 'C347',
    province: 'ME'
  },
  {
    name: 'Castroregio',
    code: 'C348',
    province: 'CS'
  },
  {
    name: 'Castrovillari',
    code: 'C349',
    province: 'CS'
  },
  {
    name: 'Catania',
    code: 'C351',
    province: 'CT'
  },
  {
    name: 'Catanzaro',
    code: 'C352',
    province: 'CZ'
  },
  {
    name: 'Catenanuova',
    code: 'C353',
    province: 'EN'
  },
  {
    name: 'Catignano',
    code: 'C354',
    province: 'PE'
  },
  {
    name: 'Cattolica Eraclea',
    code: 'C356',
    province: 'AG'
  },
  {
    name: 'Cattolica',
    code: 'C357',
    province: 'RN'
  },
  {
    name: 'Cautano',
    code: 'C359',
    province: 'BN'
  },
  {
    name: 'Cava Manara',
    code: 'C360',
    province: 'PV'
  },
  {
    name: "Cava de' Tirreni",
    code: 'C361',
    province: 'SA'
  },
  {
    name: 'Cavaglià',
    code: 'C363',
    province: 'BI'
  },
  {
    name: 'Cavaglietto',
    code: 'C364',
    province: 'NO'
  },
  {
    name: "Cavaglio d'Agogna",
    code: 'C365',
    province: 'NO'
  },
  {
    name: 'Cavagnolo',
    code: 'C369',
    province: 'TO'
  },
  {
    name: 'Cavaion Veronese',
    code: 'C370',
    province: 'VR'
  },
  {
    name: 'Cavalese',
    code: 'C372',
    province: 'TN'
  },
  {
    name: 'Cavallerleone',
    code: 'C375',
    province: 'CN'
  },
  {
    name: 'Cavallermaggiore',
    code: 'C376',
    province: 'CN'
  },
  {
    name: 'Cavallino',
    code: 'C377',
    province: 'LE'
  },
  {
    name: 'Cavallirio',
    code: 'C378',
    province: 'NO'
  },
  {
    name: 'Cavareno',
    code: 'C380',
    province: 'TN'
  },
  {
    name: 'Cavargna',
    code: 'C381',
    province: 'CO'
  },
  {
    name: 'Cavaria con Premezzo',
    code: 'C382',
    province: 'VA'
  },
  {
    name: 'Cavarzere',
    code: 'C383',
    province: 'VE'
  },
  {
    name: 'Cavaso del Tomba',
    code: 'C384',
    province: 'TV'
  },
  {
    name: 'Cavasso Nuovo',
    code: 'C385',
    province: 'PN'
  },
  {
    name: 'Cavatore',
    code: 'C387',
    province: 'AL'
  },
  {
    name: 'Jesolo',
    code: 'C388',
    province: 'VE'
  },
  {
    name: 'Cavazzo Carnico',
    code: 'C389',
    province: 'UD'
  },
  {
    name: 'Cave',
    code: 'C390',
    province: 'RM'
  },
  {
    name: 'Cavedago',
    code: 'C392',
    province: 'TN'
  },
  {
    name: 'Cavedine',
    code: 'C393',
    province: 'TN'
  },
  {
    name: "Cavenago d'Adda",
    code: 'C394',
    province: 'LO'
  },
  {
    name: 'Cavenago di Brianza',
    code: 'C395',
    province: 'MB'
  },
  {
    name: 'Cavernago',
    code: 'C396',
    province: 'BG'
  },
  {
    name: 'Cavezzo',
    code: 'C398',
    province: 'MO'
  },
  {
    name: 'Cavizzana',
    code: 'C400',
    province: 'TN'
  },
  {
    name: 'Cavour',
    code: 'C404',
    province: 'TO'
  },
  {
    name: 'Cavriago',
    code: 'C405',
    province: 'RE'
  },
  {
    name: 'Cavriana',
    code: 'C406',
    province: 'MN'
  },
  {
    name: 'Cavriglia',
    code: 'C407',
    province: 'AR'
  },
  {
    name: 'Cazzago San Martino',
    code: 'C408',
    province: 'BS'
  },
  {
    name: 'Cazzago Brabbia',
    code: 'C409',
    province: 'VA'
  },
  {
    name: "Cazzano Sant'Andrea",
    code: 'C410',
    province: 'BG'
  },
  {
    name: 'Cazzano di Tramigna',
    code: 'C412',
    province: 'VR'
  },
  {
    name: 'Ceccano',
    code: 'C413',
    province: 'FR'
  },
  {
    name: 'Cecima',
    code: 'C414',
    province: 'PV'
  },
  {
    name: 'Cecina',
    code: 'C415',
    province: 'LI'
  },
  {
    name: 'Cedegolo',
    code: 'C417',
    province: 'BS'
  },
  {
    name: 'Cedrasco',
    code: 'C418',
    province: 'SO'
  },
  {
    name: 'Cefalà Diana',
    code: 'C420',
    province: 'PA'
  },
  {
    name: 'Cefalù',
    code: 'C421',
    province: 'PA'
  },
  {
    name: 'Ceggia',
    code: 'C422',
    province: 'VE'
  },
  {
    name: 'Ceglie Messapica',
    code: 'C424',
    province: 'BR'
  },
  {
    name: 'Celano',
    code: 'C426',
    province: 'AQ'
  },
  {
    name: 'Celenza sul Trigno',
    code: 'C428',
    province: 'CH'
  },
  {
    name: 'Celenza Valfortore',
    code: 'C429',
    province: 'FG'
  },
  {
    name: 'Celico',
    code: 'C430',
    province: 'CS'
  },
  {
    name: 'Cella Monte',
    code: 'C432',
    province: 'AL'
  },
  {
    name: 'Cella Dati',
    code: 'C435',
    province: 'CR'
  },
  {
    name: 'Cellamare',
    code: 'C436',
    province: 'BA'
  },
  {
    name: 'Cellara',
    code: 'C437',
    province: 'CS'
  },
  {
    name: 'Cellarengo',
    code: 'C438',
    province: 'AT'
  },
  {
    name: 'Cellatica',
    code: 'C439',
    province: 'BS'
  },
  {
    name: 'Celle Enomondo',
    code: 'C440',
    province: 'AT'
  },
  {
    name: 'Celle di Macra',
    code: 'C441',
    province: 'CN'
  },
  {
    name: 'Celle di San Vito',
    code: 'C442',
    province: 'FG'
  },
  {
    name: 'Celle Ligure',
    code: 'C443',
    province: 'SV'
  },
  {
    name: 'Celle di Bulgheria',
    code: 'C444',
    province: 'SA'
  },
  {
    name: 'Celleno',
    code: 'C446',
    province: 'VT'
  },
  {
    name: 'Cellere',
    code: 'C447',
    province: 'VT'
  },
  {
    name: 'Cellino San Marco',
    code: 'C448',
    province: 'BR'
  },
  {
    name: 'Cellino Attanasio',
    code: 'C449',
    province: 'TE'
  },
  {
    name: 'Cenadi',
    code: 'C453',
    province: 'CZ'
  },
  {
    name: 'Cenate Sopra',
    code: 'C456',
    province: 'BG'
  },
  {
    name: 'Cenate Sotto',
    code: 'C457',
    province: 'BG'
  },
  {
    name: 'Cencenighe Agordino',
    code: 'C458',
    province: 'BL'
  },
  {
    name: 'Cene',
    code: 'C459',
    province: 'BG'
  },
  {
    name: 'Ceneselli',
    code: 'C461',
    province: 'RO'
  },
  {
    name: 'Cengio',
    code: 'C463',
    province: 'SV'
  },
  {
    name: 'Centallo',
    code: 'C466',
    province: 'CN'
  },
  {
    name: 'Cento',
    code: 'C469',
    province: 'FE'
  },
  {
    name: 'Centola',
    code: 'C470',
    province: 'SA'
  },
  {
    name: 'Centuripe',
    code: 'C471',
    province: 'EN'
  },
  {
    name: 'Centrache',
    code: 'C472',
    province: 'CZ'
  },
  {
    name: 'Cepagatti',
    code: 'C474',
    province: 'PE'
  },
  {
    name: 'Ceppaloni',
    code: 'C476',
    province: 'BN'
  },
  {
    name: 'Ceppo Morelli',
    code: 'C478',
    province: 'VB'
  },
  {
    name: 'Ceprano',
    code: 'C479',
    province: 'FR'
  },
  {
    name: 'Cerami',
    code: 'C480',
    province: 'EN'
  },
  {
    name: 'Ceranesi',
    code: 'C481',
    province: 'GE'
  },
  {
    name: "Cerano d'Intelvi",
    code: 'C482',
    province: 'CO'
  },
  {
    name: 'Cerano',
    code: 'C483',
    province: 'NO'
  },
  {
    name: 'Ceranova',
    code: 'C484',
    province: 'PV'
  },
  {
    name: 'Ceraso',
    code: 'C485',
    province: 'SA'
  },
  {
    name: 'Cercemaggiore',
    code: 'C486',
    province: 'CB'
  },
  {
    name: 'Cercenasco',
    code: 'C487',
    province: 'TO'
  },
  {
    name: 'Cercepiccola',
    code: 'C488',
    province: 'CB'
  },
  {
    name: 'Cerchiara di Calabria',
    code: 'C489',
    province: 'CS'
  },
  {
    name: 'Cerchio',
    code: 'C492',
    province: 'AQ'
  },
  {
    name: 'Cercino',
    code: 'C493',
    province: 'SO'
  },
  {
    name: 'Cercivento',
    code: 'C494',
    province: 'UD'
  },
  {
    name: 'Cercola',
    code: 'C495',
    province: 'NA'
  },
  {
    name: 'Cerda',
    code: 'C496',
    province: 'PA'
  },
  {
    name: 'Ceres',
    code: 'C497',
    province: 'TO'
  },
  {
    name: 'Cerea',
    code: 'C498',
    province: 'VR'
  },
  {
    name: 'Ceregnano',
    code: 'C500',
    province: 'RO'
  },
  {
    name: 'Cerenzia',
    code: 'C501',
    province: 'KR'
  },
  {
    name: 'Ceresara',
    code: 'C502',
    province: 'MN'
  },
  {
    name: 'Cereseto',
    code: 'C503',
    province: 'AL'
  },
  {
    name: 'Ceresole Alba',
    code: 'C504',
    province: 'CN'
  },
  {
    name: 'Ceresole Reale',
    code: 'C505',
    province: 'TO'
  },
  {
    name: 'Cerete',
    code: 'C506',
    province: 'BG'
  },
  {
    name: 'Cerreto Grue',
    code: 'C507',
    province: 'AL'
  },
  {
    name: 'Ceretto Lomellina',
    code: 'C508',
    province: 'PV'
  },
  {
    name: 'Cergnago',
    code: 'C509',
    province: 'PV'
  },
  {
    name: 'Ceriale',
    code: 'C510',
    province: 'SV'
  },
  {
    name: 'Ceriana',
    code: 'C511',
    province: 'IM'
  },
  {
    name: 'Ceriano Laghetto',
    code: 'C512',
    province: 'MB'
  },
  {
    name: 'Cerignale',
    code: 'C513',
    province: 'PC'
  },
  {
    name: 'Cerignola',
    code: 'C514',
    province: 'FG'
  },
  {
    name: 'Cerisano',
    code: 'C515',
    province: 'CS'
  },
  {
    name: 'Cermenate',
    code: 'C516',
    province: 'CO'
  },
  {
    name: 'Cermignano',
    code: 'C517',
    province: 'TE'
  },
  {
    name: 'Cerreto Laziale',
    code: 'C518',
    province: 'RM'
  },
  {
    name: 'Cernobbio',
    code: 'C520',
    province: 'CO'
  },
  {
    name: 'Cernusco Lombardone',
    code: 'C521',
    province: 'LC'
  },
  {
    name: 'Cernusco sul Naviglio',
    code: 'C523',
    province: 'MI'
  },
  {
    name: "Cerreto d'Esi",
    code: 'C524',
    province: 'AN'
  },
  {
    name: 'Cerreto Sannita',
    code: 'C525',
    province: 'BN'
  },
  {
    name: 'Cerreto di Spoleto',
    code: 'C527',
    province: 'PG'
  },
  {
    name: "Cerreto d'Asti",
    code: 'C528',
    province: 'AT'
  },
  {
    name: 'Cerreto Guidi',
    code: 'C529',
    province: 'FI'
  },
  {
    name: 'Cerretto Langhe',
    code: 'C530',
    province: 'CN'
  },
  {
    name: 'Cerrina Monferrato',
    code: 'C531',
    province: 'AL'
  },
  {
    name: 'Cerrione',
    code: 'C532',
    province: 'BI'
  },
  {
    name: 'Cerro Tanaro',
    code: 'C533',
    province: 'AT'
  },
  {
    name: 'Cerro al Volturno',
    code: 'C534',
    province: 'IS'
  },
  {
    name: 'Cerro al Lambro',
    code: 'C536',
    province: 'MI'
  },
  {
    name: 'Cerro Maggiore',
    code: 'C537',
    province: 'MI'
  },
  {
    name: 'Cerro Veronese',
    code: 'C538',
    province: 'VR'
  },
  {
    name: 'Cersosimo',
    code: 'C539',
    province: 'PZ'
  },
  {
    name: 'Certaldo',
    code: 'C540',
    province: 'FI'
  },
  {
    name: 'Certosa di Pavia',
    code: 'C541',
    province: 'PV'
  },
  {
    name: 'Cerva',
    code: 'C542',
    province: 'CZ'
  },
  {
    name: 'Cervara di Roma',
    code: 'C543',
    province: 'RM'
  },
  {
    name: 'Cervarese Santa Croce',
    code: 'C544',
    province: 'PD'
  },
  {
    name: 'Cervaro',
    code: 'C545',
    province: 'FR'
  },
  {
    name: 'Cervasca',
    code: 'C547',
    province: 'CN'
  },
  {
    name: 'Cervatto',
    code: 'C548',
    province: 'VC'
  },
  {
    name: 'Cerveno',
    code: 'C549',
    province: 'BS'
  },
  {
    name: 'Cervere',
    code: 'C550',
    province: 'CN'
  },
  {
    name: 'Cervesina',
    code: 'C551',
    province: 'PV'
  },
  {
    name: 'Cerveteri',
    code: 'C552',
    province: 'RM'
  },
  {
    name: 'Cervia',
    code: 'C553',
    province: 'RA'
  },
  {
    name: 'Cervicati',
    code: 'C554',
    province: 'CS'
  },
  {
    name: "Cervignano d'Adda",
    code: 'C555',
    province: 'LO'
  },
  {
    name: 'Cervignano del Friuli',
    code: 'C556',
    province: 'UD'
  },
  {
    name: 'Cervinara',
    code: 'C557',
    province: 'AV'
  },
  {
    name: 'Cervino',
    code: 'C558',
    province: 'CE'
  },
  {
    name: 'Cervo',
    code: 'C559',
    province: 'IM'
  },
  {
    name: 'Cerzeto',
    code: 'C560',
    province: 'CS'
  },
  {
    name: 'Cesa',
    code: 'C561',
    province: 'CE'
  },
  {
    name: 'Cesana Brianza',
    code: 'C563',
    province: 'LC'
  },
  {
    name: 'Cesana Torinese',
    code: 'C564',
    province: 'TO'
  },
  {
    name: 'Cesano Boscone',
    code: 'C565',
    province: 'MI'
  },
  {
    name: 'Cesano Maderno',
    code: 'C566',
    province: 'MB'
  },
  {
    name: 'Cesara',
    code: 'C567',
    province: 'VB'
  },
  {
    name: 'Cesarò',
    code: 'C568',
    province: 'ME'
  },
  {
    name: 'Cesate',
    code: 'C569',
    province: 'MI'
  },
  {
    name: 'Cesena',
    code: 'C573',
    province: 'FC'
  },
  {
    name: 'Cesenatico',
    code: 'C574',
    province: 'FC'
  },
  {
    name: 'Cesinali',
    code: 'C576',
    province: 'AV'
  },
  {
    name: 'Cesiomaggiore',
    code: 'C577',
    province: 'BL'
  },
  {
    name: 'Cesio',
    code: 'C578',
    province: 'IM'
  },
  {
    name: 'Cessalto',
    code: 'C580',
    province: 'TV'
  },
  {
    name: 'Cessaniti',
    code: 'C581',
    province: 'VV'
  },
  {
    name: 'Cessapalombo',
    code: 'C582',
    province: 'MC'
  },
  {
    name: 'Cessole',
    code: 'C583',
    province: 'AT'
  },
  {
    name: 'Cetara',
    code: 'C584',
    province: 'SA'
  },
  {
    name: 'Ceto',
    code: 'C585',
    province: 'BS'
  },
  {
    name: 'Cetona',
    code: 'C587',
    province: 'SI'
  },
  {
    name: 'Cetraro',
    code: 'C588',
    province: 'CS'
  },
  {
    name: 'Ceva',
    code: 'C589',
    province: 'CN'
  },
  {
    name: 'Cevo',
    code: 'C591',
    province: 'BS'
  },
  {
    name: 'Challand-Saint-Anselme',
    code: 'C593',
    province: 'AO'
  },
  {
    name: 'Challand-Saint-Victor',
    code: 'C594',
    province: 'AO'
  },
  {
    name: 'Chambave',
    code: 'C595',
    province: 'AO'
  },
  {
    name: 'Champdepraz',
    code: 'C596',
    province: 'AO'
  },
  {
    name: 'Charvensod',
    code: 'C598',
    province: 'AO'
  },
  {
    name: 'Cherasco',
    code: 'C599',
    province: 'CN'
  },
  {
    name: 'Cheremule',
    code: 'C600',
    province: 'SS'
  },
  {
    name: 'Chialamberto',
    code: 'C604',
    province: 'TO'
  },
  {
    name: 'Chiampo',
    code: 'C605',
    province: 'VI'
  },
  {
    name: 'Chianche',
    code: 'C606',
    province: 'AV'
  },
  {
    name: 'Chianciano Terme',
    code: 'C608',
    province: 'SI'
  },
  {
    name: 'Chianni',
    code: 'C609',
    province: 'PI'
  },
  {
    name: 'Chianocco',
    code: 'C610',
    province: 'TO'
  },
  {
    name: 'Chiaramonte Gulfi',
    code: 'C612',
    province: 'RG'
  },
  {
    name: 'Chiaramonti',
    code: 'C613',
    province: 'SS'
  },
  {
    name: 'Chiarano',
    code: 'C614',
    province: 'TV'
  },
  {
    name: 'Chiaravalle',
    code: 'C615',
    province: 'AN'
  },
  {
    name: 'Chiaravalle Centrale',
    code: 'C616',
    province: 'CZ'
  },
  {
    name: 'Chiari',
    code: 'C618',
    province: 'BS'
  },
  {
    name: 'Chiaromonte',
    code: 'C619',
    province: 'PZ'
  },
  {
    name: 'Chiauci',
    code: 'C620',
    province: 'IS'
  },
  {
    name: 'Chiavari',
    code: 'C621',
    province: 'GE'
  },
  {
    name: 'Chiavenna',
    code: 'C623',
    province: 'SO'
  },
  {
    name: 'Chiaverano',
    code: 'C624',
    province: 'TO'
  },
  {
    name: 'Chienes/Kiens',
    italianName: 'Chienes',
    foreignName: 'Kiens',
    code: 'C625',
    province: 'BZ'
  },
  {
    name: 'Chieri',
    code: 'C627',
    province: 'TO'
  },
  {
    name: 'Chiesa in Valmalenco',
    code: 'C628',
    province: 'SO'
  },
  {
    name: 'Chiesanuova',
    code: 'C629',
    province: 'TO'
  },
  {
    name: "Chies d'Alpago",
    code: 'C630',
    province: 'BL'
  },
  {
    name: 'Chiesina Uzzanese',
    code: 'C631',
    province: 'PT'
  },
  {
    name: 'Chieti',
    code: 'C632',
    province: 'CH'
  },
  {
    name: 'Chieuti',
    code: 'C633',
    province: 'FG'
  },
  {
    name: 'Chieve',
    code: 'C634',
    province: 'CR'
  },
  {
    name: "Chignolo d'Isola",
    code: 'C635',
    province: 'BG'
  },
  {
    name: 'Chignolo Po',
    code: 'C637',
    province: 'PV'
  },
  {
    name: 'Chioggia',
    code: 'C638',
    province: 'VE'
  },
  {
    name: 'Chiomonte',
    code: 'C639',
    province: 'TO'
  },
  {
    name: 'Chions',
    code: 'C640',
    province: 'PN'
  },
  {
    name: 'Chiopris-Viscone',
    code: 'C641',
    province: 'UD'
  },
  {
    name: 'Chitignano',
    code: 'C648',
    province: 'AR'
  },
  {
    name: 'Chiuduno',
    code: 'C649',
    province: 'BG'
  },
  {
    name: 'Chiuppano',
    code: 'C650',
    province: 'VI'
  },
  {
    name: 'Chiuro',
    code: 'C651',
    province: 'SO'
  },
  {
    name: 'Chiusa/Klausen',
    italianName: 'Chiusa',
    foreignName: 'Klausen',
    code: 'C652',
    province: 'BZ'
  },
  {
    name: 'Chiusa di Pesio',
    code: 'C653',
    province: 'CN'
  },
  {
    name: 'Chiusa Sclafani',
    code: 'C654',
    province: 'PA'
  },
  {
    name: 'Chiusa di San Michele',
    code: 'C655',
    province: 'TO'
  },
  {
    name: 'Chiusaforte',
    code: 'C656',
    province: 'UD'
  },
  {
    name: 'Chiusanico',
    code: 'C657',
    province: 'IM'
  },
  {
    name: "Chiusano d'Asti",
    code: 'C658',
    province: 'AT'
  },
  {
    name: 'Chiusano di San Domenico',
    code: 'C659',
    province: 'AV'
  },
  {
    name: 'Chiusavecchia',
    code: 'C660',
    province: 'IM'
  },
  {
    name: 'Chiusdino',
    code: 'C661',
    province: 'SI'
  },
  {
    name: 'Chiusi',
    code: 'C662',
    province: 'SI'
  },
  {
    name: 'Chiusi della Verna',
    code: 'C663',
    province: 'AR'
  },
  {
    name: 'Chivasso',
    code: 'C665',
    province: 'TO'
  },
  {
    name: 'Cianciana',
    code: 'C668',
    province: 'AG'
  },
  {
    name: 'Canossa',
    code: 'C669',
    province: 'RE'
  },
  {
    name: 'Crocetta del Montello',
    code: 'C670',
    province: 'TV'
  },
  {
    name: 'Cibiana di Cadore',
    code: 'C672',
    province: 'BL'
  },
  {
    name: 'Cicagna',
    code: 'C673',
    province: 'GE'
  },
  {
    name: 'Cicala',
    code: 'C674',
    province: 'CZ'
  },
  {
    name: 'Cicciano',
    code: 'C675',
    province: 'NA'
  },
  {
    name: 'Cicerale',
    code: 'C676',
    province: 'SA'
  },
  {
    name: 'Ciciliano',
    code: 'C677',
    province: 'RM'
  },
  {
    name: 'Cicognolo',
    code: 'C678',
    province: 'CR'
  },
  {
    name: 'Ciconio',
    code: 'C679',
    province: 'TO'
  },
  {
    name: 'Cigliano',
    code: 'C680',
    province: 'VC'
  },
  {
    name: 'Cigliè',
    code: 'C681',
    province: 'CN'
  },
  {
    name: 'Cigognola',
    code: 'C684',
    province: 'PV'
  },
  {
    name: 'Cigole',
    code: 'C685',
    province: 'BS'
  },
  {
    name: 'Cilavegna',
    code: 'C686',
    province: 'PV'
  },
  {
    name: 'Cimadolmo',
    code: 'C689',
    province: 'TV'
  },
  {
    name: 'Cimbergo',
    code: 'C691',
    province: 'BS'
  },
  {
    name: 'Ciminà',
    code: 'C695',
    province: 'RC'
  },
  {
    name: 'Ciminna',
    code: 'C696',
    province: 'PA'
  },
  {
    name: 'Cimitile',
    code: 'C697',
    province: 'NA'
  },
  {
    name: 'Tavernole sul Mella',
    code: 'C698',
    province: 'BS'
  },
  {
    name: 'Cimolais',
    code: 'C699',
    province: 'PN'
  },
  {
    name: 'Cimone',
    code: 'C700',
    province: 'TN'
  },
  {
    name: 'Cinaglio',
    code: 'C701',
    province: 'AT'
  },
  {
    name: 'Cineto Romano',
    code: 'C702',
    province: 'RM'
  },
  {
    name: "Cingia de' Botti",
    code: 'C703',
    province: 'CR'
  },
  {
    name: 'Cingoli',
    code: 'C704',
    province: 'MC'
  },
  {
    name: 'Cinigiano',
    code: 'C705',
    province: 'GR'
  },
  {
    name: 'Cinisello Balsamo',
    code: 'C707',
    province: 'MI'
  },
  {
    name: 'Cinisi',
    code: 'C708',
    province: 'PA'
  },
  {
    name: 'Cino',
    code: 'C709',
    province: 'SO'
  },
  {
    name: 'Cinquefrondi',
    code: 'C710',
    province: 'RC'
  },
  {
    name: 'Cintano',
    code: 'C711',
    province: 'TO'
  },
  {
    name: 'Cinte Tesino',
    code: 'C712',
    province: 'TN'
  },
  {
    name: 'Cinto Euganeo',
    code: 'C713',
    province: 'PD'
  },
  {
    name: 'Cinto Caomaggiore',
    code: 'C714',
    province: 'VE'
  },
  {
    name: 'Cinzano',
    code: 'C715',
    province: 'TO'
  },
  {
    name: 'Ciorlano',
    code: 'C716',
    province: 'CE'
  },
  {
    name: 'Santa Maria del Cedro',
    code: 'C717',
    province: 'CS'
  },
  {
    name: 'Cipressa',
    code: 'C718',
    province: 'IM'
  },
  {
    name: 'Circello',
    code: 'C719',
    province: 'BN'
  },
  {
    name: 'Ciriè',
    code: 'C722',
    province: 'TO'
  },
  {
    name: 'Cirigliano',
    code: 'C723',
    province: 'MT'
  },
  {
    name: 'Cirimido',
    code: 'C724',
    province: 'CO'
  },
  {
    name: 'Cirò',
    code: 'C725',
    province: 'KR'
  },
  {
    name: 'Cirò Marina',
    code: 'C726',
    province: 'KR'
  },
  {
    name: 'Cis',
    code: 'C727',
    province: 'TN'
  },
  {
    name: 'Cisano Bergamasco',
    code: 'C728',
    province: 'BG'
  },
  {
    name: 'Cisano sul Neva',
    code: 'C729',
    province: 'SV'
  },
  {
    name: 'Ciserano',
    code: 'C730',
    province: 'BG'
  },
  {
    name: 'Cislago',
    code: 'C732',
    province: 'VA'
  },
  {
    name: 'Cisliano',
    code: 'C733',
    province: 'MI'
  },
  {
    name: 'Cison di Valmarino',
    code: 'C735',
    province: 'TV'
  },
  {
    name: 'Cissone',
    code: 'C738',
    province: 'CN'
  },
  {
    name: "Cisterna d'Asti",
    code: 'C739',
    province: 'AT'
  },
  {
    name: 'Cisterna di Latina',
    code: 'C740',
    province: 'LT'
  },
  {
    name: 'Cisternino',
    code: 'C741',
    province: 'BR'
  },
  {
    name: 'Citerna',
    code: 'C742',
    province: 'PG'
  },
  {
    name: 'Cittadella',
    code: 'C743',
    province: 'PD'
  },
  {
    name: 'Città della Pieve',
    code: 'C744',
    province: 'PG'
  },
  {
    name: 'Città di Castello',
    code: 'C745',
    province: 'PG'
  },
  {
    name: 'Cittaducale',
    code: 'C746',
    province: 'RI'
  },
  {
    name: 'Cittanova',
    code: 'C747',
    province: 'RC'
  },
  {
    name: 'Cittareale',
    code: 'C749',
    province: 'RI'
  },
  {
    name: "Città Sant'Angelo",
    code: 'C750',
    province: 'PE'
  },
  {
    name: 'Cittiglio',
    code: 'C751',
    province: 'VA'
  },
  {
    name: 'Civate',
    code: 'C752',
    province: 'LC'
  },
  {
    name: 'Civezza',
    code: 'C755',
    province: 'IM'
  },
  {
    name: 'Civezzano',
    code: 'C756',
    province: 'TN'
  },
  {
    name: 'Civiasco',
    code: 'C757',
    province: 'VC'
  },
  {
    name: 'Cividale del Friuli',
    code: 'C758',
    province: 'UD'
  },
  {
    name: 'Cividate al Piano',
    code: 'C759',
    province: 'BG'
  },
  {
    name: 'Cividate Camuno',
    code: 'C760',
    province: 'BS'
  },
  {
    name: 'Civita',
    code: 'C763',
    province: 'CS'
  },
  {
    name: 'Civitacampomarano',
    code: 'C764',
    province: 'CB'
  },
  {
    name: 'Civita Castellana',
    code: 'C765',
    province: 'VT'
  },
  {
    name: "Civita d'Antino",
    code: 'C766',
    province: 'AQ'
  },
  {
    name: 'Lanuvio',
    code: 'C767',
    province: 'RM'
  },
  {
    name: 'Civitaluparella',
    code: 'C768',
    province: 'CH'
  },
  {
    name: 'Civitanova del Sannio',
    code: 'C769',
    province: 'IS'
  },
  {
    name: 'Civitanova Marche',
    code: 'C770',
    province: 'MC'
  },
  {
    name: 'Civitaquana',
    code: 'C771',
    province: 'PE'
  },
  {
    name: 'Duronia',
    code: 'C772',
    province: 'CB'
  },
  {
    name: 'Civitavecchia',
    code: 'C773',
    province: 'RM'
  },
  {
    name: 'Civitella in Val di Chiana',
    code: 'C774',
    province: 'AR'
  },
  {
    name: 'Civitella Messer Raimondo',
    code: 'C776',
    province: 'CH'
  },
  {
    name: 'Civitella di Romagna',
    code: 'C777',
    province: 'FC'
  },
  {
    name: 'Civitella Alfedena',
    code: 'C778',
    province: 'AQ'
  },
  {
    name: 'Civitella Casanova',
    code: 'C779',
    province: 'PE'
  },
  {
    name: "Civitella d'Agliano",
    code: 'C780',
    province: 'VT'
  },
  {
    name: 'Civitella del Tronto',
    code: 'C781',
    province: 'TE'
  },
  {
    name: 'Civitella Paganico',
    code: 'C782',
    province: 'GR'
  },
  {
    name: 'Civitella Roveto',
    code: 'C783',
    province: 'AQ'
  },
  {
    name: 'Civitella San Paolo',
    code: 'C784',
    province: 'RM'
  },
  {
    name: 'Civo',
    code: 'C785',
    province: 'SO'
  },
  {
    name: 'Claino con Osteno',
    code: 'C787',
    province: 'CO'
  },
  {
    name: 'Ubiale Clanezzo',
    code: 'C789',
    province: 'BG'
  },
  {
    name: 'Claut',
    code: 'C790',
    province: 'PN'
  },
  {
    name: 'Clauzetto',
    code: 'C791',
    province: 'PN'
  },
  {
    name: 'Clavesana',
    code: 'C792',
    province: 'CN'
  },
  {
    name: 'Claviere',
    code: 'C793',
    province: 'TO'
  },
  {
    name: 'Cles',
    code: 'C794',
    province: 'TN'
  },
  {
    name: 'Cleto',
    code: 'C795',
    province: 'CS'
  },
  {
    name: 'Clivio',
    code: 'C796',
    province: 'VA'
  },
  {
    name: 'Clusone',
    code: 'C800',
    province: 'BG'
  },
  {
    name: 'Coassolo Torinese',
    code: 'C801',
    province: 'TO'
  },
  {
    name: 'Coazze',
    code: 'C803',
    province: 'TO'
  },
  {
    name: 'Coazzolo',
    code: 'C804',
    province: 'AT'
  },
  {
    name: 'Coccaglio',
    code: 'C806',
    province: 'BS'
  },
  {
    name: 'Cocconato',
    code: 'C807',
    province: 'AT'
  },
  {
    name: 'Cocquio-Trevisago',
    code: 'C810',
    province: 'VA'
  },
  {
    name: 'Cocullo',
    code: 'C811',
    province: 'AQ'
  },
  {
    name: 'Codevigo',
    code: 'C812',
    province: 'PD'
  },
  {
    name: 'Codevilla',
    code: 'C813',
    province: 'PV'
  },
  {
    name: 'Codigoro',
    code: 'C814',
    province: 'FE'
  },
  {
    name: 'Codognè',
    code: 'C815',
    province: 'TV'
  },
  {
    name: 'Codogno',
    code: 'C816',
    province: 'LO'
  },
  {
    name: 'Codroipo',
    code: 'C817',
    province: 'UD'
  },
  {
    name: 'Codrongianos',
    code: 'C818',
    province: 'SS'
  },
  {
    name: 'Coggiola',
    code: 'C819',
    province: 'BI'
  },
  {
    name: 'Cogliate',
    code: 'C820',
    province: 'MB'
  },
  {
    name: 'Cogne',
    code: 'C821',
    province: 'AO'
  },
  {
    name: 'Cogoleto',
    code: 'C823',
    province: 'GE'
  },
  {
    name: 'Cogollo del Cengio',
    code: 'C824',
    province: 'VI'
  },
  {
    name: 'Cogorno',
    code: 'C826',
    province: 'GE'
  },
  {
    name: 'Colazza',
    code: 'C829',
    province: 'NO'
  },
  {
    name: 'Colere',
    code: 'C835',
    province: 'BG'
  },
  {
    name: 'Colfelice',
    code: 'C836',
    province: 'FR'
  },
  {
    name: 'Coli',
    code: 'C838',
    province: 'PC'
  },
  {
    name: 'Colico',
    code: 'C839',
    province: 'LC'
  },
  {
    name: 'Collalto Sabino',
    code: 'C841',
    province: 'RI'
  },
  {
    name: 'Collarmele',
    code: 'C844',
    province: 'AQ'
  },
  {
    name: 'Collazzone',
    code: 'C845',
    province: 'PG'
  },
  {
    name: 'Colle Sannita',
    code: 'C846',
    province: 'BN'
  },
  {
    name: "Colle di Val d'Elsa",
    code: 'C847',
    province: 'SI'
  },
  {
    name: 'Colle Umberto',
    code: 'C848',
    province: 'TV'
  },
  {
    name: 'Collebeato',
    code: 'C850',
    province: 'BS'
  },
  {
    name: 'Colle Brianza',
    code: 'C851',
    province: 'LC'
  },
  {
    name: 'Collecchio',
    code: 'C852',
    province: 'PR'
  },
  {
    name: 'Collecorvino',
    code: 'C853',
    province: 'PE'
  },
  {
    name: "Colle d'Anchise",
    code: 'C854',
    province: 'CB'
  },
  {
    name: 'Colledimacine',
    code: 'C855',
    province: 'CH'
  },
  {
    name: 'Colledimezzo',
    code: 'C856',
    province: 'CH'
  },
  {
    name: 'Colle di Tora',
    code: 'C857',
    province: 'RI'
  },
  {
    name: 'Colleferro',
    code: 'C858',
    province: 'RM'
  },
  {
    name: 'Collegiove',
    code: 'C859',
    province: 'RI'
  },
  {
    name: 'Collegno',
    code: 'C860',
    province: 'TO'
  },
  {
    name: 'Collelongo',
    code: 'C862',
    province: 'AQ'
  },
  {
    name: 'Collepardo',
    code: 'C864',
    province: 'FR'
  },
  {
    name: 'Collepasso',
    code: 'C865',
    province: 'LE'
  },
  {
    name: 'Collepietro',
    code: 'C866',
    province: 'AQ'
  },
  {
    name: 'Colleretto Castelnuovo',
    code: 'C867',
    province: 'TO'
  },
  {
    name: 'Colleretto Giacosa',
    code: 'C868',
    province: 'TO'
  },
  {
    name: 'Collesalvetti',
    code: 'C869',
    province: 'LI'
  },
  {
    name: 'Colle San Magno',
    code: 'C870',
    province: 'FR'
  },
  {
    name: 'Collesano',
    code: 'C871',
    province: 'PA'
  },
  {
    name: 'Colle Santa Lucia',
    code: 'C872',
    province: 'BL'
  },
  {
    name: 'Colletorto',
    code: 'C875',
    province: 'CB'
  },
  {
    name: 'Collevecchio',
    code: 'C876',
    province: 'RI'
  },
  {
    name: 'Colli del Tronto',
    code: 'C877',
    province: 'AP'
  },
  {
    name: 'Colli a Volturno',
    code: 'C878',
    province: 'IS'
  },
  {
    name: 'Colliano',
    code: 'C879',
    province: 'SA'
  },
  {
    name: 'Colli sul Velino',
    code: 'C880',
    province: 'RI'
  },
  {
    name: 'Collinas',
    code: 'C882',
    province: 'SU'
  },
  {
    name: 'Collio',
    code: 'C883',
    province: 'BS'
  },
  {
    name: 'Collobiano',
    code: 'C884',
    province: 'VC'
  },
  {
    name: 'Colloredo di Monte Albano',
    code: 'C885',
    province: 'UD'
  },
  {
    name: 'Colmurano',
    code: 'C886',
    province: 'MC'
  },
  {
    name: 'Colobraro',
    code: 'C888',
    province: 'MT'
  },
  {
    name: 'Cologna Veneta',
    code: 'C890',
    province: 'VR'
  },
  {
    name: 'Cologne',
    code: 'C893',
    province: 'BS'
  },
  {
    name: 'Cologno al Serio',
    code: 'C894',
    province: 'BG'
  },
  {
    name: 'Cologno Monzese',
    code: 'C895',
    province: 'MI'
  },
  {
    name: 'Colognola ai Colli',
    code: 'C897',
    province: 'VR'
  },
  {
    name: 'Colonna',
    code: 'C900',
    province: 'RM'
  },
  {
    name: 'Colonnella',
    code: 'C901',
    province: 'TE'
  },
  {
    name: 'Colonno',
    code: 'C902',
    province: 'CO'
  },
  {
    name: 'Colorina',
    code: 'C903',
    province: 'SO'
  },
  {
    name: 'Colorno',
    code: 'C904',
    province: 'PR'
  },
  {
    name: 'Colosimi',
    code: 'C905',
    province: 'CS'
  },
  {
    name: 'Colturano',
    code: 'C908',
    province: 'MI'
  },
  {
    name: 'Colzate',
    code: 'C910',
    province: 'BG'
  },
  {
    name: 'Comabbio',
    code: 'C911',
    province: 'VA'
  },
  {
    name: 'Comacchio',
    code: 'C912',
    province: 'FE'
  },
  {
    name: 'Comano',
    code: 'C914',
    province: 'MS'
  },
  {
    name: 'Comazzo',
    code: 'C917',
    province: 'LO'
  },
  {
    name: 'Comeglians',
    code: 'C918',
    province: 'UD'
  },
  {
    name: 'Santo Stefano di Cadore',
    code: 'C919',
    province: 'BL'
  },
  {
    name: 'Comelico Superiore',
    code: 'C920',
    province: 'BL'
  },
  {
    name: 'Comerio',
    code: 'C922',
    province: 'VA'
  },
  {
    name: 'Comezzano-Cizzago',
    code: 'C925',
    province: 'BS'
  },
  {
    name: 'Comignago',
    code: 'C926',
    province: 'NO'
  },
  {
    name: 'Comiso',
    code: 'C927',
    province: 'RG'
  },
  {
    name: 'Comitini',
    code: 'C928',
    province: 'AG'
  },
  {
    name: 'Comiziano',
    code: 'C929',
    province: 'NA'
  },
  {
    name: 'Commessaggio',
    code: 'C930',
    province: 'MN'
  },
  {
    name: 'Commezzadura',
    code: 'C931',
    province: 'TN'
  },
  {
    name: 'Como',
    code: 'C933',
    province: 'CO'
  },
  {
    name: 'Compiano',
    code: 'C934',
    province: 'PR'
  },
  {
    name: 'Comunanza',
    code: 'C935',
    province: 'AP'
  },
  {
    name: 'Valsolda',
    code: 'C936',
    province: 'CO'
  },
  {
    name: 'Comun Nuovo',
    code: 'C937',
    province: 'BG'
  },
  {
    name: 'Cona',
    code: 'C938',
    province: 'VE'
  },
  {
    name: 'Conca della Campania',
    code: 'C939',
    province: 'CE'
  },
  {
    name: 'Conca dei Marini',
    code: 'C940',
    province: 'SA'
  },
  {
    name: 'Conca Casale',
    code: 'C941',
    province: 'IS'
  },
  {
    name: 'Concamarise',
    code: 'C943',
    province: 'VR'
  },
  {
    name: 'Concerviano',
    code: 'C946',
    province: 'RI'
  },
  {
    name: 'Concesio',
    code: 'C948',
    province: 'BS'
  },
  {
    name: 'Concordia Sagittaria',
    code: 'C950',
    province: 'VE'
  },
  {
    name: 'Concordia sulla Secchia',
    code: 'C951',
    province: 'MO'
  },
  {
    name: 'Concorezzo',
    code: 'C952',
    province: 'MB'
  },
  {
    name: 'Condofuri',
    code: 'C954',
    province: 'RC'
  },
  {
    name: 'Condove',
    code: 'C955',
    province: 'TO'
  },
  {
    name: 'Condrò',
    code: 'C956',
    province: 'ME'
  },
  {
    name: 'Conegliano',
    code: 'C957',
    province: 'TV'
  },
  {
    name: 'Confienza',
    code: 'C958',
    province: 'PV'
  },
  {
    name: 'Configni',
    code: 'C959',
    province: 'RI'
  },
  {
    name: 'Conflenti',
    code: 'C960',
    province: 'CZ'
  },
  {
    name: 'Coniolo',
    code: 'C962',
    province: 'AL'
  },
  {
    name: 'Conselice',
    code: 'C963',
    province: 'RA'
  },
  {
    name: 'Conselve',
    code: 'C964',
    province: 'PD'
  },
  {
    name: 'Contessa Entellina',
    code: 'C968',
    province: 'PA'
  },
  {
    name: 'Contigliano',
    code: 'C969',
    province: 'RI'
  },
  {
    name: 'Contrada',
    code: 'C971',
    province: 'AV'
  },
  {
    name: 'Controguerra',
    code: 'C972',
    province: 'TE'
  },
  {
    name: 'Controne',
    code: 'C973',
    province: 'SA'
  },
  {
    name: 'Contursi Terme',
    code: 'C974',
    province: 'SA'
  },
  {
    name: 'Conversano',
    code: 'C975',
    province: 'BA'
  },
  {
    name: 'Conza della Campania',
    code: 'C976',
    province: 'AV'
  },
  {
    name: 'Conzano',
    code: 'C977',
    province: 'AL'
  },
  {
    name: 'Copertino',
    code: 'C978',
    province: 'LE'
  },
  {
    name: 'Copiano',
    code: 'C979',
    province: 'PV'
  },
  {
    name: 'Copparo',
    code: 'C980',
    province: 'FE'
  },
  {
    name: 'Corana',
    code: 'C982',
    province: 'PV'
  },
  {
    name: 'Corato',
    code: 'C983',
    province: 'BA'
  },
  {
    name: 'Corbara',
    code: 'C984',
    province: 'SA'
  },
  {
    name: 'Corbetta',
    code: 'C986',
    province: 'MI'
  },
  {
    name: 'Corbola',
    code: 'C987',
    province: 'RO'
  },
  {
    name: 'Corchiano',
    code: 'C988',
    province: 'VT'
  },
  {
    name: 'Corciano',
    code: 'C990',
    province: 'PG'
  },
  {
    name: 'Cordenons',
    code: 'C991',
    province: 'PN'
  },
  {
    name: 'Cordignano',
    code: 'C992',
    province: 'TV'
  },
  {
    name: 'Cordovado',
    code: 'C993',
    province: 'PN'
  },
  {
    name: 'Coreglia Ligure',
    code: 'C995',
    province: 'GE'
  },
  {
    name: 'Coreglia Antelminelli',
    code: 'C996',
    province: 'LU'
  },
  {
    name: 'Coreno Ausonio',
    code: 'C998',
    province: 'FR'
  },
  {
    name: 'Corfinio',
    code: 'C999',
    province: 'AQ'
  },
  {
    name: 'Cori',
    code: 'D003',
    province: 'LT'
  },
  {
    name: 'Coriano',
    code: 'D004',
    province: 'RN'
  },
  {
    name: "Corigliano d'Otranto",
    code: 'D006',
    province: 'LE'
  },
  {
    name: 'Corinaldo',
    code: 'D007',
    province: 'AN'
  },
  {
    name: 'Corio',
    code: 'D008',
    province: 'TO'
  },
  {
    name: 'Corleone',
    code: 'D009',
    province: 'PA'
  },
  {
    name: 'Corleto Perticara',
    code: 'D010',
    province: 'PZ'
  },
  {
    name: 'Corleto Monforte',
    code: 'D011',
    province: 'SA'
  },
  {
    name: 'Courmayeur',
    code: 'D012',
    province: 'AO'
  },
  {
    name: 'Cormano',
    code: 'D013',
    province: 'MI'
  },
  {
    name: 'Cormons',
    code: 'D014',
    province: 'GO'
  },
  {
    name: 'Corna Imagna',
    code: 'D015',
    province: 'BG'
  },
  {
    name: 'Cornalba',
    code: 'D016',
    province: 'BG'
  },
  {
    name: 'Cornaredo',
    code: 'D018',
    province: 'MI'
  },
  {
    name: "Cornate d'Adda",
    code: 'D019',
    province: 'MB'
  },
  {
    name: 'Cornedo Vicentino',
    code: 'D020',
    province: 'VI'
  },
  {
    name: 'Cornegliano Laudense',
    code: 'D021',
    province: 'LO'
  },
  {
    name: "Corneliano d'Alba",
    code: 'D022',
    province: 'CN'
  },
  {
    name: 'Tarquinia',
    code: 'D024',
    province: 'VT'
  },
  {
    name: 'Corniglio',
    code: 'D026',
    province: 'PR'
  },
  {
    name: 'Corno di Rosazzo',
    code: 'D027',
    province: 'UD'
  },
  {
    name: 'Corno Giovine',
    code: 'D028',
    province: 'LO'
  },
  {
    name: 'Cornovecchio',
    code: 'D029',
    province: 'LO'
  },
  {
    name: 'Cornuda',
    code: 'D030',
    province: 'TV'
  },
  {
    name: 'Morimondo',
    code: 'D033',
    province: 'MI'
  },
  {
    name: 'Correggio',
    code: 'D037',
    province: 'RE'
  },
  {
    name: 'Correzzana',
    code: 'D038',
    province: 'MB'
  },
  {
    name: 'Correzzola',
    code: 'D040',
    province: 'PD'
  },
  {
    name: 'Corrido',
    code: 'D041',
    province: 'CO'
  },
  {
    name: 'Corridonia',
    code: 'D042',
    province: 'MC'
  },
  {
    name: 'Corropoli',
    code: 'D043',
    province: 'TE'
  },
  {
    name: 'Corsano',
    code: 'D044',
    province: 'LE'
  },
  {
    name: 'Corsico',
    code: 'D045',
    province: 'MI'
  },
  {
    name: 'Corsione',
    code: 'D046',
    province: 'AT'
  },
  {
    name: 'Cortaccia sulla strada del vino/Kurtatsch an der Weinstraße',
    italianName: 'Cortaccia sulla strada del vino',
    foreignName: 'Kurtatsch an der Weinstraße',
    code: 'D048',
    province: 'BZ'
  },
  {
    name: 'Cortale',
    code: 'D049',
    province: 'CZ'
  },
  {
    name: 'Cortandone',
    code: 'D050',
    province: 'AT'
  },
  {
    name: 'Cortanze',
    code: 'D051',
    province: 'AT'
  },
  {
    name: 'Cortazzone',
    code: 'D052',
    province: 'AT'
  },
  {
    name: 'Corte Brugnatella',
    code: 'D054',
    province: 'PC'
  },
  {
    name: "Corte de' Cortesi con Cignone",
    code: 'D056',
    province: 'CR'
  },
  {
    name: "Corte de' Frati",
    code: 'D057',
    province: 'CR'
  },
  {
    name: 'Corte Franca',
    code: 'D058',
    province: 'BS'
  },
  {
    name: 'Cortemaggiore',
    code: 'D061',
    province: 'PC'
  },
  {
    name: 'Cortemilia',
    code: 'D062',
    province: 'CN'
  },
  {
    name: 'Corteno Golgi',
    code: 'D064',
    province: 'BS'
  },
  {
    name: 'Cortenova',
    code: 'D065',
    province: 'LC'
  },
  {
    name: 'Cortenuova',
    code: 'D066',
    province: 'BG'
  },
  {
    name: 'Corte Palasio',
    code: 'D068',
    province: 'LO'
  },
  {
    name: 'Cortiglione',
    code: 'D072',
    province: 'AT'
  },
  {
    name: 'Cortina sulla strada del vino/Kurtinig an der Weinstraße',
    italianName: 'Cortina sulla strada del vino',
    foreignName: 'Kurtinig an der Weinstraße',
    code: 'D075',
    province: 'BZ'
  },
  {
    name: 'Cortino',
    code: 'D076',
    province: 'TE'
  },
  {
    name: 'Cortona',
    code: 'D077',
    province: 'AR'
  },
  {
    name: 'Corvara',
    code: 'D078',
    province: 'PE'
  },
  {
    name: 'Corvara in Badia/Corvara',
    italianName: 'Corvara in Badia',
    foreignName: 'Corvara',
    code: 'D079',
    province: 'BZ'
  },
  {
    name: 'Corvino San Quirico',
    code: 'D081',
    province: 'PV'
  },
  {
    name: 'Corzano',
    code: 'D082',
    province: 'BS'
  },
  {
    name: 'Coseano',
    code: 'D085',
    province: 'UD'
  },
  {
    name: 'Cosenza',
    code: 'D086',
    province: 'CS'
  },
  {
    name: "Cosio d'Arroscia",
    code: 'D087',
    province: 'IM'
  },
  {
    name: 'Cosio Valtellino',
    code: 'D088',
    province: 'SO'
  },
  {
    name: 'Cosoleto',
    code: 'D089',
    province: 'RC'
  },
  {
    name: 'Cossano Canavese',
    code: 'D092',
    province: 'TO'
  },
  {
    name: 'Cossano Belbo',
    code: 'D093',
    province: 'CN'
  },
  {
    name: 'Cossato',
    code: 'D094',
    province: 'BI'
  },
  {
    name: 'Cosseria',
    code: 'D095',
    province: 'SV'
  },
  {
    name: 'Cossignano',
    code: 'D096',
    province: 'AP'
  },
  {
    name: 'Cossogno',
    code: 'D099',
    province: 'VB'
  },
  {
    name: 'Cossoine',
    code: 'D100',
    province: 'SS'
  },
  {
    name: 'Cossombrato',
    code: 'D101',
    province: 'AT'
  },
  {
    name: 'Costa Vescovato',
    code: 'D102',
    province: 'AL'
  },
  {
    name: 'Costa Valle Imagna',
    code: 'D103',
    province: 'BG'
  },
  {
    name: 'Costa di Rovigo',
    code: 'D105',
    province: 'RO'
  },
  {
    name: 'Costabissara',
    code: 'D107',
    province: 'VI'
  },
  {
    name: 'Costacciaro',
    code: 'D108',
    province: 'PG'
  },
  {
    name: "Costa de' Nobili",
    code: 'D109',
    province: 'PV'
  },
  {
    name: 'Costa di Mezzate',
    code: 'D110',
    province: 'BG'
  },
  {
    name: 'Costa Serina',
    code: 'D111',
    province: 'BG'
  },
  {
    name: 'Costa Masnaga',
    code: 'D112',
    province: 'LC'
  },
  {
    name: 'Costanzana',
    code: 'D113',
    province: 'VC'
  },
  {
    name: 'Costarainera',
    code: 'D114',
    province: 'IM'
  },
  {
    name: 'Costa Volpino',
    code: 'D117',
    province: 'BG'
  },
  {
    name: 'Costermano sul Garda',
    code: 'D118',
    province: 'VR'
  },
  {
    name: "Costigliole d'Asti",
    code: 'D119',
    province: 'AT'
  },
  {
    name: 'Costigliole Saluzzo',
    code: 'D120',
    province: 'CN'
  },
  {
    name: 'Cotignola',
    code: 'D121',
    province: 'RA'
  },
  {
    name: 'Crotone',
    code: 'D122',
    province: 'KR'
  },
  {
    name: 'Cotronei',
    code: 'D123',
    province: 'KR'
  },
  {
    name: 'Cottanello',
    code: 'D124',
    province: 'RI'
  },
  {
    name: 'Covo',
    code: 'D126',
    province: 'BG'
  },
  {
    name: 'Cozzo',
    code: 'D127',
    province: 'PV'
  },
  {
    name: 'Craco',
    code: 'D128',
    province: 'MT'
  },
  {
    name: 'Crandola Valsassina',
    code: 'D131',
    province: 'LC'
  },
  {
    name: 'Cravagliana',
    code: 'D132',
    province: 'VC'
  },
  {
    name: 'Cravanzana',
    code: 'D133',
    province: 'CN'
  },
  {
    name: 'Craveggia',
    code: 'D134',
    province: 'VB'
  },
  {
    name: 'Creazzo',
    code: 'D136',
    province: 'VI'
  },
  {
    name: 'Crecchio',
    code: 'D137',
    province: 'CH'
  },
  {
    name: 'Credaro',
    code: 'D139',
    province: 'BG'
  },
  {
    name: 'Credera Rubbiano',
    code: 'D141',
    province: 'CR'
  },
  {
    name: 'Crema',
    code: 'D142',
    province: 'CR'
  },
  {
    name: 'Cremella',
    code: 'D143',
    province: 'LC'
  },
  {
    name: 'Cremenaga',
    code: 'D144',
    province: 'VA'
  },
  {
    name: 'Cremeno',
    code: 'D145',
    province: 'LC'
  },
  {
    name: 'Cremia',
    code: 'D147',
    province: 'CO'
  },
  {
    name: 'Cremolino',
    code: 'D149',
    province: 'AL'
  },
  {
    name: 'Cremona',
    code: 'D150',
    province: 'CR'
  },
  {
    name: 'Cremosano',
    code: 'D151',
    province: 'CR'
  },
  {
    name: 'Crescentino',
    code: 'D154',
    province: 'VC'
  },
  {
    name: 'Crespadoro',
    code: 'D156',
    province: 'VI'
  },
  {
    name: 'Crespiatica',
    code: 'D159',
    province: 'LO'
  },
  {
    name: 'Crespino',
    code: 'D161',
    province: 'RO'
  },
  {
    name: 'Cressa',
    code: 'D162',
    province: 'NO'
  },
  {
    name: 'Crevacuore',
    code: 'D165',
    province: 'BI'
  },
  {
    name: 'Crevalcore',
    code: 'D166',
    province: 'BO'
  },
  {
    name: 'Crevoladossola',
    code: 'D168',
    province: 'VB'
  },
  {
    name: 'Crispano',
    code: 'D170',
    province: 'NA'
  },
  {
    name: 'Crispiano',
    code: 'D171',
    province: 'TA'
  },
  {
    name: 'Crissolo',
    code: 'D172',
    province: 'CN'
  },
  {
    name: 'Crocefieschi',
    code: 'D175',
    province: 'GE'
  },
  {
    name: 'Crodo',
    code: 'D177',
    province: 'VB'
  },
  {
    name: 'Crognaleto',
    code: 'D179',
    province: 'TE'
  },
  {
    name: 'Cropalati',
    code: 'D180',
    province: 'CS'
  },
  {
    name: 'Cropani',
    code: 'D181',
    province: 'CZ'
  },
  {
    name: 'Crosia',
    code: 'D184',
    province: 'CS'
  },
  {
    name: 'Crosio della Valle',
    code: 'D185',
    province: 'VA'
  },
  {
    name: "Crotta d'Adda",
    code: 'D186',
    province: 'CR'
  },
  {
    name: 'Crova',
    code: 'D187',
    province: 'VC'
  },
  {
    name: 'Croviana',
    code: 'D188',
    province: 'TN'
  },
  {
    name: 'Crucoli',
    code: 'D189',
    province: 'KR'
  },
  {
    name: 'Cuasso al Monte',
    code: 'D192',
    province: 'VA'
  },
  {
    name: 'Veronella',
    code: 'D193',
    province: 'VR'
  },
  {
    name: 'Cuccaro Vetere',
    code: 'D195',
    province: 'SA'
  },
  {
    name: 'Cucciago',
    code: 'D196',
    province: 'CO'
  },
  {
    name: 'Cuceglio',
    code: 'D197',
    province: 'TO'
  },
  {
    name: 'Cuggiono',
    code: 'D198',
    province: 'MI'
  },
  {
    name: 'Cugliate-Fabiasco',
    code: 'D199',
    province: 'VA'
  },
  {
    name: 'Cuglieri',
    code: 'D200',
    province: 'OR'
  },
  {
    name: 'Cugnoli',
    code: 'D201',
    province: 'PE'
  },
  {
    name: 'Cumiana',
    code: 'D202',
    province: 'TO'
  },
  {
    name: 'Cumignano sul Naviglio',
    code: 'D203',
    province: 'CR'
  },
  {
    name: 'Cunardo',
    code: 'D204',
    province: 'VA'
  },
  {
    name: 'Cuneo',
    code: 'D205',
    province: 'CN'
  },
  {
    name: 'Cunico',
    code: 'D207',
    province: 'AT'
  },
  {
    name: 'Cuorgnè',
    code: 'D208',
    province: 'TO'
  },
  {
    name: 'Cupello',
    code: 'D209',
    province: 'CH'
  },
  {
    name: 'Cupra Marittima',
    code: 'D210',
    province: 'AP'
  },
  {
    name: 'Cupramontana',
    code: 'D211',
    province: 'AN'
  },
  {
    name: 'Curcuris',
    code: 'D214',
    province: 'OR'
  },
  {
    name: 'Cureggio',
    code: 'D216',
    province: 'NO'
  },
  {
    name: 'Curiglia con Monteviasco',
    code: 'D217',
    province: 'VA'
  },
  {
    name: 'Curinga',
    code: 'D218',
    province: 'CZ'
  },
  {
    name: 'Curino',
    code: 'D219',
    province: 'BI'
  },
  {
    name: 'Curno',
    code: 'D221',
    province: 'BG'
  },
  {
    name: 'Curon Venosta/Graun im Vinschgau',
    italianName: 'Curon Venosta',
    foreignName: 'Graun im Vinschgau',
    code: 'D222',
    province: 'BZ'
  },
  {
    name: 'Cursi',
    code: 'D223',
    province: 'LE'
  },
  {
    name: 'Curtarolo',
    code: 'D226',
    province: 'PD'
  },
  {
    name: 'Curtatone',
    code: 'D227',
    province: 'MN'
  },
  {
    name: 'Curti',
    code: 'D228',
    province: 'CE'
  },
  {
    name: 'Cusago',
    code: 'D229',
    province: 'MI'
  },
  {
    name: 'Cusano Mutri',
    code: 'D230',
    province: 'BN'
  },
  {
    name: 'Cusano Milanino',
    code: 'D231',
    province: 'MI'
  },
  {
    name: 'Cusino',
    code: 'D232',
    province: 'CO'
  },
  {
    name: 'Cusio',
    code: 'D233',
    province: 'BG'
  },
  {
    name: 'Custonaci',
    code: 'D234',
    province: 'TP'
  },
  {
    name: 'Cutro',
    code: 'D236',
    province: 'KR'
  },
  {
    name: 'Cutrofiano',
    code: 'D237',
    province: 'LE'
  },
  {
    name: 'Cuveglio',
    code: 'D238',
    province: 'VA'
  },
  {
    name: 'Cuvio',
    code: 'D239',
    province: 'VA'
  },
  {
    name: 'Dairago',
    code: 'D244',
    province: 'MI'
  },
  {
    name: 'Dalmine',
    code: 'D245',
    province: 'BG'
  },
  {
    name: 'Dambel',
    code: 'D246',
    province: 'TN'
  },
  {
    name: 'Danta di Cadore',
    code: 'D247',
    province: 'BL'
  },
  {
    name: 'Darfo Boario Terme',
    code: 'D251',
    province: 'BS'
  },
  {
    name: 'Dasà',
    code: 'D253',
    province: 'VV'
  },
  {
    name: 'Davagna',
    code: 'D255',
    province: 'GE'
  },
  {
    name: 'Daverio',
    code: 'D256',
    province: 'VA'
  },
  {
    name: 'Davoli',
    code: 'D257',
    province: 'CZ'
  },
  {
    name: 'Dazio',
    code: 'D258',
    province: 'SO'
  },
  {
    name: 'Decimomannu',
    code: 'D259',
    province: 'CA'
  },
  {
    name: 'Decimoputzu',
    code: 'D260',
    province: 'SU'
  },
  {
    name: 'Decollatura',
    code: 'D261',
    province: 'CZ'
  },
  {
    name: 'Dego',
    code: 'D264',
    province: 'SV'
  },
  {
    name: 'Deiva Marina',
    code: 'D265',
    province: 'SP'
  },
  {
    name: 'Delebio',
    code: 'D266',
    province: 'SO'
  },
  {
    name: 'Delia',
    code: 'D267',
    province: 'CL'
  },
  {
    name: 'Delianuova',
    code: 'D268',
    province: 'RC'
  },
  {
    name: 'Deliceto',
    code: 'D269',
    province: 'FG'
  },
  {
    name: 'Dello',
    code: 'D270',
    province: 'BS'
  },
  {
    name: 'Demonte',
    code: 'D271',
    province: 'CN'
  },
  {
    name: 'Denice',
    code: 'D272',
    province: 'AL'
  },
  {
    name: 'Denno',
    code: 'D273',
    province: 'TN'
  },
  {
    name: 'Dernice',
    code: 'D277',
    province: 'AL'
  },
  {
    name: 'Derovere',
    code: 'D278',
    province: 'CR'
  },
  {
    name: 'Deruta',
    code: 'D279',
    province: 'PG'
  },
  {
    name: 'Dervio',
    code: 'D280',
    province: 'LC'
  },
  {
    name: 'Desana',
    code: 'D281',
    province: 'VC'
  },
  {
    name: 'Desenzano del Garda',
    code: 'D284',
    province: 'BS'
  },
  {
    name: 'Desio',
    code: 'D286',
    province: 'MB'
  },
  {
    name: 'Desulo',
    code: 'D287',
    province: 'NU'
  },
  {
    name: 'Diamante',
    code: 'D289',
    province: 'CS'
  },
  {
    name: 'Scigliano',
    code: 'D290',
    province: 'CS'
  },
  {
    name: "Diano d'Alba",
    code: 'D291',
    province: 'CN'
  },
  {
    name: 'Teggiano',
    code: 'D292',
    province: 'SA'
  },
  {
    name: 'Diano Arentino',
    code: 'D293',
    province: 'IM'
  },
  {
    name: 'Diano Castello',
    code: 'D296',
    province: 'IM'
  },
  {
    name: 'Diano Marina',
    code: 'D297',
    province: 'IM'
  },
  {
    name: 'Diano San Pietro',
    code: 'D298',
    province: 'IM'
  },
  {
    name: 'Dicomano',
    code: 'D299',
    province: 'FI'
  },
  {
    name: 'Dignano',
    code: 'D300',
    province: 'UD'
  },
  {
    name: 'Dinami',
    code: 'D303',
    province: 'VV'
  },
  {
    name: 'Dipignano',
    code: 'D304',
    province: 'CS'
  },
  {
    name: 'Diso',
    code: 'D305',
    province: 'LE'
  },
  {
    name: 'Divignano',
    code: 'D309',
    province: 'NO'
  },
  {
    name: 'Dizzasco',
    code: 'D310',
    province: 'CO'
  },
  {
    name: 'Dobbiaco/Toblach',
    italianName: 'Dobbiaco',
    foreignName: 'Toblach',
    code: 'D311',
    province: 'BZ'
  },
  {
    name: 'Doberdò del Lago-Doberdob',
    italianName: 'Doberdò del Lago',
    foreignName: 'Doberdob',
    code: 'D312',
    province: 'GO'
  },
  {
    name: 'Dogliani',
    code: 'D314',
    province: 'CN'
  },
  {
    name: 'Dogliola',
    code: 'D315',
    province: 'CH'
  },
  {
    name: 'Dogna',
    code: 'D316',
    province: 'UD'
  },
  {
    name: 'Dolcè',
    code: 'D317',
    province: 'VR'
  },
  {
    name: 'Dolceacqua',
    code: 'D318',
    province: 'IM'
  },
  {
    name: 'Dolcedo',
    code: 'D319',
    province: 'IM'
  },
  {
    name: 'Dolegna del Collio',
    code: 'D321',
    province: 'GO'
  },
  {
    name: 'Dolianova',
    code: 'D323',
    province: 'SU'
  },
  {
    name: 'San Dorligo della Valle-Dolina',
    italianName: 'San Dorligo della Valle',
    foreignName: 'Dolina',
    code: 'D324',
    province: 'TS'
  },
  {
    name: 'Dolo',
    code: 'D325',
    province: 'VE'
  },
  {
    name: 'Dolzago',
    code: 'D327',
    province: 'LC'
  },
  {
    name: 'Domanico',
    code: 'D328',
    province: 'CS'
  },
  {
    name: 'Domaso',
    code: 'D329',
    province: 'CO'
  },
  {
    name: 'Domegge di Cadore',
    code: 'D330',
    province: 'BL'
  },
  {
    name: 'Domicella',
    code: 'D331',
    province: 'AV'
  },
  {
    name: 'Domodossola',
    code: 'D332',
    province: 'VB'
  },
  {
    name: 'Domus de Maria',
    code: 'D333',
    province: 'SU'
  },
  {
    name: 'Domusnovas',
    code: 'D334',
    province: 'SU'
  },
  {
    name: 'Donnas',
    code: 'D338',
    province: 'AO'
  },
  {
    name: 'Donato',
    code: 'D339',
    province: 'BI'
  },
  {
    name: 'Dongo',
    code: 'D341',
    province: 'CO'
  },
  {
    name: 'Donori',
    code: 'D344',
    province: 'SU'
  },
  {
    name: 'Dorgali',
    code: 'D345',
    province: 'NU'
  },
  {
    name: 'Dorio',
    code: 'D346',
    province: 'LC'
  },
  {
    name: 'Dormelletto',
    code: 'D347',
    province: 'NO'
  },
  {
    name: 'Dorno',
    code: 'D348',
    province: 'PV'
  },
  {
    name: 'Dorzano',
    code: 'D350',
    province: 'BI'
  },
  {
    name: 'Dosolo',
    code: 'D351',
    province: 'MN'
  },
  {
    name: 'Dossena',
    code: 'D352',
    province: 'BG'
  },
  {
    name: 'Dosso del Liro',
    code: 'D355',
    province: 'CO'
  },
  {
    name: 'Doues',
    code: 'D356',
    province: 'AO'
  },
  {
    name: 'Dovadola',
    code: 'D357',
    province: 'FC'
  },
  {
    name: 'Dovera',
    code: 'D358',
    province: 'CR'
  },
  {
    name: 'Dozza',
    code: 'D360',
    province: 'BO'
  },
  {
    name: 'Dragoni',
    code: 'D361',
    province: 'CE'
  },
  {
    name: 'Drapia',
    code: 'D364',
    province: 'VV'
  },
  {
    name: 'Drena',
    code: 'D365',
    province: 'TN'
  },
  {
    name: 'Drenchia',
    code: 'D366',
    province: 'UD'
  },
  {
    name: 'Dresano',
    code: 'D367',
    province: 'MI'
  },
  {
    name: 'Dro',
    code: 'D371',
    province: 'TN'
  },
  {
    name: 'Dronero',
    code: 'D372',
    province: 'CN'
  },
  {
    name: 'Druento',
    code: 'D373',
    province: 'TO'
  },
  {
    name: 'Druogno',
    code: 'D374',
    province: 'VB'
  },
  {
    name: 'Dualchi',
    code: 'D376',
    province: 'NU'
  },
  {
    name: 'Dubino',
    code: 'D377',
    province: 'SO'
  },
  {
    name: 'Dueville',
    code: 'D379',
    province: 'VI'
  },
  {
    name: 'Dugenta',
    code: 'D380',
    province: 'BN'
  },
  {
    name: 'Duino Aurisina-Devin Nabrežina',
    italianName: 'Duino Aurisina',
    foreignName: 'Devin Nabrežina',
    code: 'D383',
    province: 'TS'
  },
  {
    name: 'Dumenza',
    code: 'D384',
    province: 'VA'
  },
  {
    name: 'Duno',
    code: 'D385',
    province: 'VA'
  },
  {
    name: 'Durazzano',
    code: 'D386',
    province: 'BN'
  },
  {
    name: 'Dusino San Michele',
    code: 'D388',
    province: 'AT'
  },
  {
    name: 'Eboli',
    code: 'D390',
    province: 'SA'
  },
  {
    name: 'Edolo',
    code: 'D391',
    province: 'BS'
  },
  {
    name: 'Egna/Neumarkt',
    italianName: 'Egna',
    foreignName: 'Neumarkt',
    code: 'D392',
    province: 'BZ'
  },
  {
    name: 'Elice',
    code: 'D394',
    province: 'PE'
  },
  {
    name: 'Elini',
    code: 'D395',
    province: 'NU'
  },
  {
    name: 'Ello',
    code: 'D398',
    province: 'LC'
  },
  {
    name: 'Elmas',
    code: 'D399',
    province: 'CA'
  },
  {
    name: 'Elva',
    code: 'D401',
    province: 'CN'
  },
  {
    name: 'Emarèse',
    code: 'D402',
    province: 'AO'
  },
  {
    name: 'Empoli',
    code: 'D403',
    province: 'FI'
  },
  {
    name: 'Endine Gaiano',
    code: 'D406',
    province: 'BG'
  },
  {
    name: 'Enego',
    code: 'D407',
    province: 'VI'
  },
  {
    name: 'Enemonzo',
    code: 'D408',
    province: 'UD'
  },
  {
    name: 'Entracque',
    code: 'D410',
    province: 'CN'
  },
  {
    name: 'Entratico',
    code: 'D411',
    province: 'BG'
  },
  {
    name: 'Envie',
    code: 'D412',
    province: 'CN'
  },
  {
    name: 'Episcopia',
    code: 'D414',
    province: 'PZ'
  },
  {
    name: 'Eraclea',
    code: 'D415',
    province: 'VE'
  },
  {
    name: 'Erba',
    code: 'D416',
    province: 'CO'
  },
  {
    name: 'Erbè',
    code: 'D419',
    province: 'VR'
  },
  {
    name: 'Erbezzo',
    code: 'D420',
    province: 'VR'
  },
  {
    name: 'Erbusco',
    code: 'D421',
    province: 'BS'
  },
  {
    name: 'Erchie',
    code: 'D422',
    province: 'BR'
  },
  {
    name: 'Erice',
    code: 'D423',
    province: 'TP'
  },
  {
    name: 'Erli',
    code: 'D424',
    province: 'SV'
  },
  {
    name: 'Erto e Casso',
    code: 'D426',
    province: 'PN'
  },
  {
    name: 'Erve',
    code: 'D428',
    province: 'LC'
  },
  {
    name: 'Esanatoglia',
    code: 'D429',
    province: 'MC'
  },
  {
    name: 'Escalaplano',
    code: 'D430',
    province: 'SU'
  },
  {
    name: 'Escolca',
    code: 'D431',
    province: 'SU'
  },
  {
    name: 'Exilles',
    code: 'D433',
    province: 'TO'
  },
  {
    name: 'Esine',
    code: 'D434',
    province: 'BS'
  },
  {
    name: 'Esino Lario',
    code: 'D436',
    province: 'LC'
  },
  {
    name: 'Esperia',
    code: 'D440',
    province: 'FR'
  },
  {
    name: 'Esporlatu',
    code: 'D441',
    province: 'SS'
  },
  {
    name: 'Este',
    code: 'D442',
    province: 'PD'
  },
  {
    name: 'Esterzili',
    code: 'D443',
    province: 'SU'
  },
  {
    name: 'Etroubles',
    code: 'D444',
    province: 'AO'
  },
  {
    name: 'Eupilio',
    code: 'D445',
    province: 'CO'
  },
  {
    name: 'Fabbrica Curone',
    code: 'D447',
    province: 'AL'
  },
  {
    name: 'Fabbrico',
    code: 'D450',
    province: 'RE'
  },
  {
    name: 'Fabriano',
    code: 'D451',
    province: 'AN'
  },
  {
    name: 'Fabrica di Roma',
    code: 'D452',
    province: 'VT'
  },
  {
    name: 'Fabrizia',
    code: 'D453',
    province: 'VV'
  },
  {
    name: 'Fabro',
    code: 'D454',
    province: 'TR'
  },
  {
    name: 'Faedis',
    code: 'D455',
    province: 'UD'
  },
  {
    name: 'Faedo Valtellino',
    code: 'D456',
    province: 'SO'
  },
  {
    name: 'Faenza',
    code: 'D458',
    province: 'RA'
  },
  {
    name: 'Faeto',
    code: 'D459',
    province: 'FG'
  },
  {
    name: 'Fagagna',
    code: 'D461',
    province: 'UD'
  },
  {
    name: 'Faggeto Lario',
    code: 'D462',
    province: 'CO'
  },
  {
    name: 'Faggiano',
    code: 'D463',
    province: 'TA'
  },
  {
    name: 'Fagnano Castello',
    code: 'D464',
    province: 'CS'
  },
  {
    name: 'Fagnano Alto',
    code: 'D465',
    province: 'AQ'
  },
  {
    name: 'Fagnano Olona',
    code: 'D467',
    province: 'VA'
  },
  {
    name: 'Fai della Paganella',
    code: 'D468',
    province: 'TN'
  },
  {
    name: 'Faicchio',
    code: 'D469',
    province: 'BN'
  },
  {
    name: 'Falcade',
    code: 'D470',
    province: 'BL'
  },
  {
    name: 'Falciano del Massico',
    code: 'D471',
    province: 'CE'
  },
  {
    name: 'Falconara Marittima',
    code: 'D472',
    province: 'AN'
  },
  {
    name: 'Falconara Albanese',
    code: 'D473',
    province: 'CS'
  },
  {
    name: 'Falcone',
    code: 'D474',
    province: 'ME'
  },
  {
    name: 'Faleria',
    code: 'D475',
    province: 'VT'
  },
  {
    name: 'Falerna',
    code: 'D476',
    province: 'CZ'
  },
  {
    name: 'Falerone',
    code: 'D477',
    province: 'FM'
  },
  {
    name: 'Fallo',
    code: 'D480',
    province: 'CH'
  },
  {
    name: 'Faloppio',
    code: 'D482',
    province: 'CO'
  },
  {
    name: 'Falvaterra',
    code: 'D483',
    province: 'FR'
  },
  {
    name: 'Falzes/Pfalzen',
    italianName: 'Falzes',
    foreignName: 'Pfalzen',
    code: 'D484',
    province: 'BZ'
  },
  {
    name: 'Fanano',
    code: 'D486',
    province: 'MO'
  },
  {
    name: 'Fanna',
    code: 'D487',
    province: 'PN'
  },
  {
    name: 'Fano',
    code: 'D488',
    province: 'PU'
  },
  {
    name: 'Fano Adriano',
    code: 'D489',
    province: 'TE'
  },
  {
    name: "Fara Gera d'Adda",
    code: 'D490',
    province: 'BG'
  },
  {
    name: 'Fara Olivana con Sola',
    code: 'D491',
    province: 'BG'
  },
  {
    name: 'Fara Novarese',
    code: 'D492',
    province: 'NO'
  },
  {
    name: 'Fara in Sabina',
    code: 'D493',
    province: 'RI'
  },
  {
    name: 'Fara Filiorum Petri',
    code: 'D494',
    province: 'CH'
  },
  {
    name: 'Fara San Martino',
    code: 'D495',
    province: 'CH'
  },
  {
    name: 'Fara Vicentino',
    code: 'D496',
    province: 'VI'
  },
  {
    name: 'Fardella',
    code: 'D497',
    province: 'PZ'
  },
  {
    name: 'Farigliano',
    code: 'D499',
    province: 'CN'
  },
  {
    name: 'Farindola',
    code: 'D501',
    province: 'PE'
  },
  {
    name: 'Farini',
    code: 'D502',
    province: 'PC'
  },
  {
    name: 'Farnese',
    code: 'D503',
    province: 'VT'
  },
  {
    name: "Farra d'Isonzo",
    code: 'D504',
    province: 'GO'
  },
  {
    name: 'Farra di Soligo',
    code: 'D505',
    province: 'TV'
  },
  {
    name: 'Fasano',
    code: 'D508',
    province: 'BR'
  },
  {
    name: 'Fascia',
    code: 'D509',
    province: 'GE'
  },
  {
    name: 'Fauglia',
    code: 'D510',
    province: 'PI'
  },
  {
    name: 'Faule',
    code: 'D511',
    province: 'CN'
  },
  {
    name: 'Favale di Malvaro',
    code: 'D512',
    province: 'GE'
  },
  {
    name: 'Valsinni',
    code: 'D513',
    province: 'MT'
  },
  {
    name: 'Favara',
    code: 'D514',
    province: 'AG'
  },
  {
    name: 'Favignana',
    code: 'D518',
    province: 'TP'
  },
  {
    name: 'Favria',
    code: 'D520',
    province: 'TO'
  },
  {
    name: 'Orco Feglino',
    code: 'D522',
    province: 'SV'
  },
  {
    name: 'Feisoglio',
    code: 'D523',
    province: 'CN'
  },
  {
    name: 'Feletto',
    code: 'D524',
    province: 'TO'
  },
  {
    name: 'Felino',
    code: 'D526',
    province: 'PR'
  },
  {
    name: 'Felitto',
    code: 'D527',
    province: 'SA'
  },
  {
    name: 'Felizzano',
    code: 'D528',
    province: 'AL'
  },
  {
    name: 'Feltre',
    code: 'D530',
    province: 'BL'
  },
  {
    name: 'Fenegrò',
    code: 'D531',
    province: 'CO'
  },
  {
    name: 'Fenestrelle',
    code: 'D532',
    province: 'TO'
  },
  {
    name: 'Fénis',
    code: 'D537',
    province: 'AO'
  },
  {
    name: 'Ferentillo',
    code: 'D538',
    province: 'TR'
  },
  {
    name: 'Ferentino',
    code: 'D539',
    province: 'FR'
  },
  {
    name: 'Ferla',
    code: 'D540',
    province: 'SR'
  },
  {
    name: 'Fermignano',
    code: 'D541',
    province: 'PU'
  },
  {
    name: 'Fermo',
    code: 'D542',
    province: 'FM'
  },
  {
    name: 'Ferno',
    code: 'D543',
    province: 'VA'
  },
  {
    name: 'Feroleto Antico',
    code: 'D544',
    province: 'CZ'
  },
  {
    name: 'Feroleto della Chiesa',
    code: 'D545',
    province: 'RC'
  },
  {
    name: 'Pianopoli',
    code: 'D546',
    province: 'CZ'
  },
  {
    name: 'Ferrandina',
    code: 'D547',
    province: 'MT'
  },
  {
    name: 'Ferrara',
    code: 'D548',
    province: 'FE'
  },
  {
    name: 'Ferrara di Monte Baldo',
    code: 'D549',
    province: 'VR'
  },
  {
    name: 'Ferrazzano',
    code: 'D550',
    province: 'CB'
  },
  {
    name: 'Ferrera di Varese',
    code: 'D551',
    province: 'VA'
  },
  {
    name: 'Ferrera Erbognone',
    code: 'D552',
    province: 'PV'
  },
  {
    name: 'Moncenisio',
    code: 'D553',
    province: 'TO'
  },
  {
    name: 'Ferrere',
    code: 'D554',
    province: 'AT'
  },
  {
    name: 'Ferriere',
    code: 'D555',
    province: 'PC'
  },
  {
    name: 'Ferruzzano',
    code: 'D557',
    province: 'RC'
  },
  {
    name: 'Fraconalto',
    code: 'D559',
    province: 'AL'
  },
  {
    name: 'Fiamignano',
    code: 'D560',
    province: 'RI'
  },
  {
    name: 'Fiano Romano',
    code: 'D561',
    province: 'RM'
  },
  {
    name: 'Fiano',
    code: 'D562',
    province: 'TO'
  },
  {
    name: 'Fiastra',
    code: 'D564',
    province: 'MC'
  },
  {
    name: 'Fiavè',
    code: 'D565',
    province: 'TN'
  },
  {
    name: 'Poggio San Vicino',
    code: 'D566',
    province: 'MC'
  },
  {
    name: 'Ficarazzi',
    code: 'D567',
    province: 'PA'
  },
  {
    name: 'Ficarolo',
    code: 'D568',
    province: 'RO'
  },
  {
    name: 'Ficarra',
    code: 'D569',
    province: 'ME'
  },
  {
    name: 'Ficulle',
    code: 'D570',
    province: 'TR'
  },
  {
    name: 'Fiè allo Sciliar/Völs am Schlern',
    italianName: 'Fiè allo Sciliar',
    foreignName: 'Völs am Schlern',
    code: 'D571',
    province: 'BZ'
  },
  {
    name: 'Fierozzo',
    code: 'D573',
    province: 'TN'
  },
  {
    name: 'Fiesco',
    code: 'D574',
    province: 'CR'
  },
  {
    name: 'Fiesole',
    code: 'D575',
    province: 'FI'
  },
  {
    name: 'Fiesse',
    code: 'D576',
    province: 'BS'
  },
  {
    name: 'Fiesso Umbertiano',
    code: 'D577',
    province: 'RO'
  },
  {
    name: "Fiesso d'Artico",
    code: 'D578',
    province: 'VE'
  },
  {
    name: 'Figino Serenza',
    code: 'D579',
    province: 'CO'
  },
  {
    name: 'Figline Vegliaturo',
    code: 'D582',
    province: 'CS'
  },
  {
    name: 'Gonnosnò',
    code: 'D585',
    province: 'OR'
  },
  {
    name: 'Filacciano',
    code: 'D586',
    province: 'RM'
  },
  {
    name: 'Filadelfia',
    code: 'D587',
    province: 'VV'
  },
  {
    name: 'Filago',
    code: 'D588',
    province: 'BG'
  },
  {
    name: 'Filandari',
    code: 'D589',
    province: 'VV'
  },
  {
    name: 'Filattiera',
    code: 'D590',
    province: 'MS'
  },
  {
    name: 'Filettino',
    code: 'D591',
    province: 'FR'
  },
  {
    name: 'Filetto',
    code: 'D592',
    province: 'CH'
  },
  {
    name: 'Filiano',
    code: 'D593',
    province: 'PZ'
  },
  {
    name: 'Filighera',
    code: 'D594',
    province: 'PV'
  },
  {
    name: 'Filignano',
    code: 'D595',
    province: 'IS'
  },
  {
    name: 'Filogaso',
    code: 'D596',
    province: 'VV'
  },
  {
    name: 'Filottrano',
    code: 'D597',
    province: 'AN'
  },
  {
    name: 'Finale Emilia',
    code: 'D599',
    province: 'MO'
  },
  {
    name: 'Finale Ligure',
    code: 'D600',
    province: 'SV'
  },
  {
    name: 'Fino del Monte',
    code: 'D604',
    province: 'BG'
  },
  {
    name: 'Fino Mornasco',
    code: 'D605',
    province: 'CO'
  },
  {
    name: 'Fiorano al Serio',
    code: 'D606',
    province: 'BG'
  },
  {
    name: 'Fiorano Modenese',
    code: 'D607',
    province: 'MO'
  },
  {
    name: 'Fiorano Canavese',
    code: 'D608',
    province: 'TO'
  },
  {
    name: "Fiorenzuola d'Arda",
    code: 'D611',
    province: 'PC'
  },
  {
    name: 'Firenze',
    code: 'D612',
    province: 'FI'
  },
  {
    name: 'Firenzuola',
    code: 'D613',
    province: 'FI'
  },
  {
    name: 'Firmo',
    code: 'D614',
    province: 'CS'
  },
  {
    name: 'Fisciano',
    code: 'D615',
    province: 'SA'
  },
  {
    name: 'Fiumalbo',
    code: 'D617',
    province: 'MO'
  },
  {
    name: 'Fiumara',
    code: 'D619',
    province: 'RC'
  },
  {
    name: 'Fiume Veneto',
    code: 'D621',
    province: 'PN'
  },
  {
    name: 'Fiumedinisi',
    code: 'D622',
    province: 'ME'
  },
  {
    name: 'Fiumefreddo di Sicilia',
    code: 'D623',
    province: 'CT'
  },
  {
    name: 'Fiumefreddo Bruzio',
    code: 'D624',
    province: 'CS'
  },
  {
    name: 'Fiuminata',
    code: 'D628',
    province: 'MC'
  },
  {
    name: 'Fivizzano',
    code: 'D629',
    province: 'MS'
  },
  {
    name: 'Flaibano',
    code: 'D630',
    province: 'UD'
  },
  {
    name: 'Flero',
    code: 'D634',
    province: 'BS'
  },
  {
    name: 'Floresta',
    code: 'D635',
    province: 'ME'
  },
  {
    name: 'Floridia',
    code: 'D636',
    province: 'SR'
  },
  {
    name: 'Florinas',
    code: 'D637',
    province: 'SS'
  },
  {
    name: 'Flumeri',
    code: 'D638',
    province: 'AV'
  },
  {
    name: 'Fluminimaggiore',
    code: 'D639',
    province: 'SU'
  },
  {
    name: 'Flussio',
    code: 'D640',
    province: 'OR'
  },
  {
    name: 'Fobello',
    code: 'D641',
    province: 'VC'
  },
  {
    name: 'Foggia',
    code: 'D643',
    province: 'FG'
  },
  {
    name: 'Foglianise',
    code: 'D644',
    province: 'BN'
  },
  {
    name: 'Fogliano Redipuglia',
    code: 'D645',
    province: 'GO'
  },
  {
    name: 'Foglizzo',
    code: 'D646',
    province: 'TO'
  },
  {
    name: 'Foiano della Chiana',
    code: 'D649',
    province: 'AR'
  },
  {
    name: 'Foiano di Val Fortore',
    code: 'D650',
    province: 'BN'
  },
  {
    name: 'Folgaria',
    code: 'D651',
    province: 'TN'
  },
  {
    name: 'Folignano',
    code: 'D652',
    province: 'AP'
  },
  {
    name: 'Foligno',
    code: 'D653',
    province: 'PG'
  },
  {
    name: 'Follina',
    code: 'D654',
    province: 'TV'
  },
  {
    name: 'Follo',
    code: 'D655',
    province: 'SP'
  },
  {
    name: 'Follonica',
    code: 'D656',
    province: 'GR'
  },
  {
    name: 'Fombio',
    code: 'D660',
    province: 'LO'
  },
  {
    name: 'Fondachelli-Fantina',
    code: 'D661',
    province: 'ME'
  },
  {
    name: 'Fondi',
    code: 'D662',
    province: 'LT'
  },
  {
    name: 'Fonni',
    code: 'D665',
    province: 'NU'
  },
  {
    name: 'Fontainemore',
    code: 'D666',
    province: 'AO'
  },
  {
    name: 'Fontana Liri',
    code: 'D667',
    province: 'FR'
  },
  {
    name: 'Fontanelice',
    code: 'D668',
    province: 'BO'
  },
  {
    name: 'Fontanafredda',
    code: 'D670',
    province: 'PN'
  },
  {
    name: 'Fontanarosa',
    code: 'D671',
    province: 'AV'
  },
  {
    name: 'Fontanella',
    code: 'D672',
    province: 'BG'
  },
  {
    name: 'Fontanellato',
    code: 'D673',
    province: 'PR'
  },
  {
    name: 'Fontanelle',
    code: 'D674',
    province: 'TV'
  },
  {
    name: "Fontaneto d'Agogna",
    code: 'D675',
    province: 'NO'
  },
  {
    name: 'Fontanetto Po',
    code: 'D676',
    province: 'VC'
  },
  {
    name: 'Fontanigorda',
    code: 'D677',
    province: 'GE'
  },
  {
    name: 'Fontanile',
    code: 'D678',
    province: 'AT'
  },
  {
    name: 'Fontaniva',
    code: 'D679',
    province: 'PD'
  },
  {
    name: 'Fonte',
    code: 'D680',
    province: 'TV'
  },
  {
    name: 'Fontecchio',
    code: 'D681',
    province: 'AQ'
  },
  {
    name: 'Fontechiari',
    code: 'D682',
    province: 'FR'
  },
  {
    name: 'Fontegreca',
    code: 'D683',
    province: 'CE'
  },
  {
    name: 'Fonteno',
    code: 'D684',
    province: 'BG'
  },
  {
    name: 'Fontevivo',
    code: 'D685',
    province: 'PR'
  },
  {
    name: 'Fonzaso',
    code: 'D686',
    province: 'BL'
  },
  {
    name: 'Foppolo',
    code: 'D688',
    province: 'BG'
  },
  {
    name: 'Forano',
    code: 'D689',
    province: 'RI'
  },
  {
    name: 'San Giovanni Teatino',
    code: 'D690',
    province: 'CH'
  },
  {
    name: 'Force',
    code: 'D691',
    province: 'AP'
  },
  {
    name: 'Forchia',
    code: 'D693',
    province: 'BN'
  },
  {
    name: 'Forcola',
    code: 'D694',
    province: 'SO'
  },
  {
    name: 'Fordongianus',
    code: 'D695',
    province: 'OR'
  },
  {
    name: 'Forenza',
    code: 'D696',
    province: 'PZ'
  },
  {
    name: 'Foresto Sparso',
    code: 'D697',
    province: 'BG'
  },
  {
    name: 'Forgaria nel Friuli',
    code: 'D700',
    province: 'UD'
  },
  {
    name: 'Forino',
    code: 'D701',
    province: 'AV'
  },
  {
    name: 'Forio',
    code: 'D702',
    province: 'NA'
  },
  {
    name: 'Forlì del Sannio',
    code: 'D703',
    province: 'IS'
  },
  {
    name: 'Forlì',
    code: 'D704',
    province: 'FC'
  },
  {
    name: 'Forlimpopoli',
    code: 'D705',
    province: 'FC'
  },
  {
    name: 'Formazza',
    code: 'D706',
    province: 'VB'
  },
  {
    name: 'Formello',
    code: 'D707',
    province: 'RM'
  },
  {
    name: 'Formia',
    code: 'D708',
    province: 'LT'
  },
  {
    name: 'Formicola',
    code: 'D709',
    province: 'CE'
  },
  {
    name: 'Formigara',
    code: 'D710',
    province: 'CR'
  },
  {
    name: 'Formigine',
    code: 'D711',
    province: 'MO'
  },
  {
    name: 'Formigliana',
    code: 'D712',
    province: 'VC'
  },
  {
    name: 'Fornace',
    code: 'D714',
    province: 'TN'
  },
  {
    name: 'Fornelli',
    code: 'D715',
    province: 'IS'
  },
  {
    name: 'Tonezza del Cimone',
    code: 'D717',
    province: 'VI'
  },
  {
    name: 'Forni Avoltri',
    code: 'D718',
    province: 'UD'
  },
  {
    name: 'Forni di Sopra',
    code: 'D719',
    province: 'UD'
  },
  {
    name: 'Forni di Sotto',
    code: 'D720',
    province: 'UD'
  },
  {
    name: 'Forno Canavese',
    code: 'D725',
    province: 'TO'
  },
  {
    name: 'Fornovo San Giovanni',
    code: 'D727',
    province: 'BG'
  },
  {
    name: 'Fornovo di Taro',
    code: 'D728',
    province: 'PR'
  },
  {
    name: 'Forte dei Marmi',
    code: 'D730',
    province: 'LU'
  },
  {
    name: 'Fortezza/Franzensfeste',
    italianName: 'Fortezza',
    foreignName: 'Franzensfeste',
    code: 'D731',
    province: 'BZ'
  },
  {
    name: 'Fortunago',
    code: 'D732',
    province: 'PV'
  },
  {
    name: "Forza d'Agrò",
    code: 'D733',
    province: 'ME'
  },
  {
    name: 'Fosciandora',
    code: 'D734',
    province: 'LU'
  },
  {
    name: 'Fosdinovo',
    code: 'D735',
    province: 'MS'
  },
  {
    name: 'Fossa',
    code: 'D736',
    province: 'AQ'
  },
  {
    name: 'Fossalto',
    code: 'D737',
    province: 'CB'
  },
  {
    name: 'Fossacesia',
    code: 'D738',
    province: 'CH'
  },
  {
    name: 'Fossalta di Piave',
    code: 'D740',
    province: 'VE'
  },
  {
    name: 'Fossalta di Portogruaro',
    code: 'D741',
    province: 'VE'
  },
  {
    name: 'Fossano',
    code: 'D742',
    province: 'CN'
  },
  {
    name: 'Fossato Serralta',
    code: 'D744',
    province: 'CZ'
  },
  {
    name: 'Fossato di Vico',
    code: 'D745',
    province: 'PG'
  },
  {
    name: 'Montebello Jonico',
    code: 'D746',
    province: 'RC'
  },
  {
    name: 'Fossò',
    code: 'D748',
    province: 'VE'
  },
  {
    name: 'Fossombrone',
    code: 'D749',
    province: 'PU'
  },
  {
    name: 'Foza',
    code: 'D750',
    province: 'VI'
  },
  {
    name: 'Frabosa Soprana',
    code: 'D751',
    province: 'CN'
  },
  {
    name: 'Frabosa Sottana',
    code: 'D752',
    province: 'CN'
  },
  {
    name: 'Fragagnano',
    code: 'D754',
    province: 'TA'
  },
  {
    name: "Fragneto l'Abate",
    code: 'D755',
    province: 'BN'
  },
  {
    name: 'Fragneto Monforte',
    code: 'D756',
    province: 'BN'
  },
  {
    name: 'Fraine',
    code: 'D757',
    province: 'CH'
  },
  {
    name: 'Framura',
    code: 'D758',
    province: 'SP'
  },
  {
    name: 'Francavilla Bisio',
    code: 'D759',
    province: 'AL'
  },
  {
    name: "Francavilla d'Ete",
    code: 'D760',
    province: 'FM'
  },
  {
    name: 'Francavilla Fontana',
    code: 'D761',
    province: 'BR'
  },
  {
    name: 'Francavilla Angitola',
    code: 'D762',
    province: 'VV'
  },
  {
    name: 'Francavilla al Mare',
    code: 'D763',
    province: 'CH'
  },
  {
    name: 'Francavilla Marittima',
    code: 'D764',
    province: 'CS'
  },
  {
    name: 'Francavilla di Sicilia',
    code: 'D765',
    province: 'ME'
  },
  {
    name: 'Francavilla in Sinni',
    code: 'D766',
    province: 'PZ'
  },
  {
    name: 'Francica',
    code: 'D767',
    province: 'VV'
  },
  {
    name: 'Francofonte',
    code: 'D768',
    province: 'SR'
  },
  {
    name: 'Francolise',
    code: 'D769',
    province: 'CE'
  },
  {
    name: 'Frascaro',
    code: 'D770',
    province: 'AL'
  },
  {
    name: 'Frascarolo',
    code: 'D771',
    province: 'PV'
  },
  {
    name: 'Frascati',
    code: 'D773',
    province: 'RM'
  },
  {
    name: 'Frascineto',
    code: 'D774',
    province: 'CS'
  },
  {
    name: 'Frassilongo',
    code: 'D775',
    province: 'TN'
  },
  {
    name: 'Frassinelle Polesine',
    code: 'D776',
    province: 'RO'
  },
  {
    name: 'Frassinello Monferrato',
    code: 'D777',
    province: 'AL'
  },
  {
    name: 'Frassineto Po',
    code: 'D780',
    province: 'AL'
  },
  {
    name: 'Frassinetto',
    code: 'D781',
    province: 'TO'
  },
  {
    name: 'Frassino',
    code: 'D782',
    province: 'CN'
  },
  {
    name: 'Frassinoro',
    code: 'D783',
    province: 'MO'
  },
  {
    name: 'Frasso Telesino',
    code: 'D784',
    province: 'BN'
  },
  {
    name: 'Frasso Sabino',
    code: 'D785',
    province: 'RI'
  },
  {
    name: 'Umbertide',
    code: 'D786',
    province: 'PG'
  },
  {
    name: 'Fratta Todina',
    code: 'D787',
    province: 'PG'
  },
  {
    name: 'Fratta Polesine',
    code: 'D788',
    province: 'RO'
  },
  {
    name: 'Frattamaggiore',
    code: 'D789',
    province: 'NA'
  },
  {
    name: 'Frattaminore',
    code: 'D790',
    province: 'NA'
  },
  {
    name: 'Fratte Rosa',
    code: 'D791',
    province: 'PU'
  },
  {
    name: 'Frazzanò',
    code: 'D793',
    province: 'ME'
  },
  {
    name: 'Fregona',
    code: 'D794',
    province: 'TV'
  },
  {
    name: 'Fresagrandinaria',
    code: 'D796',
    province: 'CH'
  },
  {
    name: 'Fresonara',
    code: 'D797',
    province: 'AL'
  },
  {
    name: 'Frigento',
    code: 'D798',
    province: 'AV'
  },
  {
    name: 'Frignano',
    code: 'D799',
    province: 'CE'
  },
  {
    name: 'Villa di Briano',
    code: 'D801',
    province: 'CE'
  },
  {
    name: 'Frinco',
    code: 'D802',
    province: 'AT'
  },
  {
    name: 'Frisa',
    code: 'D803',
    province: 'CH'
  },
  {
    name: 'Frisanco',
    code: 'D804',
    province: 'PN'
  },
  {
    name: 'Front',
    code: 'D805',
    province: 'TO'
  },
  {
    name: 'Frontino',
    code: 'D807',
    province: 'PU'
  },
  {
    name: 'Frontone',
    code: 'D808',
    province: 'PU'
  },
  {
    name: 'Frosinone',
    code: 'D810',
    province: 'FR'
  },
  {
    name: 'Frosolone',
    code: 'D811',
    province: 'IS'
  },
  {
    name: 'Frossasco',
    code: 'D812',
    province: 'TO'
  },
  {
    name: 'Frugarolo',
    code: 'D813',
    province: 'AL'
  },
  {
    name: 'Fubine Monferrato',
    code: 'D814',
    province: 'AL'
  },
  {
    name: 'Fucecchio',
    code: 'D815',
    province: 'FI'
  },
  {
    name: 'Fuipiano Valle Imagna',
    code: 'D817',
    province: 'BG'
  },
  {
    name: 'Fumane',
    code: 'D818',
    province: 'VR'
  },
  {
    name: 'Fumone',
    code: 'D819',
    province: 'FR'
  },
  {
    name: 'Funes/Villnöß',
    italianName: 'Funes',
    foreignName: 'Villnöß',
    code: 'D821',
    province: 'BZ'
  },
  {
    name: 'Furci',
    code: 'D823',
    province: 'CH'
  },
  {
    name: 'Furci Siculo',
    code: 'D824',
    province: 'ME'
  },
  {
    name: 'Furnari',
    code: 'D825',
    province: 'ME'
  },
  {
    name: 'Furore',
    code: 'D826',
    province: 'SA'
  },
  {
    name: 'Furtei',
    code: 'D827',
    province: 'SU'
  },
  {
    name: 'Fuscaldo',
    code: 'D828',
    province: 'CS'
  },
  {
    name: 'Fusignano',
    code: 'D829',
    province: 'RA'
  },
  {
    name: 'Fusine',
    code: 'D830',
    province: 'SO'
  },
  {
    name: 'Futani',
    code: 'D832',
    province: 'SA'
  },
  {
    name: 'Gabbioneta-Binanuova',
    code: 'D834',
    province: 'CR'
  },
  {
    name: 'Gabiano',
    code: 'D835',
    province: 'AL'
  },
  {
    name: 'Gabicce Mare',
    code: 'D836',
    province: 'PU'
  },
  {
    name: 'Gaby',
    code: 'D839',
    province: 'AO'
  },
  {
    name: 'Gadesco-Pieve Delmona',
    code: 'D841',
    province: 'CR'
  },
  {
    name: 'Gadoni',
    code: 'D842',
    province: 'NU'
  },
  {
    name: 'Gaeta',
    code: 'D843',
    province: 'LT'
  },
  {
    name: 'Gaggi',
    code: 'D844',
    province: 'ME'
  },
  {
    name: 'Gaggiano',
    code: 'D845',
    province: 'MI'
  },
  {
    name: 'Gaggio Montano',
    code: 'D847',
    province: 'BO'
  },
  {
    name: 'Gaglianico',
    code: 'D848',
    province: 'BI'
  },
  {
    name: 'Gagliano Castelferrato',
    code: 'D849',
    province: 'EN'
  },
  {
    name: 'Gagliano Aterno',
    code: 'D850',
    province: 'AQ'
  },
  {
    name: 'Gagliano del Capo',
    code: 'D851',
    province: 'LE'
  },
  {
    name: 'Gagliato',
    code: 'D852',
    province: 'CZ'
  },
  {
    name: 'Gagliole',
    code: 'D853',
    province: 'MC'
  },
  {
    name: 'Gaiarine',
    code: 'D854',
    province: 'TV'
  },
  {
    name: 'Gaiba',
    code: 'D855',
    province: 'RO'
  },
  {
    name: 'Gaiola',
    code: 'D856',
    province: 'CN'
  },
  {
    name: 'Gaiole in Chianti',
    code: 'D858',
    province: 'SI'
  },
  {
    name: 'Gairo',
    code: 'D859',
    province: 'NU'
  },
  {
    name: 'Gais/Gais',
    italianName: 'Gais',
    foreignName: 'Gais',
    code: 'D860',
    province: 'BZ'
  },
  {
    name: 'Galati Mamertino',
    code: 'D861',
    province: 'ME'
  },
  {
    name: 'Galatina',
    code: 'D862',
    province: 'LE'
  },
  {
    name: 'Galatone',
    code: 'D863',
    province: 'LE'
  },
  {
    name: 'Galatro',
    code: 'D864',
    province: 'RC'
  },
  {
    name: 'Galbiate',
    code: 'D865',
    province: 'LC'
  },
  {
    name: 'Galeata',
    code: 'D867',
    province: 'FC'
  },
  {
    name: 'Galgagnano',
    code: 'D868',
    province: 'LO'
  },
  {
    name: 'Gallarate',
    code: 'D869',
    province: 'VA'
  },
  {
    name: 'Gallese',
    code: 'D870',
    province: 'VT'
  },
  {
    name: 'Galliate Lombardo',
    code: 'D871',
    province: 'VA'
  },
  {
    name: 'Galliate',
    code: 'D872',
    province: 'NO'
  },
  {
    name: 'Galliavola',
    code: 'D873',
    province: 'PV'
  },
  {
    name: 'Gallicano',
    code: 'D874',
    province: 'LU'
  },
  {
    name: 'Gallicano nel Lazio',
    code: 'D875',
    province: 'RM'
  },
  {
    name: 'Gallicchio',
    code: 'D876',
    province: 'PZ'
  },
  {
    name: 'Galliera',
    code: 'D878',
    province: 'BO'
  },
  {
    name: 'Galliera Veneta',
    code: 'D879',
    province: 'PD'
  },
  {
    name: 'Gallinaro',
    code: 'D881',
    province: 'FR'
  },
  {
    name: 'Gallio',
    code: 'D882',
    province: 'VI'
  },
  {
    name: 'Gallipoli',
    code: 'D883',
    province: 'LE'
  },
  {
    name: 'Gallo Matese',
    code: 'D884',
    province: 'CE'
  },
  {
    name: 'Gallodoro',
    code: 'D885',
    province: 'ME'
  },
  {
    name: 'Galluccio',
    code: 'D886',
    province: 'CE'
  },
  {
    name: 'Galtellì',
    code: 'D888',
    province: 'NU'
  },
  {
    name: 'Galzignano Terme',
    code: 'D889',
    province: 'PD'
  },
  {
    name: 'Gamalero',
    code: 'D890',
    province: 'AL'
  },
  {
    name: 'Gambara',
    code: 'D891',
    province: 'BS'
  },
  {
    name: 'Gambarana',
    code: 'D892',
    province: 'PV'
  },
  {
    name: 'Gambasca',
    code: 'D894',
    province: 'CN'
  },
  {
    name: 'Gambassi Terme',
    code: 'D895',
    province: 'FI'
  },
  {
    name: 'Gambatesa',
    code: 'D896',
    province: 'CB'
  },
  {
    name: 'Gambellara',
    code: 'D897',
    province: 'VI'
  },
  {
    name: 'Gamberale',
    code: 'D898',
    province: 'CH'
  },
  {
    name: 'Gambettola',
    code: 'D899',
    province: 'FC'
  },
  {
    name: 'Gambolò',
    code: 'D901',
    province: 'PV'
  },
  {
    name: 'Gandellino',
    code: 'D903',
    province: 'BG'
  },
  {
    name: 'Gandino',
    code: 'D905',
    province: 'BG'
  },
  {
    name: 'Gandosso',
    code: 'D906',
    province: 'BG'
  },
  {
    name: 'Gangi',
    code: 'D907',
    province: 'PA'
  },
  {
    name: 'Garaguso',
    code: 'D909',
    province: 'MT'
  },
  {
    name: 'Garbagna',
    code: 'D910',
    province: 'AL'
  },
  {
    name: 'Garbagna Novarese',
    code: 'D911',
    province: 'NO'
  },
  {
    name: 'Garbagnate Milanese',
    code: 'D912',
    province: 'MI'
  },
  {
    name: 'Garbagnate Monastero',
    code: 'D913',
    province: 'LC'
  },
  {
    name: 'Garda',
    code: 'D915',
    province: 'VR'
  },
  {
    name: 'Gardone Riviera',
    code: 'D917',
    province: 'BS'
  },
  {
    name: 'Gardone Val Trompia',
    code: 'D918',
    province: 'BS'
  },
  {
    name: 'Garessio',
    code: 'D920',
    province: 'CN'
  },
  {
    name: 'Gargallo',
    code: 'D921',
    province: 'NO'
  },
  {
    name: 'Gargazzone/Gargazon',
    italianName: 'Gargazzone',
    foreignName: 'Gargazon',
    code: 'D923',
    province: 'BZ'
  },
  {
    name: 'Gargnano',
    code: 'D924',
    province: 'BS'
  },
  {
    name: 'Garlasco',
    code: 'D925',
    province: 'PV'
  },
  {
    name: 'Garlate',
    code: 'D926',
    province: 'LC'
  },
  {
    name: 'Garlenda',
    code: 'D927',
    province: 'SV'
  },
  {
    name: 'Garniga Terme',
    code: 'D928',
    province: 'TN'
  },
  {
    name: 'Garzeno',
    code: 'D930',
    province: 'CO'
  },
  {
    name: 'Garzigliana',
    code: 'D931',
    province: 'TO'
  },
  {
    name: 'Gasperina',
    code: 'D932',
    province: 'CZ'
  },
  {
    name: 'Gassino Torinese',
    code: 'D933',
    province: 'TO'
  },
  {
    name: 'Gattatico',
    code: 'D934',
    province: 'RE'
  },
  {
    name: 'Gatteo',
    code: 'D935',
    province: 'FC'
  },
  {
    name: 'Gattinara',
    code: 'D938',
    province: 'VC'
  },
  {
    name: 'Gavardo',
    code: 'D940',
    province: 'BS'
  },
  {
    name: 'Gavello',
    code: 'D942',
    province: 'RO'
  },
  {
    name: 'Gaverina Terme',
    code: 'D943',
    province: 'BG'
  },
  {
    name: 'Gavi',
    code: 'D944',
    province: 'AL'
  },
  {
    name: 'Gavignano',
    code: 'D945',
    province: 'RM'
  },
  {
    name: 'Gavirate',
    code: 'D946',
    province: 'VA'
  },
  {
    name: 'Gavoi',
    code: 'D947',
    province: 'NU'
  },
  {
    name: 'Gavorrano',
    code: 'D948',
    province: 'GR'
  },
  {
    name: 'Gazoldo degli Ippoliti',
    code: 'D949',
    province: 'MN'
  },
  {
    name: 'Gazzada Schianno',
    code: 'D951',
    province: 'VA'
  },
  {
    name: 'Gazzaniga',
    code: 'D952',
    province: 'BG'
  },
  {
    name: 'Gazzo',
    code: 'D956',
    province: 'PD'
  },
  {
    name: 'Gazzo Veronese',
    code: 'D957',
    province: 'VR'
  },
  {
    name: 'Gazzola',
    code: 'D958',
    province: 'PC'
  },
  {
    name: 'Gazzuolo',
    code: 'D959',
    province: 'MN'
  },
  {
    name: 'Gela',
    code: 'D960',
    province: 'CL'
  },
  {
    name: 'Gemmano',
    code: 'D961',
    province: 'RN'
  },
  {
    name: 'Gemona del Friuli',
    code: 'D962',
    province: 'UD'
  },
  {
    name: 'Gemonio',
    code: 'D963',
    province: 'VA'
  },
  {
    name: 'Genazzano',
    code: 'D964',
    province: 'RM'
  },
  {
    name: 'Genga',
    code: 'D965',
    province: 'AN'
  },
  {
    name: 'Genivolta',
    code: 'D966',
    province: 'CR'
  },
  {
    name: 'Genola',
    code: 'D967',
    province: 'CN'
  },
  {
    name: 'Genoni',
    code: 'D968',
    province: 'SU'
  },
  {
    name: 'Genova',
    code: 'D969',
    province: 'GE'
  },
  {
    name: 'Genuri',
    code: 'D970',
    province: 'SU'
  },
  {
    name: 'Genzano di Lucania',
    code: 'D971',
    province: 'PZ'
  },
  {
    name: 'Genzano di Roma',
    code: 'D972',
    province: 'RM'
  },
  {
    name: 'Gera Lario',
    code: 'D974',
    province: 'CO'
  },
  {
    name: 'Gerace',
    code: 'D975',
    province: 'RC'
  },
  {
    name: 'Locri',
    code: 'D976',
    province: 'RC'
  },
  {
    name: 'Geraci Siculo',
    code: 'D977',
    province: 'PA'
  },
  {
    name: 'Gerano',
    code: 'D978',
    province: 'RM'
  },
  {
    name: 'Gerenzago',
    code: 'D980',
    province: 'PV'
  },
  {
    name: 'Gerenzano',
    code: 'D981',
    province: 'VA'
  },
  {
    name: 'Gergei',
    code: 'D982',
    province: 'SU'
  },
  {
    name: 'Germagnano',
    code: 'D983',
    province: 'TO'
  },
  {
    name: 'Germagno',
    code: 'D984',
    province: 'VB'
  },
  {
    name: 'Germignaga',
    code: 'D987',
    province: 'VA'
  },
  {
    name: 'Gerocarne',
    code: 'D988',
    province: 'VV'
  },
  {
    name: 'Gerola Alta',
    code: 'D990',
    province: 'SO'
  },
  {
    name: "Gerre de' Caprioli",
    code: 'D993',
    province: 'CR'
  },
  {
    name: 'Gesico',
    code: 'D994',
    province: 'SU'
  },
  {
    name: 'Gessate',
    code: 'D995',
    province: 'MI'
  },
  {
    name: 'Gessopalena',
    code: 'D996',
    province: 'CH'
  },
  {
    name: 'Gesturi',
    code: 'D997',
    province: 'SU'
  },
  {
    name: 'Gesualdo',
    code: 'D998',
    province: 'AV'
  },
  {
    name: 'Ghedi',
    code: 'D999',
    province: 'BS'
  },
  {
    name: 'Ghemme',
    code: 'E001',
    province: 'NO'
  },
  {
    name: 'Ghiffa',
    code: 'E003',
    province: 'VB'
  },
  {
    name: 'Ghilarza',
    code: 'E004',
    province: 'OR'
  },
  {
    name: 'Ghisalba',
    code: 'E006',
    province: 'BG'
  },
  {
    name: 'Ghislarengo',
    code: 'E007',
    province: 'VC'
  },
  {
    name: 'Giacciano con Baruchella',
    code: 'E008',
    province: 'RO'
  },
  {
    name: 'Giaglione',
    code: 'E009',
    province: 'TO'
  },
  {
    name: 'Gianico',
    code: 'E010',
    province: 'BS'
  },
  {
    name: 'Giano Vetusto',
    code: 'E011',
    province: 'CE'
  },
  {
    name: "Giano dell'Umbria",
    code: 'E012',
    province: 'PG'
  },
  {
    name: 'Giardinello',
    code: 'E013',
    province: 'PA'
  },
  {
    name: 'Giardini-Naxos',
    code: 'E014',
    province: 'ME'
  },
  {
    name: 'Giarole',
    code: 'E015',
    province: 'AL'
  },
  {
    name: 'Giarratana',
    code: 'E016',
    province: 'RG'
  },
  {
    name: 'Giarre',
    code: 'E017',
    province: 'CT'
  },
  {
    name: 'Giave',
    code: 'E019',
    province: 'SS'
  },
  {
    name: 'Giaveno',
    code: 'E020',
    province: 'TO'
  },
  {
    name: 'Giavera del Montello',
    code: 'E021',
    province: 'TV'
  },
  {
    name: 'Giba',
    code: 'E022',
    province: 'SU'
  },
  {
    name: 'Gibellina',
    code: 'E023',
    province: 'TP'
  },
  {
    name: 'Gifflenga',
    code: 'E024',
    province: 'BI'
  },
  {
    name: 'Giffone',
    code: 'E025',
    province: 'RC'
  },
  {
    name: 'Giffoni Sei Casali',
    code: 'E026',
    province: 'SA'
  },
  {
    name: 'Giffoni Valle Piana',
    code: 'E027',
    province: 'SA'
  },
  {
    name: 'Gignese',
    code: 'E028',
    province: 'VB'
  },
  {
    name: 'Gignod',
    code: 'E029',
    province: 'AO'
  },
  {
    name: 'Gildone',
    code: 'E030',
    province: 'CB'
  },
  {
    name: 'Gimigliano',
    code: 'E031',
    province: 'CZ'
  },
  {
    name: 'Ginestra',
    code: 'E033',
    province: 'PZ'
  },
  {
    name: 'Ginestra degli Schiavoni',
    code: 'E034',
    province: 'BN'
  },
  {
    name: 'Ginosa',
    code: 'E036',
    province: 'TA'
  },
  {
    name: 'Gioi',
    code: 'E037',
    province: 'SA'
  },
  {
    name: 'Gioia del Colle',
    code: 'E038',
    province: 'BA'
  },
  {
    name: 'Gioia Sannitica',
    code: 'E039',
    province: 'CE'
  },
  {
    name: 'Gioia dei Marsi',
    code: 'E040',
    province: 'AQ'
  },
  {
    name: 'Gioia Tauro',
    code: 'E041',
    province: 'RC'
  },
  {
    name: 'Gioiosa Marea',
    code: 'E043',
    province: 'ME'
  },
  {
    name: 'Gioiosa Ionica',
    code: 'E044',
    province: 'RC'
  },
  {
    name: 'Giove',
    code: 'E045',
    province: 'TR'
  },
  {
    name: 'Giovinazzo',
    code: 'E047',
    province: 'BA'
  },
  {
    name: 'Giovo',
    code: 'E048',
    province: 'TN'
  },
  {
    name: 'Girasole',
    code: 'E049',
    province: 'NU'
  },
  {
    name: 'Girifalco',
    code: 'E050',
    province: 'CZ'
  },
  {
    name: 'Gissi',
    code: 'E052',
    province: 'CH'
  },
  {
    name: 'Giuggianello',
    code: 'E053',
    province: 'LE'
  },
  {
    name: 'Giugliano in Campania',
    code: 'E054',
    province: 'NA'
  },
  {
    name: 'Giuliana',
    code: 'E055',
    province: 'PA'
  },
  {
    name: 'Giuliano Teatino',
    code: 'E056',
    province: 'CH'
  },
  {
    name: 'Giuliano di Roma',
    code: 'E057',
    province: 'FR'
  },
  {
    name: 'Giulianova',
    code: 'E058',
    province: 'TE'
  },
  {
    name: 'Giungano',
    code: 'E060',
    province: 'SA'
  },
  {
    name: 'Giurdignano',
    code: 'E061',
    province: 'LE'
  },
  {
    name: 'Giussago',
    code: 'E062',
    province: 'PV'
  },
  {
    name: 'Giussano',
    code: 'E063',
    province: 'MB'
  },
  {
    name: 'Giustenice',
    code: 'E064',
    province: 'SV'
  },
  {
    name: 'Giustino',
    code: 'E065',
    province: 'TN'
  },
  {
    name: 'Giusvalla',
    code: 'E066',
    province: 'SV'
  },
  {
    name: 'Givoletto',
    code: 'E067',
    province: 'TO'
  },
  {
    name: 'Gizzeria',
    code: 'E068',
    province: 'CZ'
  },
  {
    name: 'Glorenza/Glurns',
    italianName: 'Glorenza',
    foreignName: 'Glurns',
    code: 'E069',
    province: 'BZ'
  },
  {
    name: 'Sesta Godano',
    code: 'E070',
    province: 'SP'
  },
  {
    name: "Godega di Sant'Urbano",
    code: 'E071',
    province: 'TV'
  },
  {
    name: 'Godiasco Salice Terme',
    code: 'E072',
    province: 'PV'
  },
  {
    name: 'Godrano',
    code: 'E074',
    province: 'PA'
  },
  {
    name: 'Goito',
    code: 'E078',
    province: 'MN'
  },
  {
    name: 'Golasecca',
    code: 'E079',
    province: 'VA'
  },
  {
    name: 'Golferenzo',
    code: 'E081',
    province: 'PV'
  },
  {
    name: 'Gombito',
    code: 'E082',
    province: 'CR'
  },
  {
    name: 'Gonars',
    code: 'E083',
    province: 'UD'
  },
  {
    name: 'Goni',
    code: 'E084',
    province: 'SU'
  },
  {
    name: 'Gonnosfanadiga',
    code: 'E085',
    province: 'SU'
  },
  {
    name: 'Gonnesa',
    code: 'E086',
    province: 'SU'
  },
  {
    name: 'Gonnoscodina',
    code: 'E087',
    province: 'OR'
  },
  {
    name: 'Gonnostramatza',
    code: 'E088',
    province: 'OR'
  },
  {
    name: 'Gonzaga',
    code: 'E089',
    province: 'MN'
  },
  {
    name: 'Gordona',
    code: 'E090',
    province: 'SO'
  },
  {
    name: 'Gorga',
    code: 'E091',
    province: 'RM'
  },
  {
    name: 'Gorgo al Monticano',
    code: 'E092',
    province: 'TV'
  },
  {
    name: 'Gorgoglione',
    code: 'E093',
    province: 'MT'
  },
  {
    name: 'Gorgonzola',
    code: 'E094',
    province: 'MI'
  },
  {
    name: 'Goriano Sicoli',
    code: 'E096',
    province: 'AQ'
  },
  {
    name: 'Gorizia',
    code: 'E098',
    province: 'GO'
  },
  {
    name: 'Gorlago',
    code: 'E100',
    province: 'BG'
  },
  {
    name: 'Gorla Maggiore',
    code: 'E101',
    province: 'VA'
  },
  {
    name: 'Gorla Minore',
    code: 'E102',
    province: 'VA'
  },
  {
    name: 'Gorle',
    code: 'E103',
    province: 'BG'
  },
  {
    name: 'Gornate Olona',
    code: 'E104',
    province: 'VA'
  },
  {
    name: 'Gorno',
    code: 'E106',
    province: 'BG'
  },
  {
    name: 'Goro',
    code: 'E107',
    province: 'FE'
  },
  {
    name: 'Gorreto',
    code: 'E109',
    province: 'GE'
  },
  {
    name: 'Gorzegno',
    code: 'E111',
    province: 'CN'
  },
  {
    name: 'Gosaldo',
    code: 'E113',
    province: 'BL'
  },
  {
    name: 'Gossolengo',
    code: 'E114',
    province: 'PC'
  },
  {
    name: 'Gottasecca',
    code: 'E115',
    province: 'CN'
  },
  {
    name: 'Gottolengo',
    code: 'E116',
    province: 'BS'
  },
  {
    name: 'Govone',
    code: 'E118',
    province: 'CN'
  },
  {
    name: 'Gozzano',
    code: 'E120',
    province: 'NO'
  },
  {
    name: 'Gradara',
    code: 'E122',
    province: 'PU'
  },
  {
    name: "Gradisca d'Isonzo",
    code: 'E124',
    province: 'GO'
  },
  {
    name: 'Grado',
    code: 'E125',
    province: 'GO'
  },
  {
    name: 'Gradoli',
    code: 'E126',
    province: 'VT'
  },
  {
    name: 'Graffignana',
    code: 'E127',
    province: 'LO'
  },
  {
    name: 'Graffignano',
    code: 'E128',
    province: 'VT'
  },
  {
    name: 'Graglia',
    code: 'E130',
    province: 'BI'
  },
  {
    name: 'Gragnano',
    code: 'E131',
    province: 'NA'
  },
  {
    name: 'Gragnano Trebbiense',
    code: 'E132',
    province: 'PC'
  },
  {
    name: 'Grammichele',
    code: 'E133',
    province: 'CT'
  },
  {
    name: 'Grana Monferrato',
    code: 'E134',
    province: 'AT'
  },
  {
    name: "Granarolo dell'Emilia",
    code: 'E136',
    province: 'BO'
  },
  {
    name: 'Grandate',
    code: 'E139',
    province: 'CO'
  },
  {
    name: 'Grandola ed Uniti',
    code: 'E141',
    province: 'CO'
  },
  {
    name: 'Graniti',
    code: 'E142',
    province: 'ME'
  },
  {
    name: 'Granozzo con Monticello',
    code: 'E143',
    province: 'NO'
  },
  {
    name: 'Grantola',
    code: 'E144',
    province: 'VA'
  },
  {
    name: 'Grantorto',
    code: 'E145',
    province: 'PD'
  },
  {
    name: 'Granze',
    code: 'E146',
    province: 'PD'
  },
  {
    name: 'Grassano',
    code: 'E147',
    province: 'MT'
  },
  {
    name: 'Grassobbio',
    code: 'E148',
    province: 'BG'
  },
  {
    name: 'Gratteri',
    code: 'E149',
    province: 'PA'
  },
  {
    name: 'Gravellona Lomellina',
    code: 'E152',
    province: 'PV'
  },
  {
    name: 'Gravellona Toce',
    code: 'E153',
    province: 'VB'
  },
  {
    name: 'Gravere',
    code: 'E154',
    province: 'TO'
  },
  {
    name: 'Gravina in Puglia',
    code: 'E155',
    province: 'BA'
  },
  {
    name: 'Gravina di Catania',
    code: 'E156',
    province: 'CT'
  },
  {
    name: 'Grazzanise',
    code: 'E158',
    province: 'CE'
  },
  {
    name: 'Grazzano Badoglio',
    code: 'E159',
    province: 'AT'
  },
  {
    name: 'Greccio',
    code: 'E160',
    province: 'RI'
  },
  {
    name: 'Greci',
    code: 'E161',
    province: 'AV'
  },
  {
    name: 'Greggio',
    code: 'E163',
    province: 'VC'
  },
  {
    name: 'Gremiasco',
    code: 'E164',
    province: 'AL'
  },
  {
    name: 'Gressan',
    code: 'E165',
    province: 'AO'
  },
  {
    name: 'Gressoney-La-Trinité',
    code: 'E167',
    province: 'AO'
  },
  {
    name: 'Gressoney-Saint-Jean',
    code: 'E168',
    province: 'AO'
  },
  {
    name: 'Greve in Chianti',
    code: 'E169',
    province: 'FI'
  },
  {
    name: 'Grezzago',
    code: 'E170',
    province: 'MI'
  },
  {
    name: 'Grezzana',
    code: 'E171',
    province: 'VR'
  },
  {
    name: 'Griante',
    code: 'E172',
    province: 'CO'
  },
  {
    name: 'Gricignano di Aversa',
    code: 'E173',
    province: 'CE'
  },
  {
    name: 'Grignasco',
    code: 'E177',
    province: 'NO'
  },
  {
    name: 'Grigno',
    code: 'E178',
    province: 'TN'
  },
  {
    name: 'Grimacco',
    code: 'E179',
    province: 'UD'
  },
  {
    name: 'Grimaldi',
    code: 'E180',
    province: 'CS'
  },
  {
    name: 'Grinzane Cavour',
    code: 'E182',
    province: 'CN'
  },
  {
    name: 'Grisignano di Zocco',
    code: 'E184',
    province: 'VI'
  },
  {
    name: 'Grisolia',
    code: 'E185',
    province: 'CS'
  },
  {
    name: 'Grizzana Morandi',
    code: 'E187',
    province: 'BO'
  },
  {
    name: 'Grognardo',
    code: 'E188',
    province: 'AL'
  },
  {
    name: 'Gromo',
    code: 'E189',
    province: 'BG'
  },
  {
    name: 'Grondona',
    code: 'E191',
    province: 'AL'
  },
  {
    name: 'Grone',
    code: 'E192',
    province: 'BG'
  },
  {
    name: 'Grontardo',
    code: 'E193',
    province: 'CR'
  },
  {
    name: 'Gropello Cairoli',
    code: 'E195',
    province: 'PV'
  },
  {
    name: 'Gropparello',
    code: 'E196',
    province: 'PC'
  },
  {
    name: 'Groscavallo',
    code: 'E199',
    province: 'TO'
  },
  {
    name: 'Grosio',
    code: 'E200',
    province: 'SO'
  },
  {
    name: 'Grosotto',
    code: 'E201',
    province: 'SO'
  },
  {
    name: 'Grosseto',
    code: 'E202',
    province: 'GR'
  },
  {
    name: 'Grosso',
    code: 'E203',
    province: 'TO'
  },
  {
    name: 'Grottaferrata',
    code: 'E204',
    province: 'RM'
  },
  {
    name: 'Grottaglie',
    code: 'E205',
    province: 'TA'
  },
  {
    name: 'Grottaminarda',
    code: 'E206',
    province: 'AV'
  },
  {
    name: 'Grottammare',
    code: 'E207',
    province: 'AP'
  },
  {
    name: 'Grottazzolina',
    code: 'E208',
    province: 'FM'
  },
  {
    name: 'Grotte',
    code: 'E209',
    province: 'AG'
  },
  {
    name: 'Grotte di Castro',
    code: 'E210',
    province: 'VT'
  },
  {
    name: 'Grotteria',
    code: 'E212',
    province: 'RC'
  },
  {
    name: 'Grottole',
    code: 'E213',
    province: 'MT'
  },
  {
    name: 'Grottolella',
    code: 'E214',
    province: 'AV'
  },
  {
    name: 'Gruaro',
    code: 'E215',
    province: 'VE'
  },
  {
    name: 'Grugliasco',
    code: 'E216',
    province: 'TO'
  },
  {
    name: 'Grumello Cremonese ed Uniti',
    code: 'E217',
    province: 'CR'
  },
  {
    name: 'Grumello del Monte',
    code: 'E219',
    province: 'BG'
  },
  {
    name: 'Grumento Nova',
    code: 'E221',
    province: 'PZ'
  },
  {
    name: 'Grumo Appula',
    code: 'E223',
    province: 'BA'
  },
  {
    name: 'Grumo Nevano',
    code: 'E224',
    province: 'NA'
  },
  {
    name: 'Grumolo delle Abbadesse',
    code: 'E226',
    province: 'VI'
  },
  {
    name: 'Guagnano',
    code: 'E227',
    province: 'LE'
  },
  {
    name: 'Gualdo',
    code: 'E228',
    province: 'MC'
  },
  {
    name: 'Gualdo Cattaneo',
    code: 'E229',
    province: 'PG'
  },
  {
    name: 'Gualdo Tadino',
    code: 'E230',
    province: 'PG'
  },
  {
    name: 'Gualtieri',
    code: 'E232',
    province: 'RE'
  },
  {
    name: 'Gualtieri Sicaminò',
    code: 'E233',
    province: 'ME'
  },
  {
    name: 'Guamaggiore',
    code: 'E234',
    province: 'SU'
  },
  {
    name: 'Guanzate',
    code: 'E235',
    province: 'CO'
  },
  {
    name: 'Guarcino',
    code: 'E236',
    province: 'FR'
  },
  {
    name: 'Guardabosone',
    code: 'E237',
    province: 'VC'
  },
  {
    name: 'Guardamiglio',
    code: 'E238',
    province: 'LO'
  },
  {
    name: 'Guardavalle',
    code: 'E239',
    province: 'CZ'
  },
  {
    name: 'Guarda Veneta',
    code: 'E240',
    province: 'RO'
  },
  {
    name: 'Guardea',
    code: 'E241',
    province: 'TR'
  },
  {
    name: 'Guardia Piemontese',
    code: 'E242',
    province: 'CS'
  },
  {
    name: 'Guardiagrele',
    code: 'E243',
    province: 'CH'
  },
  {
    name: 'Guardialfiera',
    code: 'E244',
    province: 'CB'
  },
  {
    name: 'Guardia Lombardi',
    code: 'E245',
    province: 'AV'
  },
  {
    name: 'Guardia Perticara',
    code: 'E246',
    province: 'PZ'
  },
  {
    name: 'Guardiaregia',
    code: 'E248',
    province: 'CB'
  },
  {
    name: 'Guardia Sanframondi',
    code: 'E249',
    province: 'BN'
  },
  {
    name: 'Guardistallo',
    code: 'E250',
    province: 'PI'
  },
  {
    name: 'Guarene',
    code: 'E251',
    province: 'CN'
  },
  {
    name: 'Guasila',
    code: 'E252',
    province: 'SU'
  },
  {
    name: 'Guastalla',
    code: 'E253',
    province: 'RE'
  },
  {
    name: 'Guazzora',
    code: 'E255',
    province: 'AL'
  },
  {
    name: 'Gubbio',
    code: 'E256',
    province: 'PG'
  },
  {
    name: 'Gudo Visconti',
    code: 'E258',
    province: 'MI'
  },
  {
    name: 'Guglionesi',
    code: 'E259',
    province: 'CB'
  },
  {
    name: 'Guidizzolo',
    code: 'E261',
    province: 'MN'
  },
  {
    name: 'Guidonia Montecelio',
    code: 'E263',
    province: 'RM'
  },
  {
    name: 'Guiglia',
    code: 'E264',
    province: 'MO'
  },
  {
    name: 'Siziano',
    code: 'E265',
    province: 'PV'
  },
  {
    name: 'Guilmi',
    code: 'E266',
    province: 'CH'
  },
  {
    name: 'Gurro',
    code: 'E269',
    province: 'VB'
  },
  {
    name: 'Guspini',
    code: 'E270',
    province: 'SU'
  },
  {
    name: 'Gussago',
    code: 'E271',
    province: 'BS'
  },
  {
    name: 'Gussola',
    code: 'E272',
    province: 'CR'
  },
  {
    name: 'Hône',
    code: 'E273',
    province: 'AO'
  },
  {
    name: 'Jacurso',
    code: 'E274',
    province: 'CZ'
  },
  {
    name: 'Idro',
    code: 'E280',
    province: 'BS'
  },
  {
    name: 'Iglesias',
    code: 'E281',
    province: 'SU'
  },
  {
    name: 'Igliano',
    code: 'E282',
    province: 'CN'
  },
  {
    name: 'Ilbono',
    code: 'E283',
    province: 'NU'
  },
  {
    name: 'Illasi',
    code: 'E284',
    province: 'VR'
  },
  {
    name: 'Illorai',
    code: 'E285',
    province: 'SS'
  },
  {
    name: 'Imbersago',
    code: 'E287',
    province: 'LC'
  },
  {
    name: 'Imer',
    code: 'E288',
    province: 'TN'
  },
  {
    name: 'Imola',
    code: 'E289',
    province: 'BO'
  },
  {
    name: 'Imperia',
    code: 'E290',
    province: 'IM'
  },
  {
    name: 'Impruneta',
    code: 'E291',
    province: 'FI'
  },
  {
    name: 'Inarzo',
    code: 'E292',
    province: 'VA'
  },
  {
    name: 'Incisa Scapaccino',
    code: 'E295',
    province: 'AT'
  },
  {
    name: 'Incudine',
    code: 'E297',
    province: 'BS'
  },
  {
    name: 'Induno Olona',
    code: 'E299',
    province: 'VA'
  },
  {
    name: 'Ingria',
    code: 'E301',
    province: 'TO'
  },
  {
    name: 'Intragna',
    code: 'E304',
    province: 'VB'
  },
  {
    name: 'Introbio',
    code: 'E305',
    province: 'LC'
  },
  {
    name: 'Introd',
    code: 'E306',
    province: 'AO'
  },
  {
    name: 'Introdacqua',
    code: 'E307',
    province: 'AQ'
  },
  {
    name: 'Inverigo',
    code: 'E309',
    province: 'CO'
  },
  {
    name: 'Inverno e Monteleone',
    code: 'E310',
    province: 'PV'
  },
  {
    name: 'Inverso Pinasca',
    code: 'E311',
    province: 'TO'
  },
  {
    name: 'Inveruno',
    code: 'E313',
    province: 'MI'
  },
  {
    name: 'Invorio',
    code: 'E314',
    province: 'NO'
  },
  {
    name: 'Inzago',
    code: 'E317',
    province: 'MI'
  },
  {
    name: 'Jolanda di Savoia',
    code: 'E320',
    province: 'FE'
  },
  {
    name: 'Jonadi',
    code: 'E321',
    province: 'VV'
  },
  {
    name: 'Irgoli',
    code: 'E323',
    province: 'NU'
  },
  {
    name: 'Irma',
    code: 'E325',
    province: 'BS'
  },
  {
    name: 'Irsina',
    code: 'E326',
    province: 'MT'
  },
  {
    name: 'Isasca',
    code: 'E327',
    province: 'CN'
  },
  {
    name: 'Isca sullo Ionio',
    code: 'E328',
    province: 'CZ'
  },
  {
    name: 'Ischia',
    code: 'E329',
    province: 'NA'
  },
  {
    name: 'Ischia di Castro',
    code: 'E330',
    province: 'VT'
  },
  {
    name: 'Ischitella',
    code: 'E332',
    province: 'FG'
  },
  {
    name: 'Iseo',
    code: 'E333',
    province: 'BS'
  },
  {
    name: 'Isera',
    code: 'E334',
    province: 'TN'
  },
  {
    name: 'Isernia',
    code: 'E335',
    province: 'IS'
  },
  {
    name: 'Isili',
    code: 'E336',
    province: 'SU'
  },
  {
    name: 'Isnello',
    code: 'E337',
    province: 'PA'
  },
  {
    name: "Isola d'Asti",
    code: 'E338',
    province: 'AT'
  },
  {
    name: 'Isola di Capo Rizzuto',
    code: 'E339',
    province: 'KR'
  },
  {
    name: 'Isola del Liri',
    code: 'E340',
    province: 'FR'
  },
  {
    name: 'Isola del Cantone',
    code: 'E341',
    province: 'GE'
  },
  {
    name: 'Madesimo',
    code: 'E342',
    province: 'SO'
  },
  {
    name: "Isola del Gran Sasso d'Italia",
    code: 'E343',
    province: 'TE'
  },
  {
    name: 'Isolabella',
    code: 'E345',
    province: 'TO'
  },
  {
    name: 'Isolabona',
    code: 'E346',
    province: 'IM'
  },
  {
    name: 'Isola del Giglio',
    code: 'E348',
    province: 'GR'
  },
  {
    name: 'Isola della Scala',
    code: 'E349',
    province: 'VR'
  },
  {
    name: 'Isola delle Femmine',
    code: 'E350',
    province: 'PA'
  },
  {
    name: 'Isola del Piano',
    code: 'E351',
    province: 'PU'
  },
  {
    name: 'Isola di Fondra',
    code: 'E353',
    province: 'BG'
  },
  {
    name: 'Isola Vicentina',
    code: 'E354',
    province: 'VI'
  },
  {
    name: 'Isola Dovarese',
    code: 'E356',
    province: 'CR'
  },
  {
    name: 'Isola Rizza',
    code: 'E358',
    province: 'VR'
  },
  {
    name: "Isola Sant'Antonio",
    code: 'E360',
    province: 'AL'
  },
  {
    name: 'Isole Tremiti',
    code: 'E363',
    province: 'FG'
  },
  {
    name: 'Isorella',
    code: 'E364',
    province: 'BS'
  },
  {
    name: 'Ispani',
    code: 'E365',
    province: 'SA'
  },
  {
    name: 'Ispica',
    code: 'E366',
    province: 'RG'
  },
  {
    name: 'Ispra',
    code: 'E367',
    province: 'VA'
  },
  {
    name: 'Issiglio',
    code: 'E368',
    province: 'TO'
  },
  {
    name: 'Issime',
    code: 'E369',
    province: 'AO'
  },
  {
    name: 'Isso',
    code: 'E370',
    province: 'BG'
  },
  {
    name: 'Issogne',
    code: 'E371',
    province: 'AO'
  },
  {
    name: 'Vasto',
    code: 'E372',
    province: 'CH'
  },
  {
    name: 'Istrana',
    code: 'E373',
    province: 'TV'
  },
  {
    name: 'Itala',
    code: 'E374',
    province: 'ME'
  },
  {
    name: 'Itri',
    code: 'E375',
    province: 'LT'
  },
  {
    name: 'Ittireddu',
    code: 'E376',
    province: 'SS'
  },
  {
    name: 'Ittiri',
    code: 'E377',
    province: 'SS'
  },
  {
    name: 'Ivrea',
    code: 'E379',
    province: 'TO'
  },
  {
    name: 'Izano',
    code: 'E380',
    province: 'CR'
  },
  {
    name: 'Jelsi',
    code: 'E381',
    province: 'CB'
  },
  {
    name: 'Jenne',
    code: 'E382',
    province: 'RM'
  },
  {
    name: 'Jerago con Orago',
    code: 'E386',
    province: 'VA'
  },
  {
    name: 'Jerzu',
    code: 'E387',
    province: 'NU'
  },
  {
    name: 'Jesi',
    code: 'E388',
    province: 'AN'
  },
  {
    name: 'Joppolo',
    code: 'E389',
    province: 'VV'
  },
  {
    name: 'Joppolo Giancaxio',
    code: 'E390',
    province: 'AG'
  },
  {
    name: 'Jovençan',
    code: 'E391',
    province: 'AO'
  },
  {
    name: 'Labico',
    code: 'E392',
    province: 'RM'
  },
  {
    name: 'Labro',
    code: 'E393',
    province: 'RI'
  },
  {
    name: 'La Cassa',
    code: 'E394',
    province: 'TO'
  },
  {
    name: 'Lacchiarella',
    code: 'E395',
    province: 'MI'
  },
  {
    name: 'Lacco Ameno',
    code: 'E396',
    province: 'NA'
  },
  {
    name: 'Lacedonia',
    code: 'E397',
    province: 'AV'
  },
  {
    name: 'Laces/Latsch',
    italianName: 'Laces',
    foreignName: 'Latsch',
    code: 'E398',
    province: 'BZ'
  },
  {
    name: 'Laconi',
    code: 'E400',
    province: 'OR'
  },
  {
    name: 'Laerru',
    code: 'E401',
    province: 'SS'
  },
  {
    name: 'Laganadi',
    code: 'E402',
    province: 'RC'
  },
  {
    name: 'Laghi',
    code: 'E403',
    province: 'VI'
  },
  {
    name: 'Laglio',
    code: 'E405',
    province: 'CO'
  },
  {
    name: 'Lagnasco',
    code: 'E406',
    province: 'CN'
  },
  {
    name: 'Lago',
    code: 'E407',
    province: 'CS'
  },
  {
    name: 'Lagonegro',
    code: 'E409',
    province: 'PZ'
  },
  {
    name: 'Lagosanto',
    code: 'E410',
    province: 'FE'
  },
  {
    name: 'Lagundo/Algund',
    italianName: 'Lagundo',
    foreignName: 'Algund',
    code: 'E412',
    province: 'BZ'
  },
  {
    name: 'Lajatico',
    code: 'E413',
    province: 'PI'
  },
  {
    name: 'Laigueglia',
    code: 'E414',
    province: 'SV'
  },
  {
    name: 'Lainate',
    code: 'E415',
    province: 'MI'
  },
  {
    name: 'Laino',
    code: 'E416',
    province: 'CO'
  },
  {
    name: 'Laino Borgo',
    code: 'E417',
    province: 'CS'
  },
  {
    name: 'Laino Castello',
    code: 'E419',
    province: 'CS'
  },
  {
    name: 'Laion/Lajen',
    italianName: 'Laion',
    foreignName: 'Lajen',
    code: 'E420',
    province: 'BZ'
  },
  {
    name: 'Laives/Leifers',
    italianName: 'Laives',
    foreignName: 'Leifers',
    code: 'E421',
    province: 'BZ'
  },
  {
    name: 'Lallio',
    code: 'E422',
    province: 'BG'
  },
  {
    name: 'La Loggia',
    code: 'E423',
    province: 'TO'
  },
  {
    name: 'Lama dei Peligni',
    code: 'E424',
    province: 'CH'
  },
  {
    name: 'La Maddalena',
    code: 'E425',
    province: 'SS'
  },
  {
    name: 'Lama Mocogno',
    code: 'E426',
    province: 'MO'
  },
  {
    name: 'Lambrugo',
    code: 'E428',
    province: 'CO'
  },
  {
    name: 'Lamon',
    code: 'E429',
    province: 'BL'
  },
  {
    name: 'La Morra',
    code: 'E430',
    province: 'CN'
  },
  {
    name: 'Lampedusa e Linosa',
    code: 'E431',
    province: 'AG'
  },
  {
    name: 'Lamporecchio',
    code: 'E432',
    province: 'PT'
  },
  {
    name: 'Lamporo',
    code: 'E433',
    province: 'VC'
  },
  {
    name: 'Lana/Lana',
    italianName: 'Lana',
    foreignName: 'Lana',
    code: 'E434',
    province: 'BZ'
  },
  {
    name: 'Lanciano',
    code: 'E435',
    province: 'CH'
  },
  {
    name: 'Landiona',
    code: 'E436',
    province: 'NO'
  },
  {
    name: 'Landriano',
    code: 'E437',
    province: 'PV'
  },
  {
    name: 'Langhirano',
    code: 'E438',
    province: 'PR'
  },
  {
    name: 'Langosco',
    code: 'E439',
    province: 'PV'
  },
  {
    name: 'Lanusei',
    code: 'E441',
    province: 'NU'
  },
  {
    name: 'Lanzada',
    code: 'E443',
    province: 'SO'
  },
  {
    name: 'Lanzo Torinese',
    code: 'E445',
    province: 'TO'
  },
  {
    name: 'Lapedona',
    code: 'E447',
    province: 'FM'
  },
  {
    name: 'Lapio',
    code: 'E448',
    province: 'AV'
  },
  {
    name: 'Lappano',
    code: 'E450',
    province: 'CS'
  },
  {
    name: 'Larciano',
    code: 'E451',
    province: 'PT'
  },
  {
    name: 'Lardirago',
    code: 'E454',
    province: 'PV'
  },
  {
    name: 'Larino',
    code: 'E456',
    province: 'CB'
  },
  {
    name: 'Lasa/Laas',
    italianName: 'Lasa',
    foreignName: 'Laas',
    code: 'E457',
    province: 'BZ'
  },
  {
    name: 'La Salle',
    code: 'E458',
    province: 'AO'
  },
  {
    name: 'Lascari',
    code: 'E459',
    province: 'PA'
  },
  {
    name: 'Lasnigo',
    code: 'E462',
    province: 'CO'
  },
  {
    name: 'La Spezia',
    code: 'E463',
    province: 'SP'
  },
  {
    name: 'Las Plassas',
    code: 'E464',
    province: 'SU'
  },
  {
    name: 'Lastebasse',
    code: 'E465',
    province: 'VI'
  },
  {
    name: 'Lastra a Signa',
    code: 'E466',
    province: 'FI'
  },
  {
    name: 'Latera',
    code: 'E467',
    province: 'VT'
  },
  {
    name: 'Laterza',
    code: 'E469',
    province: 'TA'
  },
  {
    name: 'La Thuile',
    code: 'E470',
    province: 'AO'
  },
  {
    name: 'Latiano',
    code: 'E471',
    province: 'BR'
  },
  {
    name: 'Latina',
    code: 'E472',
    province: 'LT'
  },
  {
    name: 'Latisana',
    code: 'E473',
    province: 'UD'
  },
  {
    name: 'Latronico',
    code: 'E474',
    province: 'PZ'
  },
  {
    name: 'Lattarico',
    code: 'E475',
    province: 'CS'
  },
  {
    name: 'Lauco',
    code: 'E476',
    province: 'UD'
  },
  {
    name: 'Laureana di Borrello',
    code: 'E479',
    province: 'RC'
  },
  {
    name: 'Laureana Cilento',
    code: 'E480',
    province: 'SA'
  },
  {
    name: 'Lauregno/Laurein',
    italianName: 'Lauregno',
    foreignName: 'Laurein',
    code: 'E481',
    province: 'BZ'
  },
  {
    name: 'Laurenzana',
    code: 'E482',
    province: 'PZ'
  },
  {
    name: 'Lauria',
    code: 'E483',
    province: 'PZ'
  },
  {
    name: 'Lauriano',
    code: 'E484',
    province: 'TO'
  },
  {
    name: 'Laurino',
    code: 'E485',
    province: 'SA'
  },
  {
    name: 'Laurito',
    code: 'E486',
    province: 'SA'
  },
  {
    name: 'Lauro',
    code: 'E487',
    province: 'AV'
  },
  {
    name: 'Lavagna',
    code: 'E488',
    province: 'GE'
  },
  {
    name: 'Lavagno',
    code: 'E489',
    province: 'VR'
  },
  {
    name: 'La Valle Agordina',
    code: 'E490',
    province: 'BL'
  },
  {
    name: 'La Valle/Wengen',
    italianName: 'La Valle',
    foreignName: 'Wengen',
    code: 'E491',
    province: 'BZ'
  },
  {
    name: 'Lavarone',
    code: 'E492',
    province: 'TN'
  },
  {
    name: 'Lavello',
    code: 'E493',
    province: 'PZ'
  },
  {
    name: 'Lavena Ponte Tresa',
    code: 'E494',
    province: 'VA'
  },
  {
    name: 'Laveno-Mombello',
    code: 'E496',
    province: 'VA'
  },
  {
    name: 'Lavenone',
    code: 'E497',
    province: 'BS'
  },
  {
    name: 'Laviano',
    code: 'E498',
    province: 'SA'
  },
  {
    name: 'Lavis',
    code: 'E500',
    province: 'TN'
  },
  {
    name: 'Lazise',
    code: 'E502',
    province: 'VR'
  },
  {
    name: 'Lazzate',
    code: 'E504',
    province: 'MB'
  },
  {
    name: 'Lecce nei Marsi',
    code: 'E505',
    province: 'AQ'
  },
  {
    name: 'Lecce',
    code: 'E506',
    province: 'LE'
  },
  {
    name: 'Lecco',
    code: 'E507',
    province: 'LC'
  },
  {
    name: 'Leffe',
    code: 'E509',
    province: 'BG'
  },
  {
    name: 'Leggiuno',
    code: 'E510',
    province: 'VA'
  },
  {
    name: 'Legnago',
    code: 'E512',
    province: 'VR'
  },
  {
    name: 'Legnano',
    code: 'E514',
    province: 'MI'
  },
  {
    name: 'Legnaro',
    code: 'E515',
    province: 'PD'
  },
  {
    name: 'Lei',
    code: 'E517',
    province: 'NU'
  },
  {
    name: 'Leini',
    code: 'E518',
    province: 'TO'
  },
  {
    name: 'Leivi',
    code: 'E519',
    province: 'GE'
  },
  {
    name: 'Lemie',
    code: 'E520',
    province: 'TO'
  },
  {
    name: 'Lendinara',
    code: 'E522',
    province: 'RO'
  },
  {
    name: 'Leni',
    code: 'E523',
    province: 'ME'
  },
  {
    name: 'Lenna',
    code: 'E524',
    province: 'BG'
  },
  {
    name: 'Leno',
    code: 'E526',
    province: 'BS'
  },
  {
    name: 'Lenola',
    code: 'E527',
    province: 'LT'
  },
  {
    name: 'Lenta',
    code: 'E528',
    province: 'VC'
  },
  {
    name: 'Lentate sul Seveso',
    code: 'E530',
    province: 'MB'
  },
  {
    name: 'Lentella',
    code: 'E531',
    province: 'CH'
  },
  {
    name: 'Lentini',
    code: 'E532',
    province: 'SR'
  },
  {
    name: 'Leonessa',
    code: 'E535',
    province: 'RI'
  },
  {
    name: 'Leonforte',
    code: 'E536',
    province: 'EN'
  },
  {
    name: 'Leporano',
    code: 'E537',
    province: 'TA'
  },
  {
    name: 'Lequile',
    code: 'E538',
    province: 'LE'
  },
  {
    name: 'Lequio Tanaro',
    code: 'E539',
    province: 'CN'
  },
  {
    name: 'Lequio Berria',
    code: 'E540',
    province: 'CN'
  },
  {
    name: 'Lercara Friddi',
    code: 'E541',
    province: 'PA'
  },
  {
    name: 'Lerici',
    code: 'E542',
    province: 'SP'
  },
  {
    name: 'Lerma',
    code: 'E543',
    province: 'AL'
  },
  {
    name: 'Lesa',
    code: 'E544',
    province: 'NO'
  },
  {
    name: 'Lesegno',
    code: 'E546',
    province: 'CN'
  },
  {
    name: "Lesignano de' Bagni",
    code: 'E547',
    province: 'PR'
  },
  {
    name: 'Terenzo',
    code: 'E548',
    province: 'PR'
  },
  {
    name: 'Lesina',
    code: 'E549',
    province: 'FG'
  },
  {
    name: 'Lesmo',
    code: 'E550',
    province: 'MB'
  },
  {
    name: 'Lessolo',
    code: 'E551',
    province: 'TO'
  },
  {
    name: 'Lestizza',
    code: 'E553',
    province: 'UD'
  },
  {
    name: 'Letino',
    code: 'E554',
    province: 'CE'
  },
  {
    name: 'Letojanni',
    code: 'E555',
    province: 'ME'
  },
  {
    name: 'Lettere',
    code: 'E557',
    province: 'NA'
  },
  {
    name: 'Lettomanoppello',
    code: 'E558',
    province: 'PE'
  },
  {
    name: 'Lettopalena',
    code: 'E559',
    province: 'CH'
  },
  {
    name: 'Levanto',
    code: 'E560',
    province: 'SP'
  },
  {
    name: 'Levate',
    code: 'E562',
    province: 'BG'
  },
  {
    name: 'Leverano',
    code: 'E563',
    province: 'LE'
  },
  {
    name: 'Levice',
    code: 'E564',
    province: 'CN'
  },
  {
    name: 'Levico Terme',
    code: 'E565',
    province: 'TN'
  },
  {
    name: 'Levone',
    code: 'E566',
    province: 'TO'
  },
  {
    name: 'Lezzeno',
    code: 'E569',
    province: 'CO'
  },
  {
    name: 'Liberi',
    code: 'E570',
    province: 'CE'
  },
  {
    name: 'Librizzi',
    code: 'E571',
    province: 'ME'
  },
  {
    name: 'Licata',
    code: 'E573',
    province: 'AG'
  },
  {
    name: 'Licciana Nardi',
    code: 'E574',
    province: 'MS'
  },
  {
    name: 'Licenza',
    code: 'E576',
    province: 'RM'
  },
  {
    name: 'Licodia Eubea',
    code: 'E578',
    province: 'CT'
  },
  {
    name: 'Lierna',
    code: 'E581',
    province: 'LC'
  },
  {
    name: 'Lignana',
    code: 'E583',
    province: 'VC'
  },
  {
    name: 'Lignano Sabbiadoro',
    code: 'E584',
    province: 'UD'
  },
  {
    name: 'Lillianes',
    code: 'E587',
    province: 'AO'
  },
  {
    name: 'Limana',
    code: 'E588',
    province: 'BL'
  },
  {
    name: 'Limatola',
    code: 'E589',
    province: 'BN'
  },
  {
    name: 'Limbadi',
    code: 'E590',
    province: 'VV'
  },
  {
    name: 'Limbiate',
    code: 'E591',
    province: 'MB'
  },
  {
    name: 'Limena',
    code: 'E592',
    province: 'PD'
  },
  {
    name: 'Limido Comasco',
    code: 'E593',
    province: 'CO'
  },
  {
    name: 'Limina',
    code: 'E594',
    province: 'ME'
  },
  {
    name: 'Limone sul Garda',
    code: 'E596',
    province: 'BS'
  },
  {
    name: 'Limone Piemonte',
    code: 'E597',
    province: 'CN'
  },
  {
    name: 'Limosano',
    code: 'E599',
    province: 'CB'
  },
  {
    name: 'Linarolo',
    code: 'E600',
    province: 'PV'
  },
  {
    name: 'Linguaglossa',
    code: 'E602',
    province: 'CT'
  },
  {
    name: 'Lioni',
    code: 'E605',
    province: 'AV'
  },
  {
    name: 'Lipari',
    code: 'E606',
    province: 'ME'
  },
  {
    name: 'Lipomo',
    code: 'E607',
    province: 'CO'
  },
  {
    name: 'Lirio',
    code: 'E608',
    province: 'PV'
  },
  {
    name: 'Liscate',
    code: 'E610',
    province: 'MI'
  },
  {
    name: 'Liscia',
    code: 'E611',
    province: 'CH'
  },
  {
    name: 'Lisciano Niccone',
    code: 'E613',
    province: 'PG'
  },
  {
    name: 'Lisio',
    code: 'E615',
    province: 'CN'
  },
  {
    name: 'Lissone',
    code: 'E617',
    province: 'MB'
  },
  {
    name: 'Milena',
    code: 'E618',
    province: 'CL'
  },
  {
    name: 'Liveri',
    code: 'E620',
    province: 'NA'
  },
  {
    name: 'Livigno',
    code: 'E621',
    province: 'SO'
  },
  {
    name: 'Livinallongo del Col di Lana',
    code: 'E622',
    province: 'BL'
  },
  {
    name: 'Livo',
    code: 'E623',
    province: 'CO'
  },
  {
    name: 'Livo',
    code: 'E624',
    province: 'TN'
  },
  {
    name: 'Livorno',
    code: 'E625',
    province: 'LI'
  },
  {
    name: 'Livorno Ferraris',
    code: 'E626',
    province: 'VC'
  },
  {
    name: 'Livraga',
    code: 'E627',
    province: 'LO'
  },
  {
    name: 'Lizzanello',
    code: 'E629',
    province: 'LE'
  },
  {
    name: 'Lizzano',
    code: 'E630',
    province: 'TA'
  },
  {
    name: 'Loano',
    code: 'E632',
    province: 'SV'
  },
  {
    name: 'Loazzolo',
    code: 'E633',
    province: 'AT'
  },
  {
    name: 'Locana',
    code: 'E635',
    province: 'TO'
  },
  {
    name: 'Locate Varesino',
    code: 'E638',
    province: 'CO'
  },
  {
    name: 'Locate di Triulzi',
    code: 'E639',
    province: 'MI'
  },
  {
    name: 'Locatello',
    code: 'E640',
    province: 'BG'
  },
  {
    name: 'Loceri',
    code: 'E644',
    province: 'NU'
  },
  {
    name: 'Locorotondo',
    code: 'E645',
    province: 'BA'
  },
  {
    name: 'Loculi',
    code: 'E646',
    province: 'NU'
  },
  {
    name: 'Lodè',
    code: 'E647',
    province: 'NU'
  },
  {
    name: 'Lodi',
    code: 'E648',
    province: 'LO'
  },
  {
    name: 'Lodine',
    code: 'E649',
    province: 'NU'
  },
  {
    name: 'Lodi Vecchio',
    code: 'E651',
    province: 'LO'
  },
  {
    name: 'Lodrino',
    code: 'E652',
    province: 'BS'
  },
  {
    name: 'Lograto',
    code: 'E654',
    province: 'BS'
  },
  {
    name: 'Loiano',
    code: 'E655',
    province: 'BO'
  },
  {
    name: 'Lomagna',
    code: 'E656',
    province: 'LC'
  },
  {
    name: 'Lomazzo',
    code: 'E659',
    province: 'CO'
  },
  {
    name: 'Lombardore',
    code: 'E660',
    province: 'TO'
  },
  {
    name: 'Lombriasco',
    code: 'E661',
    province: 'TO'
  },
  {
    name: 'Lomello',
    code: 'E662',
    province: 'PV'
  },
  {
    name: 'Lona-Lases',
    code: 'E664',
    province: 'TN'
  },
  {
    name: 'Lonate Ceppino',
    code: 'E665',
    province: 'VA'
  },
  {
    name: 'Lonate Pozzolo',
    code: 'E666',
    province: 'VA'
  },
  {
    name: 'Londa',
    code: 'E668',
    province: 'FI'
  },
  {
    name: 'Longano',
    code: 'E669',
    province: 'IS'
  },
  {
    name: 'Longare',
    code: 'E671',
    province: 'VI'
  },
  {
    name: 'Longhena',
    code: 'E673',
    province: 'BS'
  },
  {
    name: 'Longi',
    code: 'E674',
    province: 'ME'
  },
  {
    name: 'Longiano',
    code: 'E675',
    province: 'FC'
  },
  {
    name: 'Longobardi',
    code: 'E677',
    province: 'CS'
  },
  {
    name: 'Longobucco',
    code: 'E678',
    province: 'CS'
  },
  {
    name: 'Longone al Segrino',
    code: 'E679',
    province: 'CO'
  },
  {
    name: 'Porto Azzurro',
    code: 'E680',
    province: 'LI'
  },
  {
    name: 'Longone Sabino',
    code: 'E681',
    province: 'RI'
  },
  {
    name: 'Lonigo',
    code: 'E682',
    province: 'VI'
  },
  {
    name: 'Loranzè',
    code: 'E683',
    province: 'TO'
  },
  {
    name: 'Loreggia',
    code: 'E684',
    province: 'PD'
  },
  {
    name: 'Loreglia',
    code: 'E685',
    province: 'VB'
  },
  {
    name: 'Lorenzago di Cadore',
    code: 'E687',
    province: 'BL'
  },
  {
    name: 'Loreo',
    code: 'E689',
    province: 'RO'
  },
  {
    name: 'Loreto',
    code: 'E690',
    province: 'AN'
  },
  {
    name: 'Loreto Aprutino',
    code: 'E691',
    province: 'PE'
  },
  {
    name: 'Loria',
    code: 'E692',
    province: 'TV'
  },
  {
    name: 'Loro Ciuffenna',
    code: 'E693',
    province: 'AR'
  },
  {
    name: 'Loro Piceno',
    code: 'E694',
    province: 'MC'
  },
  {
    name: 'Lorsica',
    code: 'E695',
    province: 'GE'
  },
  {
    name: 'Losine',
    code: 'E698',
    province: 'BS'
  },
  {
    name: 'Lotzorai',
    code: 'E700',
    province: 'NU'
  },
  {
    name: 'Lovere',
    code: 'E704',
    province: 'BG'
  },
  {
    name: 'Lovero',
    code: 'E705',
    province: 'SO'
  },
  {
    name: 'Lozio',
    code: 'E706',
    province: 'BS'
  },
  {
    name: 'Lozza',
    code: 'E707',
    province: 'VA'
  },
  {
    name: 'Lozzo di Cadore',
    code: 'E708',
    province: 'BL'
  },
  {
    name: 'Lozzo Atestino',
    code: 'E709',
    province: 'PD'
  },
  {
    name: 'Lozzolo',
    code: 'E711',
    province: 'VC'
  },
  {
    name: 'Lubriano',
    code: 'E713',
    province: 'VT'
  },
  {
    name: 'Lucca Sicula',
    code: 'E714',
    province: 'AG'
  },
  {
    name: 'Lucca',
    code: 'E715',
    province: 'LU'
  },
  {
    name: 'Lucera',
    code: 'E716',
    province: 'FG'
  },
  {
    name: 'Lucignano',
    code: 'E718',
    province: 'AR'
  },
  {
    name: 'Lucinasco',
    code: 'E719',
    province: 'IM'
  },
  {
    name: 'Lucito',
    code: 'E722',
    province: 'CB'
  },
  {
    name: 'Luco dei Marsi',
    code: 'E723',
    province: 'AQ'
  },
  {
    name: 'Lucoli',
    code: 'E724',
    province: 'AQ'
  },
  {
    name: "Lugagnano Val d'Arda",
    code: 'E726',
    province: 'PC'
  },
  {
    name: 'Lugnano in Teverina',
    code: 'E729',
    province: 'TR'
  },
  {
    name: 'Lugo',
    code: 'E730',
    province: 'RA'
  },
  {
    name: 'Lugo di Vicenza',
    code: 'E731',
    province: 'VI'
  },
  {
    name: 'Luino',
    code: 'E734',
    province: 'VA'
  },
  {
    name: 'Luisago',
    code: 'E735',
    province: 'CO'
  },
  {
    name: 'Lula',
    code: 'E736',
    province: 'NU'
  },
  {
    name: 'Lumarzo',
    code: 'E737',
    province: 'GE'
  },
  {
    name: 'Lumezzane',
    code: 'E738',
    province: 'BS'
  },
  {
    name: 'Lunamatrona',
    code: 'E742',
    province: 'SU'
  },
  {
    name: 'Lunano',
    code: 'E743',
    province: 'PU'
  },
  {
    name: 'Lungro',
    code: 'E745',
    province: 'CS'
  },
  {
    name: 'Luogosano',
    code: 'E746',
    province: 'AV'
  },
  {
    name: 'Luogosanto',
    code: 'E747',
    province: 'SS'
  },
  {
    name: 'Lupara',
    code: 'E748',
    province: 'CB'
  },
  {
    name: "Lurago d'Erba",
    code: 'E749',
    province: 'CO'
  },
  {
    name: 'Lurago Marinone',
    code: 'E750',
    province: 'CO'
  },
  {
    name: 'Lurano',
    code: 'E751',
    province: 'BG'
  },
  {
    name: 'Luras',
    code: 'E752',
    province: 'SS'
  },
  {
    name: 'Lurate Caccivio',
    code: 'E753',
    province: 'CO'
  },
  {
    name: 'Lusciano',
    code: 'E754',
    province: 'CE'
  },
  {
    name: 'Luserna',
    code: 'E757',
    province: 'TN'
  },
  {
    name: 'Luserna San Giovanni',
    code: 'E758',
    province: 'TO'
  },
  {
    name: 'Lusernetta',
    code: 'E759',
    province: 'TO'
  },
  {
    name: 'Lusevera',
    code: 'E760',
    province: 'UD'
  },
  {
    name: 'Lusia',
    code: 'E761',
    province: 'RO'
  },
  {
    name: 'Lusigliè',
    code: 'E763',
    province: 'TO'
  },
  {
    name: 'Luson/Lüsen',
    italianName: 'Luson',
    foreignName: 'Lüsen',
    code: 'E764',
    province: 'BZ'
  },
  {
    name: 'Lustra',
    code: 'E767',
    province: 'SA'
  },
  {
    name: 'Luvinate',
    code: 'E769',
    province: 'VA'
  },
  {
    name: 'Luzzana',
    code: 'E770',
    province: 'BG'
  },
  {
    name: 'Luzzara',
    code: 'E772',
    province: 'RE'
  },
  {
    name: 'Luzzi',
    code: 'E773',
    province: 'CS'
  },
  {
    name: 'Maccastorna',
    code: 'E777',
    province: 'LO'
  },
  {
    name: "Macchia d'Isernia",
    code: 'E778',
    province: 'IS'
  },
  {
    name: 'Macchiagodena',
    code: 'E779',
    province: 'IS'
  },
  {
    name: 'Macchia Valfortore',
    code: 'E780',
    province: 'CB'
  },
  {
    name: 'Macello',
    code: 'E782',
    province: 'TO'
  },
  {
    name: 'Macerata',
    code: 'E783',
    province: 'MC'
  },
  {
    name: 'Macerata Campania',
    code: 'E784',
    province: 'CE'
  },
  {
    name: 'Macerata Feltria',
    code: 'E785',
    province: 'PU'
  },
  {
    name: 'Macherio',
    code: 'E786',
    province: 'MB'
  },
  {
    name: 'Maclodio',
    code: 'E787',
    province: 'BS'
  },
  {
    name: 'Macomer',
    code: 'E788',
    province: 'NU'
  },
  {
    name: 'Macra',
    code: 'E789',
    province: 'CN'
  },
  {
    name: 'Macugnaga',
    code: 'E790',
    province: 'VB'
  },
  {
    name: 'Maddaloni',
    code: 'E791',
    province: 'CE'
  },
  {
    name: 'Madignano',
    code: 'E793',
    province: 'CR'
  },
  {
    name: 'Madone',
    code: 'E794',
    province: 'BG'
  },
  {
    name: 'Madonna del Sasso',
    code: 'E795',
    province: 'VB'
  },
  {
    name: 'Maenza',
    code: 'E798',
    province: 'LT'
  },
  {
    name: 'Mafalda',
    code: 'E799',
    province: 'CB'
  },
  {
    name: 'Magasa',
    code: 'E800',
    province: 'BS'
  },
  {
    name: 'Magenta',
    code: 'E801',
    province: 'MI'
  },
  {
    name: 'Maggiora',
    code: 'E803',
    province: 'NO'
  },
  {
    name: 'Magherno',
    code: 'E804',
    province: 'PV'
  },
  {
    name: 'Magione',
    code: 'E805',
    province: 'PG'
  },
  {
    name: 'Magisano',
    code: 'E806',
    province: 'CZ'
  },
  {
    name: 'Magliano di Tenna',
    code: 'E807',
    province: 'FM'
  },
  {
    name: 'Magliano Alpi',
    code: 'E808',
    province: 'CN'
  },
  {
    name: 'Magliano Alfieri',
    code: 'E809',
    province: 'CN'
  },
  {
    name: 'Magliano in Toscana',
    code: 'E810',
    province: 'GR'
  },
  {
    name: "Magliano de' Marsi",
    code: 'E811',
    province: 'AQ'
  },
  {
    name: 'Magliano Sabina',
    code: 'E812',
    province: 'RI'
  },
  {
    name: 'Magliano Romano',
    code: 'E813',
    province: 'RM'
  },
  {
    name: 'Magliano Vetere',
    code: 'E814',
    province: 'SA'
  },
  {
    name: 'Maglie',
    code: 'E815',
    province: 'LE'
  },
  {
    name: 'Magliolo',
    code: 'E816',
    province: 'SV'
  },
  {
    name: 'Maglione',
    code: 'E817',
    province: 'TO'
  },
  {
    name: 'Magnacavallo',
    code: 'E818',
    province: 'MN'
  },
  {
    name: 'Magnago',
    code: 'E819',
    province: 'MI'
  },
  {
    name: 'Magnano in Riviera',
    code: 'E820',
    province: 'UD'
  },
  {
    name: 'Magnano',
    code: 'E821',
    province: 'BI'
  },
  {
    name: 'Magomadas',
    code: 'E825',
    province: 'OR'
  },
  {
    name: 'Magrè sulla strada del vino/Margreid an der Weinstraße',
    italianName: 'Magrè sulla strada del vino',
    foreignName: 'Margreid an der Weinstraße',
    code: 'E829',
    province: 'BZ'
  },
  {
    name: 'Magreglio',
    code: 'E830',
    province: 'CO'
  },
  {
    name: 'Majano',
    code: 'E833',
    province: 'UD'
  },
  {
    name: 'Maida',
    code: 'E834',
    province: 'CZ'
  },
  {
    name: 'Maierà',
    code: 'E835',
    province: 'CS'
  },
  {
    name: 'Maierato',
    code: 'E836',
    province: 'VV'
  },
  {
    name: 'Maiolati Spontini',
    code: 'E837',
    province: 'AN'
  },
  {
    name: 'Maiolo',
    code: 'E838',
    province: 'RN'
  },
  {
    name: 'Maiori',
    code: 'E839',
    province: 'SA'
  },
  {
    name: 'Mairago',
    code: 'E840',
    province: 'LO'
  },
  {
    name: 'Mairano',
    code: 'E841',
    province: 'BS'
  },
  {
    name: 'Maissana',
    code: 'E842',
    province: 'SP'
  },
  {
    name: 'Malagnino',
    code: 'E843',
    province: 'CR'
  },
  {
    name: 'Malalbergo',
    code: 'E844',
    province: 'BO'
  },
  {
    name: 'Malborghetto Valbruna',
    code: 'E847',
    province: 'UD'
  },
  {
    name: 'Malcesine',
    code: 'E848',
    province: 'VR'
  },
  {
    name: 'Malé',
    code: 'E850',
    province: 'TN'
  },
  {
    name: 'Malegno',
    code: 'E851',
    province: 'BS'
  },
  {
    name: 'Maleo',
    code: 'E852',
    province: 'LO'
  },
  {
    name: 'Malesco',
    code: 'E853',
    province: 'VB'
  },
  {
    name: 'Maletto',
    code: 'E854',
    province: 'CT'
  },
  {
    name: 'Malfa',
    code: 'E855',
    province: 'ME'
  },
  {
    name: 'Malgrate',
    code: 'E858',
    province: 'LC'
  },
  {
    name: 'Malito',
    code: 'E859',
    province: 'CS'
  },
  {
    name: 'Mallare',
    code: 'E860',
    province: 'SV'
  },
  {
    name: 'Malles Venosta/Mals',
    italianName: 'Malles Venosta',
    foreignName: 'Mals',
    code: 'E862',
    province: 'BZ'
  },
  {
    name: 'Malnate',
    code: 'E863',
    province: 'VA'
  },
  {
    name: 'Malo',
    code: 'E864',
    province: 'VI'
  },
  {
    name: 'Malonno',
    code: 'E865',
    province: 'BS'
  },
  {
    name: 'Maltignano',
    code: 'E868',
    province: 'AP'
  },
  {
    name: 'Malvagna',
    code: 'E869',
    province: 'ME'
  },
  {
    name: 'Malvicino',
    code: 'E870',
    province: 'AL'
  },
  {
    name: 'Malvito',
    code: 'E872',
    province: 'CS'
  },
  {
    name: 'Mammola',
    code: 'E873',
    province: 'RC'
  },
  {
    name: 'Mamoiada',
    code: 'E874',
    province: 'NU'
  },
  {
    name: 'Manciano',
    code: 'E875',
    province: 'GR'
  },
  {
    name: 'Mandanici',
    code: 'E876',
    province: 'ME'
  },
  {
    name: 'Mandas',
    code: 'E877',
    province: 'SU'
  },
  {
    name: 'Mandatoriccio',
    code: 'E878',
    province: 'CS'
  },
  {
    name: 'Mandello del Lario',
    code: 'E879',
    province: 'LC'
  },
  {
    name: 'Mandello Vitta',
    code: 'E880',
    province: 'NO'
  },
  {
    name: 'Manduria',
    code: 'E882',
    province: 'TA'
  },
  {
    name: 'Manerba del Garda',
    code: 'E883',
    province: 'BS'
  },
  {
    name: 'Manerbio',
    code: 'E884',
    province: 'BS'
  },
  {
    name: 'Manfredonia',
    code: 'E885',
    province: 'FG'
  },
  {
    name: 'Mango',
    code: 'E887',
    province: 'CN'
  },
  {
    name: 'Mangone',
    code: 'E888',
    province: 'CS'
  },
  {
    name: 'Maniago',
    code: 'E889',
    province: 'PN'
  },
  {
    name: 'Manocalzati',
    code: 'E891',
    province: 'AV'
  },
  {
    name: 'Manoppello',
    code: 'E892',
    province: 'PE'
  },
  {
    name: 'Mansuè',
    code: 'E893',
    province: 'TV'
  },
  {
    name: 'Manta',
    code: 'E894',
    province: 'CN'
  },
  {
    name: 'Mantello',
    code: 'E896',
    province: 'SO'
  },
  {
    name: 'Mantova',
    code: 'E897',
    province: 'MN'
  },
  {
    name: 'Manzano',
    code: 'E899',
    province: 'UD'
  },
  {
    name: 'Manziana',
    code: 'E900',
    province: 'RM'
  },
  {
    name: 'Mapello',
    code: 'E901',
    province: 'BG'
  },
  {
    name: 'Mara',
    code: 'E902',
    province: 'SS'
  },
  {
    name: 'Maracalagonis',
    code: 'E903',
    province: 'CA'
  },
  {
    name: 'Maranello',
    code: 'E904',
    province: 'MO'
  },
  {
    name: 'Marano sul Panaro',
    code: 'E905',
    province: 'MO'
  },
  {
    name: 'Marano di Napoli',
    code: 'E906',
    province: 'NA'
  },
  {
    name: 'Marano Ticino',
    code: 'E907',
    province: 'NO'
  },
  {
    name: 'Marano Equo',
    code: 'E908',
    province: 'RM'
  },
  {
    name: 'Marano Lagunare',
    code: 'E910',
    province: 'UD'
  },
  {
    name: 'Marano di Valpolicella',
    code: 'E911',
    province: 'VR'
  },
  {
    name: 'Marano Vicentino',
    code: 'E912',
    province: 'VI'
  },
  {
    name: 'Marano Marchesato',
    code: 'E914',
    province: 'CS'
  },
  {
    name: 'Marano Principato',
    code: 'E915',
    province: 'CS'
  },
  {
    name: 'Maranzana',
    code: 'E917',
    province: 'AT'
  },
  {
    name: 'Maratea',
    code: 'E919',
    province: 'PZ'
  },
  {
    name: 'Marcallo con Casone',
    code: 'E921',
    province: 'MI'
  },
  {
    name: 'Marcaria',
    code: 'E922',
    province: 'MN'
  },
  {
    name: 'Marcedusa',
    code: 'E923',
    province: 'CZ'
  },
  {
    name: 'Marcellina',
    code: 'E924',
    province: 'RM'
  },
  {
    name: 'Marcellinara',
    code: 'E925',
    province: 'CZ'
  },
  {
    name: 'Marcetelli',
    code: 'E927',
    province: 'RI'
  },
  {
    name: 'Marcheno',
    code: 'E928',
    province: 'BS'
  },
  {
    name: 'Marchirolo',
    code: 'E929',
    province: 'VA'
  },
  {
    name: 'Marciana',
    code: 'E930',
    province: 'LI'
  },
  {
    name: 'Marciana Marina',
    code: 'E931',
    province: 'LI'
  },
  {
    name: 'Marcianise',
    code: 'E932',
    province: 'CE'
  },
  {
    name: 'Marciano della Chiana',
    code: 'E933',
    province: 'AR'
  },
  {
    name: 'Marcignago',
    code: 'E934',
    province: 'PV'
  },
  {
    name: 'Marcon',
    code: 'E936',
    province: 'VE'
  },
  {
    name: 'Marebbe/Enneberg',
    italianName: 'Marebbe',
    foreignName: 'Enneberg',
    code: 'E938',
    province: 'BZ'
  },
  {
    name: 'Marene',
    code: 'E939',
    province: 'CN'
  },
  {
    name: 'Mareno di Piave',
    code: 'E940',
    province: 'TV'
  },
  {
    name: 'Marentino',
    code: 'E941',
    province: 'TO'
  },
  {
    name: 'Maretto',
    code: 'E944',
    province: 'AT'
  },
  {
    name: 'Margarita',
    code: 'E945',
    province: 'CN'
  },
  {
    name: 'Margherita di Savoia',
    code: 'E946',
    province: 'BT'
  },
  {
    name: 'Margno',
    code: 'E947',
    province: 'LC'
  },
  {
    name: 'Mariana Mantovana',
    code: 'E949',
    province: 'MN'
  },
  {
    name: 'Mariano Comense',
    code: 'E951',
    province: 'CO'
  },
  {
    name: 'Mariano del Friuli',
    code: 'E952',
    province: 'GO'
  },
  {
    name: 'Marianopoli',
    code: 'E953',
    province: 'CL'
  },
  {
    name: 'Mariglianella',
    code: 'E954',
    province: 'NA'
  },
  {
    name: 'Marigliano',
    code: 'E955',
    province: 'NA'
  },
  {
    name: 'Marina di Gioiosa Ionica',
    code: 'E956',
    province: 'RC'
  },
  {
    name: 'Marineo',
    code: 'E957',
    province: 'PA'
  },
  {
    name: 'Marino',
    code: 'E958',
    province: 'RM'
  },
  {
    name: 'Marlengo/Marling',
    italianName: 'Marlengo',
    foreignName: 'Marling',
    code: 'E959',
    province: 'BZ'
  },
  {
    name: 'Marliana',
    code: 'E960',
    province: 'PT'
  },
  {
    name: 'Marmentino',
    code: 'E961',
    province: 'BS'
  },
  {
    name: 'Marmirolo',
    code: 'E962',
    province: 'MN'
  },
  {
    name: 'Marmora',
    code: 'E963',
    province: 'CN'
  },
  {
    name: 'Marnate',
    code: 'E965',
    province: 'VA'
  },
  {
    name: 'Marone',
    code: 'E967',
    province: 'BS'
  },
  {
    name: 'Maropati',
    code: 'E968',
    province: 'RC'
  },
  {
    name: 'Marostica',
    code: 'E970',
    province: 'VI'
  },
  {
    name: 'Marradi',
    code: 'E971',
    province: 'FI'
  },
  {
    name: 'Marrubiu',
    code: 'E972',
    province: 'OR'
  },
  {
    name: 'Marsaglia',
    code: 'E973',
    province: 'CN'
  },
  {
    name: 'Marsala',
    code: 'E974',
    province: 'TP'
  },
  {
    name: 'Marsciano',
    code: 'E975',
    province: 'PG'
  },
  {
    name: 'Marsico Nuovo',
    code: 'E976',
    province: 'PZ'
  },
  {
    name: 'Marsicovetere',
    code: 'E977',
    province: 'PZ'
  },
  {
    name: 'Marta',
    code: 'E978',
    province: 'VT'
  },
  {
    name: 'Martano',
    code: 'E979',
    province: 'LE'
  },
  {
    name: 'Martellago',
    code: 'E980',
    province: 'VE'
  },
  {
    name: 'Martello/Martell',
    italianName: 'Martello',
    foreignName: 'Martell',
    code: 'E981',
    province: 'BZ'
  },
  {
    name: 'Martignacco',
    code: 'E982',
    province: 'UD'
  },
  {
    name: 'Martignana di Po',
    code: 'E983',
    province: 'CR'
  },
  {
    name: 'Martignano',
    code: 'E984',
    province: 'LE'
  },
  {
    name: 'Martina Franca',
    code: 'E986',
    province: 'TA'
  },
  {
    name: 'Martinengo',
    code: 'E987',
    province: 'BG'
  },
  {
    name: 'Martiniana Po',
    code: 'E988',
    province: 'CN'
  },
  {
    name: 'Martinsicuro',
    code: 'E989',
    province: 'TE'
  },
  {
    name: 'Martirano',
    code: 'E990',
    province: 'CZ'
  },
  {
    name: 'Martirano Lombardo',
    code: 'E991',
    province: 'CZ'
  },
  {
    name: 'Martis',
    code: 'E992',
    province: 'SS'
  },
  {
    name: 'Martone',
    code: 'E993',
    province: 'RC'
  },
  {
    name: 'Marudo',
    code: 'E994',
    province: 'LO'
  },
  {
    name: 'Maruggio',
    code: 'E995',
    province: 'TA'
  },
  {
    name: 'Marzano di Nola',
    code: 'E997',
    province: 'AV'
  },
  {
    name: 'Marzano Appio',
    code: 'E998',
    province: 'CE'
  },
  {
    name: 'Marzano',
    code: 'E999',
    province: 'PV'
  },
  {
    name: 'Marzi',
    code: 'F001',
    province: 'CS'
  },
  {
    name: 'Marzio',
    code: 'F002',
    province: 'VA'
  },
  {
    name: 'Masate',
    code: 'F003',
    province: 'MI'
  },
  {
    name: 'Mascali',
    code: 'F004',
    province: 'CT'
  },
  {
    name: 'Mascalucia',
    code: 'F005',
    province: 'CT'
  },
  {
    name: 'Maschito',
    code: 'F006',
    province: 'PZ'
  },
  {
    name: 'Masciago Primo',
    code: 'F007',
    province: 'VA'
  },
  {
    name: 'Maser',
    code: 'F009',
    province: 'TV'
  },
  {
    name: 'Masera',
    code: 'F010',
    province: 'VB'
  },
  {
    name: 'Maserà di Padova',
    code: 'F011',
    province: 'PD'
  },
  {
    name: 'Maserada sul Piave',
    code: 'F012',
    province: 'TV'
  },
  {
    name: 'Masi',
    code: 'F013',
    province: 'PD'
  },
  {
    name: 'Masio',
    code: 'F015',
    province: 'AL'
  },
  {
    name: 'Masi Torello',
    code: 'F016',
    province: 'FE'
  },
  {
    name: 'Maslianico',
    code: 'F017',
    province: 'CO'
  },
  {
    name: 'Masone',
    code: 'F020',
    province: 'GE'
  },
  {
    name: 'Massa Fermana',
    code: 'F021',
    province: 'FM'
  },
  {
    name: "Massa d'Albe",
    code: 'F022',
    province: 'AQ'
  },
  {
    name: 'Massa',
    code: 'F023',
    province: 'MS'
  },
  {
    name: 'Massa Martana',
    code: 'F024',
    province: 'PG'
  },
  {
    name: 'Massa e Cozzile',
    code: 'F025',
    province: 'PT'
  },
  {
    name: 'Massafra',
    code: 'F027',
    province: 'TA'
  },
  {
    name: 'Massalengo',
    code: 'F028',
    province: 'LO'
  },
  {
    name: 'Massa Lombarda',
    code: 'F029',
    province: 'RA'
  },
  {
    name: 'Massa Lubrense',
    code: 'F030',
    province: 'NA'
  },
  {
    name: 'Massa Marittima',
    code: 'F032',
    province: 'GR'
  },
  {
    name: 'Massanzago',
    code: 'F033',
    province: 'PD'
  },
  {
    name: 'Massarosa',
    code: 'F035',
    province: 'LU'
  },
  {
    name: 'Massazza',
    code: 'F037',
    province: 'BI'
  },
  {
    name: 'Massello',
    code: 'F041',
    province: 'TO'
  },
  {
    name: 'Masserano',
    code: 'F042',
    province: 'BI'
  },
  {
    name: 'San Marco Evangelista',
    code: 'F043',
    province: 'CE'
  },
  {
    name: 'Massignano',
    code: 'F044',
    province: 'AP'
  },
  {
    name: 'Massimeno',
    code: 'F045',
    province: 'TN'
  },
  {
    name: 'Massimino',
    code: 'F046',
    province: 'SV'
  },
  {
    name: 'Massino Visconti',
    code: 'F047',
    province: 'NO'
  },
  {
    name: 'Massiola',
    code: 'F048',
    province: 'VB'
  },
  {
    name: 'Masullas',
    code: 'F050',
    province: 'OR'
  },
  {
    name: 'Matelica',
    code: 'F051',
    province: 'MC'
  },
  {
    name: 'Matera',
    code: 'F052',
    province: 'MT'
  },
  {
    name: 'Mathi',
    code: 'F053',
    province: 'TO'
  },
  {
    name: 'Matino',
    code: 'F054',
    province: 'LE'
  },
  {
    name: 'Matrice',
    code: 'F055',
    province: 'CB'
  },
  {
    name: 'Mattie',
    code: 'F058',
    province: 'TO'
  },
  {
    name: 'Mattinata',
    code: 'F059',
    province: 'FG'
  },
  {
    name: 'Mazara del Vallo',
    code: 'F061',
    province: 'TP'
  },
  {
    name: 'Mazzano',
    code: 'F063',
    province: 'BS'
  },
  {
    name: 'Mazzano Romano',
    code: 'F064',
    province: 'RM'
  },
  {
    name: 'Mazzarino',
    code: 'F065',
    province: 'CL'
  },
  {
    name: "Mazzarrà Sant'Andrea",
    code: 'F066',
    province: 'ME'
  },
  {
    name: 'Mazzè',
    code: 'F067',
    province: 'TO'
  },
  {
    name: 'Mazzin',
    code: 'F068',
    province: 'TN'
  },
  {
    name: 'Mazzo di Valtellina',
    code: 'F070',
    province: 'SO'
  },
  {
    name: 'Meana Sardo',
    code: 'F073',
    province: 'NU'
  },
  {
    name: 'Meana di Susa',
    code: 'F074',
    province: 'TO'
  },
  {
    name: 'Meda',
    code: 'F078',
    province: 'MB'
  },
  {
    name: 'Mede',
    code: 'F080',
    province: 'PV'
  },
  {
    name: 'Medea',
    code: 'F081',
    province: 'GO'
  },
  {
    name: 'Medesano',
    code: 'F082',
    province: 'PR'
  },
  {
    name: 'Medicina',
    code: 'F083',
    province: 'BO'
  },
  {
    name: 'Mediglia',
    code: 'F084',
    province: 'MI'
  },
  {
    name: 'Medolago',
    code: 'F085',
    province: 'BG'
  },
  {
    name: 'Medole',
    code: 'F086',
    province: 'MN'
  },
  {
    name: 'Medolla',
    code: 'F087',
    province: 'MO'
  },
  {
    name: 'Meduna di Livenza',
    code: 'F088',
    province: 'TV'
  },
  {
    name: 'Meduno',
    code: 'F089',
    province: 'PN'
  },
  {
    name: 'Megliadino San Vitale',
    code: 'F092',
    province: 'PD'
  },
  {
    name: 'Meina',
    code: 'F093',
    province: 'NO'
  },
  {
    name: 'Melara',
    code: 'F095',
    province: 'RO'
  },
  {
    name: 'Melazzo',
    code: 'F096',
    province: 'AL'
  },
  {
    name: 'Meldola',
    code: 'F097',
    province: 'FC'
  },
  {
    name: 'Mele',
    code: 'F098',
    province: 'GE'
  },
  {
    name: 'Melegnano',
    code: 'F100',
    province: 'MI'
  },
  {
    name: 'Melendugno',
    code: 'F101',
    province: 'LE'
  },
  {
    name: 'Meleti',
    code: 'F102',
    province: 'LO'
  },
  {
    name: 'Melfi',
    code: 'F104',
    province: 'PZ'
  },
  {
    name: 'Melicuccà',
    code: 'F105',
    province: 'RC'
  },
  {
    name: 'Melicucco',
    code: 'F106',
    province: 'RC'
  },
  {
    name: 'Melilli',
    code: 'F107',
    province: 'SR'
  },
  {
    name: 'Melissa',
    code: 'F108',
    province: 'KR'
  },
  {
    name: 'Melissano',
    code: 'F109',
    province: 'LE'
  },
  {
    name: 'Melito Irpino',
    code: 'F110',
    province: 'AV'
  },
  {
    name: 'Melito di Napoli',
    code: 'F111',
    province: 'NA'
  },
  {
    name: 'Melito di Porto Salvo',
    code: 'F112',
    province: 'RC'
  },
  {
    name: 'Melizzano',
    code: 'F113',
    province: 'BN'
  },
  {
    name: 'Melle',
    code: 'F114',
    province: 'CN'
  },
  {
    name: 'Mello',
    code: 'F115',
    province: 'SO'
  },
  {
    name: 'Silea',
    code: 'F116',
    province: 'TV'
  },
  {
    name: 'Melpignano',
    code: 'F117',
    province: 'LE'
  },
  {
    name: 'Meltina/Mölten',
    italianName: 'Meltina',
    foreignName: 'Mölten',
    code: 'F118',
    province: 'BZ'
  },
  {
    name: 'Melzo',
    code: 'F119',
    province: 'MI'
  },
  {
    name: 'Menaggio',
    code: 'F120',
    province: 'CO'
  },
  {
    name: 'Menconico',
    code: 'F122',
    province: 'PV'
  },
  {
    name: 'Mendatica',
    code: 'F123',
    province: 'IM'
  },
  {
    name: 'Mendicino',
    code: 'F125',
    province: 'CS'
  },
  {
    name: 'Menfi',
    code: 'F126',
    province: 'AG'
  },
  {
    name: 'Mentana',
    code: 'F127',
    province: 'RM'
  },
  {
    name: 'Meolo',
    code: 'F130',
    province: 'VE'
  },
  {
    name: 'Merana',
    code: 'F131',
    province: 'AL'
  },
  {
    name: 'Merano/Meran',
    italianName: 'Merano',
    foreignName: 'Meran',
    code: 'F132',
    province: 'BZ'
  },
  {
    name: 'Merate',
    code: 'F133',
    province: 'LC'
  },
  {
    name: 'Mercallo',
    code: 'F134',
    province: 'VA'
  },
  {
    name: 'Mercatello sul Metauro',
    code: 'F135',
    province: 'PU'
  },
  {
    name: 'Mercatino Conca',
    code: 'F136',
    province: 'PU'
  },
  {
    name: 'Novafeltria',
    code: 'F137',
    province: 'RN'
  },
  {
    name: 'Mercato San Severino',
    code: 'F138',
    province: 'SA'
  },
  {
    name: 'Mercato Saraceno',
    code: 'F139',
    province: 'FC'
  },
  {
    name: 'Mercenasco',
    code: 'F140',
    province: 'TO'
  },
  {
    name: 'Mercogliano',
    code: 'F141',
    province: 'AV'
  },
  {
    name: 'Mereto di Tomba',
    code: 'F144',
    province: 'UD'
  },
  {
    name: 'Mergo',
    code: 'F145',
    province: 'AN'
  },
  {
    name: 'Mergozzo',
    code: 'F146',
    province: 'VB'
  },
  {
    name: 'Merì',
    code: 'F147',
    province: 'ME'
  },
  {
    name: 'Merlara',
    code: 'F148',
    province: 'PD'
  },
  {
    name: 'Merlino',
    code: 'F149',
    province: 'LO'
  },
  {
    name: 'Merone',
    code: 'F151',
    province: 'CO'
  },
  {
    name: 'Mesagne',
    code: 'F152',
    province: 'BR'
  },
  {
    name: 'Mese',
    code: 'F153',
    province: 'SO'
  },
  {
    name: 'Mesenzana',
    code: 'F154',
    province: 'VA'
  },
  {
    name: 'Mesero',
    code: 'F155',
    province: 'MI'
  },
  {
    name: 'Mesola',
    code: 'F156',
    province: 'FE'
  },
  {
    name: 'Mesoraca',
    code: 'F157',
    province: 'KR'
  },
  {
    name: 'Messina',
    code: 'F158',
    province: 'ME'
  },
  {
    name: 'Mestrino',
    code: 'F161',
    province: 'PD'
  },
  {
    name: 'Meta',
    code: 'F162',
    province: 'NA'
  },
  {
    name: 'Mezzago',
    code: 'F165',
    province: 'MB'
  },
  {
    name: 'Mezzana Mortigliengo',
    code: 'F167',
    province: 'BI'
  },
  {
    name: 'Mezzana',
    code: 'F168',
    province: 'TN'
  },
  {
    name: 'Mezzana Bigli',
    code: 'F170',
    province: 'PV'
  },
  {
    name: 'Mezzana Rabattone',
    code: 'F171',
    province: 'PV'
  },
  {
    name: 'Mezzane di Sotto',
    code: 'F172',
    province: 'VR'
  },
  {
    name: 'Mezzanego',
    code: 'F173',
    province: 'GE'
  },
  {
    name: 'Mezzanino',
    code: 'F175',
    province: 'PV'
  },
  {
    name: 'Mezzano',
    code: 'F176',
    province: 'TN'
  },
  {
    name: 'Mezzenile',
    code: 'F182',
    province: 'TO'
  },
  {
    name: 'Mezzocorona',
    code: 'F183',
    province: 'TN'
  },
  {
    name: 'Mezzojuso',
    code: 'F184',
    province: 'PA'
  },
  {
    name: 'Mezzoldo',
    code: 'F186',
    province: 'BG'
  },
  {
    name: 'Mezzolombardo',
    code: 'F187',
    province: 'TN'
  },
  {
    name: 'Mezzomerico',
    code: 'F188',
    province: 'NO'
  },
  {
    name: 'Miagliano',
    code: 'F189',
    province: 'BI'
  },
  {
    name: 'Miane',
    code: 'F190',
    province: 'TV'
  },
  {
    name: 'Miasino',
    code: 'F191',
    province: 'NO'
  },
  {
    name: 'Miazzina',
    code: 'F192',
    province: 'VB'
  },
  {
    name: 'Micigliano',
    code: 'F193',
    province: 'RI'
  },
  {
    name: 'Miggiano',
    code: 'F194',
    province: 'LE'
  },
  {
    name: 'Miglianico',
    code: 'F196',
    province: 'CH'
  },
  {
    name: 'Miglierina',
    code: 'F200',
    province: 'CZ'
  },
  {
    name: 'Miglionico',
    code: 'F201',
    province: 'MT'
  },
  {
    name: 'Mignanego',
    code: 'F202',
    province: 'GE'
  },
  {
    name: 'Mignano Monte Lungo',
    code: 'F203',
    province: 'CE'
  },
  {
    name: 'Milano',
    code: 'F205',
    province: 'MI'
  },
  {
    name: 'Milazzo',
    code: 'F206',
    province: 'ME'
  },
  {
    name: 'Mileto',
    code: 'F207',
    province: 'VV'
  },
  {
    name: 'Milis',
    code: 'F208',
    province: 'OR'
  },
  {
    name: 'Militello in Val di Catania',
    code: 'F209',
    province: 'CT'
  },
  {
    name: 'Militello Rosmarino',
    code: 'F210',
    province: 'ME'
  },
  {
    name: 'Millesimo',
    code: 'F213',
    province: 'SV'
  },
  {
    name: 'Milo',
    code: 'F214',
    province: 'CT'
  },
  {
    name: 'Milzano',
    code: 'F216',
    province: 'BS'
  },
  {
    name: 'Mineo',
    code: 'F217',
    province: 'CT'
  },
  {
    name: 'Minerbe',
    code: 'F218',
    province: 'VR'
  },
  {
    name: 'Minerbio',
    code: 'F219',
    province: 'BO'
  },
  {
    name: 'Minervino Murge',
    code: 'F220',
    province: 'BT'
  },
  {
    name: 'Minervino di Lecce',
    code: 'F221',
    province: 'LE'
  },
  {
    name: 'Minori',
    code: 'F223',
    province: 'SA'
  },
  {
    name: 'Minturno',
    code: 'F224',
    province: 'LT'
  },
  {
    name: 'Minucciano',
    code: 'F225',
    province: 'LU'
  },
  {
    name: 'Mioglia',
    code: 'F226',
    province: 'SV'
  },
  {
    name: 'Mira',
    code: 'F229',
    province: 'VE'
  },
  {
    name: 'Mirabella Eclano',
    code: 'F230',
    province: 'AV'
  },
  {
    name: 'Mirabella Imbaccari',
    code: 'F231',
    province: 'CT'
  },
  {
    name: 'Mirabello Monferrato',
    code: 'F232',
    province: 'AL'
  },
  {
    name: 'Mirabello Sannitico',
    code: 'F233',
    province: 'CB'
  },
  {
    name: 'Miradolo Terme',
    code: 'F238',
    province: 'PV'
  },
  {
    name: 'Miranda',
    code: 'F239',
    province: 'IS'
  },
  {
    name: 'Mirandola',
    code: 'F240',
    province: 'MO'
  },
  {
    name: 'Mirano',
    code: 'F241',
    province: 'VE'
  },
  {
    name: 'Mirto',
    code: 'F242',
    province: 'ME'
  },
  {
    name: "Misano di Gera d'Adda",
    code: 'F243',
    province: 'BG'
  },
  {
    name: 'Misano Adriatico',
    code: 'F244',
    province: 'RN'
  },
  {
    name: 'Misilmeri',
    code: 'F246',
    province: 'PA'
  },
  {
    name: 'Misinto',
    code: 'F247',
    province: 'MB'
  },
  {
    name: 'Missaglia',
    code: 'F248',
    province: 'LC'
  },
  {
    name: 'Missanello',
    code: 'F249',
    province: 'PZ'
  },
  {
    name: 'Misterbianco',
    code: 'F250',
    province: 'CT'
  },
  {
    name: 'Mistretta',
    code: 'F251',
    province: 'ME'
  },
  {
    name: 'Moasca',
    code: 'F254',
    province: 'AT'
  },
  {
    name: 'Moconesi',
    code: 'F256',
    province: 'GE'
  },
  {
    name: 'Modena',
    code: 'F257',
    province: 'MO'
  },
  {
    name: 'Modica',
    code: 'F258',
    province: 'RG'
  },
  {
    name: 'Modigliana',
    code: 'F259',
    province: 'FC'
  },
  {
    name: 'Tavazzano con Villavesco',
    code: 'F260',
    province: 'LO'
  },
  {
    name: 'Modolo',
    code: 'F261',
    province: 'OR'
  },
  {
    name: 'Modugno',
    code: 'F262',
    province: 'BA'
  },
  {
    name: 'Moena',
    code: 'F263',
    province: 'TN'
  },
  {
    name: 'Moggio',
    code: 'F265',
    province: 'LC'
  },
  {
    name: 'Moggio Udinese',
    code: 'F266',
    province: 'UD'
  },
  {
    name: 'Moglia',
    code: 'F267',
    province: 'MN'
  },
  {
    name: 'Mogliano',
    code: 'F268',
    province: 'MC'
  },
  {
    name: 'Mogliano Veneto',
    code: 'F269',
    province: 'TV'
  },
  {
    name: 'Mogorella',
    code: 'F270',
    province: 'OR'
  },
  {
    name: 'Ruinas',
    code: 'F271',
    province: 'OR'
  },
  {
    name: 'Mogoro',
    code: 'F272',
    province: 'OR'
  },
  {
    name: 'Moiano',
    code: 'F274',
    province: 'BN'
  },
  {
    name: 'Moimacco',
    code: 'F275',
    province: 'UD'
  },
  {
    name: "Moio de' Calvi",
    code: 'F276',
    province: 'BG'
  },
  {
    name: 'Moio Alcantara',
    code: 'F277',
    province: 'ME'
  },
  {
    name: 'Moio della Civitella',
    code: 'F278',
    province: 'SA'
  },
  {
    name: 'Moiola',
    code: 'F279',
    province: 'CN'
  },
  {
    name: 'Mola di Bari',
    code: 'F280',
    province: 'BA'
  },
  {
    name: 'Molare',
    code: 'F281',
    province: 'AL'
  },
  {
    name: 'Molazzana',
    code: 'F283',
    province: 'LU'
  },
  {
    name: 'Molfetta',
    code: 'F284',
    province: 'BA'
  },
  {
    name: 'Molinara',
    code: 'F287',
    province: 'BN'
  },
  {
    name: 'Molinella',
    code: 'F288',
    province: 'BO'
  },
  {
    name: 'Molini di Triora',
    code: 'F290',
    province: 'IM'
  },
  {
    name: 'Molino dei Torti',
    code: 'F293',
    province: 'AL'
  },
  {
    name: 'Molise',
    code: 'F294',
    province: 'CB'
  },
  {
    name: 'Moliterno',
    code: 'F295',
    province: 'PZ'
  },
  {
    name: 'Mollia',
    code: 'F297',
    province: 'VC'
  },
  {
    name: 'Porto Empedocle',
    code: 'F299',
    province: 'AG'
  },
  {
    name: 'Molochio',
    code: 'F301',
    province: 'RC'
  },
  {
    name: 'Molteno',
    code: 'F304',
    province: 'LC'
  },
  {
    name: 'Moltrasio',
    code: 'F305',
    province: 'CO'
  },
  {
    name: 'Molveno',
    code: 'F307',
    province: 'TN'
  },
  {
    name: 'Mombaldone',
    code: 'F308',
    province: 'AT'
  },
  {
    name: 'Mombarcaro',
    code: 'F309',
    province: 'CN'
  },
  {
    name: 'Mombaroccio',
    code: 'F310',
    province: 'PU'
  },
  {
    name: 'Mombaruzzo',
    code: 'F311',
    province: 'AT'
  },
  {
    name: 'Mombasiglio',
    code: 'F312',
    province: 'CN'
  },
  {
    name: 'Mombello Monferrato',
    code: 'F313',
    province: 'AL'
  },
  {
    name: 'Mombello di Torino',
    code: 'F315',
    province: 'TO'
  },
  {
    name: 'Mombercelli',
    code: 'F316',
    province: 'AT'
  },
  {
    name: 'Momo',
    code: 'F317',
    province: 'NO'
  },
  {
    name: 'Mompantero',
    code: 'F318',
    province: 'TO'
  },
  {
    name: 'Mompeo',
    code: 'F319',
    province: 'RI'
  },
  {
    name: 'Momperone',
    code: 'F320',
    province: 'AL'
  },
  {
    name: 'Monacilioni',
    code: 'F322',
    province: 'CB'
  },
  {
    name: 'Monale',
    code: 'F323',
    province: 'AT'
  },
  {
    name: 'Monasterace',
    code: 'F324',
    province: 'RC'
  },
  {
    name: 'Monastero Bormida',
    code: 'F325',
    province: 'AT'
  },
  {
    name: 'Monastero di Vasco',
    code: 'F326',
    province: 'CN'
  },
  {
    name: 'Monastero di Lanzo',
    code: 'F327',
    province: 'TO'
  },
  {
    name: 'Monasterolo del Castello',
    code: 'F328',
    province: 'BG'
  },
  {
    name: 'Monasterolo Casotto',
    code: 'F329',
    province: 'CN'
  },
  {
    name: 'Monasterolo di Savigliano',
    code: 'F330',
    province: 'CN'
  },
  {
    name: 'Monastier di Treviso',
    code: 'F332',
    province: 'TV'
  },
  {
    name: 'Monastir',
    code: 'F333',
    province: 'SU'
  },
  {
    name: 'Moncalieri',
    code: 'F335',
    province: 'TO'
  },
  {
    name: 'Moncalvo',
    code: 'F336',
    province: 'AT'
  },
  {
    name: 'Moncestino',
    code: 'F337',
    province: 'AL'
  },
  {
    name: 'Monchiero',
    code: 'F338',
    province: 'CN'
  },
  {
    name: 'Monchio delle Corti',
    code: 'F340',
    province: 'PR'
  },
  {
    name: 'Moncrivello',
    code: 'F342',
    province: 'VC'
  },
  {
    name: 'Moncucco Torinese',
    code: 'F343',
    province: 'AT'
  },
  {
    name: 'Mondaino',
    code: 'F346',
    province: 'RN'
  },
  {
    name: 'Mondavio',
    code: 'F347',
    province: 'PU'
  },
  {
    name: 'Mondolfo',
    code: 'F348',
    province: 'PU'
  },
  {
    name: 'Mondovì',
    code: 'F351',
    province: 'CN'
  },
  {
    name: 'Mondragone',
    code: 'F352',
    province: 'CE'
  },
  {
    name: 'Moneglia',
    code: 'F354',
    province: 'GE'
  },
  {
    name: 'Monesiglio',
    code: 'F355',
    province: 'CN'
  },
  {
    name: 'Monfalcone',
    code: 'F356',
    province: 'GO'
  },
  {
    name: 'Serramazzoni',
    code: 'F357',
    province: 'MO'
  },
  {
    name: "Monforte d'Alba",
    code: 'F358',
    province: 'CN'
  },
  {
    name: 'Monforte San Giorgio',
    code: 'F359',
    province: 'ME'
  },
  {
    name: 'Monfumo',
    code: 'F360',
    province: 'TV'
  },
  {
    name: 'Mongardino',
    code: 'F361',
    province: 'AT'
  },
  {
    name: 'Monghidoro',
    code: 'F363',
    province: 'BO'
  },
  {
    name: 'Mongiana',
    code: 'F364',
    province: 'VV'
  },
  {
    name: 'Mongiardino Ligure',
    code: 'F365',
    province: 'AL'
  },
  {
    name: 'Montjovet',
    code: 'F367',
    province: 'AO'
  },
  {
    name: 'Mongiuffi Melia',
    code: 'F368',
    province: 'ME'
  },
  {
    name: 'Mongrando',
    code: 'F369',
    province: 'BI'
  },
  {
    name: 'Mongrassano',
    code: 'F370',
    province: 'CS'
  },
  {
    name: 'Monguelfo-Tesido/Welsberg-Taisten',
    italianName: 'Monguelfo-Tesido',
    foreignName: 'Welsberg-Taisten',
    code: 'F371',
    province: 'BZ'
  },
  {
    name: 'Monguzzo',
    code: 'F372',
    province: 'CO'
  },
  {
    name: 'Moniga del Garda',
    code: 'F373',
    province: 'BS'
  },
  {
    name: 'Monleale',
    code: 'F374',
    province: 'AL'
  },
  {
    name: 'Monno',
    code: 'F375',
    province: 'BS'
  },
  {
    name: 'Monopoli',
    code: 'F376',
    province: 'BA'
  },
  {
    name: 'Monreale',
    code: 'F377',
    province: 'PA'
  },
  {
    name: 'Monrupino-Repentabor',
    italianName: 'Monrupino',
    foreignName: 'Repentabor',
    code: 'F378',
    province: 'TS'
  },
  {
    name: 'Monsampietro Morico',
    code: 'F379',
    province: 'FM'
  },
  {
    name: 'Monsampolo del Tronto',
    code: 'F380',
    province: 'AP'
  },
  {
    name: 'Monsano',
    code: 'F381',
    province: 'AN'
  },
  {
    name: 'Monselice',
    code: 'F382',
    province: 'PD'
  },
  {
    name: 'Monserrato',
    code: 'F383',
    province: 'CA'
  },
  {
    name: 'Monsummano Terme',
    code: 'F384',
    province: 'PT'
  },
  {
    name: 'Montà',
    code: 'F385',
    province: 'CN'
  },
  {
    name: 'Montabone',
    code: 'F386',
    province: 'AT'
  },
  {
    name: 'Montacuto',
    code: 'F387',
    province: 'AL'
  },
  {
    name: 'Montafia',
    code: 'F390',
    province: 'AT'
  },
  {
    name: 'Montagano',
    code: 'F391',
    province: 'CB'
  },
  {
    name: 'Montagna sulla strada del vino/Montan an der Weinstraße',
    italianName: 'Montagna sulla strada del vino',
    foreignName: 'Montan an der Weinstraße',
    code: 'F392',
    province: 'BZ'
  },
  {
    name: 'Montagna in Valtellina',
    code: 'F393',
    province: 'SO'
  },
  {
    name: 'Montagnana',
    code: 'F394',
    province: 'PD'
  },
  {
    name: 'Montagnareale',
    code: 'F395',
    province: 'ME'
  },
  {
    name: 'Montaguto',
    code: 'F397',
    province: 'AV'
  },
  {
    name: 'Montaione',
    code: 'F398',
    province: 'FI'
  },
  {
    name: 'Montalbano Jonico',
    code: 'F399',
    province: 'MT'
  },
  {
    name: 'Montalbano Elicona',
    code: 'F400',
    province: 'ME'
  },
  {
    name: 'Ostra',
    code: 'F401',
    province: 'AN'
  },
  {
    name: 'Montaldeo',
    code: 'F403',
    province: 'AL'
  },
  {
    name: 'Montaldo Bormida',
    code: 'F404',
    province: 'AL'
  },
  {
    name: 'Montaldo di Mondovì',
    code: 'F405',
    province: 'CN'
  },
  {
    name: 'Montaldo Torinese',
    code: 'F407',
    province: 'TO'
  },
  {
    name: 'Montaldo Roero',
    code: 'F408',
    province: 'CN'
  },
  {
    name: 'Montaldo Scarampi',
    code: 'F409',
    province: 'AT'
  },
  {
    name: 'Montale',
    code: 'F410',
    province: 'PT'
  },
  {
    name: 'Montalenghe',
    code: 'F411',
    province: 'TO'
  },
  {
    name: 'Montallegro',
    code: 'F414',
    province: 'AG'
  },
  {
    name: 'Montalto delle Marche',
    code: 'F415',
    province: 'AP'
  },
  {
    name: 'Montalto Uffugo',
    code: 'F416',
    province: 'CS'
  },
  {
    name: 'Montalto Pavese',
    code: 'F417',
    province: 'PV'
  },
  {
    name: 'Montalto di Castro',
    code: 'F419',
    province: 'VT'
  },
  {
    name: 'Montalto Dora',
    code: 'F420',
    province: 'TO'
  },
  {
    name: 'Montanaro',
    code: 'F422',
    province: 'TO'
  },
  {
    name: 'Montanaso Lombardo',
    code: 'F423',
    province: 'LO'
  },
  {
    name: 'Montanera',
    code: 'F424',
    province: 'CN'
  },
  {
    name: 'Montano Antilia',
    code: 'F426',
    province: 'SA'
  },
  {
    name: 'Montano Lucino',
    code: 'F427',
    province: 'CO'
  },
  {
    name: 'Montappone',
    code: 'F428',
    province: 'FM'
  },
  {
    name: 'Montaquila',
    code: 'F429',
    province: 'IS'
  },
  {
    name: 'Montasola',
    code: 'F430',
    province: 'RI'
  },
  {
    name: 'Montauro',
    code: 'F432',
    province: 'CZ'
  },
  {
    name: 'Montazzoli',
    code: 'F433',
    province: 'CH'
  },
  {
    name: 'Monte Cremasco',
    code: 'F434',
    province: 'CR'
  },
  {
    name: 'Monte Argentario',
    code: 'F437',
    province: 'GR'
  },
  {
    name: 'Montebello della Battaglia',
    code: 'F440',
    province: 'PV'
  },
  {
    name: 'Montebello di Bertona',
    code: 'F441',
    province: 'PE'
  },
  {
    name: 'Montebello Vicentino',
    code: 'F442',
    province: 'VI'
  },
  {
    name: 'Montebelluna',
    code: 'F443',
    province: 'TV'
  },
  {
    name: 'Montebruno',
    code: 'F445',
    province: 'GE'
  },
  {
    name: 'Montebuono',
    code: 'F446',
    province: 'RI'
  },
  {
    name: 'Montecalvo Irpino',
    code: 'F448',
    province: 'AV'
  },
  {
    name: 'Montecalvo Versiggia',
    code: 'F449',
    province: 'PV'
  },
  {
    name: 'Montecalvo in Foglia',
    code: 'F450',
    province: 'PU'
  },
  {
    name: 'Montecarlo',
    code: 'F452',
    province: 'LU'
  },
  {
    name: 'Montecarotto',
    code: 'F453',
    province: 'AN'
  },
  {
    name: 'Montecassiano',
    code: 'F454',
    province: 'MC'
  },
  {
    name: 'Montecastello',
    code: 'F455',
    province: 'AL'
  },
  {
    name: 'Monte Castello di Vibio',
    code: 'F456',
    province: 'PG'
  },
  {
    name: 'Montecastrilli',
    code: 'F457',
    province: 'TR'
  },
  {
    name: 'Montecatini Val di Cecina',
    code: 'F458',
    province: 'PI'
  },
  {
    name: 'Monte Cavallo',
    code: 'F460',
    province: 'MC'
  },
  {
    name: 'Montecchia di Crosara',
    code: 'F461',
    province: 'VR'
  },
  {
    name: 'Montecchio',
    code: 'F462',
    province: 'TR'
  },
  {
    name: 'Montecchio Emilia',
    code: 'F463',
    province: 'RE'
  },
  {
    name: 'Montecchio Maggiore',
    code: 'F464',
    province: 'VI'
  },
  {
    name: 'Montecchio Precalcino',
    code: 'F465',
    province: 'VI'
  },
  {
    name: 'Monte Cerignone',
    code: 'F467',
    province: 'PU'
  },
  {
    name: "Montechiaro d'Asti",
    code: 'F468',
    province: 'AT'
  },
  {
    name: "Montechiaro d'Acqui",
    code: 'F469',
    province: 'AL'
  },
  {
    name: 'Montichiari',
    code: 'F471',
    province: 'BS'
  },
  {
    name: 'Montechiarugolo',
    code: 'F473',
    province: 'PR'
  },
  {
    name: 'Montecilfone',
    code: 'F475',
    province: 'CB'
  },
  {
    name: 'Monte Compatri',
    code: 'F477',
    province: 'RM'
  },
  {
    name: 'Montecopiolo',
    code: 'F478',
    province: 'RN'
  },
  {
    name: 'Montecorice',
    code: 'F479',
    province: 'SA'
  },
  {
    name: 'Montecorvino Pugliano',
    code: 'F480',
    province: 'SA'
  },
  {
    name: 'Montecorvino Rovella',
    code: 'F481',
    province: 'SA'
  },
  {
    name: 'Montecosaro',
    code: 'F482',
    province: 'MC'
  },
  {
    name: 'Montecrestese',
    code: 'F483',
    province: 'VB'
  },
  {
    name: 'Montecreto',
    code: 'F484',
    province: 'MO'
  },
  {
    name: 'Monte di Malo',
    code: 'F486',
    province: 'VI'
  },
  {
    name: 'Montedinove',
    code: 'F487',
    province: 'AP'
  },
  {
    name: 'Monte di Procida',
    code: 'F488',
    province: 'NA'
  },
  {
    name: 'Montedoro',
    code: 'F489',
    province: 'CL'
  },
  {
    name: 'Montefalcione',
    code: 'F491',
    province: 'AV'
  },
  {
    name: 'Montefalco',
    code: 'F492',
    province: 'PG'
  },
  {
    name: 'Montefalcone Appennino',
    code: 'F493',
    province: 'FM'
  },
  {
    name: 'Montefalcone di Val Fortore',
    code: 'F494',
    province: 'BN'
  },
  {
    name: 'Montefalcone nel Sannio',
    code: 'F495',
    province: 'CB'
  },
  {
    name: 'Montefano',
    code: 'F496',
    province: 'MC'
  },
  {
    name: 'Montefelcino',
    code: 'F497',
    province: 'PU'
  },
  {
    name: 'Monteferrante',
    code: 'F498',
    province: 'CH'
  },
  {
    name: 'Montefiascone',
    code: 'F499',
    province: 'VT'
  },
  {
    name: 'Montefino',
    code: 'F500',
    province: 'TE'
  },
  {
    name: "Montefiore dell'Aso",
    code: 'F501',
    province: 'AP'
  },
  {
    name: 'Montefiore Conca',
    code: 'F502',
    province: 'RN'
  },
  {
    name: 'Montefiorino',
    code: 'F503',
    province: 'MO'
  },
  {
    name: 'Monteflavio',
    code: 'F504',
    province: 'RM'
  },
  {
    name: 'Monteforte Irpino',
    code: 'F506',
    province: 'AV'
  },
  {
    name: 'Monteforte Cilento',
    code: 'F507',
    province: 'SA'
  },
  {
    name: "Monteforte d'Alpone",
    code: 'F508',
    province: 'VR'
  },
  {
    name: 'Montefortino',
    code: 'F509',
    province: 'FM'
  },
  {
    name: 'Montefranco',
    code: 'F510',
    province: 'TR'
  },
  {
    name: 'Montefredane',
    code: 'F511',
    province: 'AV'
  },
  {
    name: 'Montefusco',
    code: 'F512',
    province: 'AV'
  },
  {
    name: 'Montegabbione',
    code: 'F513',
    province: 'TR'
  },
  {
    name: 'Montegalda',
    code: 'F514',
    province: 'VI'
  },
  {
    name: 'Montegaldella',
    code: 'F515',
    province: 'VI'
  },
  {
    name: 'Montegallo',
    code: 'F516',
    province: 'AP'
  },
  {
    name: 'Monte Giberto',
    code: 'F517',
    province: 'FM'
  },
  {
    name: 'Montegioco',
    code: 'F518',
    province: 'AL'
  },
  {
    name: 'Montegiordano',
    code: 'F519',
    province: 'CS'
  },
  {
    name: 'Montegiorgio',
    code: 'F520',
    province: 'FM'
  },
  {
    name: 'Montegranaro',
    code: 'F522',
    province: 'FM'
  },
  {
    name: 'Montegridolfo',
    code: 'F523',
    province: 'RN'
  },
  {
    name: 'Monte Grimano Terme',
    code: 'F524',
    province: 'PU'
  },
  {
    name: 'Montegrino Valtravaglia',
    code: 'F526',
    province: 'VA'
  },
  {
    name: "Montegrosso d'Asti",
    code: 'F527',
    province: 'AT'
  },
  {
    name: 'Montegrosso Pian Latte',
    code: 'F528',
    province: 'IM'
  },
  {
    name: 'Montegrotto Terme',
    code: 'F529',
    province: 'PD'
  },
  {
    name: 'Monteiasi',
    code: 'F531',
    province: 'TA'
  },
  {
    name: 'Monte Isola',
    code: 'F532',
    province: 'BS'
  },
  {
    name: 'Montelabbate',
    code: 'F533',
    province: 'PU'
  },
  {
    name: 'Montelanico',
    code: 'F534',
    province: 'RM'
  },
  {
    name: 'Montelapiano',
    code: 'F535',
    province: 'CH'
  },
  {
    name: 'Monteleone di Fermo',
    code: 'F536',
    province: 'FM'
  },
  {
    name: 'Vibo Valentia',
    code: 'F537',
    province: 'VV'
  },
  {
    name: 'Monteleone di Puglia',
    code: 'F538',
    province: 'FG'
  },
  {
    name: 'Monteleone di Spoleto',
    code: 'F540',
    province: 'PG'
  },
  {
    name: 'Monteleone Sabino',
    code: 'F541',
    province: 'RI'
  },
  {
    name: 'Monteleone Rocca Doria',
    code: 'F542',
    province: 'SS'
  },
  {
    name: "Monteleone d'Orvieto",
    code: 'F543',
    province: 'TR'
  },
  {
    name: 'Montelepre',
    code: 'F544',
    province: 'PA'
  },
  {
    name: 'Montelibretti',
    code: 'F545',
    province: 'RM'
  },
  {
    name: 'Montella',
    code: 'F546',
    province: 'AV'
  },
  {
    name: 'Montello',
    code: 'F547',
    province: 'BG'
  },
  {
    name: 'Montelongo',
    code: 'F548',
    province: 'CB'
  },
  {
    name: 'Montelparo',
    code: 'F549',
    province: 'FM'
  },
  {
    name: 'Montelupo Albese',
    code: 'F550',
    province: 'CN'
  },
  {
    name: 'Montelupo Fiorentino',
    code: 'F551',
    province: 'FI'
  },
  {
    name: 'Montelupone',
    code: 'F552',
    province: 'MC'
  },
  {
    name: 'Montemaggiore Belsito',
    code: 'F553',
    province: 'PA'
  },
  {
    name: 'Montemagno Monferrato',
    code: 'F556',
    province: 'AT'
  },
  {
    name: "Sant'Arcangelo Trimonte",
    code: 'F557',
    province: 'BN'
  },
  {
    name: 'Montemale di Cuneo',
    code: 'F558',
    province: 'CN'
  },
  {
    name: 'Montemarano',
    code: 'F559',
    province: 'AV'
  },
  {
    name: 'Montemarciano',
    code: 'F560',
    province: 'AN'
  },
  {
    name: 'Monte Marenzo',
    code: 'F561',
    province: 'LC'
  },
  {
    name: 'Montemarzino',
    code: 'F562',
    province: 'AL'
  },
  {
    name: 'Montemesola',
    code: 'F563',
    province: 'TA'
  },
  {
    name: 'Montemezzo',
    code: 'F564',
    province: 'CO'
  },
  {
    name: 'Montemignaio',
    code: 'F565',
    province: 'AR'
  },
  {
    name: 'Montemiletto',
    code: 'F566',
    province: 'AV'
  },
  {
    name: 'Pollenza',
    code: 'F567',
    province: 'MC'
  },
  {
    name: 'Montemilone',
    code: 'F568',
    province: 'PZ'
  },
  {
    name: 'Montemitro',
    code: 'F569',
    province: 'CB'
  },
  {
    name: 'Montemonaco',
    code: 'F570',
    province: 'AP'
  },
  {
    name: 'Montemurlo',
    code: 'F572',
    province: 'PO'
  },
  {
    name: 'Montemurro',
    code: 'F573',
    province: 'PZ'
  },
  {
    name: 'Montenars',
    code: 'F574',
    province: 'UD'
  },
  {
    name: 'Montenero di Bisaccia',
    code: 'F576',
    province: 'CB'
  },
  {
    name: 'Montenerodomo',
    code: 'F578',
    province: 'CH'
  },
  {
    name: 'Montenero Sabino',
    code: 'F579',
    province: 'RI'
  },
  {
    name: 'Montenero Val Cocchiara',
    code: 'F580',
    province: 'IS'
  },
  {
    name: 'Ostra Vetere',
    code: 'F581',
    province: 'AN'
  },
  {
    name: 'Monteodorisio',
    code: 'F582',
    province: 'CH'
  },
  {
    name: 'Roseto degli Abruzzi',
    code: 'F585',
    province: 'TE'
  },
  {
    name: 'Montepaone',
    code: 'F586',
    province: 'CZ'
  },
  {
    name: 'Monteparano',
    code: 'F587',
    province: 'TA'
  },
  {
    name: 'Monte Porzio',
    code: 'F589',
    province: 'PU'
  },
  {
    name: 'Monte Porzio Catone',
    code: 'F590',
    province: 'RM'
  },
  {
    name: 'Monteprandone',
    code: 'F591',
    province: 'AP'
  },
  {
    name: 'Montepulciano',
    code: 'F592',
    province: 'SI'
  },
  {
    name: 'Monterchi',
    code: 'F594',
    province: 'AR'
  },
  {
    name: 'Montereale',
    code: 'F595',
    province: 'AQ'
  },
  {
    name: 'Montereale Valcellina',
    code: 'F596',
    province: 'PN'
  },
  {
    name: 'Monterenzio',
    code: 'F597',
    province: 'BO'
  },
  {
    name: 'Monteriggioni',
    code: 'F598',
    province: 'SI'
  },
  {
    name: 'Monte Rinaldo',
    code: 'F599',
    province: 'FM'
  },
  {
    name: 'Monte Roberto',
    code: 'F600',
    province: 'AN'
  },
  {
    name: 'Monteroduni',
    code: 'F601',
    province: 'IS'
  },
  {
    name: 'Monte Romano',
    code: 'F603',
    province: 'VT'
  },
  {
    name: 'Monteroni di Lecce',
    code: 'F604',
    province: 'LE'
  },
  {
    name: "Monteroni d'Arbia",
    code: 'F605',
    province: 'SI'
  },
  {
    name: 'Monterosi',
    code: 'F606',
    province: 'VT'
  },
  {
    name: 'Monterosso Calabro',
    code: 'F607',
    province: 'VV'
  },
  {
    name: 'Monterosso Grana',
    code: 'F608',
    province: 'CN'
  },
  {
    name: 'Monterosso al Mare',
    code: 'F609',
    province: 'SP'
  },
  {
    name: 'Monterosso Almo',
    code: 'F610',
    province: 'RG'
  },
  {
    name: 'Monterotondo',
    code: 'F611',
    province: 'RM'
  },
  {
    name: 'Monterotondo Marittimo',
    code: 'F612',
    province: 'GR'
  },
  {
    name: 'Monterubbiano',
    code: 'F614',
    province: 'FM'
  },
  {
    name: 'Monte San Biagio',
    code: 'F616',
    province: 'LT'
  },
  {
    name: 'Monte San Giacomo',
    code: 'F618',
    province: 'SA'
  },
  {
    name: 'Monte San Giovanni in Sabina',
    code: 'F619',
    province: 'RI'
  },
  {
    name: 'Monte San Giovanni Campano',
    code: 'F620',
    province: 'FR'
  },
  {
    name: 'Monte San Giusto',
    code: 'F621',
    province: 'MC'
  },
  {
    name: 'Monte San Martino',
    code: 'F622',
    province: 'MC'
  },
  {
    name: 'Montesano Salentino',
    code: 'F623',
    province: 'LE'
  },
  {
    name: 'Montesano sulla Marcellana',
    code: 'F625',
    province: 'SA'
  },
  {
    name: 'Monte San Pietrangeli',
    code: 'F626',
    province: 'FM'
  },
  {
    name: 'Monte San Pietro',
    code: 'F627',
    province: 'BO'
  },
  {
    name: 'Monte San Savino',
    code: 'F628',
    province: 'AR'
  },
  {
    name: 'Monte Santa Maria Tiberina',
    code: 'F629',
    province: 'PG'
  },
  {
    name: "Monte Sant'Angelo",
    code: 'F631',
    province: 'FG'
  },
  {
    name: 'Potenza Picena',
    code: 'F632',
    province: 'MC'
  },
  {
    name: 'Monte San Vito',
    code: 'F634',
    province: 'AN'
  },
  {
    name: 'Montesarchio',
    code: 'F636',
    province: 'BN'
  },
  {
    name: 'Montescaglioso',
    code: 'F637',
    province: 'MT'
  },
  {
    name: 'Montescano',
    code: 'F638',
    province: 'PV'
  },
  {
    name: 'Montescheno',
    code: 'F639',
    province: 'VB'
  },
  {
    name: 'Montescudaio',
    code: 'F640',
    province: 'PI'
  },
  {
    name: 'Montese',
    code: 'F642',
    province: 'MO'
  },
  {
    name: 'Montesegale',
    code: 'F644',
    province: 'PV'
  },
  {
    name: 'Montesilvano',
    code: 'F646',
    province: 'PE'
  },
  {
    name: 'Montespertoli',
    code: 'F648',
    province: 'FI'
  },
  {
    name: 'Monteu da Po',
    code: 'F651',
    province: 'TO'
  },
  {
    name: 'Monte Urano',
    code: 'F653',
    province: 'FM'
  },
  {
    name: 'Monteu Roero',
    code: 'F654',
    province: 'CN'
  },
  {
    name: 'Montevago',
    code: 'F655',
    province: 'AG'
  },
  {
    name: 'Montevarchi',
    code: 'F656',
    province: 'AR'
  },
  {
    name: 'Montevecchia',
    code: 'F657',
    province: 'LC'
  },
  {
    name: 'Monteverde',
    code: 'F660',
    province: 'AV'
  },
  {
    name: 'Monteverdi Marittimo',
    code: 'F661',
    province: 'PI'
  },
  {
    name: 'Monteviale',
    code: 'F662',
    province: 'VI'
  },
  {
    name: 'Monte Vidon Combatte',
    code: 'F664',
    province: 'FM'
  },
  {
    name: 'Monte Vidon Corrado',
    code: 'F665',
    province: 'FM'
  },
  {
    name: 'Montezemolo',
    code: 'F666',
    province: 'CN'
  },
  {
    name: 'Monti',
    code: 'F667',
    province: 'SS'
  },
  {
    name: 'Montiano',
    code: 'F668',
    province: 'FC'
  },
  {
    name: "Monticello d'Alba",
    code: 'F669',
    province: 'CN'
  },
  {
    name: 'Monticelli Pavese',
    code: 'F670',
    province: 'PV'
  },
  {
    name: "Monticelli d'Ongina",
    code: 'F671',
    province: 'PC'
  },
  {
    name: 'Monticelli Brusati',
    code: 'F672',
    province: 'BS'
  },
  {
    name: 'Monticello Brianza',
    code: 'F674',
    province: 'LC'
  },
  {
    name: 'Monticello Conte Otto',
    code: 'F675',
    province: 'VI'
  },
  {
    name: 'Monticiano',
    code: 'F676',
    province: 'SI'
  },
  {
    name: 'Montieri',
    code: 'F677',
    province: 'GR'
  },
  {
    name: 'Montignoso',
    code: 'F679',
    province: 'MS'
  },
  {
    name: 'Montirone',
    code: 'F680',
    province: 'BS'
  },
  {
    name: 'Montodine',
    code: 'F681',
    province: 'CR'
  },
  {
    name: 'Montoggio',
    code: 'F682',
    province: 'GE'
  },
  {
    name: 'Montone',
    code: 'F685',
    province: 'PG'
  },
  {
    name: "Montopoli in Val d'Arno",
    code: 'F686',
    province: 'PI'
  },
  {
    name: 'Montopoli di Sabina',
    code: 'F687',
    province: 'RI'
  },
  {
    name: 'Montorfano',
    code: 'F688',
    province: 'CO'
  },
  {
    name: 'Montorio nei Frentani',
    code: 'F689',
    province: 'CB'
  },
  {
    name: 'Montorio al Vomano',
    code: 'F690',
    province: 'TE'
  },
  {
    name: 'Montorio Romano',
    code: 'F692',
    province: 'RM'
  },
  {
    name: 'Montorso Vicentino',
    code: 'F696',
    province: 'VI'
  },
  {
    name: 'Montottone',
    code: 'F697',
    province: 'FM'
  },
  {
    name: 'Montresta',
    code: 'F698',
    province: 'OR'
  },
  {
    name: 'Montù Beccaria',
    code: 'F701',
    province: 'PV'
  },
  {
    name: 'Monvalle',
    code: 'F703',
    province: 'VA'
  },
  {
    name: 'Monza',
    code: 'F704',
    province: 'MB'
  },
  {
    name: 'Monzambano',
    code: 'F705',
    province: 'MN'
  },
  {
    name: 'Monzuno',
    code: 'F706',
    province: 'BO'
  },
  {
    name: 'Morano sul Po',
    code: 'F707',
    province: 'AL'
  },
  {
    name: 'Morano Calabro',
    code: 'F708',
    province: 'CS'
  },
  {
    name: 'Moraro',
    code: 'F710',
    province: 'GO'
  },
  {
    name: 'Morazzone',
    code: 'F711',
    province: 'VA'
  },
  {
    name: 'Morbegno',
    code: 'F712',
    province: 'SO'
  },
  {
    name: 'Morbello',
    code: 'F713',
    province: 'AL'
  },
  {
    name: 'Morciano di Romagna',
    code: 'F715',
    province: 'RN'
  },
  {
    name: 'Morciano di Leuca',
    code: 'F716',
    province: 'LE'
  },
  {
    name: 'Morcone',
    code: 'F717',
    province: 'BN'
  },
  {
    name: 'Mordano',
    code: 'F718',
    province: 'BO'
  },
  {
    name: 'Morengo',
    code: 'F720',
    province: 'BG'
  },
  {
    name: 'Mores',
    code: 'F721',
    province: 'SS'
  },
  {
    name: 'Moresco',
    code: 'F722',
    province: 'FM'
  },
  {
    name: 'Moretta',
    code: 'F723',
    province: 'CN'
  },
  {
    name: 'Morfasso',
    code: 'F724',
    province: 'PC'
  },
  {
    name: 'Morgano',
    code: 'F725',
    province: 'TV'
  },
  {
    name: 'Morgex',
    code: 'F726',
    province: 'AO'
  },
  {
    name: 'Morgongiori',
    code: 'F727',
    province: 'OR'
  },
  {
    name: 'Mori',
    code: 'F728',
    province: 'TN'
  },
  {
    name: 'Moriago della Battaglia',
    code: 'F729',
    province: 'TV'
  },
  {
    name: 'Moricone',
    code: 'F730',
    province: 'RM'
  },
  {
    name: 'Morigerati',
    code: 'F731',
    province: 'SA'
  },
  {
    name: 'Morino',
    code: 'F732',
    province: 'AQ'
  },
  {
    name: 'Moriondo Torinese',
    code: 'F733',
    province: 'TO'
  },
  {
    name: 'Morlupo',
    code: 'F734',
    province: 'RM'
  },
  {
    name: 'Mormanno',
    code: 'F735',
    province: 'CS'
  },
  {
    name: 'Mornago',
    code: 'F736',
    province: 'VA'
  },
  {
    name: 'Mornese',
    code: 'F737',
    province: 'AL'
  },
  {
    name: 'Mornico al Serio',
    code: 'F738',
    province: 'BG'
  },
  {
    name: 'Mornico Losana',
    code: 'F739',
    province: 'PV'
  },
  {
    name: 'Morolo',
    code: 'F740',
    province: 'FR'
  },
  {
    name: 'Morozzo',
    code: 'F743',
    province: 'CN'
  },
  {
    name: 'Morra De Sanctis',
    code: 'F744',
    province: 'AV'
  },
  {
    name: "Morro d'Alba",
    code: 'F745',
    province: 'AN'
  },
  {
    name: 'Morro Reatino',
    code: 'F746',
    province: 'RI'
  },
  {
    name: "Morro d'Oro",
    code: 'F747',
    province: 'TE'
  },
  {
    name: 'Morrone del Sannio',
    code: 'F748',
    province: 'CB'
  },
  {
    name: 'Morrovalle',
    code: 'F749',
    province: 'MC'
  },
  {
    name: 'Morsano al Tagliamento',
    code: 'F750',
    province: 'PN'
  },
  {
    name: 'Morsasco',
    code: 'F751',
    province: 'AL'
  },
  {
    name: 'Mortara',
    code: 'F754',
    province: 'PV'
  },
  {
    name: 'Mortegliano',
    code: 'F756',
    province: 'UD'
  },
  {
    name: 'Morterone',
    code: 'F758',
    province: 'LC'
  },
  {
    name: 'Moruzzo',
    code: 'F760',
    province: 'UD'
  },
  {
    name: 'Moscazzano',
    code: 'F761',
    province: 'CR'
  },
  {
    name: 'Moschiano',
    code: 'F762',
    province: 'AV'
  },
  {
    name: "Mosciano Sant'Angelo",
    code: 'F764',
    province: 'TE'
  },
  {
    name: 'Moscufo',
    code: 'F765',
    province: 'PE'
  },
  {
    name: 'Moso in Passiria/Moos in Passeier',
    italianName: 'Moso in Passiria',
    foreignName: 'Moos in Passeier',
    code: 'F766',
    province: 'BZ'
  },
  {
    name: 'Mossa',
    code: 'F767',
    province: 'GO'
  },
  {
    name: 'Motta di Livenza',
    code: 'F770',
    province: 'TV'
  },
  {
    name: 'Motta Baluffi',
    code: 'F771',
    province: 'CR'
  },
  {
    name: 'Motta Camastra',
    code: 'F772',
    province: 'ME'
  },
  {
    name: "Motta d'Affermo",
    code: 'F773',
    province: 'ME'
  },
  {
    name: "Motta de' Conti",
    code: 'F774',
    province: 'VC'
  },
  {
    name: 'Mottafollone',
    code: 'F775',
    province: 'CS'
  },
  {
    name: 'Mottalciata',
    code: 'F776',
    province: 'BI'
  },
  {
    name: 'Motta Montecorvino',
    code: 'F777',
    province: 'FG'
  },
  {
    name: 'Motta San Giovanni',
    code: 'F779',
    province: 'RC'
  },
  {
    name: 'Motta Santa Lucia',
    code: 'F780',
    province: 'CZ'
  },
  {
    name: "Motta Sant'Anastasia",
    code: 'F781',
    province: 'CT'
  },
  {
    name: 'Motta Visconti',
    code: 'F783',
    province: 'MI'
  },
  {
    name: 'Mottola',
    code: 'F784',
    province: 'TA'
  },
  {
    name: 'Mozzagrogna',
    code: 'F785',
    province: 'CH'
  },
  {
    name: 'Mozzanica',
    code: 'F786',
    province: 'BG'
  },
  {
    name: 'Mozzate',
    code: 'F788',
    province: 'CO'
  },
  {
    name: 'Mozzecane',
    code: 'F789',
    province: 'VR'
  },
  {
    name: 'Mozzo',
    code: 'F791',
    province: 'BG'
  },
  {
    name: 'Muccia',
    code: 'F793',
    province: 'MC'
  },
  {
    name: 'Muggia',
    code: 'F795',
    province: 'TS'
  },
  {
    name: 'Muggiò',
    code: 'F797',
    province: 'MB'
  },
  {
    name: 'Mugnano del Cardinale',
    code: 'F798',
    province: 'AV'
  },
  {
    name: 'Mugnano di Napoli',
    code: 'F799',
    province: 'NA'
  },
  {
    name: 'Mulazzano',
    code: 'F801',
    province: 'LO'
  },
  {
    name: 'Mulazzo',
    code: 'F802',
    province: 'MS'
  },
  {
    name: 'Mura',
    code: 'F806',
    province: 'BS'
  },
  {
    name: 'Muravera',
    code: 'F808',
    province: 'SU'
  },
  {
    name: 'Murazzano',
    code: 'F809',
    province: 'CN'
  },
  {
    name: 'Salcedo',
    code: 'F810',
    province: 'VI'
  },
  {
    name: 'Murello',
    code: 'F811',
    province: 'CN'
  },
  {
    name: 'Murialdo',
    code: 'F813',
    province: 'SV'
  },
  {
    name: 'Murisengo',
    code: 'F814',
    province: 'AL'
  },
  {
    name: 'Murlo',
    code: 'F815',
    province: 'SI'
  },
  {
    name: 'Muro Leccese',
    code: 'F816',
    province: 'LE'
  },
  {
    name: 'Muro Lucano',
    code: 'F817',
    province: 'PZ'
  },
  {
    name: 'Muros',
    code: 'F818',
    province: 'SS'
  },
  {
    name: 'Muscoline',
    code: 'F820',
    province: 'BS'
  },
  {
    name: 'Musei',
    code: 'F822',
    province: 'SU'
  },
  {
    name: 'Musile di Piave',
    code: 'F826',
    province: 'VE'
  },
  {
    name: 'Musso',
    code: 'F828',
    province: 'CO'
  },
  {
    name: 'Mussolente',
    code: 'F829',
    province: 'VI'
  },
  {
    name: 'Mussomeli',
    code: 'F830',
    province: 'CL'
  },
  {
    name: 'Pineto',
    code: 'F831',
    province: 'TE'
  },
  {
    name: 'Muzzana del Turgnano',
    code: 'F832',
    province: 'UD'
  },
  {
    name: 'Muzzano',
    code: 'F833',
    province: 'BI'
  },
  {
    name: 'Nago-Torbole',
    code: 'F835',
    province: 'TN'
  },
  {
    name: 'Nalles/Nals',
    italianName: 'Nalles',
    foreignName: 'Nals',
    code: 'F836',
    province: 'BZ'
  },
  {
    name: 'Nanto',
    code: 'F838',
    province: 'VI'
  },
  {
    name: 'Napoli',
    code: 'F839',
    province: 'NA'
  },
  {
    name: 'Narbolia',
    code: 'F840',
    province: 'OR'
  },
  {
    name: 'Narcao',
    code: 'F841',
    province: 'SU'
  },
  {
    name: 'Nardò',
    code: 'F842',
    province: 'LE'
  },
  {
    name: 'Nardodipace',
    code: 'F843',
    province: 'VV'
  },
  {
    name: 'Narni',
    code: 'F844',
    province: 'TR'
  },
  {
    name: 'Naro',
    code: 'F845',
    province: 'AG'
  },
  {
    name: 'Narzole',
    code: 'F846',
    province: 'CN'
  },
  {
    name: 'Nasino',
    code: 'F847',
    province: 'SV'
  },
  {
    name: 'Naso',
    code: 'F848',
    province: 'ME'
  },
  {
    name: 'Naturno/Naturns',
    italianName: 'Naturno',
    foreignName: 'Naturns',
    code: 'F849',
    province: 'BZ'
  },
  {
    name: 'Nave',
    code: 'F851',
    province: 'BS'
  },
  {
    name: 'Navelli',
    code: 'F852',
    province: 'AQ'
  },
  {
    name: 'Naz-Sciaves/Natz-Schabs',
    italianName: 'Naz-Sciaves',
    foreignName: 'Natz-Schabs',
    code: 'F856',
    province: 'BZ'
  },
  {
    name: 'Nazzano',
    code: 'F857',
    province: 'RM'
  },
  {
    name: 'Ne',
    code: 'F858',
    province: 'GE'
  },
  {
    name: 'Nebbiuno',
    code: 'F859',
    province: 'NO'
  },
  {
    name: 'Negrar di Valpolicella',
    code: 'F861',
    province: 'VR'
  },
  {
    name: 'Neirone',
    code: 'F862',
    province: 'GE'
  },
  {
    name: 'Neive',
    code: 'F863',
    province: 'CN'
  },
  {
    name: 'Nembro',
    code: 'F864',
    province: 'BG'
  },
  {
    name: 'Nemi',
    code: 'F865',
    province: 'RM'
  },
  {
    name: 'Nemoli',
    code: 'F866',
    province: 'PZ'
  },
  {
    name: 'Neoneli',
    code: 'F867',
    province: 'OR'
  },
  {
    name: 'Nepi',
    code: 'F868',
    province: 'VT'
  },
  {
    name: 'Nereto',
    code: 'F870',
    province: 'TE'
  },
  {
    name: 'Nerola',
    code: 'F871',
    province: 'RM'
  },
  {
    name: 'Nervesa della Battaglia',
    code: 'F872',
    province: 'TV'
  },
  {
    name: 'Nerviano',
    code: 'F874',
    province: 'MI'
  },
  {
    name: 'Nespolo',
    code: 'F876',
    province: 'RI'
  },
  {
    name: 'Nesso',
    code: 'F877',
    province: 'CO'
  },
  {
    name: 'Netro',
    code: 'F878',
    province: 'BI'
  },
  {
    name: 'Nettuno',
    code: 'F880',
    province: 'RM'
  },
  {
    name: 'Neviano',
    code: 'F881',
    province: 'LE'
  },
  {
    name: 'Neviano degli Arduini',
    code: 'F882',
    province: 'PR'
  },
  {
    name: 'Neviglie',
    code: 'F883',
    province: 'CN'
  },
  {
    name: 'Niardo',
    code: 'F884',
    province: 'BS'
  },
  {
    name: 'Nibbiola',
    code: 'F886',
    province: 'NO'
  },
  {
    name: 'Nibionno',
    code: 'F887',
    province: 'LC'
  },
  {
    name: 'Nichelino',
    code: 'F889',
    province: 'TO'
  },
  {
    name: 'Nicolosi',
    code: 'F890',
    province: 'CT'
  },
  {
    name: 'Nicorvo',
    code: 'F891',
    province: 'PV'
  },
  {
    name: 'Nicosia',
    code: 'F892',
    province: 'EN'
  },
  {
    name: 'Nicotera',
    code: 'F893',
    province: 'VV'
  },
  {
    name: 'Niella Belbo',
    code: 'F894',
    province: 'CN'
  },
  {
    name: 'Niella Tanaro',
    code: 'F895',
    province: 'CN'
  },
  {
    name: 'Nimis',
    code: 'F898',
    province: 'UD'
  },
  {
    name: 'Niscemi',
    code: 'F899',
    province: 'CL'
  },
  {
    name: 'Nissoria',
    code: 'F900',
    province: 'EN'
  },
  {
    name: 'Nizza di Sicilia',
    code: 'F901',
    province: 'ME'
  },
  {
    name: 'Nizza Monferrato',
    code: 'F902',
    province: 'AT'
  },
  {
    name: 'Noale',
    code: 'F904',
    province: 'VE'
  },
  {
    name: 'Noasca',
    code: 'F906',
    province: 'TO'
  },
  {
    name: 'Nocara',
    code: 'F907',
    province: 'CS'
  },
  {
    name: 'Nocciano',
    code: 'F908',
    province: 'PE'
  },
  {
    name: 'Nocera Terinese',
    code: 'F910',
    province: 'CZ'
  },
  {
    name: 'Nocera Umbra',
    code: 'F911',
    province: 'PG'
  },
  {
    name: 'Nocera Inferiore',
    code: 'F912',
    province: 'SA'
  },
  {
    name: 'Nocera Superiore',
    code: 'F913',
    province: 'SA'
  },
  {
    name: 'Noceto',
    code: 'F914',
    province: 'PR'
  },
  {
    name: 'Noci',
    code: 'F915',
    province: 'BA'
  },
  {
    name: 'Nociglia',
    code: 'F916',
    province: 'LE'
  },
  {
    name: 'Noepoli',
    code: 'F917',
    province: 'PZ'
  },
  {
    name: 'Nogara',
    code: 'F918',
    province: 'VR'
  },
  {
    name: 'Nogaredo',
    code: 'F920',
    province: 'TN'
  },
  {
    name: 'Nogarole Rocca',
    code: 'F921',
    province: 'VR'
  },
  {
    name: 'Nogarole Vicentino',
    code: 'F922',
    province: 'VI'
  },
  {
    name: 'Noicattaro',
    code: 'F923',
    province: 'BA'
  },
  {
    name: 'Nola',
    code: 'F924',
    province: 'NA'
  },
  {
    name: 'Nole',
    code: 'F925',
    province: 'TO'
  },
  {
    name: 'Noli',
    code: 'F926',
    province: 'SV'
  },
  {
    name: 'Nomaglio',
    code: 'F927',
    province: 'TO'
  },
  {
    name: 'Nomi',
    code: 'F929',
    province: 'TN'
  },
  {
    name: 'Nonantola',
    code: 'F930',
    province: 'MO'
  },
  {
    name: 'None',
    code: 'F931',
    province: 'TO'
  },
  {
    name: 'Nonio',
    code: 'F932',
    province: 'VB'
  },
  {
    name: 'Noragugume',
    code: 'F933',
    province: 'NU'
  },
  {
    name: 'Norbello',
    code: 'F934',
    province: 'OR'
  },
  {
    name: 'Norcia',
    code: 'F935',
    province: 'PG'
  },
  {
    name: 'Norma',
    code: 'F937',
    province: 'LT'
  },
  {
    name: 'Nosate',
    code: 'F939',
    province: 'MI'
  },
  {
    name: 'Ponte Nossa',
    code: 'F941',
    province: 'BG'
  },
  {
    name: 'Notaresco',
    code: 'F942',
    province: 'TE'
  },
  {
    name: 'Noto',
    code: 'F943',
    province: 'SR'
  },
  {
    name: 'Nova Milanese',
    code: 'F944',
    province: 'MB'
  },
  {
    name: 'Novaledo',
    code: 'F947',
    province: 'TN'
  },
  {
    name: 'Novalesa',
    code: 'F948',
    province: 'TO'
  },
  {
    name: 'Nova Levante/Welschnofen',
    italianName: 'Nova Levante',
    foreignName: 'Welschnofen',
    code: 'F949',
    province: 'BZ'
  },
  {
    name: 'Nova Ponente/Deutschnofen',
    italianName: 'Nova Ponente',
    foreignName: 'Deutschnofen',
    code: 'F950',
    province: 'BZ'
  },
  {
    name: 'Novara di Sicilia',
    code: 'F951',
    province: 'ME'
  },
  {
    name: 'Novara',
    code: 'F952',
    province: 'NO'
  },
  {
    name: 'Novate Milanese',
    code: 'F955',
    province: 'MI'
  },
  {
    name: 'Novate Mezzola',
    code: 'F956',
    province: 'SO'
  },
  {
    name: 'Nove',
    code: 'F957',
    province: 'VI'
  },
  {
    name: 'Novedrate',
    code: 'F958',
    province: 'CO'
  },
  {
    name: 'Novellara',
    code: 'F960',
    province: 'RE'
  },
  {
    name: 'Novello',
    code: 'F961',
    province: 'CN'
  },
  {
    name: 'Noventa Padovana',
    code: 'F962',
    province: 'PD'
  },
  {
    name: 'Noventa di Piave',
    code: 'F963',
    province: 'VE'
  },
  {
    name: 'Noventa Vicentina',
    code: 'F964',
    province: 'VI'
  },
  {
    name: 'Novi Ligure',
    code: 'F965',
    province: 'AL'
  },
  {
    name: 'Novi di Modena',
    code: 'F966',
    province: 'MO'
  },
  {
    name: 'Novi Velia',
    code: 'F967',
    province: 'SA'
  },
  {
    name: 'Noviglio',
    code: 'F968',
    province: 'MI'
  },
  {
    name: 'Novoli',
    code: 'F970',
    province: 'LE'
  },
  {
    name: 'Nucetto',
    code: 'F972',
    province: 'CN'
  },
  {
    name: 'Nughedu Santa Vittoria',
    code: 'F974',
    province: 'OR'
  },
  {
    name: 'Nughedu San Nicolò',
    code: 'F975',
    province: 'SS'
  },
  {
    name: 'Nule',
    code: 'F976',
    province: 'SS'
  },
  {
    name: 'Nulvi',
    code: 'F977',
    province: 'SS'
  },
  {
    name: 'Numana',
    code: 'F978',
    province: 'AN'
  },
  {
    name: 'Nuoro',
    code: 'F979',
    province: 'NU'
  },
  {
    name: 'Nurachi',
    code: 'F980',
    province: 'OR'
  },
  {
    name: 'Nuragus',
    code: 'F981',
    province: 'SU'
  },
  {
    name: 'Nurallao',
    code: 'F982',
    province: 'SU'
  },
  {
    name: 'Nuraminis',
    code: 'F983',
    province: 'SU'
  },
  {
    name: 'Nureci',
    code: 'F985',
    province: 'OR'
  },
  {
    name: 'Nurri',
    code: 'F986',
    province: 'SU'
  },
  {
    name: 'Nus',
    code: 'F987',
    province: 'AO'
  },
  {
    name: 'Nusco',
    code: 'F988',
    province: 'AV'
  },
  {
    name: 'Nuvolento',
    code: 'F989',
    province: 'BS'
  },
  {
    name: 'Nuvolera',
    code: 'F990',
    province: 'BS'
  },
  {
    name: 'Nuxis',
    code: 'F991',
    province: 'SU'
  },
  {
    name: 'Occhieppo Inferiore',
    code: 'F992',
    province: 'BI'
  },
  {
    name: 'Occhieppo Superiore',
    code: 'F993',
    province: 'BI'
  },
  {
    name: 'Occhiobello',
    code: 'F994',
    province: 'RO'
  },
  {
    name: 'Occimiano',
    code: 'F995',
    province: 'AL'
  },
  {
    name: 'Ocre',
    code: 'F996',
    province: 'AQ'
  },
  {
    name: 'Odalengo Grande',
    code: 'F997',
    province: 'AL'
  },
  {
    name: 'Odalengo Piccolo',
    code: 'F998',
    province: 'AL'
  },
  {
    name: 'Oderzo',
    code: 'F999',
    province: 'TV'
  },
  {
    name: 'Odolo',
    code: 'G001',
    province: 'BS'
  },
  {
    name: 'Ofena',
    code: 'G002',
    province: 'AQ'
  },
  {
    name: 'Offagna',
    code: 'G003',
    province: 'AN'
  },
  {
    name: 'Offanengo',
    code: 'G004',
    province: 'CR'
  },
  {
    name: 'Offida',
    code: 'G005',
    province: 'AP'
  },
  {
    name: 'Offlaga',
    code: 'G006',
    province: 'BS'
  },
  {
    name: 'Oggebbio',
    code: 'G007',
    province: 'VB'
  },
  {
    name: 'Oggiona con Santo Stefano',
    code: 'G008',
    province: 'VA'
  },
  {
    name: 'Oggiono',
    code: 'G009',
    province: 'LC'
  },
  {
    name: 'Oglianico',
    code: 'G010',
    province: 'TO'
  },
  {
    name: 'Ogliastro Cilento',
    code: 'G011',
    province: 'SA'
  },
  {
    name: 'Oyace',
    code: 'G012',
    province: 'AO'
  },
  {
    name: 'Olbia',
    code: 'G015',
    province: 'SS'
  },
  {
    name: 'Olcenengo',
    code: 'G016',
    province: 'VC'
  },
  {
    name: 'Oldenico',
    code: 'G018',
    province: 'VC'
  },
  {
    name: 'Oleggio',
    code: 'G019',
    province: 'NO'
  },
  {
    name: 'Oleggio Castello',
    code: 'G020',
    province: 'NO'
  },
  {
    name: 'Olevano di Lomellina',
    code: 'G021',
    province: 'PV'
  },
  {
    name: 'Olevano Romano',
    code: 'G022',
    province: 'RM'
  },
  {
    name: 'Olevano sul Tusciano',
    code: 'G023',
    province: 'SA'
  },
  {
    name: 'Olgiate Comasco',
    code: 'G025',
    province: 'CO'
  },
  {
    name: 'Olgiate Molgora',
    code: 'G026',
    province: 'LC'
  },
  {
    name: 'Olgiate Olona',
    code: 'G028',
    province: 'VA'
  },
  {
    name: 'Olginate',
    code: 'G030',
    province: 'LC'
  },
  {
    name: 'Oliena',
    code: 'G031',
    province: 'NU'
  },
  {
    name: 'Oliva Gessi',
    code: 'G032',
    province: 'PV'
  },
  {
    name: 'Olivadi',
    code: 'G034',
    province: 'CZ'
  },
  {
    name: 'Oliveri',
    code: 'G036',
    province: 'ME'
  },
  {
    name: 'Oliveto Lucano',
    code: 'G037',
    province: 'MT'
  },
  {
    name: 'Oliveto Citra',
    code: 'G039',
    province: 'SA'
  },
  {
    name: 'Oliveto Lario',
    code: 'G040',
    province: 'LC'
  },
  {
    name: 'Olivetta San Michele',
    code: 'G041',
    province: 'IM'
  },
  {
    name: 'Olivola',
    code: 'G042',
    province: 'AL'
  },
  {
    name: 'Ollastra',
    code: 'G043',
    province: 'OR'
  },
  {
    name: 'Ollolai',
    code: 'G044',
    province: 'NU'
  },
  {
    name: 'Ollomont',
    code: 'G045',
    province: 'AO'
  },
  {
    name: 'Olmedo',
    code: 'G046',
    province: 'SS'
  },
  {
    name: 'Olmeneta',
    code: 'G047',
    province: 'CR'
  },
  {
    name: 'Olmo Gentile',
    code: 'G048',
    province: 'AT'
  },
  {
    name: 'Olmo al Brembo',
    code: 'G049',
    province: 'BG'
  },
  {
    name: 'Oltre il Colle',
    code: 'G050',
    province: 'BG'
  },
  {
    name: 'Oltressenda Alta',
    code: 'G054',
    province: 'BG'
  },
  {
    name: 'Oltrona di San Mamette',
    code: 'G056',
    province: 'CO'
  },
  {
    name: 'Olzai',
    code: 'G058',
    province: 'NU'
  },
  {
    name: 'Ome',
    code: 'G061',
    province: 'BS'
  },
  {
    name: 'Omegna',
    code: 'G062',
    province: 'VB'
  },
  {
    name: 'Omignano',
    code: 'G063',
    province: 'SA'
  },
  {
    name: 'Onanì',
    code: 'G064',
    province: 'NU'
  },
  {
    name: 'Onano',
    code: 'G065',
    province: 'VT'
  },
  {
    name: 'Oncino',
    code: 'G066',
    province: 'CN'
  },
  {
    name: 'Oneta',
    code: 'G068',
    province: 'BG'
  },
  {
    name: 'Onifai',
    code: 'G070',
    province: 'NU'
  },
  {
    name: 'Oniferi',
    code: 'G071',
    province: 'NU'
  },
  {
    name: 'Ono San Pietro',
    code: 'G074',
    province: 'BS'
  },
  {
    name: 'Onore',
    code: 'G075',
    province: 'BG'
  },
  {
    name: 'Onzo',
    code: 'G076',
    province: 'SV'
  },
  {
    name: 'Opera',
    code: 'G078',
    province: 'MI'
  },
  {
    name: 'Opi',
    code: 'G079',
    province: 'AQ'
  },
  {
    name: 'Oppeano',
    code: 'G080',
    province: 'VR'
  },
  {
    name: 'Oppido Lucano',
    code: 'G081',
    province: 'PZ'
  },
  {
    name: 'Oppido Mamertina',
    code: 'G082',
    province: 'RC'
  },
  {
    name: 'Ora/Auer',
    italianName: 'Ora',
    foreignName: 'Auer',
    code: 'G083',
    province: 'BZ'
  },
  {
    name: 'Orani',
    code: 'G084',
    province: 'NU'
  },
  {
    name: 'Oratino',
    code: 'G086',
    province: 'CB'
  },
  {
    name: 'Orbassano',
    code: 'G087',
    province: 'TO'
  },
  {
    name: 'Orbetello',
    code: 'G088',
    province: 'GR'
  },
  {
    name: 'Orciano Pisano',
    code: 'G090',
    province: 'PI'
  },
  {
    name: 'Orero',
    code: 'G093',
    province: 'GE'
  },
  {
    name: 'Orgiano',
    code: 'G095',
    province: 'VI'
  },
  {
    name: 'Pieve Fissiraga',
    code: 'G096',
    province: 'LO'
  },
  {
    name: 'Orgosolo',
    code: 'G097',
    province: 'NU'
  },
  {
    name: 'Oria',
    code: 'G098',
    province: 'BR'
  },
  {
    name: 'Oricola',
    code: 'G102',
    province: 'AQ'
  },
  {
    name: 'Origgio',
    code: 'G103',
    province: 'VA'
  },
  {
    name: 'Orino',
    code: 'G105',
    province: 'VA'
  },
  {
    name: 'Orio Litta',
    code: 'G107',
    province: 'LO'
  },
  {
    name: 'Orio al Serio',
    code: 'G108',
    province: 'BG'
  },
  {
    name: 'Orio Canavese',
    code: 'G109',
    province: 'TO'
  },
  {
    name: 'Oriolo',
    code: 'G110',
    province: 'CS'
  },
  {
    name: 'Oriolo Romano',
    code: 'G111',
    province: 'VT'
  },
  {
    name: 'Oristano',
    code: 'G113',
    province: 'OR'
  },
  {
    name: 'Ormea',
    code: 'G114',
    province: 'CN'
  },
  {
    name: 'Ormelle',
    code: 'G115',
    province: 'TV'
  },
  {
    name: 'Ornago',
    code: 'G116',
    province: 'MB'
  },
  {
    name: 'Ornavasso',
    code: 'G117',
    province: 'VB'
  },
  {
    name: 'Ornica',
    code: 'G118',
    province: 'BG'
  },
  {
    name: 'Orosei',
    code: 'G119',
    province: 'NU'
  },
  {
    name: 'Orotelli',
    code: 'G120',
    province: 'NU'
  },
  {
    name: 'Orria',
    code: 'G121',
    province: 'SA'
  },
  {
    name: 'Orroli',
    code: 'G122',
    province: 'SU'
  },
  {
    name: 'Orsago',
    code: 'G123',
    province: 'TV'
  },
  {
    name: 'Orsara Bormida',
    code: 'G124',
    province: 'AL'
  },
  {
    name: 'Orsara di Puglia',
    code: 'G125',
    province: 'FG'
  },
  {
    name: 'Orsenigo',
    code: 'G126',
    province: 'CO'
  },
  {
    name: 'Orsogna',
    code: 'G128',
    province: 'CH'
  },
  {
    name: 'Orsomarso',
    code: 'G129',
    province: 'CS'
  },
  {
    name: 'Orta di Atella',
    code: 'G130',
    province: 'CE'
  },
  {
    name: 'Orta Nova',
    code: 'G131',
    province: 'FG'
  },
  {
    name: 'Ortacesus',
    code: 'G133',
    province: 'SU'
  },
  {
    name: 'Orta San Giulio',
    code: 'G134',
    province: 'NO'
  },
  {
    name: 'Orte',
    code: 'G135',
    province: 'VT'
  },
  {
    name: 'Ortelle',
    code: 'G136',
    province: 'LE'
  },
  {
    name: 'Ortezzano',
    code: 'G137',
    province: 'FM'
  },
  {
    name: 'Ortignano Raggiolo',
    code: 'G139',
    province: 'AR'
  },
  {
    name: 'Ortisei/St. Ulrich',
    italianName: 'Ortisei',
    foreignName: 'St. Ulrich',
    code: 'G140',
    province: 'BZ'
  },
  {
    name: 'Ortona',
    code: 'G141',
    province: 'CH'
  },
  {
    name: 'Ortona dei Marsi',
    code: 'G142',
    province: 'AQ'
  },
  {
    name: 'Luni',
    code: 'G143',
    province: 'SP'
  },
  {
    name: 'Ortovero',
    code: 'G144',
    province: 'SV'
  },
  {
    name: 'Ortucchio',
    code: 'G145',
    province: 'AQ'
  },
  {
    name: 'Ortueri',
    code: 'G146',
    province: 'NU'
  },
  {
    name: 'Orune',
    code: 'G147',
    province: 'NU'
  },
  {
    name: 'Orvieto',
    code: 'G148',
    province: 'TR'
  },
  {
    name: 'Orzinuovi',
    code: 'G149',
    province: 'BS'
  },
  {
    name: 'Orzivecchi',
    code: 'G150',
    province: 'BS'
  },
  {
    name: 'Osasco',
    code: 'G151',
    province: 'TO'
  },
  {
    name: 'Osasio',
    code: 'G152',
    province: 'TO'
  },
  {
    name: 'Oschiri',
    code: 'G153',
    province: 'SS'
  },
  {
    name: 'Osidda',
    code: 'G154',
    province: 'NU'
  },
  {
    name: 'Osiglia',
    code: 'G155',
    province: 'SV'
  },
  {
    name: 'Osilo',
    code: 'G156',
    province: 'SS'
  },
  {
    name: 'Osimo',
    code: 'G157',
    province: 'AN'
  },
  {
    name: 'Osini',
    code: 'G158',
    province: 'NU'
  },
  {
    name: 'Osio Sopra',
    code: 'G159',
    province: 'BG'
  },
  {
    name: 'Osio Sotto',
    code: 'G160',
    province: 'BG'
  },
  {
    name: 'Osnago',
    code: 'G161',
    province: 'LC'
  },
  {
    name: 'Osoppo',
    code: 'G163',
    province: 'UD'
  },
  {
    name: 'Ospedaletti',
    code: 'G164',
    province: 'IM'
  },
  {
    name: "Ospedaletto d'Alpinolo",
    code: 'G165',
    province: 'AV'
  },
  {
    name: 'Ospedaletto Lodigiano',
    code: 'G166',
    province: 'LO'
  },
  {
    name: 'Ospedaletto Euganeo',
    code: 'G167',
    province: 'PD'
  },
  {
    name: 'Ospedaletto',
    code: 'G168',
    province: 'TN'
  },
  {
    name: 'Ospitale di Cadore',
    code: 'G169',
    province: 'BL'
  },
  {
    name: 'Ospitaletto',
    code: 'G170',
    province: 'BS'
  },
  {
    name: 'Ossago Lodigiano',
    code: 'G171',
    province: 'LO'
  },
  {
    name: 'Ossana',
    code: 'G173',
    province: 'TN'
  },
  {
    name: 'Ossi',
    code: 'G178',
    province: 'SS'
  },
  {
    name: 'Ossimo',
    code: 'G179',
    province: 'BS'
  },
  {
    name: 'Ossona',
    code: 'G181',
    province: 'MI'
  },
  {
    name: 'Ostana',
    code: 'G183',
    province: 'CN'
  },
  {
    name: 'Ostellato',
    code: 'G184',
    province: 'FE'
  },
  {
    name: 'Ostiano',
    code: 'G185',
    province: 'CR'
  },
  {
    name: 'Ostiglia',
    code: 'G186',
    province: 'MN'
  },
  {
    name: 'Ostuni',
    code: 'G187',
    province: 'BR'
  },
  {
    name: 'Otranto',
    code: 'G188',
    province: 'LE'
  },
  {
    name: 'Otricoli',
    code: 'G189',
    province: 'TR'
  },
  {
    name: 'Ottaviano',
    code: 'G190',
    province: 'NA'
  },
  {
    name: 'Ottana',
    code: 'G191',
    province: 'NU'
  },
  {
    name: 'Ottati',
    code: 'G192',
    province: 'SA'
  },
  {
    name: 'Ottiglio',
    code: 'G193',
    province: 'AL'
  },
  {
    name: 'Ottobiano',
    code: 'G194',
    province: 'PV'
  },
  {
    name: 'Ottone',
    code: 'G195',
    province: 'PC'
  },
  {
    name: 'Oulx',
    code: 'G196',
    province: 'TO'
  },
  {
    name: 'Ovada',
    code: 'G197',
    province: 'AL'
  },
  {
    name: 'Ovaro',
    code: 'G198',
    province: 'UD'
  },
  {
    name: 'Oviglio',
    code: 'G199',
    province: 'AL'
  },
  {
    name: 'Ovindoli',
    code: 'G200',
    province: 'AQ'
  },
  {
    name: 'Ovodda',
    code: 'G201',
    province: 'NU'
  },
  {
    name: 'Ozegna',
    code: 'G202',
    province: 'TO'
  },
  {
    name: 'Ozieri',
    code: 'G203',
    province: 'SS'
  },
  {
    name: 'Ozzano Monferrato',
    code: 'G204',
    province: 'AL'
  },
  {
    name: "Ozzano dell'Emilia",
    code: 'G205',
    province: 'BO'
  },
  {
    name: 'Ozzero',
    code: 'G206',
    province: 'MI'
  },
  {
    name: 'Pabillonis',
    code: 'G207',
    province: 'SU'
  },
  {
    name: 'Paceco',
    code: 'G208',
    province: 'TP'
  },
  {
    name: 'Pace del Mela',
    code: 'G209',
    province: 'ME'
  },
  {
    name: 'Pacentro',
    code: 'G210',
    province: 'AQ'
  },
  {
    name: 'Pachino',
    code: 'G211',
    province: 'SR'
  },
  {
    name: 'Paciano',
    code: 'G212',
    province: 'PG'
  },
  {
    name: 'Padenghe sul Garda',
    code: 'G213',
    province: 'BS'
  },
  {
    name: 'Paderna',
    code: 'G215',
    province: 'AL'
  },
  {
    name: 'Paderno Franciacorta',
    code: 'G217',
    province: 'BS'
  },
  {
    name: "Paderno d'Adda",
    code: 'G218',
    province: 'LC'
  },
  {
    name: 'Paderno Dugnano',
    code: 'G220',
    province: 'MI'
  },
  {
    name: 'Paderno Ponchielli',
    code: 'G222',
    province: 'CR'
  },
  {
    name: 'Robbiate',
    code: 'G223',
    province: 'LC'
  },
  {
    name: 'Padova',
    code: 'G224',
    province: 'PD'
  },
  {
    name: 'Padria',
    code: 'G225',
    province: 'SS'
  },
  {
    name: 'Padula',
    code: 'G226',
    province: 'SA'
  },
  {
    name: 'Paduli',
    code: 'G227',
    province: 'BN'
  },
  {
    name: 'Paesana',
    code: 'G228',
    province: 'CN'
  },
  {
    name: 'Paese',
    code: 'G229',
    province: 'TV'
  },
  {
    name: 'Pagani',
    code: 'G230',
    province: 'SA'
  },
  {
    name: 'Paganico Sabino',
    code: 'G232',
    province: 'RI'
  },
  {
    name: 'Pagazzano',
    code: 'G233',
    province: 'BG'
  },
  {
    name: 'Pagliara',
    code: 'G234',
    province: 'ME'
  },
  {
    name: 'Paglieta',
    code: 'G237',
    province: 'CH'
  },
  {
    name: 'Pagnacco',
    code: 'G238',
    province: 'UD'
  },
  {
    name: 'Pagno',
    code: 'G240',
    province: 'CN'
  },
  {
    name: 'Pagnona',
    code: 'G241',
    province: 'LC'
  },
  {
    name: 'Pago del Vallo di Lauro',
    code: 'G242',
    province: 'AV'
  },
  {
    name: 'Pago Veiano',
    code: 'G243',
    province: 'BN'
  },
  {
    name: 'Paisco Loveno',
    code: 'G247',
    province: 'BS'
  },
  {
    name: 'Paitone',
    code: 'G248',
    province: 'BS'
  },
  {
    name: 'Paladina',
    code: 'G249',
    province: 'BG'
  },
  {
    name: 'Palagano',
    code: 'G250',
    province: 'MO'
  },
  {
    name: 'Palagianello',
    code: 'G251',
    province: 'TA'
  },
  {
    name: 'Palagiano',
    code: 'G252',
    province: 'TA'
  },
  {
    name: 'Palagonia',
    code: 'G253',
    province: 'CT'
  },
  {
    name: 'Palaia',
    code: 'G254',
    province: 'PI'
  },
  {
    name: 'Palanzano',
    code: 'G255',
    province: 'PR'
  },
  {
    name: 'Palata',
    code: 'G257',
    province: 'CB'
  },
  {
    name: 'Palau',
    code: 'G258',
    province: 'SS'
  },
  {
    name: 'Palazzago',
    code: 'G259',
    province: 'BG'
  },
  {
    name: 'Palazzo Pignano',
    code: 'G260',
    province: 'CR'
  },
  {
    name: 'Palazzo San Gervasio',
    code: 'G261',
    province: 'PZ'
  },
  {
    name: 'Palazzo Canavese',
    code: 'G262',
    province: 'TO'
  },
  {
    name: 'Palazzo Adriano',
    code: 'G263',
    province: 'PA'
  },
  {
    name: "Palazzolo sull'Oglio",
    code: 'G264',
    province: 'BS'
  },
  {
    name: 'Palazzolo Vercellese',
    code: 'G266',
    province: 'VC'
  },
  {
    name: 'Palazzolo Acreide',
    code: 'G267',
    province: 'SR'
  },
  {
    name: 'Palazzolo dello Stella',
    code: 'G268',
    province: 'UD'
  },
  {
    name: 'Palazzuolo sul Senio',
    code: 'G270',
    province: 'FI'
  },
  {
    name: 'Palena',
    code: 'G271',
    province: 'CH'
  },
  {
    name: 'Palermiti',
    code: 'G272',
    province: 'CZ'
  },
  {
    name: 'Palermo',
    code: 'G273',
    province: 'PA'
  },
  {
    name: 'Palestrina',
    code: 'G274',
    province: 'RM'
  },
  {
    name: 'Palestro',
    code: 'G275',
    province: 'PV'
  },
  {
    name: 'Paliano',
    code: 'G276',
    province: 'FR'
  },
  {
    name: 'Palizzi',
    code: 'G277',
    province: 'RC'
  },
  {
    name: 'Pallagorio',
    code: 'G278',
    province: 'KR'
  },
  {
    name: 'Pallanzeno',
    code: 'G280',
    province: 'VB'
  },
  {
    name: 'Pallare',
    code: 'G281',
    province: 'SV'
  },
  {
    name: 'Palma di Montechiaro',
    code: 'G282',
    province: 'AG'
  },
  {
    name: 'Palma Campania',
    code: 'G283',
    province: 'NA'
  },
  {
    name: 'Palmanova',
    code: 'G284',
    province: 'UD'
  },
  {
    name: 'Palmariggi',
    code: 'G285',
    province: 'LE'
  },
  {
    name: 'Palmas Arborea',
    code: 'G286',
    province: 'OR'
  },
  {
    name: 'San Giovanni Suergiu',
    code: 'G287',
    province: 'SU'
  },
  {
    name: 'Palmi',
    code: 'G288',
    province: 'RC'
  },
  {
    name: 'Palmiano',
    code: 'G289',
    province: 'AP'
  },
  {
    name: 'Palmoli',
    code: 'G290',
    province: 'CH'
  },
  {
    name: 'Palo del Colle',
    code: 'G291',
    province: 'BA'
  },
  {
    name: 'Palomonte',
    code: 'G292',
    province: 'SA'
  },
  {
    name: 'Palombara Sabina',
    code: 'G293',
    province: 'RM'
  },
  {
    name: 'Palombaro',
    code: 'G294',
    province: 'CH'
  },
  {
    name: 'Palosco',
    code: 'G295',
    province: 'BG'
  },
  {
    name: 'Palù del Fersina',
    code: 'G296',
    province: 'TN'
  },
  {
    name: 'Palù',
    code: 'G297',
    province: 'VR'
  },
  {
    name: 'Paludi',
    code: 'G298',
    province: 'CS'
  },
  {
    name: 'Plaus/Plaus',
    italianName: 'Plaus',
    foreignName: 'Plaus',
    code: 'G299',
    province: 'BZ'
  },
  {
    name: 'Paluzza',
    code: 'G300',
    province: 'UD'
  },
  {
    name: 'Pamparato',
    code: 'G302',
    province: 'CN'
  },
  {
    name: 'Pancalieri',
    code: 'G303',
    province: 'TO'
  },
  {
    name: 'Pancarana',
    code: 'G304',
    province: 'PV'
  },
  {
    name: 'Panchià',
    code: 'G305',
    province: 'TN'
  },
  {
    name: 'Pandino',
    code: 'G306',
    province: 'CR'
  },
  {
    name: 'Panettieri',
    code: 'G307',
    province: 'CS'
  },
  {
    name: 'Panicale',
    code: 'G308',
    province: 'PG'
  },
  {
    name: 'Villaricca',
    code: 'G309',
    province: 'NA'
  },
  {
    name: 'Pannarano',
    code: 'G311',
    province: 'BN'
  },
  {
    name: 'Panni',
    code: 'G312',
    province: 'FG'
  },
  {
    name: 'Pantelleria',
    code: 'G315',
    province: 'TP'
  },
  {
    name: 'Pantigliate',
    code: 'G316',
    province: 'MI'
  },
  {
    name: 'Paola',
    code: 'G317',
    province: 'CS'
  },
  {
    name: 'Paolisi',
    code: 'G318',
    province: 'BN'
  },
  {
    name: 'Valderice',
    code: 'G319',
    province: 'TP'
  },
  {
    name: 'Papasidero',
    code: 'G320',
    province: 'CS'
  },
  {
    name: 'Papozze',
    code: 'G323',
    province: 'RO'
  },
  {
    name: 'Parabiago',
    code: 'G324',
    province: 'MI'
  },
  {
    name: 'Parabita',
    code: 'G325',
    province: 'LE'
  },
  {
    name: 'Paratico',
    code: 'G327',
    province: 'BS'
  },
  {
    name: 'Parcines/Partschins',
    italianName: 'Parcines',
    foreignName: 'Partschins',
    code: 'G328',
    province: 'BZ'
  },
  {
    name: 'Parella',
    code: 'G330',
    province: 'TO'
  },
  {
    name: 'Parenti',
    code: 'G331',
    province: 'CS'
  },
  {
    name: 'Parete',
    code: 'G333',
    province: 'CE'
  },
  {
    name: 'Pareto',
    code: 'G334',
    province: 'AL'
  },
  {
    name: 'Parghelia',
    code: 'G335',
    province: 'VV'
  },
  {
    name: 'Parlasco',
    code: 'G336',
    province: 'LC'
  },
  {
    name: 'Parma',
    code: 'G337',
    province: 'PR'
  },
  {
    name: 'Parodi Ligure',
    code: 'G338',
    province: 'AL'
  },
  {
    name: 'Paroldo',
    code: 'G339',
    province: 'CN'
  },
  {
    name: 'Parolise',
    code: 'G340',
    province: 'AV'
  },
  {
    name: 'Parona',
    code: 'G342',
    province: 'PV'
  },
  {
    name: 'Parrano',
    code: 'G344',
    province: 'TR'
  },
  {
    name: 'Parre',
    code: 'G346',
    province: 'BG'
  },
  {
    name: 'Partanna',
    code: 'G347',
    province: 'TP'
  },
  {
    name: 'Partinico',
    code: 'G348',
    province: 'PA'
  },
  {
    name: 'Paruzzaro',
    code: 'G349',
    province: 'NO'
  },
  {
    name: 'Parzanica',
    code: 'G350',
    province: 'BG'
  },
  {
    name: 'Pasian di Prato',
    code: 'G352',
    province: 'UD'
  },
  {
    name: 'Pasiano di Pordenone',
    code: 'G353',
    province: 'PN'
  },
  {
    name: 'Paspardo',
    code: 'G354',
    province: 'BS'
  },
  {
    name: 'Passerano Marmorito',
    code: 'G358',
    province: 'AT'
  },
  {
    name: 'Passignano sul Trasimeno',
    code: 'G359',
    province: 'PG'
  },
  {
    name: 'Passirano',
    code: 'G361',
    province: 'BS'
  },
  {
    name: 'Pastena',
    code: 'G362',
    province: 'FR'
  },
  {
    name: 'Pastorano',
    code: 'G364',
    province: 'CE'
  },
  {
    name: 'Pastrengo',
    code: 'G365',
    province: 'VR'
  },
  {
    name: 'Pasturana',
    code: 'G367',
    province: 'AL'
  },
  {
    name: 'Pasturo',
    code: 'G368',
    province: 'LC'
  },
  {
    name: 'Paternopoli',
    code: 'G370',
    province: 'AV'
  },
  {
    name: 'Paternò',
    code: 'G371',
    province: 'CT'
  },
  {
    name: 'Paterno Calabro',
    code: 'G372',
    province: 'CS'
  },
  {
    name: 'Patrica',
    code: 'G374',
    province: 'FR'
  },
  {
    name: 'Pattada',
    code: 'G376',
    province: 'SS'
  },
  {
    name: 'Patti',
    code: 'G377',
    province: 'ME'
  },
  {
    name: 'Patù',
    code: 'G378',
    province: 'LE'
  },
  {
    name: 'Pau',
    code: 'G379',
    province: 'OR'
  },
  {
    name: 'Paularo',
    code: 'G381',
    province: 'UD'
  },
  {
    name: 'Pauli Arbarei',
    code: 'G382',
    province: 'SU'
  },
  {
    name: 'San Nicolò Gerrei',
    code: 'G383',
    province: 'SU'
  },
  {
    name: 'Paulilatino',
    code: 'G384',
    province: 'OR'
  },
  {
    name: 'Paullo',
    code: 'G385',
    province: 'MI'
  },
  {
    name: 'Paupisi',
    code: 'G386',
    province: 'BN'
  },
  {
    name: 'Pavarolo',
    code: 'G387',
    province: 'TO'
  },
  {
    name: 'Pavia',
    code: 'G388',
    province: 'PV'
  },
  {
    name: 'Pavia di Udine',
    code: 'G389',
    province: 'UD'
  },
  {
    name: 'Pavone del Mella',
    code: 'G391',
    province: 'BS'
  },
  {
    name: 'Pavone Canavese',
    code: 'G392',
    province: 'TO'
  },
  {
    name: 'Pavullo nel Frignano',
    code: 'G393',
    province: 'MO'
  },
  {
    name: 'Pazzano',
    code: 'G394',
    province: 'RC'
  },
  {
    name: 'Peccioli',
    code: 'G395',
    province: 'PI'
  },
  {
    name: 'Pecetto di Valenza',
    code: 'G397',
    province: 'AL'
  },
  {
    name: 'Pecetto Torinese',
    code: 'G398',
    province: 'TO'
  },
  {
    name: 'Pedara',
    code: 'G402',
    province: 'CT'
  },
  {
    name: 'Pedaso',
    code: 'G403',
    province: 'FM'
  },
  {
    name: 'Pedavena',
    code: 'G404',
    province: 'BL'
  },
  {
    name: 'Pedemonte',
    code: 'G406',
    province: 'VI'
  },
  {
    name: 'San Paolo',
    code: 'G407',
    province: 'BS'
  },
  {
    name: 'Pederobba',
    code: 'G408',
    province: 'TV'
  },
  {
    name: 'Pedesina',
    code: 'G410',
    province: 'SO'
  },
  {
    name: 'Pedivigliano',
    code: 'G411',
    province: 'CS'
  },
  {
    name: 'Pedrengo',
    code: 'G412',
    province: 'BG'
  },
  {
    name: 'Peglio',
    code: 'G415',
    province: 'CO'
  },
  {
    name: 'Peglio',
    code: 'G416',
    province: 'PU'
  },
  {
    name: 'Pegognaga',
    code: 'G417',
    province: 'MN'
  },
  {
    name: 'Peia',
    code: 'G418',
    province: 'BG'
  },
  {
    name: 'Peio',
    code: 'G419',
    province: 'TN'
  },
  {
    name: 'Pelago',
    code: 'G420',
    province: 'FI'
  },
  {
    name: 'Pella',
    code: 'G421',
    province: 'NO'
  },
  {
    name: 'Pellegrino Parmense',
    code: 'G424',
    province: 'PR'
  },
  {
    name: 'Pellezzano',
    code: 'G426',
    province: 'SA'
  },
  {
    name: 'Pellizzano',
    code: 'G428',
    province: 'TN'
  },
  {
    name: 'Pelugo',
    code: 'G429',
    province: 'TN'
  },
  {
    name: 'Penango',
    code: 'G430',
    province: 'AT'
  },
  {
    name: 'Poggiridenti',
    code: 'G431',
    province: 'SO'
  },
  {
    name: 'Penna in Teverina',
    code: 'G432',
    province: 'TR'
  },
  {
    name: 'Pennabilli',
    code: 'G433',
    province: 'RN'
  },
  {
    name: 'Pennadomo',
    code: 'G434',
    province: 'CH'
  },
  {
    name: 'Pennapiedimonte',
    code: 'G435',
    province: 'CH'
  },
  {
    name: 'Penna San Giovanni',
    code: 'G436',
    province: 'MC'
  },
  {
    name: "Penna Sant'Andrea",
    code: 'G437',
    province: 'TE'
  },
  {
    name: 'Penne',
    code: 'G438',
    province: 'PE'
  },
  {
    name: 'Pentone',
    code: 'G439',
    province: 'CZ'
  },
  {
    name: 'Perano',
    code: 'G441',
    province: 'CH'
  },
  {
    name: 'Perarolo di Cadore',
    code: 'G442',
    province: 'BL'
  },
  {
    name: 'Perca/Percha',
    italianName: 'Perca',
    foreignName: 'Percha',
    code: 'G443',
    province: 'BZ'
  },
  {
    name: 'Percile',
    code: 'G444',
    province: 'RM'
  },
  {
    name: 'Perdasdefogu',
    code: 'G445',
    province: 'NU'
  },
  {
    name: 'Perdaxius',
    code: 'G446',
    province: 'SU'
  },
  {
    name: 'Perdifumo',
    code: 'G447',
    province: 'SA'
  },
  {
    name: 'Pereto',
    code: 'G449',
    province: 'AQ'
  },
  {
    name: 'Perfugas',
    code: 'G450',
    province: 'SS'
  },
  {
    name: 'Pergine Valsugana',
    code: 'G452',
    province: 'TN'
  },
  {
    name: 'Pergola',
    code: 'G453',
    province: 'PU'
  },
  {
    name: 'Perinaldo',
    code: 'G454',
    province: 'IM'
  },
  {
    name: 'Perito',
    code: 'G455',
    province: 'SA'
  },
  {
    name: 'Perledo',
    code: 'G456',
    province: 'LC'
  },
  {
    name: 'Perletto',
    code: 'G457',
    province: 'CN'
  },
  {
    name: 'Perlo',
    code: 'G458',
    province: 'CN'
  },
  {
    name: 'Perloz',
    code: 'G459',
    province: 'AO'
  },
  {
    name: 'Pernumia',
    code: 'G461',
    province: 'PD'
  },
  {
    name: 'Perosa Canavese',
    code: 'G462',
    province: 'TO'
  },
  {
    name: 'Perosa Argentina',
    code: 'G463',
    province: 'TO'
  },
  {
    name: 'Perrero',
    code: 'G465',
    province: 'TO'
  },
  {
    name: 'San Giovanni in Persiceto',
    code: 'G467',
    province: 'BO'
  },
  {
    name: 'Persico Dosimo',
    code: 'G469',
    province: 'CR'
  },
  {
    name: 'Pertengo',
    code: 'G471',
    province: 'VC'
  },
  {
    name: 'Pertica Alta',
    code: 'G474',
    province: 'BS'
  },
  {
    name: 'Pertica Bassa',
    code: 'G475',
    province: 'BS'
  },
  {
    name: 'Pertosa',
    code: 'G476',
    province: 'SA'
  },
  {
    name: 'Pertusio',
    code: 'G477',
    province: 'TO'
  },
  {
    name: 'Perugia',
    code: 'G478',
    province: 'PG'
  },
  {
    name: 'Pesaro',
    code: 'G479',
    province: 'PU'
  },
  {
    name: 'Pescaglia',
    code: 'G480',
    province: 'LU'
  },
  {
    name: 'Pescantina',
    code: 'G481',
    province: 'VR'
  },
  {
    name: 'Pescara',
    code: 'G482',
    province: 'PE'
  },
  {
    name: 'Pescarolo ed Uniti',
    code: 'G483',
    province: 'CR'
  },
  {
    name: 'Pescasseroli',
    code: 'G484',
    province: 'AQ'
  },
  {
    name: 'Pescate',
    code: 'G485',
    province: 'LC'
  },
  {
    name: 'Pesche',
    code: 'G486',
    province: 'IS'
  },
  {
    name: 'Peschici',
    code: 'G487',
    province: 'FG'
  },
  {
    name: 'Peschiera Borromeo',
    code: 'G488',
    province: 'MI'
  },
  {
    name: 'Peschiera del Garda',
    code: 'G489',
    province: 'VR'
  },
  {
    name: 'Pescia',
    code: 'G491',
    province: 'PT'
  },
  {
    name: 'Pescina',
    code: 'G492',
    province: 'AQ'
  },
  {
    name: 'Pescocostanzo',
    code: 'G493',
    province: 'AQ'
  },
  {
    name: 'Pesco Sannita',
    code: 'G494',
    province: 'BN'
  },
  {
    name: 'Pescolanciano',
    code: 'G495',
    province: 'IS'
  },
  {
    name: 'Pescopagano',
    code: 'G496',
    province: 'PZ'
  },
  {
    name: 'Pescopennataro',
    code: 'G497',
    province: 'IS'
  },
  {
    name: 'Pescorocchiano',
    code: 'G498',
    province: 'RI'
  },
  {
    name: 'Pescosansonesco',
    code: 'G499',
    province: 'PE'
  },
  {
    name: 'Pescosolido',
    code: 'G500',
    province: 'FR'
  },
  {
    name: 'Pessano con Bornago',
    code: 'G502',
    province: 'MI'
  },
  {
    name: 'Pessina Cremonese',
    code: 'G504',
    province: 'CR'
  },
  {
    name: 'Pessinetto',
    code: 'G505',
    province: 'TO'
  },
  {
    name: 'Petacciato',
    code: 'G506',
    province: 'CB'
  },
  {
    name: 'Turania',
    code: 'G507',
    province: 'RI'
  },
  {
    name: 'Petilia Policastro',
    code: 'G508',
    province: 'KR'
  },
  {
    name: 'Petina',
    code: 'G509',
    province: 'SA'
  },
  {
    name: 'Petralia Soprana',
    code: 'G510',
    province: 'PA'
  },
  {
    name: 'Petralia Sottana',
    code: 'G511',
    province: 'PA'
  },
  {
    name: 'Petrella Tifernina',
    code: 'G512',
    province: 'CB'
  },
  {
    name: 'Petrella Salto',
    code: 'G513',
    province: 'RI'
  },
  {
    name: 'Petriano',
    code: 'G514',
    province: 'PU'
  },
  {
    name: 'Petriolo',
    code: 'G515',
    province: 'MC'
  },
  {
    name: 'Petritoli',
    code: 'G516',
    province: 'FM'
  },
  {
    name: 'Petrizzi',
    code: 'G517',
    province: 'CZ'
  },
  {
    name: 'Petronà',
    code: 'G518',
    province: 'CZ'
  },
  {
    name: 'Petruro Irpino',
    code: 'G519',
    province: 'AV'
  },
  {
    name: 'Pettenasco',
    code: 'G520',
    province: 'NO'
  },
  {
    name: 'Pettinengo',
    code: 'G521',
    province: 'BI'
  },
  {
    name: 'Pettineo',
    code: 'G522',
    province: 'ME'
  },
  {
    name: 'Pettoranello del Molise',
    code: 'G523',
    province: 'IS'
  },
  {
    name: 'Pettorano sul Gizio',
    code: 'G524',
    province: 'AQ'
  },
  {
    name: 'Pettorazza Grimani',
    code: 'G525',
    province: 'RO'
  },
  {
    name: 'Peveragno',
    code: 'G526',
    province: 'CN'
  },
  {
    name: 'Pezzana',
    code: 'G528',
    province: 'VC'
  },
  {
    name: 'Pezzaze',
    code: 'G529',
    province: 'BS'
  },
  {
    name: 'Pezzolo Valle Uzzone',
    code: 'G532',
    province: 'CN'
  },
  {
    name: "Piacenza d'Adige",
    code: 'G534',
    province: 'PD'
  },
  {
    name: 'Piacenza',
    code: 'G535',
    province: 'PC'
  },
  {
    name: 'Piaggine',
    code: 'G538',
    province: 'SA'
  },
  {
    name: "Valle dell'Angelo",
    code: 'G540',
    province: 'SA'
  },
  {
    name: 'Piana di Monte Verna',
    code: 'G541',
    province: 'CE'
  },
  {
    name: 'Piana Crixia',
    code: 'G542',
    province: 'SV'
  },
  {
    name: 'Piana degli Albanesi',
    code: 'G543',
    province: 'PA'
  },
  {
    name: 'Pontboset',
    code: 'G545',
    province: 'AO'
  },
  {
    name: 'Pian Camuno',
    code: 'G546',
    province: 'BS'
  },
  {
    name: 'Piancastagnaio',
    code: 'G547',
    province: 'SI'
  },
  {
    name: 'Piancogno',
    code: 'G549',
    province: 'BS'
  },
  {
    name: 'Piandimeleto',
    code: 'G551',
    province: 'PU'
  },
  {
    name: 'Piane Crati',
    code: 'G553',
    province: 'CS'
  },
  {
    name: 'Pianella',
    code: 'G555',
    province: 'PE'
  },
  {
    name: 'Pianello del Lario',
    code: 'G556',
    province: 'CO'
  },
  {
    name: 'Pianello Val Tidone',
    code: 'G557',
    province: 'PC'
  },
  {
    name: 'Pianengo',
    code: 'G558',
    province: 'CR'
  },
  {
    name: 'Pianezza',
    code: 'G559',
    province: 'TO'
  },
  {
    name: 'Pianezze',
    code: 'G560',
    province: 'VI'
  },
  {
    name: 'Pianfei',
    code: 'G561',
    province: 'CN'
  },
  {
    name: 'Pianico',
    code: 'G564',
    province: 'BG'
  },
  {
    name: 'Pianiga',
    code: 'G565',
    province: 'VE'
  },
  {
    name: 'San Benedetto Val di Sambro',
    code: 'G566',
    province: 'BO'
  },
  {
    name: 'Piano di Sorrento',
    code: 'G568',
    province: 'NA'
  },
  {
    name: 'Pianoro',
    code: 'G570',
    province: 'BO'
  },
  {
    name: 'Piansano',
    code: 'G571',
    province: 'VT'
  },
  {
    name: 'Piantedo',
    code: 'G572',
    province: 'SO'
  },
  {
    name: 'Piario',
    code: 'G574',
    province: 'BG'
  },
  {
    name: 'Piasco',
    code: 'G575',
    province: 'CN'
  },
  {
    name: 'Piateda',
    code: 'G576',
    province: 'SO'
  },
  {
    name: 'Piatto',
    code: 'G577',
    province: 'BI'
  },
  {
    name: 'Piazza Brembana',
    code: 'G579',
    province: 'BG'
  },
  {
    name: 'Piazza Armerina',
    code: 'G580',
    province: 'EN'
  },
  {
    name: 'Piazza al Serchio',
    code: 'G582',
    province: 'LU'
  },
  {
    name: 'Piazzatorre',
    code: 'G583',
    province: 'BG'
  },
  {
    name: 'Piazzola sul Brenta',
    code: 'G587',
    province: 'PD'
  },
  {
    name: 'Piazzolo',
    code: 'G588',
    province: 'BG'
  },
  {
    name: 'Picciano',
    code: 'G589',
    province: 'PE'
  },
  {
    name: 'Picerno',
    code: 'G590',
    province: 'PZ'
  },
  {
    name: 'Picinisco',
    code: 'G591',
    province: 'FR'
  },
  {
    name: 'Pico',
    code: 'G592',
    province: 'FR'
  },
  {
    name: 'Piea',
    code: 'G593',
    province: 'AT'
  },
  {
    name: 'Piedicavallo',
    code: 'G594',
    province: 'BI'
  },
  {
    name: 'Piedimonte Matese',
    code: 'G596',
    province: 'CE'
  },
  {
    name: 'Piedimonte Etneo',
    code: 'G597',
    province: 'CT'
  },
  {
    name: 'Piedimonte San Germano',
    code: 'G598',
    province: 'FR'
  },
  {
    name: 'Piedimulera',
    code: 'G600',
    province: 'VB'
  },
  {
    name: 'Piegaro',
    code: 'G601',
    province: 'PG'
  },
  {
    name: 'Pienza',
    code: 'G602',
    province: 'SI'
  },
  {
    name: 'Pieranica',
    code: 'G603',
    province: 'CR'
  },
  {
    name: 'Pietramontecorvino',
    code: 'G604',
    province: 'FG'
  },
  {
    name: 'Pietra Ligure',
    code: 'G605',
    province: 'SV'
  },
  {
    name: 'Pietrabbondante',
    code: 'G606',
    province: 'IS'
  },
  {
    name: 'Pietrabruna',
    code: 'G607',
    province: 'IM'
  },
  {
    name: 'Pietracamela',
    code: 'G608',
    province: 'TE'
  },
  {
    name: 'Pietracatella',
    code: 'G609',
    province: 'CB'
  },
  {
    name: 'Pietracupa',
    code: 'G610',
    province: 'CB'
  },
  {
    name: 'Pietradefusi',
    code: 'G611',
    province: 'AV'
  },
  {
    name: "Pietra de' Giorgi",
    code: 'G612',
    province: 'PV'
  },
  {
    name: 'Pietraferrazzana',
    code: 'G613',
    province: 'CH'
  },
  {
    name: 'Satriano di Lucania',
    code: 'G614',
    province: 'PZ'
  },
  {
    name: 'Pietrafitta',
    code: 'G615',
    province: 'CS'
  },
  {
    name: 'Pietragalla',
    code: 'G616',
    province: 'PZ'
  },
  {
    name: 'Pietralunga',
    code: 'G618',
    province: 'PG'
  },
  {
    name: 'Pietra Marazzi',
    code: 'G619',
    province: 'AL'
  },
  {
    name: 'Pietramelara',
    code: 'G620',
    province: 'CE'
  },
  {
    name: 'Pietranico',
    code: 'G621',
    province: 'PE'
  },
  {
    name: 'Pietrapaola',
    code: 'G622',
    province: 'CS'
  },
  {
    name: 'Pietrapertosa',
    code: 'G623',
    province: 'PZ'
  },
  {
    name: 'Pietraperzia',
    code: 'G624',
    province: 'EN'
  },
  {
    name: 'Pietraporzio',
    code: 'G625',
    province: 'CN'
  },
  {
    name: 'Pietraroja',
    code: 'G626',
    province: 'BN'
  },
  {
    name: 'Pietrarubbia',
    code: 'G627',
    province: 'PU'
  },
  {
    name: 'Pietrasanta',
    code: 'G628',
    province: 'LU'
  },
  {
    name: 'Pietrastornina',
    code: 'G629',
    province: 'AV'
  },
  {
    name: 'Pietravairano',
    code: 'G630',
    province: 'CE'
  },
  {
    name: 'Pietrelcina',
    code: 'G631',
    province: 'BN'
  },
  {
    name: 'Pieve di Teco',
    code: 'G632',
    province: 'IM'
  },
  {
    name: 'Pieve Emanuele',
    code: 'G634',
    province: 'MI'
  },
  {
    name: 'Pieve Albignola',
    code: 'G635',
    province: 'PV'
  },
  {
    name: 'Pieve a Nievole',
    code: 'G636',
    province: 'PT'
  },
  {
    name: 'Pieve del Cairo',
    code: 'G639',
    province: 'PV'
  },
  {
    name: 'Pieve di Cadore',
    code: 'G642',
    province: 'BL'
  },
  {
    name: 'Pieve di Cento',
    code: 'G643',
    province: 'BO'
  },
  {
    name: 'Pieve di Soligo',
    code: 'G645',
    province: 'TV'
  },
  {
    name: 'Pieve Ligure',
    code: 'G646',
    province: 'GE'
  },
  {
    name: "Pieve d'Olmi",
    code: 'G647',
    province: 'CR'
  },
  {
    name: 'Pieve Fosciana',
    code: 'G648',
    province: 'LU'
  },
  {
    name: 'Pievepelago',
    code: 'G649',
    province: 'MO'
  },
  {
    name: 'Pieve Porto Morone',
    code: 'G650',
    province: 'PV'
  },
  {
    name: 'Pieve San Giacomo',
    code: 'G651',
    province: 'CR'
  },
  {
    name: 'Pieve Santo Stefano',
    code: 'G653',
    province: 'AR'
  },
  {
    name: 'Pieve Tesino',
    code: 'G656',
    province: 'TN'
  },
  {
    name: 'Pieve Torina',
    code: 'G657',
    province: 'MC'
  },
  {
    name: 'Pieve Vergonte',
    code: 'G658',
    province: 'VB'
  },
  {
    name: 'Piglio',
    code: 'G659',
    province: 'FR'
  },
  {
    name: 'Pigna',
    code: 'G660',
    province: 'IM'
  },
  {
    name: 'Pignataro Maggiore',
    code: 'G661',
    province: 'CE'
  },
  {
    name: 'Pignataro Interamna',
    code: 'G662',
    province: 'FR'
  },
  {
    name: 'Pignola',
    code: 'G663',
    province: 'PZ'
  },
  {
    name: 'Pignone',
    code: 'G664',
    province: 'SP'
  },
  {
    name: 'Pigra',
    code: 'G665',
    province: 'CO'
  },
  {
    name: 'Pila',
    code: 'G666',
    province: 'VC'
  },
  {
    name: 'Pimentel',
    code: 'G669',
    province: 'SU'
  },
  {
    name: 'Pimonte',
    code: 'G670',
    province: 'NA'
  },
  {
    name: 'Pinarolo Po',
    code: 'G671',
    province: 'PV'
  },
  {
    name: 'Pinasca',
    code: 'G672',
    province: 'TO'
  },
  {
    name: 'Pincara',
    code: 'G673',
    province: 'RO'
  },
  {
    name: 'Pinerolo',
    code: 'G674',
    province: 'TO'
  },
  {
    name: "Pino d'Asti",
    code: 'G676',
    province: 'AT'
  },
  {
    name: 'Pino Torinese',
    code: 'G678',
    province: 'TO'
  },
  {
    name: 'Pinzano al Tagliamento',
    code: 'G680',
    province: 'PN'
  },
  {
    name: 'Pinzolo',
    code: 'G681',
    province: 'TN'
  },
  {
    name: 'Piobbico',
    code: 'G682',
    province: 'PU'
  },
  {
    name: "Piobesi d'Alba",
    code: 'G683',
    province: 'CN'
  },
  {
    name: 'Piobesi Torinese',
    code: 'G684',
    province: 'TO'
  },
  {
    name: 'Piode',
    code: 'G685',
    province: 'VC'
  },
  {
    name: 'Pioltello',
    code: 'G686',
    province: 'MI'
  },
  {
    name: 'Piombino',
    code: 'G687',
    province: 'LI'
  },
  {
    name: 'Piombino Dese',
    code: 'G688',
    province: 'PD'
  },
  {
    name: 'Pioraco',
    code: 'G690',
    province: 'MC'
  },
  {
    name: 'Piossasco',
    code: 'G691',
    province: 'TO'
  },
  {
    name: 'Piovà Massaia',
    code: 'G692',
    province: 'AT'
  },
  {
    name: 'Piove di Sacco',
    code: 'G693',
    province: 'PD'
  },
  {
    name: 'Piovene Rocchette',
    code: 'G694',
    province: 'VI'
  },
  {
    name: 'Piozzano',
    code: 'G696',
    province: 'PC'
  },
  {
    name: 'Piozzo',
    code: 'G697',
    province: 'CN'
  },
  {
    name: 'Priverno',
    code: 'G698',
    province: 'LT'
  },
  {
    name: 'Piraino',
    code: 'G699',
    province: 'ME'
  },
  {
    name: 'Pisa',
    code: 'G702',
    province: 'PI'
  },
  {
    name: 'Pisano',
    code: 'G703',
    province: 'NO'
  },
  {
    name: 'Pisoniano',
    code: 'G704',
    province: 'RM'
  },
  {
    name: 'Piscina',
    code: 'G705',
    province: 'TO'
  },
  {
    name: 'Pisciotta',
    code: 'G707',
    province: 'SA'
  },
  {
    name: 'Pisogne',
    code: 'G710',
    province: 'BS'
  },
  {
    name: 'Pisticci',
    code: 'G712',
    province: 'MT'
  },
  {
    name: 'Pistoia',
    code: 'G713',
    province: 'PT'
  },
  {
    name: 'Pitigliano',
    code: 'G716',
    province: 'GR'
  },
  {
    name: 'Piubega',
    code: 'G717',
    province: 'MN'
  },
  {
    name: 'Piuro',
    code: 'G718',
    province: 'SO'
  },
  {
    name: 'Piverone',
    code: 'G719',
    province: 'TO'
  },
  {
    name: 'Pizzale',
    code: 'G720',
    province: 'PV'
  },
  {
    name: 'Pizzighettone',
    code: 'G721',
    province: 'CR'
  },
  {
    name: 'Pizzo',
    code: 'G722',
    province: 'VV'
  },
  {
    name: 'Pizzoferrato',
    code: 'G724',
    province: 'CH'
  },
  {
    name: 'Pizzoli',
    code: 'G726',
    province: 'AQ'
  },
  {
    name: 'Pizzone',
    code: 'G727',
    province: 'IS'
  },
  {
    name: 'Pizzoni',
    code: 'G728',
    province: 'VV'
  },
  {
    name: 'Placanica',
    code: 'G729',
    province: 'RC'
  },
  {
    name: 'Plataci',
    code: 'G733',
    province: 'CS'
  },
  {
    name: 'Platania',
    code: 'G734',
    province: 'CZ'
  },
  {
    name: 'Platì',
    code: 'G735',
    province: 'RC'
  },
  {
    name: 'Taipana',
    code: 'G736',
    province: 'UD'
  },
  {
    name: 'Plesio',
    code: 'G737',
    province: 'CO'
  },
  {
    name: 'Ploaghe',
    code: 'G740',
    province: 'SS'
  },
  {
    name: 'Plodio',
    code: 'G741',
    province: 'SV'
  },
  {
    name: 'Pocapaglia',
    code: 'G742',
    province: 'CN'
  },
  {
    name: 'Pocenia',
    code: 'G743',
    province: 'UD'
  },
  {
    name: 'Podenzana',
    code: 'G746',
    province: 'MS'
  },
  {
    name: 'Podenzano',
    code: 'G747',
    province: 'PC'
  },
  {
    name: 'Pofi',
    code: 'G749',
    province: 'FR'
  },
  {
    name: 'Poggiardo',
    code: 'G751',
    province: 'LE'
  },
  {
    name: 'Poggibonsi',
    code: 'G752',
    province: 'SI'
  },
  {
    name: 'Poggio Rusco',
    code: 'G753',
    province: 'MN'
  },
  {
    name: 'Poggio a Caiano',
    code: 'G754',
    province: 'PO'
  },
  {
    name: 'Poggio Bustone',
    code: 'G756',
    province: 'RI'
  },
  {
    name: 'Poggio Catino',
    code: 'G757',
    province: 'RI'
  },
  {
    name: 'Poggiodomo',
    code: 'G758',
    province: 'PG'
  },
  {
    name: 'Poggiofiorito',
    code: 'G760',
    province: 'CH'
  },
  {
    name: 'Poggio Imperiale',
    code: 'G761',
    province: 'FG'
  },
  {
    name: 'Poggiomarino',
    code: 'G762',
    province: 'NA'
  },
  {
    name: 'Poggio Mirteto',
    code: 'G763',
    province: 'RI'
  },
  {
    name: 'Poggio Moiano',
    code: 'G764',
    province: 'RI'
  },
  {
    name: 'Poggio Nativo',
    code: 'G765',
    province: 'RI'
  },
  {
    name: 'Poggio Picenze',
    code: 'G766',
    province: 'AQ'
  },
  {
    name: 'Poggioreale',
    code: 'G767',
    province: 'TP'
  },
  {
    name: 'Poggio Renatico',
    code: 'G768',
    province: 'FE'
  },
  {
    name: 'Poggiorsini',
    code: 'G769',
    province: 'BA'
  },
  {
    name: 'Poggio San Lorenzo',
    code: 'G770',
    province: 'RI'
  },
  {
    name: 'Poggio San Marcello',
    code: 'G771',
    province: 'AN'
  },
  {
    name: 'Pogliano Milanese',
    code: 'G772',
    province: 'MI'
  },
  {
    name: 'Pognana Lario',
    code: 'G773',
    province: 'CO'
  },
  {
    name: 'Pognano',
    code: 'G774',
    province: 'BG'
  },
  {
    name: 'Pogno',
    code: 'G775',
    province: 'NO'
  },
  {
    name: 'Pojana Maggiore',
    code: 'G776',
    province: 'VI'
  },
  {
    name: 'Poirino',
    code: 'G777',
    province: 'TO'
  },
  {
    name: 'Polaveno',
    code: 'G779',
    province: 'BS'
  },
  {
    name: 'Polcenigo',
    code: 'G780',
    province: 'PN'
  },
  {
    name: 'Polesella',
    code: 'G782',
    province: 'RO'
  },
  {
    name: 'Poli',
    code: 'G784',
    province: 'RM'
  },
  {
    name: 'Polia',
    code: 'G785',
    province: 'VV'
  },
  {
    name: 'Policoro',
    code: 'G786',
    province: 'MT'
  },
  {
    name: 'Polignano a Mare',
    code: 'G787',
    province: 'BA'
  },
  {
    name: 'San Pietro in Cerro',
    code: 'G788',
    province: 'PC'
  },
  {
    name: 'Polinago',
    code: 'G789',
    province: 'MO'
  },
  {
    name: 'Polino',
    code: 'G790',
    province: 'TR'
  },
  {
    name: 'Polistena',
    code: 'G791',
    province: 'RC'
  },
  {
    name: 'Polizzi Generosa',
    code: 'G792',
    province: 'PA'
  },
  {
    name: 'Polla',
    code: 'G793',
    province: 'SA'
  },
  {
    name: 'Pollein',
    code: 'G794',
    province: 'AO'
  },
  {
    name: 'Pollena Trocchia',
    code: 'G795',
    province: 'NA'
  },
  {
    name: 'Pollica',
    code: 'G796',
    province: 'SA'
  },
  {
    name: 'Pollina',
    code: 'G797',
    province: 'PA'
  },
  {
    name: 'Pollone',
    code: 'G798',
    province: 'BI'
  },
  {
    name: 'Pollutri',
    code: 'G799',
    province: 'CH'
  },
  {
    name: 'Polonghera',
    code: 'G800',
    province: 'CN'
  },
  {
    name: 'Polpenazze del Garda',
    code: 'G801',
    province: 'BS'
  },
  {
    name: 'Polverara',
    code: 'G802',
    province: 'PD'
  },
  {
    name: 'Polverigi',
    code: 'G803',
    province: 'AN'
  },
  {
    name: 'Pomarance',
    code: 'G804',
    province: 'PI'
  },
  {
    name: 'Pomaretto',
    code: 'G805',
    province: 'TO'
  },
  {
    name: 'Pomarico',
    code: 'G806',
    province: 'MT'
  },
  {
    name: 'Pomaro Monferrato',
    code: 'G807',
    province: 'AL'
  },
  {
    name: 'Pomarolo',
    code: 'G808',
    province: 'TN'
  },
  {
    name: 'Pombia',
    code: 'G809',
    province: 'NO'
  },
  {
    name: 'Pomezia',
    code: 'G811',
    province: 'RM'
  },
  {
    name: "Pomigliano d'Arco",
    code: 'G812',
    province: 'NA'
  },
  {
    name: 'Pompei',
    code: 'G813',
    province: 'NA'
  },
  {
    name: 'Pompeiana',
    code: 'G814',
    province: 'IM'
  },
  {
    name: 'Pompiano',
    code: 'G815',
    province: 'BS'
  },
  {
    name: 'Pomponesco',
    code: 'G816',
    province: 'MN'
  },
  {
    name: 'Pompu',
    code: 'G817',
    province: 'OR'
  },
  {
    name: 'Poncarale',
    code: 'G818',
    province: 'BS'
  },
  {
    name: 'Ponderano',
    code: 'G820',
    province: 'BI'
  },
  {
    name: 'Ponna',
    code: 'G821',
    province: 'CO'
  },
  {
    name: 'Ponsacco',
    code: 'G822',
    province: 'PI'
  },
  {
    name: 'Ponso',
    code: 'G823',
    province: 'PD'
  },
  {
    name: 'Pontassieve',
    code: 'G825',
    province: 'FI'
  },
  {
    name: 'Pont Canavese',
    code: 'G826',
    province: 'TO'
  },
  {
    name: 'Ponte',
    code: 'G827',
    province: 'BN'
  },
  {
    name: 'Ponte in Valtellina',
    code: 'G829',
    province: 'SO'
  },
  {
    name: 'Ponte Gardena/Waidbruck',
    italianName: 'Ponte Gardena',
    foreignName: 'Waidbruck',
    code: 'G830',
    province: 'BZ'
  },
  {
    name: 'Pontebba',
    code: 'G831',
    province: 'UD'
  },
  {
    name: 'Ponte Buggianese',
    code: 'G833',
    province: 'PT'
  },
  {
    name: 'Pontecagnano Faiano',
    code: 'G834',
    province: 'SA'
  },
  {
    name: 'Pontecchio Polesine',
    code: 'G836',
    province: 'RO'
  },
  {
    name: 'Pontechianale',
    code: 'G837',
    province: 'CN'
  },
  {
    name: 'Pontecorvo',
    code: 'G838',
    province: 'FR'
  },
  {
    name: 'Pontecurone',
    code: 'G839',
    province: 'AL'
  },
  {
    name: 'Pontedassio',
    code: 'G840',
    province: 'IM'
  },
  {
    name: "Ponte dell'Olio",
    code: 'G842',
    province: 'PC'
  },
  {
    name: 'Pontedera',
    code: 'G843',
    province: 'PI'
  },
  {
    name: 'Ponte di Legno',
    code: 'G844',
    province: 'BS'
  },
  {
    name: 'Ponte di Piave',
    code: 'G846',
    province: 'TV'
  },
  {
    name: 'Ponte Lambro',
    code: 'G847',
    province: 'CO'
  },
  {
    name: 'Pontelandolfo',
    code: 'G848',
    province: 'BN'
  },
  {
    name: 'Pontelatone',
    code: 'G849',
    province: 'CE'
  },
  {
    name: 'Pontelongo',
    code: 'G850',
    province: 'PD'
  },
  {
    name: 'Ponte Nizza',
    code: 'G851',
    province: 'PV'
  },
  {
    name: 'Pontenure',
    code: 'G852',
    province: 'PC'
  },
  {
    name: 'Ponteranica',
    code: 'G853',
    province: 'BG'
  },
  {
    name: 'Pont-Saint-Martin',
    code: 'G854',
    province: 'AO'
  },
  {
    name: 'Ponte San Nicolò',
    code: 'G855',
    province: 'PD'
  },
  {
    name: 'Ponte San Pietro',
    code: 'G856',
    province: 'BG'
  },
  {
    name: 'Pontestura',
    code: 'G858',
    province: 'AL'
  },
  {
    name: 'Pontevico',
    code: 'G859',
    province: 'BS'
  },
  {
    name: 'Pontey',
    code: 'G860',
    province: 'AO'
  },
  {
    name: 'Ponti',
    code: 'G861',
    province: 'AL'
  },
  {
    name: 'Ponti sul Mincio',
    code: 'G862',
    province: 'MN'
  },
  {
    name: 'Pontida',
    code: 'G864',
    province: 'BG'
  },
  {
    name: 'Pontinia',
    code: 'G865',
    province: 'LT'
  },
  {
    name: 'Pontinvrea',
    code: 'G866',
    province: 'SV'
  },
  {
    name: 'Pontirolo Nuovo',
    code: 'G867',
    province: 'BG'
  },
  {
    name: 'Pontoglio',
    code: 'G869',
    province: 'BS'
  },
  {
    name: 'Pontremoli',
    code: 'G870',
    province: 'MS'
  },
  {
    name: 'Ponza',
    code: 'G871',
    province: 'LT'
  },
  {
    name: 'Ponzano Monferrato',
    code: 'G872',
    province: 'AL'
  },
  {
    name: 'Ponzano di Fermo',
    code: 'G873',
    province: 'FM'
  },
  {
    name: 'Ponzano Romano',
    code: 'G874',
    province: 'RM'
  },
  {
    name: 'Ponzano Veneto',
    code: 'G875',
    province: 'TV'
  },
  {
    name: 'Ponzone',
    code: 'G877',
    province: 'AL'
  },
  {
    name: 'Popoli Terme',
    code: 'G878',
    province: 'PE'
  },
  {
    name: 'Poppi',
    code: 'G879',
    province: 'AR'
  },
  {
    name: 'Porano',
    code: 'G881',
    province: 'TR'
  },
  {
    name: 'Porcari',
    code: 'G882',
    province: 'LU'
  },
  {
    name: 'Porcia',
    code: 'G886',
    province: 'PN'
  },
  {
    name: 'Stella Cilento',
    code: 'G887',
    province: 'SA'
  },
  {
    name: 'Pordenone',
    code: 'G888',
    province: 'PN'
  },
  {
    name: 'Porlezza',
    code: 'G889',
    province: 'CO'
  },
  {
    name: 'Pornassio',
    code: 'G890',
    province: 'IM'
  },
  {
    name: 'Porpetto',
    code: 'G891',
    province: 'UD'
  },
  {
    name: 'Portacomaro',
    code: 'G894',
    province: 'AT'
  },
  {
    name: 'Portalbera',
    code: 'G895',
    province: 'PV'
  },
  {
    name: 'Porte',
    code: 'G900',
    province: 'TO'
  },
  {
    name: 'Portici',
    code: 'G902',
    province: 'NA'
  },
  {
    name: 'Portico di Caserta',
    code: 'G903',
    province: 'CE'
  },
  {
    name: 'Portico e San Benedetto',
    code: 'G904',
    province: 'FC'
  },
  {
    name: 'Portigliola',
    code: 'G905',
    province: 'RC'
  },
  {
    name: 'Porto Ceresio',
    code: 'G906',
    province: 'VA'
  },
  {
    name: 'Porto Valtravaglia',
    code: 'G907',
    province: 'VA'
  },
  {
    name: 'Portobuffolè',
    code: 'G909',
    province: 'TV'
  },
  {
    name: 'Portocannone',
    code: 'G910',
    province: 'CB'
  },
  {
    name: 'Portoferraio',
    code: 'G912',
    province: 'LI'
  },
  {
    name: 'Portofino',
    code: 'G913',
    province: 'GE'
  },
  {
    name: 'Portogruaro',
    code: 'G914',
    province: 'VE'
  },
  {
    name: 'Portomaggiore',
    code: 'G916',
    province: 'FE'
  },
  {
    name: 'Porto Mantovano',
    code: 'G917',
    province: 'MN'
  },
  {
    name: 'Porto Recanati',
    code: 'G919',
    province: 'MC'
  },
  {
    name: 'Porto San Giorgio',
    code: 'G920',
    province: 'FM'
  },
  {
    name: "Porto Sant'Elpidio",
    code: 'G921',
    province: 'FM'
  },
  {
    name: 'Portoscuso',
    code: 'G922',
    province: 'SU'
  },
  {
    name: 'Porto Tolle',
    code: 'G923',
    province: 'RO'
  },
  {
    name: 'Porto Torres',
    code: 'G924',
    province: 'SS'
  },
  {
    name: 'Portovenere',
    code: 'G925',
    province: 'SP'
  },
  {
    name: 'Porto Viro',
    code: 'G926',
    province: 'RO'
  },
  {
    name: 'Portula',
    code: 'G927',
    province: 'BI'
  },
  {
    name: 'Posada',
    code: 'G929',
    province: 'NU'
  },
  {
    name: 'Posina',
    code: 'G931',
    province: 'VI'
  },
  {
    name: 'Positano',
    code: 'G932',
    province: 'SA'
  },
  {
    name: 'Possagno',
    code: 'G933',
    province: 'TV'
  },
  {
    name: 'Posta',
    code: 'G934',
    province: 'RI'
  },
  {
    name: 'Posta Fibreno',
    code: 'G935',
    province: 'FR'
  },
  {
    name: 'Postal/Burgstall',
    italianName: 'Postal',
    foreignName: 'Burgstall',
    code: 'G936',
    province: 'BZ'
  },
  {
    name: 'Postalesio',
    code: 'G937',
    province: 'SO'
  },
  {
    name: 'Postiglione',
    code: 'G939',
    province: 'SA'
  },
  {
    name: 'Postua',
    code: 'G940',
    province: 'VC'
  },
  {
    name: 'Potenza',
    code: 'G942',
    province: 'PZ'
  },
  {
    name: 'Pove del Grappa',
    code: 'G943',
    province: 'VI'
  },
  {
    name: 'Povegliano',
    code: 'G944',
    province: 'TV'
  },
  {
    name: 'Povegliano Veronese',
    code: 'G945',
    province: 'VR'
  },
  {
    name: 'Poviglio',
    code: 'G947',
    province: 'RE'
  },
  {
    name: 'Povoletto',
    code: 'G949',
    province: 'UD'
  },
  {
    name: 'Pozzaglia Sabina',
    code: 'G951',
    province: 'RI'
  },
  {
    name: 'Pozzallo',
    code: 'G953',
    province: 'RG'
  },
  {
    name: 'Pozzilli',
    code: 'G954',
    province: 'IS'
  },
  {
    name: "Pozzo d'Adda",
    code: 'G955',
    province: 'MI'
  },
  {
    name: 'Pozzoleone',
    code: 'G957',
    province: 'VI'
  },
  {
    name: 'Pozzolengo',
    code: 'G959',
    province: 'BS'
  },
  {
    name: 'Pozzol Groppo',
    code: 'G960',
    province: 'AL'
  },
  {
    name: 'Pozzolo Formigaro',
    code: 'G961',
    province: 'AL'
  },
  {
    name: 'Pozzomaggiore',
    code: 'G962',
    province: 'SS'
  },
  {
    name: 'Pozzonovo',
    code: 'G963',
    province: 'PD'
  },
  {
    name: 'Pozzuoli',
    code: 'G964',
    province: 'NA'
  },
  {
    name: 'Pozzuolo Martesana',
    code: 'G965',
    province: 'MI'
  },
  {
    name: 'Pozzuolo del Friuli',
    code: 'G966',
    province: 'UD'
  },
  {
    name: 'Pradalunga',
    code: 'G968',
    province: 'BG'
  },
  {
    name: 'Pradamano',
    code: 'G969',
    province: 'UD'
  },
  {
    name: 'Pradleves',
    code: 'G970',
    province: 'CN'
  },
  {
    name: 'Sasso Marconi',
    code: 'G972',
    province: 'BO'
  },
  {
    name: 'Pragelato',
    code: 'G973',
    province: 'TO'
  },
  {
    name: 'Pray',
    code: 'G974',
    province: 'BI'
  },
  {
    name: 'Praia a Mare',
    code: 'G975',
    province: 'CS'
  },
  {
    name: 'Praiano',
    code: 'G976',
    province: 'SA'
  },
  {
    name: 'Pralboino',
    code: 'G977',
    province: 'BS'
  },
  {
    name: 'Prali',
    code: 'G978',
    province: 'TO'
  },
  {
    name: 'Pralormo',
    code: 'G979',
    province: 'TO'
  },
  {
    name: 'Pralungo',
    code: 'G980',
    province: 'BI'
  },
  {
    name: 'Pramaggiore',
    code: 'G981',
    province: 'VE'
  },
  {
    name: 'Pramollo',
    code: 'G982',
    province: 'TO'
  },
  {
    name: 'Prarolo',
    code: 'G985',
    province: 'VC'
  },
  {
    name: 'Prarostino',
    code: 'G986',
    province: 'TO'
  },
  {
    name: 'Prasco',
    code: 'G987',
    province: 'AL'
  },
  {
    name: 'Prascorsano',
    code: 'G988',
    province: 'TO'
  },
  {
    name: 'Prata di Principato Ultra',
    code: 'G990',
    province: 'AV'
  },
  {
    name: 'Prata Sannita',
    code: 'G991',
    province: 'CE'
  },
  {
    name: "Prata d'Ansidonia",
    code: 'G992',
    province: 'AQ'
  },
  {
    name: 'Prata Camportaccio',
    code: 'G993',
    province: 'SO'
  },
  {
    name: 'Prata di Pordenone',
    code: 'G994',
    province: 'PN'
  },
  {
    name: 'Pratella',
    code: 'G995',
    province: 'CE'
  },
  {
    name: 'Pratiglione',
    code: 'G997',
    province: 'TO'
  },
  {
    name: 'Prato',
    code: 'G999',
    province: 'PO'
  },
  {
    name: 'Prato Sesia',
    code: 'H001',
    province: 'NO'
  },
  {
    name: 'Prato Carnico',
    code: 'H002',
    province: 'UD'
  },
  {
    name: 'Prato allo Stelvio/Prad am Stilfserjoch',
    italianName: 'Prato allo Stelvio',
    foreignName: 'Prad am Stilfserjoch',
    code: 'H004',
    province: 'BZ'
  },
  {
    name: 'Pratola Serra',
    code: 'H006',
    province: 'AV'
  },
  {
    name: 'Pratola Peligna',
    code: 'H007',
    province: 'AQ'
  },
  {
    name: 'Pravisdomini',
    code: 'H010',
    province: 'PN'
  },
  {
    name: 'Prazzo',
    code: 'H011',
    province: 'CN'
  },
  {
    name: 'Samo',
    code: 'H013',
    province: 'RC'
  },
  {
    name: 'Precenicco',
    code: 'H014',
    province: 'UD'
  },
  {
    name: 'Preci',
    code: 'H015',
    province: 'PG'
  },
  {
    name: 'Predappio',
    code: 'H017',
    province: 'FC'
  },
  {
    name: 'Predazzo',
    code: 'H018',
    province: 'TN'
  },
  {
    name: 'Predoi/Prettau',
    italianName: 'Predoi',
    foreignName: 'Prettau',
    code: 'H019',
    province: 'BZ'
  },
  {
    name: 'Predore',
    code: 'H020',
    province: 'BG'
  },
  {
    name: 'Predosa',
    code: 'H021',
    province: 'AL'
  },
  {
    name: 'Preganziol',
    code: 'H022',
    province: 'TV'
  },
  {
    name: 'Pregnana Milanese',
    code: 'H026',
    province: 'MI'
  },
  {
    name: 'Prelà',
    code: 'H027',
    province: 'IM'
  },
  {
    name: 'Premana',
    code: 'H028',
    province: 'LC'
  },
  {
    name: 'Premariacco',
    code: 'H029',
    province: 'UD'
  },
  {
    name: 'Premeno',
    code: 'H030',
    province: 'VB'
  },
  {
    name: 'Premia',
    code: 'H033',
    province: 'VB'
  },
  {
    name: 'Premilcuore',
    code: 'H034',
    province: 'FC'
  },
  {
    name: 'Premolo',
    code: 'H036',
    province: 'BG'
  },
  {
    name: 'Premosello-Chiovenda',
    code: 'H037',
    province: 'VB'
  },
  {
    name: 'Preone',
    code: 'H038',
    province: 'UD'
  },
  {
    name: 'Prepotto',
    code: 'H040',
    province: 'UD'
  },
  {
    name: 'Pré-Saint-Didier',
    code: 'H042',
    province: 'AO'
  },
  {
    name: 'Preseglie',
    code: 'H043',
    province: 'BS'
  },
  {
    name: 'Presenzano',
    code: 'H045',
    province: 'CE'
  },
  {
    name: 'Presezzo',
    code: 'H046',
    province: 'BG'
  },
  {
    name: 'Pressana',
    code: 'H048',
    province: 'VR'
  },
  {
    name: 'Pretoro',
    code: 'H052',
    province: 'CH'
  },
  {
    name: 'Prevalle',
    code: 'H055',
    province: 'BS'
  },
  {
    name: 'Prezza',
    code: 'H056',
    province: 'AQ'
  },
  {
    name: 'Priero',
    code: 'H059',
    province: 'CN'
  },
  {
    name: 'Prignano sulla Secchia',
    code: 'H061',
    province: 'MO'
  },
  {
    name: 'Prignano Cilento',
    code: 'H062',
    province: 'SA'
  },
  {
    name: 'Primaluna',
    code: 'H063',
    province: 'LC'
  },
  {
    name: 'Priocca',
    code: 'H068',
    province: 'CN'
  },
  {
    name: 'Priola',
    code: 'H069',
    province: 'CN'
  },
  {
    name: 'Prizzi',
    code: 'H070',
    province: 'PA'
  },
  {
    name: 'Proceno',
    code: 'H071',
    province: 'VT'
  },
  {
    name: 'Procida',
    code: 'H072',
    province: 'NA'
  },
  {
    name: 'Propata',
    code: 'H073',
    province: 'GE'
  },
  {
    name: 'Proserpio',
    code: 'H074',
    province: 'CO'
  },
  {
    name: 'Prossedi',
    code: 'H076',
    province: 'LT'
  },
  {
    name: 'Provaglio Val Sabbia',
    code: 'H077',
    province: 'BS'
  },
  {
    name: "Provaglio d'Iseo",
    code: 'H078',
    province: 'BS'
  },
  {
    name: 'Proves/Proveis',
    italianName: 'Proves',
    foreignName: 'Proveis',
    code: 'H081',
    province: 'BZ'
  },
  {
    name: 'Provvidenti',
    code: 'H083',
    province: 'CB'
  },
  {
    name: 'Prunetto',
    code: 'H085',
    province: 'CN'
  },
  {
    name: 'Puegnago del Garda',
    code: 'H086',
    province: 'BS'
  },
  {
    name: 'Puglianello',
    code: 'H087',
    province: 'BN'
  },
  {
    name: 'Pula',
    code: 'H088',
    province: 'CA'
  },
  {
    name: 'Pulfero',
    code: 'H089',
    province: 'UD'
  },
  {
    name: 'Pulsano',
    code: 'H090',
    province: 'TA'
  },
  {
    name: 'Pumenengo',
    code: 'H091',
    province: 'BG'
  },
  {
    name: 'Pusiano',
    code: 'H094',
    province: 'CO'
  },
  {
    name: 'Putifigari',
    code: 'H095',
    province: 'SS'
  },
  {
    name: 'Putignano',
    code: 'H096',
    province: 'BA'
  },
  {
    name: 'Quadrelle',
    code: 'H097',
    province: 'AV'
  },
  {
    name: 'Quadri',
    code: 'H098',
    province: 'CH'
  },
  {
    name: 'Quagliuzzo',
    code: 'H100',
    province: 'TO'
  },
  {
    name: 'Qualiano',
    code: 'H101',
    province: 'NA'
  },
  {
    name: 'Quaranti',
    code: 'H102',
    province: 'AT'
  },
  {
    name: 'Quargnento',
    code: 'H104',
    province: 'AL'
  },
  {
    name: 'Quarna Sopra',
    code: 'H106',
    province: 'VB'
  },
  {
    name: 'Quarna Sotto',
    code: 'H107',
    province: 'VB'
  },
  {
    name: 'Quarona',
    code: 'H108',
    province: 'VC'
  },
  {
    name: 'Quarrata',
    code: 'H109',
    province: 'PT'
  },
  {
    name: 'Quart',
    code: 'H110',
    province: 'AO'
  },
  {
    name: 'Quarto',
    code: 'H114',
    province: 'NA'
  },
  {
    name: "Quarto d'Altino",
    code: 'H117',
    province: 'VE'
  },
  {
    name: "Quartu Sant'Elena",
    code: 'H118',
    province: 'CA'
  },
  {
    name: 'Quartucciu',
    code: 'H119',
    province: 'CA'
  },
  {
    name: 'Quassolo',
    code: 'H120',
    province: 'TO'
  },
  {
    name: 'Quattordio',
    code: 'H121',
    province: 'AL'
  },
  {
    name: 'Quattro Castella',
    code: 'H122',
    province: 'RE'
  },
  {
    name: 'Quiliano',
    code: 'H126',
    province: 'SV'
  },
  {
    name: 'Quincinetto',
    code: 'H127',
    province: 'TO'
  },
  {
    name: 'Quindici',
    code: 'H128',
    province: 'AV'
  },
  {
    name: 'Quingentole',
    code: 'H129',
    province: 'MN'
  },
  {
    name: 'Quintano',
    code: 'H130',
    province: 'CR'
  },
  {
    name: 'Quinto di Treviso',
    code: 'H131',
    province: 'TV'
  },
  {
    name: 'Quinto Vercellese',
    code: 'H132',
    province: 'VC'
  },
  {
    name: 'Quinto Vicentino',
    code: 'H134',
    province: 'VI'
  },
  {
    name: "Quinzano d'Oglio",
    code: 'H140',
    province: 'BS'
  },
  {
    name: 'Quistello',
    code: 'H143',
    province: 'MN'
  },
  {
    name: 'Rabbi',
    code: 'H146',
    province: 'TN'
  },
  {
    name: 'Racale',
    code: 'H147',
    province: 'LE'
  },
  {
    name: 'Racalmuto',
    code: 'H148',
    province: 'AG'
  },
  {
    name: 'Racconigi',
    code: 'H150',
    province: 'CN'
  },
  {
    name: 'Raccuja',
    code: 'H151',
    province: 'ME'
  },
  {
    name: 'Racines/Ratschings',
    italianName: 'Racines',
    foreignName: 'Ratschings',
    code: 'H152',
    province: 'BZ'
  },
  {
    name: 'Radda in Chianti',
    code: 'H153',
    province: 'SI'
  },
  {
    name: 'Raddusa',
    code: 'H154',
    province: 'CT'
  },
  {
    name: 'Radicofani',
    code: 'H156',
    province: 'SI'
  },
  {
    name: 'Radicondoli',
    code: 'H157',
    province: 'SI'
  },
  {
    name: 'Raffadali',
    code: 'H159',
    province: 'AG'
  },
  {
    name: 'Ragogna',
    code: 'H161',
    province: 'UD'
  },
  {
    name: 'Ragusa',
    code: 'H163',
    province: 'RG'
  },
  {
    name: 'Ruviano',
    code: 'H165',
    province: 'CE'
  },
  {
    name: 'Raiano',
    code: 'H166',
    province: 'AQ'
  },
  {
    name: 'Ramacca',
    code: 'H168',
    province: 'CT'
  },
  {
    name: 'Rancio Valcuvia',
    code: 'H173',
    province: 'VA'
  },
  {
    name: 'Ranco',
    code: 'H174',
    province: 'VA'
  },
  {
    name: 'Randazzo',
    code: 'H175',
    province: 'CT'
  },
  {
    name: 'Ranica',
    code: 'H176',
    province: 'BG'
  },
  {
    name: 'Ranzanico',
    code: 'H177',
    province: 'BG'
  },
  {
    name: 'Ranzo',
    code: 'H180',
    province: 'IM'
  },
  {
    name: 'Rapagnano',
    code: 'H182',
    province: 'FM'
  },
  {
    name: 'Rapallo',
    code: 'H183',
    province: 'GE'
  },
  {
    name: 'Rapino',
    code: 'H184',
    province: 'CH'
  },
  {
    name: 'Rapolano Terme',
    code: 'H185',
    province: 'SI'
  },
  {
    name: 'Rapolla',
    code: 'H186',
    province: 'PZ'
  },
  {
    name: 'Rapone',
    code: 'H187',
    province: 'PZ'
  },
  {
    name: 'Rassa',
    code: 'H188',
    province: 'VC'
  },
  {
    name: 'Rasun-Anterselva/Rasen-Antholz',
    italianName: 'Rasun-Anterselva',
    foreignName: 'Rasen-Antholz',
    code: 'H189',
    province: 'BZ'
  },
  {
    name: 'Rasura',
    code: 'H192',
    province: 'SO'
  },
  {
    name: 'Ravanusa',
    code: 'H194',
    province: 'AG'
  },
  {
    name: 'Ravarino',
    code: 'H195',
    province: 'MO'
  },
  {
    name: 'Ravascletto',
    code: 'H196',
    province: 'UD'
  },
  {
    name: 'Ravello',
    code: 'H198',
    province: 'SA'
  },
  {
    name: 'Ravenna',
    code: 'H199',
    province: 'RA'
  },
  {
    name: 'Raveo',
    code: 'H200',
    province: 'UD'
  },
  {
    name: 'Raviscanina',
    code: 'H202',
    province: 'CE'
  },
  {
    name: 'Re',
    code: 'H203',
    province: 'VB'
  },
  {
    name: 'Rea',
    code: 'H204',
    province: 'PV'
  },
  {
    name: 'Realmonte',
    code: 'H205',
    province: 'AG'
  },
  {
    name: 'Reana del Rojale',
    code: 'H206',
    province: 'UD'
  },
  {
    name: 'Reano',
    code: 'H207',
    province: 'TO'
  },
  {
    name: 'Recale',
    code: 'H210',
    province: 'CE'
  },
  {
    name: 'Recanati',
    code: 'H211',
    province: 'MC'
  },
  {
    name: 'Recco',
    code: 'H212',
    province: 'GE'
  },
  {
    name: 'Recetto',
    code: 'H213',
    province: 'NO'
  },
  {
    name: 'Recoaro Terme',
    code: 'H214',
    province: 'VI'
  },
  {
    name: 'Redavalle',
    code: 'H216',
    province: 'PV'
  },
  {
    name: 'Redondesco',
    code: 'H218',
    province: 'MN'
  },
  {
    name: 'Refrancore',
    code: 'H219',
    province: 'AT'
  },
  {
    name: 'Refrontolo',
    code: 'H220',
    province: 'TV'
  },
  {
    name: 'Regalbuto',
    code: 'H221',
    province: 'EN'
  },
  {
    name: 'Reggello',
    code: 'H222',
    province: 'FI'
  },
  {
    name: "Reggio nell'Emilia",
    code: 'H223',
    province: 'RE'
  },
  {
    name: 'Reggio di Calabria',
    code: 'H224',
    province: 'RC'
  },
  {
    name: 'Reggiolo',
    code: 'H225',
    province: 'RE'
  },
  {
    name: 'Reino',
    code: 'H227',
    province: 'BN'
  },
  {
    name: 'Reitano',
    code: 'H228',
    province: 'ME'
  },
  {
    name: 'Remanzacco',
    code: 'H229',
    province: 'UD'
  },
  {
    name: 'Remedello',
    code: 'H230',
    province: 'BS'
  },
  {
    name: 'Renate',
    code: 'H233',
    province: 'MB'
  },
  {
    name: 'Rende',
    code: 'H235',
    province: 'CS'
  },
  {
    name: 'Renon/Ritten',
    italianName: 'Renon',
    foreignName: 'Ritten',
    code: 'H236',
    province: 'BZ'
  },
  {
    name: 'Resana',
    code: 'H238',
    province: 'TV'
  },
  {
    name: 'Rescaldina',
    code: 'H240',
    province: 'MI'
  },
  {
    name: 'Resia',
    code: 'H242',
    province: 'UD'
  },
  {
    name: 'Ercolano',
    code: 'H243',
    province: 'NA'
  },
  {
    name: 'Resiutta',
    code: 'H244',
    province: 'UD'
  },
  {
    name: 'Resuttano',
    code: 'H245',
    province: 'CL'
  },
  {
    name: 'Retorbido',
    code: 'H246',
    province: 'PV'
  },
  {
    name: 'Revello',
    code: 'H247',
    province: 'CN'
  },
  {
    name: "Revigliasco d'Asti",
    code: 'H250',
    province: 'AT'
  },
  {
    name: 'Revine Lago',
    code: 'H253',
    province: 'TV'
  },
  {
    name: 'Rezzago',
    code: 'H255',
    province: 'CO'
  },
  {
    name: 'Rezzato',
    code: 'H256',
    province: 'BS'
  },
  {
    name: 'Rezzo',
    code: 'H257',
    province: 'IM'
  },
  {
    name: 'Rezzoaglio',
    code: 'H258',
    province: 'GE'
  },
  {
    name: 'Val Rezzo',
    code: 'H259',
    province: 'CO'
  },
  {
    name: 'Rhêmes-Notre-Dame',
    code: 'H262',
    province: 'AO'
  },
  {
    name: 'Rhêmes-Saint-Georges',
    code: 'H263',
    province: 'AO'
  },
  {
    name: 'Rho',
    code: 'H264',
    province: 'MI'
  },
  {
    name: 'Riace',
    code: 'H265',
    province: 'RC'
  },
  {
    name: 'Rialto',
    code: 'H266',
    province: 'SV'
  },
  {
    name: 'Riano',
    code: 'H267',
    province: 'RM'
  },
  {
    name: 'Riardo',
    code: 'H268',
    province: 'CE'
  },
  {
    name: 'Ribera',
    code: 'H269',
    province: 'AG'
  },
  {
    name: 'Ribordone',
    code: 'H270',
    province: 'TO'
  },
  {
    name: 'Ricadi',
    code: 'H271',
    province: 'VV'
  },
  {
    name: 'Ricaldone',
    code: 'H272',
    province: 'AL'
  },
  {
    name: 'Riccia',
    code: 'H273',
    province: 'CB'
  },
  {
    name: 'Riccione',
    code: 'H274',
    province: 'RN'
  },
  {
    name: 'Riccò del Golfo di Spezia',
    code: 'H275',
    province: 'SP'
  },
  {
    name: 'Ricengo',
    code: 'H276',
    province: 'CR'
  },
  {
    name: 'Ricigliano',
    code: 'H277',
    province: 'SA'
  },
  {
    name: 'Riese Pio X',
    code: 'H280',
    province: 'TV'
  },
  {
    name: 'Riesi',
    code: 'H281',
    province: 'CL'
  },
  {
    name: 'Rieti',
    code: 'H282',
    province: 'RI'
  },
  {
    name: 'Rifiano/Riffian',
    italianName: 'Rifiano',
    foreignName: 'Riffian',
    code: 'H284',
    province: 'BZ'
  },
  {
    name: 'Rifreddo',
    code: 'H285',
    province: 'CN'
  },
  {
    name: "Rignano sull'Arno",
    code: 'H286',
    province: 'FI'
  },
  {
    name: 'Rignano Garganico',
    code: 'H287',
    province: 'FG'
  },
  {
    name: 'Rignano Flaminio',
    code: 'H288',
    province: 'RM'
  },
  {
    name: 'Rigolato',
    code: 'H289',
    province: 'UD'
  },
  {
    name: 'Rimella',
    code: 'H293',
    province: 'VC'
  },
  {
    name: 'Rimini',
    code: 'H294',
    province: 'RN'
  },
  {
    name: 'Rio Saliceto',
    code: 'H298',
    province: 'RE'
  },
  {
    name: 'Rio di Pusteria/Mühlbach',
    italianName: 'Rio di Pusteria',
    foreignName: 'Mühlbach',
    code: 'H299',
    province: 'BZ'
  },
  {
    name: 'Riofreddo',
    code: 'H300',
    province: 'RM'
  },
  {
    name: 'Riola Sardo',
    code: 'H301',
    province: 'OR'
  },
  {
    name: 'Riolo Terme',
    code: 'H302',
    province: 'RA'
  },
  {
    name: 'Riolunato',
    code: 'H303',
    province: 'MO'
  },
  {
    name: 'Riomaggiore',
    code: 'H304',
    province: 'SP'
  },
  {
    name: 'Rionero in Vulture',
    code: 'H307',
    province: 'PZ'
  },
  {
    name: 'Rionero Sannitico',
    code: 'H308',
    province: 'IS'
  },
  {
    name: 'Ripabottoni',
    code: 'H311',
    province: 'CB'
  },
  {
    name: 'Ripacandida',
    code: 'H312',
    province: 'PZ'
  },
  {
    name: 'Ripalimosani',
    code: 'H313',
    province: 'CB'
  },
  {
    name: 'Ripalta Arpina',
    code: 'H314',
    province: 'CR'
  },
  {
    name: 'Ripalta Cremasca',
    code: 'H315',
    province: 'CR'
  },
  {
    name: 'Ripalta Guerina',
    code: 'H316',
    province: 'CR'
  },
  {
    name: 'Riparbella',
    code: 'H319',
    province: 'PI'
  },
  {
    name: 'Ripa Teatina',
    code: 'H320',
    province: 'CH'
  },
  {
    name: 'Ripatransone',
    code: 'H321',
    province: 'AP'
  },
  {
    name: 'Ripe San Ginesio',
    code: 'H323',
    province: 'MC'
  },
  {
    name: 'Ripi',
    code: 'H324',
    province: 'FR'
  },
  {
    name: 'Riposto',
    code: 'H325',
    province: 'CT'
  },
  {
    name: 'Rittana',
    code: 'H326',
    province: 'CN'
  },
  {
    name: 'Rivamonte Agordino',
    code: 'H327',
    province: 'BL'
  },
  {
    name: 'Riva Ligure',
    code: 'H328',
    province: 'IM'
  },
  {
    name: 'Riva del Garda',
    code: 'H330',
    province: 'TN'
  },
  {
    name: 'Riva di Solto',
    code: 'H331',
    province: 'BG'
  },
  {
    name: 'Rivalba',
    code: 'H333',
    province: 'TO'
  },
  {
    name: 'Rivalta Bormida',
    code: 'H334',
    province: 'AL'
  },
  {
    name: 'Rivalta di Torino',
    code: 'H335',
    province: 'TO'
  },
  {
    name: 'Rivanazzano Terme',
    code: 'H336',
    province: 'PV'
  },
  {
    name: 'Riva presso Chieri',
    code: 'H337',
    province: 'TO'
  },
  {
    name: 'Rivara',
    code: 'H338',
    province: 'TO'
  },
  {
    name: 'Rivarolo Canavese',
    code: 'H340',
    province: 'TO'
  },
  {
    name: 'Rivarolo del Re ed Uniti',
    code: 'H341',
    province: 'CR'
  },
  {
    name: 'Rivarolo Mantovano',
    code: 'H342',
    province: 'MN'
  },
  {
    name: 'Rivarone',
    code: 'H343',
    province: 'AL'
  },
  {
    name: 'Rivarossa',
    code: 'H344',
    province: 'TO'
  },
  {
    name: 'Rive',
    code: 'H346',
    province: 'VC'
  },
  {
    name: "Rive d'Arcano",
    code: 'H347',
    province: 'UD'
  },
  {
    name: 'Rivello',
    code: 'H348',
    province: 'PZ'
  },
  {
    name: 'Rivergaro',
    code: 'H350',
    province: 'PC'
  },
  {
    name: 'Rivisondoli',
    code: 'H353',
    province: 'AQ'
  },
  {
    name: 'Rivodutri',
    code: 'H354',
    province: 'RI'
  },
  {
    name: 'Rivoli',
    code: 'H355',
    province: 'TO'
  },
  {
    name: 'Rivoli Veronese',
    code: 'H356',
    province: 'VR'
  },
  {
    name: "Rivolta d'Adda",
    code: 'H357',
    province: 'CR'
  },
  {
    name: 'Rizziconi',
    code: 'H359',
    province: 'RC'
  },
  {
    name: 'Roana',
    code: 'H361',
    province: 'VI'
  },
  {
    name: 'Roaschia',
    code: 'H362',
    province: 'CN'
  },
  {
    name: 'Roascio',
    code: 'H363',
    province: 'CN'
  },
  {
    name: 'Rovasenda',
    code: 'H364',
    province: 'VC'
  },
  {
    name: 'Roasio',
    code: 'H365',
    province: 'VC'
  },
  {
    name: 'Roatto',
    code: 'H366',
    province: 'AT'
  },
  {
    name: 'Robassomero',
    code: 'H367',
    province: 'TO'
  },
  {
    name: 'Robbio',
    code: 'H369',
    province: 'PV'
  },
  {
    name: 'Robecchetto con Induno',
    code: 'H371',
    province: 'MI'
  },
  {
    name: "Robecco d'Oglio",
    code: 'H372',
    province: 'CR'
  },
  {
    name: 'Robecco sul Naviglio',
    code: 'H373',
    province: 'MI'
  },
  {
    name: 'Robecco Pavese',
    code: 'H375',
    province: 'PV'
  },
  {
    name: 'Robella',
    code: 'H376',
    province: 'AT'
  },
  {
    name: 'Robilante',
    code: 'H377',
    province: 'CN'
  },
  {
    name: 'Roburent',
    code: 'H378',
    province: 'CN'
  },
  {
    name: 'Rocca Pietore',
    code: 'H379',
    province: 'BL'
  },
  {
    name: 'Roccavaldina',
    code: 'H380',
    province: 'ME'
  },
  {
    name: 'Roccabascerana',
    code: 'H382',
    province: 'AV'
  },
  {
    name: 'Roccabernarda',
    code: 'H383',
    province: 'KR'
  },
  {
    name: 'Roccabianca',
    code: 'H384',
    province: 'PR'
  },
  {
    name: 'Roccabruna',
    code: 'H385',
    province: 'CN'
  },
  {
    name: 'Rocca Canavese',
    code: 'H386',
    province: 'TO'
  },
  {
    name: 'Rocca Canterano',
    code: 'H387',
    province: 'RM'
  },
  {
    name: 'Roccacasale',
    code: 'H389',
    province: 'AQ'
  },
  {
    name: 'Roccafluvione',
    code: 'H390',
    province: 'AP'
  },
  {
    name: 'Rocca Cigliè',
    code: 'H391',
    province: 'CN'
  },
  {
    name: "Rocca d'Arazzo",
    code: 'H392',
    province: 'AT'
  },
  {
    name: "Rocca d'Arce",
    code: 'H393',
    province: 'FR'
  },
  {
    name: 'Roccadaspide',
    code: 'H394',
    province: 'SA'
  },
  {
    name: "Rocca de' Baldi",
    code: 'H395',
    province: 'CN'
  },
  {
    name: "Rocca de' Giorgi",
    code: 'H396',
    province: 'PV'
  },
  {
    name: "Rocca d'Evandro",
    code: 'H398',
    province: 'CE'
  },
  {
    name: 'Rocca di Botte',
    code: 'H399',
    province: 'AQ'
  },
  {
    name: 'Rocca di Cambio',
    code: 'H400',
    province: 'AQ'
  },
  {
    name: 'Rocca di Cave',
    code: 'H401',
    province: 'RM'
  },
  {
    name: 'Rocca di Mezzo',
    code: 'H402',
    province: 'AQ'
  },
  {
    name: 'Rocca di Neto',
    code: 'H403',
    province: 'KR'
  },
  {
    name: 'Rocca di Papa',
    code: 'H404',
    province: 'RM'
  },
  {
    name: 'Roccafiorita',
    code: 'H405',
    province: 'ME'
  },
  {
    name: 'Roccaforte Ligure',
    code: 'H406',
    province: 'AL'
  },
  {
    name: 'Roccaforte Mondovì',
    code: 'H407',
    province: 'CN'
  },
  {
    name: 'Roccaforte del Greco',
    code: 'H408',
    province: 'RC'
  },
  {
    name: 'Roccaforzata',
    code: 'H409',
    province: 'TA'
  },
  {
    name: 'Roccafranca',
    code: 'H410',
    province: 'BS'
  },
  {
    name: 'Roccagiovine',
    code: 'H411',
    province: 'RM'
  },
  {
    name: 'Roccagloriosa',
    code: 'H412',
    province: 'SA'
  },
  {
    name: 'Roccagorga',
    code: 'H413',
    province: 'LT'
  },
  {
    name: 'Rocca Grimalda',
    code: 'H414',
    province: 'AL'
  },
  {
    name: 'Rocca Imperiale',
    code: 'H416',
    province: 'CS'
  },
  {
    name: 'Roccalbegna',
    code: 'H417',
    province: 'GR'
  },
  {
    name: 'Roccalumera',
    code: 'H418',
    province: 'ME'
  },
  {
    name: 'Roccamandolfi',
    code: 'H420',
    province: 'IS'
  },
  {
    name: 'Rocca Massima',
    code: 'H421',
    province: 'LT'
  },
  {
    name: 'Roccamena',
    code: 'H422',
    province: 'PA'
  },
  {
    name: 'Roccamonfina',
    code: 'H423',
    province: 'CE'
  },
  {
    name: 'Roccamontepiano',
    code: 'H424',
    province: 'CH'
  },
  {
    name: 'Roccamorice',
    code: 'H425',
    province: 'PE'
  },
  {
    name: 'Roccanova',
    code: 'H426',
    province: 'PZ'
  },
  {
    name: 'Roccantica',
    code: 'H427',
    province: 'RI'
  },
  {
    name: 'Roccapalumba',
    code: 'H428',
    province: 'PA'
  },
  {
    name: 'Rocca Pia',
    code: 'H429',
    province: 'AQ'
  },
  {
    name: 'Roccapiemonte',
    code: 'H431',
    province: 'SA'
  },
  {
    name: 'Rocca Priora',
    code: 'H432',
    province: 'RM'
  },
  {
    name: 'Roccarainola',
    code: 'H433',
    province: 'NA'
  },
  {
    name: 'Roccaraso',
    code: 'H434',
    province: 'AQ'
  },
  {
    name: 'Roccaromana',
    code: 'H436',
    province: 'CE'
  },
  {
    name: 'Rocca San Casciano',
    code: 'H437',
    province: 'FC'
  },
  {
    name: 'Rocca San Felice',
    code: 'H438',
    province: 'AV'
  },
  {
    name: 'Rocca San Giovanni',
    code: 'H439',
    province: 'CH'
  },
  {
    name: 'Rocca Santa Maria',
    code: 'H440',
    province: 'TE'
  },
  {
    name: 'Rocca Santo Stefano',
    code: 'H441',
    province: 'RM'
  },
  {
    name: 'Roccascalegna',
    code: 'H442',
    province: 'CH'
  },
  {
    name: 'Roccasecca',
    code: 'H443',
    province: 'FR'
  },
  {
    name: 'Roccasecca dei Volsci',
    code: 'H444',
    province: 'LT'
  },
  {
    name: 'Roccasicura',
    code: 'H445',
    province: 'IS'
  },
  {
    name: 'Rocca Sinibalda',
    code: 'H446',
    province: 'RI'
  },
  {
    name: 'Roccasparvera',
    code: 'H447',
    province: 'CN'
  },
  {
    name: 'Roccaspinalveti',
    code: 'H448',
    province: 'CH'
  },
  {
    name: 'Roccastrada',
    code: 'H449',
    province: 'GR'
  },
  {
    name: 'Rocca Susella',
    code: 'H450',
    province: 'PV'
  },
  {
    name: 'Roccaverano',
    code: 'H451',
    province: 'AT'
  },
  {
    name: 'Roccavignale',
    code: 'H452',
    province: 'SV'
  },
  {
    name: 'Roccavione',
    code: 'H453',
    province: 'CN'
  },
  {
    name: 'Roccavivara',
    code: 'H454',
    province: 'CB'
  },
  {
    name: 'Roccella Valdemone',
    code: 'H455',
    province: 'ME'
  },
  {
    name: 'Roccella Ionica',
    code: 'H456',
    province: 'RC'
  },
  {
    name: 'Rocchetta a Volturno',
    code: 'H458',
    province: 'IS'
  },
  {
    name: 'Rocchetta e Croce',
    code: 'H459',
    province: 'CE'
  },
  {
    name: 'Rocchetta Nervina',
    code: 'H460',
    province: 'IM'
  },
  {
    name: 'Rocchetta di Vara',
    code: 'H461',
    province: 'SP'
  },
  {
    name: 'Rocchetta Belbo',
    code: 'H462',
    province: 'CN'
  },
  {
    name: 'Rocchetta Ligure',
    code: 'H465',
    province: 'AL'
  },
  {
    name: 'Rocchetta Palafea',
    code: 'H466',
    province: 'AT'
  },
  {
    name: "Rocchetta Sant'Antonio",
    code: 'H467',
    province: 'FG'
  },
  {
    name: 'Rocchetta Tanaro',
    code: 'H468',
    province: 'AT'
  },
  {
    name: 'Rodano',
    code: 'H470',
    province: 'MI'
  },
  {
    name: 'Roddi',
    code: 'H472',
    province: 'CN'
  },
  {
    name: 'Roddino',
    code: 'H473',
    province: 'CN'
  },
  {
    name: 'Rodello',
    code: 'H474',
    province: 'CN'
  },
  {
    name: 'Rodengo/Rodeneck',
    italianName: 'Rodengo',
    foreignName: 'Rodeneck',
    code: 'H475',
    province: 'BZ'
  },
  {
    name: 'Rodengo Saiano',
    code: 'H477',
    province: 'BS'
  },
  {
    name: 'Rodero',
    code: 'H478',
    province: 'CO'
  },
  {
    name: 'Rodì Milici',
    code: 'H479',
    province: 'ME'
  },
  {
    name: 'Rodi Garganico',
    code: 'H480',
    province: 'FG'
  },
  {
    name: 'Rodigo',
    code: 'H481',
    province: 'MN'
  },
  {
    name: 'Roè Volciano',
    code: 'H484',
    province: 'BS'
  },
  {
    name: 'Rofrano',
    code: 'H485',
    province: 'SA'
  },
  {
    name: 'Rogeno',
    code: 'H486',
    province: 'LC'
  },
  {
    name: 'Roggiano Gravina',
    code: 'H488',
    province: 'CS'
  },
  {
    name: 'Roghudi',
    code: 'H489',
    province: 'RC'
  },
  {
    name: 'Rogliano',
    code: 'H490',
    province: 'CS'
  },
  {
    name: 'Rognano',
    code: 'H491',
    province: 'PV'
  },
  {
    name: 'Rogno',
    code: 'H492',
    province: 'BG'
  },
  {
    name: 'Rogolo',
    code: 'H493',
    province: 'SO'
  },
  {
    name: 'Roiate',
    code: 'H494',
    province: 'RM'
  },
  {
    name: 'Roio del Sangro',
    code: 'H495',
    province: 'CH'
  },
  {
    name: 'Roisan',
    code: 'H497',
    province: 'AO'
  },
  {
    name: 'Roletto',
    code: 'H498',
    province: 'TO'
  },
  {
    name: 'Rolo',
    code: 'H500',
    province: 'RE'
  },
  {
    name: 'Roma',
    code: 'H501',
    province: 'RM'
  },
  {
    name: 'Romagnano Sesia',
    code: 'H502',
    province: 'NO'
  },
  {
    name: 'Romagnano al Monte',
    code: 'H503',
    province: 'SA'
  },
  {
    name: 'Romagnese',
    code: 'H505',
    province: 'PV'
  },
  {
    name: 'Romana',
    code: 'H507',
    province: 'SS'
  },
  {
    name: 'Romanengo',
    code: 'H508',
    province: 'CR'
  },
  {
    name: 'Romano di Lombardia',
    code: 'H509',
    province: 'BG'
  },
  {
    name: 'Romano Canavese',
    code: 'H511',
    province: 'TO'
  },
  {
    name: "Romano d'Ezzelino",
    code: 'H512',
    province: 'VI'
  },
  {
    name: "Romans d'Isonzo",
    code: 'H514',
    province: 'GO'
  },
  {
    name: 'Rombiolo',
    code: 'H516',
    province: 'VV'
  },
  {
    name: 'Romeno',
    code: 'H517',
    province: 'TN'
  },
  {
    name: 'Romentino',
    code: 'H518',
    province: 'NO'
  },
  {
    name: 'Rometta',
    code: 'H519',
    province: 'ME'
  },
  {
    name: 'Roncà',
    code: 'H522',
    province: 'VR'
  },
  {
    name: 'Roncade',
    code: 'H523',
    province: 'TV'
  },
  {
    name: 'Roncadelle',
    code: 'H525',
    province: 'BS'
  },
  {
    name: 'Roncaro',
    code: 'H527',
    province: 'PV'
  },
  {
    name: 'Roncegno Terme',
    code: 'H528',
    province: 'TN'
  },
  {
    name: 'Roncello',
    code: 'H529',
    province: 'MB'
  },
  {
    name: 'Ronchi dei Legionari',
    code: 'H531',
    province: 'GO'
  },
  {
    name: 'Ronchi Valsugana',
    code: 'H532',
    province: 'TN'
  },
  {
    name: 'Ronchis',
    code: 'H533',
    province: 'UD'
  },
  {
    name: 'Ronciglione',
    code: 'H534',
    province: 'VT'
  },
  {
    name: 'Roncobello',
    code: 'H535',
    province: 'BG'
  },
  {
    name: 'Ronco Scrivia',
    code: 'H536',
    province: 'GE'
  },
  {
    name: 'Ronco Briantino',
    code: 'H537',
    province: 'MB'
  },
  {
    name: 'Ronco Biellese',
    code: 'H538',
    province: 'BI'
  },
  {
    name: 'Ronco Canavese',
    code: 'H539',
    province: 'TO'
  },
  {
    name: "Ronco all'Adige",
    code: 'H540',
    province: 'VR'
  },
  {
    name: 'Roncoferraro',
    code: 'H541',
    province: 'MN'
  },
  {
    name: 'Roncofreddo',
    code: 'H542',
    province: 'FC'
  },
  {
    name: 'Roncola',
    code: 'H544',
    province: 'BG'
  },
  {
    name: 'Rondanina',
    code: 'H546',
    province: 'GE'
  },
  {
    name: 'Rondissone',
    code: 'H547',
    province: 'TO'
  },
  {
    name: 'Ronsecco',
    code: 'H549',
    province: 'VC'
  },
  {
    name: 'Ronzone',
    code: 'H552',
    province: 'TN'
  },
  {
    name: 'Roppolo',
    code: 'H553',
    province: 'BI'
  },
  {
    name: 'Rorà',
    code: 'H554',
    province: 'TO'
  },
  {
    name: 'Roure',
    code: 'H555',
    province: 'TO'
  },
  {
    name: 'Rosà',
    code: 'H556',
    province: 'VI'
  },
  {
    name: 'Rosarno',
    code: 'H558',
    province: 'RC'
  },
  {
    name: 'Rosasco',
    code: 'H559',
    province: 'PV'
  },
  {
    name: 'Rosate',
    code: 'H560',
    province: 'MI'
  },
  {
    name: 'Rosazza',
    code: 'H561',
    province: 'BI'
  },
  {
    name: 'Rosciano',
    code: 'H562',
    province: 'PE'
  },
  {
    name: 'Roscigno',
    code: 'H564',
    province: 'SA'
  },
  {
    name: 'Rose',
    code: 'H565',
    province: 'CS'
  },
  {
    name: 'Rosello',
    code: 'H566',
    province: 'CH'
  },
  {
    name: 'Roseto Valfortore',
    code: 'H568',
    province: 'FG'
  },
  {
    name: 'Rosignano Monferrato',
    code: 'H569',
    province: 'AL'
  },
  {
    name: 'Rosignano Marittimo',
    code: 'H570',
    province: 'LI'
  },
  {
    name: 'Roseto Capo Spulico',
    code: 'H572',
    province: 'CS'
  },
  {
    name: 'Rosolina',
    code: 'H573',
    province: 'RO'
  },
  {
    name: 'Rosolini',
    code: 'H574',
    province: 'SR'
  },
  {
    name: 'Rosora',
    code: 'H575',
    province: 'AN'
  },
  {
    name: 'Rossa',
    code: 'H577',
    province: 'VC'
  },
  {
    name: 'Rossana',
    code: 'H578',
    province: 'CN'
  },
  {
    name: 'Rossano Veneto',
    code: 'H580',
    province: 'VI'
  },
  {
    name: 'Rossiglione',
    code: 'H581',
    province: 'GE'
  },
  {
    name: 'Rosta',
    code: 'H583',
    province: 'TO'
  },
  {
    name: "Rota d'Imagna",
    code: 'H584',
    province: 'BG'
  },
  {
    name: 'Rota Greca',
    code: 'H585',
    province: 'CS'
  },
  {
    name: 'Rotella',
    code: 'H588',
    province: 'AP'
  },
  {
    name: 'Rotello',
    code: 'H589',
    province: 'CB'
  },
  {
    name: 'Rotonda',
    code: 'H590',
    province: 'PZ'
  },
  {
    name: 'Rotondella',
    code: 'H591',
    province: 'MT'
  },
  {
    name: 'Rotondi',
    code: 'H592',
    province: 'AV'
  },
  {
    name: 'Rottofreno',
    code: 'H593',
    province: 'PC'
  },
  {
    name: 'Rotzo',
    code: 'H594',
    province: 'VI'
  },
  {
    name: 'Rovato',
    code: 'H598',
    province: 'BS'
  },
  {
    name: 'Rovegno',
    code: 'H599',
    province: 'GE'
  },
  {
    name: 'Rovellasca',
    code: 'H601',
    province: 'CO'
  },
  {
    name: 'Rovello Porro',
    code: 'H602',
    province: 'CO'
  },
  {
    name: 'Roverbella',
    code: 'H604',
    province: 'MN'
  },
  {
    name: 'Roverchiara',
    code: 'H606',
    province: 'VR'
  },
  {
    name: 'Roverè della Luna',
    code: 'H607',
    province: 'TN'
  },
  {
    name: 'Roverè Veronese',
    code: 'H608',
    province: 'VR'
  },
  {
    name: 'Roveredo in Piano',
    code: 'H609',
    province: 'PN'
  },
  {
    name: 'Roveredo di Guà',
    code: 'H610',
    province: 'VR'
  },
  {
    name: 'Rovereto',
    code: 'H612',
    province: 'TN'
  },
  {
    name: 'Rovescala',
    code: 'H614',
    province: 'PV'
  },
  {
    name: 'Rovetta',
    code: 'H615',
    province: 'BG'
  },
  {
    name: 'Roviano',
    code: 'H618',
    province: 'RM'
  },
  {
    name: 'Rovigo',
    code: 'H620',
    province: 'RO'
  },
  {
    name: 'Rovito',
    code: 'H621',
    province: 'CS'
  },
  {
    name: 'Rovolon',
    code: 'H622',
    province: 'PD'
  },
  {
    name: 'Rozzano',
    code: 'H623',
    province: 'MI'
  },
  {
    name: 'Rubano',
    code: 'H625',
    province: 'PD'
  },
  {
    name: 'Rubiana',
    code: 'H627',
    province: 'TO'
  },
  {
    name: 'Rubiera',
    code: 'H628',
    province: 'RE'
  },
  {
    name: 'Ruda',
    code: 'H629',
    province: 'UD'
  },
  {
    name: 'Rudiano',
    code: 'H630',
    province: 'BS'
  },
  {
    name: 'Rueglio',
    code: 'H631',
    province: 'TO'
  },
  {
    name: 'Ruffano',
    code: 'H632',
    province: 'LE'
  },
  {
    name: 'Ruffia',
    code: 'H633',
    province: 'CN'
  },
  {
    name: 'Ruffrè-Mendola',
    code: 'H634',
    province: 'TN'
  },
  {
    name: 'Rufina',
    code: 'H635',
    province: 'FI'
  },
  {
    name: 'Rumo',
    code: 'H639',
    province: 'TN'
  },
  {
    name: 'Ruoti',
    code: 'H641',
    province: 'PZ'
  },
  {
    name: 'Russi',
    code: 'H642',
    province: 'RA'
  },
  {
    name: 'Rutigliano',
    code: 'H643',
    province: 'BA'
  },
  {
    name: 'Rutino',
    code: 'H644',
    province: 'SA'
  },
  {
    name: 'Ruvo di Puglia',
    code: 'H645',
    province: 'BA'
  },
  {
    name: 'Ruvo del Monte',
    code: 'H646',
    province: 'PZ'
  },
  {
    name: 'Sabaudia',
    code: 'H647',
    province: 'LT'
  },
  {
    name: 'Sabbio Chiese',
    code: 'H650',
    province: 'BS'
  },
  {
    name: 'Sabbioneta',
    code: 'H652',
    province: 'MN'
  },
  {
    name: 'Sacco',
    code: 'H654',
    province: 'SA'
  },
  {
    name: 'Saccolongo',
    code: 'H655',
    province: 'PD'
  },
  {
    name: 'Sacile',
    code: 'H657',
    province: 'PN'
  },
  {
    name: 'Sacrofano',
    code: 'H658',
    province: 'RM'
  },
  {
    name: 'Sadali',
    code: 'H659',
    province: 'SU'
  },
  {
    name: 'Sagama',
    code: 'H661',
    province: 'OR'
  },
  {
    name: 'Sagliano Micca',
    code: 'H662',
    province: 'BI'
  },
  {
    name: 'Sagrado',
    code: 'H665',
    province: 'GO'
  },
  {
    name: 'Sagron Mis',
    code: 'H666',
    province: 'TN'
  },
  {
    name: 'Saint-Christophe',
    code: 'H669',
    province: 'AO'
  },
  {
    name: 'Saint-Denis',
    code: 'H670',
    province: 'AO'
  },
  {
    name: 'Saint-Marcel',
    code: 'H671',
    province: 'AO'
  },
  {
    name: 'Saint-Nicolas',
    code: 'H672',
    province: 'AO'
  },
  {
    name: 'Saint-Oyen',
    code: 'H673',
    province: 'AO'
  },
  {
    name: 'Saint-Pierre',
    code: 'H674',
    province: 'AO'
  },
  {
    name: 'Saint-Rhémy-en-Bosses',
    code: 'H675',
    province: 'AO'
  },
  {
    name: 'Saint-Vincent',
    code: 'H676',
    province: 'AO'
  },
  {
    name: 'Sala Monferrato',
    code: 'H677',
    province: 'AL'
  },
  {
    name: 'Sala Bolognese',
    code: 'H678',
    province: 'BO'
  },
  {
    name: 'Sala Comacina',
    code: 'H679',
    province: 'CO'
  },
  {
    name: 'Sala Biellese',
    code: 'H681',
    province: 'BI'
  },
  {
    name: 'Sala Baganza',
    code: 'H682',
    province: 'PR'
  },
  {
    name: 'Sala Consilina',
    code: 'H683',
    province: 'SA'
  },
  {
    name: 'Salbertrand',
    code: 'H684',
    province: 'TO'
  },
  {
    name: 'Salento',
    code: 'H686',
    province: 'SA'
  },
  {
    name: 'Salandra',
    code: 'H687',
    province: 'MT'
  },
  {
    name: 'Salaparuta',
    code: 'H688',
    province: 'TP'
  },
  {
    name: 'Salara',
    code: 'H689',
    province: 'RO'
  },
  {
    name: 'Salasco',
    code: 'H690',
    province: 'VC'
  },
  {
    name: 'Salassa',
    code: 'H691',
    province: 'TO'
  },
  {
    name: 'Salcito',
    code: 'H693',
    province: 'CB'
  },
  {
    name: 'Sale',
    code: 'H694',
    province: 'AL'
  },
  {
    name: 'Sale delle Langhe',
    code: 'H695',
    province: 'CN'
  },
  {
    name: 'Sale Marasino',
    code: 'H699',
    province: 'BS'
  },
  {
    name: 'Salemi',
    code: 'H700',
    province: 'TP'
  },
  {
    name: 'Salerano sul Lambro',
    code: 'H701',
    province: 'LO'
  },
  {
    name: 'Salerano Canavese',
    code: 'H702',
    province: 'TO'
  },
  {
    name: 'Salerno',
    code: 'H703',
    province: 'SA'
  },
  {
    name: 'Sale San Giovanni',
    code: 'H704',
    province: 'CN'
  },
  {
    name: 'Salgareda',
    code: 'H706',
    province: 'TV'
  },
  {
    name: 'Sali Vercellese',
    code: 'H707',
    province: 'VC'
  },
  {
    name: 'Salice Salentino',
    code: 'H708',
    province: 'LE'
  },
  {
    name: 'Saliceto',
    code: 'H710',
    province: 'CN'
  },
  {
    name: 'San Mauro di Saline',
    code: 'H712',
    province: 'VR'
  },
  {
    name: 'Salisano',
    code: 'H713',
    province: 'RI'
  },
  {
    name: 'Salizzole',
    code: 'H714',
    province: 'VR'
  },
  {
    name: 'Salle',
    code: 'H715',
    province: 'PE'
  },
  {
    name: 'Salmour',
    code: 'H716',
    province: 'CN'
  },
  {
    name: 'Salò',
    code: 'H717',
    province: 'BS'
  },
  {
    name: 'Salorno sulla strada del vino/Salurn an der Weinstraße',
    italianName: 'Salorno sulla strada del vino',
    foreignName: 'Salurn an der Weinstraße',
    code: 'H719',
    province: 'BZ'
  },
  {
    name: 'Salsomaggiore Terme',
    code: 'H720',
    province: 'PR'
  },
  {
    name: 'Saltrio',
    code: 'H723',
    province: 'VA'
  },
  {
    name: 'Saludecio',
    code: 'H724',
    province: 'RN'
  },
  {
    name: 'Saluggia',
    code: 'H725',
    province: 'VC'
  },
  {
    name: 'Salussola',
    code: 'H726',
    province: 'BI'
  },
  {
    name: 'Saluzzo',
    code: 'H727',
    province: 'CN'
  },
  {
    name: 'Salve',
    code: 'H729',
    province: 'LE'
  },
  {
    name: 'Savoia di Lucania',
    code: 'H730',
    province: 'PZ'
  },
  {
    name: 'Salvirola',
    code: 'H731',
    province: 'CR'
  },
  {
    name: 'Salvitelle',
    code: 'H732',
    province: 'SA'
  },
  {
    name: 'Salza Irpina',
    code: 'H733',
    province: 'AV'
  },
  {
    name: 'Salza di Pinerolo',
    code: 'H734',
    province: 'TO'
  },
  {
    name: 'Salzano',
    code: 'H735',
    province: 'VE'
  },
  {
    name: 'Samarate',
    code: 'H736',
    province: 'VA'
  },
  {
    name: 'Samassi',
    code: 'H738',
    province: 'SU'
  },
  {
    name: 'Samatzai',
    code: 'H739',
    province: 'SU'
  },
  {
    name: 'Sambuca di Sicilia',
    code: 'H743',
    province: 'AG'
  },
  {
    name: 'Sambuca Pistoiese',
    code: 'H744',
    province: 'PT'
  },
  {
    name: 'Sambuci',
    code: 'H745',
    province: 'RM'
  },
  {
    name: 'Sambuco',
    code: 'H746',
    province: 'CN'
  },
  {
    name: 'Sammichele di Bari',
    code: 'H749',
    province: 'BA'
  },
  {
    name: 'Samolaco',
    code: 'H752',
    province: 'SO'
  },
  {
    name: 'Samone',
    code: 'H753',
    province: 'TO'
  },
  {
    name: 'Samone',
    code: 'H754',
    province: 'TN'
  },
  {
    name: 'Sampeyre',
    code: 'H755',
    province: 'CN'
  },
  {
    name: 'Samugheo',
    code: 'H756',
    province: 'OR'
  },
  {
    name: 'Sanarica',
    code: 'H757',
    province: 'LE'
  },
  {
    name: 'San Bartolomeo Val Cavargna',
    code: 'H760',
    province: 'CO'
  },
  {
    name: 'San Bartolomeo al Mare',
    code: 'H763',
    province: 'IM'
  },
  {
    name: 'San Bartolomeo in Galdo',
    code: 'H764',
    province: 'BN'
  },
  {
    name: 'San Basile',
    code: 'H765',
    province: 'CS'
  },
  {
    name: 'San Basilio',
    code: 'H766',
    province: 'SU'
  },
  {
    name: 'San Bassano',
    code: 'H767',
    province: 'CR'
  },
  {
    name: 'San Bellino',
    code: 'H768',
    province: 'RO'
  },
  {
    name: 'San Benedetto del Tronto',
    code: 'H769',
    province: 'AP'
  },
  {
    name: 'San Benedetto Belbo',
    code: 'H770',
    province: 'CN'
  },
  {
    name: 'San Benedetto Po',
    code: 'H771',
    province: 'MN'
  },
  {
    name: 'San Benedetto dei Marsi',
    code: 'H772',
    province: 'AQ'
  },
  {
    name: 'San Benedetto in Perillis',
    code: 'H773',
    province: 'AQ'
  },
  {
    name: 'San Benedetto Ullano',
    code: 'H774',
    province: 'CS'
  },
  {
    name: 'San Benigno Canavese',
    code: 'H775',
    province: 'TO'
  },
  {
    name: 'San Bernardino Verbano',
    code: 'H777',
    province: 'VB'
  },
  {
    name: 'San Biagio Platani',
    code: 'H778',
    province: 'AG'
  },
  {
    name: 'San Biagio Saracinisco',
    code: 'H779',
    province: 'FR'
  },
  {
    name: 'San Biagio della Cima',
    code: 'H780',
    province: 'IM'
  },
  {
    name: 'San Biagio di Callalta',
    code: 'H781',
    province: 'TV'
  },
  {
    name: 'San Biase',
    code: 'H782',
    province: 'CB'
  },
  {
    name: 'San Bonifacio',
    code: 'H783',
    province: 'VR'
  },
  {
    name: 'San Buono',
    code: 'H784',
    province: 'CH'
  },
  {
    name: 'San Calogero',
    code: 'H785',
    province: 'VV'
  },
  {
    name: 'San Candido/Innichen',
    italianName: 'San Candido',
    foreignName: 'Innichen',
    code: 'H786',
    province: 'BZ'
  },
  {
    name: "San Canzian d'Isonzo",
    code: 'H787',
    province: 'GO'
  },
  {
    name: 'San Carlo Canavese',
    code: 'H789',
    province: 'TO'
  },
  {
    name: 'San Casciano dei Bagni',
    code: 'H790',
    province: 'SI'
  },
  {
    name: 'San Casciano in Val di Pesa',
    code: 'H791',
    province: 'FI'
  },
  {
    name: 'San Cataldo',
    code: 'H792',
    province: 'CL'
  },
  {
    name: 'San Cesario di Lecce',
    code: 'H793',
    province: 'LE'
  },
  {
    name: 'San Cesario sul Panaro',
    code: 'H794',
    province: 'MO'
  },
  {
    name: 'San Chirico Nuovo',
    code: 'H795',
    province: 'PZ'
  },
  {
    name: 'San Chirico Raparo',
    code: 'H796',
    province: 'PZ'
  },
  {
    name: 'San Cipirello',
    code: 'H797',
    province: 'PA'
  },
  {
    name: "San Cipriano d'Aversa",
    code: 'H798',
    province: 'CE'
  },
  {
    name: 'San Cipriano Po',
    code: 'H799',
    province: 'PV'
  },
  {
    name: 'San Cipriano Picentino',
    code: 'H800',
    province: 'SA'
  },
  {
    name: 'San Clemente',
    code: 'H801',
    province: 'RN'
  },
  {
    name: 'San Colombano Certenoli',
    code: 'H802',
    province: 'GE'
  },
  {
    name: 'San Colombano al Lambro',
    code: 'H803',
    province: 'MI'
  },
  {
    name: 'San Colombano Belmonte',
    code: 'H804',
    province: 'TO'
  },
  {
    name: 'San Cono',
    code: 'H805',
    province: 'CT'
  },
  {
    name: 'San Cosmo Albanese',
    code: 'H806',
    province: 'CS'
  },
  {
    name: 'San Costantino Calabro',
    code: 'H807',
    province: 'VV'
  },
  {
    name: 'San Costantino Albanese',
    code: 'H808',
    province: 'PZ'
  },
  {
    name: 'San Costanzo',
    code: 'H809',
    province: 'PU'
  },
  {
    name: 'San Cristoforo',
    code: 'H810',
    province: 'AL'
  },
  {
    name: "San Damiano d'Asti",
    code: 'H811',
    province: 'AT'
  },
  {
    name: 'San Damiano Macra',
    code: 'H812',
    province: 'CN'
  },
  {
    name: 'San Damiano al Colle',
    code: 'H814',
    province: 'PV'
  },
  {
    name: 'San Daniele Po',
    code: 'H815',
    province: 'CR'
  },
  {
    name: 'San Daniele del Friuli',
    code: 'H816',
    province: 'UD'
  },
  {
    name: 'San Demetrio Corone',
    code: 'H818',
    province: 'CS'
  },
  {
    name: "San Demetrio ne' Vestini",
    code: 'H819',
    province: 'AQ'
  },
  {
    name: 'San Didero',
    code: 'H820',
    province: 'TO'
  },
  {
    name: 'Sandigliano',
    code: 'H821',
    province: 'BI'
  },
  {
    name: 'San Donaci',
    code: 'H822',
    province: 'BR'
  },
  {
    name: 'San Donà di Piave',
    code: 'H823',
    province: 'VE'
  },
  {
    name: 'San Donato Val di Comino',
    code: 'H824',
    province: 'FR'
  },
  {
    name: 'San Donato di Ninea',
    code: 'H825',
    province: 'CS'
  },
  {
    name: 'San Donato di Lecce',
    code: 'H826',
    province: 'LE'
  },
  {
    name: 'San Donato Milanese',
    code: 'H827',
    province: 'MI'
  },
  {
    name: 'Sandrigo',
    code: 'H829',
    province: 'VI'
  },
  {
    name: 'San Fele',
    code: 'H831',
    province: 'PZ'
  },
  {
    name: 'San Felice del Molise',
    code: 'H833',
    province: 'CB'
  },
  {
    name: 'San Felice a Cancello',
    code: 'H834',
    province: 'CE'
  },
  {
    name: 'San Felice sul Panaro',
    code: 'H835',
    province: 'MO'
  },
  {
    name: 'San Felice Circeo',
    code: 'H836',
    province: 'LT'
  },
  {
    name: 'San Felice del Benaco',
    code: 'H838',
    province: 'BS'
  },
  {
    name: 'San Ferdinando di Puglia',
    code: 'H839',
    province: 'BT'
  },
  {
    name: 'San Fermo della Battaglia',
    code: 'H840',
    province: 'CO'
  },
  {
    name: 'San Fili',
    code: 'H841',
    province: 'CS'
  },
  {
    name: 'San Filippo del Mela',
    code: 'H842',
    province: 'ME'
  },
  {
    name: 'San Fior',
    code: 'H843',
    province: 'TV'
  },
  {
    name: 'San Fiorano',
    code: 'H844',
    province: 'LO'
  },
  {
    name: 'San Floriano del Collio-Števerjan',
    italianName: 'San Floriano del Collio',
    foreignName: 'Števerjan',
    code: 'H845',
    province: 'GO'
  },
  {
    name: 'San Floro',
    code: 'H846',
    province: 'CZ'
  },
  {
    name: 'San Francesco al Campo',
    code: 'H847',
    province: 'TO'
  },
  {
    name: 'Aglientu',
    code: 'H848',
    province: 'SS'
  },
  {
    name: 'San Fratello',
    code: 'H850',
    province: 'ME'
  },
  {
    name: 'Sanfrè',
    code: 'H851',
    province: 'CN'
  },
  {
    name: 'Sanfront',
    code: 'H852',
    province: 'CN'
  },
  {
    name: 'Sangano',
    code: 'H855',
    province: 'TO'
  },
  {
    name: 'San Gavino Monreale',
    code: 'H856',
    province: 'SU'
  },
  {
    name: 'San Gemini',
    code: 'H857',
    province: 'TR'
  },
  {
    name: 'San Genesio Atesino/Jenesien',
    italianName: 'San Genesio Atesino',
    foreignName: 'Jenesien',
    code: 'H858',
    province: 'BZ'
  },
  {
    name: 'San Genesio ed Uniti',
    code: 'H859',
    province: 'PV'
  },
  {
    name: 'San Gennaro Vesuviano',
    code: 'H860',
    province: 'NA'
  },
  {
    name: 'San Germano Vercellese',
    code: 'H861',
    province: 'VC'
  },
  {
    name: 'San Germano Chisone',
    code: 'H862',
    province: 'TO'
  },
  {
    name: 'San Gervasio Bresciano',
    code: 'H865',
    province: 'BS'
  },
  {
    name: 'San Giacomo degli Schiavoni',
    code: 'H867',
    province: 'CB'
  },
  {
    name: 'San Giacomo Filippo',
    code: 'H868',
    province: 'SO'
  },
  {
    name: 'San Giacomo delle Segnate',
    code: 'H870',
    province: 'MN'
  },
  {
    name: 'Sangiano',
    code: 'H872',
    province: 'VA'
  },
  {
    name: 'San Gillio',
    code: 'H873',
    province: 'TO'
  },
  {
    name: 'San Gimignano',
    code: 'H875',
    province: 'SI'
  },
  {
    name: 'San Ginesio',
    code: 'H876',
    province: 'MC'
  },
  {
    name: 'Sangineto',
    code: 'H877',
    province: 'CS'
  },
  {
    name: 'San Giorgio Monferrato',
    code: 'H878',
    province: 'AL'
  },
  {
    name: 'San Giorgio a Liri',
    code: 'H880',
    province: 'FR'
  },
  {
    name: 'San Giorgio Albanese',
    code: 'H881',
    province: 'CS'
  },
  {
    name: 'San Giorgio Ionico',
    code: 'H882',
    province: 'TA'
  },
  {
    name: 'San Giorgio Bigarello',
    code: 'H883',
    province: 'MN'
  },
  {
    name: 'San Giorgio su Legnano',
    code: 'H884',
    province: 'MI'
  },
  {
    name: 'San Giorgio di Lomellina',
    code: 'H885',
    province: 'PV'
  },
  {
    name: 'San Giorgio Piacentino',
    code: 'H887',
    province: 'PC'
  },
  {
    name: 'San Giorgio Lucano',
    code: 'H888',
    province: 'MT'
  },
  {
    name: 'San Giorgio Morgeto',
    code: 'H889',
    province: 'RC'
  },
  {
    name: 'San Giorgio Canavese',
    code: 'H890',
    province: 'TO'
  },
  {
    name: 'San Giorgio della Richinvelda',
    code: 'H891',
    province: 'PN'
  },
  {
    name: 'San Giorgio a Cremano',
    code: 'H892',
    province: 'NA'
  },
  {
    name: 'San Giorgio delle Pertiche',
    code: 'H893',
    province: 'PD'
  },
  {
    name: 'San Giorgio del Sannio',
    code: 'H894',
    province: 'BN'
  },
  {
    name: 'San Giorgio di Nogaro',
    code: 'H895',
    province: 'UD'
  },
  {
    name: 'San Giorgio di Piano',
    code: 'H896',
    province: 'BO'
  },
  {
    name: 'San Giorgio in Bosco',
    code: 'H897',
    province: 'PD'
  },
  {
    name: 'San Giorgio La Molara',
    code: 'H898',
    province: 'BN'
  },
  {
    name: 'San Giorgio Scarampi',
    code: 'H899',
    province: 'AT'
  },
  {
    name: 'San Giorio di Susa',
    code: 'H900',
    province: 'TO'
  },
  {
    name: 'San Giovanni Valdarno',
    code: 'H901',
    province: 'AR'
  },
  {
    name: 'San Giovanni di Gerace',
    code: 'H903',
    province: 'RC'
  },
  {
    name: 'San Giovanni al Natisone',
    code: 'H906',
    province: 'UD'
  },
  {
    name: 'San Giovanni a Piro',
    code: 'H907',
    province: 'SA'
  },
  {
    name: 'San Giovanni Bianco',
    code: 'H910',
    province: 'BG'
  },
  {
    name: 'San Giovanni del Dosso',
    code: 'H912',
    province: 'MN'
  },
  {
    name: 'Villa San Giovanni in Tuscia',
    code: 'H913',
    province: 'VT'
  },
  {
    name: 'San Giovanni Gemini',
    code: 'H914',
    province: 'AG'
  },
  {
    name: 'San Giovanni Ilarione',
    code: 'H916',
    province: 'VR'
  },
  {
    name: 'San Giovanni Incarico',
    code: 'H917',
    province: 'FR'
  },
  {
    name: 'San Giovanni in Croce',
    code: 'H918',
    province: 'CR'
  },
  {
    name: 'San Giovanni in Fiore',
    code: 'H919',
    province: 'CS'
  },
  {
    name: 'San Giovanni in Galdo',
    code: 'H920',
    province: 'CB'
  },
  {
    name: 'San Giovanni in Marignano',
    code: 'H921',
    province: 'RN'
  },
  {
    name: 'San Giovanni la Punta',
    code: 'H922',
    province: 'CT'
  },
  {
    name: 'San Giovanni Lipioni',
    code: 'H923',
    province: 'CH'
  },
  {
    name: 'San Giovanni Lupatoto',
    code: 'H924',
    province: 'VR'
  },
  {
    name: 'San Giovanni Rotondo',
    code: 'H926',
    province: 'FG'
  },
  {
    name: 'San Giuliano del Sannio',
    code: 'H928',
    province: 'CB'
  },
  {
    name: 'San Giuliano di Puglia',
    code: 'H929',
    province: 'CB'
  },
  {
    name: 'San Giuliano Milanese',
    code: 'H930',
    province: 'MI'
  },
  {
    name: 'San Giuseppe Vesuviano',
    code: 'H931',
    province: 'NA'
  },
  {
    name: 'San Giuseppe Jato',
    code: 'H933',
    province: 'PA'
  },
  {
    name: 'San Giustino',
    code: 'H935',
    province: 'PG'
  },
  {
    name: 'San Giusto Canavese',
    code: 'H936',
    province: 'TO'
  },
  {
    name: 'San Godenzo',
    code: 'H937',
    province: 'FI'
  },
  {
    name: 'San Gregorio nelle Alpi',
    code: 'H938',
    province: 'BL'
  },
  {
    name: 'San Gregorio Matese',
    code: 'H939',
    province: 'CE'
  },
  {
    name: 'San Gregorio di Catania',
    code: 'H940',
    province: 'CT'
  },
  {
    name: "San Gregorio d'Ippona",
    code: 'H941',
    province: 'VV'
  },
  {
    name: 'San Gregorio da Sassola',
    code: 'H942',
    province: 'RM'
  },
  {
    name: 'San Gregorio Magno',
    code: 'H943',
    province: 'SA'
  },
  {
    name: 'Sanguinetto',
    code: 'H944',
    province: 'VR'
  },
  {
    name: 'San Lazzaro di Savena',
    code: 'H945',
    province: 'BO'
  },
  {
    name: 'San Leo',
    code: 'H949',
    province: 'RN'
  },
  {
    name: 'San Leonardo',
    code: 'H951',
    province: 'UD'
  },
  {
    name: 'San Leonardo in Passiria/St. Leonhard in Passeier',
    italianName: 'San Leonardo in Passiria',
    foreignName: 'St. Leonhard in Passeier',
    code: 'H952',
    province: 'BZ'
  },
  {
    name: 'San Leucio del Sannio',
    code: 'H953',
    province: 'BN'
  },
  {
    name: 'San Lorenzello',
    code: 'H955',
    province: 'BN'
  },
  {
    name: 'San Lorenzo di Sebato/St. Lorenzen',
    italianName: 'San Lorenzo di Sebato',
    foreignName: 'St. Lorenzen',
    code: 'H956',
    province: 'BZ'
  },
  {
    name: 'San Lorenzo al Mare',
    code: 'H957',
    province: 'IM'
  },
  {
    name: 'San Lorenzo in Campo',
    code: 'H958',
    province: 'PU'
  },
  {
    name: 'San Lorenzo',
    code: 'H959',
    province: 'RC'
  },
  {
    name: 'San Lorenzo Bellizzi',
    code: 'H961',
    province: 'CS'
  },
  {
    name: 'San Lorenzo del Vallo',
    code: 'H962',
    province: 'CS'
  },
  {
    name: 'San Lorenzo Isontino',
    code: 'H964',
    province: 'GO'
  },
  {
    name: 'San Lorenzo Maggiore',
    code: 'H967',
    province: 'BN'
  },
  {
    name: 'San Lorenzo Nuovo',
    code: 'H969',
    province: 'VT'
  },
  {
    name: 'San Luca',
    code: 'H970',
    province: 'RC'
  },
  {
    name: 'San Lucido',
    code: 'H971',
    province: 'CS'
  },
  {
    name: 'San Lupo',
    code: 'H973',
    province: 'BN'
  },
  {
    name: 'Sanluri',
    code: 'H974',
    province: 'SU'
  },
  {
    name: 'San Mango sul Calore',
    code: 'H975',
    province: 'AV'
  },
  {
    name: "San Mango d'Aquino",
    code: 'H976',
    province: 'CZ'
  },
  {
    name: 'San Mango Piemonte',
    code: 'H977',
    province: 'SA'
  },
  {
    name: 'San Marcellino',
    code: 'H978',
    province: 'CE'
  },
  {
    name: 'San Marcello',
    code: 'H979',
    province: 'AN'
  },
  {
    name: 'San Marco Argentano',
    code: 'H981',
    province: 'CS'
  },
  {
    name: "San Marco d'Alunzio",
    code: 'H982',
    province: 'ME'
  },
  {
    name: 'San Marco dei Cavoti',
    code: 'H984',
    province: 'BN'
  },
  {
    name: 'San Marco in Lamis',
    code: 'H985',
    province: 'FG'
  },
  {
    name: 'San Marco la Catola',
    code: 'H986',
    province: 'FG'
  },
  {
    name: 'San Martino Alfieri',
    code: 'H987',
    province: 'AT'
  },
  {
    name: 'San Martino in Badia/St. Martin in Thurn',
    italianName: 'San Martino in Badia',
    foreignName: 'St. Martin in Thurn',
    code: 'H988',
    province: 'BZ'
  },
  {
    name: 'San Martino in Passiria/St. Martin in Passeier',
    italianName: 'San Martino in Passiria',
    foreignName: 'St. Martin in Passeier',
    code: 'H989',
    province: 'BZ'
  },
  {
    name: 'San Martino in Pensilis',
    code: 'H990',
    province: 'CB'
  },
  {
    name: 'San Martino sulla Marrucina',
    code: 'H991',
    province: 'CH'
  },
  {
    name: 'San Martino di Finita',
    code: 'H992',
    province: 'CS'
  },
  {
    name: "San Martino d'Agri",
    code: 'H994',
    province: 'PZ'
  },
  {
    name: 'San Martino di Venezze',
    code: 'H996',
    province: 'RO'
  },
  {
    name: 'San Martino Canavese',
    code: 'H997',
    province: 'TO'
  },
  {
    name: 'San Martino al Tagliamento',
    code: 'H999',
    province: 'PN'
  },
  {
    name: 'San Martino Sannita',
    code: 'I002',
    province: 'BN'
  },
  {
    name: 'San Martino Buon Albergo',
    code: 'I003',
    province: 'VR'
  },
  {
    name: "San Martino dall'Argine",
    code: 'I005',
    province: 'MN'
  },
  {
    name: 'San Martino del Lago',
    code: 'I007',
    province: 'CR'
  },
  {
    name: 'San Martino di Lupari',
    code: 'I008',
    province: 'PD'
  },
  {
    name: 'San Martino in Rio',
    code: 'I011',
    province: 'RE'
  },
  {
    name: 'San Martino in Strada',
    code: 'I012',
    province: 'LO'
  },
  {
    name: 'San Martino Siccomario',
    code: 'I014',
    province: 'PV'
  },
  {
    name: 'San Martino Valle Caudina',
    code: 'I016',
    province: 'AV'
  },
  {
    name: 'San Marzano Oliveto',
    code: 'I017',
    province: 'AT'
  },
  {
    name: 'San Marzano di San Giuseppe',
    code: 'I018',
    province: 'TA'
  },
  {
    name: 'San Marzano sul Sarno',
    code: 'I019',
    province: 'SA'
  },
  {
    name: 'San Massimo',
    code: 'I023',
    province: 'CB'
  },
  {
    name: 'San Maurizio Canavese',
    code: 'I024',
    province: 'TO'
  },
  {
    name: "San Maurizio d'Opaglio",
    code: 'I025',
    province: 'NO'
  },
  {
    name: 'San Mauro Marchesato',
    code: 'I026',
    province: 'KR'
  },
  {
    name: 'San Mauro Pascoli',
    code: 'I027',
    province: 'FC'
  },
  {
    name: 'San Mauro Castelverde',
    code: 'I028',
    province: 'PA'
  },
  {
    name: 'San Mauro Forte',
    code: 'I029',
    province: 'MT'
  },
  {
    name: 'San Mauro Torinese',
    code: 'I030',
    province: 'TO'
  },
  {
    name: 'San Mauro Cilento',
    code: 'I031',
    province: 'SA'
  },
  {
    name: 'San Mauro la Bruca',
    code: 'I032',
    province: 'SA'
  },
  {
    name: 'San Michele di Serino',
    code: 'I034',
    province: 'AV'
  },
  {
    name: 'San Michele di Ganzaria',
    code: 'I035',
    province: 'CT'
  },
  {
    name: 'San Michele Mondovì',
    code: 'I037',
    province: 'CN'
  },
  {
    name: 'San Michele al Tagliamento',
    code: 'I040',
    province: 'VE'
  },
  {
    name: "San Michele all'Adige",
    code: 'I042',
    province: 'TN'
  },
  {
    name: 'San Michele Salentino',
    code: 'I045',
    province: 'BR'
  },
  {
    name: 'San Miniato',
    code: 'I046',
    province: 'PI'
  },
  {
    name: "Sannazzaro de' Burgondi",
    code: 'I048',
    province: 'PV'
  },
  {
    name: 'San Nazzaro',
    code: 'I049',
    province: 'BN'
  },
  {
    name: 'San Nazzaro Val Cavargna',
    code: 'I051',
    province: 'CO'
  },
  {
    name: 'San Nazzaro Sesia',
    code: 'I052',
    province: 'NO'
  },
  {
    name: 'Sannicandro di Bari',
    code: 'I053',
    province: 'BA'
  },
  {
    name: 'San Nicandro Garganico',
    code: 'I054',
    province: 'FG'
  },
  {
    name: 'San Nicola la Strada',
    code: 'I056',
    province: 'CE'
  },
  {
    name: "San Nicola dell'Alto",
    code: 'I057',
    province: 'KR'
  },
  {
    name: 'San Nicola da Crissa',
    code: 'I058',
    province: 'VV'
  },
  {
    name: 'Sannicola',
    code: 'I059',
    province: 'LE'
  },
  {
    name: 'San Nicola Arcella',
    code: 'I060',
    province: 'CS'
  },
  {
    name: 'San Nicola Baronia',
    code: 'I061',
    province: 'AV'
  },
  {
    name: 'San Nicola Manfredi',
    code: 'I062',
    province: 'BN'
  },
  {
    name: 'San Nicolò di Comelico',
    code: 'I063',
    province: 'BL'
  },
  {
    name: 'San Pancrazio/St. Pankraz',
    italianName: 'San Pancrazio',
    foreignName: 'St. Pankraz',
    code: 'I065',
    province: 'BZ'
  },
  {
    name: 'San Pancrazio Salentino',
    code: 'I066',
    province: 'BR'
  },
  {
    name: 'San Paolo di Jesi',
    code: 'I071',
    province: 'AN'
  },
  {
    name: 'San Paolo di Civitate',
    code: 'I072',
    province: 'FG'
  },
  {
    name: 'San Paolo Bel Sito',
    code: 'I073',
    province: 'NA'
  },
  {
    name: 'San Paolo Solbrito',
    code: 'I076',
    province: 'AT'
  },
  {
    name: 'San Pellegrino Terme',
    code: 'I079',
    province: 'BG'
  },
  {
    name: "San Pier d'Isonzo",
    code: 'I082',
    province: 'GO'
  },
  {
    name: 'San Pier Niceto',
    code: 'I084',
    province: 'ME'
  },
  {
    name: 'San Piero Patti',
    code: 'I086',
    province: 'ME'
  },
  {
    name: 'San Pietro di Cadore',
    code: 'I088',
    province: 'BL'
  },
  {
    name: 'San Pietro al Tanagro',
    code: 'I089',
    province: 'SA'
  },
  {
    name: 'San Pietro Val Lemina',
    code: 'I090',
    province: 'TO'
  },
  {
    name: 'San Pietro al Natisone',
    code: 'I092',
    province: 'UD'
  },
  {
    name: 'San Pietro a Maida',
    code: 'I093',
    province: 'CZ'
  },
  {
    name: 'San Pietro Apostolo',
    code: 'I095',
    province: 'CZ'
  },
  {
    name: 'San Pietro Avellana',
    code: 'I096',
    province: 'IS'
  },
  {
    name: 'San Pietro Clarenza',
    code: 'I098',
    province: 'CT'
  },
  {
    name: 'San Pietro di Caridà',
    code: 'I102',
    province: 'RC'
  },
  {
    name: 'San Pietro di Feletto',
    code: 'I103',
    province: 'TV'
  },
  {
    name: 'San Pietro di Morubio',
    code: 'I105',
    province: 'VR'
  },
  {
    name: 'San Pietro in Gu',
    code: 'I107',
    province: 'PD'
  },
  {
    name: 'San Pietro in Amantea',
    code: 'I108',
    province: 'CS'
  },
  {
    name: 'San Pietro in Cariano',
    code: 'I109',
    province: 'VR'
  },
  {
    name: 'San Pietro in Casale',
    code: 'I110',
    province: 'BO'
  },
  {
    name: 'San Pietro Infine',
    code: 'I113',
    province: 'CE'
  },
  {
    name: 'San Pietro in Guarano',
    code: 'I114',
    province: 'CS'
  },
  {
    name: 'San Pietro in Lama',
    code: 'I115',
    province: 'LE'
  },
  {
    name: 'San Pietro Mosezzo',
    code: 'I116',
    province: 'NO'
  },
  {
    name: 'San Pietro Mussolino',
    code: 'I117',
    province: 'VI'
  },
  {
    name: 'Villa San Pietro',
    code: 'I118',
    province: 'CA'
  },
  {
    name: 'San Pietro Vernotico',
    code: 'I119',
    province: 'BR'
  },
  {
    name: 'San Pietro Viminario',
    code: 'I120',
    province: 'PD'
  },
  {
    name: 'San Pio delle Camere',
    code: 'I121',
    province: 'AQ'
  },
  {
    name: 'San Polo Matese',
    code: 'I122',
    province: 'CB'
  },
  {
    name: "San Polo d'Enza",
    code: 'I123',
    province: 'RE'
  },
  {
    name: 'San Polo di Piave',
    code: 'I124',
    province: 'TV'
  },
  {
    name: 'San Polo dei Cavalieri',
    code: 'I125',
    province: 'RM'
  },
  {
    name: 'San Ponso',
    code: 'I126',
    province: 'TO'
  },
  {
    name: 'San Possidonio',
    code: 'I128',
    province: 'MO'
  },
  {
    name: 'San Potito Ultra',
    code: 'I129',
    province: 'AV'
  },
  {
    name: 'San Potito Sannitico',
    code: 'I130',
    province: 'CE'
  },
  {
    name: 'San Prisco',
    code: 'I131',
    province: 'CE'
  },
  {
    name: 'San Procopio',
    code: 'I132',
    province: 'RC'
  },
  {
    name: 'San Prospero',
    code: 'I133',
    province: 'MO'
  },
  {
    name: "San Quirico d'Orcia",
    code: 'I135',
    province: 'SI'
  },
  {
    name: 'San Quirino',
    code: 'I136',
    province: 'PN'
  },
  {
    name: 'San Raffaele Cimena',
    code: 'I137',
    province: 'TO'
  },
  {
    name: 'Sanremo',
    code: 'I138',
    province: 'IM'
  },
  {
    name: 'San Roberto',
    code: 'I139',
    province: 'RC'
  },
  {
    name: 'San Rocco al Porto',
    code: 'I140',
    province: 'LO'
  },
  {
    name: 'San Romano in Garfagnana',
    code: 'I142',
    province: 'LU'
  },
  {
    name: 'San Rufo',
    code: 'I143',
    province: 'SA'
  },
  {
    name: 'San Salvatore Monferrato',
    code: 'I144',
    province: 'AL'
  },
  {
    name: 'San Salvatore Telesino',
    code: 'I145',
    province: 'BN'
  },
  {
    name: 'San Salvatore di Fitalia',
    code: 'I147',
    province: 'ME'
  },
  {
    name: 'San Salvo',
    code: 'I148',
    province: 'CH'
  },
  {
    name: 'San Sebastiano Curone',
    code: 'I150',
    province: 'AL'
  },
  {
    name: 'San Sebastiano al Vesuvio',
    code: 'I151',
    province: 'NA'
  },
  {
    name: 'San Sebastiano da Po',
    code: 'I152',
    province: 'TO'
  },
  {
    name: 'San Secondo Parmense',
    code: 'I153',
    province: 'PR'
  },
  {
    name: 'San Secondo di Pinerolo',
    code: 'I154',
    province: 'TO'
  },
  {
    name: 'Sansepolcro',
    code: 'I155',
    province: 'AR'
  },
  {
    name: 'San Severino Marche',
    code: 'I156',
    province: 'MC'
  },
  {
    name: 'San Severino Lucano',
    code: 'I157',
    province: 'PZ'
  },
  {
    name: 'San Severo',
    code: 'I158',
    province: 'FG'
  },
  {
    name: 'San Siro',
    code: 'I162',
    province: 'CO'
  },
  {
    name: 'San Sossio Baronia',
    code: 'I163',
    province: 'AV'
  },
  {
    name: 'San Sostene',
    code: 'I164',
    province: 'CZ'
  },
  {
    name: 'San Sosti',
    code: 'I165',
    province: 'CS'
  },
  {
    name: 'San Sperate',
    code: 'I166',
    province: 'SU'
  },
  {
    name: 'Santa Brigida',
    code: 'I168',
    province: 'BG'
  },
  {
    name: 'Santa Caterina Villarmosa',
    code: 'I169',
    province: 'CL'
  },
  {
    name: 'Santa Caterina dello Ionio',
    code: 'I170',
    province: 'CZ'
  },
  {
    name: 'Santa Caterina Albanese',
    code: 'I171',
    province: 'CS'
  },
  {
    name: 'Santa Cesarea Terme',
    code: 'I172',
    province: 'LE'
  },
  {
    name: 'Santa Cristina Valgardena/St. Christina in Gröden',
    italianName: 'Santa Cristina Valgardena',
    foreignName: 'St. Christina in Gröden',
    code: 'I173',
    province: 'BZ'
  },
  {
    name: 'Santa Cristina Gela',
    code: 'I174',
    province: 'PA'
  },
  {
    name: 'Santa Cristina e Bissone',
    code: 'I175',
    province: 'PV'
  },
  {
    name: "Santa Cristina d'Aspromonte",
    code: 'I176',
    province: 'RC'
  },
  {
    name: "Santa Croce sull'Arno",
    code: 'I177',
    province: 'PI'
  },
  {
    name: 'Santa Croce Camerina',
    code: 'I178',
    province: 'RG'
  },
  {
    name: 'Santa Croce del Sannio',
    code: 'I179',
    province: 'BN'
  },
  {
    name: 'Santa Croce di Magliano',
    code: 'I181',
    province: 'CB'
  },
  {
    name: 'Santadi',
    code: 'I182',
    province: 'SU'
  },
  {
    name: 'Santa Domenica Talao',
    code: 'I183',
    province: 'CS'
  },
  {
    name: 'Santa Domenica Vittoria',
    code: 'I184',
    province: 'ME'
  },
  {
    name: 'Santa Elisabetta',
    code: 'I185',
    province: 'AG'
  },
  {
    name: 'Santa Fiora',
    code: 'I187',
    province: 'GR'
  },
  {
    name: 'Santa Flavia',
    code: 'I188',
    province: 'PA'
  },
  {
    name: "Sant'Agapito",
    code: 'I189',
    province: 'IS'
  },
  {
    name: "Sant'Agata Fossili",
    code: 'I190',
    province: 'AL'
  },
  {
    name: "Sant'Agata Bolognese",
    code: 'I191',
    province: 'BO'
  },
  {
    name: "Sant'Agata di Esaro",
    code: 'I192',
    province: 'CS'
  },
  {
    name: "Sant'Agata di Puglia",
    code: 'I193',
    province: 'FG'
  },
  {
    name: "Sant'Agata sul Santerno",
    code: 'I196',
    province: 'RA'
  },
  {
    name: "Sant'Agata de' Goti",
    code: 'I197',
    province: 'BN'
  },
  {
    name: "Sant'Agata del Bianco",
    code: 'I198',
    province: 'RC'
  },
  {
    name: "Sant'Agata di Militello",
    code: 'I199',
    province: 'ME'
  },
  {
    name: "Sant'Agata Feltria",
    code: 'I201',
    province: 'RN'
  },
  {
    name: "Sant'Agata li Battiati",
    code: 'I202',
    province: 'CT'
  },
  {
    name: 'Santa Giuletta',
    code: 'I203',
    province: 'PV'
  },
  {
    name: 'Santa Giusta',
    code: 'I205',
    province: 'OR'
  },
  {
    name: 'Santa Giustina',
    code: 'I206',
    province: 'BL'
  },
  {
    name: 'Santa Giustina in Colle',
    code: 'I207',
    province: 'PD'
  },
  {
    name: "Sant'Agnello",
    code: 'I208',
    province: 'NA'
  },
  {
    name: "Sant'Albano Stura",
    code: 'I210',
    province: 'CN'
  },
  {
    name: "Sant'Alessio con Vialone",
    code: 'I213',
    province: 'PV'
  },
  {
    name: "Sant'Alessio in Aspromonte",
    code: 'I214',
    province: 'RC'
  },
  {
    name: "Sant'Alessio Siculo",
    code: 'I215',
    province: 'ME'
  },
  {
    name: "Sant'Alfio",
    code: 'I216',
    province: 'CT'
  },
  {
    name: 'Santa Luce',
    code: 'I217',
    province: 'PI'
  },
  {
    name: 'Santa Lucia di Serino',
    code: 'I219',
    province: 'AV'
  },
  {
    name: 'Santa Lucia del Mela',
    code: 'I220',
    province: 'ME'
  },
  {
    name: 'Santa Lucia di Piave',
    code: 'I221',
    province: 'TV'
  },
  {
    name: 'Santa Margherita di Belice',
    code: 'I224',
    province: 'AG'
  },
  {
    name: 'Santa Margherita Ligure',
    code: 'I225',
    province: 'GE'
  },
  {
    name: 'Santa Margherita di Staffora',
    code: 'I230',
    province: 'PV'
  },
  {
    name: 'Santa Maria a Monte',
    code: 'I232',
    province: 'PI'
  },
  {
    name: 'Santa Maria a Vico',
    code: 'I233',
    province: 'CE'
  },
  {
    name: 'Santa Maria Capua Vetere',
    code: 'I234',
    province: 'CE'
  },
  {
    name: 'Travacò Siccomario',
    code: 'I236',
    province: 'PV'
  },
  {
    name: 'Santa Maria della Versa',
    code: 'I237',
    province: 'PV'
  },
  {
    name: 'Santa Maria del Molise',
    code: 'I238',
    province: 'IS'
  },
  {
    name: 'Santa Maria di Licodia',
    code: 'I240',
    province: 'CT'
  },
  {
    name: 'Santa Maria di Sala',
    code: 'I242',
    province: 'VE'
  },
  {
    name: 'Santa Maria Hoè',
    code: 'I243',
    province: 'LC'
  },
  {
    name: 'Santa Maria Imbaro',
    code: 'I244',
    province: 'CH'
  },
  {
    name: 'Santa Maria la Fossa',
    code: 'I247',
    province: 'CE'
  },
  {
    name: 'Santa Maria la Longa',
    code: 'I248',
    province: 'UD'
  },
  {
    name: 'Santa Maria Maggiore',
    code: 'I249',
    province: 'VB'
  },
  {
    name: 'Santa Maria Nuova',
    code: 'I251',
    province: 'AN'
  },
  {
    name: 'Santa Marina',
    code: 'I253',
    province: 'SA'
  },
  {
    name: 'Santa Marina Salina',
    code: 'I254',
    province: 'ME'
  },
  {
    name: 'Santa Marinella',
    code: 'I255',
    province: 'RM'
  },
  {
    name: "Sant'Ambrogio sul Garigliano",
    code: 'I256',
    province: 'FR'
  },
  {
    name: "Sant'Ambrogio di Torino",
    code: 'I258',
    province: 'TO'
  },
  {
    name: "Sant'Ambrogio di Valpolicella",
    code: 'I259',
    province: 'VR'
  },
  {
    name: 'Santomenna',
    code: 'I260',
    province: 'SA'
  },
  {
    name: 'San Tammaro',
    code: 'I261',
    province: 'CE'
  },
  {
    name: "Sant'Anastasia",
    code: 'I262',
    province: 'NA'
  },
  {
    name: "Sant'Anatolia di Narco",
    code: 'I263',
    province: 'PG'
  },
  {
    name: "Sant'Andrea di Conza",
    code: 'I264',
    province: 'AV'
  },
  {
    name: "Sant'Andrea del Garigliano",
    code: 'I265',
    province: 'FR'
  },
  {
    name: "Sant'Andrea Apostolo dello Ionio",
    code: 'I266',
    province: 'CZ'
  },
  {
    name: "Sant'Andrea Frius",
    code: 'I271',
    province: 'SU'
  },
  {
    name: "Sant'Angelo d'Alife",
    code: 'I273',
    province: 'CE'
  },
  {
    name: "Sant'Angelo Lodigiano",
    code: 'I274',
    province: 'LO'
  },
  {
    name: "Sant'Angelo di Piove di Sacco",
    code: 'I275',
    province: 'PD'
  },
  {
    name: "Sant'Angelo Lomellina",
    code: 'I276',
    province: 'PV'
  },
  {
    name: "Sant'Angelo a Cupolo",
    code: 'I277',
    province: 'BN'
  },
  {
    name: "Sant'Angelo a Fasanella",
    code: 'I278',
    province: 'SA'
  },
  {
    name: "Sant'Angelo all'Esca",
    code: 'I279',
    province: 'AV'
  },
  {
    name: "Sant'Angelo a Scala",
    code: 'I280',
    province: 'AV'
  },
  {
    name: "Sant'Angelo dei Lombardi",
    code: 'I281',
    province: 'AV'
  },
  {
    name: "Sant'Angelo del Pesco",
    code: 'I282',
    province: 'IS'
  },
  {
    name: "Sant'Angelo di Brolo",
    code: 'I283',
    province: 'ME'
  },
  {
    name: "Sant'Angelo Romano",
    code: 'I284',
    province: 'RM'
  },
  {
    name: "Sant'Angelo in Pontano",
    code: 'I286',
    province: 'MC'
  },
  {
    name: "Sant'Angelo in Vado",
    code: 'I287',
    province: 'PU'
  },
  {
    name: "Sant'Angelo Le Fratte",
    code: 'I288',
    province: 'PZ'
  },
  {
    name: "Sant'Angelo Limosano",
    code: 'I289',
    province: 'CB'
  },
  {
    name: "Sant'Angelo Muxaro",
    code: 'I290',
    province: 'AG'
  },
  {
    name: 'Santa Ninfa',
    code: 'I291',
    province: 'TP'
  },
  {
    name: "Sant'Anna d'Alfaedo",
    code: 'I292',
    province: 'VR'
  },
  {
    name: "Sant'Antimo",
    code: 'I293',
    province: 'NA'
  },
  {
    name: "Sant'Antioco",
    code: 'I294',
    province: 'SU'
  },
  {
    name: "Sant'Antonino di Susa",
    code: 'I296',
    province: 'TO'
  },
  {
    name: "Villa Sant'Antonio",
    code: 'I298',
    province: 'OR'
  },
  {
    name: "Sant'Antonio Abate",
    code: 'I300',
    province: 'NA'
  },
  {
    name: 'Santa Paolina',
    code: 'I301',
    province: 'AV'
  },
  {
    name: "Sant'Apollinare",
    code: 'I302',
    province: 'FR'
  },
  {
    name: 'Santarcangelo di Romagna',
    code: 'I304',
    province: 'RN'
  },
  {
    name: "Sant'Arcangelo",
    code: 'I305',
    province: 'PZ'
  },
  {
    name: "Sant'Arpino",
    code: 'I306',
    province: 'CE'
  },
  {
    name: "Sant'Arsenio",
    code: 'I307',
    province: 'SA'
  },
  {
    name: 'Santa Severina',
    code: 'I308',
    province: 'KR'
  },
  {
    name: "Santa Sofia d'Epiro",
    code: 'I309',
    province: 'CS'
  },
  {
    name: 'Santa Sofia',
    code: 'I310',
    province: 'FC'
  },
  {
    name: 'Santa Teresa di Riva',
    code: 'I311',
    province: 'ME'
  },
  {
    name: 'Santa Teresa Gallura',
    code: 'I312',
    province: 'SS'
  },
  {
    name: 'Santa Venerina',
    code: 'I314',
    province: 'CT'
  },
  {
    name: 'Santa Vittoria in Matenano',
    code: 'I315',
    province: 'FM'
  },
  {
    name: "Santa Vittoria d'Alba",
    code: 'I316',
    province: 'CN'
  },
  {
    name: "Sant'Egidio del Monte Albino",
    code: 'I317',
    province: 'SA'
  },
  {
    name: "Sant'Egidio alla Vibrata",
    code: 'I318',
    province: 'TE'
  },
  {
    name: "Sant'Elena",
    code: 'I319',
    province: 'PD'
  },
  {
    name: "Sant'Elia a Pianisi",
    code: 'I320',
    province: 'CB'
  },
  {
    name: "Sant'Elia Fiumerapido",
    code: 'I321',
    province: 'FR'
  },
  {
    name: 'Vallefiorita',
    code: 'I322',
    province: 'CZ'
  },
  {
    name: "Sant'Elpidio a Mare",
    code: 'I324',
    province: 'FM'
  },
  {
    name: 'Sante Marie',
    code: 'I326',
    province: 'AQ'
  },
  {
    name: 'Santena',
    code: 'I327',
    province: 'TO'
  },
  {
    name: 'San Teodoro',
    code: 'I328',
    province: 'ME'
  },
  {
    name: 'San Teodoro',
    code: 'I329',
    province: 'SS'
  },
  {
    name: 'Santeramo in Colle',
    code: 'I330',
    province: 'BA'
  },
  {
    name: "Sant'Eufemia a Maiella",
    code: 'I332',
    province: 'PE'
  },
  {
    name: "Sant'Eufemia d'Aspromonte",
    code: 'I333',
    province: 'RC'
  },
  {
    name: "Sant'Eusanio del Sangro",
    code: 'I335',
    province: 'CH'
  },
  {
    name: "Sant'Eusanio Forconese",
    code: 'I336',
    province: 'AQ'
  },
  {
    name: 'Santhià',
    code: 'I337',
    province: 'VC'
  },
  {
    name: 'Santi Cosma e Damiano',
    code: 'I339',
    province: 'LT'
  },
  {
    name: "Sant'Ilario dello Ionio",
    code: 'I341',
    province: 'RC'
  },
  {
    name: "Sant'Ilario d'Enza",
    code: 'I342',
    province: 'RE'
  },
  {
    name: "Sant'Ippolito",
    code: 'I344',
    province: 'PU'
  },
  {
    name: "Sant'Olcese",
    code: 'I346',
    province: 'GE'
  },
  {
    name: 'San Tomaso Agordino',
    code: 'I347',
    province: 'BL'
  },
  {
    name: "Sant'Omero",
    code: 'I348',
    province: 'TE'
  },
  {
    name: "Sant'Onofrio",
    code: 'I350',
    province: 'VV'
  },
  {
    name: 'Santopadre',
    code: 'I351',
    province: 'FR'
  },
  {
    name: "Sant'Oreste",
    code: 'I352',
    province: 'RM'
  },
  {
    name: 'Santorso',
    code: 'I353',
    province: 'VI'
  },
  {
    name: "Sant'Orsola Terme",
    code: 'I354',
    province: 'TN'
  },
  {
    name: 'Santo Stefano Quisquina',
    code: 'I356',
    province: 'AG'
  },
  {
    name: 'Santo Stefano del Sole',
    code: 'I357',
    province: 'AV'
  },
  {
    name: 'Santo Stefano di Rogliano',
    code: 'I359',
    province: 'CS'
  },
  {
    name: 'Santo Stefano di Sessanio',
    code: 'I360',
    province: 'AQ'
  },
  {
    name: 'Santo Stefano Ticino',
    code: 'I361',
    province: 'MI'
  },
  {
    name: 'Santo Stefano Lodigiano',
    code: 'I362',
    province: 'LO'
  },
  {
    name: 'Santo Stefano di Magra',
    code: 'I363',
    province: 'SP'
  },
  {
    name: 'Villa Santo Stefano',
    code: 'I364',
    province: 'FR'
  },
  {
    name: 'Santo Stefano al Mare',
    code: 'I365',
    province: 'IM'
  },
  {
    name: 'Santo Stefano Belbo',
    code: 'I367',
    province: 'CN'
  },
  {
    name: "Santo Stefano d'Aveto",
    code: 'I368',
    province: 'GE'
  },
  {
    name: 'Santo Stefano di Camastra',
    code: 'I370',
    province: 'ME'
  },
  {
    name: 'Santo Stefano in Aspromonte',
    code: 'I371',
    province: 'RC'
  },
  {
    name: 'Santo Stefano Roero',
    code: 'I372',
    province: 'CN'
  },
  {
    name: 'San Stino di Livenza',
    code: 'I373',
    province: 'VE'
  },
  {
    name: 'Santu Lussurgiu',
    code: 'I374',
    province: 'OR'
  },
  {
    name: "Sant'Urbano",
    code: 'I375',
    province: 'PD'
  },
  {
    name: 'San Valentino in Abruzzo Citeriore',
    code: 'I376',
    province: 'PE'
  },
  {
    name: 'San Valentino Torio',
    code: 'I377',
    province: 'SA'
  },
  {
    name: 'San Venanzo',
    code: 'I381',
    province: 'TR'
  },
  {
    name: 'San Vendemiano',
    code: 'I382',
    province: 'TV'
  },
  {
    name: 'San Vero Milis',
    code: 'I384',
    province: 'OR'
  },
  {
    name: 'San Vincenzo La Costa',
    code: 'I388',
    province: 'CS'
  },
  {
    name: 'San Vincenzo Valle Roveto',
    code: 'I389',
    province: 'AQ'
  },
  {
    name: 'San Vincenzo',
    code: 'I390',
    province: 'LI'
  },
  {
    name: 'San Vitaliano',
    code: 'I391',
    province: 'NA'
  },
  {
    name: 'San Vito di Cadore',
    code: 'I392',
    province: 'BL'
  },
  {
    name: 'San Vito sullo Ionio',
    code: 'I393',
    province: 'CZ'
  },
  {
    name: 'San Vito Chietino',
    code: 'I394',
    province: 'CH'
  },
  {
    name: 'San Vito dei Normanni',
    code: 'I396',
    province: 'BR'
  },
  {
    name: 'San Vito Romano',
    code: 'I400',
    province: 'RM'
  },
  {
    name: 'San Vito di Leguzzano',
    code: 'I401',
    province: 'VI'
  },
  {
    name: 'San Vito',
    code: 'I402',
    province: 'SU'
  },
  {
    name: 'San Vito al Tagliamento',
    code: 'I403',
    province: 'PN'
  },
  {
    name: 'San Vito al Torre',
    code: 'I404',
    province: 'UD'
  },
  {
    name: 'San Vito di Fagagna',
    code: 'I405',
    province: 'UD'
  },
  {
    name: 'San Vito Lo Capo',
    code: 'I407',
    province: 'TP'
  },
  {
    name: 'San Vittore del Lazio',
    code: 'I408',
    province: 'FR'
  },
  {
    name: 'San Vittore Olona',
    code: 'I409',
    province: 'MI'
  },
  {
    name: 'Sanza',
    code: 'I410',
    province: 'SA'
  },
  {
    name: 'Sanzeno',
    code: 'I411',
    province: 'TN'
  },
  {
    name: 'San Zeno Naviglio',
    code: 'I412',
    province: 'BS'
  },
  {
    name: 'San Zeno di Montagna',
    code: 'I414',
    province: 'VR'
  },
  {
    name: 'San Zenone al Lambro',
    code: 'I415',
    province: 'MI'
  },
  {
    name: 'San Zenone al Po',
    code: 'I416',
    province: 'PV'
  },
  {
    name: 'San Zenone degli Ezzelini',
    code: 'I417',
    province: 'TV'
  },
  {
    name: 'Saonara',
    code: 'I418',
    province: 'PD'
  },
  {
    name: 'Saponara',
    code: 'I420',
    province: 'ME'
  },
  {
    name: 'Sappada',
    code: 'I421',
    province: 'UD'
  },
  {
    name: 'Sapri',
    code: 'I422',
    province: 'SA'
  },
  {
    name: 'Saracena',
    code: 'I423',
    province: 'CS'
  },
  {
    name: 'Saracinesco',
    code: 'I424',
    province: 'RM'
  },
  {
    name: 'Sarcedo',
    code: 'I425',
    province: 'VI'
  },
  {
    name: 'Sarconi',
    code: 'I426',
    province: 'PZ'
  },
  {
    name: 'Sardara',
    code: 'I428',
    province: 'SU'
  },
  {
    name: 'Sardigliano',
    code: 'I429',
    province: 'AL'
  },
  {
    name: 'Sarego',
    code: 'I430',
    province: 'VI'
  },
  {
    name: 'Sarentino/Sarntal',
    italianName: 'Sarentino',
    foreignName: 'Sarntal',
    code: 'I431',
    province: 'BZ'
  },
  {
    name: 'Sarezzano',
    code: 'I432',
    province: 'AL'
  },
  {
    name: 'Sarezzo',
    code: 'I433',
    province: 'BS'
  },
  {
    name: 'Sarmato',
    code: 'I434',
    province: 'PC'
  },
  {
    name: 'Sarmede',
    code: 'I435',
    province: 'TV'
  },
  {
    name: 'Sarnano',
    code: 'I436',
    province: 'MC'
  },
  {
    name: 'Sarnico',
    code: 'I437',
    province: 'BG'
  },
  {
    name: 'Sarno',
    code: 'I438',
    province: 'SA'
  },
  {
    name: 'Sarnonico',
    code: 'I439',
    province: 'TN'
  },
  {
    name: 'Saronno',
    code: 'I441',
    province: 'VA'
  },
  {
    name: 'Sarre',
    code: 'I442',
    province: 'AO'
  },
  {
    name: 'Sarroch',
    code: 'I443',
    province: 'CA'
  },
  {
    name: 'Sarsina',
    code: 'I444',
    province: 'FC'
  },
  {
    name: 'Sarteano',
    code: 'I445',
    province: 'SI'
  },
  {
    name: 'Sartirana Lomellina',
    code: 'I447',
    province: 'PV'
  },
  {
    name: 'Sarule',
    code: 'I448',
    province: 'NU'
  },
  {
    name: 'Sarzana',
    code: 'I449',
    province: 'SP'
  },
  {
    name: 'Sassano',
    code: 'I451',
    province: 'SA'
  },
  {
    name: 'Sassari',
    code: 'I452',
    province: 'SS'
  },
  {
    name: 'Sassello',
    code: 'I453',
    province: 'SV'
  },
  {
    name: 'Sassetta',
    code: 'I454',
    province: 'LI'
  },
  {
    name: 'Sassinoro',
    code: 'I455',
    province: 'BN'
  },
  {
    name: 'Sasso di Castalda',
    code: 'I457',
    province: 'PZ'
  },
  {
    name: 'Sassofeltrio',
    code: 'I460',
    province: 'RN'
  },
  {
    name: 'Sassoferrato',
    code: 'I461',
    province: 'AN'
  },
  {
    name: 'Sassuolo',
    code: 'I462',
    province: 'MO'
  },
  {
    name: 'Satriano',
    code: 'I463',
    province: 'CZ'
  },
  {
    name: 'Sauris',
    code: 'I464',
    province: 'UD'
  },
  {
    name: 'Sauze di Cesana',
    code: 'I465',
    province: 'TO'
  },
  {
    name: "Sauze d'Oulx",
    code: 'I466',
    province: 'TO'
  },
  {
    name: 'Sava',
    code: 'I467',
    province: 'TA'
  },
  {
    name: 'Savelli',
    code: 'I468',
    province: 'KR'
  },
  {
    name: 'Saviano',
    code: 'I469',
    province: 'NA'
  },
  {
    name: 'Savigliano',
    code: 'I470',
    province: 'CN'
  },
  {
    name: 'Savignano Irpino',
    code: 'I471',
    province: 'AV'
  },
  {
    name: 'Savignano sul Rubicone',
    code: 'I472',
    province: 'FC'
  },
  {
    name: 'Savignano sul Panaro',
    code: 'I473',
    province: 'MO'
  },
  {
    name: 'Savignone',
    code: 'I475',
    province: 'GE'
  },
  {
    name: "Saviore dell'Adamello",
    code: 'I476',
    province: 'BS'
  },
  {
    name: 'Savoca',
    code: 'I477',
    province: 'ME'
  },
  {
    name: 'Savogna',
    code: 'I478',
    province: 'UD'
  },
  {
    name: "Savogna d'Isonzo-Sovodnje ob Soči",
    italianName: "Savogna d'Isonzo",
    foreignName: 'Sovodnje ob Soči',
    code: 'I479',
    province: 'GO'
  },
  {
    name: 'Savona',
    code: 'I480',
    province: 'SV'
  },
  {
    name: 'Scafa',
    code: 'I482',
    province: 'PE'
  },
  {
    name: 'Scafati',
    code: 'I483',
    province: 'SA'
  },
  {
    name: 'Scagnello',
    code: 'I484',
    province: 'CN'
  },
  {
    name: 'Scala Coeli',
    code: 'I485',
    province: 'CS'
  },
  {
    name: 'Scala',
    code: 'I486',
    province: 'SA'
  },
  {
    name: 'Scaldasole',
    code: 'I487',
    province: 'PV'
  },
  {
    name: 'Scalea',
    code: 'I489',
    province: 'CS'
  },
  {
    name: 'Scalenghe',
    code: 'I490',
    province: 'TO'
  },
  {
    name: 'Scaletta Zanclea',
    code: 'I492',
    province: 'ME'
  },
  {
    name: 'Scampitella',
    code: 'I493',
    province: 'AV'
  },
  {
    name: 'Scandale',
    code: 'I494',
    province: 'KR'
  },
  {
    name: 'Scandiano',
    code: 'I496',
    province: 'RE'
  },
  {
    name: 'Scandolara Ravara',
    code: 'I497',
    province: 'CR'
  },
  {
    name: "Scandolara Ripa d'Oglio",
    code: 'I498',
    province: 'CR'
  },
  {
    name: 'Scandriglia',
    code: 'I499',
    province: 'RI'
  },
  {
    name: 'Scanno',
    code: 'I501',
    province: 'AQ'
  },
  {
    name: 'Scano di Montiferro',
    code: 'I503',
    province: 'OR'
  },
  {
    name: 'Scansano',
    code: 'I504',
    province: 'GR'
  },
  {
    name: 'Scanzorosciate',
    code: 'I506',
    province: 'BG'
  },
  {
    name: 'Scapoli',
    code: 'I507',
    province: 'IS'
  },
  {
    name: 'Scarlino',
    code: 'I510',
    province: 'GR'
  },
  {
    name: 'Scarmagno',
    code: 'I511',
    province: 'TO'
  },
  {
    name: 'Scarnafigi',
    code: 'I512',
    province: 'CN'
  },
  {
    name: 'Scena/Schenna',
    italianName: 'Scena',
    foreignName: 'Schenna',
    code: 'I519',
    province: 'BZ'
  },
  {
    name: 'Scerni',
    code: 'I520',
    province: 'CH'
  },
  {
    name: 'Scheggia e Pascelupo',
    code: 'I522',
    province: 'PG'
  },
  {
    name: 'Scheggino',
    code: 'I523',
    province: 'PG'
  },
  {
    name: 'Schiavi di Abruzzo',
    code: 'I526',
    province: 'CH'
  },
  {
    name: 'Schiavon',
    code: 'I527',
    province: 'VI'
  },
  {
    name: 'Schignano',
    code: 'I529',
    province: 'CO'
  },
  {
    name: 'Schilpario',
    code: 'I530',
    province: 'BG'
  },
  {
    name: 'Schio',
    code: 'I531',
    province: 'VI'
  },
  {
    name: 'Schivenoglia',
    code: 'I532',
    province: 'MN'
  },
  {
    name: 'Sciacca',
    code: 'I533',
    province: 'AG'
  },
  {
    name: 'Sciara',
    code: 'I534',
    province: 'PA'
  },
  {
    name: 'Scicli',
    code: 'I535',
    province: 'RG'
  },
  {
    name: 'Scido',
    code: 'I536',
    province: 'RC'
  },
  {
    name: 'Scilla',
    code: 'I537',
    province: 'RC'
  },
  {
    name: 'Scillato',
    code: 'I538',
    province: 'PA'
  },
  {
    name: 'Sciolze',
    code: 'I539',
    province: 'TO'
  },
  {
    name: 'Scisciano',
    code: 'I540',
    province: 'NA'
  },
  {
    name: 'Sclafani Bagni',
    code: 'I541',
    province: 'PA'
  },
  {
    name: 'Scontrone',
    code: 'I543',
    province: 'AQ'
  },
  {
    name: 'Scopa',
    code: 'I544',
    province: 'VC'
  },
  {
    name: 'Scopello',
    code: 'I545',
    province: 'VC'
  },
  {
    name: 'Scoppito',
    code: 'I546',
    province: 'AQ'
  },
  {
    name: 'Scordia',
    code: 'I548',
    province: 'CT'
  },
  {
    name: 'Scorrano',
    code: 'I549',
    province: 'LE'
  },
  {
    name: 'Scorzè',
    code: 'I551',
    province: 'VE'
  },
  {
    name: 'Scurcola Marsicana',
    code: 'I553',
    province: 'AQ'
  },
  {
    name: 'Scurelle',
    code: 'I554',
    province: 'TN'
  },
  {
    name: 'Scurzolengo',
    code: 'I555',
    province: 'AT'
  },
  {
    name: 'Seborga',
    code: 'I556',
    province: 'IM'
  },
  {
    name: 'Secinaro',
    code: 'I558',
    province: 'AQ'
  },
  {
    name: 'Seclì',
    code: 'I559',
    province: 'LE'
  },
  {
    name: 'Secugnago',
    code: 'I561',
    province: 'LO'
  },
  {
    name: 'Sedegliano',
    code: 'I562',
    province: 'UD'
  },
  {
    name: 'Sedico',
    code: 'I563',
    province: 'BL'
  },
  {
    name: 'Sedilo',
    code: 'I564',
    province: 'OR'
  },
  {
    name: 'Sedini',
    code: 'I565',
    province: 'SS'
  },
  {
    name: 'Sedriano',
    code: 'I566',
    province: 'MI'
  },
  {
    name: 'Sedrina',
    code: 'I567',
    province: 'BG'
  },
  {
    name: 'Sefro',
    code: 'I569',
    province: 'MC'
  },
  {
    name: 'Segariu',
    code: 'I570',
    province: 'SU'
  },
  {
    name: 'Seggiano',
    code: 'I571',
    province: 'GR'
  },
  {
    name: 'Segni',
    code: 'I573',
    province: 'RM'
  },
  {
    name: 'Segonzano',
    code: 'I576',
    province: 'TN'
  },
  {
    name: 'Segrate',
    code: 'I577',
    province: 'MI'
  },
  {
    name: 'Segusino',
    code: 'I578',
    province: 'TV'
  },
  {
    name: 'Selargius',
    code: 'I580',
    province: 'CA'
  },
  {
    name: 'Selci',
    code: 'I581',
    province: 'RI'
  },
  {
    name: 'Selegas',
    code: 'I582',
    province: 'SU'
  },
  {
    name: 'Sellano',
    code: 'I585',
    province: 'PG'
  },
  {
    name: 'Sellero',
    code: 'I588',
    province: 'BS'
  },
  {
    name: 'Sellia',
    code: 'I589',
    province: 'CZ'
  },
  {
    name: 'Sellia Marina',
    code: 'I590',
    province: 'CZ'
  },
  {
    name: 'Selva di Val Gardena/Wolkenstein in Gröden',
    italianName: 'Selva di Val Gardena',
    foreignName: 'Wolkenstein in Gröden',
    code: 'I591',
    province: 'BZ'
  },
  {
    name: 'Selva di Cadore',
    code: 'I592',
    province: 'BL'
  },
  {
    name: 'Selva dei Molini/Mühlwald',
    italianName: 'Selva dei Molini',
    foreignName: 'Mühlwald',
    code: 'I593',
    province: 'BZ'
  },
  {
    name: 'Selva di Progno',
    code: 'I594',
    province: 'VR'
  },
  {
    name: 'Selvazzano Dentro',
    code: 'I595',
    province: 'PD'
  },
  {
    name: 'Selvino',
    code: 'I597',
    province: 'BG'
  },
  {
    name: 'Semestene',
    code: 'I598',
    province: 'SS'
  },
  {
    name: 'Semiana',
    code: 'I599',
    province: 'PV'
  },
  {
    name: 'Seminara',
    code: 'I600',
    province: 'RC'
  },
  {
    name: 'Semproniano',
    code: 'I601',
    province: 'GR'
  },
  {
    name: 'Senago',
    code: 'I602',
    province: 'MI'
  },
  {
    name: 'Senale-San Felice/Unsere Liebe Frau im Walde-St. Felix',
    italianName: 'Senale-San Felice',
    foreignName: 'Unsere Liebe Frau im Walde-St. Felix',
    code: 'I603',
    province: 'BZ'
  },
  {
    name: 'Senales/Schnals',
    italianName: 'Senales',
    foreignName: 'Schnals',
    code: 'I604',
    province: 'BZ'
  },
  {
    name: 'Seneghe',
    code: 'I605',
    province: 'OR'
  },
  {
    name: 'Senerchia',
    code: 'I606',
    province: 'AV'
  },
  {
    name: 'Seniga',
    code: 'I607',
    province: 'BS'
  },
  {
    name: 'Senigallia',
    code: 'I608',
    province: 'AN'
  },
  {
    name: 'Senis',
    code: 'I609',
    province: 'OR'
  },
  {
    name: 'Senise',
    code: 'I610',
    province: 'PZ'
  },
  {
    name: 'Senna Comasco',
    code: 'I611',
    province: 'CO'
  },
  {
    name: 'Senna Lodigiana',
    code: 'I612',
    province: 'LO'
  },
  {
    name: 'Sennariolo',
    code: 'I613',
    province: 'OR'
  },
  {
    name: 'Sennori',
    code: 'I614',
    province: 'SS'
  },
  {
    name: 'Senorbì',
    code: 'I615',
    province: 'SU'
  },
  {
    name: 'Sepino',
    code: 'I618',
    province: 'CB'
  },
  {
    name: 'Sequals',
    code: 'I621',
    province: 'PN'
  },
  {
    name: 'Seravezza',
    code: 'I622',
    province: 'LU'
  },
  {
    name: 'Serdiana',
    code: 'I624',
    province: 'SU'
  },
  {
    name: 'Seregno',
    code: 'I625',
    province: 'MB'
  },
  {
    name: 'Seren del Grappa',
    code: 'I626',
    province: 'BL'
  },
  {
    name: 'Sergnano',
    code: 'I627',
    province: 'CR'
  },
  {
    name: 'Seriate',
    code: 'I628',
    province: 'BG'
  },
  {
    name: 'Serina',
    code: 'I629',
    province: 'BG'
  },
  {
    name: 'Serino',
    code: 'I630',
    province: 'AV'
  },
  {
    name: 'Serle',
    code: 'I631',
    province: 'BS'
  },
  {
    name: 'Sermide e Felonica',
    code: 'I632',
    province: 'MN'
  },
  {
    name: 'Sirmione',
    code: 'I633',
    province: 'BS'
  },
  {
    name: 'Sermoneta',
    code: 'I634',
    province: 'LT'
  },
  {
    name: 'Sernaglia della Battaglia',
    code: 'I635',
    province: 'TV'
  },
  {
    name: 'Sernio',
    code: 'I636',
    province: 'SO'
  },
  {
    name: 'Serole',
    code: 'I637',
    province: 'AT'
  },
  {
    name: 'Serra San Bruno',
    code: 'I639',
    province: 'VV'
  },
  {
    name: 'Serra Riccò',
    code: 'I640',
    province: 'GE'
  },
  {
    name: 'Serracapriola',
    code: 'I641',
    province: 'FG'
  },
  {
    name: "Serra d'Aiello",
    code: 'I642',
    province: 'CS'
  },
  {
    name: "Serra de' Conti",
    code: 'I643',
    province: 'AN'
  },
  {
    name: 'Serradifalco',
    code: 'I644',
    province: 'CL'
  },
  {
    name: 'Serralunga di Crea',
    code: 'I645',
    province: 'AL'
  },
  {
    name: "Serralunga d'Alba",
    code: 'I646',
    province: 'CN'
  },
  {
    name: 'Serramanna',
    code: 'I647',
    province: 'SU'
  },
  {
    name: 'Serramezzana',
    code: 'I648',
    province: 'SA'
  },
  {
    name: 'Serramonacesca',
    code: 'I649',
    province: 'PE'
  },
  {
    name: 'Serrapetrona',
    code: 'I651',
    province: 'MC'
  },
  {
    name: 'Serrara Fontana',
    code: 'I652',
    province: 'NA'
  },
  {
    name: 'Serra San Quirico',
    code: 'I653',
    province: 'AN'
  },
  {
    name: "Serra Sant'Abbondio",
    code: 'I654',
    province: 'PU'
  },
  {
    name: 'Serrastretta',
    code: 'I655',
    province: 'CZ'
  },
  {
    name: 'Serrata',
    code: 'I656',
    province: 'RC'
  },
  {
    name: 'Serravalle Scrivia',
    code: 'I657',
    province: 'AL'
  },
  {
    name: 'Serravalle Langhe',
    code: 'I659',
    province: 'CN'
  },
  {
    name: 'Serravalle Pistoiese',
    code: 'I660',
    province: 'PT'
  },
  {
    name: 'Serravalle di Chienti',
    code: 'I661',
    province: 'MC'
  },
  {
    name: 'Serravalle a Po',
    code: 'I662',
    province: 'MN'
  },
  {
    name: 'Serravalle Sesia',
    code: 'I663',
    province: 'VC'
  },
  {
    name: 'Serre',
    code: 'I666',
    province: 'SA'
  },
  {
    name: 'Serrenti',
    code: 'I667',
    province: 'SU'
  },
  {
    name: 'Serri',
    code: 'I668',
    province: 'SU'
  },
  {
    name: 'Serrone',
    code: 'I669',
    province: 'FR'
  },
  {
    name: 'Sersale',
    code: 'I671',
    province: 'CZ'
  },
  {
    name: 'Sovramonte',
    code: 'I673',
    province: 'BL'
  },
  {
    name: 'Sessa Aurunca',
    code: 'I676',
    province: 'CE'
  },
  {
    name: 'Sessa Cilento',
    code: 'I677',
    province: 'SA'
  },
  {
    name: 'Sessame',
    code: 'I678',
    province: 'AT'
  },
  {
    name: 'Sessano del Molise',
    code: 'I679',
    province: 'IS'
  },
  {
    name: 'Sestino',
    code: 'I681',
    province: 'AR'
  },
  {
    name: 'Sesto Campano',
    code: 'I682',
    province: 'IS'
  },
  {
    name: 'Sesto ed Uniti',
    code: 'I683',
    province: 'CR'
  },
  {
    name: 'Sesto Fiorentino',
    code: 'I684',
    province: 'FI'
  },
  {
    name: 'Sesto al Reghena',
    code: 'I686',
    province: 'PN'
  },
  {
    name: 'Sesto/Sexten',
    italianName: 'Sesto',
    foreignName: 'Sexten',
    code: 'I687',
    province: 'BZ'
  },
  {
    name: 'Sesto Calende',
    code: 'I688',
    province: 'VA'
  },
  {
    name: 'Sestola',
    code: 'I689',
    province: 'MO'
  },
  {
    name: 'Sesto San Giovanni',
    code: 'I690',
    province: 'MI'
  },
  {
    name: 'Sestriere',
    code: 'I692',
    province: 'TO'
  },
  {
    name: 'Sestri Levante',
    code: 'I693',
    province: 'GE'
  },
  {
    name: 'Sestu',
    code: 'I695',
    province: 'CA'
  },
  {
    name: 'Settala',
    code: 'I696',
    province: 'MI'
  },
  {
    name: 'Settefrati',
    code: 'I697',
    province: 'FR'
  },
  {
    name: 'Settime',
    code: 'I698',
    province: 'AT'
  },
  {
    name: 'Settimo San Pietro',
    code: 'I699',
    province: 'CA'
  },
  {
    name: 'Settimo Milanese',
    code: 'I700',
    province: 'MI'
  },
  {
    name: 'Settimo Rottaro',
    code: 'I701',
    province: 'TO'
  },
  {
    name: 'Settimo Vittone',
    code: 'I702',
    province: 'TO'
  },
  {
    name: 'Settimo Torinese',
    code: 'I703',
    province: 'TO'
  },
  {
    name: 'Settingiano',
    code: 'I704',
    province: 'CZ'
  },
  {
    name: 'Setzu',
    code: 'I705',
    province: 'SU'
  },
  {
    name: 'Seui',
    code: 'I706',
    province: 'SU'
  },
  {
    name: 'Seulo',
    code: 'I707',
    province: 'SU'
  },
  {
    name: 'Seveso',
    code: 'I709',
    province: 'MB'
  },
  {
    name: 'Sezzadio',
    code: 'I711',
    province: 'AL'
  },
  {
    name: 'Sezze',
    code: 'I712',
    province: 'LT'
  },
  {
    name: 'Sfruz',
    code: 'I714',
    province: 'TN'
  },
  {
    name: 'Sgonico-Zgonik',
    italianName: 'Sgonico',
    foreignName: 'Zgonik',
    code: 'I715',
    province: 'TS'
  },
  {
    name: 'Sgurgola',
    code: 'I716',
    province: 'FR'
  },
  {
    name: 'Siamaggiore',
    code: 'I717',
    province: 'OR'
  },
  {
    name: 'Siamanna',
    code: 'I718',
    province: 'OR'
  },
  {
    name: 'Siano',
    code: 'I720',
    province: 'SA'
  },
  {
    name: 'Siapiccia',
    code: 'I721',
    province: 'OR'
  },
  {
    name: 'Siculiana',
    code: 'I723',
    province: 'AG'
  },
  {
    name: 'Siddi',
    code: 'I724',
    province: 'SU'
  },
  {
    name: 'Siderno',
    code: 'I725',
    province: 'RC'
  },
  {
    name: 'Siena',
    code: 'I726',
    province: 'SI'
  },
  {
    name: 'Sigillo',
    code: 'I727',
    province: 'PG'
  },
  {
    name: 'Signa',
    code: 'I728',
    province: 'FI'
  },
  {
    name: 'Silandro/Schlanders',
    italianName: 'Silandro',
    foreignName: 'Schlanders',
    code: 'I729',
    province: 'BZ'
  },
  {
    name: 'Silanus',
    code: 'I730',
    province: 'NU'
  },
  {
    name: 'Siligo',
    code: 'I732',
    province: 'SS'
  },
  {
    name: 'Siliqua',
    code: 'I734',
    province: 'SU'
  },
  {
    name: 'Silius',
    code: 'I735',
    province: 'SU'
  },
  {
    name: 'Sillavengo',
    code: 'I736',
    province: 'NO'
  },
  {
    name: "Silvano d'Orba",
    code: 'I738',
    province: 'AL'
  },
  {
    name: 'Silvano Pietra',
    code: 'I739',
    province: 'PV'
  },
  {
    name: 'Silvi',
    code: 'I741',
    province: 'TE'
  },
  {
    name: 'Simala',
    code: 'I742',
    province: 'OR'
  },
  {
    name: 'Simaxis',
    code: 'I743',
    province: 'OR'
  },
  {
    name: 'Simbario',
    code: 'I744',
    province: 'VV'
  },
  {
    name: 'Simeri Crichi',
    code: 'I745',
    province: 'CZ'
  },
  {
    name: 'Sinagra',
    code: 'I747',
    province: 'ME'
  },
  {
    name: 'Sindia',
    code: 'I748',
    province: 'NU'
  },
  {
    name: 'Sini',
    code: 'I749',
    province: 'OR'
  },
  {
    name: 'Sinio',
    code: 'I750',
    province: 'CN'
  },
  {
    name: 'Siniscola',
    code: 'I751',
    province: 'NU'
  },
  {
    name: 'Sinnai',
    code: 'I752',
    province: 'CA'
  },
  {
    name: 'Sinopoli',
    code: 'I753',
    province: 'RC'
  },
  {
    name: 'Siracusa',
    code: 'I754',
    province: 'SR'
  },
  {
    name: 'Sirignano',
    code: 'I756',
    province: 'AV'
  },
  {
    name: 'Siris',
    code: 'I757',
    province: 'OR'
  },
  {
    name: 'Sirolo',
    code: 'I758',
    province: 'AN'
  },
  {
    name: 'Sirone',
    code: 'I759',
    province: 'LC'
  },
  {
    name: 'Sirtori',
    code: 'I761',
    province: 'LC'
  },
  {
    name: 'Siurgus Donigala',
    code: 'I765',
    province: 'SU'
  },
  {
    name: 'Sizzano',
    code: 'I767',
    province: 'NO'
  },
  {
    name: 'Sluderno/Schluderns',
    italianName: 'Sluderno',
    foreignName: 'Schluderns',
    code: 'I771',
    province: 'BZ'
  },
  {
    name: 'Smerillo',
    code: 'I774',
    province: 'FM'
  },
  {
    name: 'Soave',
    code: 'I775',
    province: 'VR'
  },
  {
    name: 'Socchieve',
    code: 'I777',
    province: 'UD'
  },
  {
    name: 'Soddì',
    code: 'I778',
    province: 'OR'
  },
  {
    name: 'Sogliano al Rubicone',
    code: 'I779',
    province: 'FC'
  },
  {
    name: 'Sogliano Cavour',
    code: 'I780',
    province: 'LE'
  },
  {
    name: 'Soglio',
    code: 'I781',
    province: 'AT'
  },
  {
    name: 'Soiano del Lago',
    code: 'I782',
    province: 'BS'
  },
  {
    name: 'Solagna',
    code: 'I783',
    province: 'VI'
  },
  {
    name: 'Solarino',
    code: 'I785',
    province: 'SR'
  },
  {
    name: 'Solaro',
    code: 'I786',
    province: 'MI'
  },
  {
    name: 'Solarolo',
    code: 'I787',
    province: 'RA'
  },
  {
    name: 'Solarolo Rainerio',
    code: 'I790',
    province: 'CR'
  },
  {
    name: 'Solarussa',
    code: 'I791',
    province: 'OR'
  },
  {
    name: 'Solbiate Arno',
    code: 'I793',
    province: 'VA'
  },
  {
    name: 'Solbiate Olona',
    code: 'I794',
    province: 'VA'
  },
  {
    name: 'Soldano',
    code: 'I796',
    province: 'IM'
  },
  {
    name: 'Soleminis',
    code: 'I797',
    province: 'SU'
  },
  {
    name: 'Solero',
    code: 'I798',
    province: 'AL'
  },
  {
    name: 'Solesino',
    code: 'I799',
    province: 'PD'
  },
  {
    name: 'Soleto',
    code: 'I800',
    province: 'LE'
  },
  {
    name: 'Solferino',
    code: 'I801',
    province: 'MN'
  },
  {
    name: 'Soliera',
    code: 'I802',
    province: 'MO'
  },
  {
    name: 'Solignano',
    code: 'I803',
    province: 'PR'
  },
  {
    name: 'Sulmona',
    code: 'I804',
    province: 'AQ'
  },
  {
    name: 'Solofra',
    code: 'I805',
    province: 'AV'
  },
  {
    name: 'Solonghello',
    code: 'I808',
    province: 'AL'
  },
  {
    name: 'Solopaca',
    code: 'I809',
    province: 'BN'
  },
  {
    name: 'Solto Collina',
    code: 'I812',
    province: 'BG'
  },
  {
    name: 'Solza',
    code: 'I813',
    province: 'BG'
  },
  {
    name: 'Somaglia',
    code: 'I815',
    province: 'LO'
  },
  {
    name: 'Somano',
    code: 'I817',
    province: 'CN'
  },
  {
    name: 'Somma Lombardo',
    code: 'I819',
    province: 'VA'
  },
  {
    name: 'Somma Vesuviana',
    code: 'I820',
    province: 'NA'
  },
  {
    name: 'Sommacampagna',
    code: 'I821',
    province: 'VR'
  },
  {
    name: 'Sommariva del Bosco',
    code: 'I822',
    province: 'CN'
  },
  {
    name: 'Sommariva Perno',
    code: 'I823',
    province: 'CN'
  },
  {
    name: 'Sommatino',
    code: 'I824',
    province: 'CL'
  },
  {
    name: 'Sommo',
    code: 'I825',
    province: 'PV'
  },
  {
    name: 'Sona',
    code: 'I826',
    province: 'VR'
  },
  {
    name: 'Soncino',
    code: 'I827',
    province: 'CR'
  },
  {
    name: 'Sondalo',
    code: 'I828',
    province: 'SO'
  },
  {
    name: 'Sondrio',
    code: 'I829',
    province: 'SO'
  },
  {
    name: 'Songavazzo',
    code: 'I830',
    province: 'BG'
  },
  {
    name: 'Sonico',
    code: 'I831',
    province: 'BS'
  },
  {
    name: 'Sonnino',
    code: 'I832',
    province: 'LT'
  },
  {
    name: 'Sora',
    code: 'I838',
    province: 'FR'
  },
  {
    name: 'Soraga di Fassa',
    code: 'I839',
    province: 'TN'
  },
  {
    name: 'Soragna',
    code: 'I840',
    province: 'PR'
  },
  {
    name: 'Sorano',
    code: 'I841',
    province: 'GR'
  },
  {
    name: 'Sorbo Serpico',
    code: 'I843',
    province: 'AV'
  },
  {
    name: 'Sorbo San Basile',
    code: 'I844',
    province: 'CZ'
  },
  {
    name: 'Sordevolo',
    code: 'I847',
    province: 'BI'
  },
  {
    name: 'Sordio',
    code: 'I848',
    province: 'LO'
  },
  {
    name: 'Soresina',
    code: 'I849',
    province: 'CR'
  },
  {
    name: 'Sorgà',
    code: 'I850',
    province: 'VR'
  },
  {
    name: 'Sorgono',
    code: 'I851',
    province: 'NU'
  },
  {
    name: 'Sori',
    code: 'I852',
    province: 'GE'
  },
  {
    name: 'Sorianello',
    code: 'I853',
    province: 'VV'
  },
  {
    name: 'Soriano Calabro',
    code: 'I854',
    province: 'VV'
  },
  {
    name: 'Soriano nel Cimino',
    code: 'I855',
    province: 'VT'
  },
  {
    name: 'Sorico',
    code: 'I856',
    province: 'CO'
  },
  {
    name: 'Soriso',
    code: 'I857',
    province: 'NO'
  },
  {
    name: 'Sorisole',
    code: 'I858',
    province: 'BG'
  },
  {
    name: 'Sormano',
    code: 'I860',
    province: 'CO'
  },
  {
    name: 'Sorradile',
    code: 'I861',
    province: 'OR'
  },
  {
    name: 'Sorrento',
    code: 'I862',
    province: 'NA'
  },
  {
    name: 'Sorso',
    code: 'I863',
    province: 'SS'
  },
  {
    name: 'Sortino',
    code: 'I864',
    province: 'SR'
  },
  {
    name: 'Sospiro',
    code: 'I865',
    province: 'CR'
  },
  {
    name: 'Sospirolo',
    code: 'I866',
    province: 'BL'
  },
  {
    name: 'Sossano',
    code: 'I867',
    province: 'VI'
  },
  {
    name: 'Sostegno',
    code: 'I868',
    province: 'BI'
  },
  {
    name: 'Sotto il Monte Giovanni XXIII',
    code: 'I869',
    province: 'BG'
  },
  {
    name: 'Sover',
    code: 'I871',
    province: 'TN'
  },
  {
    name: 'Soverato',
    code: 'I872',
    province: 'CZ'
  },
  {
    name: 'Sovere',
    code: 'I873',
    province: 'BG'
  },
  {
    name: 'Soveria Mannelli',
    code: 'I874',
    province: 'CZ'
  },
  {
    name: 'Soveria Simeri',
    code: 'I875',
    province: 'CZ'
  },
  {
    name: 'Soverzene',
    code: 'I876',
    province: 'BL'
  },
  {
    name: 'Sovicille',
    code: 'I877',
    province: 'SI'
  },
  {
    name: 'Sovico',
    code: 'I878',
    province: 'MB'
  },
  {
    name: 'Sozzago',
    code: 'I880',
    province: 'NO'
  },
  {
    name: 'Spadafora',
    code: 'I881',
    province: 'ME'
  },
  {
    name: 'Spadola',
    code: 'I884',
    province: 'VV'
  },
  {
    name: 'Sparanise',
    code: 'I885',
    province: 'CE'
  },
  {
    name: 'Sparone',
    code: 'I886',
    province: 'TO'
  },
  {
    name: 'Specchia',
    code: 'I887',
    province: 'LE'
  },
  {
    name: 'Spello',
    code: 'I888',
    province: 'PG'
  },
  {
    name: 'Sperlinga',
    code: 'I891',
    province: 'EN'
  },
  {
    name: 'Sperlonga',
    code: 'I892',
    province: 'LT'
  },
  {
    name: 'Sperone',
    code: 'I893',
    province: 'AV'
  },
  {
    name: 'Spessa',
    code: 'I894',
    province: 'PV'
  },
  {
    name: 'Spezzano Albanese',
    code: 'I895',
    province: 'CS'
  },
  {
    name: 'Spezzano della Sila',
    code: 'I896',
    province: 'CS'
  },
  {
    name: 'Spiazzo',
    code: 'I899',
    province: 'TN'
  },
  {
    name: 'Spigno Monferrato',
    code: 'I901',
    province: 'AL'
  },
  {
    name: 'Spigno Saturnia',
    code: 'I902',
    province: 'LT'
  },
  {
    name: 'Spilamberto',
    code: 'I903',
    province: 'MO'
  },
  {
    name: 'Spilimbergo',
    code: 'I904',
    province: 'PN'
  },
  {
    name: 'Spilinga',
    code: 'I905',
    province: 'VV'
  },
  {
    name: 'Spinadesco',
    code: 'I906',
    province: 'CR'
  },
  {
    name: 'Spinazzola',
    code: 'I907',
    province: 'BT'
  },
  {
    name: 'Spinea',
    code: 'I908',
    province: 'VE'
  },
  {
    name: 'Spineda',
    code: 'I909',
    province: 'CR'
  },
  {
    name: 'Spinete',
    code: 'I910',
    province: 'CB'
  },
  {
    name: 'Spineto Scrivia',
    code: 'I911',
    province: 'AL'
  },
  {
    name: 'Spinetoli',
    code: 'I912',
    province: 'AP'
  },
  {
    name: "Spino d'Adda",
    code: 'I914',
    province: 'CR'
  },
  {
    name: 'Spinone al Lago',
    code: 'I916',
    province: 'BG'
  },
  {
    name: 'Spinoso',
    code: 'I917',
    province: 'PZ'
  },
  {
    name: 'Spirano',
    code: 'I919',
    province: 'BG'
  },
  {
    name: 'Spoleto',
    code: 'I921',
    province: 'PG'
  },
  {
    name: 'Spoltore',
    code: 'I922',
    province: 'PE'
  },
  {
    name: 'Spongano',
    code: 'I923',
    province: 'LE'
  },
  {
    name: 'Spormaggiore',
    code: 'I924',
    province: 'TN'
  },
  {
    name: 'Sporminore',
    code: 'I925',
    province: 'TN'
  },
  {
    name: 'Spotorno',
    code: 'I926',
    province: 'SV'
  },
  {
    name: 'Spresiano',
    code: 'I927',
    province: 'TV'
  },
  {
    name: 'Spriana',
    code: 'I928',
    province: 'SO'
  },
  {
    name: 'Squillace',
    code: 'I929',
    province: 'CZ'
  },
  {
    name: 'Squinzano',
    code: 'I930',
    province: 'LE'
  },
  {
    name: 'Staffolo',
    code: 'I932',
    province: 'AN'
  },
  {
    name: 'Stagno Lombardo',
    code: 'I935',
    province: 'CR'
  },
  {
    name: 'Staiti',
    code: 'I936',
    province: 'RC'
  },
  {
    name: 'Stalettì',
    code: 'I937',
    province: 'CZ'
  },
  {
    name: 'Stanghella',
    code: 'I938',
    province: 'PD'
  },
  {
    name: 'Staranzano',
    code: 'I939',
    province: 'GO'
  },
  {
    name: 'Stazzano',
    code: 'I941',
    province: 'AL'
  },
  {
    name: 'Stazzema',
    code: 'I942',
    province: 'LU'
  },
  {
    name: 'Stazzona',
    code: 'I943',
    province: 'CO'
  },
  {
    name: 'Stefanaconi',
    code: 'I945',
    province: 'VV'
  },
  {
    name: 'Stella',
    code: 'I946',
    province: 'SV'
  },
  {
    name: 'Stellanello',
    code: 'I947',
    province: 'SV'
  },
  {
    name: 'Stelvio/Stilfs',
    italianName: 'Stelvio',
    foreignName: 'Stilfs',
    code: 'I948',
    province: 'BZ'
  },
  {
    name: 'Stenico',
    code: 'I949',
    province: 'TN'
  },
  {
    name: 'Sternatia',
    code: 'I950',
    province: 'LE'
  },
  {
    name: 'Stezzano',
    code: 'I951',
    province: 'BG'
  },
  {
    name: 'Stienta',
    code: 'I953',
    province: 'RO'
  },
  {
    name: 'Stigliano',
    code: 'I954',
    province: 'MT'
  },
  {
    name: 'Stignano',
    code: 'I955',
    province: 'RC'
  },
  {
    name: 'Stilo',
    code: 'I956',
    province: 'RC'
  },
  {
    name: 'Stimigliano',
    code: 'I959',
    province: 'RI'
  },
  {
    name: 'Stio',
    code: 'I960',
    province: 'SA'
  },
  {
    name: 'Stornara',
    code: 'I962',
    province: 'FG'
  },
  {
    name: 'Stornarella',
    code: 'I963',
    province: 'FG'
  },
  {
    name: 'Storo',
    code: 'I964',
    province: 'TN'
  },
  {
    name: 'Stra',
    code: 'I965',
    province: 'VE'
  },
  {
    name: 'Stradella',
    code: 'I968',
    province: 'PV'
  },
  {
    name: 'Strambinello',
    code: 'I969',
    province: 'TO'
  },
  {
    name: 'Strambino',
    code: 'I970',
    province: 'TO'
  },
  {
    name: 'Strangolagalli',
    code: 'I973',
    province: 'FR'
  },
  {
    name: 'Stregna',
    code: 'I974',
    province: 'UD'
  },
  {
    name: 'Strembo',
    code: 'I975',
    province: 'TN'
  },
  {
    name: 'Stresa',
    code: 'I976',
    province: 'VB'
  },
  {
    name: 'Strevi',
    code: 'I977',
    province: 'AL'
  },
  {
    name: 'Striano',
    code: 'I978',
    province: 'NA'
  },
  {
    name: 'Strona',
    code: 'I980',
    province: 'BI'
  },
  {
    name: 'Stroncone',
    code: 'I981',
    province: 'TR'
  },
  {
    name: 'Strongoli',
    code: 'I982',
    province: 'KR'
  },
  {
    name: 'Stroppiana',
    code: 'I984',
    province: 'VC'
  },
  {
    name: 'Stroppo',
    code: 'I985',
    province: 'CN'
  },
  {
    name: 'Strozza',
    code: 'I986',
    province: 'BG'
  },
  {
    name: 'Sturno',
    code: 'I990',
    province: 'AV'
  },
  {
    name: 'Subbiano',
    code: 'I991',
    province: 'AR'
  },
  {
    name: 'Subiaco',
    code: 'I992',
    province: 'RM'
  },
  {
    name: 'Succivo',
    code: 'I993',
    province: 'CE'
  },
  {
    name: 'Sueglio',
    code: 'I994',
    province: 'LC'
  },
  {
    name: 'Suelli',
    code: 'I995',
    province: 'SU'
  },
  {
    name: 'Suello',
    code: 'I996',
    province: 'LC'
  },
  {
    name: 'Suisio',
    code: 'I997',
    province: 'BG'
  },
  {
    name: 'Sulbiate',
    code: 'I998',
    province: 'MB'
  },
  {
    name: 'Sulzano',
    code: 'L002',
    province: 'BS'
  },
  {
    name: 'Sumirago',
    code: 'L003',
    province: 'VA'
  },
  {
    name: 'Summonte',
    code: 'L004',
    province: 'AV'
  },
  {
    name: 'Suni',
    code: 'L006',
    province: 'OR'
  },
  {
    name: 'Suno',
    code: 'L007',
    province: 'NO'
  },
  {
    name: 'Supersano',
    code: 'L008',
    province: 'LE'
  },
  {
    name: 'Supino',
    code: 'L009',
    province: 'FR'
  },
  {
    name: 'Surano',
    code: 'L010',
    province: 'LE'
  },
  {
    name: 'Surbo',
    code: 'L011',
    province: 'LE'
  },
  {
    name: 'Susa',
    code: 'L013',
    province: 'TO'
  },
  {
    name: 'Susegana',
    code: 'L014',
    province: 'TV'
  },
  {
    name: 'Sustinente',
    code: 'L015',
    province: 'MN'
  },
  {
    name: 'Sutera',
    code: 'L016',
    province: 'CL'
  },
  {
    name: 'Sutri',
    code: 'L017',
    province: 'VT'
  },
  {
    name: 'Sutrio',
    code: 'L018',
    province: 'UD'
  },
  {
    name: 'Suvereto',
    code: 'L019',
    province: 'LI'
  },
  {
    name: 'Suzzara',
    code: 'L020',
    province: 'MN'
  },
  {
    name: 'Taceno',
    code: 'L022',
    province: 'LC'
  },
  {
    name: 'Tadasuni',
    code: 'L023',
    province: 'OR'
  },
  {
    name: 'Taggia',
    code: 'L024',
    province: 'IM'
  },
  {
    name: 'Tagliacozzo',
    code: 'L025',
    province: 'AQ'
  },
  {
    name: 'Taglio di Po',
    code: 'L026',
    province: 'RO'
  },
  {
    name: 'Tagliolo Monferrato',
    code: 'L027',
    province: 'AL'
  },
  {
    name: 'Taibon Agordino',
    code: 'L030',
    province: 'BL'
  },
  {
    name: 'Taino',
    code: 'L032',
    province: 'VA'
  },
  {
    name: 'Talamello',
    code: 'L034',
    province: 'RN'
  },
  {
    name: 'Talamona',
    code: 'L035',
    province: 'SO'
  },
  {
    name: 'Talana',
    code: 'L036',
    province: 'NU'
  },
  {
    name: 'Taleggio',
    code: 'L037',
    province: 'BG'
  },
  {
    name: 'Talla',
    code: 'L038',
    province: 'AR'
  },
  {
    name: 'Talmassons',
    code: 'L039',
    province: 'UD'
  },
  {
    name: 'Tambre',
    code: 'L040',
    province: 'BL'
  },
  {
    name: 'Taormina',
    code: 'L042',
    province: 'ME'
  },
  {
    name: 'Tarano',
    code: 'L046',
    province: 'RI'
  },
  {
    name: 'Taranta Peligna',
    code: 'L047',
    province: 'CH'
  },
  {
    name: 'Tarantasca',
    code: 'L048',
    province: 'CN'
  },
  {
    name: 'Taranto',
    code: 'L049',
    province: 'TA'
  },
  {
    name: 'Tarcento',
    code: 'L050',
    province: 'UD'
  },
  {
    name: 'Tarsia',
    code: 'L055',
    province: 'CS'
  },
  {
    name: 'Tartano',
    code: 'L056',
    province: 'SO'
  },
  {
    name: 'Tarvisio',
    code: 'L057',
    province: 'UD'
  },
  {
    name: 'Tarzo',
    code: 'L058',
    province: 'TV'
  },
  {
    name: 'Tassarolo',
    code: 'L059',
    province: 'AL'
  },
  {
    name: 'Taurano',
    code: 'L061',
    province: 'AV'
  },
  {
    name: 'Taurasi',
    code: 'L062',
    province: 'AV'
  },
  {
    name: 'Taurianova',
    code: 'L063',
    province: 'RC'
  },
  {
    name: 'Taurisano',
    code: 'L064',
    province: 'LE'
  },
  {
    name: 'Tavagnacco',
    code: 'L065',
    province: 'UD'
  },
  {
    name: 'Tavagnasco',
    code: 'L066',
    province: 'TO'
  },
  {
    name: 'Tavenna',
    code: 'L069',
    province: 'CB'
  },
  {
    name: 'Taverna',
    code: 'L070',
    province: 'CZ'
  },
  {
    name: 'Tavernerio',
    code: 'L071',
    province: 'CO'
  },
  {
    name: 'Tavernola Bergamasca',
    code: 'L073',
    province: 'BG'
  },
  {
    name: 'Taviano',
    code: 'L074',
    province: 'LE'
  },
  {
    name: 'Tavigliano',
    code: 'L075',
    province: 'BI'
  },
  {
    name: 'Tavoleto',
    code: 'L078',
    province: 'PU'
  },
  {
    name: 'Tavullia',
    code: 'L081',
    province: 'PU'
  },
  {
    name: 'Teana',
    code: 'L082',
    province: 'PZ'
  },
  {
    name: 'Teano',
    code: 'L083',
    province: 'CE'
  },
  {
    name: 'Teglio',
    code: 'L084',
    province: 'SO'
  },
  {
    name: 'Teglio Veneto',
    code: 'L085',
    province: 'VE'
  },
  {
    name: 'Telese Terme',
    code: 'L086',
    province: 'BN'
  },
  {
    name: 'Telgate',
    code: 'L087',
    province: 'BG'
  },
  {
    name: 'Telti',
    code: 'L088',
    province: 'SS'
  },
  {
    name: 'Telve',
    code: 'L089',
    province: 'TN'
  },
  {
    name: 'Telve di Sopra',
    code: 'L090',
    province: 'TN'
  },
  {
    name: 'Tempio Pausania',
    code: 'L093',
    province: 'SS'
  },
  {
    name: 'Temù',
    code: 'L094',
    province: 'BS'
  },
  {
    name: 'Tenna',
    code: 'L096',
    province: 'TN'
  },
  {
    name: 'Tenno',
    code: 'L097',
    province: 'TN'
  },
  {
    name: 'Teolo',
    code: 'L100',
    province: 'PD'
  },
  {
    name: 'Teora',
    code: 'L102',
    province: 'AV'
  },
  {
    name: 'Teramo',
    code: 'L103',
    province: 'TE'
  },
  {
    name: 'Terdobbiate',
    code: 'L104',
    province: 'NO'
  },
  {
    name: 'Terelle',
    code: 'L105',
    province: 'FR'
  },
  {
    name: 'Terento/Terenten',
    italianName: 'Terento',
    foreignName: 'Terenten',
    code: 'L106',
    province: 'BZ'
  },
  {
    name: 'Terlano/Terlan',
    italianName: 'Terlano',
    foreignName: 'Terlan',
    code: 'L108',
    province: 'BZ'
  },
  {
    name: 'Terlizzi',
    code: 'L109',
    province: 'BA'
  },
  {
    name: 'Termeno sulla strada del vino/Tramin an der Weinstraße',
    italianName: 'Termeno sulla strada del vino',
    foreignName: 'Tramin an der Weinstraße',
    code: 'L111',
    province: 'BZ'
  },
  {
    name: 'Termini Imerese',
    code: 'L112',
    province: 'PA'
  },
  {
    name: 'Termoli',
    code: 'L113',
    province: 'CB'
  },
  {
    name: 'Ternate',
    code: 'L115',
    province: 'VA'
  },
  {
    name: 'Ternengo',
    code: 'L116',
    province: 'BI'
  },
  {
    name: 'Terni',
    code: 'L117',
    province: 'TR'
  },
  {
    name: "Terno d'Isola",
    code: 'L118',
    province: 'BG'
  },
  {
    name: 'Terracina',
    code: 'L120',
    province: 'LT'
  },
  {
    name: 'Terragnolo',
    code: 'L121',
    province: 'TN'
  },
  {
    name: 'Terralba',
    code: 'L122',
    province: 'OR'
  },
  {
    name: 'Terranuova Bracciolini',
    code: 'L123',
    province: 'AR'
  },
  {
    name: 'Terranova da Sibari',
    code: 'L124',
    province: 'CS'
  },
  {
    name: 'Terranova dei Passerini',
    code: 'L125',
    province: 'LO'
  },
  {
    name: 'Terranova di Pollino',
    code: 'L126',
    province: 'PZ'
  },
  {
    name: 'Terranova Sappo Minulio',
    code: 'L127',
    province: 'RC'
  },
  {
    name: 'Terrasini',
    code: 'L131',
    province: 'PA'
  },
  {
    name: 'Terrassa Padovana',
    code: 'L132',
    province: 'PD'
  },
  {
    name: 'Terravecchia',
    code: 'L134',
    province: 'CS'
  },
  {
    name: 'Terrazzo',
    code: 'L136',
    province: 'VR'
  },
  {
    name: 'Terricciola',
    code: 'L138',
    province: 'PI'
  },
  {
    name: 'Terruggia',
    code: 'L139',
    province: 'AL'
  },
  {
    name: 'Tertenia',
    code: 'L140',
    province: 'NU'
  },
  {
    name: 'Terzigno',
    code: 'L142',
    province: 'NA'
  },
  {
    name: 'Terzo',
    code: 'L143',
    province: 'AL'
  },
  {
    name: "Terzo d'Aquileia",
    code: 'L144',
    province: 'UD'
  },
  {
    name: 'Terzolas',
    code: 'L145',
    province: 'TN'
  },
  {
    name: 'Terzorio',
    code: 'L146',
    province: 'IM'
  },
  {
    name: 'Tesero',
    code: 'L147',
    province: 'TN'
  },
  {
    name: 'Tesimo/Tisens',
    italianName: 'Tesimo',
    foreignName: 'Tisens',
    code: 'L149',
    province: 'BZ'
  },
  {
    name: 'Tessennano',
    code: 'L150',
    province: 'VT'
  },
  {
    name: 'Testico',
    code: 'L152',
    province: 'SV'
  },
  {
    name: 'Teti',
    code: 'L153',
    province: 'NU'
  },
  {
    name: 'Teulada',
    code: 'L154',
    province: 'SU'
  },
  {
    name: 'Teverola',
    code: 'L155',
    province: 'CE'
  },
  {
    name: 'Tezze sul Brenta',
    code: 'L156',
    province: 'VI'
  },
  {
    name: 'Thiene',
    code: 'L157',
    province: 'VI'
  },
  {
    name: 'Thiesi',
    code: 'L158',
    province: 'SS'
  },
  {
    name: 'Tiana',
    code: 'L160',
    province: 'NU'
  },
  {
    name: 'Ticengo',
    code: 'L164',
    province: 'CR'
  },
  {
    name: 'Ticineto',
    code: 'L165',
    province: 'AL'
  },
  {
    name: 'Tiggiano',
    code: 'L166',
    province: 'LE'
  },
  {
    name: 'Tiglieto',
    code: 'L167',
    province: 'GE'
  },
  {
    name: 'Tigliole',
    code: 'L168',
    province: 'AT'
  },
  {
    name: 'Tignale',
    code: 'L169',
    province: 'BS'
  },
  {
    name: 'Tinnura',
    code: 'L172',
    province: 'OR'
  },
  {
    name: 'Tione degli Abruzzi',
    code: 'L173',
    province: 'AQ'
  },
  {
    name: 'Tione di Trento',
    code: 'L174',
    province: 'TN'
  },
  {
    name: 'Tirano',
    code: 'L175',
    province: 'SO'
  },
  {
    name: 'Tires/Tiers',
    italianName: 'Tires',
    foreignName: 'Tiers',
    code: 'L176',
    province: 'BZ'
  },
  {
    name: 'Tiriolo',
    code: 'L177',
    province: 'CZ'
  },
  {
    name: 'Tirolo/Tirol',
    italianName: 'Tirolo',
    foreignName: 'Tirol',
    code: 'L178',
    province: 'BZ'
  },
  {
    name: 'Tissi',
    code: 'L180',
    province: 'SS'
  },
  {
    name: 'Tito',
    code: 'L181',
    province: 'PZ'
  },
  {
    name: 'Tivoli',
    code: 'L182',
    province: 'RM'
  },
  {
    name: 'Tizzano Val Parma',
    code: 'L183',
    province: 'PR'
  },
  {
    name: 'Toano',
    code: 'L184',
    province: 'RE'
  },
  {
    name: 'Tocco Caudio',
    code: 'L185',
    province: 'BN'
  },
  {
    name: 'Tocco da Casauria',
    code: 'L186',
    province: 'PE'
  },
  {
    name: 'Toceno',
    code: 'L187',
    province: 'VB'
  },
  {
    name: 'Todi',
    code: 'L188',
    province: 'PG'
  },
  {
    name: 'Toffia',
    code: 'L189',
    province: 'RI'
  },
  {
    name: 'Toirano',
    code: 'L190',
    province: 'SV'
  },
  {
    name: 'Tolentino',
    code: 'L191',
    province: 'MC'
  },
  {
    name: 'Tolfa',
    code: 'L192',
    province: 'RM'
  },
  {
    name: 'Tollegno',
    code: 'L193',
    province: 'BI'
  },
  {
    name: 'Tollo',
    code: 'L194',
    province: 'CH'
  },
  {
    name: 'Tolmezzo',
    code: 'L195',
    province: 'UD'
  },
  {
    name: 'Tolve',
    code: 'L197',
    province: 'PZ'
  },
  {
    name: 'Tombolo',
    code: 'L199',
    province: 'PD'
  },
  {
    name: 'Ton',
    code: 'L200',
    province: 'TN'
  },
  {
    name: 'Tonara',
    code: 'L202',
    province: 'NU'
  },
  {
    name: 'Tonco',
    code: 'L203',
    province: 'AT'
  },
  {
    name: 'Tora e Piccilli',
    code: 'L205',
    province: 'CE'
  },
  {
    name: 'Torano Castello',
    code: 'L206',
    province: 'CS'
  },
  {
    name: 'Torano Nuovo',
    code: 'L207',
    province: 'TE'
  },
  {
    name: 'Torbole Casaglia',
    code: 'L210',
    province: 'BS'
  },
  {
    name: 'Torcegno',
    code: 'L211',
    province: 'TN'
  },
  {
    name: 'Torchiara',
    code: 'L212',
    province: 'SA'
  },
  {
    name: 'Torchiarolo',
    code: 'L213',
    province: 'BR'
  },
  {
    name: 'Torella dei Lombardi',
    code: 'L214',
    province: 'AV'
  },
  {
    name: 'Torella del Sannio',
    code: 'L215',
    province: 'CB'
  },
  {
    name: 'Torgiano',
    code: 'L216',
    province: 'PG'
  },
  {
    name: 'Torgnon',
    code: 'L217',
    province: 'AO'
  },
  {
    name: 'Torino di Sangro',
    code: 'L218',
    province: 'CH'
  },
  {
    name: 'Torino',
    code: 'L219',
    province: 'TO'
  },
  {
    name: 'Toritto',
    code: 'L220',
    province: 'BA'
  },
  {
    name: 'Torlino Vimercati',
    code: 'L221',
    province: 'CR'
  },
  {
    name: 'Tornaco',
    code: 'L223',
    province: 'NO'
  },
  {
    name: 'Tornareccio',
    code: 'L224',
    province: 'CH'
  },
  {
    name: 'Tornata',
    code: 'L225',
    province: 'CR'
  },
  {
    name: 'Tornimparte',
    code: 'L227',
    province: 'AQ'
  },
  {
    name: 'Torno',
    code: 'L228',
    province: 'CO'
  },
  {
    name: 'Tornolo',
    code: 'L229',
    province: 'PR'
  },
  {
    name: 'Toro',
    code: 'L230',
    province: 'CB'
  },
  {
    name: 'Torpè',
    code: 'L231',
    province: 'NU'
  },
  {
    name: 'Torraca',
    code: 'L233',
    province: 'SA'
  },
  {
    name: 'Torralba',
    code: 'L235',
    province: 'SS'
  },
  {
    name: 'Torrazza Coste',
    code: 'L237',
    province: 'PV'
  },
  {
    name: 'Torrazza Piemonte',
    code: 'L238',
    province: 'TO'
  },
  {
    name: 'Torrazzo',
    code: 'L239',
    province: 'BI'
  },
  {
    name: 'Torre di Ruggiero',
    code: 'L240',
    province: 'CZ'
  },
  {
    name: 'Torre Mondovì',
    code: 'L241',
    province: 'CN'
  },
  {
    name: 'Torre Cajetani',
    code: 'L243',
    province: 'FR'
  },
  {
    name: 'Torre di Santa Maria',
    code: 'L244',
    province: 'SO'
  },
  {
    name: 'Torre Annunziata',
    code: 'L245',
    province: 'NA'
  },
  {
    name: 'Torreano',
    code: 'L246',
    province: 'UD'
  },
  {
    name: 'Torre Canavese',
    code: 'L247',
    province: 'TO'
  },
  {
    name: 'Torrebelvicino',
    code: 'L248',
    province: 'VI'
  },
  {
    name: 'Torre Beretti e Castellaro',
    code: 'L250',
    province: 'PV'
  },
  {
    name: 'Torre Boldone',
    code: 'L251',
    province: 'BG'
  },
  {
    name: 'Torre Bormida',
    code: 'L252',
    province: 'CN'
  },
  {
    name: 'Torrebruna',
    code: 'L253',
    province: 'CH'
  },
  {
    name: 'Torrecuso',
    code: 'L254',
    province: 'BN'
  },
  {
    name: "Torre d'Arese",
    code: 'L256',
    province: 'PV'
  },
  {
    name: "Torre de' Busi",
    code: 'L257',
    province: 'BG'
  },
  {
    name: "Torre de' Picenardi",
    code: 'L258',
    province: 'CR'
  },
  {
    name: 'Torre del Greco',
    code: 'L259',
    province: 'NA'
  },
  {
    name: "Torre de' Negri",
    code: 'L262',
    province: 'PV'
  },
  {
    name: "Torre de' Passeri",
    code: 'L263',
    province: 'PE'
  },
  {
    name: "Torre de' Roveri",
    code: 'L265',
    province: 'BG'
  },
  {
    name: 'Torre di Mosto',
    code: 'L267',
    province: 'VE'
  },
  {
    name: "Torre d'Isola",
    code: 'L269',
    province: 'PV'
  },
  {
    name: 'Torreglia',
    code: 'L270',
    province: 'PD'
  },
  {
    name: 'Torregrotta',
    code: 'L271',
    province: 'ME'
  },
  {
    name: 'Torre Le Nocelle',
    code: 'L272',
    province: 'AV'
  },
  {
    name: 'Torremaggiore',
    code: 'L273',
    province: 'FG'
  },
  {
    name: 'Torre Orsaia',
    code: 'L274',
    province: 'SA'
  },
  {
    name: 'Torre Pallavicina',
    code: 'L276',
    province: 'BG'
  },
  {
    name: 'Torre Pellice',
    code: 'L277',
    province: 'TO'
  },
  {
    name: 'Torre San Giorgio',
    code: 'L278',
    province: 'CN'
  },
  {
    name: 'Torre San Patrizio',
    code: 'L279',
    province: 'FM'
  },
  {
    name: 'Torre Santa Susanna',
    code: 'L280',
    province: 'BR'
  },
  {
    name: 'Torresina',
    code: 'L281',
    province: 'CN'
  },
  {
    name: 'Torretta',
    code: 'L282',
    province: 'PA'
  },
  {
    name: 'Torrevecchia Teatina',
    code: 'L284',
    province: 'CH'
  },
  {
    name: 'Torrevecchia Pia',
    code: 'L285',
    province: 'PV'
  },
  {
    name: 'Torri in Sabina',
    code: 'L286',
    province: 'RI'
  },
  {
    name: 'Torri del Benaco',
    code: 'L287',
    province: 'VR'
  },
  {
    name: 'Torrice',
    code: 'L290',
    province: 'FR'
  },
  {
    name: 'Torricella Peligna',
    code: 'L291',
    province: 'CH'
  },
  {
    name: 'Torricella Verzate',
    code: 'L292',
    province: 'PV'
  },
  {
    name: 'Torricella in Sabina',
    code: 'L293',
    province: 'RI'
  },
  {
    name: 'Torricella',
    code: 'L294',
    province: 'TA'
  },
  {
    name: 'Torricella Sicura',
    code: 'L295',
    province: 'TE'
  },
  {
    name: 'Torricella del Pizzo',
    code: 'L296',
    province: 'CR'
  },
  {
    name: 'Torri di Quartesolo',
    code: 'L297',
    province: 'VI'
  },
  {
    name: 'Torriglia',
    code: 'L298',
    province: 'GE'
  },
  {
    name: 'Torrile',
    code: 'L299',
    province: 'PR'
  },
  {
    name: 'Torrioni',
    code: 'L301',
    province: 'AV'
  },
  {
    name: 'Torrita Tiberina',
    code: 'L302',
    province: 'RM'
  },
  {
    name: 'Torrita di Siena',
    code: 'L303',
    province: 'SI'
  },
  {
    name: 'Tortona',
    code: 'L304',
    province: 'AL'
  },
  {
    name: 'Tortora',
    code: 'L305',
    province: 'CS'
  },
  {
    name: 'Tortorella',
    code: 'L306',
    province: 'SA'
  },
  {
    name: 'Tortoreto',
    code: 'L307',
    province: 'TE'
  },
  {
    name: 'Tortorici',
    code: 'L308',
    province: 'ME'
  },
  {
    name: 'Torviscosa',
    code: 'L309',
    province: 'UD'
  },
  {
    name: 'Tuscania',
    code: 'L310',
    province: 'VT'
  },
  {
    name: 'Toscolano-Maderno',
    code: 'L312',
    province: 'BS'
  },
  {
    name: 'Tossicia',
    code: 'L314',
    province: 'TE'
  },
  {
    name: 'Tovo San Giacomo',
    code: 'L315',
    province: 'SV'
  },
  {
    name: "Tovo di Sant'Agata",
    code: 'L316',
    province: 'SO'
  },
  {
    name: 'Trabia',
    code: 'L317',
    province: 'PA'
  },
  {
    name: 'Tradate',
    code: 'L319',
    province: 'VA'
  },
  {
    name: 'Tramatza',
    code: 'L321',
    province: 'OR'
  },
  {
    name: 'Trambileno',
    code: 'L322',
    province: 'TN'
  },
  {
    name: 'Tramonti',
    code: 'L323',
    province: 'SA'
  },
  {
    name: 'Tramonti di Sopra',
    code: 'L324',
    province: 'PN'
  },
  {
    name: 'Tramonti di Sotto',
    code: 'L325',
    province: 'PN'
  },
  {
    name: 'Tramutola',
    code: 'L326',
    province: 'PZ'
  },
  {
    name: 'Trana',
    code: 'L327',
    province: 'TO'
  },
  {
    name: 'Trani',
    code: 'L328',
    province: 'BT'
  },
  {
    name: 'Traona',
    code: 'L330',
    province: 'SO'
  },
  {
    name: 'Trapani',
    code: 'L331',
    province: 'TP'
  },
  {
    name: 'Trappeto',
    code: 'L332',
    province: 'PA'
  },
  {
    name: 'Trarego Viggiona',
    code: 'L333',
    province: 'VB'
  },
  {
    name: 'Trasacco',
    code: 'L334',
    province: 'AQ'
  },
  {
    name: 'Trasaghis',
    code: 'L335',
    province: 'UD'
  },
  {
    name: 'Trasquera',
    code: 'L336',
    province: 'VB'
  },
  {
    name: 'Tratalias',
    code: 'L337',
    province: 'SU'
  },
  {
    name: 'Travagliato',
    code: 'L339',
    province: 'BS'
  },
  {
    name: 'Traves',
    code: 'L340',
    province: 'TO'
  },
  {
    name: 'Travedona-Monate',
    code: 'L342',
    province: 'VA'
  },
  {
    name: 'Traversella',
    code: 'L345',
    province: 'TO'
  },
  {
    name: 'Traversetolo',
    code: 'L346',
    province: 'PR'
  },
  {
    name: 'Travesio',
    code: 'L347',
    province: 'PN'
  },
  {
    name: 'Travo',
    code: 'L348',
    province: 'PC'
  },
  {
    name: 'Trebaseleghe',
    code: 'L349',
    province: 'PD'
  },
  {
    name: 'Trebisacce',
    code: 'L353',
    province: 'CS'
  },
  {
    name: 'Trecastagni',
    code: 'L355',
    province: 'CT'
  },
  {
    name: 'Trecate',
    code: 'L356',
    province: 'NO'
  },
  {
    name: 'Trecchina',
    code: 'L357',
    province: 'PZ'
  },
  {
    name: 'Trecenta',
    code: 'L359',
    province: 'RO'
  },
  {
    name: 'Tredozio',
    code: 'L361',
    province: 'FC'
  },
  {
    name: 'Treglio',
    code: 'L363',
    province: 'CH'
  },
  {
    name: 'Tregnago',
    code: 'L364',
    province: 'VR'
  },
  {
    name: 'Treia',
    code: 'L366',
    province: 'MC'
  },
  {
    name: 'Treiso',
    code: 'L367',
    province: 'CN'
  },
  {
    name: 'Tremestieri Etneo',
    code: 'L369',
    province: 'CT'
  },
  {
    name: 'Tremosine sul Garda',
    code: 'L372',
    province: 'BS'
  },
  {
    name: 'Trentinara',
    code: 'L377',
    province: 'SA'
  },
  {
    name: 'Trento',
    code: 'L378',
    province: 'TN'
  },
  {
    name: 'Trentola Ducenta',
    code: 'L379',
    province: 'CE'
  },
  {
    name: 'Trenzano',
    code: 'L380',
    province: 'BS'
  },
  {
    name: 'Treppo Grande',
    code: 'L382',
    province: 'UD'
  },
  {
    name: 'Trepuzzi',
    code: 'L383',
    province: 'LE'
  },
  {
    name: 'Trequanda',
    code: 'L384',
    province: 'SI'
  },
  {
    name: 'Tresana',
    code: 'L386',
    province: 'MS'
  },
  {
    name: 'Trescore Balneario',
    code: 'L388',
    province: 'BG'
  },
  {
    name: 'Trescore Cremasco',
    code: 'L389',
    province: 'CR'
  },
  {
    name: 'Tresivio',
    code: 'L392',
    province: 'SO'
  },
  {
    name: 'Tresnuraghes',
    code: 'L393',
    province: 'OR'
  },
  {
    name: 'Trevenzuolo',
    code: 'L396',
    province: 'VR'
  },
  {
    name: 'Trevi',
    code: 'L397',
    province: 'PG'
  },
  {
    name: 'Trevi nel Lazio',
    code: 'L398',
    province: 'FR'
  },
  {
    name: 'Trevico',
    code: 'L399',
    province: 'AV'
  },
  {
    name: 'Treviglio',
    code: 'L400',
    province: 'BG'
  },
  {
    name: 'Trevignano Romano',
    code: 'L401',
    province: 'RM'
  },
  {
    name: 'Trevignano',
    code: 'L402',
    province: 'TV'
  },
  {
    name: 'Treville',
    code: 'L403',
    province: 'AL'
  },
  {
    name: 'Treviolo',
    code: 'L404',
    province: 'BG'
  },
  {
    name: 'Treviso Bresciano',
    code: 'L406',
    province: 'BS'
  },
  {
    name: 'Treviso',
    code: 'L407',
    province: 'TV'
  },
  {
    name: 'Trezzano Rosa',
    code: 'L408',
    province: 'MI'
  },
  {
    name: 'Trezzano sul Naviglio',
    code: 'L409',
    province: 'MI'
  },
  {
    name: 'Trezzo Tinella',
    code: 'L410',
    province: 'CN'
  },
  {
    name: "Trezzo sull'Adda",
    code: 'L411',
    province: 'MI'
  },
  {
    name: 'Trezzone',
    code: 'L413',
    province: 'CO'
  },
  {
    name: 'Tribano',
    code: 'L414',
    province: 'PD'
  },
  {
    name: 'Tribiano',
    code: 'L415',
    province: 'MI'
  },
  {
    name: 'Tribogna',
    code: 'L416',
    province: 'GE'
  },
  {
    name: 'Tricarico',
    code: 'L418',
    province: 'MT'
  },
  {
    name: 'Tricase',
    code: 'L419',
    province: 'LE'
  },
  {
    name: 'Tricerro',
    code: 'L420',
    province: 'VC'
  },
  {
    name: 'Tricesimo',
    code: 'L421',
    province: 'UD'
  },
  {
    name: 'Triei',
    code: 'L423',
    province: 'NU'
  },
  {
    name: 'Trieste',
    code: 'L424',
    province: 'TS'
  },
  {
    name: 'Triggiano',
    code: 'L425',
    province: 'BA'
  },
  {
    name: 'Trigolo',
    code: 'L426',
    province: 'CR'
  },
  {
    name: 'Trinità',
    code: 'L427',
    province: 'CN'
  },
  {
    name: "Trinità d'Agultu e Vignola",
    code: 'L428',
    province: 'SS'
  },
  {
    name: 'Trino',
    code: 'L429',
    province: 'VC'
  },
  {
    name: 'Triora',
    code: 'L430',
    province: 'IM'
  },
  {
    name: 'Tripi',
    code: 'L431',
    province: 'ME'
  },
  {
    name: 'Trisobbio',
    code: 'L432',
    province: 'AL'
  },
  {
    name: 'Trissino',
    code: 'L433',
    province: 'VI'
  },
  {
    name: 'Triuggio',
    code: 'L434',
    province: 'MB'
  },
  {
    name: 'Trivento',
    code: 'L435',
    province: 'CB'
  },
  {
    name: 'Trivigliano',
    code: 'L437',
    province: 'FR'
  },
  {
    name: 'Trivignano Udinese',
    code: 'L438',
    province: 'UD'
  },
  {
    name: 'Trivigno',
    code: 'L439',
    province: 'PZ'
  },
  {
    name: 'Trivolzio',
    code: 'L440',
    province: 'PV'
  },
  {
    name: 'Trodena nel parco naturale/Truden im Naturpark',
    italianName: 'Trodena nel parco naturale',
    foreignName: 'Truden im Naturpark',
    code: 'L444',
    province: 'BZ'
  },
  {
    name: 'Trofarello',
    code: 'L445',
    province: 'TO'
  },
  {
    name: 'Troia',
    code: 'L447',
    province: 'FG'
  },
  {
    name: 'Troina',
    code: 'L448',
    province: 'EN'
  },
  {
    name: 'Tromello',
    code: 'L449',
    province: 'PV'
  },
  {
    name: 'Trontano',
    code: 'L450',
    province: 'VB'
  },
  {
    name: 'Tronzano Vercellese',
    code: 'L451',
    province: 'VC'
  },
  {
    name: 'Tropea',
    code: 'L452',
    province: 'VV'
  },
  {
    name: 'Trovo',
    code: 'L453',
    province: 'PV'
  },
  {
    name: 'Truccazzano',
    code: 'L454',
    province: 'MI'
  },
  {
    name: 'Tubre/Taufers im Münstertal',
    italianName: 'Tubre',
    foreignName: 'Taufers im Münstertal',
    code: 'L455',
    province: 'BZ'
  },
  {
    name: 'Tufara',
    code: 'L458',
    province: 'CB'
  },
  {
    name: 'Tufillo',
    code: 'L459',
    province: 'CH'
  },
  {
    name: 'Tufino',
    code: 'L460',
    province: 'NA'
  },
  {
    name: 'Tufo',
    code: 'L461',
    province: 'AV'
  },
  {
    name: 'Tuglie',
    code: 'L462',
    province: 'LE'
  },
  {
    name: 'Tuili',
    code: 'L463',
    province: 'SU'
  },
  {
    name: 'Tula',
    code: 'L464',
    province: 'SS'
  },
  {
    name: 'Tuoro sul Trasimeno',
    code: 'L466',
    province: 'PG'
  },
  {
    name: 'Valvestino',
    code: 'L468',
    province: 'BS'
  },
  {
    name: 'Turano Lodigiano',
    code: 'L469',
    province: 'LO'
  },
  {
    name: 'Turate',
    code: 'L470',
    province: 'CO'
  },
  {
    name: 'Turbigo',
    code: 'L471',
    province: 'MI'
  },
  {
    name: 'Turi',
    code: 'L472',
    province: 'BA'
  },
  {
    name: 'Turri',
    code: 'L473',
    province: 'SU'
  },
  {
    name: 'Turriaco',
    code: 'L474',
    province: 'GO'
  },
  {
    name: 'Turrivalignani',
    code: 'L475',
    province: 'PE'
  },
  {
    name: 'Tursi',
    code: 'L477',
    province: 'MT'
  },
  {
    name: 'Tusa',
    code: 'L478',
    province: 'ME'
  },
  {
    name: 'Uboldo',
    code: 'L480',
    province: 'VA'
  },
  {
    name: 'Ucria',
    code: 'L482',
    province: 'ME'
  },
  {
    name: 'Udine',
    code: 'L483',
    province: 'UD'
  },
  {
    name: 'Ugento',
    code: 'L484',
    province: 'LE'
  },
  {
    name: 'Uggiano la Chiesa',
    code: 'L485',
    province: 'LE'
  },
  {
    name: 'Ulà Tirso',
    code: 'L488',
    province: 'OR'
  },
  {
    name: 'Ulassai',
    code: 'L489',
    province: 'NU'
  },
  {
    name: 'Ultimo/Ulten',
    italianName: 'Ultimo',
    foreignName: 'Ulten',
    code: 'L490',
    province: 'BZ'
  },
  {
    name: 'Umbriatico',
    code: 'L492',
    province: 'KR'
  },
  {
    name: "Urago d'Oglio",
    code: 'L494',
    province: 'BS'
  },
  {
    name: 'Uras',
    code: 'L496',
    province: 'OR'
  },
  {
    name: 'Urbana',
    code: 'L497',
    province: 'PD'
  },
  {
    name: 'Urbania',
    code: 'L498',
    province: 'PU'
  },
  {
    name: 'Urbe',
    code: 'L499',
    province: 'SV'
  },
  {
    name: 'Urbino',
    code: 'L500',
    province: 'PU'
  },
  {
    name: 'Urbisaglia',
    code: 'L501',
    province: 'MC'
  },
  {
    name: 'Urgnano',
    code: 'L502',
    province: 'BG'
  },
  {
    name: 'Uri',
    code: 'L503',
    province: 'SS'
  },
  {
    name: 'Ururi',
    code: 'L505',
    province: 'CB'
  },
  {
    name: 'Urzulei',
    code: 'L506',
    province: 'NU'
  },
  {
    name: 'Uscio',
    code: 'L507',
    province: 'GE'
  },
  {
    name: 'Usellus',
    code: 'L508',
    province: 'OR'
  },
  {
    name: 'Usini',
    code: 'L509',
    province: 'SS'
  },
  {
    name: 'Usmate Velate',
    code: 'L511',
    province: 'MB'
  },
  {
    name: 'Ussana',
    code: 'L512',
    province: 'SU'
  },
  {
    name: 'Ussaramanna',
    code: 'L513',
    province: 'SU'
  },
  {
    name: 'Ussassai',
    code: 'L514',
    province: 'NU'
  },
  {
    name: 'Usseaux',
    code: 'L515',
    province: 'TO'
  },
  {
    name: 'Usseglio',
    code: 'L516',
    province: 'TO'
  },
  {
    name: 'Ussita',
    code: 'L517',
    province: 'MC'
  },
  {
    name: 'Ustica',
    code: 'L519',
    province: 'PA'
  },
  {
    name: 'Uta',
    code: 'L521',
    province: 'CA'
  },
  {
    name: 'Uzzano',
    code: 'L522',
    province: 'PT'
  },
  {
    name: 'Vaccarizzo Albanese',
    code: 'L524',
    province: 'CS'
  },
  {
    name: 'Vacone',
    code: 'L525',
    province: 'RI'
  },
  {
    name: 'Vacri',
    code: 'L526',
    province: 'CH'
  },
  {
    name: 'Vadena/Pfatten',
    italianName: 'Vadena',
    foreignName: 'Pfatten',
    code: 'L527',
    province: 'BZ'
  },
  {
    name: 'Vado Ligure',
    code: 'L528',
    province: 'SV'
  },
  {
    name: 'Vaglia',
    code: 'L529',
    province: 'FI'
  },
  {
    name: 'Vaglio Serra',
    code: 'L531',
    province: 'AT'
  },
  {
    name: 'Vaglio Basilicata',
    code: 'L532',
    province: 'PZ'
  },
  {
    name: 'Vagli Sotto',
    code: 'L533',
    province: 'LU'
  },
  {
    name: 'Vaiano Cremasco',
    code: 'L535',
    province: 'CR'
  },
  {
    name: 'Vaiano',
    code: 'L537',
    province: 'PO'
  },
  {
    name: 'Vaie',
    code: 'L538',
    province: 'TO'
  },
  {
    name: 'Vailate',
    code: 'L539',
    province: 'CR'
  },
  {
    name: 'Vairano Patenora',
    code: 'L540',
    province: 'CE'
  },
  {
    name: 'Valbondione',
    code: 'L544',
    province: 'BG'
  },
  {
    name: 'Valbrembo',
    code: 'L545',
    province: 'BG'
  },
  {
    name: 'Valbrevenna',
    code: 'L546',
    province: 'GE'
  },
  {
    name: 'Valbrona',
    code: 'L547',
    province: 'CO'
  },
  {
    name: 'Valdagno',
    code: 'L551',
    province: 'VI'
  },
  {
    name: 'Valdaora/Olang',
    italianName: 'Valdaora',
    foreignName: 'Olang',
    code: 'L552',
    province: 'BZ'
  },
  {
    name: 'Valdastico',
    code: 'L554',
    province: 'VI'
  },
  {
    name: 'Val della Torre',
    code: 'L555',
    province: 'TO'
  },
  {
    name: 'Valdengo',
    code: 'L556',
    province: 'BI'
  },
  {
    name: 'Valdidentro',
    code: 'L557',
    province: 'SO'
  },
  {
    name: 'Valdieri',
    code: 'L558',
    province: 'CN'
  },
  {
    name: 'Valdina',
    code: 'L561',
    province: 'ME'
  },
  {
    name: 'Val di Nizza',
    code: 'L562',
    province: 'PV'
  },
  {
    name: 'Valdisotto',
    code: 'L563',
    province: 'SO'
  },
  {
    name: 'Val di Vizze/Pfitsch',
    italianName: 'Val di Vizze',
    foreignName: 'Pfitsch',
    code: 'L564',
    province: 'BZ'
  },
  {
    name: 'Valdobbiadene',
    code: 'L565',
    province: 'TV'
  },
  {
    name: 'Valduggia',
    code: 'L566',
    province: 'VC'
  },
  {
    name: 'Valeggio sul Mincio',
    code: 'L567',
    province: 'VR'
  },
  {
    name: 'Valeggio',
    code: 'L568',
    province: 'PV'
  },
  {
    name: 'Valentano',
    code: 'L569',
    province: 'VT'
  },
  {
    name: 'Valenza',
    code: 'L570',
    province: 'AL'
  },
  {
    name: 'Valenzano',
    code: 'L571',
    province: 'BA'
  },
  {
    name: 'Valera Fratta',
    code: 'L572',
    province: 'LO'
  },
  {
    name: 'Valfabbrica',
    code: 'L573',
    province: 'PG'
  },
  {
    name: 'Valfenera',
    code: 'L574',
    province: 'AT'
  },
  {
    name: 'Valfloriana',
    code: 'L575',
    province: 'TN'
  },
  {
    name: 'Valfurva',
    code: 'L576',
    province: 'SO'
  },
  {
    name: 'Valganna',
    code: 'L577',
    province: 'VA'
  },
  {
    name: 'Valgioie',
    code: 'L578',
    province: 'TO'
  },
  {
    name: 'Valgoglio',
    code: 'L579',
    province: 'BG'
  },
  {
    name: 'Valgrana',
    code: 'L580',
    province: 'CN'
  },
  {
    name: 'Valgreghentino',
    code: 'L581',
    province: 'LC'
  },
  {
    name: 'Valgrisenche',
    code: 'L582',
    province: 'AO'
  },
  {
    name: 'Valguarnera Caropepe',
    code: 'L583',
    province: 'EN'
  },
  {
    name: 'Vallada Agordina',
    code: 'L584',
    province: 'BL'
  },
  {
    name: 'Vallanzengo',
    code: 'L586',
    province: 'BI'
  },
  {
    name: 'Vallarsa',
    code: 'L588',
    province: 'TN'
  },
  {
    name: 'Vallata',
    code: 'L589',
    province: 'AV'
  },
  {
    name: 'Valle di Cadore',
    code: 'L590',
    province: 'BL'
  },
  {
    name: 'Valle di Maddaloni',
    code: 'L591',
    province: 'CE'
  },
  {
    name: 'Valle Lomellina',
    code: 'L593',
    province: 'PV'
  },
  {
    name: 'Valle Agricola',
    code: 'L594',
    province: 'CE'
  },
  {
    name: 'Valle Aurina/Ahrntal',
    italianName: 'Valle Aurina',
    foreignName: 'Ahrntal',
    code: 'L595',
    province: 'BZ'
  },
  {
    name: 'Vallebona',
    code: 'L596',
    province: 'IM'
  },
  {
    name: 'Valle Castellana',
    code: 'L597',
    province: 'TE'
  },
  {
    name: 'Vallecorsa',
    code: 'L598',
    province: 'FR'
  },
  {
    name: 'Vallecrosia',
    code: 'L599',
    province: 'IM'
  },
  {
    name: 'Valle di Casies/Gsies',
    italianName: 'Valle di Casies',
    foreignName: 'Gsies',
    code: 'L601',
    province: 'BZ'
  },
  {
    name: 'Valledolmo',
    code: 'L603',
    province: 'PA'
  },
  {
    name: 'Valledoria',
    code: 'L604',
    province: 'SS'
  },
  {
    name: 'Vallemaio',
    code: 'L605',
    province: 'FR'
  },
  {
    name: 'Vallelonga',
    code: 'L607',
    province: 'VV'
  },
  {
    name: 'Vallelunga Pratameno',
    code: 'L609',
    province: 'CL'
  },
  {
    name: 'Vallepietra',
    code: 'L611',
    province: 'RM'
  },
  {
    name: 'Vallerano',
    code: 'L612',
    province: 'VT'
  },
  {
    name: 'Vallermosa',
    code: 'L613',
    province: 'SU'
  },
  {
    name: 'Vallerotonda',
    code: 'L614',
    province: 'FR'
  },
  {
    name: 'Vallesaccarda',
    code: 'L616',
    province: 'AV'
  },
  {
    name: 'Valle Salimbene',
    code: 'L617',
    province: 'PV'
  },
  {
    name: 'Valle San Nicolao',
    code: 'L620',
    province: 'BI'
  },
  {
    name: 'Valleve',
    code: 'L623',
    province: 'BG'
  },
  {
    name: 'Valli del Pasubio',
    code: 'L624',
    province: 'VI'
  },
  {
    name: 'Vallinfreda',
    code: 'L625',
    province: 'RM'
  },
  {
    name: 'Vallio Terme',
    code: 'L626',
    province: 'BS'
  },
  {
    name: 'Vallo di Nera',
    code: 'L627',
    province: 'PG'
  },
  {
    name: 'Vallo della Lucania',
    code: 'L628',
    province: 'SA'
  },
  {
    name: 'Vallo Torinese',
    code: 'L629',
    province: 'TO'
  },
  {
    name: 'Valloriate',
    code: 'L631',
    province: 'CN'
  },
  {
    name: 'Valmacca',
    code: 'L633',
    province: 'AL'
  },
  {
    name: 'Valmadrera',
    code: 'L634',
    province: 'LC'
  },
  {
    name: 'Val Masino',
    code: 'L638',
    province: 'SO'
  },
  {
    name: 'Valmontone',
    code: 'L639',
    province: 'RM'
  },
  {
    name: 'Valmorea',
    code: 'L640',
    province: 'CO'
  },
  {
    name: 'Valmozzola',
    code: 'L641',
    province: 'PR'
  },
  {
    name: 'Valnegra',
    code: 'L642',
    province: 'BG'
  },
  {
    name: 'Valpelline',
    code: 'L643',
    province: 'AO'
  },
  {
    name: 'Valperga',
    code: 'L644',
    province: 'TO'
  },
  {
    name: 'Valsavarenche',
    code: 'L647',
    province: 'AO'
  },
  {
    name: 'Valstrona',
    code: 'L651',
    province: 'VB'
  },
  {
    name: 'Valtopina',
    code: 'L653',
    province: 'PG'
  },
  {
    name: 'Valtournenche',
    code: 'L654',
    province: 'AO'
  },
  {
    name: 'Valtorta',
    code: 'L655',
    province: 'BG'
  },
  {
    name: 'Valva',
    code: 'L656',
    province: 'SA'
  },
  {
    name: 'Valverde',
    code: 'L658',
    province: 'CT'
  },
  {
    name: 'Vandoies/Vintl',
    italianName: 'Vandoies',
    foreignName: 'Vintl',
    code: 'L660',
    province: 'BZ'
  },
  {
    name: 'Vanzaghello',
    code: 'L664',
    province: 'MI'
  },
  {
    name: 'Vanzago',
    code: 'L665',
    province: 'MI'
  },
  {
    name: 'Vanzone con San Carlo',
    code: 'L666',
    province: 'VB'
  },
  {
    name: "Vaprio d'Adda",
    code: 'L667',
    province: 'MI'
  },
  {
    name: "Vaprio d'Agogna",
    code: 'L668',
    province: 'NO'
  },
  {
    name: 'Varallo',
    code: 'L669',
    province: 'VC'
  },
  {
    name: 'Varallo Pombia',
    code: 'L670',
    province: 'NO'
  },
  {
    name: 'Varano Borghi',
    code: 'L671',
    province: 'VA'
  },
  {
    name: "Varano de' Melegari",
    code: 'L672',
    province: 'PR'
  },
  {
    name: 'Varapodio',
    code: 'L673',
    province: 'RC'
  },
  {
    name: 'Varazze',
    code: 'L675',
    province: 'SV'
  },
  {
    name: 'Varco Sabino',
    code: 'L676',
    province: 'RI'
  },
  {
    name: 'Varedo',
    code: 'L677',
    province: 'MB'
  },
  {
    name: 'Varenna',
    code: 'L680',
    province: 'LC'
  },
  {
    name: 'Varese Ligure',
    code: 'L681',
    province: 'SP'
  },
  {
    name: 'Varese',
    code: 'L682',
    province: 'VA'
  },
  {
    name: 'Varisella',
    code: 'L685',
    province: 'TO'
  },
  {
    name: 'Varmo',
    code: 'L686',
    province: 'UD'
  },
  {
    name: 'Varna/Vahrn',
    italianName: 'Varna',
    foreignName: 'Vahrn',
    code: 'L687',
    province: 'BZ'
  },
  {
    name: 'Varsi',
    code: 'L689',
    province: 'PR'
  },
  {
    name: 'Varzi',
    code: 'L690',
    province: 'PV'
  },
  {
    name: 'Varzo',
    code: 'L691',
    province: 'VB'
  },
  {
    name: 'Vasia',
    code: 'L693',
    province: 'IM'
  },
  {
    name: 'Vastogirardi',
    code: 'L696',
    province: 'IS'
  },
  {
    name: 'Vauda Canavese',
    code: 'L698',
    province: 'TO'
  },
  {
    name: 'Vazzano',
    code: 'L699',
    province: 'VV'
  },
  {
    name: 'Vazzola',
    code: 'L700',
    province: 'TV'
  },
  {
    name: 'Vecchiano',
    code: 'L702',
    province: 'PI'
  },
  {
    name: 'Vedano Olona',
    code: 'L703',
    province: 'VA'
  },
  {
    name: 'Vedano al Lambro',
    code: 'L704',
    province: 'MB'
  },
  {
    name: 'Vedelago',
    code: 'L706',
    province: 'TV'
  },
  {
    name: 'Vedeseta',
    code: 'L707',
    province: 'BG'
  },
  {
    name: 'Veduggio con Colzano',
    code: 'L709',
    province: 'MB'
  },
  {
    name: 'Veggiano',
    code: 'L710',
    province: 'PD'
  },
  {
    name: 'Veglie',
    code: 'L711',
    province: 'LE'
  },
  {
    name: 'Veglio',
    code: 'L712',
    province: 'BI'
  },
  {
    name: 'Vejano',
    code: 'L713',
    province: 'VT'
  },
  {
    name: 'Veleso',
    code: 'L715',
    province: 'CO'
  },
  {
    name: 'Velezzo Lomellina',
    code: 'L716',
    province: 'PV'
  },
  {
    name: 'Velletri',
    code: 'L719',
    province: 'RM'
  },
  {
    name: 'Vellezzo Bellini',
    code: 'L720',
    province: 'PV'
  },
  {
    name: 'Velo Veronese',
    code: 'L722',
    province: 'VR'
  },
  {
    name: "Velo d'Astico",
    code: 'L723',
    province: 'VI'
  },
  {
    name: 'Velturno/Feldthurns',
    italianName: 'Velturno',
    foreignName: 'Feldthurns',
    code: 'L724',
    province: 'BZ'
  },
  {
    name: 'Venafro',
    code: 'L725',
    province: 'IS'
  },
  {
    name: 'Venaus',
    code: 'L726',
    province: 'TO'
  },
  {
    name: 'Venaria Reale',
    code: 'L727',
    province: 'TO'
  },
  {
    name: 'Venarotta',
    code: 'L728',
    province: 'AP'
  },
  {
    name: 'Venasca',
    code: 'L729',
    province: 'CN'
  },
  {
    name: 'Vendone',
    code: 'L730',
    province: 'SV'
  },
  {
    name: 'Venegono Inferiore',
    code: 'L733',
    province: 'VA'
  },
  {
    name: 'Venegono Superiore',
    code: 'L734',
    province: 'VA'
  },
  {
    name: 'Venetico',
    code: 'L735',
    province: 'ME'
  },
  {
    name: 'Venezia',
    code: 'L736',
    province: 'VE'
  },
  {
    name: 'Veniano',
    code: 'L737',
    province: 'CO'
  },
  {
    name: 'Venosa',
    code: 'L738',
    province: 'PZ'
  },
  {
    name: 'Venticano',
    code: 'L739',
    province: 'AV'
  },
  {
    name: 'Ventimiglia di Sicilia',
    code: 'L740',
    province: 'PA'
  },
  {
    name: 'Ventimiglia',
    code: 'L741',
    province: 'IM'
  },
  {
    name: 'Ventotene',
    code: 'L742',
    province: 'LT'
  },
  {
    name: 'Venzone',
    code: 'L743',
    province: 'UD'
  },
  {
    name: 'Verano Brianza',
    code: 'L744',
    province: 'MB'
  },
  {
    name: 'Verano/Vöran',
    italianName: 'Verano',
    foreignName: 'Vöran',
    code: 'L745',
    province: 'BZ'
  },
  {
    name: 'Verbania',
    code: 'L746',
    province: 'VB'
  },
  {
    name: 'Verbicaro',
    code: 'L747',
    province: 'CS'
  },
  {
    name: 'Vercana',
    code: 'L748',
    province: 'CO'
  },
  {
    name: 'Verceia',
    code: 'L749',
    province: 'SO'
  },
  {
    name: 'Vercelli',
    code: 'L750',
    province: 'VC'
  },
  {
    name: 'Vercurago',
    code: 'L751',
    province: 'LC'
  },
  {
    name: 'Verdellino',
    code: 'L752',
    province: 'BG'
  },
  {
    name: 'Verdello',
    code: 'L753',
    province: 'BG'
  },
  {
    name: 'Verduno',
    code: 'L758',
    province: 'CN'
  },
  {
    name: 'Vergato',
    code: 'L762',
    province: 'BO'
  },
  {
    name: 'Verghereto',
    code: 'L764',
    province: 'FC'
  },
  {
    name: 'Vergiate',
    code: 'L765',
    province: 'VA'
  },
  {
    name: 'Vermiglio',
    code: 'L769',
    province: 'TN'
  },
  {
    name: 'Vernante',
    code: 'L771',
    province: 'CN'
  },
  {
    name: 'Vernasca',
    code: 'L772',
    province: 'PC'
  },
  {
    name: 'Vernate',
    code: 'L773',
    province: 'MI'
  },
  {
    name: 'Vernazza',
    code: 'L774',
    province: 'SP'
  },
  {
    name: 'Vernio',
    code: 'L775',
    province: 'PO'
  },
  {
    name: 'Vernole',
    code: 'L776',
    province: 'LE'
  },
  {
    name: 'Verolanuova',
    code: 'L777',
    province: 'BS'
  },
  {
    name: 'Verolavecchia',
    code: 'L778',
    province: 'BS'
  },
  {
    name: 'Verolengo',
    code: 'L779',
    province: 'TO'
  },
  {
    name: 'Veroli',
    code: 'L780',
    province: 'FR'
  },
  {
    name: 'Verona',
    code: 'L781',
    province: 'VR'
  },
  {
    name: 'Verrayes',
    code: 'L783',
    province: 'AO'
  },
  {
    name: 'Verretto',
    code: 'L784',
    province: 'PV'
  },
  {
    name: 'Verrone',
    code: 'L785',
    province: 'BI'
  },
  {
    name: 'Verrua Savoia',
    code: 'L787',
    province: 'TO'
  },
  {
    name: 'Verrua Po',
    code: 'L788',
    province: 'PV'
  },
  {
    name: 'Vertemate con Minoprio',
    code: 'L792',
    province: 'CO'
  },
  {
    name: 'Vertova',
    code: 'L795',
    province: 'BG'
  },
  {
    name: 'Verucchio',
    code: 'L797',
    province: 'RN'
  },
  {
    name: 'Vervio',
    code: 'L799',
    province: 'SO'
  },
  {
    name: 'Verzegnis',
    code: 'L801',
    province: 'UD'
  },
  {
    name: 'Verzino',
    code: 'L802',
    province: 'KR'
  },
  {
    name: 'Verzuolo',
    code: 'L804',
    province: 'CN'
  },
  {
    name: 'Vescovana',
    code: 'L805',
    province: 'PD'
  },
  {
    name: 'Vescovato',
    code: 'L806',
    province: 'CR'
  },
  {
    name: 'Vesime',
    code: 'L807',
    province: 'AT'
  },
  {
    name: 'Vespolate',
    code: 'L808',
    province: 'NO'
  },
  {
    name: 'Vessalico',
    code: 'L809',
    province: 'IM'
  },
  {
    name: 'Vestenanova',
    code: 'L810',
    province: 'VR'
  },
  {
    name: 'Vestignè',
    code: 'L811',
    province: 'TO'
  },
  {
    name: 'Vestone',
    code: 'L812',
    province: 'BS'
  },
  {
    name: 'Vetralla',
    code: 'L814',
    province: 'VT'
  },
  {
    name: 'Vetto',
    code: 'L815',
    province: 'RE'
  },
  {
    name: "Vezza d'Oglio",
    code: 'L816',
    province: 'BS'
  },
  {
    name: "Vezza d'Alba",
    code: 'L817',
    province: 'CN'
  },
  {
    name: 'Vezzano Ligure',
    code: 'L819',
    province: 'SP'
  },
  {
    name: 'Vezzano sul Crostolo',
    code: 'L820',
    province: 'RE'
  },
  {
    name: 'Vezzi Portio',
    code: 'L823',
    province: 'SV'
  },
  {
    name: 'Viadana',
    code: 'L826',
    province: 'MN'
  },
  {
    name: 'Viadanica',
    code: 'L827',
    province: 'BG'
  },
  {
    name: 'Viagrande',
    code: 'L828',
    province: 'CT'
  },
  {
    name: 'Viale',
    code: 'L829',
    province: 'AT'
  },
  {
    name: 'Vialfrè',
    code: 'L830',
    province: 'TO'
  },
  {
    name: 'Viano',
    code: 'L831',
    province: 'RE'
  },
  {
    name: 'Viareggio',
    code: 'L833',
    province: 'LU'
  },
  {
    name: 'Viarigi',
    code: 'L834',
    province: 'AT'
  },
  {
    name: 'Vibonati',
    code: 'L835',
    province: 'SA'
  },
  {
    name: 'Vicalvi',
    code: 'L836',
    province: 'FR'
  },
  {
    name: 'Vicari',
    code: 'L837',
    province: 'PA'
  },
  {
    name: 'Vicchio',
    code: 'L838',
    province: 'FI'
  },
  {
    name: 'Vicenza',
    code: 'L840',
    province: 'VI'
  },
  {
    name: 'Vicoforte',
    code: 'L841',
    province: 'CN'
  },
  {
    name: 'Vico del Gargano',
    code: 'L842',
    province: 'FG'
  },
  {
    name: 'Vico nel Lazio',
    code: 'L843',
    province: 'FR'
  },
  {
    name: 'Villa Literno',
    code: 'L844',
    province: 'CE'
  },
  {
    name: 'Vico Equense',
    code: 'L845',
    province: 'NA'
  },
  {
    name: 'Vicoli',
    code: 'L846',
    province: 'PE'
  },
  {
    name: 'Vicolungo',
    code: 'L847',
    province: 'NO'
  },
  {
    name: 'Ziano Piacentino',
    code: 'L848',
    province: 'PC'
  },
  {
    name: 'Vicopisano',
    code: 'L850',
    province: 'PI'
  },
  {
    name: 'Vicovaro',
    code: 'L851',
    province: 'RM'
  },
  {
    name: 'Vidigulfo',
    code: 'L854',
    province: 'PV'
  },
  {
    name: 'Vidor',
    code: 'L856',
    province: 'TV'
  },
  {
    name: 'Vidracco',
    code: 'L857',
    province: 'TO'
  },
  {
    name: 'Vieste',
    code: 'L858',
    province: 'FG'
  },
  {
    name: 'Vietri di Potenza',
    code: 'L859',
    province: 'PZ'
  },
  {
    name: 'Vietri sul Mare',
    code: 'L860',
    province: 'SA'
  },
  {
    name: 'Vigano San Martino',
    code: 'L865',
    province: 'BG'
  },
  {
    name: 'Viganò',
    code: 'L866',
    province: 'LC'
  },
  {
    name: 'Vigarano Mainarda',
    code: 'L868',
    province: 'FE'
  },
  {
    name: 'Vigasio',
    code: 'L869',
    province: 'VR'
  },
  {
    name: 'Vigevano',
    code: 'L872',
    province: 'PV'
  },
  {
    name: 'Viggianello',
    code: 'L873',
    province: 'PZ'
  },
  {
    name: 'Viggiano',
    code: 'L874',
    province: 'PZ'
  },
  {
    name: 'Viggiù',
    code: 'L876',
    province: 'VA'
  },
  {
    name: "Vigliano d'Asti",
    code: 'L879',
    province: 'AT'
  },
  {
    name: 'Vigliano Biellese',
    code: 'L880',
    province: 'BI'
  },
  {
    name: 'Vignale Monferrato',
    code: 'L881',
    province: 'AL'
  },
  {
    name: 'Vignanello',
    code: 'L882',
    province: 'VT'
  },
  {
    name: 'Vignate',
    code: 'L883',
    province: 'MI'
  },
  {
    name: 'Vignola',
    code: 'L885',
    province: 'MO'
  },
  {
    name: 'Vignola-Falesina',
    code: 'L886',
    province: 'TN'
  },
  {
    name: 'Vignole Borbera',
    code: 'L887',
    province: 'AL'
  },
  {
    name: 'Vignolo',
    code: 'L888',
    province: 'CN'
  },
  {
    name: 'Vignone',
    code: 'L889',
    province: 'VB'
  },
  {
    name: 'Vigo di Cadore',
    code: 'L890',
    province: 'BL'
  },
  {
    name: 'Vigodarzere',
    code: 'L892',
    province: 'PD'
  },
  {
    name: 'Vigolo',
    code: 'L894',
    province: 'BG'
  },
  {
    name: 'Vigolzone',
    code: 'L897',
    province: 'PC'
  },
  {
    name: 'Vigone',
    code: 'L898',
    province: 'TO'
  },
  {
    name: 'Vigonovo',
    code: 'L899',
    province: 'VE'
  },
  {
    name: 'Vigonza',
    code: 'L900',
    province: 'PD'
  },
  {
    name: 'Viguzzolo',
    code: 'L904',
    province: 'AL'
  },
  {
    name: 'Villa Santa Lucia',
    code: 'L905',
    province: 'FR'
  },
  {
    name: 'Villadossola',
    code: 'L906',
    province: 'VB'
  },
  {
    name: 'Villa di Chiavenna',
    code: 'L907',
    province: 'SO'
  },
  {
    name: 'Villa di Tirano',
    code: 'L908',
    province: 'SO'
  },
  {
    name: 'Villa Santina',
    code: 'L909',
    province: 'UD'
  },
  {
    name: 'Villa Bartolomea',
    code: 'L912',
    province: 'VR'
  },
  {
    name: 'Villa Basilica',
    code: 'L913',
    province: 'LU'
  },
  {
    name: 'Villabassa/Niederdorf',
    italianName: 'Villabassa',
    foreignName: 'Niederdorf',
    code: 'L915',
    province: 'BZ'
  },
  {
    name: 'Villabate',
    code: 'L916',
    province: 'PA'
  },
  {
    name: 'Villa Biscossi',
    code: 'L917',
    province: 'PV'
  },
  {
    name: 'Villa Carcina',
    code: 'L919',
    province: 'BS'
  },
  {
    name: 'Villa Castelli',
    code: 'L920',
    province: 'BR'
  },
  {
    name: 'Villa Celiera',
    code: 'L922',
    province: 'PE'
  },
  {
    name: 'Villachiara',
    code: 'L923',
    province: 'BS'
  },
  {
    name: 'Villacidro',
    code: 'L924',
    province: 'SU'
  },
  {
    name: 'Villa Collemandina',
    code: 'L926',
    province: 'LU'
  },
  {
    name: 'Villa Cortese',
    code: 'L928',
    province: 'MI'
  },
  {
    name: "Villa d'Adda",
    code: 'L929',
    province: 'BG'
  },
  {
    name: 'Villadeati',
    code: 'L931',
    province: 'AL'
  },
  {
    name: 'Villa del Bosco',
    code: 'L933',
    province: 'BI'
  },
  {
    name: 'Villa del Conte',
    code: 'L934',
    province: 'PD'
  },
  {
    name: 'Villa di Serio',
    code: 'L936',
    province: 'BG'
  },
  {
    name: 'Villa Estense',
    code: 'L937',
    province: 'PD'
  },
  {
    name: "Villa d'Ogna",
    code: 'L938',
    province: 'BG'
  },
  {
    name: 'Villadose',
    code: 'L939',
    province: 'RO'
  },
  {
    name: 'Villafalletto',
    code: 'L942',
    province: 'CN'
  },
  {
    name: 'Villa Faraldi',
    code: 'L943',
    province: 'IM'
  },
  {
    name: 'Villafranca Sicula',
    code: 'L944',
    province: 'AG'
  },
  {
    name: "Villafranca d'Asti",
    code: 'L945',
    province: 'AT'
  },
  {
    name: 'Villafranca in Lunigiana',
    code: 'L946',
    province: 'MS'
  },
  {
    name: 'Villafranca Padovana',
    code: 'L947',
    province: 'PD'
  },
  {
    name: 'Villafranca Piemonte',
    code: 'L948',
    province: 'TO'
  },
  {
    name: 'Villafranca di Verona',
    code: 'L949',
    province: 'VR'
  },
  {
    name: 'Villafranca Tirrena',
    code: 'L950',
    province: 'ME'
  },
  {
    name: 'Villafrati',
    code: 'L951',
    province: 'PA'
  },
  {
    name: 'Villaga',
    code: 'L952',
    province: 'VI'
  },
  {
    name: 'Villagrande Strisaili',
    code: 'L953',
    province: 'NU'
  },
  {
    name: 'Villa Guardia',
    code: 'L956',
    province: 'CO'
  },
  {
    name: 'Villa Lagarina',
    code: 'L957',
    province: 'TN'
  },
  {
    name: 'Villalago',
    code: 'L958',
    province: 'AQ'
  },
  {
    name: 'Villalba',
    code: 'L959',
    province: 'CL'
  },
  {
    name: 'Villalfonsina',
    code: 'L961',
    province: 'CH'
  },
  {
    name: 'Villalvernia',
    code: 'L963',
    province: 'AL'
  },
  {
    name: 'Villamagna',
    code: 'L964',
    province: 'CH'
  },
  {
    name: 'Villamaina',
    code: 'L965',
    province: 'AV'
  },
  {
    name: 'Villamar',
    code: 'L966',
    province: 'SU'
  },
  {
    name: 'Villamarzana',
    code: 'L967',
    province: 'RO'
  },
  {
    name: 'Villamassargia',
    code: 'L968',
    province: 'SU'
  },
  {
    name: 'Villa Minozzo',
    code: 'L969',
    province: 'RE'
  },
  {
    name: 'Villamiroglio',
    code: 'L970',
    province: 'AL'
  },
  {
    name: 'Villandro/Villanders',
    italianName: 'Villandro',
    foreignName: 'Villanders',
    code: 'L971',
    province: 'BZ'
  },
  {
    name: 'Villanova Monferrato',
    code: 'L972',
    province: 'AL'
  },
  {
    name: 'Villanova del Battista',
    code: 'L973',
    province: 'AV'
  },
  {
    name: 'Villanova Mondovì',
    code: 'L974',
    province: 'CN'
  },
  {
    name: "Villanova d'Albenga",
    code: 'L975',
    province: 'SV'
  },
  {
    name: 'Villanova del Sillaro',
    code: 'L977',
    province: 'LO'
  },
  {
    name: 'Villanova Biellese',
    code: 'L978',
    province: 'BI'
  },
  {
    name: 'Villanova di Camposampiero',
    code: 'L979',
    province: 'PD'
  },
  {
    name: "Villanova sull'Arda",
    code: 'L980',
    province: 'PC'
  },
  {
    name: 'Villeneuve',
    code: 'L981',
    province: 'AO'
  },
  {
    name: 'Villanova Canavese',
    code: 'L982',
    province: 'TO'
  },
  {
    name: "Villanova d'Ardenghi",
    code: 'L983',
    province: 'PV'
  },
  {
    name: "Villanova d'Asti",
    code: 'L984',
    province: 'AT'
  },
  {
    name: 'Villanova del Ghebbo',
    code: 'L985',
    province: 'RO'
  },
  {
    name: 'Villanovaforru',
    code: 'L986',
    province: 'SU'
  },
  {
    name: 'Villanovafranca',
    code: 'L987',
    province: 'SU'
  },
  {
    name: 'Villanova Marchesana',
    code: 'L988',
    province: 'RO'
  },
  {
    name: 'Villanova Monteleone',
    code: 'L989',
    province: 'SS'
  },
  {
    name: 'Villanova Solaro',
    code: 'L990',
    province: 'CN'
  },
  {
    name: 'Villanova Truschedu',
    code: 'L991',
    province: 'OR'
  },
  {
    name: 'Villanova Tulo',
    code: 'L992',
    province: 'SU'
  },
  {
    name: 'Villanterio',
    code: 'L994',
    province: 'PV'
  },
  {
    name: 'Villanuova sul Clisi',
    code: 'L995',
    province: 'BS'
  },
  {
    name: 'Villaputzu',
    code: 'L998',
    province: 'SU'
  },
  {
    name: 'Villar Dora',
    code: 'L999',
    province: 'TO'
  },
  {
    name: 'Villarbasse',
    code: 'M002',
    province: 'TO'
  },
  {
    name: 'Villarboit',
    code: 'M003',
    province: 'VC'
  },
  {
    name: 'Villareggia',
    code: 'M004',
    province: 'TO'
  },
  {
    name: 'Villar Focchiardo',
    code: 'M007',
    province: 'TO'
  },
  {
    name: 'Villaromagnano',
    code: 'M009',
    province: 'AL'
  },
  {
    name: 'Villarosa',
    code: 'M011',
    province: 'EN'
  },
  {
    name: 'Villar Pellice',
    code: 'M013',
    province: 'TO'
  },
  {
    name: 'Villar Perosa',
    code: 'M014',
    province: 'TO'
  },
  {
    name: 'Villar San Costanzo',
    code: 'M015',
    province: 'CN'
  },
  {
    name: 'Villasalto',
    code: 'M016',
    province: 'SU'
  },
  {
    name: 'Villasanta',
    code: 'M017',
    province: 'MB'
  },
  {
    name: 'Villa San Giovanni',
    code: 'M018',
    province: 'RC'
  },
  {
    name: 'Villa San Secondo',
    code: 'M019',
    province: 'AT'
  },
  {
    name: 'Villa Santa Lucia degli Abruzzi',
    code: 'M021',
    province: 'AQ'
  },
  {
    name: 'Villa Santa Maria',
    code: 'M022',
    province: 'CH'
  },
  {
    name: "Villa Sant'Angelo",
    code: 'M023',
    province: 'AQ'
  },
  {
    name: 'Villasor',
    code: 'M025',
    province: 'SU'
  },
  {
    name: 'Villaspeciosa',
    code: 'M026',
    province: 'SU'
  },
  {
    name: 'Villastellone',
    code: 'M027',
    province: 'TO'
  },
  {
    name: 'Villata',
    code: 'M028',
    province: 'VC'
  },
  {
    name: 'Villaurbana',
    code: 'M030',
    province: 'OR'
  },
  {
    name: 'Villavallelonga',
    code: 'M031',
    province: 'AQ'
  },
  {
    name: 'Villaverla',
    code: 'M032',
    province: 'VI'
  },
  {
    name: 'Villetta Barrea',
    code: 'M041',
    province: 'AQ'
  },
  {
    name: 'Villette',
    code: 'M042',
    province: 'VB'
  },
  {
    name: 'Villesse',
    code: 'M043',
    province: 'GO'
  },
  {
    name: 'Villimpenta',
    code: 'M044',
    province: 'MN'
  },
  {
    name: 'Villongo',
    code: 'M045',
    province: 'BG'
  },
  {
    name: 'Villorba',
    code: 'M048',
    province: 'TV'
  },
  {
    name: 'Vilminore di Scalve',
    code: 'M050',
    province: 'BG'
  },
  {
    name: 'Vimercate',
    code: 'M052',
    province: 'MB'
  },
  {
    name: 'Vimodrone',
    code: 'M053',
    province: 'MI'
  },
  {
    name: 'Vinadio',
    code: 'M055',
    province: 'CN'
  },
  {
    name: 'Vinchiaturo',
    code: 'M057',
    province: 'CB'
  },
  {
    name: 'Vinchio',
    code: 'M058',
    province: 'AT'
  },
  {
    name: 'Vinci',
    code: 'M059',
    province: 'FI'
  },
  {
    name: 'Vinovo',
    code: 'M060',
    province: 'TO'
  },
  {
    name: 'Vinzaglio',
    code: 'M062',
    province: 'NO'
  },
  {
    name: 'Viola',
    code: 'M063',
    province: 'CN'
  },
  {
    name: 'Vione',
    code: 'M065',
    province: 'BS'
  },
  {
    name: 'Vipiteno/Sterzing',
    italianName: 'Vipiteno',
    foreignName: 'Sterzing',
    code: 'M067',
    province: 'BZ'
  },
  {
    name: 'Virle Piemonte',
    code: 'M069',
    province: 'TO'
  },
  {
    name: 'Visano',
    code: 'M070',
    province: 'BS'
  },
  {
    name: 'Vische',
    code: 'M071',
    province: 'TO'
  },
  {
    name: 'Visciano',
    code: 'M072',
    province: 'NA'
  },
  {
    name: 'Visco',
    code: 'M073',
    province: 'UD'
  },
  {
    name: 'Visone',
    code: 'M077',
    province: 'AL'
  },
  {
    name: 'Visso',
    code: 'M078',
    province: 'MC'
  },
  {
    name: 'Vistarino',
    code: 'M079',
    province: 'PV'
  },
  {
    name: 'Vistrorio',
    code: 'M080',
    province: 'TO'
  },
  {
    name: 'Vita',
    code: 'M081',
    province: 'TP'
  },
  {
    name: 'Viterbo',
    code: 'M082',
    province: 'VT'
  },
  {
    name: 'Viticuso',
    code: 'M083',
    province: 'FR'
  },
  {
    name: "Vito d'Asio",
    code: 'M085',
    province: 'PN'
  },
  {
    name: 'Vitorchiano',
    code: 'M086',
    province: 'VT'
  },
  {
    name: 'Vittoria',
    code: 'M088',
    province: 'RG'
  },
  {
    name: 'Vittorio Veneto',
    code: 'M089',
    province: 'TV'
  },
  {
    name: 'Vittorito',
    code: 'M090',
    province: 'AQ'
  },
  {
    name: 'Vittuone',
    code: 'M091',
    province: 'MI'
  },
  {
    name: 'Vitulazio',
    code: 'M092',
    province: 'CE'
  },
  {
    name: 'Vitulano',
    code: 'M093',
    province: 'BN'
  },
  {
    name: 'Viù',
    code: 'M094',
    province: 'TO'
  },
  {
    name: 'Vivaro Romano',
    code: 'M095',
    province: 'RM'
  },
  {
    name: 'Vivaro',
    code: 'M096',
    province: 'PN'
  },
  {
    name: 'Viverone',
    code: 'M098',
    province: 'BI'
  },
  {
    name: 'Vizzini',
    code: 'M100',
    province: 'CT'
  },
  {
    name: 'Vizzola Ticino',
    code: 'M101',
    province: 'VA'
  },
  {
    name: 'Vizzolo Predabissi',
    code: 'M102',
    province: 'MI'
  },
  {
    name: "Vo'",
    code: 'M103',
    province: 'PD'
  },
  {
    name: 'Vobarno',
    code: 'M104',
    province: 'BS'
  },
  {
    name: 'Vobbia',
    code: 'M105',
    province: 'GE'
  },
  {
    name: 'Vocca',
    code: 'M106',
    province: 'VC'
  },
  {
    name: 'Vodo Cadore',
    code: 'M108',
    province: 'BL'
  },
  {
    name: 'Voghera',
    code: 'M109',
    province: 'PV'
  },
  {
    name: 'Voghiera',
    code: 'M110',
    province: 'FE'
  },
  {
    name: 'Vogogna',
    code: 'M111',
    province: 'VB'
  },
  {
    name: 'Volano',
    code: 'M113',
    province: 'TN'
  },
  {
    name: 'Volla',
    code: 'M115',
    province: 'NA'
  },
  {
    name: 'Volongo',
    code: 'M116',
    province: 'CR'
  },
  {
    name: 'Volpago del Montello',
    code: 'M118',
    province: 'TV'
  },
  {
    name: 'Volpara',
    code: 'M119',
    province: 'PV'
  },
  {
    name: 'Volpedo',
    code: 'M120',
    province: 'AL'
  },
  {
    name: 'Volpeglino',
    code: 'M121',
    province: 'AL'
  },
  {
    name: 'Volpiano',
    code: 'M122',
    province: 'TO'
  },
  {
    name: 'Voltaggio',
    code: 'M123',
    province: 'AL'
  },
  {
    name: 'Voltago Agordino',
    code: 'M124',
    province: 'BL'
  },
  {
    name: 'Volta Mantovana',
    code: 'M125',
    province: 'MN'
  },
  {
    name: 'Volterra',
    code: 'M126',
    province: 'PI'
  },
  {
    name: 'Voltido',
    code: 'M127',
    province: 'CR'
  },
  {
    name: 'Volturara Irpina',
    code: 'M130',
    province: 'AV'
  },
  {
    name: 'Volturara Appula',
    code: 'M131',
    province: 'FG'
  },
  {
    name: 'Volturino',
    code: 'M132',
    province: 'FG'
  },
  {
    name: 'Volvera',
    code: 'M133',
    province: 'TO'
  },
  {
    name: 'Vottignasco',
    code: 'M136',
    province: 'CN'
  },
  {
    name: 'Zaccanopoli',
    code: 'M138',
    province: 'VV'
  },
  {
    name: 'Zafferana Etnea',
    code: 'M139',
    province: 'CT'
  },
  {
    name: 'Zagarise',
    code: 'M140',
    province: 'CZ'
  },
  {
    name: 'Zagarolo',
    code: 'M141',
    province: 'RM'
  },
  {
    name: 'Zambrone',
    code: 'M143',
    province: 'VV'
  },
  {
    name: 'Zandobbio',
    code: 'M144',
    province: 'BG'
  },
  {
    name: 'Zanè',
    code: 'M145',
    province: 'VI'
  },
  {
    name: 'Zanica',
    code: 'M147',
    province: 'BG'
  },
  {
    name: 'Zavattarello',
    code: 'M150',
    province: 'PV'
  },
  {
    name: 'Zeccone',
    code: 'M152',
    province: 'PV'
  },
  {
    name: 'Zeddiani',
    code: 'M153',
    province: 'OR'
  },
  {
    name: 'Zelbio',
    code: 'M156',
    province: 'CO'
  },
  {
    name: 'Zelo Buon Persico',
    code: 'M158',
    province: 'LO'
  },
  {
    name: 'Zeme',
    code: 'M161',
    province: 'PV'
  },
  {
    name: 'Zenevredo',
    code: 'M162',
    province: 'PV'
  },
  {
    name: 'Zenson di Piave',
    code: 'M163',
    province: 'TV'
  },
  {
    name: 'Zerba',
    code: 'M165',
    province: 'PC'
  },
  {
    name: 'Zerbo',
    code: 'M166',
    province: 'PV'
  },
  {
    name: 'Zerbolò',
    code: 'M167',
    province: 'PV'
  },
  {
    name: 'Zerfaliu',
    code: 'M168',
    province: 'OR'
  },
  {
    name: 'Zeri',
    code: 'M169',
    province: 'MS'
  },
  {
    name: 'Zermeghedo',
    code: 'M170',
    province: 'VI'
  },
  {
    name: 'Zero Branco',
    code: 'M171',
    province: 'TV'
  },
  {
    name: 'Zevio',
    code: 'M172',
    province: 'VR'
  },
  {
    name: 'Ziano di Fiemme',
    code: 'M173',
    province: 'TN'
  },
  {
    name: 'Zibido San Giacomo',
    code: 'M176',
    province: 'MI'
  },
  {
    name: 'Zignago',
    code: 'M177',
    province: 'SP'
  },
  {
    name: 'Zimella',
    code: 'M178',
    province: 'VR'
  },
  {
    name: 'Zimone',
    code: 'M179',
    province: 'BI'
  },
  {
    name: 'Zinasco',
    code: 'M180',
    province: 'PV'
  },
  {
    name: 'Zoagli',
    code: 'M182',
    province: 'GE'
  },
  {
    name: 'Zocca',
    code: 'M183',
    province: 'MO'
  },
  {
    name: 'Zogno',
    code: 'M184',
    province: 'BG'
  },
  {
    name: 'Zola Predosa',
    code: 'M185',
    province: 'BO'
  },
  {
    name: 'Zollino',
    code: 'M187',
    province: 'LE'
  },
  {
    name: 'Zone',
    code: 'M188',
    province: 'BS'
  },
  {
    name: 'Zoppè di Cadore',
    code: 'M189',
    province: 'BL'
  },
  {
    name: 'Zoppola',
    code: 'M190',
    province: 'PN'
  },
  {
    name: 'Zovencedo',
    code: 'M194',
    province: 'VI'
  },
  {
    name: 'Zubiena',
    code: 'M196',
    province: 'BI'
  },
  {
    name: 'Zuccarello',
    code: 'M197',
    province: 'SV'
  },
  {
    name: 'Zugliano',
    code: 'M199',
    province: 'VI'
  },
  {
    name: 'Zuglio',
    code: 'M200',
    province: 'UD'
  },
  {
    name: 'Zumaglia',
    code: 'M201',
    province: 'BI'
  },
  {
    name: 'Zumpano',
    code: 'M202',
    province: 'CS'
  },
  {
    name: 'Zungoli',
    code: 'M203',
    province: 'AV'
  },
  {
    name: 'Zungri',
    code: 'M204',
    province: 'VV'
  },
  {
    name: 'Lariano',
    code: 'M207',
    province: 'RM'
  },
  {
    name: 'Lamezia Terme',
    code: 'M208',
    province: 'CZ'
  },
  {
    name: "Sant'Anna Arresi",
    code: 'M209',
    province: 'SU'
  },
  {
    name: 'Terme Vigliatore',
    code: 'M210',
    province: 'ME'
  },
  {
    name: 'Acquedolci',
    code: 'M211',
    province: 'ME'
  },
  {
    name: 'Ladispoli',
    code: 'M212',
    province: 'RM'
  },
  {
    name: 'Ardea',
    code: 'M213',
    province: 'RM'
  },
  {
    name: 'Badesi',
    code: 'M214',
    province: 'SS'
  },
  {
    name: 'Sicignano degli Alburni',
    code: 'M253',
    province: 'SA'
  },
  {
    name: 'Molina Aterno',
    code: 'M255',
    province: 'AQ'
  },
  {
    name: 'Scanzano Jonico',
    code: 'M256',
    province: 'MT'
  },
  {
    name: 'Portopalo di Capo Passero',
    code: 'M257',
    province: 'SR'
  },
  {
    name: 'Avigliano Umbro',
    code: 'M258',
    province: 'TR'
  },
  {
    name: 'Viddalba',
    code: 'M259',
    province: 'SS'
  },
  {
    name: 'Casapesenna',
    code: 'M260',
    province: 'CE'
  },
  {
    name: 'Castro',
    code: 'M261',
    province: 'LE'
  },
  {
    name: 'Cellole',
    code: 'M262',
    province: 'CE'
  },
  {
    name: 'Porto Cesareo',
    code: 'M263',
    province: 'LE'
  },
  {
    name: 'San Cassiano',
    code: 'M264',
    province: 'LE'
  },
  {
    name: 'Vajont',
    code: 'M265',
    province: 'PN'
  },
  {
    name: 'Ordona',
    code: 'M266',
    province: 'FG'
  },
  {
    name: 'Zapponeta',
    code: 'M267',
    province: 'FG'
  },
  {
    name: 'Blufi',
    code: 'M268',
    province: 'PA'
  },
  {
    name: 'Paterno',
    code: 'M269',
    province: 'PZ'
  },
  {
    name: 'Masainas',
    code: 'M270',
    province: 'SU'
  },
  {
    name: 'Mazzarrone',
    code: 'M271',
    province: 'CT'
  },
  {
    name: 'Ciampino',
    code: 'M272',
    province: 'RM'
  },
  {
    name: 'Santa Maria la Carità',
    code: 'M273',
    province: 'NA'
  },
  {
    name: 'Golfo Aranci',
    code: 'M274',
    province: 'SS'
  },
  {
    name: 'Loiri Porto San Paolo',
    code: 'M275',
    province: 'SS'
  },
  {
    name: "Sant'Antonio di Gallura",
    code: 'M276',
    province: 'SS'
  },
  {
    name: 'San Ferdinando',
    code: 'M277',
    province: 'RC'
  },
  {
    name: 'Villaperuccio',
    code: 'M278',
    province: 'SU'
  },
  {
    name: 'Priolo Gargallo',
    code: 'M279',
    province: 'SR'
  },
  {
    name: 'Trecase',
    code: 'M280',
    province: 'NA'
  },
  {
    name: 'Petrosino',
    code: 'M281',
    province: 'TP'
  },
  {
    name: 'Tergu',
    code: 'M282',
    province: 'SS'
  },
  {
    name: 'Maniace',
    code: 'M283',
    province: 'CT'
  },
  {
    name: 'Santa Maria Coghinas',
    code: 'M284',
    province: 'SS'
  },
  {
    name: 'Cardedu',
    code: 'M285',
    province: 'NU'
  },
  {
    name: 'Torrenova',
    code: 'M286',
    province: 'ME'
  },
  {
    name: 'Ragalna',
    code: 'M287',
    province: 'CT'
  },
  {
    name: 'Castiadas',
    code: 'M288',
    province: 'SU'
  },
  {
    name: 'Massa di Somma',
    code: 'M289',
    province: 'NA'
  },
  {
    name: 'Stintino',
    code: 'M290',
    province: 'SS'
  },
  {
    name: 'Piscinas',
    code: 'M291',
    province: 'SU'
  },
  {
    name: 'Erula',
    code: 'M292',
    province: 'SS'
  },
  {
    name: 'Bellizzi',
    code: 'M294',
    province: 'SA'
  },
  {
    name: 'San Cesareo',
    code: 'M295',
    province: 'RM'
  },
  {
    name: 'Fiumicino',
    code: 'M297',
    province: 'RM'
  },
  {
    name: 'Statte',
    code: 'M298',
    province: 'TA'
  },
  {
    name: 'Due Carrare',
    code: 'M300',
    province: 'PD'
  },
  {
    name: 'Padru',
    code: 'M301',
    province: 'SS'
  },
  {
    name: 'Montiglio Monferrato',
    code: 'M302',
    province: 'AT'
  },
  {
    name: 'Ronzo-Chienis',
    code: 'M303',
    province: 'TN'
  },
  {
    name: 'Cavallino-Treporti',
    code: 'M308',
    province: 'VE'
  },
  {
    name: 'Fonte Nuova',
    code: 'M309',
    province: 'RM'
  },
  {
    name: 'Campolongo Tapogliano',
    code: 'M311',
    province: 'UD'
  },
  {
    name: 'Lonato del Garda',
    code: 'M312',
    province: 'BS'
  },
  {
    name: 'Ledro',
    code: 'M313',
    province: 'TN'
  },
  {
    name: 'Comano Terme',
    code: 'M314',
    province: 'TN'
  },
  {
    name: 'Gravedona ed Uniti',
    code: 'M315',
    province: 'CO'
  },
  {
    name: 'Mappano',
    code: 'M316',
    province: 'TO'
  },
  {
    name: 'Rivignano Teor',
    code: 'M317',
    province: 'UD'
  },
  {
    name: 'Trecastelli',
    code: 'M318',
    province: 'AN'
  },
  {
    name: 'Fabbriche di Vergemoli',
    code: 'M319',
    province: 'LU'
  },
  {
    name: 'Valsamoggia',
    code: 'M320',
    province: 'BO'
  },
  {
    name: 'Figline e Incisa Valdarno',
    code: 'M321',
    province: 'FI'
  },
  {
    name: 'Castelfranco Piandiscò',
    code: 'M322',
    province: 'AR'
  },
  {
    name: 'Fiscaglia',
    code: 'M323',
    province: 'FE'
  },
  {
    name: 'Poggio Torriana',
    code: 'M324',
    province: 'RN'
  },
  {
    name: 'Sissa Trecasali',
    code: 'M325',
    province: 'PR'
  },
  {
    name: 'Scarperia e San Piero',
    code: 'M326',
    province: 'FI'
  },
  {
    name: 'Casciana Terme Lari',
    code: 'M327',
    province: 'PI'
  },
  {
    name: 'Crespina Lorenzana',
    code: 'M328',
    province: 'PI'
  },
  {
    name: 'Pratovecchio Stia',
    code: 'M329',
    province: 'AR'
  },
  {
    name: 'Montoro',
    code: 'M330',
    province: 'AV'
  },
  {
    name: 'Vallefoglia',
    code: 'M331',
    province: 'PU'
  },
  {
    name: "Sant'Omobono Terme",
    code: 'M333',
    province: 'BG'
  },
  {
    name: 'Val Brembilla',
    code: 'M334',
    province: 'BG'
  },
  {
    name: 'Bellagio',
    code: 'M335',
    province: 'CO'
  },
  {
    name: 'Colverde',
    code: 'M336',
    province: 'CO'
  },
  {
    name: 'Verderio',
    code: 'M337',
    province: 'LC'
  },
  {
    name: 'Cornale e Bastida',
    code: 'M338',
    province: 'PV'
  },
  {
    name: 'Maccagno con Pino e Veddasca',
    code: 'M339',
    province: 'VA'
  },
  {
    name: 'Borgo Virgilio',
    code: 'M340',
    province: 'MN'
  },
  {
    name: 'Tremezzina',
    code: 'M341',
    province: 'CO'
  },
  {
    name: 'Longarone',
    code: 'M342',
    province: 'BL'
  },
  {
    name: 'Valdaone',
    code: 'M343',
    province: 'TN'
  },
  {
    name: 'Predaia',
    code: 'M344',
    province: 'TN'
  },
  {
    name: 'San Lorenzo Dorsino',
    code: 'M345',
    province: 'TN'
  },
  {
    name: 'Valvasone Arzene',
    code: 'M346',
    province: 'PN'
  },
  {
    name: 'Sillano Giuncugnano',
    code: 'M347',
    province: 'LU'
  },
  {
    name: 'La Valletta Brianza',
    code: 'M348',
    province: 'LC'
  },
  {
    name: 'Altavalle',
    code: 'M349',
    province: 'TN'
  },
  {
    name: 'Altopiano della Vigolana',
    code: 'M350',
    province: 'TN'
  },
  {
    name: 'Amblar-Don',
    code: 'M351',
    province: 'TN'
  },
  {
    name: 'Borgo Chiese',
    code: 'M352',
    province: 'TN'
  },
  {
    name: 'Borgo Lares',
    code: 'M353',
    province: 'TN'
  },
  {
    name: 'Castel Ivano',
    code: 'M354',
    province: 'TN'
  },
  {
    name: 'Cembra Lisignago',
    code: 'M355',
    province: 'TN'
  },
  {
    name: 'Contà',
    code: 'M356',
    province: 'TN'
  },
  {
    name: 'Madruzzo',
    code: 'M357',
    province: 'TN'
  },
  {
    name: 'Porte di Rendena',
    code: 'M358',
    province: 'TN'
  },
  {
    name: 'Primiero San Martino di Castrozza',
    code: 'M359',
    province: 'TN'
  },
  {
    name: 'Sella Giudicarie',
    code: 'M360',
    province: 'TN'
  },
  {
    name: 'Tre Ville',
    code: 'M361',
    province: 'TN'
  },
  {
    name: 'Vallelaghi',
    code: 'M362',
    province: 'TN'
  },
  {
    name: "Ville d'Anaunia",
    code: 'M363',
    province: 'TN'
  },
  {
    name: 'Ventasso',
    code: 'M364',
    province: 'RE'
  },
  {
    name: 'Pieve di Bono-Prezzo',
    code: 'M365',
    province: 'TN'
  },
  {
    name: 'Dimaro Folgarida',
    code: 'M366',
    province: 'TN'
  },
  {
    name: 'Polesine Zibello',
    code: 'M367',
    province: 'PR'
  },
  {
    name: 'Montescudo-Monte Colombo',
    code: 'M368',
    province: 'RN'
  },
  {
    name: 'Alto Reno Terme',
    code: 'M369',
    province: 'BO'
  },
  {
    name: 'Borgomezzavalle',
    code: 'M370',
    province: 'VB'
  },
  {
    name: 'Lessona',
    code: 'M371',
    province: 'BI'
  },
  {
    name: 'Corteolona e Genzone',
    code: 'M372',
    province: 'PV'
  },
  {
    name: 'Campiglia Cervo',
    code: 'M373',
    province: 'BI'
  },
  {
    name: 'Val di Zoldo',
    code: 'M374',
    province: 'BL'
  },
  {
    name: 'Alpago',
    code: 'M375',
    province: 'BL'
  },
  {
    name: 'Abetone Cutigliano',
    code: 'M376',
    province: 'PT'
  },
  {
    name: 'San Marcello Piteglio',
    code: 'M377',
    province: 'PT'
  },
  {
    name: 'Montalcino',
    code: 'M378',
    province: 'SI'
  },
  {
    name: 'Terre Roveresche',
    code: 'M379',
    province: 'PU'
  },
  {
    name: 'Colli al Metauro',
    code: 'M380',
    province: 'PU'
  },
  {
    name: 'Terre del Reno',
    code: 'M381',
    province: 'FE'
  },
  {
    name: 'Valfornace',
    code: 'M382',
    province: 'MC'
  },
  {
    name: 'Alta Valle Intelvi',
    code: 'M383',
    province: 'CO'
  },
  {
    name: 'Val Liona',
    code: 'M384',
    province: 'VI'
  },
  {
    name: 'Casali del Manco',
    code: 'M385',
    province: 'CS'
  },
  {
    name: 'Alta Val Tidone',
    code: 'M386',
    province: 'PC'
  },
  {
    name: 'Montalto Carpasio',
    code: 'M387',
    province: 'IM'
  },
  {
    name: 'Cassano Spinola',
    code: 'M388',
    province: 'AL'
  },
  {
    name: 'Alto Sermenza',
    code: 'M389',
    province: 'VC'
  },
  {
    name: 'San Giovanni di Fassa-Sèn Jan',
    italianName: 'San Giovanni di Fassa',
    foreignName: 'Sèn Jan',
    code: 'M390',
    province: 'TN'
  },
  {
    name: 'Rio',
    code: 'M391',
    province: 'LI'
  },
  {
    name: 'Laterina Pergine Valdarno',
    code: 'M392',
    province: 'AR'
  },
  {
    name: 'Castelgerundo',
    code: 'M393',
    province: 'LO'
  },
  {
    name: 'Centro Valle Intelvi',
    code: 'M394',
    province: 'CO'
  },
  {
    name: 'Valvarrone',
    code: 'M395',
    province: 'LC'
  },
  {
    name: 'Borgo Mantovano',
    code: 'M396',
    province: 'MN'
  },
  {
    name: 'Alluvioni Piovera',
    code: 'M397',
    province: 'AL'
  },
  {
    name: 'Cellio con Breia',
    code: 'M398',
    province: 'VC'
  },
  {
    name: 'Treppo Ligosullo',
    code: 'M399',
    province: 'UD'
  },
  {
    name: 'Fiumicello Villa Vicentina',
    code: 'M400',
    province: 'UD'
  },
  {
    name: 'Barbarano Mossano',
    code: 'M401',
    province: 'VI'
  },
  {
    name: 'Borgo Veneto',
    code: 'M402',
    province: 'PD'
  },
  {
    name: 'Corigliano-Rossano',
    code: 'M403',
    province: 'CS'
  },
  {
    name: 'Valle Cannobina',
    code: 'M404',
    province: 'VB'
  },
  {
    name: 'Val di Chy',
    code: 'M405',
    province: 'TO'
  },
  {
    name: 'Borgocarbonara',
    code: 'M406',
    province: 'MN'
  },
  {
    name: "Terre d'Adige",
    code: 'M407',
    province: 'TN'
  },
  {
    name: 'Barberino Tavarnelle',
    code: 'M408',
    province: 'FI'
  },
  {
    name: 'Tresignana',
    code: 'M409',
    province: 'FE'
  },
  {
    name: 'Riva del Po',
    code: 'M410',
    province: 'FE'
  },
  {
    name: 'Sorbolo Mezzani',
    code: 'M411',
    province: 'PR'
  },
  {
    name: 'Solbiate con Cagno',
    code: 'M412',
    province: 'CO'
  },
  {
    name: 'Sassocorvaro Auditore',
    code: 'M413',
    province: 'PU'
  },
  {
    name: 'Quaregna Cerreto',
    code: 'M414',
    province: 'BI'
  },
  {
    name: 'Valchiusa',
    code: 'M415',
    province: 'TO'
  },
  {
    name: 'Gattico-Veruno',
    code: 'M416',
    province: 'NO'
  },
  {
    name: 'Valdilana',
    code: 'M417',
    province: 'BI'
  },
  {
    name: 'Piadena Drizzona',
    code: 'M418',
    province: 'CR'
  },
  {
    name: 'Colli Verdi',
    code: 'M419',
    province: 'PV'
  },
  {
    name: 'Lu e Cuccaro Monferrato',
    code: 'M420',
    province: 'AL'
  },
  {
    name: 'Borgo Valbelluna',
    code: 'M421',
    province: 'BL'
  },
  {
    name: 'Pieve del Grappa',
    code: 'M422',
    province: 'TV'
  },
  {
    name: 'Valbrenta',
    code: 'M423',
    province: 'VI'
  },
  {
    name: 'Vermezzo con Zelo',
    code: 'M424',
    province: 'MI'
  },
  {
    name: 'Cadrezzate con Osmate',
    code: 'M425',
    province: 'VA'
  },
  {
    name: 'Colceresa',
    code: 'M426',
    province: 'VI'
  },
  {
    name: 'Lusiana Conco',
    code: 'M427',
    province: 'VI'
  },
  {
    name: 'Presicce-Acquarica',
    code: 'M428',
    province: 'LE'
  },
  {
    name: "Borgo d'Anaunia",
    code: 'M429',
    province: 'TN'
  },
  {
    name: 'Novella',
    code: 'M430',
    province: 'TN'
  },
  {
    name: 'Ville di Fiemme',
    code: 'M431',
    province: 'TN'
  },
  {
    name: 'Misiliscemi',
    code: 'M432',
    province: 'TP'
  },
  {
    name: 'Bardello con Malgesso e Bregano',
    code: 'M433',
    province: 'VA'
  },
  {
    name: 'Moransengo-Tonengo',
    code: 'M434',
    province: 'AT'
  },
  {
    name: 'Uggiate con Ronago',
    code: 'M435',
    province: 'CO'
  },
  {
    name: 'Sovizzo',
    code: 'M436',
    province: 'VI'
  },
  {
    name: 'Setteville',
    code: 'M437',
    province: 'BL'
  },
  {
    name: "Santa Caterina d'Este",
    code: 'M438',
    province: 'PD'
  }
];
