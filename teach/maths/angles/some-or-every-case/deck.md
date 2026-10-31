---
marp: true
theme: default
html: true
---

# Some cases or every case?

Angles and shapes · Year 10: proof

<!-- Speaker note: Students meet a formula that gives forty primes in a row and then fails, drag a triangle to see a demonstration, and learn what a proof does that cases cannot (AC9M10SP01, node 1). About 45 minutes (Predict and Run 8 min · Investigate 15 min · Modify 10 min · Practise and Make 12 min). -->

---

## Today

- I can say why checking many cases does not prove a claim about every case.
- I can tell a demonstration from a proof, and say what a proof gives that cases do not.
- I can find a counterexample, check it by hand, and say why one is enough.

<!-- Speaker note: Before class: Do the Predict yourself first: n² + n + 41 is prime for n = 0 to 39 and gives 1681 = 41 × 41 at n = 40. (It also fails at n = 41, where it is 41 × 43.) The point is not a trick about primes. It is that a long run of agreeing cases is a description of the cases, not a reason. Students need congruence and angle reasoning from Year 8 and Year 7. The Run board is the exterior angle board from Unknown angles: they drag it and see x = a + b. Call that a demonstration, and say the next lessons turn it into a proof. The board rounds to the nearest degree, so a sum can look 1° out. The algebra proof (a letter for any whole number) is a taste of what a proof is, not an algebra lesson. Students need only n, n + 1 and n + 2 and collecting terms. Ivy's circle regions are 1, 2, 4, 8, 16 and then 31 for points joined on a circle with no three lines meeting at a point. A drawing of 6 points is worth doing on paper if you have time. This is a judgement hinge, so there is no smaller step. Teachers who find students stuck can add one after seeing where. Nothing here is a real measurement: the formula and the counts are mathematical facts. Teacher: Paper: the three-in-a-row proof and the changed formula in Make are worked on paper first. Books out, and look for a letter, not a number, on the first line. -->

---

## Why it matters

> One formula gives a prime number for forty whole numbers in a row. Is that enough to be sure of the forty-first?

<!-- Speaker note: Here is a formula: take a whole number $n$, work out $n^2 + n + 41$, and see what you get. The first few answers are all prime. <figure class="situation" role="img" aria-label="Six boxes in a row showing n from 0 to 5 and the answers 41, 43, 47, 53, 61 and 71, all prime numbers, then three dots and a dashed box for n equals 40 with a question mark."><svg viewBox="0 0 560 104" width="560" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><rect x="10" y="34" width="58" height="52" rx="4" fill="#1D9E75" fill-opacity="0.18" stroke="#0F6E56" stroke-width="1.2"/><text x="39" y="30" text-anchor="middle" fill="currentColor" stroke="none">n = 0</text><text x="39" y="66" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">41</text><rect x="74" y="34" width="58" height="52" rx="4" fill="#1D9E75" fill-opacity="0.18" stroke="#0F6E56" stroke-width="1.2"/><text x="103" y="30" text-anchor="middle" fill="currentColor" stroke="none">n = 1</text><text x="103" y="66" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">43</text><rect x="138" y="34" width="58" height="52" rx="4" fill="#1D9E75" fill-opacity="0.18" stroke="#0F6E56" stroke-width="1.2"/><text x="167" y="30" text-anchor="middle" fill="currentColor" stroke="none">n = 2</text><text x="167" y="66" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">47</text><rect x="202" y="34" width="58" height="52" rx="4" fill="#1D9E75" fill-opacity="0.18" stroke="#0F6E56" stroke-width="1.2"/><text x="231" y="30" text-anchor="middle" fill="currentColor" stroke="none">n = 3</text><text x="231" y="66" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">53</text><rect x="266" y="34" width="58" height="52" rx="4" fill="#1D9E75" fill-opacity="0.18" stroke="#0F6E56" stroke-width="1.2"/><text x="295" y="30" text-anchor="middle" fill="currentColor" stroke="none">n = 4</text><text x="295" y="66" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">61</text><rect x="330" y="34" width="58" height="52" rx="4" fill="#1D9E75" fill-opacity="0.18" stroke="#0F6E56" stroke-width="1.2"/><text x="359" y="30" text-anchor="middle" fill="currentColor" stroke="none">n = 5</text><text x="359" y="66" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">71</text><text x="404" y="66" fill="currentColor" stroke="none" font-size="18">…</text><rect x="438" y="34" width="58" height="52" rx="4" stroke="currentColor" stroke-dasharray="5 4"/><text x="467" y="30" text-anchor="middle" fill="currentColor" stroke="none">n = 40</text><text x="467" y="68" text-anchor="middle" fill="currentColor" stroke="none" font-size="22">?</text></svg></figure> It works for $n = 0, 1, 2, 3$ and on, all the way to $n = 39$: forty primes in a row. Before you carry on, decide how much that tells you. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**$n^2 + n + 41$ is prime for every whole number $n$ from 0 to 39. What happens at $n = 40$?**

