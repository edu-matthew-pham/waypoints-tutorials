---
marp: true
theme: default
html: true
---

# Looking up, looking down

Area, volume, circles and Pythagoras · Trigonometry in practice

<!-- Speaker note: Students draw the triangle for an angle of elevation or depression, see that the two angles at either end of a line of sight are equal, and use tangent or sine to find a distance or an angle (AC9M10M03, node 1). About 40 minutes (Predict and Run 8 min · Investigate 12 min · Modify 10 min · Practise and Make 10 min). -->

---

## Today

- I can say which angle is the angle of elevation and which is the angle of depression.
- I can draw the triangle and put the angle in the right corner.
- I can name the sides from that angle and find a distance or an angle.

<!-- Speaker note: Before class: Do the Run board yourself first (the trig board's elevation view). Students need Find a side with trigonometry and Find an angle from Year 9. This is a hinge lesson: students who can't set up the triangle for elevation and depression can't pull the right triangle out of a 3D problem in The triangle inside. The common mistake is Dee's: measuring the angle of depression down from the vertical. All numbers are made up for the task (the tower, the swimmer, the cliff, the drone, the tree). The board shows the distance as height ÷ tan t, so it flattens out for small angles: that is what the last Make question is about. Teacher: Paper: the hiker try-one after the worked example and the lifeguard in Make are worked on paper first. Look for the triangle drawn and the angle marked before any calculating. -->

---

## Why it matters

> The lifeguard's eyes are 6 m above the sand. The swimmer is somewhere out there. How far?

<!-- Speaker note: A lifeguard sits in a tower with her eyes 6 m above the sand. She looks down at a swimmer, 8° below the horizontal (made up for the task, and we'll treat the water as level with the sand). How far out is the swimmer? Have a guess before you read on, and we'll come back to it at the end. <figure class="situation" role="img" aria-label="A lifeguard's tower 6 metres high on the left, and a swimmer on the right at ground level. A dashed horizontal line runs from the lifeguard's eyes. The line of sight down to the swimmer makes an angle of 8 degrees with it. At the swimmer there is a second angle, between the ground and the line of sight, marked with a question mark."><svg viewBox="0 0 360 180" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="10" y1="150" x2="350" y2="150" stroke-width="1.5"/><rect x="40" y="60" width="20" height="90" stroke-width="1.5" fill="#888780" fill-opacity="0.2"/><circle cx="50" cy="52" r="4" fill="currentColor"/><line x1="30" y1="52" x2="30" y2="150" stroke-width="1"/><line x1="26" y1="52" x2="34" y2="52" stroke-width="1"/><line x1="26" y1="150" x2="34" y2="150" stroke-width="1"/><text x="6" y="106" fill="currentColor" stroke="none">6 m</text><line x1="50" y1="52" x2="340" y2="52" stroke-width="1" stroke-dasharray="5 4"/><line x1="50" y1="52" x2="320" y2="146" stroke="#D85A30" stroke-width="2.5"/><circle cx="320" cy="146" r="4" fill="currentColor"/><path d="M110 52 A60 60 0 0 1 106.6 71.7" stroke-width="1.4"/><text x="118" y="68" fill="currentColor" stroke="none">8°</text><path d="M260 150 A60 60 0 0 1 263.4 130.3" stroke-width="1.4"/><text x="232" y="142" fill="currentColor" stroke="none">?°</text><text x="170" y="168" fill="currentColor" stroke="none">how far out?</text><text x="250" y="20" fill="currentColor" stroke="none" font-size="11" opacity="0.8">Not to scale.</text></svg></figure> -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**The lifeguard looks down at the swimmer at 8° below the horizontal. The swimmer looks up at the lifeguard's eyes. What is the swimmer's angle of elevation, measured up from the flat sand?**

- 8°
- 82°
- 90°
- Can't tell without the distance

<!-- Speaker note: What happens: 8°. The lifeguard's horizontal line and the sand are parallel, so the angle down at her end and the angle up at the swimmer's end are alternate angles. They're equal. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: show of hands. Those who chose 82° have measured the swimmer's angle from the tower. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Fmeasurement%2Flooking-up-looking-down%2Fstep-2&code=widget%3A+trig%0Aview%3A+elevation%0Alook%3A+down%0Aunits%3A+m%0Aslider+t%3A+5%2C+60%2C+20%2C+1%0Aslider+h%3A+2%2C+20%2C+4%2C+1%0Ashow%3A+tan%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/measurement/looking-up-looking-down/?full=step-2#step-2)

<!-- Speaker note: Slide the angle and watch both ends. The line of sight is the same line for both of them. The height is opposite the angle at the bottom, and the distance along the sand is next to it. -->

<!-- Speaker note: Teacher: ask where the swimmer is for 8° before anyone moves a slider (a long way out, over 40 m). -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 8°. The lifeguard's horizontal line and the sand are parallel, so the angle down at her end and the angle up at the swimmer's end are alternate angles. They're equal.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## From the other end

Here is one that looks down from a cliff.

A walker on a 45 m clifftop sees a boat at an angle of depression of 22°. The boat is about 111 m out.

Now try one on paper, looking up this time: a hiker, a 30 m tower and an angle of elevation of 25°. Draw the triangle first.

$$\text{angle at the boat} = 22°$$

1) $\tan 22° = \dfrac{45}{d}$ — The cliff, 45 m, is opposite the angle. The distance along the water is next to it.
2) $d = \dfrac{45}{\tan 22°} = 111.4$ — Divide, because the distance is the bottom of the fraction.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write angle at the boat = 22° and say "The angle of depression from the clifftop is the same size as the angle of elevation from the boat." Line 1: write 22° = 45 ÷ d and say "The cliff, 45 m, is opposite the angle. The distance along the water is next to it." Line 2: write d = 45 ÷ 22° = 111.4 and say "Divide, because the distance is the bottom of the fraction." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 23px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## From the other end

