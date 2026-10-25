---
order: 41
unit: composite10
node: AC9M10M01 n2
uses: [AC9M10M01 n1, AC9M9M01 n1, AC9M8M06 n1]
assumes: [AC9M10M01 n1]
connection: grain-silo
title: Surface area of composite objects
summary: "Count only the faces you can see: faces that are joined together are hidden, and a hole adds an inside surface. Paint on a silo, a stack of boxes and a pipe."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A farm silo needs a fresh coat of paint. How much paint does it need?"
---
The silo is the one from last lesson: a cylinder wall 6 m tall with a radius of 2 m, and a cone roof 1.5 m tall. The roof slopes, and its sloping side is 2.5 m long. You paint the wall and the roof, but not the ground the silo stands on (sizes made up for the task). How many square metres need paint? Have a guess, and we'll come back to it at the end.

## Predict: paint for the silo

```step
stage: predict
insight: "Committing to the painted area shows who counts the joined circles or the ground circle, and who forgets the roof."
check:
  type: predict
  q: "The silo has a cylinder wall (6 m tall, radius 2 m) and a cone roof with a slant length of 2.5 m. About how many square metres need paint?"
  options:
    - "About 91 m²"
    - "About 116 m²"
    - "About 104 m²"
    - "About 75 m²"
  actual: "About 91 m². The wall is about 75 m² and the roof about 16 m². The flat circles aren't painted: the cone's base and the cylinder's top are joined, and the cylinder's base is on the ground."
```

<figure class="situation" role="img" aria-label="A grain silo: a cylinder wall 6 metres tall with a radius of 2 metres, topped with a cone-shaped roof 1.5 metres tall whose sloping side, the slant length, is 2.5 metres. Not to scale."><svg viewBox="0 0 380 218" width="380" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><path d="M60 70 L120 18 L180 70" stroke-width="1.8" fill="#D9A441" fill-opacity="0.25"/><path d="M60 70 v110 a60 14 0 0 0 120 0 v-110" stroke-width="1.8" fill="#378ADD" fill-opacity="0.18"/><ellipse cx="120" cy="70" rx="60" ry="14" stroke-width="1.2" stroke-dasharray="3 3"/><path d="M120 18 V70" stroke-dasharray="4 3"/><text x="126" y="48" fill="currentColor" stroke="none">1.5 m</text><text x="196" y="125" fill="currentColor" stroke="none">wall 6 m tall</text><path d="M120 180 H180" stroke-dasharray="4 3"/><text x="150" y="208" text-anchor="middle" fill="currentColor" stroke="none">radius 2 m</text><text x="42" y="40" text-anchor="end" fill="currentColor" stroke="none">cone roof</text><text x="188" y="42" fill="currentColor" stroke="none">slant 2.5 m</text><path d="M184 46 L152 58" stroke-width="0.8"/></svg></figure>

The picture isn't to scale. Which of the silo's surfaces could a painter reach?

## Run: the roof

```step
stage: run
insight: "The curved face of a cone has area π × r × l, where l is the slant length along the sloping side. It is the slant length, not the height up the middle."
check: { type: number, q: "The roof cone has a radius of $2$ m and a slant length of $2.5$ m. What is the area of its curved face? (m², 1 decimal place, $\\pi \\approx 3.14$)", answer: 15.7, tolerance: 0.1, explain: "3.14 × 2 × 2.5 = 15.7 m²." }
```

Here is a fact to use rather than one we prove today: the curved face of a cone has an area of $\pi r l$, where $r$ is the radius and $l$ is the **slant length**, the distance along the sloping side from the point to the edge. It is not the height up the middle, $h$. A cylinder's curved wall is $2 \pi r h$.

The wall is $2 \times 3.14 \times 2 \times 6$. How big is it next to the roof?

## Investigate: only what you can see

