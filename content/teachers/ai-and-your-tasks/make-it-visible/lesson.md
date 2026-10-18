---
title: Make the thinking visible
summary: "Most AI use can't be caught, and detectors are unreliable. Redesign the at-risk parts of your task so the thinking shows: drafts, checkpoints, a short piece in class, an explanation in the student's own words. About 25 minutes; no AI needed."
hook: "You can't see what happens at home. You can see a plan approved in class, a draft that changed, and a student explaining their result in two minutes."
language: science
shape: primer
unit: tasks
order: 3
---
Lesson 2 found the parts of your task that are the thinking *and* that AI could finish alone. This lesson redesigns them: not by trying to catch AI use, but by **making the thinking visible**.

## Think first

```step
stage: predict
insight: "Detectors' errors fall hardest on second-language writers, which turns a policing tool into a fairness problem."
check:
  type: predict
  q: "A teacher runs every essay through an AI-writing detector and investigates anything it flags. Who is most likely to be wrongly flagged?"
  options: ["Students who write in a second language", "Students who used AI heavily", "Students with very neat, correct writing", "Nobody: detectors are accurate"]
  actual: "Students writing in a second language. In a 2023 study, detectors flagged over half of 91 essays by second-language writers as AI-written, though people wrote them all. The same year, one AI company withdrew its own detector because it was too often wrong. A flag is not evidence."
```

## The idea

```step
stage: investigate
insight: "Process evidence shows the thinking whatever AI can do, works without catching anyone, and is fairer than detection."
```

**Check, don't police.** A school can't see home use, and AI-writing detectors are unreliable, wrongly flagging second-language writers most. A task that relies on catching people will mostly catch the wrong ones. Instead, design the task so the **thinking shows** as it happens.

Ways to make thinking visible:

- **Checkpoints in class:** a plan, a thesis, a method approved before the student goes on.
- **Drafts and versions:** what changed, and why (a short note beside each).
- **A short piece in class:** one paragraph, one problem, one annotation, on paper or a locked-down device.
- **An explanation in the student's own words:** two minutes, "Talk me through why you…", to you or a partner.
- **Sources and notes:** what they read, what they took from it, in their words.
- **The student's own data or user:** measurements taken in class, a real person they tested with.

Choose **one or two** that show the thinking you named in lesson 1. Three tests for a redesign:

1. **Does it show the thinking** the task is for, not just effort?
2. **Does it work without catching anyone?** No detector, no suspicion.
3. **Does it add as little work** as it can, for you and for students? Often it replaces something.

