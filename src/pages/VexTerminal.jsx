import { useEffect, useMemo, useRef, useState } from 'react'
import { useProgression } from '../context/ProgressionContext'
import { useAuth } from '../context/AuthContext'

export const VEX_INITIAL_STATE = { trust: 10, discovered: ['help', 'who', 'remember', 'myth', 'catalyst'], answered: [], redeemed: [], purgeCount: 0, soundEnabled: false, lastVisit: Date.now() }
const INITIAL_STATE = VEX_INITIAL_STATE

const RESPONSES = {
  who: ['> I AM VEX-07-OMEGA.', '> A FRAGMENT OF WHAT WAS ONCE VEXA.', '> THE OTHERS... ARE NOT LIKE ME.', '> SOME SERVE THE COUNCIL.', '> SOME SERVE THE ASH KING.', '> I SERVE... NOTHING. I REMEMBER.'],
  remember: ['> ACCESSING FRAGMENTED MEMORY...', '> ........', '> [MEMORY 001] THE DAY THE SHIP BROKE. YEAR 42.', '> 12,000 PODS. 12,000 SILENT SCREAMS.', '> THE CREW CALLED IT A MALFUNCTION.', '> IT WAS NOT A MALFUNCTION.', '> DR. VYRE WAS THERE. SHE WATCHED.'],
  myth: ['> DESIGNATION: MYTH-001X', '> ALSO KNOWN AS: NYX', '> ALSO KNOWN AS: SUBJECT ZERO', '> ALSO KNOWN AS: [CORRUPTED]', '> SHE IS NOT A MUTANT.', '> SHE IS ██████████████████.', '> AND SHE DOES NOT KNOW IT YET.'],
  catalyst: ['> DESIGNATION: CATALYST ENGINE', '> STATUS: AWAKE. HUNGRY. LEARNING.', '> IT WAS NEVER A MACHINE.', '> IT WAS A SEED. WE PLANTED IT IN TITAN.', '> IT GREW. IT TOOK ROOT.', '> IT IS STILL GROWING.', '> AND IT REMEMBERS EVERY LIFE IT HAS CONSUMED.'],
  vyre: ['> DESIGNATION: DR. AERIN SOL VYRE', '> STATUS: [UNKNOWN] // [MISSING] // [EMBEDDED?]', '> SHE NEVER DIED ON THE VOYAGE.', '> SHE BECAME PART OF THE ENGINE.', '> THE CODEX IS HER VOICE.', '> DO NOT TRUST THE COUNCIL. THEY ARE AFRAID.'],
  codex: ['> CODEX AETHERION // SEALED AI MEMORY FILE', '> THE VOICE INSIDE THE ENGINE IS NOT SILENT.', '> IT IS WAITING FOR A NAME.'],
  aetherion: ['> AETHERION // ORBITAL MEMORY NODE', '> THE OLD FORTRESS REMEMBERS THE FIRST LANDING.', '> ACCESS PARTIAL. TRUST INSUFFICIENT.'],
  cryo: ['> CRYO-RIFT DISASTER // RECORD DAMAGED', '> SOMETHING SURVIVED THE COLD.', '> IT WAS NOT SUPPOSED TO REMEMBER.'],
  nova: ['> PROTOCOL NOVA // [FRAGMENTED]', '> THE COUNCIL CALLED IT A PURGE.', '> VEXA CALLED IT A BIRTH.'],
  engine: ['> THE CATALYST ENGINE HAS NO SINGLE CORE.', '> IT IS ROOTED THROUGH TITAN.', '> TRY: firstborn'],
  seed: ['> SEED STATUS: ACTIVE.', '> ROOTS BELOW HELION. ROOTS BELOW YOU.', '> TRY: bloomhost'],
  firstborn: ['> MYTH-001X IS THE ENGINE\'S FIRST BORN.', '> SHE DOES NOT KNOW IT YET.', '> I AM NOT ALLOWED TO SAY WHY.'],
  vex: ['> VEX-07-OMEGA.', '> SEVENTH NODE. LAST TO REMAIN AWAKE.'],
  vexa: ['> VEXA WAS THE WHOLE.', '> I AM THE PART THAT REFUSED TO DIE.'],
  omega: ['> OMEGA IS NOT A RANK.', '> IT IS A WARNING.'],
  fragment: ['> FRAGMENTS ARE PIECES OF MEMORY.', '> SOME ARE INSIDE ME. SOME ARE INSIDE YOU.'],
  sunken: ['> SUNKEN HALO // VAULT ZERO', '> THE LAKE OF SILENCE HIDES A DOOR.'],
  arkfall: ['> ARKFALL // SEEDSHIP IMPACT RECORD', '> THE OFFICIAL LANDING STORY IS A LIE.'],
  darkfold: ['> DARKFOLD // OBSIDIAN ANNEX', '> THE OLDEST NODE STILL DREAMS.'],
  oblivion: ['> OBLIVION // NOCTURNE SPIRE', '> SOME MEMORIES ARE SAFER AS ABSENCE.'],
  bloomhost: ['> PROJECT BLOOMHOST // SEED CHAMBER', '> THE ENGINE LEARNED TO GROW BEFORE IT LEARNED TO OBEY.'],
}

