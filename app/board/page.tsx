import type { Metadata } from "next";
import { prisma } from "@/lib/db";

export const metadata: Metadata = { title: "Editorial Board" };
export const revalidate = 300;

export default async function BoardPage() {
  const members = await prisma.boardMember.findMany({
    orderBy: [{ role: "asc" }, { order: "asc" }],
  });

  const groups = new Map<string, typeof members>();
  for (const member of members) {
    const group = groups.get(member.role) ?? [];
    group.push(member);
    groups.set(member.role, group);
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-8">Editorial Board</h1>
      {[...groups.entries()].map(([role, roleMembers]) => (
        <section key={role} className="mb-8">
          <h2 className="font-bold mb-2">{role}</h2>
          <ul>
            {roleMembers.map((member) => (
              <li key={member.id} className="py-1">
                {member.url ? (
                  <a href={member.url}>{member.name}</a>
                ) : (
                  member.name
                )}
                {member.affiliation && (
                  <span className="text-muted">, {member.affiliation}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
