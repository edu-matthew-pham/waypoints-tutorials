---
order: 4
unit: finding
title: Where to look, and how to search
node: [AC9HC7S02 n1, AC9HC7S02 n2, AC9HE7S02 n1, AC9HG7S02 n2, AC9HH7S02 n2]
summary: "Different questions need different places to look: a count needs the records, a rule needs the rule-maker, a view needs the people who hold it. Then a search works best with a few strong words, an exact phrase kept together, and sometimes a limit to one kind of site or collection."
language: science
shape: primer
hook: "You need to know how many students buy from the Parkside tuckshop each day. You could search the internet, ask a friend, or look at the till records. Which first?"
assumes: [AC9HS6S02 n1, AC9HS6S02 n2, AC9HG7S02 n1, AC9HH7S02 n1]
---
Once you have a question, ask **what would answer it, and who would have it**. A count is in the records. A rule is with whoever makes the rule. A view is with the people who hold it. Then you search, and a search works best when it is a few strong words.

Every web page, report and address in this lesson is made up. Addresses end in `.example`, so none is a real site.

## Think first

```step
stage: predict
insight: "Committing to a choice shows the move: start from what the question needs, not from the nearest search box."
check:
  type: predict
  q: "How many students buy from the Parkside tuckshop each day? Where do you look first?"
  options: ["The tuckshop's own sales records", "A web search for tuckshops", "A news site", "Ask one friend"]
  actual: "The tuckshop's own sales records. They have the count. A web search for 'tuckshops' finds tuckshops everywhere. A news site is unlikely to have it, and one friend only knows their own habits."
```

## Try: match the question to the source

```step
stage: run
insight: "Matching shows that the kind of question points to the kind of source."
check:
  type: match
  q: "Where would you start for each question?"
  pairs:
    - ["How many students buy from the tuckshop each day?", "The tuckshop's own records (data)"]
    - ["What are the rules for closing a road?", "The council's website (a government source)"]
    - ["What did local people say about closing Mill Road?", "A local news report"]
    - ["How much has the Kilby River dropped since 2000?", "River records from the water authority (statistics)"]
```

Was your guess right? Four kinds of source turn up a lot in a civics or economics investigation: **government websites** (rules and decisions), **news** (what people say and what happened), **specialist reports** (experts looking closely at something) and **statistics** (counts and measurements). Each is good for a different job.

## The idea: strong words, not the first result

```step
stage: investigate
insight: "Searching with a few strong words, and not stopping at the first result, follows from choosing the source first."
tasks:
  - check:
      type: question
      q: "You want the rules for closing a road. Which search is strongest?"
      options: ["\"road closure\" council rules", "tell me about roads", "road", "can you explain to me what a council is and what it does and what rules there are about roads"]
      answer: 0
      feedback: [null, "It is too wide: it could mean any road in any country.", "One word finds far too much.", "The long sentence pulls in pages that match 'explain' and 'what', not the thing you want."]
      explain: "Quote marks keep \"road closure\" together as a phrase. The other words are the thing (council rules). Your search tool may use different symbols, so look at its help page."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is looking for the daily count. Click the line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: first-result-is-the-place
      explain: "Line 3: Nib thinks the first result is always the best place. The right place depends on the question. The count is in the tuckshop's own records, so the first search result is the wrong place to start."
    smaller:
      check: { type: question, q: "Where would the daily count of students be written down?", options: ["The tuckshop's own records", "A search for tuckshops", "A news site", "A friend's memory"], answer: 0, explain: "The people who sell the food keep the count." }
  - check:
      type: question
      q: "A search for the Kilby River's water level gives too many pages. Which change helps most?"
      options: ["Add the water authority's name, or limit the search to its site", "Use a shorter word", "Add 'please'", "Click the first result"]
      answer: 0
      feedback: [null, "Fewer words usually finds more.", "Polite words do not narrow a search.", "Clicking does not narrow the search."]
      explain: "Naming the maker or limiting to one site narrows it to the place that would have the records. Many search tools use site: followed by an address for this."
```

### A strong search

### Find Nib's mistake

### Narrowing down

## Vary: collections and catalogues

```step
stage: modify
insight: "Some sources are collections you search inside. The same move, strong words and a narrower place, works there."
tasks:
  - check:
      type: question
      q: "The Hartley Museum has an online collection, hartley-museum.example/collection. You want its Han dynasty mirror. Which search is best, typed into the collection's own search box?"
      options: ["bronze mirror Han", "mirror", "what is the oldest thing in the museum", "Han"]
      answer: 0
      feedback: [null, "Too wide: it finds every mirror.", "The collection can't answer a question like that.", "That finds everything from that period, not the mirror."]
      explain: "The thing (mirror), what it is made of (bronze) and the period (Han) give a short strong search for a catalogue."
  - check:
      type: question
      q: "Which is a better first place to look for how people in Wattle Flat used water in the dry year?"
      options: ["The town's water authority and local news from that year", "A search for 'water'", "A video of a different town", "One neighbour's memory"]
      answer: 0
      feedback: [null, "Too wide.", "A different town gives a different answer.", "One person's memory is worth hearing but is not enough."]
      explain: "Records and reports from the people who ran and reported on the water, in that year."
```

### Searching a collection

### The right place

## Check: before you move on

```step
stage: practise
insight: "A last check on source and search across a new case before moving on."
check:
  type: sort
  q: "For the question 'Who decides whether Mill Road closes?', where does each source fit?"
  options: ["A good start", "Useful later", "Not the place for this"]
  items:
    - ["riverbend-council.example: Roads and traffic rules", "A good start", "The decision-maker's own rules."]
    - ["riverbend-news.example: Parents react to the Mill Road plan", "Useful later", "It will tell you what people say, not who decides."]
    - ["A tuckshop menu", "Not the place for this", "It has nothing to do with the question."]
    - ["A post on a neighbourhood chat: 'I heard the road is closing'", "Not the place for this", "A guess about a decision. Go to the decision-maker."]
```

## In each subject

Every subject starts with: what would answer it, and who would have it. The places differ:

| | Usually starts with |
|---|---|
| **Economics** | business and shop records, prices, reports and statistics |
| **Civics** | government websites (rules, decisions), news, specialist reports and statistics |
| **Geography** | maps, statistics, reports and your own fieldwork (planned in Geography's own course) |
| **History** | archives, museum collections and libraries; what counts as a primary or a secondary source is History's own lesson |

Next: Keep what answers your question.

```step
stage: info
check: { type: reflect, text: "I can say where I would look first for a question of mine, and what strong words I would search." }
```

## Make: your own

```step
stage: make
insight: "Choosing sources and writing searches for your own question makes the move your own."
check: { type: reflect, text: "In my own book I wrote, for one of my questions, what would answer it and who would have it, three places I would look (naming the kind of source for each) and the search words I would use. A partner read it and agreed." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: a second case

```step
stage: make
tier: typical
insight: "The same move in another subject's case."
check:
  type: question
  q: "Which is the best first source for 'What might closing Mill Road change for shops?'"
  options: ["Shop owners' views in a local news report, and traffic counts from the council", "The tuckshop", "A history textbook", "The first search result for 'shops'"]
  answer: 0
  feedback: [null, "It does not cover shops or Mill Road.", "It will not cover a made-up road.", "That is the nearest, not the best."]
  explain: "Views from shop owners, and counts from the council, both bear on the question."
```

## Wider: two searches compared

```step
stage: make
tier: wider
insight: "Comparing two searches shows what each word in a search does."
check: { type: reflect, text: "I tried two different searches for the same question, one wide and one narrow. I said which found more of what I needed and what the narrow one left out." }
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
