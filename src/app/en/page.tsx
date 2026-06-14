import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, BookMarked, CircleDot, ExternalLink, ShieldAlert, Swords } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { StatusPill } from "@/components/status-pill";
import { guides, homeFaq, races } from "@/lib/content";
import { breadcrumbJsonLd, faqJsonLd, itemListJsonLd, videoGameJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "VV Ultimatum Guide",
  description: site.description,
  path: "/en/",
});

const featuredEntries = [
  {
    slug: "codes",
    title: "VV Ultimatum Codes",
    description: "Working codes, source conflicts, redemption steps, and reroll-spending warnings.",
    status: "verified" as const,
    href: "/en/codes/",
  },
  ...["beginner-guide", "controls-keybinds", "leveling-guide", "best-race", "clans-tier-list", "vv-builder-build-planner", "quincy-progression", "hollow-progression"]
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((guide): guide is (typeof guides)[number] => Boolean(guide))
    .map((guide) => ({
      slug: guide.slug,
      title: guide.title,
      description: guide.description,
      status: guide.status,
      href: `/en/guides/${guide.slug}/`,
    })),
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={videoGameJsonLd()} />
      <JsonLd data={faqJsonLd(homeFaq)} />
      <JsonLd data={itemListJsonLd(featuredEntries.map((entry) => ({ name: entry.title, path: entry.href, description: entry.description })))} />

      <main className="page">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">VV: ULTIMATUM Roblox guide</p>
            <h1>Choose your route before you burn rerolls.</h1>
            <p>
              A source-checked VV Ultimatum guide hub for the decisions players search mid-session: active codes, best race, Hollow branch risk, Quincy milestones, Spirit Charms, bosses, and official links.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/en/guides/beginner-guide/">
                Start guide <ArrowRight size={17} />
              </Link>
              <Link className="ghost-button" href="/en/codes/">
                Check codes
              </Link>
            </div>
          </div>
          <figure className="hero-media">
            <div className="media-image">
              <Image src={site.trailerThumbnailUrl} alt="VV: ULTIMATUM official trailer thumbnail" fill sizes="(max-width: 880px) 100vw, 42vw" priority />
            </div>
            <figcaption className="media-caption">
              <span>Official trailer context</span>
              <a href={site.officialTrailerUrl} rel="noreferrer" target="_blank">
                Watch <ExternalLink size={13} />
              </a>
            </figcaption>
          </figure>
        </section>

        <section className="stat-strip" aria-label="Game quick facts">
          <div className="stat">
            <strong>3</strong>
            <span>Race paths</span>
          </div>
          <div className="stat">
            <strong>130+</strong>
            <span>Skills listed by Roblox page</span>
          </div>
          <div className="stat">
            <strong>100</strong>
            <span>Commonly cited level cap</span>
          </div>
          <div className="stat">
            <strong>{site.checkedAt}</strong>
            <span>Research snapshot</span>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">High-intent entry points</p>
              <h2>Open the page that matches your next decision.</h2>
              <p>Each guide includes a confidence label, checked date, related pages, and source links so update-sensitive facts do not look more certain than they are.</p>
            </div>
            <Link className="ghost-button" href="/en/guides/">
              All guides
            </Link>
          </div>
          <div className="entry-grid">
            {featuredEntries.map((entry) => (
              <article className="card entry-card" key={entry.slug}>
                <StatusPill status={entry.status} />
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
                <Link className="card-link" href={entry.href}>
                  Open {entry.title}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Race decision</p>
              <h2>Quincy, Hollow, or Shinigami?</h2>
              <p>Pick by route shape. A tier list tells you power; the progression route tells you whether the account fits how you actually play.</p>
            </div>
            <Link className="ghost-button" href="/en/races/">
              Compare races
            </Link>
          </div>
          <div className="route-grid">
            {races.map((race) => (
              <article className="card race-card route-card" key={race.slug}>
                <h3>{race.name}</h3>
                <p>{race.summary}</p>
                <p>
                  <strong>Best for:</strong> {race.bestFor}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section trust-grid">
          <article className="trust-item">
            <CircleDot color="var(--teal)" />
            <h3>Code-safe workflow</h3>
            <p>Claim clear active codes, then hold reroll rewards until race, branch, and build direction are worth protecting.</p>
          </article>
          <article className="trust-item">
            <ShieldAlert color="var(--gold)" />
            <h3>Conflict labels</h3>
            <p>When public sources disagree on codes, drops, or route details, the page keeps that conflict visible instead of burying it.</p>
          </article>
          <article className="trust-item">
            <Swords color="var(--orange)" />
            <h3>Route-first bosses</h3>
            <p>Boss pages start from progression purpose before drop tables, because exact rates and respawns change quickly after Roblox updates.</p>
          </article>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2>Fast answers for search snippets.</h2>
            </div>
          </div>
          <div className="faq-grid">
            {homeFaq.map((item) => (
              <article className="card faq-item" key={item.question}>
                <BookMarked color="var(--teal)" />
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
