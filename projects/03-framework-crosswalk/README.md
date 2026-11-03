# 03 · Framework Crosswalk: from ISO 27001 to AI Governance

**Question:** If an organization already runs an ISO 27001 information security management system (ISMS), how much of the work needed for AI governance is already done?

**Deliverable:** [`crosswalk.csv`](crosswalk.csv) maps 22 AI governance control objectives across ISO/IEC 27001:2022, ISO/IEC 42001:2023, NIST AI RMF 1.0 and the EU AI Act, and rates how much of each an existing ISMS already covers.

## Coverage ratings

| Rating | Meaning |
|---|---|
| **Reuse** | An existing ISO 27001 control covers it with a change of scope |
| **Extend** | An existing control is the right starting point but needs AI-specific additions |
| **New** | No meaningful ISO 27001 equivalent; must be built |

## Result

| Rating | Count | Share |
|---|---|---|
| Reuse | 3 | 14% |
| Extend | 15 | 68% |
| New | 4 | 18% |

**An organization with a mature ISMS is not starting from zero.** ISO/IEC 42001 shares the ISO management-system structure (clauses 4–10) with ISO 27001, so the machinery of governance carries over: policy approval, risk methodology, internal audit, management review, supplier management, logging and incident handling. Most of the work is extending controls the organization already operates.

## What is genuinely new

Three of the four new control objectives concern **the people affected by the system rather than the security of the system**:

- impact assessment on individuals and society (AI-06)
- bias and fairness evaluation (AI-08)
- human oversight of AI outputs (AI-13)

The fourth, training data quality and provenance (AI-07), is new because an ISMS protects data but never asks whether it is fit to learn from.

These are the areas where security-led teams most need privacy, ethics and domain expertise. Privacy programs (ISO 27701, GDPR DPIAs) are often a better starting point for them than the ISMS.

## Practical sequencing

1. Extend the asset inventory into an AI system inventory with purpose, risk tier and model provider (AI-03).
2. Extend supplier management with an AI supplement (AI-15; see [Project 01](../01-ai-vendor-risk-assessment/)).
3. Build the AI impact assessment by extending the existing DPIA rather than starting fresh (AI-06).
4. Then pursue ISO/IEC 42001 certification or EU AI Act conformity, as relevant.

## Limitations

This is a judgment-based mapping at the level of control intent, not an official crosswalk. Each cell points to the most relevant clause or control, not every related one. NIST publishes official crosswalks between the AI RMF and other frameworks on its AI Resource Center.
