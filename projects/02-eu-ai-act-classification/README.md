# 02 · EU AI Act Classification Memo

*Fictional scenario continuing from [Project 01](../01-ai-vendor-risk-assessment/). Reflects Regulation (EU) 2024/1689 (the AI Act) as amended by the Digital Omnibus on AI, in force since 27 July 2026. Not legal advice.*

---

**To:** Northwind Logistics AI Governance Committee
**From:** Ananya Chauhan, AI Risk & Compliance
**Date:** October 2026
**Re:** EU AI Act classification of Orrery Talent

## Bottom line

1. **Orrery Talent's candidate ranking is a high-risk AI system** under Annex III, point 4(a) (recruitment and selection). Because it ranks candidates, it profiles natural persons, so the Article 6(3) exemption is not available.
2. **Northwind is a deployer; Orrery is the provider.** Northwind would take on provider obligations if it rebrands the system, substantially modifies it, or uses it beyond its intended purpose (Art. 25).
3. **The "engagement signals" add-on is prohibited** for this use. It infers emotion from candidates' faces and voices in a recruitment setting (Art. 5(1)(f)). This prohibition has applied since 2 February 2025, and the add-on must not be used.
4. **High-risk obligations apply from 2 December 2027**, deferred from 2 August 2026 by the Digital Omnibus. The deferral is time to prepare, not a reason to wait: contracts signed now will still govern the system when the obligations apply.

## Analysis

### Step 1 · Is it an AI system?
Yes. The ranking model infers from candidate inputs (résumés, interview transcripts) how to generate outputs (scores, rankings, summaries) that influence decisions, with a degree of autonomy (Art. 3(1)).

### Step 2 · Is Northwind in scope?
Yes. Northwind's German and Dutch subsidiaries are deployers established in the EU (Art. 2(1)(b)). The US parent is also in scope wherever the system's outputs are used in the EU (Art. 2(1)(c)).

### Step 3 · Prohibited practices (Art. 5)

| Feature | Assessment |
|---|---|
| Candidate ranking | Not prohibited |
| Interview summarization | Not prohibited |
| Engagement signals: "enthusiasm" and "confidence" scores from facial expression and vocal tone | **Prohibited.** Emotion recognition in the workplace. The Commission's guidelines on prohibited practices treat the recruitment process as part of the workplace context, and the medical and safety exceptions do not apply. |

### Step 4 · High-risk classification (Art. 6, Annex III)
Annex III point 4(a) covers AI systems intended for the recruitment or selection of natural persons, in particular to analyse and filter applications and to evaluate candidates. Candidate ranking falls squarely within it.

Article 6(3) lets an Annex III system escape high-risk status if it does not pose a significant risk, for example because it performs only a narrow procedural or preparatory task. It does not apply here, for two reasons. The ranking materially influences who advances. And **an Annex III system that profiles natural persons is always high-risk**; ranking candidates on their personal characteristics is profiling.

The interview summarization feature, considered alone, has a stronger argument for being preparatory. But it ships as part of the same system and its summaries feed the ranking, so the system is treated as high-risk as a whole. If Orrery claims otherwise for any component, Article 6(4) requires it to document that assessment, and Northwind should request it.

### Step 5 · Roles

| Role | Party | Basis |
|---|---|---|
| Provider | Orrery Talent | Develops the system and places it on the market under its own name |
| Deployer | Northwind (EU subsidiaries, and the US parent for EU roles) | Uses the system under its authority |
| General-purpose AI model provider | Orrery's upstream model provider | Supplies the model behind summarization; GPAI obligations have applied since 2 August 2025 |

**What would make Northwind a provider (Art. 25):** putting Northwind's name or trademark on the tool; modifying it substantially, for example by fine-tuning it on Northwind data; or using it outside Orrery's stated intended purpose, such as for internal promotions or performance evaluation (separately high-risk under Annex III point 4(b)).

### Step 6 · Obligations

**Northwind as deployer (Art. 26)**

| Obligation | Article | What it means for Northwind |
|---|---|---|
| Use in line with instructions for use | 26(1) | Obtain Orrery's instructions and configure within them |
| Human oversight by competent staff | 26(2) | Named recruiters with the training and authority to override rankings |
| Relevant, representative input data | 26(4) | To the extent Northwind controls inputs, such as job criteria |
| Monitor and report | 26(5) | Monitor operation; suspend use and inform Orrery and authorities of serious risks or incidents |
| Keep logs for at least six months | 26(6) | Retain logs under Northwind's control |
| Inform workers' representatives | 26(7) | Works councils in Germany and the Netherlands, before deployment |
| Inform affected individuals | 26(11) | Tell candidates that a high-risk AI system is used in decisions about them |
| Right to explanation | 86 | Be able to explain the role the system played in a rejection |

A fundamental rights impact assessment (Art. 27) is not legally required: Northwind is not a public body, does not provide public services, and is not using the system for credit or insurance decisions. **I recommend a voluntary, lightweight version anyway**, run together with the GDPR data protection impact assessment Northwind needs regardless. Article 26(9) lets the provider's documentation feed directly into the DPIA.

**What to require from Orrery as provider**

Evidence of a risk management system (Art. 9); data governance and bias examination (Art. 10); technical documentation (Art. 11, Annex IV); logging capability (Art. 12); instructions for use (Art. 13); human oversight by design (Art. 14); accuracy, robustness and cybersecurity (Art. 15); a quality management system (Art. 17); conformity assessment and EU declaration of conformity (Arts. 43, 47); CE marking (Art. 48); EU database registration (Art. 49); post-market monitoring (Art. 72); and serious incident reporting (Art. 73).

### Step 7 · Timeline

| Date | Milestone | Relevance to Northwind |
|---|---|---|
| 2 Feb 2025 | Prohibited practices apply | Engagement signals add-on must be excluded now |
| 2 Aug 2025 | General-purpose AI model obligations apply | Applies to Orrery's upstream model provider |
| 27 Jul 2026 | Digital Omnibus on AI enters into force | Defers high-risk dates |
| 2 Dec 2027 | Annex III high-risk obligations apply | Full provider and deployer obligations |

## Recommendations

| # | Action | When |
|---|---|---|
| 1 | Exclude the engagement signals add-on from the order form, globally | Now |
| 2 | Add the Project 01 contract clauses to the MSA, including deployer support | Before signature |
| 3 | Disable auto-reject; assign trained recruiters as oversight owners | Before pilot |
| 4 | Consult works councils in Germany and the Netherlands | Before EU deployment |
| 5 | Run the DPIA with a voluntary fundamental-rights section; prepare candidate notices | Before EU deployment |
| 6 | Review Orrery's conformity documentation | By Q3 2027 |

## Beyond the EU

US hiring may separately trigger state and local rules on automated employment decision tools, such as New York City Local Law 144 (bias audits and candidate notice). These should be assessed with counsel for each hiring location.
