import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { citation, getAllPapers, getPaper } from "@/lib/content";
import BibtexBlock from "@/components/BibtexBlock";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPapers().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const paper = getPaper(slug);
  if (!paper) return {};
  const [firstPage, lastPage] = paper.pages?.split("-") ?? [];
  return {
    title: paper.title,
    description: paper.abstract.slice(0, 200),
    // Google Scholar indexing tags, as on jmlr.org abstract pages.
    other: {
      citation_title: paper.title,
      citation_author: paper.authors,
      citation_journal_title: "Reinforcement Learning Journal",
      citation_volume: String(paper.volume),
      citation_publication_date: String(paper.year),
      citation_pdf_url: paper.pdfUrl,
      ...(firstPage && { citation_firstpage: firstPage }),
      ...(lastPage && { citation_lastpage: lastPage }),
    },
  };
}

export default async function PaperPage({ params }: Props) {
  const { slug } = await params;
  const paper = getPaper(slug);
  if (!paper) notFound();

  return (
    <article>
      <h2>{paper.title}</h2>
      <p>
        <span className="paper-authors">{paper.authors.join(", ")}</span>;{" "}
        {citation(paper)}
      </p>
      {paper.venue && <p>{paper.venue}</p>}
      <h3>Abstract</h3>
      <p className="abstract">{paper.abstract}</p>
      <p>
        <span className="abs-label">[abs]</span>[
        <a target="_blank" href={paper.pdfUrl}>
          pdf
        </a>
        ]
        {paper.suppUrl && (
          <>
            [
            <a target="_blank" href={paper.suppUrl}>
              supp
            </a>
            ]
          </>
        )}
      </p>
      <h3>BibTeX</h3>
      <BibtexBlock bibtex={paper.bibtex} />
    </article>
  );
}
