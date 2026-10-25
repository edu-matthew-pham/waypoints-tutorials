---
order: 23
unit: networks
node: AC9M10SP02 n2
uses: [AC9M10SP02 n1]
assumes: [AC9M10SP02 n1]
connection: street-sweeper
title: Every street once
summary: "A sweeper wants every street once and none twice. Count the junctions where an odd number of streets meet: with none or exactly two, a route exists, and it starts and ends at the odd ones."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Every street once, none twice: is that always possible?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8612
  url: http://127.0.0.1:8612/index.html
  readySelector: "#gsum"
  layout: full
explainPicture: { ref: suburb.yml#explain-pic, caption: "A made-up suburb: B and D have three streets each. Starting at B and finishing at D uses every street once." }
explainClip:
  query: { code: "@suburb.yml#explain", fresh: 1, id: explain }
  caption: "Start at A, then start at B"
  say: "Try to use every street once, from two different starts."
  clip:
    - caption: { text: "Start at A and drive once round the outside.", say: "Start at A and drive once round the outside." }
    - click: { selector: "#gpanel button[aria-label='Start at A']" }
    - click: { selector: "#gpanel button[aria-label='Drive to B']" }
    - click: { selector: "#gpanel button[aria-label='Drive to C']" }
    - click: { selector: "#gpanel button[aria-label='Drive to D']" }
    - click: { selector: "#gpanel button[aria-label='Drive to E']" }
    - click: { selector: "#gpanel button[aria-label='Drive to A']" }
    - caption: { text: "Back at A, with two streets left. Stuck.", say: "Back at A, with two streets left. Stuck." }
    - expect: { selector: "#status", contains: "Stuck at A" }
    - wait: 1200
    - click: { selector: "#gpanel .ngrow:last-of-type button:last-child" }
    - caption: { text: "Start at B instead. Every street, once.", say: "Start at B instead. Every street, once." }
    - click: { selector: "#gpanel button[aria-label='Start at B']" }
    - click: { selector: "#gpanel button[aria-label='Drive to A']" }
    - click: { selector: "#gpanel button[aria-label='Drive to E']" }
    - click: { selector: "#gpanel button[aria-label='Drive to D']" }
    - click: { selector: "#gpanel button[aria-label='Drive to C']" }
    - click: { selector: "#gpanel button[aria-label='Drive to B']" }
    - click: { selector: "#gpanel button[aria-label='Drive to F']" }
    - click: { selector: "#gpanel button[aria-label='Drive to D']" }
    - expect: { selector: "#status", contains: "Every street once" }
    - wait: 1500
---
A council sweeper has to do every street in Wattle Grove, a small made-up suburb, and the driver would rather not use any street twice. Here's the suburb drawn as a network: each junction is a node, each street an edge. Run your finger along it. Can you find a way?

## The suburb

```step
stage: info
insight: "Wattle Grove is a made-up suburb of four junctions and five streets; students try a route by eye here, and Make comes back to it."
diagram:
  ref: diagrams.mmd#wattle
  alt: "Wattle Grove, a suburb with four junctions, P, Q, R and S, and five streets. The streets are P to Q, Q to R, R to S, S to P and P to R."
  caption: "Wattle Grove"
  role: stimulus
```

```code diagrams.mmd#wattle
flowchart TD
  P((P)) --- Q((Q))
  Q --- R((R))
  R --- S((S))
  S --- P
  P --- R
```

The streets are P to Q, Q to R, R to S, S to P, and P to R across the middle. Try it with your finger on the diagram: one route that goes down every street once.

## Predict: a tail

```step
stage: predict
insight: "Committing to what happens when the route starts at A on a triangle with a tail shows who thinks any start works once a route exists."
diagram:
  ref: diagrams.mmd#tail
  alt: "Four junctions. A, B and C make a triangle, and a fourth junction D hangs off C by one street."
  caption: "Three junctions in a triangle, and one more on a tail"
  role: stimulus
check:
  type: predict
  q: "A sweeper must drive down every street here exactly once, starting at A. What happens?"
  options:
    - "However it goes, it gets stuck with a street left"
    - "It does every street once and ends at D"
    - "It does every street once and ends back at A"
    - "It depends on which street it takes first"
  actual: "However it goes, it gets stuck. Try A, B, C, A: it's back at A with the street C to D unused. Try A, B, C, D: it's at D with the street C to A unused. A start at A can't work here."
```

```code diagrams.mmd#tail
flowchart TD
  A((A)) --- B((B))
  B --- C((C))
  C --- A
  C --- D((D))
```

Trace a few routes with your finger. Is there one that ends with no street left?

## Run: start somewhere

```step
stage: run
insight: "Trying to drive every street from two different starts on a made-up suburb shows that the start matters, with the degrees on the board to read."
try: { playground: board, starter: "suburb.yml#run", height: 560 }
check: { type: board, text: "Drive down every street exactly once. Try starting at A first. Then try another junction. Which junction let you do it?", when: "d = 1", explain: "A start at B (or D) works, finishing at the other one. The numbers on the board are how many streets meet at each junction." }
```

Click a junction to start, then click the next junction (or the street) to drive down it. A street you've driven turns orange. Try A first. Then Start again somewhere else.

## Investigate: odd junctions

```step
stage: investigate
insight: "The junctions with an odd number of streets decide the route: none or two and it can be done, starting and ending at the odd ones; Sam says any start works."
tasks:
  - check: { type: number, q: "On the Run board, how many junctions have an odd number of streets?", answer: 2, explain: "B and D have three streets each. A, C, E and F have two." }
  - check:
      type: question
      q: "Every junction is joined to the rest of the suburb. Which suburb can the sweeper do, using every street once?"
      options: ["Junctions with 2, 2, 3, 3 and 4 streets", "Junctions with 3, 3, 3 and 3 streets", "Junctions with 1, 1, 1 and 3 streets", "Junctions with 3, 3, 3, 3, 3 and 3 streets"]
      answer: 0
      feedback: [null, "Four junctions have an odd number of streets. A route can only start at one and end at another, so two odd ends is the most it can handle.", "Four junctions have an odd number of streets: too many.", "Six junctions have an odd number of streets: too many."]
      explain: "Exactly two junctions have an odd number of streets (the two with 3). The route starts at one of them and ends at the other."
  - check: { type: number, q: "A suburb has four junctions, and there's a street between every pair of junctions. How many junctions have an odd number of streets? Work it out on paper first, then type it. Could the sweeper do it?", answer: 4, explain: "Each junction has three streets: one to each of the other three. All four are odd. A route can only start and end at odd junctions, so two is the most it can handle: the sweeper can't." }
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam works out whether the sweeper can do the Run suburb. Click the line where his working goes wrong."
      answer: 3
      fault: logic
      misconception: euler-start-anywhere
      explain: "Line 3: with two odd junctions the route has to start at one of them (B or D) and finish at the other. It can only start anywhere when there are no odd junctions."
```

### Count the odd ones

Look at the number on each junction on the board. Which are odd?

### Which suburb?

A route starts at a junction and ends at one. What does that do to the junctions in between?

### Four junctions, every pair joined

Here's the method on the Run suburb.

```worked
\text{degrees: } A\,2, B\,3, C\,2, D\,3, E\,2, F\,2 :: Count the streets at each junction (its degree).
\text{odd junctions: } B \text{ and } D :: Two junctions have an odd degree.
\text{connected: yes} :: You can get from any junction to any other.
\text{start at } B, \text{ finish at } D :: With two odd junctions, the route starts at one and ends at the other.
```

Now try one on paper. Junctions 1, 2, 3 and 4 have a street between every pair of them. How many junctions have an odd number of streets? Then type it.

### Find the mistake

Read Sam's working. What does two odd junctions do to the start?

## Modify: close a street

```step
stage: modify
try: { playground: board, starter: "suburb.yml#close", height: 560 }
insight: "Closing a street takes one off the degree at each end: closing between two odd junctions fixes two at once; closing the only street at a junction cuts it off; a suburb can never have exactly one odd junction."
tasks:
  - check: { type: board, text: "This suburb has four odd junctions. Close one street so the sweeper can do every street once, then drive the route.", when: "x = 1 and o = 2 and d = 1", explain: "Close a street between two odd junctions: A to B, A to D or B to D. Two junctions become even, two stay odd (D and E, or B and E), and the route runs between them." }
    smaller:
      check: { type: number, q: "A junction has 3 streets and one of them closes. How many streets does it have now?", answer: 2, explain: "3 take away 1 is 2. Closing a street takes one off each end." }
  - check: { type: board, text: "Edge case: close a street so that one junction is cut off from the rest. What does the board say about Connected?", when: "c = 0 and x = 1", explain: "Closing C to E leaves E with no streets. The board says Connected: no." }
  - check:
      type: question
      q: "A student draws a suburb with exactly one junction that has an odd number of streets. What's wrong?"
      options: ["The degrees add up to twice the number of streets, so there are always an even number of odd junctions", "Nothing: the sweeper starts there and finishes anywhere", "Every suburb needs two odd junctions", "The suburb isn't connected"]
      answer: 0
      feedback: [null, "A route that starts at the odd junction has to finish at another odd one. There isn't one.", "A suburb can have none.", "It could be connected. The count of odd junctions is the problem."]
      explain: "Every street has two ends, so the degrees add up to twice the number of streets: an even number. One odd junction would make the total odd, so it can't happen."
```

### Close one street

Which two junctions would you want to make even? What do you close?

### Cut one off

What happens to a junction when its only street closes?

### One odd junction

Think back to adding up the degrees.

## Practise: can the sweeper do it?

```step
stage: practise
insight: "Counting odd junctions from a list of degrees, saying where a route can start, fixing a suburb with a closure, and a review of adding the degrees."
tasks:
  - check:
      type: question
      q: "A suburb's junctions have 2, 2, 3, 3, 4 and 2 streets. Can the sweeper use every street once?"
      options: ["Yes: start at one junction with 3 streets and finish at the other", "Yes: start anywhere and finish where it started", "No: two junctions have 3 streets", "No: a junction has 4 streets"]
      answer: 0
      feedback: [null, "That needs every junction to have an even number of streets. Two don't.", "Two odd junctions are fine: the route starts at one and finishes at the other.", "An even degree like 4 is no trouble."]
      explain: "Two junctions have an odd number of streets (the two with 3), so the route runs between them."
    smaller:
      check: { type: number, q: "How many of the junctions with 2, 2, 3, 3, 4 and 2 streets have an odd number of streets?", answer: 2, explain: "The two junctions with 3." }
  - check:
      type: question
      q: "Every junction in a suburb has an even number of streets. Where can the sweeper start?"
      options: ["Anywhere, and it finishes where it started", "Only at the junction with the most streets", "Anywhere, but it finishes at a different junction", "Nowhere: it can't be done"]
      answer: 0
      feedback: [null, "The number of streets doesn't decide the start.", "With no odd junctions there's no different junction to finish at.", "It can be done when no junction is odd."]
      explain: "With no odd junctions, a route can start at any junction and comes back to it."
  - check: { type: number, q: "A suburb has junctions with 3, 3, 3 and 3 streets. What's the fewest streets the council needs to close so the sweeper can do every street once?", answer: 1, explain: "Close one street between two of the junctions. Those two now have 2 streets, and the other two keep 3: two odd junctions." }
  - check: { type: number, q: "Review: a suburb has 7 streets. Add up the number of streets at every junction. What do you get?", answer: 14, explain: "Each street has two ends, so the total is 2 × 7 = 14." }
```

### Can it be done?

### No odd junctions

### One closure

### Review

Each street has two ends.

## Make: back to Wattle Grove

```step
stage: make
insight: "Coming back to Wattle Grove: the depot at Q is an even junction, so the sweeper can't start there; closing P to R makes every junction even."
hint: ["Count the streets at each junction first.", "Which street joins the two odd junctions?"]
check:
  type: reasoning
  paper: true
  q: "In Wattle Grove (the square P, Q, R, S with a street from P to R across it), the depot is at Q. The council wants the sweeper to start at Q and finish at Q, using every street once. Which one street closes to make that possible? After you close it, how many junctions have an odd number of streets?"
  steps:
    - ["P has 3 streets, Q 2, R 3, S 2", "count the streets at each junction"]
    - ["P and R are odd, so the route has to start at one and finish at the other, not at Q", "two odd junctions: the route starts and ends at them"]
    - ["Close the street from P to R: P, Q, R and S each have 2", "closing a street between the two odd junctions takes one off each"]
    - ["0 junctions have an odd number of streets", "none are odd, so the sweeper can start at Q and finish at Q"]
  picks:
    - step: 4
      q: "Why can the sweeper now start at Q and finish at Q?"
      options: ["Every junction has an even number of streets", "The suburb has fewer streets", "P and R are now odd", "Q is the depot"]
      answer: 0
      feedback: [null, "Fewer streets don't decide it. Look at how many meet at each junction.", "They're even now: they each have 2 streets.", "Where the depot is doesn't decide it."]
  answer: "0"
  answerLabel: "Odd junctions after the closure"
  feedback:
    - ["2", "Close P to R and P and R lose one street each, to 2 each. P, Q, R and S all have 2."]
    - ["4", "After closing P to R, every junction has 2 streets, which is even."]
  criteria:
    - "I counted the streets at each junction."
    - "I found the two odd junctions and closed the street between them."
    - "I said every junction is then even, so the route can start and finish anywhere."
  explain: "Close the street from P to R. Then P, Q, R and S each have 2 streets, so no junction is odd, and the sweeper can start at Q and come back to Q."
```

Back to Wattle Grove. Work this out on paper first, then type the number of odd junctions after you close the street.

**Also used in**

- **Mail and bin rounds.** A route that passes every street once is the problem a postal worker or bin lorry has too.
- **Cut off by a closure.** A road closed for repairs can leave a suburb in two pieces, which is when the network stops being connected.
- **Next lesson.** Solids drawn as networks, and Euler's rule.
