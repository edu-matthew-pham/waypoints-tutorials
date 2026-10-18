---
title: Set the AI level and say it clearly
summary: "Choose how much AI your redesigned task allows, then write the card students read: what the task is for, what AI may and may not do, what to acknowledge, and that owning up isn't the offence. Outside rules come first for assessed work. About 25 minutes; no AI needed."
hook: "\"Use AI appropriately\" means something different to every student who reads it. A card that names the thinking and the limits means the same thing to all of them."
language: science
shape: primer
unit: tasks
order: 4
---
Your task now has a redesigned part (lesson 3). This lesson decides **how much AI the task allows** and writes it down in plain words for students: the **task instructions**, the layer of a school's AI rules that each teacher sets.

## Think first

```step
stage: predict
insight: "Vague instructions push the decision onto students, who then guess, and the honest ones guess most cautiously."
check:
  type: predict
  q: "A task sheet says: \"You may use AI tools appropriately.\" What will most students do?"
  options: ["Guess, each differently", "Ask the teacher what it means", "Use no AI, to be safe", "Use AI for everything"]
  actual: "Mostly guess, each differently. A few ask, a few avoid AI to be safe, and a few use it for everything. \"Appropriately\" hands the decision to students without the information to make it, and the most honest students tend to guess most cautiously."
```

## The idea

```step
stage: investigate
insight: "The level is the teacher's design decision; the card turns it into plain words a student can act on and acknowledge honestly."
```

**First, choose the level.** If your school has its own AI scale, use it. Otherwise, these generic levels:

- **No AI:** the work is done where you can see it.
- **AI for ideas:** AI may help plan or brainstorm; the work itself is the student's.
- **AI for feedback:** the student writes it; AI may comment on a draft, and the student decides what to change.
- **AI throughout, acknowledged:** AI may help with any part; the student says how, and is judged on their decisions.

A level describes **a kind of task**, not a permission: a label on an unchanged task does little, and only **No AI** can be made to hold, by doing the work where you can see it. That's why the redesign came first. Parts of one task can have different levels.

**Then write the card students read.** Plain words; naming the level is optional.

1. **What this task is for:** the thinking, in one sentence.
2. **AI may:** what it can help with.
3. **AI may not:** the parts that are the student's.
4. **Say what you used:** what to acknowledge, and how.
5. **Owning up isn't the offence:** saying so never in itself lowers the mark; skipping the thinking can.

