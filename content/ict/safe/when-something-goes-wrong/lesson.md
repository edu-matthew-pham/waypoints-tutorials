---
order: 7
unit: help
title: When something goes wrong
summary: "Everyone has something go wrong online sometimes: a mean message, a scary picture, a trick, or a mistake of their own. A plan helps: stop and don't reply, keep it (don't delete it), tell a trusted adult, then block and report. Telling early is how things get fixed, and you are not in trouble for asking for help, even if you made a mistake."
language: science
shape: 5e
explainDiagram:
  ref: diagrams.mmd#plan
  alt: "A flowchart of the plan. Something online upsets or worries you. Stop: don't reply. Keep it: don't delete it. Tell a trusted adult. Block and report, together. Get support and look after yourself. A side note: made a mistake yourself? Tell anyway, it can be fixed; it joins the plan at Tell a trusted adult."
  caption: "When something goes wrong"
hook: "Zara gets a nasty message from an account she doesn't know. Her first idea is to delete it and never tell anyone. What might happen if she does?"
---
Zara, Ollie and everything that happens to them are made up. Nobody will ask what has happened to you.

## Engage: delete and forget?

```step
stage: predict
insight: "Committing to a guess: deleting and staying quiet feels safest, but it leaves Zara alone with it and removes what an adult needs to help."
check:
  type: predict
  q: "Zara deletes the nasty message and tells nobody. What is most likely?"
  options: ["It may keep happening, and nobody can help because nobody knows", "It stops, because she deleted it", "The sender gets in trouble automatically"]
  actual: "It may keep happening. Deleting removes what an adult could use to help, and staying quiet means Zara deals with it alone."
```

## Explore: what would help?

```step
stage: run
insight: "Sorting first moves shows that the helpful ones keep things calm and bring in help."
check:
  type: sort
  q: "Zara got a nasty message. Does each move help, or make things harder?"
  options: ["Helps", "Makes it harder"]
  items:
    - ["Not replying", "Helps", "A reply can keep it going, and that may be what the sender wants."]
    - ["Taking a screenshot or noting the username, then telling her dad", "Helps", "An adult can help more when they can see what happened."]
    - ["Sending something nasty back", "Makes it harder", "It can make things worse, and it puts Zara in the wrong too."]
    - ["Deleting it and pretending it didn't happen", "Makes it harder", "Nobody can help, and the evidence is gone."]
    - ["Blocking the account and reporting it, with her dad", "Helps", "Blocking stops more messages; reporting tells the app."]
    - ["Talking to a friend and to her teacher about how she feels", "Helps", "Feeling upset is normal. Talking helps."]
```

Was your guess right? The moves that help keep things calm and **bring in help**.

## Explain: the plan

```step
stage: investigate
insight: "The plan as a diagram. The planted mistake is believing that telling gets you in trouble."
diagram:
  ref: diagrams.mmd#plan
  alt: "A flowchart of the plan. Something online upsets or worries you. Stop: don't reply. Keep it: don't delete it. Tell a trusted adult. Block and report, together. Get support and look after yourself. A side note: made a mistake yourself? Tell anyway, it can be fixed; it joins the plan at Tell a trusted adult."
  caption: "When something goes wrong"
  role: explain
tasks:
  - check:
      type: bug
      code: "working.txt#ollie"
      text: "Ollie made a mistake. Click the line where his thinking first goes wrong."
      answer: 3
      fault: logic
      misconception: tell-means-trouble
      explain: "Line 3: Ollie thinks telling will get him in trouble, so he hides it. Telling early is how things get fixed. Adults would much rather know, and an account can often be got back if someone acts quickly."
  - check:
      type: question
      q: "Why does the plan say keep it, not delete it?"
      options: ["So a trusted adult can see what happened and help report it", "So you can read it again later", "So you can send it to friends", "Because deleting is against the rules"]
      answer: 0
      feedback: [null, "Reading it again usually makes you feel worse. You can ask an adult to keep it for you.", "Sending it on spreads it.", "It's not a rule. It's about getting help."]
      explain: "A screenshot or the username helps an adult help you, and helps an app act on a report."
```

When something online upsets or worries you, you don't have to work it out alone:

1. **Stop.** Don't reply.
2. **Keep it.** Don't delete it. A screenshot or the username helps an adult help you. (If it's a picture that shouldn't be shared, such as someone without clothes on, don't save it or send it on: just tell an adult straight away.)
3. **Tell a trusted adult.** A parent or carer, a teacher, the school counsellor.
4. **Block and report,** with the adult. Apps have a report button; the adult knows other places to report too.
5. **Look after yourself.** Feeling upset is normal. Do something you enjoy, and keep talking.

**Made a mistake yourself?** Tell anyway. Everyone makes mistakes online, and most can be fixed, more easily if you tell early. You can also call **Kids Helpline on 1800 55 1800**, free, any time.

```code diagrams.mmd#plan
flowchart TD
  A[Something upsets or worries you] --> B[Stop: don't reply]
  B --> C[Keep it: don't delete]
  C --> D[Tell a trusted adult]
  D --> E[Block and report, together]
  E --> F[Get support, look after yourself]
  M[Made a mistake? Tell anyway] --> D
  class D new
```

### Ollie's mistake

### Keep it

## Elaborate: which step next?

```step
stage: modify
tier: typical
insight: "Years 7 and 8: the same plan in harder situations, choosing the next step."
check:
  type: match
  q: "Match each situation to the step that comes next in the plan."
  pairs:
    - ["Someone keeps messaging Kai after he asked them to stop. He's already told his mum.", "Block and report, together"]
    - ["Mei sees a fake account using her name and photo. She wants to delete everything she has ever posted.", "Keep it: don't delete"]
    - ["Ari shared a friend's private message by mistake and feels awful.", "Tell a trusted adult"]
    - ["A message makes Priya feel scared. Her first thought is to write back angrily.", "Stop: don't reply"]
```

## Evaluate: your trusted adults

```step
stage: info
tasks:
  - check:
      type: question
      q: "Zara's trusted adult isn't around. What could she do?"
      options: ["Tell another trusted adult, such as a teacher or the school counsellor, or call Kids Helpline", "Wait until she forgets about it", "Reply to the sender to sort it out herself", "Post about it so everyone knows"]
      answer: 0
      feedback: [null, "It may keep happening, and she's alone with it.", "Replying can keep it going.", "That makes the audience bigger."]
      explain: "Most people have more than one trusted adult, and Kids Helpline (1800 55 1800) is free, any time."
  - check: { type: reflect, text: "I know the plan: stop, keep it, tell a trusted adult, block and report, look after myself." }
```

### When nobody is around

### Look back

**A private think** (just for you): who are your trusted adults? Is there one at home and one at school?
