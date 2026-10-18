---
title: Can we trust it, and who does it affect?
summary: "Read StudyPal's privacy page, settings and terms with the charter: where student work goes, what starts switched on, who is old enough, and which students gain or lose."
language: science
shape: 5e
unit: tool
order: 5
voice: { name: af_heart, speed: 1.1 }
---
A tool can help learning and still fail the charter. **Before students use it, the committee checks the data, the defaults, the age terms and who it affects.** What it can't find out, it writes down as unknown, not as "fine".

> **StudyPal (made up): the short privacy page**
> - We collect the questions you ask, the files you upload, and how long you use the app.
> - We may use your chats to improve our AI.
> - We keep your data while your account is open, and for 3 years after.
> - We may share data with our partners.
>
> **Settings, as they start:** Use my chats to improve StudyPal: **On**. Daily streaks and reminders: **On**. Hint mode: **Off**.
>
> **Terms:** You must be 13 or older to use StudyPal.

## Engage: thirteen and over

```step
stage: predict
check:
  type: predict
  q: "Westbrook's Year 7s are 12 and 13. StudyPal's terms say 13 and over. What happens if Westbrook gives StudyPal to all of Year 7?"
  options: ["Nothing: terms don't matter", "Some students would be using it against its own terms, and some couldn't use it at all", "The app checks ages, so it's fine"]
  actual: "Some Year 7s are under 13, so the school would be asking them to break the terms, or leaving them out. Age terms test two principles at once: age and stage, and fair for everyone."
```

## Explore: read the fine print

```step
stage: run
tasks:
  - check:
      type: sort
      q: "Which charter principle does each line from StudyPal's pages test most?"
      options: ["Our data stays ours", "Age and stage", "Learning first", "Fair for everyone"]
      items:
        - ["'We may use your chats to improve our AI.' (On to start)", "Our data stays ours", "Student work trains a company's AI unless someone switches it off."]
        - ["'We keep your data … for 3 years after.'", "Our data stays ours", "Students' questions outlast their time at school."]
        - ["'You must be 13 or older.'", "Age and stage", "Some Year 7s are under 13."]
        - ["Hint mode: Off to start", "Learning first", "The default gives answers, not hints."]
        - ["Daily streaks and reminders: On to start", "Learning first", "Streaks keep you opening the app. Is that the same as learning?"]
        - ["Works best on a home laptop with fast internet", "Fair for everyone", "Students without one at home get less out of it."]
  - check:
      type: reasoning
      q: "Who would StudyPal affect at Westbrook? Name one group who might gain and one who might lose, and say why."
      placeholder: "Gains: … because … Loses: … because …"
      models:
        - title: "A strong answer"
          text: "Gains: students learning English, who can ask questions they're shy to ask in class, in their own words. Loses: students without a laptop or internet at home, who can't use it for homework, so the gap grows."
        - title: "A different view that also works"
          text: "Gains: quiet students who get stuck at home and don't ask for help. Loses: under-13s, who can't sign up at all, and their teachers, who now teach two groups."
      criteria: ["I named a group that gains and why.", "I named a group that loses and why.", "I linked one to a charter principle."]
      explain: "The same tool lands differently on different students. Naming who loses is how a committee spots a fairness problem before it happens."
```

### Read the fine print

Sort each line by the principle it tests.

### Who does it affect?

One group that gains, one that loses.

## Explain: trust is checked, not assumed

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "StudyPal's page says 'We may share data with our partners' but doesn't say who they are. What should the committee write?"
      options: ["Unknown: we don't know who gets student data. Ask the company before any use", "Fine: 'may' means they probably won't", "Partners are always safe"]
      answer: 0
      feedback: [null, "'May' means they're allowed to. An unknown is a question, not permission.", "We can't tell: we don't know who they are."]
  - check: { type: reflect, text: "I can check a tool's data, defaults, age terms and who it affects, and write unknowns as questions." }
```

Before students use a tool, a committee checks:

1. **Data:** what is collected, where it goes, how long it's kept, and whether it **trains the AI**.
2. **Defaults:** what starts **switched on**. Most people never change a setting, so the default is the real decision.
3. **Age terms:** who is **old enough** under the tool's own terms.
4. **Design:** does it keep you coming back (streaks, reminders) more than it helps you learn?
5. **Who it affects:** who gains, who loses, and who decides.

Anything you can't find out is **unknown**. Unknowns are questions to ask, not permission.

### Partners

What do we write when we don't know?

### Explain it

Name the five checks.

## Elaborate: designed to keep you

```step
stage: modify
tier: typical
check:
  type: question
  q: "StudyPal's streaks start on. A student keeps opening StudyPal every night to keep a 40-day streak. Which charter principle should the committee check?"
  options: ["Learning first: is the app helping them learn, or just keeping them using it?", "Our data stays ours", "None: using it more is always better"]
  answer: 0
  feedback: [null, "More use also means more data, but first ask whether it's helping learning.", "More use is what the app wants. Is it what the learning needs?"]
```

Streaks and reminders are features **designed to keep you** (*AI in your life* looks at them in [Designed to keep you](../../ai-in-your-life/designed-to-keep-you/)). For a school tool, ask: could the school switch them off? Should it?

## Elaborate: the privacy principles

```step
stage: make
tier: wider
check: { type: reflect, text: "I checked StudyPal's privacy page against at least two Australian Privacy Principles and wrote what a school would need to ask." }
```

In Australia, many organisations that handle personal information must follow the **Australian Privacy Principles**: for example, telling people what they collect and why, using it only for that purpose, keeping it secure, and letting people see it. Digital systems › Cyber safety teaches them in [The Australian Privacy Principles](../../../systems/cyber/privacy/).

Check StudyPal's short privacy page against two of them. Which questions would the school need answered before any student uses it? Then look at a real school app's privacy page (your teacher may give you one, dated) the same way.

## Evaluate: recommendation, part 2

```step
stage: info
check:
  type: question
  q: "StudyPal would be fine if the school switched off 'Use my chats to improve StudyPal' for every student, and the company agreed. What kind of condition is that?"
  options: ["A condition: 'only if the school controls this setting'", "A reason to reject it", "Nothing to do with the charter"]
  answer: 0
  feedback: [null, "Not necessarily: a condition can fix a problem.", "It's 'our data stays ours'."]
```

On paper, add to the **recommendation**.

| Recommendation, part 2 | |
|---|---|
| Data: what, where, how long, trained on? | |
| What starts switched on: | |
| Age terms: who is old enough? | |
| Designed to keep you? | |
| Who gains: | |
| Who loses: | |
| Unknowns (questions to ask): | |

**Next lesson:** put it together and recommend.
