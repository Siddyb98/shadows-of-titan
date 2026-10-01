import { RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-root-violet tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function EkrosDossier() {
  const headerData = {
    designation: 'PER-VLT-OMEGA',
    classification: 'AAN PROFILE // Ga1199 // CONFIDENTIAL',
    codename: 'THE CHERRY RAT',
    headerFields: [
      { label: 'LEGAL NAME', value: 'Varian Nigile Lauren Ekros' },
      { label: 'CLEARANCE LEVEL', value: 'Red Tier / Helios Vault Division Only' },
      { label: 'POSITION', value: 'Chief Mutationist & Lead Internal Biotech Architect, Helios Vault' },
      { label: 'FIELD RISK RATING', value: 'Class Omega - Uncontainable by conventional means' },
      { label: 'AFFILIATIONS', value: 'Helios Vault (Public) / Ascension Council (Unofficial) / Fane Dryst (Covert)' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <div className="mb-8 border border-root-violet/50 bg-root-violet/10 p-4"><p className="font-mono text-xs tracking-[0.25em] text-root-violet">HELios VAULT // MEDICAL AUTHORITY // CONFIDENTIAL RED TIER</p><p className="mt-2 text-sm text-aan-white/70">Authorized clinical and biotech personnel only. Subject is a doctor, architect, and active internal security concern.</p></div>
      <DossierHeader data={headerData} color="root-violet" />
      <DossierSection title="PHYSICAL PROFILE" color="root-violet">
        <ul className="list-none space-y-1"><li><span className="text-aan-white/40 font-mono text-xs">HEIGHT:</span> 5&apos;2&quot;, formerly 5&apos;9&quot;</li><li><span className="text-aan-white/40 font-mono text-xs">BODY TYPE:</span> Compact, surgically restructured. Spine slightly bent from self-experimentation.</li><li><span className="text-aan-white/40 font-mono text-xs">SKIN:</span> Pale, almost translucent. Veins glow faint red under certain lighting.</li><li><span className="text-aan-white/40 font-mono text-xs">HAIR:</span> Gloss-white, chin length, unnaturally neat, always immaculately parted.</li><li><span className="text-aan-white/40 font-mono text-xs">EYES:</span> Bright cherry-red with artificial corneal caps. Pupils retract when focused.</li><li><span className="text-aan-white/40 font-mono text-xs">FACIAL FEATURES:</span> High cheekbones and slightly rat-like snout.</li></ul>
        <p className={`mt-4 ${label}`}>MUTATION TYPE: SURVIVAL LOOP // CATALYST-AUGMENTED</p><p>He does not regenerate. He adapts at a molecular level to not die.</p><ul className={`mt-3 ${mutedList}`}><li>Skin becomes impermeable in fire, breathable in gas, and osmotic in vacuum.</li><li>Aging stalled. DNA degradation rate reduced to 0.003%. Suspected to be over 100 years old.</li></ul>
        <p className={`mt-4 ${label}`}>IMPLANTS & ALTERATIONS:</p><ul className={mutedList}><li>Neural scaffold laced with Voxx-carbon wires for instant lab interface.</li><li>Internal gel organs capable of producing up to 12 classified mutagens.</li><li>Synthetic pulse cluster embedded in thorax. No natural heart remains.</li></ul>
      </DossierSection>

      <DossierSection title="PERSONALITY SNAPSHOT" color="root-violet"><p><span className={label}>PRIMARY MASK:</span> Cheerful, high-pitched speech patterns. Bright gloves, cherry-colored glasses, and candy for interns. Laughs at his own jokes and slaps desks when excited.</p><p className="mt-3 italic text-aan-white/60">“I have to admit! I wasn&apos;t sure that child&apos;s spine would hold the splicer, but look at that!”</p><p className="mt-4"><span className={label}>TRUE NATURE:</span> Obsessive, possessive, unblinking. Views living beings as prototype containers and holds no moral weight for pain, only results.</p><ul className={`mt-3 ${mutedList}`}><li>Fiercely intelligent and unshakably loyal to Fane Dryst.</li><li>Holds Myth&apos;s genetic data under encrypted lock and constantly analyzes it.</li><li>Invented over 37 mutations still in active AAN use.</li><li>Cannot form normal attachments and becomes erratic when denied genetic data or experimentation.</li></ul><p className="mt-4"><span className={label}>TACTILE PROFILE:</span> Touches everything to understand it.</p></DossierSection>

      <DossierSection title="ROLE & HISTORY" color="root-violet"><p><span className={label}>CURRENT ROLE:</span> Oversees all internal mutation testing within Helios Vault, including Apex viability trials, Pulse Code decoding, and experimental adaptives.</p><p>In charge of Black Sector Biologics, where children, Dregs, and captured anomalies are studied.</p><p className="mt-4"><span className={label}>COVERT ROLE:</span></p><ul className={mutedList}><li>Feeds information to Fane Dryst from inside AAN&apos;s inner core.</li><li>Subtly sabotaged 11 Apex development sequences in the last decade.</li><li>Installed Whisper Nodes in Helion Prime sub-root lifts, enabling Fane&apos;s access to Vault data.</li></ul><p className="mt-4"><span className={label}>PERSONAL HISTORY:</span> Joined AAN as a data-sponge intern with no visible powers. Repeatedly survived dangerous lab incidents and was promoted after rebuilding his own circulatory system by fusing Aether moss with bio-copper.</p><p className="mt-4">Rumored to have drank a Null&apos;s spinal fluid to prove an experimental theory on resonance oscillation. His personality change began after contact with Dryst.</p></DossierSection>

      <DossierSection title="RELATIONSHIPS & ALLIANCES" color="root-violet"><ul className={mutedList}><li><span className={label}>FANE DRYST:</span> Bonded through joint experiments on Catalyst rot. Obsessed with preserving Dryst at any cost. Their dynamic is closer to parasite, host, or symbiote than conventional romance.</li><li><span className={label}>THE AAN:</span> Mistrusted by Helios King, hated by Lynx Kairen, and feared by younger medics. Protected by the Ascension Council for unmatched bio-systems expertise; circumvents 24/7 surveillance.</li><li><span className={label}>VEXAL OPHEDIUS:</span> Willfully antagonistic. Provokes Vexal by mentioning Myth&apos;s gene reactions and calls him My Failed Prototype A.</li><li><span className={label}>NYX / MYTH:</span> Collects her hair strands, saved a clone of her retinal nerve map, and wants to expose her to all five Catalyst Wells. Keeps a glass vial of her presence echo in his private lab.</li></ul></DossierSection>

      <DossierSection title="PSYCH EVALUATION // CENSORED" color="root-violet"><p><span className={label}>DIAGNOSIS:</span> Narcissistic Experimental Instinct Disorder (unofficial). Sociopathic affect with glimmer responses toward authority. Pathological joy from structural collapse.</p><p className="mt-4"><span className={label}>KEY BEHAVIORS:</span></p><ul className={mutedList}><li>Offers gifts to people he is about to sabotage.</li><li>Names syringes after extinct Earth flowers.</li><li>Hums lullabies from different cultures while dissecting.</li></ul><p className="mt-4"><span className={label}>SECRET WEAKNESS:</span> Craves validation from people he deems divine. Myth is now one. If rejected outright by Dryst, may become unstable and suicidal.</p><p className="mt-4">Has six cloned bodies in various stages of degeneration in case of death.</p><RedactedBlock lines={4} /></DossierSection>

      <DossierSection title="RELATION TO NYX / MYTH" color="root-violet"><p>Became immediately obsessed with her presence and secretly logged her warp signature the first time she entered Helios Vault.</p><p className="mt-4">Delivered a decrypted power simulation to Dryst, who used it to pressure Vexal.</p><p className="mt-4">Believes Nyx is Catalyst-Affirmed and refers to her as “my future failed goddess.”</p><RedactedBlock lines={3} /></DossierSection>
      <DossierNote color="forge-magma">“Isn&apos;t evolution just another kind of party?”</DossierNote>
      <DossierSection title="MISCELLANEOUS" color="root-violet"><p><span className={label}>CLOTHING:</span> Bright teal gloves, impossibly clean cherry-red lab coat with personal AAN seal, bone-white syringe holsters, and a throat amplifier that alters pitch and tone.</p><p className="mt-4"><span className={label}>HOBBIES:</span> Creating mood dolls based on Apex DNA, tending a private garden of organs growing in nutrient moss, and stargazing through preserved Dreg eyes.</p></DossierSection>
    </div>
  )
}
