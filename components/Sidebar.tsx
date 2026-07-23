import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/volumes", label: "Papers" },
  { href: "/submit", label: "Submissions" },
  { href: "/board", label: "Editorial Board" },
  { href: "/about", label: "About" },
];

export default function Sidebar() {
  return (
    <aside className="w-44 shrink-0 sticky top-12 self-start">
      <Link href="/" className="block mb-8">
        <Image
          src="/rlj-logo.png"
          alt="Reinforcement Learning Journal"
          width={1033}
          height={430}
          className="w-full h-auto"
          priority
        />
      </Link>
      <nav className="flex flex-col gap-2.5 text-right">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
