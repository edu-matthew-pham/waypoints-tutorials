---
marp: true
theme: default
html: true
---

# Pattern Detector projects

**Sort things into groups, then make the answer useful to someone**

<!-- Speaker note: This deck opens and closes the projects: the shared opening, then a few slides per brief (A rules, B a trained model, C both), then the closings. Show only the brief your class is on. The project pages carry the milestones, hints and checklist. Adapt freely: the problem, the user and the starters are yours to set. -->

---

## Opening · What is a pattern detector?

An app that takes an **input**, sorts it into **groups**, and **responds** in a way that helps a real person.

- Text someone types
- Answers to a few questions
- A photo, a pose or a sound

**What groups would be useful to someone you know?**

---

## Opening · Two ways to do the sorting

**Rules you write**: "if the soil is drier than 30%, water it."

**A model that learns from examples**: you show it many, it finds the pattern.

Which would you use to tell a **weak password** from a strong one?

Which would you use to tell a **cat** from a **dog**?

---

## Brief A · Why rules?

- You can say exactly what each rule checks
- The app can always explain its answer
- When it is wrong, you can find the rule and fix it

**The trade-off:** you can only cover the cases you thought of.

---

## Brief A · Your project

1. Write who it is for and what it helps them do
2. Write your rules in plain English first
3. Build it from the closest starter
4. Test the edges
5. Say what your rules cannot handle

Everyone's app is different. Hints are there if you need them, and your teacher can see which you used.

---

## Brief A · Check your app

- **Clear result**, in words your user understands
- **Honest**: says when no rule matches
- **Useful response**, not just a label
- **Fits your user**: something they can change
- **Tested** on edge cases

---

## Brief B · Why a model?

- It copes with inputs too messy for rules: photos, poses, sounds
- You teach it with **examples**, not instructions

**The trade-off:** it can be **sure and wrong**, and it can't tell you why.

**What would you need to show it so it works where your user is?**

<!-- Speaker note: Students who did the first lesson have already trained one model and run it in Python. Ask what their model said about the thing that was neither. -->

---

## Brief B · Your project

1. Write who it is for and what it helps them do
2. Collect examples in the Pattern Trainer, in the places it will be used
3. Keep some photos or sounds back to **test** it on
4. Download your model into the starter, then change what it says
5. Decide how sure it must be before it says so

---

## Brief B · Check your app

- **Clear result**, in words your user understands
- **Honest about how sure it is**: says when it isn't sure
- **Useful response**: advice or a next step, not just a label
- **Fits your user**: a setting they can change
- **Tested** on things it was not trained on

---

## Brief C · Both together

The model **reads** the input. Your rules **decide** what to do with it.

- Count: three leaning checks in a row means a break
- Remember: the last three sounds must match the secret knock
- Combine: a model's answer and a number the user gives

**Test each part alone first, then the whole thing.**

<!-- Speaker note: The example's main finding is worth telling: every part passed alone, but one confident wrong answer from the model reset the count, so the reminder never came. -->

---

## Brief C · Check your app

- **Clear result**, in words your user understands
- **Honest about how sure it is**: unsure answers are handled, not hidden
- **Useful response** that needs both parts
- **Fits your user**: settings they can change
- **Tested** as a whole, not just part by part

---

## Closing · What broke at the edges?

Share one input where your app gave a poor answer.

- Was it exactly on a boundary, or something it never saw?
- Was the model sure, even though it was wrong?
- Would the user have known it was wrong?

---

## Closing · Rules, a model, or both?

Rules need you to think of every case. A model needs examples of every case.

**Which did your problem need, and what would you change next time?**

**Who is affected if your app is wrong, and would they know?**
