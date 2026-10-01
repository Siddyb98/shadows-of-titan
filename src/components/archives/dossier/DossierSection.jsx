const colorClasses = {
  'titan-gold': { border: 'border-titan-gold/30', bar: 'bg-titan-gold', text: 'text-titan-gold' },
  'titan-emerald': { border: 'border-titan-emerald/30', bar: 'bg-titan-emerald', text: 'text-titan-emerald' },
  'cryo-blue': { border: 'border-cryo-blue/30', bar: 'bg-cryo-blue', text: 'text-cryo-blue' },
  'root-violet': { border: 'border-root-violet/30', bar: 'bg-root-violet', text: 'text-root-violet' },
  'root-bio': { border: 'border-root-bio/30', bar: 'bg-root-bio', text: 'text-root-bio' },
  'forge-ember': { border: 'border-forge-ember/30', bar: 'bg-forge-ember', text: 'text-forge-ember' },
  'forge-magma': { border: 'border-forge-magma/30', bar: 'bg-forge-magma', text: 'text-forge-magma' },
  'nocturne-ash': { border: 'border-nocturne-ash/30', bar: 'bg-nocturne-ash', text: 'text-nocturne-ash' },
}

export default function DossierSection({ title, color = 'titan-emerald', children }) {
  const tone = colorClasses[color] ?? colorClasses['titan-emerald']
  return (
    <section className="mb-10">
      <div className={`flex items-center gap-3 mb-4 border-b ${tone.border} pb-2`}>
        <span className={`w-1 h-5 ${tone.bar}`} />
        <h2 className={`font-display text-lg tracking-widest ${tone.text}`}>{title}</h2>
      </div>
      <div className="pl-4 font-body text-sm md:text-base text-aan-white/70 leading-relaxed space-y-3">{children}</div>
    </section>
  )
}
