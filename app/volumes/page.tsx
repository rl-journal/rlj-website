import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/db";

export const metadata: Metadata = { title: "Volumes" };
export const revalidate = 300;

export default async function VolumesPage() {
  const volumes = await prisma.volume.findMany({
    orderBy: { number: "desc" },
    include: { _count: { select: { papers: true } } },
  });

  return (
    <div>
      <h1 className="text-xl font-bold mb-6">Volumes</h1>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.id} className="py-2">
            <Link href={`/volumes/${volume.number}`}>
              Volume {volume.number}
            </Link>{" "}
            ({volume.year}) — {volume._count.papers} paper
            {volume._count.papers === 1 ? "" : "s"}
          </li>
        ))}
      </ul>
    </div>
  );
}
