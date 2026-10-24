---
order: 8
unit: networks
node: AC9TDI6K02 n2
title: Messages in pieces
summary: "A message doesn't travel in one piece. It's cut into small numbered pieces, and each piece travels through several devices (routers) on the way. Pieces can take different paths and arrive in a different order, so the computer at the end uses the numbers to put them back together."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "When you send a message, it doesn't travel in one piece. It's cut up, and each piece finds its own way."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8555
  url: http://127.0.0.1:8555/index.html
  readySelector: "svg"
  layout: full
explainPicture: { ref: pieces.yml#explain-pic, caption: "SEE YOU AT LUNCH cut into numbered pieces of four characters, about to travel through the routers to the computer at the end." }
---
Before a message leaves your computer, it's cut into small **pieces**. Each piece gets a number and travels on its own, through several devices called **routers**.

## Predict: in order?

```step
stage: predict
insight: "Committing to whether pieces can arrive out of order tests the new move: they take different paths, so the numbers matter."
check:
  type: predict
  q: "Your message is cut into 4 pieces. They take different paths through the routers, and some paths are busier than others. Can the pieces arrive in the wrong order?"
  options: ["Yes, but their numbers put them back in order", "No: pieces always arrive in order", "Yes, and the message comes out jumbled", "No: they travel together"]
  actual: "Yes. A piece on a busy path can arrive after one sent later. Each piece has a number, so the computer at the end puts them back in order."
```

## Try: send it

```step
stage: run
insight: "Sending the message and watching the pieces settles the prediction: different paths, arrival in any order, a whole message at the end."
try: { playground: board, starter: "pieces.yml#run", height: 520 }
check: { type: board, text: "Press Send and watch the pieces. Do they all take the same path? Does the whole message arrive?", when: "f >= 1 and k = 1", explain: "The pieces split up and some took longer, but the numbers let the computer at the end rebuild SEE YOU AT LUNCH." }
```

Was your guess right? Send it again and watch the order they arrive in.

## Worked example: cut, send, rebuild

```step
stage: investigate
insight: "Following four pieces from cutting to rebuilding models the move. Sam thinks a message travels whole, the mistake planted after the method."
tasks:
  - check:
      type: question
      q: "How does the computer at the end know which piece goes first?"
      options: ["Each piece has a number", "The first one to arrive goes first", "The router tells it", "It guesses from the letters"]
      answer: 0
      feedback: [null, "Pieces can arrive in any order.", "Routers only pass pieces on.", "It never needs to guess."]
      explain: "Piece 1, piece 2, piece 3, piece 4: the numbers say the order."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam sends Ana a message. Click the line where it first goes wrong."
      answer: 2
      fault: logic
      misconception: message-one-piece
      explain: "Line 2: the message is cut into numbered pieces, and they can take different paths through the routers."
  - check:
      type: number
      q: "SEE YOU AT LUNCH is 16 characters, including spaces. Cut into pieces of 4 characters, how many pieces is that?"
      answer: 4
      explain: "16 ÷ 4 = 4 pieces."
```

### Four pieces

```worked
\text{SEE\ YOU\ AT\ LUNCH} :: The message: 16 characters, spaces too.
\text{1 SEE·\quad 2 YOU·\quad 3 AT·L\quad 4 UNCH} :: Cut into pieces of 4, each with a number (· is a space).
\text{different paths} :: Each piece goes through routers on its own. A busy router makes a piece late.
\text{arrive: 2, 1, 4, 3} :: They can arrive in any order.
\text{rebuild: 1, 2, 3, 4} :: The numbers put them back: SEE YOU AT LUNCH.
```

Now: how does the computer know the order?

### Find the mistake

### How many pieces?

## Vary: smaller pieces, broken links

```step
stage: modify
insight: "Each task changes one thing: smaller pieces make more of them; a broken link sends pieces another way."
try: { playground: board, starter: "pieces.yml#modify", height: 560 }
tasks:
  - check: { type: board, text: "Make the pieces 2 characters long and send. How many pieces now?", when: "n = 8 and f >= 1", explain: "16 characters in pieces of 2: 8 pieces." }
  - check: { type: board, text: "Click a link between two routers to break it, then send. Does the message still get there?", when: "x >= 1 and k = 1", explain: "Yes: the pieces find another way round. That's why the internet has many paths." }
```

### Smaller pieces

### A broken link

## Practise: pieces

```step
stage: practise
insight: "Why messages are cut up, what routers do, and a review of joining by Wi-Fi."
tasks:
  - check:
      type: question
      q: "Why does a network cut a big photo into small pieces?"
      options: ["Small pieces can share the paths with everyone else's, and go round a broken link", "Small pieces are smaller files on your computer", "To make the photo blurry", "So nobody can see it"]
      answer: 0
      feedback: [null, "The photo on your computer stays whole.", "The photo comes out exactly the same.", "Cutting it up doesn't hide it."]
      explain: "Lots of small pieces share the network fairly, and each can find its own way."
  - check:
      type: question
      q: "What does a router do with a piece?"
      options: ["Passes it on, towards where it's going", "Reads the message and checks the spelling", "Keeps it", "Puts the pieces in order"]
      answer: 0
      feedback: [null, "Routers don't change the message.", "It only passes pieces on.", "That happens at the computer at the end."]
      explain: "Routers pass pieces along, one step at a time."
  - check:
      type: question
      q: "Review: a laptop is in the next room from the router, behind two walls. What happens to its Wi-Fi?"
      options: ["It's slower", "It's faster", "It stops being a network", "Nothing"]
      answer: 0
      feedback: [null, "Walls block radio waves.", "It's still joined, just slower.", "Walls make a difference."]
      explain: "Walls and distance slow Wi-Fi down."
```

### Why pieces

### Routers

### Review: walls

## Make: get it through

```step
stage: make
insight: "Getting a message through a damaged network reverses the move: students break links on purpose and check the pieces still find a way."
try: { playground: board, starter: "pieces.yml#make", height: 520 }
hint: ["Break one link at a time, and send after each.", "Leave at least one path from the start to the end.", "If nothing arrives, mend a link and try again."]
check: { type: board, text: "Roadworks have cut some cables. Break two links, send, and make sure the whole message still arrives.", when: "x >= 2 and k = 1", explain: "With two links broken there's still a path, so every piece gets through and the numbers rebuild the message." }
```

Then: cut a sentence into numbered strips and pass them round the class by different routes. Can the last person rebuild it?