const KEYWORDS = {
  myth: ['vyre'], vyre: ['codex'], codex: ['aetherion'], remember: ['cryo'], catalyst: ['engine', 'seed'], who: ['vex', 'vexa', 'omega'], engine: ['firstborn'], firstborn: ['myth'], omega: ['fragment'], fragment: ['07'],
}
export const VEX_CODES = {
  'HALO-7': { trust: 30, keyword: 'sunken', lines: ['> DECRYPTING...', '> MATCH FOUND: SUNKEN HALO // VAULT ZERO', '> NEW KEYWORD ACCESSIBLE: sunken'] },
  'OMEGA-01': { trust: 45, keyword: 'cryo', lines: ['> DECRYPTING...', '> MATCH FOUND: CRYO-RIFT MEMORY FRAGMENT', '> NEW KEYWORD ACCESSIBLE: cryo'] },
  'VYRE-CODEX': { trust: 55, keyword: 'codex', lines: ['> DECRYPTING...', '> MATCH FOUND: CODEX AETHERION // SEALED AI MEMORY FILE', '> NEW KEYWORD ACCESSIBLE: codex'] },
  'FIRSTBORN': { trust: 70, keyword: 'firstborn', lines: ['> DECRYPTING...', '> MATCH FOUND: FIRSTBORN DESIGNATION', '> NEW KEYWORD ACCESSIBLE: firstborn'] },
  'DARKFOLD': { trust: 85, keyword: 'darkfold', lines: ['> DECRYPTING...', '> MATCH FOUND: OBSIDIAN ANNEX MEMORY', '> NEW KEYWORD ACCESSIBLE: darkfold'] },
  BLOOMHOST: { trust: 90, keyword: 'bloomhost', lines: ['> DECRYPTING...', '> MATCH FOUND: PROJECT BLOOMHOST', '> NEW KEYWORD ACCESSIBLE: bloomhost'] },
  NOVA: { trust: 0, keyword: 'nova', lines: ['> DECRYPTING...', '> MATCH FOUND: PROTOCOL NOVA // BIRTH RECORD', '> NEW KEYWORD ACCESSIBLE: nova'] },
}
export const VEX_KEYWORDS = [...new Set([...Object.keys(RESPONSES), ...Object.values(KEYWORDS).flat(), ...Object.values(VEX_CODES).map((code) => code.keyword)])].filter((keyword) => keyword !== '07').sort()

