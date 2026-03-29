'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const starFragShader = `
uniform float uTime;
uniform vec2 uResolution;

// Hash function for pseudo-random noise
float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

// 2D Rotation matrix
mat2 rot(float a) {
    float s = sin(a), c = cos(a);
    return mat2(c, -s, s, c);
}

// Generates a grid of stars with precise gaussian falloff and twinkling
vec3 starLayer(vec2 uv, float scale, vec3 colorMap, float speed, float starSize) {
    vec2 pos = uv * scale;
    vec2 id = floor(pos);
    pos = fract(pos) - 0.5;

    float r = hash21(id); // deterministic random value per cell

    // Star position offset within cell
    vec2 starPos = vec2(hash21(id + 13.0), hash21(id + 71.0)) - 0.5;
    
    // Temporal twinkling effect
    float twinkle = sin(uTime * speed + r * 100.0) * 0.5 + 0.5;
    twinkle *= pow(twinkle, 3.0); // Non-linear curve for sharper twinkles

    // Distance to current fragment
    float d = length(pos - starPos);
    
    // Core glow (Gaussian-like)
    float glow = starSize / (d + 0.0001);
    glow *= smoothstep(0.5, 0.0, d); // cull outside cell

    // Probability threshold to make stars sparse
    float probability = step(0.9, r);
    // Add extra brightness for super rare stars
    float ultraBright = step(0.99, r) * 2.0;

    float brightness = (probability * 1.5 + ultraBright);

    return colorMap * glow * brightness * twinkle;
}

void main() {
    // Normalizing coordinates and fixing aspect ratio
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.y, uResolution.x);
    
    // Slow cinematic planetary rotation for the whole sky
    uv *= rot(uTime * 0.005);

    vec3 text = vec3(0.0);

    // Base: Pure deep space dark void (pitch black)
    vec2 bgUv = uv;
    text += vec3(0.0) * (1.0 - length(bgUv) * 0.5);

    // Layer 1: Extremely distant faint stars (dense but very dim)
    text += starLayer(uv, 120.0, vec3(0.08, 0.1, 0.15), 0.15, 0.0008);
    
    // Layer 2: Mid-distance stars (sparser, dim)
    text += starLayer(uv + vec2(100.0), 60.0, vec3(0.12, 0.1, 0.15), 0.3, 0.0012);
    
    // Layer 3: Close hero stars (toned down significantly)
    text += starLayer(uv + vec2(-50.0), 30.0, vec3(0.18, 0.2, 0.25), 0.6, 0.0020);

    gl_FragColor = vec4(text, 1.0);
}
`

const starVertShader = `
void main() {
    // Full screen quad rendering
    gl_Position = vec4(position, 1.0);
}
`

function SpacePlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
      materialRef.current.uniforms.uResolution.value.set(state.size.width, state.size.height)
    }
  })

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2() }
  }), [])

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        fragmentShader={starFragShader}
        vertexShader={starVertShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
        transparent={true}
      />
    </mesh>
  )
}

export default function GlobalBackground() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: false, powerPreference: 'high-performance' }}
      style={{ width: '100%', height: '100%', display: 'block' }}
    >
      <SpacePlane />
    </Canvas>
  )
}
