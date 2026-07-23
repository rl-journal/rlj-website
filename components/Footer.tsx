export default function Footer() {
  return (
    <footer className="w-full max-w-6xl px-10 py-8 mt-12 text-xs text-muted">
      <p>
        © {new Date().getFullYear()} Reinforcement Learning Journal.
        Manuscripts are submitted and reviewed via OpenReview.
      </p>
    </footer>
  );
}
