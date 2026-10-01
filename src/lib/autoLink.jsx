import { Fragment } from 'react'
import Term from '../components/reader/Term'
import { ENTITIES } from '../data/entities'

const TERM_MAP = Object.entries(ENTITIES).flatMap(([id, entity]) => [entity.term, ...(entity.aliases ?? [])].filter(Boolean).map((term) => [term, id])).sort((a, b) => b[0].length - a[0].length)

export function autoLink(text, seen = new Set()) {
  let nodes = [text]
  for (const [term, id] of TERM_MAP) {
    if (seen.has(id)) continue
    nodes = nodes.flatMap((node) => {
      if (typeof node !== 'string') return node
      const match = node.match(new RegExp(`\\b${term.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')}\\b`))
      if (!match) return node
      seen.add(id)
      return [node.slice(0, match.index), <Term key={`${id}-${match.index}`} id={id}>{term}</Term>, node.slice(match.index + term.length)]
    })
  }
  return <>{nodes.map((node, index) => <Fragment key={index}>{node}</Fragment>)}</>
}
