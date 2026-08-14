import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { PERSONAL, SOCIAL } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-10 px-6 mt-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 font-display font-bold">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-background">
                D
              </span>
              <span className="text-gradient">{PERSONAL.name}</span>
            </a>
            <p className="mt-2 text-xs text-muted-foreground">Java Full Stack Developer</p>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <div className="flex items-center gap-3">
              {SOCIAL.github && (
                <a
                  href={SOCIAL.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
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
                  aria-label="LinkedIn"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-[color:var(--accent-cyan)] hover:text-[color:var(--accent-cyan)] hover:-translate-y-0.5"
                >
                  <FaLinkedinIn className="h-4 w-4" />
                </a>
              )}
              <a
                href={`mailto:${PERSONAL.email}`}
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-[color:var(--accent-cyan)] hover:text-[color:var(--accent-cyan)] hover:-translate-y-0.5"
              >
                <FiMail className="h-4 w-4" />
              </a>
            </div>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="text-sm text-muted-foreground transition-colors hover:text-[color:var(--accent-cyan)]"
            >
              {PERSONAL.email}
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col items-center gap-2 border-t border-white/5 pt-6 text-center"
        >
          <p className="text-xs text-muted-foreground">
            © {year} {PERSONAL.name}. All rights reserved.
          </p>
          <p className="text-[11px] text-muted-foreground/70">Built with React</p>
        </motion.div>
      </div>
    </footer>
  );
}
