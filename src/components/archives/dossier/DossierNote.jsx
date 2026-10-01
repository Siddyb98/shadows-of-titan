const colorClasses = {
  'titan-gold': { border: 'border-titan-gold', background: 'bg-titan-gold/5', text: 'text-titan-gold' },
  'titan-emerald': { border: 'border-titan-emerald', background: 'bg-titan-emerald/5', text: 'text-titan-emerald' },
  'cryo-blue': { border: 'border-cryo-blue', background: 'bg-cryo-blue/5', text: 'text-cryo-blue' },
  'root-violet': { border: 'border-root-violet', background: 'bg-root-violet/5', text: 'text-root-violet' },
  'root-bio': { border: 'border-root-bio', background: 'bg-root-bio/5', text: 'text-root-bio' },
  'forge-ember': { border: 'border-forge-ember', background: 'bg-forge-ember/5', text: 'text-forge-ember' },
  'forge-magma': { border: 'border-forge-magma', background: 'bg-forge-magma/5', text: 'text-forge-magma' },
  'nocturne-ash': { border: 'border-nocturne-ash', background: 'bg-nocturne-ash/5', text: 'text-nocturne-ash' },
}

export default function DossierNote({ children, color = 'forge-magma' }) {
  const tone = colorClasses[color] ?? colorClasses['forge-magma']
  return (
    <div className={`mt-12 border-l-2 ${tone.border} ${tone.background} p-4 font-mono text-xs md:text-sm text-aan-white/70 leading-relaxed`}>
      <p className={`${tone.text} text-[10px] tracking-widest mb-2`}>// AAN INTERNAL NOTE - DO NOT DISTRIBUTE</p>
      {children}
    </div>
  )
}
