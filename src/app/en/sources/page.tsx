import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { sources } from "@/lib/content";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "VV Ultimatum Sources",
  description: "Research notes, competitor analysis, and source policy for the VV Ultimatum fan guide site.",
  path: "/en/sources/",
});

export default function SourcesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/en/" },
          { name: "Sources", path: "/en/sources/" },
        ])}
      />
      <main className="page">
        <header className="page-title">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/en/">Home</Link>
            <span>/</span>
            <span>Sources</span>
          </nav>
          <h1>Sources and research policy</h1>
          <p>This site treats VV Ultimatum as a fast-changing Roblox RPG. Pages should show checked dates, confidence labels, and source links instead of hiding uncertainty.</p>
        </header>

        <section className="grid grid-2">
          <article className="card">
            <h2>Competitor read</h2>
            <p>
              vvultimatum.net has the broader wiki footprint: codes, races, bosses, maps, clans, builds, systems, tier lists, and update pages. The opportunity is not to copy it; it is to ship focused pages with clearer source confidence and safer decision flow.
            </p>
          </article>
          <article className="card">
            <h2>Positioning read</h2>
            <p>
              vvultimatum.org is lighter and source-labeled. This build keeps that trust pattern, then adds stronger hub architecture, dynamic guide pages, JSON-LD, sitemap coverage, and internal linking.
            </p>
          </article>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Checked source set</p>
              <h2>Every source used in the first build.</h2>
            </div>
          </div>
          <div className="grid grid-2">
            {Object.values(sources).map((source) => (
              <article className="card" key={source.key}>
                <h3>
                  <a href={source.url} rel="noreferrer" target="_blank">
                    {source.label}
                  </a>
                </h3>
                <p>{source.note}</p>
                <p className="meta">Checked {source.checkedAt}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
