export type PaperSummary = {
  slug: string;
  title: string;
  pages: string | null;
  publishedAt: Date;
  pdfUrl: string;
  volume: { number: number; year: number };
  authors: { order: number; author: { name: string } }[];
};

export function authorNames(paper: Pick<PaperSummary, "authors">): string {
  return [...paper.authors]
    .sort((a, b) => a.order - b.order)
    .map((pa) => pa.author.name)
    .join(", ");
}
