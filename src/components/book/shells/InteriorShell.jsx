import { Link } from 'react-router-dom'
import LifeCounter from '../../../components/reader/LifeCounter'
import HungerMeter from '../../../components/reader/HungerMeter'

export default function InteriorShell({ meta, children, navigation }) {
  const mechanics = meta.mechanics ?? {}
  const isEscalation = meta.variant === 'escalation'

  return <div className={`recovery-page ${meta.variant === 'infiltration' ? 'recovery-page--infiltration' : ''}`}><div className="recovery-breadcrumb"><Link to="/">~/HOME</Link><span>/</span><Link to="/book">BOOK</Link><span>/</span><strong>CH. {meta.number}</strong></div><article className={`recovery-panel ${isEscalation ? 'recovery-panel--escalation' : ''}`}><header className="recovery-header"><div><p className="recovery-stamp">{meta.variant === 'infiltration' ? 'AAN DOMINION ACADEMY // STUDENT FILE: NYX' : 'CONSCIOUSNESS RECOVERY'}</p><p className="recovery-meta">{meta.variant === 'infiltration' ? 'CLEARANCE: INITIATE // MONITORED RECORD' : meta.subtitle ?? 'INTERIOR RECORD'}</p></div>{mechanics.lifeCounter && <LifeCounter baseline={meta.deathCount} />}<div className="recovery-title"><h1>{meta.title}</h1><span>{meta.cycleLabel ?? meta.variant?.toUpperCase() ?? 'CONTINUOUS SESSION'}</span></div><dl className="recovery-facts"><div><dt>POV</dt><dd>{meta.pov?.toUpperCase() ?? 'UNKNOWN'}</dd></div><div><dt>LOCALE</dt><dd>{meta.location?.replace(/-/g, ' ').toUpperCase() ?? 'UNKNOWN'}</dd></div><div><dt>STATUS</dt><dd>{meta.variant === 'infiltration' ? 'UNDER OBSERVATION' : 'STABILISING'}</dd></div></dl></header><div className="prose-recovery">{children}</div><footer className="recovery-footer"><span>// END RECORD</span>{meta.footerStamp && <span>{meta.footerStamp}</span>}</footer></article>{mechanics.hungerMeter && <HungerMeter curve={meta.hungerCurve ?? meta.slug} tone={meta.variant === 'infiltration' ? 'infiltration' : null} />}{navigation}</div>
}
