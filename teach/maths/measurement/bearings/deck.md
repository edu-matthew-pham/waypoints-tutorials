---
marp: true
theme: default
html: true
---

# Bearings

Area, volume, circles and Pythagoras · Trigonometry in practice

<!-- Speaker note: Students read three-figure bearings, draw the triangle with the bearing's angle at the start, and find the north and east parts of a leg, or the bearing from the parts (AC9M10M03, node 2). About 40 minutes (Predict and Run 8 min · Investigate 12 min · Modify 10 min · Practise and Make 10 min). -->

---

## Today

- I can read a three-figure bearing and say which way it points.
- I can find the north and east parts of a leg from its bearing and length.
- I can find a bearing from the north and east parts.

<!-- Speaker note: Before class: Do the Run board yourself first (the trig board's bearing view). Students need Looking up, looking down, and sine, cosine and tangent from Year 9. The one idea: a bearing is the angle from north, so north is next to it and east is opposite it, as long as the path is in the first quarter. Past 090° the path points south of east, and the angle in the triangle is measured from the south line (180° − the bearing). The board shows the north part going negative; we don't use negative sines here, the triangle does the work. The common mistake is Mina's: putting the bearing's angle against the east line. Distances and bearings are made up for the task. The note about magnetic north is general: orienteering maps say how far the needle is off. Teacher: Paper: the 130° try-one after the worked example and the north part in Make are worked on paper first. Look for the sketch of the compass cross first. -->

---

## Why it matters

> Orienteers don't say north-east. They say 040°. What does the number tell you?

<!-- Speaker note: An orienteering control is 600 m from the start, on a bearing of 040° (made up for the task). How far north of the start is it, and how far east? Have a guess before you read on, and we'll come back to it at the end. <figure class="situation" role="img" aria-label="A compass cross with north at the top. From the start in the middle, a line runs 600 metres up and to the right to a control. The angle between the north line and this path is marked 040 degrees. The distances north and east are marked with question marks."><svg viewBox="0 0 360 200" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="80" y1="170" x2="80" y2="14" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="80" y1="170" x2="340" y2="170" stroke-width="1"/><text x="74" y="12" fill="currentColor" stroke="none">N</text><line x1="80" y1="170" x2="238" y2="42" stroke="#D85A30" stroke-width="2.5"/><circle cx="238" cy="42" r="5" fill="currentColor"/><line x1="80" y1="42" x2="238" y2="42" stroke-width="1" stroke-dasharray="3 3"/><line x1="238" y1="42" x2="238" y2="170" stroke-width="1" stroke-dasharray="3 3"/><path d="M80 140 A30 30 0 0 1 105 148" stroke-width="1.4" transform="translate(0,0)"/><text x="94" y="136" fill="currentColor" stroke="none">040°</text><text x="150" y="112" fill="currentColor" stroke="none" transform="rotate(-39 150 112)">600 m</text><text x="40" y="110" fill="currentColor" stroke="none">north ?</text><text x="150" y="188" fill="currentColor" stroke="none">east ?</text><text x="250" y="30" fill="currentColor" stroke="none">control</text><text x="46" y="184" fill="currentColor" stroke="none">start</text><text x="250" y="195" fill="currentColor" stroke="none" font-size="11" opacity="0.8">Not to scale.</text></svg></figure> -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**The control is 600 m away on a bearing of 040°. Which is bigger: how far it is north of the start, or how far it is east?**

- They're the same
- East is bigger
- North is bigger
- Can't tell without a calculator

<!-- Speaker note: What happens: North is bigger. A bearing is measured clockwise from north, so 040° is only 40° round from north, closer to north (000°) than to east (090°). Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: show of hands. Those who chose east have read 040° as 40° from the east line. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Fmeasurement%2Fbearings%2Fstep-2&code=widget%3A+trig%0Aview%3A+bearing%0Aunits%3A+m%0Aslider+t%3A+0%2C+360%2C+90%2C+5%0Aslider+h%3A+100%2C+1000%2C+400%2C+50%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/measurement/bearings/?full=step-2#step-2)

<!-- Speaker note: Slide the bearing right round. Where is the control when the bearing is 090°? When it's 180°? -->

<!-- Speaker note: Teacher: before anyone moves a slider, ask where the control is when the bearing is 180°. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* North is bigger. A bearing is measured clockwise from north, so 040° is only 40° round from north, closer to north (000°) than to east (090°).

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Past due east

Here is one that stays in the first quarter, between north and east.

A walker goes 300 m on a bearing of 070°: about 103 m north and 282 m east.

Now try one on paper that goes past east: 5 km on a bearing of 130°. Sketch the path first, then find the angle from the north–south line.

$$\text{angle from north} = 70°$$

1) $\text{north} = 300 \cos 70° = 102.6$ — North is next to the 70° angle, so cosine.
2) $\text{east} = 300 \sin 70° = 281.9$ — East is opposite the 70° angle, so sine.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write angle from north = 70° and say "A bearing is measured clockwise from north, so the angle at the start is the bearing, 70°." Line 1: write north = 300 70° = 102.6 and say "North is next to the 70° angle, so cosine." Line 2: write east = 300 70° = 281.9 and say "East is opposite the 70° angle, so sine." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 20px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Past due east

