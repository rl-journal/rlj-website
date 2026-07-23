type BibtexPaper = {
  slug: string;
  title: string;
  pages: string | null;
  publishedAt: Date;
  volume: { number: number; year: number };
  authors: { order: number; author: { name: string } }[];
};

export function generateBibtex(paper: BibtexPaper): string {
  const authorList = [...paper.authors]
    .sort((a, b) => a.order - b.order)
    .map((pa) => pa.author.name)
    .join(" and ");

  const key = `RLJ:v${paper.volume.number}:${paper.slug}`;

  const fields: [string, string | undefined][] = [
    ["author", authorList],
    ["title", paper.title],
    ["journal", "Reinforcement Learning Journal"],
    ["year", String(paper.volume.year)],
    ["volume", String(paper.volume.number)],
    ["pages", paper.pages ?? undefined],
    ["url", `https://rlj.example.org/papers/${paper.slug}`],
  ];

  const body = fields
    .filter(([, value]) => value !== undefined && value !== "")
    .map(([name, value]) => `  ${name.padEnd(7)} = {${value}}`)
    .join(",\n");

  return `@article{${key},\n${body}\n}`;
}
