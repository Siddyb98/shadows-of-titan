export const CLEARANCE = {
  0: { name: 'CITIZEN', short: 'C0', color: 'aan-white' },
  1: { name: 'ECHELON', short: 'C1', color: 'cryo-blue' },
  2: { name: 'APEX', short: 'C2', color: 'titan-gold' },
  3: { name: 'COUNCIL', short: 'C3', color: 'root-violet' },
  4: { name: 'VOID', short: 'C4', color: 'forge-magma' },
}

const files = (entries) => entries.map(([id, name, designation, clearance, tier]) => ({ id, name, designation, clearance, tier }))
const folder = (id, name, entries) => ({ id, name, files: files(entries) })
const publicFolder = (id, name, entries) => ({
  id,
  name,
  files: files(entries).map((file) => ({ ...file, clearance: file.clearance === 1 ? undefined : file.clearance })),
})

export const ARCHIVE_SECTIONS = [
  {
    id: 'personnel', name: 'PERSONNEL', designation: 'AAN-IN-PER', clearance: 1, color: 'titan-gold',
    description: 'Individual dossiers. Mutation profiles. Psych evaluations. Service records.',
    subcategories: [folder('all', 'ALL SUBJECTS', [
      ['myth-001x', 'MYTH-001X', 'PER-001X', 3, 'QUASAR'], ['solaris-fist', 'SOLARIS-FIST', 'PER-047B', 2, 'NOVA+'], ['radiant-spear', 'RADIANT-SPEAR', 'PER-001', 3, 'NOVA+'], ['razorhawk', 'RAZORHAWK', 'PER-CMD-01', 3, 'QUASAR'], ['white-winter', 'WHITE-WINTER', 'PER-212', 2, 'APEX'], ['absolute-zero', 'ABSOLUTE-ZERO', 'PER-088', 2, 'APEX'], ['rot-saint', 'ROT-SAINT', 'PER-OMEGA-01', 3, 'OMEGA'], ['blightheart', 'BLIGHTHEART', 'PER-OMEGA-02', 3, 'OMEGA'], ['quantum-drift', 'QUANTUM-DRIFT', 'PER-419', 2, 'ECHELON+'], ['breaking-point', 'BREAKING-POINT', 'PER-OMEGA-03', 3, 'QUASAR'], ['thornmother', 'THORNMOTHER', 'PER-VER-12', 2, 'ECHELON'], ['halflight', 'HALFLIGHT', 'PER-G-08', 2, 'DREG'], ['nightshade', 'NIGHTSHADE', 'PER-137', 3, 'ECHELON'], ['loworbit', 'LOWORBIT', 'PER-540', 1, 'ECHELON'], ['kinetic-surge', 'KINETIC-SURGE', 'PER-092', 1, 'ECHELON'], ['sonic-rend', 'SONIC-REND', 'PER-611', 1, 'ECHELON'], ['prismbreaker', 'PRISMBREAKER', 'PER-215', 1, 'ECHELON+'], ['sliplaw', 'SLIPLAW', 'PER-ENF-44', 2, 'ECHELON'], ['gale', 'GALE', 'PER-VAN-07', 2, 'ECHELON+'], ['bloomthorn', 'BLOOMTHORN', 'PER-342', 1, 'ECHELON'], ['ekros', 'EKKROS', 'PER-VLT-OMEGA', 4, 'UNCLASSIFIED'],
    ])],
  },
  {
    id: 'geosphere', name: 'GEOSPHERE', designation: 'AAN-IN-GEO', clearance: 0, defaultClearance: 0, color: 'titan-emerald',
    description: 'Planetary surveys. Regional breakdowns. City infrastructure. Tectonic data.',
    subcategories: [
      publicFolder('regions', 'REGIONS', [['heliostrand-cradle', 'HELIOSTRAND CRADLE', 'GEO-000', 2], ['skelter-reach', 'SKELTER REACH', 'GEO-010', 1], ['virelyn-expanse', 'VIRELYN EXPANSE', 'GEO-020', 1], ['frostline-divide', 'FROSTLINE DIVIDE', 'GEO-030', 1], ['miridan-hollow', 'MIRIDAN HOLLOW', 'GEO-040', 1], ['zephyros-edge', 'ZEPHYROS EDGE', 'GEO-050', 2], ['obscura-noctis', 'OBSCURA NOCTIS BELT', 'GEO-OMEGA-01', 3]]),
      publicFolder('cities', 'CITIES', [['helion-prime', 'HELION PRIME', 'CIT-001', 1], ['forgedeep', 'FORGEDEEP', 'CIT-002', 1], ['stratos-gate', 'STRATOS GATE', 'CIT-003', 1], ['cryotherne', 'CRYOTHERNE', 'CIT-004', 1], ['blackroot-verge', 'BLACKROOT VERGE', 'CIT-005', 1], ['aetherion', 'AETHERION', 'CIT-006', 2], ['nocturne-spire', 'NOCTURNE SPIRE', 'CIT-OMEGA-01', 3]]),
    ],
  },
  {
    id: 'codex', name: 'CODEX', designation: 'AAN-IN-COD', clearance: 2, color: 'cryo-blue',
    description: 'Engine specifications. Mutation taxonomy. Class doctrine. Authority structure.',
    subcategories: [
      folder('engine', 'CATALYST ENGINE', [['catalyst-engine', 'CATALYST ENGINE', 'COD-ENG-01', 3], ['fusion-heart', 'FUSION HEART', 'COD-ENG-02', 3], ['neural-matrix', 'NEURAL RESONANCE MATRIX', 'COD-ENG-03', 3], ['graviton-web', 'GRAVITON CONTROL WEB', 'COD-ENG-04', 3], ['biosynth-loom', 'BIOSYNTH LOOM ARRAY', 'COD-ENG-05', 3], ['pulse-grid', 'PULSE GRID INTERFACE', 'COD-ENG-06', 3], ['echo-circuit', 'ECHO CIRCUIT', 'COD-ENG-07', 3], ['codex-aetherion', 'CODEX AETHERION', 'COD-OMEGA-01', 4]]),
      folder('mutations', 'MUTATION INDEX', [['mutation-index', 'QUASAR-RESONANCE CLASSIFICATION', 'COD-MUT-01', 2], ['intergenerational', 'INTERGENERATIONAL PATTERNS', 'COD-MUT-02', 2], ['hybrid-mutations', 'HYBRID MUTATIONS', 'COD-MUT-03', 3], ['resonance-map', 'REGIONAL MUTATION MAP', 'COD-MUT-04', 2]]),
      folder('class', 'CLASS SYSTEM', [['class-system', 'CLASS SYSTEM', 'COD-CLS-01', 2], ['codex-ascendant', 'CODEX ASCENDANT', 'COD-CLS-02', 3], ['apex-supremacy', 'APEX SUPREMACY PROTOCOL', 'COD-CLS-03', 3]]),
      folder('aan', 'AAN', [['aan-public', 'PUBLIC STRUCTURE', 'COD-AAN-01', 2], ['aan-shadow', 'SHADOW STRUCTURE', 'COD-AAN-02', 3], ['aan-agenda', 'STATED AGENDA', 'COD-AAN-03', 2], ['aan-secrets', 'CLASSIFIED DOCTRINE', 'COD-AAN-04', 3], ['helios-vault', 'HELIOS VAULT', 'COD-AAN-05', 3]]),
    ],
  },
  {
    id: 'bestiary', name: 'BESTIARY', designation: 'AAN-IN-BIO', clearance: 0, defaultClearance: 0, color: 'root-bio',
    description: 'Flora. Fauna. Anomalous entities. Biological threat assessments.',
    subcategories: [
      publicFolder('flora-domesticated', 'FLORA // DOMESTICATED', [['glowleaf', 'GLOWLEAF', 'BIO-FLR-01', 1], ['mycel-bloom', 'MYCEL-BLOOM ROOT', 'BIO-FLR-02', 1], ['dendrantic', 'DERDANTRICE VINES', 'BIO-FLR-03', 1], ['synthwheat', 'SYNTHWHEAT PODS', 'BIO-FLR-04', 1], ['solar-blossoms', 'SOLAR BLOSSOMS', 'BIO-FLR-05', 1]]),
      publicFolder('flora-wild', 'FLORA // WILD & ANOMALOUS', [['thorshade-ivy', 'THORSHADE IVY', 'BIO-FLR-10', 2], ['cryoglass-lily', 'CRYOGLASS LILY', 'BIO-FLR-11', 2], ['shiver-ferns', 'SHIVER FERNS', 'BIO-FLR-12', 1], ['ashvine', 'ASHVINE SPORECLAW', 'BIO-FLR-13', 1], ['lurefruit', 'LUREFRUIT TREES', 'BIO-FLR-14', 2]]),
      publicFolder('fauna-terrestrial', 'FAUNA // TERRESTRIAL', [['grymworms', 'GRYMWORMS', 'BIO-FAU-01', 1], ['wraithlurks', 'WRAITHLURKS', 'BIO-FAU-02', 2], ['glacier-maws', 'GLACIER MAWS', 'BIO-FAU-03', 2], ['ashdogs', 'ASHDOGS', 'BIO-FAU-04', 1], ['scream-locusts', 'SCREAM LOCUSTS', 'BIO-FAU-05', 2], ['hollowbacks', 'HOLLOWBACKS', 'BIO-FAU-06', 2], ['crested-phasurs', 'CRESTED PHASURS', 'BIO-FAU-07', 1], ['mossbeasts', 'MOSSBEASTS', 'BIO-FAU-08', 1], ['gravwyrms', 'GRAVWYRMS', 'BIO-FAU-09', 1], ['burrowguts', 'BURROWGUTS', 'BIO-FAU-10', 1], ['glowbucks', 'GLOWBUCKS', 'BIO-FAU-11', 1]]),
      publicFolder('fauna-aquatic', 'FAUNA // AQUATIC', [['silverlash-eels', 'SILVERLASH EELS', 'BIO-AQU-01', 2], ['mist-gloamers', 'MIST GLOAMERS', 'BIO-AQU-02', 1], ['crystalwolves', 'CRYSTALWOLVES', 'BIO-AQU-03', 1], ['tremorbacks', 'TREMORBACKS', 'BIO-AQU-04', 1], ['spindlemaws', 'SPINDLEMAWS', 'BIO-AQU-05', 1], ['voxx-sirens', 'VOXX SIRENS', 'BIO-AQU-06', 3]]),
      folder('anomalous', 'ANOMALOUS ENTITIES', [['dreamherds', 'THE DREAMHERDS', 'BIO-OMEGA-01', 3], ['silent-current', 'THE SILENT CURRENT', 'BIO-OMEGA-02', 4], ['echofoam', 'ECHOFOAM PODS', 'BIO-OMEGA-03', 3]]),
    ],
  },
  {
    id: 'chronicle', name: 'CHRONICLE', designation: 'AAN-IN-CHR', clearance: 0, defaultClearance: 0, color: 'nocturne-ash',
    description: 'Timeline of events. Voyage records. Buried incidents. Redacted histories.',
    subcategories: [
      publicFolder('pre-exodus', 'PRE-EXODUS // EARTH', [['great-collapse', 'THE GREAT COLLAPSE', 'CHR-001', 1], ['world-council', 'THE WORLD COUNCIL', 'CHR-002', 2], ['failed-arks', 'ALTERNATIVE PLANS', 'CHR-003', 2]]),
      folder('voyage', 'THE VOYAGE', [['exodus-project', 'THE EXODUS PROJECT', 'CHR-010', 2], ['daedalus-prime', 'E.S. DAEDALUS PRIME', 'CHR-011', 2], ['crew-structure', 'CREW STRUCTURE', 'CHR-012', 3], ['cryo-rift', 'THE CRYO-RIFT DISASTER', 'CHR-013', 3], ['rebellion-sector-9', 'REBELLION OF SECTOR 9', 'CHR-014', 3], ['whisper-room', 'THE WHISPER ROOM', 'CHR-015', 3]]),
      folder('landings', 'THE LANDINGS', [['terraforming', 'THE TERRAFORMING PROCESS', 'CHR-020', 2], ['first-landings', 'THE FIRST LANDINGS', 'CHR-021', 2], ['first-apex', 'FIRST APEX GENERATION', 'CHR-022', 3], ['catalyst-event', 'THE CATALYST EVENT', 'CHR-023', 3], ['aberrant-bloom', 'THE ABERRANT BLOOM', 'CHR-024', 2]]),
      folder('aan-era', 'THE AAN ERA', [['aan-founding', 'FOUNDING OF THE AAN', 'CHR-030', 2], ['aan-corruption', 'THE CORRUPTION TIMELINE', 'CHR-031', 3], ['cassian-vyre', 'CASSIAN SOL VYRE', 'CHR-032', 3]]),
      folder('buried', 'BURIED EVENTS', [['protocol-nova', 'PROTOCOL NOVA', 'CHR-OMEGA-01', 4], ['missing-founder', 'THE MISSING FOUNDER', 'CHR-OMEGA-02', 4], ['vaults', 'VAULTS OF TITAN', 'CHR-OMEGA-03', 3]]),
    ],
  },
  {
    id: 'culture', name: 'CULTURE', designation: 'AAN-IN-CUL', clearance: 0, defaultClearance: 0, color: 'forge-ember',
    description: 'Social codes. Slang. Fashion. Rituals. The ways of living on Titan.',
    subcategories: [
      publicFolder('slang', 'SLANG & DIALECT', [['slang-system', 'COMMON SLANG', 'CUL-SLG-01', 1], ['curses', 'CURSES & OATHS', 'CUL-SLG-02', 1]]),
      publicFolder('fashion', 'FASHION', [['apex-fashion', 'APEX CLASS', 'CUL-FSH-01', 1], ['echelon-fashion', 'ECHELON / LUMINAL', 'CUL-FSH-02', 1], ['dreg-fashion', 'DREGS', 'CUL-FSH-03', 1]]),
      publicFolder('daily', 'DAILY LIFE', [['currency', 'CURRENCY & CLASS', 'CUL-DAY-01', 1], ['transportation', 'TRANSPORTATION', 'CUL-DAY-02', 1], ['leisure', 'LEISURE ZONES', 'CUL-DAY-03', 1]]),
      folder('intimacy', 'INTIMACY & REPRODUCTION', [['attitudes', 'CULTURAL ATTITUDES', 'CUL-INT-01', 2], ['apex-practices', 'AAN & APEX PRACTICES', 'CUL-INT-02', 2], ['dreg-practices', 'DREG PRACTICES', 'CUL-INT-03', 2], ['reproduction', 'REPRODUCTION & BIOENGINEERING', 'CUL-INT-04', 3], ['attraction', 'ATTRACTION & SOCIAL HEAT', 'CUL-INT-05', 2], ['tracebond', 'TRACEBONDS', 'CUL-INT-06', 3]]),
      folder('rituals', 'RITUALS & BELIEFS', [['ascension-doctrine', 'ASCEND OR BE FORGOTTEN', 'CUL-RIT-01', 2], ['propaganda', 'PROPAGANDA MACHINE', 'CUL-RIT-02', 2]]),
      folder('entertainment', 'ENTERTAINMENT', [['ashbreaks', 'ASHBREAKS', 'CUL-ENT-01', 1], ['pulse-duels', 'PULSE DUELS', 'CUL-ENT-02', 2], ['drugs', 'DRUGS & DRINK', 'CUL-ENT-03', 2]]),
    ],
  },
  {
    id: 'signals', name: 'SIGNALS', designation: 'AAN-IN-SIG', clearance: 3, color: 'forge-magma',
    description: 'Intercepted transmissions. Recovered documents. Field logs. Nothing here is confirmed.',
    subcategories: [
      folder('transmissions', 'INTERCEPTED TRANSMISSIONS', [['sig-dryst', 'DRYST-COMM-01', 'SIG-OMEGA-01', 3], ['sig-vexal', 'VEXAL-BROADCAST', 'SIG-OMEGA-02', 3], ['sig-vex', 'VEX-07-FRAGMENT', 'SIG-OMEGA-07', 4]]),
      folder('documents', 'RECOVERED DOCUMENTS', [['sig-lyra', 'LYRA-DEAD-DROP', 'SIG-047', 2]]),
    ],
  },
]

export const archiveSections = ARCHIVE_SECTIONS
export const clearanceNames = Object.values(CLEARANCE).map(({ name }) => name)

export function getArchiveSection(sectionId) { return ARCHIVE_SECTIONS.find((section) => section.id === sectionId) }
export function getArchiveSubcategory(sectionId, subcategoryId) { return getArchiveSection(sectionId)?.subcategories.find((subcategory) => subcategory.id === subcategoryId) }
export function getFileClearance(file, section) { return file.clearance ?? section?.defaultClearance ?? 3 }
export function getArchiveFile(sectionId, fileId) {
  return getArchiveSection(sectionId)?.subcategories.flatMap((subcategory) => subcategory.files).find((file) => file.id === fileId)
}
export function countArchiveFiles(section) { return section.subcategories.reduce((total, subcategory) => total + subcategory.files.length, 0) }
