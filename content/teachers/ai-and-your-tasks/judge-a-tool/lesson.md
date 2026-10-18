---
title: Judge a tool
summary: "Someone in your faculty proposes an AI tool. A short route through the Choosing AI tools guide: what it's for, whether it helps learning, whether it's safe, and a small fair trial. Optional; about 20 minutes; no AI needed."
hook: "Every new tool restarts the argument unless you judge it the same way each time: what it's for, what it does to the thinking, and where the data goes."
language: science
shape: primer
unit: own-use
order: 6
optional: true
---
A colleague says: *"There's a new AI tool for our subject. Can we use it with Year 9?"* This lesson is a short route through the [Choosing AI tools](../../../choosing-ai-tools/) guide, which has the detail. Open it in a new tab.

## Think first

```step
stage: predict
insight: "A vendor's headline result is a claim about doing, not learning, until the evidence shows otherwise."
check:
  type: predict
  q: "The tool's website says: \"Students using it scored 30% higher on homework.\" What does that show about learning?"
  options: ["Very little on its own", "That it improves learning", "That it's worth a trial", "Nothing at all"]
  actual: "Very little on its own. Higher homework scores with the tool show students did better *with help*, not that they learned more: what matters is what they can do later without it. It may still be worth a trial, but the claim isn't the evidence."
```

## The idea

```step
stage: investigate
insight: "Three questions, in order, judge any tool: what it's for, whether it helps the thinking, and whether it's safe; then a small trial decides."
```

Judge a proposed tool with three questions, in this order. The guide has a section for each.

1. **What is it for?** The learning purpose, and the thinking it touches (lesson 1's question, for a tool). Would a well-prompted general tool the school already has do the same job? (Guide: *Start with the learning purpose*; *Compare against a well-prompted general LLM*.)
2. **Does it help learning, or just doing?** Does it give answers, or hints that keep the thinking with the student? What does its evidence measure: doing with help, or learning later? (Guide: *Three kinds of tools to evaluate*.)
3. **Can we trust it?** Where student work goes, what's switched on by default, the minimum age, who gains and who loses. (Guide: *Can we trust it?*)

Then **a small, fair trial**, with a question it answers, before anyone adopts it. (Guide: *Choose a small trial*; *Example trial questions*.) And the decision goes to whoever decides on tools at your school, against its AI principles: you recommend; the school decides.

## Check

```step
stage: practise
insight: "Sorting a pitch's claims by which question they answer shows what's still unknown."
check:
  type: sort
  q: "A vendor's pitch says each of these. Which question does it bear on?"
  options: ["What is it for?", "Helps learning?", "Can we trust it?"]
  items:
    - ["\"Gives step-by-step hints instead of full answers\"", "Helps learning?", "Hints can keep the thinking with the student; check what happens when they ask again."]
    - ["\"Students using it scored 30% higher on homework\"", "Helps learning?", "Doing with help; ask what students could do later without it."]
    - ["\"For students 13 and over\"", "Can we trust it?", "An age limit: does it fit your year levels, and what consent does it need?"]
    - ["\"Student work may be used to improve our models\"", "Can we trust it?", "Where student data goes, and whether it can be switched off."]
    - ["\"Built for Year 9 science revision\"", "What is it for?", "A purpose to compare with your task and with tools you already have."]
    - ["\"Teachers see every student's chat\"", "Can we trust it?", "Students' privacy, and what they'd need to be told."]
```

## Apply

```step
stage: make
insight: "Writing three questions and a trial for a real proposal is the habit that stops each new tool restarting the argument."
tasks:
  - check:
      type: reasoning
      q: "For a tool proposed in your faculty (or one you've heard of), write what you'd need to know for each question, and one trial question."
      placeholder: "For: … Helps learning? … Trust: … Trial question: …"
      models:
        - title: "A revision chatbot"
          text: "For: Year 9 science revision; would our approved general tool do it? Helps learning? Does it hint or answer? What do students do without it a week later? Trust: where chats go, default settings, age limit, cost for families. Trial: one class for three weeks; compare a short unseen quiz with a class revising as usual."
      criteria:
        - "I've asked what it's for, and compared it with what we already have."
        - "I've asked whether it helps learning or just doing."
        - "I've asked where student data goes and who it affects."
        - "My trial question could be answered by a small trial."
  - check: { type: reflect, text: "I know who decides on tools at my school, and I'd send a recommendation there rather than adopt a tool myself." }
```

### Three questions and a trial

Use the guide's sections for each question.

### Who decides

Recommend; don't adopt on your own.

```teacher
summary: "An optional route through Choosing AI tools: teachers judge a proposed tool with three questions (what it's for, whether it helps learning, whether it can be trusted), sort a vendor's claims, and write a trial question."
time: 20
timing: "Think first 2 min · The idea 6 min · Check 4 min · Apply 8 min"
goals:
  - "I can judge a proposed AI tool by its purpose, its effect on learning and its data."
  - "I can tell a claim about doing with help from evidence of learning."
  - "I can write a question a small trial could answer."
before: |
  **For a facilitator.** Optional: run it when a tool proposal is live in your faculty (it's more useful with a real one), as the second half of the lesson 5 session or on its own. Have *Choosing AI tools* open; this lesson routes through it and doesn't repeat it.

  The committee version of this is *AI at our school*, unit 2 (Should we use this tool?), where students and staff judge a made-up tool in depth. This lesson is the quick version for a teacher who's been asked.

  Be clear about who decides at your school: teachers recommend, and the school's process (often the AI committee, ICT and privacy) decides.
running:
  - "Think first: lock in. Ask what evidence *would* show learning."
  - "The idea: walk through the guide's sections on screen."
  - "Check: individual."
  - "Apply: pairs, on a real proposal if there is one."
struggle: "Teachers judge the tool on how impressive the demo is. Bring it back to what it's for and what it does to the thinking."
stuck:
  - see: "Nobody has a tool in mind."
    ask: "What's a tool you've seen advertised, or that students mention?"
    fix: "Use the revision chatbot model, or the made-up StudyPal from AI at our school."
  - see: "A teacher can't find the tool's privacy terms."
    ask: "Is that itself a finding?"
    fix: "Yes: record it. A tool that won't say where student data goes isn't ready for a trial."
stretch: "Write the recommendation you'd send: adopt, trial, change something first, or don't use it, with conditions and what would change your mind."
support: "Do the Check together, then use the model's structure for their own tool."
leads: "For the full committee process, *AI at our school* (unit 2) and *Choosing AI tools*."
exit:
  q: "What three questions would you ask about any proposed AI tool, and in what order?"
  a: "What is it for (and would what we have do it)? Does it help learning or just doing? Can we trust it with students' data? Then a small, fair trial."
```
