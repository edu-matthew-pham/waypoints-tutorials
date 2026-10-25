---
order: 22
unit: networks
node: AC9M10SP02 n1
uses: [AC9M8SP03 n1]
connection: train-map
title: Nodes and edges
summary: "A network keeps only who is joined to whom. The dots are nodes, the lines are edges, and a node's degree is how many edges meet there. Lengths and positions on the page don't mean distance."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Pick up a train map and plan a trip. What can you read off it, and what can't you?"
---
You're at Fernbank and you need to get to Hilltop. The map on the platform wall shows the stations as dots and the tracks as lines. Which stations can you reach without changing trains?

## A made-up train map

```step
stage: info
insight: "A made-up map with six stations lets students name nodes and edges before the lesson uses the words; Make comes back to it and adds a line."
diagram:
  ref: diagrams.mmd#map
  alt: "A train map with six stations. Fernbank is joined to Quay. Quay is joined to Market and to Park. Market is joined to Hilltop and to Westgate. Westgate is joined to Park."
  caption: "A made-up train map"
  role: stimulus
```

Here's the map. It isn't a real city's: the stations are made up. Each line joins two stations you can ride between with no stop in the middle. Try the trip from Fernbank to Hilltop. Which stations do you pass through?

```code diagrams.mmd#map
flowchart TD
  F[Fernbank] --- Q[Quay]
  Q --- M[Market]
  Q --- P[Park]
  M --- H[Hilltop]
  M --- W[Westgate]
  W --- P
```

## Predict: two lines

```step
stage: predict
insight: "Committing to which ride is longer, from how long two lines are drawn, shows who reads line length on a network as distance."
check:
  type: predict
  q: "On the map, the line from Market to Hilltop is drawn about three times as long as the line from Fernbank to Quay. In real life, which ride is longer?"
  options:
    - "Market to Hilltop"
    - "Fernbank to Quay"
    - "You can't tell from the map"
  actual: "You can't tell. How long a line is drawn is whatever fits on the page. Fernbank to Quay could be 12 km and Market to Hilltop 1 km. The map only tells you which stations are joined."
```

<figure class="situation" role="img" aria-label="Two lines from the map, drawn side by side. The top line joins Fernbank and Quay and is short. The bottom line joins Market and Hilltop and is three times as long. Each line is labelled with a question mark for its real length."><svg viewBox="0 0 380 150" width="380" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><circle cx="40" cy="38" r="6" fill="currentColor" stroke="none"/><circle cx="110" cy="38" r="6" fill="currentColor" stroke="none"/><line x1="40" y1="38" x2="110" y2="38" stroke-width="3"/><text x="75" y="22" text-anchor="middle" fill="currentColor" stroke="none">? km</text><text x="40" y="62" text-anchor="middle" fill="currentColor" stroke="none">Fernbank</text><text x="110" y="62" text-anchor="middle" fill="currentColor" stroke="none">Quay</text><circle cx="40" cy="108" r="6" fill="currentColor" stroke="none"/><circle cx="250" cy="108" r="6" fill="currentColor" stroke="none"/><line x1="40" y1="108" x2="250" y2="108" stroke-width="3"/><text x="145" y="92" text-anchor="middle" fill="currentColor" stroke="none">? km</text><text x="40" y="132" text-anchor="middle" fill="currentColor" stroke="none">Market</text><text x="250" y="132" text-anchor="middle" fill="currentColor" stroke="none">Hilltop</text></svg></figure>

Two lines on the same map, and one is much longer. Which ride would take you further?

## Run: read the map

```step
stage: run
insight: "Counting the stations reachable from Quay in one ride introduces degree without the word: it is a count of lines, not of kilometres."
check: { type: number, q: "Each line is a ride with no stop in the middle. From Quay, how many stations can you reach in one ride? Then look back at your prediction.", answer: 3, explain: "Fernbank, Market and Park. Three lines meet at Quay." }
```

Count the lines that meet at Quay. Fernbank, Market and Park are all one ride away.

## Investigate: what the map keeps

```step
stage: investigate
insight: "A line on a network stands for a connection, not a length; the node's degree counts connections; Lena reads the length of a drawn line as the length of the ride."
tasks:
  - check:
      type: question
      q: "On this map, what does one line stand for?"
      options: ["A track that joins two stations with no stop in between", "The distance between two stations", "The time a train takes", "A street you can walk along"]
      answer: 0
      feedback: [null, "The map doesn't show distances. A short line and a long line can be the same ride.", "Times aren't on this map either.", "It's a rail line, not a street."]
      explain: "A line (an edge) says the two stations are joined. That's all this kind of map keeps."
  - check: { type: number, q: "A bus network has stops A, B, C and D, with routes A to B, B to C, C to D, D to A and B to D. What is the degree of B? Work it out on paper first, then type it.", answer: 3, explain: "B is joined to A, C and D, so its degree is 3." }
  - check:
      type: bug
      code: "working.txt#lena"
      text: "Lena says the ride to Hilltop must take longest. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: network-scale-map
      explain: "Line 3: the drawn length of a line isn't the length of the ride. The map keeps which stations are joined, not how far apart they are."
  - check: { type: number, q: "Add up the degree of every station on the map. What do you get?", answer: 12, explain: "Fernbank 1, Quay 3, Market 3, Hilltop 1, Westgate 2, Park 2: that's 12. It's twice the 6 lines, because each line has two ends." }
```

### What a line stands for

Look at the line between Market and Hilltop. What is it telling you?

### Degree

A network is made of **nodes** (the dots, here the stations) and **edges** (the lines between them). The **degree** of a node is the number of edges that meet at it. Here's how to read the map.

