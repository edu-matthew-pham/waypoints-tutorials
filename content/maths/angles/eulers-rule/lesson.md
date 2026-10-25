---
order: 24
unit: networks
node: AC9M10SP02 n3
uses: [AC9M10SP02 n1, AC9M10SP02 n2]
assumes: [AC9M10SP02 n1]
connection: soccer-ball
title: Euler's rule
summary: "Faces plus vertices is edges plus 2, for any solid with flat faces and no holes. Count two of the three and the rule gives the third, even for a soccer ball."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A soccer ball has 32 patches. How many seams, without counting every one?"
---
A soccer ball is stitched from flat patches: 12 pentagons and 20 hexagons. The corners where patches meet are the vertices, the seams are the edges, and each patch is a face. Counting 90 seams by hand would be slow. There's a rule that links the three counts, and you'll find it on simpler solids first.

## A patch of the ball

```step
stage: info
insight: "One pentagon surrounded by hexagons shows the soccer ball's pattern: each seam is shared by two patches and each corner by three."
diagram:
  ref: diagrams.mmd#patch
  alt: "A pentagon joined to three of the five hexagons around it, drawn as boxes."
  caption: "One pentagon, with three of its five hexagons shown"
  role: stimulus
```

```code diagrams.mmd#patch
flowchart TD
  P[pentagon] --- H1[hexagon]
  P --- H2[hexagon]
  P --- H3[hexagon]
```

On the ball, each pentagon touches five hexagons, and each seam is shared by two patches. Keep that in mind.

## Predict: a cube

```step
stage: predict
insight: "Committing to how faces plus vertices compares with edges on a cube is the first look at Euler's rule."
diagram:
  ref: diagrams.mmd#cube
  alt: "A cube drawn as a network with eight corners and twelve edges: a square on the top, a square on the bottom, and four edges joining them."
  caption: "A cube drawn as a network: 8 vertices, 12 edges"
  role: stimulus
check:
  type: predict
  q: "A cube has 6 faces, 8 vertices and 12 edges. Add the faces and vertices: 6 + 8 = 14. How does 14 compare with the number of edges?"
  options: ["2 more than the edges", "The same as the edges", "2 fewer than the edges", "Twice the edges"]
  actual: "14 is 2 more than 12. Faces + vertices = edges + 2. Does the same happen on every solid?"
```

```code diagrams.mmd#cube
flowchart TD
  A((A)) --- B((B))
  B --- C((C))
  C --- D((D))
  D --- A
  A --- E((E))
  B --- F((F))
  C --- G((G))
  D --- H((H))
  E --- F
  F --- G
  G --- H
  H --- E
```

Check by counting if you like. Then check a different solid.

## Run: a pyramid

```step
stage: run
insight: "Counting faces, vertices and edges of a square pyramid and testing faces plus vertices minus edges shows the same 2 as the cube."
check:
  type: number
  q: "A square pyramid has a square base and 4 triangle faces. It has 5 faces, 5 vertices and 8 edges. Work out faces + vertices - edges."
  answer: 2
  explain: "5 + 5 - 8 = 2. The cube gave 6 + 8 - 12 = 2 too."
```

Draw a square pyramid on paper and count the faces, vertices and edges yourself before you type.

## Investigate: counting the ball

```step
stage: investigate
insight: "Euler's rule says faces + vertices - edges = 2; for the soccer ball, edges come from half the sum of the sides, not the sum, because every seam is shared."
tasks:
  - check: { type: number, q: "A hexagonal prism has 2 hexagon faces and 6 rectangle faces. How many vertices does it have? (Two hexagons, 6 corners each.)", answer: 12, explain: "Each hexagon has 6 corners, and the prism has two of them: 12 vertices. The rectangles use the same corners." }
  - check: { type: number, q: "Use Euler's rule to find the number of edges of the hexagonal prism: it has 8 faces and 12 vertices.", answer: 18, explain: "Faces + vertices = edges + 2, so 8 + 12 = 20 = edges + 2, and the edges are 18." }
  - check:
      type: bug
      code: "working.txt#ines"
      text: "Ines counts the edges of the soccer ball. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: edges-counted-per-face
      explain: "Line 3: adding up the sides of every face counts each seam twice, once for each of the two patches it joins. The edges are half that: 180 ÷ 2 = 90."
  - check: { type: number, q: "A pentagonal prism has 2 pentagons and 5 rectangles. Add up the sides of all 7 faces, then halve it. How many edges? Work it out on paper first.", answer: 15, explain: "The sides add up to 2 × 5 + 5 × 4 = 30. Each edge is shared by two faces, so the edges are 30 ÷ 2 = 15." }
```

### Hexagonal prism: vertices

Count the corners of each hexagon.

### Hexagonal prism: edges

Rearrange faces + vertices = edges + 2.

### The soccer ball edges

Look at what each seam joins.

### Pentagonal prism

Here's the method on a pentagonal prism.

```worked
2 \times 5 + 5 \times 4 = 30 :: Add up the sides of every face: two pentagons and five rectangles.
30 \div 2 = 15 :: Every edge is shared by two faces, so halve it. That's 15 edges.
10 \div 1 = 10 :: Each of the 10 corners has 3 edges, so 10 × 3 ÷ 2 = 15 as well.
```

