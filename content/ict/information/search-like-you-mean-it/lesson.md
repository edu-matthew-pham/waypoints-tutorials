---
order: 1
unit: search
title: Search like you mean it
summary: "A search box does best with a few strong words, not a whole sentence: the thing you want, the place, and the detail that matters. Then read the results page before you click. Some results are adverts, a snippet can be years old, and the address says who made the page. The top result is not a check that something is true."
language: science
shape: 5e
hook: "You want to know when the Riverbend library opens on Saturday. You type the whole question and click the first result. What could go wrong?"
---
A search box looks for pages that contain your words. A few **strong words** work better than a whole sentence: the thing you want, the place, and the detail that matters.

Then read the **results page** before you click. Each result has a title, an address and a short **snippet** from the page. Some are marked **Ad**: someone paid to put them there.

Riverbend and every page in these lessons are made up for practice. The addresses end in `.example`, so none of them is a real site.

## Engage: which words?

```step
stage: predict
insight: "Committing to search words tests the move: the strong words are the thing, the place and the detail."
check:
  type: predict
  q: "You want to know when the Riverbend library opens on Saturday. Which search would you type?"
  options: ["Riverbend library Saturday hours", "when does the library open", "library", "can you please tell me what time the library in Riverbend opens on Saturday morning"]
  actual: "Riverbend library Saturday hours. It has the thing (library), the place (Riverbend) and the detail (Saturday hours). 'When does the library open' has no place, so it could find any library. One word finds far too much. A long sentence works in many search engines, but the extra words can pull in pages that only match 'please' and 'morning'."
```

## Explore: read the results page

```step
stage: run
insight: "Sorting the results before clicking settles the prediction: the page that answers the question is not always the top one."
check:
  type: sort
  q: "You searched Riverbend library Saturday hours. Sort each result."
  options: ["Click this first", "An advert", "Might be out of date", "Not about this"]
  items:
    - ["riverbend-library.example: Opening hours. Saturday 9 am to 1 pm. Updated this month.", "Click this first", "The library's own page, updated this month, answers the question."]
    - ["Ad · bookbarn.example: Books half price! Open 7 days.", "An advert", "It is marked Ad, and it is a shop, not the library."]
    - ["riverbend-news.example (2019): Library to try new Saturday hours", "Might be out of date", "The date is 2019. Hours change, so check a newer page."]
    - ["riverbank-library.example: Riverbank Library hours", "Not about this", "Riverbank is a different place. Read the address and title carefully."]
    - ["Ad · readmore.example: Get the ReadMore app for library books", "An advert", "Marked Ad: someone paid for the place."]
```

> **Ad** · bookbarn.example
>
> **Books half price! Open 7 days**
>
> Thousands of books at Book Barn. Visit us today.

> riverbend-news.example · 3 May 2019
>
> **Library to try new Saturday hours**
>
> From June the Riverbend library will open on Saturday afternoons as a trial...

> riverbend-library.example · updated this month
>
> **Opening hours | Riverbend Library**
>
> Saturday 9 am to 1 pm. Closed on public holidays.

> riverbank-library.example
>
> **Riverbank Library hours**
>
> Saturday 10 am to 4 pm.

Was your guess right? The answer was in the results page before any click, and it was not at the top.

## Explain: what a results page tells you

```step
stage: investigate
insight: "Naming the parts of a result, and a mistake planted after it, explains why reading first works."
tasks:
  - check:
      type: question
      q: "What does the word Ad on a result tell you?"
      options: ["Someone paid to put it there, so its place says nothing about how good it is", "It is the best answer", "It is a news story", "The search engine checked it"]
      answer: 0
      feedback: [null, "Its place was paid for, not earned by answering your question well.", "Ad means advert. News pages are not marked Ad.", "Paying for a place is not a check."]
      explain: "An advert is paid for. It may be useful, but its place at the top is bought."
  - check:
      type: bug
      code: "working.txt#leo"
      text: "Leo turns up at the library and it is closed. Click the line where Leo first goes wrong."
      answer: 3
      fault: logic
      misconception: top-result-is-best
      explain: "Line 3: Leo clicked the first result without reading its date or address. Being first is not a check. The library's own page, further down, had this month's hours."
```

### What Ad means

### Find Leo's mistake

## Elaborate: make the words stronger

```step
stage: modify
insight: "Each task changes the question, so students build the search words again: the thing, the place and the detail."
tasks:
  - check:
      type: question
      q: "You want to know if the Riverbend pool is open in winter. Which search is strongest?"
      options: ["Riverbend pool winter opening", "pool", "is it open", "swimming fun Riverbend best pool ever"]
      answer: 0
      feedback: [null, "One word finds every pool everywhere.", "No thing, no place: a search engine cannot tell what 'it' is.", "Words like fun and best match opinions and adverts, not opening times."]
      explain: "The thing (pool), the place (Riverbend) and the detail (winter opening)."
  - check:
      type: question
      q: "Your search for Riverbend netball training times finds nothing useful. What is a good next move?"
      options: ["Change one word, such as training to practice, or add the club name", "Give up: it is not online", "Type the same words again", "Click the adverts"]
      answer: 0
      feedback: [null, "Pages may use other words for the same thing. Try again with a change.", "The same words find the same pages.", "Adverts are paid places, not answers."]
      explain: "Different pages use different words. Swap one word, or add a name, and search again."
```

### The pool

### Nothing useful

## Practise: read before you click

```step
stage: practise
insight: "Reading a new results page for date, address and Ad repeats the habit on a new question."
check:
  type: match
  q: "Match each part of a result to what it tells you."
  pairs:
    - ["The address, such as riverbend-library.example", "Who made the page"]
    - ["The date", "How old it is"]
    - ["The word Ad", "Someone paid for this place"]
    - ["The snippet", "A few words from the page"]
```

## Elaborate: search for real

```step
stage: make
tier: typical
insight: "A real search on a safe question, led by the teacher, shows the same parts on a real results page."
check: { type: reflect, text: "With my teacher, I searched a safe question with three strong words, and found an advert, a date and an address on the results page before clicking." }
```

Do this only when your teacher leads it. Pick a safe, everyday question, such as the opening hours of a place near the school. Before anyone clicks, point to the adverts, the dates and the addresses.

## Elaborate: a science question

```step
stage: make
tier: wider
insight: "A science question adds a new context: the detail that matters may be a word only an expert uses."
check:
  type: question
  q: "For a science project you want to know how much water a bean plant needs each day. Which search is strongest?"
  options: ["bean plant water per day", "plants", "how to grow a really big plant fast", "beans"]
  answer: 0
  feedback: [null, "Far too wide: every plant, every question.", "Big and fast pull in adverts for plant food.", "Beans finds recipes too."]
  explain: "The thing (bean plant), the detail (water) and how much (per day). If a page uses a word you don't know, such as watering schedule, add it to your next search."
```

## Evaluate: your own habit

```step
stage: info
check: { type: reflect, text: "Before I click a result, I can find its address, its date and whether it is an advert." }
```

Think of the last thing you searched for. Did you read the results page, or click the first one? What will you look for next time?
