---
marp: true
theme: default
html: true
---

# Using theorems

Angles and shapes · Year 10: proof

<!-- Speaker note: Students check a slab corner with Pythagoras' converse, decide which theorem fits a frame (rectangle test, parallelogram test), and prove the rectangle test with congruent triangles (AC9M10SP01, node 3). About 50 minutes (Predict and Run 8 min · Investigate 15 min · Modify 12 min · Practise and Make 15 min). -->

---

## Today

- I can match what I know about a shape to the theorem that fits.
- I can use Pythagoras' converse to decide whether a corner is square.
- I can say why equal diagonals only make a rectangle when the shape is a parallelogram.

<!-- Speaker note: Before class: Do the Run board and the paper tasks yourself first. Students need Pythagoras' theorem and its converse (Measurement, Year 8), the Year 8 proofs about quadrilaterals, and the previous lesson's idea of a reason for every line. The one idea: a theorem is used by matching its conditions. Pythagoras' converse compares a² + b² with c². The rectangle test needs a parallelogram first. The parallelogram test needs both pairs of opposite sides equal. The common mistake is reversing a theorem (Theo's working): a rectangle's diagonals are equal, but equal diagonals alone do not make a rectangle (an isosceles trapezium has them). The 5.2 m string, the slab and shed sizes, and the market stall are made up, so no figure is a real measurement. The 3-4-5 check is the way builders set out a square corner; that is why the lesson opens on it. The rectangle test proof in Make is the longest piece of the unit. Let students pick the congruence test first, and give the plan (which two triangles) to students who need it. Teacher: Paper: the slab with sides 6 and 8 after the worked example, and the shed base and the stall frame proof in Make, are worked on paper first. Books out, and look for a reason beside every line. -->

---

## Why it matters

> A builder has a tape measure and string, and no set square. How can she tell whether the corner of a new slab is square?

<!-- Speaker note: On a building site, a slab corner needs to be square. The builder pegs 4 m along one edge and 3 m along the other, then stretches a string between the two pegs and measures it. <figure class="situation" role="img" aria-label="The corner of a slab. A horizontal edge is marked 4 metres with a peg at its end, and a vertical edge is marked 3 metres with a peg at its end. A string across between the pegs is marked 5.2 metres. The angle at the corner has a question mark."><svg viewBox="0 0 320 210" width="320" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><path d="M40 180H250V30" stroke-width="1.6"/><path d="M250 30L40 180" stroke-dasharray="6 4" stroke-width="1.2"/><circle cx="250" cy="180" r="3" fill="currentColor"/><circle cx="250" cy="30" r="4" fill="#1D9E75" stroke="#0F6E56"/><circle cx="40" cy="180" r="4" fill="#1D9E75" stroke="#0F6E56"/><text x="140" y="198" text-anchor="middle" fill="currentColor" stroke="none">4 m</text><text x="262" y="110" fill="currentColor" stroke="none">3 m</text><text x="116" y="92" fill="currentColor" stroke="none">5.2 m</text><text x="214" y="168" fill="currentColor" stroke="none" font-size="18">?</text></svg></figure> A **theorem** is a result that has already been proved. You don't prove it again. You check that the facts you have match the facts it needs, and use it. Here are three you can use today. | Theorem | What it needs | What it gives | |---|---|---| | Pythagoras' converse | two sides of a triangle and the third side, with $a^2 + b^2 = c^2$ | the angle opposite the longest side is $90^\circ$ | | The rectangle test | a **parallelogram** whose diagonals are equal | it is a rectangle | | The parallelogram test | both pairs of opposite sides equal | it is a parallelogram, so its opposite sides are parallel | -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**The pegs are 4 m and 3 m from the corner, and the string between them is 5.2 m. Compared with a right angle, the corner is...**

- wider than $90^\circ$
- exactly $90^\circ$
- narrower than $90^\circ$

<!-- Speaker note: What happens: Wider than 90°. A square corner would make the string 5 m, because 3² + 4² = 25. A longer string means the corner has opened out: it is about 95°. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: take a show of hands before anyone calculates. Ask what string length would mean exactly square. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Fangles%2Fusing-theorems%2Fstep-2&code=widget%3A+geometry%0Ashape%3A+triangle%0Acorners%3A+1%2C1%3B+4%2C1%3B+3%2C4%0Aclassify%3A+on%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/angles/using-theorems/?full=step-2#step-2)

