---
title: Making rules
summary: "A rule about AI balances the people it affects, and a rule existing isn't the same as it working. Write a class rule with the lens, then compare it with real ones."
language: science
shape: 5e
unit: what-next
order: 10
voice: { name: af_heart, speed: 1.1 }
---
Every lesson so far ended with "what should happen?". Rules are how people decide. **A good rule balances everyone it affects, and someone checks that it works.**

**Kind of AI:** all four kinds. Rules often treat them differently: a rule for chatbots in class isn't a rule for hiring tools.

## Engage: one rule, many people

```step
stage: predict
check:
  type: predict
  q: "A school makes the rule: 'No AI for homework, ever.' Who does that affect?"
  options: ["Students, teachers and families, in different ways", "Only students who use AI", "Nobody: rules don't change anything"]
  actual: "Many people: students who would use AI well and badly, teachers who check homework, families, and students who need AI tools for accessibility. A rule always has gainers and losers."
```

## Explore: write a class rule

```step
stage: run
tasks:
  - check:
      type: sort
      q: "Three possible class rules about AI for homework. Which problem does each one have?"
      options: ["Hard to check", "Unfair to some students", "Doesn't help anyone learn"]
      items:
        - ["'No AI for homework, ever.'", "Hard to check", "A teacher can't easily tell, and some search tools give AI answers on their own."]
        - ["'Use AI for anything; just hand in the answer.'", "Doesn't help anyone learn", "If AI does the thinking, the student may not learn."]
        - ["'Only students with their own AI app at home may use it.'", "Unfair to some students", "Students without the app lose out."]
  - check:
      type: reasoning
      q: "Write one class rule about AI for homework. Then use the lens: who gains, who loses, who decides, and how would you check it's working?"
      placeholder: "Rule: … Gains: … Loses: … Decides: … Check: …"
      models:
        - title: "A strong answer"
          text: "Rule: you may ask AI for a hint, but write the answer yourself and note what you asked. Gains: students who get stuck. Loses: students who'd rather just get the answer. Decides: the teacher, with the class. Check: a short quiz without AI each fortnight shows whether we're learning."
        - title: "A different view that also works"
          text: "Rule: no AI for practice tasks; AI allowed for checking a finished draft. Gains: practice stays real. Loses: students who learn best with hints. Decides: the department. Check: compare drafts before and after AI feedback."
      criteria: ["My rule says what is allowed and what isn't.", "I named someone who gains and someone who loses.", "I said how we'd check the rule is working."]
      explain: "A rule is a trade-off. Naming who loses, and how you'll check, makes it a better rule."
```

### Three rules

What's wrong with each?

### Your rule

Write it, then use the lens.

## Explain: rules are trade-offs

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Why should a rule about AI include a way to check it's working?"
      options: ["A rule can exist and still not work, so someone has to check and change it", "Rules always work once they're written", "Checking is the AI's job"]
      answer: 0
      feedback: [null, "Rules often fail in ways nobody expected.", "People made the rule; people check it."]
  - check: { type: reflect, text: "I can explain a rule as a trade-off between people, and why a rule needs checking." }
```

A good rule about AI:

1. says **what's allowed** and what isn't;
2. names **who gains and who loses**, and tries to be fair to both;
3. says **who decides** and who is responsible;
4. includes a way to **check** that it works, and to change it.

A rule existing **isn't the same as it working**.

### Checking

Why check?

### Explain it

Name the four parts of a good rule.

## Elaborate: Australia's rules

```step
stage: modify
tier: typical
check:
  type: question
  q: "Australia's framework for generative AI in schools was kept after a review, and is now reviewed every year. Why review a rule every year?"
  options: ["AI and how people use it change fast, so a rule can go out of date", "Rules must be rewritten every year by law", "So nobody has to follow it"]
  answer: 0
  feedback: [null, "Not by law: because things change.", "Reviewing a rule keeps it useful, not optional."]
```

- **Schools:** Education Ministers approved the **Australian Framework for Generative AI in Schools** in 2023. A **2024 review** kept it and set up **reviews every year**.
- **Government:** the Australian Government has a policy for how its own departments use AI. Its **first new must-do requirement began on 15 June 2026**.

Compare your class rule with the idea of a yearly review. When would you check your rule?

## Elaborate: rules for high-risk AI

```step
stage: make
tier: wider
check: { type: reflect, text: "I explained why some AI uses get stricter rules than others, and who should decide which are high-risk." }
```

The European Union's **AI Act** sorts AI uses by risk. AI used to **filter job applications and evaluate candidates** is **high-risk**, so it has extra duties, such as human oversight. Those duties were delayed and are set to apply from **December 2027**.

Why might hiring be high-risk, but a chatbot that suggests recipes not? (Think back to lessons 3 and 4.) Which uses from this course would you call high-risk? Who should decide: governments, companies, or the people affected? Why might rules be delayed?

## Evaluate: rule check

```step
stage: info
check:
  type: question
  q: "A school writes a strict AI rule, then never checks whether students follow it or whether it helps. What's the problem?"
  options: ["Nobody knows if it's working, so it can't be fixed", "There's no problem: the rule exists", "The rule is too short"]
  answer: 0
  feedback: [null, "A rule existing isn't the same as it working.", "Length isn't the issue: checking is."]
```

On paper, improve your class rule: add **who checks it, and when**.

**Next lesson:** your own case, judged with the lens.
