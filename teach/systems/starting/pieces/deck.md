---
marp: true
theme: default
html: true
---

# Messages in pieces

Starting out · Joining up

<!-- Speaker note: Students send a message cut into numbered pieces through a network of routers, see pieces take different paths and arrive in any order, rebuild it by number, make the pieces smaller and break links to see the pieces go round (AC9TDI6K02 node 2). About 35 minutes (Predict and Try 6 min · Worked example 9 min · Vary 7 min · Practise and Make 13 min). -->

---

## Today

- I can explain why a message is cut into pieces.
- I can say how the pieces get back in order.
- I can explain how a message still arrives when a link breaks.

<!-- Speaker note: Before class: Do the boards yourself first. Nothing is lost on these boards (drop: 0): losing a piece and asking for it again (TCP) is the Year 7–8 Packets lesson. The one idea: data is cut into numbered pieces (packets) that travel through routers on their own, and the numbers rebuild the message. Unplugged: a sentence on numbered strips, passed by different routes round the room. Year 7–8 catch-up: Networks › Packets (8K02 n2) starts with the pieces unnumbered and lets students invent the fix; a student who can explain this lesson's numbers may find that lesson's Explore quick. Teacher: Worked example: act out arrival 2, 1, 4, 3 with four students. Teacher: Vary: before breaking a link, ask whether the message will still arrive. -->

---

## Why it matters

> When you send a message, it doesn't travel in one piece. It's cut up, and each piece finds its own way.

<!-- Speaker note: Before a message leaves your computer, it's cut into small **pieces**. Each piece gets a number and travels on its own, through several devices called **routers**. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Why not send a message in one piece? Wouldn't that be simpler?**

- What if a road on the way is blocked?
- What if everyone's huge messages were going at once?

<!-- Speaker note: Small pieces share the network fairly and each can go round a broken link. The cost is that they can arrive out of order, which the numbers fix. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**Your message is cut into 4 pieces. They take different paths through the routers, and some paths are busier than others. Can the pieces arrive in the wrong order?**

- No: they travel together
- Yes, and the message comes out jumbled
- No: pieces always arrive in order
- Yes, but their numbers put them back in order

<!-- Speaker note: What happens: Yes. A piece on a busy path can arrive after one sent later. Each piece has a number, so the computer at the end puts them back in order. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: students who chose 'always in order' picture one pipe; the Try answers them. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Pass the pieces <span style="font-size:.6em;color:#64748b">(6 min)</span>

Cut SEE YOU AT LUNCH into four numbered strips. Send them from the front to the back of the room by four different routes (different rows of students).

<!-- Speaker note: Have one route go the long way round. The student at the back lays them out in arrival order first, then in number order. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fstarting%2Fpieces%2Fstep-2&code=widget%3A+network%0Amode%3A+packets%0Amessage%3A+SEE+YOU+AT+LUNCH%0Asize%3A+4%0Adrop%3A+0%0Atcp%3A+off%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/starting/pieces/?full=step-2#step-2)

<!-- Speaker note: Was your guess right? Send it again and watch the order they arrive in. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Yes. A piece on a busy path can arrive after one sent later. Each piece has a number, so the computer at the end puts them back in order.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Four pieces

Now: how does the computer know the order?

$$\text{SEE\ YOU\ AT\ LUNCH}$$

1) $\text{1 SEE·\quad 2 YOU·\quad 3 AT·L\quad 4 UNCH}$ — Cut into pieces of 4, each with a number (· is a space).
2) $\text{different paths}$ — Each piece goes through routers on its own. A busy router makes a piece late.
3) $\text{arrive: 2, 1, 4, 3}$ — They can arrive in any order.
4) $\text{rebuild: 1, 2, 3, 4}$ — The numbers put them back: SEE YOU AT LUNCH.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write SEEYOUATLUNCH and say "The message: 16 characters, spaces too." Line 1: write 1 SEE· 2 YOU· 3 AT·L 4 UNCH and say "Cut into pieces of 4, each with a number (· is a space)." Line 2: write different paths and say "Each piece goes through routers on its own. A busy router makes a piece late." Line 3: write arrive: 2, 1, 4, 3 and say "They can arrive in any order." Line 4: write rebuild: 1, 2, 3, 4 and say "The numbers put them back: SEE YOU AT LUNCH." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 24px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Four pieces

