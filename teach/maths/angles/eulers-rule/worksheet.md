---
title: "Euler's rule"
subtitle: "Angles and shapes · Networks · Lesson 24"
---

# Euler's rule

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** A soccer ball has 32 patches. How many seams, without counting every one?


:::teacher-note

**In one sentence:** Students find faces + vertices = edges + 2 on a cube and a pyramid, use it to find a missing count, and count a soccer ball's 90 edges and 60 vertices from its patches (AC9M10SP02, node 3).

**Students should be able to say:** I can count the faces, vertices and edges of a solid. I can use faces + vertices = edges + 2 to find a missing count. I can explain why adding the sides of every face counts each edge twice.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## A patch of the ball


:::keep-together

![A pentagon joined to three of the five hexagons around it, drawn as boxes.](https://tutorials.learningwaypoints.com/_pictures/diagrams/maths/angles/eulers-rule/step-1.svg?v=331576283d5970e7)

*One pentagon, with three of its five hexagons shown*

:::

On the ball, each pentagon touches five hexagons, and each seam is shared by two patches. Keep that in mind.

## Predict


:::keep-together

![A cube drawn as a network with eight corners and twelve edges: a square on the top, a square on the bottom, and four edges joining them.](https://tutorials.learningwaypoints.com/_pictures/diagrams/maths/angles/eulers-rule/step-2.svg?v=e50ee3a0444aa655)

*A cube drawn as a network: 8 vertices, 12 edges*

:::

Check by counting if you like. Then check a different solid.

:::keep-together

**A cube has 6 faces, 8 vertices and 12 edges. Add the faces and vertices: 6 + 8 = 14. How does 14 compare with the number of edges?**

☐ Twice the edges

☐ 2 more than the edges

☐ The same as the edges

☐ 2 fewer than the edges

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 14 is 2 more than 12. Faces + vertices = edges + 2. Does the same happen on every solid?

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Counting the ball


:::keep-together

### Hexagonal prism: vertices

**A hexagonal prism has 2 hexagon faces and 6 rectangle faces. How many vertices does it have? (Two hexagons, 6 corners each.)**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 12

Each hexagon has 6 corners, and the prism has two of them: 12 vertices. The rectangles use the same corners.

:::


:::keep-together

### Hexagonal prism: edges

**Use Euler's rule to find the number of edges of the hexagonal prism: it has 8 faces and 12 vertices.**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 18

Faces + vertices = edges + 2, so 8 + 12 = 20 = edges + 2, and the edges are 18.

:::


:::keep-together

### The soccer ball edges

**Ines counts the edges of the soccer ball. Click the line where her working goes wrong.**

```
 1  A soccer ball has 12 pentagons and 20 hexagons.
 2  Each pentagon has 5 edges and each hexagon has 6.
 3  So the edges are 12 × 5 + 20 × 6 = 180.
 4  So the soccer ball has 180 edges.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: adding up the sides of every face counts each seam twice, once for each of the two patches it joins. The edges are half that: 180 ÷ 2 = 90.

:::


:::keep-together

### Pentagonal prism

Here's the method on a pentagonal prism.

1. $2 \times 5 + 5 \times 4 = 30$ — Add up the sides of every face: two pentagons and five rectangles.
2. $30 \div 2 = 15$ — Every edge is shared by two faces, so halve it. That's 15 edges.
3. $10 \div 1 = 10$ — Each of the 10 corners has 3 edges, so 10 × 3 ÷ 2 = 15 as well.

Now check it with Euler's rule: how many vertices does it have, and does faces + vertices - edges give 2?

**A pentagonal prism has 2 pentagons and 5 rectangles. Add up the sides of all 7 faces, then halve it. How many edges? Work it out on paper first.**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 15

The sides add up to 2 × 5 + 5 × 4 = 30. Each edge is shared by two faces, so the edges are 30 ÷ 2 = 15.

:::


:::typical

## Which solids can exist?


**Missing edges.** 

**Impossible solid.** 

**Missing vertices.** Each one is faces + vertices = edges + 2.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Euler's rule


:::keep-together

### Missing edges

**A solid has 7 faces and 10 vertices. How many edges?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 15

7 + 10 = 17 = edges + 2, so 15 edges.

:::


:::keep-together

### Missing vertices

**A solid has 9 faces and 14 edges. How many vertices?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 7

9 + vertices = 14 + 2 = 16, so 7 vertices.

:::


:::keep-together

### Missing faces

**A solid has 12 vertices and 18 edges. How many faces?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 8

faces + 12 = 18 + 2 = 20, so 8 faces.

:::


:::keep-together

### Review

**Review: a connected suburb has junctions with 3, 3, 2, 2 and 2 streets. How many junctions have an odd number of streets?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 2

The two junctions with 3. With two odd junctions, the sweeper can do it, from one to the other.

:::


## Make: the soccer ball

Back to the ball. Work it out on paper first, then type the number of vertices.

**Also used in**

- **Molecules and domes.** The carbon cage called buckminsterfullerene has 60 carbon atoms at the corners of the same 12 pentagons and 20 hexagons, so chemists count it the same way ([Royal Society of Chemistry](https://edu.rsc.org/feature/symmetry-of-buckminsterfullerene/2020237.article)).
- **Map colouring and planning.** Euler's rule is one of the first results about networks drawn on a surface.
- **Back to the sweeper.** The degrees of a solid's vertices add to twice its edges, just like a suburb's junctions.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**A solid has 6 faces and 10 vertices. How many edges?**

{{lines-3}}

:::


:::teacher-note

**Answer:** 14.

:::

