---
title: Make your first primer
summary: "Start from a curriculum waypoint, let Create fill in the frame, write the opening question yourself, then see the lesson as a student would. About 20 minutes; no AI or code needed."
hook: "A lesson you make in Create works like every lesson on this site: students commit to an answer before they're told, and every check answers back."
language: science
shape: primer
unit: make
order: 1
---
In about 20 minutes you'll make a short lesson of your own: a **primer**, one idea taught in four short steps (*Think first*, *The idea*, *Check*, *Apply*). You don't need an AI tool or any code. This lesson is a primer too, so you'll see the shape from the inside.

You'll work in two tabs: this one, and **Create**, where you make the lesson.

## Think first

```step
stage: predict
insight: "The starter is a frame, not a lesson: the curriculum gives the goals, and the teacher writes what students meet first."
check:
  type: predict
  q: "Create will open a lesson starter filled in from a curriculum waypoint. Which part do you think you'll still write yourself?"
  options: ["The goals", "The title", "The question students answer first", "Nothing: it arrives as a finished lesson"]
  actual: "The question students answer first, and the introduction. Create fills in the title, the goals (from the waypoint's success criteria) and an Apply step to adapt; every other step says what belongs there. The part students meet first is yours."
```

Lock in a guess. You'll find out in a few minutes.

## Try: start from a waypoint

```step
stage: run
insight: "Every waypoint on the curriculum pages can start a lesson, with its success criteria already turned into goals."
check: { type: reflect, text: "Create is open in another tab, with a lesson called Origin and content." }
```

1. Open [the curriculum page for one waypoint](../../../teach/curriculum/history/AC9HH7S03/n1/) in a new tab: right-click it and choose *Open link in new tab*, so this lesson stays open here. It's Year 7 History: telling a source's **origin** (who made it, when and where) from its **content** (what it shows).
2. Read its **Checkpoint** and **Success criteria**. That's what your lesson is for.
3. Press **Make a primer for this**. Create opens with a primer already started.

In Create, the dark box on the left is the lesson's text (`lesson.md`); the right side is a preview that updates as you type. You only ever change words; the lines with `---`, `stage:` and backticks hold the lesson together, so leave them alone.

Not a History teacher? Follow it anyway: the steps are the same in any subject, and the next lesson starts from a topic you teach.

## Apply: make it yours

```step
stage: make
insight: "Writing the opening question forces the key design choice: which mix-up should a wrong answer reveal?"
tasks:
  - insight: "The introduction speaks to students, not teachers."
    check: { type: reflect, text: "The preview shows my introduction, written for my students." }
  - insight: "A good Think first question can be answered before teaching, and a wrong answer shows the mix-up."
    check:
      type: reasoning
      q: "Copy your Think first question and its options here."
      placeholder: "My question … Options: …"
      models:
        - title: "One teacher's question"
          text: "A photograph shows soldiers marching through a city. Who made this source? Options: The soldiers / Whoever took the photograph / You can't tell from the picture alone / The city council."
      criteria:
        - "A student could answer it before being taught anything."
        - "One wrong option is the mix-up this waypoint warns about: who is in a source versus who made it."
        - "It asks about one idea, not two."
      explain: "The soldiers option is the point: a student who picks it has mixed up content with origin, and the lesson can deal with that before it teaches anything else."
```

### Rewrite the introduction

In Create's `lesson.md`, find *Replace this introduction with one or two sentences students will read first.* Replace that sentence, and the teacher-worded sentence just above it, with one or two sentences for your students: what they'll be able to do by the end, in their words.

Watch the preview on the right change as you type.

### Write the Think first question

1. In `lesson.md`, click on the line *Ask a question students can answer before they are taught*, in the **Think first** step.
2. Press **Lock-in prediction** in the row of buttons above the editor. It adds a question, with its first line selected.
3. Type your question over it. Write two to four options in `options:` and, in `actual:`, what students see once they've locked in (the answer, and why).
4. Delete the line *Ask a question students can answer…*: it was only a hint for you.

Make it a question students can answer *before* being taught, where a wrong answer shows the mix-up you expect. Then copy it into the box here and compare it with one teacher's version.

Under the editor, **Lesson format checks** should say *Lesson format passed*. If it shows a message instead, it names the line: check the quotes and commas against the model.

## Vary: or ask an AI tool for a draft

```step
stage: modify
insight: "An AI draft is another starting point, checked the same way; Create itself calls no AI."
check: { type: reflect, text: "I know how to get a draft from an AI tool and check it in Create." }
```

Only if your school lets you use an AI tool. Create doesn't need one, and never calls one itself.

1. In Create, press **Copy lesson prompt**. It's plain text (open **Prompt text** to read it first).
2. Paste it into your school's AI tool. It asks you a few design questions first, one or two at a time: answer them.
3. Copy the `lesson.md` it writes, select everything in Create's `lesson.md`, and paste over it.
4. If **Lesson format checks** shows messages, press **Copy validation report** and paste that back to the AI tool.

Either way, you check the result. An AI draft is a starting point, like the starter.

## Check: see it as a student