- It is prime again
- It is not prime
- It is prime, because forty in a row cannot be an accident

<!-- Speaker note: What happens: It is not prime. 40² + 40 + 41 = 1681, and 1681 = 41 × 41. Forty cases in a row did not make the claim true for the forty-first. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: take a show of hands before anyone calculates. Students who say prime are trusting the run. Do not correct yet. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Fangles%2Fsome-or-every-case%2Fstep-2&code=widget%3A+geometry%0Acorners%3A+1%2C1%3B+9%2C1%3B+4%2C6%0Aexterior%3A+C%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/angles/some-or-every-case/?full=step-2#step-2)

<!-- Speaker note: $x$ is the outside angle at $C$. Every triangle you drag is one more case. How many cases would be enough? -->

<!-- Speaker note: Teacher: ask how many triangles would be enough. Keep going until someone says no number is. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* It is not prime. 40² + 40 + 41 = 1681, and 1681 = 41 × 41. Forty cases in a row did not make the claim true for the forty-first.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Any three in a row

A demonstration checks some cases. A proof gives a reason that works for every case. Here is the difference for a simpler claim: the sum of two consecutive whole numbers is odd.

Now do the three-in-a-row claim yourself, on paper. Write each line with its reason, with the example beside you. Then answer the question on the screen.

$$3 + 4 = 7,\ 10 + 11 = 21,\ 99 + 100 = 199$$

1) $n,\ n + 1$ — Call the smaller number $n$. A letter stands for any whole number, so this is every pair at once.
2) $n + (n + 1) = 2n + 1$ — Add them and collect the terms.
3) $2n + 1$ — $2n$ is twice a whole number, so it is even. One more than an even number is odd. That is a proof.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write 3 + 4 = 7,10 + 11 = 21,99 + 100 = 199 and say "Three cases, all odd. That is a demonstration. There are infinitely many pairs and these are three." Line 1: write n,n + 1 and say "Call the smaller number n. A letter stands for any whole number, so this is every pair at once." Line 2: write n + (n + 1) = 2n + 1 and say "Add them and collect the terms." Line 3: write 2n + 1 and say "2n is twice a whole number, so it is even. One more than an even number is odd. That is a proof." -->

<!-- Speaker note: Teacher: ask who has a triangle they think will break x = a + b. Try it. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 20px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Any three in a row

**Prove that the sum of any three consecutive whole numbers is a multiple of 3.**

* Answer: Call the numbers $n$, $n + 1$ and $n + 2$ ($n$ stands for any whole number, so this covers every case at once); $n + (n + 1) + (n + 2) = 3n + 3$ (collect the terms); $3n + 3 = 3(n + 1)$, which is 3 times a whole number (factorise: so the sum is a multiple of 3 for every $n$)

<!-- Speaker note: n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1). The letter covers every case, so this proves it. Trying 4 + 5 + 6 = 15 and 7 + 8 + 9 = 24 would only show two cases. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Ivy counts the regions made when points on a circle are joined by straight lines. Click the line where her reasoning goes wrong.**

```
 1  Ivy puts points on a circle and joins every pair with a straight line. She counts the regions inside.
 2  She finds 2 points make 2 regions, 3 points make 4, 4 points make 8 and 5 points make 16.
 3  The regions double each time.
 4  So 6 points will make 32, and that is proved for any number of points.
```

* Answer: line 4

<!-- Speaker note: Line 4: four cases that double are a pattern, not a proof. With 6 points the count is 31, not 32. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which one is a proof?

**Which is a proof that the angles of every triangle add to $180^\circ$?**

- Tear the corners off 30 different triangles. Every set makes a straight line
- Measure 100 triangles with a protractor: every one adds to 180°, give or take 1°
- Drag the triangle on the board: it always says 180°
- Draw a line through one corner parallel to the opposite side. The alternate angles are equal, and the three angles at that corner make a straight line

* Answer: Draw a line through one corner parallel to the opposite side. The alternate angles are equal, and the three angles at that corner make a straight line

<!-- Speaker note: The parallel-line argument does not depend on the shape of the triangle, so it covers them all. Tearing, measuring and dragging are demonstrations: good evidence, but cases. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 20px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## One case is enough

**Which one case disproves "$n^2 + n + 41$ is prime for every whole number $n$"?**

