import { useMemo } from 'react'
import * as THREE from 'three'

const ATMOSPHERE_VERTEX = `varying vec3 vNormal; varying vec3 vWorldPosition; void main() { vec4 worldPos = modelMatrix * vec4(position, 1.0); vWorldPosition = worldPos.xyz; vNormal = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * worldPos; }`
const ATMOSPHERE_FRAGMENT = `uniform vec3 uColor; uniform float uIntensity; varying vec3 vNormal; varying vec3 vWorldPosition; void main() { vec3 viewDir = normalize(cameraPosition - vWorldPosition); float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 3.2); gl_FragColor = vec4(uColor * fresnel * uIntensity, fresnel * 0.85); }`

export default function Planet({ radius = 8 }) {
  const atmosphereMaterial = useMemo(() => new THREE.ShaderMaterial({ vertexShader: ATMOSPHERE_VERTEX, fragmentShader: ATMOSPHERE_FRAGMENT, uniforms: { uColor: { value: new THREE.Color('#3ddc97') }, uIntensity: { value: 1.1 } }, transparent: true, side: THREE.BackSide, blending: THREE.AdditiveBlending, depthWrite: false }), [])
  return <group>
    <mesh><sphereGeometry args={[radius, 64, 64]} /><meshStandardMaterial color="#040a0d" emissive="#08201c" emissiveIntensity={0.22} roughness={0.95} metalness={0.25} /></mesh>
    <mesh scale={1.16}><sphereGeometry args={[radius, 48, 48]} /><primitive object={atmosphereMaterial} attach="material" /></mesh>
    <mesh scale={1.45}><sphereGeometry args={[radius, 48, 48]} /><meshBasicMaterial color="#3ddc97" transparent opacity={0.025} side={THREE.BackSide} blending={THREE.AdditiveBlending} depthWrite={false} /></mesh>
  </group>
}
