const roster = [
  { rank: "[RANK]", name: "[NAME]", role: "Commanding Officer" },
  { rank: "[RANK]", name: "[NAME]", role: "Deputy Commanding Officer" },
  { rank: "[RANK]", name: "[NAME]", role: "Command Sergeant Major" },
  { rank: "[RANK]", name: "[NAME]", role: "Chief of Staff" },
  { rank: "[RANK]", name: "[NAME]", role: "Operations Officer (S3)" },
  { rank: "[RANK]", name: "[NAME]", role: "Intelligence Officer (S2)" },
];

function Portrait() {
  return (
    <div className="aspect-[3/4] w-full bg-raised border hairline flex items-center justify-center">
      <svg
        width="40%"
        height="40%"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3A3F2E"
        strokeWidth="1"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
    </div>
  );
}

export default function ChainOfCommandPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-display text-brass tracking-widest2 text-xs mb-4">
        Leadership
      </p>
      <h1 className="font-display text-4xl mb-6">Chain of command</h1>
      <p className="text-muted max-w-2xl leading-relaxed mb-16">
        Fill in each seat below as your roster comes together &mdash; ranks,
        names, and roles are placeholders.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {roster.map((r) => (
          <div key={r.role} className="border hairline bg-surface/40">
            <Portrait />
            <div className="p-5">
              <p className="font-display text-xs tracking-widest2 text-brass mb-1">
                {r.rank}
              </p>
              <h3 className="font-display text-lg mb-1">{r.name}</h3>
              <p className="text-muted text-sm">{r.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
