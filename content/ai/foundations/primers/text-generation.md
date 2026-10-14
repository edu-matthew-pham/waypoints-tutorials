---
title: How text prediction works in 5 minutes
---
## The idea in plain words

A text generator can choose what to write next based on patterns. In our first model, we count which word follows a fixed phrase in a **small invented set of examples**.

After "the cat sat on the", suppose our six examples end: **mat, mat, mat, chair, chair, roof**.

| Ending | Count | Chance when sampling proportionally |
|---|---:|---:|
| mat | 3 | 3/6 |
| chair | 2 | 2/6 |
| roof | 1 | 1/6 |

These probabilities describe **our model**, not what is true about every sentence. To sample with a die, assign faces 1–3 to mat, 4–5 to chair and 6 to roof.

## Why this is useful

The example separates **learning from examples**, **assigning probabilities** and **selecting an output**. Repeated samples may differ even when the model stays the same.

## Where the picture breaks

- A fixed phrase-to-word table can only produce one word. A multi-step n-gram model uses recent words to choose successive words.
- Modern LLMs use tokens, neural networks and learned representations of longer contexts, not a literal six-row count table.
- A common continuation is not necessarily correct, safe, appropriate or truthful.
- Changing the examples changes the probabilities; it does not prove what a writer intends.

## Common misconceptions

- "The most likely word is the only correct word."
- "The model knows what the writer meant."
- "One unusual roll means the probabilities changed."
- "Our die generator works exactly like ChatGPT."

## A short opening investigation

Show six invented sentence endings. Have learners **predict** before revealing the counts, then choose an ending by rolling a die. Ask whether an unusual outcome invalidates the model.

## Questions students ask

**Why might the same input give different outputs?** Sampling can choose among several possible next words.

**Does more data guarantee truth?** No. Patterns depend on the examples and the task.

**Why use a simplified model?** Because every decision is visible; the simplification also sets strict limits on what we can infer about real LLMs.

## How it connects

Next, students repeat sampling by hand, then automate the repeated process. They must still decide whether the model and its evidence are suitable.
