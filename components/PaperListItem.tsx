import { citation, type Paper } from "@/lib/content";
import PaperLinks from "./PaperLinks";

/* One paper entry, JMLR volume-listing style:
   title as plain text, bold-italic authors, "volume:pages, year.",
   then a [abs][pdf][bib][supp] link row. */
export default function PaperListItem({ paper }: { paper: Paper }) {
  return (
    <dl>
      <dt>{paper.title}</dt>
      <dd>
        <span className="paper-authors">{paper.authors.join(", ")}</span>;{" "}
        {citation(paper)}
        <br />
        <PaperLinks
          slug={paper.slug}
          pdfUrl={paper.pdfUrl}
          suppUrl={paper.suppUrl}
          bibtex={paper.bibtex}
        />
      </dd>
    </dl>
  );
}
