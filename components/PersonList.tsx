import type { Person } from "@/lib/content";

export default function PersonList({
  members,
  columns = false,
}: {
  members: Person[];
  columns?: boolean;
}) {
  return (
    <ul className={columns ? "editors name-columns" : "editors"}>
      {members.map((member) => (
        <li key={member.name}>
          {member.url ? (
            <a className="name" href={member.url}>
              {member.name}
            </a>
          ) : member.affiliation ? (
            <b>{member.name}</b>
          ) : (
            member.name
          )}
          {member.note && <i> ({member.note})</i>}
          {member.affiliation ? `, ${member.affiliation}.` : ""}
        </li>
      ))}
    </ul>
  );
}
