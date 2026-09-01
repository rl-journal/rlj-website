import type { Metadata } from "next";
import { citation, getAllPapers } from "@/lib/content";
import SearchClient from "@/components/SearchClient";

export const metadata: Metadata = { title: "Search" };

export default function SearchPage() {
  const index = getAllPapers().map((p) => ({
    slug: p.slug,
    title: p.title,
    authors: p.authors,
    citation: citation(p),
    pdfUrl: p.pdfUrl,
    suppUrl: p.suppUrl,
    bibtex: p.bibtex,
  }));

  return (
    <div>
      <h1>Search RLJ Papers</h1>
      <SearchClient index={index} />
    </div>
  );
}
