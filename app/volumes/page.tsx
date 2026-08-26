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
        Select a volume to see its table of contents with links to the papers.
      </p>
      {volumes.map((volume) => (
        <p key={volume.slug}>
          <a href={`/volumes/${volume.slug}`}>{volume.label}</a> ({volume.year})
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
          )}
          {issue.xmlUrl && (
            <>
              [
              <a target="_blank" href={issue.xmlUrl}>
                xml
              </a>
              ]
            </>
          )}{" "}
          DOI:{" "}
          <a target="_blank" href={`https://doi.org/${issue.doi}`}>
            {issue.doi}
          </a>
          {issue.isbn && <>, ISBN: {issue.isbn}</>}
        </p>
      ))}
    </div>
  );
}
