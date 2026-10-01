import { useState } from 'react'
import { Link } from 'react-router-dom'
import { lookupEntity } from '../../data/entities'

export default function Term({ id, children }) {
  const entity = lookupEntity(id)
  const [open, setOpen] = useState(false)
  if (!entity) return children
  const title = entity.term || entity.codename || id
  return <span className="relative inline-block" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onClick={() => setOpen((value) => !value)}><span className="border-b border-dotted border-titan-gold/40 hover:border-titan-gold cursor-help text-aan-white/95">{children}</span>{open && <span className="absolute left-0 top-full mt-2 z-40 w-72 p-3 border border-titan-gold/40 bg-void/95 backdrop-blur font-mono text-[11px] text-aan-white/80 leading-relaxed shadow-[0_0_24px_rgba(0,0,0,0.6)]"><span className="block text-titan-gold tracking-widest text-[9px] mb-1">{entity.type.toUpperCase()} // {title}</span><span className="block">{entity.short || 'Archive entity record available.'}</span><Link to="/archives/concordance" className="block mt-2 text-titan-emerald text-[9px] tracking-widest">-&gt; OPEN CONCORDANCE</Link></span>}</span>
}
