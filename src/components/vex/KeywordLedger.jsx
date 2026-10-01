import { useEffect, useMemo, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { VEX_CODES, VEX_INITIAL_STATE, VEX_KEYWORDS } from '../../pages/VexTerminal'

export default function KeywordLedger() {
  const { callsign } = useAuth()
  const storageKey = callsign ? `sot-vex-v1-${callsign}` : 'sot-vex-v1-anonymous'
  const [state, setState] = useState(() => { try { return { ...VEX_INITIAL_STATE, ...JSON.parse(localStorage.getItem(storageKey) || '{}') } } catch { return VEX_INITIAL_STATE } })
  const decrypted = useMemo(() => new Set(Object.entries(VEX_CODES).filter(([code]) => state.redeemed?.includes(code)).map(([, data]) => data.keyword)), [state.redeemed])
  useEffect(() => { const update = (event) => setState(event.detail); window.addEventListener('sot:vex-state', update); return () => window.removeEventListener('sot:vex-state', update) }, [])
  useEffect(() => { try { setState({ ...VEX_INITIAL_STATE, ...JSON.parse(localStorage.getItem(storageKey) || '{}') }) } catch { setState(VEX_INITIAL_STATE) } }, [storageKey])
  const toggleSound = () => { const enabled = !state.soundEnabled; const next = { ...state, soundEnabled: enabled }; localStorage.setItem(storageKey, JSON.stringify(next)); setState(next); window.dispatchEvent(new CustomEvent('sot:vex-audio', { detail: enabled })) }
  return <aside className="vex-ledger"><header><span>MEMORY LEDGER</span><strong>{state.discovered?.length ?? 0}/{VEX_KEYWORDS.length}</strong></header><div className="vex-ledger__grid">{VEX_KEYWORDS.map((keyword) => { const found = state.discovered?.includes(keyword); const isDecrypted = decrypted.has(keyword); return <span key={keyword} className={`vex-ledger__chip ${found ? 'is-found' : ''} ${isDecrypted ? 'is-decrypted' : ''}`}>{found ? keyword.toUpperCase() : '[?]'}</span> })}</div><button type="button" className={`vex-ledger__sound ${state.soundEnabled ? 'is-on' : ''}`} onClick={toggleSound}>{state.soundEnabled ? 'SOUND // ON' : 'SOUND // OFF'}</button></aside>
}