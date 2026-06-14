import Link from "next/link";
import { BookOpen, ExternalLink, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

const navItems = [
  { href: "/en/", label: "Home" },
  { href: "/en/guides/", label: "Guides" },
  { href: "/en/codes/", label: "Codes" },
  { href: "/en/races/", label: "Races" },
  { href: "/en/bosses/", label: "Bosses" },
  { href: "/en/sources/", label: "Sources" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-frame">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <Link className="brand" href="/en/" aria-label="VV Ultimatum Guide home">
          <span className="brand-mark" aria-hidden="true">
            <BookOpen size={19} />
          </span>
          <span>
            <strong>{site.shortName}</strong>
            <small>Fan guide hub</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="play-link" href={site.officialGameUrl} rel="noreferrer" target="_blank">
          Play <ExternalLink size={15} />
        </a>
      </header>
      <div id="main-content" tabIndex={-1}>
        {children}
      </div>
      <footer className="site-footer">
        <div>
          <div className="footer-title">
            <ShieldCheck size={18} />
            Source-checked fan coverage
          </div>
          <p>
            Independent fan-made guide. Not affiliated with Roblox Corporation, Midnight Continent, Shueisha, Viz Media, or Bleach rights holders.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/en/about/">About</Link>
          <Link href="/en/privacy/">Privacy</Link>
          <Link href="/en/terms/">Terms</Link>
          <a href={site.officialGameUrl} rel="noreferrer" target="_blank">
            Roblox
          </a>
        </div>
      </footer>
    </div>
  );
}
