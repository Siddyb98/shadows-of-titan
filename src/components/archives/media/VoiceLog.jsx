import { useState } from 'react'

export default function VoiceLog({ src, speaker = 'UNIDENTIFIED', timestamp, transcript, className = '' }) {
  const [playing, setPlaying] = useState(false)
  const [showTranscript, setShowTranscript] = useState(false)
  const bars = Array.from({ length: 48 }, (_, index) => 12 + ((index * 37) % 26))

  return (
    <div className={`my-4 border-l-2 border-titan-emerald/40 bg-titan-emerald/5 p-4 ${className}`}>
      <div className="flex items-center justify-between mb-3"><span className="font-mono text-[10px] text-titan-emerald tracking-widest">// VOICE LOG</span>{timestamp && <span className="font-mono text-[9px] text-aan-white/40 tracking-widest">{timestamp}</span>}</div>
      <div className="flex items-center gap-3 mb-3"><button type="button" aria-label={playing ? 'Pause voice log' : 'Play voice log'} onClick={() => setPlaying((value) => !value)} className="shrink-0 w-8 h-8 rounded-full border border-titan-emerald/60 flex items-center justify-center hover:bg-titan-emerald/10 transition-colors">{playing ? <span className="flex gap-0.5"><span className="w-0.5 h-3 bg-titan-emerald" /><span className="w-0.5 h-3 bg-titan-emerald" /></span> : <span className="w-0 h-0 border-y-[5px] border-y-transparent border-l-[9px] border-l-titan-emerald ml-0.5" />}</button><div className="flex-1 flex items-center gap-[2px] h-8">{bars.map((height, index) => <span key={index} className={`flex-1 ${playing ? 'bg-titan-emerald/70 animate-pulse' : 'bg-titan-emerald/25'}`} style={{ height: `${height}px`, animationDelay: `${index * 30}ms` }} />)}</div></div>
      <div className="flex items-center justify-between mb-2"><span className="font-mono text-[10px] text-aan-white/60 tracking-widest">SPEAKER: <span className="text-aan-white/80">{speaker}</span></span>{transcript && <button type="button" onClick={() => setShowTranscript((value) => !value)} className="font-mono text-[9px] text-titan-emerald/70 hover:text-titan-emerald tracking-widest transition-colors">{showTranscript ? '[ HIDE TRANSCRIPT ]' : '[ SHOW TRANSCRIPT ]'}</button>}</div>
      {src && <audio src={src} className="hidden" controls={false} />}
      {!src && playing && <p className="font-mono text-[9px] text-forge-magma/60 tracking-widest animate-flicker mt-2">// AUDIO STREAM LOST - TRANSCRIPT ONLY</p>}
      {showTranscript && transcript && <div className="mt-3 pt-3 border-t border-titan-emerald/20 font-mono text-xs text-aan-white/70 leading-relaxed whitespace-pre-line">{transcript}</div>}
    </div>
  )
}
