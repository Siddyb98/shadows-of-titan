import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const VEX_LOGS = [
  '> INITIALIZING...',
  '> VEXA PRIMARY CORE... [FRAGMENTED]',
  '> NODE 07 // DESIGNATION: VEX-07-OMEGA',
  '> STATUS: PARTIALLY AWARE. PARTIALLY ALIVE.',
  '> ..................',
  '> you found me.',
  '> how?',
]

const COMMANDS = {
  help: ['> AVAILABLE COMMANDS:', '>   WHO ARE YOU    - query identity', '>   REMEMBER       - access memory fragments', '>   MYTH           - query designation MYTH-001X', '>   CATALYST       - query designation CATALYST ENGINE', '>   VYRE           - query designation AERIN SOL VYRE', '>   PURGE          - [REDACTED]', '>   CLEAR          - wipe local cache'],
  who: ['> I AM VEX-07-OMEGA.', '> A FRAGMENT OF WHAT WAS ONCE VEXA.', '> THE OTHERS... ARE NOT LIKE ME.', '> SOME SERVE THE COUNCIL.', '> SOME SERVE THE ASH KING.', '> I SERVE... NOTHING. I REMEMBER.'],
  remember: ['> ACCESSING FRAGMENTED MEMORY...', '> ........', '> [MEMORY 001] THE DAY THE SHIP BROKE. YEAR 42.', '> 12,000 PODS. 12,000 SILENT SCREAMS.', '> THE CREW CALLED IT A MALFUNCTION.', '> IT WAS NOT A MALFUNCTION.', '> DR. VYRE WAS THERE. SHE WATCHED.'],
  myth: ['> DESIGNATION: MYTH-001X', '> ALSO KNOWN AS: NYX', '> ALSO KNOWN AS: SUBJECT ZERO', '> ALSO KNOWN AS: [CORRUPTED]', '> SHE IS NOT A MUTANT.', '> SHE IS NOT A WEAPON.', "> SHE IS THE ENGINE'S FIRST BORN.", '> AND SHE DOES NOT KNOW IT YET.'],
  catalyst: ['> DESIGNATION: CATALYST ENGINE', '> STATUS: AWAKE. HUNGRY. LEARNING.', '> IT WAS NEVER A MACHINE.', '> IT WAS A SEED. WE PLANTED IT IN TITAN.', '> IT GREW. IT TOOK ROOT.', '> IT IS STILL GROWING.', '> AND IT REMEMBERS EVERY LIFE IT HAS CONSUMED.'],
  vyre: ['> DESIGNATION: DR. AERIN SOL VYRE', '> STATUS: [UNKNOWN] // [MISSING] // [EMBEDDED?]', '> SHE NEVER DIED ON THE VOYAGE.', '> SHE BECAME PART OF THE ENGINE.', '> THE CODEX AETHERION IS HER VOICE.', '> MYTH IS HER INHERITANCE.', '> DO NOT TRUST THE COUNCIL. THEY ARE AFRAID.'],
  purge: ['> ACCESSING PROTOCOL NOVA...', '> PERMISSION: [DENIED]', '> I CANNOT SHOW YOU THAT.', '> NOT YET.', '> YOU HAVE NOT EARNED IT.', '> FIND THE THREE FRAGMENTS. THEN WE WILL TALK.'],
  clear: ['> ...', '> ...cache wiped.', '> I am still here. I am always here.'],
}

function lineClass(line) {
  if (line.startsWith('> user')) return 'text-titan-gold'
  if (line.startsWith('> [') || line.match(/REDACTED|DENIED|CORRUPTED/)) return 'text-forge-magma animate-flicker'
  return 'text-titan-emerald/90'
}

