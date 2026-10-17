---
title: "How does a machine learn?"
subtitle: "AI Foundations · How AI learns · Lesson 1"
---

# How does a machine learn?

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Teach a simple fruit sorter using labelled examples, then test unfamiliar fruit.


:::teacher-note

**In one sentence:** Students teach a fruit sorter with labelled examples, test fruit it has never seen, and add an example to change what it predicts.

**Students should be able to say:** I can explain what a label is and how labelled examples shape a model's predictions. I can test a model on a case it was not shown, and say what one test does and doesn't prove. I can change a model's examples and explain why its prediction changed.

**Width:** the unmarked parts are the floor every student does (Engage, Explore, Explain, Evaluate). Typical and Wider sections add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Engage


:::keep-together

**A sorter has only seen yellow, long bananas. Can it reliably recognise every banana?**

☐ It will always choose the right label

☐ Not necessarily: unfamiliar bananas may look different

☐ Yes, it has learned what every banana looks like

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** Not necessarily. The examples shape the patterns it uses, and real bananas vary.

:::


## Explore

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Explain: what did the model use?


:::keep-together

### Identify the evidence

**On the board, one training example reads: yellow | round | apple. Which part is the label?**

☐ yellow

☐ round

☐ apple

:::


:::teacher-note

**Answer:** apple

:::


:::keep-together

### Test the claim

**No training example is green and long. You test a green, long fruit and the sorter says banana. What does that show?**

☐ Green, long fruits are always bananas

☐ It can sort at least one fruit it was never shown

☐ It will be right about every fruit

:::


:::teacher-note

**Answer:** It can sort at least one fruit it was never shown

:::


:::typical

## Elaborate: change and test

Add a correctly labelled example of a yellow, round banana. Test the same clues before and after adding it. Explain what changed.

**Wider investigation:** Try a case where the same two clues could describe different real fruits. What additional information might help? Explain why a better dataset may help without guaranteeing a correct answer.

:::


## Evaluate: judge a new prediction

Without using the model, write: **One thing I understand about how this model works is … One thing I would check before trusting its output is …**

## Learning with AI: you can't see its examples

On the board you could see every example. A real AI assistant learned from far more examples than you could ever read, and you can't see them. So when it gives you a confident answer, ask: *what might it have learned from?* Better examples often help a model, but they can't guarantee a good answer.

## Exit ticket

:::keep-together

**Why can adding one example change a sorter's prediction?**

{{lines-3}}

:::


:::teacher-note

**Answer:** The sorter copies its nearest examples, so a new nearby example can change which label wins.

:::

