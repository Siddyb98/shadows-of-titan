import { useState } from 'react'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-cryo-blue tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'
const buttonBase = 'border px-3 py-2 text-left transition-colors focus:outline-none focus:ring-1 focus:ring-cryo-blue'

const tiers = [
  { id: 1, name: 'Diamond Tier', mark: 'Pale white/crystal sigil', traits: 'Common, benign. Minor enhancements (e.g. slight speed, dense bones).' },
  { id: 2, name: 'Amber Tier', mark: 'Yellow-gold filament veins', traits: 'Stable but noticeable traits. Usually accepted in Luminals, monitored in Dregs.' },
  { id: 3, name: 'Obsidian Tier', mark: 'Blackened sclera or bone growths', traits: 'Volatile or hostile mutations. Rejected by society. Often suppressed.' },
  { id: 4, name: 'Nova Tier', mark: 'Glowing aura under stress', traits: 'High power, unstable. Mutations shape their environment or trigger reactions. Most Apex are here.' },
  { id: 5, name: 'Stellar Tier', mark: 'Light-warping effects near skin', traits: 'Rare, beautiful, dangerous. Often classified. May warp time, perception, or probability.' },
  { id: 6, name: 'Quasar Tier', mark: 'Iridescent shimmer, reality bending their form into what they desire to present as.', traits: 'World-breakers. Fusion of psychic, energetic, or cosmic code. All known Quasars are watched by the Catalyst Engine itself. Only one is confirmed: Myth.' },
]

const triggers = [
  ['Mineral Reactants', 'Catalyst crystal veins, spore-seeded roots, Verdant ash', 'Alters cell memory; creates fast, irregular mutations. Often irreversible.'],
  ['Weather Events', 'Voxx Reversals, Storm Quakes, Grav Folds', 'Triggers dormant mutations. May cause chain reactions or hybridization.'],
  ['Tech Exposure', 'Ruptured Apex armor, Echo Circuits, Helios Vault spores', 'Causes DNA override or programmatic fusion. Sometimes produces synthetic-power blends.'],
  ['Emotional Catalysts', 'Trauma, grief, lust, rage', 'Activates latent traits. Often shapes ability by the nature of the event. Known in Dregs and Nulls.'],
  ['Pulse Grid Proximity', 'Time spent near one of the five Pulse Wells', 'Direct exposure can restructure neural patterns, unlocking hidden or ancient mutations. Apex do not allow Dregs near them.'],
  ['Memory Imprint Sites', 'Cryothorne vaults, Obsidian Annex', 'Prolonged exposure causes genetic mimicry or ancestral recall mutations. Most dangerous in children.'],
]

const lineages = {
  'Apex Lineage': ['Carefully bred, tested, and refined.', 'Mutations become more focused, with signature precision (e.g. fire lines that burn cooler but sharper).', 'Often develop secondary harmonics: passive traits like resistance or immunity to certain elements.', 'Over generations, lineage can become too refined, losing flexibility, risking instability if external DNA is introduced.'],
  'Luminal Lineage': ['Originally engineered lower-class hybrids between Apex and enhanced Dregs.', 'Powers often start unstable, then settle into strong niche capabilities (e.g. mineral manipulation, organic fusion).', 'Next-gen Luminals show unexpected branching, especially emotional/psychic resonance-based traits.', 'Some Luminals experience flare events where their powers mutate again after age 20.'],
  'Dreg Lineage': ['Wild, chaotic mutation.', 'May skip generations, or remain dormant until exposed to a Catalyst trigger.', 'Dreg-born anomalies often show hybrid signs like spontaneous trait fusion, inherited memories, or alien DNA imprints.', 'Most dangerous Dreg mutations result from Echo exposure, trauma, or living in forbidden zones.'],
  'Anomaly-Class Lineage (rare)': ['Mutations that defy all classification.', 'Usually originate from births near active Catalyst Wells or hybrid Apex/Dreg pairs.', 'Powers include: timeline bleed, shared dream spaces, environmental cognition, or spontaneous duplication.', 'Only a handful recorded. Most are hidden, erased, or terminated.'],
}

