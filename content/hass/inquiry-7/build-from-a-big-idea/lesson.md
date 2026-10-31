---
order: 2
unit: asking
title: Build a question from a big idea
node: [AC9HE7S01 n2, AC9HC7S01 n2, AC9HG7S01 n2, AC9HH7S01 n2]
summary: "Each subject has a short list of big ideas that make good questions: Economics has scarcity and opportunity cost, Civics has who decides and the rules, Geography has place, connection and change, History has cause, change and what mattered. A big idea is a lens for investigating a topic. The question asks something about it that evidence can answer."
language: science
shape: primer
hook: "Nib's class is told to write a question using a big idea. Nib writes one word: 'Scarcity.' Is that a question?"
assumes: [AC9HS6S01 n2]
---
Every subject has a few **big ideas**: words that show up again and again because they help you ask good questions. A big idea is a **concept** that helps you look at a topic in a particular way. The mirror is a topic; change and significance are different lenses for investigating it. A concept word on its own is not yet a question.

The cases are the same made-up ones as in the last lesson: the Parkside tuckshop, Mill Road, the Kilby River and the Hartley Museum's bronze mirror.

## Think first

```step
stage: predict
insight: "Committing to a choice shows the move: a question takes the big idea and asks something about the case."
check:
  type: predict
  q: "Which of these is a question that uses the big idea of opportunity cost?"
  options: ["What did Parkside's tuckshop miss out on with its new equipment?", "Opportunity cost at the Parkside tuckshop", "How much is the tuckshop's budget this year?", "Is the tuckshop a good use of the school's money?"]
  actual: "The question about what the tuckshop missed out on. It names the case and asks what was given up, and you would need evidence to find out. 'Opportunity cost at the Parkside tuckshop' names the idea and the case but asks nothing. The budget is a look-up. 'A good use of money' needs criteria for good."
```

## Try: match the question to its big idea

```step
stage: run
insight: "Matching shows the same move in four subjects: a case, a big idea and a question that links them."
check:
  type: match
  q: "Which big idea does each question use?"
  pairs:
    - ["When the Parkside tuckshop could buy only one new machine, what did it give up, and why that one?", "Opportunity cost (Economics)"]
    - ["Which level of government looks after Mill Road, and why that one?", "Who decides (Civics)"]
    - ["How has the Kilby River's flow changed over twenty years, and what changed with it?", "Change (Geography)"]
    - ["Why might the bronze mirror have mattered to the person who owned it?", "Significance (History)"]
```

Was your guess right? Each question has the same shape: a case, a big idea, and something to find out about the case.

Here are the big ideas each subject keeps coming back to:

| | Big ideas to build questions from |
|---|---|
| **Economics** | scarcity, opportunity cost, income, markets, goods and services |
| **Civics** | power, democracy, rules and laws, rights, participation, government |
| **Geography** | place, space, environment, interconnection, sustainability, scale, change |
| **History** | cause, change and continuity, perspective, significance |

## The idea: a question, not a topic

```step
stage: investigate
insight: "Naming the move, then catching Nib using a topic word as a question, makes the difference between topic and question usable."
tasks:
  - check:
      type: question
      q: "Which one turns the big idea 'cause' into a question about the bronze mirror?"
      options: ["What might have caused the mirror's surface to change?", "Cause and the bronze mirror", "Is the bronze mirror more beautiful than others?", "Where in the museum is the mirror kept now?"]
      answer: 0
      feedback: [null, "That names the idea and the case, but it doesn't ask anything.", "That asks for a view and needs criteria. It doesn't use cause.", "That is a look-up: the museum's label answers it."]
      explain: "It names the case, asks why and how, and needs evidence to answer."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is building a question from the big idea of scarcity. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: topic-word-is-question
      explain: "Line 3: Nib writes the big idea and calls it the question. 'Scarcity' is the topic. A question asks something about the case, such as: what does the tuckshop do when it cannot stock everything?"
    hint:
      - "Which words name the case, and which name the concept?"
      - "What is Nib asking someone to find out?"
    smaller:
      check: { type: question, q: "Is the single word 'Scarcity' a question?", options: ["No, it names a concept", "Yes, it is investigable", "Yes, because it is a big idea", "Yes, because it is short"], answer: 0, explain: "A question asks something. A single word names a concept without asking anything about a case." }
  - check:
      type: question
      q: "Which question uses the Geography big idea of connection?"
      options: ["What happens in Wattle Flat when the Kilby River runs low?", "Where is Wattle Flat on a map?", "Is the Kilby River the prettiest river?", "Connection between Wattle Flat and the river"]
      answer: 0
      feedback: [null, "That is a look-up. A map answers it in one go.", "That asks for taste and needs criteria before evidence could help.", "That names the idea and the places, but it doesn't ask anything."]
      explain: "It links the town and the river and asks what changes."
```

