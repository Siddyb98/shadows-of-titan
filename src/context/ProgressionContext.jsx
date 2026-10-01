import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './AuthContext'
import { ARCHIVE_SECTIONS } from '../data/archiveIndex'
import { FRAGMENT_KEYS } from '../data/fragmentKeys'

const defaultProgression = {
  clearance: 0,
  fragments: [],
  chaptersRead: [],
  lastRead: null,
  bookmarks: [],
  livesConsumed: 0,
  livesFired: [],
  decryptedFiles: [],
  accessViolations: 0,
  clearanceCooldownUntil: 0,
}
const authorityProgression = {
  clearance: 4,
  fragments: Object.keys(FRAGMENT_KEYS),
  chaptersRead: [],
  bookmarks: [],
  livesConsumed: 0,
  livesFired: [],
  decryptedFiles: ARCHIVE_SECTIONS.flatMap((section) => section.subcategories.flatMap((subcategory) => subcategory.files.map((file) => file.id))),
  accessViolations: 0,
  clearanceCooldownUntil: 0,
}

const ProgressionContext = createContext(null)

function clearanceFromProgress(chaptersRead, fragments) {
  const highestChapter = Math.max(-1, ...chaptersRead.map(Number))
  const chapterClearance = highestChapter >= 12 ? 3 : highestChapter >= 8 ? 2 : highestChapter >= 4 ? 1 : 0
  const fragmentClearance = fragments.length >= 20 ? 3 : fragments.length >= 12 ? 2 : fragments.length >= 6 ? 1 : 0
  return Math.max(chapterClearance, fragmentClearance)
}

function loadProgression(storageKey, isAuthority) {
  const baseProgression = isAuthority ? authorityProgression : defaultProgression
  try {
    const saved = window.localStorage.getItem(storageKey)
    if (!saved) return baseProgression
    const parsed = { ...baseProgression, ...JSON.parse(saved) }
    return { ...parsed, fragments: Array.isArray(parsed.fragments) ? parsed.fragments : [], chaptersRead: Array.isArray(parsed.chaptersRead) ? parsed.chaptersRead : [], bookmarks: Array.isArray(parsed.bookmarks) ? parsed.bookmarks : (Array.isArray(parsed.flags) ? parsed.flags : []), livesConsumed: Number.isFinite(parsed.livesConsumed) ? parsed.livesConsumed : 0, livesFired: Array.isArray(parsed.livesFired) ? parsed.livesFired : [], clearanceCooldownUntil: Number.isFinite(parsed.clearanceCooldownUntil) ? parsed.clearanceCooldownUntil : 0 }
  } catch {
    return defaultProgression
  }
}

export function ProgressionProvider({ children }) {
  const { callsign, isAuthority } = useAuth()
  const storageKey = callsign ? `sot-progress-v1-${callsign}` : 'sot-progress-v1'
  const [progression, setProgression] = useState(() => loadProgression(storageKey, isAuthority))
  const [loadedStorageKey, setLoadedStorageKey] = useState(storageKey)

  useEffect(() => {
    if (loadedStorageKey === storageKey) return
    setProgression(loadProgression(storageKey, isAuthority))
    setLoadedStorageKey(storageKey)
  }, [isAuthority, loadedStorageKey, storageKey])

  useEffect(() => {
    if (!callsign || loadedStorageKey !== storageKey) return undefined
    const timer = window.setTimeout(() => window.localStorage.setItem(storageKey, JSON.stringify(progression)), 500)
    return () => window.clearTimeout(timer)
  }, [callsign, loadedStorageKey, progression, storageKey])

  const value = {
    ...progression,
    recordChapter: (chapterId) => setProgression((current) => {
      const chaptersRead = [...new Set([...current.chaptersRead, chapterId])]
      return { ...current, chaptersRead, clearance: Math.max(current.clearance, clearanceFromProgress(chaptersRead, current.fragments)) }
    }),
    setLastRead: (number, scrollPct = 0) => setProgression((current) => ({ ...current, lastRead: { number, scrollPct, at: Date.now() } })),
    toggleBookmark: (chapter, anchor, text) => setProgression((current) => {
      const exists = current.bookmarks.some((bookmark) => bookmark.chapter === chapter && bookmark.anchor === anchor)
      return { ...current, bookmarks: exists ? current.bookmarks.filter((bookmark) => !(bookmark.chapter === chapter && bookmark.anchor === anchor)) : [...current.bookmarks, { chapter, anchor, text, at: Date.now() }] }
    }),
    recordLifeConsumed: (amount = 1, anchorKey = null) => setProgression((current) => {
      if (anchorKey && current.livesFired.includes(anchorKey)) return current
      return { ...current, livesConsumed: (current.livesConsumed ?? 0) + amount, livesFired: anchorKey ? [...current.livesFired, anchorKey] : current.livesFired }
    }),
    decryptFile: (fileId) => setProgression((current) => ({ ...current, decryptedFiles: [...new Set([...current.decryptedFiles, fileId])] })),
    addFragment: (fragmentKey) => setProgression((current) => {
      if (!fragmentKey || current.fragments.includes(fragmentKey)) return current
      const fragments = [...current.fragments, fragmentKey]
      return { ...current, fragments, clearance: Math.max(current.clearance, clearanceFromProgress(current.chaptersRead, fragments)) }
    }),
    addViolation: () => setProgression((current) => ({ ...current, accessViolations: current.accessViolations + 1 })),
    registerAccessViolation: () => setProgression((current) => ({ ...current, accessViolations: current.accessViolations + 1, clearanceCooldownUntil: Date.now() + 30000 })),
    setClearance: (clearance) => setProgression((current) => ({ ...current, clearance: Math.max(current.clearance, clearance) })),
  }

  return <ProgressionContext.Provider value={value}>{children}</ProgressionContext.Provider>
}

export function useProgression() {
  const context = useContext(ProgressionContext)
  if (!context) throw new Error('useProgression must be used inside ProgressionProvider')
  return context
}