**Outside rules come first** for assessed work (the IB's academic integrity policy and AI guidance; the BSSS for ACT senior students). If you can't tell what a rule means for your task, ask whoever holds the school's AI map.

## Worked example

```step
stage: investigate
insight: "A good card is short, names the thinking, and makes honest acknowledgement easy."
check:
  type: question
  q: "Which line should the design folio's card say about acknowledging AI?"
  options:
    - "\"If AI helped with your research or ideas, add a note to that page: what you asked it and what you kept. Saying so never in itself lowers your mark.\""
    - "\"Any use of AI must be declared. Undeclared use is academic misconduct.\""
    - "\"Don't use AI.\""
    - "\"Use AI responsibly and cite it where appropriate.\""
  answer: 0
  feedback:
    - null
    - "True in many schools, but it leads with the penalty and doesn't say how to declare. Students hide what feels risky."
    - "That doesn't match the level chosen (AI for ideas), and it can't be seen at home."
    - "\"Responsibly\" and \"where appropriate\" leave the student guessing."
  explain: "It says what, where and how to acknowledge, and makes owning up safe. The integrity policy still applies to anyone who hides use; the card doesn't need to lead with it."
```

The design folio's card:

> **Phone stand folio: AI instructions**
> **This task is for:** making design decisions from what a real user needs, and judging your design honestly.
> **AI may:** help you research phone stands and brainstorm ideas (AI for ideas).
> **AI may not:** decide what your user needs, or write your evaluation. Those come from your own test with your user, in class.
> **Say what you used:** if AI helped, add a note on that page: what you asked it and what you kept.
> **Saying so never in itself lowers your mark.** An evaluation that doesn't come from your own test will.

## Check

```step
stage: practise
insight: "Matching cards to tasks shows that the right card follows from what the task is for and what has been redesigned."
tasks:
  - check:
      type: match
      q: "Match each redesigned task to the card line that fits it."
      pairs:
        - ["Maths: two problems done in class, the rest at home", "In class: no AI. At home: you may check your answers with AI after you've tried; note any you changed."]
        - ["Essay: thesis and objection written in class, draft at home", "AI may give feedback on your draft; you decide what to change and say what you used it for."]
        - ["History: cartoon annotated in class, judgement at home", "AI may give you background on 1916; the annotation and your judgement of usefulness are yours."]
        - ["Science: plan approved and results recorded in class, write-up at home", "AI may comment on your write-up; your explanation of the results must match what you told your teacher."]
      explain: "Each card names what AI may do in the part done at home, and leaves the redesigned, visible part as the student's."
  - check:
      type: question
      q: "A Year 11 teacher's card allows AI throughout a task that counts towards an outside-assessed course, but that course's rules restrict AI for this kind of work. What should happen?"
      options: ["Change the card: outside rules come first for assessed work", "Keep the card: teachers set task instructions", "Let students choose which rule to follow"]
      answer: 0
      feedback: [null, "Teachers set task instructions inside the school's and the outside body's rules, not against them.", "Students need one answer, and it has to be the one that counts for their result."]
      explain: "Outside rules (the IB, the BSSS) sit above school rules for assessed work. If the card and the outside rule disagree, the card changes."
```

### Match the cards

Each task was redesigned in lesson 3's Check. Which card line fits?

### Outside rules

When a card and an outside rule disagree.

## Apply

```step
stage: make
insight: "Writing the card for their own task is the deliverable teachers take straight back to their class."
tasks:
  - check:
      type: reasoning
      q: "Write the AI card for your task: what it's for, AI may, AI may not, say what you used, and owning up isn't the offence."
      placeholder: "This task is for: … AI may: … AI may not: … Say what you used: … Saying so never in itself lowers your mark."
      models:
        - title: "English (the example essay)"
          text: "This task is for: building an argument and answering the strongest objection, in your own voice. AI may: give feedback on your draft at home (AI for feedback). AI may not: write any of your paragraphs; your thesis and objection are written in class. Say what you used: one sentence at the end, e.g. 'I asked AI whether my second reason was convincing and added an example.' Saying so never in itself lowers your mark."
        - title: "Maths (the example problem set)"
          text: "This task is for: choosing a method and carrying it out, so you can do the next one alone. AI may: check your answers after you've tried each one at home. AI may not: solve them for you; two problems are done in class. Say what you used: tick the problems you checked with AI and circle any you changed. Saying so never in itself lowers your mark."
      criteria:
        - "It names the thinking the task is for."
        - "It says what AI may and may not do, matching my redesign."
        - "It says what to acknowledge and how, and that owning up isn't the offence."
        - "It fits any outside rules for this task."
  - check: { type: reflect, text: "I'll give students this card with the task, and talk it through when I set it." }
```

### Write your card

Use the five parts. Keep it to what fits on half a page.

### Use it

Give it out with the task, and read it with the class when you set it. Students will ask questions the card didn't answer: add them next time.

```teacher
summary: "Teachers choose an AI level for their redesigned task (their school's scale, or generic levels), then write the student-facing card: what it's for, AI may, AI may not, what to acknowledge, and that owning up isn't the offence, inside any outside rules."
time: 25
timing: "Think first 2 min · The idea and worked example 8 min · Check 5 min · Apply 10 min"
goals:
  - "I can choose an AI level that fits what a task is for and how it has been redesigned."
  - "I can write task instructions that tell students clearly what AI may and may not do."
  - "I can make acknowledging AI use safe and easy, inside the rules that apply."
before: |
  **For a facilitator.** The second half of the lesson 3 and 4 meeting (lesson 3's notes). Bring copies of your school's AI scale if it has one, and of any year-level expectations from the termly guidelines; teachers should use those words, not the generic levels.

  **Levels are a design lens, not a rule for students.** The authors of the most widely used published scale (the AI Assessment Scale, now version 2.1; checked 19 Oct 2026) describe it as a design tool for educators: each level is a kind of task, not a degree of permission, and student instructions needn't name the level. Their 2025 paper warns that relabelling an unchanged task changes little. That's why the course redesigns first and writes the card second.

  **Outside rules (re-check before teaching):**
  - **BSSS** (ACT senior secondary): its Teacher Guide on AI and academic integrity (2023) treats unattributed or disallowed AI use in assessment as a breach, leaves acceptable use to the teacher for each task, has students declare permitted use, warns against relying solely on AI detectors, and suggests controls such as drafts, validation tasks and in-class checkpoints.
  - **IB** (Academic integrity policy, Appendix 6 on AI tools, added March 2023; read 19 Oct 2026 from Matthew's copy): the IB won't ban AI and doesn't rely on detectors, which aren't reliable enough to be the only evidence of misconduct. Work produced by AI, even in part, isn't the student's own: AI text, images or graphs a student uses must be credited **in the body (quotation marks, the prompt and the date) and in the bibliography**. So on an IB-assessed task, the card's "say what you used" line means that citation, not just a sentence. Authentication rests on process (the teacher saw the work develop, the student can explain it, referencing is clear, quality fits the student), which is lesson 3. Consequences are the school's decision under its own integrity policy. **Language acquisition** is an exception: language and translation tools aren't permitted. Access and inclusion software is handled under the IB's access and inclusion policy, not as AI use.

  **Know-how gaps for the committee.** When a teacher can't tell what a school rule means for their task, write it down. In *AI at our school* lesson 10, the committee sorts these: if the person who knows the rule best can't apply it either, the rule needs fixing; if they can, it's know-how, and this course is the fix.
running:
  - "Think first: lock in. Ask what 'appropriately' would have meant to them at 15."
  - "The idea: if the school has a scale, put it up instead of the generic levels. Stress that the level follows the redesign."
  - "Worked example: compare option 2 (leads with the penalty) with option 1. Which would a nervous student follow?"
  - "Check: individual. The outside-rules question matters most for senior and IB staff."
  - "Apply: individual, then pairs read each other's card as a student would. What would they still ask?"
struggle: "Teachers write the card as a rule list or a warning. Ask: would a student know exactly what to do, and would they feel safe saying they used AI? Let them rewrite it."
stuck:
  - see: "A card says 'No AI' for work done at home."
    ask: "How will that hold, if you can't see it?"
    fix: "Move the No-AI part into class, or choose a level that fits work done at home and say what to acknowledge."
  - see: "A teacher isn't sure what the school or outside rule allows for this task."
    ask: "Does the person who knows that rule best know the answer?"
    fix: "If not, it's a rule problem: note it for the committee. Meanwhile, choose the more cautious reading and say so on the card."
  - see: "The card is a page long."
    ask: "What does a student need to know to start?"
    fix: "Cut to the five parts; put examples in the conversation when you set the task."
stretch: "Write the card for the same task at a year level two years older. What changes, and why?"
support: "Start from the design folio card and change each line for their task."
leads: "Lesson 5 (Your own use) turns to teachers' own use of AI for planning, feedback and reports. Collect cards and any unanswered rule questions for the AI committee."
exit:
  q: "What are the five parts of a task's AI card?"
  a: "What the task is for; what AI may do; what it may not; what to acknowledge and how; and that owning up is never in itself a reason for a lower mark."
sources:
  - { title: "BSSS Teacher Guide: AI and Academic Integrity (2023)", url: "https://www.bsss.act.edu.au/__data/assets/pdf_file/0003/571719/BSSS_Teacher_Guide_AI_and_Academic_Integrity.pdf", checked: 2026-10-19 }
  - { title: "IB Academic integrity policy (updated March 2023; Appendix 6, Guidance on the use of artificial intelligence tools)", url: "https://ibo.org/globalassets/new-structure/programmes/shared-resources/pdfs/academic-integrity-policy-en.pdf", checked: 2026-10-19 }
  - { title: "IB: Artificial intelligence (AI) tools, common questions and concerns", url: "https://www.ibo.org/globalassets/new-structure/programmes/shared-resources/pdfs/artificial-intelligence-questions-and-concerns-en.pdf", checked: 2026-10-19 }
  - { title: "The AI Assessment Scale (version 2.1)", url: "https://aiassessmentscale.com/", checked: 2026-10-19 }
  - { title: "Perkins, Roe and Furze (2025), Reimagining the AI Assessment Scale, JUTLP 22(7)", url: "https://doi.org/10.53761/rrm4y757", checked: 2026-10-19 }
```
