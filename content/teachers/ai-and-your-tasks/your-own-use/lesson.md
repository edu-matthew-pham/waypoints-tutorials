---
title: Your own use
summary: "AI can help with planning, feedback drafts and report comments. Four lines keep it safe: a person decides and owns what goes out, student work only into school-checked tools, check before it goes out, and say when AI helped. About 20 minutes; no AI needed."
hook: "The rules you set for students apply to you too: a person decides, student work is students' data, and honesty goes both ways."
language: science
shape: primer
unit: own-use
order: 5
---
Lessons 1 to 4 were about students' use of AI in your tasks. This one is about **yours**: planning, resources, feedback and reports. It points to your school's staff conduct and privacy rules; it doesn't replace them.

## Think first

```step
stage: predict
insight: "The biggest risk in staff AI use is usually where student data goes, not the quality of what comes back."
check:
  type: predict
  q: "A teacher pastes 28 students' essays, with their names, into a free AI app on their phone to draft feedback overnight. What's the main problem?"
  options: ["Students' work and names have gone into a tool nobody at school has checked", "The feedback might be generic", "It's cheating", "Nothing: it saves time"]
  actual: "Where the data went. Student work and names are personal information, and an unchecked app may keep them, use them for training, or share them under terms nobody at school has read. Generic feedback is a problem too, but a fixable one; the data has already left."
```

## The idea

```step
stage: investigate
insight: "Four lines cover nearly every staff use: a person decides, the data stays in checked tools, it's checked before it goes out, and AI help is acknowledged."
```

Four lines for your own use:

