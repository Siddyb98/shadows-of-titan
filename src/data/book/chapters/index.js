import { getArcForChapter } from '../arcs'
import Prelude, { marginalia as preludeMarginalia, meta as preludeMeta } from './prelude'
import Chapter1, { marginalia as chapter1Marginalia, meta as chapter1Meta } from './chapter-1'
import Chapter2, { marginalia as chapter2Marginalia, meta as chapter2Meta } from './chapter-2'
import Chapter3, { marginalia as chapter3Marginalia, meta as chapter3Meta } from './chapter-3'
import Chapter4, { marginalia as chapter4Marginalia, meta as chapter4Meta } from './chapter-4'
import Chapter5, { marginalia as chapter5Marginalia, meta as chapter5Meta } from './chapter-5'
import Chapter6, { marginalia as chapter6Marginalia, meta as chapter6Meta } from './chapter-6'
import Chapter45, { marginalia as chapter45Marginalia, meta as chapter45Meta } from './chapter-45'
import Chapter46, { marginalia as chapter46Marginalia, meta as chapter46Meta } from './chapter-46'
import Chapter47, { marginalia as chapter47Marginalia, meta as chapter47Meta } from './chapter-47'
import Chapter48, { marginalia as chapter48Marginalia, meta as chapter48Meta } from './chapter-48'
import Chapter49, { marginalia as chapter49Marginalia, meta as chapter49Meta } from './chapter-49'

