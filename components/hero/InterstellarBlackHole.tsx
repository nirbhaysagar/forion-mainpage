'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const bhVert = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`

const bhFrag = `
  precision highp float;

  uniform float uTime;
  uniform float uZoom;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uQuality;

  varying vec2 vUv;

  #define PI 3.14159265359

  const float BH_RADIUS = 1.6;
  const float DISK_INNER = 3.2;
  const float DISK_OUTER = 14.8;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 5; i++) {
        v += a * noise(p);
        p = rot * p * 2.1 + vec2(10.0);
        a *= 0.48;
    }
    return v;
  }

  vec3 starField(vec3 dir) {
    vec3 col = vec3(0.0);
    vec2 st = vec2(atan(dir.z, dir.x), asin(clamp(dir.y, -1.0, 1.0)));
    
    // 1. Ultra-wispy Galactic Dust
    float band = exp(-abs(st.y + 0.1) * 3.8); 
    float n = fbm(st * 2.2 + vec2(uTime * 0.002));
    float nebula = smoothstep(0.35, 0.85, n) * band;
    col += vec3(0.04, 0.03, 0.08) * nebula;

    // 2. Ultra-Realistic Stars (Sharp points + spikes)
    for (float i = 1.0; i <= 4.0; i++) {
      float scale = 65.0 * i + 35.0;
      vec2 grid = floor(st * scale);
      float h = hash(grid + i * 137.0);
      
      // Much sparser distribution for realism
      float threshold = 0.993 - band * 0.005;
      
      if (h > threshold) {
        vec2 p = fract(st * scale) - 0.5;
        float d = length(p);
        
        // Single-pixel-like sharp points
        float size = 0.008 + h * 0.025;
        float star = smoothstep(size, 0.0, d);
        
        // Diffraction spikes and halo for the brightest stars
        if (h > 0.998) {
            star += exp(-d * 25.0) * 0.5; // Subtle halo
            float spike = max(0.0, 1.0 - abs(p.x * p.y) * 4500.0) * exp(-d * 18.0);
            star += spike * 0.35;
        }

        vec3 starCol = mix(vec3(0.75, 0.85, 1.0), vec3(1.0, 0.95, 0.8), hash(grid + 44.0));
        float twinkle = sin(uTime * (1.8 + h * 5.0) + grid.x * 25.0) * 0.5 + 0.5;
        col += starCol * star * (0.25 + 0.75 * twinkle) * 1.4 / i;
      }
    }
    
    return col;
  }

  vec3 diskColor(float r, float angle, float time) {
    float t = clamp((r - DISK_INNER) / (DISK_OUTER - DISK_INNER), 0.0, 1.0);
    
    vec3 hot    = vec3(1.0, 0.96, 0.88) * 1.85;
    vec3 warm   = vec3(1.0, 0.72, 0.25);
    vec3 orange = vec3(0.85, 0.25, 0.04);
    vec3 dark   = vec3(0.04, 0.01, 0.005);
    
    vec3 col = mix(hot, warm, smoothstep(0.0, 0.25, t));
    col = mix(col, orange, smoothstep(0.25, 0.65, t));
    col = mix(col, dark, smoothstep(0.65, 1.0, t));

    float swirl = time * 0.75 + log(r) * 5.5;
    float n1 = fbm(vec2(r * 0.65, angle * 3.0 - swirl));
    float n2 = fbm(vec2(r * 1.3, angle * 4.2 - swirl * 1.5));
    
    float structures = pow(n1 * n2 * 1.65, 2.3);
    structures += exp(-abs(r - DISK_INNER - 0.2) * 9.0) * n1 * 0.45;
    
    float brightness = structures * pow(1.0 - t, 1.6) * 4.8;
    
    return col * brightness;
  }

  void main() {
    vec2 uv = (vUv - 0.5) * 2.0;
    float aspect = uResolution.x / uResolution.y;
    uv.x *= aspect;

    vec2 mouseShift = uMouse * 0.09;
    float zoom = clamp(uZoom, 0.0, 1.0);
    
    float camDist = mix(45.0, 15.0, zoom);
    float camY = mix(16.0, 4.5, zoom);
    vec3 ro = vec3(mouseShift.x * 2.8, camY + mouseShift.y, -camDist);
    vec3 lookAt = vec3(0.0, -0.2, 0.0);

    vec3 fwd = normalize(lookAt - ro);
    vec3 rgt = normalize(cross(vec3(0.0, 1.0, 0.0), fwd));
    vec3 up = cross(fwd, rgt);
    vec3 rd = normalize(fwd * 2.0 + rgt * uv.x + up * uv.y);

    vec3 pos = ro;
    vec3 vel = rd;
    vec3 color = vec3(0.0);
    float totalAlpha = 0.0;
    bool absorbed = false;
    int maxSteps = int(uQuality);

    for (int i = 0; i < 115; i++) {
      if (i >= maxSteps) break;
      float dist = length(pos);
      if (dist < BH_RADIUS) { absorbed = true; break; }
      if (dist > 65.0) break;
      if (totalAlpha > 0.995) break;

      float h = max(0.02, min(0.35, (dist - BH_RADIUS) * 0.11));
      vec3 crossPV = cross(pos, vel);
      float h2 = dot(crossPV, crossPV);
      vec3 accel = -1.5 * h2 * pos / (dist * dist * dist * dist * dist); 

      vel += accel * h;
      vec3 prevPos = pos;
      pos += vel * h;

      if (prevPos.y * pos.y < 0.0) {
        float frac = abs(prevPos.y) / (abs(prevPos.y) + abs(pos.y));
        vec3 hitPos = mix(prevPos, pos, frac);
        float r = length(hitPos.xz);

        if (r > DISK_INNER * 0.65 && r < DISK_OUTER) {
          float angle = atan(hitPos.z, hitPos.x);
          vec3 orbVelDir = normalize(vec3(-hitPos.z, 0.0, hitPos.x));
          float orbSpeed = sqrt(BH_RADIUS / (2.0 * r)) * 0.92;
          float doppler = 1.0 + dot(normalize(vel), orbVelDir) * orbSpeed * 5.2;
          doppler = clamp(doppler, 0.12, 4.5);

          vec3 dc = diskColor(r, angle, uTime) * pow(doppler, 3.2);
          float innerFade = smoothstep(DISK_INNER * 0.65, DISK_INNER * 1.15, r);
          float outerFade = 1.0 - smoothstep(DISK_OUTER * 0.85, DISK_OUTER, r);
          float opacity = innerFade * outerFade * 0.88;

          color += dc * opacity * (1.0 - totalAlpha);
          totalAlpha += opacity * (1.0 - totalAlpha);
        }
      }
    }

    if (!absorbed && totalAlpha < 1.0) {
      color += starField(normalize(vel)) * (1.0 - totalAlpha);
    }

    color = color / (color + vec3(1.0));
    color = pow(color, vec3(0.93));

    float centerDist = length(uv);
    color += vec3(1.0, 0.45, 0.15) * exp(-centerDist * 1.6) * 0.06 * zoom;

    gl_FragColor = vec4(color, 1.0);
  }
`

