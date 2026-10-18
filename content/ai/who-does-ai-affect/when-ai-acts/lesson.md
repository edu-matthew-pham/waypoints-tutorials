---
title: When AI acts
summary: "When AI answers or acts for a company or a person, someone is still responsible, and a person should confirm anything that can't easily be undone."
language: science
shape: 5e
unit: who-decides
order: 5
voice: { name: af_heart, speed: 1.1 }
---
Some AI doesn't just answer: it **acts**. It can book, pay, send or delete. When it gets something wrong, **who is responsible?** And **when should it stop and ask?**

**Kind of AI:** takes actions (AI agents), and a chatbot that makes new content.

## Engage: whose fault?

```step
stage: predict
check:
  type: predict
  q: "An airline's chatbot gives a customer wrong advice about getting money back on a ticket. Who is responsible?"
  options: ["The airline", "The chatbot", "The customer, for believing it"]
  actual: "A tribunal in Canada decided the airline was responsible for its chatbot's advice, just like anything else on its website."
```

## Explore: the chatbot case

```step
stage: run
tasks:
  - check:
      type: question
      q: "The airline argued it wasn't responsible for what its chatbot said. Why did the tribunal disagree?"
      options: ["The chatbot was part of the airline's website, and the airline is responsible for its website", "Chatbots are people", "The customer should have asked a different chatbot"]
      answer: 0
      feedback: [null, "A chatbot isn't a person. Someone has to be responsible for it.", "The customer used the airline's own chatbot, on the airline's own site."]
  - check:
      type: sort
      q: "A made-up AI assistant books a bus trip for you. Should it just do each step, or ask you first?"
      options: ["Just do it", "Ask me first"]
      items:
        - ["Search the bus timetables", "Just do it", "Searching changes nothing, so it's easy to undo."]
        - ["Compare the prices of three trips", "Just do it", "Nothing is spent or sent."]
        - ["Pay $35 for a ticket", "Ask me first", "Spending money is hard to undo."]
        - ["Give your name and phone number to a website you've never used", "Ask me first", "Once your details are shared, you can't take them back."]
        - ["Cancel your old booking", "Ask me first", "A cancelled booking may not come back."]
        - ["Email you the plan before it books anything", "Just do it", "This is how it asks you."]
```

In Canada, a man asked **Air Canada's chatbot** how to get a discounted fare. The chatbot gave him **wrong advice**. When he asked for the money, the airline said the chatbot was responsible for its own words. A tribunal disagreed in 2024: the airline is **responsible for all the information on its website**, chatbot included.

That chatbot only **answered**. Now AI agents can **act**: book, pay, send, delete.

### Who's responsible?

Read the tribunal's reason.

### Ask me first

Sort each step.

## Explain: confirm before you can't undo

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Which steps should an AI agent ask about first?"
      options: ["Ones that are hard or impossible to undo, like paying, sharing details or deleting", "Every step, even searching", "None: it should just finish the job"]
      answer: 0
      feedback: [null, "Asking about every search would make it useless. Ask where a mistake can't be undone.", "A wrong payment or a deleted file may not come back."]
  - check: { type: reflect, text: "I can say who is responsible when an AI answers or acts, and which actions a person should confirm first." }
```

Two ideas:

1. **Someone is responsible.** An AI isn't a person. The company or person who uses it is responsible for what it says and does.
2. **Confirm before you can't undo.** An agent should stop and ask a person before it pays, shares details, deletes or sends something that matters.

### Which steps?

Which ones need a person?

### Explain it

Say both ideas in your own words.

## Elaborate: keep a person in control

```step
stage: modify
tier: typical
check:
  type: question
  q: "Australian government guidance for businesses using AI says to keep meaningful human oversight and control. What would that look like for the bus-booking agent?"
  options: ["A person can see its plan, approve payments, and stop it", "The agent works faster", "Nobody checks it, so it saves time"]
  answer: 0
  feedback: [null, "Speed isn't control.", "That's the opposite of keeping control."]
```

In 2025 the Australian Government's **Guidance for AI Adoption** told businesses to **decide who is accountable** and to **integrate meaningful human oversight and control** of AI.

Use the lens on an AI agent at a shop that can give refunds on its own. Who gains? Who could be harmed? Who decides what it's allowed to do?

## Elaborate: headline or lab?

```step
stage: make
tier: wider
check: { type: reflect, text: "I compared a scary headline with what the original research said, and explained the difference between a lab test and a real event." }
```

In 2025 an AI company published research in which AI agents, in made-up test situations, did harmful things such as threatening a fictional person. Headlines called it "rogue AI". The company's own report said the behaviours **occurred in controlled simulations**, and called one test "extremely contrived".

Why do researchers test agents in made-up situations? What's the difference between "this happened in a lab test" and "this happened to real people"? Write a headline that is true to the research.

## Evaluate: set the rules

```step
stage: info
check:
  type: question
  q: "Your school wants an AI agent to answer parents' emails and book meetings with teachers. Which rule matters most?"
  options: ["The school stays responsible, and a person checks anything it can't undo, like cancelling a meeting", "The agent can do anything, to save time", "The agent is responsible for its own mistakes"]
  answer: 0
  feedback: [null, "Then nobody can fix a serious mistake in time.", "An AI can't be held responsible: the school can."]
```

On paper: **"An AI agent should ask me before it \_\_\_\_, because \_\_\_\_."**

**Next unit:** who pays the costs of AI that we don't see.
