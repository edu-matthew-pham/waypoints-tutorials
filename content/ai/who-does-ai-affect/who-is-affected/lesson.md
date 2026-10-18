---
title: Who is affected, and how?
summary: "Build the course's lens on a real system that helps people (AI in breast screening): who gains, who loses, who decides, and what's the catch?"
language: science
shape: 5e
unit: who-is-affected
order: 2
voice: { name: af_heart, speed: 1.1 }
---
Every system affects more people than the ones who use it. This lesson builds the **lens** you'll use in every lesson of this course. It has four questions:

1. **Who gains?**
2. **Who loses, or could be harmed?**
3. **Who decides** whether it is used?
4. **What's the catch?** What don't we know yet?

We start with a system that helps people, because a benefit needs the lens too.

## Engage: who does it affect?

```step
stage: predict
check:
  type: predict
  q: "A hospital starts using AI to help check breast-screening scans for signs of cancer. Who does that affect?"
  options: ["Only the doctors who read the scans", "The doctors, the patients, and others too", "Nobody: it's just a computer program"]
  actual: "Many people: the doctors, the women being screened and their families, the hospital, and the people who decide whether to use it."
```

## Explore: a real case

```step
stage: run
tasks:
  - check:
      type: sort
      q: "Put each fact or worry under one of the four lens questions."
      options: ["Who gains?", "Who loses, or could be harmed?", "Who decides?", "What's the catch?"]
      items:
        - ["In the study, doctors had about 44% fewer scans to read themselves", "Who gains?", "Less reading time frees doctors for other work."]
        - ["The study found no more false alarms than usual", "Who gains?", "Women weren't called back for worry they didn't need."]
        - ["A patient whose cancer the AI misses, if no doctor checks that scan closely", "Who loses, or could be harmed?", "A missed cancer is the harm everyone worries about."]
        - ["The health service, which chooses whether to use it and how", "Who decides?", "Patients usually don't choose which tools read their scan."]
        - ["It was one study, in one country, with one AI system", "What's the catch?", "Would it work the same way somewhere else?"]
  - check:
      type: question
      q: "A news story says: 'AI beats doctors at finding cancer.' Is that what this study showed?"
      options: ["No: it showed AI could cut doctors' reading work without more false alarms, in one study", "Yes: the AI found every cancer", "Yes: the AI replaced the doctors"]
      answer: 0
      feedback: [null, "The study didn't say the AI found every cancer.", "Doctors still read the scans. The AI changed how much reading they did."]
```

In Sweden, a large study tested AI as a helper in breast screening. Normally two doctors read each scan. With the AI's help, doctors had to read **about 44% fewer scans themselves**, and there were **no more false alarms** than usual. The study was published in 2023.

### Use the lens

Sort each fact or worry.

### Check the headline

Does the headline match the study?

## Explain: the catch

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Why does 'one study, one country, one AI system' matter?"
      options: ["Another hospital, with other patients or another system, might not get the same result", "It means the study was wrong", "It doesn't matter: AI works the same everywhere"]
      answer: 0
      feedback: [null, "A study can be careful and right, and still not show what happens elsewhere.", "AI learns from examples, so it can work differently for patients unlike its examples."]
  - check: { type: reflect, text: "I can use the four lens questions on a real system, including one that helps people." }
```

A benefit is real, but it still has a **for whom** and a **catch**. Remember from AI Foundations: a model can work worse for people who were rare in its examples. A good question about any helpful AI is: **who was it tested on?**

### One study

Why might the result change somewhere else?

### The lens

Say the four questions from memory.

## Elaborate: a second case

```step
stage: modify
tier: typical
check:
  type: question
  q: "In a 2026 study of skin-cancer checks, specialist doctors did better than the AI. The researchers said AI should complement, not replace, specialists. What does 'complement' mean here?"
  options: ["Help the specialist, who still makes the decision", "Replace the specialist when they are busy", "Do nothing at all"]
  answer: 0
  feedback: [null, "The study found the specialists were more accurate, so the AI shouldn't make the call alone.", "The study found AI can help, but not on its own."]
```

Apps and tools that check moles for skin cancer have been tested many times. In one 2026 Australian study, **specialist doctors were more accurate than the AI**. The researchers said AI should **help** specialists, not replace them.

Use the lens: who might gain from a skin-check app? Who could be harmed if they trusted it alone?

## Elaborate: forecasts

```step
stage: make
tier: wider
check: { type: reflect, text: "I compared two weather-forecasting claims and explained why checking who uses what matters." }
```

The European weather centre (ECMWF) says its AI forecast model, in use since 2025, **beats its physics-based models on many measures**. Australia's Bureau of Meteorology says it does **not** use neural network systems in its forecasts.

Who gains from better, cheaper forecasts? Who decides whether a weather service uses AI? Why is it worth checking a claim like "AI now forecasts our weather" for one country before repeating it?

## Evaluate: your lens

```step
stage: info
check:
  type: question
  q: "A school tests an AI that suggests which students need extra help with reading. Which question is the catch?"
  options: ["Was it tested on students like ours, and does a teacher check its suggestions?", "Does it have a nice name?", "Is it made by a big company?"]
  answer: 0
  feedback: [null, "A name says nothing about who it works for.", "Big companies can still build tools that don't fit a particular school."]
```

On paper, draw the lens as four boxes. Fill them in for the reading AI: **gains, loses, decides, catch.**

**Next lesson:** what happens when a system decides something about you.
