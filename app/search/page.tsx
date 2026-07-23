import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import PaperListItem from "@/components/PaperListItem";

export const metadata: Metadata = { title: "Search" };

type Props = { searchParams: Promise<{ q?: string }> };

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  const results = query
    ? await prisma.paper.findMany({
        where: {
          OR: [
            { title: { contains: query, mode: "insensitive" } },
            { keywords: { has: query } },
            {
              authors: {
                some: { author: { name: { contains: query, mode: "insensitive" } } },
              },
            },
          ],
        },
        orderBy: { publishedAt: "desc" },
        include: {
          volume: true,
          authors: { include: { author: true } },
        },
      })
    : [];

  return (
    <div>
      <h1 className="text-xl font-bold mb-6">Search</h1>
      <form action="/search" method="GET" className="flex gap-2 mb-8">
        <input
          type="search"
          name="q"
          defaultValue={query}
          placeholder="Search by title, author, or keyword"
          className="border border-rule px-2 py-1 flex-1 bg-transparent"
        />
        <button type="submit" className="border border-rule px-4 py-1">
          Search
        </button>
      </form>

      {query && (
        <p className="text-sm text-muted mb-4">
          {results.length} result{results.length === 1 ? "" : "s"} for “
          {query}”
        </p>
      )}

      <ul>
        {results.map((paper) => (
          <PaperListItem key={paper.slug} paper={paper} />
        ))}
      </ul>
    </div>
  );
}
