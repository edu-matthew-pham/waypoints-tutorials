---
order: 4
unit: core
title: From slang to formal
summary: "Language sits on a scale from slang to formal: slang, colloquial, conversational and formal. Polite is not the same as formal. Formal language uses full forms, exact words and no slang, and it suits official writing such as reports and minutes."
language: maths
node: [AC9E6LA01 n1]
explainPicture: { ref: text.yml#explain-pic, caption: "The same idea can be said in four ways. The words move along a scale from slang to formal." }
hook: "Two students describe the same excursion, one to a friend and one in a report. Would their words be the same?"
---
Words change with the situation. A useful way to see it is a scale with four steps:

- **Slang**: very casual words used by a close group. *That's sick!*
- **Colloquial**: everyday, relaxed words. *Too easy, mate.*
- **Conversational**: ordinary speech that most people would not mind hearing anywhere. *I'm heading to the library.*
- **Formal**: full forms, exact words and no slang. *I shall be at the library until noon.*

**Polite** and **formal** are different. You can be polite in a casual way (*Cheers, that's really kind of you!*), and you can be formal without being warm.

## Predict: where does it sit?

```step
stage: predict
insight: "Predicting where an Australian everyday sentence sits on the scale previews the four steps."
check:
  type: predict
  q: "'Too easy, mate. See you this arvo.' Which step on the scale is this?"
  options: ["Slang", "Colloquial", "Conversational", "Formal"]
  actual: "Colloquial. Words such as 'Too easy' and 'arvo' are relaxed everyday speech, but most people use them, not only one small group."
```

## Try: place each on the scale

```step
stage: run
insight: "Placing eight sentences on a four-step scale shows how slang, colloquial, conversational and formal differ."
try: { playground: board, starter: "text.yml#run", height: 520 }
hint: ["Which would a small group of friends use but a stranger might not follow?", "Which has full forms and no everyday shortcuts?"]
smaller:
  check: { type: question, q: "Which sentence is more formal?", options: ["I'm gonna head off.", "I will now depart.", "They are equally formal"], answer: 1, feedback: ["'Gonna' is a relaxed spoken short form.", null, "One uses a short form and the other uses full forms."], explain: "The second uses full forms and no shortcuts, so it sits higher on the scale." }
check: { type: board, text: "Place each sentence on the scale: slang, colloquial, conversational or formal.", when: "n_right = 8 and n_wrong = 0", explain: "That's lit is slang. Heaps good, eh? is colloquial. See ya later! is slang or colloquial. I'm going to get some lunch and I'm not sure about that idea are conversational. I will be taking my lunch break and The committee has resolved are formal. Nah, can't be bothered sits between slang and colloquial." }
```

Were you right about 'Too easy, mate. See you this arvo.'? Most words on the scale are about the group that uses them.

## Worked example: polite or formal?

```step
stage: investigate
insight: "Sorting polite-but-casual lines from formal ones, spotting a friendly line in a formal letter and naming a feature of formal language shows that polite is not formal."
tasks:
  - check:
      type: sort
      q: "Is each line polite but not formal, or formal?"
      options: ["Polite but not formal", "Formal"]
      items:
        - ["Thanks so much, that's really kind!", "Polite but not formal", "It is warm, and it uses a short form."]
        - ["I wish to express my gratitude for your assistance.", "Formal", "It uses full forms and exact words."]
        - ["Could you give me a hand, please?", "Polite but not formal", "It is polite, but relaxed."]
        - ["Kindly refrain from using mobile telephones.", "Formal", "It uses an official phrase and exact words."]
        - ["Would you mind shutting the window, please?", "Polite but not formal", "It is polite, but everyday."]
        - ["The board requests that members be seated.", "Formal", "It is official and impersonal."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's formal letter to Mr Hall, one line at a time. One line is friendly and polite, but not formal. Click it."
      answer: 3
      fault: logic
      misconception: polite-is-formal
      explain: "Line 3 thanks Mr Hall in a warm, casual way ('Thanks a heap', 'it was great!'). That is polite but not formal. A formal line would be: 'Thank you for permitting us to run it.'"
  - check:
      type: question
      q: "Which is a feature of formal writing?"
      options: ["Short forms such as don't and can't, to sound natural", "Full forms such as do not, and exact words", "Slang that shows you belong to the group"]
      answer: 1
      feedback: ["Short forms are natural in speech, which makes them less formal.", null, "Slang belongs to a small group, not to official writing."]
      explain: "Formal writing uses full forms, exact words and no slang."
```

### Polite or formal?

```worked
\text{Look for short forms and slang} :: Do the words sound relaxed or official?
\text{Look for warmth} :: A warm, polite line can still be casual.
\text{Decide the step} :: Polite is about kindness. Formal is about how official the words are.
```

### Spot the casual thank-you

### Name a feature of formal language

## Vary: make it formal

```step
stage: modify
insight: "Choosing the formal wording in a short report shows which words move a sentence up the scale."
try: { playground: board, starter: "text.yml#vary", height: 340 }
hint: ["Which choice is the most official-sounding?", "Which choice would you not say aloud to a friend?"]
check: { type: board, text: "Choose the formal wording for each report sentence.", when: "n_right = 2 and n_wrong = 0", explain: "Are of the view that and resolved are the formal choices. Reckon and sorted out are colloquial." }
```

## Practise: find the informal words

```step
stage: practise
insight: "Colouring the informal words in a note to the librarian applies the scale to a real piece of writing."
try: { playground: board, starter: "text.yml#practise", height: 340 }
hint: ["Which words would you say to a friend but not put in a letter to the librarian?", "Which words are slang or very relaxed?"]
check: { type: board, text: "Colour every informal word in the note.", when: "chains_ok = 1 and n_stray = 0", explain: "Reckon, heaps, rubbish and stuff are the informal words. The rest of the note is already careful." }
```

## Make: write it formally

```step
stage: make
insight: "Rewriting an informal message formally puts the formal wording to use in a real piece of writing."
try: { playground: board, starter: "text.yml#make", height: 400 }
hint: ["Which words in the message above are informal?", "How would the principal say it in a report?"]
check: { type: board, text: "Rewrite the message formally in at least three sentences, with no short forms and no exclamation marks.", when: "is_written = 1 and n_contractions = 0 and n_exclaims = 0 and n_sentences >= 3", explain: "You wrote a formal message. Ask a partner to point to a word they would not say aloud to a friend, and check it is not in your text." }
```

The board counts short forms, exclamation marks and sentences. It cannot see every short form (such as oval's), so check for 's yourself. It cannot tell whether your words are exact, so ask a partner or your teacher.

## In your own writing

```step
stage: make
tier: typical
insight: "Checking a real message against the scale puts the idea to use outside the board."
check: { type: reflect, text: "I looked at a message I wrote and said which step of the scale it sits on, and why." }
```

## Wider: online registers

```step
stage: make
tier: wider
insight: "Comparing a group chat with a school email applies the scale to another setting at the same level."
check:
  type: reasoning
  q: "Compare how a group chat with friends and an email to a teacher are worded. Give two differences, and say what each shows about the reader."
  placeholder: "In the group chat ... In the email ..."
  models:
    - title: "A strong answer"
      text: "The chat uses short forms and slang, which shows the reader is a close friend. The email uses full forms and a greeting, which shows the reader is someone in charge."
    - title: "A different view that also works"
      text: "The chat is quick and has no greeting because friends already know each other. The email opens and closes politely because the teacher has a different role."
  criteria: ["I gave two differences.", "I said what each shows about the reader.", "I used the scale, not 'good' or 'bad'."]
  explain: "Both are right for their reader. The difference is the step on the scale."
```
