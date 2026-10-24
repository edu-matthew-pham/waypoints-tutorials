---
order: 7
unit: networks
node: AC9TDI6K02 n1
title: Joining computers
summary: "A network is computers joined so they can send each other data. They can be joined by a cable, by Wi-Fi (radio waves to a router) or by mobile data (radio waves to a phone tower). Cables are fastest and most reliable; Wi-Fi lets you move but slows with distance and walls. The internet is lots of networks joined together."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "At school, your laptop can print down the hall and open a website on the other side of the world. How is it joined to them?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8554
  url: http://127.0.0.1:8554/index.html
  readySelector: "svg"
  layout: full
explainPicture: { ref: link.yml#explain-pic, caption: "A laptop joined to a router by Wi-Fi: fast, a tiny wait, a few pieces lost. A cable would be faster still." }
---
A **network** is two or more computers joined so they can send each other data: messages, photos, games, web pages.

## Predict: is Wi-Fi a network?

```step
stage: predict
insight: "Committing to whether Wi-Fi counts tests the new move: computers can be joined without wires."
check:
  type: predict
  q: "Your tablet uses the school Wi-Fi. There's no cable plugged in. Is it on a network?"
  options: ["Yes: it's joined to the router by radio waves", "No: a network needs cables", "Only when it's charging", "Only if it's near a computer"]
  actual: "Yes. Wi-Fi joins the tablet to a router with radio waves instead of a cable. It's still a network."
```

## Try: cable or Wi-Fi

```step
stage: run
insight: "Switching between a cable and Wi-Fi settles the prediction: both join the laptop to the router; they differ in speed."
try: { playground: board, starter: "link.yml#run", height: 460 }
check: { type: board, text: "The laptop starts on a cable. Switch it to Wi-Fi. Which is faster?", when: "w = 2", explain: "The cable is very fast; Wi-Fi is fast. Both join the laptop to the router." }
```

Was your guess right?

## Worked example: three ways to join

```step
stage: investigate
insight: "Comparing the three ways to join models the move: each joins a device to a network, with different strengths. Sam thinks wireless isn't joined, the mistake planted after the method."
tasks:
  - check:
      type: question
      q: "The school's computer lab uses cables for its 30 computers. Why?"
      options: ["Cables are faster and more reliable, and the computers never move", "Wi-Fi isn't a network", "Cables are cheaper than air", "Computers can't use Wi-Fi"]
      answer: 0
      feedback: [null, "Wi-Fi is a network too.", "Wi-Fi needs no cable at all.", "Most laptops use Wi-Fi."]
      explain: "When a computer stays on a desk, a cable is the fastest, steadiest way to join it."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam reasons about the school Wi-Fi. Click the line where it first goes wrong."
      answer: 3
      fault: logic
      misconception: wifi-not-network
      explain: "Line 3: the tablet is joined to the network by radio waves. It can send to the printer through the router."
  - check:
      type: question
      q: "What joins all the devices in a home together?"
      options: ["The router", "The TV", "The internet", "Each other's screens"]
      answer: 0
      feedback: [null, "The TV is one of the devices.", "The router joins the home to the internet too.", "Screens are output."]
      explain: "Every device joins the router, by cable or Wi-Fi, and the router passes data between them and out to the internet."
```

### Three ways to join

```worked
\text{Cable} :: Fastest and steadiest. The computer has to stay where the cable reaches.
\text{Wi-Fi} :: Radio waves to a router. You can move around, but it slows down further away and through walls.
\text{Mobile data} :: Radio waves to a phone tower. Works almost anywhere, but it's usually slower.
\text{The internet} :: Lots of networks (homes, schools, companies) joined together.
```

Now: why does the lab use cables?

### Find the mistake

### At home

## Vary: on the move

```step
stage: modify
insight: "Each task changes one thing about Wi-Fi (distance, walls), then tries mobile data, watching the speed in words."
try: { playground: board, starter: "link.yml#modify", height: 480 }
tasks:
  - check: { type: board, text: "Move the laptop further from the router: 30 metres or more. What happens to the speed?", when: "w = 2 and d >= 30", explain: "It slows down: radio waves get weaker the further they go." }
  - check: { type: board, text: "Now add two walls in the way.", when: "w = 2 and k >= 2", explain: "Slower again, and more pieces get lost: walls block radio waves." }
  - check: { type: board, text: "Switch to mobile data, like a phone on the bus.", when: "w = 3", explain: "It works far from any router, but it's slower than a cable." }
```

### Further away

### Walls

### Mobile data

## Practise: which way?

```step
stage: practise
insight: "Choosing a way to join for a situation, what the internet is, and a review of the parts."
tasks:
  - check:
      type: question
      q: "Your Wi-Fi is slow in your bedroom at the far end of the house. What would most likely help?"
      options: ["Move closer to the router, with fewer walls in the way", "Turn the screen brighter", "Delete some photos", "Type faster"]
      answer: 0
      feedback: [null, "The screen doesn't change the network.", "Storage space doesn't change the network.", "Typing speed isn't the network."]
      explain: "Distance and walls weaken Wi-Fi."
  - check:
      type: question
      q: "What is the internet?"
      options: ["Lots of networks joined together", "One giant computer", "The Wi-Fi in your house", "A website"]
      answer: 0
      feedback: [null, "It's millions of computers on many networks.", "That's your home network; it joins the internet through the router.", "Websites are on the internet."]
      explain: "Homes, schools and companies each have a network, and the internet joins them all."
  - check:
      type: question
      q: "Review: a network sends a photo to your laptop. Which part of the laptop keeps it after you turn the laptop off?"
      options: ["Storage", "Memory", "The screen", "The router"]
      answer: 0
      feedback: [null, "Memory empties when the power goes off.", "The screen only shows it.", "The router is part of the network, not the laptop."]
      explain: "Storage keeps things when the power is off."
```

### Slow Wi-Fi

### The internet

### Review: parts

## Make: plan the club's network

```step
stage: make
insight: "Choosing how to join each device for the club reverses the move: students start from how a device is used and pick the way to join it."
check:
  type: sort
  q: "The Coding Club is setting up. For each device, choose the best way to join it."
  options: ["Cable", "Wi-Fi", "Mobile data"]
  items:
    - ["A desktop computer that never leaves its desk", "Cable", "It never moves, so a cable gives the fastest, steadiest link."]
    - ["Laptops students carry around the room", "Wi-Fi", "They move around, and the router is close."]
    - ["The teacher's phone on the excursion bus", "Mobile data", "There's no router on the bus; a phone tower reaches it."]
    - ["The 3D printer in the corner, next to the router", "Cable", "Close and never moves: a short cable."]
    - ["A tablet passed around the group", "Wi-Fi", "It needs to move; Wi-Fi lets it."]
  explain: "Doesn't move and the router's close: cable. Moves around near a router: Wi-Fi. No router nearby: mobile data."
```

Then: draw your home network. Which devices use a cable, and which use Wi-Fi?
