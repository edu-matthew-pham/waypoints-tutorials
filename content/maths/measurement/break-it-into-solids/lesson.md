---
order: 40
unit: composite10
node: AC9M10M01 n1
uses: [AC9M9M01 n1, AC9M9M01 n2]
assumes: [AC9M9M01 n2]
connection: grain-silo
title: Break it into solids
summary: "Most real objects are not one solid. Break the object into cylinders, cones and boxes, decide whether each is added or taken away, and notice which faces disappear where solids join."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A silo, a drain pipe and a pool with a deep end are each built from simpler solids. Which ones, and how do they fit together?"
---
A farm silo is a cylinder with a cone-shaped roof on top. How much grain can it hold when it is full? Have a guess, and we'll come back to it at the end. (The silo's sizes are made up for the task: a real sales brochure is better, and you could use one in class.)

## Predict: the silo

```step
stage: predict
insight: "Committing to the silo's volume shows who adds a cone as if it were a full cylinder, who forgets the roof, and who has a feel for a cone holding less."
check:
  type: predict
  q: "The silo's wall is a cylinder 6 m tall with a radius of 2 m. The roof is a cone 1.5 m tall sitting on top. About how many cubic metres of grain does it hold when full?"
  options:
    - "About 82 m³"
    - "About 75 m³"
    - "About 94 m³"
    - "About 120 m³"
  actual: "About 82 m³. The cylinder holds about 75 m³ and the cone adds about 6 m³: a cone holds only a third of the cylinder that fits round it. The 94 m³ answer treats the roof as a full cylinder 1.5 m tall."
```

<figure class="situation" role="img" aria-label="A grain silo: a cylinder 6 metres tall with a radius of 2 metres, topped with a cone-shaped roof 1.5 metres tall. The picture is not to scale."><svg viewBox="0 0 360 218" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><path d="M60 70 L120 18 L180 70" stroke-width="1.8" fill="#D9A441" fill-opacity="0.25"/><path d="M60 70 v110 a60 14 0 0 0 120 0 v-110" stroke-width="1.8" fill="#378ADD" fill-opacity="0.18"/><ellipse cx="120" cy="70" rx="60" ry="14" stroke-width="1.2" stroke-dasharray="3 3"/><path d="M120 18 V70" stroke-dasharray="4 3"/><text x="126" y="48" fill="currentColor" stroke="none">1.5 m</text><text x="196" y="125" fill="currentColor" stroke="none">wall 6 m tall</text><path d="M120 180 H180" stroke-dasharray="4 3"/><text x="150" y="208" text-anchor="middle" fill="currentColor" stroke="none">radius 2 m</text><text x="42" y="40" text-anchor="end" fill="currentColor" stroke="none">cone roof</text></svg></figure>

The picture isn't to scale. What are the solids, and how much does each hold?

## Run: a cone and its cylinder

```step
stage: run
insight: "A cone holds a third of the cylinder that fits exactly round it (same base, same height), so the roof adds one third of base area times height."
check: { type: number, q: "A cylinder fits exactly round the roof cone: radius $2$ m and height $1.5$ m. What is its volume? (m³, 1 decimal place, $\\pi \\approx 3.14$)", answer: 18.8, tolerance: 0.1, explain: "3.14 × 2² × 1.5 = 18.84 m³. The roof cone holds a third of that." }
```

<figure class="situation" role="img" aria-label="A cylinder of radius 2 metres and height 1.5 metres, with a cone inside it that has the same circular base and the same height. The cone's point touches the middle of the cylinder's top."><svg viewBox="0 0 360 150" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><ellipse cx="120" cy="30" rx="60" ry="14" stroke-width="1.6"/><path d="M60 30 v70 a60 14 0 0 0 120 0 v-70" stroke-width="1.6" fill="#378ADD" fill-opacity="0.1"/><path d="M60 100 L120 30 L180 100" stroke-width="1.8" fill="#D9A441" fill-opacity="0.3"/><text x="196" y="70" fill="currentColor" stroke="none">height 1.5 m</text><path d="M120 114 H180" stroke-dasharray="4 3"/><text x="150" y="142" text-anchor="middle" fill="currentColor" stroke="none">radius 2 m</text></svg></figure>

