import { Link } from 'react-router-dom'
import { STATUS_COLORS } from '../../data/titanMap'

export default function LocationPanel({ region, onClose }) {
  const color = STATUS_COLORS[region.status] ?? region.color ?? STATUS_COLORS.unindexed
  return <aside className="map-location-panel" style={{ borderColor: color }}>
    <div className="map-panel-head"><div><span>REGION FILE // {region.codename ?? 'HIDDEN ZONE'}</span><h2 style={{ color }}>{region.name}</h2></div><button type="button" onClick={onClose} aria-label="Close location panel">[CLOSE]</button></div>
    <div className="map-status" style={{ color }}><i style={{ background: color }} />STATUS: {region.status.toUpperCase()}</div>
    <div className="map-panel-section"><span>BRIEFING</span><p>{region.lore}</p></div>
    <div className="map-panel-section"><span>KEY LOCATIONS</span><ul>{region.keyLocations?.map((location) => <li key={location}>▸ {location}</li>)}</ul></div>
    {region.archiveLinks?.length > 0 && <div className="map-panel-section"><span>LINKED ARCHIVE FILES</span>{region.archiveLinks.map((link) => <Link key={link.to} to={link.to} style={{ color }}>&gt; {link.label}</Link>)}</div>}
    <div className="map-panel-footer">CLEARANCE LEVEL {region.clearanceRequired ?? 0} // CHAPTER {region.chapterRequired ?? 0}</div>
  </aside>
}
