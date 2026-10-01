import MythDossier from './myth-001x'
import SolarisFistDossier from './solaris-fist'
import RotSaintDossier from './rot-saint'
import HeliosKingDossier from './helios-king'
import WhiteWinterDossier from './white-winter'
import AbsoluteZeroDossier from './absolute-zero'
import QuantumDriftDossier from './quantum-drift'
import GreatCollapseDossier from './great-collapse'
import WorldCouncilDossier from './world-council'
import FailedArksDossier from './failed-arks'
import ExodusProjectDossier from './exodus-project'
import DaedalusPrimeDossier from './daedalus-prime'
import TerraformingDossier from './terraforming'
import FirstLandingsDossier from './first-landings'
import AanFoundingDossier from './aan-founding'
import VaultsDossier from './vaults'
import CatalystEventDossier from './catalyst-event'
import ClassSystemDossier from './class-system'
import CodexAscendantDossier from './codex-ascendant'
import HeliostrandCradleDossier from './heliostrand-cradle'
import SkelterReachDossier from './skelter-reach'
import VirelynExpanseDossier from './virelyn-expanse'
import FrostlineDivideDossier from './frostline-divide'
import MiridanHollowDossier from './miridan-hollow'
import ZephyrosEdgeDossier from './zephyros-edge'
import ObscuraNoctisDossier from './obscura-noctis'
import HelionPrimeDossier from './helion-prime'
import ForgedeepDossier from './forgedeep'
import StratosGateDossier from './stratos-gate'
import CryotherneDossier from './cryotherne'
import BlackrootVergeDossier from './blackroot-verge'
import AetherionDossier from './aetherion'
import NocturneSpireDossier from './nocturne-spire'
import {
  GlowleafDossier,
  MycelBloomDossier,
  DendranticDossier,
  SynthwheatDossier,
  SolarBlossomsDossier,
  ThornshadeIvyDossier,
  CryoglassLilyDossier,
  ShiverFernsDossier,
  AshvineDossier,
  LurefruitDossier,
} from './flora-dossiers'
import {
  WraithsDossier,
  GlacierMawsDossier,
  AshdogsDossier,
  ScreamLocustsDossier,
  HollowbacksDossier,
  CrestedPhasursDossier,
  MossbeastsDossier,
  GravwyrmsDossier,
  BurrowgutsDossier,
  GlowbucksDossier,
  DreamherdsDossier,
  SilverlashEelsDossier,
  MistGloamersDossier,
  CrystalwolvesDossier,
  TremorbacksDossier,
  SpindlemawsDossier,
  VoxxSirensDossier,
  SilentCurrentDossier,
  EchofoamDossier,
} from './wildlife-dossiers'
import {
  CatalystEngineDossier,
  FusionHeartDossier,
  NeuralMatrixDossier,
  GravitonWebDossier,
  BiosynthLoomDossier,
  PulseGridDossier,
  EchoCircuitDossier,
} from './catalyst-dossiers'
import MutationIndexDossier from './mutation-index'
import { AanPublicDossier, AanShadowDossier, AanAgendaDossier, AanSecretsDossier, HeliosVaultDossier } from './aan-dossiers'
import ThornmotherDossier from './thornmother'
import LoworbitDossier from './loworbit'
import SonicRendDossier from './sonic-rend'
import SliplawDossier from './sliplaw'
import NightshadeDossier from './nightshade'
import HalflightDossier from './halflight'
import BreakingPointDossier from './breaking-point'
import BlightheartDossier from './blightheart'
import EkrosDossier from './ekros'
import RazorhawkDossier from './razorhawk'
import { PrismbreakerDossier, EmberbrandDossier, GaleDossier, BloomthornDossier } from './echelon-dossiers'
import {
  SlangSystemDossier,
  CursesDossier,
  ApexFashionDossier,
  EchelonFashionDossier,
  DregFashionDossier,
  CurrencyDossier,
  TransportationDossier,
  LeisureDossier,
  IntimacyDossier,
  ApexPracticesDossier,
  DregPracticesDossier,
  ReproductionDossier,
  AttractionDossier,
  TracebondDossier,
  AscensionDoctrineDossier,
  PropagandaDossier,
  AshbreaksDossier,
  PulseDuelsDossier,
  DrugsDossier,
} from './culture-dossiers'

