# 01 · AI Vendor Risk Assessment

**Scenario:** Northwind Logistics (fictional) wants to deploy Orrery Talent (fictional), a SaaS tool that summarizes video interviews and ranks job candidates, for hiring across its US and EU operations.

**In this folder**
- [`ai-vendor-questionnaire.csv`](ai-vendor-questionnaire.csv): a 32-question AI supplement. Each question is mapped to ISO 27001:2022, ISO/IEC 42001 and NIST AI RMF, with the reason it matters and the evidence to request.
- [`sample-assessment-orrery-talent.md`](sample-assessment-orrery-talent.md): the completed assessment, findings, remediation plan and contract clauses.

## The problem

Standard vendor questionnaires (SIG, CAIQ) were built for a world where the vendor stores and processes your data. They ask about encryption, access control, data centres and business continuity. They do not ask:

- whether your data is used to train a model that serves other customers,
- which upstream model provider the vendor depends on, and what happens when that model changes,
- whether outputs were tested for bias on a population like yours,
- which decisions the product makes without a human in the loop.

In the sample assessment, Orrery Talent holds a clean SOC 2 Type II report and an ISO 27001 certificate, and would pass a traditional review. The AI supplement surfaces five high or critical findings that review would have missed.

## Approach

### 1. Tier before you assess

Sending 32 AI questions to every vendor that has added a chatbot wastes everyone's time. Inherent risk is triaged first on five factors, each scored 1 (low) to 3 (high):

| Factor | 1 | 2 | 3 |
|---|---|---|---|
| Data sensitivity | Public or internal | Confidential business data | Personal, health or financial data |
| Decision impact | Productivity aid only | Informs internal business decisions | Informs decisions about people (hiring, credit, care) |
| Autonomy | Suggestions a human must act on | Human approves AI-drafted actions | AI acts or decides without review |
| Integration depth | Standalone, no data connection | Read access to our systems | Write access or agentic tool use |
| Regulatory exposure | None identified | Sector rules apply (e.g. HIPAA) | High-risk use under the EU AI Act or similar |

| Total | Tier | Assessment depth |
|---|---|---|
| 5–7 | Low | 8 core questions (tagged `L`), self-attested |
| 8–11 | Medium | Full questionnaire, evidence sampled |
| 12–15 | High | Full questionnaire, all evidence reviewed, AI contract clauses, annual reassessment |

### 2. Assess AI-specific controls

The questionnaire supplements the existing security assessment rather than replacing it. It covers eight domains:

| Domain | Focus |
|---|---|
| A. Governance & accountability | AI policy, ownership, inventory, regulatory self-assessment |
| B. Data use & training | Training on customer data, retention, provenance, representativeness |
| C. Model supply chain | Upstream model providers as fourth parties, version pinning, concentration risk |
| D. Evaluation & bias | Accuracy metrics, disparate impact testing, independent review |
| E. AI security | Prompt injection, agent permissions, red-teaming, cross-tenant leakage |
| F. Transparency & oversight | Instructions for use, automated actions, explainability, AI disclosure |
| G. Change & monitoring | Drift monitoring, model release process, rollback, decision logging |
| H. Incidents & contract | AI incident response, notification, no-training and deployer-support clauses |

### 3. Score

Each response is rated **0** (not in place), **1** (partially in place, or policy without evidence) or **2** (implemented, with evidence). Domain and overall scores are a percentage of the maximum.

| Control score | Rating |
|---|---|
| ≥ 75% | Strong |
| 50–74% | Moderate |
| < 50% | Weak |

| Inherent tier \ Controls | Strong | Moderate | Weak |
|---|---|---|---|
| **High** | Medium | High | High |
| **Medium** | Low | Medium | High |
| **Low** | Low | Low | Medium |

High residual risk requires a remediation plan and risk-owner sign-off before production use.

## Design choices

- **Fourth parties get their own domain.** Most AI products are built on someone else's model, so a change by the upstream provider is a change to the vendor's product.
- **Evidence over attestation.** For high-tier vendors, a "yes" without evidence scores 1, not 2.
- **Questions explain themselves.** Every question states why it matters, so vendors give better answers and reviewers know when to push back.
- **Contract is a control.** Several findings can only be fully closed through contract language.
- **Pure security controls stay in the ISMS.** Where ISO/IEC 42001 has no specific control (marked `— (ISMS)`), the question relies on the organization's ISO 27001 controls.