function BlackHoleMesh({ onReady }: { onReady: () => void }) {
  const matRef = useRef<THREE.ShaderMaterial>(null)
  const { size } = useThree()
  const reduced = useReducedMotion()
  const mouseTarget = useRef(new THREE.Vector2(0, 0))
  const isMobile = size.width < 768

  const uniforms = useRef({
    uTime: { value: 0 },
    uZoom: { value: 0 },
    uResolution: { value: new THREE.Vector2(size.width, size.height) },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uQuality: { value: isMobile ? 45.0 : 75.0 }, // Aggressive step reduction
  })

  useEffect(() => {
    if (reduced) {
      uniforms.current.uZoom.value = 1
      onReady()
      return
    }

    gsap.to(uniforms.current.uZoom, {
      value: 1,
      duration: 1.1,
      ease: 'power2.out',
      onComplete: onReady,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    uniforms.current.uResolution.value.set(size.width, size.height)
  }, [size])

  useFrame(({ clock, pointer }) => {
    if (!matRef.current) return
    matRef.current.uniforms.uTime.value = clock.getElapsedTime()

    mouseTarget.current.set(pointer.x, pointer.y)
    matRef.current.uniforms.uMouse.value.lerp(mouseTarget.current, 0.04)
  })

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={bhVert}
        fragmentShader={bhFrag}
        uniforms={uniforms.current}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  )
}

interface InterstellarBlackHoleProps {
  onReady?: () => void
}

export default function InterstellarBlackHole({ onReady = () => {} }: InterstellarBlackHoleProps) {
  // PERFORMANCE FIX: Lock DPR to 1 to halve fragment shader workload on high-res displays
  return (
    <Canvas
      camera={{ position: [0, 0, 1], fov: 90 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ 
        antialias: false, 
        alpha: false,
        powerPreference: 'high-performance'
      }}
      dpr={1} 
    >
      <BlackHoleMesh onReady={onReady} />
    </Canvas>
  )
}
