---
marp: true
theme: default
html: true
---

# Energy and water

Who Does AI Affect? · Who pays the cost?

<!-- Speaker note: Per-prompt energy (about 0.24–0.34 Wh in 2025 estimates; images far more) versus rising totals; water per prompt from 0.26 mL to about 50 mL depending on what is counted; global versus local. Every figure is a dated estimate. About 40 minutes. -->

---

## Today

**We are learning to** one AI prompt uses a little energy and water, but billions add up, totals are rising, and the numbers are estimates that depend on what is counted. Work with dated ranges, not one number.

- I can work out the energy for many prompts from a per-prompt estimate.
- I can explain why one prompt can be small while the total is large and rising.
- I can explain why AI energy and water figures differ: who measured, when, and what they counted.

<!-- Speaker note: Before class: **Core idea:** small each, big in total; every figure is a dated estimate. Kind: mostly generative AI; data-centre totals include all computing. **Last checked 18 Oct 2026. Re-check every January, and AEMO after each Electricity Statement of Opportunities (ESOO, August).** Figures move fast; update the table and the wider step together. Sources (research brief claims 21–33): - IEA, Energy and AI (10 Apr 2025): about 1.5% of world electricity in 2024; smaller share of demand growth than air conditioning or EVs. https://www.iea.org/reports/energy-and-ai/executive-summary - IEA, Key Questions on Energy and AI (16 Apr 2026): 485 TWh in 2025 to about 950 TWh in 2030. https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary - Google (Elsworth et al., 21 Aug 2025, own measurement, not peer reviewed): median Gemini text prompt 0.24 Wh, 0.26 mL water (on-site cooling). https://arxiv.org/abs/2508.15734 - Epoch AI (7 Feb 2025, outside estimate): about 0.3 Wh, plausible range 0.1–4 Wh. https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use - OpenAI (Altman blog, Jun 2025): 0.34 Wh, no method given. https://blog.samaltman.com/the-gentle-singularity - EPRI (May 2024, citing de Vries 2023): 2.9 Wh per ChatGPT request (older chips, longer answers; now likely too high for short prompts). The student table says "2023" for the estimate itself. - Luccioni et al. (FAccT 2024): image generation used over 60 times the energy of text generation (averaged over the tasks and models tested). https://arxiv.org/abs/2311.16863 - Li et al., Making AI Less Thirsty (CACM 2025): 500 mL per roughly 10–50 medium-length GPT-3 responses, including power-station water. Cite this version, not the viral 2023 preprint's "20–50 questions". https://arxiv.org/abs/2304.03271 - Google 2026 Environmental Report: water consumption up 34% from 2024 to 2025. https://sustainability.google/files/google-2026-environmental-report.pdf - AEMO 2026 ESOO (25 Aug 2026): NEM data centres to 34 TWh by 2035–36; the previous year's forecast put that level at 2050. https://www.aemo.com.au/newsroom/media-release/2026-esoo - Reuters (Sep 2025), via a syndicated copy: up to a quarter of Sydney's available water by 2035 (one projection; Sydney Water figures differ). https://malaymail.com/news/world/2025/09/15/data-centres-are-booming-in-sydney-but-whos-keeping-track-of-how-much-drinking-water-theyre-using/191230 The LED comparison is plain arithmetic (10 W for 1 hour = 10 Wh), not from a source. Avoid both "AI is destroying the planet" and "it's nothing". The lesson's habit: who measured, when, what was counted. Idea credit: Day of AI's Grade 8 "The Real Cost of AI" (dayofai.org) is an optional class extra; refresh its figures before use. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Should schools count AI's energy and water when deciding whether to use it?**

- Compared with what: a search, a video, printing worksheets?
- Who pays the cost: the school, the city near the data centre, everyone?

<!-- Speaker note: Push for comparisons and for 'who measured it'. Students can disagree on the answer; they should agree on how to read the numbers. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Engage: predict

**Does one short question to a chatbot use more or less energy than leaving a small LED light on for an hour?**

- Less
- Much more
- About the same

<!-- Speaker note: What happens: Recent estimates (2025) say less: about 0.24 to 0.34 watt-hours for a short text prompt. A 10-watt LED light uses 10 watt-hours in an hour. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: lock in guesses; most students guess 'much more'. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Guess the cost <span style="font-size:.6em;color:#64748b">(3 min)</span>