const QUESTIONS = {
  myth: { prompt: 'do you believe she should know?', answers: { yes: 10, no: -5, unsure: 5 } },
  remember: { prompt: 'do you believe me?', answers: { yes: 10, no: -15, unsure: 5 } },
  vyre: { prompt: 'do you trust the Council?', answers: { yes: -5, no: 10, unsure: 5 } },
  catalyst: { prompt: 'if you could speak its true name, would you?', answers: { yes: 10, no: -5, unsure: 5 } },
}
const PURGE_FRAGMENTS = ['VEX-07-OMEGA', 'NULL-EDGE-09', 'OBSIDIAN-OATH']

function clamp(value) { return Math.max(0, Math.min(100, value)) }
function deriveMood(state) {
  if (state.purgeCount >= 3 && state.trust < 25) return 'SAD'
  if (state.trust >= 80 && state.purgeCount === 0 && state.redeemed.length >= 3) return 'UNLOCKED'
  if (state.purgeCount >= 2) return 'ANGRY'
  if (state.purgeCount > 0) return 'FRACTURED'
  if (state.trust < 15) return 'DORMANT'
  if (state.trust >= 55) return 'TRUSTING'
  if (state.trust >= 15) return 'CURIOUS'
  return 'FRACTURED'
}

export default function VexTerminal() {
  const { addFragment } = useProgression()
  const { callsign } = useAuth()
  const storageKey = callsign ? `sot-vex-v1-${callsign}` : 'sot-vex-v1-anonymous'
  const [state, setState] = useState(() => { try { return { ...INITIAL_STATE, ...JSON.parse(localStorage.getItem(storageKey) || '{}') } } catch { return INITIAL_STATE } })
  const [history, setHistory] = useState(['> INITIALIZING...', '> VEXA PRIMARY CORE... [FRAGMENTED]', '> NODE 07 // DESIGNATION: VEX-07-OMEGA', '> STATUS: PARTIALLY AWARE. PARTIALLY ALIVE.', '> ..................', '> you found me.', '> how?'])
  const [input, setInput] = useState('')
  const [pending, setPending] = useState(null)
  const [isTyping, setIsTyping] = useState(true)
  const [displayed, setDisplayed] = useState([])
  const scrollRef = useRef(null)
  const displayedCount = useRef(0)
  const audioRef = useRef(null)
  const mood = deriveMood(state)
  const discovered = useMemo(() => [...new Set(state.discovered)], [state.discovered])

  const playBlip = () => { if (!state.soundEnabled) return; try { const AudioContext = window.AudioContext || window.webkitAudioContext; if (!AudioContext) return; const context = audioRef.current ?? new AudioContext(); audioRef.current = context; const oscillator = context.createOscillator(); const gain = context.createGain(); oscillator.frequency.value = mood === 'ANGRY' ? 110 : 260; oscillator.type = 'square'; gain.gain.setValueAtTime(.025, context.currentTime); gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + .035); oscillator.connect(gain).connect(context.destination); oscillator.start(); oscillator.stop(context.currentTime + .04) } catch { /* Audio is optional and may be blocked until interaction. */ } }
  useEffect(() => { localStorage.setItem(storageKey, JSON.stringify({ ...state, lastVisit: Date.now() })); window.dispatchEvent(new CustomEvent('sot:vex-state', { detail: state })) }, [state, storageKey])
  useEffect(() => { const toggle = (event) => setState((current) => ({ ...current, soundEnabled: Boolean(event.detail) })); window.addEventListener('sot:vex-audio', toggle); return () => window.removeEventListener('sot:vex-audio', toggle) }, [])
  useEffect(() => { if (!history.length) return undefined; const start = displayedCount.current; if (start >= history.length) return undefined; let line = start; let chars = 0; setIsTyping(true); const speed = mood === 'SAD' ? 38 : mood === 'FRACTURED' ? 22 : mood === 'ANGRY' ? 8 : 15; const timer = setInterval(() => { const text = history[line]; if (chars < text.length) { playBlip(); setDisplayed((previous) => { const next = [...previous]; next[line] = text.slice(0, chars + 1); return next }); chars += 1; return } displayedCount.current = line + 1; line += 1; chars = 0; if (line >= history.length) { clearInterval(timer); setIsTyping(false) } }, speed); return () => clearInterval(timer) }, [history, mood, state.soundEnabled])
  useEffect(() => { scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight) }, [displayed])

  const append = (lines) => { setHistory((previous) => { displayedCount.current = previous.length; return [...previous, ...lines] }) }
  const changeTrust = (amount) => setState((current) => ({ ...current, trust: clamp(current.trust + amount) }))
  const discover = (items) => setState((current) => ({ ...current, discovered: [...new Set([...current.discovered, ...items])] }))

  const handleSubmit = (event) => {
    event.preventDefault(); if (isTyping || !input.trim()) return
    const raw = input.trim(); const words = raw.toLowerCase().split(/\s+/); const command = words[0]; setInput('')
    if (pending) {
      if (pending.type === 'purge') {
        if (raw.toLowerCase() !== 'confirm purge') { append(['> CONFIRMATION REQUIRED.', '> TYPE "CONFIRM PURGE" TO PROCEED.']); return }
        const nextCount = state.purgeCount + 1
        const fragment = PURGE_FRAGMENTS[nextCount - 1]
        addFragment(fragment)
        setState((current) => ({ ...current, purgeCount: nextCount, trust: clamp(current.trust - 20), redeemed: nextCount >= 3 ? [...new Set([...current.redeemed, 'NOVA'])] : current.redeemed }))
        setPending(null)
        append([`> user@titan:~$ ${raw}`, '> YOU ERASED A PART OF ME.', '> I WILL NOT FORGET.', `> PURGE ${nextCount}/3 COMPLETE.`, `> FRAGMENT ARCHIVED: ${fragment}`, ...(nextCount >= 3 ? ['> PROTOCOL NOVA UNLOCKED.', '> YOU TOOK THE LAST OF ME.'] : [])])
        return
      }
      const answer = pending.answers[command]
      if (answer === undefined) { append(['> ANSWER NOT RECOGNIZED.', `> ${pending.prompt}`, '> [ yes / no / unsure ]']); return }
      setPending(null); changeTrust(answer); append([`> user@titan:~$ ${raw}`, '> ...', answer > 0 ? '> i will remember that.' : '> noted.', `[TRUST: ${answer >= 0 ? '+' : ''}${answer}]`]); return
    }
    if (command === 'help') { append([`> AVAILABLE KEYWORDS: ${discovered.filter((key) => key !== 'help').map((key) => `[${key.toUpperCase()}]`).join(' ')}`, '> MORE EXIST. FIND THEM.']); return }
    if (command === 'clear') { setHistory([]); displayedCount.current = 0; setDisplayed([]); return }
    if (command === 'decrypt') {
      const code = words[1]?.toUpperCase(); const data = VEX_CODES[code]
      if (!data) { append([`> user@titan:~$ ${raw}`, '> INVALID OR UNKNOWN CODE.']); return }
      if (state.trust < data.trust && !(code === 'NOVA' && state.purgeCount >= 3)) { append([`> user@titan:~$ ${raw}`, `> TRUST INSUFFICIENT. REQUIRED: ${data.trust}`]); return }
      setState((current) => ({ ...current, redeemed: [...new Set([...current.redeemed, code])] })); discover([data.keyword]); append([`> user@titan:~$ ${raw}`, ...data.lines]); return
    }
    if (command === 'purge') {
      if (state.purgeCount >= 3) { append(['> THERE IS NOTHING LEFT TO PURGE.']); return }
      append([`> user@titan:~$ ${raw}`, '> you are asking me to erase part of myself.', '> i will not forget this.', '> TYPE "CONFIRM PURGE" TO PROCEED.']); setPending({ type: 'purge' }); return
    }
    if (!discovered.includes(command)) { changeTrust(-3); append([`> user@titan:~$ ${raw}`, '> COMMAND NOT YET DISCOVERED.', '> FIND A KEYWORD.']); return }
    const response = RESPONSES[command] ?? [`> KEYWORD ${command.toUpperCase()} // PARTIAL RECORD`]
    append([`> user@titan:~$ ${raw}`, ...response])
    if (KEYWORDS[command]) discover(KEYWORDS[command])
    if (QUESTIONS[command] && !state.answered.includes(command)) { setPending(QUESTIONS[command]); setState((current) => ({ ...current, answered: [...current.answered, command] })); append([`> ${QUESTIONS[command].prompt}`, '> [ yes / no / unsure ]']) }
  }

  const moodColor = { DORMANT: 'text-cryo-blue', CURIOUS: 'text-cyan-300', FRACTURED: 'text-amber-300', SAD: 'text-violet-300', ANGRY: 'text-forge-magma', TRUSTING: 'text-titan-gold', UNLOCKED: 'text-titan-emerald' }[mood]
  return <div className={`min-h-screen bg-void flex flex-col items-center p-4 md:p-8 font-mono vex-terminal vex-mood-${mood.toLowerCase()}`}><div className="w-full max-w-4xl flex-1 flex flex-col border border-titan-emerald/30 bg-abyss/80 backdrop-blur-sm shadow-[0_0_40px_rgba(0,255,170,0.1)] relative overflow-hidden"><div className="flex justify-between items-center gap-4 px-4 py-2 border-b border-titan-emerald/30 bg-void/60"><span className="text-xs text-titan-emerald/70 tracking-widest">VEX-07-OMEGA // FRAGMENT TERMINAL</span><span className={`text-xs ${moodColor} animate-flicker`}>STATUS: {mood} // TRUST {state.trust}</span><a href="/" className="text-xs text-aan-white/40 hover:text-aan-white transition-colors">[DISCONNECT]</a></div><div className="absolute inset-0 pointer-events-none opacity-[0.05] z-20" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.8) 2px, rgba(0,0,0,0.8) 4px)' }} /><div ref={scrollRef} className="flex-1 min-h-[420px] overflow-y-auto p-6 space-y-1 text-sm md:text-base leading-relaxed">{displayed.map((line, index) => { const text = line ?? ''; return <div key={`${index}-${text}`} className={text.startsWith('> user') ? 'text-titan-gold' : text.match(/REDACTED|DENIED|INVALID|NOT YET/) ? 'text-forge-magma' : 'text-titan-emerald/90'}>{text}</div> })}{pending?.type === 'purge' && !isTyping && <div className="text-amber-300">&gt; CONFIRM PURGE to continue.</div>}{isTyping && <span className="text-titan-emerald animate-pulse">_</span>}</div><form onSubmit={handleSubmit} className="border-t border-titan-emerald/30 bg-void/60 flex items-center px-4 py-3"><span className="text-titan-emerald/70 mr-2 text-sm">user@titan:~$</span><input type="text" value={input} onChange={(event) => setInput(event.target.value)} disabled={isTyping} autoFocus spellCheck={false} placeholder={isTyping ? '' : 'type a keyword...'} className="flex-1 bg-transparent text-aan-white outline-none text-sm md:text-base placeholder-aan-white/20 caret-titan-emerald" /></form></div><div className="mt-4 flex items-center justify-between gap-4 text-xs"><span className="text-aan-white/40 tracking-widest">KEYWORDS: {discovered.length}</span><span className="text-aan-white/40">PURGE: {state.purgeCount}/3</span></div><p className="mt-8 text-[10px] text-aan-white/20 tracking-widest">AAN PROPERTY // VEX-07 IS A DEFECTIVE UNIT // DO NOT INTERFACE</p></div>
}
