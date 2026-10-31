---
title: "Learned from the past"
subtitle: "Who Does AI Affect? · Who decides? · Lesson 4"
---

# Learned from the past

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** A model trained on past decisions copies their patterns, including unfair ones. A hiring tool that learned from past hires shows how.


:::teacher-note

**In one sentence:** A model trained on past decisions copies their patterns. Amazon's experimental résumé tool marked down 'women's'; a 2024 test of AI résumé ranking favoured White-associated names; a health algorithm predicted cost instead of illness.

**Students should be able to say:** I can explain how a model that learns from past decisions can copy unfair patterns. I can name checks that help: test each group, a person who can overrule, and the right thing to predict. I can explain why hiding one word doesn't remove a bias.

**Width:** the unmarked parts are the floor every student does (Engage, Explore, Explain, Evaluate). Typical and Wider sections add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Engage


:::keep-together

**A made-up company trains a model on 10 years of its past hires. Almost all of them went to the same two schools. What will the model probably learn?**

☐ Nothing: it only reads skills

☐ People from those two schools are good hires

☐ Every school is equally good

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** It learns the pattern in its examples. If past hires mostly came from two schools, it may score people from those schools higher, even if the school has nothing to do with doing the job well.

:::


## Explore

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Explain: past decisions as examples

A model learns whatever pattern is in its examples. When the examples are **past decisions made by people**, it learns their patterns too, **fair or not**. This is **bias**: the model works worse for a group, because of its examples.

It can be hard to see, because nobody wrote the unfair rule down. That's why it matters to **test each group** and to have a **person who can overrule** it.

:::keep-together

### No bug

**The hiring tool's program had no bug. Where did the unfair pattern come from?**

☐ From the past hiring decisions it learned from

☐ From a rule a programmer wrote

☐ From the computer's speed

:::


:::teacher-note

**Answer:** From the past hiring decisions it learned from

:::


:::typical

## Elaborate: names on a résumé

In a 2024 study, researchers asked AI language models to rank **identical résumés** that had different names. The models favoured **White-associated names in 85% of cases**.

It was a **test**, not real hiring. Why is a test like this useful before a company uses a tool? Who should run it?

:::keep-together

**Researchers gave AI language models identical résumés with different names. In 85% of tests, the models favoured White-associated names. What does 'identical résumés' show?**

☐ Only the name changed, so the name caused the difference

☐ The models were picking the best skills

☐ The résumés were different

:::


:::teacher-note

**Answer:** Only the name changed, so the name caused the difference

:::

:::


:::wider

## Make: Elaborate: the wrong target

A US health algorithm chose patients for extra care. It predicted **how much a patient's care would cost**, as a stand-in for how sick they were. Researchers found that at the same score, **Black patients were considerably sicker** than White patients, because less had been spent on their care in the past.

The model predicted its target correctly. **The target was wrong.** What should it have predicted instead? Who would have caught this, and when? Use the lens.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


:::wider

## Evaluate: what would you check?

On paper: **"A model that learns from past decisions can be unfair because \_\_\_\_. Before using one, I'd check \_\_\_\_."**

**Next lesson:** AI that doesn't just decide, but **acts**.

:::


## Exit ticket

:::keep-together

**Why can a model trained on past hires be unfair even if its program has no bugs?**

{{lines-3}}

:::


:::teacher-note

**Answer:** It learns the patterns in past hiring decisions, including unfair ones, so it repeats them.

:::

