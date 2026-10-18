---
title: When a fake is about someone you know
summary: "A fake picture or video of a real person can hurt them even when everyone knows it's fake. What a bystander can do: don't share, support, tell, report."
language: science
shape: 5e
unit: fakes-that-hurt
order: 9
voice: { name: af_heart, speed: 1.1 }
---
AI makes it easy to put someone's face into a picture or video they were never in. When it's about **someone you know**, it stops being a puzzle about what's real. **It's about a person.** This lesson uses a made-up case.

**Kind of AI:** makes new content (pictures and video).

## Engage: "it's just a joke"

```step
stage: predict
check:
  type: predict
  q: "Someone makes a fake video putting a classmate's face on a person falling into a pond. Everyone can tell it's fake. Can it still hurt?"
  options: ["Yes: being laughed at hurts, even if people know it's fake", "No: if it's obviously fake, it's harmless", "Only if it looks real"]
  actual: "Yes. The harm comes from being shown, shared and laughed at without agreeing to it, not from people believing it."
```

## Explore: Kai's case

```step
stage: run
tasks:
  - check:
      type: sort
      q: "Kai (made up) finds a fake video of himself in the year group chat. He didn't agree to it. You're in the chat. Which actions help?"
      options: ["Helps", "Makes it worse"]
      items:
        - ["Don't like it, laugh at it or share it", "Helps", "Every share spreads it further."]
        - ["Send Kai a message: 'That's not OK. Are you all right?'", "Helps", "Knowing someone is on your side matters."]
        - ["Forward it to a friend to ask if it's fake", "Makes it worse", "That shares it again. You can describe it to an adult instead."]
        - ["Tell a teacher or another adult you trust", "Helps", "Adults can act: talk to the maker, contact parents, report it."]
        - ["Reply 'lol it's just a joke'", "Makes it worse", "It tells everyone it's fine to keep going."]
        - ["Report it in the app where it was posted", "Helps", "Most apps let you report content about a real person."]
  - check:
      type: question
      q: "Why does 'everyone knows it's fake' not make it OK?"
      options: ["Kai didn't agree to it, and being shown and laughed at hurts anyway", "Fake videos are always illegal", "It would be OK if it looked real"]
      answer: 0
      feedback: [null, "Not every fake is a crime, but it can still be bullying.", "Looking real or fake isn't what makes it hurt."]
```

Kai didn't agree to the video. Even if nobody believes it, it can still be **bullying**: it uses his face to make people laugh at him.

As a bystander, you have four moves:

1. **Don't share** it, like it, or laugh at it.
2. **Support** the person.
3. **Tell** an adult you trust.
4. **Report** it in the app, and for serious cases to **eSafety** at **esafety.gov.au/report**.

### Kai's case

Sort each action.

### "Just a joke"

Why isn't it OK?

## Explain: consent

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "What's the key question to ask before making or sharing any picture or video with a real person's face?"
      options: ["Did they agree to it?", "Is it funny?", "Does it look real?"]
      answer: 0
      feedback: [null, "Funny for whom?", "Real-looking or not, it can hurt."]
  - check: { type: reflect, text: "I can explain why a fake about a real person can hurt even when people know it's fake, and name four things a bystander can do." }
```

The question isn't "is it real?" but **"did they agree?"**. Using someone's face without their agreement to embarrass them is harmful, whoever made it and however it was made.

If something like this happens to you or someone you know, talk to an adult you trust, the school's wellbeing team, or **Kids Helpline (1800 55 1800)**.

### Consent

What's the key question?

### Explain it

Name the four bystander moves.

## Elaborate: who is responsible?

```step
stage: modify
tier: typical
check:
  type: sort
  q: "Who could have stopped Kai's video at each point?"
  options: ["The person who made it", "People who shared it", "The app"]
  items:
    - ["Deciding not to make a video of a real person without asking", "The person who made it"]
    - ["Not forwarding it to another chat", "People who shared it"]
    - ["Making it easy to report, and taking it down quickly", "The app"]
    - ["Asking 'would Kai be OK with this?' first", "The person who made it"]
```

Responsibility is **shared**: the maker, everyone who shares, and the apps that host and make these videos. Who has the most power to stop it **once it's posted**?

## Elaborate: when it's a crime

```step
stage: make
tier: wider
check: { type: reflect, text: "I explained the difference between a fake that is bullying and a fake that is a crime, and where each can be reported." }
```

Some fakes are **crimes**. eSafety's Youth Council says **explicit deepfakes are illegal**, and they can be reported to eSafety (**esafety.gov.au/report**). Fakes used to bully, embarrass or spread lies can also be reported, to the school, the app and, for serious cases, eSafety.

Why might the law treat some fakes as crimes and leave others to schools and apps? What would you want an app to do when someone reports a fake of them?

## Evaluate: your move

```step
stage: info
check:
  type: question
  q: "You see a fake picture of a classmate. Your friend says 'Don't be boring, just share it.' What do you do?"
  options: ["Don't share it, check the classmate is OK, and tell an adult", "Share it once, quietly", "Ignore it completely"]
  answer: 0
  feedback: [null, "Once is still spreading it.", "Not sharing is good; supporting and telling help even more."]
```

On paper: **"If I see a fake about someone I know, I will \_\_\_\_, \_\_\_\_, \_\_\_\_ and \_\_\_\_."**

**Next lesson:** a fake voice on the phone.
