---
title: Which kind of AI is it?
summary: "A short recap of the four kinds of AI from AI Foundations, using the apps and tools in this course, so you know where to look when something goes wrong."
language: science
shape: 5e
unit: built-to-keep-you
order: 1
voice: { name: af_heart, speed: 1.1 }
---
This course is about the AI inside everyday apps. Before asking what it does to you, ask **what kind** it is. (You met the four kinds in [AI Foundations › What kind of AI is it?](../../foundations/kinds-of-ai/).)

## Engage: what's in your apps?

```step
stage: predict
check:
  type: predict
  q: "A video app picks your next video. Is it following a rule a person wrote, or something else?"
  options: ["A rule a person wrote", "A model that learned from what people watched", "A chatbot writing a list"]
  actual: "Usually a model that learned from what millions of people watched. It predicts what will keep you watching."
```

## Explore: sort this course's cases

```step
stage: run
check:
  type: sort
  q: "Which kind is each one? You'll meet each later in the course."
  options: ["Rules written by people", "Learns to predict or sort", "Makes new content", "Takes actions"]
  items:
    - ["A video feed that ranks posts by what you might watch", "Learns to predict or sort", "It learned from what people watched, and predicts."]
    - ["An app that stops the feed at 10 pm because you set a bedtime", "Rules written by people", "You set it, and it follows the rule."]
    - ["A chatbot that chats like a friend", "Makes new content", "It writes new replies each time."]
    - ["A fake video of a real person saying something they never said", "Makes new content", "Made by AI that makes video and voices."]
    - ["A cloned voice on a phone call", "Makes new content", "A few seconds of a real voice can be enough to make one."]
    - ["An assistant that reads your messages and replies for you", "Takes actions", "It doesn't just suggest: it sends."]
```

The four kinds, in plain words:

1. **Rules written by people:** it follows instructions someone wrote.
2. **Learns to predict or sort:** it learns from examples, then predicts or sorts (feeds, spam filters, face unlock).
3. **Makes new content:** it makes text, pictures, video or voices (chatbots, image and voice makers).
4. **Takes actions:** it does things for you, like sending or buying (AI agents).

## Explain: where it goes wrong

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "A chatbot tells you a fact that turns out to be made up. Which kind of mistake is that?"
      options: ["Makes new content: it made something convincing that isn't true", "Rules: someone wrote a wrong rule", "Takes actions: it acted before checking"]
      answer: 0
      feedback: [null, "Nobody wrote that fact in as a rule.", "It only wrote something; it didn't act."]
  - check:
      type: question
      q: "A feed keeps showing you things you said you didn't want. Where would you look?"
      options: ["At what it's predicting: what keeps people watching, not what you asked for", "At a rule about bedtimes", "At a picture it made"]
      answer: 0
      feedback: [null, "Bedtime rules don't choose posts.", "A feed ranks posts; it doesn't make pictures."]
```

- **Rules:** the rule is wrong, for everyone at once.
- **Predict or sort:** wrong or missing examples, or predicting the wrong thing (what keeps you watching, not what you want).
- **Makes new content:** convincing but untrue, or a fake of a real person.
- **Takes actions:** it acts before anyone checks.

### The made-up fact

Which kind of mistake?

### The feed

Where would you look?

## Elaborate: one app, several kinds

```step
stage: modify
tier: typical
check: { type: reflect, text: "I named the kinds of AI in one app I know, and which part I'd want to check most." }
```

Pick an app you know (or a made-up one). List three things it does. Which kind of AI is each one, if it's AI at all? Which part would you most want to check, and why?

## Evaluate: kind first

```step
stage: info
check: { type: reflect, text: "Before I judge an app's AI, I can ask which kind it is." }
```

On paper: **"The AI in a video feed is the kind that \_\_\_\_. It can go wrong when \_\_\_\_."**

**Next lesson:** be the algorithm, and choose Sam's feed.
