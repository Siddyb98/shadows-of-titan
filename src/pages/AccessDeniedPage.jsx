import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AccessDeniedPage() {
  const [showHint, setShowHint] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 font-mono">
      <div className="text-center max-w-2xl">
        <h1 className="font-display text-4xl md:text-6xl text-forge-magma animate-glitch mb-4">ACCESS DENIED</h1>
        <p className="text-aan-white/60 text-sm mb-2">SUBJECT: UNAUTHORIZED USER</p>
        <p className="text-aan-white/60 text-sm mb-8">CLEARANCE LEVEL REQUIRED: ASCENSION COUNCIL TIER ONLY</p>

        <p className="text-aan-white/40 text-xs leading-loose">
          This terminal is a protected asset of the Aegis Ascension Nexus.
          Attempts to breach this node will be logged and reported to the
          Tech Enforcement Bureau.
          <button type="button" onClick={() => setShowHint(true)} className="cursor-pointer bg-transparent border-0 p-0 text-inherit hover:text-forge-magma hover:animate-glitch transition-colors">.</button>
        </p>

        {showHint && (
          <div className="mt-8 p-4 border border-titan-emerald/30 bg-abyss/50 animate-flicker">
            <p className="text-titan-emerald text-xs tracking-widest mb-2">// HIDDEN FRAGMENT RECOVERED //</p>
            <p className="text-aan-white/70 text-sm">The old AI still speaks. Find it in the void.</p>
            <p className="text-aan-white/40 text-xs mt-2">HINT: The secret route exists at <Link to="/secret" className="text-titan-gold underline hover:animate-glitch">/secret</Link>. But the terminal will test you.</p>
          </div>
        )}

        <Link to="/" className="inline-block mt-12 text-xs text-aan-white/40 hover:text-titan-gold hover:animate-glitch transition-colors tracking-widest">[ RETURN TO SURFACE ]</Link>
      </div>
    </div>
  )
}
