import { useMemo } from 'react'
import * as THREE from 'three'
import { latLngToVec3 } from './RegionMesh'

const DENSITY = { heliostrand: { count: 90, spread: 12, color: '#ffe9a0' }, skelter: { count: 55, spread: 14, color: '#ffb066' }, virelyn: { count: 45, spread: 16, color: '#b8e6ff' }, frostline: { count: 35, spread: 12, color: '#d6f4ff' }, miridan: { count: 30, spread: 14, color: '#c5ff9a' }, zephyros: { count: 40, spread: 12, color: '#ffe0b8' }, obscura: { count: 12, spread: 10, color: '#c8a6ff' } }
const SUN_DIRECTION = new THREE.Vector3(14, 6, 10).normalize()
const VERTEX = `attribute vec3 aColor; varying vec3 vColor; varying vec3 vNormal; void main() { vColor = aColor; vNormal = normalize((modelMatrix * vec4(position, 0.0)).xyz); vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * modelViewPosition; gl_PointSize = 5.5 * (280.0 / -modelViewPosition.z); }`
const FRAGMENT = `uniform vec3 uSunDir; varying vec3 vColor; varying vec3 vNormal; void main() { vec3 sunView = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz); float lit = max(0.0, dot(vNormal, sunView)); float night = 1.0 - smoothstep(0.0, 0.55, lit); if (night < 0.01) discard; gl_FragColor = vec4(vColor * (0.7 + night * 0.5), night * 0.8); }`
function seeded(index) { return ((index * 9301 + 49297) % 233280) / 233280 }

export default function CityLights({ regions, radius = 8 }) {
  const { positions, colors, count } = useMemo(() => { const positionValues = []; const colorValues = []; let pointIndex = 0; regions.forEach((region) => { const density = DENSITY[region.id]; if (!density) return; for (let index = 0; index < density.count; index += 1) { const jitter = 0.35 + seeded(pointIndex + index) * 0.65; const point = latLngToVec3(region.lat + (seeded(pointIndex + index * 2) - 0.5) * density.spread * jitter, region.lng + (seeded(pointIndex + index * 3) - 0.5) * density.spread * jitter, radius + 0.035); const color = new THREE.Color(density.color).multiplyScalar(0.55 + seeded(pointIndex + index * 5) * 0.45); positionValues.push(point.x, point.y, point.z); colorValues.push(color.r, color.g, color.b) } pointIndex += density.count }); return { positions: new Float32Array(positionValues), colors: new Float32Array(colorValues), count: positionValues.length / 3 } }, [regions, radius])
  if (!count) return null
  return <points><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /><bufferAttribute attach="attributes-aColor" args={[colors, 3]} /></bufferGeometry><shaderMaterial vertexShader={VERTEX} fragmentShader={FRAGMENT} uniforms={{ uSunDir: { value: SUN_DIRECTION.clone() } }} transparent depthWrite={false} blending={THREE.AdditiveBlending} /></points>
}
