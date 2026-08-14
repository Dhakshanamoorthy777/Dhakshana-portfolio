export function Blobs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-24 h-[480px] w-[480px] rounded-full bg-[color:var(--accent-cyan)] opacity-25 blur-[140px] animate-blob" />
      <div className="absolute top-1/3 -right-24 h-[520px] w-[520px] rounded-full bg-[color:var(--accent-violet)] opacity-20 blur-[160px] animate-blob" style={{ animationDelay: "-6s" }} />
      <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-[color:var(--accent-cyan)] opacity-15 blur-[140px] animate-blob" style={{ animationDelay: "-12s" }} />
    </div>
  );
}