const hybrids = [
  ['Bio-Splice Mutations', ['Direct gene merging, either Apex + Apex or Apex + Dreg', 'Often attempted in Vault Zero or Forgedeep under black protocols', 'Side effects: Dual voice echo, unpredictable triggers, parasitic power bleed']],
  ['Spore-Fusion Mutations', ['Occurs in jungle or cave environments seeded with Catalyst-reactive fungi', 'Often results in memory-sharing, shape adaptation, or flesh-mimicry']],
  ['Cryo-Stitch Events', ['Accidental fusion of dormant DNA during suspended animation or cryo transfer', 'Found mostly in Cryothorne vault failures', 'Notable result: Sleeper abilities that activate decades later']],
  ['Sympathetic Mutation Drift', ['Observed in long-term close relationships where powers begin to overlap or merge', 'First seen in Luminal twins and Dreg bloodlines - eventually discovered in Myth\'s own resonance pairing with others', 'May be emotional or intentional, and may result in shared energy pools']],
]

const regions = [
  ['Helion Prime', 'Psychic-based, gravitational, time-layered quirks', 'Engine proximity, engineered bloodlines'],
  ['Forgedeep', 'Heat manipulation, explosive matter, magma-skin', 'Geothermal Core + Tech fallout'],
  ['Stratos Gate', 'Sonic energy, kinetic bursts, echo projection', 'Voxx Reversals, wind harmonic fields'],
  ['Cryothorne', 'Cryo-psychic link, emotional memory bleed, cold-fire', 'Crystal resonance, suspended cryo memory'],
  ['Blackroot Verge', 'Shape-shifting, bio-mimicry, regenerative fusion', 'Spore saturation, living terrain'],
  ['Aetherion', 'Aerial control, gravity slips, spectral tracking', 'Altitude exposure, unstable flight tech'],
  ['Nocturne Spire', 'Temporal bleed, shadow splitting, memory hacking', 'Echo Core interference, Catalyst faultline'],
  ['Pulse Grid Wells', 'Unknown - Apex redacts all data', 'Believed to create or destroy mutation entirely'],
]

