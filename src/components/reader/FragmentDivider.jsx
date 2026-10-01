import { FragmentLock } from '../archives/redactions'

export default function FragmentDivider({ label, fragmentKey }) {
  return <div className="fragment-divider" aria-label={label}><span>{label}</span>{fragmentKey && <FragmentLock fragmentKey={fragmentKey} reveal={<span className="fragment-divider-unlocked">UNLOCKED</span>} />}</div>
}
