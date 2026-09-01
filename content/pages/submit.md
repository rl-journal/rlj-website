# RLJ Submission Guide

The RLJ peer review process prioritizes rigorous methodology over perceived importance, aiming to foster scholarly discussions on both well-established and emerging topics in RL.

## Scope

We invite submissions presenting original research of interest to the reinforcement
learning community. For example, research on topics including, but not limited to:

- **RL algorithms** (e.g., new algorithms for existing settings and new settings,
  including agentic systems)
- **Hierarchical RL** (e.g., skill discovery, hierarchical representations and
  abstractions)
- **Exploration** (e.g., intrinsic motivation, curiosity-driven learning,
  exploration–exploitation tradeoff)
- **Theoretical RL** (e.g., complexity results, convergence analysis)
- **Social and economic aspects** (e.g., safety, fairness, interpretability, privacy,
  trustworthiness, human-AI interaction)
- **Bandit algorithms** (e.g., theoretical contributions, practical algorithms)
- **Planning algorithms** (e.g., decision-making under uncertainty, model-based
  approaches)
- **Foundations** (e.g., showing relationships between methods, formalizations,
  unifying theory, clarifying misconceptions in the literature)
- **Evaluation** (e.g., methodology, meta-studies, replicability, and validity)
- **Benchmarks** (e.g., specific RL challenges, real-world applications)
- **Applied RL** (e.g., medical, operations, traffic)
- **Deep RL** (e.g., analysis of the interplay between RL and deep learning models)
- **Multi-agent RL** (e.g., cooperative, competitive, self-play)
- **RL from human feedback** (e.g., reward learning from human data, human-in-the-loop
  learning)
- **Imitation learning** (e.g., learning from demonstrations, apprenticeship learning,
  inverse RL)
- **Neuroscience, cognitive science, and philosophical work** targeting a computational
  RL audience

We also welcome interdisciplinary or multidisciplinary research that does not neatly
fit into existing categories but which has an RL audience. If you have any questions,
please reach out to <strong style="color:red">TODO: scope enquiries email address</strong>.

## Content

Submissions must be concise, complete, and polished. Manuscripts should be carefully
proofread and written with clarity and precision. Authors planning to submit to RLJ
should consult the [RLJ Reviewers Guide](/reviewers-guide), which describes expectations for
presentation quality and common issues that may hinder evaluation.

