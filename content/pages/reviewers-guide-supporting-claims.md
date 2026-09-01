# Supporting Claims

Having well-supported claims is a central requirement for publishing in RLJ, and
assessing support for those claims is a major part of the review process. Each claim in
the paper needs supporting evidence to establish its validity. For small statements,
this could be as simple as a citation, but for most claims, there should be primary
evidence (mathematical statements, proofs, well-designed experiments, etc.) indicating
that the claim is most likely true and that there are no other obvious plausible
explanations. It is the job of the Editor, the Technical Reviewers, *and* the Senior
Reviewers to assess the validity of the provided support.

Note that it is the aim of RLJ to hold research to the highest standards of scientific
rigor, far above the current standards of most AI/ML venues. At many venues, reviewers
assess "Is this a *good* paper, providing an interesting idea that should be shared with
the community?" Such decisions inherently involve tastemaking, biasing the work that is
published towards the standard work in a community and the topics reviewers themselves
find interesting. From its creation, the goal of RLJ and RLC has been to significantly
reduce this tastemaking, replacing it with a significantly higher bar for scientific
rigor. **An outstanding paper with a brilliant and clear idea and impressive empirical
results should be rejected from RLJ if it makes even minor mistakes in terms of
scientific practice — mistakes that undermine the ability of the paper to sufficiently
support the claims that it makes.**

## Assessing Support

To assess the support, you need to first understand the claim, its context, its
assumptions (explicit or implicit), and then examine the evidence provided for it. There
are many forms of evidence, but the most common are theoretical evidence, such as
mathematical derivations or proofs, and empirical evidence from experiments.

Assessing theoretical results requires checking the math for correctness and making sure
the claim does not draw conclusions beyond the scope of the result.

When assessing empirical results, recognize that results are often stochastic, and
incorrect conclusions can be drawn by chance. As a reviewer you need to check the
experiment, figure out what research question or hypothesis the experiment is trying to
answer, identify the (potentially hidden) assumptions in the experiment that limit the
scope of conclusions that can be drawn, check the statistical analysis of the results
and assess if they are appropriate, then reflect back on the claim to see if it is
properly scoped to the evidence provided by the experiment. A well-written paper should
make most of these clear.

## Revisions and Rejection

To help Editors calibrate decision-making (and to provide insight for reviewers into the
importance of explaining whether contributions are supported), we provide a few examples
of insufficient support that should result in revisions or rejection. Note that failure
to support a claim should typically result in **rejection, not revisions**. This
highlights the commitment to scientific excellence of RLJ.

The following should result in the paper receiving a decision of **Revisions** at best:

- A single sentence in the paper makes a claim of certainty (e.g., "Our method
  outperforms Baseline X on domain Y."), but this is only supported by appropriately
  conducted experiments (with appropriate optimization of hyperparameters and
  statistical analysis of uncertainty). Such experiments would support a claim that "Our
  experiments support the conclusion that our method outperforms Baseline X on domain
  Y," or "We provide evidence that our method outperforms Baseline X on domain Y." This
  is *not* a minor wording issue to be fixed after the paper is accepted. This fix must
  be implemented and reviewed by the Editor prior to actual acceptance.
- The paper reports the number of trials (seeds) used in experiments only in the
  supplementary materials, even though this value is critical to establishing that the
  experiment supports a claim.

The following should result in the paper receiving a decision of **Rejection**:

- The paper fails to quantify uncertainty in experimental results. Typically this
  happens when papers omit error bars, or fail to report what error bars encode.
- The paper does not describe how hyperparameters of methods are selected, and this
  could impact the message the experiments purport to show (e.g., this is *not* a problem
  if the experiments are intended to show that there *exists* a case where an event can
  occur).
- The paper claims that it presents a method with a theoretical property, but the proof
  relies on additional assumptions or alterations to the method that are not
  acknowledged in nor reasonably implied by the claim.

While this may seem overly strict in comparison to the current standard in ML and AI
research, it is a primary goal of RLJ to raise the bar for scientific rigor. Whereas
other venues may encourage authors to over-claim in order to pass subjective evaluations
of the importance of the work, RLJ explicitly aims to encourage authors to carefully
scope their claims to reflect the actual contributions of their work.
