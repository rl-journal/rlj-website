import Link from "next/link";
import { prisma } from "@/lib/db";
import PaperListItem from "@/components/PaperListItem";

export const revalidate = 300;

export default async function HomePage() {
  const recentPapers = await prisma.paper.findMany({
    orderBy: { publishedAt: "desc" },
    take: 5,
    include: {
      volume: true,
      authors: { include: { author: true } },
    },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Reinforcement Learning Journal</h1>
      <p className="mb-8 max-w-3xl leading-relaxed">
        The <strong>Reinforcement Learning Journal</strong> (RLJ) website is
        under construction.
      </p>

      <h2 className="text-xl font-bold mb-4">Recent Papers</h2>
      <ul>
        {recentPapers.map((paper) => (
          <PaperListItem key={paper.slug} paper={paper} />
        ))}
      </ul>
      <p className="text-sm">
        [<Link href="/volumes">all volumes</Link>]
      </p>
    </div>
  );
}
