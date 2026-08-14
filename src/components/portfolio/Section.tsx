import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-nav relative py-24 md:py-32 px-6 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            {eyebrow && (
              <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[color:var(--accent-cyan)]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                <span className="text-gradient">{title}</span>
              </h2>
            )}
            {subtitle && (
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
