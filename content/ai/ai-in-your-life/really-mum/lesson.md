---
title: Is that really Mum?
summary: "A few seconds of someone's voice can be enough to clone it. If a call or message from 'family' asks for money or urgent help, hang up and call back on a number you already know."
language: science
shape: 5e
unit: fakes-that-hurt
order: 10
voice: { name: af_heart, speed: 1.1 }
---
Scammers can now copy a person's **voice**. A call can sound exactly like someone you love. **So how do you check?**

**Kind of AI:** makes new content (a cloned voice).

## Engage: how much voice?

```step
stage: predict
check:
  type: predict
  q: "How much of someone's voice recording do scammers need to make an AI copy of it?"
  options: ["A few seconds", "About an hour", "Hundreds of hours"]
  actual: "A few seconds, according to the Australian Government's Scamwatch. A short video posted online can be enough."
```

## Explore: the call

```step
stage: run
tasks:
  - check:
      type: sort
      q: "Ava (made up) gets a call. It sounds exactly like her mum: 'I've lost my wallet and I'm stuck. Please send money to this account right now, and don't tell Dad.' Which signs should make her stop?"
      options: ["A warning sign", "Not a warning sign"]
      items:
        - ["It's urgent: 'right now'", "A warning sign", "Pressure stops you from checking."]
        - ["It asks for money to a new account", "A warning sign"]
        - ["'Don't tell Dad'", "A warning sign", "Secrecy cuts you off from people who could check."]
        - ["The voice sounds exactly like Mum", "Not a warning sign", "A clone can sound exactly right. Sounding right isn't proof either way."]
        - ["It's from a number Ava doesn't know", "A warning sign", "Real family usually call from their own number."]
  - check:
      type: question
      q: "What's the best thing Ava can do?"
      options: ["Hang up and call Mum back on the number she already has", "Ask the caller a question only Mum would know", "Send a small amount to be safe"]
      answer: 0
      feedback: [null, "Better than nothing, but a scammer may know more than you think, and it keeps you on their call. Calling back on a real number checks it for sure.", "Any money sent to a scammer is lost."]
```

Scams like this use **pressure** (urgent, secret) and a **voice you trust**. Because a clone can sound exactly right, **listening harder doesn't help**.

What works is checking **outside the call**: Scamwatch says to **call your friend or family member back on their real number** to check.

### Warning signs

Sort each one.

### Ava's move

What should she do?

## Explain: check outside the call

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Why does calling back on a number you already know work, even if the voice was perfect?"
      options: ["The scammer can't answer Mum's real phone", "It makes the clone sound different", "It slows the internet down"]
      answer: 0
      feedback: [null, "The voice doesn't change; the phone number does.", "It's about who answers, not the internet."]
  - check: { type: reflect, text: "I can spot the warning signs of a voice-clone scam and check by calling back on a number I already have." }
```

It's the same idea as the last two lessons: **don't trust how it looks or sounds; check where it came from.** For a call or message, that means **hanging up and contacting the person another way** you already know is real.

Families can also agree what they'd **never** ask for by phone or text, like money to a new account.

### Why it works

What does calling back check?

### Explain it

Say the rule in your own words.

## Elaborate: it happens to companies too

```step
stage: modify
tier: typical
check:
  type: question
  q: "In 2024, a worker at the company Arup joined a video call with what looked and sounded like senior colleagues. They were fakes, and about US$25 million was sent to scammers. Which check would have helped?"
  options: ["Confirming the request another way, with a person they could reach directly", "Looking harder at the faces on the video", "Making the call longer"]
  answer: 0
  feedback: [null, "The fakes were convincing enough to fool someone watching.", "A longer call is still the scammers' call."]
```

In 2024, CNN reported that a worker at the engineering company **Arup** in Hong Kong sent **about US$25 million** after a video call where **fake voices and images** were used to pretend to be senior staff.

Same rule, bigger stakes: **check outside the call**. Why might a company make a rule that big payments always need a second person to confirm?

## Elaborate: phishing by voice

```step
stage: make
tier: wider
check: { type: reflect, text: "I compared a voice-clone scam with a phishing email and explained which defences work for both." }
```

In [Cyber safety › Spot the phish](../../../systems/cyber/phishing/), the signs were: someone pretending to be trusted, pressure, a request for money or a password, and a link or number that isn't what it seems. A voice clone is **phishing with a voice**.

Make a table: the signs of a phishing email and the signs of a voice-clone call. Which defences work for both? Which only work for one?

## Evaluate: your rule

```step
stage: info
check:
  type: question
  q: "You get a text from a new number: 'Hi, it's me, I've got a new phone. Can you send $50 for a bus fare?' What's the best response?"
  options: ["Don't reply to that number; call the person on the number you already have", "Reply 'Is that really you?'", "Send it: $50 isn't much"]
  answer: 0
  feedback: [null, "A scammer will simply say yes.", "It's still money to a stranger."]
```

On paper, write a **family rule** for calls or messages that ask for money or urgent help.

**Course complete.** For every feed, chatbot, screen, picture or call: which kind of AI is it, and how will you check?
