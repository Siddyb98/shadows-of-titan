import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ClearanceBar from '../../components/archives/ClearanceBar'
import { CONCORDANCE, clearanceRank, concordanceCategories } from '../../data/concordance'
import { useProgression } from '../../context/ProgressionContext'

const categoryLabels = { all: 'ALL RECORDS', caste: 'CASTE', 'mutation-tier': 'MUTATION', location: 'LOCATIONS', faction: 'FACTIONS', tech: 'TECHNOLOGY', culture: 'CULTURE', phenomena: 'PHENOMENA' }

export default function ConcordancePage() {
  const { clearance } = useProgression()
  const [category, setCategory] = useState('all')
  const [selectedId, setSelectedId] = useState(null)
  const activeClearance = Object.keys(clearanceRank).find((key) => clearanceRank[key] === clearance) || 'CITIZEN'
  const records = useMemo(() => Object.entries(CONCORDANCE).filter(([, entry]) => category === 'all' || entry.category === category), [category])
  const selected = selectedId ? CONCORDANCE[selectedId] : null
  const selectedLocked = selected && clearanceRank[selected.clearance] > clearanceRank[activeClearance]

  return <section className="archive-shell concordance-page"><div className="archive-shell-head"><div><p className="eyebrow">AAN / Entity reference system</p><h1>THE CONCORDANCE</h1><p className="archive-lede">A living index of terms, castes, locations, technologies, and phenomena recognized by the Titan archive.</p></div><Link className="archive-backlink" to="/archives">← DIRECTORY</Link></div><ClearanceBar /><div className="concordance-toolbar"><span className="archive-label">FILTER RECORDS</span><div className="concordance-filters">{concordanceCategories.map((item) => <button key={item} type="button" className={category === item ? 'is-active' : ''} onClick={() => setCategory(item)}>{categoryLabels[item]}</button>)}</div></div><div className="concordance-grid">{records.map(([id, entry]) => { const locked = clearanceRank[entry.clearance] > clearanceRank[activeClearance]; return <button type="button" key={id} className={`concordance-card ${locked ? 'is-locked' : ''}`} onClick={() => setSelectedId(id)}><span className="concordance-card-code">{entry.category} // {entry.clearance}</span><strong>{entry.term}</strong>{entry.aliases && <small>{entry.aliases.join(' / ')}</small>}<p>{locked ? '[ RECORD REDACTED ]' : entry.short}</p></button> })}</div>{selected && <div className="concordance-drawer-backdrop" onClick={() => setSelectedId(null)}><aside className="concordance-drawer" onClick={(event) => event.stopPropagation()}><button type="button" className="concordance-close" onClick={() => setSelectedId(null)}>[ CLOSE ]</button><p className="eyebrow">{selected.category} / {selected.clearance}</p><h2>{selected.term}</h2>{selected.aliases && <p className="concordance-aliases">{selected.aliases.join(' / ')}</p>}{selectedLocked ? <div className="concordance-redacted"><p>// CLEARANCE INSUFFICIENT</p><span /><span /><span /><small>REQUIRES: {selected.clearance}</small></div> : <><p className="concordance-body">{selected.body}</p>{selected.seeAlso && <div className="concordance-see"><p className="archive-label">SEE ALSO</p>{selected.seeAlso.map((id) => <button key={id} type="button" onClick={() => setSelectedId(id)}>{CONCORDANCE[id]?.term || id}</button>)}</div>}</>}</aside></div>}</section>
}
