import { citation, type Paper } from "@/lib/content";

/* One paper entry, JMLR volume-listing style:
   title as plain text, bold-italic authors, "volume:pages, year.",
   then a [abs][pdf][supp] link row. */
export default function PaperListItem({ paper }: { paper: Paper }) {
  return (
    <dl>
      <dt>{paper.title}</dt>
      <dd>
        <span className="paper-authors">{paper.authors.join(", ")}</span>;{" "}
        {citation(paper)}
        <br />
        [<a href={`/papers/${paper.slug}`}>abs</a>][
        <a target="_blank" href={paper.pdfUrl}>
          pdf
        </a>
        ]
        {paper.suppUrl && (
          <>
            [
            <a target="_blank" href={paper.suppUrl}>
              supp
            </a>
            ]
          </>
        )}
      </dd>
    </dl>
  );
}
