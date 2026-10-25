---
order: 38
unit: trig10
node: AC9M10M03 n2
uses: [AC9M10M03 n1]
assumes: [AC9M9M03 n1, AC9M9M03 n2]
connection: orienteering-leg
title: Bearings
summary: "A bearing is an angle measured clockwise from north, in three figures. Draw the triangle with the angle at the start, then north is next to it and east is opposite it."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Orienteers don't say north-east. They say 040°. What does the number tell you?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8395
  url: http://127.0.0.1:8395/index.html
  readySelector: "#board"
  layout: full
---
An orienteering control is 600 m from the start, on a bearing of 040° (made up for the task). How far north of the start is it, and how far east? Have a guess before you read on, and we'll come back to it at the end.

<figure class="situation" role="img" aria-label="A compass cross with north at the top. From the start in the middle, a line runs 600 metres up and to the right to a control. The angle between the north line and this path is marked 040 degrees. The distances north and east are marked with question marks."><svg viewBox="0 0 360 200" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="80" y1="170" x2="80" y2="14" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="80" y1="170" x2="340" y2="170" stroke-width="1"/><text x="74" y="12" fill="currentColor" stroke="none">N</text><line x1="80" y1="170" x2="238" y2="42" stroke="#D85A30" stroke-width="2.5"/><circle cx="238" cy="42" r="5" fill="currentColor"/><line x1="80" y1="42" x2="238" y2="42" stroke-width="1" stroke-dasharray="3 3"/><line x1="238" y1="42" x2="238" y2="170" stroke-width="1" stroke-dasharray="3 3"/><path d="M80 140 A30 30 0 0 1 105 148" stroke-width="1.4" transform="translate(0,0)"/><text x="94" y="136" fill="currentColor" stroke="none">040°</text><text x="150" y="112" fill="currentColor" stroke="none" transform="rotate(-39 150 112)">600 m</text><text x="40" y="110" fill="currentColor" stroke="none">north ?</text><text x="150" y="188" fill="currentColor" stroke="none">east ?</text><text x="250" y="30" fill="currentColor" stroke="none">control</text><text x="46" y="184" fill="currentColor" stroke="none">start</text><text x="250" y="195" fill="currentColor" stroke="none" font-size="11" opacity="0.8">Not to scale.</text></svg></figure>

## Predict: north or east

```step
stage: predict
insight: "Committing to which part is bigger shows who reads 040° as a direction near north, and who reads it as 40 degrees from east or as north-east."
check:
  type: predict
  q: "The control is 600 m away on a bearing of 040°. Which is bigger: how far it is north of the start, or how far it is east?"
  options:
    - "North is bigger"
    - "East is bigger"
    - "They're the same"
    - "Can't tell without a calculator"
  actual: "North is bigger. A bearing is measured clockwise from north, so 040° is only 40° round from north, closer to north (000°) than to east (090°)."
```

## Run: turn the bearing

```step
stage: run
insight: "Turning the bearing clockwise from north moves the control round the start: north part first shrinks and east part grows, and past 090° the control is south of the start."
try: { playground: board, starter: "bearing.yml#run", height: 600 }
check: { type: board, text: "Set the bearing $t$ to $40$ and the distance $h$ to $400$. Read the north and east parts. Was your prediction right?", when: "t = 40 and h = 400" }
```

Slide the bearing right round. Where is the control when the bearing is 090°? When it's 180°?

## Investigate: the triangle at the start

