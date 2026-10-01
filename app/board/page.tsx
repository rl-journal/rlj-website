import type { Metadata } from "next";
import { getBoard } from "@/lib/content";
import PersonList from "@/components/PersonList";
import ReviewerLinks from "@/components/ReviewerLinks";

export const metadata: Metadata = { title: "Editorial Board" };

export default function BoardPage() {
  const board = getBoard();

  return (
    <div>
      <h1>RLJ Editorial Board</h1>
      {board.intro && <p>{board.intro}</p>}
      {board.groups.map((group) => (
        <section key={group.role}>
          <h3>{group.role}</h3>
          <PersonList members={group.members} />
        </section>
      ))}
      <section>
        <h3>Reviewers</h3>
        <ReviewerLinks />
      </section>
    </div>
  );
}
