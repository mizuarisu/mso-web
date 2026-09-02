const placeholders = [
  "training-01",
  "training-02",
  "field-exercise-01",
  "insignia-01",
  "ceremony-01",
  "field-exercise-02",
  "equipment-01",
  "training-03",
  "ceremony-02",
];

function Tile({ label }: { label: string }) {
  return (
    <div className="group relative aspect-[4/3] border hairline bg-raised overflow-hidden">
      <div className="absolute inset-0 texture-canvas" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="1" />
          <circle cx="9" cy="10" r="1.5" />
          <path d="M21 16l-5.5-5.5a1 1 0 0 0-1.4 0L6 19" />
        </svg>
        <span className="font-display text-xs tracking-widest2">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-display text-brass tracking-widest2 text-xs mb-4">
        Media
      </p>
      <h1 className="font-display text-4xl mb-6">Gallery</h1>
      <p className="text-muted max-w-2xl leading-relaxed mb-16">
        Placeholder tiles &mdash; drop your own images into{" "}
        <code className="text-ink">/public/gallery</code> and swap each tile
        below for a real <code className="text-ink">next/image</code>.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {placeholders.map((p) => (
          <Tile key={p} label={p} />
        ))}
      </div>
    </section>
  );
}
