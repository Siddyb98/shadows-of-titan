const colorClasses = {
  'titan-gold': { border: 'border-titan-gold', text: 'text-titan-gold' },
  'titan-emerald': { border: 'border-titan-emerald', text: 'text-titan-emerald' },
  'cryo-blue': { border: 'border-cryo-blue', text: 'text-cryo-blue' },
  'root-violet': { border: 'border-root-violet', text: 'text-root-violet' },
  'root-bio': { border: 'border-root-bio', text: 'text-root-bio' },
  'forge-ember': { border: 'border-forge-ember', text: 'text-forge-ember' },
  'forge-magma': { border: 'border-forge-magma', text: 'text-forge-magma' },
  'nocturne-ash': { border: 'border-nocturne-ash', text: 'text-nocturne-ash' },
}

export default function DossierHeader({ data, color = 'titan-emerald' }) {
  const tone = colorClasses[color] ?? colorClasses['titan-emerald']
  return (
    <div className="mb-10 border border-aan-white/10 bg-abyss/40 p-6 relative">
      <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${tone.border}`} />
      <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${tone.border}`} />
      <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${tone.border}`} />
      <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${tone.border}`} />
      <p className="font-mono text-[10px] text-aan-white/40 tracking-widest mb-3">{data.designation} // {data.classification}</p>
      <h1 className={`font-display text-3xl md:text-5xl tracking-widest ${tone.text} mb-6 animate-flicker`}>{data.codename}</h1>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 font-mono text-xs">
        {data.headerFields.map((field, index) => <div key={`${field.label}-${index}`} className="flex"><dt className="text-aan-white/40 w-40 shrink-0 tracking-widest">{field.label}:</dt><dd className="text-aan-white/80">{field.value}</dd></div>)}
      </dl>
    </div>
  )
}
