import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-xl font-bold mb-6">About</h1>
      <p className="mb-8 leading-relaxed">
        The <strong>Reinforcement Learning Journal</strong> (RLJ) publishes
        peer-reviewed research on reinforcement learning, broadly construed.
        The journal is open access: articles are freely available to read,
        and there are no fees for authors.
      </p>

      <h2 className="text-lg font-bold mb-2">Scope</h2>
      <p className="mb-8 leading-relaxed">
        RLJ welcomes theoretical, empirical, and applied contributions to
        reinforcement learning, including but not limited to value-based and
        policy-based methods, model-based RL, multi-agent RL, offline RL,
        exploration, representation learning for control, and RL theory.
      </p>

      <h2 className="text-lg font-bold mb-2">Editorial Process</h2>
      <p className="leading-relaxed">
        Submissions are reviewed by the editorial board and external
        reviewers under a rigorous, transparent review process. See{" "}
        <a href="/submit">Submissions</a> for details on how to submit a
        manuscript.
      </p>
    </div>
  );
}