```worked
6 stations :: Each station is one node: 6 nodes.
6 lines :: Each line between two stations is one edge: 6 edges.
\text{degree of Quay} = 3 :: Quay is joined to Fernbank, Market and Park.
\text{degree of Hilltop} = 1 :: Hilltop is joined to Market only.
```

Now try one on paper. A bus network has four stops, A, B, C and D. The routes are A to B, B to C, C to D, D to A and B to D. Sketch it, then find the degree of B and type it.

### Find the mistake

Read Lena's working. Which line says something the map doesn't?

### Add up the degrees

Add the degrees up for every station, then look at the number of lines.

## Modify: change the map

```step
stage: modify
insight: "Adding a station and a line changes degrees by one; a station with no line still counts as a node, with degree 0; and a node you can't reach is not connected to the others."
tasks:
  - check: { type: number, q: "The council adds a new station, Lakeside, joined by one new line to Hilltop. What's Hilltop's degree now?", answer: 2, explain: "Hilltop had one line, to Market. The new line makes two." }
  - check: { type: number, q: "Edge case: a new station, Marina, opens with no line to any other station yet. What's Marina's degree?", answer: 0, explain: "No lines meet there, so its degree is 0. It's still a node." }
    smaller:
      check: { type: question, q: "Marina has no line to any other station. How many lines meet at Marina?", options: ["None", "One", "Six"], answer: 0, explain: "None. Degree counts lines, so Marina's degree is 0." }
  - check:
      type: question
      q: "Can you ride from Fernbank to Marina?"
      options: ["No: no line leads to Marina", "Yes: Marina is on the map", "Yes, if you change at Quay", "Only at weekends"]
      answer: 0
      feedback: [null, "Being on the map isn't enough: you need a path of lines to get there.", "Quay doesn't have a line to Marina either.", "The map doesn't show timetables."]
      explain: "A trip needs a path of edges. With no edge at Marina, there's no way to get there, so Marina isn't connected to the rest of the network."
```

### Lakeside

Hilltop had one line. What happens to its degree when a new line joins it?

### A station with no lines

A station with nothing joined to it is still a station on the map. How many lines meet there?

### Getting to Marina

For a trip, you need lines you can follow one after another.

## Practise: degrees and edges

```step
stage: practise
insight: "Reading degrees off a description, using that each edge has two ends, saying what a network doesn't show, and a review of 3D points."
tasks:
  - check: { type: number, q: "In a network, A is joined to B, C and D, B is joined to C, and C is joined to D. What's the degree of C?", answer: 3, explain: "C is joined to A, B and D: degree 3." }
  - check: { type: number, q: "A network has 8 edges. Add up the degrees of all its nodes. What do you get?", answer: 16, explain: "Each edge has two ends, so the degrees add up to 2 × 8 = 16." }
    smaller:
      check: { type: number, q: "Each edge has two ends, and each end counts once towards a degree. How many ends do 5 edges have in all?", answer: 10, explain: "5 edges × 2 ends = 10." }
  - check:
      type: question
      q: "Which of these can you work out from a train map like this one?"
      options: ["Which stations you can ride between without changing trains", "How many kilometres from Quay to Park", "Which line is quickest", "Where the stations really are on a street map"]
      answer: 0
      feedback: [null, "Distances aren't on the map.", "Times aren't on the map.", "The positions on the page don't match the real positions."]
      explain: "The map keeps connections only: which stations are joined."
  - check: { type: number, q: "Review: in 3D coordinates, P is (2, 3, 4) and Q is (2, 3, 9). How many units above P is Q?", answer: 5, explain: "Only the up value changes, from 4 to 9: that's 5 units." }
```

### Degree

### Ends of edges

### What the map shows

### Review

The third number of a 3D point is how far up it is.

## Make: add a line

```step
stage: make
insight: "Coming back to the train map and adding a line: updating the counts is easy; saying what the new line doesn't tell you is the idea."
hint: ["The new line adds one edge.", "Each end of the new line adds one to a degree."]
check:
  type: reasoning
  paper: true
  q: "The council adds a new line joining Hilltop and Park. Work out how many lines are on the map now, and the new degree of Hilltop and of Park. Then say whether a rider can tell from the map if the new line is the quickest way from Hilltop to Park."
  steps:
    - ["$6 + 1 = 7$ edges", "one new line adds one edge"]
    - ["Hilltop: $1 + 1 = 2$. Park: $2 + 1 = 3$", "each end of the new line adds one to that node's degree"]
    - ["The rider can't tell", "the map keeps which stations are joined, not how long the ride is"]
  picks:
    - step: 3
      q: "Why can't the rider tell if the new line is quickest?"
      options: ["The map doesn't show how far or how long a ride is", "Short lines on the map are slow", "The new line isn't on the map", "A map can only show one line at a time"]
      answer: 0
      feedback: [null, "Line length on this map isn't a time. It could be fast or slow.", "It is on the map: you've just drawn it.", "Maps show many lines at once."]
  answer: "7"
  answerLabel: "Lines on the map now"
  feedback:
    - ["6", "The new line makes one more."]
    - ["8", "One new line adds one edge, not two."]
  criteria:
    - "I added one edge, because there's one new line."
    - "I added one to the degree at each end of the new line."
    - "I said the map doesn't tell the length or time of a ride."
  explain: "The map now has 7 edges. Hilltop's degree is 2 and Park's is 3. A rider can't tell from the map how long the new ride is."
```

Back to the train map. Work this out on paper first, then type the number of lines.

**Also used in**

- **Street maps and journey planners.** Each junction is a node and each street an edge, the idea behind the route you see on a phone.
- **Next lessons.** Following a path along edges (Every street once), then solids drawn as networks (Euler's rule).
