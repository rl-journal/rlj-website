# Desk Rejection Criteria and Process

## Desk Rejection Principles

The purpose of desk rejection is to save time. Engaged reviewers are a precious
resource, so we do not want to send them papers that could have been rejected with a
quick glance. We also want to provide authors with decisions and feedback as fast as
possible. The main principle of desk rejection is to reject the paper if there are
glaring issues that can be determined with a **5-minute skim**. You want to be very
certain in your assessment.

| Issue category | Example indicators | Recommended action |
| --- | --- | --- |
| Typographical & formatting errors | Template violation, typos, margin issues | Desk reject (immediate resubmission allowed) |
| Major errors | Unsupported claims (e.g., insufficient seeds, missing essential baselines, vacuous theory) | Desk reject (6-month wait) |

Remember, our job is to review papers as they are submitted, not some future improved
version of the paper. Review the paper as is.

There are two basic types of desk rejects.

*Type 1 - typographical:* These include violations of the RLJ template (changing
margins and font sizes), text spilling into the margins, messy reference sections,
low-resolution or unreadable figures, and multiple typos and formatting errors. Papers
must be polished before being sent to reviewers. For this type of desk rejection,
authors can fix these polish issues and resubmit right away.

*Type 2 - major errors:* In this case, the authors will be required to wait six
months before resubmitting.

## Major Categories of Errors

1. *Missing related work* — either entire categories (e.g., the paper is about
   temporal abstraction and never cites work on options) or a baseline that you know to
   be essential.
2. *Vacuous theoretical statements.*
3. *Overclaiming and insufficient empirical evidence* (e.g., claiming SOTA
   exploration based on experiments in cartpole with overlapping confidence intervals
   and 3 seeds).

There could be, of course, other categories, and we expect Editors (and
Editors-in-Chief) to use their judgment.

## Desk Rejection Note

The other critical concern is the rejection note. It does not need to be a full review,
but it should clearly explain the major issues identified and provide at least one
example of each. In addition, each rejection note should explain why we desk reject in
general:

> "RLJ is focused on reviewing polished work and respecting the reviewers' and authors'
> time. Desk rejection acts as a protective measure: it prevents authors from spending
> time on a paper destined for rejection, and it shields reviewers from evaluating work
> that is not yet ready for review."

### Template for a desk rejection note

- *Purpose* — Why desk reject? To save time and ensure efficiency.
- *Primary issue(s)* — Bullet points of 1–2 major issues.
- *Specific examples* — Concrete instances for each issue.
- *Path forward* — Fix and resubmit, versus wait 6 months.

### Hypothetical exemplar desk rejection note

> RLJ prioritizes the evaluation of refined submissions while valuing the time of both
> reviewers and authors. Desk rejection serves to protect authors from dedicating effort
> to a manuscript bound for rejection, while simultaneously shielding reviewers from
> assessing work that is not yet prepared for formal evaluation.
>
> **Primary issue(s):**
>
> - *Evidence/claim mismatch:* The submitted results do not substantiate the claims
>   regarding the new algorithm's performance in POMDP corridor environments or Atari.
> - *Missing literature:* Critical related work regarding Policy Gradients with
>   Parameter Based Exploration (PGPE) was omitted.
>
> **Specific examples:**
>
> - *Experimental setup:* The corridor experiment inappropriately held the PPO
>   hyperparameters across baselines and lacked clear hyperparameter reporting,
>   suggesting the comparisons were unfair.
> - *Statistical validity:* Using only 3–5 seeds with min-max error bars is insufficient
>   for the stated performance claims. More rigorous methods, such as bootstrap
>   confidence intervals and aggregating Atari results via IQM, are required.
> - *Missing literature:* The proposed approach in Section 4 appears to have substantial
>   overlap with Sehnke's Super-Symmetric Sampling (Sehnke, 2013).
>
> **Path forward:** Major revision required. Please address these substantive
> experimental and literature gaps and resubmit after the mandatory 6-month waiting
> period.
