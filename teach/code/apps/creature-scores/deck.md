---
marp: true
theme: default
html: true
---

# Creature scores

App Builder apps · Tidy up

<!-- Speaker note: Students meet functions that give back a value. BarWidth(stat) replaces the same width calculation written three times, then Overall(power, speed, defence) gives back one score shown for the clicked creature. Nib's Overall works the answer out into a variable and never gives it back. Make it yours adds Rank(score), with an If inside the function. About 45 minutes (Try 3 min · Spot 4 min · Build 1 12 min · Trace 4 min · Build 2 10 min · Check 6 min · Make it yours 6 min). -->

---

## Today

- I can make a function that gives back a value with Set return value.
- I can use a function in a value box, like BarWidth(Creature.power).
- I can say which value goes into which parameter when a function has several.
- I can explain why a function that only sets a variable doesn't give anything back.

<!-- Speaker note: Before class: This lesson grows the Creature stats app and comes after Tidy up the journal, which introduced functions that do something. It's Level 4 (Functions); each step opens App Builder at Level 4. The starting app is the finished creature stats viewer with an empty OverallText added at the bottom. BarWidth is a refactor (the app looks the same afterwards), so the run in step 6 of Build 1 is the check, as in the journal lesson. Overall is new behaviour. The call fills parameters in order: Overall(Creature.power, Creature.speed, Creature.defence) puts the first value into power and so on. Swapping them doesn't change an average, which is worth noticing: for most functions order matters (try a function Difference(a, b) giving back a - b). Scores: Blaze 57, Tide 60, Zip 55. Teacher: Spot the repetition: same as the journal lesson. Circle what's the same, underline what's different. Teacher: Build 1: checkpoint: do the bars look exactly as before? That's the test for a refactor. Teacher: Trace: work out Zip's speed bar by hand before anyone clicks. Teacher: Check: vote on Blaze's score, then click. -->

---

## Why it matters

> A shop works out a price with tax, a game works out damage, a fitness app works out a score. Each is one calculation used in many places, written once and asked for by name.

<!-- Speaker note: In *Tidy up the journal*, a function **did** something: Pick set Chosen and went to Describe. A function can also **work something out and give it back**, like a calculator button: - `BarWidth(80)` gives back `160`, the width of a bar for a stat of 80. - `Overall(80, 60, 30)` gives back `57`, one score for three stats. You use it wherever a value goes, in a value box, just like `count(Journal)` or `round(2.6)`. Today's app is the creature stats viewer, tidied and given an overall score. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A calculator's √ button doesn't change anything you've typed before; it gives you an answer. Where else does an app ask for an answer like that?**

- Price with tax? Damage in a game? A score?

<!-- Speaker note: Each is a calculation used in many places. Written once as a function that gives back a value, it's asked for by name wherever the answer is needed. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

## Try the finished app

Click each creature. The bars and the **Overall** score at the bottom change. Which creature has the highest score?

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Spot the repetition

**Open the Events tab. The three bar actions each set a width. What is different between them?**

- The number they divide by
- Only the stat: power, speed or defence
- Nothing: all three are the same
- The number they times by

* Answer: Only the stat: power, speed or defence

<!-- Speaker note: All three work out stat / 100 * 200. Only the stat changes, so it becomes the parameter, and the calculation goes in the function once. What this step is for: Seeing that the three bar widths share one calculation, with only the stat changing, tells you what the function works out and what goes in as its parameter. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Blaze's score <span style="font-size:.6em;color:#64748b">(4 min)</span>

Everyone works out Overall(80, 60, 30) on paper, then clicks Blaze to check.

<!-- Speaker note: 170 / 3 = 56.67, rounded to 57. The click gives the same answer because the function does the same steps. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/creature-scores/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/apps/creature-scores/?full=step-3#step-3)

<!-- Speaker note: 1. In the sidebar, under **Functions**, click **+ Function** and name it *BarWidth*. 2. **+ Parameter**: *stat*. 3. Click **+ Give back a value**. It adds **Set return value to**: fill in `stat / 100 * 200` 4. Click **This screen: Creatures**. In **Creature is clicked**, click *Set PowerBar width to …* and change the value to `BarWidth(Creature.power)` 5. Do the same for SpeedBar (`BarWidth(Creature.speed)`) and DefenceBar (`BarWidth(Creature.defence)`). 6. Run it and click each creature. The bars should look exactly as before. Want wider bars? Change 200 in one place, BarWidth, and all three follow. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What does it give back?

