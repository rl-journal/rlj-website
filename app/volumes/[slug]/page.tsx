import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVolume, getVolumes } from "@/lib/content";
import PaperListItem from "@/components/PaperListItem";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getVolumes().map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: getVolume(slug)?.label ?? "Papers" };
}

export default async function VolumePage({ params }: Props) {
  const { slug } = await params;
  const volume = getVolume(slug);
  if (!volume) notFound();

  return (
    <div>
      <h1>
        RLJ {volume.label} ({volume.year})
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
