import { useProgression } from '../../context/ProgressionContext'

function extractText(value) {
  if (typeof value === 'string' || typeof value === 'number') return String(value)
  if (Array.isArray(value)) return value.map(extractText).join('')
  if (value?.props?.children) return extractText(value.props.children)
  return ''
}

export default function ParagraphAnchor({ chapter, anchor, children, bookmark = true, dropcap = false }) {
  const { bookmarks, toggleBookmark } = useProgression()
  const bookmarked = bookmarks.some((bookmark) => bookmark.chapter === chapter && bookmark.anchor === anchor)
  return <div data-reader-anchor={anchor} data-dropcap={dropcap ? 'true' : undefined} className="reader-paragraph group/para">{bookmark && <button type="button" onClick={() => toggleBookmark(chapter, anchor, extractText(children))} className={`reader-flag ${bookmarked ? 'is-flagged' : ''}`} aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark paragraph'}>🔖</button>}<p id={anchor}>{children}</p></div>
}
