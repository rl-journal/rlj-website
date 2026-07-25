"use client";

import { useState } from "react";

export default function BibtexBlock({ bibtex }: { bibtex: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div>
      <pre className="bibtex">{bibtex}</pre>
      <button type="button" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy BibTeX"}
      </button>
    </div>
  );
}
