import { FragmentLock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-titan-gold tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function BreakingPointDossier() {
  const headerData = {
    designation: 'PER-OMEGA-03',
    classification: 'AAN PROFILE: THE TECTONIC PARADOX',
    codename: 'BREAKINGPOINT',
    headerFields: [
      { label: 'LEGAL NAME', value: 'Korrick Elijah Vail' },
      { label: 'KNOWN ALIASES', value: 'The Unbreakable, Faultfather, Vexal\'s Wall' },
      { label: 'MUTATION TIER', value: 'Quasar-Class' },
      { label: 'ENERGY TYPE', value: 'Seismic Pulse - ground sovereignty manipulation' },
      { label: 'DESIGNATION', value: 'Dreg-Class (Titan Exception) - Uncontainable Asset' },
      { label: 'BIRTH REGION', value: 'Outer Skelter Reach, near Reactor Five\'s rim' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-gold" />
      <DossierSection title="PHYSICAL PROFILE" color="titan-gold">
        <ul className="list-none space-y-1"><li><span className="text-aan-white/40 font-mono text-xs">HEIGHT:</span> 6&apos;10&quot;</li><li><span className="text-aan-white/40 font-mono text-xs">WEIGHT:</span> 480 lbs, with dense, hyper-compressed bone density</li><li><span className="text-aan-white/40 font-mono text-xs">BODY TYPE:</span> Titanic mass. Broad. Shoulders like tectonic plates.</li><li><span className="text-aan-white/40 font-mono text-xs">HAIR:</span> Black, kept close-shaved.</li><li><span className="text-aan-white/40 font-mono text-xs">EYES:</span> Gray-lava core with microfractures around the pupils. They do not blink often.</li><li><span className="text-aan-white/40 font-mono text-xs">SKIN:</span> Thick bronze, scar-laced from decades of underground tremors and minor collapses. Cannot be pierced by basic surgical equipment.</li></ul>
        <p className={`mt-4 ${label}`}>NOTABLE FEATURES:</p><ul className={mutedList}><li>No implants. His flesh rejects foreign tech.</li><li>External seismic gauntlets increase localized pulse distribution.</li><li>Every footstep registers like a low-grade quake.</li></ul>
        <p className={`mt-4 ${label}`}>WARDROBE STYLE:</p><ul className={mutedList}><li>Thick riot-bomber vest repurposed from discarded Apex armor.</li><li>Gauntlet-augmented fists and shoulder plates made from old reactor shell metal.</li><li>Handmade toolbelt, often filled with snacks.</li><li>Carries a folding stool and baby bottle because he loves kids.</li></ul>
        <p className={`mt-4 ${label}`}>RESONANCE SIGNATURE:</p><ul className={mutedList}><li>Walking seismic anomaly.</li><li>If he is nearby, the ground has a slow pulse.</li><li>Direct contact causes pressure barometers to go haywire.</li></ul>
      </DossierSection>

      <DossierSection title="MUTATION / ENERGY DETAILS" color="titan-gold">
        <p><span className={label}>PRIMARY ABILITY:</span> <span className="text-titan-gold">Seismic Pulse</span> - Absolute dominion over the ground beneath him.</p><ul className={`mt-4 ${mutedList}`}><li>Emits concussive waveforms through stone, metal, and bio-material as localized quakes or wide-range destruction.</li><li>Can reabsorb rebound energy, magnifying it exponentially.</li><li>No known physical breaking point. Bones cannot fracture.</li></ul>
        <p className={`mt-4 ${label}`}>SECONDARY MANIFESTATIONS:</p><ul className={mutedList}><li>Groundlock: Can anchor to any solid surface, even sheer walls or ceilings.</li><li>Fault Echo: Remembers terrain once walked and can recreate entire battlefields from memory.</li><li>Pulse Amplitude Scaling: Energy grows the longer he remains in combat and stabilizes after connection with Vexal.</li></ul>
        <p className="mt-4"><span className={label}>CONTROL LEVEL:</span> Mastery, unless provoked by deep grief.</p><p><span className={label}>KNOWN TRIGGERS:</span> Harm to children or innocents, collapsing mines or industrial abuse, and the sound of Lyra crying.</p><p><span className={label}>COMBAT STYLE:</span> Berserker juggernaut. Area control god. If you are not airborne, you will probably die. He does not fight unless forced, but the terrain becomes unusable when he does.</p>
        <p className={`mt-4 ${label}`}>KNOWN SYNERGIES:</p><ul className={mutedList}><li>Vexal Ophedius - his truest anchor. Without Vexal, his energy spikes dangerously.</li><li>Lyra Solvyn - a phantom comfort. They laugh together and sometimes phase-dance around collapse zones.</li><li>Children - his energy stabilizes when holding infants, making him completely harmless. No one knows why.</li></ul>
      </DossierSection>

      <DossierSection title="PSYCH PROFILE" color="titan-gold">
        <p><span className={label}>CORE PERSONALITY TRAITS:</span> Gentle, loyal, observant, unwavering.</p><p><span className={label}>STRENGTHS:</span> Absolute commitment, advanced spatial intuition, humor, and empathy.</p><p><span className={label}>WEAKNESSES:</span> Deep grief destabilizes the system. Loyalty-blind. Eats an extreme amount to maintain bone and muscle density.</p><p><span className={label}>CORE BELIEF:</span> “If you can&apos;t lift the world, at least keep it from falling on someone else.”</p><p><span className={label}>PUBLIC BEHAVIOR:</span> Revered in Forgedeep and beloved in Dreg child circles. Never abuses power and does not flaunt his strength.</p><p><span className={label}>PRIVATE REALITY:</span> Grieves in silence. Visits old cave-ins to sit with the names of the lost. Keeps a little wooden carving Lyra made in his pocket, shaped like a pebble.</p>
      </DossierSection>

      <DossierSection title="FAMILY & ORIGIN" color="titan-gold">
        <p><span className={label}>FATHER:</span> Dolan Vail, former miner, now in hospice. Still calls Korrick his little quake.</p><p><span className={label}>MOTHER:</span> Sera Vail, retired ration-worker. Sings old Earth lullabies and makes his gloves by hand.</p><p className={`mt-4 ${label}`}>FAMILY DYNAMICS:</p><ul className={mutedList}><li>Lives nearby; Korrick supports them fully.</li><li>They are the reason he never joined AAN - he would have had to leave.</li><li>Reads to them nightly when off-duty, with no exceptions.</li></ul><p className={`mt-4 ${label}`}>NOTABLE HERITAGE SECRETS:</p><ul className={mutedList}><li>Once triggered a Catalyst Well tremor; AAN covered it up as a meteor impact.</li><li>Was forcibly sent to Nocturne Spire for containment testing.</li><li>Walked out 11 hours later, uninjured.</li></ul>
      </DossierSection>

      <DossierSection title="HISTORY / PURPOSE" color="titan-gold">
        <p><span className={label}>SYSTEM ENTRANCE:</span> AAN offered him Apex fast-track status. When he refused, they tried exile. Vexal found him shortly after; they never left each other&apos;s side.</p><p className={`mt-4 ${label}`}>EARLY POWER MANIFESTATION RECORD:</p><ul className={mutedList}><li>Cracked a tectonic plate at age 11 trying to save a friend.</li><li>Created a breathing tunnel during a volcanic surge by hammering rhythmically into solid stone.</li><li>Walked through a collapsing Dominion dam to hold it open until evacuation completed.</li></ul><p className={`mt-4 ${label}`}>PUBLIC ACHIEVEMENTS:</p><ul className={mutedList}><li>Rebuilt half of the outer Dreg settlements with his bare hands.</li><li>Negotiated a truce with Forgedeep riot forces by standing in as a living shield.</li><li>Allowed to pass AAN borders without escort under a silent non-aggression pact.</li></ul><p className={`mt-4 ${label}`}>CENSORED INCIDENTS:</p><ul className={mutedList}><li>Destroyed Catalyst Well Six during an AAN confrontation. Stopped only after Helios begged.</li><li>Carved a seismic fault through an Apex arena during an illegal experiment. No bodies were recovered alive.</li><li>Caused the Blackroot Pulsewake by stomping once. Satellite footage corrupted.</li></ul><p className={`mt-4 ${label}`}>WHY HE MATTERS TO TITAN&apos;S FUTURE:</p><p>Korrick is the tectonic deterrent. If he sided with Vexal in open war, AAN estimates an 82% chance of planetary destabilization.</p>
      </DossierSection>

      <DossierNote color="forge-magma">“Subject Vail is not an Apex. Maintain positive surveillance. Never provoke. If he ever mourns publicly, begin global evacuation protocols.”</DossierNote>

      <DossierSection title="SECRETS & PREFERENCES" color="titan-gold">
        <p><span className={label}>ROMANTIC HISTORY:</span> Lyra Solvyn: one night together. She phased through him and forgot by the next morning. Korrick remembers every second and never speaks of it. He is not actively romantic, but incredibly warm once bonded.</p><p><span className={label}>FEAR PROFILE:</span> Losing his parents, failing to protect Dreg children, and disappointing Vexal, his chosen anchor.</p><p><span className={label}>FOOD / STYLE PREFERENCES:</span> Eats 12 times the average Titan citizen. Loves thick bone-broth, protein bricks, fried nut-rice, and caramel gelpacks. Secret sweet tooth; Lyra once caught him eating a whole pudding loaf with a hammer.</p><p><span className={label}>COMBAT PREFERENCE:</span> Lets loose and reshapes the battlefield. Smashes gravity lines, destabilizes foundations, and isolates enemies. Signature move: Fault Embrace - slams both fists down and cracks terrain in a 3 km radius.</p><p className={`mt-4 ${label}`}>FAVORITE CIVILIAN HAUNTS:</p><ul className={mutedList}><li>Dreg playgrounds, where children let him push swings.</li><li>A ruined bridge called The Holdfast, rebuilt with Vexal.</li><li>The old Hollow Station mines, where he first felt he mattered.</li></ul><p className={`mt-5 ${label}`}>SECRET NO ONE KNOWS:</p><FragmentLock fragmentKey="FAULT-CORE-1" reveal={<span>Korrick has never unleashed his full seismic potential. He dreams about shaking Titan so hard it resets the whole world, and sometimes wonders if Vexal will ask him to do just that.</span>} />
      </DossierSection>
    </div>
  )
}
