/**
 * GridBackground — an animated topographic wireframe floor that recedes toward
 * the horizon. A real 3D height-field plane (displaced in the vertex shader)
 * viewed in perspective, so the grid rises and falls like rolling terrain while
 * marching back to a vanishing point. Pearlescent palette; lines fade into the
 * page's gradient at the horizon.
 *
 * Guards: DPR capped at 1.5, frameloop pauses when the tab is hidden, and
 * prefers-reduced-motion renders nothing (the body's CSS gradient is the
 * static fallback).
 */

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  uniform float uTime;
  varying vec3 vPos;
  varying float vHeight;
  varying float vDepth;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  // Rolling topography: broad smooth swells + a slower-moving noise layer, all
  // drifting gently toward the viewer so the hills rise and fall over time.
  float terrain(vec2 p, float t) {
    float h = 0.0;
    h += sin(p.x * 0.24 + t * 0.5) * 0.5;
    h += cos(p.y * 0.21 - t * 0.4) * 0.5;
    h += (noise(p * 0.17 + vec2(0.0, t * 0.16)) - 0.5) * 2.2;
    h += (noise(p * 0.46 - vec2(0.0, t * 0.10)) - 0.5) * 0.8;
    return h;
  }

  void main() {
    vec3 pos = position;              // plane already lies in XZ, y ~ 0
    float h = terrain(pos.xz, uTime);
    pos.y += h;
    vPos = pos;
    vHeight = h;
    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec3 vPos;
  varying float vHeight;
  varying float vDepth;

  void main() {
    // Anti-aliased grid with an explicit ~1.6px line width. The width floor is
    // what stops thin near-lines from slipping between pixel samples and
    // flickering out — every line keeps a solid, consistently visible core at
    // any distance or grazing angle.
    vec2 g = vPos.xz;
    vec2 fw = max(fwidth(g), vec2(1e-4));
    vec2 distPx = abs(fract(g - 0.5) - 0.5) / fw; // distance to nearest line, in px
    float lw = 1.6;
    vec2 lines = 1.0 - smoothstep(lw - 0.6, lw + 0.6, distPx);
    float line = max(lines.x, lines.y);

    // Final dissolve into the page gradient at the skyline (no hard plane edge).
    float farFade = 1.0 - smoothstep(34.0, 80.0, vDepth);
    // Gentle opacity falloff with distance for a sense of depth — colour is
    // unchanged, only the alpha eases off as lines recede.
    float depthFade = mix(1.0, 0.6, clamp(vDepth / 55.0, 0.0, 1.0));

    // Warm tint keyed to height: crimson red in the valleys → eggplant purple
    // on the peaks. Sits 75% of the way from the vibrant scheme toward the deep
    // one — dark and moody but not too dark.
    float hgt = clamp(vHeight * 0.5 + 0.5, 0.0, 1.0);
    vec3 crimson = vec3(0.52, 0.058, 0.153);   // crimson red
    vec3 eggplant = vec3(0.325, 0.118, 0.455); // eggplant purple
    vec3 tint = mix(crimson, eggplant, smoothstep(0.0, 1.0, hgt));
    vec3 baseDark = vec3(0.375, 0.30, 0.385);
    vec3 lineCol = mix(baseDark, tint, 0.76);

    float a = line * farFade * depthFade * 0.92;
    gl_FragColor = vec4(lineCol, a);
  }
`;

function Terrain() {
  const matRef = useRef<THREE.ShaderMaterial>(null);

  // Plane laid flat into the XZ ground plane, with enough segments for smooth hills.
  const geometry = useMemo(() => {
    const g = new THREE.PlaneGeometry(120, 100, 120, 140);
    g.rotateX(-Math.PI / 2);
    return g;
  }, []);

  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  useFrame((state) => {
    if (matRef.current) matRef.current.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh geometry={geometry} position={[0, 0, -35]}>
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function GridBackground() {
  const [reduced, setReduced] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);

    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      mq.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  // Reduced motion → static CSS gradient fallback (render nothing).
  if (reduced) return null;

  return (
    <div
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}
    >
      <Canvas
        frameloop={paused ? "never" : "always"}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        camera={{ position: [0, 3.2, 6], fov: 62 }}
        onCreated={({ camera }) => camera.lookAt(0, 0.2, -28)}
        style={{ width: "100%", height: "100%" }}
      >
        <Terrain />
      </Canvas>
    </div>
  );
}
