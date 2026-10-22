---
title: "Can you predict the next word?"
subtitle: "AI Foundations · How AI generates text · Lesson 1"
---

# Can you predict the next word?

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** When you type a message or a search, the computer often suggests the next word. Is it guessing what you mean, or using patterns from examples?


:::teacher-note

**In one sentence:** Count example endings and distinguish a frequent next word from a certain one.

**Students should be able to say:** I can count which endings follow a phrase in a set of examples and say which is most common. I can explain why the most common ending is likely but not certain. I can check a suggested next word against what I actually mean.

**Width:** the unmarked parts are the floor every student does (Engage, Explore, Explain, Evaluate). Typical and Wider sections add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Engage

Write down one ending of your own **before looking at any examples**. Why did you choose it? Keep your answer to revisit later.

:::keep-together

**Which word must come next after 'The cat sat on the'?**

☐ roof

☐ There is no single word that must come next

☐ mat

☐ chair

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** There is no single word that must come next. Several endings are possible, even if some are more familiar.

:::


## Explore

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Explain: patterns are not rules


:::keep-together

### Find the most frequent ending

**Which ending appears most often in the original six examples?**

☐ chair

☐ mat

☐ All appear equally often

☐ roof

:::


:::teacher-note

**Answer:** mat

:::


:::keep-together

### Frequent does not mean certain

**On the board, roof is 1 of the 6 examples. If a generator picks endings in proportion to the counts, how often would you expect roof?**

☐ About half the time

☐ Never: mat is more common

☐ About 1 time in 6

:::


:::teacher-note

**Answer:** About 1 time in 6

:::


:::typical

## Elaborate: change the evidence

Discuss: does changing the examples change the meaning of the sentence, or just the pattern our model has learned from them?

:::keep-together

**Five more 'roof' endings are added. Which ending is now most common?**

☐ They are still equal

☐ chair

☐ roof

☐ mat

:::


:::teacher-note

**Answer:** roof

:::

:::


## Evaluate: a new pattern

**Without looking at the table**, explain why a text generator might produce different endings for the same beginning. Then return to your first prediction: would you change it? Why?

## Learning with AI: question a suggestion

An AI writing assistant suggests **mat** to finish “The cat sat on the”. Compare these two reactions:

- **A:** “The AI suggested mat, so it must be right.”
- **B:** “Mat is plausible, but chair or roof might fit too. I should check the sentence and what I mean.”

Which reaction shows better judgement? Explain what you would check before accepting a suggested word. The suggestion above is a prepared example.

**Looking ahead:** Our model uses one fixed phrase and a small set of examples, so we can see both why it favours an ending and where it struggles. Modern language models predict tokens using much richer context and learned patterns. Their responses can be far more useful and convincing, but they still have blind spots — often harder to identify or explain. **Treat an AI suggestion as something to evaluate, not automatically accept:** does it fit your purpose, and what would you need to check?

**Next:** use dice to make a choice according to these probabilities.

:::keep-together

**You are writing about your cat, who sleeps on the roof. You type 'The cat sat on the' and the AI suggests 'mat'. What should you write?**

☐ mat: the AI picked the most likely word

☐ Ask the AI again until it suggests roof

☐ roof: it's what actually happened

:::


:::teacher-note

**Answer:** roof: it's what actually happened

:::


## Exit ticket

:::keep-together

**What happens to the most frequent ending when five roof examples are added?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Roof becomes most frequent: six roof, three mat and two chair.

:::

