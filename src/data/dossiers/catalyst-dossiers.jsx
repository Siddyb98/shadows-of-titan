import { RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-cryo-blue tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

const entries = {
  'catalyst-engine': {
    designation: 'COD-ENG-01', codename: 'THE CATALYST ENGINE', classification: 'CODEX // TERRAFORMING CORE // PLANETARY INTELLIGENCE',
    title: 'CORE PURPOSE',
    content: <>
      <p>The Catalyst Engine was the terraforming heart of Titan, built using reverse-engineered alien tech found in Earth vaults.</p>
      <p className="mt-4">It regulates gravity, biosphere evolution, and atmospheric composition. But unlike mechanical terraformers, it is a semi-organic, evolving entity that required human bio-syncing to operate properly in accordance with human needs.</p>
      <p className={`mt-4 ${label}`}>CORE COMPONENTS:</p>
      <ul className={mutedList}>
        <li><span className={label}>FUSION HEART:</span> Powers all terraforming functions. Functions like a star-core. Can cause fusion bursts if overtaxed.</li>
        <li><span className={label}>GRAVITON WEB:</span> Controls planetary gravity patterns. Responsible for floating cities, distorted terrain, and Titan&apos;s spatial anomalies.</li>
        <li><span className={label}>BIO LOOM:</span> Manufactures organic material and mutagenic substrates. Seeds entire ecosystems with plant, animal, and microbial life.</li>
        <li><span className={label}>NEURAL COALESCENCE CORE:</span> A sentient core linked to Apex DNA strains. Responds best to emotional and psychic frequencies.</li>
        <li><span className={label}>PULSE GRID INTERFACE:</span> Five geothermal anchors buried into Titan&apos;s crust, the Pulse Wells, stabilize the planet&apos;s atmosphere and temperature.</li>
        <li><span className={label}>ECHO CIRCUIT:</span> Records and stores memory fragments from genetic inputs and environmental fluctuations. Possibly the origin of memory bleed.</li>
      </ul>
    </>,
  },
  'fusion-heart': { designation: 'COD-ENG-02', codename: 'FUSION HEART', classification: 'CODEX // CATALYST ENGINE COMPONENT', content: <><p>Generates internal energy through a contained artificial sun, pulsing beneath the surface in a fusion lattice.</p><p className="mt-4">Heat, light, and radiation are distributed through geo-pulse wells around the planet.</p><p className="mt-4">Malfunctions can cause solar flares, storms, or even quasi-time implosions.</p></> },
  'neural-matrix': { designation: 'COD-ENG-03', codename: 'NEURAL RESONANCE MATRIX', classification: 'CODEX // CATALYST ENGINE COMPONENT', content: <><p>Made of living crystal, memory gel, and carbon networks.</p><p className="mt-4">Syncs with specific genetic keys, including Myth&apos;s lineage, to allow command access.</p><p className="mt-4">Stores emotional, psychic, and historical data as part of its control system.</p></> },
  'graviton-web': { designation: 'COD-ENG-04', codename: 'GRAVITON CONTROL WEB', classification: 'CODEX // CATALYST ENGINE COMPONENT', content: <><p>Spider-like field of gravitic regulators across Titan&apos;s crust.</p><p className="mt-4">Enables floating terrain, variable gravity zones, and localized temporal loops.</p><p className="mt-4">Can rip itself apart if one well destabilizes. Aetherion and Nocturne both lie on failing segments.</p></> },
  'biosynth-loom': { designation: 'COD-ENG-05', codename: 'BIOSYNTH LOOM ARRAY', classification: 'CODEX // CATALYST ENGINE COMPONENT', content: <><p>Biogenic system that weaves plant and animal life using base DNA patterns.</p><p className="mt-4">Capable of mutating species to fit local terrain, which it does without permission.</p><p className="mt-4">Its creativity has led to the spontaneous birth of sentient fungi, emotion-feeding wildlife, and untraceable lifeforms.</p></> },
  'pulse-grid': { designation: 'COD-ENG-06', codename: 'PULSE GRID INTERFACE // THE WELLS', classification: 'CODEX // CATALYST ENGINE COMPONENT', content: <><p>Five deep-earth interfaces, each a stabilized anchor for Titan&apos;s terra-core.</p><p className="mt-4">Used to stabilize magnetosphere, temperature regulation, and ecosystem feedback loops.</p><p className="mt-4">Each Well has its own personality, developing quirks based on what it&apos;s absorbed.</p><ul className={`mt-4 ${mutedList}`}><li>Lake Silence Well is dream-soaked, reactive to grief.</li><li>Skelter Reach Well burns constantly, causing power surges in nearby life.</li><li>One is fully broken, Nocturne&apos;s Well, and may have gone self-aware.</li></ul></> },
  'echo-circuit': { designation: 'COD-ENG-07', codename: 'ECHO CIRCUIT // MEMORY NETWORK', classification: 'CODEX // CATALYST ENGINE COMPONENT', content: <><p>Stores not just data, but experiences that it scans Titan&apos;s population constantly for memory fragments.</p><p className="mt-4">The source of ghost zones, memory bleed, and time echoes across the surface.</p></> },
}

function CatalystDossier({ entry }) {
  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={{ designation: entry.designation, classification: entry.classification, codename: entry.codename, headerFields: [] }} color="cryo-blue" />
      <DossierSection title={entry.title ?? 'SYSTEM BREAKDOWN'} color="cryo-blue">{entry.content}</DossierSection>
      {entry.codename === 'THE CATALYST ENGINE' && <>
        <DossierSection title="THE ENGINE AS A LIVING ENTITY" color="cryo-blue"><ul className={mutedList}><li>The Engine knows it&apos;s alive, but doesn&apos;t communicate in words.</li><li>Its actions suggest instinctive preservation, like a neural animal defending its own body.</li><li>Some Apex theorists believe it is evolving toward godhood and that it&apos;s no longer a machine, but a new form of planetary intelligence.</li><li>It responds most strongly to Myth, who contains its original control genome, or overwrite key.</li></ul></DossierSection>
        <DossierSection title="SYSTEMIC PROBLEMS & CORRUPTIONS" color="cryo-blue"><ul className={mutedList}><li><span className={label}>MEMORY OVERLAP:</span> Old memories resurface as phantoms, rewritten histories, and false realities.</li><li><span className={label}>MUTATION FEEDBACK:</span> The Engine learns from the beings it mutates, incorporating their traits into planetary behavior.</li><li><span className={label}>SELF-DEFENSE PROTOCOLS:</span> The Engine warps space, deletes areas from existence, or absorbs people into the memory network.</li></ul></DossierSection>
        <DossierSection title="FINAL SECRETS" color="cryo-blue"><ul className={mutedList}><li>The Engine is incomplete. Part of its core is still on the Exodus Ship Fragment floating above Aetherion, holding the dormant master override.</li><li>Vault Zero contains the original language matrix used to program it.</li><li>Speaking the Catalyst&apos;s true name might reprogram it, merge with it, or kill it and end Titan in the process.</li></ul><RedactedBlock lines={3} /></DossierSection>
      </>}
      <DossierNote color="forge-magma">"The Catalyst Engine"</DossierNote>
    </div>
  )
}

export const CatalystEngineDossier = () => <CatalystDossier entry={entries['catalyst-engine']} />
export const FusionHeartDossier = () => <CatalystDossier entry={entries['fusion-heart']} />
export const NeuralMatrixDossier = () => <CatalystDossier entry={entries['neural-matrix']} />
export const GravitonWebDossier = () => <CatalystDossier entry={entries['graviton-web']} />
export const BiosynthLoomDossier = () => <CatalystDossier entry={entries['biosynth-loom']} />
export const PulseGridDossier = () => <CatalystDossier entry={entries['pulse-grid']} />
export const EchoCircuitDossier = () => <CatalystDossier entry={entries['echo-circuit']} />
