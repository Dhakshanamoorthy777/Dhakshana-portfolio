import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";
import { SKILL_CATEGORIES } from "@/lib/portfolio-data";

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => `${Math.round(v)}%`);
  const [val, setVal] = useState("0%");
  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.4, ease: "easeOut" });
      const unsub = display.on("change", (v) => setVal(v));
      return () => { controls.stop(); unsub(); };
    }
  }, [inView, mv, display, to]);
  return <span ref={ref}>{val}</span>;
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="02 — Skills" title="Tech I work with" subtitle="A toolbox built around modern Java, Spring Boot, and the React ecosystem.">
      <div className="grid gap-6 md:grid-cols-2">
        {SKILL_CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: ci * 0.08 }}
            className="glass rounded-3xl p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-gradient">{cat.name}</h3>
              <span className="font-mono text-xs text-muted-foreground">0{ci + 1}</span>
            </div>
            <div className="space-y-4">
              {cat.skills.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-[color:var(--accent-cyan)] transition-transform group-hover:scale-110" />
                        <span className="font-medium">{s.name}</span>
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        <Counter to={s.level} />
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-[image:var(--gradient-primary)]"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
