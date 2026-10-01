import { HoverReveal, BurnReveal, FragmentLock, ChapterLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-cryo-blue tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function AbsoluteZeroDossier() {
  const headerData = {
    designation: 'PER-021L',
    classification: 'OBSIDIAN INDEX // CONTAINMENT PROTOCOL SPECIALIST // FIELD-TESTED',
    codename: 'ABSOLUTE ZERO',
    headerFields: [
      { label: 'LEGAL NAME', value: 'Lynx Damarion Kairen' },
      { label: 'KNOWN ALIASES', value: 'The Stillpoint, Nullblade, Apex Whisper' },
      { label: 'MUTATION TIER', value: 'Obsidian-Class Suppressor (Unofficial)' },
      { label: 'ENERGY TYPE', value: 'Nullify Field - controlled stasis where energy, motion, and thought slow or cease' },
      { label: 'CLASS DESIGNATION', value: 'Dominion Trainer - Containment Protocol Specialist' },
      { label: 'BIRTH REGION', value: 'Stratos Gate - born during a Voxx Reversal' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="cryo-blue" />
      <DossierSection title="PHYSICAL PROFILE" color="cryo-blue">
        <ul className="list-none space-y-1"><li><span className="text-aan-white/40 font-mono text-xs">HEIGHT:</span> 6'6"</li><li><span className="text-aan-white/40 font-mono text-xs">WEIGHT:</span> 208 lbs</li><li><span className="text-aan-white/40 font-mono text-xs">BODY TYPE:</span> Lean-muscular, forged for restraint and control</li><li><span className="text-aan-white/40 font-mono text-xs">HAIR:</span> Slate black, always buzzed or slicked back</li><li><span className="text-aan-white/40 font-mono text-xs">EYES:</span> Matte gray, flat and unreadable like ash</li><li><span className="text-aan-white/40 font-mono text-xs">SKIN:</span> Olive brown, cool to the touch, with micro-scarring on neck and hands.</li></ul><p className={`mt-4 ${label}`}>NOTABLE FEATURES:</p><ul className={mutedList}><li>Reinforced collar with embedded stasis regulators</li><li>Voice modulation is intentionally slowed to calm those nearby</li><li>Field stabilizes temperature in a perfect vacuum around his body</li></ul><p className={`mt-4 ${label}`}>RESONANCE SIGNATURE:</p><p>Nothing. His presence feels like absence - a blank in the room where energy should be.</p>
      </DossierSection>
      <DossierSection title="MUTATION / ENERGY DETAILS" color="cryo-blue">
        <p><span className={label}>PRIMARY ABILITY:</span> <span className="text-titan-emerald">Nullify Field</span> - Emits a 0-30 meter field where mutation energy weakens, neurological impulses lag, and physical movement is suppressed.</p><p className={`mt-4 ${label}`}>SECONDARY MANIFESTATIONS:</p><ul className={mutedList}><li>Quiet Cut severs a mutation from its physical form for seconds</li><li>Micro-bursts stun, knock down, or reset opponents</li><li>Mental resistance to illusions, overcharge fields, and mutation telepathy</li></ul><p className="mt-4"><span className={label}>CONTROL LEVEL:</span> Absolute, except prolonged Nyx exposure causes field stutters.</p><p><span className={label}>KNOWN TRIGGERS:</span> Violent mutation surges, unscheduled transformations, and cadet destabilization.</p><p><span className={label}>COMBAT STYLE:</span> Precise, brutal, disengaged. Treats combat like a correction and shuts systems down in sequence.</p><p className={`mt-4 ${label}`}>KNOWN SYNERGIES:</p><ul className={mutedList}><li>Helios King - dampens his field so he can act without overburn</li><li>Commander Voxx - silent coordination in detainment raids</li></ul>
      </DossierSection>
      <DossierSection title="PSYCH PROFILE" color="cryo-blue">
        <p><span className={label}>CORE TRAITS:</span> Controlled, blunt, unshakable, deeply internal.</p><p><span className={label}>STRENGTHS:</span> Tactical suppression genius with near-zero emotional leakage.</p><p><span className={label}>WEAKNESSES:</span> Delayed grief, poor emotional nuance, and dreams during wakefulness after Nyx proximity.</p><p><span className={label}>CORE BELIEF:</span> <HoverReveal reveal={'"Power is not meant to be worshiped. It needs to be held accountable."'}>[REDACTED]</HoverReveal></p><p><span className={label}>PUBLIC BEHAVIOR:</span> Speaks only when necessary. Beloved by instructors and feared by students.</p><p><span className={label}>PRIVATE REALITY:</span> Watches Nyx simulations obsessively and keeps a scorched stopwatch from the Helios/Myth incident.</p>
      </DossierSection>
      <DossierSection title="FAMILY & ORIGIN" color="cryo-blue">
        <p><span className={label}>FATHER:</span> Cargo operator - deceased in atmospheric rupture.</p><p><span className={label}>MOTHER:</span> Still alive, working as a data clerk in Helion.</p><p className={`mt-3 ${label}`}>FAMILY DYNAMICS:</p><ul className={mutedList}><li>Middle-tier Echelon; hard survival without glory or scandal.</li><li>Tested early because electronics failed around him.</li></ul><p className={`mt-3 ${label}`}>NOTABLE HERITAGE SECRETS:</p><ul className={mutedList}><li>Geneprint once flagged him as a low-tier Null.</li><li>AAN quietly reclassified him after six retests.</li></ul>
      </DossierSection>
      <DossierSection title="HISTORY / PURPOSE" color="cryo-blue">
        <p><span className={label}>SYSTEM ENTRANCE:</span> Silenced a cadet outburst zone while everyone else panicked; immediately drafted into Dominion Training.</p><p className={`mt-3 ${label}`}>EARLY POWER MANIFESTATION RECORD:</p><RedactedBlock lines={2} fragmentKey="NULL-EDGE-09" reveal={['> Age 12: Froze an entire testing wing for 41 seconds. Cameras showed frames out of sequence for hours.', '> Age 14: Full-field expansion suspended two instructors for six minutes. Neither remembers.']}/><p className={`mt-4 ${label}`}>PUBLIC ACHIEVEMENTS:</p><ul className={mutedList}><li>Led containment of the Warp Bloom in Blackroot</li><li>Reversed a Resonance Burn in Cryotherne</li><li>Taught six Apex elites in high-tension field tactics</li></ul><p className={`mt-4 ${label}`}>CENSORED INCIDENTS:</p><ul className={mutedList}><li>Present when Helios King lost control; only Lynx and Helios survived the rupture.</li><li>AAN believes his field contained the event.</li></ul><RedactedBlock lines={3}/><p className={`mt-6 ${label}`}>WHY HE MATTERS TO TITAN'S FUTURE:</p><ul className={mutedList}><li>If Nyx goes rogue, Lynx is the final play.</li><li>His field can halt high-tier anomalies without destruction.</li></ul>
      </DossierSection>
      <DossierSection title="SECRETS & PREFERENCES" color="cryo-blue">
        <p><span className={label}>ROMANTIC HISTORY:</span> <BurnReveal reveal="None publicly recorded. Nyx's presence registers as a subliminal heat spike in his neural scans. He denies it.">[CLASSIFIED - CLICK TO BURN]</BurnReveal></p><p><span className={label}>FEAR PROFILE:</span> Becoming trapped in his own field, erasing something he cannot restore, or merely delaying catastrophe.</p><p><span className={label}>FOOD / STYLE:</span> Liquid-neutral supplements, black-on-gray garments, and no insignia unless ordered.</p><p><span className={label}>COMBAT PREFERENCE:</span> Full-field lockdown, sever energy access, then drop targets one by one.</p><p className={`mt-4 ${label}`}>KNOWN TO VISIT:</p><ul className={mutedList}><li>A quiet floating temple near Cryotherne</li><li>Simulation replay halls</li><li>Nyx's room at 2:06 a.m.</li></ul><p className={`mt-6 ${label}`}>ONE SECRET NO ONE KNOWS:</p><FragmentLock fragmentKey="NULL-EDGE-09" reveal={<span className="text-titan-emerald italic">His full field can erase identity traces - power, memory, sometimes even name. He used it once on himself. Only Lynx remembers the version that vanished.</span>}/><div className="mt-3"><RedactedBlock lines={5}/></div>
      </DossierSection>
      <DossierNote color="forge-magma">"Trainer Kairen remains the most stable suppressor ever logged. If his field expands beyond 30 meters, initiate NO-NAME Protocol."</DossierNote>
      <div className="mt-10 font-mono text-xs"><ChapterLock chapter={48} reveal={<span className="text-cryo-blue">&gt; ADDENDUM [POST-TRIBUNAL]: Subject Kairen assisted in shrapnel containment and declined to engage Vexal. Current location: UNKNOWN - status ACTIVE, monitored.</span>}/></div>
    </div>
  )
}
