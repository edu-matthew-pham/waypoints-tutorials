---
order: 1
unit: trail
title: A day's trail
summary: "Everyday things online leave a trail: a message, a photo, a game score, a search, a place you checked in. Most of it is fine. Some of it is worth a second thought, because it is hard to take back, says where you are, or is about someone else. A trail is not something to fear; it is something to notice."
language: science
shape: 5e
hook: "Kai's Saturday: a game, a video, a photo of the dog, a message to Nan, a search for pancake recipes. Which of these could still be around next year?"
---
Kai is made up, and so is everything Kai does here. Nobody has to say what they do online.

## Engage: what stays?

```step
stage: predict
insight: "Committing to a guess first: most of what we do online is kept somewhere, even when it disappears from our own screen."
check:
  type: predict
  q: "Kai sends a funny photo of the dog to a group chat, then deletes it a minute later. Is it gone?"
  options: ["Maybe not: someone may have seen it, saved it or taken a screenshot", "Yes: deleting takes it back from everyone", "Yes, if Kai deletes it within a minute"]
  actual: "Maybe not. Deleting takes it off Kai's screen. Anyone who saw it in that minute could have saved it, and the chat app may keep a copy for a while."
```

## Explore: Kai's Saturday

```step
stage: run
insight: "Sorting a day of ordinary actions shows that most of a trail is fine, and that a few things are worth a second thought."
check:
  type: sort
  q: "Here is Kai's Saturday. Is each one fine as it is, or worth a second thought?"
  options: ["Fine as it is", "Worth a second thought"]
  items:
    - ["Plays a puzzle game and gets a new high score", "Fine as it is", "A score says very little about Kai."]
    - ["Searches for pancake recipes", "Fine as it is", "Searches are recorded, but this one is harmless."]
    - ["Sends Nan a message to say thank you for the birthday card", "Fine as it is", "A kind message to someone Kai knows."]
    - ["Posts a photo of the front of the house with the street sign in it", "Worth a second thought", "It shows where Kai lives. Who could see it?"]
    - ["Shares a photo of a friend tripping over, without asking", "Worth a second thought", "It is about someone else. Would they want it shared?"]
    - ["Turns on a setting that shows friends where Kai is all day", "Worth a second thought", "It shows where Kai is right now, to everyone on the list."]
```

Was your guess right? Most of the trail is fine. The things worth a second thought were **hard to take back**, said **where Kai is**, or were **about someone else**.

## Explain: three questions before you add to the trail

```step
stage: investigate
insight: "Three questions name what the sort showed. The planted mistake is believing that deleting takes a post back."
tasks:
  - check:
      type: bug
      code: "working.txt#mia"
      text: "Mia is in a hurry. Click the line where her thinking first goes wrong."
      answer: 2
      fault: logic
      misconception: delete-takes-it-back
      explain: "Line 2: Mia thinks she can delete it later if it is a problem. By then others may have seen, saved or passed it on. The time to think is before posting."
  - check:
      type: question
      q: "Which question helps most before posting a photo with other people in it?"
      options: ["Would they be happy for this to be shared?", "Will it get lots of likes?", "Is my phone charged?", "Is it a good photo?"]
      answer: 0
      feedback: [null, "Likes don't tell you whether it is fair to the people in it.", "That does not change who can see it.", "A good photo can still be one someone does not want shared."]
      explain: "When a post is about someone else, it is partly theirs. Ask first."
```

Three questions help before you add something to your trail:

1. **Can I take it back?** Once others have seen it, it may be saved or passed on.
2. **Does it say where I am?** A street sign, a school uniform or a live location can.
3. **Is it about someone else?** Then ask them first.

You do not need to worry about every game score or recipe search. A trail is something to notice, not something to fear. How computers work has a lesson on everything apps record, even what you never type: [Your digital footprint](../../../systems/cyber/footprint/).

### Mia's mistake

### Photos of other people

## Elaborate: older trails

```step
stage: modify
tier: typical
insight: "Years 7 and 8: bigger audiences and longer trails, the same three questions."
check:
  type: sort
  q: "Kai is in Year 8 now. Which question matters most for each?"
  options: ["Can I take it back?", "Does it say where I am?", "Is it about someone else?"]
  items:
    - ["A voice message in a group chat of 40 people, joking about a teacher", "Can I take it back?", "Forty people can keep and forward it."]
    - ["A photo at the bus stop every morning at the same time", "Does it say where I am?", "Together, the photos show a routine."]
    - ["A video of a friend singing badly at a sleepover", "Is it about someone else?", "It is their moment. Ask first."]
    - ["A username with a full name and birth year in it", "Can I take it back?", "It is on everything that username touches, for as long as it is used."]
```

## Evaluate: a private think

```step
stage: info
check: { type: reflect, text: "I can name the three questions to ask before I add something to my trail." }
```

**A private think** (you do not need to write it down or tell anyone): is there one thing you would ask yourself before you post next time?
