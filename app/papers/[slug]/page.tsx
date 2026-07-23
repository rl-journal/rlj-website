import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { generateBibtex } from "@/lib/bibtex";
import { authorNames } from "@/lib/types";
import BibtexBlock from "@/components/BibtexBlock";

export const revalidate = 300;

type Props = { params: Promise<{ slug: string }> };

async function getPaper(slug: string) {
  return prisma.paper.findUnique({
    where: { slug },
    include: {
      volume: true,
      authors: { include: { author: true }, orderBy: { order: "asc" } },
    },
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const paper = await getPaper(slug);
  if (!paper) return {};
  return {
    title: paper.title,
    description: paper.abstract.slice(0, 200),
  };
}

export default async function PaperPage({ params }: Props) {
  const { slug } = await params;
  const paper = await getPaper(slug);
  if (!paper) notFound();

  const bibtex = generateBibtex(paper);

  return (
    <article className="max-w-3xl">
      <h1 className="text-2xl font-bold leading-snug mb-3">{paper.title}</h1>
      <p className="italic mb-2">{authorNames(paper)}</p>
      <p className="text-sm mb-2">
        {paper.volume.number}({paper.volume.year})
        {paper.pages ? `:${paper.pages}` : ""}.
      </p>
      <p className="text-sm mb-10">
        [
        <a href={paper.pdfUrl}>pdf</a>]
        {paper.supplementaryUrl && (
          <>
            {" ["}
            <a href={paper.supplementaryUrl}>supplementary material</a>]
          </>
        )}{" "}
        [
        <a href="#bibtex">bib</a>]
      </p>

      <h2 className="text-lg font-bold mb-2">Abstract</h2>
      <p className="leading-relaxed mb-10">{paper.abstract}</p>

      {paper.keywords.length > 0 && (
        <>
          <h2 className="text-lg font-bold mb-2">Keywords</h2>
          <p className="mb-10">{paper.keywords.join(", ")}</p>
        </>
      )}

      <h2 id="bibtex" className="text-lg font-bold mb-2">
        Citation
      </h2>
      <BibtexBlock bibtex={bibtex} />
    </article>
  );
}
