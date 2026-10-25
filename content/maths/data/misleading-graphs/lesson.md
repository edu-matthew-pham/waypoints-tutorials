---
order: 50
unit: claims10
node: AC9M10ST01 n1
uses: [AC9M9ST02 n2]
assumes: [AC9M9ST02 n2]
connection: cut-axis
title: Misleading graphs
summary: "A graph can be drawn so that a small change looks huge. Find the feature that misleads, say how it works on the reader, and redraw the numbers honestly."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Your club's newsletter says membership is soaring, and its graph agrees."
---
The newsletter graph shows the club's membership for the last five years. The line starts near the bottom corner and finishes near the top, and the headline says "Membership is soaring!". The five numbers are labelled on the graph. Have a guess how much the club really grew, and we'll come back to it at the end. (The club and its numbers are made up for the task.)

<figure class="situation" role="img" aria-label="A line graph of club membership from 2022 to 2026. The vertical axis runs from 205 to 225. The line starts low on the left at 212 and climbs steeply to 224 near the top on the right."><svg viewBox="0 0 380 190" width="380" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="70" y1="20" x2="70" y2="140" stroke-width="1.5"/><line x1="70" y1="140" x2="350" y2="140" stroke-width="1.5"/><text x="12" y="24" fill="currentColor" stroke="none">225</text><text x="12" y="84" fill="currentColor" stroke="none">215</text><text x="12" y="144" fill="currentColor" stroke="none">205</text><polyline points="100,98 160,86 220,68 280,56 340,26" stroke-width="2.6" stroke="#D85A30"/><g fill="#D85A30" stroke="none"><circle cx="100" cy="98" r="4"/><circle cx="160" cy="86" r="4"/><circle cx="220" cy="68" r="4"/><circle cx="280" cy="56" r="4"/><circle cx="340" cy="26" r="4"/></g><g fill="currentColor" stroke="none"><text x="84" y="160">2022</text><text x="144" y="160">2023</text><text x="204" y="160">2024</text><text x="264" y="160">2025</text><text x="324" y="160">2026</text><text x="80" y="92" font-size="12">212</text><text x="322" y="20" font-size="12">224</text></g><text x="210" y="182" text-anchor="middle" fill="currentColor" stroke="none" font-size="12" opacity="0.8">Members (made up)</text></svg></figure>

## Predict: how much it really grew

```step
stage: predict
insight: "Giving the growth in percent shows who trusts how steep the line looks, and who reads the two labelled numbers."
check:
  type: predict
  q: "The labels say 212 members in 2022 and 224 in 2026. About what percentage did membership really grow?"
  options:
    - "About 6%"
    - "About 12%"
    - "About 100%"
  actual: "About 6%. 224 − 212 = 12 members, and 12 ÷ 212 is about 5.7%. The line looks steep because the vertical axis starts at 205, not at 0."
```

## Run: how steep it looks

```step
stage: run
insight: "On this graph a point's height measures how far it is above 205, not how many members there are, so the heights are in a different ratio from the members."
check:
  type: number
  q: "The 2022 point is 7 units above the bottom of the axis (212 − 205) and the 2026 point is 19 units above it (224 − 205). How many times as high does the 2026 point look? (1 decimal place)"
  answer: 2.7
  tolerance: 0.05
  explain: "19 ÷ 7 is about 2.7. On the page the line looks nearly three times as high, but the club has 1.06 times as many members."
```

## Investigate: find the feature and redraw

