import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.paperAuthor.deleteMany();
  await prisma.paper.deleteMany();
  await prisma.author.deleteMany();
  await prisma.volume.deleteMany();
  await prisma.boardMember.deleteMany();

  const volume1 = await prisma.volume.create({ data: { number: 1, year: 2024 } });
  const volume2 = await prisma.volume.create({ data: { number: 2, year: 2025 } });

  const papersData = [
    {
      volume: volume1,
      slug: "sample-value-based-exploration",
      title: "Sample Paper: Value-Based Exploration in Sparse-Reward Environments",
      abstract:
        "This is placeholder abstract text for seed data. It stands in for a real submission describing a method for improving exploration in sparse-reward reinforcement learning tasks via value-based intrinsic bonuses.",
      pdfUrl: "https://example.org/papers/sample-value-based-exploration.pdf",
      supplementaryUrl: null as string | null,
      pages: "1-28",
      publishedAt: new Date("2024-03-01"),
      keywords: ["exploration", "sparse reward", "value-based methods"],
      authors: ["A. Researcher", "B. Collaborator"],
    },
    {
      volume: volume1,
      slug: "sample-offline-rl-benchmarks",
      title: "Sample Paper: Benchmarking Offline Reinforcement Learning Algorithms",
      abstract:
        "Placeholder abstract for seed data describing a benchmark suite and empirical comparison of offline RL algorithms across continuous-control tasks.",
      pdfUrl: "https://example.org/papers/sample-offline-rl-benchmarks.pdf",
      supplementaryUrl: "https://example.org/papers/sample-offline-rl-benchmarks-supp.zip",
      pages: "29-61",
      publishedAt: new Date("2024-05-14"),
      keywords: ["offline reinforcement learning", "benchmarks", "continuous control"],
      authors: ["C. Datasets", "A. Researcher"],
    },
    {
      volume: volume1,
      slug: "sample-multi-agent-coordination",
      title: "Sample Paper: Emergent Coordination in Multi-Agent Reinforcement Learning",
      abstract:
        "Placeholder abstract for seed data studying how coordination strategies emerge among cooperative agents trained with independent policy gradients.",
      pdfUrl: "https://example.org/papers/sample-multi-agent-coordination.pdf",
      supplementaryUrl: null,
      pages: "62-90",
      publishedAt: new Date("2024-09-22"),
      keywords: ["multi-agent RL", "coordination", "policy gradient"],
      authors: ["D. Swarm", "E. Coordination", "B. Collaborator"],
    },
    {
      volume: volume2,
      slug: "sample-model-based-planning",
      title: "Sample Paper: Sample-Efficient Model-Based Planning with Learned World Models",
      abstract:
        "Placeholder abstract for seed data proposing a world-model learning objective that improves planning sample efficiency in high-dimensional control tasks.",
      pdfUrl: "https://example.org/papers/sample-model-based-planning.pdf",
      supplementaryUrl: null,
      pages: "1-33",
      publishedAt: new Date("2025-02-10"),
      keywords: ["model-based RL", "world models", "planning"],
      authors: ["F. Modeler", "A. Researcher"],
    },
    {
      volume: volume2,
      slug: "sample-reward-shaping-theory",
      title: "Sample Paper: A Theoretical Analysis of Potential-Based Reward Shaping",
      abstract:
        "Placeholder abstract for seed data providing convergence guarantees for a generalized class of potential-based reward shaping functions.",
      pdfUrl: "https://example.org/papers/sample-reward-shaping-theory.pdf",
      supplementaryUrl: null,
      pages: "34-59",
      publishedAt: new Date("2025-06-30"),
      keywords: ["reward shaping", "theory", "convergence"],
      authors: ["G. Theorist"],
    },
  ];

  const authorCache = new Map<string, { id: number }>();

  for (const p of papersData) {
    const paper = await prisma.paper.create({
      data: {
        slug: p.slug,
        title: p.title,
        abstract: p.abstract,
        pdfUrl: p.pdfUrl,
        supplementaryUrl: p.supplementaryUrl,
        pages: p.pages,
        publishedAt: p.publishedAt,
        keywords: p.keywords,
        volumeId: p.volume.id,
      },
    });

    for (let i = 0; i < p.authors.length; i++) {
      const name = p.authors[i];
      let author = authorCache.get(name);
      if (!author) {
        author = await prisma.author.create({ data: { name } });
        authorCache.set(name, author);
      }
      await prisma.paperAuthor.create({
        data: { paperId: paper.id, authorId: author.id, order: i },
      });
    }
  }

  await prisma.boardMember.createMany({
    data: [
      { name: "H. Editor-in-Chief", role: "Editor-in-Chief", affiliation: "Sample University", order: 0 },
      { name: "I. Action Editor", role: "Action Editor", affiliation: "Sample Institute", order: 0 },
      { name: "J. Action Editor", role: "Action Editor", affiliation: "Sample Lab", order: 1 },
      { name: "K. Action Editor", role: "Action Editor", affiliation: "Sample College", order: 2 },
    ],
  });

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