- $n = 0$: it gives $41$, which is prime
- $n = 39$: it gives $1601$, which is prime
- A run of forty more primes
- $n = 40$: it gives $1681 = 41 \times 41$

* Answer: $n = 40$: it gives $1681 = 41 \times 41$

<!-- Speaker note: A counterexample is a single case that breaks the claim. n = 40 gives 1681, which has the factor 41 as well as 1 and itself, so it is not prime. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## One change at a time



- **A big prime pattern:** 
- **The smallest counterexample:** 
- **One against a thousand:** 

<!-- Speaker note: What this step is for: One change at a time: a famous claim that holds for small primes, a counterexample that is small, and what a single failure and a thousand successes each tell you. For students who need more support: A strip of the first 10 values of n² + n + 41 to read, and a frame for the proof: 'Call the numbers __, __ and __. Add them: __. This is 3 times __.' For early finishers: Show that n² + n + 41 is not prime when n = 41. Then find another n where n² + n + 41 is divisible by 41, and say why. (When n is a multiple of 41, every term is.) The hard part, on purpose: Feeling that forty cases in a row, or a hundred measurements, must be enough. Keep asking what the next case could be, and let them check the failing case by hand. When students get stuck: A student says forty primes in a row means it is true. Ask: What is the forty-first case? Have you checked it? Fix: Work out n = 40 together. The check is the only thing that settles it. / A student proves the three-in-a-row claim by trying 4 + 5 + 6. Ask: What would you try to be sure about every set of three? Fix: Write the numbers with a letter: n, n + 1, n + 2. The letter stands for any whole number. / A student thinks a counterexample needs to be a big or hard case. Ask: Is 2 a counterexample to 'every prime is odd'? Fix: Yes. A counterexample is any one case that breaks the claim. -->

<!-- Speaker note: Teacher: ask what a counterexample has to do to count. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A proof for evens

**Which is a proof that the sum of any two even numbers is even?**

- $2 + 4 = 6$, $8 + 10 = 18$ and $20 + 22 = 42$, all even
- Two even numbers are $2m$ and $2n$, and $2m + 2n = 2(m + n)$, which is twice a whole number
- I tried 50 pairs of even numbers and every sum was even
- A calculator checked every pair up to 1000

* Answer: Two even numbers are $2m$ and $2n$, and $2m + 2n = 2(m + n)$, which is twice a whole number

<!-- Speaker note: 2m and 2n stand for any two even numbers, so the algebra covers every pair. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The honest sentence

**Mei measures the exterior angle of 25 different triangles and it equals $a + b$ every time. What is the honest thing to say?**

- It is proved for triangles with whole-number angles only
- It is proved, because 25 is a lot
- It is false, because the angles were only close
- It is true for the 25 triangles, which is strong evidence but not a proof

* Answer: It is true for the 25 triangles, which is strong evidence but not a proof

<!-- Speaker note: 25 triangles are 25 cases. The proof is that x = 180° − c and a + b = 180° − c, because a + b + c = 180°. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A counterexample

**Claim: "$n^2 &gt; n$ for every whole number $n$." Which value of $n$ is a counterexample?**

- 1
- 2
- 3
- 10

* Answer: 1

<!-- Speaker note: 1² = 1, which is not more than 1. (So is 0² = 0, if 0 counts.) A small, ordinary number can break a claim. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: a congruence test

**Review: two triangles have two pairs of equal sides and the angles between those sides equal. Which congruence test is this?**

- RHS
- SSS
- ASA
- SAS

* Answer: SAS

<!-- Speaker note: Two sides and the angle between them: SAS. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: back to the forty-first



- **The changed formula:** Back to 41. Work this out on paper first, one line at a time with its reason. Then type your answer.
- **Demonstration into proof:** **Also used in** - **Science.** A result from ten trials is a demonstration. It is evidence, and a science test also asks what a new trial could show. - **Writi

<!-- Speaker note: What this step is for: Coming back to the opening: a student's changed claim, checked for forty cases, and a counterexample that is worked out by hand and used correctly. Hints, in order: Look for a value of $n$ where $-n$ and $+41$ cancel. / Try $n = 41$. -->

<!-- Speaker note: Teacher: ask what each of the three lines is for. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Mia measured the diagonals of 6 rectangles and they were equal each time. Is that a proof that every rectangle's diagonals are equal? Say why.**

* No. Six rectangles are six cases. A proof gives a reason that works for every rectangle, such as two congruent triangles.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: This covers AC9M10SP01 node 1. Where it leads: Writing a proof (next lesson) and Using theorems. The idea of a counterexample is used again when students test conjectures in algebra and probability. -->
