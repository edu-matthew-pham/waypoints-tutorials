---
title: "Nodes and edges"
subtitle: "Angles and shapes · Networks · Lesson 22"
---

# Nodes and edges

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Pick up a train map and plan a trip. What can you read off it, and what can't you?


:::teacher-note

**In one sentence:** Students read a made-up train map as a network (nodes, edges, degree), see that the drawn length of a line isn't a distance, and update the counts when a line is added (AC9M10SP02, node 1).

**Students should be able to say:** I can name the nodes and edges of a network and say what each one stands for. I can find the degree of a node. I can say what a network diagram keeps and what it leaves out.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## A made-up train map


:::keep-together

![A train map with six stations. Fernbank is joined to Quay. Quay is joined to Market and to Park. Market is joined to Hilltop and to Westgate. Westgate is joined to Park.](https://tutorials.learningwaypoints.com/_pictures/diagrams/maths/angles/nodes-and-edges/step-1.svg?v=ba354709532d3752)

*A made-up train map*

:::

Here's the map. It isn't a real city's: the stations are made up. Each line joins two stations you can ride between with no stop in the middle. Try the trip from Fernbank to Hilltop. Which stations do you pass through?

## Predict

<figure class="situation" role="img" aria-label="Two lines from the map, drawn side by side. The top line joins Fernbank and Quay and is short. The bottom line joins Market and Hilltop and is three times as long. Each line is labelled with a question mark for its real length."><svg viewBox="0 0 380 150" width="380" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><circle cx="40" cy="38" r="6" fill="currentColor" stroke="none"/><circle cx="110" cy="38" r="6" fill="currentColor" stroke="none"/><line x1="40" y1="38" x2="110" y2="38" stroke-width="3"/><text x="75" y="22" text-anchor="middle" fill="currentColor" stroke="none">? km</text><text x="40" y="62" text-anchor="middle" fill="currentColor" stroke="none">Fernbank</text><text x="110" y="62" text-anchor="middle" fill="currentColor" stroke="none">Quay</text><circle cx="40" cy="108" r="6" fill="currentColor" stroke="none"/><circle cx="250" cy="108" r="6" fill="currentColor" stroke="none"/><line x1="40" y1="108" x2="250" y2="108" stroke-width="3"/><text x="145" y="92" text-anchor="middle" fill="currentColor" stroke="none">? km</text><text x="40" y="132" text-anchor="middle" fill="currentColor" stroke="none">Market</text><text x="250" y="132" text-anchor="middle" fill="currentColor" stroke="none">Hilltop</text></svg></figure>

Two lines on the same map, and one is much longer. Which ride would take you further?

:::keep-together

**On the map, the line from Market to Hilltop is drawn about three times as long as the line from Fernbank to Quay. In real life, which ride is longer?**

☐ Market to Hilltop

☐ Fernbank to Quay

☐ You can't tell from the map

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** You can't tell. How long a line is drawn is whatever fits on the page. Fernbank to Quay could be 12 km and Market to Hilltop 1 km. The map only tells you which stations are joined.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## What the map keeps


:::keep-together

### What a line stands for

**On this map, what does one line stand for?**

☐ The time a train takes

☐ The distance between two stations

☐ A track that joins two stations with no stop in between

☐ A street you can walk along

:::


:::teacher-note

**Answer:** A track that joins two stations with no stop in between

A line (an edge) says the two stations are joined. That's all this kind of map keeps.

:::


:::keep-together

### Degree

A network is made of **nodes** (the dots, here the stations) and **edges** (the lines between them). The **degree** of a node is the number of edges that meet at it. Here's how to read the map.

1. $6 stations$ — Each station is one node: 6 nodes.
2. $6 lines$ — Each line between two stations is one edge: 6 edges.
3. $\text{degree of Quay} = 3$ — Quay is joined to Fernbank, Market and Park.
4. $\text{degree of Hilltop} = 1$ — Hilltop is joined to Market only.

Now try one on paper. A bus network has four stops, A, B, C and D. The routes are A to B, B to C, C to D, D to A and B to D. Sketch it, then find the degree of B and type it.

**A bus network has stops A, B, C and D, with routes A to B, B to C, C to D, D to A and B to D. What is the degree of B? Work it out on paper first, then type it.**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 3

B is joined to A, C and D, so its degree is 3.

:::


:::keep-together

### Find the mistake

**Lena says the ride to Hilltop must take longest. Click the line where her working goes wrong.**

```
 1  The map has a line from Market to Hilltop and a line from Fernbank to Quay.
 2  On the page, the Market to Hilltop line is three times as long.
 3  So the ride from Market to Hilltop is three times as long.
 4  So the ride to Hilltop takes longest.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: the drawn length of a line isn't the length of the ride. The map keeps which stations are joined, not how far apart they are.

:::


:::keep-together

### Add up the degrees

**Add up the degree of every station on the map. What do you get?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 12

Fernbank 1, Quay 3, Market 3, Hilltop 1, Westgate 2, Park 2: that's 12. It's twice the 6 lines, because each line has two ends.

:::


:::typical

## Change the map


**Lakeside.** Hilltop had one line. What happens to its degree when a new line joins it?

**A station with no lines.** A station with nothing joined to it is still a station on the map. How many lines meet there?

**Getting to Marina.** For a trip, you need lines you can follow one after another.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Degrees and edges


:::keep-together

### Degree

**In a network, A is joined to B, C and D, B is joined to C, and C is joined to D. What's the degree of C?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 3

C is joined to A, B and D: degree 3.

:::


:::keep-together

### Ends of edges

**A network has 8 edges. Add up the degrees of all its nodes. What do you get?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 16

Each edge has two ends, so the degrees add up to 2 × 8 = 16.

:::


:::keep-together

### What the map shows

**Which of these can you work out from a train map like this one?**

☐ How many kilometres from Quay to Park

☐ Where the stations really are on a street map

☐ Which line is quickest

☐ Which stations you can ride between without changing trains

:::


:::teacher-note

**Answer:** Which stations you can ride between without changing trains

The map keeps connections only: which stations are joined.

:::


:::keep-together

### Review

**Review: in 3D coordinates, P is (2, 3, 4) and Q is (2, 3, 9). How many units above P is Q?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 5

Only the up value changes, from 4 to 9: that's 5 units.

:::


## Make: add a line

Back to the train map. Work this out on paper first, then type the number of lines.

**Also used in**

- **Street maps and journey planners.** Each junction is a node and each street an edge, the idea behind the route you see on a phone.
- **Next lessons.** Following a path along edges (Every street once), then solids drawn as networks (Euler's rule).

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**A network has 9 edges. What do the degrees of all its nodes add up to?**

{{lines-3}}

:::


:::teacher-note

**Answer:** 18.

:::

