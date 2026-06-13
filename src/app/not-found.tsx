import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page">
      <section className="page-title">
        <h1>Page not found</h1>
        <p>The requested VV Ultimatum guide page does not exist in this build.</p>
        <Link className="button" href="/en/guides/">
          Open guides
        </Link>
      </section>
    </main>
  );
}