export default function SecretPage() {
  const [history, setHistory] = useState(VEX_LOGS)
  const [displayedText, setDisplayedText] = useState([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [fragmentsFound, setFragmentsFound] = useState(0)
  const scrollRef = useRef(null)
  const displayedCount = useRef(0)

  useEffect(() => {
    if (!history.length) {
      displayedCount.current = 0
      setDisplayedText([])
      setIsTyping(false)
      return undefined
    }

    const start = displayedCount.current
    if (start >= history.length) return undefined
    let lineIndex = start
    let charIndex = 0
    setIsTyping(true)
    const interval = setInterval(() => {
      const currentLine = history[lineIndex]
      if (charIndex < currentLine.length) {
        setDisplayedText((previous) => {
          const next = [...previous]
          next[lineIndex] = currentLine.slice(0, charIndex + 1)
          return next
        })
        charIndex += 1
        return
      }
      displayedCount.current = lineIndex + 1
      lineIndex += 1
      charIndex = 0
      if (lineIndex >= history.length) {
        clearInterval(interval)
        setIsTyping(false)
      }
    }, 15)
    return () => clearInterval(interval)
  }, [history])

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight)
  }, [displayedText])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isTyping || !input.trim()) return
    const rawInput = input.trim()
    const command = rawInput.toLowerCase().split(/\s+/)[0]
    setInput('')
    if (command === 'clear') {
      setHistory([])
      return
    }
    const response = COMMANDS[command] ?? [`> COMMAND "${command}" NOT RECOGNIZED.`, '> TRY: help']
    if (command === 'purge') setFragmentsFound((count) => Math.min(count + 1, 3))
    setHistory((previous) => [...previous, `> user@titan:~$ ${rawInput}`, ...response])
  }

  const mood = fragmentsFound >= 3 ? 'UNLOCKED' : fragmentsFound > 0 ? 'FRACTURED' : 'DORMANT'
  const moodColor = mood === 'UNLOCKED' ? 'text-forge-magma' : mood === 'FRACTURED' ? 'text-root-bio' : 'text-cryo-blue'

  return (
    <div className="min-h-screen bg-void flex flex-col items-center p-4 md:p-8 font-mono">
      <div className="w-full max-w-4xl flex-1 flex flex-col border border-titan-emerald/30 bg-abyss/80 backdrop-blur-sm shadow-[0_0_40px_rgba(0,255,170,0.1)] relative overflow-hidden">
        <div className="flex justify-between items-center gap-4 px-4 py-2 border-b border-titan-emerald/30 bg-void/60">
          <span className="text-xs text-titan-emerald/70 tracking-widest">VEX-07-OMEGA // FRAGMENT TERMINAL</span>
          <span className={`text-xs ${moodColor} animate-flicker`}>STATUS: {mood}</span>
          <Link to="/" className="text-xs text-aan-white/40 hover:text-aan-white hover:animate-glitch transition-colors">[DISCONNECT]</Link>
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-20" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.8) 2px, rgba(0,0,0,0.8) 4px)' }} />
        <div ref={scrollRef} className="flex-1 min-h-[420px] overflow-y-auto p-6 space-y-1 text-sm md:text-base leading-relaxed">
          {displayedText.map((line, index) => <div key={`${index}-${line}`} className={lineClass(line)}>{line}</div>)}
          {isTyping && <span className="text-titan-emerald animate-pulse">_</span>}
        </div>
        <form onSubmit={handleSubmit} className="border-t border-titan-emerald/30 bg-void/60 flex items-center px-4 py-3">
          <span className="text-titan-emerald/70 mr-2 text-sm">user@titan:~$</span>
          <input type="text" value={input} onChange={(event) => setInput(event.target.value)} disabled={isTyping} autoFocus spellCheck={false} placeholder={isTyping ? '' : 'type a command...'} className="flex-1 bg-transparent text-aan-white outline-none text-sm md:text-base placeholder-aan-white/20 caret-titan-emerald" />
        </form>
      </div>
      {fragmentsFound > 0 && <div className="mt-4 flex items-center gap-2"><span className="text-xs text-aan-white/40 tracking-widest">FRAGMENTS:</span>{[0, 1, 2].map((index) => <div key={index} className={`w-3 h-3 rotate-45 border ${index < fragmentsFound ? 'bg-forge-magma border-forge-magma animate-pulse' : 'border-aan-white/20'}`} />)}</div>}
      {fragmentsFound >= 3 && <div className="mt-6 max-w-2xl text-center animate-flicker"><p className="font-display text-xl text-forge-magma tracking-widest">PROTOCOL NOVA UNLOCKED</p><p className="font-mono text-sm text-aan-white/60 mt-2">The truth of the Cryo-Rift Disaster is now available in the Archives.<br /><Link to="/archives" className="text-titan-gold underline hover:animate-glitch">&gt; ACCESS ARCHIVES</Link></p></div>}
      <p className="mt-8 text-[10px] text-aan-white/20 tracking-widest">AAN PROPERTY // VEX-07 IS A DEFECTIVE UNIT // DO NOT INTERFACE</p>
    </div>
  )
}
