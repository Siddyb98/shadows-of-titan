import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useProgression } from '../../context/ProgressionContext'
import { FRAGMENT_KEYS, TOTAL_FRAGMENTS } from '../../data/fragmentKeys'
import ClearanceBar from '../../components/archives/ClearanceBar'

const messageClasses = {
  success: 'border-titan-emerald bg-titan-emerald/5 text-titan-emerald',
  error: 'border-forge-magma bg-forge-magma/5 text-forge-magma animate-flicker',
  info: 'border-cryo-blue bg-cryo-blue/5 text-cryo-blue',
}

export default function FragmentConsole() {
  const { fragments, addFragment } = useProgression()
  const [input, setInput] = useState('')
  const [message, setMessage] = useState(null)
  const heldKeys = Array.isArray(fragments) ? fragments : []

  const handleSubmit = (event) => {
    event.preventDefault()
    const attempt = input.trim().toUpperCase()
    if (!attempt) return
    if (heldKeys.includes(attempt)) {
      setMessage({ type: 'info', text: `// ${attempt} - ALREADY ARCHIVED` })
    } else if (FRAGMENT_KEYS[attempt]) {
      addFragment(attempt)
      setMessage({ type: 'success', text: `// FRAGMENT ACCEPTED - ${attempt} INTEGRATED INTO ARCHIVE` })
    } else {
      setMessage({ type: 'error', text: '// INVALID KEY - NO MATCH IN MASTER REGISTRY' })
    }
    setInput('')
  }

  return (
    <section className="archive-shell fragment-console">
      <div className="archive-breadcrumb"><Link to="/">~/HOME</Link><span>/</span><Link to="/archives">ARCHIVES</Link><span>/</span><strong>FRAGMENT CONSOLE</strong></div>
      <ClearanceBar />
      <div className="fragment-console-content">
        <p className="archive-card-code">AAN ARCHIVE TERMINAL // FRAGMENT INTEGRATION SUBSYSTEM</p>
        <h1>FRAGMENT CONSOLE</h1>
        <div className="fragment-console-intro">&gt; You have recovered fragments of the archive from across the world.<br />&gt; Enter each fragment key below to permanently integrate it.<br />&gt; Once integrated, a fragment key unlocks every dossier it references - globally.</div>
        <form onSubmit={handleSubmit} className="fragment-console-form"><span>KEY&gt;</span><input value={input} onChange={(event) => setInput(event.target.value)} spellCheck={false} autoFocus placeholder="ENTER FRAGMENT KEY" /><button type="submit">INTEGRATE</button></form>
        {message && <div className={`fragment-console-message ${messageClasses[message.type]}`}>{message.text}</div>}
        <div className="fragment-console-progress"><div><span>FRAGMENTS INTEGRATED</span><strong>{heldKeys.length} / {TOTAL_FRAGMENTS}</strong></div><div className="fragment-console-track"><div style={{ width: `${Math.min((heldKeys.length / TOTAL_FRAGMENTS) * 100, 100)}%` }} /></div></div>
        <div className="fragment-console-keys"><p>// INTEGRATED KEYS</p>{heldKeys.length === 0 ? <span>[ NONE - THE ARCHIVE AWAITS ]</span> : <ul>{heldKeys.map((key) => { const data = FRAGMENT_KEYS[key]; return <li key={key}><div><strong>{key}</strong><small>{data?.source ?? 'UNKNOWN'}</small></div>{data?.description && <p>{data.description}</p>}</li> })}</ul>}</div>
        <div className="fragment-console-note"><p>// FIELD NOTE - RECOVERY PROTOCOL</p>Fragment keys are recovered from chapters, VEX terminal inputs, hidden dossier cross-references, and the remains of AAN operations. The archive does not accept partial keys.</div>
      </div>
    </section>
  )
}
