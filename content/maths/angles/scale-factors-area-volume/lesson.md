---
order: 26
unit: enlarge9
node: AC9M9SP02 n2
uses: [AC9M9SP02 n1]
assumes: [AC9M9SP02 n1]
connection: scale-up-monster
title: Scale factors for area and volume
summary: "When lengths are multiplied by k, areas are multiplied by k² and volumes by k³. That is why a giant can't just be a bigger copy of a normal animal."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A film makes a lizard ten times bigger. Could its legs hold it up?"
---
A film monster is a lizard scaled up 10 times in every direction: ten times longer, ten times wider and ten times taller. Its weight depends on its volume, and a leg's strength depends on its cross-section, an area. Have a guess which grows faster, and we'll come back to it at the end. (This is a model, not a real animal.)

<figure class="situation" role="img" aria-label="A small cube with side 1 and a bigger cube with side 2 built from small cubes, two layers of four."><svg viewBox="0 0 360 170" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><path d="M40 130 h40 v-40 h-40 z M40 90 l12 -12 h40 l-12 12 M92 78 v40 l-12 12" stroke-width="1.6" fill="#888780" fill-opacity="0.25"/><g stroke-width="1.4" fill="#888780" fill-opacity="0.25"><path d="M180 140 h80 v-80 h-80 z M180 60 l24 -24 h80 l-24 24 M284 36 v80 l-24 24"/></g><path d="M220 140 v-80 M180 100 h80" stroke-width="1"/><text x="40" y="155" fill="currentColor" stroke="none">side 1</text><text x="190" y="158" fill="currentColor" stroke="none">side 2: how many small cubes?</text></svg></figure>

## Predict: cubes in a bigger cube

```step
stage: predict
insight: "Counting the small cubes in a cube of side 2 shows whether students expect volume to double or to grow by the cube of the factor."
check:
  type: predict
  q: "A cube with side 1 is enlarged by a scale factor of 2. How many of the small cubes does the big cube hold?"
  options:
    - "8"
    - "2"
    - "4"
    - "6"
  actual: "8. It's two layers of four cubes: 2 × 2 × 2 = 8. Doubling the sides makes the volume 2³ = 8 times as big."
```

## Run: count

```step
stage: run
insight: "Lengths grow by k, the area of a face by k × k, and the volume by k × k × k."
check: { type: number, q: "A cube has side 1. It is enlarged by a scale factor of 3. How many small cubes does it hold?", answer: 27, explain: "3 × 3 × 3 = 27." }
```

## Investigate: k, k² and k³

```step
stage: investigate
insight: "Lengths ×k, areas ×k², volumes ×k³: the more dimensions, the more the scale factor is multiplied in."
tasks:
  - check:
      type: number
      q: "A square has area 5 cm². It is enlarged by a scale factor of 4. What is the new area? (cm²)"
      answer: 80
      explain: "5 × 4² = 5 × 16 = 80."
    smaller:
      check: { type: "number", q: "What is $4 \\times 4$?", answer: 16, explain: "4 × 4 = 16." }
  - check:
      type: number
      q: "A box has volume 10 cm³. It is enlarged by a scale factor of 2. What is the new volume? (cm³)"
      answer: 80
      explain: "10 × 2³ = 10 × 8 = 80."
  - check:
      type: bug
      code: "working.txt#ray"
      text: "Ray enlarges a box by a scale factor of 3. Click the line where his working goes wrong."
      answer: 3
      fault: logic
      misconception: enlarge-area-times-k
      explain: "Line 3: area is multiplied by k², which is 9, not 3. Only lengths are multiplied by 3."
```

### Lengths, areas, volumes

```worked
\text{length} \times k :: Every side is multiplied by k.
\text{area} \times k^2 :: Two directions, so k × k.
\text{volume} \times k^3 :: Three directions, so k × k × k.
k = 10 \Rightarrow \times 10, \times 100, \times 1000 :: The monster.
```

### Area and volume

### Find the mistake

Read Ray's working. Which line multiplies the area by k?

## Modify: change the factor

