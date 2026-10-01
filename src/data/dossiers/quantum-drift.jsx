import { HoverReveal, BurnReveal, FragmentLock, ChapterLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-titan-emerald tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function QuantumDriftDossier() {
  const headerData = {
    designation: 'PER-033K',
    classification: 'DIVERGENT-ELEVATION CLASS // LUMINAL-PLUS // WATCHLIST',
    codename: 'QUANTUM DRIFT',
    headerFields: [
      { label: 'LEGAL NAME', value: 'Kael Riven Drayk' },
      { label: 'KNOWN ALIASES', value: 'Kael Shift, Lowburn, "The Null Who Wouldn\'t Die"' },
      { label: 'MUTATION TIER', value: 'Luminal-Plus - Mutagenic Splice via latent anomaly + tech merge' },
      { label: 'ENERGY TYPE', value: 'Quantum Adaptation - Cellular-level adaptation to physical, environmental, and energy stressors' },
      { label: 'CLASS DESIGNATION', value: 'Elevated Null -> Luminal -> Echelon Cadre (Apex-pending observation)' },
      { label: 'BIRTH REGION', value: 'Lower Skelter Reach - Seismic Echo Zone near reactor sprawl' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="titan-emerald" />

      <DossierSection title="PHYSICAL PROFILE" color="titan-emerald">
        <ul className="list-none space-y-1">
          <li><span className="text-aan-white/40 font-mono text-xs">HEIGHT:</span> 6'0"</li>
          <li><span className="text-aan-white/40 font-mono text-xs">WEIGHT:</span> 185 lbs</li>
          <li><span className="text-aan-white/40 font-mono text-xs">BODY TYPE:</span> Lean-muscled, wiry strength</li>
          <li><span className="text-aan-white/40 font-mono text-xs">HAIR:</span> Black, loosely tousled, undercut. Faint burn lines behind the ears from early tech rigging.</li>
          <li><span className="text-aan-white/40 font-mono text-xs">EYES:</span> Earth-toned brown with bronze veins that shimmer when adapting mid-battle</li>
          <li><span className="text-aan-white/40 font-mono text-xs">SKIN:</span> Golden-olive - hybrid Titan features. Usually slightly dusty from vents and scrapyards.</li>
        </ul>
        <p className={`mt-4 ${label}`}>NOTABLE FEATURES:</p>
        <ul className={mutedList}>
          <li>Faint molecular tattoos on his shoulders - old hacking symbols that glow when his body shifts</li>
          <li>Left index finger is entirely synthetic but seamlessly fused. He never explains how.</li>
          <li>Always carrying a healing scratch, bruise, or scorch. Shows them off like badges.</li>
        </ul>
        <p className={`mt-4 ${label}`}>RESONANCE SIGNATURE:</p>
        <p>Erratic at first, then stabilizes - like he "syncs" with a space. Feels like standing near a machine that&apos;s learning your rhythm.</p>
      </DossierSection>

      <DossierSection title="MUTATION / ENERGY DETAILS" color="titan-emerald">
        <p><span className={label}>PRIMARY ABILITY:</span> <span className="text-titan-emerald">Quantum Adaptation</span> - His body is reactive and predictive. When faced with damage, pressure, or unfamiliar energy, his cells shift preemptively to survive - and eventually, optimize. Can develop temperature resistance, reflex enhancements, oxygen uptake changes, even neural re-mapping. Long-term exposure makes him better than the original model and he stays that way. He has to survive the first hit to learn how to survive the second.</p>
        <p className={`mt-4 ${label}`}>SECONDARY MANIFESTATIONS:</p>
        <ul className={mutedList}>
          <li>Mimics movement patterns or combat rhythms after minimal exposure</li>
          <li>Occasionally develops "surges" - temporary boosts from past adaptations that return under stress</li>
          <li>Tech merges do not reject him. His biology adapts to foreign code - a walking cyber-organic hybrid even without implants.</li>
        </ul>
        <p className="mt-4"><span className={label}>CONTROL LEVEL:</span> High - trained through failures and back-alley gauntlets. Loses coherence during full adaptation burns when his body changes faster than he can mentally keep up.</p>
        <p><span className={label}>KNOWN TRIGGERS:</span> Being underestimated. Seeing someone punished for breaking caste lines. Chaos - the bigger the disaster, the calmer he becomes.</p>
        <p><span className={label}>COMBAT STYLE:</span> Improvised brilliance. Uses the environment, opponent&apos;s tells, and street-taught physics. Unorthodox combos, fakeouts, and sudden flips in movement style.</p>
        <p className={`mt-4 ${label}`}>KNOWN SYNERGIES:</p>
        <ul className={mutedList}>
          <li>Taryn Faye - fought together since the Forge Dregs. Her sound guides his adaptation.</li>
          <li>Eira Solaris - his proximity allows him to survive her frost field longer than any known Apex.</li>
        </ul>
      </DossierSection>

      <DossierSection title="PSYCH PROFILE" color="titan-emerald">
        <p><span className={label}>CORE TRAITS:</span> Charismatic, wild-sweet, loyal to the bone, reckless but intentional.</p>
        <p><span className={label}>STRENGTHS:</span> Impossible to intimidate. Creative problem solver. Genuinely cares about people - even the broken ones.</p>
        <p><span className={label}>WEAKNESSES:</span> Gets in over his head. Trusts people too easily, especially if they&apos;re kind to the underclass. Craves validation from people in power even while mocking them.</p>
        <p><span className={label}>CORE BELIEF:</span> <HoverReveal reveal={'"Adaptation isn\'t survival - it\'s rebellion."'}>[REDACTED]</HoverReveal></p>
        <p><span className={label}>PUBLIC BEHAVIOR:</span> Big-laugh energy. Makes jokes during trials. Plays dumb, isn&apos;t. Often the first to volunteer. Loud about defending others.</p>
        <p><span className={label}>PRIVATE REALITY:</span> PTSD from almost dying during his first illegal upgrade. Keeps a map of "All The Places I Was Told I&apos;d Never Reach" - crosses one off every month.</p>
      </DossierSection>

      <DossierSection title="FAMILY & ORIGIN" color="titan-emerald">
        <p><span className={label}>GRANDMOTHER:</span> Kanti Drayk, black-market tech healer - deceased. Taught him to solder wires before he could read.</p>
        <p><span className={label}>PARENTS:</span> No known parents. Raised by the district.</p>
        <p className={`mt-3 ${label}`}>FAMILY DYNAMICS:</p>
        <p className="text-aan-white/60">One of the rare Dregs raised communally - everyone helped, no one owned him.</p>
        <p className={`mt-3 ${label}`}>NOTABLE HERITAGE SECRETS:</p>
        <ul className={mutedList}>
          <li>Mutation didn&apos;t register until after an illegal exposure to Catalyst gas during a reactor breach</li>
          <li>DNA analyzed once during a Forge riot - matched a disavowed Apex ancestor. File was erased within the hour.</li>
          <li>Some think his adaptation is the result of being the failed offspring of an Apex fugitive</li>
        </ul>
      </DossierSection>

      <DossierSection title="HISTORY / PURPOSE" color="titan-emerald">
        <p><span className={label}>SYSTEM ENTRANCE:</span> Snuck into a Pulse Duel tournament and beat three Luminals before getting caught. AAN noticed the way he adapted between rounds - brought him in "under surveillance."</p>
        <p className={`mt-3 ${label}`}>EARLY POWER MANIFESTATION RECORD:</p>
        <RedactedBlock lines={2} fragmentKey="ADAPT-STACK-7" reveal={["> Survived a radiation spike that melted a transport's roof. He stood up and walked out.", "> Built his first suppressor gauntlet from Forge scrap. It responded to his nervous system with zero error."]} />
        <p className={`mt-4 ${label}`}>PUBLIC ACHIEVEMENTS:</p>
        <ul className={mutedList}>
          <li>Repaired a collapsed bridge during a tremor surge using nothing but cable coils and Adaptive Lift implants</li>
          <li>Unlocked a forbidden module in his class sim and reprogrammed it to teach better tactics - instructors kept it</li>
          <li>Fought off an Apex candidate without killing them during a rogue test - passed both moral and technical protocols</li>
        </ul>
        <p className={`mt-4 ${label}`}>CENSORED INCIDENTS:</p>
        <ul className={mutedList}>
          <li>AAN has footage of him interacting with the Ashking AI. The AI offered to "sponsor" him. He declined.</li>
          <li>May have absorbed trace Catalyst field residue - permanently enhancing his power cycle</li>
          <li>Once entered Nocturne Spire territory and walked out laughing. Won&apos;t say what happened.</li>
        </ul>
        <RedactedBlock lines={3} />
        <p className={`mt-6 ${label}`}>WHY HE MATTERS TO TITAN&apos;S FUTURE:</p>
        <ul className={mutedList}>
          <li>He&apos;s the bridge. The evolution made flesh. The one who proves mutation isn&apos;t purity - it&apos;s growth.</li>
          <li>People love him. He&apos;s what the Apex fear: a folk hero who didn&apos;t need bloodlines to rise.</li>
        </ul>
      </DossierSection>

      <DossierSection title="SECRETS & PREFERENCES" color="titan-emerald">
        <p><span className={label}>ROMANTIC HISTORY:</span> <BurnReveal reveal="Has kissed more people than he'll admit. Once said 'I fall in love every week' - but never stays long. Keeps catching feelings for Apex girls he's 'not supposed to touch.' Stared at Nyx for five minutes without blinking once. Swears it was a dare.">[CLASSIFIED - CLICK TO BURN]</BurnReveal></p>
        <p><span className={label}>FEAR PROFILE:</span> That his adaptation will outgrow his soul. That he&apos;ll wake up one day and not feel anything. That someone will copy him, but do it better.</p>
        <p><span className={label}>FOOD/STYLE PREFERENCES:</span> Loves street food. Will sell parts of his gear for fried synth noodles. Modifies his boots weekly. Always has three snacks, two blades, and a backup AI chip on him.</p>
        <p><span className={label}>COMBAT PREFERENCE:</span> Trickster bruiser. Will fake a sprain then adapt to your counters. Grins mid-fight like it&apos;s a game. That smile fades when you push too hard. Once mimicked five fighting styles in one minute and named them as he used them.</p>
        <p className={`mt-4 ${label}`}>FAVORITE CIVILIAN HAUNTS:</p>
        <ul className={mutedList}>
          <li>Urban parkour zones - he freeruns during lava surges</li>
          <li>Pulse Duels - not to win. Just to watch, learn, and steal moves.</li>
          <li>Repair dens</li>
        </ul>
        <p className={`mt-4 ${label}`}>KNOWN TO VISIT (OFF-RECORD):</p>
        <p className="text-aan-white/60">A graffiti tunnel under Helion where every name he&apos;s beaten is etched in sparks.</p>
        <p className={`mt-6 ${label}`}>ONE SECRET NO ONE KNOWS:</p>
        <FragmentLock fragmentKey="ADAPT-STACK-7" reveal={<span className="text-titan-emerald italic">His body has stopped aging normally. Adaptations are stacking too fast. He thinks he might be evolving beyond the AAN&apos;s classification system - and he doesn&apos;t know if he wants that. Some nights he can feel his own cells deciding whether or not to keep him alive.</span>} />
        <div className="mt-3"><RedactedBlock lines={5} /></div>
      </DossierSection>

      <DossierNote color="forge-magma">"Kael Drayk is under constant field review. If his adaptation rate increases, suppression may become impossible. He is socially viral, tactically unpredictable, and ideologically infectious."</DossierNote>

      <div className="mt-10 font-mono text-xs">
        <ChapterLock chapter={58} reveal={<span className="text-cryo-blue">&gt; ADDENDUM [POST-TRIBUNAL]: Subject Drayk was not at the Tribunal Complex. Reliable reports place him in the Skelter Reach, moving east. Current location: UNKNOWN - status ACTIVE, elevated priority.</span>} />
      </div>
    </div>
  )
}
