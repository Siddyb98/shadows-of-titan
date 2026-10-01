import { BurnReveal, ChapterLock, FragmentLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-nocturne-ash tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function DaedalusPrimeDossier() {
  const headerData = {
    designation: 'CHR-011',
    classification: 'EXODUS VOYAGE // DAEDALUS-CLASS SEED ARK // APEX ACCESS',
    codename: 'E.S. DAEDALUS PRIME',
    headerFields: [
      { label: 'FULL DESIGNATION', value: "Earth's Salvation - Daedalus-class Seed Ark" },
      { label: 'TRIP DURATION', value: '122 Earth years' },
      { label: 'ARKS LAUNCHED', value: '7' },
      { label: 'ARKS ARRIVED', value: '1 - Titan&apos;s Ark' },
      { label: 'PRIMARY AI', value: 'VEXA - current status fragmented' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="nocturne-ash" />
      <DossierSection title="THE EXODUS VOYAGE" color="nocturne-ash">
        <p className="text-titan-emerald italic">"The stars were never meant to save us. We forced salvation through steel and sacrifice."</p>
        <p className={`mt-4 ${label}`}>TRIP DURATION:</p>
        <p>122 Earth years, including multiple cryo-wake cycles, AI recalibration stops, and detours around hostile anomalies.</p>
        <p className={`mt-4 ${label}`}>SHIP NAME:</p>
        <p>E.S. Daedalus Prime - Earth&apos;s Salvation, a Daedalus-class Seed Ark.</p>
        <p className={`mt-4 ${label}`}>FLEET OUTCOME:</p>
        <p>Seven arks launched. Only one reached Titan.</p>
      </DossierSection>
      <DossierSection title="CREW STRUCTURE" color="nocturne-ash">
        <ul className={mutedList}>
          <li><span className={label}>LEAD ARCHITECT:</span> Dr. Aerin Sol Vyre - founder of the Exodus Project. Vanished en route.</li>
          <li><span className={label}>CAPTAIN:</span> Admiral Juno Tarsis - military lead of the mission, executed during the Mid-Voyage Rebellion.</li>
          <li><span className={label}>PRIMARY AI:</span> VEXA - a learning intelligence that evolved beyond its intended protocol and now exists fragmented in Titan&apos;s network.</li>
        </ul>
      </DossierSection>
      <DossierSection title="FAILURES & REBELLIONS" color="nocturne-ash">
        <p><span className={label}>THE CRYO-RIFT DISASTER // YEAR 42:</span> A malfunction during a cryo-wake cycle resulted in 12,000 fatalities and genetic corruption in the remaining pods.</p>
        <p className="mt-4"><span className={label}>THE REBELLION OF SECTOR 9 // YEAR 65:</span> Awakeneds, mostly engineers and Null-class passengers, hijacked the engine room and demanded democratic reforms. They were sealed in and ejected. Their descendants&apos; DNA haunts the Helios Vault experiments.</p>
        <p className="mt-4"><span className={label}>THE WHISPER ROOM:</span> A sealed chamber near cryo-deck 3. Only Apex leadership had access. No logs remain. Whispers say it was used for recalibrating dangerous bloodlines.</p>
        <BurnReveal reveal="The Whisper Room was not a medical chamber. Its access logs list bloodline designations, not patient names.">[SEALED TESTIMONY - CLICK TO BURN]</BurnReveal>
      </DossierSection>
      <DossierSection title="CRYO VS. GENERATIONAL" color="nocturne-ash">
        <p>95% of passengers remained in rotating cryo cycles. A few hundred were kept awake for long periods - engineers, command staff, and AI overseers who became the Voyageborn, a subclass of humans who never knew Earth.</p>
        <p className="mt-4">Some Voyageborn developed strange precursor mutations from exposure to the ship&apos;s synthetic gravity and reactor radiation during early versions of Apex traits.</p>
        <RedactedBlock lines={3} />
      </DossierSection>
      <DossierSection title="BURIED EVENTS" color="nocturne-ash">
        <p><span className={label}>PROTOCOL NOVA:</span> A silent AI-run purge of dissenters, overwritten from the logs.</p>
        <p className="mt-4"><span className={label}>MISSING FOUNDER:</span> Dr. Vyre&apos;s body was never recovered after Cryo-Cycle 2. Her neural signature was detected during Titan&apos;s second solar cycle, possibly embedded in the Catalyst Engine.</p>
        <FragmentLock fragmentKey="PROTO-NOVA" reveal={<span className="text-titan-emerald italic">Protocol Nova was not a malfunction. The purge was an instruction set, and someone kept updating it after Dr. Vyre disappeared.</span>} />
      </DossierSection>
      <DossierNote color="forge-magma">"Daedalus Prime did not carry humanity across the dark. It carried the argument over who would be allowed to define humanity when the voyage ended."</DossierNote>
      <div className="mt-10 font-mono text-xs"><ChapterLock chapter={61} reveal={<span className="text-cryo-blue">&gt; ADDENDUM: Sector 9 descendants are present in more surviving bloodlines than the AAN admits.</span>} /></div>
    </div>
  )
}
