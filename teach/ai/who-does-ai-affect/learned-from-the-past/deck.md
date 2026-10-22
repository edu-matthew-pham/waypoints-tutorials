---
marp: true
theme: default
html: true
---

# Learned from the past

Who Does AI Affect? · Who decides?

<!-- Speaker note: A model trained on past decisions copies their patterns. Amazon's experimental résumé tool marked down 'women's'; a 2024 test of AI résumé ranking favoured White-associated names; a health algorithm predicted cost instead of illness. About 40 minutes. -->

---

## Today

**We are learning to** a model trained on past decisions copies their patterns, including unfair ones. A hiring tool that learned from past hires shows how.

- I can explain how a model that learns from past decisions can copy unfair patterns.
- I can name checks that help: test each group, a person who can overrule, and the right thing to predict.
- I can explain why hiding one word doesn't remove a bias.

<!-- Speaker note: Before class: **Core idea:** past decisions are examples, so a model learns their patterns, fair or not. Kind: learns to predict or sort. Builds on AI Foundations › Why does AI make mistakes? (bias as missing or rare examples). Sources (checked 18 Oct 2026, research brief claims 17–19): - Reuters (Dastin), 10 Oct 2018, read via Euronews's verbatim copy: https://www.euronews.com/2018/10/10/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women. Anonymous sources; recruiters reportedly never relied on it alone. Use it as a hook, not as proof of harm to any individual. The "women's chess club captain" example is from the Reuters report. - Wilson and Caliskan (2024), AIES, abstract only: language-model résumé screening favoured White-associated names in 85.1% of cases (a simulation, not real hiring). https://ojs.aaai.org/index.php/AIES/article/view/31748 - Obermeyer et al. (2019), Science, abstract: "At a given risk score, Black patients are considerably sicker". https://www.science.org/doi/10.1126/science.aax2342 Race and gender come up. Keep the focus on the examples and the target, not on any group's abilities. The engage case (two schools) is made up and neutral on purpose. Idea credit: Day of AI's Grade 8 "Who Gets Left Out By AI?" (dayofai.org, CC BY-NC-SA 4.0) is an optional class extra. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**If a hiring model is less biased than the people it replaces, should a company use it?**

- Compared with what?
- Who can check a person's choices, and who can check a model's?

<!-- Speaker note: Fair question: people are biased too. Bring out that a model's bias applies at scale and is invisible until tested, while a model can also be tested in ways people can't. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Engage: predict

**A made-up company trains a model on 10 years of its past hires. Almost all of them went to the same two schools. What will the model probably learn?**

- Nothing: it only reads skills
- People from those two schools are good hires
- Every school is equally good

<!-- Speaker note: What happens: It learns the pattern in its examples. If past hires mostly came from two schools, it may score people from those schools higher, even if the school has nothing to do with doing the job well. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: link to the fruit sorter: same mechanism, now the examples are people's decisions. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* It learns the pattern in its examples. If past hires mostly came from two schools, it may score people from those schools higher, even if the school has nothing to do with doing the job well.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Explore it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/ai/who-does-ai-affect/learned-from-the-past/?full=step-2#step-2](https://tutorials.learningwaypoints.com/ai/who-does-ai-affect/learned-from-the-past/?full=step-2#step-2)

<!-- Speaker note: In 2018, Reuters reported that **Amazon** had built an experimental tool to rate job applicants' résumés. It learned from **résumés the company had received over ten years**, mostly from men. It **marked down résumés that included the word "women's"**. Amazon stopped using the tool. (The report relied on people who weren't named. Recruiters reportedly never relied on the tool alone.) -->

<!-- Speaker note: Teacher: the 'hide the word' card is the key misconception; ask what other clues point to the same group. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Be the hiring model <span style="font-size:.6em;color:#64748b">(6 min)</span>

Your group gets ten past-hire cards. Find a pattern in who was hired. Then score three new applicants using only that pattern.

<!-- Speaker note: Make the past-hire cards share an irrelevant feature (same sport, same suburb). Groups will 'learn' it. Ask: is that feature about doing the job? -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## No bug

**The hiring tool's program had no bug. Where did the unfair pattern come from?**

- From the past hiring decisions it learned from
- From a rule a programmer wrote
- From the computer's speed

* Answer: From the past hiring decisions it learned from

<!-- Speaker note:  -->

<!-- Speaker note: Teacher: name it bias, and the two checks. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Elaborate: names on a résumé

**Researchers gave AI language models identical résumés with different names. In 85% of tests, the models favoured White-associated names. What does 'identical résumés' show?**

- Only the name changed, so the name caused the difference
- The models were picking the best skills
- The résumés were different

* Answer: Only the name changed, so the name caused the difference

<!-- Speaker note:  -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 28px; }</style>

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Who should test it? <span style="font-size:.6em;color:#64748b">(4 min)</span>

The company selling a hiring tool, the company using it, or someone else: who should test it, and why?

<!-- Speaker note: Lesson 10 comes back to rules that require audits (wider). -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: Elaborate: the wrong target

A US health algorithm chose patients for extra care. It predicted **how much a patient's care would cost**, as a stand-in for how sick they were. Researchers found that at the same score, **Black patients were considerably sicker** than White patients, because less had been spent on their care in the past.

The model predicted its target correctly. **The target was wrong.** What should it have predicted instead? Who would have caught this, and when? Use the lens.

<!-- Speaker note: For students who need more support: Give a two-column table: what the model learned from, what it then did. For early finishers: Who should test a hiring tool: the company that sells it, the company that uses it, or someone else? Why? The hard part, on purpose: Students expect a biased model to have a biased rule written in it. The rule is learned, so it's invisible until you test. When students get stuck: A student says the programmers must have been sexist. Ask: Did anyone write 'mark down women's'? Where did the pattern come from? Fix: It came from the past examples. People are still responsible for choosing the examples and testing the tool. / A student thinks hiding the word fixes it. Ask: What else on a résumé might show the same thing? Fix: Other clues (a girls' school, a sport) can stand in for the hidden word; test each group instead. -->

---

## Evaluate: what would you check?

On paper: **"A model that learns from past decisions can be unfair because \_\_\_\_. Before using one, I'd check \_\_\_\_."**

**Next lesson:** AI that doesn't just decide, but **acts**.

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Why can a model trained on past hires be unfair even if its program has no bugs?**

* It learns the patterns in past hiring decisions, including unfair ones, so it repeats them.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Lesson 5: AI that takes actions, and who is responsible. -->