### Make the idea a question

### Find Nib's mistake

### Connection

## Vary: pick the better question

```step
stage: modify
insight: "Comparing a weak and a stronger question for the same big idea shows what the stronger one adds: a case and something to find out."
tasks:
  - check:
      type: question
      q: "Civics: which is the better question about who decides?"
      options: ["Who decides whether Mill Road closes, and how?", "Who is in charge of the roads?"]
      answer: 0
      feedback: [null, "It names no case: which roads, and which decision? You could not tell what to look for."]
      explain: "The better one names the case and asks how."
  - check:
      type: question
      q: "History: which is the better question using change?"
      options: ["How did Han bronze mirrors change over time?", "Did things change in the past?"]
      answer: 0
      feedback: [null, "It has no case and no evidence to look for."]
      explain: "The better one names the thing, so you know what evidence to look for."
```

### Civics

### History

## Check: before you move on

```step
stage: practise
insight: "Matching big ideas to questions on a new case before moving on."
check:
  type: sort
  q: "Which concept gives each question its focus?"
  options: ["Interconnection (Geography)", "Change (Geography)", "Cause (History)", "Significance (History)"]
  items:
    - ["How might upstream water storage affect Wattle Flat downstream?", "Interconnection (Geography)", "It investigates a relationship between places."]
    - ["How did water use in Wattle Flat change during the dry year?", "Change (Geography)", "It compares water use across time."]
    - ["What might have caused the museum mirror's surface to change?", "Cause (History)", "It asks for reasons for a change, using object records."]
    - ["Why might this mirror have mattered to its owner?", "Significance (History)", "It asks what importance the object had; evidence may be limited."]
```

## In each subject

The move is the same: take a big idea, name a case, ask something about it. The big ideas are what differ.

| | Ask about | A starter that works |
|---|---|---|
| **Economics** | what is given up, who gets what | "When [group] couldn't have everything, what did they give up, and why?" |
| **Civics** | who decides, and by what rules | "Who decides [this], and how?" |
| **Geography** | places, links and changes | "How has [this place] changed, and what changed with it?" |
| **History** | why, what changed, what mattered | "Why did [this] happen, and what changed?" |

History's and Geography's own lessons come back to how to use their ideas well.

Next: Right-sized, and what would answer it.

```step
stage: info
check: { type: reflect, text: "I can name a big idea from my subject and use it to build a question about a case." }
```

## Make: your own

```step
stage: make
insight: "Writing two questions from your own subject's big ideas makes the move your own."
check: { type: reflect, text: "In my own book I wrote two investigable questions for a topic my class is studying, each built from a different big idea, and named the idea and evidence each would need. For Geography, both questions target the same phenomenon; for History, they use different concept frames on the same topic. A partner checked their focus and whether evidence could answer them." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: a second case

```step
stage: make
tier: typical
insight: "The same move in another subject's case."
check:
  type: question
  q: "Which question uses scarcity for the Wattle Flat water supply?"
  options: ["When water runs low, who in Wattle Flat gets how much?", "Water shortages in Wattle Flat in a dry year", "Where is the dam that supplies Wattle Flat?", "Is water important to people in Wattle Flat?"]
  answer: 0
  feedback: [null, "That is a topic. It doesn't ask anything yet.", "That is a look-up. A map answers it.", "Almost everyone would say yes. It needs criteria and a focus before evidence helps."]
  explain: "It asks about the choice when there is not enough."
```

## Wider: one case, two big ideas

```step
stage: make
tier: wider
insight: "One case can be asked about with different big ideas, which gives different investigations."
check: { type: reflect, text: "I chose one case (for example Mill Road) and wrote two investigable questions from two different subjects' big ideas. I said how the two investigations would differ." }
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
