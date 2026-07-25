import type { Metadata } from "next";
import { getIssues, getVolumes } from "@/lib/content";

export const metadata: Metadata = { title: "Papers" };

export default function VolumesPage() {
  const volumes = getVolumes();
  const issues = getIssues();

  return (
    <div>
      <h1>RLJ Papers</h1>
      <p>
        Select a volume number to see its table of contents with links to the
        papers.
      </p>
      {volumes.map((volume) => (
        <p key={volume.number}>
          <a href={`/volumes/${volume.number}`}>Volume {volume.number}</a> (
          {volume.year})
        </p>
      ))}

      <h2>Complete Proceedings</h2>
      {issues.map((issue) => (
        <p key={issue.year}>
          {issue.title}: [<a target="_blank" href={issue.issuePdf}>pdf</a>]
          {issue.coverPagesPdf && (
            <>
              [
              <a target="_blank" href={issue.coverPagesPdf}>
                cover pages
              </a>
              ]
            </>
          )}{" "}
          DOI:{" "}
          <a target="_blank" href={`https://doi.org/${issue.doi}`}>
            {issue.doi}
          </a>
        </p>
      ))}
    </div>
  );
}
