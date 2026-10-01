import type { Metadata } from "next";
import ReviewerLinks from "@/components/ReviewerLinks";

export const metadata: Metadata = { title: "Reviewers" };

export default function ReviewersPage() {
  return (
    <div>
      <h1>RLJ Reviewers</h1>
      <p>
        Every submission is evaluated by at least one senior reviewer and one
        technical reviewer, supervised by an editor.
      </p>
      <ReviewerLinks />
    </div>
  );
}
