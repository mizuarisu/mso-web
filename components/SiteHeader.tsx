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
          <div className="transition-transform duration-500 ease-out group-hover:rotate-[15deg]">
            <Crest size={40} />
          </div>
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
              className="relative font-display text-sm tracking-wide text-muted hover:text-ink transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-brass after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