Now check it with Euler's rule: how many vertices does it have, and does faces + vertices - edges give 2?

## Modify: which solids can exist?

```step
stage: modify
insight: "Euler's rule used backwards finds a missing count, and an impossible set of counts breaks it."
tasks:
  - check: { type: number, q: "A solid has 5 faces and 5 vertices. How many edges does it have?", answer: 8, explain: "5 + 5 = 10 = edges + 2, so there are 8 edges. (A square pyramid.)" }
  - check:
      type: question
      q: "Edge case: a student says there's a solid with 10 faces, 8 vertices and 15 edges. What does Euler's rule say?"
      options: ["It can't exist: 10 + 8 = 18, but 15 + 2 = 17", "It exists: 10 + 8 - 15 = 3", "It exists: the edges are fewer than the faces", "It can't exist: a solid needs at least 20 edges"]
      answer: 0
      feedback: [null, "Euler's rule says faces + vertices - edges = 2, not 3.", "Edges and faces being close doesn't decide it. Check the rule.", "A solid needs fewer edges than that. Try faces + vertices = edges + 2."]
      explain: "Faces + vertices should be edges + 2. Here 18 is not 17, so no such solid exists."
  - check: { type: number, q: "A solid has 6 faces and 12 edges. How many vertices?", answer: 8, explain: "6 + vertices = 12 + 2 = 14, so the vertices are 8. (A cube.)" }
```

### Missing edges

### Impossible solid

### Missing vertices

Each one is faces + vertices = edges + 2.

## Practise: Euler's rule

```step
stage: practise
insight: "Finding the missing count with Euler's rule, and a review of spotting a connected suburb that has a route."
tasks:
  - check: { type: number, q: "A solid has 7 faces and 10 vertices. How many edges?", answer: 15, explain: "7 + 10 = 17 = edges + 2, so 15 edges." }
    smaller:
      check: { type: number, q: "A solid has 4 faces, 4 vertices and 6 edges. What is faces + vertices?", answer: 8, explain: "4 + 4 = 8, and 6 + 2 = 8 too." }
  - check: { type: number, q: "A solid has 9 faces and 14 edges. How many vertices?", answer: 7, explain: "9 + vertices = 14 + 2 = 16, so 7 vertices." }
  - check: { type: number, q: "A solid has 12 vertices and 18 edges. How many faces?", answer: 8, explain: "faces + 12 = 18 + 2 = 20, so 8 faces." }
  - check: { type: number, q: "Review: a connected suburb has junctions with 3, 3, 2, 2 and 2 streets. How many junctions have an odd number of streets?", answer: 2, explain: "The two junctions with 3. With two odd junctions, the sweeper can do it, from one to the other." }
```

### Missing edges

### Missing vertices

### Missing faces

### Review

Look back at the last lesson.

## Make: the soccer ball

```step
stage: make
insight: "Counting the soccer ball's edges, vertices and faces from its patches and checking Euler's rule."
hint: ["Count the sides of every patch, then halve for edges.", "Each corner joins three patches, so divide the corners by 3."]
check:
  type: reasoning
  paper: true
  q: "A soccer ball has 12 pentagons and 20 hexagons. Every seam joins 2 patches, and every corner joins 3. How many vertices does it have? Then check that faces + vertices = edges + 2."
  steps:
    - ["Faces: 12 + 20 = 32", "count the patches"]
    - ["Sides of all patches: 12 × 5 + 20 × 6 = 180", "add up the sides of every patch"]
    - ["Edges: 180 ÷ 2 = 90", "each seam is shared by two patches"]
    - ["Vertices: 180 ÷ 3 = 60", "each corner is shared by three patches"]
    - ["32 + 60 = 92 and 90 + 2 = 92", "check Euler's rule"]
  picks:
    - step: 4
      q: "Why divide by 3 to get the vertices?"
      options: ["Each corner is shared by three patches, so the corners were counted three times", "There are three kinds of patch", "Three is the number of faces at a cube corner", "Half of 180 is 90, and a third is 60"]
      answer: 0
      feedback: [null, "There are two kinds of patch: pentagons and hexagons.", "That's true of a cube, but the reason here is how often a corner is counted.", "That's arithmetic. The reason is how many patches share a corner."]
  answer: "60"
  answerLabel: "Vertices"
  feedback:
    - ["90", "That's the edges. Each corner is shared by three patches, so divide the 180 sides by 3."]
    - ["180", "That counts every corner of every patch. A corner belongs to three patches, so divide by 3."]
  criteria:
    - "I added up the sides of all the patches."
    - "I halved it for edges and divided by 3 for vertices."
    - "I checked faces + vertices = edges + 2."
  explain: "The patches have 180 sides in all. Edges: 180 ÷ 2 = 90. Vertices: 180 ÷ 3 = 60. Faces: 32. And 32 + 60 = 92 = 90 + 2."
```

Back to the ball. Work it out on paper first, then type the number of vertices.

**Also used in**

- **Molecules and domes.** The carbon cage called buckminsterfullerene has the same 60 corners as the soccer ball, so chemists count it the same way.
- **Map colouring and planning.** Euler's rule is one of the first results about networks drawn on a surface.
- **Back to the sweeper.** The degrees of a solid's vertices add to twice its edges, just like a suburb's junctions.
