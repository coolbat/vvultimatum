import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { codes } from "@/lib/content";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "VV Ultimatum Codes",
  description: "Working VV Ultimatum codes, source conflicts, redemption steps, and reroll spending notes for June 2026.",
  path: "/en/codes/",
});

const codeFaq = [
  {
    question: "What VV Ultimatum codes are active?",
    answer: "The strongest current active-code consensus is FULLRELEASE and 75KLIKES. Other launch codes are kept under source conflict until rechecked in game.",
  },
  {
    question: "How do I redeem VV Ultimatum codes?",
    answer: "Finish the tutorial, join or verify the Midnight Continent group if required, open Shop, select Codes, paste the code, and redeem it exactly as written.",
  },
  {
    question: "Why are some VV Ultimatum codes not marked active?",
    answer: "Some updated public sources disagree. This page separates source conflicts from active codes to avoid publishing stale launch rewards as confirmed.",
  },
  {
    question: "Where should I find new codes?",
    answer: "Check the official Roblox game page and official Discord announcements first, then use code guide sites as secondary verification.",
  },
  {
    question: "Should I spend reroll rewards immediately?",
    answer: "Usually no. Save rerolls until your race, route, and build direction are worth keeping.",
  },
];

export default function CodesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/en/" },
          { name: "Codes", path: "/en/codes/" },
        ])}
      />
      <JsonLd data={faqJsonLd(codeFaq)} />
      <main className="page">
        <header className="page-title">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/en/">Home</Link>
            <span>/</span>
            <span>Codes</span>
          </nav>
          <h1>VV Ultimatum codes</h1>
          <p>Active-code consensus, source conflicts, and safer redemption notes. Checked June 12, 2026.</p>
        </header>

        <section className="section">
          <table className="code-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Reward</th>
                <th>Status</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {codes.map((entry) => (
                <tr key={entry.code}>
                  <td>
                    <code>{entry.code}</code>
                  </td>
                  <td>{entry.reward}</td>
                  <td>{entry.status.replaceAll("_", " ")}</td>
                  <td>{entry.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="section grid grid-2">
          <article className="card">
            <h2>Redemption flow</h2>
            <ol>
              <li>Finish the tutorial before opening the code flow.</li>
              <li>Join or verify the Midnight Continent Roblox group if the game asks for it.</li>
              <li>Open the Shop icon, switch to Codes, paste the code, then redeem.</li>
              <li>Hold reroll rewards until the account route is worth keeping.</li>
            </ol>
          </article>
          <article className="notice">
            Fake or outdated code lists are common around a Roblox release window. This page uses active, source-conflict, and reported-expired buckets instead of merging every copied code into one table.
          </article>
        </section>

        <SourceList sourceKeys={["vvNetCodes", "pggCodes", "pcgamesnCodes", "pocketTacticsCodes", "officialRoblox"]} />
      </main>
    </>
  );
}
