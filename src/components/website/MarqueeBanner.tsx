'use client';

export default function Marquee() {
  return (
    <section className="relative bg-primary overflow-hidden py-4">
      <div className="animate-marquee flex whitespace-nowrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="mx-8 text-primary-foreground font-bold text-sm sm:text-base tracking-wider uppercase flex items-center gap-4"
          >
            <span className="w-2 h-2 bg-accent-neon rounded-full inline-block" />
            New Single Out Now &mdash; Love At First Touch
            <span className="w-2 h-2 bg-accent-gold rounded-full inline-block" />
            Available on All Platforms
            <span className="w-2 h-2 bg-accent-neon rounded-full inline-block" />
            Sanele Phakathi
          </span>
        ))}
      </div>
    </section>
  );
}