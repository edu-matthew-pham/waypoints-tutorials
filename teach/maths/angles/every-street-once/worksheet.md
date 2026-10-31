---
title: "Every street once"
subtitle: "Angles and shapes · Networks · Lesson 23"
---

# Every street once

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Every street once, none twice: is that always possible?


:::teacher-note

**In one sentence:** Students try to drive every street of a made-up suburb once on a board, find that the start matters, and learn the rule: a route exists when a connected network has none or exactly two odd junctions (AC9M10SP02, node 2).

**Students should be able to say:** I can find the degree of every junction and count the odd ones. I can say when a route using every street once exists, and where it starts and ends. I can change a network by closing a street and say what that does to the degrees.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## The suburb


:::keep-together

![Wattle Grove, a suburb with four junctions, P, Q, R and S, and five streets. The streets are P to Q, Q to R, R to S, S to P and P to R.](https://tutorials.learningwaypoints.com/_pictures/diagrams/maths/angles/every-street-once/step-1.svg?v=9f832fd34db9cf0c)

*Wattle Grove*

:::

The streets are P to Q, Q to R, R to S, S to P, and P to R across the middle. Try it with your finger on the diagram: one route that goes down every street once.

## Predict


:::keep-together

![Four junctions. A, B and C make a triangle, and a fourth junction D hangs off C by one street.](https://tutorials.learningwaypoints.com/_pictures/diagrams/maths/angles/every-street-once/step-2.svg?v=faf7c5e09f69f424)

*Three junctions in a triangle, and one more on a tail*

:::

Trace a few routes with your finger. Is there one that ends with no street left?

:::keep-together

**A sweeper must drive down every street here exactly once, starting at A. What happens?**

☐ However it goes, it gets stuck with a street left

☐ It does every street once and ends back at A

☐ It does every street once and ends at D

☐ It depends on which street it takes first

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** However it goes, it gets stuck. Try A, B, C, A: it's back at A with the street C to D unused. Try A, B, C, D: it's at D with the street C to A unused. A start at A can't work here.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Odd junctions


:::keep-together

### Count the odd ones

**On the Run board, how many junctions have an odd number of streets?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 2

B and D have three streets each. A, C, E and F have two.

:::


:::keep-together

### Which suburb?

**Every junction is joined to the rest of the suburb. Which suburb can the sweeper do, using every street once?**

☐ Junctions with 3, 3, 3 and 3 streets

☐ Junctions with 1, 1, 1 and 3 streets

☐ Junctions with 2, 2, 3, 3 and 4 streets

☐ Junctions with 3, 3, 3, 3, 3 and 3 streets

:::


:::teacher-note

**Answer:** Junctions with 2, 2, 3, 3 and 4 streets

Exactly two junctions have an odd number of streets (the two with 3). The route starts at one of them and ends at the other.

:::


:::keep-together

### Four junctions, every pair joined

Here's the method on the Run suburb.

1. $\text{degrees: } A\,2, B\,3, C\,2, D\,3, E\,2, F\,2$ — Count the streets at each junction (its degree).
2. $\text{odd junctions: } B \text{ and } D$ — Two junctions have an odd degree.
3. $\text{connected: yes}$ — You can get from any junction to any other.
4. $\text{start at } B, \text{ finish at } D$ — With two odd junctions, the route starts at one and ends at the other.

Now try one on paper. Junctions 1, 2, 3 and 4 have a street between every pair of them. How many junctions have an odd number of streets? Then type it.

**A suburb has four junctions, and there's a street between every pair of junctions. How many junctions have an odd number of streets? Work it out on paper first, then type it. Could the sweeper do it?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 4

Each junction has three streets: one to each of the other three. All four are odd. A route can only start and end at odd junctions, so two is the most it can handle: the sweeper can't.

:::


:::keep-together

### Find the mistake

**Sam works out whether the sweeper can do the Run suburb. Click the line where his working goes wrong.**

```
 1  The streets at each junction: A 2, B 3, C 2, D 3, E 2, F 2.
 2  B and D are odd, so there are two odd junctions.
 3  Two odd junctions means the sweeper can start at any junction.
 4  So it can start at A and finish at D.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: with two odd junctions the route has to start at one of them (B or D) and finish at the other. It can only start anywhere when there are no odd junctions.

:::


:::typical

## Close a street


**Close one street.** Which two junctions would you want to make even? What do you close?

**Cut one off.** What happens to a junction when its only street closes?

**One odd junction.** Think back to adding up the degrees.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Can the sweeper do it?


:::keep-together

### Can it be done?

**A suburb's junctions have 2, 2, 3, 3, 4 and 2 streets. Can the sweeper use every street once?**

☐ No: a junction has 4 streets

☐ Yes: start at one junction with 3 streets and finish at the other

☐ Yes: start anywhere and finish where it started

☐ No: two junctions have 3 streets

:::


:::teacher-note

**Answer:** Yes: start at one junction with 3 streets and finish at the other

Two junctions have an odd number of streets (the two with 3), so the route runs between them.

:::


:::keep-together

### No odd junctions

**Every junction in a suburb has an even number of streets. Where can the sweeper start?**

☐ Nowhere: it can't be done

☐ Anywhere, but it finishes at a different junction

☐ Anywhere, and it finishes where it started

☐ Only at the junction with the most streets

:::


:::teacher-note

**Answer:** Anywhere, and it finishes where it started

With no odd junctions, a route can start at any junction and comes back to it.

:::


:::keep-together

### One closure

**A suburb has junctions with 3, 3, 3 and 3 streets. What's the fewest streets the council needs to close so the sweeper can do every street once?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 1

Close one street between two of the junctions. Those two now have 2 streets, and the other two keep 3: two odd junctions.

:::


:::keep-together

### Review

**Review: a suburb has 7 streets. Add up the number of streets at every junction. What do you get?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 14

Each street has two ends, so the total is 2 × 7 = 14.

:::


## Make: back to Wattle Grove

Back to Wattle Grove. Work this out on paper first, then type the number of odd junctions after you close the street.

**Also used in**

- **Mail and bin rounds.** A route that passes every street once is the problem a postal worker or bin lorry has too.
- **Cut off by a closure.** A road closed for repairs can leave a suburb in two pieces, which is when the network stops being connected.
- **Next lesson.** Solids drawn as networks, and Euler's rule.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**A connected suburb has four junctions with an odd number of streets. Can the sweeper do every street once?**

{{lines-3}}

:::


:::teacher-note

**Answer:** No. A route can only start and finish at odd junctions, so two is the most it can handle.

:::