```step
stage: investigate
insight: "The surface area of a composite object is the faces on the outside only. Faces that are joined are hidden, and a hole adds an inside surface. Mei counts the joined circles."
tasks:
  - check:
      type: question
      q: "Which of the silo's surfaces are painted?"
      options:
        - "The cylinder's curved wall and the cone's curved roof"
        - "The wall, the roof and the circle where the cone meets the cylinder"
        - "The wall, the roof and the cylinder's circular base on the ground"
        - "All five faces: the wall, the roof and the three circles"
      answer: 0
      feedback:
        - null
        - "The join is hidden inside. Neither circle that makes it is on the outside."
        - "The base sits on the ground. Nobody can paint it."
        - "Three of those faces are flat circles, and none of them can be seen."
      explain: "Only the curved wall and the curved roof are on the outside. All three flat circles are hidden: two are pressed together and one is on the ground."
    smaller:
      check: { type: "number", q: "How many flat circles do the cylinder and the cone have between them?", answer: 3, explain: "The cylinder's top and base, and the cone's base." }
  - check:
      type: bug
      code: "working.txt#mei"
      text: "Mei works out the paint for the silo. Click the line where her working goes wrong."
      answer: 4
      fault: logic
      misconception: join-faces-counted
      explain: "Line 4: the two circles at the join are pressed together, so they are inside the silo and aren't painted. Mei added them, 25.1 m², too much."
  - check:
      type: reasoning
      paper: true
      q: "The concrete pipe from last lesson is 2 m long, with an outer radius of 0.5 m and a hole radius of 0.4 m (made up for the task). It is open at both ends. A painter coats every surface: the outside, the inside and the two ring-shaped ends. What is the total area? (m², 1 decimal place, $\\pi \\approx 3.14$)"
      steps:
        - ["$A_{\\text{outside}} = 2 \\times 3.14 \\times 0.5 \\times 2 = 6.28$", "the outer curved surface"]
        - ["$A_{\\text{inside}} = 2 \\times 3.14 \\times 0.4 \\times 2 = 5.024$", "the hole adds an inside surface"]
        - ["$A_{\\text{ends}} = 2 \\times (3.14 \\times 0.5^2 - 3.14 \\times 0.4^2) = 0.5652$", "two rings: the big circle minus the hole"]
        - ["$A = 6.28 + 5.024 + 0.5652 = 11.87$", "add all four surfaces"]
      answer: "11.9"
      answerLabel: "Painted area (m²)"
      tolerance: 0.1
      feedback:
        - ["11.3", "The two ring-shaped ends are surfaces too: add them."]
        - ["6.8", "A hole has an inside wall. Add the inside surface as well."]
      criteria:
        - "I counted the outside, the inside and both ends."
        - "I found each ring end as a big circle minus the hole."
        - "I used the radius, not the diameter."
      explain: "6.28 + 5.024 + 0.5652 = 11.8692, about 11.9 m²."
    smaller:
      check: { type: "number", q: "The pipe is open at both ends. How many separate surfaces does it have: the outside, the inside and how many ends?", answer: 4, explain: "Outside, inside and two ends: four surfaces." }
```

### Only what you can see

A small seed silo (made up): a cylinder wall 5 m tall with a radius of 1.5 m, and a cone roof 2 m tall. Its slant length isn't given, so you have to find it first. Pythagoras works on the right-angled triangle inside the cone.

```worked
l = \sqrt{1.5^2 + 2^2} = 2.5 :: The slant length is the long side of the triangle with legs r and h.
A_{\text{wall}} = 2 \times 3.14 \times 1.5 \times 5 = 47.1 :: Curved wall, 2πrh, in m².
A_{\text{roof}} = 3.14 \times 1.5 \times 2.5 = 11.775 :: Curved roof, πrl.
A = 47.1 + 11.775 = 58.875 \approx 58.9 \text{ m}^2 :: Add the two outside faces. No circles: they are hidden.
```

Now look at the big silo and decide which faces are on the outside.

### Find the mistake

Read Mei's working. Which line counts faces that nobody can see?

### A pipe, inside and out

<figure class="situation" role="img" aria-label="A concrete pipe lying on its side, 2 metres long. The ring at the near end has an outer radius of 0.5 metres and a hole with a radius of 0.4 metres."><svg viewBox="0 0 380 170" width="380" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><path d="M90 30 H270 M90 130 H270" stroke-width="1.8"/><path d="M270 30 a22 50 0 0 1 0 100" stroke-width="1.8"/><ellipse cx="90" cy="80" rx="22" ry="50" stroke-width="1.8" fill="#9aa0a6" fill-opacity="0.35"/><ellipse cx="90" cy="80" rx="17" ry="40" stroke-width="1.6" fill="currentColor" fill-opacity="0.08"/><path d="M90 80 H112" stroke-dasharray="3 2"/><path d="M90 80 V120" stroke-dasharray="3 2"/><text x="300" y="60" fill="currentColor" stroke="none">outer radius 0.5 m</text><text x="300" y="80" fill="currentColor" stroke="none">hole radius 0.4 m</text><path d="M90 150 H270 M90 145 v10 M270 145 v10" stroke-width="1"/><text x="180" y="166" text-anchor="middle" fill="currentColor" stroke="none">2 m long</text></svg></figure>

Work out the area of every surface on paper first, one step per line, then type the total.

## Modify: change one thing

```step
stage: modify
insight: "One change at a time: a steeper roof needs a new slant length, a taller wall changes only the cylinder, and two glued cubes lose the faces that touch."
tasks:
  - hint: ["It's the long side of a right-angled triangle.", "3² + 4² = 25."]
    check: { type: number, q: "A roof cone has a radius of $3$ m and a height of $4$ m. What is its slant length? (m)", answer: 5, explain: "l = √(3² + 4²) = √25 = 5 m." }
  - hint: ["Only the wall changes.", "The roof is still 15.7 m²."]
    check: { type: number, q: "The silo's wall is raised to $8$ m (radius $2$ m, same roof with slant length $2.5$ m). How many square metres need paint? (1 decimal place, $\\pi \\approx 3.14$)", answer: 116.2, tolerance: 0.2, explain: "Wall 2 × 3.14 × 2 × 8 = 100.48, roof 15.7. Total 116.18 m²." }
  - hint: ["One cube has 6 faces of 4 m².", "Two faces disappear in the glue."]
    check: { type: number, q: "Edge case: two cubes, each with sides of $2$ m, are glued face to face to make a long box $2$ m by $2$ m by $4$ m. What is the surface area of the long box? (m²)", answer: 40, feedback: [["48", "That counts the two faces that are glued together."]], explain: "Each cube is 6 × 4 = 24 m², so 48 together. The glue hides two 4 m² faces: 48 − 8 = 40 m². The long box is 2 × (4 + 8 + 8) = 40 m²." }
    smaller:
      check: { type: "number", q: "What is the surface area of one cube with sides of $2$ m? (m²)", answer: 24, explain: "6 faces of 2 × 2 = 4 m²." }
```