```step
stage: investigate
insight: "A misleading graph usually has one feature doing the work: a vertical axis that doesn't start at zero, a window that suits the story, or a picture that grows in two directions. Naming the feature and how it acts on the reader is the skill."
tasks:
  - hint: ["Find how far each bar's real value is above 0.", "$(520 - 480) \\div 480$."]
    check:
      type: reasoning
      paper: true
      q: "A canteen chart shows weekly sales of $480 in week 1 and $520 in week 8 on bars whose axis starts at $470. By what percentage did sales really grow? (1 decimal place) (Made up for the task.)"
      steps:
        - ["$520 - 480 = 40$", "the real difference in dollars"]
        - ["$40 \\div 480 \\times 100 = 8.3$", "divide by the starting value, then make it a percentage"]
      answer: "8.3"
      answerLabel: "Percentage growth"
      tolerance: 0.1
      feedback:
        - ["40", "That is the difference in dollars. The question asks for a percentage of the starting sales."]
        - ["400", "That is how much taller the bar looks above the axis start ($10 and $50 tall). The real sales are $480 and $520."]
      criteria:
        - "I used the real values, not the bar heights."
        - "I divided by the starting value."
        - "I could say why the bars look so different."
      explain: "40 ÷ 480 = 0.0833, so sales grew about 8.3%. The axis starts at $470, so the bars look 10 and 50 tall: five times as tall for a real growth of under a tenth."
  - check:
      type: question
      q: "Which feature of the club's graph makes the growth look bigger than it is?"
      options:
        - "The vertical axis starts at 205, not at 0"
        - "The line is orange"
        - "The years are along the bottom"
        - "There are only five points"
      answer: 0
      feedback:
        - null
        - "Colour doesn't change what the numbers say."
        - "Years along the bottom is how time is normally drawn."
        - "Five points are enough to show a trend."
      explain: "With the axis cut at 205 the heights show only the part above 205, so a rise of 12 members fills most of the graph."
  - hint: ["If the axis started at 0, each point's height would be its number of members.", "224 ÷ 212."]
    check:
      type: number
      q: "If the vertical axis started at 0, how many times as high as the 2022 point would the 2026 point be? (2 decimal places)"
      answer: 1.06
      tolerance: 0.01
      explain: "224 ÷ 212 is about 1.06: the two points would be almost the same height."
    smaller:
      check:
        type: number
        q: "If the axis started at 0 and one square stood for one member, how many squares high would the 2022 point be?"
        answer: 212
        tolerance: 0
        explain: "The 2022 point is 212 members, so it would be 212 squares high."
  - check:
      type: bug
      code: "working.txt#kai"
      text: "Kai reads the club's graph. Click the line where the working goes wrong."
      answer: 3
      fault: logic
      misconception: truncated-axis-ratio
      explain: "Line 3: the heights are measured from 205, not from 0, so 19 ÷ 7 compares how far above 205 the points are. The members are 224 and 212, a ratio of about 1.06."
  - hint: ["Area is width times height.", "2 × 2."]
    check:
      type: number
      q: "A pictograph shows twice as many cars sold this year by drawing the car icon twice as wide and twice as tall. How many times as big, by area, does the icon look?"
      answer: 4
      tolerance: 0
      explain: "Twice as wide and twice as tall is 2 × 2 = 4 times the area. The eye reads the whole picture, so the icon looks four times as big for twice the cars."
```

### Redraw it honestly

```worked
\text{Axis starts at } 205 :: The heights are 7 and 19 above the axis, so the line looks 2.7 times as high.
212 \text{ and } 224 :: The real values are the labels.
224 - 212 = 12 :: The real change in members.
12 \div 212 \approx 0.057 :: As a fraction of the starting members.
\approx 5.7\% :: The honest growth is under 6%.
```

Now try one on paper: the canteen chart, with sales of $480 in week 1 and $520 in week 8 and the axis starting at $470. Work out how much sales really grew, as a percentage.

### Which feature

### Honest height

### Find the mistake

Read Kai's working on the club's graph. Where does it go wrong?

### Icons that grow

## Modify: when is it a trick?

```step
stage: modify
insight: "Not every graph with a cut axis misleads: it depends on what the reader is asked to compare. Telling a trick from a sensible choice is part of reading a graph."
tasks:
  - check:
      type: question
      q: "Edge case: a line graph of a city's highest temperature each day runs from 14 °C to 26 °C, with the vertical axis starting at 10 °C. Is that misleading?"
      options:
        - "Not really: a reader wants to see how the temperature changes, and 0 °C doesn't mean 'no temperature'"
        - "Yes: every vertical axis must start at 0"
        - "Yes: line graphs are never fair"
        - "No, because the line is straight"
      answer: 0
      feedback:
        - null
        - "Zero is a good start for bars that compare sizes. A line graph of change over time can start higher."
        - "Line graphs are fine for change over time."
        - "How straight the line is has nothing to do with the axis."
      explain: "The reader is looking at ups and downs, not comparing heights as ratios, and the scale is labelled. A cut axis misleads when the picture invites you to compare sizes."
  - check:
      type: question
      q: "A report on sales shows only the three months when sales went up and leaves out the other nine. What is the trick?"
      options:
        - "The window is chosen to suit the story"
        - "The report uses months"
        - "The report shows sales"
        - "The report has a table"
      answer: 0
      feedback:
        - null
        - "Months are a fine unit."
        - "Sales are what it's about."
        - "A table is fine."
      explain: "Picking the favourable months supports a story that the whole year doesn't."
  - check:
      type: question
      q: "A 3D pie chart is tilted so the front slice looks much bigger than the same-sized slice at the back. How does this mislead?"
      options:
        - "The slice nearest the eye is drawn larger, so size no longer matches the share"
        - "Pie charts show too many numbers"
        - "The back slice is a different colour"
        - "The slices don't add to 100%"
      answer: 0
      feedback:
        - null
        - "The number of slices isn't the problem."
        - "Colour isn't the problem."
        - "They may add to 100%. The trick is the tilt."
      explain: "The tilt makes the front slice take up more of the picture than its share of the whole."
```

