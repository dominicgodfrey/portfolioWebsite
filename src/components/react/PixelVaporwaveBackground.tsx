/**
 * PixelVaporwaveBackground — a chunky-pixelated, warped concentric "digital
 * vaporwave" field: hot-magenta topographic contours bending into liquid swirls
 * over a near-black ground, sampled through a low-res pixel grid so the edges
 * read as lo-fi/dithered rather than smooth.
 *
 * A single full-screen fragment shader (the geometry is a clip-space quad whose
 * vertices map straight to the NDC corners, so it always fills the viewport
 * regardless of camera). The "rings" come from concentric contours of a
 * domain-warped coordinate field; the pixelation snaps screen coordinates to a
 * fixed cell before sampling.
 *
 * Guards mirror the rest of the site: DPR capped at 1.5, the frameloop pauses
 * when the tab is hidden, and prefers-reduced-motion renders one static frame
 * (no animation) instead of an animated one.
 */

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

// Map the quad's clip-space corners directly — no camera/projection involved.
const vertexShader = /* glsl */ `
  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform float uPixel;      // pixel-cell size, in device pixels

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

  void main() {
    // Lo-fi pixel grid: snap fragment coords to a fixed cell so every contour
    // edge lands on a chunky pixel boundary (the "digital" texture).
    vec2 frag = (floor(gl_FragCoord.xy / uPixel) + 0.5) * uPixel;
    // Aspect-correct, centered coordinates (unit height).
    vec2 uv = (frag - 0.5 * uResolution) / uResolution.y;

    float t = uTime * 0.12;

    // Domain warp — shove the field around with two noise layers so the
    // concentric contours bend into liquid swirls instead of clean circles.
    vec2 q = uv * 1.6;
    vec2 warp = vec2(
      noise(q + vec2(0.0, t)),
      noise(q + vec2(5.2, -t))
    );
    vec2 w = uv + (warp - 0.5) * 1.3;
    // A second, finer swirl for the smaller eddies near the seams.
    w += 0.22 * vec2(sin(w.y * 3.4 + t * 2.0), cos(w.x * 3.4 - t * 2.0));

    // Concentric contours of the warped field → the stripey topographic loops.
    // High frequency packs the rings tight (the fingerprint/thumbprint density).
    float r = length(w) + 0.30 * noise(w * 2.2 + t);
    float rings = sin(r * 46.0 - t * 4.0);

    // Two-tone threshold, biased so magenta reads as bright contour lines on a
    // mostly-black ground rather than 50/50 bands. Tight AA keeps edges blocky.
    float m = smoothstep(-0.55, -0.05, rings);

    // Near-black ground, vivid magenta stripes, hot-pink highlight on each crest.
    vec3 black   = vec3(0.045, 0.020, 0.050);
    vec3 magenta = vec3(0.760, 0.055, 0.560);
    vec3 hot     = vec3(0.980, 0.330, 0.820);
    vec3 col = mix(black, magenta, m);
    float crest = smoothstep(0.78, 1.0, rings);
    col = mix(col, hot, crest * 0.65);

    // Faint per-cell brightness jitter — sells the dithered, low-bit feel.
    col *= 0.92 + 0.08 * hash(frag);

    gl_FragColor = vec4(col, 1.0);
  }
`;

function Field({ animate }: { animate: boolean }) {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const gl = useThree((s) => s.gl);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uPixel: { value: 9 },
    }),
    [],
  );

  // Keep resolution in sync (handles resize / DPR) and advance the clock.
  useFrame((state) => {
    const mat = matRef.current;
    if (!mat) return;
    const dpr = gl.getPixelRatio();
    mat.uniforms.uResolution.value.set(
      state.size.width * dpr,
      state.size.height * dpr,
    );
    if (animate) mat.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function PixelVaporwaveBackground() {
  const [reduced, setReduced] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);

    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);

    // r3f sizes its canvas from an initial container measurement that can come
    // back as the 300×150 default when this island hydrates on idle (a layout/
    // measure race under the fixed-position wrapper). A resize event after
    // hydration makes r3f re-measure the now-settled container so the canvas
    // fills the viewport; a few staggered nudges defeat the race reliably.
    const nudge = () => window.dispatchEvent(new Event("resize"));
    const timers = [0, 120, 360].map((d) => window.setTimeout(nudge, d));

    return () => {
      timers.forEach(clearTimeout);
      mq.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  // Reduced motion → render exactly one static frame (no animation loop).
  const frameloop = reduced ? "demand" : paused ? "never" : "always";

  return (
    <div
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}
    >
      <Canvas
        frameloop={frameloop}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: false, powerPreference: "low-power" }}
        style={{ width: "100%", height: "100%" }}
      >
        <Field animate={!reduced} />
      </Canvas>
    </div>
  );
}