**A hiker stands on level ground and looks up at the top of a 30 m lookout tower. The angle of elevation is 25°. How far is she from the foot of the tower? (1 decimal place, ignoring her eye height)**

* Answer: The 25° is at the hiker's end. The tower is opposite it and the ground distance is next to it. (draw the triangle and mark the angle first); $\tan 25° = \dfrac{30}{d}$ (opposite over adjacent); $d = \dfrac{30}{\tan 25°}$ (the unknown is the bottom of the fraction, so divide); $d = 64.3$ m (work it out)

<!-- Speaker note: tan 25° = 30 ÷ d, so d = 30 ÷ tan 25° = 64.3 m. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 28px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Dee finds how far out the swimmer is. Click the line where her working goes wrong.**

```
 1  The lifeguard's eyes are 6 m up, and she looks down at the swimmer at 8°.
 2  I'll put the 8° at her eyes, inside the triangle, between the tower and her line of sight.
 3  So the sand is opposite the 8° and the tower is next to it.
 4  tan 8° = d ÷ 6.
 5  d = 6 × tan 8° = 6 × 0.1405 = 0.84 m.
```

* Answer: line 2

<!-- Speaker note: Line 2: the angle of depression is measured down from the horizontal, not from the tower. The 8° is between the dashed line and the line of sight, so the triangle's angle at the swimmer is 8°, and the tower is opposite it. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The line of sight

**How far is the lifeguard's eye from the swimmer, along the line of sight? Use $\sin 8° = 0.1392$. (1 decimal place)**

* Answer: 43.1

<!-- Speaker note: The tower, 6 m, is opposite the 8° angle and the line of sight is the hypotenuse, so sin 8° = 6 ÷ line. Line = 6 ÷ 0.1392 = 43.1 m. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Change the situation



- **Looking up at a drone:** 
- **Eye height:** 
- **Almost underneath:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/measurement/looking-up-looking-down/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Setting the triangle up for a new case: from the bottom looking up, with eye height added, and when the target is almost under you. Hints, in order: Draw the triangle, with the angle at the kayaker. / The drone's height is opposite the angle. / First find how far the top is above her eyes. / Then add her eye height. / Picture the swimmer coming in closer and closer to the tower. / What happens to the line of sight? For students who need more support: A printed triangle with the tower, the ground and the line of sight, and the angle already marked at the bottom. For early finishers: Use a phone clinometer app to measure the height of the tallest tree or building at school from two different distances. Do the answers agree? Why might they not? The hard part, on purpose: Putting the angle of depression at the top, inside the triangle, between the tower and the line of sight. Ask: down from what? Where is the horizontal line? When students get stuck: A student puts the 8° at the lifeguard's eyes, inside the triangle. Ask: Down from what? Draw the horizontal line at her eyes. Where does the 8° sit against it? Fix: Between the horizontal and the line of sight. The same angle is at the swimmer, with the tower opposite it. / A student multiplies the height by tan to get the distance. Ask: Is the distance more or less than the height when the angle is only 8°? Fix: Much more, so divide: distance = height ÷ tan 8°. / A student forgets the eye height and says the tree is 23.1 m. Ask: The angle is measured from her eyes. How far above the ground are they? Fix: Add 1.6 m to the height above her eyes. -->

<!-- Speaker note: Teacher: before the eye-height question, ask whether the 1.6 m is added or subtracted. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The boat

**A cliff is $50$ m high. From the top, a boat is at an angle of depression of $20°$. How far is the boat from the foot of the cliff? ($\tan 20° = 0.364$; 1 decimal place)**

* Answer: 137.4

<!-- Speaker note: The angle at the boat is 20°. tan 20° = 50 ÷ d, so d = 50 ÷ 0.364 = 137.4 m. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The ball

**From a window $12$ m up, a ball lies on level ground $30$ m from the wall. What is the angle of depression of the ball from the window? (1 decimal place)**

* Answer: 21.8

<!-- Speaker note: The angle at the ball is the same as the angle of depression. tan t = 12 ÷ 30 = 0.4, so t = tan⁻¹(0.4) = 21.8°. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: the two shorter sides of a right-angled triangle are $9$ and $12$. How long is the hypotenuse?**

* Answer: 15

<!-- Speaker note: 9² + 12² = 81 + 144 = 225, and √225 = 15. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: how far out



- **How far out:** Back to the lifeguard. Work this out on paper first, then type your answer.
- **One degree out:** **Also used in** - **Tree height.** Stand back from a tree and measure the angle up to its top: the same triangle as the lifeguard's, looked at from the bottom 

<!-- Speaker note: What this step is for: Back to the lifeguard: the same triangle, written up on paper, and a check on how sure we can be of the answer. Hints, in order: The angle is 8° at the swimmer. / The tower is opposite and the distance is next to it. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**From a 20 m cliff the angle of depression to a boat is 30°. What is the angle of elevation from the boat to the cliff top?**

* 30°. They're alternate angles.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Starts AC9M10M03. Where it leads: bearings, then finding the right triangle inside a 3D shape. -->
