---
order: 1
unit: kinds
title: Types of work
node: AC9HE7K04 n1
assumes: [AC9HS6K08 n1]
summary: "Work is effort that does something useful for someone, whether or not it is paid. Paid work can be full-time, part-time or casual, and some people work from home. Unpaid work, such as volunteering, caring for someone and running a household, is still work. Much of it is unrecognised: it isn't paid or counted, but families and communities rely on it."
language: maths
hook: "On a Saturday in Riverbend, six people are busy all day. Only four of them get paid. Are the other two working?"
---
Riverbend is a made-up town, and so are its people.

**Work** is effort that does something useful for someone. Some work is **paid** and some is **unpaid**.

Paid work comes in different arrangements:

- **Full-time:** a full working week, usually around 38 hours.
- **Part-time:** regular, set hours, but fewer than full-time.
- **Casual:** no promise of ongoing hours. You work the shifts you are offered, even if they often fall on the same days.
- **At home:** paid work done from home instead of a workplace.

**Unpaid** work includes **volunteering** (giving your time to a group or cause) and caring or housework for your family. A lot of unpaid work is **unrecognised**: no one pays for it or counts it, even though people rely on it.

## Predict: who is working?

```step
stage: predict
insight: "Committing first brings out the common idea that only paid jobs count as work."
check:
  type: predict
  q: "Ana spends every day caring for her father, who can't live on his own. She isn't paid. Is she working?"
  options:
    - "Yes: it is useful effort for someone, even though it is unpaid"
    - "No: it only counts as work if someone pays you"
    - "No: looking after family is just part of life, not work"
    - "Only if she has a qualification in caring"
  actual: "Ana is working. Caring is useful effort that someone would otherwise have to do, perhaps for pay. It is unpaid work, and often unrecognised."
```

## Try: a Saturday in Riverbend

```step
stage: run
insight: "Sorting six people shows the range of work, paid and unpaid."
check:
  type: sort
  q: "Sort each person into the type of work they do."
  options: ["Full-time", "Part-time", "Casual", "At home (paid)", "Unpaid"]
  items:
    - ["Rosa runs her car yard five long days a week", "Full-time", "A full working week is full-time."]
    - ["Sam works shifts at Riverbend Bakery whenever they ring him", "Casual", "No promise of ongoing hours: he works the shifts he is offered."]
    - ["Mai works at Riverbend Pantry every Monday, Tuesday and Wednesday", "Part-time", "Regular set days, fewer than a full week."]
    - ["Jo designs websites for clients from a desk in her spare room", "At home (paid)", "Paid work done from home."]
    - ["Ana cares for her father every day", "Unpaid", "Caring for family is unpaid work."]
    - ["The under-12 netball coach runs training every Thursday and game day every Saturday", "Unpaid", "The coach is a volunteer: unpaid, through a club."]
```

Four of the six are paid. All six are working.

## Worked example: Nib's rule about work

```step
stage: investigate
insight: "This is the hinge: if only paid jobs count as work, the rest of the course gets narrow. Nib's planted mistake is that rule."
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is deciding who in Riverbend is working. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: work-means-paid-job
      explain: "Line 3: work is useful effort for someone, paid or not. Ana's caring and the coach's volunteering are unpaid work. So line 4 is wrong too."
    smaller:
      check:
        type: question
        q: "If Ana stopped caring for her father, would someone else have to do it, maybe for pay?"
        options: ["Yes, someone would have to do it", "No, it doesn't need doing", "Only if he asked", "No, it isn't a real job"]
        answer: 0
        feedback:
          - null
          - "Her father can't live on his own, so it does need doing."
          - "It needs doing whether or not he asks."
          - "Being unpaid doesn't stop it being work."
        explain: "The work still needs doing. That is a sign it is work, even when it is unpaid."
  - check:
      type: question
      q: "Sam works at the bakery whenever they ring him. Mai works three set days every week. What is the difference?"
      options:
        - "Sam is casual (no promised hours) and Mai is part-time (set hours)"
        - "There's no difference: casual and part-time mean the same thing"
        - "Sam is part-time because he works fewer hours than Mai"
        - "Mai is casual because she only works three days"
      answer: 0
      feedback:
        - null
        - "They are different. Part-time has regular set hours. Casual has no hours promised ahead."
        - "It isn't about how many hours. Sam has no hours promised ahead, which makes him casual."
        - "Three set days every week is regular, so Mai is part-time."
      explain: "Part-time means regular set hours, fewer than full-time. Casual means no promise of ongoing hours."
  - check:
      type: question
      q: "Why does it matter that unpaid work counts as work?"
      options:
        - "Communities rely on it, even though it isn't paid or counted"
        - "It doesn't matter, because unpaid work isn't useful"
        - "Because one day everyone who volunteers will be paid"
        - "Because unpaid work is always more important than paid work"
      answer: 0
      feedback:
        - null
        - "Ana's father and the netball team both rely on unpaid work."
        - "Volunteering is a choice, not a waiting room for a paid job."
        - "Both matter. The point is that unpaid work counts too, not that it is worth more."
      explain: "Families, clubs and community groups rely on unpaid work. Calling it work helps us see it."
```

### Find Nib's mistake

