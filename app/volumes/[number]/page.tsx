import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVolume, getVolumes } from "@/lib/content";
import PaperListItem from "@/components/PaperListItem";

export const dynamicParams = false;

type Props = { params: Promise<{ number: string }> };

export function generateStaticParams() {
  return getVolumes().map((v) => ({ number: String(v.number) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { number } = await params;
  return { title: `Volume ${number}` };
}

export default async function VolumePage({ params }: Props) {
  const { number } = await params;
  const volume = getVolume(Number(number));
  if (!volume) notFound();

  return (
    <div>
      <h1>
        RLJ Volume {volume.number} ({volume.year})
      </h1>
      <p>
        Published as part of {volume.issue.title}, DOI:{" "}
        <a target="_blank" href={`https://doi.org/${volume.issue.doi}`}>
          {volume.issue.doi}
        </a>
        .
      </p>
      {volume.papers.map((paper) => (
        <PaperListItem key={paper.slug} paper={paper} />
      ))}
    </div>
  );
}
