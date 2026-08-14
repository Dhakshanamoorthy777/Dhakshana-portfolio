import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { NAV_LINKS, PERSONAL } from "@/lib/portfolio-data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const offset = () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue("--nav-scroll-offset").trim();
      if (value.endsWith("rem")) return parseFloat(value) * parseFloat(getComputedStyle(document.documentElement).fontSize);
      if (value.endsWith("px")) return parseFloat(value);
      return 88;
    };

    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const navOffset = offset();
      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navOffset && rect.bottom >= navOffset) {
            setActive(id);
            break;
          }
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 px-4 w-full max-w-6xl"
    >
      <nav
        className={`glass rounded-full flex items-center justify-between px-5 py-3 transition-all duration-500 ${
          scrolled ? "shadow-[0_8px_40px_-8px_rgba(0,212,255,0.25)]" : ""
        }`}
      >
        <a href="#home" className="flex items-center gap-2 font-display font-bold text-base">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-background">
            D
          </span>
          <span className="hidden sm:inline text-gradient">Dhakshana.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-1 text-sm">
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-3 py-2 rounded-full transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/5 border border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href={PERSONAL.resumeUrl}
          download
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-105 hover:glow-cyan"
        >
          <FiDownload className="h-4 w-4" /> Resume
        </a>

        <button
          aria-label="menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden glass mt-2 rounded-2xl p-3"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={PERSONAL.resumeUrl}
                  download
                  className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-4 py-3 text-sm font-medium text-background"
                >
                  <FiDownload className="h-4 w-4" /> Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