1. **A person decides, and owns what goes out.** A comment, a mark, an email, a resource: you're responsible for it as if you'd written every word. AI drafts; you decide.
2. **Student work and personal details only into school-checked tools.** Names, work, marks, wellbeing notes, anything about a family: only in tools the school has checked, with the settings it has chosen. Planning with no student data can go further (your school's guidelines say which tools).
3. **Check before it goes out:** accuracy (made-up facts and sources), tone, and fairness (does it describe some students differently?).
4. **Say when AI helped**, the way you ask students to. A line on a resource, or a word when it matters (feedback that a student might think you wrote word for word).

**AI that acts** needs one more: **a person sends, submits or changes anything on a school account**. An AI that can open your email or the school's systems drafts, and you press Send.

Where these live: your school's **staff conduct** and **privacy** policies, with the approved tools in its **termly guidelines**. If those don't say what you need, it's a question for whoever holds the school's AI map.

## Worked example

```step
stage: investigate
insight: "Report comments show all four lines at once: data, ownership, checking for fairness and accuracy, and honesty."
check:
  type: question
  q: "A teacher wants help writing 60 report comments. Which way follows all four lines?"
  options:
    - "In the school-checked tool, give each student's strengths and next step in your own words (no names), ask for a draft, then edit each one, check it's true and fair, and add the name yourself"
    - "In any AI tool, paste last year's comments with names and ask it to write this year's"
    - "Ask a free AI app to write 60 different comments, then assign them at random"
    - "Don't use AI for reports at all"
  answer: 0
  feedback:
    - null
    - "Names and old comments go into an unchecked tool, and the comments aren't about this year."
    - "No data leaves, but nobody decided which comment fits which student."
    - "That's a choice a teacher can make, but the four lines show a safe way to save time."
  explain: "Your judgement goes in (strengths, next step), no names leave the school's checked tool, and you edit and check every comment. Whether reports mention AI help is a school decision: follow its line."
```

## Check

```step
stage: practise
insight: "Sorting real staff uses shows the line is usually about data and ownership, not whether AI is used."
check:
  type: sort
  q: "Sort these staff uses."
  options: ["Fine", "Fine with conditions", "Not like this"]
  items:
    - ["Brainstorming ideas for a Year 8 unit, with no student information", "Fine", "No student data, and you decide what to use."]
    - ["Drafting a worksheet, then checking every fact before it's used", "Fine", "Checked before it goes out."]
    - ["Drafting feedback on an anonymised essay in the school-checked tool, then editing it", "Fine with conditions", "Checked tool, no names, and you own the result; say so if the school asks."]
    - ["Pasting a student's wellbeing notes into a free app to draft an email to their parents", "Not like this", "Sensitive data about a student and family in an unchecked tool."]
    - ["Using AI to mark a test and entering the marks without looking", "Not like this", "A person decides: marks are decisions about students."]
    - ["Translating a newsletter for families, then asking a fluent colleague to check it", "Fine with conditions", "No personal data, and checked by a person before it goes out."]
    - ["Letting an AI agent reply to parent emails from your school account on its own", "Not like this", "A person sends anything on a school account."]
    - ["Making a set of practice questions from your own notes", "Fine", "Your material, checked by you."]
```

## Apply

```step
stage: make
insight: "Naming one use and its conditions turns the four lines into a habit teachers can start on Monday."
tasks:
  - check:
      type: reasoning
      q: "Choose one way you use AI now, or would like to. Say how it meets each of the four lines, or what you'd change."
      placeholder: "Use: … A person decides: … Data: … Checked: … Say so: …"
      models:
        - title: "Feedback drafts"
          text: "Use: first-draft feedback on Year 10 essays. A person decides: I edit every comment and add my own line. Data: only in the school's checked tool, names removed. Checked: I read each against the essay; I cut anything generic. Say so: students know I use AI to draft and that every comment is mine."
        - title: "Planning"
          text: "Use: ideas for a practical on reaction rates. A person decides: I choose and adapt. Data: no student information, so any approved tool. Checked: I test the practical myself before class. Say so: not needed for my own planning; I'd mention it if I shared the resource."
      criteria:
        - "I've said who decides and owns what goes out."
        - "I've said what data goes into which tool."
        - "I've said how it's checked, and whether I say AI helped."
  - check: { type: reflect, text: "I know where my school's staff conduct and privacy lines on AI are, or who to ask." }
```

### One use, four lines

Pick something real: a use you already have, or one you'd like to start.

### Where the rules are

Find your school's staff conduct and privacy lines on AI, and its approved tools list. If you can't, ask whoever holds the school's AI map.

```teacher
summary: "Teachers apply four lines to their own AI use (a person decides and owns it, student data only in school-checked tools, check before it goes out, say when AI helped), see them on report comments, and check one use of their own."
time: 20
timing: "Think first 2 min · The idea and worked example 7 min · Check 4 min · Apply 7 min"
goals:
  - "I can say who decides and owns what I send when AI helped."
  - "I can tell which student information may go into which tool."
  - "I can check AI-drafted work for accuracy, tone and fairness before it goes out."
before: |
  **For a facilitator.** A third, shorter session can cover lessons 5 and 6 (about 40 minutes), or lesson 5 alone (25 minutes). Before it, find your school's staff conduct and privacy lines on AI and the approved tools list from the termly guidelines, and have them ready to show. If they don't exist yet, say so: that's a finding for the committee, not a reason to skip the lesson.

  This lesson points to policies; it doesn't make them. If a teacher asks "is tool X allowed?", the answer is the guidelines, or the person who holds the school's AI map.

  The four lines match the staff lines that *AI at our school* lesson 11 asks committees to refine (teachers own feedback, school-checked tools, say when AI helped; a person sends, submits or changes anything on a school account).

  **Know-how gaps.** Collect any "I didn't know that" moments (often about data or which tools are checked). Pass them to the committee: guidance or examples fix them; a new rule doesn't.
running:
  - "Think first: lock in. Most choose the data answer; ask what would make the generic-feedback worry go away (editing)."
  - "The idea: put up the school's actual staff conduct and privacy lines next to the four."
  - "Worked example: discuss option 4. Not using AI is a legitimate choice; the lesson isn't encouraging use."
  - "Check: individual, then talk through the translation and marking items."
  - "Apply: individual. Collect, anonymously, any questions the school's rules didn't answer."
struggle: "Some teachers hear this as being told to use AI; others as being told they've done wrong. Say both: it's for people who use it already or want to, and the line is data and ownership, not whether."
stuck:
  - see: "A teacher doesn't know which tools are school-checked."
    ask: "Where would the approved list be?"
    fix: "The termly guidelines. If there isn't one, note it for the committee and use no student data until there is."
  - see: "A teacher asks whether removing names makes any tool safe."
    ask: "Could the work still identify the student or their family?"
    fix: "Often it can (a story about their home, a photo). Student work stays in checked tools."
  - see: "Someone asks whether they must tell students every time AI helped."
    ask: "Would the student assume you wrote it word for word?"
    fix: "Then say so. Follow the school's line where it has one."
stretch: "Write the four lines for your faculty in your own words, with one example each from your subject."
support: "Do the Check as a group, then pick the model closest to their own use and change it."
leads: "Lesson 6 (Judge a tool, optional) is a short route through *Choosing AI tools* for when someone in the faculty proposes one."
exit:
  q: "A colleague wants to use AI to draft parent emails about a student. What would you tell them?"
  a: "Only in a school-checked tool, with only what's needed; read and edit every word; and send it yourself. They own what goes out."
```
