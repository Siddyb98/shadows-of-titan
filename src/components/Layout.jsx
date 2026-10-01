import { Outlet } from 'react-router-dom'
import Background from './Background'
import NavBar from './NavBar'

function SecretFooter() {
  return null
}

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-void text-aan-white font-body overflow-hidden app-shell">
      <Background />
      <NavBar />
      <main className="relative z-10 pt-24"><Outlet /></main>
      <footer><span>SHADOWS OF TITAN</span><span>ARCHIVE NODE 7 / HELION LOWER RINGS</span><span>© 2149</span></footer>
      <SecretFooter />
    </div>
  )
}
