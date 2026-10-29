"""Generate exact rlj.cs.umass.edu -> rlj.org redirects for every paper page.

Usage: python3 -I scripts/gen_htaccess.py <old-site> content/papers <out>

<old-site> is a copy of the rlj.cs.umass.edu document root. Each mapping is
checked by comparing the old page's title with our JSON. PDFs, supplementary
ZIPs and XML are not redirected, since rlj.org still links to them there.
"""
import html
import json
import re
import sys
from pathlib import Path

old_root, papers_dir, out = map(Path, sys.argv[1:4])
code = "R=302"

lines = [
    "# RLJ redirect rules for Apache 2.4+ (mod_rewrite and AllowOverride FileInfo)",
    "# Temporary redirects while testing; switch R=302 to R=301 after verification.",
    "# Place at the document root of https://rlj.cs.umass.edu/.",
    "RewriteEngine On",
    "",
    "# Home and issue index pages",
    f"RewriteRule ^$ https://rlj.org/ [{code},L]",
    f"RewriteRule ^index\\.html$ https://rlj.org/ [{code},L]",
    f"RewriteRule ^publications\\.html$ https://rlj.org/volumes [{code},L]",
]
volume_lines, paper_lines = [], []
problems = []

norm = lambda s: re.sub(r"\W+", "", html.unescape(s)).lower()

for f in sorted(papers_dir.glob("*.json")):
    issue = json.loads(f.read_text(encoding="utf-8"))
    year = issue["year"]
    vols = sorted({p["volume"] for p in issue["papers"]})
    vslug = f"{vols[0]}" if vols[0] == vols[-1] else f"{vols[0]}-{vols[-1]}"
    volume_lines.append(
        f"RewriteRule ^{year}/{year}issue\\.html?$ https://rlj.org/volumes/{vslug} [{code},L]")
    paper_lines.append(f"# {year}")
    for p in sorted(issue["papers"], key=lambda p: p["number"]):
        page = old_root / str(year) / "papers" / f"Paper{p['number']}.html"
        if not page.exists():
            problems.append(f"missing {page}")
            continue
        title = re.search(r"<h1[^>]*>(.*?)</h1>", page.read_text(encoding="utf-8"), re.S)
        if not title or norm(re.sub(r"<[^>]+>", "", title.group(1))) != norm(p["title"]):
            problems.append(f"title mismatch {year} Paper{p['number']} vs {p['slug']}")
            continue
        paper_lines.append(
            f"RewriteRule ^{year}/papers/Paper{p['number']}\\.html$ "
            f"https://rlj.org/papers/{p['slug']} [{code},L]")

lines += volume_lines
lines += ["", "# Exact paper page redirects, one per paper"] + paper_lines
lines += [
    "",
    "# NO catch-all for PDFs, supplementary ZIPs, or XML yet!",
    "# rlj.org still links directly to the files hosted on this server.",
    "",
]
out.write_text("\n".join(lines), encoding="utf-8")
print(f"{sum(1 for l in paper_lines if l.startswith('Rewrite'))} paper rules -> {out}")
for msg in problems:
    print("PROBLEM:", msg)