const RAW_CHAPTERS = [
  { number: 0, slug: 'prelude', kind: 'prelude', title: preludeMeta.title, subtitle: preludeMeta.subtitle, Component: Prelude, marginalia: preludeMarginalia, status: 'published', pov: preludeMeta.pov, location: 'helion-prime', introduces: preludeMeta.introduces, wordCount: preludeMeta.wordCount, ambient: preludeMeta.ambient, shell: preludeMeta.shell, dropcap: true },
  { number: chapter1Meta.number, slug: chapter1Meta.slug, title: chapter1Meta.title, subtitle: chapter1Meta.subtitle, Component: Chapter1, marginalia: chapter1Marginalia, status: 'published', pov: chapter1Meta.pov, location: 'undercity', introduces: chapter1Meta.introduces, wordCount: chapter1Meta.wordCount, ambient: chapter1Meta.ambient, shell: chapter1Meta.shell, variant: chapter1Meta.variant, mechanics: chapter1Meta.mechanics, deathCount: chapter1Meta.deathCount, hungerCurve: chapter1Meta.hungerCurve },
  { number: chapter2Meta.number, slug: chapter2Meta.slug, title: chapter2Meta.title, subtitle: chapter2Meta.subtitle, Component: Chapter2, marginalia: chapter2Marginalia, status: 'published', pov: chapter2Meta.pov, location: 'undercity', introduces: chapter2Meta.introduces, wordCount: chapter2Meta.wordCount, ambient: chapter2Meta.ambient, shell: chapter2Meta.shell, variant: chapter2Meta.variant, cycleLabel: chapter2Meta.cycleLabel, mechanics: chapter2Meta.mechanics, deathCount: chapter2Meta.deathCount, hungerCurve: chapter2Meta.hungerCurve },
  { number: chapter3Meta.number, slug: chapter3Meta.slug, title: chapter3Meta.title, subtitle: chapter3Meta.subtitle, Component: Chapter3, marginalia: chapter3Marginalia, status: 'published', pov: chapter3Meta.pov, location: 'forgedeep', introduces: chapter3Meta.introduces, wordCount: chapter3Meta.wordCount, ambient: chapter3Meta.ambient, shell: chapter3Meta.shell, variant: chapter3Meta.variant, cycleLabel: chapter3Meta.cycleLabel, mechanics: chapter3Meta.mechanics, deathCount: chapter3Meta.deathCount },
  { number: chapter4Meta.number, slug: chapter4Meta.slug, title: chapter4Meta.title, subtitle: chapter4Meta.subtitle, Component: Chapter4, marginalia: chapter4Marginalia, status: 'published', pov: chapter4Meta.pov, location: chapter4Meta.location, introduces: chapter4Meta.introduces, wordCount: chapter4Meta.wordCount, ambient: chapter4Meta.ambient, shell: chapter4Meta.shell, variant: chapter4Meta.variant, cycleLabel: chapter4Meta.cycleLabel, mechanics: chapter4Meta.mechanics, deathCount: chapter4Meta.deathCount, hungerCurve: chapter4Meta.hungerCurve },
  { number: chapter5Meta.number, slug: chapter5Meta.slug, title: chapter5Meta.title, subtitle: chapter5Meta.subtitle, Component: Chapter5, marginalia: chapter5Marginalia, status: 'published', pov: chapter5Meta.pov, location: chapter5Meta.location, introduces: chapter5Meta.introduces, wordCount: chapter5Meta.wordCount, ambient: chapter5Meta.ambient, shell: chapter5Meta.shell, variant: chapter5Meta.variant, cycleLabel: chapter5Meta.cycleLabel, mechanics: chapter5Meta.mechanics, deathCount: chapter5Meta.deathCount, hungerCurve: chapter5Meta.hungerCurve },
  { number: chapter6Meta.number, slug: chapter6Meta.slug, title: chapter6Meta.title, subtitle: chapter6Meta.subtitle, Component: Chapter6, marginalia: chapter6Marginalia, status: 'published', pov: chapter6Meta.pov, location: chapter6Meta.location, introduces: chapter6Meta.introduces, wordCount: chapter6Meta.wordCount, ambient: chapter6Meta.ambient, shell: chapter6Meta.shell, variant: chapter6Meta.variant, cycleLabel: chapter6Meta.cycleLabel, mechanics: chapter6Meta.mechanics, deathCount: chapter6Meta.deathCount, hungerCurve: chapter6Meta.hungerCurve },
  { number: 7, slug: 'chapter-7', title: 'Chapter 7', Component: null, status: 'planned', pov: 'myth', location: 'helion-prime', introduces: [], wordCount: 0, variant: 'infiltration', mechanics: { lifeCounter: true, hungerMeter: true }, deathCount: 14 },
  { number: 8, slug: 'chapter-8', title: 'Chapter 8', Component: null, status: 'planned', pov: 'myth', location: 'helion-prime', introduces: [], wordCount: 0, variant: 'infiltration', mechanics: { lifeCounter: true, hungerMeter: true }, deathCount: 14 },
  { number: 9, slug: 'chapter-9', title: 'Chapter 9', Component: null, status: 'planned', pov: 'darius', location: 'helion-prime', introduces: [], wordCount: 0, variant: 'infiltration', mechanics: { lifeCounter: false, hungerMeter: false } },
  { number: 10, slug: 'chapter-10', title: 'Chapter 10', Component: null, status: 'planned', pov: 'myth', location: 'helion-prime', introduces: [], wordCount: 0, variant: 'infiltration', mechanics: { lifeCounter: true, hungerMeter: true }, deathCount: 14 },
  { number: 11, slug: 'chapter-11', title: 'Chapter 11', Component: null, status: 'planned', pov: 'myth', location: 'helion-prime', introduces: [], wordCount: 0, variant: 'infiltration', mechanics: { lifeCounter: true, hungerMeter: true }, deathCount: 14 },
  { number: 44, slug: 'chapter-44', title: 'Before the Verge', Component: null, status: 'stub', pov: 'nyx', location: 'blackroot-verge', introduces: [], wordCount: 0 },
  { number: chapter45Meta.number, slug: chapter45Meta.slug, title: chapter45Meta.title, subtitle: chapter45Meta.subtitle, Component: Chapter45, marginalia: chapter45Marginalia, status: 'published', pov: chapter45Meta.pov, location: chapter45Meta.location, introduces: chapter45Meta.introduces, wordCount: chapter45Meta.wordCount, ambient: chapter45Meta.ambient, shell: chapter45Meta.shell, variant: chapter45Meta.variant, cycleLabel: chapter45Meta.cycleLabel, mechanics: chapter45Meta.mechanics, deathCount: chapter45Meta.deathCount },
  { number: chapter46Meta.number, slug: chapter46Meta.slug, title: chapter46Meta.title, subtitle: chapter46Meta.subtitle, Component: Chapter46, marginalia: chapter46Marginalia, status: 'published', pov: chapter46Meta.pov, location: chapter46Meta.location, introduces: chapter46Meta.introduces, wordCount: chapter46Meta.wordCount, ambient: chapter46Meta.ambient, shell: chapter46Meta.shell, variant: chapter46Meta.variant, cycleLabel: chapter46Meta.cycleLabel, mechanics: chapter46Meta.mechanics, deathCount: chapter46Meta.deathCount },
  { number: chapter47Meta.number, slug: chapter47Meta.slug, title: chapter47Meta.title, subtitle: chapter47Meta.subtitle, Component: Chapter47, marginalia: chapter47Marginalia, status: 'published', pov: chapter47Meta.pov, location: chapter47Meta.location, introduces: chapter47Meta.introduces, wordCount: chapter47Meta.wordCount, ambient: chapter47Meta.ambient, shell: chapter47Meta.shell, variant: chapter47Meta.variant, cycleLabel: chapter47Meta.cycleLabel, mechanics: chapter47Meta.mechanics, deathCount: chapter47Meta.deathCount, hungerCurve: chapter47Meta.hungerCurve },
  { number: chapter48Meta.number, slug: chapter48Meta.slug, title: chapter48Meta.title, subtitle: chapter48Meta.subtitle, Component: Chapter48, marginalia: chapter48Marginalia, status: 'published', pov: chapter48Meta.pov, location: chapter48Meta.location, introduces: chapter48Meta.introduces, wordCount: chapter48Meta.wordCount, ambient: chapter48Meta.ambient, shell: chapter48Meta.shell, variant: chapter48Meta.variant, cycleLabel: chapter48Meta.cycleLabel, mechanics: chapter48Meta.mechanics, deathCount: chapter48Meta.deathCount },
  { number: chapter49Meta.number, slug: chapter49Meta.slug, title: chapter49Meta.title, subtitle: chapter49Meta.subtitle, Component: Chapter49, marginalia: chapter49Marginalia, status: 'published', pov: chapter49Meta.pov, location: chapter49Meta.location, introduces: chapter49Meta.introduces, wordCount: chapter49Meta.wordCount, ambient: chapter49Meta.ambient, shell: chapter49Meta.shell, variant: chapter49Meta.variant, cycleLabel: chapter49Meta.cycleLabel, mechanics: chapter49Meta.mechanics, deathCount: chapter49Meta.deathCount },
]

export const CHAPTERS = RAW_CHAPTERS.map((chapter) => ({ ...chapter, arc: getArcForChapter(chapter.number)?.id ?? null, estMinutes: chapter.wordCount ? Math.max(1, Math.round(chapter.wordCount / 220)) : null })).sort((a, b) => a.number - b.number)
export const getChapterBySlug = (slug) => CHAPTERS.find((chapter) => chapter.slug === slug)
export const getChapterByNumber = (number) => CHAPTERS.find((chapter) => chapter.number === number)
export const getAdjacentChapters = (number) => {
  const index = CHAPTERS.findIndex((chapter) => chapter.number === number)
  return {
    prev: [...CHAPTERS.slice(0, index)].reverse().find((chapter) => chapter.status === 'published') ?? null,
    next: CHAPTERS.slice(index + 1).find((chapter) => chapter.status === 'published') ?? null,
  }
}
export const getChaptersByArc = () => {
  const groups = new Map()
  for (const chapter of CHAPTERS) {
    const key = chapter.arc ?? '__loose'
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(chapter)
  }
  return groups
}
