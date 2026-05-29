"use client";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="tactical-grid absolute inset-0 opacity-40" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary-container/20 blur-[120px]" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold-accent/10 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
    </div>
  );
}
