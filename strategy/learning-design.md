# Learning design: inquiry, explicit instruction and cognitive offloading

**Status:** strategic principle recorded; platform-wide application remains speculative. This is a design note, not a requirement to rewrite existing lessons.

## Strategic principle

Inquiry and explicit instruction are **complementary**, not competing teaching modes. A useful lesson provides something meaningful to investigate **and** the explanations, modelling, guided practice and feedback needed to understand it. The amount and timing of guidance depend on the objective and the learner's prior knowledge.

The **5E** framework (Engage, Explore, Explain, Elaborate, Evaluate) offers a coherent way to sequence these elements:
- Engage: pose a meaningful problem and surface prior ideas.
- Explore: structured investigation, with appropriate scaffolding rather than mandatory unguided discovery.
- Explain: formalise ideas, including direct explanation and worked modelling.
- Elaborate: guided-to-independent practice, transfer and further inquiry.
- Evaluate: independently demonstrate understanding and receive feedback.

5E **enables** a balance; it does not guarantee one. Explicit instruction can occur across phases, not only Explain.

## Proposed applications

- **Science:** existing 5E approach.
- **Digital Systems:** consider 5E as the default because the central aim is often to explain invisible mechanisms. Binary representation illustrates the distinction: understanding why switches can encode numbers is the conceptual objective; conversion procedures are useful within Explain/Elaborate.
- **AI Foundations:** consider 5E as the default, especially for inspectable models and simulations.
- **Maths, Code, Engineering:** retain current subject-specific sequences while testing whether the same principles are already present. Do not equate a different lesson shape with a lack of inquiry or explicit instruction.

This connects with the idea of **minimal, content-rich teaching materials**: the core lesson should make the knowledge and learning sequence clear; teachers can adapt the degree of explicit modelling, questioning, guided practice and open inquiry. Avoid prescribing one classroom performance from the content structure alone.

## Offloading as a design consideration

Delegation of work predates AI (calculators, spreadsheets, search, writing and automation). For a learning activity, ask:
1. **Execution:** which routine operations does the tool perform?
2. **Thinking:** which processing or problem-solving does it perform?
3. **Judgement:** who evaluates evidence, correctness, suitability and completion?

These are overlapping responsibilities, **not** a rigid taxonomy or automatic good/bad categories. Beneficial or detrimental offloading depends on the intended learning, prior expertise, and whether students retain the thinking needed for later independent performance. Distinguish learning mode from performance mode.

The gym/spotter analogy can introduce this distinction, but has limits: not all effort is educationally productive, and scaffolding may be necessary to make learning possible.

## Where guidance sits: tutorial and class layer (18 Oct 2026)

Agreed in discussion with Matthew (details in the Project doc `create-generic-proposal`, "Lesson shape"):

- **The tutorial leans explicit.** It is self-paced, so no teacher is there to rescue unproductive struggle: guidance is always within reach (hints, "? Explain", worked examples, feedback). Predict and Run are still small, safe inquiries (commit, try, then be told why).
- **The class plan and slides carry the mix.** Inquiry: the `inquiry` question, discussion activities, open exploration before the tutorial. Explicit: worked-example slides with steps held back, live modelling, mini-whiteboard checks. The teacher sets the balance for the class; the tutorial underneath does not change.
- **One template to adapt, not a fixed optimum.** Three settings, each a default with its reason shown: sequence (the shared stages, with subject presets as names on them), guidance (explicit or inquiry per stage; default from Kit's pace profile: Consolidating explicit first, Steady guided exploration then explain, Advancing inquiry first) and width (from the node's Kit response modes, as a list).
- Possible later: one class-plan line saying which way it leans and why, so the deck orders inquiry slides before or after the worked example.

## Open questions / speculative

- Should 5E become a common default for investigative subjects, or remain one of several equally supported lesson shapes?
- Would a shared stage vocabulary improve authoring and teacher adaptation, or obscure subject-specific pedagogy? Proposed answer (18 Oct): yes as the core (the stages already are shared), with subject names kept on top as presets.
- Can optional explicit-teaching and inquiry layers be generated from a strong content base without distorting the original lesson?
- What evidence from actual classroom trials would justify changing Digital Systems' existing Maths-shaped lessons?

**Do not migrate Digital Systems lessons or change site-wide stage rules solely on the basis of this note.** Pilot and compare first.

Related: `roadmap/learning-with-ai.md`, `roadmap/systems.md`, `content/approach.md`.
