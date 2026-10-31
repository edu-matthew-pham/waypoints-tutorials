---
title: "Some cases or every case?"
subtitle: "Angles and shapes · Year 10: proof · Lesson 27"
---

# Some cases or every case?

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** One formula gives a prime number for forty whole numbers in a row. Is that enough to be sure of the forty-first?


:::teacher-note

**In one sentence:** Students meet a formula that gives forty primes in a row and then fails, drag a triangle to see a demonstration, and learn what a proof does that cases cannot (AC9M10SP01, node 1).

**Students should be able to say:** I can say why checking many cases does not prove a claim about every case. I can tell a demonstration from a proof, and say what a proof gives that cases do not. I can find a counterexample, check it by hand, and say why one is enough.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict

Work it out with a calculator if you like, but first say what you think and why.

:::keep-together

**$n^2 + n + 41$ is prime for every whole number $n$ from 0 to 39. What happens at $n = 40$?**

☐ It is prime again

☐ It is not prime

☐ It is prime, because forty in a row cannot be an accident

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** It is not prime. 40² + 40 + 41 = 1681, and 1681 = 41 × 41. Forty cases in a row did not make the claim true for the forty-first.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Demonstration or proof


:::keep-together

### Any three in a row

A demonstration checks some cases. A proof gives a reason that works for every case. Here is the difference for a simpler claim: the sum of two consecutive whole numbers is odd.

1. $3 + 4 = 7,\ 10 + 11 = 21,\ 99 + 100 = 199$ — Three cases, all odd. That is a demonstration. There are infinitely many pairs and these are three.
2. $n,\ n + 1$ — Call the smaller number $n$. A letter stands for any whole number, so this is every pair at once.
3. $n + (n + 1) = 2n + 1$ — Add them and collect the terms.
4. $2n + 1$ — $2n$ is twice a whole number, so it is even. One more than an even number is odd. That is a proof.

Now do the three-in-a-row claim yourself, on paper. Write each line with its reason, with the example beside you. Then answer the question on the screen.

**Prove that the sum of any three consecutive whole numbers is a multiple of 3.**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** Call the numbers $n$, $n + 1$ and $n + 2$ ($n$ stands for any whole number, so this covers every case at once); $n + (n + 1) + (n + 2) = 3n + 3$ (collect the terms); $3n + 3 = 3(n + 1)$, which is 3 times a whole number (factorise: so the sum is a multiple of 3 for every $n$)

n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1). The letter covers every case, so this proves it. Trying 4 + 5 + 6 = 15 and 7 + 8 + 9 = 24 would only show two cases.

:::


:::keep-together

### Find the mistake

**Ivy counts the regions made when points on a circle are joined by straight lines. Click the line where her reasoning goes wrong.**

```
 1  Ivy puts points on a circle and joins every pair with a straight line. She counts the regions inside.
 2  She finds 2 points make 2 regions, 3 points make 4, 4 points make 8 and 5 points make 16.
 3  The regions double each time.
 4  So 6 points will make 32, and that is proved for any number of points.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 4

Line 4: four cases that double are a pattern, not a proof. With 6 points the count is 31, not 32.

:::


:::keep-together

### Which one is a proof?

**Which is a proof that the angles of every triangle add to $180^\circ$?**

☐ Tear the corners off 30 different triangles. Every set makes a straight line

☐ Measure 100 triangles with a protractor: every one adds to 180°, give or take 1°

☐ Drag the triangle on the board: it always says 180°

☐ Draw a line through one corner parallel to the opposite side. The alternate angles are equal, and the three angles at that corner make a straight line

:::


:::teacher-note

**Answer:** Draw a line through one corner parallel to the opposite side. The alternate angles are equal, and the three angles at that corner make a straight line

The parallel-line argument does not depend on the shape of the triangle, so it covers them all. Tearing, measuring and dragging are demonstrations: good evidence, but cases.

:::


:::keep-together

### One case is enough

**Which one case disproves "$n^2 + n + 41$ is prime for every whole number $n$"?**

☐ $n = 0$: it gives $41$, which is prime

☐ $n = 39$: it gives $1601$, which is prime

☐ A run of forty more primes

☐ $n = 40$: it gives $1681 = 41 \times 41$

:::


:::teacher-note

**Answer:** $n = 40$: it gives $1681 = 41 \times 41$

A counterexample is a single case that breaks the claim. n = 40 gives 1681, which has the factor 41 as well as 1 and itself, so it is not prime.

:::


:::typical

## One change at a time


**A big prime pattern.** 

**The smallest counterexample.** 

**One against a thousand.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Demonstration or proof


:::keep-together

### A proof for evens

**Which is a proof that the sum of any two even numbers is even?**

☐ $2 + 4 = 6$, $8 + 10 = 18$ and $20 + 22 = 42$, all even

☐ Two even numbers are $2m$ and $2n$, and $2m + 2n = 2(m + n)$, which is twice a whole number

☐ I tried 50 pairs of even numbers and every sum was even

☐ A calculator checked every pair up to 1000

:::


:::teacher-note

**Answer:** Two even numbers are $2m$ and $2n$, and $2m + 2n = 2(m + n)$, which is twice a whole number

2m and 2n stand for any two even numbers, so the algebra covers every pair.

:::


:::keep-together

### The honest sentence

**Mei measures the exterior angle of 25 different triangles and it equals $a + b$ every time. What is the honest thing to say?**

☐ It is proved for triangles with whole-number angles only

☐ It is proved, because 25 is a lot

☐ It is false, because the angles were only close

☐ It is true for the 25 triangles, which is strong evidence but not a proof

:::


:::teacher-note

**Answer:** It is true for the 25 triangles, which is strong evidence but not a proof

25 triangles are 25 cases. The proof is that x = 180° − c and a + b = 180° − c, because a + b + c = 180°.

:::


:::keep-together

### A counterexample

**Claim: "$n^2 &gt; n$ for every whole number $n$." Which value of $n$ is a counterexample?**

☐ 1

☐ 2

☐ 3

☐ 10

:::


:::teacher-note

**Answer:** 1

1² = 1, which is not more than 1. (So is 0² = 0, if 0 counts.) A small, ordinary number can break a claim.

:::


:::keep-together

### Review: a congruence test

**Review: two triangles have two pairs of equal sides and the angles between those sides equal. Which congruence test is this?**

☐ RHS

☐ SSS

☐ ASA

☐ SAS

:::


:::teacher-note

**Answer:** SAS

Two sides and the angle between them: SAS.

:::


## Make: back to the forty-first


**The changed formula.** Back to 41. Work this out on paper first, one line at a time with its reason. Then type your answer.

**Demonstration into proof.** **Also used in**

- **Science.** A result from ten trials is a demonstration. It is evidence, and a science test also asks what a new trial could show.
- **Writing a proof.** The next lesson writes a proof for a shape, with a reason for every statement.
- **Using theorems.** The lesson after that picks the theorem that fits a problem.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**Mia measured the diagonals of 6 rectangles and they were equal each time. Is that a proof that every rectangle's diagonals are equal? Say why.**

{{lines-3}}

:::


:::teacher-note

**Answer:** No. Six rectangles are six cases. A proof gives a reason that works for every rectangle, such as two congruent triangles.

:::

