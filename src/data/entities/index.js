import { DOSSIERS } from '../dossiers'
import { CONCORDANCE } from '../concordance'

export const ENTITIES = {
  ...Object.fromEntries(Object.keys(DOSSIERS).map((id) => [id, { id, type: 'character', codename: id, component: DOSSIERS[id] }])),
  ...Object.fromEntries(Object.entries(CONCORDANCE).map(([id, entry]) => [id, { id, type: 'term', ...entry }])),
}

export const lookupEntity = (id) => ENTITIES[id] ?? null
