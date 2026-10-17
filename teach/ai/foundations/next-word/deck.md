---
marp: true
theme: default
html: true
---

# Can you predict the next word?

AI Foundations · How AI generates text

<!-- Speaker note: Count example endings and distinguish a frequent next word from a certain one. About 25 minutes. -->

---

## Today

**We are learning to** see how examples influence which words seem likely to come next, without assuming that the most likely word is certain.

- I can count which endings follow a phrase in a set of examples and say which is most common.
- I can explain why the most common ending is likely but not certain.
- I can check a suggested next word against what I actually mean.

<!-- Speaker note: Before class: Use the board as a transparent fixed-context model, not a miniature modern LLM. No AI account is required. The Explain it to me clip is an optional scaffold after prediction. Formal fractions and percentages are an optional extension, not a prerequisite: start with counts and bars. Ask learners to justify answers using counts rather than guesses about the writer's intentions. Common misconceptions: most likely means certain; the generator understands what the writer intends; changing the examples cannot change the prediction. -->

---

## Why it matters

> When you type a message or a search, the computer often suggests the next word. Is it guessing what you mean, or using patterns from examples?

<!-- Speaker note: A sentence can have more than one sensible next word. A text generator needs a way to choose between possibilities. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Engage: predict

**Which word must come next after 'The cat sat on the'?**

- roof
- There is no single word that must come next
- mat
- chair

<!-- Speaker note: What happens: There is no single word that must come next. Several endings are possible, even if some are more familiar. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: ask students to write their own ending before seeing any examples. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Explore it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fai%2Ffoundations%2Fnext-word%2Fstep-2&code=widget%3A+text-prediction%0Aphrase%3A+The+cat+sat+on+the%0Aending%3A+mat%0Aending%3A+mat%0Aending%3A+mat%0Aending%3A+chair%0Aending%3A+chair%0Aending%3A+roof%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ai/foundations/next-word/?full=step-2#step-2)

<!-- Speaker note: Start with **mat = 3**, **chair = 2**, **roof = 1**. Predict the most frequent ending, then add five more lines containing **roof**. Press **Update examples** and explain why the prediction changes. -->

<!-- Speaker note: Teacher: count mat, chair and roof before revealing fractions; then add five roof examples. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* There is no single word that must come next. Several endings are possible, even if some are more familiar.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the most frequent ending

**Which ending appears most often in the original six examples?**

- chair
- mat
- All appear equally often
- roof

* Answer: mat

<!-- Speaker note:  -->

<!-- Speaker note: Teacher: the Explain it to me clip or its text is optional; do not require watching before exploring. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Frequent does not mean certain

**On the board, roof is 1 of the 6 examples. If a generator picks endings in proportion to the counts, how often would you expect roof?**

- About half the time
- Never: mat is more common
- About 1 time in 6

* Answer: About 1 time in 6

<!-- Speaker note:  -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Elaborate: change the evidence

**Five more 'roof' endings are added. Which ending is now most common?**

- They are still equal
- chair
- roof
- mat

* Answer: roof

<!-- Speaker note:  -->

---

## Evaluate: a new pattern

**Without looking at the table**, explain why a text generator might produce different endings for the same beginning. Then return to your first prediction: would you change it? Why?

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Learning with AI: question a suggestion

**You are writing about your cat, who sleeps on the roof. You type 'The cat sat on the' and the AI suggests 'mat'. What should you write?**

- mat: the AI picked the most likely word
- Ask the AI again until it suggests roof
- roof: it's what actually happened

* Answer: roof: it's what actually happened

<!-- Speaker note:  -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What happens to the most frequent ending when five roof examples are added?**

* Roof becomes most frequent: six roof, three mat and two chair.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Unit 1, lesson 2 uses a die to choose an ending by its chance. A physical die helps; no online AI account is needed. -->
