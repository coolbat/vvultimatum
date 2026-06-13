import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { races } from "@/lib/content";
import { breadcrumbJsonLd, faqJsonLd, itemListJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "VV Ultimatum Races",
  description: "Compare Quincy, Hollow, and Shinigami by progression route, best fit, risk, and source confidence.",
  path: "/en/races/",
});

const raceFaq = [
  {
    question: "How many races are in VV Ultimatum?",
    answer: "Current public guide sources list three main playable race paths: Shinigami, Quincy, and Hollow.",
  },
  {
    question: "What is the safest first race?",
    answer: "Quincy is currently the safest first recommendation for players who want a documented progression route.",
  },
  {
    question: "Why is Hollow riskier?",
    answer: "Hollow progression has branch choices such as Menoscar versus Adjuchas that can limit later evolution.",
  },
  {
    question: "Is Shinigami bad?",
    answer: "No. It is just less fully documented in the checked source set than Quincy and Hollow at this snapshot.",
  },
  {
    question: "Can I switch races?",
    answer: "Switching appears costly or rare in current public guide coverage, so choose as if the first race matters.",
  },
];

export default function RacesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/en/" },
          { name: "Races", path: "/en/races/" },
        ])}
      />
      <JsonLd data={faqJsonLd(raceFaq)} />
      <JsonLd data={itemListJsonLd(races.map((race) => ({ name: race.name, path: "/en/races/", description: race.summary })))} />
      <main className="page">
        <header className="page-title">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/en/">Home</Link>
            <span>/</span>
            <span>Races</span>
          </nav>
          <h1>VV Ultimatum races</h1>
          <p>Compare the three routes by progression clarity, branch risk, and first-account fit before locking a character.</p>
        </header>

        <section className="grid grid-3">
          {races.map((race) => (
            <article className="card race-card" key={race.slug}>
              <h2>{race.name}</h2>
              <p>{race.summary}</p>
              <p>
                <strong>Best for:</strong> {race.bestFor}
              </p>
              <h3>Progression shape</h3>
              <ol>
                {race.progression.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <h3>Risks</h3>
              <ul>
                {race.risks.map((risk) => (
                  <li key={risk}>{risk}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="section">
          <SourceList sourceKeys={["bloxRaces", "bloxHollow", "bloxQuincy", "vvNetRaces", "vvOrgHome"]} />
        </section>
      </main>
    </>
  );
}
