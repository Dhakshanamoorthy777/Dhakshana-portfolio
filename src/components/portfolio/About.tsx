import { motion } from "framer-motion";
import { FiAward, FiTarget } from "react-icons/fi";
import { Section } from "./Section";
import { TIMELINE, ACHIEVEMENTS, PERSONAL } from "@/lib/portfolio-data";

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="A bit about me" subtitle={PERSONAL.bio}>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[color:var(--accent-cyan)] via-[color:var(--accent-violet)] to-transparent" />
          <ul className="space-y-8">
            {TIMELINE.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12"
              >
                <span className="absolute left-[9px] top-2 grid h-3 w-3 place-items-center rounded-full bg-[image:var(--gradient-primary)] ring-4 ring-background" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-[color:var(--accent-cyan)]">
                  {item.year}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.org}</p>
                <p className="mt-2 text-sm text-foreground/80">{item.desc}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-6"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--accent-cyan)]/15 text-[color:var(--accent-cyan)]">
                <FiTarget />
              </span>
              <h3 className="font-display text-lg font-semibold">Career Objective</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              To join a forward-thinking engineering team where I can ship clean Java backends, expressive React frontends, and grow into a senior full-stack engineer building products that matter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-3xl p-6"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--accent-violet)]/15 text-[color:var(--accent-violet)]">
                <FiAward />
              </span>
              <h3 className="font-display text-lg font-semibold">Achievements</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {ACHIEVEMENTS.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent-cyan)]" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
