---
title: Checks that test understanding
summary: "A check a student can pass by guessing or by remembering tells you little. Write checks that only understanding can pass, with feedback aimed at the mistake."
hook: "Every check in the example lesson can be passed by a student who still thinks summer comes from being closer to the Sun."
language: science
shape: primer
unit: improve
order: 4
---
The example lesson's checks all work: they mark right answers right. The trouble is what a right answer shows. In this lesson you'll sort checks by what they test, rewrite one of the example's, then fix one in your own primer.

## Think first

```step
stage: predict
insight: "Seeing that a student with the misconception passes every check is what makes the fault visible."
check:
  type: predict
  q: "A student still believes summer comes from being closer to the Sun. How many of the example lesson's three checks could they pass?"
  options: ["None", "One", "Two", "All three"]
  actual: "All three. \"What causes the seasons?\" has one plausible option (the tilt) beside the Moon, clouds and the wind. The tilt question asks them to remember 23.5. True or false gives a coin toss. None of the checks asks them to use the idea, so none can catch the misconception."
```

Look again at the [example lesson's Check step](../example-seasons/) if you need to.

## The idea

```step
stage: investigate
insight: "Checks are sorted by what a right answer proves: luck, memory, or use of the idea."
```

What does a right answer prove?

- **Guessable:** a coin toss (true or false), or one plausible option beside silly ones. A right answer proves little.
- **Recall:** the answer is a fact the lesson stated (a number, a name, a definition). A right answer proves the student remembers it. Sometimes that matters, but it's not understanding.
- **Understanding:** the student uses the idea on a case the lesson didn't show: predict, explain, apply, spot the mistake. The wrong options are the mistakes students really make (the misconception among them), and each has **feedback** aimed at that mistake.

Three habits that help:

1. **Use a new case.** Ask about Perth in December, not the lesson's own example.
2. **Make every wrong option tempting** to someone, and say in its feedback what that choice suggests they think.
3. **For written claims and explanations, use a reasoning check:** students write, compare with model answers and tick criteria. It isn't marked, so it suits answers with more than one good form (as in this course).

Checks also set **width**. Every student does the main steps; extra steps can be marked `tier: typical` or `tier: wider` for students who are ready for more contexts. In Create, the waypoint's **Width suggestions** say where that extra effort fits.

## Worked example

```step
stage: investigate
insight: "Rewriting one check shows the three habits together: a new case, tempting wrong options, feedback on each."
check:
  type: question
  q: "It's December in Perth. Which is true at that moment?"
  options:
    - "The southern half of the Earth is tilted towards the Sun"
    - "The Earth is at its closest to the Sun"
    - "The Sun is giving out more heat than in June"
    - "The northern half of the Earth is tilted towards the Sun"
  answer: 0
  feedback:
    - null
    - "Distance changes very little over the year, and in early January (closest) it's winter in the north. The tilt is what changes."
    - "The Sun's output barely changes. What changes is how directly its light reaches us."
    - "That's when it's summer in the north: June, not December."
  explain: "In December the southern half leans towards the Sun: the Sun climbs higher and the days are longer, so it's summer in Perth."
```

Try it as a student, then compare with the example's *"What causes the seasons? (The tilt of the Earth's axis / The Moon / Clouds / The wind)"*:

1. **New case:** Perth in December, not "the seasons" in general.
2. **Tempting wrong options:** distance (the misconception), more heat from the Sun, and the hemispheres swapped.
3. **Feedback on each:** it tells the student what their choice suggests, without just giving the answer.

## Check

```step
stage: practise
insight: "Sorting checks from several subjects builds the habit of asking what a right answer proves."
check:
  type: sort
  q: "What does a right answer to each check prove?"
  options: ["Guessable", "Recall", "Understanding"]
  items:
    - ["True or false: the Moon makes its own light.", "Guessable", "A coin toss."]
    - ["How many degrees is the Earth's axis tilted?", "Recall", "A number the lesson stated."]
    - ["In what year did the Australian colonies federate?", "Recall", "A date to remember; useful, but not understanding."]
    - ["A photo of a protest has no caption. What would you need to find out who made it?", "Understanding", "A new source, and the origin idea used on it."]
    - ["Without working it out: which is bigger, 8 × 0.5 or 8? Why?", "Understanding", "The idea used on a case, with a reason."]
    - ["Which is a noun? (dog / quickly / run / blue)", "Recall", "Students who know the definition get it; it doesn't test using nouns."]
    - ["This loop prints 3 lines. Change one number so it prints 5.", "Understanding", "Using what the number in the loop does."]
    - ["Photosynthesis happens in the: (chloroplasts / bones / rocks / wheels)", "Guessable", "One plausible option."]
```

