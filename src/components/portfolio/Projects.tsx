import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Section } from "./Section";
import { PROJECTS } from "@/lib/portfolio-data";
import type { Project } from "@/lib/portfolio-data";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-50, 50], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative h-full glass rounded-3xl overflow-hidden transition-shadow duration-500 hover:glow-cyan"
      >
        <div className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
          <div className="absolute inset-0 bg-grid opacity-30" />
          <span className="relative text-6xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]" style={{ transform: "translateZ(40px)" }}>
            {project.icon}
          </span>
        </div>
        <div className="p-6" style={{ transform: "translateZ(30px)" }}>
          <h3 className="font-display text-xl font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{project.desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-6 flex gap-2">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs font-medium hover:bg-white/5"
              >
                <FiGithub /> GitHub
              </a>
            ) : (
              <span
                title="GitHub link coming soon"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/5 px-3 py-2 text-xs font-medium text-muted-foreground/50 cursor-not-allowed"
              >
                <FiGithub /> GitHub
              </span>
            )}
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-3 py-2 text-xs font-semibold text-background hover:scale-[1.02] transition-transform"
              >
                <FiExternalLink /> Live Demo
              </a>
            ) : (
              <span
                title="No live demo available"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/5 px-3 py-2 text-xs font-medium text-muted-foreground/50 cursor-not-allowed"
              >
                <FiExternalLink /> Live Demo
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 — Selected work" title="Things I've built" subtitle="Full-stack web applications, AI integrations, and embedded systems.">
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
