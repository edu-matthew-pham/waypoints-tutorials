---
marp: true
theme: default
html: true
---

# Pythagoras' theorem

Area, volume, circles and Pythagoras · Pythagoras

<!-- Speaker note: Students build right-angled triangles with squares on each side, see that the two smaller squares exactly make the biggest, and use a² + b² = c² to find the hypotenuse (AC9M8M06, node 1). About 40 minutes (Predict and Run 8 min · Investigate 12 min · Modify 10 min · Practise and Make 10 min). -->

---

## Today

- I can find the hypotenuse of a right-angled triangle.
- I can explain Pythagoras' theorem with squares on the sides.
- I can check that an answer is sensible (longer than each short side, shorter than both together).

<!-- Speaker note: Before class: Pilot (Oct 2026): the lesson opens with a real question (how much does the worn shortcut across a lawn save?) and Make comes back to it; "Also used in" closes it. The middle of the lesson is unchanged. Tell us whether the opening helps or gets in the way. Do the Run board yourself first. Students need squares and square roots (Number Foundations) and right-angled triangles (Classifying triangles). The one idea: the areas of the squares on the two shorter sides add to the area of the square on the hypotenuse. The common mistake is adding the sides (Leah's mistake). The sense check (between the longer short side and the sum) catches most slips. This is the curriculum's Year 8 content; it is placed here, after circles, because it needs Year 7 squares and roots and triangle names. Teacher: Paper: the shortcut in Make is worked on paper; the page marks only the answer and then shows a model to compare. Books out, and look at the sketches. -->

---

## Why it matters

> Every lawn has one: the worn path straight across the corner, where people skip the footpath. How much does it save?

<!-- Speaker note: The footpath round this corner of the lawn is 24 m one way and 10 m the other, so 34 m in all. People cut straight across the grass instead. How long is the shortcut, and how much does it save? Have a guess, and we'll come back to it at the end. <figure class="situation" role="img" aria-label="A rectangular lawn seen from above. A footpath runs along two edges, 24 m and 10 m, and a worn dashed path cuts straight across the corner between the same two points, marked with a question mark."><svg viewBox="0 0 520 230" width="520" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="60" y="30" width="360" height="150" fill="#97C459" fill-opacity="0.25" stroke="none"/><path d="M60 30 L60 180 L420 180" stroke-width="6" stroke-opacity="0.35"/><line x1="60" y1="30" x2="420" y2="180" stroke="#BA7517" stroke-width="2" stroke-dasharray="7 5"/><circle cx="60" cy="30" r="5" fill="#D85A30" stroke="none"/><circle cx="420" cy="180" r="5" fill="#D85A30" stroke="none"/><text x="48" y="110" text-anchor="end" fill="currentColor" stroke="none">10 m</text><text x="240" y="202" text-anchor="middle" fill="currentColor" stroke="none">24 m</text><text x="250" y="96" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">?</text><text x="436" y="110" fill="currentColor" stroke="none">the shortcut</text><text x="60" y="224" fill="currentColor" stroke="none">Footpath round the corner: 24 + 10 = 34 m. Across the grass: ?</text></svg></figure> The two footpaths and the shortcut make a right-angled triangle, and the shortcut is its longest side. How is that side linked to the other two? In a right-angled triangle, the longest side is opposite the right angle. It is called the **hypotenuse**, $c$. The two sides that meet at the right angle are $a$ and $b$. **Pythagoras' theorem** says that the squares on the two shorter sides add up to the square on the hypotenuse: $$a^2 + b^2 = c^2$$ To find the hypotenuse: square the two shorter sides, add, then take the square root. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**A right-angled triangle has sides 3 cm and 4 cm at the right angle. How long is the hypotenuse?**

- 5 cm
- 7 cm
- 12 cm
- 25 cm

<!-- Speaker note: What happens: 5 cm. 3² + 4² = 9 + 16 = 25 = 5². Adding the sides (7) is too long: the straight route across is shorter than going round the corner. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: take a vote; students who chose 7 added; 25 forgot the root. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Fmeasurement%2Fpythagoras%2Fstep-2&code=widget%3A+pythag%0Aslider+a%3A+1%2C+8%2C+1%0Aslider+b%3A+1%2C+8%2C+1%0Aunits%3A+cm%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/measurement/pythagoras/?full=step-2#step-2)

<!-- Speaker note: Count the unit squares in each square, or read the numbers inside them. -->

<!-- Speaker note: Teacher: count the small squares in the 9 and 16 and see the 25 together. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 5 cm. 3² + 4² = 9 + 16 = 25 = 5². Adding the sides (7) is too long: the straight route across is shorter than going round the corner.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Square, add, root

Here is the method.

Now try one: sides 12 cm and 16 cm.

$$c \text{ is opposite the right angle}$$

1) $a^2 + b^2 = 6^2 + 8^2 = 36 + 64 = 100$ — Square the two shorter sides and add.
2) $c = \sqrt{100} = 10 \text{ cm}$ — Take the square root.
3) $6 < 10 < 6 + 8$ — Check: longer than each shorter side, shorter than both together.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write c is opposite the right angle and say "Find the hypotenuse first." Line 1: write a^2 + b^2 = 6^2 + 8^2 = 36 + 64 = 100 and say "Square the two shorter sides and add." Line 2: write c = 100 = 10 cm and say "Take the square root." Line 3: write 6 < 10 < 6 + 8 and say "Check: longer than each shorter side, shorter than both together." -->

