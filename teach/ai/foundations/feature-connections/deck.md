---
marp: true
theme: default
html: true
---

# How do models combine clues?

AI Foundations · How AI learns

<!-- Speaker note: How do models combine clues? Students predict, test and explain a transparent fruit classifier. About 30 minutes. -->

---

## Today

- I can explain how changing a weight changes which clue decides the prediction.
- I can work out the unit's prediction from its weights before testing it.
- I can explain why a decision made from weights can still be wrong about real fruit.

<!-- Speaker note: Before class: Use the board without accounts. It is one hand-adjusted decision unit, not a trained neural network. The score is colour weight × (+0.5 for yellow, −0.5 for green) + shape weight × (+0.5 for long, −0.5 for round). Above zero is banana, below zero is apple, and exactly zero is "unsure" (a tie: the clues cancel out). Optional extension, with school approval: train an image classifier in the Pattern Trainer (https://tools.learningwaypoints.com/trainer/, photos stay on the computer; Teachable Machine also works) and test unfamiliar photos. Unlike the hand-adjusted unit, the image model learns its weights from examples. Teacher: Ask for a prediction before each test. Teacher: Have students change one factor and explain the result. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Should a fruit sorter care more about colour or about shape?**

- Which clue fools you more often?
- Who decides how much each clue counts?

<!-- Speaker note: It depends on the fruit it will meet. In a trained model the weights come from examples, not a person's choice; here students set them by hand to see what weights do. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Engage: predict

**A fruit is yellow but round. Is colour alone enough to identify it?**

- Not necessarily: several clues may matter
- Always
- Yes, yellow always means banana

<!-- Speaker note: What happens: Several clues may help, but cannot guarantee a correct label. Take two or three predictions before anyone runs it. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Yellow and round <span style="font-size:.6em;color:#64748b">(3 min)</span>

Hold up (or draw) a yellow, round fruit. Banana or apple? Ask students who disagree to name the clue they trusted.

<!-- Speaker note: Collect 'colour' and 'shape' answers on the board; these become the two weights. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Explore it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fai%2Ffoundations%2Ffeature-connections%2Fstep-2&code=widget%3A+fruit-learning%0Amode%3A+weights%0Aexample%3A+green+%7C+round+%7C+apple%0Aexample%3A+green+%7C+round+%7C+apple%0Aexample%3A+yellow+%7C+round+%7C+apple%0Aexample%3A+yellow+%7C+long+%7C+banana%0Aexample%3A+yellow+%7C+long+%7C+banana%0Aexample%3A+yellow+%7C+long+%7C+banana%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ai/foundations/feature-connections/?full=step-2#step-2)

<!-- Speaker note: Predict the result before testing a green, round fruit and a yellow, long fruit. Then try a yellow, round fruit. Change the **colour** and **shape** weights using **More** and **Less**. These are weights you set by hand, not weights learned from examples. If the score is exactly 0, the two clues cancel out and the unit says **unsure**. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Several clues may help, but cannot guarantee a correct label.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Weigh the clues <span style="font-size:.6em;color:#64748b">(6 min)</span>

Pairs get a score card: colour weight and shape weight, each 0 to 3. For four fruit cards, add up the points for 'banana' and 'apple' and circle the winner. Then change one weight and score again.

<!-- Speaker note: This is the board's sum done on paper. Students should see one weight change flip a decision. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Clues

**What happens when you increase the colour weight?**

- The unit automatically learns from new photos
- Colour influences the decision more
- The fruit changes colour

* Answer: Colour influences the decision more

<!-- Speaker note:  -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Weights

**Set the colour weight to 0 and the shape weight to 2. What does the unit predict for a yellow, round fruit?**

- unsure
- apple
- banana

* Answer: apple

<!-- Speaker note:  -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Hidden weights <span style="font-size:.6em;color:#64748b">(3 min)</span>

If you couldn't see the score card, only the answer, how could you work out which clue it trusted more?

<!-- Speaker note: By testing cases where the clues disagree. Leads into the Learning with AI section. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Elaborate: change the decision

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fai%2Ffoundations%2Ffeature-connections%2Fstep-4&code=widget%3A+fruit-learning%0Amode%3A+weights%0Aexample%3A+green+%7C+round+%7C+apple%0Aexample%3A+green+%7C+round+%7C+apple%0Aexample%3A+yellow+%7C+round+%7C+apple%0Aexample%3A+yellow+%7C+long+%7C+banana%0Aexample%3A+yellow+%7C+long+%7C+banana%0Aexample%3A+yellow+%7C+long+%7C+banana%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ai/foundations/feature-connections/?full=step-4#step-4)

<!-- Speaker note: Find two settings that produce different predictions for the same yellow, round fruit. Explain what changed and what did not change. **Wider investigation:** Could two different fruits share both clues? Suggest a third clue. Why would that still not guarantee a correct answer? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

## Evaluate: check the output

Without the board, explain how changing the importance of a clue can affect a prediction.

---

## Learning with AI: hidden weights

Here you could see both weights and change them. A real AI weighs millions of clues, and nobody can read all its weights. A clue that is weighted too heavily can tilt its answer the wrong way, just as colour did here. So treat its answer as a prediction to check, not a fact.

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Colour weight 2, shape weight 0. What does the unit predict for a green, long fruit, and why?**

* Apple: only colour counts, and green pushes the score below zero, even though a long fruit is probably a banana.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Unit 2, lesson 4 lets a tiny neural network learn its own weights from examples. -->
