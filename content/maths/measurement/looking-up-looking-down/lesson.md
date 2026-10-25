---
order: 37
unit: trig10
node: AC9M10M03 n1
uses: [AC9M9M03 n1, AC9M9M03 n2]
assumes: [AC9M9M03 n1, AC9M9M03 n2]
connection: lifeguard-tower
title: Looking up, looking down
summary: "An angle of depression from the top and an angle of elevation from the bottom are the same size. Draw the triangle, put the angle at the right corner, and name the sides from it."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "The lifeguard's eyes are 6 m above the sand. The swimmer is somewhere out there. How far?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8394
  url: http://127.0.0.1:8394/index.html
  readySelector: "#board"
  layout: full
---
A lifeguard sits in a tower with her eyes 6 m above the sand. She looks down at a swimmer, 8° below the horizontal (made up for the task, and we'll treat the water as level with the sand). How far out is the swimmer? Have a guess before you read on, and we'll come back to it at the end.

<figure class="situation" role="img" aria-label="A lifeguard's tower 6 metres high on the left, and a swimmer on the right at ground level. A dashed horizontal line runs from the lifeguard's eyes. The line of sight down to the swimmer makes an angle of 8 degrees with it. At the swimmer there is a second angle, between the ground and the line of sight, marked with a question mark."><svg viewBox="0 0 360 180" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="10" y1="150" x2="350" y2="150" stroke-width="1.5"/><rect x="40" y="60" width="20" height="90" stroke-width="1.5" fill="#888780" fill-opacity="0.2"/><circle cx="50" cy="52" r="4" fill="currentColor"/><line x1="30" y1="52" x2="30" y2="150" stroke-width="1"/><line x1="26" y1="52" x2="34" y2="52" stroke-width="1"/><line x1="26" y1="150" x2="34" y2="150" stroke-width="1"/><text x="6" y="106" fill="currentColor" stroke="none">6 m</text><line x1="50" y1="52" x2="340" y2="52" stroke-width="1" stroke-dasharray="5 4"/><line x1="50" y1="52" x2="320" y2="146" stroke="#D85A30" stroke-width="2.5"/><circle cx="320" cy="146" r="4" fill="currentColor"/><path d="M110 52 A60 60 0 0 1 106.6 71.7" stroke-width="1.4"/><text x="118" y="68" fill="currentColor" stroke="none">8°</text><path d="M260 150 A60 60 0 0 1 263.4 130.3" stroke-width="1.4"/><text x="232" y="142" fill="currentColor" stroke="none">?°</text><text x="170" y="168" fill="currentColor" stroke="none">how far out? ?</text><text x="250" y="20" fill="currentColor" stroke="none" font-size="11" opacity="0.8">Not to scale.</text></svg></figure>

## Predict: the swimmer looks back

```step
stage: predict
insight: "Committing to the swimmer's angle shows who thinks the angle of depression and the angle of elevation are different angles, or measures the second one from the tower."
check:
  type: predict
  q: "The lifeguard looks down at the swimmer at 8° below the horizontal. The swimmer looks up at the lifeguard's eyes. What is the swimmer's angle of elevation, measured up from the flat sand?"
  options:
    - "8°"
    - "82°"
    - "90°"
    - "Can't tell without the distance"
  actual: "8°. The lifeguard's horizontal line and the sand are parallel, so the angle down at her end and the angle up at the swimmer's end are alternate angles. They're equal."
```

## Run: both ends of the line

```step
stage: run
insight: "The board draws the angle of depression at the top and the angle of elevation at the bottom as one pair of equal angles, and the distance comes from the height and the angle."
try: { playground: board, starter: "tower.yml#run", height: 560 }
check: { type: board, text: "Set the angle $t$ to $8$ and the height $h$ to $6$. Read the distance. Was your prediction right?", when: "t = 8 and h = 6" }
```

Slide the angle and watch both ends. The line of sight is the same line for both of them. The height is opposite the angle at the bottom, and the distance along the sand is next to it.

## Investigate: draw it, then name the sides

```step
stage: investigate
insight: "The angle goes in the corner where the horizontal meets the line of sight. Put it at the bottom, where the height is opposite it, and tangent does the rest. Dee puts the 8° at the top, inside the triangle, and the sides swap."
tasks:
  - check:
      type: reasoning
      paper: true
      q: "A hiker stands on level ground and looks up at the top of a 30 m lookout tower. The angle of elevation is 25°. How far is she from the foot of the tower? (1 decimal place, ignoring her eye height)"
      steps:
        - ["The 25° is at the hiker's end. The tower is opposite it and the ground distance is next to it.", "draw the triangle and mark the angle first"]
        - ["$\\tan 25° = \\dfrac{30}{d}$", "opposite over adjacent"]
        - ["$d = \\dfrac{30}{\\tan 25°}$", "the unknown is the bottom of the fraction, so divide"]
        - ["$d = 64.3$ m", "work it out"]
      answer: "64.3"
      answerLabel: "Distance (metres)"
      tolerance: 0.2
      feedback:
        - ["14", "That's 30 × tan 25°. The distance is the bottom of the fraction, so divide."]
        - ["71", "That's 30 ÷ sin 25°, the length of the line of sight. The tower is opposite the angle and the distance is next to it: that's tangent."]
      criteria:
        - "I drew the triangle and put the angle at the hiker's end."
        - "I named the tower as opposite and the distance as adjacent."
        - "I divided, because the distance is the bottom of the fraction."
      explain: "tan 25° = 30 ÷ d, so d = 30 ÷ tan 25° = 64.3 m."
  - check:
      type: bug
      code: "working.txt#dee"
      text: "Dee finds how far out the swimmer is. Click the line where her working goes wrong."
      answer: 2
      fault: logic
      misconception: depression-from-vertical
      explain: "Line 2: the angle of depression is measured down from the horizontal, not from the tower. The 8° is between the dashed line and the line of sight, so the triangle's angle at the swimmer is 8°, and the tower is opposite it."
  - check:
      type: number
      q: "How far is the lifeguard's eye from the swimmer, along the line of sight? Use $\\sin 8° = 0.1392$. (1 decimal place)"
      answer: 43.1
      tolerance: 0.15
      explain: "The tower, 6 m, is opposite the 8° angle and the line of sight is the hypotenuse, so sin 8° = 6 ÷ line. Line = 6 ÷ 0.1392 = 43.1 m."
```

### From the other end

Here is one that looks down from a cliff.

```worked
\text{angle at the boat} = 22° :: The angle of depression from the clifftop is the same size as the angle of elevation from the boat.
\tan 22° = \dfrac{45}{d} :: The cliff, 45 m, is opposite the angle. The distance along the water is next to it.
d = \dfrac{45}{\tan 22°} = 111.4 :: Divide, because the distance is the bottom of the fraction.
```

A walker on a 45 m clifftop sees a boat at an angle of depression of 22°. The boat is about 111 m out.

Now try one on paper, looking up this time: a hiker, a 30 m tower and an angle of elevation of 25°. Draw the triangle first.

### Find the mistake

Read Dee's working. Where is the 8° measured from?

### The line of sight

Same triangle, a different side.

## Modify: change the situation

```step
stage: modify
insight: "Setting the triangle up for a new case: from the bottom looking up, with eye height added, and when the target is almost under you."
try: { playground: board, starter: "tower.yml#vary", height: 560 }
tasks:
  - hint: ["Draw the triangle, with the angle at the kayaker.", "The drone's height is opposite the angle."]
    check:
      type: question
      q: "A drone hovers 40 m above a pond. A kayaker is 30 m from the point under it and looks up at the drone. Which equation gives her angle of elevation, $t$?"
      options:
        - "tan t = 40 ÷ 30"
        - "tan t = 30 ÷ 40"
        - "sin t = 40 ÷ 30"
        - "tan t = 40 × 30"
      answer: 0
      feedback:
        - null
        - "30 ÷ 40 would put the angle at the drone's end. The kayaker's angle has the drone's height opposite it."
        - "A sine can't be more than 1, and 40 ÷ 30 isn't a ratio of the hypotenuse. The two sides you know are opposite and adjacent: tangent."
        - "A ratio divides the two sides. It doesn't multiply them."
      explain: "At the kayaker, the drone's height (40) is opposite and the ground distance (30) is adjacent, so tan t = 40 ÷ 30."
    smaller:
      check:
        type: question
        q: "The angle is at the kayaker. Is the drone's 40 m height opposite that angle, or next to it?"
        options: ["Opposite it", "Next to it"]
        answer: 0
        feedback: [null, "The height is across from the angle, not touching it."]
        explain: "The height doesn't touch the angle at the kayaker. It's opposite."
  - hint: ["First find how far the top is above her eyes.", "Then add her eye height."]
    check: { type: number, q: "A student with her eyes $1.6$ m above the ground stands $40$ m from a tree. The angle of elevation of the top, measured from her eyes, is $30°$. How tall is the tree? ($\\tan 30° = 0.5774$; 1 decimal place)", answer: 24.7, tolerance: 0.15, explain: "Above her eyes: 40 × 0.5774 = 23.1 m. Add her eye height, 1.6 m: 24.7 m." }
    smaller:
      check: { type: "number", q: "First, how far is the top above her eyes? ($\\tan 30° = 0.5774$; 1 decimal place)", answer: 23.1, tolerance: 0.1, explain: "40 × 0.5774 = 23.1 m above her eyes." }
  - hint: ["Picture the swimmer coming in closer and closer to the tower.", "What happens to the line of sight?"]
    check:
      type: question
      q: "Edge case: the swimmer swims in until she's almost at the foot of the tower. What happens to the lifeguard's angle of depression?"
      options:
        - "It gets close to 90°"
        - "It gets close to 0°"
        - "It stays at 8°"
        - "It gets close to 45°"
      answer: 0
      feedback:
        - null
        - "That's when the swimmer is far away. Close in, the line of sight points nearly straight down."
        - "The angle changes whenever the swimmer moves."
        - "45° is when the distance equals the height. Closer than that, the angle is bigger."
      explain: "As the swimmer gets nearer, the line of sight points more steeply down, and the angle gets close to 90°."
```

### Looking up at a drone

### Eye height

### Almost underneath

## Practise: elevation and depression

```step
stage: practise
insight: "Setting up from the picture each time, with the angle in the corner at the right end, in both directions."
tasks:
  - check:
      type: number
      q: "A cliff is $50$ m high. From the top, a boat is at an angle of depression of $20°$. How far is the boat from the foot of the cliff? ($\\tan 20° = 0.364$; 1 decimal place)"
      answer: 137.4
      tolerance: 0.3
      explain: "The angle at the boat is 20°. tan 20° = 50 ÷ d, so d = 50 ÷ 0.364 = 137.4 m."
    smaller:
      check:
        type: question
        q: "The angle of depression at the clifftop is 20°. What is the angle of elevation from the boat up to the clifftop?"
        options: ["20°", "70°", "90°", "40°"]
        answer: 0
        feedback: [null, "70° is the angle at the top inside the triangle.", "90° is the angle at the foot of the cliff.", "The two angles are equal, not doubled."]
        explain: "They're alternate angles, so both are 20°."
  - check:
      type: number
      q: "From a window $12$ m up, a ball lies on level ground $30$ m from the wall. What is the angle of depression of the ball from the window? (1 decimal place)"
      answer: 21.8
      tolerance: 0.1
      feedback:
        - ["68.2", "That's the angle at the window inside the triangle. The angle of depression is measured down from the horizontal, so it's tan⁻¹(12 ÷ 30)."]
      explain: "The angle at the ball is the same as the angle of depression. tan t = 12 ÷ 30 = 0.4, so t = tan⁻¹(0.4) = 21.8°."
    smaller:
      check: { type: "number", q: "At the ball, the window's height is opposite the angle and the 30 m is adjacent. What is opposite ÷ adjacent?", answer: 0.4, tolerance: 0.005, explain: "12 ÷ 30 = 0.4." }
  - check:
      type: number
      q: "Review: the two shorter sides of a right-angled triangle are $9$ and $12$. How long is the hypotenuse?"
      answer: 15
      explain: "9² + 12² = 81 + 144 = 225, and √225 = 15."
```

### The boat

### The ball

### Review

Pythagoras, from Year 8.

## Make: how far out

```step
stage: make
insight: "Back to the lifeguard: the same triangle, written up on paper, and a check on how sure we can be of the answer."
tasks:
  - hint: ["The angle is 8° at the swimmer.", "The tower is opposite and the distance is next to it."]
    check:
      type: reasoning
      paper: true
      q: "The lifeguard's eyes are 6 m above the sand and she looks down at the swimmer at an angle of depression of 8°. How far out is the swimmer? (1 decimal place. The numbers are made up for the task.)"
      steps:
        - ["The angle at the swimmer is also 8°, with the tower opposite and the distance next to it.", "draw it and mark the angle"]
        - ["$\\tan 8° = \\dfrac{6}{d}$", "opposite over adjacent"]
        - ["$d = \\dfrac{6}{\\tan 8°}$", "divide, because the distance is the bottom of the fraction"]
        - ["$d = 42.7$ m", "work it out"]
      answer: "42.7"
      answerLabel: "Distance (metres)"
      tolerance: 0.1
      feedback:
        - ["0.8", "That's 6 × tan 8°. The distance is the bottom of the fraction, so divide."]
        - ["43.1", "That's the line of sight, along the slope. The question wants the distance along the sand."]
      criteria:
        - "I put the angle at the swimmer, with the tower opposite it."
        - "I used tangent and divided."
        - "My answer is much bigger than 6, because 8° is a flat angle."
      explain: "tan 8° = 6 ÷ d, so d = 6 ÷ 0.1405 = 42.7 m."
  - check:
      type: question
      q: "What if the lifeguard's reading of the angle is out by 1°, and the true angle is 7°? How far out is the swimmer then?"
      options:
        - "About 49 m: roughly 6 m further out, so a small error matters a lot at a flat angle"
        - "About 43 m: one degree can't make a real difference"
        - "About 37 m: roughly 6 m closer"
        - "About 85 m: twice as far"
      answer: 0
      feedback:
        - null
        - "6 ÷ tan 7° is about 48.9 m, nearly 6 m more than 42.7 m."
        - "A smaller angle puts the swimmer further out, not closer."
        - "Nothing doubles here: 6 ÷ tan 7° is 48.9 m."
      explain: "6 ÷ tan 7° = 48.9 m. One degree out shifts the answer by about 6 m, because the angle is so flat."
```

### How far out

Back to the lifeguard. Work this out on paper first, then type your answer.

### One degree out

**Also used in**

- **Tree height.** Stand back from a tree and measure the angle up to its top: the same triangle as the lifeguard's, looked at from the bottom ([Find a side with trigonometry](../find-a-side-trig/)).
- **Bearings.** Next lesson: the angle is measured from north, and the two sides are north and east.
