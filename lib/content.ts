import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { marked } from "marked";

const CONTENT_DIR = join(process.cwd(), "content");

export type Paper = {
  number: number;
  slug: string;
  title: string;
  authors: string[];
  volume: number;
  year: number;
  pages: string | null;
  venue: string | null;
  pdfUrl: string;
  suppUrl: string | null;
  abstract: string;
  bibtex: string;
};

export type Issue = {
  year: number;
  title: string;
  doi: string;
  issuePdf: string;
  coverPagesPdf: string | null;
  papers: Paper[];
};

export type Volume = {
  number: number;
  year: number;
  papers: Paper[];
  issue: Issue;
};

export type BoardGroup = {
  role: string;
  members: { name: string; url?: string; affiliation: string }[];
};

let issuesCache: Issue[] | null = null;

export function getIssues(): Issue[] {
  if (!issuesCache) {
    const dir = join(CONTENT_DIR, "papers");
    issuesCache = readdirSync(dir)
      .filter((f) => f.endsWith(".json"))
      .map((f) => JSON.parse(readFileSync(join(dir, f), "utf8")) as Issue)
      .sort((a, b) => b.year - a.year);
  }
  return issuesCache;
}

export function getVolumes(): Volume[] {
  const volumes = new Map<number, Volume>();
  for (const issue of getIssues()) {
    for (const paper of issue.papers) {
      let volume = volumes.get(paper.volume);
      if (!volume) {
        volume = { number: paper.volume, year: paper.year, papers: [], issue };
        volumes.set(paper.volume, volume);
      }
      volume.papers.push(paper);
    }
  }
  return [...volumes.values()].sort((a, b) => b.number - a.number);
}

export function getVolume(number: number): Volume | undefined {
  return getVolumes().find((v) => v.number === number);
}

export function getAllPapers(): Paper[] {
  return getIssues().flatMap((issue) => issue.papers);
}

export function getPaper(slug: string): Paper | undefined {
  return getAllPapers().find((p) => p.slug === slug);
}

export function getBoard(): { intro: string; groups: BoardGroup[] } {
  return JSON.parse(readFileSync(join(CONTENT_DIR, "board.json"), "utf8"));
}

export function getPageHtml(name: string): string {
  const md = readFileSync(join(CONTENT_DIR, "pages", `${name}.md`), "utf8");
  return marked.parse(md, { async: false });
}

// "1:23−45, 2024." — volume:pages with a real minus sign, as on JMLR.
export function citation(paper: Paper): string {
  const pages = paper.pages ? `:${paper.pages.replace("-", "−")}` : "";
  return `${paper.volume}${pages}, ${paper.year}.`;
}
