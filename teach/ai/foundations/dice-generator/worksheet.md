---
title: "Build a text generator with dice"
subtitle: "AI Foundations · How AI generates text · Lesson 2"
---

# Build a text generator with dice

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Turn word frequencies into dice outcomes, then sample words without always picking the most common one.


:::teacher-note

**In one sentence:** Map six equally likely die faces to endings and distinguish probabilities from observed rolls.

**Students should be able to say:** I can turn word counts into a dice table (mat = 3 faces, chair = 2, roof = 1). I can explain why ten rolls don't have to match 3 : 2 : 1. I can explain why a generator that rolls can give different answers to the same start, and why a likely sentence isn't a true one.

**Width:** the unmarked parts are the floor every student does (Engage, Explore, Explain, Evaluate). Typical and Wider sections add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Engage


:::keep-together

**If three faces on a die mean 'mat', two mean 'chair' and one means 'roof', what happens when you roll?**

☐ You always get roof

☐ You could get any of the three words

☐ You always get mat

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** Any of the three words can occur. Mat is most likely, but no outcome is guaranteed.

:::


## Explore

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Explore

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Explain: sampling


:::keep-together

### Read the dice table

**What is the chance of getting 'chair' on one roll?**

☐ 1/6

☐ 2/6

☐ 3/6

☐ 5/6

:::


:::teacher-note

**Answer:** 2/6

:::


:::keep-together

### Explain an unexpected sample

**You and a friend each roll the board's die 10 times. Your friend gets roof 3 times. You get roof 0 times. What is true?**

☐ Both results can happen with the same die and table

☐ Your friend's die must be unfair

☐ Roof's chance went down for you

:::


:::teacher-note

**Answer:** Both results can happen with the same die and table

:::


:::typical

## Elaborate: change the model

Make a new lookup table and roll five times. Explain what changed: the die, the sampling procedure or the model's examples?

:::keep-together

**A new collection has 2 mat, 3 chair and 1 roof. Which assignment matches it?**

☐ 1–3 mat; 4–5 chair; 6 roof

☐ 1 mat; 2–3 chair; 4–6 roof

☐ 1–2 mat; 3–5 chair; 6 roof

:::


:::teacher-note

**Answer:** 1–2 mat; 3–5 chair; 6 roof

:::

:::


## Evaluate: explain an unexpected outcome

Write one sentence distinguishing **probability** from **what actually happened** in your rolls.

## Learning with AI: plausible is not the same as correct

A writing assistant produces “The cat sat on the roof.” The sentence is plausible, but that does **not** tell us whether a real cat sat there. Compare two prepared AI responses to a learner asking, “Is this sentence true?”

- **Response A:** “Yes. The sentence sounds natural, so it is true.”
- **Response B:** “I can judge whether the sentence sounds plausible, but I would need evidence to know whether it happened.”

Which response better distinguishes **generation** from **verification**? What evidence would you need to establish whether the event happened?

**Next:** let a computer repeat this same sampling procedure, and decide what understanding you must keep.

:::keep-together

**The generator writes 'The cat sat on the roof.' What would tell you whether a real cat sat on a roof?**

☐ The sentence sounding natural

☐ Someone who saw it, or a photo

☐ Rolling again and getting roof

:::


:::teacher-note

**Answer:** Someone who saw it, or a photo

:::


## Exit ticket

:::keep-together

**Can roof appear twice in a row without the model changing?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Yes. Each roll can select the roof face; two such rolls do not alter the mapping.

:::

