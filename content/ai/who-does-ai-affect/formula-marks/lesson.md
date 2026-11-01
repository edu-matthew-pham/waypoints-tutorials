---
title: When a formula marks you
summary: "In 2020 a formula changed many English students' exam grades. One rule applied to everyone can be unfair to some groups, so people need a way to appeal."
language: science
shape: 5e
unit: who-decides
order: 3
voice: { name: af_heart, speed: 1.1 }
---
In 2020, exams in England were cancelled because of COVID-19. Teachers predicted their students' grades. Then a **formula** adjusted those grades. Within days, the results were thrown out. **What went wrong, and for whom?**

**Kind of AI:** rules written by people. The formula was designed by people. It didn't learn from examples.

## Engage: fair or not?

```step
stage: predict
check:
  type: predict
  q: "Your teacher predicts you'll get an A. A formula lowers it to a B, because students at your school didn't get many As in past years. Is that fair?"
  options: ["Fair: it keeps grades the same as other years", "Unfair: it judges me by other students", "It depends on who it's fair to"]
  actual: "People still argue about it. It kept the overall grades close to other years, but it judged some students by their school's past, not by their own work."
```

## Explore: what the formula did

```step
stage: run
tasks:
  - check:
      type: question
      q: "For small classes (15 students or fewer), the formula relied more on the teachers' grades. Which students were more likely to keep their teacher's grade?"
      options: ["Students in small classes", "Students in large classes", "Every student equally"]
      answer: 0
      feedback: [null, "Large classes had the formula's adjustment applied more strongly.", "The rule treated small and large classes differently."]
  - check:
      type: sort
      q: "Use the lens. Where does each one go?"
      options: ["Who gains?", "Who loses, or could be harmed?", "Who decides?", "What's the catch?"]
      items:
        - ["Students in small classes, who more often kept their teacher's grade", "Who gains?"]
        - ["A strong student at a school with low past results, whose grade was lowered", "Who loses, or could be harmed?"]
        - ["The exams regulator (Ofqual), which designed and used the formula", "Who decides?"]
        - ["The formula used the school's past results, not the student's own work", "What's the catch?"]
```

What happened, step by step:

1. Teachers predicted each student's grade.
2. A formula, designed by England's exams regulator **Ofqual**, adjusted the grades using each school's results in past years.
3. For **small classes**, it relied more on the teachers' grades. For **large classes**, the school's past results counted more.
4. About **39%** of the teachers' grades were **lowered**.
5. Four days later, Ofqual dropped the formula's grades and apologised: "we are extremely sorry".

### Small classes

Read step 3 again.

### Use the lens

Sort each one.

## Explain: one rule for everyone

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Why did one formula feel so unfair to so many people at once?"
      options: ["One rule hit everyone, and some groups did worse", "The computer got its sums wrong", "It learned from the wrong examples"]
      answer: 0
      feedback: [null, "The maths worked as designed. The rule was the problem.", "It didn't learn: people designed it. The rule itself was the problem."]
      explain: "The formula worked as designed. It applied the same rule to every student at once, so where the rule was unfair to some groups, it was unfair to all of them together."
  - check:
      type: question
      q: "What would have helped a student who thought their grade was wrong?"
      options: ["A way to appeal to a person who looks at their work", "Running the formula again to check", "Trusting the formula: it treats everyone equally"]
      answer: 0
      feedback: [null, "Running the same rule again gives the same answer. A person can look at one student's work.", "The same rule for everyone can still be unfair to some groups."]
      explain: "A quick, fair appeal to a person who looks at the student's own work can catch what a rule for everyone misses."
  - check: { type: reflect, text: "I can explain how one rule applied to everyone can be unfair to some groups, and why people need a way to appeal." }
```

A rule written by people goes wrong in a special way: **it goes wrong for everyone at once.** And a group can lose out even when nobody meant it to.

That is why automated decisions about people need:

- a **person who checks**, especially when the result is surprising;
- a **way to appeal** that is quick and fair;
- someone who is **responsible** for the rule.

### Everyone at once

Why was it so many people?

### Appeal

What would a student need?

### Explain it

Say it in your own words.

## Elaborate: a job decided by tests

```step
stage: modify
tier: typical
check:
  type: question
  q: "In 2021–22, Services Australia ran a promotion round using AI-assisted and automated tests, with no interview panel. Eleven promotions were overturned on review. What does the review show?"
  options: ["Decisions could be checked, and some were wrong", "The automated tests were always right", "Reviews only slow things down for no reason"]
  answer: 0
  feedback: [null, "Eleven promotions were overturned, so they weren't always right.", "The review is what caught the problem."]
  explain: "Because people could ask for a review, someone checked the decisions and 11 promotions were overturned."
```

Services Australia, a government agency, used **AI-assisted and automated** tests to decide who got promoted, with **no interview panel**. People could ask for a review. The Merit Protection Commissioner **overturned 11 promotions**.

Use the lens: who decides here? What's the catch? (The report criticised the whole process, not just the AI part.)

## Elaborate: Robodebt

```step
stage: make
tier: wider
check: { type: reflect, text: "I compared Robodebt with the exam formula and explained what both needed." }
```

Australia's **Robodebt** scheme used a computer calculation to send people debt notices. The Royal Commission called it "a crude and cruel mechanism, neither fair nor legal". It used no AI: it was a rule written by people, used on many people at once.

Compare Robodebt with the 2020 exam formula. What did each get wrong? What did each need: a person who checks, a fair appeal, someone responsible? Why can "automated" be dangerous even without AI?

## Evaluate: decide the rule

```step
stage: info
check:
  type: question
  q: "Your school plans to use a computer formula to choose students for a special program. What is the most important thing to add?"
  options: ["A person who checks results, and a way to appeal", "Run the formula twice to be sure", "Keep the formula secret so nobody argues"]
  answer: 0
  feedback: [null, "Running the same rule twice gives the same answer, fair or not.", "Secrecy makes it harder to spot an unfair rule."]
  explain: "A person who checks surprising results, and a fair way to appeal, can catch where the formula is unfair to someone."
```

On paper: **"If a formula decided something about me, I would want \_\_\_\_ because \_\_\_\_."**

**Next lesson:** what happens when a model **learns** from past decisions.
