"use client";
import React, {
  Suspense,
  useMemo,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Html,
  useGLTF,
  Bounds,
  Float,
} from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

// ---- Types ----
type Slide = {
  id: string;
  label: string;
  subtitle?: string;
  modelSrc: string; // public/ path to .glb
  fit?: "center" | "contain" | "cover"; // bound-fit preference
  initialRotation?: [number, number, number];
};

// ---- Model wrapper ----
function Model({
  src,
  initialRotation = [0, 0, 0],
}: {
  src: string;
  initialRotation?: [number, number, number];
}) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(src, true);
  useEffect(() => {
    if (group.current) {
      group.current.rotation.set(...initialRotation);
    }
  }, [initialRotation]);
  return <primitive ref={group} object={scene} />;
}

// ---- Slide 3D Scene ----
function SlideScene({ slide }: { slide: Slide }) {
  const transparentBackground: [THREE.ColorRepresentation] = ["transparent"];
  return (
    <Canvas
      camera={{ position: [0.8, 0.8, 1.6], fov: 45 }}
      dpr={[1, 2]}
      className="rounded-2xl"
    >
      <color attach="background" args={transparentBackground} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 2, 2]} intensity={1.1} />
      <Suspense
        fallback={
          <Html center>
            <div className="text-xs tracking-wide">loading model…</div>
          </Html>
        }
      >
        <Bounds fit clip observe margin={1.15}>
          <Float floatIntensity={0.7} speed={1.2}>
            <Model src={slide.modelSrc} />
          </Float>
        </Bounds>
        <Environment preset="city" />
      </Suspense>
      <OrbitControls
        enablePan={false}
        makeDefault
        minDistance={1}
        maxDistance={6}
      />
    </Canvas>
  );
}

// ---- Main component ----
export default function InterestsShowcase() {
  const slides: Slide[] = useMemo(
    () => [
      {
        id: "racing",
        label: "Racing simulators",
        subtitle:
          "Pure, focused freedom. When you're behind the wheel, the world narrows down to one thing: the race. The noise fades, problems vanish, and all that matters is speed, precision, and instinct. It’s an escape—no deadlines, no drama, just adrenaline and asphalt.",
        modelSrc:
          "/threejsModels/otherInterestsShowcase/porsche_911_gt2_rs_with_angle_eyes.glb",
        initialRotation: [0, Math.PI * 0.15, 0],
      },
      {
        id: "aviation",
        label: "Aviation & flight sims",
        subtitle: "Up there, above the clouds, the world below becomes small and silent.",
        modelSrc: "/threejsModels/otherInterestsShowcase/F4U.glb",
        initialRotation: [0.1, -Math.PI * 0.2, 0],
      },
      {
        id: "milsims",
        label: "Milsims",
        subtitle: "They’re not just games—they’re full-immersion escapes into a world where strategy, teamwork, and split-second decisions mean everything. In the milsim world, you’re not just playing—you’re deployed, operating with purpose in a sandbox of realism.",
        modelSrc: "/threejsModels/otherInterestsShowcase/PMC.glb",
        initialRotation: [0, Math.PI * 0.3, 0],
      },
      {
        id: "chess",
        label: "Chess",
        subtitle: "Blunder? I prefer ‘creative’",
        modelSrc: "/threejsModels/otherInterestsShowcase/chess.glb",
        initialRotation: [0, Math.PI * 0.25, 0],
      },
      {
        id: "guitar",
        label: "Guitar",
        subtitle: "Emotion turned into sound. I`ve been playing since I was 16. Like painting with sound, where precision meets passion, and silence becomes art.",
        modelSrc: "/threejsModels/otherInterestsShowcase/guitar.glb",
        initialRotation: [0, -Math.PI * 0.25, 0],
      },
      {
        id: "Neuroscience",
        label: "Neuroscience",
        subtitle: "Before I switched to Computer Science, I was considering a career in Neuroscience. It’s the ultimate deep-dive—an escape into the brain’s labyrinth, where every neuron is a mystery and every discovery rewrites what we thought we knew about being human.",
        modelSrc: "/threejsModels/otherInterestsShowcase/brain.glb",
        initialRotation: [0, Math.PI * 0.25, 0],
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const active = slides[index];

  const to = useCallback(
    (newIndex: number) =>
      setIndex(((newIndex % slides.length) + slides.length) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") to(index + 1);
      if (e.key === "ArrowLeft") to(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, to]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Top bar with bullets + counter */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => to(i)}
              className={`h-2 w-6 border border-foreground ${
                i === index ? "bg-foreground" : "bg-transparent"
              }`}
            />
          ))}
        </div>
        <div className="text-xs tabular-nums tracking-wider">
          {index + 1}/{slides.length}
        </div>
      </div>

      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left: copy */}
        <div className="order-2 md:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-2"
            >
              <h2 className="text-2xl md:text-3xl leading-tight">
                {active.label}
              </h2>
              {active.subtitle && (
                <p className="text-sm opacity-80 max-w-prose">
                  {active.subtitle}
                </p>
              )}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => to(index - 1)}
                  className="border px-3 py-2 text-xs uppercase tracking-wide hover:opacity-80"
                >
                  Prev
                </button>
                <button
                  onClick={() => to(index + 1)}
                  className="border px-3 py-2 text-xs uppercase tracking-wide hover:opacity-80"
                >
                  Next
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: 3D area */}
        <div className="aspect-[4/3] w-full order-1 md:order-2 border">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + "-canvas"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <SlideScene slide={active} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Keyboard hint */}
      <div className="mt-3 text-[10px] opacity-70">
        Tip: use ← / → to navigate
      </div>
    </div>
  );
}

// =============================================
// pages/about/page.tsx (drop-in replacement snippet)
// Replace only the "My other interests" section with the component
// =============================================

export function InterestsSection() {
  return (
    <section id="thirdAboutSection" className="aboutSectionWrappers">
      <div className="w-full">
        <h1 className="text-3xl md:text-4xl mb-6">My other interests</h1>
        <InterestsShowcase />
      </div>
    </section>
  );
}

// Usage in your page component:
// import InterestsShowcase, { InterestsSection } from "@/components/InterestsShowcase";
// ...
// <main>
//   ... first + second sections ...
//   <InterestsSection />
// </main>

// =============================================
// Minimal CSS additions (optional): place in aboutMePage.css or a module
// =============================================
/*
.interests-card { border: 1px solid currentColor; padding: 1rem; }
*/