export default function MutationIndexDossier() {
  const [selectedTier, setSelectedTier] = useState(0)
  const [selectedTrigger, setSelectedTrigger] = useState(0)
  const [selectedLineage, setSelectedLineage] = useState('Apex Lineage')
  const [openHybrid, setOpenHybrid] = useState(0)
  const [selectedRegion, setSelectedRegion] = useState(0)
  const tier = tiers[selectedTier]
  const trigger = triggers[selectedTrigger]
  const region = regions[selectedRegion]

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={{ designation: 'COD-MUT-01', classification: 'CODEX // MUTATION TAXONOMY // HEAVILY CENSORED', codename: 'THE QUASAR-RESONANCE CLASSIFICATION', headerFields: [] }} color="cryo-blue" />
      <DossierSection title="WHAT IT IS" color="cryo-blue">
        <p>A universal system used, and heavily censored, by AAN scientists and Vault researchers to measure, rank, and predict the potency and volatility of mutations across Titan&apos;s population.</p>
      </DossierSection>

      <DossierSection title="TIERS BY RARITY, POWER, AND COSMIC INSTABILITY" color="cryo-blue">
        <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-6" role="tablist" aria-label="Mutation tiers">
          {tiers.map((entry, index) => <button key={entry.id} type="button" role="tab" aria-selected={selectedTier === index} onClick={() => setSelectedTier(index)} className={`${buttonBase} ${selectedTier === index ? 'border-cryo-blue bg-cryo-blue/15 text-cryo-blue' : 'border-aan-white/15 text-aan-white/60 hover:border-cryo-blue/60 hover:text-aan-white'}`}><span className="block font-mono text-[10px]">TIER {entry.id}</span><span className="mt-1 block font-display text-xs tracking-wider">{entry.name}</span></button>)}
        </div>
        <div className="mt-4 border border-cryo-blue/30 bg-cryo-blue/5 p-4" role="tabpanel">
          <div className="flex flex-wrap items-baseline justify-between gap-2"><p className="font-display text-lg text-cryo-blue">{tier.name}</p><span className="font-mono text-xs text-aan-white/50">VISUAL MARK // {tier.mark}</span></div>
          <p className="mt-3 text-aan-white/70">{tier.traits}</p>
        </div>
      </DossierSection>

      <DossierSection title="MUTAGENIC TRIGGERS" color="cryo-blue">
        <div className="grid gap-2 md:grid-cols-3" role="tablist" aria-label="Mutation triggers">
          {triggers.map(([name], index) => <button key={name} type="button" role="tab" aria-selected={selectedTrigger === index} onClick={() => setSelectedTrigger(index)} className={`${buttonBase} ${selectedTrigger === index ? 'border-titan-gold bg-titan-gold/10 text-titan-gold' : 'border-aan-white/15 text-aan-white/60 hover:border-titan-gold/60 hover:text-aan-white'}`}>{name}</button>)}
        </div>
        <div className="mt-4 grid gap-4 border border-titan-gold/30 bg-titan-gold/5 p-4 md:grid-cols-2" role="tabpanel"><div><p className={label}>EXAMPLES</p><p className="mt-2 text-aan-white/70">{trigger[1]}</p></div><div><p className={label}>EFFECTS</p><p className="mt-2 text-aan-white/70">{trigger[2]}</p></div></div>
      </DossierSection>

      <DossierSection title="INTERGENERATIONAL MUTATION PATTERNS" color="cryo-blue">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Mutation lineages">{Object.keys(lineages).map((name) => <button key={name} type="button" role="tab" aria-selected={selectedLineage === name} onClick={() => setSelectedLineage(name)} className={`${buttonBase} ${selectedLineage === name ? 'border-root-violet bg-root-violet/10 text-root-violet' : 'border-aan-white/15 text-aan-white/60 hover:border-root-violet/60 hover:text-aan-white'}`}>{name}</button>)}</div>
        <div className="mt-4 border border-root-violet/30 bg-root-violet/5 p-4" role="tabpanel"><ul className={mutedList}>{lineages[selectedLineage].map((item) => <li key={item}>{item}</li>)}</ul></div>
      </DossierSection>

      <DossierSection title="HYBRID MUTATIONS" color="cryo-blue">
        <div className="space-y-2">{hybrids.map(([name, details], index) => <div key={name} className="border border-aan-white/15"><button type="button" aria-expanded={openHybrid === index} onClick={() => setOpenHybrid(openHybrid === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm text-aan-white hover:bg-cryo-blue/5"><span><span className="mr-3 font-mono text-cryo-blue">0{index + 1}</span>{name}</span><span className="font-mono text-xs text-cryo-blue">{openHybrid === index ? '[-]' : '[+]'}</span></button>{openHybrid === index && <ul className={`border-t border-aan-white/10 px-4 py-3 ${mutedList}`}>{details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}</div>)}</div>
      </DossierSection>

      <DossierSection title="MUTATION RESONANCE MAP" color="cryo-blue">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4" role="tablist" aria-label="Regional mutation trends">{regions.map(([name], index) => <button key={name} type="button" role="tab" aria-selected={selectedRegion === index} onClick={() => setSelectedRegion(index)} className={`${buttonBase} ${selectedRegion === index ? 'border-titan-emerald bg-titan-emerald/10 text-titan-emerald' : 'border-aan-white/15 text-aan-white/60 hover:border-titan-emerald/60 hover:text-aan-white'}`}>{name}</button>)}</div>
        <div className="mt-4 grid gap-4 border border-titan-emerald/30 bg-titan-emerald/5 p-4 md:grid-cols-2" role="tabpanel"><div><p className={label}>TYPICAL MUTATIONS</p><p className="mt-2 text-aan-white/70">{region[1]}</p></div><div><p className={label}>REASONS</p><p className="mt-2 text-aan-white/70">{region[2]}</p></div></div>
      </DossierSection>
      <DossierNote color="forge-magma">"The Quasar-Resonance Classification"</DossierNote>
    </div>
  )
}
