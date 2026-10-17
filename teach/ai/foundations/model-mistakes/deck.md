---
marp: true
theme: default
html: true
---

# Why does AI make mistakes?

AI Foundations · How AI learns

<!-- Speaker note: Students break a working fruit sorter on purpose, once with a wrong label and once by removing examples, then fix it and explain what went wrong. About 30 minutes. -->

---

## Today

**We are learning to** break a fruit sorter on purpose with a wrong label and with missing examples, then fix it.

- I can make a model give a wrong answer by changing its examples or labels.
- I can explain the difference between a mistake caused by a wrong label and one caused by missing examples.
- I can say what I would check when an AI gets something wrong.

<!-- Speaker note: Before class: Last lesson students taught the sorter. This lesson they break it. The board's mistakes mode adds a Swap label button and three challenges (wrong label, missing examples, fix it); each ticks when a test shows it. In the board's pretend world every long fruit is a banana and every round fruit is an apple, so the board can say "right" or "wrong". Real fruit is messier: say so. The sorter copies the label of its nearest examples. It is a transparent teaching model, not a neural network. No account or online tool is needed. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Engage: predict

**The sorter's program works perfectly. Can it still give a wrong answer?**

- Only if the computer is broken
- No: if the program works, the answer is right
- Yes: if its examples or labels are wrong or missing

<!-- Speaker note: What happens: Yes. The program can follow its steps perfectly and still be wrong, because it learns from examples, and examples can be wrong or missing. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: ask what could make a sorter wrong before anyone touches the board. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Explore it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fai%2Ffoundations%2Fmodel-mistakes%2Fstep-2&code=widget%3A+fruit-learning%0Amode%3A+mistakes%0Aexample%3A+green+%7C+round+%7C+apple%0Aexample%3A+green+%7C+round+%7C+apple%0Aexample%3A+yellow+%7C+round+%7C+apple%0Aexample%3A+yellow+%7C+long+%7C+banana%0Aexample%3A+yellow+%7C+long+%7C+banana%0Aexample%3A+yellow+%7C+long+%7C+banana%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ai/foundations/model-mistakes/?full=step-2#step-2)

<!-- Speaker note: In the board's pretend world, every **long** fruit is a banana and every **round** fruit is an apple. The board tells you when the sorter is right or wrong. -->

<!-- Speaker note: Teacher: let students find their own way to fool it; collect the different ways on the board. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Yes. The program can follow its steps perfectly and still be wrong, because it learns from examples, and examples can be wrong or missing.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The swapped labels

**You swapped two banana labels to 'apple'. Now the sorter calls a yellow, long fruit an apple. What caused the mistake?**

- Wrong labels: it copied the answers it was taught
- The program has a bug
- Missing examples: it had nothing close to compare with

* Answer: Wrong labels: it copied the answers it was taught

<!-- Speaker note:  -->

<!-- Speaker note: Teacher: sort the ways into 'wrong labels' and 'missing examples'; ask which one a bigger dataset would not fix. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The removed examples

**You removed the only yellow, round example. Every label is still correct. Now a yellow, round fruit is called a banana. What caused it?**

- Missing examples: its closest examples were now yellow bananas
- Yellow, round fruit can't be sorted
- Wrong labels: some answers were wrong

* Answer: Missing examples: its closest examples were now yellow bananas

<!-- Speaker note:  -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 26px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Elaborate: more examples, fewer mistakes?

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fai%2Ffoundations%2Fmodel-mistakes%2Fstep-4&code=widget%3A+fruit-learning%0Amode%3A+mistakes%0Aexample%3A+green+%7C+round+%7C+apple%0Aexample%3A+green+%7C+round+%7C+apple%0Aexample%3A+yellow+%7C+round+%7C+apple%0Aexample%3A+yellow+%7C+long+%7C+banana%0Aexample%3A+yellow+%7C+long+%7C+banana%0Aexample%3A+yellow+%7C+long+%7C+banana%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ai/foundations/model-mistakes/?full=step-4#step-4)

<!-- Speaker note: Swap two banana labels to apple, so the sorter calls a yellow, long fruit an apple. Then **add** three more correct yellow, long banana examples. Test again. Did more correct examples outvote the wrong ones? Press **Restore original examples**. Remove the yellow, round apple and add three more yellow, long bananas. Test a yellow, round fruit. Did more examples help this time? **Wider investigation:** a real fruit can be green **and** long: an unripe banana. What extra clue, or what kind of example, would help? Would it guarantee the right answer? -->

<!-- Speaker note: Teacher: connect to real systems: labels are often made by people, quickly, and some kinds of case are missing. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

## Evaluate: what would you check?

Without the board, write: **The sorter got it wrong when … because … . To fix it, I would … .**

---

## Learning with AI: when the answer is wrong

When an AI assistant gives you a wrong answer, it isn't always because it is "broken". It may have learned from wrong examples, or seen few examples like your question. So ask: *Is my question unusual? Could it have learned this wrong?* Then check with a source you trust.

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A sorter with all correct labels still calls a fruit wrongly. What is the most likely reason?**

* Its examples do not cover that kind of fruit well, so its nearest examples point the wrong way.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Unit 2, lesson 3 shows how a model can weigh several clues at once. -->
