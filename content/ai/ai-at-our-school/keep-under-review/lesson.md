---
title: Keep it under review
summary: "AI changes faster than any policy. Decide who notices new AI, how students report problems, what triggers an early review, and when the charter is revisited. Then finish the response plan."
language: science
shape: 5e
unit: already-here
order: 10
voice: { name: af_heart, speed: 1.1 }
---
A charter, a recommendation and a response plan are all **dated**. AI tools change every few months. **A committee's last job is a review cycle: who notices, how problems are reported, what triggers an early look, and when everything is checked again.** A rule existing isn't the same as it working.

## Engage: "when needed"

```step
stage: predict
check:
  type: predict
  q: "Westbrook's AI policy says: 'This policy will be reviewed when needed.' When do you think it will actually be reviewed?"
  options: ["Every year", "When something goes wrong", "Probably never, until something goes badly wrong"]
  actual: "Without a date, a person responsible, and a list of what counts as 'needed', reviews tend not to happen until something goes badly wrong. A review cycle says who, when, and what triggers an early look."
```

## Explore: what triggers a review?

```step
stage: run
tasks:
  - check:
      type: sort
      q: "What should Westbrook's committee do about each event?"
      options: ["Review now", "Bring to the next meeting", "No review needed"]
      items:
        - ["StudyPal changes its terms to train on all student chats", "Review now", "A condition of the recommendation has changed."]
        - ["A report that an AI feature showed Year 7s something unsafe", "Review now", "Safety first: act now, and follow the school's wellbeing steps too."]
        - ["A new AI button appears in a school tool", "Bring to the next meeting", "Add it to the map and choose a response."]
        - ["Students say the maths site's AI hints are often wrong", "Bring to the next meeting", "It tests 'learning first': is the response still right?"]
        - ["An AI tool students use can now check its own maths, or submit work for them", "Review now", "A big jump in what AI can do can break decisions built on what it couldn't do."]
        - ["The search page changes its colours", "No review needed", "Nothing about the AI or the charter changed."]
        - ["The national schools framework publishes its yearly review", "Bring to the next meeting", "Compare it with the charter at the next meeting."]
  - check:
      type: reasoning
      q: "Write Westbrook's review cycle: who notices new AI, how students report problems, what triggers an early review, and when the charter is revisited."
      placeholder: "Who notices: … How students report: … Early review if: … Charter revisited: …"
      models:
        - title: "A strong answer"
          text: "Who notices: each committee member watches one school tool's update notes; teachers tell the committee about new AI buttons. How students report: a box on the school's learning page, 'I found a problem with an AI tool', no names needed. Early review if: a tool changes its data terms, something unsafe is reported, or a new kind of AI arrives. Charter revisited: every Term 4, alongside the school's policy review, with a student meeting."
        - title: "A different view that also works"
          text: "Who notices: the IT team sends the committee a list of updates each term. How students report: tell any teacher, who passes it on. Early review if: two or more reports about the same tool. Charter revisited: each year in February, using the national framework's latest review."
      criteria: ["I said who notices new AI.", "Students have a simple way to report problems.", "There's a date, and triggers for an early review."]
      explain: "A review cycle turns 'reviewed when needed' into a plan: who, how, when, and what counts as needed."
```

### What triggers a review?

Sort each event.

### Westbrook's review cycle

Who, how, when, and what triggers an early look.

## Explain: a cycle, not a moment

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Why should students be able to report a problem with an AI tool without having to say whether they used it?"
      options: ["So they report problems without worrying about getting into trouble, and the committee hears about them", "Because names don't matter", "So the committee can't fix anything"]
      answer: 0
      feedback: [null, "Names can matter for follow-up; the point is that fear stops reports.", "Hearing about problems is how the committee fixes them."]
  - check:
      type: sort
      q: "A rule problem means the rule itself is wrong, missing or contradicts another. A know-how problem means the rule is fine, but people don't yet know how to apply it. Which is each?"
      options: ["Rule problem: fix the rule", "Know-how problem: give guidance or examples"]
      items:
        - ["The integrity policy says 'no AI in assessed work'; the AI statement says 'every task says how much AI is allowed'", "Rule problem: fix the rule", "Even someone who knows both rules perfectly can't tell which applies."]
        - ["Teachers set AI levels for tasks very differently from each other", "Know-how problem: give guidance or examples", "The rule is fine. Teachers need worked examples of each level."]
        - ["No policy says whether staff may put student work into an AI tool", "Rule problem: fix the rule", "Nobody is doing it wrong: nothing says what's right."]
        - ["Students don't say when they used AI, because they don't know what to write", "Know-how problem: give guidance or examples", "Show them an example acknowledgement, and that honesty isn't punished."]
        - ["A teacher accepts an online quiz as evidence without knowing AI could finish it", "Know-how problem: give guidance or examples", "The rules can stay; the teacher needs to know what AI can now do."]
  - check: { type: reflect, text: "I can describe a review cycle, and tell a rule problem from a know-how problem." }
