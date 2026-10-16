---
title: Does research show that AI improves learning?
summary: Confront two credible studies with different results, investigate their comparisons and decide what claims they really support.
language: science
shape: 5e
unit: evaluating-evidence
order: 1
voice: { name: af_heart, speed: 1.1 }
---
Researchers have tested whether AI helps students. Some studies report substantial improvements; others find that completing practice with AI can leave students less prepared to work unaided. **Can apparently conflicting studies both be credible?**

## Engage: two headlines, one question

```step
stage: predict
check:
  type: predict
  q: "One study says AI tutoring improved test scores; another says unrestricted AI harmed later test performance. What is the best first response?"
  options: ["One study must be dishonest", "Check who participated, what each group did, and how learning was measured", "Average the headlines to get the truth"]
  actual: "Studies can investigate different people, conditions and outcomes. Their claims must be examined against their designs."
```

**Provocation:** Which is more convincing: an impressive improvement in marks, or the ability to explain *why* those marks changed?

## Explore: examine the actual studies

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "In the Bastani mathematics study, what could students in the control group use during practice?"
      options: ["Books and notes, without a provided GPT assistant", "The same guarded GPT tutor", "No learning resources of any kind"]
      answer: 0
  - check:
      type: question
      q: "In the Kestin physics study, what was the AI-tutoring condition compared with?"
      options: ["An otherwise identical non-AI digital tutor", "Instructor-led active-learning classes", "Students doing no physics learning"]
      answer: 1
  - check:
      type: question
      q: "Which statement correctly describes the Bastani GPT Tutor finding?"
      options: ["Its students did much better on practice, but their unaided test result was not statistically distinguishable from control", "The guarded tutor proved lasting superiority over all other digital tutorials", "Its students never used generative AI"]
      answer: 0
```

### Study A — high school mathematics

In [Bastani and colleagues' 2025 study](https://doi.org/10.1073/pnas.2422633122), students worked on mathematics problems with either books and notes (control), a broadly responding GPT assistant (GPT Base), or a GPT assistant supplied with teacher-prepared hints, solutions and safeguards (GPT Tutor).

Both AI groups performed better **during supported practice**. Later, without AI, the GPT Base group scored about **17% worse than the control group** on the study's test. GPT Tutor's unaided test performance was **not statistically distinguishable from control**. The authors did not compare GPT Tutor against an equally sophisticated non-generative digital tutorial.

### Study B — university physics

In [Kestin and colleagues' 2025 study](https://doi.org/10.1038/s41598-025-97652-6), 194 university physics students each learned one topic with a self-paced AI tutor and another topic in an instructor-led active-learning class, in random order. This is called a **crossover** design: every student experienced both, so the two groups started out the same. Test scores straight after each topic favoured the AI tutor.

But more than one feature differed: pace, format, feedback opportunities and who or what supported learning. The study compared **instructional packages**, not AI with an otherwise identical non-AI tutorial. It also did not establish durable learning over months.

### Two different comparisons

Bastani investigated *different forms of assistance during practice and later unaided performance*. Kestin compared *two approaches to teaching and short-term learning*. Neither result, alone, determines whether AI improves every kind of meaningful learning.

## Explain: read a research claim carefully

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "What is the comparison group in an experiment?"
      options: ["A group used as a reference for interpreting the effect of the tested condition", "The group with the highest scores", "The researchers who write the article"]
      answer: 0
  - check:
      type: question
      q: "Why is 'no statistically detectable difference' not the same as 'proved exactly equal'?"
      options: ["A study may not have enough precision to rule out smaller differences", "Statistical comparisons can never be useful", "A finding must always support AI"]
      answer: 0
  - check: { type: reflect, text: "I can distinguish an observed finding, the researchers' interpretation and an unsupported extension." }
```

### Comparison

An experiment's **comparison condition** helps us ask: better than *what*, under *which conditions*? A good study can support a narrow conclusion without answering every other useful question.

### Outcome

Researchers choose an **outcome measure**, such as practice scores, immediate tests or delayed independent transfer. The measure matters, and it may capture only part of meaningful learning.

### Interpretation

**Evidence** describes what was observed. **Interpretation** connects the observations to a claim. A headline may go beyond what the design justifies.

## Elaborate: debate the strongest claims

```step
stage: make
tier: typical
check: { type: reflect, text: "I defended a limited research claim, considered a challenge and identified an open question." }
```

Consider two positions:

- "Bastani gives us a good reason to be cautious about unrestricted AI during practice."
- "Kestin gives us a good reason to investigate well-designed AI tutoring further."

Could both positions be justified? What stronger claims would **not** follow? Discuss whether the absence of an excellent non-AI digital-tutor comparison changes how confidently we should recommend generative AI.

**Optional inquiry record or discussion:** Write a headline for one study that you think is accurate without being misleading. Then explain a limitation you deliberately left visible.

## Evaluate: what is warranted?

```step
stage: info
check:
  type: question
  q: "Which claim is justified by the studies described here?"
  options: ["AI has been proved to improve meaningful learning in all subjects", "Unrestricted AI can improve assisted results yet undermine later measured performance in some conditions", "A positive immediate test proves AI alone caused the benefit"]
  answer: 1
```

A school leader says, "Research proves we should replace our interactive tutorials with AI tutors." Explain what comparison would be needed to examine that proposal fairly.

## Learning with AI: do not outsource the inference

```step
stage: info
check: { type: reflect, text: "I can ask what a research study actually compared and avoid treating a headline as a verdict." }
```

You do not need an AI account. If you use an approved assistant to summarise research, check its claims against the original source.

**Next inquiry:** Even when we know a student's score, do we know how accurately they understand their own performance?
