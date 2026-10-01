import { Link } from 'react-router-dom'

export default function BookmarkDrawer({ bookmarks, open, onClose }) {
  if (!open) return null
  const groups = bookmarks.reduce((map, bookmark) => { if (!map[bookmark.chapter]) map[bookmark.chapter] = []; map[bookmark.chapter].push(bookmark); return map }, {})
  return <div className="flag-drawer-backdrop" onClick={onClose}><aside className="flag-drawer" onClick={(event) => event.stopPropagation()}><button type="button" onClick={onClose} className="flag-drawer-close">[ CLOSE ]</button><p className="archive-label text-titan-gold">// BOOKMARKED MATERIALS</p>{bookmarks.length === 0 ? <p className="flag-empty">No bookmarked passages on file.</p> : Object.entries(groups).map(([chapter, items]) => <section key={chapter}><h2>CH. {chapter} · {items.length} BOOKMARK{items.length === 1 ? '' : 'S'}</h2>{items.map((bookmark) => <Link key={bookmark.anchor} to={`/book/chapter-${chapter}#${bookmark.anchor}`} onClick={onClose}>› “{bookmark.text}”</Link>)}</section>)}</aside></div>
}
