---
title: A first policy
summary: "A charter says what matters; a policy says what happens, for students and staff. Turn the charter into a short first policy that is broad on purpose, honest about what can't be policed, and says how it will be refined."
language: science
shape: 5e
unit: charter
order: 4
voice: { name: af_heart, speed: 1.1 }
---
Your charter says **what matters**. A **policy** says **what happens**: what students and staff may do, who is responsible, and what happens when something goes wrong. The school's leaders usually own it, but a committee can propose it.

Most schools start with a short, broad policy, because they don't yet know enough to be specific. **A broad first policy is fine, if it says how it will be refined, by whom, and when.**

## Engage: "No AI, ever"

```step
stage: predict
check:
  type: predict
  q: "Westbrook's policy could say: 'Students must never use AI for schoolwork.' Homework is done at home, and nobody can reliably tell if AI was used. Who does that rule mostly catch?"
  options: ["Every student who uses AI", "Mostly the students who are honest about using it", "Nobody uses AI, so nobody"]
  actual: "Mostly the honest ones. A school can't see what happens at home, and tools that claim to detect AI writing are often wrong. A rule that can't be policed tends to punish students who own up, and teaches everyone else to hide it."
```

## Explore: what a policy covers

```step
stage: run
tasks:
  - check:
      type: sort
      q: "Westbrook's committee drafts a first policy. Which part of a policy is each line?"
      options: ["Who it covers", "What's allowed", "Responsibilities", "Being honest about AI use", "Data and privacy", "Reporting and review"]
      items:
        - ["'This policy applies to students and staff.'", "Who it covers", "Staff use AI too: a policy covers everyone."]
        - ["'Use AI only in the ways your teacher sets for each task.'", "What's allowed", "Broad, and leaves the detail to the teacher."]
        - ["'Teachers make the final judgement on marks and reports, even if AI helped draft them.'", "Responsibilities", "From the charter's 'a person decides'."]
        - ["'If you used AI, say what for. Saying so is never in itself a reason for a lower mark.'", "Being honest about AI use", "Rewarding honesty makes the policy work without catching people."]
        - ["'Only use AI tools the school has checked with student work or names.'", "Data and privacy", "From 'our data stays ours'."]
        - ["'Report problems to any teacher. The committee reviews this policy each Term 4.'", "Reporting and review", "A broad policy needs a date to get better."]
  - check:
      type: reasoning
      q: "Write Westbrook's first policy in five or six lines, from your charter. Cover students and staff, and say when it will be refined."
      placeholder: "Applies to: … Allowed: … Responsible: … Honest use: … Data: … Review: …"
      models:
        - title: "A strong answer"
          text: "Applies to students and staff. Use AI only as your teacher sets for each task; staff use only school-checked tools for anything with student work. Teachers make final judgements on marks and reports. If you used AI, say what for; saying so is never in itself a reason for a lower mark. Report problems to any teacher. Version 1, Term 1: the committee refines it each Term 4, using what it learned."
        - title: "A different view that also works"
          text: "Westbrook uses AI where it helps learning and keeps the thinking with students. Every task says how much AI is allowed. People, not AI, decide anything that matters about a student. Student work goes only into tools the school has checked. We say when we've used AI. Reviewed every term this year, then yearly."
      criteria: ["It covers students and staff.", "Each line comes from a charter principle.", "It says when and how it will be refined."]
      explain: "A first policy can be broad, as long as each line comes from a principle and it says how it will get better."
```

### What a policy covers

Sort Westbrook's draft lines.

### Westbrook's first policy

Five or six lines, students and staff.

## Explain: charter, then policy

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "What's the difference between Westbrook's charter and its policy?"
      options: ["The charter says what matters; the policy says what students and staff do, and who is responsible", "They're the same document with different names", "The policy is for students; the charter is for staff"]
      answer: 0
      feedback: [null, "They work together, but do different jobs.", "Both cover everyone."]
  - check:
      type: question
      q: "The charter says each principle needs a way to check it. What should 'check' mean for a policy?"
      options: ["Check the policy is working for the school, for example learning holds up on tasks done without AI", "Check up on each student to catch AI use", "Check that everyone has read it"]
      answer: 0
      feedback: [null, "A school mostly can't catch individual AI use, and trying harms trust. Check whether the policy works.", "Reading it is a start, but doesn't show it's working."]
  - check: { type: reflect, text: "I can explain how a policy differs from a charter, and why a first policy can be broad." }
```

- A **charter** is principles: what matters, to test decisions against.
- A **policy** is what happens: who it covers, what's allowed, who is responsible, how to report, when it's reviewed. Staff are covered too.
- A **first policy** can be broad ("use AI the way your teacher sets"), because the school is still learning. It must say **how and when it will be refined**.
- A school **can't police most AI use**. So a policy works mainly through task design, being honest about AI use, and understanding why the thinking matters, not through catching people. "Check" means **checking the policy works**, not checking up on each student.

### Charter or policy?

What's the difference?

### Check what?

What should a policy check?

### Explain it

Charter, policy, and why the first one is broad.

## Elaborate: staff use

```step
stage: modify
tier: typical
check:
  type: question
  q: "A Westbrook teacher uses an AI tool to draft end-of-term report comments. Which line of the first policy matters most?"
  options: ["Teachers make the final judgement, even if AI helped draft them; and student information only goes into school-checked tools", "None: the policy is only about students", "Students must say when they used AI"]
  answer: 0
  feedback: [null, "Staff are covered too. Reports are decisions about students.", "That line is for students' work; another line covers this."]
```

AI is used by staff as well as students: planning, feedback, report comments, emails to families. A policy that only talks about students misses half its job.

Write one line for Westbrook's policy about staff use. Which charter principle does it come from?

## Elaborate: your school's policy

```step
stage: make
tier: wider
check: { type: reflect, text: "I compared our school's real AI policy with the parts of a policy, and found what it covers and what it leaves out." }
```

Read your school's real AI policy, or the policy AI sits inside (your teacher may give you a dated copy). Use the six parts from Explore:

- Which parts does it cover? Which are missing?
- Does it cover staff as well as students?
- Does it rely on **catching** AI use, or on task design and honesty?
- Does it say when it will be reviewed?

## Evaluate: policy, version 1

```step
stage: info
check:
  type: question
  q: "Westbrook's first policy says 'Use AI as your teacher sets for each task.' A committee member says it's too vague. What's the best reply?"
  options: ["It's broad on purpose for version 1; it says when we'll refine it, and the charter guides each teacher's choice", "They're right: list every allowed use now", "Vague policies are always best"]
  answer: 0
  feedback: [null, "Listing everything now would go out of date fast. Unit 4 looks at that balance.", "Not always: version 2 gets more specific where the evidence says it should."]
```

On paper, write **policy version 1**. You'll refine it in the last lesson, using what Units 2 and 3 find out.

| Policy, version 1 | |
|---|---|
| Applies to: | |
| What's allowed: | |
| Who is responsible for what: | |
| Being honest about AI use: | |
| Data and privacy: | |
| How to report problems: | |
| Refined by (who, when): | |

**Next unit:** someone proposes a tool. Should the school use it?
