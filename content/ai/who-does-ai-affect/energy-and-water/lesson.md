---
title: Energy and water
summary: "One AI prompt uses a little energy and water, but billions add up, totals are rising, and the numbers are estimates that depend on what is counted. Work with dated ranges, not one number."
language: science
shape: 5e
unit: who-pays
order: 6
voice: { name: af_heart, speed: 1.1 }
---
AI runs on computers in big buildings called **data centres**. They use electricity, and many use water to keep cool. **How much does one prompt cost, and does it matter?**

**Kind of AI:** mostly AI that makes new content (chatbots, image makers). Data-centre totals include every kind of computing, not just AI.

## Engage: guess first

```step
stage: predict
check:
  type: predict
  q: "Does one short question to a chatbot use more or less energy than leaving a small LED light on for an hour?"
  options: ["Less", "About the same", "Much more"]
  actual: "Recent estimates (2025) say less: about 0.24 to 0.34 watt-hours for a short text prompt. A 10-watt LED light uses 10 watt-hours in an hour."
```

## Explore: do the maths

```step
stage: run
tasks:
  - check:
      type: number
      q: "Use 0.3 watt-hours (Wh) per short prompt. A class of 25 students each asks 20 short questions. How many Wh is that?"
      answer: 150
      feedback: [["500", "That's the number of prompts. Now multiply by 0.3 Wh."], ["7.5", "25 × 0.3 is one question each. Each student asks 20."]]
      explain: "25 × 20 = 500 prompts. 500 × 0.3 Wh = 150 Wh: about the same as a 10-watt LED light on for 15 hours."
  - check:
      type: question
      q: "Researchers measured many AI tasks. Which used far more energy?"
      options: ["Making an image", "Writing a short text answer", "They used about the same"]
      answer: 0
      feedback: [null, "Text was the cheaper task. Images used more than 60 times as much in that study.", "In the study, making images used over 60 times the energy of making text."]
  - check:
      type: question
      q: "An older estimate (2023) said about 2.9 Wh per chatbot request. Newer ones (2025) say about 0.24–0.34 Wh. Why might they differ?"
      options: ["Newer chips, shorter answers, and different ways of measuring", "One of them must be a lie", "Electricity got cheaper"]
      answer: 0
      feedback: [null, "Estimates can differ honestly: they measure different things at different times.", "Price doesn't change how much energy is used."]
```

What people have estimated for **one short text prompt** to a chatbot:

| Who | When | Estimate |
|---|---|---|
| An older outside estimate | 2023 | about 2.9 Wh |
| Epoch AI (outside researchers) | 2025 | about 0.3 Wh (could be 0.1 to 4) |
| Google, for its own chatbot | 2025 | 0.24 Wh |
| OpenAI, for its own chatbot | 2025 | 0.34 Wh (no method given) |

Companies measured their own systems. Nobody outside can fully check those figures. Longer answers, "thinking" models and images use **far more**.

### Your class

Multiply it out.

### Images

Which task costs more?

### Why so different?

Two estimates, years apart.

## Explain: small each, big in total

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "One prompt uses little energy. Why do people still worry?"
      options: ["Billions of prompts add up, and data centres' total use is rising fast", "Each prompt uses as much as a house", "They don't: it's a myth"]
      answer: 0
      feedback: [null, "One prompt uses little. The worry is the total.", "The total is real and rising, even if each prompt is small."]
  - check: { type: reflect, text: "I can explain why one prompt can be small while the total is large, and why AI energy figures come as dated ranges." }
```

Two things are true at once:

- **Each prompt** uses a little energy, and newer systems use less per prompt.
- **The total** is large and rising, because so many prompts, images and models run every day.

Every figure is an **estimate** with a **date**. Always ask: **who measured it, when, and what did they count?**

### Why worry?

Small each, but…

### Explain it

Use the words "each" and "total".

## Elaborate: water

```step
stage: modify
tier: typical
tasks:
  - check:
      type: number
      q: "One study said a 500 mL bottle of water for about 10 to 50 medium-length answers. At the low end (50 answers per bottle), how many mL is one answer?"
      answer: 10
      explain: "500 ÷ 50 = 10 mL. At the high end, 500 ÷ 10 = 50 mL."
  - check:
      type: question
      q: "Google says 0.26 mL per prompt. The study says 10 to 50 mL. Why so different?"
      options: ["They counted different water: cooling in the building only, or also water used to make the electricity", "One of them can't do maths", "Google's prompts are smaller"]
      answer: 0
      feedback: [null, "Both did the maths. They counted different things.", "The big difference is what each one counted."]
```

Data centres use water to keep their computers cool, and power stations use water too.

- **Google** (2025): **0.26 mL** per prompt, counting only cooling inside its data centres.
- **A research study** (2025): a **500 mL bottle for about 10 to 50 medium-length answers**, counting water at power stations too.
- Google's **total** water use still rose **34%** in one year (2024 to 2025).

### Per answer

Divide it.

### Why so different?

What did each one count?

## Elaborate: global and local

```step
stage: make
tier: wider
check: { type: reflect, text: "I explained why data centres can be small globally but large locally, using dated figures." }
```

- The International Energy Agency (IEA): data centres used about **1.5% of the world's electricity** in 2024, and use is projected to **roughly double from 485 TWh in 2025 to 950 TWh in 2030**. Data centres are a **smaller share of demand growth** than air conditioning or electric vehicles.
- AEMO (Australia's energy market operator, Aug 2026): data centres on the east-coast grid are forecast to reach **34 TWh by 2035–36**. A year earlier it put that level much later.
- A Reuters report (2025): data centres could use **up to a quarter of Sydney's available water by 2035** (one projection).

Why can something be small for the world but large for one city? Who decides where a data centre is built, and who should get a say? Why do forecasts like these change so fast?

## Evaluate: read a claim

```step
stage: info
check:
  type: question
  q: "A post says: 'Every ChatGPT question uses a whole bottle of water!' What is the best response?"
  options: ["Estimates range from under 1 mL to about 50 mL per answer, depending on what's counted and when", "True: every question uses 500 mL", "False: AI uses no water"]
  answer: 0
  feedback: [null, "The bottle was for about 10 to 50 answers, not one.", "Data centres and power stations do use water."]
```

On paper: **"One prompt uses \_\_\_\_, but the total matters because \_\_\_\_. When I see an AI energy number, I ask \_\_\_\_."**

**Next lesson:** a cost that is about people, not power.