Here is a fact to use rather than one we prove today: a cone holds exactly **a third** of the cylinder that fits round it. You can see it for yourself by filling a cone with sand and pouring it into a cylinder with the same base and the same height. It takes three pours to fill the cylinder. So a cone's volume is one third of its base area times its height.

How much does your cylinder hold? The roof cone holds a third of that.

## Investigate: added or taken away

```step
stage: investigate
insight: "To find the volume of an object made of solids, name each solid and decide whether its volume is added or taken away. Where two solids join, the joined faces are hidden. Dev treats the cone as a full cylinder."
tasks:
  - check:
      type: question
      q: "The silo is a cylinder with a cone on top. How do you find the volume of grain it holds?"
      options:
        - "Add the cylinder's volume and the cone's volume"
        - "Take the cone's volume away from the cylinder's volume"
        - "Use the cylinder's volume only, because the roof is just a lid"
        - "Multiply the two volumes"
      answer: 0
      feedback:
        - null
        - "The cone is part of the grain space, not a hole in it: it adds to the cylinder."
        - "The roof is a cone you can fill, so it holds grain too."
        - "Volumes of separate solids are added, not multiplied."
      explain: "The two solids sit one on top of the other and the grain fills both: add the volumes."
    smaller:
      check: { type: "number", q: "How many separate solids is the silo made of?", answer: 2, explain: "A cylinder and a cone." }
  - check:
      type: question
      q: "The cone's flat base sits exactly on the cylinder's top circle. Which faces are no longer on the outside of the silo?"
      options:
        - "The cylinder's top circle and the cone's base circle"
        - "The cone's curved face"
        - "The cylinder's curved wall"
        - "None of them: every face is still on the outside"
      answer: 0
      feedback:
        - null
        - "The curved roof is still the outside of the silo."
        - "The wall is still the outside."
        - "Where two faces are pressed together they are hidden inside."
      explain: "The two circles are pressed together, so both are hidden: neither can be seen or painted."
    smaller:
      check: { type: "number", q: "How many flat circles take part in the join between the cone and the cylinder?", answer: 2, explain: "The cylinder's top circle and the cone's base circle." }
  - check:
      type: bug
      code: "working.txt#dev"
      text: "Dev works out how much grain the silo holds. Click the line where his working goes wrong."
      answer: 3
      fault: logic
      misconception: cone-as-cylinder
      explain: "Line 3: a cone holds a third of the cylinder that fits round it. Dev used the whole cylinder, 3.14 × 2² × 1.5 = 18.8, and forgot the one third."
  - check:
      type: reasoning
      paper: true
      q: "A concrete pipe is 2 m long. Its outer radius is 0.5 m and the hole through it has a radius of 0.4 m (made up for the task). What is the volume of concrete? (m³, 2 decimal places, $\\pi \\approx 3.14$)"
      steps:
        - ["$V_{\\text{outer}} = 3.14 \\times 0.5^2 \\times 2 = 1.57$", "the whole cylinder, as if it were solid"]
        - ["$V_{\\text{hole}} = 3.14 \\times 0.4^2 \\times 2 = 1.0048$", "the hole is a cylinder too"]
        - ["$V = 1.57 - 1.0048 = 0.5652$", "taken away, not added"]
      answer: "0.57"
      answerLabel: "Volume of concrete (m³)"
      tolerance: 0.02
      feedback:
        - ["2.57", "That adds the hole. A hole has no concrete in it: take it away."]
        - ["1.57", "That is the solid cylinder. Take the hole's volume away from it."]
      criteria:
        - "I found the volume of the whole cylinder and the volume of the hole."
        - "I took the hole away instead of adding it."
        - "I used the radius, not the diameter."
      explain: "1.57 − 1.0048 = 0.5652, so about 0.57 m³ of concrete."
```

