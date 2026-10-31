---
marp: true
theme: default
html: true
---

# The triangle inside

Area, volume, circles and Pythagoras · Trigonometry in practice

<!-- Speaker note: Students find the right-angled triangle inside a box, floor first and then the one standing on the floor diagonal, and use Pythagoras twice, or trigonometry for the slope of the line (AC9M10M03, node 3). About 40 minutes (Predict and Run 8 min · Investigate 12 min · Modify 10 min · Practise and Make 10 min). -->

---

## Today

- I can find the right-angled triangle on the floor of a box and the one standing up inside it.
- I can find the longest line inside a box with Pythagoras twice.
- I can find the angle that line makes with the floor.

<!-- Speaker note: Before class: Do the Run board yourself first (the space3d board's diagonal view). Students need Looking up, looking down and Pythagoras from Year 8. The one idea: a 3D problem is two 2D problems, with the answer to the first inside the second. This relies on drawing the triangle clearly, as in Looking up, looking down; students who struggle there will struggle here. The common mistake is Sam's: adding the floor diagonal and the height instead of using Pythagoras again. It makes the umbrella look as if it fits. The sizes (suitcase, umbrella, fish tank, storeroom) are made up for the task. In practice a real umbrella has thickness, which makes fitting harder. Teacher: Paper: the fish tank try-one after the worked example and the suitcase in Make are worked on paper first. Look for the floor triangle drawn first. -->

---

## Why it matters

> The umbrella is longer than any side of the suitcase. Will it go in?

<!-- Speaker note: A suitcase is 80 cm long, 50 cm wide and 30 cm deep inside (made up for the task). You have a 120 cm umbrella. Will it fit in the suitcase? Have a guess before you read on, and we'll come back to it at the end. <figure class="situation" role="img" aria-label="A box drawn in 3D, 80 centimetres long, 50 wide and 30 high. A dashed line runs from a bottom corner at the back to the opposite top corner at the front, labelled with a question mark."><svg viewBox="0 0 360 200" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><path d="M60 150 L220 150 L290 110 L130 110 Z" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M60 150 L220 150 L220 90 L60 90 Z" stroke-width="2" fill="#888780" fill-opacity="0.12"/><path d="M220 150 L290 110 L290 50 L220 90" stroke-width="2"/><path d="M60 90 L130 50 L290 50 L220 90" stroke-width="2"/><path d="M60 150 L60 90 M130 110 L130 50" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="130" y1="110" x2="220" y2="90" stroke="#D85A30" stroke-width="2.5"/><text x="130" y="170" fill="currentColor" stroke="none">80 cm</text><text x="258" y="145" fill="currentColor" stroke="none">50 cm</text><text x="20" y="125" fill="currentColor" stroke="none">30 cm</text><text x="150" y="86" fill="currentColor" stroke="none" font-size="16">?</text><text x="250" y="195" fill="currentColor" stroke="none" font-size="11" opacity="0.8">Not to scale.</text></svg></figure> -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**The umbrella is 120 cm long. The suitcase is 80 cm long, 50 cm wide and 30 cm deep inside. Will the umbrella fit?**

- Yes: it fits corner to corner
- No: it's longer than every side, so it can't
- No: even corner to corner it's too short
- Yes: 80 + 50 + 30 is more than 120

<!-- Speaker note: What happens: No. The longest line inside a box runs from one bottom corner to the opposite top corner. That's longer than any side, but here it's still shorter than 120 cm. We'll find out how much. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: show of hands. Those who chose 'no, it's longer than every side' haven't thought about the diagonal. Those who chose 'yes, 80 + 50 + 30' have added the sides. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Fmeasurement%2Ftriangle-inside%2Fstep-2&code=widget%3A+space3d%0Asize%3A+6%0Abox%3A+on%0Adiagonal%3A+on%0Aslider+x%3A+1%2C+6%2C+3%2C+1%0Aslider+y%3A+1%2C+6%2C+4%2C+1%0Aslider+z%3A+1%2C+6%2C+2%2C+1%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/measurement/triangle-inside/?full=step-2#step-2)

<!-- Speaker note: Slide the sides. The grey triangle lies on the floor. The red triangle stands up on the floor diagonal. Which sides of each are known? -->

<!-- Speaker note: Teacher: before anyone moves a slider, ask which side of the box is the longest line you can fit. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* No. The longest line inside a box runs from one bottom corner to the opposite top corner. That's longer than any side, but here it's still shorter than 120 cm. We'll find out how much.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Two steps

Here is one with a room.

A storeroom is 6 m long, 4 m wide and 3 m high. The longest straight pole that fits from a floor corner to the opposite ceiling corner is about 7.8 m.

Now try one on paper: a fish tank, 90 cm by 40 cm by 50 cm. Draw the floor triangle first.

$$\text{floor} = \sqrt{6^2 + 4^2} = \sqrt{52}$$

1) $\text{pole} = \sqrt{52 + 3^2} = \sqrt{61}$ — The second triangle stands up. Its shorter sides are the floor diagonal and the height.
2) $\sqrt{61} = 7.8$ — The longest pole that fits is about 7.8 m.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write floor = 6^2 + 4^2 = 52 and say "The first triangle lies flat on the floor. Its shorter sides are the length and the width." Line 1: write pole = 52 + 3^2 = 61 and say "The second triangle stands up. Its shorter sides are the floor diagonal and the height." Line 2: write 61 = 7.8 and say "The longest pole that fits is about 7.8 m." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 21px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Two steps

