import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { name: 'THE BOOK', path: '/book', textClass: 'text-titan-gold', borderClass: 'border-titan-gold/30 hover:border-titan-gold', hoverClass: 'hover:bg-titan-gold/5', description: 'The narrative. The truth. The fall.' },
  { name: 'ARCHIVES', path: '/archives', textClass: 'text-titan-emerald', borderClass: 'border-titan-emerald/30 hover:border-titan-emerald', hoverClass: 'hover:bg-titan-emerald/5', vertexClass: 'portal-archives-vertex', description: 'Dossiers and Info.' },
  { name: 'TITAN MAP', path: '/map', textClass: 'text-root-bio', borderClass: 'border-root-bio/30 hover:border-root-bio', hoverClass: 'hover:bg-root-bio/5', vertexClass: 'portal-map-vertex', description: 'Explore the planet. Find its secrets.' },
  { name: 'THE VOID', path: '/access-denied', textClass: 'text-forge-magma', borderClass: 'border-forge-magma/30 hover:border-forge-magma', hoverClass: 'hover:bg-forge-magma/5', vertexClass: 'portal-void-vertex', description: '?????' },
]

const positions = [
  'top-[44px] left-1/2 -translate-x-1/2 -translate-y-1/2',
  'top-1/2 right-[-20px] translate-x-1/2 -translate-y-1/2',
  'bottom-[54px] left-1/2 -translate-x-1/2 translate-y-1/2',
  'top-1/2 left-[-20px] -translate-x-1/2 -translate-y-1/2',
]

export default function HomePage() {
  const [hoveredVertex, setHoveredVertex] = useState(null)
  const [secretText, setSecretText] = useState('')

  useEffect(() => {
    const now = new Date()
    if (now.getHours() === 3 && now.getMinutes() === 33) setSecretText('THE ENGINE IS AWAKE')
  }, [])

  const activeDescription = navItems.find((item) => item.name === hoveredVertex)?.description

  return (
    <div className="portal-page relative min-h-[calc(100vh-120px)] flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      <video className="absolute inset-0 z-0 h-full w-full object-cover opacity-35 pointer-events-none" autoPlay loop muted playsInline aria-hidden="true">
        <source src="/media/titan-flyin.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-0 bg-void/65 pointer-events-none" />

      <div className="relative z-10 w-[300px] h-[300px] md:w-[420px] md:h-[420px]">
        <div className="absolute inset-0 border border-aan-white/10 rounded-full animate-rotate-slow" />
        <div className="absolute inset-4 border border-titan-gold/20 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '45s' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {navItems.map((item, index) => (
              <Link key={item.name} to={item.path} className={`absolute z-10 ${positions[index]} group`} onMouseEnter={() => setHoveredVertex(item.name)} onMouseLeave={() => setHoveredVertex(null)} onFocus={() => setHoveredVertex(item.name)} onBlur={() => setHoveredVertex(null)}>
                <div className={`portal-vertex relative w-20 h-20 md:w-28 md:h-28 ${item.name === 'THE BOOK' || item.name === 'THE VOID' || item.name === 'ARCHIVES' || item.name === 'TITAN MAP' ? 'bg-transparent' : `${item.vertexClass} bg-void`} ${item.name === 'THE BOOK' ? 'portal-book-vertex' : ''} ${item.name === 'THE VOID' ? 'portal-void-vertex' : ''} ${item.name === 'ARCHIVES' ? 'portal-archives-vertex' : ''} ${item.name === 'TITAN MAP' ? 'portal-map-vertex' : ''} ${item.hoverClass} flex items-center justify-center transition-all duration-300 hover:scale-110`}>
                  {item.name === 'THE BOOK' && <>
                    <video className="portal-book-video" autoPlay loop muted playsInline aria-hidden="true">
                      <source src="/media/book-icon-background.mp4" type="video/mp4" />
                    </video>
                    <span className="portal-book-glow" />
                  </>}
                  {item.name === 'THE VOID' && <>
                    <video className="portal-void-video" autoPlay loop muted playsInline aria-hidden="true">
                      <source src="/media/the-void-icon.mp4" type="video/mp4" />
                    </video>
                    <span className="portal-void-glow" />
                  </>}
                  {item.name === 'ARCHIVES' && <>
                    <video className="portal-archives-video" autoPlay loop muted playsInline aria-hidden="true">
                      <source src="/media/archives-icon-background.mp4" type="video/mp4" />
                    </video>
                    <span className="portal-archives-glow" />
                  </>}
                  {item.name === 'TITAN MAP' && <>
                    <video className="portal-map-video" autoPlay loop muted playsInline aria-hidden="true">
                      <source src="/media/map-icon-background.mp4" type="video/mp4" />
                    </video>
                    <span className="portal-map-glow" />
                    <span className="portal-map-inner-frame" aria-hidden="true" />
                  </>}
                  <span className={`portal-frame portal-frame-primary ${item.textClass} ${item.name === 'TITAN MAP' ? 'portal-map-frame' : ''}`} />
                  <span className={`portal-frame portal-frame-secondary ${item.textClass} ${item.name === 'TITAN MAP' ? 'portal-map-frame' : ''}`} />
                  <span className={`relative z-10 font-display text-xs md:text-sm text-center ${item.textClass} ${item.name === 'THE VOID' ? 'portal-void-label' : ''} ${item.name === 'ARCHIVES' ? 'portal-archives-label' : ''} ${item.name === 'TITAN MAP' ? 'portal-map-label' : ''} group-hover:animate-glitch`}>{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-titan-emerald/20 to-titan-gold/20 blur-xl animate-pulse-slow" />
          <div className="absolute inset-0 rounded-full border border-titan-gold/50 animate-flicker" />
        </div>
      </div>
      <div className="relative z-10 h-24 mt-16 text-center" aria-live="polite">
        {activeDescription ? <p className="font-mono text-sm text-aan-white/60 animate-flicker">{activeDescription}</p> : <p className="font-mono text-sm text-aan-white/20">SELECT A VERTEX</p>}
      </div>
      {secretText && <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"><p className="font-mono text-forge-magma animate-glitch text-lg tracking-widest whitespace-nowrap">{secretText}</p></div>}
      <div className="absolute bottom-4 right-4 z-10 opacity-10 hover:opacity-100 transition-opacity duration-1000"><p className="font-mono text-[8px] text-aan-white">AAN PROPERTY // UNAUTHORIZED ACCESS IS TREASON</p></div>
    </div>
  )
}
