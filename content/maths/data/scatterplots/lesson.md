---
order: 55
unit: scatter10
node: AC9M10ST03 n1
uses: ["AC9M7A05 n3", "AC9M9ST03 n1"]
connection: arm-span
title: Scatterplots
summary: "A scatterplot turns each person into one dot, using two measurements: the first goes across and the second goes up. Plot a dot, read a dot, and see whether the dots sit near a line."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Is your arm span the same as your height? Measure a whole class and you get a lot of numbers. A picture can show them all at once."
explainPicture: { ref: armspan.yml#explain-pic, caption: "Twelve students (made up). The dashed line is where height equals arm span. Tom's dot, arm span 150 and height 175, is the one above it on the left." }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8450
  url: http://127.0.0.1:8450/index.html
  readySelector: "#board"
  layout: full
---
A class measured their height and their arm span, in centimetres. Each student gives two numbers, so each student can be one dot: the arm span goes across, the height goes up. The measurements in this lesson are made up. Have a guess where Tom's dot goes, then we'll plot the whole class.

## Predict: where is Tom's dot?

```step
stage: predict
insight: "Placing a dot for a student who is taller than their arm span shows whether students put the first number across and the second up, and whether they see the dashed line as 'the same'."
check:
  type: predict
  q: "Tom's arm span is $150$ cm and his height is $175$ cm. The dashed line is where height equals arm span. Where is Tom's dot, with arm span across and height up?"
  options:
    - "Above the dashed line"
    - "On the dashed line"
    - "Below the dashed line"
    - "Nowhere: you can't plot two measurements in one dot"
  actual: "Above the dashed line. His arm span is 150, so the dot is 150 across. His height is 175, so it is 175 up. On the dashed line the two numbers are equal, and Tom's height is bigger, so he is above it."
```

<figure class="situation" role="img" aria-label="An empty graph with arm span across the bottom and height up the side, both from 140 to 190 centimetres. A dashed line runs from the bottom left corner to the top right corner and is labelled height equals arm span. To the right a note reads: Tom, arm span 150, height 175. Where is his dot?"><svg viewBox="0 0 440 270" width="440" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="50" y1="230" x2="260" y2="230"/><line x1="50" y1="230" x2="50" y2="20"/><line x1="50" y1="230" x2="260" y2="20" stroke-dasharray="6 5"/><g fill="currentColor" stroke="none"><text x="155" y="262" text-anchor="middle">arm span (cm)</text><text x="12" y="125" text-anchor="middle" transform="rotate(-90 12 125)">height (cm)</text><text x="50" y="246" text-anchor="middle">140</text><text x="260" y="246" text-anchor="middle">190</text><text x="44" y="224" text-anchor="end">140</text><text x="44" y="24" text-anchor="end">190</text><text x="272" y="26">height = arm span</text><text x="290" y="130" font-weight="bold">Tom</text><text x="290" y="150">arm span 150</text><text x="290" y="168">height 175</text><text x="290" y="196" font-size="22">?</text></g></svg></figure>

Make a guess before you check.

## Run: one dot at a time

```step
stage: run
insight: "Each student is one dot: arm span across, height up. A dot above the dashed line means a student whose height is more than their arm span."
try: { playground: board, starter: "armspan.yml#run", height: 600 }
check: { type: board, text: "Drag $P$ to Tom's spot: arm span $150$, height $175$. Was your prediction right?", when: "x(P) = 150 and y(P) = 175" }
```

The purple dots are twelve students (made up). The dashed line is where height equals arm span. $P$ is one more student for you to place; the arrow buttons under the graph move it a step at a time.

## Investigate: reading and plotting

```step
stage: investigate
insight: "A scatterplot is read one dot at a time: across for the first variable, up for the second. Swapping the two puts every dot in the wrong place, and the dashed line helps check."
tasks:
  - hint: ["For each student compare the two numbers: is the second one (height) bigger than the first (arm span)?", "A dot is on the line when the two numbers are equal."]
    check:
      type: reasoning
      paper: true
      q: "Five students (made up) have these (arm span, height) pairs in cm: $(150, 155)$, $(160, 158)$, $(170, 170)$, $(175, 180)$, $(182, 179)$. Plot them on paper with the dashed line height = arm span. How many of the five dots are above the line?"
      steps:
        - ["$(150, 155)$: $155 > 150$", "height is bigger than arm span, so the dot is above the line"]
        - ["$(175, 180)$: $180 > 175$", "height is bigger again, so this dot is above too"]
        - ["$(160, 158)$ and $(182, 179)$: height is smaller", "these two dots are below the line"]
        - ["$(170, 170)$: the numbers are equal", "this dot is on the line, so it is not above it"]
        - ["$2$ dots are above the line", "count the dots above"]
      answer: "2"
      answerLabel: "Dots above the line"
      tolerance: 0
      feedback:
        - ["3", "One of the five is on the line, not above it: (170, 170) has equal numbers."]
        - ["1", "Two dots have a height bigger than the arm span: (150, 155) and (175, 180)."]
      criteria:
        - "I put the arm span across and the height up for every dot."
        - "I compared the two numbers of each student, not just the look of the dots."
        - "I counted a dot on the line as not above it."
      explain: "(150, 155) and (175, 180) are above, (160, 158) and (182, 179) are below, and (170, 170) is on the line. So 2 are above."
  - picture: { ref: armspan.yml#plain, caption: "Arm span across and height up, 12 students (made up). The dashed line is height = arm span." }
    check:
      type: question
      q: "Which student is the tallest? Read the highest dot across, then up."
      options: ["Arm span $181$ cm, height $183$ cm", "Arm span $183$ cm, height $181$ cm", "Arm span $176$ cm, height $172$ cm", "Arm span $152$ cm, height $150$ cm"]
      answer: 0
      feedback: [null, "That swaps the two. The arm span is across the bottom, so it is read first: 181 across, then 183 up.", "That dot is lower and further left. The highest dot is at the top right.", "That dot is the lowest one, at the bottom left."]
      explain: "The highest dot is far to the right and at the top: 181 across and 183 up."
  - picture: { ref: armspan.yml#plain, caption: "The same twelve students." }
    check:
      type: number
      q: "How many of the 12 dots are above the dashed line? (Those students are taller than their arm span.)"
      answer: 6
      feedback:
        - [12, "That is every student. Some dots are below the line."]
        - [5, "Count again, one dot at a time, left to right: six are above."]
      explain: "Six dots are above the line (heights 157, 163, 166, 171, 175, 183) and six are below it."
  - check:
      type: bug
      code: "working.txt#mia"
      text: "Mia plots Tom's dot. Click the line where her reasoning goes wrong."
      answer: 3
      fault: logic
      misconception: scatter-axes-swapped
      explain: "Line 3: she put the bigger number across because it is bigger. The first measurement named, arm span (150), goes across, and the second, height (175), goes up. That puts Tom above the line, not below it."
```

### Five students

Here is how to plot one dot, then compare it with the dashed line.

```worked
\text{arm span } 172, \text{ height } 169 :: One student gives two numbers. The first, arm span, goes across.
\text{across to } 172 :: Start at the corner and move right to 172 on the arm span axis.
\text{up to } 169 :: From there move up to 169 on the height axis and mark the dot.
169 < 172 :: On the dashed line, height equals arm span. Here the height is smaller, so the dot is below the line.
```

Now try five students on paper first, with the worked example beside you.

### Reading the tallest

### Counting above the line

### Find the mistake

Read Mia's working. Which line puts the numbers the wrong way round?

## Modify: when dots share or break the pattern

```step
stage: modify
insight: "Two students can share a number, and a slip in the units shows at once on a plot. Dragging P to these cases shows what a scatterplot does with them."
try: { playground: board, starter: "armspan.yml#tied", height: 600 }
tasks:
  - hint: ["One of the purple dots already has arm span 160 cm. Put $P$ at the same arm span but a different height.", "Arm span is across, so keep 160 across and move up to 165."]
    check: { type: board, text: "Plot a new student with arm span $160$ cm and height $165$ cm. A purple student already has arm span $160$ cm.", when: "x(P) = 160 and y(P) = 165" }
  - check:
      type: question
      q: "Two students have the same arm span but different heights. What does the scatterplot show?"
      options: ["Two dots at the same place across, one above the other", "One dot, because the arm span is the same", "Two dots at the same height, side by side", "The plot can't show it"]
      answer: 0
      feedback: [null, "Each student is still their own dot. The heights are different, so the dots are at different places up the side.", "Side by side would mean the same height and different arm spans.", "A scatterplot shows any pair of numbers, including two with the same first number."]
      explain: "Both dots are 160 across. One is 163 up and the other is 165 up, so one sits above the other."
  - check:
      type: question
      q: "Edge case: a student's height is typed in metres, $1.62$, while everyone else's is in centimetres. Where does that dot land on this plot?"
      options: ["Far below all the others, so it stands out as a mistake", "On the dashed line, where it belongs", "Far above all the others", "Exactly in the middle of the dots"]
      answer: 0
      feedback: [null, "On the line the height would equal the arm span. 1.62 is tiny next to about 160.", "A tiny number is a low dot, not a high one.", "The others are around 150 to 180 up; 1.62 is not near the middle."]
      explain: "1.62 up is almost at the bottom, far below dots at 150 or more. A plot makes a unit slip easy to spot."
```

### One more student

### Same arm span

### Metres, not centimetres

## Practise: reading and checking

```step
stage: practise
insight: "Reading a height from an arm span on the plot, and comparing a pair with the line, over and over until across-then-up is automatic."
tasks:
  - picture: { ref: armspan.yml#plain, caption: "The twelve students (made up)." }
    check:
      type: number
      q: "Find the student with arm span $170$ cm. What is their height, in cm?"
      answer: 168
      tolerance: 1
      feedback:
        - [170, "That is the arm span. The height is read up the side."]
      explain: "The dot at 170 across is at 168 up."
  - check:
      type: question
      q: "A student has arm span $158$ cm and height $156$ cm. Which is true of their dot?"
      options: ["Below the dashed line, as the height is less than the arm span", "Above the dashed line, as 158 is bigger", "On the dashed line", "Further right than the dot at arm span 160"]
      answer: 0
      feedback: [null, "158 is the arm span, which goes across. The height is 156, which is less than 158.", "On the line the two numbers are equal; these are 2 apart.", "158 is less than 160, so it is further left."]
      explain: "Height 156 is less than arm span 158, so the dot is below the line, and it sits left of the 160 dot."
  - check:
      type: number
      q: "Review: the heights of four students are $150$, $157$, $156$ and $163$ cm. What is their mean height, in cm?"
      answer: 156.5
      explain: "150 + 157 + 156 + 163 = 626 and 626 ÷ 4 = 156.5."
```

### Reading a height

### Below or above

### Review

From earlier years: the mean of a few measurements.

## Make: is arm span the same as height?

```step
stage: make
insight: "Back to the opening question: counting how close the twelve dots are to the dashed line gives a first answer, and a careful sentence says what the plot shows and what it doesn't."
tasks:
  - hint: ["For each dot, subtract the arm span from the height and ignore the sign.", "Differences: 2, 2, 2, 3, 2, 2, 3, 3, 2, 2, 4, 2. Count the ones that are 2 or less."]
    check:
      type: reasoning
      paper: true
      q: "Use the twelve students (made up): arm span (across, up) as listed in the plot. For how many students is the height within $2$ cm of the arm span, above or below?"
      steps:
        - ["The differences (height − arm span) are $-2, 2, -2, 3, -2, 2, -3, 3, -2, 2, -4, 2$", "a dot's distance from the dashed line is its difference, whatever the sign"]
        - ["The sizes are $2, 2, 2, 3, 2, 2, 3, 3, 2, 2, 4, 2$", "ignore the sign: close to the line either way"]
        - ["$8$ of them are $2$ or less", "count them"]
      answer: "8"
      answerLabel: "Students within 2 cm"
      tolerance: 0
      feedback:
        - ["4", "Four is how many are NOT within 2 cm. Count the differences of 2 or less: eight of the twelve."]
        - ["12", "Four students are 3 or 4 cm apart, so not all twelve are within 2 cm."]
      criteria:
        - "I worked out height minus arm span for all twelve students."
        - "I counted a dot as close if the difference was 2 or less, above or below."
      explain: "The differences in size are 2, 2, 2, 3, 2, 2, 3, 3, 2, 2, 4, 2. Eight are 2 or less; the other four are 3 or 4."
  - check:
      type: question
      q: "Which sentence best answers 'Is your arm span the same as your height?' for these twelve students?"
      options: ["About the same: every dot is near the dashed line, with about half above and half below", "Exactly the same, because the dots are on the line", "No, because most of the dots are not on the line", "It can't be answered from a plot"]
      answer: 0
      feedback: [null, "Only dots exactly on the line would be exactly the same, and none of the dots is on it.", "None is exactly on the line, but all are within 4 cm of it. That is close.", "A plot is just the way to see it: the dots show how close the two measurements are."]
      explain: "All twelve dots are within 4 cm of the dashed line, six above and six below. So arm span and height are about the same for these students, not exactly."
```

### How close

Work this out on paper first, then type your answer.

### The best sentence

The twelve students and Tom are made up for this lesson. Your own class's measurements will differ.

**Also used in**

- **Science.** An experiment plots one measurement against another, such as the length of a spring against the weight on it.
- **Sport.** A coach plots the height of players against how far they jump to look for a pattern.
- **Next lesson.** Describing what a scatterplot shows: how the dots slope, how tightly they cluster and whether they follow a line.
