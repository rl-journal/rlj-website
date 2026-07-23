import Link from "next/link";
import { authorNames, type PaperSummary } from "@/lib/types";

export default function PaperListItem({ paper }: { paper: PaperSummary }) {
  return (
    <li className="mb-6">
      <Link href={`/papers/${paper.slug}`} className="font-bold">
        {paper.title}
      </Link>
      <p className="italic mt-0.5">{authorNames(paper)}</p>
      <p className="text-muted mt-0.5">
        {paper.volume.number}({paper.volume.year})
        {paper.pages ? `:${paper.pages}` : ""}.
      </p>
      <p className="text-sm mt-0.5">
        [<a href={paper.pdfUrl}>pdf</a>]
      </p>
    </li>
  );
}
