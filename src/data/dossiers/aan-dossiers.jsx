import { FragmentLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-cryo-blue tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'
const locked = (fragmentKey, reveal) => <FragmentLock fragmentKey={fragmentKey} reveal={<span className="text-titan-emerald italic">{reveal}</span>} />

function AANDossier({ designation, classification, codename, children, note = 'Aegis Ascension Nexus // CONTROLLED RECORD' }) {
  return <div className="archive-dossier text-aan-white"><DossierHeader data={{ designation, classification, codename, headerFields: [] }} color="cryo-blue" />{children}<DossierNote color="forge-magma">"{note}"</DossierNote></div>
}

export function AanPublicDossier() {
  return <AANDossier designation="COD-AAN-01" classification="CODEX // AAN PUBLIC STRUCTURE // CONTROLLED RECORD" codename="PUBLIC STRUCTURE">
    <DossierSection title="THE DOMINION ACADEMY" color="cryo-blue">
      <p>A towering, multi-city institution that identifies, trains, and classifies mutated individuals based on ability, behavior, and potential. Though it claims to promote equality and strength, its true function is societal filtering.</p>
      <p className={`mt-4 ${label}`}>DIVISIONS:</p>
      <ul className={mutedList}>
        <li><span className={label}>APEX CORPS:</span> Reserved for genetically verified Apex Class members. Trains future military commanders, engine keyholders, and diplomatic enforcers. All graduates are guaranteed elite status and planetary influence.</li>
        <li><span className={label}>FOUNDATION TRACK:</span> Targets Echelon and Luminal Class citizens. Offers education in medicine, navigation, and tech interfacing. A controlled path for support-class lifers.</li>
        <li><span className={label}>REFORM WING:</span> A controversial redemption program for Dregs and Nulls. In practice, it is exploitative, using risky enhancement procedures, field tests, and psychological manipulation. Many candidates never graduate or survive.</li>
        <li><span className={label}>PSYCHORESONANT TESTING HALL:</span> A rarely discussed building where psychic, anomalous, or unclassifiable students are isolated for research. Secretly linked to the Helios Vault.</li>
      </ul>
    </DossierSection>
    <DossierSection title="TECH ENFORCEMENT BUREAU" color="cryo-blue">
      <p>The militarized law enforcement wing of the AAN. Acts both as enforcer and censor, tracking illegal technology, rogue mutations, and unauthorized research.</p>
      <ul className={`mt-4 ${mutedList}`}>
        <li><span className={label}>ELITE SQUADS:</span> Often Apex-only strike teams.</li>
        <li><span className={label}>SURVEILLANCE CORPS:</span> Monitors Dreg sectors, Pulse Grid zones, and known resistance routes.</li>
        <li><span className={label}>BLACK OPERATIONS DIVISION:</span> Carries out memory erasures, silent removals, and containment of instabilities near Catalyst Wells.</li>
      </ul>
    </DossierSection>
  </AANDossier>
}

export function AanShadowDossier() {
  return <AANDossier designation="COD-AAN-02" classification="CODEX // AAN SHADOW STRUCTURE // COUNCIL LOCK" codename="SHADOW STRUCTURE">
    <DossierSection title="THE ASCENSION COUNCIL" color="cryo-blue">
      <p>A hidden ruling body composed of descendants from the original Exodus Project architects. They are no longer elected or named publicly, and some are rumored to be in cryostasis or resonance-looped consciousness.</p>
      <ul className={`mt-4 ${mutedList}`}>
        <li>Manipulate the public face of AAN through algorithmic simulations.</li>
        <li>Obsessed with preserving Apex purity and maintaining control over the Catalyst Engine through gene-locked oversight.</li>
      </ul>
      <p className={`mt-4 ${label}`}>COUNCIL IDENTITIES:</p>{locked('LEGACY-KEYS', 'The Council legacy keys are scattered pieces of the Engine\'s neural lock, each once held by a council member.')}
      <RedactedBlock lines={5} />
    </DossierSection>
    <DossierSection title="THE HELIOS VAULT" color="cryo-blue">
      <p>Located beneath Helion Prime, but networked through secret sub-vaults beneath Cryothorne, Aetherion, and Nocturne Spire.</p>
      <p className={`mt-4 ${label}`}>PRIMARY FUNCTIONS:</p>
      <ul className={mutedList}><li>Experimentation on mutation manipulation.</li><li>Containment of failed or overpowered Apex candidates.</li><li>Decryption of the Catalyst Engine&apos;s language architecture.</li></ul>
      <p className="mt-4">The Vault is alive and its internal layout changes weekly via Pulse Grid shifts. It is rumored to be in partial communication with the Catalyst Engine but nothing has ever been proven.</p>
    </DossierSection>
  </AANDossier>
}

export function AanAgendaDossier() {
  return <AANDossier designation="COD-AAN-03" classification="CODEX // AAN STATED AGENDA // PROPAGANDA RECORD" codename="STATED AGENDA">
    <DossierSection title="PUBLIC GOALS // PROPAGATED BY AAN" color="cryo-blue">
      <ul className={mutedList}><li><span className={label}>EMPOWERMENT THROUGH UNITY:</span> All classes can thrive through hard work and discipline.</li><li><span className={label}>SAFETY THROUGH STRENGTH:</span> Apex-led society protects Titan from collapse.</li><li><span className={label}>GENETIC ADVANCEMENT:</span> Controlled mutation study will ensure long-term survival on Titan.</li></ul>
    </DossierSection>
    <DossierSection title="HIDDEN AGENDAS" color="cryo-blue">
      <p className={label}>MUTATION CONTROL AND EUGENICS</p><p>The AAN actively suppresses, rewrites, or destroys mutation patterns that fall outside Apex-designated tolerances. New mutations are often harvested for study, not cultivated.</p>
      <p className={`mt-4 ${label}`}>CATALYST ENGINE DOMINATION</p><p>The Council believes full control of the Engine would allow them to reshape reality, but they are missing key elements to control it, including Myth.</p>
      <p className={`mt-4 ${label}`}>SOCIETAL STAGNATION BY DESIGN</p><p>Dregs and Luminals are intentionally stunted through tech restrictions, social barriers, and failed education pipelines. Breakouts are quietly eliminated or co-opted.</p>
      <p className={`mt-4 ${label}`}>FORBIDDEN TECH HOARDING</p><p>The TEB confiscates illegal tech not to destroy it, but to repurpose it for Apex-only military advantage.</p>
      <p className="mt-5">{locked('CATALYST-DEPENDENCY', 'Titan cannot survive without the Catalyst Engine running. If the Engine is damaged or deactivated, the planet will collapse.')}</p>
    </DossierSection>
  </AANDossier>
}

export function AanSecretsDossier() {
  return <AANDossier designation="COD-AAN-04" classification="CODEX // CLASSIFIED DOCTRINE // VOID-SEALED" codename="CLASSIFIED DOCTRINE">
    <DossierSection title="THE MUTATION PARADOX" color="cryo-blue">
      <p>All Apex mutations are genetically unstable due to early bio-forging techniques. Continuous corrections are administered via Helios Vault procedures, often without the knowledge of the recipient.</p>
      <p className="mt-4">Some Apex must return for medical tune-ups every decade to maintain control, still unaware of tampering.</p>
      <p className="mt-5">{locked('AAN-PARADOX', 'The mutation corrections are not treatment. They are continuous control procedures administered without the recipient\'s knowledge.')}</p>
    </DossierSection>
    <DossierSection title="THE CATALYST DEPENDENCY" color="cryo-blue">
      <p>{locked('CATALYST-DEPENDENCY', 'Titan cannot survive without the Catalyst Engine running. If the Engine is damaged or deactivated, the planet will collapse.')}</p>
      <RedactedBlock lines={5} />
    </DossierSection>
    <DossierSection title="THE APEX SUPREMACY PROTOCOL" color="cryo-blue">
      <p>An official but unspoken directive:</p>
      <p className="mt-4">No non-Apex shall exceed Nova-tier classification without being flagged for Vault transfer or field disposal.</p>
      <p className="mt-4">False graduation ceremonies, memory wipes, and staged deaths are used to conceal this policy.</p>
      <p className="mt-5">{locked('SUPREMACY-PROTOCOL', 'No non-Apex shall exceed Nova-tier classification without being flagged for Vault transfer or field disposal.')}</p>
    </DossierSection>
    <DossierSection title="ADD-ON LORE HOOKS" color="cryo-blue">
      <ul className={mutedList}><li>False Rank Promotions: The AAN creates fake Apex titles for Echelon volunteers, placing them in suicide missions to encourage class loyalty.</li><li>Legacy Keys: Each council member once held a piece of the Engine&apos;s neural lock. Now scattered, these keys could either reset or rewrite Titan&apos;s future.</li></ul>
      <p className="mt-5">{locked('LEGACY-KEYS', 'If the Legacy Keys are collected, they could either reset or rewrite Titan\'s future.')}</p>
    </DossierSection>
  </AANDossier>
}

export function HeliosVaultDossier() {
  return <AANDossier designation="COD-AAN-05" classification="CODEX // HELIOS VAULT // BLACK OPERATIONS LOCK" codename="HELIOS VAULT">
    <DossierSection title="PRIMARY FUNCTIONS" color="cryo-blue"><ul className={mutedList}><li>Experimentation on mutation manipulation.</li><li>Containment of failed or overpowered Apex candidates.</li><li>Decryption of the Catalyst Engine&apos;s language architecture.</li></ul></DossierSection>
    <DossierSection title="NETWORKED SUB-VAULTS" color="cryo-blue"><p>Located beneath Helion Prime, but networked through secret sub-vaults beneath Cryothorne, Aetherion, and Nocturne Spire.</p><p className="mt-4">The Vault is alive and its internal layout changes weekly via Pulse Grid shifts. It is rumored to be in partial communication with the Catalyst Engine but nothing has ever been proven.</p><RedactedBlock lines={6} /></DossierSection>
    <DossierSection title="ACCESS CONDITION" color="cryo-blue"><p>{locked('LEGACY-KEYS', 'The Helios Vault is connected to the scattered neural lock keys once held by the Ascension Council.')}</p><p className="mt-4">{locked('SUPREMACY-PROTOCOL', 'Apex Supremacy Protocol records are routed through Vault containment authority.')}</p></DossierSection>
  </AANDossier>
}
