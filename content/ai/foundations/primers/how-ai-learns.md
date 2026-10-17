---
title: How AI learns in 5 minutes
---
## The idea in plain words

A model learns from **labelled examples**: each example has some clues (here, a fruit's colour and shape) and a label (the answer, apple or banana). Given a new case, the model uses what it learned from the examples to predict a label.

The unit uses three boards. A sorter copies the label of the nearest examples (lessons 1 and 2). A single decision unit adds up weighted clues, with weights students set by hand (lesson 3). A real, tiny neural network learns its own weights by training (lesson 4).

## Why this is useful

Students see that a model can follow its steps perfectly and still be wrong, because it is only as good as its examples. They see that weights decide which clue matters most, and that training changes those weights while testing does not.

## Where the picture breaks

- Real fruit has far more than two clues, and real classifiers use thousands or millions of learned features.
- The sorter and the decision unit are transparent teaching models, not neural networks. Only lesson 4's board is a neural network (2 inputs, 2 hidden neurons, 1 output).
- The board's pretend world (long means banana, round means apple) is tidier than real life.

## Common misconceptions

- "The model knows what a banana is." It matches clues to examples.
- "If the program works, the answer is right." Wrong labels and missing examples cause mistakes in a working program.
- "Testing a fruit teaches the network." Only training changes its weights.
- "More data always fixes it." More of the wrong kind of example can make things worse.

## Try it yourself (5 minutes)

Open lesson 2's board. Swap two banana labels and test a yellow, long fruit. Then restore the examples, remove the yellow, round apple and test a yellow, round fruit. You have just caused both kinds of mistake.

## Questions students ask

**Is a chatbot like this?** A chatbot is a very large neural network trained on huge amounts of text to predict the next word. The idea of learning weights from examples is the same; the size is not.

**Can we see what a real AI learned?** Not easily. Its weights are numbers that don't map neatly to human ideas, which is why its answers need checking.

## How it connects

Unit 1 showed text generation as choosing likely next words. This unit shows where "likely" comes from: examples and learned weights. Unit 3 turns to talking with AI.