```

A review cycle has four parts:

1. **Who notices:** someone watches each tool's updates; teachers pass on what they see.
2. **How problems are reported:** simple, safe, and without blame, so people actually report.
3. **Triggers for an early review:** a changed term or setting, a safety report, a new kind of AI, a **big jump in what AI can do**, new evidence.
4. **A date:** when the charter, recommendations and responses are all revisited, ideally alongside the school's own policy review.
5. **Can people apply it?** A rule nobody knows how to follow isn't working. When something goes wrong, ask: is it a **rule problem** (wrong, missing, or contradicting another rule: fix the rule) or a **know-how problem** (the rule is fine, but people need guidance, examples or practice)? A new rule won't fix a know-how problem: it just makes the policy longer.

The AI rules live in several policies (lesson 4), each reviewed by its own owner. So the cycle names **who holds the map**: the person who notices when a change in AI touches several policies at once, and passes it along.

Decisions about AI are **dated and reviewed**. That's the charter's "honest about evidence" principle, applied to the committee itself.

### Safe reporting

Why no blame?

### Rule or know-how?

Give the person who knows the rule best the same case. If they still can't apply it, it's the rule.

### Explain it

Name the five parts of a review cycle.

## Elaborate: what to change at the review

```step
stage: modify
tier: typical
check:
  type: question
  q: "At the yearly review, Westbrook finds its response to the AI search answer (teach a checking habit) isn't working: Year 7 work still copies it. What should the committee do?"
  options: ["Choose a different or extra response, such as changing the research tasks, and review again", "Keep the same response: it's in the plan", "Scrap the charter"]
  answer: 0
  feedback: [null, "A plan that isn't working should change. That's what the review is for.", "The principle may be fine; the response is what's failing."]
```

A review asks three questions about each decision:

- **Is it working?** (Look at the evidence, not just whether it was done.)
- **Have the conditions changed?** (Terms, settings, the tool itself.)
- **Is the principle still right?** Usually yes: it's the response that changes.

## Elaborate: rules that review themselves

```step
stage: make
tier: wider
check: { type: reflect, text: "I linked our review cycle to the school's own policy review and to at least one outside review date." }
```

Australia's framework for generative AI in schools is **reviewed every year** (*Who Does AI Affect?* looks at it in [Making rules](../../who-does-ai-affect/making-rules/)). A school's own policies usually have review dates too.

When is your school's AI policy next reviewed? How would your committee's charter feed into it? Who on staff would you send it to, and when?

## Evaluate: the response plan

```step
stage: info
check:
  type: question
  q: "A committee wrote a great charter two years ago and hasn't met since. What's most likely true?"
  options: ["Some of its decisions are out of date, and nobody knows which", "Everything still works: it was a great charter", "The charter has reviewed itself"]
  answer: 0
  feedback: [null, "The principles may hold up, but the tools and terms have changed underneath them.", "Documents don't review themselves; people do."]
```

On paper, finish the **response plan**.

| Response plan | |
|---|---|
| Written by: | Date: |
| The map and responses | (from lessons 8 and 9) |
| Who notices new AI: | |
| How students report problems: | |
| Early review if… | |
| Who needs to know what (and how we'll show them): | |
| Charter, recommendations and responses revisited on: | |
| Sent to (the school's policy review): | |

You now have three of the committee's products: a **charter**, a **recommendation** and a **response plan**, each dated and tested against the charter.

**Next lesson:** use what you've learned to refine the policy.
