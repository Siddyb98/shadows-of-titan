import { RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-titan-gold tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function HalflightDossier() {
  const headerData = {
    designation: 'PER-G-08',
    classification: 'AAN PROFILE: DREG INTEL ASSET // UNCONFIRMED DOUBLE AGENT // OBSERVATION PRIORITY LEVEL GAMMA',
    codename: 'HALFLIGHT',
    headerFields: [
      { label: 'LEGAL NAME', value: 'Lyra Inez Solvyn' },
      { label: 'KNOWN ALIASES', value: 'Violet Ghost, Riftjaw, Echo Wretch' },
      { label: 'MUTATION TIER', value: 'Dreg-Class - Shadow Subtype, Untethered' },
      { label: 'ENERGY TYPE', value: 'Wraith Touch - phase intangibility through solid matter and dimensional thinning' },
      { label: 'DESIGNATION', value: 'Unofficial Intelligence Operative - suspected traitor, suspected loyalist, suspected everything' },
      { label: 'BIRTH REGION', value: 'Blackroot Verge, Sector 13 - under a mobile fungal shelter during a thunder season' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-gold" />
      <DossierSection title="PHYSICAL PROFILE" color="titan-gold">
        <ul className="list-none space-y-1"><li><span className="text-aan-white/40 font-mono text-xs">HEIGHT:</span> 5&apos;9&quot;</li><li><span className="text-aan-white/40 font-mono text-xs">WEIGHT:</span> Approximately 138 lbs</li><li><span className="text-aan-white/40 font-mono text-xs">BODY TYPE:</span> Sleek, athletic. A runner&apos;s frame.</li><li><span className="text-aan-white/40 font-mono text-xs">HAIR:</span> Deep violet, side shaved with surgical precision; longer section layered to her collarbone.</li><li><span className="text-aan-white/40 font-mono text-xs">EYES:</span> Icy lilac, nearly glowing in dim spaces. Sometimes mirrored and unnaturally reflective.</li><li><span className="text-aan-white/40 font-mono text-xs">SKIN:</span> Light brown with a faint opal undertone that becomes more visible when phasing.</li></ul>
        <p className={`mt-4 ${label}`}>NOTABLE FEATURES:</p><ul className={mutedList}><li>Micro-scar arrays around her temples and ribs - signs of failed restraint implants.</li><li>Tattoo of a fractured crescent moon behind her left ear, an abandoned Dreg resistance symbol.</li><li>Small metal ring embedded into her wristbone; believed to regulate phase stability or suppress it.</li></ul>
        <p className={`mt-4 ${label}`}>RESONANCE SIGNATURE:</p><ul className={mutedList}><li>When she phases, a hum distorts near electronics: signal loss and static bursts.</li><li>Appears on surveillance 2-3 seconds later than real time; her phase trails behind.</li><li>Touching her mid-phase induces momentary emotional nausea or deja vu in others.</li></ul>
        <p className={`mt-4 ${label}`}>WARDROBE STYLE:</p><ul className={mutedList}><li>Asymmetrical cloak jackets, lined boots, shredded gloves.</li><li>Armor woven with flexible null-weave to allow movement while partially intangible.</li><li>Always dresses for quick movement.</li></ul>
      </DossierSection>

      <DossierSection title="MUTATION / ENERGY DETAILS" color="titan-gold">
        <p><span className={label}>PRIMARY ABILITY:</span> <span className="text-titan-gold">Wraith Touch</span> - Allows full or partial phasing through physical matter, including walls, barriers, and other living beings.</p><ul className={`mt-4 ${mutedList}`}><li>At short bursts, she can slip through objects with no consequence.</li><li>Extended phasing, 20 minutes or more, fractures her sense of time, place, and identity; she has begun seeing events that have not occurred.</li><li>At maximum output, she can phase others with her, but this causes mutual neural bleed.</li></ul>
        <p className={`mt-4 ${label}`}>SECONDARY MANIFESTATIONS:</p><ul className={mutedList}><li>Echo Slip: Leaves behind a temporary shadow shell to mislead pursuers.</li><li>Dim Vein: Can passively nullify detection fields and heat sensors.</li><li>Displacement Shock: If caught mid-phase, releases a concussive pulse capable of stunning Apex-class enemies.</li></ul>
        <p className="mt-4"><span className={label}>CONTROL LEVEL:</span> Advanced when calm. Dangerously unstable under emotional duress or near void-affected zones.</p><p><span className={label}>KNOWN TRIGGERS:</span> Vexal&apos;s voice, the sound of her own heartbeat, and security doors marked Class Omega.</p><p><span className={label}>COMBAT STYLE:</span> Phantom ambusher; uses intangibility to approach unseen, disable quickly, and vanish. Utilizes dual mono-knives made of compressed shadowcore.</p><p className={`mt-4 ${label}`}>KNOWN SYNERGIES:</p><ul className={mutedList}><li>Vexal Ophedius - former partner, lover, and now leader. The connection is toxic and enduring.</li><li>Korrick Vale - protector turned partner. She saved his life once, and he vows to pay it back.</li><li>Nyx - sees her as <span className="text-forge-magma">REDACTED REDACTED REDACTED REDACTED</span>.</li></ul>
      </DossierSection>

      <DossierSection title="PSYCH PROFILE" color="titan-gold">
        <p><span className={label}>CORE PERSONALITY TRAITS:</span> Elusive, sarcastic, unmoored, deeply intuitive.</p><p><span className={label}>STRENGTHS:</span> Natural liar. Keen pattern recognition. Excellent survivalist with a soft spot for people who still hope.</p><p><span className={label}>WEAKNESSES:</span> Does not trust herself with anyone&apos;s full truth. Suffers phase slips and always holds back.</p><p><span className={label}>CORE BELIEF:</span> “Loyalty is a luxury. Silence is safer.”</p><p><span className={label}>PUBLIC BEHAVIOR:</span> Plays the weird, slippery Dreg girl; shrugs off questions, slips out early, flirts with tech officers, and never raises her voice.</p><p><span className={label}>PRIVATE REALITY:</span> Wonders if part of her is still phased out. Keeps a black notebook filled with names she has forgotten and sketches of people she dreams about but has never met.</p>
      </DossierSection>

      <DossierSection title="FAMILY & ORIGIN" color="titan-gold">
        <p><span className={label}>MOTHER:</span> Saelis Solvyn - presumed dead, biohacker and patch medic.</p><p><span className={label}>FATHER:</span> Unknown - possibly Apex-linked or void-coded. No records.</p><p><span className={label}>VEXAL OPHEDIUS:</span> She never confirms anything, but her file hints at early experimentation.</p><p className={`mt-4 ${label}`}>FAMILY DYNAMICS:</p><ul className={mutedList}><li>Her mother raised her to phase before she learned to read.</li><li>She has never trusted anyone who sleeps through the night.</li><li>Keeps a rusted medallion from her childhood shelter, the only real thing she owns.</li></ul><p className={`mt-4 ${label}`}>NOTABLE HERITAGE SECRETS:</p><ul className={mutedList}><li>May have Catalyst Rejection Syndrome, a rare mutation resistance that could make her immune to forced gene edits.</li><li>Her DNA may have been used to stabilize part of Vexal&apos;s failed decay core.</li></ul>
      </DossierSection>

      <DossierSection title="HISTORY / PURPOSE" color="titan-gold">
        <p><span className={label}>SYSTEM ENTRANCE:</span> Captured during an AAN raid on a smuggler node. She phased through two walls and five guards before being cornered. Rather than kill her, the AAN implanted a phasic tracker and watched what she did with her freedom.</p><p className={`mt-4 ${label}`}>EARLY POWER MANIFESTATION RECORD:</p><ul className={mutedList}><li>Walked through a firestorm to pull a child from a melting street vent.</li><li>Phased into a locked lab and watched a secret Apex injection happen; she has not spoken about it since.</li><li>Rumored to have vanished mid-interrogation, leaving only her pulse monitor, still ticking.</li></ul><p className={`mt-4 ${label}`}>PUBLIC ACHIEVEMENTS:</p><ul className={mutedList}><li>None acknowledged.</li><li>Unofficially credited with leaking Helios Vault specs to resistance cells.</li><li>Rescued two Null children from a collapsed tower without alerting AAN forces.</li></ul><p className={`mt-4 ${label}`}>CENSORED INCIDENTS:</p><ul className={mutedList}><li>Once appeared on a Nyx-linked energy readout, despite never <span className="text-forge-magma">REDACTED REDACTED REDACTED</span>.</li><li>Her DNA was detected inside the Obsidian Annex, yet no entrance was recorded.</li><li>She died once. AAN recorded a full neural flatline. Two days later, she phased into the exact same room.</li></ul><p className={`mt-4 ${label}`}>WHY SHE MATTERS TO TITAN&apos;S FUTURE:</p><p>Lyra may be one of the few who can navigate between folds, slipping between time, memory, and phase. Her connection to Vexal and Korrick ties her to the heart of the uprising and the fall of AAN.</p>
      </DossierSection>

      <DossierNote color="forge-magma">“Solvyn&apos;s danger rating is disproportionate to her output. That&apos;s what makes her lethal. Do not attempt full capture - only shadow tracking.”</DossierNote>

      <DossierSection title="SECRETS & PREFERENCES" color="titan-gold">
        <p><span className={label}>ROMANTIC HISTORY:</span> Vexal: “It wasn&apos;t love. It was a mirror you couldn&apos;t look away from.” Korrick: “He trusted me. Once. I miss that. But not enough to stop.” Nyx: “She&apos;s not like us. But she feels like <span className="text-forge-magma">REDACTED REDACTED REDACTED</span>.”</p><p><span className={label}>FEAR PROFILE:</span> That she will phase one day and never come back; that Vexal was not corrupted; that she has already told her secrets to someone and cannot remember.</p><p><span className={label}>FOOD / STYLE PREFERENCES:</span> Crunchy protein clusters and freeze-packed fruit. Keeps a spare vibro-blade in her collar hem. Loves foggy weather and hates gun safeties clicking.</p><p><span className={label}>COMBAT PREFERENCE:</span> In and out. Silence, then absence. Strikes from below, within, and around with twin curved daggers that flicker in and out of visibility.</p><p className={`mt-4 ${label}`}>FAVORITE CIVILIAN HAUNTS:</p><ul className={mutedList}><li>Shadow markets in Helion&apos;s underroot district.</li><li>Tech junkyards.</li><li>A movie theater ceiling crawlspace where she once watched a romantic epic.</li></ul><p className={`mt-5 ${label}`}>ONE SECRET NO ONE KNOWS:</p><p>Lyra once phased inside <span className="text-forge-magma">REDACTED REDACTED REDACTED</span>. She does not remember what happened, but came back humming the exact same tone Myth makes when she warps.</p><RedactedBlock lines={6} />
      </DossierSection>
    </div>
  )
}
