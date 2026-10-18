---
title: Does AI help us learn?
summary: Compare the same task done for different goals, and start an inquiry that may not have one final answer.
language: science
shape: 5e
unit: what-is-learning
order: 1
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8241
  url: http://127.0.0.1:8241/index.html
  readySelector: "#gpanel"
  layout: full
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "One tool, different purposes"
  say: "Before judging AI, ask what the learner wants to achieve and what the result shows."
  clip:
    - caption: { text: "A finished product can be valuable without proving that a new skill was learned." }
    - wait: 1100
    - caption: { text: "Learning goals, available tools and evidence all affect our judgement." }
    - wait: 1100
    - caption: { text: "The question stays open. Our reasons can become more precise." }
    - wait: 1100
---
# Does AI help us learn?

In AI Foundations you practised three habits: ask for the right kind of help, check what AI tells you, and decide what to hand over. But do those habits help you **learn**? That is a harder question.

AI can explain an idea, make a game or fix a draft in seconds. Does that mean it helps someone learn? This course looks at the question. It does not hand you an answer.

**Inquiry record (optional):** keep your answers in a notebook or a document your teacher chooses. You will come back to them. If you don't keep one, the reflections in each lesson are enough.

## Engage: make a first claim

```step
stage: predict
check:
  type: predict
  q: "A student uses AI to make a playable game in ten minutes. What do we know?"
  options: ["They learned how to program a game", "They have a game, but we don't know yet what they learned", "They learned nothing, because AI did the work"]
  actual: "We know they have a playable game. That does not tell us what they learned. It does not prove they learned nothing, either."
```

Two students hand in equally good games. One wrote the code in a beginner game maker. The other told an AI what to build. Did they learn the same things? Does it matter what each one was trying to do?

**Inquiry record:** answer *Does AI help us learn?* in two or three sentences. Add one reason, one thing you are unsure about, and how sure you are (low, medium or high). Keep this first answer.

## Explore: same task, two goals

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 690 }
check: { type: board, text: "Try both goals for the same task, and one other situation.", when: "t >= 3 and p >= 1" }
```

This is the board from AI Foundations › [Decide what to hand over](../../foundations/delegating-thinking/). There you used it to choose; here it's the **thing you investigate**: does its advice really depend on the goal? The board shows the **same task with two different goals**. These are prepared situations, not a live AI.

1. Pick **Make a maze game (goal: learn to code)**. Choose an approach and press **Explore consequences**.
2. Now pick **Make a maze game (goal: test an idea with players)**. Choose the same approach. Does the feedback change?
3. Try one more situation.

You can disagree with the board. Its feedback is a starting point. Say why you disagree.

## Explain: the goal changes the judgement

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Ari's goal was to learn to code movement. He asked AI to write the whole maze game. What did he skip?"
      options: ["Writing the movement code, the part he wanted to learn", "Nothing: the game works, so he met his goal", "Testing whether players like the game"]
      answer: 0
      feedback: [null, "The game works, but his goal was to learn to code it. Did he practise that?", "Players were not part of Ari's goal."]
  - check:
      type: question
      q: "Bea's goal was to find out whether players like a time limit. She used a ready-made template so the maze took five minutes to build. Was that a good choice for her goal?"
      options: ["Yes: her goal was about players, so building quickly left time to test", "No: she should have written every line herself", "No: using any shortcut means she learned nothing"]
      answer: 0
      feedback: [null, "That would teach coding, but coding was not her goal.", "She can still learn a lot from watching players."]
  - check: { type: reflect, text: "I can explain why the same help can suit one goal and not another." }
```

Getting a task done is one thing. Being able to do it yourself is another. Help from a person, a tool or an AI can get the task done, and that can be valuable. But it doesn't tell us everything about what you learned.

Ari and Bea both made a maze game with help. Ari wanted to learn to code. Bea wanted to find out what players enjoy.

### Ari's game

Which part of the task did Ari need to do himself?

### Bea's game

Which part of the task did Bea need to do herself?

### Put it in words

The useful question is not "AI or no help?". It is **"What is the goal, and which help suits it?"** A non-AI tool, like a game template, might already do the job.

## Elaborate: two claims

```step
stage: make
tier: typical
check: { type: reflect, text: "I gave the best reason for a claim I don't agree with, and added a question." }
```

Discuss these two claims with a partner.

- **Claim A:** "AI helps people learn, because it lets them do things they couldn't do alone."
- **Claim B:** "Doing a task with AI doesn't show you learned how to do it."

First give the best reason for each claim. Then ask:

- Can both be true?
- Do they mean the same thing by *learn*?
- Would your answer change if the task were learning fractions, not making a game?

**Inquiry record:** add a reason against your first answer. You can keep your answer, change it, or add "it depends on…". Write one question to take into the next lesson.

## Evaluate: what was the goal?

```step
stage: info
check:
  type: question
  q: "Sam says: 'AI helped me finish my science explanation, so now I understand the science.' What should you ask first?"
  options: ["What was Sam trying to learn, and can Sam explain it without the AI's words?", "Which AI did Sam use?", "How long was the explanation?"]
  answer: 0
  feedback: [null, "Knowing the tool doesn't tell us what Sam can do.", "A long explanation can still be someone else's thinking."]
```

Before you judge any use of AI, name the goal. Then ask what the result shows about that goal.

**Next lesson:** if someone does better with help, what would show they really learned?
