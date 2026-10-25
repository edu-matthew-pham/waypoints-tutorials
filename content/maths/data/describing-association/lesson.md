---
order: 56
unit: scatter10
node: AC9M10ST03 n2
uses: ["AC9M10ST03 n1", "AC9M9A03 n1"]
connection: arm-span
title: Describing association
summary: "Four words describe a scatterplot: direction (positive, negative or none), strength (how tightly the dots follow a pattern), form (a straight line or a curve) and outliers (a dot apart from the rest)."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Four pairs of measurements, four different plots. How would you describe a plot to someone who can't see it?"
explainPicture: { ref: assoc.yml#explain-pic, caption: "Hours slept against reaction time for 14 students (made up). As sleep goes up, reaction time tends to go down: a moderate, negative association, close to a straight line, with no outlier." }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8451
  url: http://127.0.0.1:8451/index.html
  readySelector: "#board"
  layout: full
---
In the last lesson the arm span and height dots sat close to a line. Not every pair of measurements does that. Four words describe what a scatterplot shows: **direction** (positive, negative or none), **strength** (strong, moderate or weak), **form** (a straight line, called linear, or a curve) and **outliers** (a dot far from the rest). Every set of numbers here is made up. Have a guess about three plots, then describe some of your own.

## Predict: which is strongest?

```step
stage: predict
insight: "Choosing the strongest of a rising band, a spread-out cloud and a falling band shows whether students think a negative association must be a weak one."
check:
  type: predict
  q: "Each plot shows two measurements for 14 students. Which plot shows the strongest association between its two measurements?"
  options:
    - "A, the dots rising to the right"
    - "C, the dots falling to the right"
    - "A and C are equally strong"
    - "B, the dots spread over the whole box"
  actual: "A and C are equally strong. Strength is how tightly the dots follow one pattern, and in both A and C the dots hug a line. A rises (positive) and C falls (negative), but that is the direction, not the strength. B has no pattern, so it is the weakest."
```

<figure class="situation" role="img" aria-label="Three small scatterplots labelled A, B and C, each with 14 dots. In A the dots lie close to a line rising to the right. In B the dots are spread over the whole box with no pattern. In C the dots lie close to a line falling to the right."><svg viewBox="0 0 480 180" width="480" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="14" y1="140" x2="138" y2="140"/><line x1="14" y1="140" x2="14" y2="16"/><g fill="currentColor" stroke="none"><circle cx="26" cy="121" r="3"/><circle cx="34" cy="112" r="3"/><circle cx="42" cy="109" r="3"/><circle cx="50" cy="98" r="3"/><circle cx="58" cy="90" r="3"/><circle cx="66" cy="87" r="3"/><circle cx="74" cy="87" r="3"/><circle cx="82" cy="79" r="3"/><circle cx="90" cy="71" r="3"/><circle cx="98" cy="56" r="3"/><circle cx="106" cy="53" r="3"/><circle cx="114" cy="42" r="3"/><circle cx="122" cy="34" r="3"/><circle cx="130" cy="26" r="3"/><text x="76" y="168" text-anchor="middle" font-weight="bold" font-size="15">A</text></g><line x1="172" y1="140" x2="296" y2="140"/><line x1="172" y1="140" x2="172" y2="16"/><g fill="currentColor" stroke="none"><circle cx="237" cy="46" r="3"/><circle cx="233" cy="37" r="3"/><circle cx="281" cy="118" r="3"/><circle cx="241" cy="59" r="3"/><circle cx="279" cy="88" r="3"/><circle cx="276" cy="116" r="3"/><circle cx="237" cy="71" r="3"/><circle cx="246" cy="73" r="3"/><circle cx="201" cy="60" r="3"/><circle cx="269" cy="32" r="3"/><circle cx="189" cy="93" r="3"/><circle cx="213" cy="84" r="3"/><circle cx="233" cy="64" r="3"/><circle cx="288" cy="48" r="3"/><text x="234" y="168" text-anchor="middle" font-weight="bold" font-size="15">B</text></g><line x1="330" y1="140" x2="454" y2="140"/><line x1="330" y1="140" x2="330" y2="16"/><g fill="currentColor" stroke="none"><circle cx="342" cy="31" r="3"/><circle cx="350" cy="48" r="3"/><circle cx="358" cy="54" r="3"/><circle cx="366" cy="61" r="3"/><circle cx="374" cy="68" r="3"/><circle cx="382" cy="67" r="3"/><circle cx="390" cy="76" r="3"/><circle cx="398" cy="87" r="3"/><circle cx="406" cy="96" r="3"/><circle cx="414" cy="105" r="3"/><circle cx="422" cy="113" r="3"/><circle cx="430" cy="109" r="3"/><circle cx="438" cy="123" r="3"/><circle cx="446" cy="131" r="3"/><text x="392" y="168" text-anchor="middle" font-weight="bold" font-size="15">C</text></g></svg></figure>

Make a guess before you check.

## Run: a line by eye

```step
stage: run
insight: "A line drawn through the middle of the dots shows the pattern. The closer the dots sit to it, the stronger the association, and the way it leans gives the direction."
try: { playground: board, starter: "assoc.yml#run", height: 600 }
check: { type: board, text: "Drag $A$ and $B$ up or down so the line runs through the middle of the dots. It ticks when the line is close to the pattern.", when: "y(A) > 325 and y(A) < 355 and y(B) > 275 and y(B) < 305" }
```

Each dot is one student (made up): hours slept across, reaction time in milliseconds up. A short reaction time is a faster one. $A$ and $B$ move up and down, and the line runs through them.

## Investigate: finding the words

```step
stage: investigate
insight: "Direction, strength, form and outliers are four separate things to say. A gentle slope is not a weak association, and a falling line is not a weak one either."
tasks:
  - hint: ["Work out height minus arm span for each pair, then find the biggest size.", "The gaps are -2, -1, 1, -1, 1, -1, 12, -1."]
    check:
      type: reasoning
      paper: true
      q: "Eight students (made up) have these (arm span, height) pairs in cm: $(152, 150)$, $(158, 157)$, $(163, 164)$, $(167, 166)$, $(171, 172)$, $(176, 175)$, $(169, 181)$, $(180, 179)$. The dashed line is height = arm span. How many cm is the furthest dot from the line? Give the size, ignoring the sign."
      steps:
        - ["The gaps (height − arm span) are $-2, -1, 1, -1, 1, -1, 12, -1$", "a dot's gap from the line is its height minus its arm span"]
        - ["Seven of the gaps have a size of $2$ or less", "those dots follow the pattern"]
        - ["The biggest size is $12$, for $(169, 181)$", "this dot is far from the line: it is an outlier"]
      answer: "12"
      answerLabel: "Furthest gap (cm)"
      tolerance: 0
      feedback:
        - ["181", "That is the height of the outlier. The question asks how far it is from the line: height minus arm span."]
        - ["2", "2 is the biggest gap among the other seven dots. The outlier is further out."]
      criteria:
        - "I worked out a gap for all eight dots, with its sign."
        - "I compared the sizes and picked the biggest."
        - "I said that dot is an outlier because it is much further out than the rest."
      explain: "The gaps are -2, -1, 1, -1, 1, -1, 12 and -1. The biggest size is 12, for (169, 181): seven dots are within 2 cm of the line and one is 12 cm away, so it is an outlier."
  - picture: { ref: assoc.yml#sleep, caption: "Hours slept across and reaction time (ms) up, 14 students (made up)." }
    check:
      type: question
      q: "Which description of the sleep and reaction time plot is best?"
      options: ["Negative, moderate, roughly linear: more sleep tends to go with a faster reaction, with plenty of scatter", "Positive, strong and linear", "Negative, strong and not linear", "No association"]
      answer: 0
      feedback: [null, "The dots go down from left to right, so the direction is negative. They are also fairly spread out, not strong.", "The dots are not tight, so not strong, and a straight line suits them better than a curve.", "There is a pattern: the dots drift downwards as sleep goes up, though not tightly."]
      explain: "The dots fall from left to right (negative), they drift rather than hug a line (moderate), and a straight line suits them (linear). No dot is far from the rest."
  - picture: { ref: assoc.yml#age, caption: "Age (years) across and height (cm) up, 13 students (made up)." }
    check:
      type: question
      q: "Age against height: which sentence describes the form?"
      options: ["Positive and strong, but not a straight line: it rises quickly, then levels off", "Negative and linear", "Positive and linear: a straight line fits perfectly", "No association"]
      answer: 0
      feedback: [null, "Older students are taller, so the direction is positive, not negative.", "A straight line would miss the dots at both ends: the rise slows down after about 14.", "The dots follow a clear curve, so there is an association."]
      explain: "Height rises with age (positive), the dots hug a curve (strong), and the curve is steep at first and then flat, so it is not linear."
  - picture: { ref: assoc.yml#gentle, caption: "Study time (hours) across and test mark up, 12 students (made up)." }
    check:
      type: bug
      code: "working.txt#ben"
      text: "Ben describes the study time plot. Click the line where his reasoning goes wrong."
      answer: 4
      fault: logic
      misconception: steepness-is-strength
      explain: "Line 4: how steep a line is has nothing to do with how strong the association is. These dots sit very close to a gently rising line, so the association is strong and positive. Strength is how tightly the dots follow the pattern."
```

### Furthest from the line

Here is how to find an outlier, using the twelve students from the last lesson.

```worked
\text{Line: height = arm span} :: Use a line the dots should follow. A dot's gap from it is its height minus its arm span.
150 - 152 = -2 :: Work out the gap for every dot, with its sign. The first student is 2 cm below the line.
\text{Gaps: } -2, 2, -2, 3, -2, 2, -3, 3, -2, 2, -4, 2 :: Twelve dots, and every gap is small.
\text{Biggest size: } 4 :: The furthest dot is only 4 cm from the line, close to the rest, so there is no outlier.
```

Now try eight students on paper first, with the worked example beside you. One of them is not like the others.

### Sleep and reaction time

### Age and height

### Find the mistake

Read Ben's working. A gentle slope can still be a strong association.

## Modify: breaking the pattern

```step
stage: modify
insight: "One dot far from the pattern is an outlier and is reported on its own, while the pattern of the rest stays what it was. If the second measurement never changes, there is no association at all."
try: { playground: board, starter: "assoc.yml#modify", height: 600 }
tasks:
  - hint: "The dashed line is height = arm span. A dot 15 cm above it has a height 15 more than its arm span."
    check: { type: board, text: "Drag $P$ so it is an outlier: at least $15$ cm taller than its arm span.", when: "y(P) - x(P) > 14" }
  - check:
      type: question
      q: "One outlier is added to the plot of twelve students. How should the plot be described?"
      options: ["The twelve dots still show a strong, positive, linear pattern, and the outlier is reported on its own, with a reason to check (a measuring slip, say)", "The association is now weak", "The direction is now negative", "The outlier is deleted and not mentioned"]
      answer: 0
      feedback: [null, "One dot does not change how tightly the other twelve follow the line. Report the outlier, but the pattern is still strong.", "The dots still rise from left to right, so the direction has not changed.", "Hiding it would hide something worth checking: a measuring slip or something unusual about that student."]
      explain: "An outlier is a separate thing to say. The pattern of the others stays strong, positive and linear, and the outlier is named, with a reason to check it."
  - check:
      type: question
      q: "Edge case: every student in a plot has a height of $165$ cm, whatever their arm span (a flat row of dots). What is the association?"
      options: ["None: the height does not change as the arm span changes", "Strong and positive", "Strong and negative", "Weak and positive"]
      answer: 0
      feedback: [null, "The dots do not rise. A positive association needs the second measurement to go up as the first goes up.", "The dots do not fall either.", "A flat row of dots has no direction, so it is not weak and positive: there is none."]
      explain: "If the second measurement stays the same however the first changes, the first tells you nothing about the second: there is no association."
```

### Making an outlier

### One outlier

### A flat row

## Practise: using the four words

```step
stage: practise
insight: "Describing plots in words, telling direction from strength, and (review) the gradient of a line through two points."
tasks:
  - picture: { ref: assoc.yml#birth, caption: "Month of birth (1 to 12) across and height (cm) up, 14 students (made up)." }
    check:
      type: question
      q: "Which sentence describes the month of birth and height plot?"
      options: ["No association: the dots show no pattern", "Weak and positive", "Strong and positive", "Strong and negative"]
      answer: 0
      feedback: [null, "A weak positive association still needs the dots to drift up. Here they go up and down with no drift.", "The dots do not follow any line.", "The dots do not follow any line."]
      explain: "The dots are spread over the whole plot with no pattern: when the month changes, the height does not tend to change. No association."
  - check:
      type: question
      q: "The dots of a plot lie very close to a line that falls from the top left to the bottom right. Zoe says: 'It falls, so the association is weak.' Which description is best?"
      options: ["Strong, negative, linear", "Weak, because it falls", "Strong, positive, linear", "Negative, so it is a poor result"]
      answer: 0
      fault: logic
      misconception: negative-means-weak
      feedback: [null, "Falling is the direction, which is negative. How close the dots are is the strength, and these are close.", "The line falls, so the direction is negative.", "Negative describes which way the dots lean. It is not a judgement of how good the data is."]
      explain: "Close to a line means strong, a falling line means negative, and a line means linear."
  - check:
      type: number
      q: "Review: a line passes through $(5, 339)$ and $(10, 289)$. What is its gradient?"
      answer: -10
      feedback:
        - [10, "The line falls from left to right, so the gradient is negative."]
        - [-50, "That is the change in y (289 − 339). The gradient divides by the change in x, which is 5."]
      explain: "(289 − 339) ÷ (10 − 5) = −50 ÷ 5 = −10: reaction time falls by 10 ms for every extra hour of sleep."
```

### No pattern

### Falling and strong

### Review

From earlier: the gradient of a line through two points.

## Make: describe it, then use it

```step
stage: make
insight: "Back to the sleep and reaction time plot: use the line you drew to read a value, and write the one sentence that says what the plot shows and no more."
tasks:
  - hint: ["The gradient is -10, so each extra hour takes 10 off.", "8 hours is 3 hours after 5."]
    check:
      type: reasoning
      paper: true
      q: "The line through the sleep plot passes through $(5, 339)$ and $(10, 289)$. What reaction time, in ms, does the line give for $8$ hours of sleep?"
      steps:
        - ["The gradient is $\\dfrac{289 - 339}{10 - 5} = -10$", "reaction time falls 10 ms for each extra hour"]
        - ["8 hours is $3$ hours after $5$", "so the change from the point at 5 hours is $3 \\times (-10) = -30$"]
        - ["$339 - 30 = 309$", "start from the point at 5 hours and add the change"]
      answer: "309"
      answerLabel: "Reaction time at 8 hours (ms)"
      tolerance: 0
      feedback:
        - ["369", "That adds 30. The line goes down as sleep goes up, so take 30 off."]
        - ["289", "That is the value at 10 hours. 8 hours is 3 hours after 5, not 5."]
      criteria:
        - "I found the gradient first, with its sign."
        - "I counted the hours from 5 to 8, not from 0."
        - "I took the 30 off because the line falls."
      explain: "The gradient is −10 ms per hour. From 5 to 8 hours is 3 hours: 339 − 30 = 309 ms."
  - check:
      type: question
      q: "Which sentence best describes the sleep plot?"
      options: ["As hours slept goes up, reaction time tends to go down: a moderate, negative, roughly linear association with no outliers", "Sleeping more makes reactions faster", "A strong positive association", "The students who slept 9 hours are the fastest, so everyone should sleep 9 hours"]
      answer: 0
      feedback: [null, "The plot shows the two measurements go together. It does not show that one makes the other change; that is the next lesson.", "The dots fall from left to right, so the direction is negative, and they are fairly spread out, not strong.", "That reads one or two dots, not the pattern of all fourteen."]
      explain: "A good description uses direction, strength, form and outliers about the whole plot. It says what the data show, and not why."
```

### Reading the line

Work this out on paper first, then type your answer.

### The best sentence

Every number here is made up for the lesson: the arm spans and heights, the sleep and reaction times, the ages and the study times. A real class would collect its own.

**Also used in**

- **Science.** Any experiment that plots one measurement against another is described the same way: direction, strength, form, outliers.
- **Sport.** A coach looks at training hours against race times to see whether the dots go down, and how tightly.
- **Next lesson.** Two things can go together without one causing the other.
