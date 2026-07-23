import type { Metadata } from "next";

export const metadata: Metadata = { title: "Submissions" };

// TODO: replace with the actual OpenReview venue URL once the RLJ venue is set up.
const OPENREVIEW_VENUE_URL = "https://openreview.net/";

export default function SubmitPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-xl font-bold mb-6">Submissions</h1>
      <p className="mb-8 leading-relaxed">
        RLJ manages manuscript submission and peer review through{" "}
        <a href={OPENREVIEW_VENUE_URL}>OpenReview</a>. All submissions,
        reviews, and decisions take place on that platform.
      </p>

      <h2 className="text-lg font-bold mb-2">Formatting Instructions</h2>
      <p className="mb-8 leading-relaxed">
        Manuscripts should be prepared in accordance with the formatting
        instructions provided on the OpenReview submission page. Please
        consult the venue page linked above for the current template, page
        limits, and anonymity requirements.
      </p>

      <h2 className="text-lg font-bold mb-2">After Acceptance</h2>
      <p className="mb-8 leading-relaxed">
        Accepted papers are added to the current volume of the journal on
        this site, including the camera-ready PDF and citation information.
      </p>

      <p className="text-sm">
        [<a href={OPENREVIEW_VENUE_URL}>submit on OpenReview</a>]
      </p>
    </div>
  );
}
