import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FiDownload, FiArrowRight, FiMapPin, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ParticlesBackground } from "./ParticlesBackground";
import { PERSONAL, SOCIAL, STATS } from "@/lib/portfolio-data";

const ROLES = ["Java Full Stack Developer", "Spring Boot Engineer", "React Builder", "Problem Solver"];

function useTyping(words: string[], speed = 70, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = words[i % words.length];
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), pause);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((v) => v + 1);
        }
      }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}

export function Hero() {
  const typed = useTyping(ROLES);
  const ref = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const hasSocialLinks = Boolean(SOCIAL.github || SOCIAL.linkedin);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      setParallax({ x, y });
    };
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" ref={ref} className="scroll-mt-nav relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-6">
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="absolute inset-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      <div
        className="relative z-10 w-full max-w-3xl text-center"
        style={{ transform: `translate(${parallax.x * -0.2}px, ${parallax.y * -0.2}px)` }}
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--success)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--success)]" />
            </span>
            <span className="text-muted-foreground">Available for opportunities</span>
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-6 font-mono text-sm text-muted-foreground"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            className="mt-2 font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05]"
          >
            <span className="text-gradient">{PERSONAL.name}</span>
          </motion.h1>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-5 flex items-center justify-center gap-2 font-mono text-base sm:text-lg text-foreground/90"
          >
            <span className="text-[color:var(--accent-cyan)]">&gt;</span>
            <span>{typed}</span>
            <span className="inline-block h-5 w-[2px] animate-pulse bg-[color:var(--accent-cyan)]" />
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-6 mx-auto max-w-lg text-muted-foreground"
          >
            {PERSONAL.tagline} Based in{" "}
            <span className="inline-flex items-center gap-1 text-foreground">
              <FiMapPin className="h-3.5 w-3.5 text-[color:var(--accent-cyan)]" />
              {PERSONAL.location}
            </span>
            .
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href={PERSONAL.resumeUrl}
              download
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03] glow-cyan"
            >
              <FiDownload /> Download Resume
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              View Projects <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold hover:border-[color:var(--accent-cyan)] hover:text-[color:var(--accent-cyan)]"
            >
              <FiMail /> Contact Me
            </a>
          </motion.div>

          {hasSocialLinks && (
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="mt-6 flex items-center justify-center gap-3"
            >
              {SOCIAL.github && (
                <a
                  href={SOCIAL.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-[color:var(--accent-cyan)] hover:text-[color:var(--accent-cyan)] hover:-translate-y-0.5"
                >
                  <FaGithub className="h-4 w-4" />
                </a>
              )}
              {SOCIAL.linkedin && (
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-[color:var(--accent-cyan)] hover:text-[color:var(--accent-cyan)] hover:-translate-y-0.5"
                >
                  <FaLinkedinIn className="h-4 w-4" />
                </a>
              )}
            </motion.div>
          )}

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {STATS.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-4 text-center">
                <div className="font-display text-2xl font-bold text-gradient">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
