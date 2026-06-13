import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { StatusPill } from "@/components/status-pill";
import { guides } from "@/lib/content";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "VV Ultimatum Guides",
  description: "All VV Ultimatum guides grouped by getting started, progression, systems, and reference search intent.",
  path: "/en/guides/",
});

const clusterLabels = {
  "getting-started": "Getting started",
  progression: "Progression",
  systems: "Systems",
  reference: "Reference",
} as const;

export default function GuidesPage() {
  const clusters = Object.keys(clusterLabels) as Array<keyof typeof clusterLabels>;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/en/" },
          { name: "Guides", path: "/en/guides/" },
        ])}
      />
      <JsonLd data={itemListJsonLd(guides.map((guide) => ({ name: guide.title, path: `/en/guides/${guide.slug}/`, description: guide.description })))} />
      <main className="page">
        <header className="page-title">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/en/">Home</Link>
            <span>/</span>
            <span>Guides</span>
          </nav>
          <h1>VV Ultimatum guides</h1>
          <p>Structured pages for codes, races, Hollow and Quincy progression, Spirit Charms, bosses, and source safety. Every page is designed to be internally linked and sitemap-ready.</p>
        </header>

        {clusters.map((cluster) => {
          const clusterGuides = guides.filter((guide) => guide.cluster === cluster);
          return (
            <section className="section" key={cluster}>
              <div className="section-heading">
                <div>
                  <p className="eyebrow">{clusterLabels[cluster]}</p>
                  <h2>{clusterLabels[cluster]} guides</h2>
                </div>
              </div>
              <div className="grid grid-3">
                {clusterGuides.map((guide) => (
                  <article className="card" key={guide.slug}>
                    <StatusPill status={guide.status} />
                    <h3>{guide.title}</h3>
                    <p>{guide.description}</p>
                    <p className="meta">{guide.primaryKeyword}</p>
                    <Link className="card-link" href={`/en/guides/${guide.slug}/`}>
                      Open page
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
