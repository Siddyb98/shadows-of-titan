import { Html } from '@react-three/drei'
import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { STATUS_COLORS } from '../../data/titanMap'

const GEOMETRY_CACHE = new Map()
function geometryFor(shape, size = 2.2) {
  const key = `${shape}-${size}`
  if (GEOMETRY_CACHE.has(key)) return GEOMETRY_CACHE.get(key)
  let geometry
  if (shape === 'scar') geometry = new THREE.PlaneGeometry(size * 2.2, size * 0.5)
  else if (shape === 'basin') geometry = new THREE.CircleGeometry(size * 1.3, 8)
  else if (shape === 'crescent') geometry = new THREE.RingGeometry(size * 0.55, size * 1.1, 14, 1, 0, Math.PI * 1.5)
  else if (shape === 'oval') geometry = new THREE.CircleGeometry(size, 14)
  else if (shape === 'shelf') geometry = new THREE.PlaneGeometry(size * 1.7, size * 1.1)
  else if (shape === 'ring') geometry = new THREE.RingGeometry(size * 1.1, size * 1.4, 26)
  else geometry = new THREE.CircleGeometry(size, 6)
  GEOMETRY_CACHE.set(key, geometry)
  return geometry
}

export function latLngToVec3(lat, lng, radius) {
  const phi = THREE.MathUtils.degToRad(90 - lat)
  const theta = THREE.MathUtils.degToRad(lng + 180)
  return new THREE.Vector3(-radius * Math.sin(phi) * Math.cos(theta), radius * Math.cos(phi), radius * Math.sin(phi) * Math.sin(theta))
}

export default function RegionMesh({ region, onClick, isHiddenZone = false, radius = 8 }) {
  const groupRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  const color = STATUS_COLORS[region.status] ?? region.color ?? STATUS_COLORS.unindexed
  const geometry = useMemo(() => geometryFor(region.shape), [region.shape])
  useLayoutEffect(() => {
    if (!groupRef.current) return
    const position = latLngToVec3(region.lat ?? 0, region.lng ?? 0, radius + 0.06)
    groupRef.current.position.copy(position)
    groupRef.current.lookAt(position.clone().multiplyScalar(2))
  }, [region.lat, region.lng, radius])
  return <group ref={groupRef}>
    <mesh geometry={geometry} onClick={(event) => { event.stopPropagation(); onClick?.() }} onPointerOver={(event) => { event.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer' }} onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default' }}>
      <meshBasicMaterial color={color} transparent opacity={hovered ? 0.62 : 0.32} side={THREE.DoubleSide} depthWrite={false} />
    </mesh>
    <mesh geometry={geometry} scale={1.015}><meshBasicMaterial color={color} wireframe transparent opacity={0.45} depthWrite={false} /></mesh>
    <Html center distanceFactor={14} position={[0, 0, 0.15]}><button type="button" className="map-region-label" onClick={(event) => { event.stopPropagation(); onClick?.() }} style={{ color, textShadow: `0 0 8px ${color}` }}>{isHiddenZone ? '◆ ' : ''}{region.codename ?? region.name}</button></Html>
  </group>
}
