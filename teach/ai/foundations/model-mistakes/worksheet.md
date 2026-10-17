---
title: "Why does AI make mistakes?"
subtitle: "AI Foundations · How AI learns · Lesson 2"
---

# Why does AI make mistakes?

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Break a fruit sorter on purpose with a wrong label and with missing examples, then fix it.


:::teacher-note

**In one sentence:** Students break a working fruit sorter on purpose, once with a wrong label and once by removing examples, then fix it and explain what went wrong.

**Students should be able to say:** I can make a model give a wrong answer by changing its examples or labels. I can explain the difference between a mistake caused by a wrong label and one caused by missing examples. I can say what I would check when an AI gets something wrong.

**Width:** the unmarked parts are the floor every student does (Engage, Explore, Explain, Evaluate). Typical and Wider sections add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Engage


:::keep-together

**The sorter's program works perfectly. Can it still give a wrong answer?**

☐ Only if the computer is broken

☐ No: if the program works, the answer is right

☐ Yes: if its examples or labels are wrong or missing

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** Yes. The program can follow its steps perfectly and still be wrong, because it learns from examples, and examples can be wrong or missing.

:::


## Explore

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Explain: two kinds of mistake

A model can go wrong in at least two ways.

- **Wrong labels.** If examples are labelled wrongly, the model learns the wrong answer. Real AI is often trained on labels made quickly by people, and some are wrong.
- **Missing examples.** If no examples are like the new case, the model guesses from ones that are not really similar. Real AI can struggle with things that were rare or missing in its training data. Generalising to new cases only works as well as the examples it learned from.

In both cases, the program worked. The **examples** were the problem.

:::keep-together

### The swapped labels

**You swapped two banana labels to 'apple'. Now the sorter calls a yellow, long fruit an apple. What caused the mistake?**

☐ Wrong labels: it copied the answers it was taught

☐ The program has a bug

☐ Missing examples: it had nothing close to compare with

:::


:::teacher-note

**Answer:** Wrong labels: it copied the answers it was taught

:::


:::keep-together

### The removed examples

**You removed the only yellow, round example. Every label is still correct. Now a yellow, round fruit is called a banana. What caused it?**

☐ Missing examples: its closest examples were now yellow bananas

☐ Yellow, round fruit can't be sorted

☐ Wrong labels: some answers were wrong

:::


:::teacher-note

**Answer:** Missing examples: its closest examples were now yellow bananas

:::


:::typical

## Elaborate: more examples, fewer mistakes?

Swap two banana labels to apple, so the sorter calls a yellow, long fruit an apple. Then **add** three more correct yellow, long banana examples. Test again. Did more correct examples outvote the wrong ones?

Press **Restore original examples**. Remove the yellow, round apple and add three more yellow, long bananas. Test a yellow, round fruit. Did more examples help this time?

**Wider investigation:** a real fruit can be green **and** long: an unripe banana. What extra clue, or what kind of example, would help? Would it guarantee the right answer?

:::


## Evaluate: what would you check?

Without the board, write: **The sorter got it wrong when … because … . To fix it, I would … .**

## Learning with AI: when the answer is wrong

When an AI assistant gives you a wrong answer, it isn't always because it is "broken". It may have learned from wrong examples, or seen few examples like your question. So ask: *Is my question unusual? Could it have learned this wrong?* Then check with a source you trust.

## Exit ticket

:::keep-together

**A sorter with all correct labels still calls a fruit wrongly. What is the most likely reason?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Its examples do not cover that kind of fruit well, so its nearest examples point the wrong way.

:::

