"use client";

import { useState } from "react";
import BibtexBlock from "./BibtexBlock";

/* The [abs][pdf][bib][supp] row under a paper entry. [bib] expands the entry's
   BibTeX in place, so it can be copied without leaving the listing. */
export default function PaperLinks({
  slug,
  pdfUrl,
  suppUrl,
  bibtex,
}: {
  slug: string;
  pdfUrl: string;
  suppUrl: string | null;
  bibtex: string;
}) {
  const [showBibtex, setShowBibtex] = useState(false);

  return (
    <>
      [<a href={`/papers/${slug}`}>abs</a>][
      <a target="_blank" href={pdfUrl}>
        pdf
      </a>
      ][
      {/* a link rather than a button*/}
      <a
        href={`/papers/${slug}`}
        role="button"
        aria-expanded={showBibtex}
        onClick={(e) => {
          e.preventDefault();
          setShowBibtex((shown) => !shown);
        }}
      >
        bib
      </a>
      ]
      {suppUrl && (
        <>
          [
          <a target="_blank" href={suppUrl}>
            supp
          </a>
          ]
        </>
      )}
      {showBibtex && <BibtexBlock bibtex={bibtex} />}
    </>
  );
}
