import { motion } from "framer-motion";
import { FiDownload, FiFileText, FiEye } from "react-icons/fi";
import { Section } from "./Section";
import { PERSONAL } from "@/lib/portfolio-data";

export function Resume() {
  return (
    <Section id="resume" eyebrow="05 — Resume" title="My Resume" subtitle="Download a copy or view it directly in your browser.">
      <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)] text-background">
            <FiFileText className="h-6 w-6" />
          </span>
          <h3 className="mt-4 font-display text-2xl font-semibold">{PERSONAL.name} — CV</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Updated for 2026. Includes education, skills, projects, and contact details.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={PERSONAL.resumeUrl}
              download="Dhakshana_Moorthy_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-5 py-2.5 text-sm font-semibold text-background hover:scale-[1.03] transition-transform glow-cyan"
            >
              <FiDownload /> Download PDF
            </a>
            <a
              href={PERSONAL.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm hover:bg-white/5"
            >
              <FiEye /> View Online
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto aspect-[3/4] w-full max-w-lg"
        >
          <div className="absolute -inset-2 rounded-3xl bg-[image:var(--gradient-primary)] opacity-20 blur-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl">
            <iframe
              src={`${PERSONAL.resumeUrl}#view=FitH`}
              title={`${PERSONAL.name} Resume Preview`}
              className="h-full w-full min-h-[480px] bg-white"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
