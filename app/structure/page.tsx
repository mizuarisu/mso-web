import { site } from "@/lib/config";
import Reveal from "@/components/Reveal";

const tree = [
  {
    tier: "Headquarters",
    units: [
      {
        name: "Headquarters & Headquarters Company",
        role: "Command, staff, and support functions for the entire unit.",
      },
    ],
  },
  {
    tier: "Operational Groups",
    units: [
      {
        name: "1st Special Operations Group",
        role: "Direct action and special reconnaissance.",
      },
      {
        name: "2nd Special Operations Group",
        role: "Foreign internal defense and unconventional warfare.",
      },
      {
        name: "3rd Special Operations Group",
        role: "Maritime and riverine special operations.",
      },
    ],
  },
  {
    tier: "Enabling Units",
    units: [
      {
        name: "Signal Battalion",
        role: "Secure communications and network support.",
      },
      {
        name: "Sustainment Battalion",
        role: "Logistics, medical support, and equipment maintenance.",
      },
      {
        name: "Intelligence Battalion",
        role: "Target development and operational intelligence.",
      },
    ],
  },
];

export default function StructurePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-display text-brass tracking-widest2 text-xs mb-4">
        Organization
      </p>
      <h1 className="font-display text-4xl mb-6">Unit structure</h1>
      <p className="text-muted max-w-2xl leading-relaxed mb-16">
        {site.unitName} is organized into three operational groups and a set
        of enabling units, all reporting to a single headquarters element.
      </p>

      <div className="space-y-16">
        {tree.map((tier, i) => (
          <Reveal key={tier.tier} delay={i * 100}>
            <div className="relative pl-8">
              <div className="absolute left-0 top-1 bottom-0 w-px bg-line" />
              <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-brass" />
              <p className="font-display text-xs tracking-widest2 text-muted mb-6">
                {String(i + 1).padStart(2, "0")} &mdash; {tier.tier}
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                {tier.units.map((u) => (
                  <div
                    key={u.name}
                    className="border hairline p-6 bg-surface/40 transition-all duration-300 hover:border-brass hover:-translate-y-1"
                  >
                    <h3 className="font-display text-base mb-2">{u.name}</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {u.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
