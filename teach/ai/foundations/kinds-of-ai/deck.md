---
marp: true
theme: default
html: true
---

# What kind of AI is it?

AI Foundations · How AI learns

<!-- Speaker note: Students sort everyday systems into four kinds of AI (rules written by people, predict or sort, make new content, take actions), then match each kind to the way it usually goes wrong. About 25 minutes. -->

---

## Today

**We are learning to** sort everyday systems into four kinds (rules written by people, models that predict, models that make new content, and agents that act), then match each kind to the way it usually goes wrong.

- I can sort a system into one of four kinds: rules written by people, predict or sort, make new content, or take actions.
- I can name one way each kind usually goes wrong.
- I can say where to look first when each kind gets something wrong.

<!-- Speaker note: Before class: **Core idea:** "AI" covers different kinds of system that fail for different reasons, so the first question about any system is "which kind is it?". Students have already built two kinds in this course: a generator (Unit 1's dice generator, a tiny content maker) and a learner (Unit 2's fruit sorter and neural network). This lesson adds the two they haven't met: rules written by people (automation without learning) and agents (generative AI with tools that takes actions). Plain-word names used with students, with the usual terms in brackets: rules written by people (rule-based automation); learns to predict or sort (predictive machine learning: classifiers, scores, rankings, recommenders); makes new content (generative AI); takes actions (AI agents). Rules are not machine learning, but news stories often call them "AI" or "an algorithm". Real examples for discussion (teacher background, not needed in class): Robodebt was automation without AI; England's 2020 exam-grade adjustment was a statistical formula. The later courses AI in your life and Who Does AI Affect? open with a short recap of this lesson and use these four names. All the systems in the lesson are generic or made up; it makes no claims about a real product. No account, online tool or board is needed. The sorts work as paper cards. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Should a news story be allowed to call a simple rule 'AI'?**

- What would a reader think if they heard 'AI decided'?
- Does it matter who wrote the rule, or who checked it?

<!-- Speaker note: Both sides are fair: 'AI' is used loosely in everyday speech, but the kind changes who is responsible and what to check. Come back to it in the Evaluate step. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Engage: predict

**An advert says a school's bell app, a spam filter and a chatbot all 'use AI'. Do they all work the same way?**

- No: they could work in quite different ways
- Yes: AI is AI
- Only the chatbot is really AI

<!-- Speaker note: What happens: They can work very differently. The bell app may just follow a rule someone typed in, the spam filter learned from examples, and the chatbot makes new text. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: take a vote on the advert before showing the four kinds. Ask what makes something 'AI'. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Is it all AI? <span style="font-size:.6em;color:#64748b">(3 min)</span>

Hands up: does a bell app use AI? A spam filter? A chatbot? Two students who disagree explain why.

<!-- Speaker note: Don't settle it yet; the sort does. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* They can work very differently. The bell app may just follow a rule someone typed in, the spam filter learned from examples, and the chatbot makes new text.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Explore it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/ai/foundations/kinds-of-ai/?full=step-2#step-2](https://tutorials.learningwaypoints.com/ai/foundations/kinds-of-ai/?full=step-2#step-2)

<!-- Speaker note: The four kinds: 1. **Rules written by people.** The computer follows instructions a person wrote. It doesn't learn. News stories often still call this "AI" or "an algorithm". 2. **Learns to predict or sort.** It learns patterns from labelled examples, then predicts or sorts new cases. Your fruit sorter and neural network were this kind. 3. **Makes new content.** It learns from huge amounts of text, pictures or sound, then makes something new. Your dice generator was a tiny version. Chatbots and image makers are this kind. It is often called **generative AI**. 4. **Takes actions.** It is usually a content-making AI that can also use tools: it plans steps and does things, like buying, sending or deleting. It is often called an **AI agent**. Ask: did a person write the rule, did it learn from examples to sort, does it make something new, or does it do something for you? -->

<!-- Speaker note: Teacher: sort as a class or in pairs with cards. The bell app and the library rule are the ones students most often call AI; ask whether anything was learned. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Sort the cards <span style="font-size:.6em;color:#64748b">(7 min)</span>

In pairs, sort the system cards into four columns: rules written by people, learns to predict or sort, makes new content, takes actions. For each card, say what makes it that kind.

<!-- Speaker note: Print the eight systems from the Explore step as cards. The deciding question: did a person write the rule, did it learn from examples, does it make something new, or does it act? -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Match the problems

**Which way of going wrong fits each problem?**

