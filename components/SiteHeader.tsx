import Link from "next/link";
import Crest from "./Crest";
import { site } from "@/lib/config";

const links = [
  { href: "/", label: "Home" },
  { href: "/structure", label: "Structure" },
  { href: "/chain-of-command", label: "Chain of Command" },
  { href: "/gallery", label: "Gallery" },
];

export default function SiteHeader() {
  return (
    <header className="border-b hairline bg-bg/95 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <Crest size={40} />
          <div className="leading-tight">
            <div className="font-display text-ink text-lg tracking-wide">
              {site.shortName}
            </div>
            <div className="text-muted text-[11px] tracking-widest2 uppercase">
              {site.motto}
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-display text-sm tracking-wide text-muted hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