// Map archive file IDs to their reconstructed dossier components.
export const DOSSIERS = {
  'myth-001x': MythDossier,
  'solaris-fist': SolarisFistDossier,
  'rot-saint': RotSaintDossier,
  'helios-king': HeliosKingDossier,
  'radiant-spear': HeliosKingDossier,
  'white-winter': WhiteWinterDossier,
  'absolute-zero': AbsoluteZeroDossier,
  'quantum-drift': QuantumDriftDossier,
  'great-collapse': GreatCollapseDossier,
  'world-council': WorldCouncilDossier,
  'failed-arks': FailedArksDossier,
  'exodus-project': ExodusProjectDossier,
  'daedalus-prime': DaedalusPrimeDossier,
  terraforming: TerraformingDossier,
  'first-landings': FirstLandingsDossier,
  'aan-founding': AanFoundingDossier,
  vaults: VaultsDossier,
  'catalyst-event': CatalystEventDossier,
  'class-system': ClassSystemDossier,
  'codex-ascendant': CodexAscendantDossier,
  'heliostrand-cradle': HeliostrandCradleDossier,
  'skelter-reach': SkelterReachDossier,
  'virelyn-expanse': VirelynExpanseDossier,
  'frostline-divide': FrostlineDivideDossier,
  'miridan-hollow': MiridanHollowDossier,
  'zephyros-edge': ZephyrosEdgeDossier,
  'obscura-noctis': ObscuraNoctisDossier,
  'helion-prime': HelionPrimeDossier,
  forgedeep: ForgedeepDossier,
  'stratos-gate': StratosGateDossier,
  cryotherne: CryotherneDossier,
  'blackroot-verge': BlackrootVergeDossier,
  aetherion: AetherionDossier,
  'nocturne-spire': NocturneSpireDossier,
  glowleaf: GlowleafDossier,
  'mycel-bloom': MycelBloomDossier,
  dendrantic: DendranticDossier,
  synthwheat: SynthwheatDossier,
  'solar-blossoms': SolarBlossomsDossier,
  'thornshade-ivy': ThornshadeIvyDossier,
  'cryoglass-lily': CryoglassLilyDossier,
  'shiver-ferns': ShiverFernsDossier,
  ashvine: AshvineDossier,
  lurefruit: LurefruitDossier,
  wraithlurks: WraithsDossier,
  'glacier-maws': GlacierMawsDossier,
  ashdogs: AshdogsDossier,
  'scream-locusts': ScreamLocustsDossier,
  hollowbacks: HollowbacksDossier,
  'crested-phasurs': CrestedPhasursDossier,
  mossbeasts: MossbeastsDossier,
  gravwyrms: GravwyrmsDossier,
  burrowguts: BurrowgutsDossier,
  glowbucks: GlowbucksDossier,
  dreamherds: DreamherdsDossier,
  'silverlash-eels': SilverlashEelsDossier,
  'mist-gloamers': MistGloamersDossier,
  crystalwolves: CrystalwolvesDossier,
  tremorbacks: TremorbacksDossier,
  spindlemaws: SpindlemawsDossier,
  'voxx-sirens': VoxxSirensDossier,
  'silent-current': SilentCurrentDossier,
  echofoam: EchofoamDossier,
  'catalyst-engine': CatalystEngineDossier,
  'fusion-heart': FusionHeartDossier,
  'neural-matrix': NeuralMatrixDossier,
  'graviton-web': GravitonWebDossier,
  'biosynth-loom': BiosynthLoomDossier,
  'pulse-grid': PulseGridDossier,
  'echo-circuit': EchoCircuitDossier,
  'mutation-index': MutationIndexDossier,
  'aan-public': AanPublicDossier,
  'aan-shadow': AanShadowDossier,
  'aan-agenda': AanAgendaDossier,
  'aan-secrets': AanSecretsDossier,
  'helios-vault': HeliosVaultDossier,
  thornmother: ThornmotherDossier,
  loworbit: LoworbitDossier,
  'sonic-rend': SonicRendDossier,
  sliplaw: SliplawDossier,
  nightshade: NightshadeDossier,
  halflight: HalflightDossier,
  'breaking-point': BreakingPointDossier,
  blightheart: BlightheartDossier,
  ekros: EkrosDossier,
  razorhawk: RazorhawkDossier,
  prismbreaker: PrismbreakerDossier,
  emberbrand: EmberbrandDossier,
  gale: GaleDossier,
  bloomthorn: BloomthornDossier,
  'slang-system': SlangSystemDossier,
  curses: CursesDossier,
  'apex-fashion': ApexFashionDossier,
  'echelon-fashion': EchelonFashionDossier,
  'dreg-fashion': DregFashionDossier,
  currency: CurrencyDossier,
  transportation: TransportationDossier,
  leisure: LeisureDossier,
  attitudes: IntimacyDossier,
  'apex-practices': ApexPracticesDossier,
  'dreg-practices': DregPracticesDossier,
  reproduction: ReproductionDossier,
  attraction: AttractionDossier,
  tracebond: TracebondDossier,
  'ascension-doctrine': AscensionDoctrineDossier,
  propaganda: PropagandaDossier,
  ashbreaks: AshbreaksDossier,
  'pulse-duels': PulseDuelsDossier,
  drugs: DrugsDossier,
  // 'bloomthorn': NephrisDossier,
}
