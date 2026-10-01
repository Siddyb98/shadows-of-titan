import { useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const VERTEX = `varying vec3 vWorldPos; varying vec3 vNormal; void main() { vec4 worldPosition = modelMatrix * vec4(position, 1.0); vWorldPos = worldPosition.xyz; vNormal = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * worldPosition; }`
const FRAGMENT = `uniform float uTime; uniform vec3 uSunDir; varying vec3 vWorldPos; varying vec3 vNormal; float hash(vec3 p) { p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3)); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); } float noise(vec3 x) { vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y), mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z); } float fbm(vec3 p) { return 0.55 * noise(p) + 0.3 * noise(p * 2.1) + 0.15 * noise(p * 4.3); } void main() { vec3 surface = normalize(vWorldPos); float cloud = smoothstep(0.55, 0.9, fbm(surface * 3.2 + vec3(uTime * 0.02, 0.0, uTime * 0.015))); float day = smoothstep(0.0, 0.6, max(0.0, dot(normalize(vNormal), normalize(uSunDir)))); vec3 viewDirection = normalize(cameraPosition - vWorldPos); float edge = smoothstep(0.0, 0.25, 1.0 - abs(dot(viewDirection, normalize(vNormal)))); float alpha = cloud * day * edge * 0.38; if (alpha < 0.005) discard; gl_FragColor = vec4(vec3(0.85, 0.95, 1.0), alpha); }`

export default function Clouds({ radius = 8 }) {
  const material = useMemo(() => new THREE.ShaderMaterial({ vertexShader: VERTEX, fragmentShader: FRAGMENT, uniforms: { uTime: { value: 0 }, uSunDir: { value: new THREE.Vector3(14, 6, 10).normalize() } }, transparent: true, depthWrite: false }), [])
  useFrame((_, delta) => { material.uniforms.uTime.value += delta })
  return <mesh scale={1.06}><sphereGeometry args={[radius, 48, 48]} /><primitive object={material} attach="material" /></mesh>
}
