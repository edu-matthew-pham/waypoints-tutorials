---
title: Recommend
summary: "Put the evidence and the fine print together: adopt, trial, change something first, or don't use it. Write a recommendation with conditions, checked against each charter principle, with what would change your mind."
language: science
shape: 5e
unit: tool
order: 7
voice: { name: af_heart, speed: 1.1 }
---
A committee's answer is rarely just yes or no. **A recommendation names a decision, its conditions, how it was checked against each principle, and what would change the committee's mind.**

The four decisions:

- **Adopt:** use it, and review it by a date.
- **Trial:** use it with a small group, under conditions, and decide afterwards.
- **Change something first:** don't use it until something is fixed (a setting, a term, an answer from the company).
- **Don't use it:** with the reason, and what would change that.

## Engage: your call

```step
stage: predict
check:
  type: predict
  q: "From lessons 5 and 6: StudyPal's evidence is thin, its chats train the AI by default, some Year 7s are too young, and the teachers' problem is real. What would you recommend?"
  options: ["Adopt", "Trial", "Change something first", "Don't use it"]
  actual: "Committees could defend several answers. Many would say 'change something first' (the school must control the training setting and hint mode, and the age terms need sorting), then a small trial with older students. What matters is the reasons and the conditions, checked against the charter."
```

## Explore: decide and write

```step
stage: run
tasks:
  - check:
      type: sort
      q: "Which decision fits each situation best?"
      options: ["Adopt", "Trial", "Change something first", "Don't use it"]
      items:
        - ["Tested in a fair trial, learning lasted, the school controls the data, free for every student", "Adopt", "It passes the charter. Adopt, and still review it by a date."]
        - ["The problem is real and the settings can be controlled, but the evidence is thin", "Trial", "A small fair trial finds out what the evidence can't tell you yet."]
        - ["Good fit, but chats train the AI by default and only the student can switch it off", "Change something first", "Ask the company for a school-wide control before anyone uses it."]
        - ["The company won't say who it shares data with, and the tool doesn't solve a problem we have", "Don't use it", "It fails two principles, and there's no problem it would solve."]
  - check:
      type: reasoning
      q: "Write Westbrook's recommendation for StudyPal: the decision, two conditions, and one thing that would change your mind."
      placeholder: "Decision: … Conditions: 1. … 2. … We'd change our mind if: …"
      models:
        - title: "A strong answer"
          text: "Decision: change something first, then trial. Conditions: 1. the school switches off training on chats for every student and the company confirms it in writing; 2. hint mode on and locked, Year 9 only (all over 13), with a quiz without the app after four weeks. We'd change our mind if: the quiz shows no learning gain, or the company won't answer who its partners are."
        - title: "A different view that also works"
          text: "Decision: don't use it. Conditions for looking again: the school controls training and streaks, the company names its partners, and there's evidence of learning without the app. We'd change our mind if: a fair trial at another school showed lasting learning."
      criteria: ["I chose one of the four decisions.", "I gave at least two conditions.", "I said what would change our mind."]
      explain: "Saying what would change your mind makes the recommendation honest about evidence, and tells everyone what to watch."
```

### Which decision?

Match each situation to a decision.

### Westbrook's recommendation

Decision, conditions, and what would change your mind.

## Explain: a recommendation people can act on

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Westbrook recommends a trial but doesn't say who decides afterwards, or when. What's the problem?"
      options: ["The trial could drift on forever, or end without anyone deciding", "None: trials decide themselves", "It makes the trial unfair"]
      answer: 0
      feedback: [null, "Someone has to look at the results and decide, by a date.", "Fairness is a separate question. The gap is who decides, and when."]
  - check: { type: reflect, text: "I can write a recommendation with a decision, conditions, a check against each principle, and what would change our mind." }
```

A recommendation people can act on has:

1. **A decision:** adopt, trial, change something first, or don't use it.
2. **Conditions:** what must be true (settings, age, who uses it, for what).
3. **Each principle checked:** a line per charter principle, with "passes", "fails" or "unknown".
4. **What would change our mind:** the evidence to watch.
5. **Who decides next, and when.**

### Who decides next?

What's missing?

### Explain it

Name the five parts.

## Elaborate: two minutes

```step
stage: modify
tier: typical
check:
  type: question
  q: "You present StudyPal's recommendation to the principal in two minutes. What do you say first?"
  options: ["The decision and the main reason", "Everything you read on the privacy page", "How the committee was formed"]
  answer: 0
  feedback: [null, "Too much detail first: lead with the decision.", "Useful, but not first. Lead with the decision."]
```

A busy decision-maker needs, in order: **the decision, the main reason, the conditions, and what would change your mind.** The rest goes on the page.

Practise your two minutes with a partner. Then the partner argues for a different decision for one minute. Did anything change your mind?

## Elaborate: compared with what else?

```step
stage: make
tier: wider
check: { type: reflect, text: "I compared the proposed tool with at least one alternative and said what the dedicated tool adds, if anything." }
```

A committee shouldn't only ask "this tool or nothing?". Compare it with other ways to solve the same problem:

- a teacher's hint sheet or a homework help session;
- a general AI assistant the school already allows, given a careful prompt to give hints, not answers;
- a different tool.

What does StudyPal add that the alternatives don't? Is it worth its data, cost and age limits? Teachers' guide: [Choosing AI tools for learning](../../../choosing-ai-tools/) compares dedicated tools with a well-prompted general assistant in the same way.

## Evaluate: the recommendation

```step
stage: info
check:
  type: question
  q: "Six months after a trial, the tool's company changes its terms to train on all student chats. What should happen to the recommendation?"
  options: ["Review it now: the conditions it depended on have changed", "Nothing: it was already decided", "Wait for the yearly review"]
  answer: 0
  feedback: [null, "A decision depends on its conditions. When they change, look again.", "A big change to a condition shouldn't wait."]
```

On paper, finish the **recommendation**.

| Recommendation | |
|---|---|
| Tool, and date we checked: | |
| Decision: adopt / trial / change something first / don't use | |
| Main reason: | |
| Conditions: | |
| Principle | Passes / fails / unknown, and why |
| 1. | |
| 2. | |
| 3. | |
| 4. | |
| 5. | |
| We'd change our mind if… | |
| Who decides next, and when: | |

**Next unit:** what about the AI nobody chose?
