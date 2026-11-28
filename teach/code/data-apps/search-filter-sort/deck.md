---
marp: true
theme: default
html: true
---

# Search, filter and sort

Data apps · Search

<!-- Speaker note: Students sort the Songs table by a field (titles A to Z, longest first), then build search and filter with one algorithm: clear a Results table, go through every row of Songs with For each row, and copy the rows whose test passes. The Check finds Nib removing the non-matching rows (data lost) and shows why numbers kept as text sort wrongly. Make it yours: search two fields, and Show all. About 60 minutes (Try 5 min · Build 1–3 30 min · Check 10 min · Make it yours 15 min). -->

---

## Today

- I can sort a table by a field, and explain why whole rows move together.
- I can search or filter a table by copying the rows that match into a second table.
- I can explain why a filter shouldn't remove rows from the original table.

<!-- Speaker note: Before class: Search and filter are the same algorithm (a **linear search**: test every row, keep the matches), with a different test. Name it as an algorithm students will meet again in Python and SQL. Results starts empty and is cleared at the start of each search, so old results don't stay (the same idea as list-clear-before-add, the other way round). App Builder's Sort is a tool, not an algorithm students write: it sorts numbers by size, text A to Z ignoring capitals, and keeps equal rows in their order. Teacher: Before Build 2 (whole class): find every song with 'o' in the title on a printed list. How did you do it? That's the loop. Teacher: Check: Nib's filter is worth acting out: remove the long songs from the class list. Where did they go? Teacher: Sort question: write 10, 9 and 3 on cards as words and sort them like a dictionary. -->

---

## Why it matters

> Every app with a list has a search box and a sort button. Underneath, a search is a loop that checks every row.

<!-- Speaker note: The playlist has more songs now. Today you'll help a user find one: - **Sort** puts the rows of a table in order, by one field: titles A to Z, or the longest first. The whole row moves, so every song keeps its details. - **Search** and **filter** go through **every row** with For each, and copy the rows that match into a second table, *Results*. The *Songs* table is never changed, so nothing is lost. That second idea is an **algorithm**: a set of steps that works for any table. Search is the same steps with a different test. ![The Find a song app: a search box with Search, Short songs, Sort by title and Longest first buttons, a table of all songs and a table of found songs.](app.svg) -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**You have a printed list of 100 songs. How do you find every song with 'love' in its title?**

- Do you have to look at every song?
- Where do you write down the ones you find?

<!-- Speaker note: Look at every row, write down the matches: a linear search. The original list stays as it was. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

## Try the finished app

This is the app you'll build, open on the **Run** tab. Sort both ways, then type *an* and click **Search**, then click **Short songs**.

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/search-filter-sort/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/data-apps/search-filter-sort/?full=step-2#step-2)

<!-- Speaker note: 1. Add an event: **SortTitleButton is clicked** → **Tables**, **Sort table** *Songs* **by** *title*, **A to Z, smallest first**. 2. Add an event: **SortLengthButton is clicked** → sort *Songs* by *length*, **Z to A, biggest first**. 3. Run it and try both. Do the artists stay with their songs? -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/search-filter-sort/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/data-apps/search-filter-sort/?full=step-3#step-3)