### Which solids?

Here is a small seed silo (made up): a cylinder 1 m in radius and 4 m tall, with a cone roof 1.2 m tall. Name the solids first, then decide: add or take away?

```worked
V = V_{\text{cylinder}} + V_{\text{cone}} :: Two solids, joined: add their volumes.
V_{\text{cylinder}} = 3.14 \times 1^2 \times 4 = 12.56 :: Base area times height, in m³.
V_{\text{cone}} = \frac{1}{3} \times 3.14 \times 1^2 \times 1.2 = 1.256 :: A third of the cylinder that fits round the roof.
V = 12.56 + 1.256 = 13.816 \approx 13.8 \text{ m}^3 :: The seed silo holds about 13.8 m³.
```

Now the big silo: add the two volumes the same way. Does the grain fill the roof too?

### Faces that join

Think of gluing the cone onto the cylinder. The circles that are pressed together stay inside.

### Find the mistake

Read Dev's working. Which line uses a cone as if it were a full cylinder?

### A concrete pipe

<figure class="situation" role="img" aria-label="A concrete pipe lying on its side, 2 metres long. The ring at the near end has an outer radius of 0.5 metres and a hole with a radius of 0.4 metres."><svg viewBox="0 0 380 170" width="380" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><path d="M90 30 H270 M90 130 H270" stroke-width="1.8"/><path d="M270 30 a22 50 0 0 1 0 100" stroke-width="1.8"/><ellipse cx="90" cy="80" rx="22" ry="50" stroke-width="1.8" fill="#9aa0a6" fill-opacity="0.35"/><ellipse cx="90" cy="80" rx="17" ry="40" stroke-width="1.6" fill="currentColor" fill-opacity="0.08"/><path d="M90 80 H112" stroke-dasharray="3 2"/><path d="M90 80 V120" stroke-dasharray="3 2"/><text x="300" y="60" fill="currentColor" stroke="none">outer radius 0.5 m</text><text x="300" y="80" fill="currentColor" stroke="none">hole radius 0.4 m</text><path d="M90 150 H270 M90 145 v10 M270 145 v10" stroke-width="1"/><text x="180" y="166" text-anchor="middle" fill="currentColor" stroke="none">2 m long</text></svg></figure>

The pipe is a big cylinder with a smaller cylinder taken out. Work it out on paper first, one step per line, then type the volume.

## Modify: change one thing

```step
stage: modify
insight: "One change at a time: a taller wall changes only the cylinder, a flat roof removes the cone, and a wider hole takes away more."
tasks:
  - hint: ["Only the cylinder changes.", "The cone still adds 6.28 m³."]
    check: { type: number, q: "The silo's wall is raised to $8$ m, with the same cone roof (radius $2$ m, height $1.5$ m). How many cubic metres of grain does it hold? (1 decimal place, $\\pi \\approx 3.14$)", answer: 106.8, tolerance: 0.2, explain: "Cylinder 3.14 × 2² × 8 = 100.48, cone 6.28, total 106.76 m³." }
  - hint: ["What does one third of the base area times 0 give?"]
    check: { type: number, q: "Edge case: the roof is flat, so the cone is $0$ m tall. How many cubic metres does the roof add?", answer: 0, explain: "One third of the base area times a height of 0 is 0: a flat roof holds nothing, and the silo is just the cylinder." }
  - hint: ["Whole cylinder minus the hole.", "The hole's radius is 0.45 m."]
    check: { type: number, q: "The pipe's hole is made wider: outer radius $0.5$ m, hole radius $0.45$ m, length $2$ m. What is the volume of concrete? (m³, 2 decimal places, $\\pi \\approx 3.14$)", answer: 0.3, tolerance: 0.02, explain: "3.14 × 0.5² × 2 = 1.57, and 3.14 × 0.45² × 2 = 1.2717. The difference is 0.2983, about 0.30 m³." }
```

### A taller wall

