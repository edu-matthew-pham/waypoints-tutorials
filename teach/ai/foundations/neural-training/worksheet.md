---
title: "Can a neural network learn?"
subtitle: "AI Foundations · How AI learns · Lesson 4"
---

# Can a neural network learn?

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Train a tiny neural network, see its connections change, and test whether it has learned from examples.


:::teacher-note

**In one sentence:** Train and test a genuine tiny neural network without teaching the mathematics.

**Students should be able to say:** I can explain that training changes a network's connections and testing does not. I can explain why changing examples can change learned predictions. I can say how a chatbot is like this tiny network, and how it is different.

**Width:** the unmarked parts are the floor every student does (Engage, Explore, Explain, Evaluate). Typical and Wider sections add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Engage


:::keep-together

**If you train a neural network with labelled examples, what is changing?**

☐ The computer's fixed program instructions

☐ The fruit itself

☐ Connections inside the model that affect its future predictions

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** Training changes the network's numerical connections, not the fruit or the underlying calculation rules.

:::


## Explore

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Explain: what has the network learned?


:::keep-together

### What changes?

**Which action changes the neural network's learned connections?**

☐ Reading its output

☐ Selecting a new fruit to test

☐ Training with labelled examples

:::


:::teacher-note

**Answer:** Training with labelled examples

:::


:::keep-together

### What stays the same?

**Suppose you train the network only on yellow bananas, then test a green, round fruit. Why might it get it wrong?**

☐ Testing a new fruit changes its weights

☐ Neural networks can't learn colours

☐ It never trained on a green or round fruit, so it had nothing to learn them from

:::


:::teacher-note

**Answer:** It never trained on a green or round fruit, so it had nothing to learn them from

:::


:::typical

## Elaborate: can you teach it the wrong lesson?

First choose **Only yellow bananas**, press **Reset network**, and train. Test a green, round fruit. What has the network not had the chance to learn?

Then select **Use all examples**, **Reset network**, train again and compare. You can also investigate the incorrect-label checkbox. Keep the **same test fruit** when comparing runs.

**Wider investigation:** Choose **Show internal numbers**. These values are connection weights (multipliers), **not percentages** or separate rules. Some may be negative, and none has to correspond to a human-readable feature. Can the same output change when several connections change together?

:::


## Evaluate: explain the difference

Without using the board, complete these statements:

- **Training** changes …
- **Testing** uses …
- One reason a trained network could still be wrong is …

## Learning with AI: outputs do not reveal everything

Modern AI systems can be useful even when we cannot easily explain their learned internal patterns. We might inspect individual numbers without understanding what they collectively represent.

Imagine an AI assistant makes a confident claim in a subject you are learning. What would you **verify independently**? What work should you practise yourself before asking AI for help?

**Takeaway:** a neural network's behaviour changes as training adjusts its connections. Its predictions come from those learned numbers, not from a list of rules someone wrote.

**Chatbots are neural networks too:** very large ones, trained on huge amounts of text to predict the next word. That is the same next-word idea from Unit 1, with far more examples and connections.

## Exit ticket

:::keep-together

**What changes during training, and what happens during testing?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Training updates network parameters using labelled examples; testing uses them without updating.

:::

