---
order: 60
unit: twoway10
node: AC9M10ST05 n1
uses: ["AC9M10ST03 n1", "AC9M9ST05 n1"]
connection: sleep-reaction
title: "A good question"
summary: "Turn a vague wondering into an investigation question that names two variables, who is asked, how each is measured, and which one might explain the other."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "'Does sleep matter?' is a start. What would you have to add before you could collect any data?"
---
A Year 10 class wants to investigate sleep and reaction time. They have a ruler for a drop test, a sleep log and a week. The students, the figures and the school in this lesson are made up. Before they collect anything, they need a **question** that two variables, who they ask and how they measure can all answer.

## Predict: the best question

```step
stage: predict
insight: "Choosing the best of four versions of one question shows whether students look for two named variables and a clear group, or accept a vague wondering."
check:
  type: predict
  q: "Which question would give the class the clearest investigation?"
  options:
    - "Does sleep matter?"
    - "Is sleep related to reaction time?"
    - "Among Year 10 students at our school, is the number of hours slept last night related to reaction time, measured by a ruler drop in centimetres?"
    - "Are tired people bad at things?"
  actual: "The third. It names who (Year 10 students at our school), both variables (hours slept last night, ruler drop in centimetres), and how each is measured. 'Does sleep matter?' leaves out who, what is measured, and what 'matter' means."
```

<figure class="situation" role="img" aria-label="Two boxes joined by a dashed arrow with a question mark. The left box reads: hours slept last night. The right box reads: reaction time, ruler drop in centimetres. Above them is a speech bubble: do students who sleep less react more slowly?"><svg viewBox="0 0 560 170" width="560" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><rect x="20" y="80" width="200" height="56" rx="6"/><rect x="340" y="80" width="200" height="56" rx="6"/><line x1="224" y1="108" x2="334" y2="108" stroke-dasharray="6 5"/><polyline points="326,102 336,108 326,114"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="120" y="104">Hours slept</text><text x="120" y="123">last night</text><text x="440" y="104">Reaction time</text><text x="440" y="123">ruler drop, cm</text><text x="279" y="100" font-size="20">?</text><text x="280" y="38">Do students who sleep less react more slowly?</text></g></svg></figure>

Make a guess before you check.

## Run: two variables

```step
stage: run
insight: "A bivariate question has two variables. Naming them is the first move, because every later choice (what to collect, how to display it) depends on them."
check:
  type: question
  q: "Which are the two variables in 'Among Year 10 students, is hours slept last night related to reaction time?'"
  options: ["Hours slept last night, and reaction time", "Year 10 students, and the school", "Sleep, and tiredness", "The ruler, and the stopwatch"]
  answer: 0
  feedback: [null, "Year 10 students are who you ask, not what you measure about them.", "Tiredness isn't measured in the question. It would need its own measure.", "Those are measuring tools, not the quantities being measured."]
  explain: "A variable is something that differs from student to student: hours slept differs, and reaction time differs. The Year 10 students are the group."
```

A variable is a quantity or category that changes from one person to the next. A bivariate question asks how two of them go together.

## Investigate: from a wondering to a question

```step
stage: investigate
insight: "A usable question names two variables, a group and how each is measured, and says which variable might explain the other."
tasks:
  - check:
      type: question
      q: "In 'is hours slept related to reaction time?', which is the variable that might explain the other (the explanatory variable), and which is the response?"
      options: ["Explanatory: hours slept. Response: reaction time", "Explanatory: reaction time. Response: hours slept", "Both are explanatory", "Neither: they just happen"]
      answer: 0
      feedback: [null, "It would be odd to say reaction time on the day makes you sleep more or less last night. Sleep comes first.", "One of them is the thing you are trying to explain.", "A question asks whether one goes with the other, so you pick which comes first."]
      explain: "Hours slept last night could explain the reaction time today, so hours slept is explanatory and reaction time is the response."
  - check:
      type: bug
      code: "working.txt#zoe"
      text: "Zoe plans the investigation. Click the line where her plan stops being a usable question."
      answer: 2
      fault: logic
      misconception: vague-question
      explain: "Line 2: 'Does sleep matter?' names one thing, 'sleep', and 'matter' for what is not said. A usable question names both variables, such as hours slept and reaction time."
  - check:
      type: question
      q: "Which rewrite of Zoe's question fixes it?"
      options: ["Among Year 10 students at our school, do students who slept fewer hours last night have slower reaction times on a ruler-drop test?", "Is sleep good?", "Do people who sleep a lot like school?", "Does sleep matter to everyone in the world?"]
      answer: 0
      feedback: [null, "It still doesn't say what is measured or who is asked.", "That swaps in a different variable, liking school, and doesn't say how it is measured.", "That is a much bigger group than the class could ask, and still doesn't say what is measured."]
      explain: "It names the group, both variables, how reaction time is measured and the direction the class expects (fewer hours, slower)."
  - check:
      type: question
      q: "Hours slept and ruler-drop distance are both numbers. Which display fits the data once it is collected?"
      options: ["A scatterplot with hours slept across and ruler drop up", "A pie chart of the hours slept", "A bar chart with one bar per student", "No display: a table is enough"]
      answer: 0
      feedback: [null, "A pie chart shows parts of one total, not how two numbers go together.", "A bar chart per student doesn't show a pattern between two variables.", "A table lists the numbers, but a scatterplot shows the pattern you are asking about."]
      explain: "Two numerical variables go on a scatterplot, which shows direction and strength (the last unit)."
```

