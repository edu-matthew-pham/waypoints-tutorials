---
title: Whose work trained it?
summary: "AI that makes content learned from huge amounts of people's work. Whether that's fair, and who should be paid, is being decided right now. A few things are settled in Australia."
language: science
shape: 5e
unit: who-pays
order: 8
voice: { name: af_heart, speed: 1.1 }
---
AI that makes pictures, music or text learned from **huge amounts of work made by people**: books, songs, drawings, articles. Did they agree? Should they be paid? **Courts and governments are deciding right now.**

**Kind of AI:** makes new content (generative AI).

## Engage: is it copying?

```step
stage: predict
check:
  type: predict
  q: "An app learned from thousands of artists' pictures, then makes new pictures. Is that copying?"
  options: ["Yes", "No", "People disagree, and the law is still being decided"]
  actual: "People disagree. Some say learning from work is like a student studying art. Others say the app used their work without asking or paying. Courts in different countries are deciding now."
```

## Explore: Lena's style

```step
stage: run
tasks:
  - check:
      type: sort
      q: "Lena is a made-up student artist. She posts her drawings online. Later she finds an app that makes pictures 'in the style of Lena'. Use the lens."
      options: ["Who gains?", "Who loses, or could be harmed?", "Who decides?", "What's the catch?"]
      items:
        - ["People who want pictures in Lena's style without paying her", "Who gains?"]
        - ["Lena, if people use the app instead of asking her", "Who loses, or could be harmed?"]
        - ["The app's makers, who chose what to train it on", "Who decides?"]
        - ["The law on training AI with people's work is still being decided", "What's the catch?"]
  - check:
      type: question
      q: "In Australia, copyright needs a human author. If someone types a prompt and the app makes a picture with no other human work, who owns the copyright?"
      options: ["Probably nobody: there may be no human author", "The app", "Lena, automatically"]
      answer: 0
      feedback: [null, "An app can't be an author under Australian law.", "Lena didn't make this picture. Her work may have been used to train the app, which is a different question."]
```

What is settled enough to say in Australia (2026):

1. **Copyright needs a human author.** An Australian court said copyright can exist only if the work comes from a person. Pure AI output probably has **no copyright**. (No Australian court has tested this for AI yet.)
2. **No special exception for AI training.** The Australian Government said in 2025 it will **not** add a "text and data mining" exception that would let AI companies use people's work freely. How AI companies might pay creators is still being worked out.

### Lena's case

Sort each part.

### Who owns it?

Use rule 1.

## Explain: decided now

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Why is 'Is AI training fair?' still an open question?"
      options: ["Courts and governments in different countries are deciding it now, and they don't all agree", "It's been settled everywhere", "Nobody cares about it"]
      answer: 0
      feedback: [null, "Some parts are settled in some places, but not everywhere.", "Artists, companies and governments care a lot."]
  - check: { type: reflect, text: "I can explain why the law on AI training is being decided now, and say two things that are settled in Australia." }
```

When something is **being decided now**, a good answer says:

- what **is** settled (in Australia: copyright needs a human author; no special training exception);
- what **isn't** (whether training on people's work is fair everywhere, and how creators get paid);
- **who decides** (courts, governments, and sometimes deals between companies and creators).

### Still open

Why isn't it settled?

### Explain it

Name two settled things and one open question.

## Elaborate: musicians and authors

```step
stage: modify
tier: typical
check:
  type: question
  q: "A US court approved a US$1.5 billion settlement to authors whose books were taken from pirate websites to train an AI. The judge had said training itself could be fair use, but the pirated copies were not. What does that tell you?"
  options: ["How the work was obtained mattered, not only how it was used", "Training AI is always illegal", "Authors lost the case"]
  answer: 0
  feedback: [null, "The judge said training could be fair use. The pirated copies were the problem.", "The authors were paid about US$3,000 per book."]
```

- **Music:** in a 2024 survey by APRA AMCOS, **82%** of Australian and New Zealand music creators were worried about **no longer being able to make a living** because of AI.
- **Books:** in the US case **Bartz v Anthropic**, the judge ruled that training on books could be fair use, but **copies taken from pirate websites** were not. In July 2026 the court approved a **US$1.5 billion** settlement, about **US$3,000 per book**.

(Anthropic makes the AI Claude.) Use the lens on the authors' case: who gained, who lost, who decided?

## Elaborate: is learning the same as copying?

```step
stage: make
tier: wider
check: { type: reflect, text: "I argued both sides of 'is training AI on people's work fair?', and said what evidence or rule would change my mind." }
```

Argument for: people learn by studying others' work too, and the AI makes something new. Argument against: an AI can learn from millions of works in days, without asking or paying, then compete with the people it learned from.

Write the strongest case for each side. Then: what should creators get (a choice, payment, credit)? Who should decide: courts, governments, or deals between companies and creators? What would change your mind?

## Evaluate: your rule

```step
stage: info
check:
  type: question
  q: "Your school's art club wants to use an AI image app for posters. What's the best question to ask first?"
  options: ["What was it trained on, and do the creators get a choice or payment?", "How fast does it make pictures?", "Does it have lots of colours?"]
  answer: 0
  feedback: [null, "Speed says nothing about whose work it used.", "That says nothing about whose work it learned from."]
```

On paper: **"AI that makes content learned from \_\_\_\_. In Australia, it's settled that \_\_\_\_. Still being decided: \_\_\_\_."**

**Next unit:** what AI is doing to jobs, and how people make rules.
