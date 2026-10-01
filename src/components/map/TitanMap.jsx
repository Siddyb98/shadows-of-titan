import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { useEffect, useMemo, useRef, useState } from 'react'
import { HIDDEN_ZONES, MARKERS, REGIONS } from '../../data/titanMap'
import Planet from './Planet'
import RegionMesh, { latLngToVec3 } from './RegionMesh'
import Marker from './Marker'
import LocationPanel from './LocationPanel'
import CityLights from './CityLights'
import Clouds from './Clouds'
import TitanTelemetry from './TitanTelemetry'

const PLANET_RADIUS = 8

function RotatingWorld({ children, reducedMotion }) {
  const ref = useRef(null)
  useFrame((_, delta) => { if (ref.current && !reducedMotion) ref.current.rotation.y += delta * 0.03 })
  return <group rotation={[0, 0, -0.28]}><group ref={ref}>{children}</group></group>
}

export default function TitanMap({ progress, fragments, signal }) {
  const [selected, setSelected] = useState(null)
  const [signalRevealed, setSignalRevealed] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const controlsRef = useRef(null)
  useEffect(() => { const media = window.matchMedia('(prefers-reduced-motion: reduce)'); const update = () => setReducedMotion(media.matches); update(); media.addEventListener?.('change', update); return () => media.removeEventListener?.('change', update) }, [])
  const visibleRegions = useMemo(() => REGIONS.filter((region) => (!region.hidden || fragments.includes('DARKFOLD')) && progress.chapter >= region.chapterRequired && progress.clearance >= region.clearanceRequired), [fragments, progress])
  const visibleZones = useMemo(() => HIDDEN_ZONES.filter((zone) => fragments.includes(zone.fragmentCode)), [fragments])
  const visibleMarkers = useMemo(() => MARKERS.filter((marker) => progress.chapter >= marker.chapterRequired), [progress])
  return <section className="titan-map">
    <Canvas camera={{ position: [0, 6, 22], fov: 45, near: 0.1, far: 200 }} gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }} dpr={1} onPointerMissed={() => setSelected(null)}>
      <color attach="background" args={['#02040a']} />
      <ambientLight intensity={0.16} /><directionalLight position={[14, 6, 10]} intensity={1.25} color="#ffe8c2" /><directionalLight position={[-10, -3, -8]} intensity={0.15} color="#4f6fff" />
      <Stars radius={140} depth={80} count={1400} factor={3} fade speed={0.15} />
      <RotatingWorld reducedMotion={reducedMotion}><Planet radius={PLANET_RADIUS} /><Clouds radius={PLANET_RADIUS} /><CityLights regions={[...visibleRegions, ...visibleZones]} radius={PLANET_RADIUS} />{visibleRegions.map((region) => <RegionMesh key={region.id} region={region} radius={PLANET_RADIUS} onClick={() => setSelected(region)} />)}{visibleZones.map((zone) => <RegionMesh key={zone.id} region={{ ...zone, codename: zone.id.toUpperCase() }} radius={PLANET_RADIUS} isHiddenZone onClick={() => setSelected(zone)} />)}{visibleMarkers.map((marker) => <Marker key={marker.id} marker={{ ...marker, position: latLngToVec3(marker.lat, marker.lng, PLANET_RADIUS + 0.4).toArray() }} />)}</RotatingWorld>
      <OrbitControls ref={controlsRef} enablePan={false} minDistance={11} maxDistance={30} enableDamping dampingFactor={0.08} autoRotate={!reducedMotion} autoRotateSpeed={0.18} onStart={() => { if (controlsRef.current) controlsRef.current.autoRotate = false }} />
    </Canvas>
    <TitanTelemetry />
    {signal && <aside className={`map-signal ${signalRevealed ? 'is-revealed' : ''}`}><p>// T.E.B. SIGNAL DETECTED</p><strong>{signal.sector}</strong>{signalRevealed ? <span>{signal.riddle}</span> : <button type="button" onClick={() => setSignalRevealed(true)}>INTERCEPT PING</button>}</aside>}
    {selected && <LocationPanel region={selected} onClose={() => setSelected(null)} />}
  </section>
}
