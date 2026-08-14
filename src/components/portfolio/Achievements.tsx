import { motion } from "framer-motion";
import { Trophy, Medal } from "lucide-react";
import { Section } from "./Section";
import { SPORTS_ACHIEVEMENTS } from "@/lib/portfolio-data";

const iconMap = {
  trophy: Trophy,
  medal: Medal,
} as const;

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="04 — Achievements"
      title="Recognition & awards"
      subtitle="Basketball achievements from zonal and district-level competitions."
    >
      <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
        {SPORTS_ACHIEVEMENTS.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-3xl p-6 transition-shadow duration-500 hover:glow-cyan"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent-cyan)]/15 text-[color:var(--accent-cyan)] transition-colors group-hover:bg-[color:var(--accent-violet)]/15 group-hover:text-[color:var(--accent-violet)]">
                <Icon className="h-6 w-6" />
              </span>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--accent-cyan)]">
                {item.rank} Prize
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{item.title}</h3>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