```worked
\text{Paid} :: Rosa (full-time), Mai (part-time), Sam (casual), Jo (at home).
\text{Unpaid} :: Ana (caring for her father), the coach (volunteering).
\text{Test} :: Is it useful effort for someone? Would someone else have to do it otherwise?
\text{So} :: All six are working. Pay tells you the type of work, not whether it is work.
```

Now: where does Nib go wrong?

### Casual or part-time?

### Why unpaid work counts

## Vary: match the work

```step
stage: modify
insight: "Matching new descriptions to the terms checks they can be used beyond the Saturday six."
tasks:
  - check:
      type: match
      q: "Match each type of work to the description that fits it."
      pairs:
        - ["Full-time", "A nurse works a full week of shifts at the hospital"]
        - ["Part-time", "A librarian works every Thursday and Friday"]
        - ["Casual", "A student works at a takeaway shop when they call her in"]
        - ["At home (paid)", "A bookkeeper does clients' accounts from her kitchen table"]
        - ["Volunteer", "A retired teacher reads to children at the library each week without pay"]
  - check:
      type: question
      q: "Dev says: 'People only volunteer because they can't find a paid job.' What is the best reply?"
      options:
        - "People volunteer for many reasons, and many volunteers also have paid jobs"
        - "Dev is right: volunteering is just for people without work"
        - "Dev is right, because no one would work for free by choice"
        - "Volunteering doesn't count as work, so it doesn't matter why"
      answer: 0
      feedback:
        - null
        - "The netball coach might have a paid job too. Volunteering is a choice."
        - "Lots of people choose to give their time, for the community or because they enjoy it."
        - "Volunteering is unpaid work. It still counts."
      explain: "People volunteer to help, to belong, or because they care about the cause, often alongside paid work."
```

### Five kinds of work

### Dev's view of volunteers

## Practise: say what kind

```step
stage: practise
insight: "Short new cases make the terms quick to use."
tasks:
  - check:
      type: question
      q: "Jo works from home designing websites for paying clients. Is that real work?"
      options:
        - "Yes: it is paid work done from home"
        - "No: real work happens at a workplace"
        - "No: it only counts if she has a boss"
        - "Only if she works full-time hours"
      answer: 0
      feedback:
        - null
        - "Where the work happens doesn't decide whether it is work."
        - "Jo is paid by her clients. She doesn't need a boss for it to be work."
        - "Part-time or casual work from home is still work."
      explain: "Working from home is a type of paid work. The place changes; the work is the same."
  - check:
      type: question
      q: "Which of these is unpaid work that is usually unrecognised?"
      options:
        - "Cooking and cleaning for your household every day"
        - "A shift as a casual at the bakery"
        - "Running a car yard full-time"
        - "Designing a website for a paying client"
      answer: 0
      feedback:
        - null
        - "A casual shift is paid."
        - "Rosa is paid through her business's income."
        - "Jo's clients pay her."
      explain: "Housework is real work that someone has to do, but no one pays for it or counts it."
```

### Jo's work from home

### Unrecognised work

## Make: work in your community

```step
stage: make
insight: "Naming kinds of work you can see around you, paid and unpaid, makes the categories your own."
check:
  type: reflect
  text: "In my own book I named four kinds of work I can see in our community (at school, at the shops, at a sports club; not my own family's), gave an example of each, and wrote why one unpaid kind matters. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: paid, volunteer or unrecognised

```step
stage: make
tier: typical
insight: "Splitting unpaid work into volunteering and unrecognised work at home shows why some unpaid work is easier to overlook."
check:
  type: sort
  q: "Sort each kind of work."
  options: ["Paid", "Volunteer", "Unpaid at home or for family"]
  items:
    - ["A firefighter with the local volunteer brigade", "Volunteer", "Unpaid, through a group, and often thanked in public."]
    - ["Doing the shopping and cooking for your household", "Unpaid at home or for family", "Needed every day, but rarely counted or thanked."]
    - ["A pharmacist's shift at the chemist", "Paid", "The pharmacist is paid for the shift."]
    - ["Picking up a younger cousin from school every afternoon", "Unpaid at home or for family", "Family care that is easy to overlook."]
    - ["Collecting rubbish on a community clean-up day", "Volunteer", "Unpaid time given through a group."]
```

## Wider: should unpaid work be counted?

```step
stage: make
tier: wider
insight: "Weighing whether unpaid housework and caring should be counted when a country measures its economy shows that 'unrecognised' is a choice about what we count."
check:
  type: reasoning
  q: "When a country adds up the value of everything its economy produces, unpaid housework and caring are usually left out. Should they be counted? Give a reason for your view, and one reason someone might disagree."
  paper: true
  models:
    - title: "One view"
      text: "They should be counted. Cooking, cleaning and caring are work someone would otherwise be paid for, so leaving them out makes the economy look smaller than it is and hides the people who do them."
    - title: "Another view"
      text: "They are hard to count fairly. There is no price, so someone has to guess what each hour is worth, and the guess changes the answer. Counting them separately might be better than mixing them in."
  criteria: ["I gave my view and a reason.", "I gave a reason someone might disagree.", "I used the word unpaid or unrecognised."]
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
