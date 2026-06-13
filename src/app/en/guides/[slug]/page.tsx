import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { StatusPill } from "@/components/status-pill";
import { guideBySlug, guides } from "@/lib/content";
import { breadcrumbJsonLd, faqJsonLd, guideHowToJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideBySlug.get(slug);

  if (!guide) {
    return buildMetadata({
      title: "Guide Not Found",
      description: "The requested VV Ultimatum guide could not be found.",
      path: "/en/guides/",
      noIndex: true,
    });
  }

  return buildMetadata({
    title: guide.metaTitle,
    description: guide.description,
    path: `/en/guides/${guide.slug}/`,
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guideBySlug.get(slug);

  if (!guide) {
    notFound();
  }

  const relatedGuides = guide.related.map((relatedSlug) => guideBySlug.get(relatedSlug)).filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/en/" },
          { name: "Guides", path: "/en/guides/" },
          { name: guide.title, path: `/en/guides/${guide.slug}/` },
        ])}
      />
      <JsonLd data={faqJsonLd(guide.faq)} />
      <JsonLd data={guideHowToJsonLd(guide)} />

      <main className="page">
        <header className="page-title">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/en/">Home</Link>
            <span>/</span>
            <Link href="/en/guides/">Guides</Link>
            <span>/</span>
            <span>{guide.title}</span>
          </nav>
          <StatusPill status={guide.status} />
          <h1>{guide.title}</h1>
          <p>{guide.description}</p>
        </header>

        <div className="guide-layout">
          <article className="guide-article">
            <section className="quick-answer">
              <h2>Quick answer</h2>
              <p>{guide.quickAnswer}</p>
            </section>

            <section>
              <h2>Why this page matters</h2>
              <p>{guide.intro}</p>
            </section>

            <section>
              <h2>Key facts</h2>
              <ul>
                {guide.keyFacts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </section>

            {guide.videos && guide.videos.length > 0 ? (
              <section>
                <h2>Video references</h2>
                <div className="video-grid">
                  {guide.videos.map((video) => (
                    <figure className="video-card" key={video.youtubeId}>
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      />
                      <figcaption>
                        <strong>{video.title}</strong>
                        <span>{video.note}</span>
                        <a href={video.url} rel="noreferrer" target="_blank">
                          Open on YouTube
                        </a>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            ) : null}

            {guide.sections && guide.sections.length > 0 ? (
              <section>
                <h2>Detailed guide</h2>
                <div className="detail-sections">
                  {guide.sections.map((section) => (
                    <section className="detail-block" key={section.title}>
                      <h3>{section.title}</h3>
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      {section.bullets && section.bullets.length > 0 ? (
                        <ul>
                          {section.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  ))}
                </div>
              </section>
            ) : null}

            <section>
              <h2>Recommended route</h2>
              <ol>
                {guide.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            <section>
              <h2>Common mistakes</h2>
              <ul>
                {guide.commonMistakes.map((mistake) => (
                  <li key={mistake}>{mistake}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2>FAQ</h2>
              {guide.faq.map((item) => (
                <div key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </section>
          </article>

          <aside className="guide-sidebar" aria-label="Guide metadata and related pages">
            <div className="card">
              <h3>Page status</h3>
              <StatusPill status={guide.status} />
              <p>Checked {guide.checkedAt}</p>
              <p>Primary keyword: {guide.primaryKeyword}</p>
              <p>Difficulty: {guide.difficulty}</p>
            </div>
            {relatedGuides.length > 0 ? (
              <div className="card">
                <h3>Related pages</h3>
                <ul>
                  {relatedGuides.map((related) => (
                    <li key={related.slug}>
                      <Link className="card-link" href={`/en/guides/${related.slug}/`}>
                        {related.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <SourceList sourceKeys={guide.sources} />
          </aside>
        </div>
      </main>
    </>
  );
}
