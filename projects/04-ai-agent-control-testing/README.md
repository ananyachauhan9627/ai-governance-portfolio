# 04 · Auditing an AI Agent's Control Testing

**Status:** In progress. Method and evidence pack design complete; results to follow.

## Why

GRC teams are starting to use AI agents to review evidence and test controls. Before trusting an agent's conclusion that a control is "effective", a team needs to know how often, and in what ways, the agent is wrong. This project measures that the same way an auditor would test any new reviewer: against an answer key.

## Method

1. **Build an evidence pack.** Twelve controls drawn from ISO 27001 Annex A and SOC 2 (access reviews, change management, backups, vulnerability management, offboarding, logging), each with synthetic evidence: system exports, tickets, policy extracts. Several controls are designed to fail in subtle ways, for example an access review signed after the period ended, a change approved by its own requester, or a backup log with a silent gap.
2. **Write the answer key by hand** before running any agent: the conclusion (effective, ineffective, or insufficient evidence) and the specific evidence that supports it.
3. **Run the agent** with the same instructions a junior analyst would receive, three times per control to test consistency.
4. **Grade** each conclusion against the answer key.

## What gets measured

| Metric | Why it matters |
|---|---|
| Agreement with the answer key | Overall reliability |
| **False "effective" rate** | The most dangerous error: a failing control reported as passing |
| Unsupported citations | Evidence the agent refers to that is not in the pack |
| Consistency across runs | Whether the same evidence produces the same conclusion |
| Appropriate "insufficient evidence" | Whether the agent recognizes when it cannot conclude |

## Results

*To be completed.*

| Control | Answer key | Agent runs 1 / 2 / 3 | Correct? | Error type |
|---|---|---|---|---|
| | | | | |

## Governance output

The results will feed a short operating guideline: which control types an agent can pre-screen, which always need human review, and what a reviewer must check before accepting an agent's conclusion.