<!-- Speaker note: The *Results* table has the same fields as Songs, and *ResultsTable* shows it. 1. Add an event: **SearchButton is clicked** → **Clear table** *Results* (so old results don't stay). 2. Give it a sub-event: **For each row in table** *Songs*, and a second condition **Compare** `contains(lower(LoopItem.title), lower(SearchInput.text))` **=** `true`. `lower(...)` makes capitals not matter. 3. The sub-event's action: **Add a row to table** *Results*, with *title* `LoopItem.title`, *artist* `LoopItem.artist`, *length* `LoopItem.length`. 4. Run it. Search for *an*, then *o*. Is *All songs* still complete? -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/search-filter-sort/?full=step-4#step-4](https://tutorials.learningwaypoints.com/code/data-apps/search-filter-sort/?full=step-4#step-4)

<!-- Speaker note: Build **Short songs** the same way as Search. Only the test changes: **Compare** `LoopItem.length` **≤** `3`. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find Nib's mistake

**After Nib's Short songs, the long songs are gone for good. Click the line where Nib goes wrong.**

```
 1  Nib's event: when ShortButton is clicked.
 2  Its sub-event: For each row in table Songs, and Compare LoopItem.length > 3.
 3  The sub-event's action: Remove row LoopIndex from table Songs.
 4  Nib clicks Short songs. Only short songs are left in Songs, and the long ones are gone.
```

* Answer: line 3

<!-- Speaker note: Line 3: Nib removes the long songs from Songs itself. A filter should copy the matching rows into another table, so the original table keeps everything. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Text or number?

**Suppose length were a text field. Sorting the lengths 10, 9 and 3 A to Z would give which order?**

- 10, 9, 3
- 9, 3, 10
- 10, 3, 9
- 3, 9, 10

* Answer: 10, 3, 9

<!-- Speaker note: Text sorts character by character: "1" comes before "3", which comes before "9", so "10" comes first. A number field sorts by size: 3, 9, 10. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Sort like a dictionary <span style="font-size:.6em;color:#64748b">(3 min)</span>

Write 10, 9 and 3 on cards as words of text and sort them like a dictionary, by first character. Then sort them by size.

<!-- Speaker note: Text sorts character by character: 10, 3, 9. That's why length is a number field. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make it yours: search artists, show all



- **Search artists too:** Change Search's test so it looks in the title and the artist. One way: `contains(lower(LoopItem.title & " " & LoopItem.artist), lower(SearchInput.text))`
- **Show all:** There's a **Show all** button. Make it copy every song into Results. Which part of the pattern does it not need?

[Open this step](https://tutorials.learningwaypoints.com/code/data-apps/search-filter-sort/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Searching two fields changes only the test, and Show all removes the test altogether, so both confirm the loop-and-copy pattern. For students who need more support: Build Search together; pairs build Short songs by changing only the test. For early finishers: Search with a minimum length too: two conditions in the same sub-event. The hard part, on purpose: The search condition: contains(lower(LoopItem.title), lower(SearchInput.text)) = true is long. Build it in parts in the Find expressions browser, and test with a single letter. When students get stuck: Search finds nothing. Ask: What does the condition compare, and with what? Fix: Compare contains(lower(LoopItem.title), lower(SearchInput.text)) = true, inside the For each row sub-event. / Results keeps the last search's songs too. Ask: Where is Results cleared? Fix: Clear table Results as the parent event's action, before the loop. / Sorting by length puts 10 before 9. Ask: What type is the length field? Fix: Make length a Number field (click its name in the sidebar). -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Extra: play the clicked song

Songs now has a **sound** field naming one of App Builder's built-in sounds (*calm*, *upbeat*, *sleepy*, *beat*), and there's a **Sound** object called *Music* under the tables.

1. Add an event: **An item in SongTable is clicked**.
2. Action: **Set Music sound to the one named** `ClickedItem.sound`.
3. Action: **Play Music**.
4. Run it and click a few songs. Search still copies the sound field into Results, so a found song plays too if you do the same for ResultsTable.

The sounds are short tracks made for App Builder, free to use. A browser only plays sound after you've clicked something in the app, which a row click is.

[Open this step](https://tutorials.learningwaypoints.com/code/data-apps/search-filter-sort/?full=step-7#step-7)

<!-- Speaker note: What this step is for: A field can hold the name of something to use, so the clicked row's sound field chooses which sound plays: the same ClickedItem read as before, put to a new job. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 18px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Describe, in steps, how to show only the books with more than 300 pages, without losing any books.**

* Clear a results table; for each row of Books, if pages &gt; 300, add that row to the results table; show the results table. Books itself isn't changed.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: the challenge, a data app of their own. -->
