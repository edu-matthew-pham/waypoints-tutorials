---
marp: true
theme: default
html: true
---

# Writing a proof

Angles and shapes · Year 10: proof

<!-- Speaker note: Students write proofs as statements with a reason for each, for opposite angles of a parallelogram and for an exterior angle of a triangle, and learn that a reason cannot be the conclusion (AC9M10SP01, node 2). About 45 minutes (Predict and Run 8 min · Investigate 15 min · Modify 10 min · Practise and Make 12 min). -->

---

## Today

- I can write a proof as statements, each with a reason.
- I can use the parallel-line rules and the angle sum as reasons.
- I can tell when a line has no reason, or uses the conclusion as its reason.

<!-- Speaker note: Before class: Do the Run board yourself first. Students need co-interior and alternate angles (Parallel lines), the angle sum, and Proving quadrilateral properties from Year 8 for the idea of proof. The one idea: a proof is a list of statements, each with a reason that is a given, a rule or an earlier line. The common mistake is giving the conclusion as the reason (Nia's working). Hinge node: the first line is the one students stick on. The smaller step asks only for that line and its reason. A two-column layout is fine, but any clear layout with reasons works. The proof of B = D mirrors the worked proof of A = C. If students prefer, they can use the triangle proof for the exterior angle in the same layout. Nothing here is a real measurement. Teacher: Paper: the exterior angle proof after the worked example and the proof of B = D in Make are worked on paper first. Books out, and look for a reason beside every line. -->

---

## Why it matters

> Mia measured four parallelograms and says opposite angles are always equal. Ben asks, "How do you know the fifth one won't break it?" What could Mia say that Ben couldn't argue with?

<!-- Speaker note: A **proof** is a short list of statements. Each one comes with a reason: something given, a rule you already know, or a line you have already proved. If a line has no reason, a careful reader can say "so what?". <figure class="situation" role="img" aria-label="A parallelogram ABCD with A at the bottom left, B bottom right, C top right and D top left. The bottom and top sides are marked parallel, and so are the left and right sides. The angle at A is marked 70 degrees and the angle at C has a question mark."><svg viewBox="0 0 300 210" width="300" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><path d="M30 170H200L244 50H74Z" fill="#1D9E75" fill-opacity="0.2" stroke="#0F6E56" stroke-width="1.4"/><text x="14" y="184" fill="currentColor" stroke="none">A</text><text x="204" y="186" fill="currentColor" stroke="none">B</text><text x="250" y="48" fill="currentColor" stroke="none">C</text><text x="58" y="42" fill="currentColor" stroke="none">D</text><text x="56" y="162" fill="currentColor" stroke="none">70°</text><text x="206" y="62" fill="currentColor" stroke="none" font-size="18">?</text></svg></figure> -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**ABCD is a parallelogram and angle $A = 70^\circ$. What is angle $C$, the opposite corner?**

- $20^\circ$
- $110^\circ$
- $90^\circ$
- $70^\circ$

<!-- Speaker note: What happens: 70°. Angle B is 110° (it makes 180° with A), and C makes 180° with B, so C is 70°. That is the reasoning to write down. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: take a show of hands. Most will say 70°. Ask them why, and write the first reason they say on the board. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Fangles%2Fwriting-a-proof%2Fstep-2&code=widget%3A+geometry%0Ashape%3A+polygon%0Asides%3A+4%0Acorners%3A+1%2C1%3B+6%2C1%3B+8%2C4%3B+3%2C4%0Aclassify%3A+on%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/angles/writing-a-proof/?full=step-2#step-2)

<!-- Speaker note: The panel names the shape. Keep it a parallelogram: opposite sides parallel. -->

<!-- Speaker note: Teacher: ask whether any parallelogram will break it. Keep asking what would convince Ben. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 70°. Angle B is 110° (it makes 180° with A), and C makes 180° with B, so C is 70°. That is the reasoning to write down.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Prove it, line by line

Here is a proof that opposite angles of a parallelogram are equal. Each line says what is true and why.

The two parallel pairs are the only facts it needed, so it holds for every parallelogram: a rectangle, a rhombus, any slant. Now try one on paper with the example beside you. Prove that an exterior angle of a triangle equals the two interior angles opposite it. Write each line with its reason, then pick the reason that matters.

$$ABCD \text{ is a parallelogram}, \text{ so } AD \parallel BC \text{ and } AB \parallel DC$$

1) $\angle A + \angle B = 180^\circ$ — Co-interior angles, $AD \parallel BC$.
2) $\angle B + \angle C = 180^\circ$ — Co-interior angles, $AB \parallel DC$.
3) $\angle A = 180^\circ - \angle B = \angle C$ — Both $A$ and $C$ equal $180^\circ - \angle B$, so $\angle A = \angle C$.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write ABCD is a parallelogram, so AD BC and AB DC and say "Given. This is what a parallelogram is." Line 1: write A + B = 180^ and say "Co-interior angles, AD BC." Line 2: write B + C = 180^ and say "Co-interior angles, AB DC." Line 3: write A = 180^ - B = C and say "Both A and C equal 180^ - B, so A = C." -->

<!-- Speaker note: Teacher: ask a student to read Nia's line 3 aloud and say what it is being used for. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 17px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Prove it, line by line

**Triangle ABC has interior angles $a$ at A and $b$ at B. The side AC is extended past C to make an exterior angle $x$. Prove that $x = a + b$.**

* Answer: $c = 180^\circ - a - b$ (angles in a triangle add to $180^\circ$); $x = 180^\circ - c$ ($c$ and $x$ are on a straight line, so they add to $180^\circ$); $x = 180^\circ - (180^\circ - a - b) = a + b$ (put the first line into the second and simplify)