```step
stage: modify
insight: "Going backwards from the area or volume to the scale factor tests that k² and k³ are used the right way round."
tasks:
  - hint: ["Area scales by k².", "k² = 100 ÷ 25."]
    check: { type: number, q: "A shape's area goes from $25$ cm² to $100$ cm². What is the scale factor for lengths?", answer: 2, explain: "100 ÷ 25 = 4 = k², so k = 2." }
  - hint: ["Volume scales by k³.", "216 = 6 × 6 × 6."]
    check: { type: number, q: "A model's volume is multiplied by $216$. What is the scale factor for lengths?", answer: 6, explain: "k³ = 216, so k = 6." }
  - hint: ["Compare the factors for strength and weight.", "Cross-section ×100, volume ×1000."]
    check: { type: question, q: "A shape is enlarged by a scale factor of 10. By how much is its volume multiplied?", options: ["1000", "10", "100", "30"], answer: 0, feedback: [null, "10 is the factor for lengths.", "100 is the factor for area.", "k³ is 10 × 10 × 10, not 3 × 10."], explain: "10³ = 1000." }
```

### From area to k

### From volume to k

### Volume

## Practise: scale it

```step
stage: practise
insight: "Using k, k² and k³ on lengths, areas and volumes."
tasks:
  - check:
      type: number
      q: "A square has side 3 cm. Enlarge it by a scale factor of 5. What is the new area? (cm²)"
      answer: 225
      explain: "The new side is 15, so the area is 225."
  - check:
      type: number
      q: "A cube has volume 4 cm³. Enlarge it by a scale factor of 3. What is the new volume? (cm³)"
      answer: 108
      explain: "4 × 3³ = 4 × 27 = 108."
    smaller:
      check: { type: "number", q: "What is $3 \\times 3 \\times 3$?", answer: 27, explain: "3 × 3 × 3 = 27." }
  - check:
      type: number
      q: "Review: a triangle's sides are 3, 4 and 5. A similar triangle has its shortest side 9. What is its longest side?"
      answer: 15
      explain: "The factor is 3, so 5 × 3 = 15."
```

### Area

### Volume

### Review

## Make: the monster

```step
stage: make
insight: "Returning to the monster: lengths ×10, strength ×100, weight ×1000, so each bit of leg carries ten times as much."
tasks:
  - hint: ["Weight depends on volume: ×1000.", "Strength depends on the leg's cross-section: ×100."]
    check:
      type: reasoning
      paper: true
      q: "A model lizard is scaled up by a factor of 10. Its weight is multiplied by 1000 (volume) and a leg's strength by 100 (cross-section area). How many times more weight does each unit of leg strength carry?"
      steps:
        - ["weight $\\times 10^3 = 1000$", "volume scales by k³"]
        - ["strength $\\times 10^2 = 100$", "area scales by k²"]
        - ["$1000 \\div 100 = 10$", "weight per unit of strength"]
      answer: "10"
      answerLabel: "Times more load"
      tolerance: 0.001
      feedback:
        - ["1000", "That's the weight. Compare it with the strength."]
        - ["100", "That's the strength. Compare it with the weight."]
      criteria:
        - "I used k² for strength."
        - "I used k³ for weight."
        - "I divided to compare them."
      explain: "The legs carry 10 times as much load per unit of strength, so the scaled-up lizard's legs would buckle."
  - check:
      type: question
      q: "So what must a real giant animal look like?"
      options: ["Thicker legs than a scaled-up copy, to keep up with the weight", "The same as a small animal", "Thinner legs", "Smaller overall"]
      answer: 0
      feedback: [null, "The model says a scaled copy can't hold up.", "That's worse for strength.", "The question is about big animals."]
      explain: "Elephants have thick legs compared with a deer's. It's a model, not a real anatomy lesson."
```

### The load

### Real giants

**Also used in**

- **Biology.** Small animals lose heat faster because they have more surface for their volume.
- **Cooking and packaging.** Doubling a box gives eight times the volume but only four times the card.
- **Next unit.** Surface area and volume of prisms and cylinders.