```step
stage: investigate
insight: "The bearing's angle is at the start, between the north line and the path. North is next to it and east is opposite it. Mina puts the angle against the east line, and the sides swap."
tasks:
  - check:
      type: reasoning
      paper: true
      q: "A hiker walks 5 km on a bearing of 130°. How far east of the start is she? (1 decimal place)"
      steps:
        - ["130° is past due east (090°), so she's heading south of east.", "sketch the compass cross and the path first"]
        - ["The angle from the north–south line is $180° - 130° = 50°$, measured from south.", "use the line she's closest to"]
        - ["East is opposite the 50° angle, so east $= 5 \\sin 50°$", "sine, because east is across from the angle"]
        - ["$5 \\sin 50° = 3.8$ km", "work it out"]
      answer: "3.8"
      answerLabel: "East (km)"
      tolerance: 0.05
      feedback:
        - ["3.2", "That's the south part, 5 cos 50°. East is opposite the angle."]
      criteria:
        - "I sketched the path and saw it points south of east."
        - "I found the angle from the north–south line."
        - "I used sine for the east part, because east is opposite the angle."
      explain: "The angle from south is 180° − 130° = 50°. East is opposite it: 5 × sin 50° = 3.8 km. (The south part is 5 × cos 50° = 3.2 km.)"
  - check:
      type: bug
      code: "working.txt#mina"
      text: "Mina finds how far east a boat has sailed. Click the line where her working goes wrong."
      answer: 2
      fault: logic
      misconception: bearing-from-east
      explain: "Line 2: a bearing is measured from north, so the 25° is between the north line and the path. East is opposite that angle, so east = 800 × sin 25° = 338 m, not 800 × cos 25° = 725 m."
  - check:
      type: question
      q: "Which of these bearings points mostly south and a little west?"
      options: ["200°", "160°", "020°", "340°"]
      answer: 0
      feedback:
        - null
        - "160° is mostly south but a little east (160° is 20° short of due south)."
        - "020° is mostly north and a little east."
        - "340° is mostly north and a little west."
      explain: "180° is due south. 200° is 20° further round, so a little west of south."
```

### Past due east

Here is one that stays in the first quarter, between north and east.

```worked
\text{angle from north} = 70° :: A bearing is measured clockwise from north, so the angle at the start is the bearing, 70°.
\text{north} = 300 \cos 70° = 102.6 :: North is next to the 70° angle, so cosine.
\text{east} = 300 \sin 70° = 281.9 :: East is opposite the 70° angle, so sine.
```

A walker goes 300 m on a bearing of 070°: about 103 m north and 282 m east.

Now try one on paper that goes past east: 5 km on a bearing of 130°. Sketch the path first, then find the angle from the north–south line.

### Find the mistake

Read Mina's working. Which side is next to the bearing's angle?

### Reading a bearing

## Modify: change the leg

```step
stage: modify
insight: "Changing the bearing: a different first-quarter leg, a leg that goes south, and the edge case of due east."
try: { playground: board, starter: "bearing.yml#vary", height: 600 }
tasks:
  - hint: ["East is opposite the 60° angle.", "500 × sin 60°."]
    check: { type: number, q: "A control is $500$ m away on a bearing of $060°$. How far east is it? (nearest metre)", answer: 433, tolerance: 0.6, explain: "East is opposite the 60° angle: 500 × sin 60° = 433 m." }
  - hint: ["200° is 20° past south.", "South is next to that 20° angle."]
    check: { type: number, q: "A boat sails $800$ m on a bearing of $200°$. How far south does it go? (nearest metre)", answer: 752, tolerance: 1, feedback: [["291", "That's the west part, 800 sin 20°. South is next to the 20° angle."]], explain: "200° is 20° past due south, so the angle from the south line is 20°. South is next to it: 800 × cos 20° = 752 m." }
    smaller:
      check:
        type: question
        q: "A bearing of 200° is past due south (180°). How many degrees past south is it?"
        options: ["20°", "70°", "160°", "200°"]
        answer: 0
        feedback: [null, "70° is 90° less 20°. Count from the south line, 180°.", "160° is 20° short of south.", "200° is the bearing itself, measured from north."]
        explain: "200° − 180° = 20°, so the path is 20° round from the south line."
  - hint: ["Where is 090° on the compass?", "How far north is due east?"]
    check:
      type: question
      q: "Edge case: a leg is $300$ m long on a bearing of exactly 090°. What are its north and east parts?"
      options:
        - "0 m north, 300 m east"
        - "300 m north, 0 m east"
        - "212 m north, 212 m east"
        - "0 m north, 0 m east"
      answer: 0
      feedback:
        - null
        - "That's due north, 000°."
        - "That's a bearing of 045°."
        - "The leg is 300 m long, so it has to go somewhere."
      explain: "090° is due east. Nothing north, all 300 m east. cos 90° = 0 and sin 90° = 1."
```

