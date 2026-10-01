export default function ArchiveImage({ src, alt = '', caption, classification, className = '' }) {
  return (
    <figure className={`my-4 ${className}`}>
      <div className="relative border border-aan-white/15 bg-abyss/40 overflow-hidden">
        <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-titan-gold/60 z-10" />
        <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-titan-gold/60 z-10" />
        <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-titan-gold/60 z-10" />
        <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-titan-gold/60 z-10" />
        {src ? <img src={src} alt={alt} className="w-full h-auto block" /> : <div className="aspect-video flex flex-col items-center justify-center gap-2 relative"><div className="absolute inset-0 pointer-events-none opacity-[0.08]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.2) 3px, rgba(255,255,255,0.2) 4px)' }} /><span className="font-mono text-[10px] text-forge-magma/60 tracking-widest animate-flicker">[ IMAGE DATA CORRUPTED ]</span><span className="font-mono text-[9px] text-aan-white/30 tracking-widest">AAN RECOVERY PENDING</span></div>}
        {classification && <span className="absolute top-2 right-2 font-mono text-[9px] text-forge-magma/70 tracking-widest bg-void/70 px-2 py-0.5 border border-forge-magma/30">{classification}</span>}
      </div>
      {caption && <figcaption className="mt-2 font-mono text-[10px] text-aan-white/40 tracking-widest">{caption}</figcaption>}
    </figure>
  )
}
