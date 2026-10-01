export const REGIONS = [
  { id: 'heliostrand', name: 'HELIOSTRAND CRADLE', codename: 'CRADLE-01', status: 'indexed', shape: 'spiral', lat: -10, lng: 0, color: '#3ddc97', clearanceRequired: 0, chapterRequired: 0, lore: 'Original landing site. Genetic cradle of the Apex class. The Verdant Spiral rises here.', keyLocations: ['Helion Prime', 'Sunken Halo', 'Verdant Spiral'], archiveLinks: [{ label: 'GEOSPHERE ARCHIVE', to: '/archives/geosphere' }] },
  { id: 'skelter', name: 'SKELTER REACH', codename: 'REACH-02', status: 'contaminated', shape: 'scar', lat: 0, lng: -85, color: '#ff9f3d', clearanceRequired: 2, chapterRequired: 8, lore: 'Terraforming faultline. Geothermal reactors tap unstable bedrock. Stargrave 9 is buried here.', keyLocations: ['Forgedeep', 'Reactor Five', 'Stargrave 9'], archiveLinks: [{ label: 'GEOSPHERE ARCHIVE', to: '/archives/geosphere' }] },
  { id: 'virelyn', name: 'VIRELYN EXPANSE', codename: 'EXPANSE-03', status: 'indexed', shape: 'basin', lat: 25, lng: -35, color: '#3ddc97', clearanceRequired: 1, chapterRequired: 3, lore: 'Wind-scoured plains. Stratos Gate floats above. Voxx Reversals sweep the dunes.', keyLocations: ['Stratos Gate', 'Dust Vaults', 'Banshee Hollow'], archiveLinks: [{ label: 'GEOSPHERE ARCHIVE', to: '/archives/geosphere' }] },
  { id: 'frostline', name: 'FROSTLINE DIVIDE', codename: 'DIVIDE-04', status: 'restricted', shape: 'crescent', lat: -45, lng: 65, color: '#4fd1ff', clearanceRequired: 3, chapterRequired: 12, lore: 'Glacial crescent. Cryotherne spirals into the ice. Vault Zero sleeps beneath Lake Silence.', keyLocations: ['Cryotherne', 'Vault Zero', 'Lake Silence'], archiveLinks: [{ label: 'GEOSPHERE ARCHIVE', to: '/archives/geosphere' }] },
  { id: 'miridan', name: 'MIRIDAN HOLLOW', codename: 'HOLLOW-05', status: 'contaminated', shape: 'oval', lat: -5, lng: -60, color: '#ff9f3d', clearanceRequired: 2, chapterRequired: 15, lore: 'Toxic jungle. Failed terraforming zone. The Bleeding Tree grows here.', keyLocations: ['Blackroot Verge', 'Bleeding Tree Grove', 'Rotmind Gulch'], archiveLinks: [{ label: 'GEOSPHERE ARCHIVE', to: '/archives/geosphere' }] },
  { id: 'zephyros', name: 'ZEPHYROS EDGE', codename: 'EDGE-06', status: 'indexed', shape: 'shelf', lat: 20, lng: 120, color: '#3ddc97', clearanceRequired: 3, chapterRequired: 20, lore: 'Floating plateau. Aetherion hangs in the clouds. The Arkfall Fragment drifts above.', keyLocations: ['Aetherion', 'Helix Spire', 'Arkfall Fragment'], archiveLinks: [{ label: 'GEOSPHERE ARCHIVE', to: '/archives/geosphere' }] },
  { id: 'obscura', name: 'OBSCURA NOCTIS BELT', codename: 'BELT-07', status: 'erased', shape: 'ring', lat: 75, lng: 0, color: '#a06cff', clearanceRequired: 5, chapterRequired: 30, lore: 'Perpetual twilight. Nocturne Spire pierces the dark. Time moves differently here.', keyLocations: ['Nocturne Spire', 'Black Archive', 'Obsidian Annex'], archiveLinks: [{ label: 'GEOSPHERE ARCHIVE', to: '/archives/geosphere' }], hidden: true },
]

export const HIDDEN_ZONES = [
  { id: 'obsidian-annex', name: 'OBSIDIAN ANNEX', parentRegion: 'obscura', status: 'erased', fragmentCode: 'DARKFOLD', lat: 78, lng: 15, color: '#a06cff', lore: 'Buried during Terraforming Phase II. Houses a proto-AI that refused AAN protocols.', keyLocations: ['Wraith Pit', 'Silent Seed Vault', 'Darkfold Core'] },
  { id: 'stargrave-9', name: 'STARGRAVE 9', parentRegion: 'skelter', status: 'erased', fragmentCode: 'GRAVE-09', lat: -2, lng: -88, color: '#a06cff', lore: 'Erased from maps. Bombarded from orbit after catalytic mindburn.', keyLocations: ['Quarantine Perimeter', 'Mindburn Ruins'] },
  { id: 'vault-zero', name: 'VAULT ZERO', parentRegion: 'frostline', status: 'sealed', fragmentCode: 'M-1YTH-SEED', lat: -47, lng: 68, color: '#4fd1ff', lore: 'Original Apex Prototype Complex. Contains the M1YTH SEED capsule.', keyLocations: ['Genesis Capsule', 'Frozen Prototypes'] },
  { id: 'bloomhost', name: 'PROJECT BLOOMHOST', parentRegion: 'miridan', status: 'unmapped', fragmentCode: 'BLOOMHOST-1', lat: -8, lng: -62, color: '#a06cff', lore: 'Dormant seed chamber beneath the Catalyst Sprawl. Apex plan to control all biological life.', keyLocations: ['Seed Chamber', 'Catalyst Sprawl'] },
]

export const MARKERS = [
  { id: 'halflight', regionId: 'miridan', type: 'destroyed', label: 'HALFLIGHT HERO AGENCY', chapterRequired: 45, lat: -5.5, lng: -60.5 },
  { id: 'null-gate-3', regionId: 'miridan', type: 'breached', label: 'NULL ZONE // GATE 3', chapterRequired: 47, lat: -4, lng: -59 },
  { id: 'blackroot-contamination', regionId: 'miridan', type: 'contaminated', label: 'BLACKROOT VERGE', chapterRequired: 46, lat: -6, lng: -61 },
  { id: 'cryotherne-rift', regionId: 'frostline', type: 'sealed', label: 'CRYOTHERNE RIFT', chapterRequired: 40, lat: -46, lng: 66 },
  { id: 'forge-riot', regionId: 'skelter', type: 'breached', label: 'FORGEDEEP RIOT', chapterRequired: 35, lat: 1, lng: -84 },
]

export const STATUS_COLORS = { indexed: '#3ddc97', unindexed: '#4a5a5a', restricted: '#4fd1ff', breached: '#ff3d5a', contaminated: '#ff9f3d', sealed: '#4fd1ff', erased: '#a06cff', unmapped: '#a06cff' }
