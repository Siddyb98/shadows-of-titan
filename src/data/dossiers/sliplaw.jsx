import { FragmentLock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-titan-gold tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function SliplawDossier() {
  const headerData = {
    designation: 'PER-ENF-44',
    classification: 'AAN PROFILE: ELITE ENFORCER CANDIDATE // HIGH TRUST SECURITY ACCESS',
    codename: 'SLIPLAW',
    headerFields: [
      { label: 'LEGAL NAME', value: 'Cyris Malek Zehn' },
      { label: 'KNOWN ALIASES', value: 'The Bolt, Lawhawk, Blue Echo' },
      { label: 'MUTATION TIER', value: 'Echelon - Apex Recommendation Pending' },
      { label: 'ENERGY TYPE', value: 'Kinetic Surge - momentum acceleration and redirection' },
      { label: 'CLASS DESIGNATION', value: 'Dominion Academy - Enforcement Track, Class Marshal' },
      { label: 'BIRTH REGION', value: 'Stratos Gate - sonic-suppression military nursery' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-gold" />
      <DossierSection title="PHYSICAL PROFILE" color="titan-gold">
        <ul className="list-none space-y-1"><li><span className="text-aan-white/40 font-mono text-xs">HEIGHT:</span> 6&apos;1&quot;</li><li><span className="text-aan-white/40 font-mono text-xs">WEIGHT:</span> Approximately 205 lbs</li><li><span className="text-aan-white/40 font-mono text-xs">BODY TYPE:</span> Compact, powerful. Built like a sprinter - heavy thighs, trim waist, deep chest.</li><li><span className="text-aan-white/40 font-mono text-xs">HAIR:</span> Deep navy-black, always slicked back or tied in a short regulation bun.</li><li><span className="text-aan-white/40 font-mono text-xs">EYES:</span> Slate gray - unnervingly steady, almost mechanical in focus.</li><li><span className="text-aan-white/40 font-mono text-xs">SKIN:</span> Light brown with a metallic undertone; faint kinetic burn scars down his spine from overuse.</li></ul>
        <p className={`mt-4 ${label}`}>NOTABLE FEATURES:</p><ul className={mutedList}><li>Kinetic direction glyphs tattooed on his forearms, used as guides during rapid movement.</li><li>Digitized impact meter on his left hip records every high-speed collision.</li><li>Military-cut uniform always pristine, even after combat.</li></ul>
        <p className={`mt-4 ${label}`}>RESONANCE SIGNATURE:</p><ul className={mutedList}><li>Emits a low hum at rest.</li><li>When charging, nearby dust, debris, and loose fabric pull toward him before he surges.</li><li>Leaves faint trails of blue-light static where he turns too sharply.</li></ul>
        <p className={`mt-4 ${label}`}>WARDROBE STYLE:</p><ul className={mutedList}><li>Dominion-issue attire with silver rank highlights.</li><li>Disciplinary sash earned by turning in three Apex initiates.</li><li>Reinforced gloves prevent velocity shredding during hard stops.</li></ul>
      </DossierSection>

      <DossierSection title="MUTATION / ENERGY DETAILS" color="titan-gold">
        <p><span className={label}>PRIMARY ABILITY:</span> <span className="text-titan-gold">Kinetic Surge</span> - Generates exponential bursts of movement by absorbing potential energy and releasing it into motion.</p>
        <ul className={`mt-4 ${mutedList}`}><li>Can accelerate from still to supersonic in under 3 seconds.</li><li>Kinetic inertia can be stored and redirected; he can stop and slam that force into a target.</li><li>Can run up walls, across ceilings, or across the surface of water briefly.</li></ul>
        <p className={`mt-4 ${label}`}>SECONDARY MANIFESTATIONS:</p><ul className={mutedList}><li>Shockwave Displacement: Generates a concussive blast by halting mid-surge.</li><li>Rebound Combat: Uses enemies&apos; strikes against them by borrowing their kinetic force.</li><li>Phase Dash: Blinks in and out during ultra-high movement, appearing to teleport.</li></ul>
        <p className="mt-4"><span className={label}>CONTROL LEVEL:</span> Exceptionally high; recorded as one of the most stable surge agents in Dominion records.</p><p>Wears a kinetic limiter on his back to avoid shattering his own bones. During emotional surges, he leaves small craters in walls from abrupt stops.</p>
        <p><span className={label}>KNOWN TRIGGERS:</span> Lying, rulebreaking, injustice, feeling manipulated, and seeing someone evade what he would never allow himself to do.</p>
        <p><span className={label}>COMBAT STYLE:</span> Precision-focused shock combat. Disables and disrupts opponents before they know the fight has started.</p>
        <p className={`mt-4 ${label}`}>KNOWN SYNERGIES:</p><ul className={mutedList}><li>Commander Thal Voxx - often serves as his personal envoy.</li><li>Helios King - respects his power.</li><li>Nyx - does not trust her; has flagged her three times in incident reports. No action taken.</li></ul>
      </DossierSection>

      <DossierSection title="PSYCH PROFILE" color="titan-gold">
        <p><span className={label}>CORE PERSONALITY TRAITS:</span> Stoic, rigid, hyper-disciplined, self-sacrificing.</p><p><span className={label}>STRENGTHS:</span> Unflinching sense of duty, master-level hand-to-hand combat, trusted with high-level secrets.</p><p><span className={label}>WEAKNESSES:</span> Thinks any deviation is betrayal. Black-and-white morality makes nuance impossible. Lonely and unable to bond easily.</p><p><span className={label}>CORE BELIEF:</span> “The truth is absolute.”</p><p><span className={label}>PUBLIC BEHAVIOR:</span> First to report violations. Conducts surprise inspections. Says “Sir” even to fellow cadets and does not joke.</p><p><span className={label}>PRIVATE REALITY:</span> Sleeps with one eye open, has nightmares of being slow, and keeps his medals in a locked drawer out of fear of pride. Has read the AAN Code of Conduct cover to cover 46 times.</p>
      </DossierSection>

      <DossierSection title="FAMILY & ORIGIN" color="titan-gold">
        <p><span className={label}>FATHER:</span> Tarek Zehn - former AAN field marshal, presumed deceased in the Ash Uprisings.</p><p><span className={label}>MOTHER:</span> Unknown - deleted from records after her unauthorized mutation incident.</p><p className={`mt-4 ${label}`}>FAMILY DYNAMICS:</p><ul className={mutedList}><li>Raised in silence, taught that emotion is noise.</li><li>Believes legacy is earned, not inherited.</li></ul><p className={`mt-4 ${label}`}>NOTABLE HERITAGE SECRETS:</p><ul className={mutedList}><li>His father&apos;s body was never recovered.</li><li>Cyris has one redacted imprinting mark from early Apex testing that has never been explained.</li></ul>
      </DossierSection>

      <DossierSection title="HISTORY / PURPOSE" color="titan-gold">
        <p><span className={label}>SYSTEM ENTRANCE:</span> Entered the Academy at 9 after subduing a rogue teacher with a paperclip and kinetic burst. Broke the limb of his entrance examiner, apologized, and asked to retake the test.</p><p className={`mt-4 ${label}`}>EARLY POWER MANIFESTATION RECORD:</p><ul className={mutedList}><li>Used his ability to escape a detainment zone by running through a 9-foot steel wall.</li><li>Has the highest number of successful pursuit captures in cadet history - 92% recapture rate.</li></ul><p className={`mt-4 ${label}`}>PUBLIC ACHIEVEMENTS:</p><ul className={mutedList}><li>Serves as Student Enforcer across all three Echelon corridors.</li><li>Discovered a covert Pulse Duel arena beneath the food hall and arrested the top four fighters.</li><li>Built his own Judgment Circuit, where cadets navigate moral dilemmas under pressure. No one has passed it yet.</li></ul><p className={`mt-4 ${label}`}>CENSORED INCIDENTS:</p><ul className={mutedList}><li>Flagged Helios King for not reporting an internal AAN fracture. The case was buried.</li><li>Submitted two sealed reports on Nyx; both were denied by top council.</li><li>Witnessed a black-class Apex containment and kept it quiet, but it haunts him.</li></ul><p className={`mt-4 ${label}`}>WHY HE MATTERS TO TITAN&apos;S FUTURE:</p><p>Cyris is a purity weapon - the AAN&apos;s attempt to forge loyalty so perfect it could outlive them. But loyalty without context is fragile, and if he ever realizes the truth, he might turn violently.</p>
      </DossierSection>

      <DossierNote color="forge-magma">“Subject C. Zehn is compliant and incorruptible. Dangerous only if broken. Reinforce blind spots. Do NOT allow him prolonged exposure to Nyx.”</DossierNote>

      <DossierSection title="SECRETS & PREFERENCES" color="titan-gold">
        <p><span className={label}>ROMANTIC HISTORY:</span> None. Believes intimacy is a distraction. Once touched hands with a female cadet during training and filed an incident report on himself. Watched Nyx fix a reactor by hand and did not log it.</p><p><span className={label}>FEAR PROFILE:</span> That justice is a lie and he has already broken it. That his father did not die - he ran.</p><p><span className={label}>FOOD / STYLE PREFERENCES:</span> Nutrient blocks and bland hydration gel, called duty chow. Polishes his boots every night. Owns exactly one off-duty shirt: black, no logos.</p><p><span className={label}>COMBAT PREFERENCE:</span> Hyper-speed takedowns. No flair. Trains solo every morning at 0400 at maximum output.</p><p className={`mt-4 ${label}`}>FAVORITE CIVILIAN HAUNTS:</p><ul className={mutedList}><li>Stratos barracks rooftops - paces there when troubled.</li><li>The indoor AAN archive room - the smell of metal and paper calms him.</li><li>Helion Square Monument, where he occasionally sits alone and watches crowds.</li></ul><p className={`mt-5 ${label}`}>ONE SECRET NO ONE KNOWS:</p><FragmentLock fragmentKey="OBSIDIAN-OATH" reveal={<span>Cyris knows about the Obsidian Annex. He has not moved the report from Draft to Submit - and he does not know why.</span>} />
      </DossierSection>
    </div>
  )
}