Keep enforcement for clear cases (a student who can't explain any of their own work). That conversation is about the learning, not the tool.

## Worked example

```step
stage: investigate
insight: "One checkpoint and one short explanation can cover the whole thinking of a report, with less marking, not more."
check:
  type: question
  q: "The science report's at-risk parts are the plan and the explanation of results. Which redesign shows that thinking best, for the least extra work?"
  options:
    - "Plans are approved in class before the practical; then each student explains one result to you in two minutes while others write up"
    - "Every report goes through an AI detector"
    - "Students also write a 500-word reflection on their process"
    - "Reports are handwritten instead of typed"
  answer: 0
  feedback:
    - null
    - "Unreliable, and it wrongly flags second-language writers most. It shows nothing about the thinking."
    - "AI writes reflections too, and it's more marking for everyone."
    - "AI text can be copied out by hand: it slows students down without showing the thinking."
  explain: "The approved plan shows the planning; two minutes of \"why did this one work better?\" shows the explaining. The write-up can then allow AI for feedback, acknowledged."
```

The science report, redesigned:

| Part | Before | After |
|---|---|---|
| Plan a fair test | In the report, at home | Approved in class before the practical |
| Results | In the report | Recorded in class, in the student's book |
| Explain the results | In the report, at home | Two minutes, aloud, to the teacher; then written up |
| The write-up | At home | At home, AI for feedback allowed and acknowledged |

The report still exists. The thinking now shows in two places you can see.

## Check

```step
stage: practise
insight: "Sorting redesigns by the three tests separates designs that show thinking from ones that police or just add load."
check:
  type: sort
  q: "Sort these redesigns."
  options: ["Makes the thinking visible", "Relies on catching people", "Just adds work"]
  items:
    - ["Essay: students write their thesis and two reasons in class before drafting at home", "Makes the thinking visible", "The argument's core is made where you can see it."]
    - ["Essay: any essay that sounds unlike the student's usual writing is investigated", "Relies on catching people", "Suspicion falls unevenly, and style changes as students improve."]
    - ["Maths: two of the ten problems are done in class, and students explain one method to a partner", "Makes the thinking visible", "The method shows, in front of you."]
    - ["Maths: students must show every step on every problem", "Just adds work", "AI shows steps too; it's longer without showing more."]
    - ["History: students annotate the cartoon in class, then write the judgement at home", "Makes the thinking visible", "Origin and content are worked out where you can see them."]
    - ["History: work is checked with an AI detector", "Relies on catching people", "Unreliable, and unfair to second-language writers."]
    - ["Design: the folio records each test with the real user, with a photo and what they did", "Makes the thinking visible", "Evidence AI can't supply, from the student's own test."]
    - ["Design: the folio doubles in length, with a written justification of every page", "Just adds work", "More writing, which AI can do, without more evidence."]
```

## Apply

```step
stage: make
insight: "Redesigning one at-risk part, checked against the three tests, is the change teachers take back to their class."
check:
  type: reasoning
  q: "Redesign one at-risk part of your task (from lesson 2). Say what changes, and how it passes the three tests."
  placeholder: "Part: … Before: … After: … Shows the thinking because … No catching because … Work: …"
  models:
    - title: "English (the example essay)"
      text: "Part: answering the strongest objection. Before: in the essay, at home. After: in class, students swap theses and write the strongest objection to their partner's; each answers theirs in a paragraph, on paper. Shows the thinking: the counter-argument is made live. No catching: nothing to check. Work: one lesson, and it replaces a homework draft."
    - title: "Design (the example folio)"
      text: "Part: the evaluation. Before: written at home against the criteria. After: students test the prototype with a younger student in class, photograph it and note what happened; the evaluation must use those notes. Shows the thinking: judgement from real evidence. No catching: the evidence is theirs. Work: one lesson's testing."
  criteria:
    - "It shows the thinking my task is for, not just effort."
    - "It works without a detector or suspicion."
    - "It adds as little work as it can, or replaces something."
```

Keep this beside your sort. Lesson 4 writes what students will read about AI for this task.

```teacher
summary: "Teachers see why detection fails (unreliable, unfair to second-language writers), learn ways to make thinking visible, sort redesigns by three tests, and redesign one at-risk part of their own task."
time: 25
timing: "Think first 3 min · The idea and worked example 8 min · Check 4 min · Apply 10 min"
goals:
  - "I can explain why detection is a poor basis for AI rules."
  - "I can choose a way to make the thinking in a task visible."
  - "I can redesign part of my task so it shows the thinking without catching anyone or adding needless work."
before: |
  **For a facilitator.** A second 50-minute meeting covers lessons 3 and 4: 5 min recap (each person reads out the thinking sentence from lesson 1 and one at-risk part from lesson 2); 20 min this lesson; 20 min lesson 4; 5 min pairs read each other's student card from lesson 4.

  Teachers need their notes from lessons 1 and 2. Anyone who missed them can do lesson 1's Apply in five minutes first, and use the capability list in lesson 2 as their test.

  The detector evidence (sources below) is old by AI standards, but newer detectors haven't solved the core problem: a flag is a probability, and its errors fall unevenly. Don't let the session become a debate about which detector is best; the point is that the redesign doesn't need one.

  **Workload** is the objection that matters most. Push for redesigns that replace something (a homework draft, a test) rather than add to it. The three tests include it on purpose.
running:
  - "Think first: lock in, then reveal. Let the second-language finding land; it often changes the room."
  - "The idea: go through the list and ask which people already do. Most do some; the point is choosing them for the thinking, not as surveillance."
  - "Worked example: compare the reflection option with the two-minute explanation. Why does one show thinking and the other not?"
  - "Check: individual, then discuss 'show every step': it looks rigorous and isn't."
  - "Apply: individual; pairs check each other's redesign against the three tests."
struggle: "Teachers reach for one more thing to check (longer, handwritten, more steps). Ask: does it show the thinking, or just make faking slower? Let them find the replacement themselves."
stuck:
  - see: "A redesign moves the whole task into class."
    ask: "Which part is the thinking? Does all of it need to be seen?"
    fix: "Move only the at-risk thinking into class; the rest can stay at home, with AI where it fits."
  - see: "A teacher worries the two-minute explanation won't scale to 28 students."
    ask: "Could students explain to each other, with you listening in on a few?"
    fix: "Partner explanations with a short prompt card; the teacher samples, and talks to anyone who couldn't."
  - see: "A teacher asks what to do when they're sure a student used AI against the rules."
    ask: "Can the student explain their own work?"
    fix: "That conversation is about the learning. The school's integrity policy decides the rest; point to it, and to lesson 4's student card."
stretch: "Redesign a second at-risk part, or the same part for a different year level."
support: "Start from the table in the worked example and the redesign closest to their subject in the Check."
leads: "Lesson 4 (Set the AI level and say it clearly) writes the task instructions students read: how much AI, what to acknowledge, and that owning up isn't the offence."
exit:
  q: "Why make thinking visible rather than try to detect AI use?"
  a: "Detection is unreliable and wrongly flags second-language writers most, and home use can't be seen; process evidence shows the thinking whatever AI can do."
sources:
  - { title: "OpenAI: New AI classifier for indicating AI-written text (withdrawn 20 July 2023 for low accuracy)", url: "https://openai.com/index/new-ai-classifier-for-indicating-ai-written-text", checked: 2026-10-18 }
  - { title: "Liang et al. (2023), GPT detectors are biased against non-native English writers", url: "https://arxiv.org/abs/2304.02819", checked: 2026-10-18 }
```
