import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

const styles = { destroyed: ['#ff3d5a', 'X'], breached: ['#ff3d5a', '!'], contaminated: ['#ff9f3d', '☣'], sealed: ['#4fd1ff', 'LOCK'], unmapped: ['#a06cff', '?'] }

export default function Marker({ marker }) {
  const ref = useRef(null)
  const [color, icon] = styles[marker.type] ?? styles.breached
  useFrame(({ clock }) => { if (ref.current) ref.current.scale.setScalar(['breached', 'destroyed'].includes(marker.type) ? 1 + Math.sin(clock.elapsedTime * 4) * 0.18 : 1) })
  return <group position={marker.position}>
    <mesh><cylinderGeometry args={[0.015, 0.015, 0.4, 6]} /><meshBasicMaterial color={color} transparent opacity={0.7} /></mesh>
    <group ref={ref} position={[0, 0.4, 0]}><mesh rotation={[-Math.PI / 2, 0, 0]}><ringGeometry args={[0.3, 0.42, 32]} /><meshBasicMaterial color={color} transparent opacity={0.85} side={THREE.DoubleSide} /></mesh><mesh><sphereGeometry args={[0.14, 16, 16]} /><meshBasicMaterial color={color} /></mesh></group>
    <Html center distanceFactor={16} position={[0, 0.85, 0]}><div className="map-marker-label" style={{ color, borderColor: color, textShadow: `0 0 8px ${color}` }}>{icon} {marker.label}</div></Html>
  </group>
}
