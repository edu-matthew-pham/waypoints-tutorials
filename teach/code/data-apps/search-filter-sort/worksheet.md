---
title: "Search, filter and sort"
subtitle: "Data apps · Search · Lesson 6"
---

# Search, filter and sort

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Every app with a list has a search box and a sort button. Underneath, a search is a loop that checks every row.


:::teacher-note

**In one sentence:** Students sort the Songs table by a field (titles A to Z, longest first), then build search and filter with one algorithm: clear a Results table, go through every row of Songs with For each row, and copy the rows whose test passes. The Check finds Nib removing the non-matching rows (data lost) and shows why numbers kept as text sort wrongly. Make it yours: search two fields, and Show all.

**Students should be able to say:** I can sort a table by a field, and explain why whole rows move together. I can search or filter a table by copying the rows that match into a second table. I can explain why a filter shouldn't remove rows from the original table.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Try the finished app

This is the app you'll build, open on the **Run** tab. Sort both ways, then type *an* and click **Search**, then click **Short songs**.

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Check: keep the songs safe


:::keep-together

### Find Nib's mistake

**After Nib's Short songs, the long songs are gone for good. Click the line where Nib goes wrong.**

```
 1  Nib's event: when ShortButton is clicked.
 2  Its sub-event: For each row in table Songs, and Compare LoopItem.length > 3.
 3  The sub-event's action: Remove row LoopIndex from table Songs.
 4  Nib clicks Short songs. Only short songs are left in Songs, and the long ones are gone.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: Nib removes the long songs from Songs itself. A filter should copy the matching rows into another table, so the original table keeps everything.

:::


:::keep-together

### Text or number?

**Suppose length were a text field. Sorting the lengths 10, 9 and 3 A to Z would give which order?**

☐ 10, 9, 3

☐ 9, 3, 10

☐ 10, 3, 9

☐ 3, 9, 10

:::


:::teacher-note

**Answer:** 10, 3, 9

Text sorts character by character: "1" comes before "3", which comes before "9", so "10" comes first. A number field sorts by size: 3, 9, 10.

:::


:::typical

## Make it yours: search artists, show all


**Search artists too.** Change Search's test so it looks in the title and the artist. One way: `contains(lower(LoopItem.title & " " & LoopItem.artist), lower(SearchInput.text))`

**Show all.** There's a **Show all** button. Make it copy every song into Results. Which part of the pattern does it not need?

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible answer.** Other correct answers are fine; check that each one does what the task asks.

**Search artists too:**

```maths
{"version":1,"name":"Find a song","device":"web","features":{"level":4},"variables":[{"name":"Songs","table":{"fields":[{"name":"title","type":"text"},{"name":"artist","type":"text"},{"name":"length","type":"number"}]},"value":[{"title":"Blue Sky","artist":"Kai","length":3},{"title":"Arc","artist":"Mo","length":5},{"title":"Cove","artist":"Lu","length":4},{"title":"Nova","artist":"Kai","length":2},{"title":"Tidal","artist":"Rae","length":7},{"title":"Lanterns","artist":"Mo","length":3}]},{"name":"Results","table":{"fields":[{"name":"title","type":"text"},{"name":"artist","type":"text"},{"name":"length","type":"number"}]},"value":[]}],"screens":[{"id":"home","name":"Home","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"h1","x":24,"y":16,"w":500,"h":40,"text":"Find a song","visible":true,"vars":{}}]},{"name":"SearchInput","kind":"input","instanceVars":[],"instances":[{"id":"i1","x":24,"y":64,"w":260,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"SearchButton","kind":"button","instanceVars":[],"instances":[{"id":"b1","x":296,"y":62,"w":110,"h":46,"text":"Search","visible":true,"vars":{}}]},{"name":"ShortButton","kind":"button","instanceVars":[],"instances":[{"id":"b2","x":418,"y":62,"w":160,"h":46,"text":"Short songs","visible":true,"vars":{}}]},{"name":"SortTitleButton","kind":"button","instanceVars":[],"instances":[{"id":"b3","x":590,"y":62,"w":190,"h":46,"text":"Sort by title","visible":true,"vars":{}}]},{"name":"SortLengthButton","kind":"button","instanceVars":[],"instances":[{"id":"b4","x":590,"y":114,"w":190,"h":46,"text":"Longest first","visible":true,"vars":{}}]},{"name":"AllLabel","kind":"text","instanceVars":[],"instances":[{"id":"l1","x":24,"y":116,"w":200,"h":36,"text":"All songs","visible":true,"vars":{}}]},{"name":"SongTable","kind":"table","instanceVars":[],"instances":[{"id":"T1","x":24,"y":150,"w":360,"h":300,"text":"","visible":true,"vars":{},"source":"Songs","columns":""}]},{"name":"ResultsLabel","kind":"text","instanceVars":[],"instances":[{"id":"l2","x":400,"y":170,"w":180,"h":36,"text":"Found","visible":true,"vars":{}}]},{"name":"ResultsTable","kind":"table","instanceVars":[],"instances":[{"id":"T2","x":400,"y":204,"w":380,"h":246,"text":"","visible":true,"vars":{},"source":"Results","columns":""}]},{"name":"AllButton","kind":"button","instanceVars":[],"instances":[{"id":"b5","x":400,"y":114,"w":178,"h":46,"text":"Show all","visible":true,"vars":{}}]}],"events":[{"id":"e1","else":false,"conds":[{"type":"onClicked","target":"SortTitleButton"}],"actions":[{"type":"tableSort","table":"Songs","field":"title","dir":"up"}],"children":[]},{"id":"e2","else":false,"conds":[{"type":"onClicked","target":"SortLengthButton"}],"actions":[{"type":"tableSort","table":"Songs","field":"length","dir":"down"}],"children":[]},{"id":"e3","else":false,"conds":[{"type":"onClicked","target":"SearchButton"}],"actions":[{"type":"tableClear","table":"Results"}],"children":[{"id":"e3a","else":false,"conds":[{"type":"forEachRow","table":"Songs"},{"type":"compareValues","left":"contains(lower(LoopItem.title & \" \" & LoopItem.artist), lower(SearchInput.text))","op":"=","right":"true"}],"actions":[{"type":"tableAdd","table":"Results","values":{"title":"LoopItem.title","artist":"LoopItem.artist","length":"LoopItem.length"}}],"children":[]}]},{"id":"e4","else":false,"conds":[{"type":"onClicked","target":"ShortButton"}],"actions":[{"type":"tableClear","table":"Results"}],"children":[{"id":"e4a","else":false,"conds":[{"type":"forEachRow","table":"Songs"},{"type":"compareValues","left":"LoopItem.length","op":"≤","right":"3"}],"actions":[{"type":"tableAdd","table":"Results","values":{"title":"LoopItem.title","artist":"LoopItem.artist","length":"LoopItem.length"}}],"children":[]}]}]}]}
```

**Show all:**

```maths
{"version":1,"name":"Find a song","device":"web","features":{"level":4},"variables":[{"name":"Songs","table":{"fields":[{"name":"title","type":"text"},{"name":"artist","type":"text"},{"name":"length","type":"number"}]},"value":[{"title":"Blue Sky","artist":"Kai","length":3},{"title":"Arc","artist":"Mo","length":5},{"title":"Cove","artist":"Lu","length":4},{"title":"Nova","artist":"Kai","length":2},{"title":"Tidal","artist":"Rae","length":7},{"title":"Lanterns","artist":"Mo","length":3}]},{"name":"Results","table":{"fields":[{"name":"title","type":"text"},{"name":"artist","type":"text"},{"name":"length","type":"number"}]},"value":[]}],"screens":[{"id":"home","name":"Home","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"h1","x":24,"y":16,"w":500,"h":40,"text":"Find a song","visible":true,"vars":{}}]},{"name":"SearchInput","kind":"input","instanceVars":[],"instances":[{"id":"i1","x":24,"y":64,"w":260,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"SearchButton","kind":"button","instanceVars":[],"instances":[{"id":"b1","x":296,"y":62,"w":110,"h":46,"text":"Search","visible":true,"vars":{}}]},{"name":"ShortButton","kind":"button","instanceVars":[],"instances":[{"id":"b2","x":418,"y":62,"w":160,"h":46,"text":"Short songs","visible":true,"vars":{}}]},{"name":"SortTitleButton","kind":"button","instanceVars":[],"instances":[{"id":"b3","x":590,"y":62,"w":190,"h":46,"text":"Sort by title","visible":true,"vars":{}}]},{"name":"SortLengthButton","kind":"button","instanceVars":[],"instances":[{"id":"b4","x":590,"y":114,"w":190,"h":46,"text":"Longest first","visible":true,"vars":{}}]},{"name":"AllLabel","kind":"text","instanceVars":[],"instances":[{"id":"l1","x":24,"y":116,"w":200,"h":36,"text":"All songs","visible":true,"vars":{}}]},{"name":"SongTable","kind":"table","instanceVars":[],"instances":[{"id":"T1","x":24,"y":150,"w":360,"h":300,"text":"","visible":true,"vars":{},"source":"Songs","columns":""}]},{"name":"ResultsLabel","kind":"text","instanceVars":[],"instances":[{"id":"l2","x":400,"y":170,"w":180,"h":36,"text":"Found","visible":true,"vars":{}}]},{"name":"ResultsTable","kind":"table","instanceVars":[],"instances":[{"id":"T2","x":400,"y":204,"w":380,"h":246,"text":"","visible":true,"vars":{},"source":"Results","columns":""}]},{"name":"AllButton","kind":"button","instanceVars":[],"instances":[{"id":"b5","x":400,"y":114,"w":178,"h":46,"text":"Show all","visible":true,"vars":{}}]}],"events":[{"id":"e1","else":false,"conds":[{"type":"onClicked","target":"SortTitleButton"}],"actions":[{"type":"tableSort","table":"Songs","field":"title","dir":"up"}],"children":[]},{"id":"e2","else":false,"conds":[{"type":"onClicked","target":"SortLengthButton"}],"actions":[{"type":"tableSort","table":"Songs","field":"length","dir":"down"}],"children":[]},{"id":"e3","else":false,"conds":[{"type":"onClicked","target":"SearchButton"}],"actions":[{"type":"tableClear","table":"Results"}],"children":[{"id":"e3a","else":false,"conds":[{"type":"forEachRow","table":"Songs"},{"type":"compareValues","left":"contains(lower(LoopItem.title), lower(SearchInput.text))","op":"=","right":"true"}],"actions":[{"type":"tableAdd","table":"Results","values":{"title":"LoopItem.title","artist":"LoopItem.artist","length":"LoopItem.length"}}],"children":[]}]},{"id":"e4","else":false,"conds":[{"type":"onClicked","target":"ShortButton"}],"actions":[{"type":"tableClear","table":"Results"}],"children":[{"id":"e4a","else":false,"conds":[{"type":"forEachRow","table":"Songs"},{"type":"compareValues","left":"LoopItem.length","op":"≤","right":"3"}],"actions":[{"type":"tableAdd","table":"Results","values":{"title":"LoopItem.title","artist":"LoopItem.artist","length":"LoopItem.length"}}],"children":[]}]},{"id":"e5","else":false,"conds":[{"type":"onClicked","target":"AllButton"}],"actions":[{"type":"tableClear","table":"Results"}],"children":[{"id":"e5a","else":false,"conds":[{"type":"forEachRow","table":"Songs"}],"actions":[{"type":"tableAdd","table":"Results","values":{"title":"LoopItem.title","artist":"LoopItem.artist","length":"LoopItem.length"}}],"children":[]}]}]}]}
```

:::

:::


:::typical

## Extra: play the clicked song

Songs now has a **sound** field naming one of App Builder's built-in sounds (*calm*, *upbeat*, *sleepy*, *beat*), and there's a **Sound** object called *Music* under the tables.

1. Add an event: **An item in SongTable is clicked**.
2. Action: **Set Music sound to the one named** `ClickedItem.sound`.
3. Action: **Play Music**.
4. Run it and click a few songs. Search still copies the sound field into Results, so a found song plays too if you do the same for ResultsTable.

The sounds are short tracks made for App Builder, free to use. A browser only plays sound after you've clicked something in the app, which a row click is.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible answer.** Other correct answers are fine; check that each one does what the task asks.

```maths
{"version":1,"name":"Find a song","device":"web","features":{"level":4},"variables":[{"name":"Songs","table":{"fields":[{"name":"title","type":"text"},{"name":"artist","type":"text"},{"name":"length","type":"number"},{"name":"sound","type":"text"}]},"value":[{"title":"Blue Sky","artist":"Kai","length":3,"sound":"calm"},{"title":"Arc","artist":"Mo","length":5,"sound":"upbeat"},{"title":"Cove","artist":"Lu","length":4,"sound":"sleepy"},{"title":"Nova","artist":"Kai","length":2,"sound":"beat"},{"title":"Tidal","artist":"Rae","length":7,"sound":"upbeat"},{"title":"Lanterns","artist":"Mo","length":3,"sound":"calm"}]},{"name":"Results","table":{"fields":[{"name":"title","type":"text"},{"name":"artist","type":"text"},{"name":"length","type":"number"},{"name":"sound","type":"text"}]},"value":[]}],"screens":[{"id":"home","name":"Home","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"h1","x":24,"y":16,"w":500,"h":40,"text":"Find a song","visible":true,"vars":{}}]},{"name":"SearchInput","kind":"input","instanceVars":[],"instances":[{"id":"i1","x":24,"y":64,"w":260,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"SearchButton","kind":"button","instanceVars":[],"instances":[{"id":"b1","x":296,"y":62,"w":110,"h":46,"text":"Search","visible":true,"vars":{}}]},{"name":"ShortButton","kind":"button","instanceVars":[],"instances":[{"id":"b2","x":418,"y":62,"w":160,"h":46,"text":"Short songs","visible":true,"vars":{}}]},{"name":"SortTitleButton","kind":"button","instanceVars":[],"instances":[{"id":"b3","x":590,"y":62,"w":190,"h":46,"text":"Sort by title","visible":true,"vars":{}}]},{"name":"SortLengthButton","kind":"button","instanceVars":[],"instances":[{"id":"b4","x":590,"y":114,"w":190,"h":46,"text":"Longest first","visible":true,"vars":{}}]},{"name":"AllLabel","kind":"text","instanceVars":[],"instances":[{"id":"l1","x":24,"y":116,"w":200,"h":36,"text":"All songs","visible":true,"vars":{}}]},{"name":"SongTable","kind":"table","instanceVars":[],"instances":[{"id":"T1","x":24,"y":150,"w":360,"h":300,"text":"","visible":true,"vars":{},"source":"Songs","columns":""}]},{"name":"ResultsLabel","kind":"text","instanceVars":[],"instances":[{"id":"l2","x":400,"y":170,"w":180,"h":36,"text":"Found","visible":true,"vars":{}}]},{"name":"ResultsTable","kind":"table","instanceVars":[],"instances":[{"id":"T2","x":400,"y":204,"w":380,"h":246,"text":"","visible":true,"vars":{},"source":"Results","columns":""}]},{"name":"AllButton","kind":"button","instanceVars":[],"instances":[{"id":"b5","x":400,"y":114,"w":178,"h":46,"text":"Show all","visible":true,"vars":{}}]},{"name":"Music","kind":"sound","instanceVars":[],"instances":[{"id":"s1","x":24,"y":462,"w":360,"h":52,"text":"","visible":true,"vars":{},"sound":"calm"}]}],"events":[{"id":"e1","else":false,"conds":[{"type":"onClicked","target":"SortTitleButton"}],"actions":[{"type":"tableSort","table":"Songs","field":"title","dir":"up"}],"children":[]},{"id":"e2","else":false,"conds":[{"type":"onClicked","target":"SortLengthButton"}],"actions":[{"type":"tableSort","table":"Songs","field":"length","dir":"down"}],"children":[]},{"id":"e3","else":false,"conds":[{"type":"onClicked","target":"SearchButton"}],"actions":[{"type":"tableClear","table":"Results"}],"children":[{"id":"e3a","else":false,"conds":[{"type":"forEachRow","table":"Songs"},{"type":"compareValues","left":"contains(lower(LoopItem.title), lower(SearchInput.text))","op":"=","right":"true"}],"actions":[{"type":"tableAdd","table":"Results","values":{"title":"LoopItem.title","artist":"LoopItem.artist","length":"LoopItem.length","sound":"LoopItem.sound"}}],"children":[]}]},{"id":"e4","else":false,"conds":[{"type":"onClicked","target":"ShortButton"}],"actions":[{"type":"tableClear","table":"Results"}],"children":[{"id":"e4a","else":false,"conds":[{"type":"forEachRow","table":"Songs"},{"type":"compareValues","left":"LoopItem.length","op":"≤","right":"3"}],"actions":[{"type":"tableAdd","table":"Results","values":{"title":"LoopItem.title","artist":"LoopItem.artist","length":"LoopItem.length","sound":"LoopItem.sound"}}],"children":[]}]},{"id":"e6","else":false,"conds":[{"type":"onItemClicked","target":"SongTable"}],"actions":[{"type":"setSoundNamed","target":"Music","name":"ClickedItem.sound"},{"type":"playSound","target":"Music"}],"children":[]}]}]}
```

:::

:::


## Exit ticket

:::keep-together

**Describe, in steps, how to show only the books with more than 300 pages, without losing any books.**

{{lines-3}}

:::


:::teacher-note

**Answer:** Clear a results table; for each row of Books, if pages &gt; 300, add that row to the results table; show the results table. Books itself isn't changed.

:::

