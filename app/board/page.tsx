import type { Metadata } from "next";
import { getBoard } from "@/lib/content";

export const metadata: Metadata = { title: "Editorial Board" };

export default function BoardPage() {
  const board = getBoard();

  return (
    <div>
      <h1>RLJ Editorial Board</h1>
      <p>{board.intro}</p>
      {board.groups.map((group) => (
        <section key={group.role}>
          <h3>{group.role}</h3>
          <ul className="editors">
            {group.members.map((member) => (
              <li key={member.name}>
                {member.url ? (
                  <a className="name" href={member.url}>
                    {member.name}
                  </a>
                ) : (
                  <b>{member.name}</b>
                )}
                {member.note && <i> ({member.note})</i>}
                , {member.affiliation}.
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
