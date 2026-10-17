# AI Foundations: evidence and source audit

**Checked:** 2026-10-15. **Scope:** first three lessons in `content/ai/foundations/`. A source audit is not a classroom efficacy evaluation or full systematic literature review.

## Source hierarchy

| Source | Kind | Appropriate use | Caution |
|---|---|---|---|
| Ben Swift (2025), [LLMs Unplugged: Understand AI by building it yourself](https://doi.org/10.5281/zenodo.17403824), ANU School of Cybernetics | Teaching resource (ANU research output, website-based; corrected 18 Oct 2026: earlier listed as a peer-reviewed ACM paper, a DOI that could not be found) | Supports a hands-on n-gram / weighted-sampling approach and reports workshop experience | Does not establish that our three-lesson sequence improves learning |
| [LLMs Unplugged resources](https://www.llmsunplugged.org/) | Open teaching materials, CC BY-SA 4.0 | Inspiration for pen-paper-dice modelling | Cite/attribute; verify reuse obligations before copying or adapting protected material. Our examples are newly authored |
| [UNESCO AI Competency Framework for Students](https://www.unesco.org/en/articles/ai-competency-framework-students) (2024) | International competency framework | Coverage check: human-centred mindset, ethics, techniques/applications, system design; Understand/Apply/Create | Not evidence that a particular activity is effective |
| [AI4K12](https://ai4k12.org/gradeband-progression-charts/) and [Touretzky et al. (2023)](https://doi.org/10.1007/s40593-022-00314-1) | K-12 guidance plus peer-reviewed article | Data, learning, representation and natural interaction; age-band planning | US framework; local curriculum mapping still needed |
| [Lodge & Loble (2026)](https://doi.org/10.71741/4pyxmbnjaq.31302475) | UTS research-informed synthesis/report | Distinguish beneficial offloading from outsourcing core learning | Conceptual synthesis, not an experimental validation of our lessons |
| [Leon Furze (2026), Resistance](https://leonfurze.com/2026/03/22/resistance-as-a-framework-for-combating-cognitive-offload/) | Practitioner/research-informed design framework | Expertise, evaluation, metacognition, stretch, feedback; intentional friction | Framework explicitly being tested; not settled causal evidence |
| [AI for Education educator resources](https://www.aiforeducation.io/educator-resources) | Practitioner guidance | Student-facing safe/ethical/effective AI use, tool-agnostic classroom approaches | Practical guidance, not peer-reviewed proof of outcomes |
| [Nakamura (2026)](https://doi.org/10.1007/s10648-026-10224-6) | Peer-reviewed review article | Heterogeneous outcomes of GenAI-supported learning and offloading | Review is about STEM learning broadly, not this exact activity |
| [Contractor & Reyes (2026)](https://www.iza.org/index.php/publications/dp/18792/experimental-evidence-on-the-learning-impact-of-generative-ai) | Experimental working paper | Nuance: AI can help learning, especially augmentation rather than replacement | Undergraduate context; working-paper status; do not generalise directly to younger pupils |

## Lesson-by-lesson audit

### 1. Can you predict the next word?
- **Grounded:** frequencies can inform a simple next-word probability model (Swift; AI4K12).
- **Pedagogical choice:** fixed-phrase counts before sampling is our sequence, not a published efficacy finding.
- **Accuracy check:** distinguish observed frequencies from a probability distribution *defined by* sampling proportional to those frequencies. Modern LLMs are not literal count tables.
- **Gap:** add an inspectable corpus/word-transition board later. Evaluate whether this introductory activity is too trivial for older learners.

### 2. Build a text generator with dice
- **Grounded:** manual weighted sampling is a valid transparent model and is central to Swift's LLMs Unplugged work (ANU School of Cybernetics).
- **Pedagogical choice:** six-sided dice, invented phrase and table are our own examples; do not claim they replicate ANU's original activity.
- **Accuracy check:** ten rolls can deviate considerably from expected frequencies; this is a feature to discuss.
- **Gap:** investigate an actual *multi-step* n-gram generator, not only one fixed phrase, to bridge toward text generation. Preserve model limitations.

### 3. Let the computer take over
- **Grounded:** Lodge & Loble distinguish useful offloading from bypassing intrinsic learning; Furze proposes deliberately retaining expertise, evaluation and metacognition.
- **Pedagogical choice:** manual → automated sampling → independent transfer is **our design hypothesis**. No cited source directly validates that exact progression.
- **Accuracy check:** the present task automates repeated random draws, not modern AI inference; distinguish ordinary automation from generative AI cognitive offloading. The lesson's framing currently risks treating these as equivalent.
- **Gap:** add a real AI-use decision later, with an independent check and reflection on which *learning objective* is at stake. Do not suggest offloading always damages learning.

## Important corrections before publishing

1. **Do not conflate a toy word-frequency model with modern LLMs.** Explain differences in training, tokenisation, context, neural representations and generation at an age-appropriate level.
2. **Do not conflate automation with AI.** Lesson 3 is a bridge into cognitive offloading, not itself evidence about AI use.
3. **Avoid overclaiming.** The exact three-lesson arc and the 5E balance are instructional design decisions to test, not research-established optimal sequences.
4. **Make the model inspectable.** The current lessons are text-and-check drafts; they lack the proposed live board and do not yet fulfil the interactive design goal.
5. **Use age-appropriate coverage checks.** Map outcomes to UNESCO and AI4K12 and to Australian curriculum requirements before course-wide expansion.
6. **Add source provenance consistently.** The three lessons now use existing frontmatter `sources:` (displayed in teacher guides and slide notes). Keep practitioner frameworks separate from peer-reviewed studies.
7. **Clarify licensing.** Cite Swift/ANU; do not reproduce CC BY-SA teaching resources without checking attribution and share-alike obligations.

## Coverage still needed in AI Foundations

The pilot teaches a narrow part of AI techniques. A fuller pathway must address limitations, training data, bias, privacy, safety, verification, human agency, environmental/social impact and when/how to seek AI assistance. This is an audit of **three initial lessons**, not a claim of full UNESCO/AI4K12 coverage.

## Decision

**Keep the three lessons as a research-informed prototype.** Next implement an inspectable word-transition simulation, strengthen the model-versus-LLM distinction, and revise the offloading lesson to include an authentic AI-use decision. Run classroom testing before claiming efficacy.
