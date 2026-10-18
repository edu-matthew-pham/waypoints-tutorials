---
title: Refine the AI rules
summary: "Refine the AI lines in each policy, and the map that holds them together, using what the committee learned. Find the balance between too vague and too prescribed, keep policies in step, and rewrite lines that rely on catching people or on what AI can't do yet."
language: science
shape: 5e
unit: policy
order: 11
voice: { name: af_heart, speed: 1.1 }
---
A term has passed at Westbrook. The committee now has evidence: a decision about StudyPal, responses to AI that arrived on its own, and reports from students and teachers. It refines the **AI lines inside each policy** and the **map** (lesson 4). **Version 2 gets more specific where the evidence says it should, and no more.**

There are four ways to get it wrong:

- **Too vague:** it can't decide a case. ("Use AI responsibly.")
- **Too prescribed:** it names every tool and every allowed use, goes out of date with each update, can't handle anything new, and leaves teachers no judgement.
- **Built on today's limits:** it relies on something AI can't do *yet*. AI keeps getting more capable, so those lines break.
- **Out of step:** two policies say different things about the same case, and nobody holding the map notices.

## Engage: "AI can't do maths"

```step
stage: predict
check:
  type: predict
  q: "Westbrook's assessment policy had an AI line: 'AI chatbots make mistakes with sums, so maths homework doesn't need AI rules.' A year later, the same app shows its working and runs a calculation to check every answer. What happens to that line?"
  options: ["Nothing: the rule still works", "It stops protecting anything: it was built on a limit that has gone", "Maths teachers should ban calculators too"]
  actual: "It stops protecting anything. Early chatbots often made arithmetic slips; many now run code or a calculator to check their answers. A line built on what AI couldn't do breaks when it learns to. Build lines on what you value (students do the thinking a task is for) instead."
```

## Explore: about right?

```step
stage: run
tasks:
  - check:
      type: sort
      q: "Draft AI lines for Westbrook's policies. Which problem does each one have, if any?"
      options: ["Too vague", "About right", "Too prescribed (move it)", "Relies on what AI can't do yet"]
      items:
        - ["'Use AI responsibly.'", "Too vague", "It can't decide any case."]
        - ["'Every task says how much AI is allowed, and students say what they used AI for.'", "About right", "Clear, works for any tool, and leaves the detail to the task."]
        - ["'Year 8 may use StudyPal version 4.2 in hint mode on Tuesdays and Thursdays for maths homework.'", "Too prescribed (move it)", "True this term, maybe. It belongs in a guideline that changes each term."]
        - ["'Teachers make the final judgement on marks and reports.'", "About right", "A principle turned into a rule, and it won't go out of date."]
        - ["'The approved tools are: (a list of 14 apps).'", "Too prescribed (move it)", "Keep an approved list, but outside the policy, so it can change without rewriting the policy."]
        - ["'AI should be used appropriately.'", "Too vague", "Appropriate to what? Say what decides it."]
        - ["'AI can't find real sources, so research tasks don't need AI rules.'", "Relies on what AI can't do yet", "Many AI tools now search and link sources. Say what the task is for instead."]
        - ["'Online quizzes are fine: AI can't fill them in for you.'", "Relies on what AI can't do yet", "Some AI can now open a quiz, answer it and press Submit. An online quiz alone isn't evidence."]
  - check:
      type: reasoning
      q: "Rewrite one of Westbrook's AI lines, using something the committee learned in Units 2 or 3. Say which policy it lives in, and which layer any detail goes in."
      placeholder: "Policy: … It said: … We learned: … It now says: … Detail goes in: …"
      models:
        - title: "A strong answer"
          text: "Policy: Privacy and data. It said: only use AI tools the school has checked. We learned: StudyPal trained on chats by default (lesson 6). It now says: tools that use student work must have training switched off by the school before use, and the committee keeps the checked list. Detail goes in: the approved tools guideline, updated each term."
        - title: "A different view that also works"
          text: "Policy: Academic integrity and assessment. It said: use AI as your teacher sets. We learned: the AI search answer did Year 7 research for them (lesson 9). It now says: research tasks ask for the sources used and notes in the student's own words. Detail goes in: each task's instructions."
      criteria: ["I named the policy, what changed and why (the evidence).", "The new line is specific enough to decide a case.", "Detail that will change goes in a guideline or the task, not the policy."]
      explain: "Version 2 is specific where the evidence says so, and pushes fast-changing detail to a layer that can keep up."
```

### About right?

Sort the draft lines.

### One line, version 2

Which policy, what changed, and where does the detail go?

