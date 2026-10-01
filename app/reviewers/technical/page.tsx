import type { Metadata } from "next";
import { getReviewerGroup } from "@/lib/content";
import PersonList from "@/components/PersonList";

export const metadata: Metadata = { title: "Technical Reviewers" };

export default function TechnicalReviewersPage() {
  const group = getReviewerGroup("Technical Reviewers");

  return (
    <div>
      <h1>Technical Reviewers</h1>
      <p>
        See the{" "}
        <a href="/reviewers-guide/technical-reviewers">
          Technical Reviewer Instructions
        </a>{" "}
        for what technical reviewers are supposed to do.
      </p>
      <PersonList members={group.members} columns />
    </div>
  );
}
