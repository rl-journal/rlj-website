import type { Metadata } from "next";
import { getReviewerGroup } from "@/lib/content";
import PersonList from "@/components/PersonList";

export const metadata: Metadata = { title: "Senior Reviewers" };

export default function SeniorReviewersPage() {
  const group = getReviewerGroup("Senior Reviewers");

  return (
    <div>
      <h1>Senior Reviewers</h1>
      <p>
        See the{" "}
        <a href="/reviewers-guide/senior-reviewers">
          Senior Reviewer Instructions
        </a>{" "}
        for what senior reviewers are supposed to do.
      </p>
      <PersonList members={group.members} columns />
    </div>
  );
}
