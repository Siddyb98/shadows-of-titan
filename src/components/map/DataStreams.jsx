import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { HIDDEN_ZONES, REGIONS } from '../../data/titanMap'
import { latLngToVec3 } from './RegionMesh'

const STREAM_PAIRS = [['heliostrand', 'virelyn'], ['heliostrand', 'skelter'], ['heliostrand', 'miridan'], ['heliostrand', 'frostline'], ['heliostrand', 'zephyros'], ['virelyn', 'zephyros'], ['skelter', 'miridan'], ['virelyn', 'obscura'], ['zephyros', 'obscura']]

export default function DataStreams({ radius = 8, visibleRegionIds }) {
  const streams = useMemo(() => {
    const regions = new Map([...REGIONS, ...HIDDEN_ZONES].map((region) => [region.id, region]))
    return STREAM_PAIRS.filter(([start, end]) => visibleRegionIds.has(start) && visibleRegionIds.has(end)).map(([startId, endId]) => {
      const start = regions.get(startId)
      const end = regions.get(endId)
      const startPoint = latLngToVec3(start.lat, start.lng, radius + 0.08)
      const endPoint = latLngToVec3(end.lat, end.lng, radius + 0.08)
      const midpoint = startPoint.clone().add(endPoint).multiplyScalar(0.5)
      midpoint.normalize().multiplyScalar(radius + 1.4 + startPoint.distanceTo(endPoint) * 0.18)
      return new THREE.CatmullRomCurve3([startPoint, midpoint, endPoint])
    })
  }, [radius, visibleRegionIds])
  const lineGeometry = useMemo(() => {
    const positions = []
    streams.forEach((stream) => { const points = stream.getPoints(48); for (let index = 0; index < points.length - 1; index += 1) positions.push(points[index].x, points[index].y, points[index].z, points[index + 1].x, points[index + 1].y, points[index + 1].z) })
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    return geometry
  }, [streams])
  const particlePositions = useMemo(() => new Float32Array(streams.length * 9), [streams])
  const particleAttribute = useRef(null)
  useFrame(({ clock }) => { if (!particleAttribute.current) return; let index = 0; streams.forEach((stream) => [0, .33, .66].forEach((offset) => { const point = stream.getPoint((clock.elapsedTime * .11 + offset) % 1); particlePositions[index * 3] = point.x; particlePositions[index * 3 + 1] = point.y; particlePositions[index * 3 + 2] = point.z; index += 1 })); particleAttribute.current.needsUpdate = true })
  if (!streams.length) return null
  return <group><lineSegments geometry={lineGeometry}><lineBasicMaterial color="#3ddc97" transparent opacity={0.12} depthWrite={false} /></lineSegments><points><bufferGeometry><bufferAttribute ref={particleAttribute} attach="attributes-position" args={[particlePositions, 3]} /></bufferGeometry><pointsMaterial color="#8affd2" size={0.1} sizeAttenuation transparent opacity={0.8} depthWrite={false} /></points></group>
}