## Apply

```step
stage: make
insight: "Fixing one real check, with feedback on each wrong option, is the habit to take away."
tasks:
  - insight: "One rewritten check, with a new case and the misconception as an option."
    check:
      type: reasoning
      q: "Copy one check from your primer, then your rewritten version with its feedback."
      placeholder: "Before: … After: … Feedback: …"
      models:
        - title: "History"
          text: "Before: What is a source's origin? (Who made it / What it shows). After: A diary entry is signed 'Mary, 1915' and describes troops leaving a harbour. Which is its origin? (Mary, in 1915 / The troops / The harbour / A history book). Feedback: the troops and the harbour are what it shows (content); a history book might print it, but Mary made it."
        - title: "Maths"
          text: "Before: What is 8 × 0.5? After: Ava says 6 × 0.75 must be bigger than 6, because multiplying makes things bigger. Is she right? (No: it's 4.5, because 0.75 is less than 1 / Yes / Only for decimals). Feedback on Yes: multiplying by a number less than 1 takes part of the number."
      criteria:
        - "It uses a case my lesson didn't show."
        - "One wrong option is the misconception, and every wrong option tempts someone."
        - "Each wrong option has feedback that says what the choice suggests, not just the answer."
  - check: { type: reflect, text: "My primer's Check step has a check like this, and the format checks pass." }
```

### Rewrite one check

Open your primer in Create (**Open existing work** › **Resume saved workspace**). Pick one check, or add one to the **Check** step: click in the step and press **Question**. Rewrite it with the three habits, then copy the before and after here.

### Add it to your primer

To add feedback to a question in `lesson.md`, put a `feedback:` line under `answer:`, with one entry per option, in the same order, and `null` for the right one:

```
  feedback: [null, "Distance changes very little over the year.", "The Sun's output barely changes."]
```

Then fill in **Your design decisions** › **What the checks should catch**, and tick *Could a student pass the checks by guessing or by recall alone?* only when the answer is no.

```teacher
summary: "Teachers sort checks into guessable, recall and understanding, see a rewritten check, and rewrite one in their own primer with feedback on each wrong option."
time: 25
timing: "Think first 2 min · The idea and worked example 8 min · Check 4 min · Apply 11 min"
goals:
  - "I can tell a guessable or recall check from one that tests understanding."
  - "I can write a check on a new case, with the misconception as an option."
  - "I can write feedback aimed at the mistake behind each wrong option."
before: |
  **For a facilitator.** The second half of the session that covers lessons 3 and 4 (lesson 3's notes). Teachers need their primer open in Create.

  Recall checks aren't banned: some facts matter. The point is that a lesson whose checks are all recall or guessable can't tell you whether students understood. Keep the conversation on what a right answer proves.

  Feedback is the part teachers skip. It's also the part students read. Ask for it on every wrong option.
running:
  - "Think first: lock in, then reveal. Most say one or two; the answer is all three."
  - "Worked example: do it as a student first, picking a wrong answer on purpose to read its feedback."
  - "Check: individual, then talk through the noun and chloroplasts items, where people disagree."
  - "Apply: pairs swap rewritten checks and answer each other's. Did any wrong option tempt them?"
struggle: "Rewritten checks often keep one plausible option and three silly ones. Ask: who would pick this wrong answer, and why? If nobody would, replace it with a real mistake."
stuck:
  - see: "Lesson format checks fails after adding feedback."
    ask: "Does the feedback list have one entry per option, in square brackets, with null for the right one?"
    fix: "Count the options and the feedback entries; quote each message."
  - see: "The teacher can't think of a new case."
    ask: "Where else would a student meet this idea: another place, time, number or text?"
    fix: "Change one thing about the lesson's own example (another city, another source, another number)."
  - see: "All the wrong options are obviously wrong."
    ask: "What wrong answers do your students actually give?"
    fix: "Use those, including the misconception from lesson 3."
stretch: "Add a wider step to your primer (`tier: wider` under its `stage:` line): the idea in a harder case. Use the waypoint's Width suggestions if you started from one."
support: "Rewrite one of the example lesson's checks first (as in the worked example), then one of your own."
leads: "Lesson 5 (What a video is for, optional) decides whether your primer needs a video. Lesson 6 shares it and gets it reviewed."
exit:
  q: "What makes a check test understanding rather than recall?"
  a: "Students use the idea on a case the lesson didn't show, the wrong options are real mistakes (the misconception among them), and each has feedback aimed at the mistake."
```