### A different control

### Heading south

### Due east

## Practise: north, east and bearings

```step
stage: practise
insight: "Finding a part from a bearing, a bearing from the two parts, and distance from the parts."
tasks:
  - check:
      type: number
      q: "A ship sails $120$ km on a bearing of $030°$. How far north has it gone? (nearest km)"
      answer: 104
      tolerance: 0.6
      explain: "North is next to the 30° angle: 120 × cos 30° = 104 km."
  - check:
      type: number
      q: "A walker goes $300$ m north and then $400$ m east. What is her bearing from the start? (nearest degree)"
      answer: 53
      tolerance: 0.5
      feedback:
        - ["37", "That's the angle from the east line. A bearing is measured from north."]
      explain: "East is opposite the bearing's angle and north is next to it: tan t = 400 ÷ 300, so t = 53°. The bearing is 053°."
  - check:
      type: number
      q: "Review: a helicopter flies from its base to a farm that is $12$ km east and $5$ km north. How far is the flight, in km?"
      answer: 13
      explain: "5² + 12² = 169, and √169 = 13 km."
```

### North part

### The bearing back

### Review

Pythagoras, from Year 8.

## Make: the orienteering leg

```step
stage: make
insight: "Back to the control: the north part and the east part from one bearing and one distance, and what a compass doesn't tell you."
tasks:
  - hint: ["The angle at the start is 40°.", "North is next to it."]
    check:
      type: reasoning
      paper: true
      q: "The control is 600 m away on a bearing of 040°. How far north of the start is it? (nearest metre. The numbers are made up for the task.)"
      steps:
        - ["The angle between the north line and the path is 40°.", "a bearing is measured from north"]
        - ["North is next to the 40° angle, so north $= 600 \\cos 40°$", "cosine, because north is adjacent"]
        - ["$600 \\cos 40° = 460$ m", "work it out"]
      answer: "460"
      answerLabel: "North (metres)"
      tolerance: 1
      feedback:
        - ["386", "That's the east part, 600 sin 40°. North is next to the angle."]
      criteria:
        - "I put the 40° between the north line and the path."
        - "I used cosine for the north part."
        - "My north part is bigger than my east part, like my prediction."
      explain: "North = 600 × cos 40° = 459.6 m, so about 460 m."
  - check: { type: number, q: "Now the east part of the same leg. How far east is the control? (nearest metre)", answer: 386, tolerance: 1, explain: "East is opposite the 40° angle: 600 × sin 40° = 385.7 m, about 386 m." }
  - check:
      type: question
      q: "An orienteer follows a compass bearing exactly, but ends up beside the control, not on it. Which is a reason that the triangle can't show?"
      options:
        - "The compass needle points to magnetic north, which is not quite the map's north"
        - "A bearing can only be measured to the nearest 10°"
        - "North and east are always the same distance"
        - "Cosine and sine are only accurate for 40°"
      answer: 0
      feedback:
        - null
        - "A compass can be read more finely than that."
        - "North and east differ, as the board showed."
        - "The ratios are right for any angle."
      explain: "The needle points to magnetic north, which differs a little from the north on the map. Orienteering maps say how much, and walkers allow for it."
```

### North

### East

### Off the line

**Also used in**

- **Straight-line distance.** The helicopter flight from base to farm (12 km east, 5 km north) is Pythagoras on the same two parts: the north and east parts are the legs of the triangle.
- **Navigation.** Orienteering, sailing and search and rescue all give a direction as a bearing and a distance.