### A flat roof

### A wider hole

## Practise: composite volumes

```step
stage: practise
insight: "Deciding which solids to add and which to take away, then finding each volume."
tasks:
  - hint: ["Find the box and the roof prism separately.", "The roof prism's base is a triangle."]
    check:
      type: number
      q: "A shed is a box $4$ m by $3$ m and $2.5$ m tall, with a roof that is a triangular prism on top (triangle base $4$ m, triangle height $1$ m, $3$ m long). What is its total volume? (m³; made up for the task)"
      answer: 36
      feedback:
        - ["30", "That is the box on its own. The roof is a solid too: add it."]
      explain: "Box 4 × 3 × 2.5 = 30. Roof prism: base area ½ × 4 × 1 = 2, times 3 = 6. Total 36 m³."
    smaller:
      check: { type: "number", q: "What is the volume of the roof prism alone? (m³)", answer: 6, explain: "Base area ½ × 4 × 1 = 2, then × 3 = 6." }
  - check:
      type: question
      q: "Which object's volume is found by taking one solid away from another?"
      options:
        - "A hollow concrete pipe"
        - "A silo with a cone roof"
        - "A shed with a prism roof"
        - "Two boxes stacked in a tower"
      answer: 0
      feedback:
        - null
        - "The cone roof is filled with grain, so it adds."
        - "The roof is part of the shed's space, so it adds."
        - "Stacked boxes both count, so they add."
      explain: "The pipe is a solid cylinder with the hole taken out of it."
  - check:
      type: number
      q: "Review: the silo's wall is a cylinder with a radius of $2$ m and a height of $6$ m. What is its curved surface area? (m², nearest whole number, $\\pi \\approx 3.14$)"
      answer: 75
      tolerance: 1
      explain: "2 × 3.14 × 2 × 6 = 75.36 m²."
```

### The shed

### Added or taken away

### Review

## Make: the silo

```step
stage: make
insight: "Returning to the silo: split it into solids, work out each, and add. The answer is the most grain it could hold."
tasks:
  - hint: ["Cylinder first: base area times height.", "The cone is a third of the cylinder that fits round the roof."]
    check:
      type: reasoning
      paper: true
      q: "The silo's wall is a cylinder 6 m tall with a radius of 2 m, and its roof is a cone 1.5 m tall (made up for the task). How many cubic metres of grain can it hold? (1 decimal place, $\\pi \\approx 3.14$)"
      steps:
        - ["$V_{\\text{cylinder}} = 3.14 \\times 2^2 \\times 6 = 75.36$", "the wall part: base area times height"]
        - ["$V_{\\text{cone}} = \\frac{1}{3} \\times 3.14 \\times 2^2 \\times 1.5 = 6.28$", "a third of the cylinder that fits round the roof"]
        - ["$V = 75.36 + 6.28 = 81.64$", "add: the cone sits on top of the cylinder"]
      answer: "81.6"
      answerLabel: "Volume (m³)"
      tolerance: 0.2
      feedback:
        - ["94.2", "That treats the cone as a full cylinder. It holds only a third of that."]
        - ["75.4", "That leaves the roof out. The cone holds grain too."]
      criteria:
        - "I named the two solids before calculating."
        - "I used a third for the cone."
        - "I added the volumes."
      explain: "75.36 + 6.28 = 81.64, so about 81.6 m³."
  - check:
      type: number
      q: "One cubic metre is $1000$ litres. How many litres is that? (nearest hundred)"
      answer: 81600
      tolerance: 100
      explain: "81.64 × 1000 = 81 640 litres, about 81 600."
```

### The silo, on paper

Back to the silo. Work it out on paper first, then type your answer.

### In litres

**Also used in**

- **Storage.** Silos, tanks and bins are often a cylinder with a cone or a dome at one end.
- **Building.** A house frame is boxes and prisms joined together; a pipe or a duct is one solid taken out of another.
- **Next lesson.** Painting the silo: which faces count when solids are joined.
