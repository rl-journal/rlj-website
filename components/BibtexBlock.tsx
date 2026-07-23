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
      <pre className="border border-rule bg-black/[.02] p-4 text-sm overflow-x-auto font-mono whitespace-pre">
        {bibtex}
      </pre>
      <button
        type="button"
        onClick={handleCopy}
        className="text-sm mt-2 underline"
      >
        {copied ? "Copied!" : "Copy to clipboard"}
      </button>
    </div>
  );
}