```step
stage: practise
insight: "The student view is the test of a lesson: does the opening question make students think before they read?"
tasks:
  - check: { type: reflect, text: "I answered my own Think first question as a student would." }
  - check:
      type: question
      q: "A colleague asks: \"Why not just put these questions on a worksheet?\" Which is the best answer?"
      options:
        - "Students commit to an answer before they're told, and each check answers straight back, with feedback aimed at the mistake."
        - "It marks students' work and sends you the results."
        - "Students can't get anything wrong."
        - "It looks more modern than a worksheet."
      answer: 0
      feedback:
        - null
        - "Nothing is sent anywhere: progress stays in the student's own browser. The gain is in the moment, for the student."
        - "They can, and should: a wrong answer to the Think first question is how the mix-up comes into the open."
        - "Looks aren't the reason. What changes is when students think: before they're told, with an answer straight back."
      explain: "A worksheet can ask the same questions. What it can't do is make students lock in a prediction before the idea is explained, then answer each check straight away, while the thinking is fresh."
```

### Open the student view

In Create's **Share** row, press **Copy student link**, then paste the link into a new tab. That's your lesson as students would see it, without the editor. Answer your own Think first question and notice that the answer only appears once you've locked in.

Your work stays in Create, in this browser. To come back to it later, open Create and choose **Open existing work**.

### Why not a worksheet?

Answer the colleague.

```teacher
summary: "Teachers make a primer from a curriculum waypoint in Create, write its opening question, and view it as a student would."
time: 20
timing: "Think first 2 min · Try 4 min · Apply 10 min · Check 4 min · Vary (optional, AI route) 5 min"
goals:
  - "I can start a lesson in Create from a curriculum waypoint."
  - "I can write an opening question that brings a mix-up into the open."
  - "I can see my lesson as a student would."
before: |
  **For a facilitator** (for example a head of department in a staff meeting). Teachers need a laptop with Chrome or Edge (Create works in other browsers, but only Chrome and Edge record videos, which a later lesson uses). No account and no AI tool needed; nothing is published.

  Before the session: open the waypoint link in this lesson on the school network, press **Make a primer for this**, and check that Create opens with a lesson called *Origin and content*. Ask everyone to bring a topic they teach next week: lesson 2 starts from it.

  The waypoint data is a draft from Waypoints Kit (each curriculum page says so). That doesn't matter here: the point is the route from a waypoint to a lesson, and History's origin-and-content waypoint has a clear mix-up for the opening question to catch.

  **A 50-minute session** (lessons 1 and 2, once lesson 2 is ready): 5 min show one lesson on this site as a student, predicting first; 20 min this lesson, in pairs on one laptop if confidence is low; 5 min pairs swap student links and answer each other's Think first question; 15 min lesson 2; 5 min exit question.
running:
  - "Think first: everyone locks in a guess. Don't discuss yet; the answer comes after Try."
  - "Try: check every screen shows Create with 'Origin and content' before moving on. Point at the two halves: text on the left, preview on the right."
  - "Apply: the introduction first (quick win, the preview changes), then the question. Walk the room during Lock-in prediction: it's where people need help."
  - "Vary: skip it in a session unless people ask; mention it exists."
  - "Check: pairs swap student links and answer each other's question. Then take the exit question aloud."
struggle: "Editing lesson.md looks like code. Say: you only change words; the lines with dashes, colons and backticks hold it together, and Lesson format checks names the line if one breaks. Let them fix it with the model rather than doing it for them."
stuck:
  - see: "Make a primer for this opens Create, but no lesson appears."
    ask: "Did the page finish loading? Is anything blocking the site?"
    fix: "Reload. If it's still empty: Tutorials › Create lessons and courses › Start with a prompt › Go to workspace. Open Curriculum waypoints (optional), choose History, Year 7, AC9HH7S03, Waypoint 1, press Add waypoint, then Add a lesson starter."
  - see: "Lesson format checks shows a red message after adding the question."
    ask: "Is the question inside the step, between the backtick lines? Are the quotes and commas like the model's?"
    fix: "Undo (Ctrl+Z or Cmd+Z), click on the Think first step's text, and press Lock-in prediction again."
  - see: "Lock-in prediction says the step already has a check."
    ask: "Which step was your cursor in?"
    fix: "Click on a line inside the Think first step (below its heading) and try again."
  - see: "Copy student link does nothing."
    ask: "Did the browser ask about the clipboard?"
    fix: "Allow it, or use the preview on the right of Create, which shows the same page."
stretch: "Fill in The idea and Worked example steps too, in your own words. Or start a second primer from a waypoint in your own subject (other subjects' curriculum pages are coming; History is first)."
support: "Pair with a confident colleague who drives while the other writes the question on paper first. The question is the part that matters, not the typing."
leads: "Lesson 2 (One idea) narrows a topic to one idea students should leave with, starting from the topic each teacher brought. Later lessons improve the same primer: the misconception and opening move, then checks that test understanding."
exit:
  q: "What did Create fill in from the waypoint, and what did you write yourself?"
  a: "Create filled in the title, the goals (the waypoint's success criteria) and a frame for each step. The introduction and the opening question are the teacher's: they decide which mix-up students meet first."
```
