---
title: "How do models combine clues?"
subtitle: "AI Foundations · How AI learns · Lesson 6"
---

# How do models combine clues?

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Explore how colour and shape influence an inspectable weighted decision.


:::teacher-note

**In one sentence:** How do models combine clues? Students predict, test and explain a transparent fruit classifier.

**Students should be able to say:** I can explain how changing a weight changes which clue decides the prediction. I can work out the unit's prediction from its weights before testing it. I can explain why a decision made from weights can still be wrong about real fruit.

**Width:** the unmarked parts are the floor every student does (Engage, Explore, Explain, Evaluate). Typical and Wider sections add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Engage


:::keep-together

**A fruit is yellow but round. Is colour alone enough to identify it?**

☐ Not necessarily: several clues may matter

☐ Always

☐ Yes, yellow always means banana

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** Several clues may help, but cannot guarantee a correct label.

:::


## Explore

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Explain: which clues matter?


:::keep-together

### Clues

**What happens when you increase the colour weight?**

☐ The unit automatically learns from new photos

☐ Colour influences the decision more

☐ The fruit changes colour

:::


:::teacher-note

**Answer:** Colour influences the decision more

:::


:::keep-together

### Weights

**Set the colour weight to 0 and the shape weight to 2. What does the unit predict for a yellow, round fruit?**

☐ unsure

☐ apple

☐ banana

:::


:::teacher-note

**Answer:** apple

:::


:::typical

## Elaborate: change the decision

Find two settings that produce different predictions for the same yellow, round fruit. Explain what changed and what did not change.

**Wider investigation:** Could two different fruits share both clues? Suggest a third clue. Why would that still not guarantee a correct answer?

:::


## Evaluate: check the output

Without the board, explain how changing the importance of a clue can affect a prediction.

## Learning with AI: hidden weights

Here you could see both weights and change them. A real AI weighs millions of clues, and nobody can read all its weights. A clue that is weighted too heavily can tilt its answer the wrong way, just as colour did here. So treat its answer as a prediction to check, not a fact.

## Exit ticket

:::keep-together

**Colour weight 2, shape weight 0. What does the unit predict for a green, long fruit, and why?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Apple: only colour counts, and green pushes the score below zero, even though a long fruit is probably a banana.

:::

