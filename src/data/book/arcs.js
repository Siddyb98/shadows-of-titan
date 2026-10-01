export const ARCS = [
  {
    id: 'ascension',
    title: 'PHASE I // ASCENSION TRIAL',
    subtitle: 'CLEARANCE LEVEL 1: INITIATE',
    range: [6, 11],
    theme: 'initiate',
    clearance: 'CLEARANCE LEVEL 1: INITIATE // MONITORED ACCESS',
    blurb: 'Nyx enters the AAN system under a constructed identity. Every observation is a test, and every test leaves a trace.',
  },
  {
    id: 'vermillion',
    title: 'The Vermillion Breach',
    subtitle: 'CYCLE 312',
    range: [44, 49],
    theme: 'ember',
    blurb: 'Fane Dryst returns. The Verge burns. What Nyx chose in the dark comes due in daylight.',
  },
]

export const getArcForChapter = (number) => ARCS.find((arc) => number >= arc.range[0] && number <= arc.range[1]) ?? null