Note that these instructions call for the rejection of work with even minor errors in
the scientific process that prevent reviewers from properly assessing the paper's
claims (e.g., omitting the number of trials, using phrases that result in
over-claiming), even if these errors could be corrected by changing a few words.
Furthermore, rejection typically comes with a 6-month restriction from resubmitting.
We therefore strongly encourage you to carefully read the instructions for reviewers to
ensure that you are familiar with how your work will be evaluated. Submissions that do
not meet these standards may be returned without review. The
[Review Process](#review-process) section below summarizes what to expect.

## Originality

Authors should not submit papers that are substantially similar to versions that have
been published, accepted for publication, or submitted in parallel to other conferences
or journals. Any such submissions may be rejected or retracted after publication.
Authors may submit substantially similar versions to workshops and may publish
substantially similar versions on arXiv. Notably, dual submission with RLDM is
explicitly allowed.

## Preprints

Authors may publish substantially similar versions on arXiv.

## Disclosure of Funding

Authors must disclose all sources of funding and any relationships or interests that
could reasonably be perceived as supporting or influencing the reported work. This
disclosure is not solely intended to ensure that publications are attributed to the
appropriate funding organizations; it is also an important part of maintaining
transparency for readers and enabling them to evaluate the work in its full context.

Accordingly, authors should report all grants, contracts, fellowships, gifts, or other
financial support that contributed to the research, as well as any competing interests,
including additional sources of income or financial relationships related to the
subject of the manuscript. Disclosures should cover support received or interests held
within the **18 months preceding submission**.

## Submission Procedure

RLJ accepts submissions via OpenReview: <strong style="color:red">TODO: OpenReview submission URL</strong>.

Submissions must be typeset in LaTeX using the RLJ style files. Only PDF files may be
submitted. Papers that do not use the RLJ style files or do not comply with the
formatting instructions will be rejected without review.

Page limits, the cover page requirement, supplementary material, and the style files
themselves are all covered in the [Authors Guide](/authors-guide).

## Review Process

The review process for RLJ is **double-blind**. As such, authors are responsible for
ensuring that their submissions do not contain any identifying information. This
applies to any materials linked from the submission, such as code. Papers violating
this double-blind policy may be rejected without further review.

The RLJ peer review process prioritizes rigorous methodology over subjective perceived
importance, aiming to foster scholarly discussions on both well-established and
emerging topics in RL.

We use OpenReview for the review process. However, reviews and papers that are rejected
or withdrawn will not be made public.

This section summarizes how your submission will be handled. The
[RLJ Reviewers Guide](/reviewers-guide) is the authoritative version, and it is public
precisely so that authors can read it. We strongly encourage you to do so before
submitting.

### Who reviews your paper

Every submission is evaluated by at least two reviewers, supervised by an **Editor**.
The two reviewers play deliberately different roles, and this differs notably from the
typical NeurIPS/ICLR/ICML process:

- A **[Technical Reviewer](/reviewers-guide/technical-reviewers)** produces what is essentially a
  list of technical errors in the paper. There is no commentary on novelty,
  significance, or impact. This is not an oversight; it is intentional.
- A **[Senior Reviewer](/reviewers-guide/senior-reviewers)** writes the type of review authors
  traditionally expect, focused on whether claims are matched by evidence — which
  includes technical correctness — and on how the work is situated in the literature.

Both are asked to work through your cover page contribution by contribution, stating
for each one what evidence was offered and whether it was sufficient.

### Timeline

The stated duration of each step is a goal, not a guarantee. If a stage runs long, the
Editor is expected to leave a comment in OpenReview with an updated timeline.

| Stage | Target |
| --- | --- |
| Editors-in-Chief desk reject or assign an Editor | 1 week |
| Editor desk rejects or assigns a Senior and a Technical Reviewer | 2 weeks |
| Reviewers write their reviews | 3 weeks |
| Editor writes the meta-review and drafts the decision | 1 week |
| Editors-in-Chief approve the decision | 1 week |

When the reviewing pipeline is over capacity, we prioritize the timely review of initial
submissions.

### Decisions

- **Accept** — The paper is accepted in its current form and only minor changes are
  required, to the point that no response to the Editor is needed.
- **Revisions** — The Editor provides a list of questions or proposed changes. Authors
  are encouraged to respond within 3 months.
- **Reject** — Authors are not allowed to resubmit similar versions of the paper for
  **6 months**, unless otherwise specified in the notice of rejection.

Note that a failure to support a claim typically results in **rejection, not revisions**.
Because rejection carries a 6-month wait while revisions allow immediate resubmission,
this distinction matters a great deal — see [Supporting Claims](/reviewers-guide/supporting-claims).

### If your paper receives Revisions

You are encouraged to resubmit within 3 months. The meta-review will state what needs to
be addressed. Your resubmission should come with a **letter to the Editor** discussing
the primary concerns raised and how your changes address them. You may disagree with a
concern, and that disagreement should still be discussed in the letter even if you chose
not to change the manuscript.

The Editor may then accept or reject the paper immediately, consult the previous
reviewers, or initiate an entirely new review. Barring extenuating circumstances,
resubmitted papers are either accepted or rejected — they are not returned for further
revisions.

### Desk rejection

Papers may be desk rejected by the Editors-in-Chief or by the assigned Editor, on the
basis of issues identifiable in a short skim. There are two kinds, and the difference to
you is substantial:

| Type | Examples | Consequence |
| --- | --- | --- |
| Typographical and formatting | Template violations, text spilling into margins, messy references, unreadable figures, multiple typos | Fix and **resubmit immediately** |
| Major errors | Missing essential related work or baselines, vacuous theoretical statements, overclaiming with insufficient empirical evidence | **6-month wait** before resubmitting |

See [Desk Rejection Criteria and Process](/editors-guide/desk-rejection) for the full criteria.

### How papers are evaluated

Acceptance is based **only on the submission**, not on the potential of the paper with
further edits. A paper that requires even minor changes may be desk rejected or returned
for revisions. The five acceptance criteria reviewers apply are set out in
[How Papers are Evaluated](/reviewers-guide#how-papers-are-evaluated).

Two consequences are worth stating plainly for authors. First, **presentation alone can
sink a paper**: if a submission needs a nontrivial editing pass, restructuring, notation
cleanup, figure redesign, or reference cleanup, it receives revisions at best. Second,
**RLJ deliberately avoids tastemaking**: acceptance is not based on perceived impact, and
clearly scoped incremental work should be accepted. Reviewers are explicitly instructed
not to argue that your environments are too simple, that your method is not state of the
art, that your method is too simple, or that you should have compared against work
published in the last six months.

## Use of Large Language Models (LLMs)

The use of LLMs and other writing tools is allowed in preparing submissions. However, 1) 
all listed authors should correspond to humans, and 2) the authors are responsible
for ensuring that the content of the paper is correct and original. The authors are
responsible for ensuring that plagiarized text does not occur, even if the LLM is the
source.

Note that senior reviewers are instructed to verify that all cited papers exist, that
the listed authors are correct, and that publication venues are accurately reported —
generative AI tools can introduce citation errors and fabricated references.

## Publication

All papers are published open access under the Creative Commons Attribution (CC BY)
license. Copyright remains with the authors, who are free to share the final version of
their work.

Accepted papers require a final version prepared with the `[accept]` option in the style
files, together with a signed publication agreement — see
[Preparing the Final Version](/authors-guide#preparing-the-final-version).

## Publication Fees

This journal does not charge publication fees, and all articles are freely accessible
to readers.