## Explain: layers, the map, and what can't be policed

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Westbrook's integrity policy says 'No AI in assessed work.' Its AI statement says 'Every task says how much AI is allowed.' A teacher sets an assessed task that allows AI for planning. What should the committee do?"
      options: ["Fix one so they agree, and check the map for other places the same rule appears", "Nothing: teachers can pick whichever they like", "Delete the integrity policy"]
      answer: 0
      feedback: [null, "Students and teachers need one answer. Holding the map means catching this.", "The integrity policy owns assessed work; its AI line needs updating, not deleting."]
  - check:
      type: sort
      q: "Does each line rely on catching people, or work without it?"
      options: ["Relies on catching people", "Works without catching people"]
      items:
        - ["'Work will be checked with an AI detector; flagged work gets zero.'", "Relies on catching people", "Detectors are often wrong, and wrongly flag students writing in a second language most."]
        - ["'Research tasks ask for your sources and notes in your own words.'", "Works without catching people", "Task design makes the thinking visible."]
        - ["'Say what you used AI for; saying so is never in itself a reason for a lower mark.'", "Works without catching people", "It rewards honesty instead of hiding."]
        - ["'Any student suspected of using AI will be interviewed.'", "Relies on catching people", "Suspicion falls unevenly, and it can't reach home use."]
        - ["'Some writing is done in class, on paper, as part of the task.'", "Works without catching people", "Part of the evidence is seen being made."]
  - check: { type: reflect, text: "I can put detail in the right layer, keep policies in step, and rewrite a line that relies on catching people." }
```

Layers, each changing at its own speed:

1. **The AI statement** (thin): the principles, the map, who holds it, when it's reviewed.
2. **AI lines in each policy** (stable, reviewed with that policy): integrity, behaviour, privacy, inclusion, devices, staff conduct, each owned by that policy's owner.
3. **Guidelines** (updated each term): the approved tools list, settings, year-level expectations.
4. **Task instructions** (set by each teacher): how much AI this task allows, and what to say about it.

**Keep them in step.** Whoever holds the map checks that policies don't contradict each other, and **passes changes along**: one change in AI can touch several policies at once.

**Built for what's next.** AI keeps changing: tools that made arithmetic slips now check their work by running code, and some AI can now **act** (open a page, fill it in, press Submit, send a message). Test each line: **"What if AI could do this next year?"** If the line would break, rewrite it around what you value. AI that acts is one change to pass along: **a person sends, submits or changes anything on a school account** goes in the devices policy *and* staff conduct.

**Checkable, not policed.** A school mostly can't catch AI use: home use is invisible, and tools that claim to detect AI writing are unreliable. In 2023 one AI company withdrew its own detector because it was too often wrong, and a study found detectors flagged over half of a set of essays by second-language writers as AI. So version 2 works through **task design, honesty about use, and understanding why the thinking matters**, keeps enforcement for clear cases, and **checks that the policy works**.

### Out of step

Two policies disagree. What now?

### Catching or working?

Sort the lines.

### Explain it

Name the layers, why someone holds the map, why the rules don't rely on catching people, and how to test a line against what AI might do next.

## Elaborate: staff use, refined

```step
stage: modify
tier: typical
check:
  type: question
  q: "Teachers at Westbrook now use AI to draft feedback on student work. What should the staff code of conduct and the privacy policy add?"
  options: ["Teachers own all feedback, use only school-checked tools, and say when AI helped", "Ban staff from using AI", "Nothing: staff can decide for themselves"]
  answer: 0
  feedback: [null, "A ban can't be policed for staff either, and loses real time savings. Use the charter.", "Feedback is a decision about a student, and their work is their data: the charter applies."]
```

Staff use needs the same balance: specific enough to protect students (a person decides, our data stays ours), broad enough to cover tools that will change. Being honest goes both ways: if students say when they used AI, should teachers too?

## Elaborate: our school's map

```step
stage: make
tier: wider
check: { type: reflect, text: "I proposed changes to our school's real policies, each with its evidence, its principle, its owner and its layer." }
```

Take your school's map from lesson 4 and the policies it points to (your teacher may give you dated copies). Propose four changes:

- a line that is **too vague**;
- a detail that is **too prescribed**;
- a line that **relies on catching people**;
- two policies that **disagree**, or an outside rule not reflected.

For each: the evidence, the principle, and **who owns that policy**.

## Evaluate: the map, version 2

```step
stage: info
check:
  type: question
  q: "A year from now, a new kind of AI tool arrives. Which AI line will still work?"
  options: ["'Every task says how much AI is allowed, and students say what they used AI for.'", "'Year 8 may use StudyPal version 4.2 in hint mode.'", "'The approved tools are these 14 apps.'"]
  answer: 0
  feedback: [null, "That detail will already be out of date: it belongs in a guideline.", "The list will change; the policy shouldn't have to."]
```

On paper, write **the AI statement and map, version 2**: the course's fourth product.

| AI statement, version 2 | |
|---|---|
| Principles, held by, reviewed: | |
| Guidelines it points to: | |

| Policy | Its AI line | Owner | What changed, and why |
|---|---|---|---|
| Integrity and assessment | | | |
| Wellbeing and behaviour | | | |
| Privacy (incl. families) | | | |
| Inclusion | | | |
| Devices (incl. AI that acts) | | | |
| Staff conduct | | | |
| Outside rules | can't change | | |

You now have the committee's four products: a **charter**, a **recommendation**, a **response plan**, and an **AI statement with its map**. The charter decides; the rest follow from it, and every one is dated and reviewed.
