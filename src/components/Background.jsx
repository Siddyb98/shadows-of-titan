export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-void via-abyss to-void" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-titan-emerald opacity-5 blur-[150px] animate-pulse-slow" />
      <div
        className="absolute inset-0 opacity-[0.03] animate-glitch"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)',
        }}
      />
    </div>
  )
}
