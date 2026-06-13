import { sources, type SourceKey } from "@/lib/content";

export function SourceList({ sourceKeys }: { sourceKeys: SourceKey[] }) {
  const unique = [...new Set(sourceKeys)];

  return (
    <section className="source-box" aria-labelledby="sources-used">
      <h2 id="sources-used">Sources used</h2>
      <ul>
        {unique.map((key) => {
          const source = sources[key];
          return (
            <li key={key}>
              <a href={source.url} rel="noreferrer" target="_blank">
                {source.label}
              </a>
              <span>{source.note}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