**A fish tank is 90 cm long, 40 cm wide and 50 cm high (made up for the task). What is the longest straight rod that fits inside? (1 decimal place)**

* Answer: Floor first: $\sqrt{90^2 + 40^2} = \sqrt{9700}$ (draw the triangle on the floor and find its hypotenuse); Then up: $\sqrt{9700 + 50^2} = \sqrt{12\,200}$ (the floor diagonal and the height are the shorter sides of the second triangle); $\sqrt{12\,200} = 110.5$ cm (work it out)

<!-- Speaker note: Floor diagonal √(90² + 40²) = √9700. Then √(9700 + 50²) = √12 200 = 110.5 cm. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam checks whether the umbrella fits. Click the line where his working goes wrong.**

```
 1  The floor of the suitcase is 80 cm by 50 cm, so its diagonal is √(80² + 50²) = 94.3 cm.
 2  The second triangle has the floor diagonal and the 30 cm height as its shorter sides.
 3  So the longest line is 94.3 + 30 = 124.3 cm.
 4  124.3 is longer than 120, so the umbrella fits.
```

* Answer: line 3

<!-- Speaker note: Line 3: the floor diagonal and the height are the two shorter sides of a right-angled triangle, so Pythagoras again: √(94.3² + 30²) = 99.0 cm. Adding gives 124.3 cm, which is longer than the real diagonal, and makes the umbrella look as if it fits. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The standing triangle

**In the second triangle, the one standing up in the box, which two sides are the shorter sides?**

- The length and the height
- The length and the width
- The floor diagonal and the height
- The floor diagonal and the width

* Answer: The floor diagonal and the height

<!-- Speaker note: The standing triangle has the floor diagonal along the bottom and the height up the side. The space diagonal is its hypotenuse. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Change the box



- **Another box:** 
- **The slope of the line:** 
- **A cube:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/measurement/triangle-inside/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Changing the box: a different suitcase, the angle the line makes with the floor (trigonometry in the second triangle), and a cube. Hints, in order: Floor diagonal first. / 70² + 50² + 40² = 9000. / Draw the standing triangle. / The height, 30 cm, is opposite the angle at the floor. / A cube has all three sides equal. / 10² + 10² + 10² = 300. For students who need more support: A printed box with the floor triangle and the standing triangle drawn in two colours. For early finishers: What is the longest straight line inside the classroom? Measure the room, predict, and calculate. The hard part, on purpose: Seeing the second triangle. Ask: what does the floor diagonal become in the standing triangle? Point to the floor diagonal and to the height. When students get stuck: A student adds 80 + 50 + 30. Ask: Is the shortest path across a box along the edges or straight across? Fix: Straight across: use Pythagoras, floor first and then the standing triangle. / A student adds the floor diagonal and the height. Ask: Is the standing triangle right-angled? Which side is the hypotenuse? Fix: The space diagonal. Use Pythagoras again: square, add, square root. / A student gets 28.3 for √(80² + 50²) on a calculator. Ask: Did you square each side first, then add? Fix: Square each, add, then take the square root of the total. -->

<!-- Speaker note: Teacher: for the cube, ask whether the answer will be more or less than twice a side. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The room

**A room is $5$ m long, $4$ m wide and $3$ m high. How far is it from a floor corner to the opposite ceiling corner? (1 decimal place)**

* Answer: 7.1

<!-- Speaker note: 5² + 4² + 3² = 50, and √50 = 7.07, about 7.1 m. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The box

**A box is $12$ cm by $9$ cm by $8$ cm. How long is its longest straight line, in cm?**

* Answer: 17

<!-- Speaker note: 12² + 9² = 225, so the floor diagonal is 15. Then 15² + 8² = 289, and √289 = 17 cm. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: which bearing is due south?**

- 000°
- 090°
- 180°
- 270°

* Answer: 180°

<!-- Speaker note: Bearings go clockwise from north: 090° east, 180° south, 270° west. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: the umbrella



- **The longest line:** Back to the suitcase. Work this out on paper first, then type your answer.
- **The decision:** **Also used in** - **Packing and building.** The longest rod in a box, a cable across a room, a pole in a tent: each is a space diagonal. - **Looking up, lookin

<!-- Speaker note: What this step is for: Back to the suitcase: the longest line, then the decision, and what the number leaves out. Hints, in order: Floor diagonal, then the standing triangle. / 80² + 50² + 30². -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A box is 6 cm by 6 cm by 7 cm. What is the longest straight line inside it?**

* 11 cm (36 + 36 + 49 = 121).

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Finishes AC9M10M03. Where it leads: solids in Year 10 measurement, where the same triangle gives heights and slant lengths. -->
