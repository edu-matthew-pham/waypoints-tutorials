---
order: 8
unit: ai
title: What did the AI say?
summary: "An AI chatbot's answer is a source too, but one with no author to ask and often no link to where it came from. It writes what sounds likely, so it can be fluent, confident and wrong. Use the same checks as for any page: say the claim, leave the reply, and see whether places that would know agree. Asking the same AI again is not a check."
language: science
shape: 5e
hook: "You ask a chatbot when the Riverbend library opens on Saturday. It answers at once, sounding sure. Is that an answer, or a lead?"
---
An AI chatbot writes an answer by predicting words that are likely to come next. Likely is not the same as true. So an AI answer is a **source**, and an unusual one:

- It has **no author** you can look up, and often no link to where its facts came from.
- It sounds **sure** whether it is right or wrong.
- It may be **out of date** or mix up places with similar names.

Use the same checks as for any page: say the claim, **leave the reply**, and see whether places that would know agree.

The replies below are **scripted examples, not a real AI**. They were written for this lesson to show what AI answers can look like. How AI makes its answers is in [AI Foundations](../../../ai/foundations/).

> **You asked:** When does the Riverbend library open on Saturday?
>
> **Scripted reply (not a real AI):** The Riverbend Library is open on Saturdays from 10 am to 4 pm. It's a great place to visit at the weekend!

## Engage: answer or lead?

```step
stage: predict
insight: "Committing to what to do with the reply tests the move: an AI answer is a lead to check, not a check."
check:
  type: predict
  q: "What would you do with the scripted reply about the library?"
  options: ["Check it on the library's own page before going", "Go at 10 am: it sounded sure", "Ask the same AI if it is sure", "Ignore it completely"]
  actual: "Check it on the library's own page. In Search like you mean it, riverbend-library.example said Saturday 9 am to 1 pm. The reply gave the Riverbank library's hours, a place with a similar name. The reply was a useful lead to check, not an answer."
```

## Explore: sort the replies

```step
stage: run
insight: "Sorting scripted replies settles the prediction: some are fine, some are wrong, and some cannot be checked from the reply alone."
check:
  type: sort
  q: "Each reply is scripted, not a real AI. What would you do with each one?"
  options: ["Check it before using it", "Fine to use as it is, for this job"]
  items:
    - ["A date for when the Riverbend skate park opens.", "Check it before using it", "A fact that changes and that the council would know. Check it there."]
    - ["Three ideas for a name for your class's bean project.", "Fine to use as it is, for this job", "Ideas are not facts. You choose which to use."]
    - ["A quote from a famous scientist, with no source.", "Check it before using it", "Quotes are often made up or wrongly credited. Find where it was said."]
    - ["A suggestion to reword your sentence so it is shorter.", "Fine to use as it is, for this job", "You can read it and decide for yourself."]
    - ["The number of students at Riverbend Primary.", "Check it before using it", "The school would know. The AI may not."]
```

Was your guess right? AI help with ideas and wording is something you judge yourself. AI **facts**, numbers, dates and quotes need checking like any other source.

## Explain: check it like any source

```step
stage: investigate
insight: "Choosing the check, then a mistake planted after it, explains why asking again is not checking."
tasks:
  - check:
      type: question
      q: "A scripted reply says bean seeds sprout in about 2 days. What is the best way to check it?"
      options: ["Look it up in a place that would know, such as a garden club guide or a science book", "Ask the AI: Are you sure?", "Ask a different chatbot", "Trust it: it gave a number"]
      answer: 0
      feedback: [null, "The same AI may just say yes, or change its answer without a source. Neither is a check.", "Another chatbot works the same way and may repeat the same mistake. Find a place that would know.", "A number sounds exact. That is not the same as checked."]
      explain: "Leave the reply and find a place that would know. Asking an AI again is not an independent check."
  - check:
      type: bug
      code: "working.txt#eli"
      text: "Eli's report has a made-up quote in it. Click the line where Eli first goes wrong."
      answer: 3
      fault: logic
      misconception: ai-checks-itself
      explain: "Line 3: Eli asked the same AI whether the quote was real and took its 'yes' as a check. The AI cannot check itself. He needed to find where the scientist actually said it."
```

### Check the sprouting

### Find Eli's mistake

## Elaborate: a reply with a source

```step
stage: modify
insight: "A reply that names a source changes the task: the source can be checked, and it might not say what the reply says."
check:
  type: question
  q: "A scripted reply says: According to riverbend-council.example, the pool opens on 1 December. What should you do?"
  options: ["Open the council's page and see if it really says that", "Trust it: it named a source", "Ignore it: AI can't name sources", "Ask the AI for a second source"]
  answer: 0
  feedback: [null, "AI can name sources that don't exist or don't say what it claims. Open it.", "A named source is a good start: open it and check.", "The AI made the source line. You still have to open it."]
  explain: "A named source is something you can check. Open it: it might not exist, or it might say something else."
```

## Practise: how far to trust it?

```step
stage: practise
insight: "Matching replies to how far to trust them repeats the habit on new examples."
check:
  type: match
  q: "Match each scripted reply to what you would do."
  pairs:
    - ["A list of ideas for a poster title", "Choose the ones you like"]
    - ["A date and time for a school event", "Check the school's own page"]
    - ["A quote with no source", "Find where it was said, or leave it out"]
```

## Elaborate: should you use AI for this?

```step
stage: make
tier: wider
insight: "Deciding when AI help is worth it adds a context: the checking takes time too."
check:
  type: reasoning
  q: "You need three facts about bean plants for a poster due tomorrow. Would you ask an AI, use your science book, or both? Why?"
  models:
    - title: "A strong answer"
      text: "I would use my science book, because it is a source I can name and trust, and I would have to check AI facts in a book anyway. That saves time."
    - title: "A different view that also works"
      text: "I would ask an AI for ideas of what to look up, then find each fact in my book or on a page that would know. The AI helps me start; the book is what I credit."
  criteria: ["I chose a plan.", "I said where the facts would finally come from.", "I said why an AI answer on its own is not enough."]
  explain: "AI can help you start, but the facts you use need a source you can name and check."
```

## Evaluate: a lead, not a source to credit

```step
stage: info
check: { type: reflect, text: "I can explain why an AI answer is a lead to check, and why asking the same AI again is not checking." }
```

Go further with [AI Foundations › Check what AI tells you](../../../ai/foundations/checking-ai-claims/). Use AI only in the ways your teacher and school allow.
