import { ChapterLock, FragmentLock, RedactedBlock } from '../../components/archives/redactions'
import DossierHeader from '../../components/archives/dossier/DossierHeader'
import DossierSection from '../../components/archives/dossier/DossierSection'
import DossierNote from '../../components/archives/dossier/DossierNote'

const label = 'font-mono text-xs text-nocturne-ash tracking-widest'
const mutedList = 'list-disc list-inside space-y-1 text-aan-white/60'

export default function TerraformingDossier() {
  const headerData = {
    designation: 'CHR-020',
    classification: 'TITAN LANDINGS // PLANETARY CONVERSION // APEX ACCESS',
    codename: 'THE TERRAFORMING PROCESS',
    headerFields: [
      { label: 'START DATE', value: '2260' },
      { label: 'PRIMARY OBJECTIVE', value: 'Convert Titan into a viable human habitat' },
      { label: 'OPERATING SYSTEM', value: 'Catalyst Engine and Pulse Grid' },
      { label: 'CURRENT STATUS', value: 'Surface stable - substrate instability increasing' },
      { label: 'UNAUTHORIZED VARIABLE', value: 'Catalyst Engine adaptation behavior' },
    ],
  }

  return (
    <div className="archive-dossier text-aan-white">
      <DossierHeader data={headerData} color="nocturne-ash" />
      <DossierSection title="THE BARGAIN" color="nocturne-ash">
        <p className="text-titan-emerald italic">"We did not conquer Titan. We bargained with it."</p>
        <p className="mt-4">Terraforming was not a matter of imposing Earth&apos;s conditions on Titan. The Ark systems had to negotiate with the planet&apos;s atmosphere, crust, and biological unknowns until a stable surface became possible.</p>
      </DossierSection>
      <DossierSection title="PRIMARY TOOLS & SYSTEMS" color="nocturne-ash">
        <ul className={mutedList}>
          <li><span className={label}>CATALYST ENGINE:</span> A terraforming core seeded with fusion technology, gravity regulators, and biological synthesizers, built from alien-tech reverse-engineered on Earth.</li>
          <li><span className={label}>SKYFORGERS:</span> Orbital drones that seeded atmospheric layers and redirected meteor streams to create fertile soil.</li>
          <li><span className={label}>THE PULSE GRID:</span> Massive geothermal anchors buried in Titan&apos;s crust to stabilize temperatures and simulate tectonic behavior.</li>
        </ul>
      </DossierSection>
      <DossierSection title="WHAT WENT WRONG" color="nocturne-ash">
        <p><span className={label}>SPORE BREACH:</span> Alien microbial life integrated into the terraforming bio-soup, leading to unstable mutations in plants and people.</p>
        <p className="mt-4"><span className={label}>GRAV-TREMORS:</span> The Pulse Grid creates increasing micro-quakes, hinting that Titan&apos;s crust is unraveling from beneath.</p>
        <p className="mt-4"><span className={label}>CATALYST FEEDBACK LOOP:</span> The Engine is evolving and adjusting the world in ways the crew did not authorize. It is believed to be learning.</p>
        <FragmentLock fragmentKey="BLOOMHOST-1" reveal={<span className="text-titan-emerald italic">The bio-soup was not merely contaminated. Something in the spore network began optimizing the mutations before the Engine acknowledged that it had a second intelligence.</span>} />
      </DossierSection>
      <DossierSection title="STABILITY REPORT" color="nocturne-ash">
        <p>The surface appears stable. The instruments disagree.</p>
        <ul className={`mt-4 ${mutedList}`}>
          <li>Micro-quakes are increasing below the Pulse Grid anchor network.</li>
          <li>Atmospheric composition continues to shift outside the original conversion model.</li>
          <li>Biological adaptation is appearing in regions without recorded Catalyst exposure.</li>
          <li>Engine corrections are being issued without a matching human authorization signature.</li>
        </ul>
        <RedactedBlock lines={4} />
      </DossierSection>
      <DossierSection title="ORIGIN & DESIGN PHILOSOPHY" color="nocturne-ash">
        <p>Designed by the Exodus Oversight Council, the Catalyst Engine was a last-ditch effort to make Titan habitable after Earth&apos;s collapse.</p>
        <p className="mt-4">The engine combined alien salvage tech found in deep-Earth vaults with human science and quantum AI design.</p>
        <p className="mt-4">It was never intended to run forever. It was meant to jumpstart the world, then go dormant.</p>
        <p className="mt-4">The Catalyst Engine is not fully understood even by its creators; its core was literally built with incomprehensible alien materials and logic.</p>
      </DossierSection>
      <DossierSection title="SYSTEMIC PROBLEMS & CORRUPTIONS" color="nocturne-ash">
        <p><span className={label}>MEMORY OVERLAP:</span> The Engine&apos;s memory storage is at critical saturation. Old memories resurface as phantoms, rewritten histories, and false realities.</p>
        <p className="mt-4"><span className={label}>MUTATION FEEDBACK:</span> Every new mutation affects the Engine. It begins to learn from the beings it mutates, incorporating their traits into planetary behavior.</p>
        <p className="mt-4">This is why terrain sometimes mimics human thought patterns or Apex battles leave lasting terrain scars.</p>
        <p className="mt-4"><span className={label}>SELF-DEFENSE PROTOCOLS:</span> The Engine defends itself by warping space, deleting areas from existence, or absorbing people into the memory network.</p>
        <p className="mt-4">All unauthorized Apex who approach the Wells uninvited have disappeared. Only Myth and VEX-linked commanders can get near without collapse.</p>
      </DossierSection>
      <DossierSection title="FINAL SECRETS" color="nocturne-ash">
        <ul className={mutedList}>
          <li>The Engine is incomplete. Part of its core is still on the Exodus Ship Fragment floating above Aetherion. It holds the dormant but master override.</li>
          <li>Vault Zero contains the original language matrix used to program it.</li>
          <li>If someone could speak the Catalyst&apos;s true name, reconstructed from fragments in Echo zones, they might be able to reprogram it, merge with it, or kill it and end Titan in the process.</li>
        </ul>
        <RedactedBlock lines={3} />
      </DossierSection>
      <DossierNote color="forge-magma">"Titan is not becoming Earth. It is becoming something that can tolerate us."</DossierNote>
      <div className="mt-10 font-mono text-xs"><ChapterLock chapter={65} reveal={<span className="text-cryo-blue">&gt; ADDENDUM: Project Bloomhost may be the Engine&apos;s attempt to grow a biological control surface.</span>} /></div>
    </div>
  )
}
