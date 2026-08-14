import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend, FiCheck, FiAlertCircle, FiMail, FiMapPin } from "react-icons/fi";
import { Section } from "./Section";
import { PERSONAL } from "@/lib/portfolio-data";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const validate = () => {
    if (!form.name.trim() || form.name.length > 100) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.subject.trim() || form.subject.length > 200) return "Subject is required.";
    if (!form.message.trim() || form.message.length > 1000) return "Message must be 1–1000 characters.";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      setStatus("error");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setError(
        "Contact form is not configured yet. Please email me directly or ask the site owner to set up EmailJS environment variables.",
      );
      return;
    }

    setStatus("loading");
    setError("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          subject: form.subject,
          message: form.message,
          to_email: PERSONAL.email,
        },
        { publicKey },
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setError("Couldn't send your message. Please try again or email me directly.");
    }
  };

  return (
    <Section id="contact" eyebrow="06 — Contact" title="Let's build something" subtitle="I read every message. Whether it's a role, collab, or a hello — drop a line.">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="glass rounded-3xl p-6">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--accent-cyan)]/15 text-[color:var(--accent-cyan)]">
              <FiMail />
            </span>
            <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Email</p>
            <a href={`mailto:${PERSONAL.email}`} className="text-sm font-medium hover:text-[color:var(--accent-cyan)]">
              {PERSONAL.email}
            </a>
          </div>
          <div className="glass rounded-3xl p-6">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--accent-violet)]/15 text-[color:var(--accent-violet)]">
              <FiMapPin />
            </span>
            <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Location</p>
            <p className="text-sm font-medium">{PERSONAL.location}</p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-6 md:p-8 space-y-4"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Your name" />
            <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="you@email.com" />
          </div>
          <Field label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} placeholder="What's this about?" />
          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              maxLength={1000}
              placeholder="Tell me about your project, role, or idea…"
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-[color:var(--accent-cyan)]"
            />
          </div>

          <AnimatePresence mode="wait">
            {status === "error" && error && (
              <motion.p
                key="err"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-sm text-destructive"
              >
                <FiAlertCircle /> {error}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
            type="submit"
            disabled={status === "loading"}
            className="relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[image:var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold text-background transition-shadow hover:glow-cyan disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <AnimatePresence mode="wait">
              {status === "loading" ? (
                <motion.span key="l" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-background/40 border-t-background" /> Sending…
                </motion.span>
              ) : status === "success" ? (
                <motion.span key="s" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2">
                  <FiCheck className="h-5 w-5" /> Message sent!
                </motion.span>
              ) : (
                <motion.span key="i" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  <FiSend /> Send Message
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={255}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-[color:var(--accent-cyan)]"
      />
    </div>
  );
}
