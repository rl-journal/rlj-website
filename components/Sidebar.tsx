const navLinks = [
  { href: "/", label: "Home Page" },
  { href: "/volumes", label: "Papers" },
  { href: "/submit", label: "Submissions" },
  { href: "/board", label: "Editorial Board" },
  { href: "/search", label: "Search" },
  {
    href: "https://rlj.cs.umass.edu/RLC_Publication_Agreement_Form.pdf",
    label: "Publication Agreement",
  },
];

/* Plain <a> links (no client-side routing) so every page loads fresh and
   MathJax typesets it, exactly like the multi-page site this replicates. */
export default function Sidebar() {
  return (
    <div id="fixed">
      <a href="/">
        <img className="logo" src="/rlj-logo.svg" alt="Reinforcement Learning Journal" />
      </a>
      {navLinks.map((link) => (
        <p key={link.href}>
          <a href={link.href}>{link.label}</a>
        </p>
      ))}
    </div>
  );
}
