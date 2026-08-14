import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { tsParticles } from "@tsparticles/engine";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export function ParticlesBackground() {
  const [ready, setReady] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let mounted = true;
    loadSlim(tsParticles).then(() => {
      if (mounted) setReady(true);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: reducedMotion ? 30 : 60,
        particles: {
          number: {
            value: reducedMotion ? 25 : 55,
            density: { enable: true, width: 900, height: 900 },
          },
          color: { value: ["#00D4FF", "#6366F1", "#8B5CF6"] },
          links: {
            enable: true,
            color: "#00D4FF",
            distance: 140,
            opacity: reducedMotion ? 0.08 : 0.14,
            width: 0.8,
          },
          move: {
            enable: !reducedMotion,
            speed: 0.35,
            direction: "none",
            random: true,
            outModes: { default: "out" },
          },
          opacity: { value: { min: 0.15, max: 0.45 } },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 2.2 } },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
          },
        },
        detectRetina: true,
      }}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
