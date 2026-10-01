import { useState } from 'react'

export default function ArchiveVideo({ src, poster, title = 'RECOVERED FOOTAGE', timestamp, sourceId, className = '' }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className={`my-4 ${className}`}>
      <div className="relative border border-aan-white/15 bg-void overflow-hidden">
        <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cryo-blue/60 z-10" />
        <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cryo-blue/60 z-10" />
        <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cryo-blue/60 z-10" />
        <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cryo-blue/60 z-10" />
        {src ? <video src={src} poster={poster} controls className="w-full aspect-video block" /> : <div className="aspect-video flex flex-col items-center justify-center gap-3 relative"><div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.25) 2px, rgba(255,255,255,0.25) 3px)' }} /><button type="button" aria-label={playing ? 'Pause unavailable playback' : 'Attempt unavailable playback'} onClick={() => setPlaying((value) => !value)} className="relative z-10 w-14 h-14 rounded-full border border-cryo-blue/60 flex items-center justify-center hover:bg-cryo-blue/10 transition-colors">{playing ? <span className="flex gap-1"><span className="w-1 h-4 bg-cryo-blue" /><span className="w-1 h-4 bg-cryo-blue" /></span> : <span className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-cryo-blue ml-1" />}</button><span className="relative z-10 font-mono text-[10px] text-cryo-blue/70 tracking-widest">{playing ? '// PLAYBACK UNAVAILABLE - SOURCE OFFLINE' : '// PRESS TO VIEW'}</span></div>}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 py-1.5 bg-void/70 border-b border-aan-white/10"><span className="font-mono text-[9px] text-cryo-blue/70 tracking-widest">{title}</span>{sourceId && <span className="font-mono text-[9px] text-aan-white/40 tracking-widest">SRC: {sourceId}</span>}</div>
        {timestamp && <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-1.5 bg-void/70 border-t border-aan-white/10"><span className="font-mono text-[9px] text-forge-magma/70 tracking-widest animate-flicker">● REC</span><span className="font-mono text-[9px] text-aan-white/40 tracking-widest">{timestamp}</span></div>}
      </div>
    </div>
  )
}