**Zip's speed is 95. What does BarWidth(Creature.speed) give back when Zip is clicked?**

- 47.5
- 95
- 190
- 200

* Answer: 190

<!-- Speaker note: For this call, stat is 95: 95 / 100 * 200 = 190. The next call gives stat a different value. What this step is for: Working out one call by hand shows that the value in the brackets becomes stat for that one call. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/creature-scores/?full=step-5#step-5](https://tutorials.learningwaypoints.com/code/apps/creature-scores/?full=step-5#step-5)

<!-- Speaker note: 1. **+ Function**: *Overall*, with three parameters: *power*, *speed*, *defence* (in that order). 2. **+ Give back a value**: `round((power + speed + defence) / 3)` (the average, rounded to a whole number). 3. In **Creature is clicked**, add **Set OverallText text to** `"Overall: " & Overall(Creature.power, Creature.speed, Creature.defence)` 4. Run it. Which creature scores highest? The call fills the parameters in order: the first value goes into *power*, the second into *speed*, the third into *defence*. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Nib's slip

**Clicking a creature shows the problem "Overall doesn't give a value back yet". Click the line where Nib goes wrong.**

```
 1  Nib makes a function, Overall(power, speed, defence).
 2  Inside it: Set variable Score to round((power + speed + defence) / 3).
 3  Creature is clicked: Set OverallText text to "Overall: " & Overall(Creature.power, Creature.speed, Creature.defence).
 4  Nib runs it and clicks Blaze.
```

* Answer: line 2

<!-- Speaker note: Line 2: Nib puts the answer in a variable, so Overall works it out and then keeps it. Only Set return value hands it back to the place that asked. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Blaze's score

**Blaze has power 80, speed 60 and defence 30. What does Overall give back?**

- 56
- 57
- 60
- 170

* Answer: 57

<!-- Speaker note: (80 + 60 + 30) / 3 = 56.67, and round gives 57. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make it yours: a rank

Make a function *Rank(score)* that gives back a word for a score, such as *Strong* for 60 or more and *Still training* below that:

1. **+ Function** *Rank*, parameter *score*.
2. In its event, a condition: **Compare** `score` **≥** `60`, then **Set return value to** `"Strong"`.
3. From the event's **⋯** menu, **Add an Else below**, with **Set return value to** `"Still training"`.
4. Show it beside the score: add `& " (" & Rank(Overall(Creature.power, Creature.speed, Creature.defence)) & ")"` to the end of the OverallText value.

`Rank(Overall(…))` asks Overall first, then hands its answer straight to Rank.

[Open this step](https://tutorials.learningwaypoints.com/code/apps/creature-scores/?full=step-7#step-7)

<!-- Speaker note: What this step is for: A function can decide what to give back, with an If inside it, and one function's answer can go straight into another. For students who need more support: Do Build 1 together for PowerBar on the board; pairs change the other two bars and do Build 2. For early finishers: A function Stars(score) that gives back a row of stars: "★" for a score under 50, "★★" under 70, "★★★" otherwise (If, Else if, Else inside the function). Which is easier to read: Stars(Overall(…)) in the text, or the Ifs written out in the click event? The hard part, on purpose: Students mix up the two kinds of function. Pick (last lesson) does something and is used with Call; BarWidth gives back a value and is used inside a value box. If a student tries Call BarWidth, ask: where would its answer go? When students get stuck: The problem says BarWidth doesn't give a value back yet. Ask: Is there a Set return value inside BarWidth? Fix: Click + Give back a value in the function, and fill in stat / 100 * 200. / All three bars are the same width. Ask: What's inside the brackets of each BarWidth? Fix: Each bar passes its own stat: BarWidth(Creature.power), BarWidth(Creature.speed), BarWidth(Creature.defence). / Overall shows a decimal like 56.666. Ask: Which built-in function rounds a number? Fix: Wrap it: round((power + speed + defence) / 3). -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 18px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A canteen app works out price × quantity for every item on an order. What function would you make, what would it give back, and how would you use it?**

* Total(price, qty) gives back price * qty. Each item's line uses Total(item price, item quantity) in a value box, and the order total adds them up.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: the challenge, a prototype of their own. A function that gives back a value is worth reaching for whenever the same calculation appears twice. -->
