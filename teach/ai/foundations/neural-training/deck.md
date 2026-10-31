---
marp: true
theme: default
html: true
---

# Can a neural network learn?

AI Foundations · How AI learns

<!-- Speaker note: Train and test a genuine tiny neural network without teaching the mathematics. About 30 minutes. -->

---

## Today

- I can explain that training changes a network's connections and testing does not.
- I can explain why changing examples can change learned predictions.
- I can say how a chatbot is like this tiny network, and how it is different.

<!-- Speaker note: Before class: The board uses a small genuine 2-2-1 sigmoid neural network with backpropagation. It sees only colour and shape, not photographs. No account or online model is needed. The lesson ends by linking back to Unit 1: chatbots are very large neural networks trained to predict the next word. Optional extension, with school approval: train an image model in the Pattern Trainer (https://tools.learningwaypoints.com/trainer/, photos stay on the computer; Teachable Machine also works) and test photos not used in training. An image model processes much richer information than two hand-chosen clues; neither guarantees correct predictions. Teacher: Have students record a prediction before training. Teacher: Reset the network whenever comparing training datasets. Teacher: Ask what changed internally and what stayed the same. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**If a network gets every test right, has it learned what a banana is?**

- What were the test fruits like?
- What would you test next to be more sure?

<!-- Speaker note: Passing tests is evidence, not proof. Its 'knowledge' is connection strengths shaped by the examples; it can be right for the wrong reason. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Engage: predict

**If you train a neural network with labelled examples, what is changing?**

- The computer's fixed program instructions
- The fruit itself
- Connections inside the model that affect its future predictions

<!-- Speaker note: What happens: Training changes the network's numerical connections, not the fruit or the underlying calculation rules. Take two or three predictions before anyone runs it. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## What changes in training? <span style="font-size:.6em;color:#64748b">(3 min)</span>

Choose one: the program's code, the examples, or the connection strengths. Which changes when the network trains? Defend your choice to a partner.

<!-- Speaker note: Connection strengths. The code and examples stay the same during training. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Explore it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fai%2Ffoundations%2Fneural-training%2Fstep-2&code=widget%3A+neural-fruit%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ai/foundations/neural-training/?full=step-2#step-2)

<!-- Speaker note: 1. **Before training**, choose a fruit's colour and shape, and press **Record this prediction**. (The untrained network calls every fruit Apple.) 2. Press **Train one example** a few times. Watch the connections. Then use **Train 300 examples** to allow enough repeated practice to see clearer changes. 3. **Test the same fruit again** and press **Record this prediction**. Did its output change? Try all four combinations: green/round, green/long, yellow/round and yellow/long. The network really adjusts its internal numbers during training. The connecting lines give you a glimpse of those changes, but you do not need to decode every line. **Important:** During **testing**, the network uses its existing learned connections. Testing a fruit does **not** change the weights. Training does. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Training changes the network's numerical connections, not the fruit or the underlying calculation rules.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Strengthen the path <span style="font-size:.6em;color:#64748b">(6 min)</span>

Draw two input dots (colour, shape) joined to two output dots (banana, apple). For each training example read out, thicken the lines that led to the right answer by one stroke.

<!-- Speaker note: A rough paper picture of weights growing. Don't teach the maths; keep it to 'used more, counts more'. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What changes?

**Which action changes the neural network's learned connections?**

- Reading its output
- Selecting a new fruit to test
- Training with labelled examples

* Answer: Training with labelled examples

<!-- Speaker note:  -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What stays the same?

**Suppose you train the network only on yellow bananas, then test a green, round fruit. Why might it get it wrong?**

- Testing a new fruit changes its weights
- Neural networks can't learn colours
- It never trained on a green or round fruit, so it had nothing to learn them from

* Answer: It never trained on a green or round fruit, so it had nothing to learn them from

<!-- Speaker note:  -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 28px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Elaborate: can you teach it the wrong lesson?

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fai%2Ffoundations%2Fneural-training%2Fstep-4&code=widget%3A+neural-fruit%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ai/foundations/neural-training/?full=step-4#step-4)

<!-- Speaker note: First choose **Only yellow bananas**, press **Reset network**, and train. Test a green, round fruit. What has the network not had the chance to learn? Then select **Use all examples**, **Reset network**, train again and compare. You can also investigate the incorrect-label checkbox. Keep the **same test fruit** when comparing runs. **Wider investigation:** Choose **Show internal numbers**. These values are connection weights (multipliers), **not percentages** or separate rules. Some may be negative, and none has to correspond to a human-readable feature. Can the same output change when several connections change together? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Teach it the wrong lesson <span style="font-size:.6em;color:#64748b">(4 min)</span>

If every training banana were yellow, which line would get thickest? What would the network say about a green banana?

<!-- Speaker note: Links back to Training examples and Model mistakes: the examples shape what it learns. -->

---

## Evaluate: explain the difference

Without using the board, complete these statements:

- **Training** changes …
- **Testing** uses …
- One reason a trained network could still be wrong is …

---

## Learning with AI: outputs do not reveal everything

Modern AI systems can be useful even when we cannot easily explain their learned internal patterns. We might inspect individual numbers without understanding what they collectively represent.

Imagine an AI assistant makes a confident claim in a subject you are learning. What would you **verify independently**? What work should you practise yourself before asking AI for help?

**Takeaway:** a neural network's behaviour changes as training adjusts its connections. Its predictions come from those learned numbers, not from a list of rules someone wrote.

**Chatbots are neural networks too:** very large ones, trained on huge amounts of text to predict the next word. That is the same next-word idea from Unit 1, with far more examples and connections.

**Next:** your sorter, your neural network and your dice generator are different kinds of AI. The next lesson names four kinds and how each goes wrong.

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 19px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What changes during training, and what happens during testing?**

* Training updates network parameters using labelled examples; testing uses them without updating.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: The last lesson of Unit 2 names four kinds of AI (rules, predict or sort, make new content, take actions) and how each goes wrong. -->
