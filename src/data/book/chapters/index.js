import { getArcForChapter } from '../arcs'
import Prelude, { marginalia as preludeMarginalia, meta as preludeMeta } from './prelude'
import Chapter1, { marginalia as chapter1Marginalia, meta as chapter1Meta } from './chapter-1'
import Chapter2, { marginalia as chapter2Marginalia, meta as chapter2Meta } from './chapter-2'
import Chapter3, { marginalia as chapter3Marginalia, meta as chapter3Meta } from './chapter-3'
import Chapter4, { marginalia as chapter4Marginalia, meta as chapter4Meta } from './chapter-4'
import Chapter5, { marginalia as chapter5Marginalia, meta as chapter5Meta } from './chapter-5'
import Chapter6, { marginalia as chapter6Marginalia, meta as chapter6Meta } from './chapter-6'

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
  { number: 45, slug: 'chapter-45', title: 'The Pressure Seam', Component: null, status: 'published', pov: 'nyx', location: 'blackroot-verge', introduces: ['Halflight Agency', 'T.E.B.', 'Apex constructs', 'Voxx'], marginalia: [{ anchor: 'p-1', text: 'The city lowered its lights at 02:17. For seven minutes, Helion became a diagram instead of a place.' }, { anchor: 'p-3', text: 'The archive identified its visitor as Nyx Vale.' }, { anchor: 'p-5', text: 'The archive had been waiting for her longer than the city had been alive.' }], wordCount: 4820, dropcap: true },
  { number: 46, slug: 'chapter-46', title: 'War Council', Component: null, status: 'planned', pov: 'nyx', location: 'helion-prime', introduces: ['High Chancellor Mereen', 'General Titus Valkyrie', 'Grymworms', 'Antidote Protocol'], wordCount: 0 },
  { number: 47, slug: 'chapter-47', title: 'The Vermillion Breach', Component: null, status: 'planned', pov: 'nyx', location: 'null-zone', introduces: ['Vermillion 017', 'Null Zone breach', 'Gate 3'], wordCount: 0 },
  { number: 48, slug: 'chapter-48', title: 'Tribunal', Component: null, status: 'planned', pov: 'nyx', location: 'helion-prime', introduces: ['High Tribunal Complex', 'Class-Omega charges', 'Subject 001X'], wordCount: 0 },
  { number: 49, slug: 'chapter-49', title: "Valkyrie's Descent", Component: null, status: 'planned', pov: 'darius', location: 'helion-prime', introduces: ['Vexal Ophedius', 'Rot Saint', 'Ekros'], wordCount: 0 },
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
