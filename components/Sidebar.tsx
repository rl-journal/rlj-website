"use client";

import { usePathname } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
  children?: NavLink[];
};

/* Nesting drives the sidebar's expand/collapse: a link's children are rendered
   only while the current page is that link or one of its descendants. */
const navLinks: NavLink[] = [
  { href: "/", label: "Home Page" },
  { href: "/volumes", label: "Papers" },
  {
    href: "/submit",
    label: "Submissions",
    children: [
      { href: "/authors-guide", label: "Authors Guide" },
      {
        href: "/reviewers-guide",
        label: "Reviewers Guide",
        children: [
          { href: "/reviewers-guide/technical-reviewers", label: "Technical Reviewers" },
          { href: "/reviewers-guide/senior-reviewers", label: "Senior Reviewers" },
          { href: "/reviewers-guide/supporting-claims", label: "Supporting Claims" },
          { href: "/reviewers-guide/polished", label: "Polished & Well Written" },
        ],
      },
      {
        href: "/editors-guide",
        label: "Editors Guide",
        children: [
          { href: "/editors-guide/desk-rejection", label: "Desk Rejection" },
        ],
      },
    ],
  },
  { href: "/board", label: "Editorial Board" },
  { href: "/search", label: "Search" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  {
    href: "https://rlj.cs.umass.edu/RLC_Publication_Agreement_Form.pdf",
    label: "Publication Agreement",
  },
];


function normalize(pathname: string): string {
  return pathname !== "/" && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;
}

function containsPath(link: NavLink, pathname: string): boolean {
  return (
    link.href === pathname ||
    (link.children ?? []).some((child) => containsPath(child, pathname))
  );
}

function decorate(label: string, depth: number): React.ReactNode {
  if (depth === 0) return <b>{label}</b>;
  if (depth === 1) return <u>{label}</u>;
  return <i>{label}</i>;
}

function NavItem({
  link,
  pathname,
  depth,
}: {
  link: NavLink;
  pathname: string;
  depth: number;
}) {
  const onTrail = containsPath(link, pathname);
  const expanded = onTrail && !!link.children?.length;

  return (
    <>
      <p className={depth > 0 ? `nav-child nav-depth-${depth}` : undefined}>
        <a href={link.href}>
          {onTrail ? decorate(link.label, depth) : link.label}
        </a>
      </p>
      {expanded &&
        link.children!.map((child) => (
          <NavItem
            key={child.label}
            link={child}
            pathname={pathname}
            depth={depth + 1}
          />
        ))}
    </>
  );
}

/* Plain <a> links (no client-side routing) so every page loads fresh and
   MathJax typesets it, exactly like the multi-page site this replicates. */
export default function Sidebar() {
  const pathname = normalize(usePathname() ?? "/");

  return (
    <div id="fixed">
      <a href="/">
        <img className="logo" src="/rlj-logo.svg" alt="Reinforcement Learning Journal" />
      </a>
      {navLinks.map((link) => (
        <NavItem key={link.href} link={link} pathname={pathname} depth={0} />
      ))}
    </div>
  );
}