<!-- Speaker note: The dots are 1 unit apart. Count 3 across and 4 up, then count the slope across: it is 5 units long. -->

<!-- Speaker note: Teacher: ask students to count the slope across the dots, and say whether 3² + 4² gives 5². -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Wider than 90°. A square corner would make the string 5 m, because 3² + 4² = 25. A longer string means the corner has opened out: it is about 95°.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Is the corner square?

Here is how to use Pythagoras' converse on a gate frame, 0.9 m by 1.2 m, with a diagonal of 1.5 m.

Now try one on paper, with the example beside you: the slab with sides 6.0 m and 8.0 m and a diagonal of 10.1 m. Write each line with its reason. Then type your answer.

$$0.9^2 + 1.2^2 = 0.81 + 1.44 = 2.25$$

1) $1.5^2 = 2.25$ — The diagonal, squared.
2) $0.9^2 + 1.2^2 = 1.5^2$ — The two numbers are equal.
3) $\text{The corner is a right angle.}$ — Pythagoras' converse: if $a^2 + b^2 = c^2$, the angle opposite $c$ is $90^\circ$.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write 0.9^2 + 1.2^2 = 0.81 + 1.44 = 2.25 and say "The two sides at the corner, squared and added." Line 1: write 1.5^2 = 2.25 and say "The diagonal, squared." Line 2: write 0.9^2 + 1.2^2 = 1.5^2 and say "The two numbers are equal." Line 3: write The corner is a right angle. and say "Pythagoras' converse: if a^2 + b^2 = c^2, the angle opposite c is 90^." -->

<!-- Speaker note: Teacher: ask who has met a frame that was out of square. Ask which theorem they would use to check it. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 23px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Is the corner square?

**A slab corner has sides 6.0 m and 8.0 m, and the diagonal between the pegs is 10.1 m. Is the corner square? Use a theorem, with a reason for each line. Then type the value of $a^2 + b^2$.**

* Answer: $6^2 + 8^2 = 36 + 64 = 100$ (the two sides at the corner, squared and added); $10.1^2 = 102.01$ (the diagonal, squared); $100 \ne 102.01$, so the corner is not square (it is a little over $90^\circ$) (if the corner were $90^\circ$, Pythagoras says the two numbers would be equal)

<!-- Speaker note: 6² + 8² = 100 and 10.1² = 102.01. They are not equal, so the corner is not square. The diagonal is a little too long, so the corner is a little wider than 90°. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Theo checks a market stall's frame. Click the line where his reasoning goes wrong.**

```
 1  Theo checks the top frame of a market stall, a four-sided frame ABCD.
 2  He measures both diagonals: AC = 2.6 m and BD = 2.6 m.
 3  A rectangle's diagonals are equal.
 4  So the frame ABCD is a rectangle.
```

* Answer: line 4

<!-- Speaker note: Line 4: the theorem is the other way round. A rectangle's diagonals are equal, but equal diagonals do not make a rectangle. The frame must also be a parallelogram. An isosceles trapezium has equal diagonals and no right angles. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The tray

**A cantilever toolbox tray hangs on four arms. The top and bottom arms are the same length, and the two side arms are the same length. Which theorem shows the tray stays level (the top and bottom arms stay parallel)?**

- Pythagoras' converse
- The rectangle test: equal diagonals
- None: it only works if the arms are at right angles
- The parallelogram test: both pairs of opposite sides equal, so it is a parallelogram

* Answer: The parallelogram test: both pairs of opposite sides equal, so it is a parallelogram

<!-- Speaker note: Both pairs of opposite sides are equal, so the shape is a parallelogram at every position. Opposite sides of a parallelogram are parallel, so the tray stays level. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 22px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Sides only

**Opposite sides of a shelf frame measure 1.2 m and 1.2 m, and 0.8 m and 0.8 m. What can you say about it?**

- You can say nothing without a protractor
- It is a square
- It is a rectangle
- It is a parallelogram, but it could still lean over to one side