### A cut axis that is fine

### Choosing the window

### A tilted pie

## Practise: bars on a cut axis

```step
stage: practise
insight: "Working out how bars on a cut axis look compared with what the numbers really say, and a review of percentage change."
tasks:
  - hint: ["Measure each bar from 60.", "$90 - 60$ and $70 - 60$."]
    check: { type: number, q: "Two bars are drawn on an axis that starts at 60. Their values are 90 and 70. How many times as tall does the first bar look as the second? (1 decimal place)", answer: 3, tolerance: 0.05, explain: "(90 − 60) ÷ (70 − 60) = 30 ÷ 10 = 3." }
  - hint: ["Difference first, then divide by the smaller value.", "20 ÷ 70."]
    check: { type: number, q: "The values really are 90 and 70. How many percent bigger is 90 than 70? (1 decimal place)", answer: 28.6, tolerance: 0.1, explain: "(90 − 70) ÷ 70 = 0.2857, about 28.6%." }
  - hint: ["Decrease ÷ original price.", "120 ÷ 800."]
    check: { type: number, q: "Review: a phone's price falls from $800 to $680. By what percentage did it fall?", answer: 15, tolerance: 0.05, explain: "120 ÷ 800 = 0.15, so 15%." }
```

### Bars that look 3 times as tall

### The real difference

### Review

## Make: the newsletter, honestly

```step
stage: make
insight: "Back to the club: work out the honest growth, then choose a headline that matches it."
tasks:
  - hint: ["Real values are the labels, 212 and 224.", "12 ÷ 212."]
    check:
      type: reasoning
      paper: true
      q: "The club had 212 members in 2022 and 224 in 2026. By what percentage did membership grow? (1 decimal place)"
      steps:
        - ["$224 - 212 = 12$", "the real change in members"]
        - ["$12 \\div 212 \\times 100 = 5.7$", "as a percentage of the starting members"]
      answer: "5.7"
      answerLabel: "Percentage growth"
      tolerance: 0.1
      feedback:
        - ["12", "That is the number of extra members. The question asks for a percentage."]
        - ["270", "That is how the heights compare on the cut axis. Use the real member numbers."]
      criteria:
        - "I used the real member numbers."
        - "I divided by the starting number."
        - "I could say what the graph did wrong."
      explain: "12 ÷ 212 = 0.0566, so membership grew about 5.7% in four years. It's real growth, but not 'soaring'."
  - check:
      type: question
      q: "Which headline matches the numbers best?"
      options:
        - "Membership up about 6% in four years"
        - "Membership soaring: nearly three times as high"
        - "Membership doubles"
        - "Membership unchanged"
      answer: 0
      feedback:
        - null
        - "That is how the heights look on the cut axis, not the members."
        - "212 to 224 is nowhere near double."
        - "It did grow, a little."
      explain: "About 6% is what the labelled numbers say. Redraw the graph with the axis from 0 and the line is nearly flat."
```

### The honest growth

Work this out on paper first, then type your answer.

### The honest headline

The club and its numbers are made up for the task.

**Also used in**

- **News and advertising.** Charts of prices, temperatures and polls often cut the axis or pick a window to make a change look bigger.
- **Science.** A graph of a measurement against time is read for change, so a labelled cut axis can be fine there.
- **Next lesson.** Who did they ask? A report's numbers only speak for the people it asked.
