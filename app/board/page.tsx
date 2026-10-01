import type { Metadata } from "next";
import { getBoard } from "@/lib/content";
import PersonList from "@/components/PersonList";

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
      {/* Reviewers section hidden for now. To restore: rename app/_reviewers
          back to app/reviewers and put <ReviewerLinks /> back here. */}
    </div>
  );
}
