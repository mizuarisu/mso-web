import { site } from "@/lib/config";

export default function SiteFooter() {
  return (
    <footer className="border-t hairline mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-muted text-sm">
          {site.unitName} &mdash; {site.homeStation}
        </p>
        <p className="text-muted text-xs tracking-wide">
          Roleplay unit. Not affiliated with any real government or military
          organization.
        </p>
      </div>
    </footer>
  );
}
