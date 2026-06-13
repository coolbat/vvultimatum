import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { StatusPill } from "@/components/status-pill";
import { bosses } from "@/lib/content";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "VV Ultimatum Bosses",
  description: "Boss route notes and confidence labels for Securis, Rogue Quincy Commander, Shikai Spirit, and Resurreccion Spirit.",
  path: "/en/bosses/",
});

const bossFaq = [
  {
    question: "Which VV Ultimatum boss is most important for Quincy?",
    answer: "Securis is the most important named boss in the checked Quincy progression sources.",
  },
  {
    question: "Are boss drops verified?",
    answer: "Only route context is cross-checked in this starter build. Exact drop rates and respawns need direct verification before publication.",
  },
  {
    question: "Why not list every boss drop?",
    answer: "Because inaccurate drop tables can age quickly after updates. This tracker starts with confidence labels and source links.",
  },
  {
    question: "What should be added next?",
    answer: "A per-boss page for Securis, then route-linked pages for Shikai Spirit, Resurreccion Spirit, and farmable material drops.",
  },
  {
    question: "Can community Trello data be used?",
    answer: "Yes as a lead, but exact boss facts should be verified against current gameplay or official update notes.",
  },
];

export default function BossesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/en/" },
          { name: "Bosses", path: "/en/bosses/" },
        ])}
      />
      <JsonLd data={faqJsonLd(bossFaq)} />
      <main className="page">
        <header className="page-title">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/en/">Home</Link>
            <span>/</span>
            <span>Bosses</span>
          </nav>
          <h1>VV Ultimatum bosses</h1>
          <p>A source-confidence tracker for progression bosses and drop-table pages that should be expanded only after current verification.</p>
        </header>

        <section className="grid grid-2">
          {bosses.map((boss) => (
            <article className="card" key={boss.name}>
              <StatusPill status={boss.confidence} />
              <h2>{boss.name}</h2>
              <p>{boss.purpose}</p>
              <p>
                <strong>Route:</strong> {boss.route}
              </p>
            </article>
          ))}
        </section>

        <section className="section grid grid-2">
          <article className="notice">
            SEO note: boss pages should be split once each boss has enough verified data for attack patterns, route unlock, recommended level, rewards, and update date. Thin duplicate boss pages are worse than one honest tracker.
          </article>
          <article className="card">
            <h2>Next pages to publish</h2>
            <ol>
              <li>Securis boss guide for Quincy progression.</li>
              <li>Rogue Quincy Commander material route.</li>
              <li>Shikai Spirit and Resurreccion Spirit pages after direct verification.</li>
            </ol>
          </article>
        </section>

        <SourceList sourceKeys={["bloxQuincy", "pggQuincy", "vvNetHome"]} />
      </main>
    </>
  );
}