**How does the computer at the end know which piece goes first?**

- Each piece has a number
- It guesses from the letters
- The first one to arrive goes first
- The router tells it

* Answer: Each piece has a number

<!-- Speaker note: Piece 1, piece 2, piece 3, piece 4: the numbers say the order. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam sends Ana a message. Click the line where it first goes wrong.**

```
 1  Sam sends Ana the message SEE YOU AT LUNCH.
 2  The whole message travels as one piece.
 3  It goes down one wire, straight to Ana's computer.
 4  So it always arrives in the right order.
```

* Answer: line 2

<!-- Speaker note: Line 2: the message is cut into numbered pieces, and they can take different paths through the routers. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## How many pieces?

**SEE YOU AT LUNCH is 16 characters, including spaces. Cut into pieces of 4 characters, how many pieces is that?**

* Answer: 4

<!-- Speaker note: 16 ÷ 4 = 4 pieces. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Back in order

**Pieces arrive as 3, 1, 4, 2. How does the computer read the message?**

- It puts them in order by their numbers
- It reads them as they arrived
- It asks the router
- It can't

* Answer: It puts them in order by their numbers

<!-- Speaker note: The numbers say the order: 1, 2, 3, 4. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: smaller pieces, broken links



- **Smaller pieces:** 
- **A broken link:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/starting/pieces/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task changes one thing: smaller pieces make more of them; a broken link sends pieces another way. For students who need more support: A strip: cut → number → travel (any path) → arrive (any order) → rebuild by number. For early finishers: What should happen if a piece never arrives? (Year 7–8 Packets has the answer.) The hard part, on purpose: Picturing one pipe from sender to receiver. Have students trace two pieces' paths with a finger. When students get stuck: A student says the message travels in one piece (Sam's mistake). Ask: Press Send. How many dots set off? Fix: It's cut into pieces; each goes its own way. / A student thinks the routers put the pieces in order. Ask: Watch the order they arrive at the end. Who sorts them? Fix: The computer at the end, using the numbers. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## A broken link <span style="font-size:.6em;color:#64748b">(3 min)</span>

One row of students 'breaks' (hands in laps). Send the strips again. Do they still arrive?

<!-- Speaker note: They go round. The internet has many paths for this reason. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Why pieces

**Why does a network cut a big photo into small pieces?**

- Small pieces can share the paths with everyone else's, and go round a broken link
- So nobody can see it
- To make the photo blurry
- Small pieces are smaller files on your computer

* Answer: Small pieces can share the paths with everyone else's, and go round a broken link

<!-- Speaker note: Lots of small pieces share the network fairly, and each can find its own way. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Routers

**What does a router do with a piece?**

- Puts the pieces in order
- Reads the message and checks the spelling
- Passes it on, towards where it's going
- Keeps it

* Answer: Passes it on, towards where it's going

<!-- Speaker note: Routers pass pieces along, one step at a time. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: walls

**Review: a laptop is in the next room from the router, behind two walls. What happens to its Wi-Fi?**

- It's faster
- It stops being a network
- It's slower
- Nothing

* Answer: It's slower

<!-- Speaker note: Walls and distance slow Wi-Fi down. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: get it through

Then: cut a sentence into numbered strips and pass them round the class by different routes. Can the last person rebuild it?

[Open this step](https://tutorials.learningwaypoints.com/systems/starting/pieces/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Getting a message through a damaged network reverses the move: students break links on purpose and check the pieces still find a way. Hints, in order: Break one link at a time, and send after each. / Leave at least one path from the start to the end. / If nothing arrives, mend a link and try again. -->

<!-- Speaker note: Teacher: ask which links you can't break without cutting the end off. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A message arrives as pieces 3, 1, 2. How does the computer read it correctly?**

* It puts the pieces in order by their numbers: 1, 2, 3.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: End of Starting out. Next: Year 7–8 Networks, or any other course in How computers work. -->