### A steeper roof

### A taller wall

### Two cubes

## Practise: composite surface areas

```step
stage: practise
insight: "Counting only the outside faces: a stack, a drilled cube, and the review of the volume with the same hole."
tasks:
  - hint: ["Add the surface areas of the two boxes, then take away what is hidden.", "The hidden part is the touching face, counted twice."]
    check:
      type: number
      q: "A box $4$ m by $3$ m by $2$ m has a smaller box, $2$ m by $3$ m by $1$ m, standing on its top. The small box's $2$ by $3$ face sits flat on the top, wholly on it. What is the surface area of the whole stack, including the bottom? (m²)"
      answer: 62
      feedback:
        - ["74", "That adds the two boxes' full surface areas, and the touching faces are hidden."]
      explain: "The big box is 2 × (12 + 8 + 6) = 52. The small box is 2 × (6 + 2 + 3) = 22. The touching face is 6 m², hidden on both: 52 + 22 − 12 = 62 m²."
    smaller:
      check: { type: "number", q: "What is the area of the face where the two boxes touch? (m²)", answer: 6, explain: "The small box's 2 by 3 face: 6 m²." }
  - hint: ["The cube has 6 faces of 4 × 4.", "The hole removes two 1 × 1 squares and adds four walls of 4 × 1."]
    check:
      type: number
      q: "A cube with sides of $4$ cm has a square hole $1$ cm by $1$ cm drilled straight through the middle, from one face to the opposite one. What is its surface area? (cm²)"
      answer: 110
      feedback:
        - ["94", "The hole takes away two squares, but it also adds walls inside. Count the four inside walls."]
      explain: "A plain cube is 6 × 16 = 96. The hole removes two 1 cm² squares: 94. It adds four inside walls of 4 × 1 = 4 cm² each, which is 16: 110 cm²."
  - check:
      type: number
      q: "Review: the cube with the hole through it. What is its volume? (cm³)"
      answer: 60
      explain: "The cube is 4 × 4 × 4 = 64 cm³. The hole is 1 × 1 × 4 = 4 cm³. Taking it away leaves 60 cm³."
```

### The stack

### A hole

### Review

## Make: paint for the silo

```step
stage: make
insight: "Returning to the silo: find only the outside faces, and turn the area into litres of paint."
tasks:
  - hint: ["Which faces are painted?", "The slant length is given in the picture: 2.5 m."]
    check:
      type: reasoning
      paper: true
      q: "The silo has a cylinder wall 6 m tall with a radius of 2 m, and a cone roof with a slant length of 2.5 m (made up for the task). What area needs paint? (m², 1 decimal place, $\\pi \\approx 3.14$)"
      steps:
        - ["Painted: the curved wall and the curved roof. The circles are hidden.", "choose the faces first"]
        - ["$A_{\\text{wall}} = 2 \\times 3.14 \\times 2 \\times 6 = 75.36$", "the wall"]
        - ["$A_{\\text{roof}} = 3.14 \\times 2 \\times 2.5 = 15.7$", "the roof"]
        - ["$A = 75.36 + 15.7 = 91.06$", "add the two painted faces"]
      answer: "91.1"
      answerLabel: "Painted area (m²)"
      tolerance: 0.2
      feedback:
        - ["116.2", "That counts both circles at the join. They are hidden."]
        - ["103.6", "That counts the circle on the ground. Nobody paints it."]
        - ["75.4", "That is the wall only. The roof needs paint too."]
      criteria:
        - "I decided which faces are painted before calculating."
        - "I did not count the circles."
        - "I used πrl for the roof."
      explain: "75.36 + 15.7 = 91.06, so about 91.1 m²."
  - hint: ["Divide the painted area by what one litre covers.", "Rounding up: a little unpainted is worse than a little spare."]
    check:
      type: number
      q: "A litre of paint covers $10$ m² (made up for the task). How many whole litres do you need for one coat on the silo, rounding up?"
      answer: 10
      feedback:
        - ["9", "9 litres covers only 90 m², and the silo is a little over 91. Round up."]
      explain: "91.06 ÷ 10 = 9.1 litres. Rounded up to a whole litre, that is 10."
```

### The silo, on paper

Back to the silo. Work it out on paper first, then type your answer.

### Litres of paint

**Also used in**

- **Painting and cladding.** Any job that covers a surface needs the area of the outside faces only.
- **Packaging.** A box stacked on a box, or a tube with a hole, is a composite solid.
- **Next lesson.** Volume of composite objects: how much the silo and a tank hold, and what a model leaves out.
