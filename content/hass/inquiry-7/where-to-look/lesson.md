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
Once you have a question, ask **what would answer it, and who would have it**. A count may be in records or need collecting. A rule needs the relevant authority’s current documents. A view needs the people who hold it; a news report may quote some of them, but cannot represent everyone. Then you search, and a search works best when it is a few strong words.

All practice cases, records and addresses in this lesson are invented. Addresses end in `.example`; do not try to visit them. For this case, Parkside keeps anonymised daily buyer counts in its sales records. Ordinary transaction totals do not necessarily count distinct students.

## Think first

```step
stage: predict
insight: "Committing to a choice shows the move: start from what the question needs, not from the nearest search box."
check:
  type: predict
  q: "How many students buy from the Parkside tuckshop each day? Where do you look first?"
  options: ["The tuckshop's own sales records", "A web search for tuckshops", "A news site", "Ask one friend"]
  actual: "The tuckshop's own sales records. In this invented case, those records include daily buyer counts. A web search for 'tuckshops' finds tuckshops everywhere. A news site is unlikely to have it, and one friend only knows their own habits."
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
    - ["What access problems might a road closure cause?", "A transport specialist's report (analysis of access)"]
```

Was your guess right? Four kinds of source turn up a lot in a civics or economics investigation: **government websites** (rules and decisions), **news** (what people say and what happened), **specialist reports** (experts looking closely at something) and **statistics** (counts and measurements). Source types overlap: a government website can publish statistics or a specialist report. Match the information to your question, then check who produced it, when, how and for what purpose. Official does not automatically mean complete or reliable.

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
      feedback: [null, "It is too wide: it could mean any road in any country.", "One word finds far too much.", "It leaves out the specific road, council and decision. More words do not guarantee a focused search."]
      explain: "Quote marks keep \"road closure\" together as a phrase. The other words are the thing (council rules). Your search tool may use different symbols, so look at its help page."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is looking for the daily count. Click the line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: first-result-is-the-place
      explain: "Line 3: Nib thinks the first result is always the best place. The right place depends on the question. The count is in the tuckshop's own records, so the first search result is the wrong place to start."
    hint:
      - "Who collected the information your question needs?"
      - "Does the result contain that information, or just mention the topic?"
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
      feedback: [null, "Too wide: it finds every mirror.", "It searches for the oldest object rather than the mirror; catalogue search features vary.", "That finds everything from that period, not the mirror."]
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
check: { type: reflect, text: "In my own book I used a targeted search for my class question and recorded two relevant sources, their titles, makers, dates and links or catalogue references. I recorded my search terms and explained why I chose that strategy and how each source helps. A partner checked the sources against my question." }
```

Use your real class topic and teacher-approved search tools or collections. Try an exact phrase, a site limit or a catalogue filter, and note whether it improved the results. For History, locate one primary and one secondary source; for Geography, two secondary sources. In Civics, also name three useful source types and what each provides.

For example, a source note needs: **title; maker; publication date (or “not given”); address or catalogue ID; why it helps**. A search result is a route to a source: open the source itself before recording it. Your teacher can supply an approved collection to search; the `.example` cards above are for practice only.

Write in your own book or document. Your partner or teacher reads it.

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