<!-- Speaker note: Teacher: write 'square, add, root' on the board. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 26px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Square, add, root

**A right-angled triangle has sides 12 cm and 16 cm at the right angle. How long is the hypotenuse, in cm?**

* Answer: 20

<!-- Speaker note: 12² + 16² = 144 + 256 = 400, so c = √400 = 20 cm. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Leah finds the hypotenuse. Click the line where her method goes wrong.**

```
 1  A right-angled triangle has shorter sides 6 cm and 8 cm. Find the hypotenuse.
 2  The hypotenuse is the two shorter sides added together.
 3  6 + 8 = 14
 4  So the hypotenuse is 14 cm.
```

* Answer: line 2

<!-- Speaker note: Line 2: it is the squares that add: 36 + 64 = 100, so c = 10 cm. 14 cm would be longer than going round the corner. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The hypotenuse

**Which side of a right-angled triangle is the hypotenuse?**

- The side along the bottom
- The side opposite the right angle, the longest
- Either side at the right angle
- The shortest side

* Answer: The side opposite the right angle, the longest

<!-- Speaker note: The hypotenuse faces the right angle and is always the longest side. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## One change at a time



- **5 and 12:** Each task changes one thing.
- **9 and 12:** 
- **Not a whole number:** 
- **Always the longest:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/measurement/pythagoras/?full=step-4#step-4)

<!-- Speaker note: What this step is for: One change at a time: another whole-number triangle on the board, a new pair of sides, a hypotenuse that is not a whole number, then why the hypotenuse is always the longest. Hints, in order: Set a = 5 and b = 12, then read the biggest square and c. For students who need more support: Use squared paper for the squares; keep a list of squares to 20² visible. For early finishers: Find three more whole-number triangles (Pythagorean triples) that are not multiples of 3-4-5. The hard part, on purpose: Keeping the order square, add, root. Ask students to say the three steps before they touch a calculator, and to check the answer against the two shorter sides. When students get stuck: A student adds the sides (Leah's mistake). Ask: Is walking across shorter or longer than going round the corner? Fix: Square both, add, then root. / A student stops at c² (25 for 3 and 4). Ask: Is 25 a length or an area? Fix: It is the big square's area: root it for the side. / A student cannot tell which side is the hypotenuse. Ask: Where is the right angle? Which side does not touch it? Fix: The hypotenuse is opposite the right angle. -->

<!-- Speaker note: Teacher: for √2, ask between which whole numbers it lies before computing. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## 8 and 15

**The sides at the right angle are 8 cm and 15 cm. Hypotenuse, in cm?**

* Answer: 17

<!-- Speaker note: 64 + 225 = 289, √289 = 17 cm. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A decimal

**The sides at the right angle are 2 cm and 3 cm. Hypotenuse, in cm, to two decimal places?**

* Answer: 3.61

<!-- Speaker note: 4 + 9 = 13, √13 ≈ 3.61 cm. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A shortcut across

**A park is a rectangle 30 m by 40 m. How long is the path straight across, corner to corner, in m?**

* Answer: 50

<!-- Speaker note: The diagonal is a hypotenuse: 900 + 1600 = 2500, √2500 = 50 m. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: roots

**Review: work out $\sqrt{144}$.**

* Answer: 12

<!-- Speaker note: 12 × 12 = 144. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: back to the shortcut



- **The shortcut:** Back to the lawn from the start. On paper, sketch the triangle and mark the right angle before you work anything out.
- **What it saves:** Stretch: on a board, make a right-angled triangle with whole-number sides whose longest side is exactly 10. Is it a new triangle, or 3-4-5 made bigger? **Also u

<!-- Speaker note: What this step is for: Coming back to the opening question: the shortcut is the hypotenuse of the two footpaths, and the saving is what makes the answer mean something. Hints, in order: The two footpaths are the sides at the right angle. / 24² + 10² = 576 + 100. -->

<!-- Speaker note: Teacher: back to the shortcut across the grass. Ask for a guess at the saving before anyone calculates (most guess too much); then ask why the path gets worn even though it saves only 8 m. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A right-angled triangle has sides 10 cm and 24 cm at the right angle. Find the hypotenuse.**

* 100 + 576 = 676, √676 = 26 cm.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Finding a side (node 2), including a shorter side. Where it leads: distance between points on a graph, trigonometry (Year 10), and 3D diagonals. -->