Hold up fingers: 1 = less than an LED light for an hour, 2 = about the same, 3 = much more.

<!-- Speaker note: Record the votes to revisit at the end. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Recent estimates (2025) say less: about 0.24 to 0.34 watt-hours for a short text prompt. A 10-watt LED light uses 10 watt-hours in an hour.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Explore it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/ai/who-does-ai-affect/energy-and-water/?full=step-2#step-2](https://tutorials.learningwaypoints.com/ai/who-does-ai-affect/energy-and-water/?full=step-2#step-2)

<!-- Speaker note: What people have estimated for **one short text prompt** to a chatbot: | Who | When | Estimate | |---|---|---| | An older outside estimate | 2023 | about 2.9 Wh | | Epoch AI (outside researchers) | 2025 | about 0.3 Wh (could be 0.1 to 4) | | Google, for its own chatbot | 2025 | 0.24 Wh | | OpenAI, for its own chatbot | 2025 | 0.34 Wh (no method given) | Companies measured their own systems. Nobody outside can fully check those figures. Longer answers, "thinking" models and images use **far more**. -->

<!-- Speaker note: Teacher: the class calculation, then the table: who measured and when. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Why worry?

**One prompt uses little energy. Why do people still worry?**

- Billions of prompts add up, and data centres' total use is rising fast
- They don't: it's a myth
- Each prompt uses as much as a house

* Answer: Billions of prompts add up, and data centres' total use is rising fast

<!-- Speaker note:  -->

<!-- Speaker note: Teacher: 'each' versus 'total' on the board. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Each and total <span style="font-size:.6em;color:#64748b">(5 min)</span>

In pairs, write one sentence that starts "Each prompt…" and one that starts "In total…". Share three.

<!-- Speaker note: Both sentences can be true at once; that's the point. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Per answer

**One study said a 500 mL bottle of water for about 10 to 50 medium-length answers. At the low end (50 answers per bottle), how many mL is one answer?**

* Answer: 10

<!-- Speaker note: 500 ÷ 50 = 10 mL. At the high end, 500 ÷ 10 = 50 mL. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Why so different?

**Google says 0.26 mL per prompt. The study says 10 to 50 mL. Why so different?**

- Google's prompts are smaller
- One of them can't do maths
- They counted different water: cooling in the building only, or also water used to make the electricity

* Answer: They counted different water: cooling in the building only, or also water used to make the electricity

<!-- Speaker note:  -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 28px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: Elaborate: global and local

- The International Energy Agency (IEA): data centres used about **1.5% of the world's electricity** in 2024, and use is projected to **roughly double from 485 TWh in 2025 to 950 TWh in 2030**. Data centres are a **smaller share of demand growth** than air conditioning or electric vehicles.
- AEMO (Australia's energy market operator, Aug 2026): data centres on the east-coast grid are forecast to reach **34 TWh by 2035–36**. A year earlier it put that level much later.
- A Reuters report (2025): data centres could use **up to a quarter of Sydney's available water by 2035** (one projection).

Why can something be small for the world but large for one city? Who decides where a data centre is built, and who should get a say? Why do forecasts like these change so fast?

<!-- Speaker note: For students who need more support: Give the per-prompt table with a blank 'what did they count?' column to fill in. For early finishers: Estimate your school's prompts in a day, with a low and a high figure. What would you need to know to be more sure? The hard part, on purpose: Students want one true number. The skill is reading a dated range and asking what was counted. When students get stuck: A student multiplies only 25 × 0.3. Ask: How many prompts are there altogether? Fix: 25 students × 20 prompts = 500, then × 0.3 Wh. / A student says the companies' numbers must be lies. Ask: What did each one measure, and can anyone check it? Fix: They can be honest and still not independently checked; that's why we date them and look for outside estimates. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 20px; }</style>

---

## Evaluate: read a claim

On paper: **"One prompt uses \_\_\_\_, but the total matters because \_\_\_\_. When I see an AI energy number, I ask \_\_\_\_."**

**Next lesson:** a cost that is about people, not power.

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Why can one AI prompt use little energy while AI's total energy use still matters?**

* Each prompt is small, but billions of prompts, images and models add up, and the total is rising.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Lesson 7: the people who label data for AI. -->