Groups: The rule is wrong, and it is used on everyone · It learned from wrong or missing examples · It made something convincing that isn't true · It acted before anyone checked

The library system sends 'Your book is late!' to students who were away sick, every single time · A spam filter keeps hiding emails from a new sports club, because it never saw emails like them · A chatbot writes a book list for your project. Two of the books don't exist · An assistant pays for the wrong bus ticket before you can look at it

* Answer: The library system sends 'Your book is late!' to students who were away sick, every single time → The rule is wrong, and it is used on everyone; A spam filter keeps hiding emails from a new sports club, because it never saw emails like them → It learned from wrong or missing examples; A chatbot writes a book list for your project. Two of the books don't exist → It made something convincing that isn't true; An assistant pays for the wrong bus ticket before you can look at it → It acted before anyone checked

<!-- Speaker note:  -->

<!-- Speaker note: Teacher: the four ways of going wrong. Link 'learned from wrong or missing examples' back to the fruit sorter lesson. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 16px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Where to look

**A rule-following system and a system that learned from examples both give the wrong answer. Where would you look first to fix each?**

- Rules: the rule people wrote. Learned: its examples and labels
- Both: nothing can be fixed
- Both: the computer's speed

* Answer: Rules: the rule people wrote. Learned: its examples and labels

<!-- Speaker note:  -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 28px; }</style>

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Where would you look? <span style="font-size:.6em;color:#64748b">(4 min)</span>

Pick one problem card. Which kind of system is it? Who would you ask to fix it, and what would they change?

<!-- Speaker note: Rules: the people who wrote the rule. Learned: the examples and labels. Content: check before using it. Actions: a person confirms first. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Elaborate: one app, several kinds

**A made-up homework app does all of these. Which kind is each part?**

Groups: Rules written by people · Learns to predict or sort · Makes new content · Takes actions

It writes an explanation when you ask a question · It suggests which topic to practise next, from what students like you got wrong · It hands in your work to your teacher when you press Submit · It can find a due date in your calendar and hand in your work on its own

* Answer: It writes an explanation when you ask a question → Makes new content; It suggests which topic to practise next, from what students like you got wrong → Learns to predict or sort; It hands in your work to your teacher when you press Submit → Rules written by people; It can find a due date in your calendar and hand in your work on its own → Takes actions

<!-- Speaker note:  -->

<!-- Speaker note: Teacher: real apps mix kinds. Ask which part of the homework app most needs a person to check before it acts. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 19px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: Elaborate: what does the headline mean?

A headline says: **"AI decided who got the job."**

That could mean a rule people wrote ("only people with a licence"), a model that learned from past hiring, a chatbot that wrote a summary of each person, or an agent that sent the rejection emails. For each meaning, what is the first question you would ask?

Rewrite the headline so it says which kind it was.

<!-- Speaker note: For students who need more support: Give the four kinds as column headings on paper, each with one example from the course already in place (dice generator, fruit sorter), so students only place the new cards. For early finishers: Find a system at home or school that mixes at least two kinds. Which part would you want a person to check? The hard part, on purpose: Students tend to call anything on a computer 'AI', and to think all AI works like a chatbot. The sort separates what was written by people from what was learned or made. When students get stuck: A student puts the bell app or the library rule under 'Learns to predict or sort'. Ask: Did anyone give it examples to learn from, or did a person type in what to do? Fix: If a person wrote exactly what happens, it is a rule. Learning needs examples. / A student puts the booking assistant under 'Makes new content'. Ask: Does it only write something, or does it do something in the world? Fix: Paying and emailing are actions. An agent usually also writes content, but acting is what makes it an agent. / A student thinks the video app follows rules because it 'always' picks similar videos. Ask: Did a person write which video comes next, or did it learn from what people watched? Fix: It learned patterns from what people watched, so it predicts. -->

---

## Evaluate: which kind, so which question?

On paper, write: **"\_\_\_\_ is the kind of AI that \_\_\_\_. It can go wrong when \_\_\_\_."** Do it for one kind you used in this course.

**Where this leads:** whenever you meet a new system, ask which kind it is before you ask whether to trust it.

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A chatbot gives you a made-up fact, and a bell app rings at the wrong time. Why do they go wrong in different ways?**

* The chatbot makes new content, so it can make something likely-sounding that isn't true. The bell app follows a rule a person typed in, so the rule (or the time typed in) was wrong.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Unit 3 turns to talking with AI: writing a clear request, then following up. The four kinds come back in the later AI in your life and Who Does AI Affect? courses. -->
