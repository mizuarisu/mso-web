import Link from "next/link";
import Crest from "@/components/Crest";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/config";

const capabilities = [
  {
    title: "Direct Action",
    body: "Short-notice, precision strikes against high-value objectives, planned and rehearsed under compressed timelines.",
  },
  {
    title: "Special Reconnaissance",
    body: "Low-visibility surveillance and target development in denied or politically sensitive environments.",
  },
  {
    title: "Foreign Internal Defense",
    body: "Training and advising partner forces to build lasting, independent security capacity.",
  },
  {
    title: "Civil Affairs",
    body: "Coordinating with local governance and populations to stabilize contested areas after operations.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden texture-canvas border-b hairline">
        <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-[auto_1fr] gap-12 items-center">
          <div className="animate-hero">
            <Crest size={140} />
          </div>
          <div className="animate-hero" style={{ animationDelay: "150ms" }}>
            <p className="font-display text-brass tracking-widest2 text-xs mb-4">
              {site.motto} &middot; {site.mottoTranslation}
            </p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] mb-6">
              {site.unitName}
            </h1>
            <p className="text-muted text-lg max-w-xl mb-8 leading-relaxed">
              {site.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/structure"
                className="font-display text-sm tracking-wide bg-brass text-bg px-6 py-3 transition-all duration-300 hover:bg-ink hover:-translate-y-0.5"
              >
                View unit structure
              </Link>
              <Link
                href="/chain-of-command"
                className="font-display text-sm tracking-wide border hairline px-6 py-3 text-ink transition-all duration-300 hover:border-brass hover:-translate-y-0.5"
              >
                Chain of command
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <h2 className="font-display text-2xl mb-3">Mission</h2>
            <div className="h-px w-16 bg-brass mb-6" />
          </div>
          <p className="text-ink/90 leading-relaxed max-w-2xl">
            {site.unitName} organizes, trains, and equips special operations
            forces for employment worldwide in support of theater and
            national objectives. The command sets the standard for readiness,
            discipline, and coordinated action across every element under its
            structure. Established {site.established} under{" "}
            {site.higherHeadquarters}, the command is headquartered at{" "}
            {site.homeStation}.
          </p>
        </section>
      </Reveal>

      <section className="border-t hairline">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <h2 className="font-display text-2xl mb-3">Core capabilities</h2>
            <div className="h-px w-16 bg-brass mb-10" />
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-px bg-line">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="bg-bg p-8 h-full transition-all duration-300 hover:bg-surface hover:-translate-y-1">
                  <h3 className="font-display text-lg mb-2">{c.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