<!-- Speaker note: c = 180° − a − b (triangle), x = 180° − c (straight line), so x = a + b. Each statement has a reason. This works for every triangle, because a and b stand for any angles. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Nia tries to prove that opposite angles of a parallelogram are equal. Click the line where her reasoning goes wrong.**

```
 1  Nia wants to prove that opposite angles of a parallelogram are equal.
 2  ABCD is a parallelogram.
 3  Opposite angles of a parallelogram are equal, so angle A = angle C.
 4  That proves it.
```

* Answer: line 3

<!-- Speaker note: Line 3: "opposite angles are equal" is exactly what Nia is meant to prove. A reason cannot be the conclusion. She needs a different reason, such as co-interior angles at the parallel sides. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Pick the reason

**In parallelogram ABCD, $AD \parallel BC$. What is the reason for "angle $A$ + angle $B$ = $180^\circ$"?**

- Alternate angles between parallel lines are equal
- Co-interior angles between parallel lines add to 180°
- They look like they do
- Angles in a quadrilateral add to 360°

* Answer: Co-interior angles between parallel lines add to 180°

<!-- Speaker note: A and B are between the parallel lines AD and BC, on the same side of the transversal AB. That makes them co-interior, so they add to 180°. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## One change at a time



- **A rectangle:** 
- **Using one line:** 
- **One pair of parallel sides:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/angles/writing-a-proof/?full=step-4#step-4)

<!-- Speaker note: What this step is for: One change at a time: the same proof for a rectangle, a sum from one line of the proof, and a shape where a missing parallel pair breaks it. Hints, in order: Make a quadrilateral with only one pair of parallel sides. / Compare a and c. For students who need more support: A proof frame: 'Given: __. Line 1: __ because __. Line 2: __ because __. So __.' and a picture of the parallelogram with the parallel sides marked. For early finishers: Prove that adjacent angles of a parallelogram add to 180°, then that a quadrilateral with both pairs of opposite angles equal is a parallelogram. The hard part, on purpose: Writing the reason for every line, and not using the thing to be proved as a reason. After each line ask 'how do you know?' until the answer is a given, a rule or an earlier line. When students get stuck: A student writes a line with no reason. Ask: How do you know that? Fix: Write 'because' and finish it with a given, a rule or an earlier line. / A student uses the conclusion as a reason (Nia's mistake). Ask: Is that the thing you were asked to prove? Fix: Go back to what is given (parallel sides) and use a rule such as co-interior angles. / A student uses alternate angles for A + B = 180°. Ask: Do alternate angles add to 180° or are they equal? Fix: A and B are on the same side of the transversal: co-interior, so they add to 180°. -->

<!-- Speaker note: Teacher: before the trapezium, ask which line of the proof would stop working. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Straight to the reason

**In parallelogram ABCD, $AB \parallel DC$. What is the reason for "angle $B$ + angle $C$ = $180^\circ$"?**

- Alternate angles between parallel lines are equal
- Co-interior angles between parallel lines add to 180°
- Vertically opposite angles are equal
- Angles in a triangle add to 180°

* Answer: Co-interior angles between parallel lines add to 180°

<!-- Speaker note: B and C sit between AB and DC, on the same side of the transversal BC: co-interior. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Opposite angles

**ABCD is a parallelogram. Angle $A = (2x + 10)^\circ$ and angle $C = (3x - 20)^\circ$. Find $x$.**

* Answer: 30

<!-- Speaker note: Opposite angles are equal: 2x + 10 = 3x − 20, so x = 30 (and A = C = 70°). -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The first line

**Which statement can be the first line of a proof that a parallelogram's opposite angles are equal?**

- A = 70°, because I measured it
- A = C, because they look the same
- A = C, because opposite angles are equal
- AD ∥ BC and AB ∥ DC, because ABCD is a parallelogram

* Answer: AD ∥ BC and AB ∥ DC, because ABCD is a parallelogram

<!-- Speaker note: Start from what is given: a parallelogram has two pairs of parallel sides. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: exterior angle

**Review: a triangle has angles $a = 48^\circ$ and $b = 75^\circ$. The side through C is extended, making an exterior angle $x$ at C. What is $x$, in degrees?**

* Answer: 123

<!-- Speaker note: x = a + b = 48 + 75 = 123°. (c = 57°, and 180 − 57 = 123°.) -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: back to Mia and Ben



- **Angle B and angle D:** Write this on paper first, a line at a time with its reason. Then pick the reason for the key step.
- **Mia and Ben:** **Also used in** - **Quadrilaterals.** The Year 8 proofs used congruent triangles. This one uses parallel lines. Both are lists of statements with reasons. - **

<!-- Speaker note: What this step is for: Writing a full proof for the other pair of opposite angles, then saying why Mia's four measurements could not have done it: the reason covers every parallelogram. Hints, in order: Follow the plan: say what is parallel, then use co-interior angles twice. / This time start from angle B. -->

<!-- Speaker note: Teacher: ask what Ben could still argue with. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Triangle ABC has a = 50° and b = 60°. Side AC is extended past C, making an exterior angle x. Write a proof, with a reason for each line, that x = a + b.**

* c = 180° − 50° − 60° = 70° (angles in a triangle). x = 180° − 70° = 110° (angles on a straight line). So x = 110° = a + b.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: This covers AC9M10SP01 node 2. Where it leads: Using theorems (next lesson), where a short proof shows a frame is a rectangle, and the proofs students will meet in senior mathematics. -->
