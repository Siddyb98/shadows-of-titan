import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { name: 'THE BOOK', path: '/book', color: 'text-titan-gold', position: 'top' },
  { name: 'ARCHIVES', path: '/archives', color: 'text-titan-emerald', position: 'right' },
  { name: 'TITAN MAP', path: '/map', color: 'text-root-bio', position: 'bottom' },
  { name: '???', path: '/access-denied', color: 'text-forge-magma', position: 'left' },
]

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="diamond-nav fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center" aria-label="Primary navigation">
      <Link to="/" className="diamond-logo group">
        <span className="font-display text-2xl font-bold tracking-widest text-titan-gold group-hover:animate-glitch">SHADOWS<span className="text-aan-white/50">OF</span>TITAN</span>
      </Link>

      <div className={`diamond-menu ${isOpen ? 'is-open' : ''}`}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || location.pathname.startsWith(`${item.path}/`)
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`diamond-vertex vertex-${item.position} ${item.color} ${isActive ? 'is-active' : ''}`}
            >
              {item.name}
            </Link>
          )
        })}
      </div>

      <button
        type="button"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        onClick={() => setIsOpen((value) => !value)}
        className="diamond-trigger relative w-16 h-16 group focus:outline-none"
      >
        <span className={`diamond-frame diamond-frame-primary ${isOpen ? 'is-open' : ''}`} />
        <span className={`diamond-frame diamond-frame-secondary ${isOpen ? 'is-open' : ''}`} />
        <span className="absolute inset-0 flex items-center justify-center font-mono text-xs text-aan-white/70">{isOpen ? 'CLOSE' : 'ACCESS'}</span>
      </button>
    </nav>
  )
}
