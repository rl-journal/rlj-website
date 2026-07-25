"use client";

import { useState } from "react";

type IndexEntry = {
  slug: string;
  title: string;
  authors: string[];
  citation: string;
  pdfUrl: string;
};

export default function SearchClient({ index }: { index: IndexEntry[] }) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const results = q
    ? index.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.authors.some((a) => a.toLowerCase().includes(q))
      )
    : [];

  return (
    <div>
      <p>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title or author"
          size={40}
        />
      </p>
      {q && (
        <p>
          {results.length} result{results.length === 1 ? "" : "s"}
        </p>
      )}
      {results.map((paper) => (
        <dl key={paper.slug}>
          <dt>{paper.title}</dt>
          <dd>
            <span className="paper-authors">{paper.authors.join(", ")}</span>;{" "}
            {paper.citation}
            <br />
            [<a href={`/papers/${paper.slug}`}>abs</a>][
            <a target="_blank" href={paper.pdfUrl}>
              pdf
            </a>
            ]
          </dd>
        </dl>
      ))}
    </div>
  );
}