* Answer: It is a parallelogram, but it could still lean over to one side

<!-- Speaker note: The parallelogram test gives a parallelogram. To be sure it is a rectangle, measure both diagonals: if they are equal, the rectangle test applies. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## One change at a time



- **Bigger sides:** 
- **Another triple:** 
- **Equal diagonals:** 
- **Not a parallelogram:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/angles/using-theorems/?full=step-4#step-4)

<!-- Speaker note: What this step is for: One change at a time: bigger sides in the same ratio, a different triple, a parallelogram turned into a rectangle by its diagonals, and the edge case of a shape with equal diagonals that is not a parallelogram. Hints, in order: Start with a parallelogram that leans over. Move the corners so the diagonals become equal. / Watch l (equal diagonals) and the shape's name. For students who need more support: A table of theorems to tick: what it needs, what it gives, and whether I have it. A strip of squares up to 20² to look up. For early finishers: Prove the converse of the rectangle test's idea differently: a parallelogram with a right angle is a rectangle. Or find another triple that works for a square corner (7, 24, 25). The hard part, on purpose: Using a theorem the wrong way round. Ask 'what does the theorem need, and do I have it?' before anyone uses it. When students get stuck: A student adds the sides, 6 + 8, and compares with the diagonal. Ask: What does Pythagoras compare? Fix: Square the two sides first, add the squares, then compare with the diagonal squared. / A student says equal diagonals make a rectangle (Theo's mistake). Ask: Is there a shape with equal diagonals that isn't a rectangle? Fix: An isosceles trapezium. The shape must be a parallelogram first. / A student says equal opposite sides make a rectangle. Ask: Can a parallelogram lean over? Fix: Yes. Equal opposite sides give a parallelogram. A rectangle also needs a right angle or equal diagonals. -->

<!-- Speaker note: Teacher: before the board, ask what must be true of a parallelogram for its diagonals to be equal. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Narrower or wider

**A corner has sides 6 m and 8 m, and the diagonal is 9.5 m. Compared with a right angle, the corner is...**

- narrower than $90^\circ$
- exactly $90^\circ$
- wider than $90^\circ$

* Answer: narrower than $90^\circ$

<!-- Speaker note: 6² + 8² = 100, but 9.5² = 90.25. The diagonal is shorter than a square corner needs, so the corner is narrower than 90°. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which theorem

**You know a gate frame is a parallelogram. Its two diagonals measure the same. Which theorem lets you say it is a rectangle?**

- The rectangle test
- Pythagoras' converse
- The parallelogram test
- None of them

* Answer: The rectangle test

<!-- Speaker note: A parallelogram with equal diagonals is a rectangle. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Another triple

**A corner has sides 8 m and 15 m. How long must the diagonal be, in metres, for the corner to be square?**

* Answer: 17

<!-- Speaker note: 8² + 15² = 64 + 225 = 289 = 17². -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: the hypotenuse

**Review: a right-angled triangle has shorter sides 7 cm and 24 cm. How long is the hypotenuse, in cm?**

* Answer: 25

<!-- Speaker note: 7² + 24² = 49 + 576 = 625 = 25². -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: back to the slab



- **The shed base:** Back to the slab. Work this out on paper first, with a reason for each line. Then type your answer.
- **The stall frame:** The rectangle test, proved. Write it on paper, then pick the reason for the congruence. **Also used in** - **Building and woodwork.** A frame is checked by meas

<!-- Speaker note: What this step is for: Coming back to the opening with new numbers, then choosing the theorem for a new problem and using it in a proof with a reason for each line. Hints, in order: Triangles ABC and DCB share the side BC. / Equal diagonals give a third pair of equal sides. / Co-interior angles add to 180°. -->

<!-- Speaker note: Teacher: ask which two triangles share a side before anyone writes. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A corner has sides 9 m and 12 m, and the diagonal is 15 m. Is the corner square? Name the theorem.**

* Yes. 9² + 12² = 225 = 15², so by Pythagoras' converse the angle is a right angle.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: This covers AC9M10SP01 node 3. Where it leads: the proofs students meet in senior mathematics, where choosing the theorem and giving a reason for each line is the whole skill. -->