### Which is the explainer?

### Find the vague question

Read Zoe's plan. Where does it stop being a question you could answer with data?

### The better question

### The display

## Modify: sharper questions

```step
stage: modify
insight: "Making a question specific about who is asked and how things are measured, and noticing when a question can't be answered by data, builds the habit before collecting."
tasks:
  - check:
      type: question
      q: "Edge case: the class wants to ask how 'happy' students are. Which change makes that part measurable?"
      options: ["Choose a measure, such as a mood score out of 10 at the same time each day", "Ask 'are you happy?' and leave it", "Decide happiness can't be a variable", "Ask only the happiest students"]
      answer: 0
      feedback: [null, "A yes or no answer loses detail and everyone may read 'happy' differently.", "It can be a variable once you say how to measure it.", "Asking only the happiest students would bias the data."]
      explain: "A variable needs a way to be measured, written down before collecting: a score out of 10, taken at the same time each day."
  - check:
      type: question
      q: "Edge case: the class asks only the 8 students in the sleep club. What is wrong?"
      options: ["The group is small and chosen by sleep habits, so it may not be like the Year 10 group the question is about", "Nothing: they know about sleep", "The sample is too big", "It proves sleep matters"]
      answer: 0
      feedback: [null, "Knowing about sleep isn't the issue. Their habits may not be typical.", "Eight students is small, not big.", "A biased group can't prove anything about everyone."]
      explain: "The question is about Year 10 students, so the students asked should be chosen to represent them, not picked for their sleep habits."
  - check:
      type: question
      q: "Edge case: which of these questions can data NOT answer?"
      options: ["Is sleeping eight hours more enjoyable than sleeping five?", "Do students who slept more have faster ruler-drop times?", "Is hours of screen time related to hours slept?", "Do students who ate breakfast have faster ruler-drop times?"]
      answer: 0
      feedback: [null, "You can collect hours slept and reaction times and compare.", "Both variables can be measured.", "Both variables can be measured."]
      explain: "'More enjoyable' has no measure in the question. The other three name two things that can be counted or timed."
```

### How to measure

### Who is asked

### Can data answer it?

## Practise: checking a question

```step
stage: practise
insight: "Counting what a plan needs, judging whether a question is ready, and (review) a mean."
tasks:
  - check:
      type: number
      q: "The class asks 24 Year 10 students for hours slept and a reaction time. How many numbers is that in all?"
      answer: 48
      tolerance: 0
      feedback:
        - [24, "Each student gives two numbers: hours slept and reaction time."]
      explain: "24 students × 2 numbers = 48 numbers."
  - check:
      type: question
      q: "Is 'Are students who play more sport more fit?' ready to investigate?"
      options: ["Not yet: it needs a measure of 'more sport' and of 'fit', and a group", "Yes: it has two variables", "Yes: everyone knows what fit means", "No: sport and fitness can't be measured"]
      answer: 0
      feedback: [null, "It names two ideas, but neither has a measure yet.", "People mean different things by 'fit'.", "They can be measured, for example hours of sport per week and a one-minute step count."]
      explain: "Two variables are there, but the question isn't ready until each has a measure and the group is named."
  - check:
      type: number
      q: "Review: five students slept $6$, $7$, $8$, $8$ and $6$ hours. What is the mean number of hours?"
      answer: 7
      tolerance: 0
      explain: "6 + 7 + 8 + 8 + 6 = 35, and 35 ÷ 5 = 7."
```

### How many numbers

### Ready or not

### Review

From earlier years: the mean.

## Make: your own question

```step
stage: make
insight: "Writing their own question with every part named shows they can set up a bivariate investigation before collecting data."
tasks:
  - check:
      type: reflect
      text: "I chose two variables from my own life or school (for example, time on a phone and hours slept), named the group I would ask, said how I would measure each variable, and wrote one question that ties them together."
  - check:
      type: question
      q: "Which checklist describes a question that is ready?"
      options: ["Two named variables, a group, a measure for each, and which one might explain the other", "One interesting word and a big group", "A question that everyone agrees on already", "A question with a yes or no answer and no measures"]
      answer: 0
      feedback: [null, "A ready question names two variables and says how to measure them.", "If everyone agrees already, the data will not tell you anything new.", "Yes/no without measures can't be tested."]
      explain: "Two variables, a group, measures and direction are what the later steps (collect, display, judge) depend on."
```

### Your question

Write it down, then swap with a partner. Can they say the two variables, the group and how each is measured without asking you?

### The checklist

All the figures and people here are made up: the class, the sleep log and the reaction times.

**Also used in**

- **Science.** Every fair test starts with a question that names what is changed and what is measured.
- **News.** Surveys that make headlines are only as good as their questions. Check who was asked and how it was measured.
- **Next steps.** Collecting the data and describing the pattern with a scatterplot, then judging what it shows.