**A hiker walks 5 km on a bearing of 130°. How far east of the start is she? (1 decimal place)**

* Answer: 130° is past due east (090°), so she's heading south of east. (sketch the compass cross and the path first); The angle from the north–south line is $180° - 130° = 50°$, measured from south. (use the line she's closest to); East is opposite the 50° angle, so east $= 5 \sin 50°$ (sine, because east is across from the angle); $5 \sin 50° = 3.8$ km (work it out)

<!-- Speaker note: The angle from south is 180° − 130° = 50°. East is opposite it: 5 × sin 50° = 3.8 km. (The south part is 5 × cos 50° = 3.2 km.) -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Mina finds how far east a boat has sailed. Click the line where her working goes wrong.**

```
 1  The boat sails 800 m on a bearing of 025°, so it heads a little east of north.
 2  That makes 25° the angle between its path and the east line.
 3  East is next to that angle, so east = 800 × cos 25° = 725 m.
```

* Answer: line 2

<!-- Speaker note: Line 2: a bearing is measured from north, so the 25° is between the north line and the path. East is opposite that angle, so east = 800 × sin 25° = 338 m, not 800 × cos 25° = 725 m. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Reading a bearing

**Which of these bearings points mostly south and a little west?**

- 020°
- 160°
- 200°
- 340°

* Answer: 200°

<!-- Speaker note: 180° is due south. 200° is 20° further round, so a little west of south. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Change the leg



- **A different control:** 
- **Heading south:** 
- **Due east:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/measurement/bearings/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Changing the bearing: a different first-quarter leg, a leg that goes south, and the edge case of due east. Hints, in order: East is opposite the 60° angle. / 500 × sin 60°. / 200° is 20° past south. / South is next to that 20° angle. / Where is 090° on the compass? / How far north is due east? For students who need more support: A printed compass cross with the start in the middle, and the angle for each question drawn in. For early finishers: Plan a two-leg course on the school grounds: 100 m on 040°, then 80 m on 130°. How far, and on what bearing, is the finish from the start? The hard part, on purpose: Which side is next to the angle. Ask: where does the bearing start from? Mark that line first. When students get stuck: A student uses cos for east. Ask: Which side is next to the bearing's angle, north or east? Fix: North. The bearing is measured from the north line, so north is adjacent: cosine for north, sine for east. / A student uses 130° as the angle in the triangle for a bearing of 130°. Ask: Sketch the path. Is the angle from the north line or the south line smaller? Fix: From the south line: 180° − 130° = 50°. / A student writes a bearing as 40°. Ask: How many figures does a bearing have? Fix: Three: 040°. -->

<!-- Speaker note: Teacher: for 200°, ask which line the angle is measured from. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## North part

**A ship sails $120$ km on a bearing of $030°$. How far north has it gone? (nearest km)**

* Answer: 104

<!-- Speaker note: North is next to the 30° angle: 120 × cos 30° = 104 km. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The bearing back

**A walker goes $300$ m north and then $400$ m east. What is her bearing from the start? (nearest degree)**

* Answer: 53

<!-- Speaker note: East is opposite the bearing's angle and north is next to it: tan t = 400 ÷ 300, so t = 53°. The bearing is 053°. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: a helicopter flies from its base to a farm that is $12$ km east and $5$ km north. How far is the flight, in km?**

* Answer: 13

<!-- Speaker note: 5² + 12² = 169, and √169 = 13 km. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: the orienteering leg



- **North:** 
- **East:** 
- **Off the line:** **Also used in** - **Straight-line distance.** The helicopter flight from base to farm (12 km east, 5 km north) is Pythagoras on the same two parts: the north a

<!-- Speaker note: What this step is for: Back to the control: the north part and the east part from one bearing and one distance, and what a compass doesn't tell you. Hints, in order: The angle at the start is 40°. / North is next to it. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A leg is 100 m on a bearing of 060°. Which is bigger, north or east?**

* East (87 m against 50 m). 060° is closer to east than to north.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Continues AC9M10M03. Where it leads: finding the right triangle inside a 3D shape. -->
