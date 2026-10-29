"""Build content/papers/<year>.json from the old rlj.cs.umass.edu pages.

Usage: python3 -I scripts/import_old_site.py <old-site>/<year> content/papers/<year>.json

<old-site> is a copy of the rlj.cs.umass.edu document root. Papers keep the
order of <year>issue.htm, PDF links point at rlj.cs.umass.edu, and pages are
taken from "pp. X-Y" when the page has them (null while they are TBD).
The issue's doi, isbn and PDFs are left null; fill them in by hand.
"""
import html
import json
import re
import sys
from pathlib import Path

year_dir = Path(sys.argv[1])
out = Path(sys.argv[2])
year = int(year_dir.name)
base = f"https://rlj.cs.umass.edu/{year}/papers"


def text(fragment):
    fragment = re.sub(r"<br\s*/?>", "\n", fragment)
    fragment = re.sub(r"<[^>]+>", "", fragment)
    return html.unescape(fragment).replace("\xa0", " ").strip()


def line(fragment):
    return re.sub(r"\s+", " ", text(fragment))


def one(pattern, src, what, path):
    m = re.search(pattern, src, re.S)
    if not m:
        sys.exit(f"{path}: no {what}")
    return m.group(1)


# 2026issue.html was replaced by a redirect stub; the original survives as .htm
issue_src = next(
    (src for ext in ("htm", "html")
     if (year_dir / f"{year}issue.{ext}").exists()
     and "papers/Paper" in (src := (year_dir / f"{year}issue.{ext}").read_text(encoding="utf-8"))),
    None,
)
if issue_src is None:
    sys.exit(f"{year_dir}: no {year}issue.htm(l) listing the papers")
issue_title = text(one(r"<h1[^>]*>(.*?)</h1>", issue_src, "issue title", "issue"))
order = []
for n in re.findall(r'href="papers/Paper(\d+)\.html"', issue_src):
    if int(n) not in order:
        order.append(int(n))

papers = []
for n in order:
    path = year_dir / "papers" / f"Paper{n}.html"
    src = path.read_text(encoding="utf-8")
    body = src.split('class="panel-body"', 1)[1]
    title = line(one(r"<h1[^>]*>(.*?)</h1>", body, "title", path))
    byline = one(r"<h3[^>]*>\s*By (.*?)</h3>", body, "authors", path)
    authors = [text(a) for a in re.findall(r"<i>(.*?)</i>", byline)]
    volume = int(one(r"Reinforcement Learning Journal, vol\. (\d+)", body, "volume", path))
    venue = line(one(r"<p>\s*((?:Will be p|P)resented at.*?)</p>", body, "venue", path))
    abstract = line(one(r"<b>Abstract:</b></h3>\s*<p>(.*?)</p>", body, "abstract", path))
    bibtex = text(one(r'<pre id="textToCopy"[^>]*>(.*?)</pre>', body, "bibtex", path))
    # URL-safe; some keys carry stray characters (2025 Paper152: "Ça\x1fatan...")
    slug = re.sub(r"[^A-Za-z0-9]+", "-", one(r"@article\{([^,]+),", bibtex, "bibtex key", path)).strip("-")
    pdf = one(r'href="([^"]+\.pdf)"', body, "pdf link", path)
    supp = re.search(r'href="([^"]+_supp\.zip)"', body)
    pages = re.search(r"pp\. (\d+[-–]\d+)", html.unescape(body))
    if not (year_dir / "papers" / pdf).exists():
        sys.exit(f"{path}: {pdf} missing from download")
    papers.append({
        "number": n,
        "title": title,
        "authors": authors,
        "volume": volume,
        "year": year,
        "pages": pages.group(1).replace("–", "-") if pages else None,
        "venue": venue,
        "pdfUrl": f"{base}/{pdf}",
        "suppUrl": f"{base}/{supp.group(1)}" if supp else None,
        "abstract": abstract,
        "bibtex": bibtex,
        "slug": slug,
    })

slugs = [p["slug"] for p in papers]
dupes = {s for s in slugs if slugs.count(s) > 1}
if dupes:
    sys.exit(f"duplicate slugs: {sorted(dupes)}")

issue = {"year": year, "title": issue_title}
# Missing page numbers mean these are still the pre-proceedings
if any(p["pages"] is None for p in papers):
    issue["note"] = f"Pre-proceedings for RLC {year}. Papers may still receive minor changes, and page numbers will be assigned in the final proceedings."
issue |= {
    "doi": None,
    "isbn": None,
    "issuePdf": None,
    "coverPagesPdf": None,
    "xmlUrl": None,
    "papers": papers,
}
out.write_text(json.dumps(issue, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
print(f"{len(papers)} papers -> {out}")
