import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import PaperListItem from "@/components/PaperListItem";

export const revalidate = 300;

type Props = { params: Promise<{ number: string }> };

async function getVolume(numberParam: string) {
  const number = Number(numberParam);
  if (!Number.isInteger(number)) return null;

  return prisma.volume.findUnique({
    where: { number },
    include: {
      papers: {
        orderBy: { publishedAt: "asc" },
        include: {
          volume: true,
          authors: { include: { author: true } },
        },
      },
    },
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { number } = await params;
  return { title: `Volume ${number}` };
}

export default async function VolumePage({ params }: Props) {
  const { number } = await params;
  const volume = await getVolume(number);
  if (!volume) notFound();

  return (
    <div>
      <h1 className="text-xl font-bold mb-6">
        Volume {volume.number} ({volume.year})
      </h1>
      {volume.papers.length === 0 ? (
        <p className="text-muted">No papers published in this volume yet.</p>
      ) : (
        <ul>
          {volume.papers.map((paper) => (
            <PaperListItem key={paper.slug} paper={paper} />
          ))}
        </ul>
      )}
    </div>
  );
}
