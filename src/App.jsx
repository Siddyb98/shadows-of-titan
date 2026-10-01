import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AccessDeniedPage from './pages/AccessDeniedPage'
import ErrorBoundary from './components/ErrorBoundary'
import ArchiveHome from './pages/archives/ArchiveHome'
import ArchiveSection from './pages/archives/ArchiveSection'
import ArchiveFile from './pages/archives/ArchiveFile'
import FragmentConsole from './pages/archives/FragmentConsole'
import ConcordancePage from './pages/archives/ConcordancePage'
const MapPage = lazy(() => import('./pages/MapPage'))
const VexTerminal = lazy(() => import('./pages/VexExperience'))
import BookIndex from './pages/book/BookIndex'
import ChapterReader from './pages/book/ChapterReader'
import ProtectedRoute from './components/auth/ProtectedRoute'
import Login from './pages/auth/Login'

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), [location.pathname])
  return null
}

function NotFoundPage() {
  return <div className="chapter-recovery"><div><p className="archive-label text-forge-magma">// ROUTE NOT FOUND</p><h1>404</h1><p>THE REQUESTED RECORD DOES NOT EXIST.</p><a href="/">← RETURN TO PORTAL</a></div></div>
}

function App() {
  return <ErrorBoundary>
    <ScrollToTop />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="archives" element={<ProtectedRoute><ArchiveHome /></ProtectedRoute>} />
        <Route path="archives/fragments" element={<ProtectedRoute><FragmentConsole /></ProtectedRoute>} />
        <Route path="archives/console" element={<ProtectedRoute><FragmentConsole /></ProtectedRoute>} />
        <Route path="archives/concordance" element={<ProtectedRoute><ConcordancePage /></ProtectedRoute>} />
        <Route path="archives/:sectionId" element={<ProtectedRoute><ArchiveSection /></ProtectedRoute>} />
        <Route path="archives/:sectionId/:fileId" element={<ProtectedRoute><ArchiveFile /></ProtectedRoute>} />
        <Route path="book" element={<BookIndex />} />
        <Route path="book/:slug" element={<ChapterReader />} />
        <Route path="map" element={<Suspense fallback={<div className="min-h-screen bg-void flex items-center justify-center"><span className="font-mono text-xs text-titan-emerald tracking-widest">// INITIALIZING TACTICAL ATLAS...</span></div>}><MapPage /></Suspense>} />
        <Route path="secret" element={<Suspense fallback={<div className="min-h-screen bg-void flex items-center justify-center"><span className="font-mono text-xs text-titan-emerald tracking-widest">// CONNECTING TO VEX...</span></div>}><VexTerminal /></Suspense>} />
        <Route path="access-denied" element={<AccessDeniedPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </ErrorBoundary>
}

export default App
