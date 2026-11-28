---
title: "Records and fields"
subtitle: "Data apps · Tables and records · Lesson 3"
---

# Records and fields

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** A music app tells you the playlist's total time and its longest track. Somewhere, a loop goes through every song and keeps a running total.


:::teacher-note

**In one sentence:** Students read fields of records: ClickedItem.title for a Now playing line, LoopItem.length inside For each row to total the lengths (an accumulator), and a variable holding a whole row to find the longest song (a running maximum). The Check traces the total and finds Nib resetting it inside the loop. Make it yours: the average with count(), and the shortest song.

**Students should be able to say:** I can read one field of a row with a dot, such as ClickedItem.title or LoopItem.length. I can add up a field of every row with For each row and a running total. I can find the row with the biggest value by keeping the best one so far.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Try the finished app

This is the app you'll build, open on the **Run** tab. Click a song, then the two buttons. On the left, *total* and *longest* show their values now.

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Check: trace the loop


:::keep-together

### Trace the total

**Songs has lengths 3, 5, 4, 2 in that order. Halfway through the Total length event, after the second row, what is total?**

☐ 3

☐ 5

☐ 8

☐ 14

:::


:::teacher-note

**Answer:** 8

total starts at 0. Row 1 adds 3 (total 3), row 2 adds 5 (total 8). Rows 3 and 4 bring it to 14.

:::


:::keep-together

### Find Nib's mistake

**Nib's Total length always shows the last song's length. Click the line where Nib goes wrong.**

```
 1  Nib's event: when TotalButton is clicked.
 2  Its sub-event: For each row in table Songs.
 3  The sub-event's first action: Set variable total to 0.
 4  Its second action: Add LoopItem.length to variable total.
 5  After the loop, Nib shows total. With lengths 3, 5, 4, 2 it says 2.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: Set total to 0 sits inside the For each row sub-event, so it runs once per row and wipes the total each time round. Starting the total belongs on the parent event, before the loop.

:::


:::typical

## Make it yours: average and shortest


**The average.** `count(Songs)` is how many rows there are. Change TotalText's text to also show `round(total / count(Songs))`, such as `"Total: " & total & " min, average " & round(total / count(Songs))`.

**The shortest song.** There's a *Shortest song* button, a *ShortestText* and a variable *shortest*. Build it like the longest song. Which one thing changes?

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible answer.** Other correct answers are fine; check that each one does what the task asks.

**The average:**

```maths
{"version":1,"name":"Playlist records","device":"web","features":{"level":4},"variables":[{"name":"Songs","table":{"fields":[{"name":"title","type":"text"},{"name":"artist","type":"text"},{"name":"length","type":"number"}]},"value":[{"title":"Blue Sky","artist":"Kai","length":3},{"title":"Arc","artist":"Mo","length":5},{"title":"Cove","artist":"Lu","length":4},{"title":"Nova","artist":"Kai","length":2}]},{"name":"total","value":0},{"name":"longest","value":""},{"name":"shortest","value":""}],"screens":[{"id":"home","name":"Home","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"h1","x":24,"y":16,"w":500,"h":40,"text":"My playlist","visible":true,"vars":{}}]},{"name":"TitleLabel","kind":"text","instanceVars":[],"instances":[{"id":"l1","x":24,"y":64,"w":60,"h":36,"text":"Title","visible":true,"vars":{}}]},{"name":"TitleInput","kind":"input","instanceVars":[],"instances":[{"id":"i1","x":84,"y":60,"w":170,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"ArtistLabel","kind":"text","instanceVars":[],"instances":[{"id":"l2","x":268,"y":64,"w":60,"h":36,"text":"Artist","visible":true,"vars":{}}]},{"name":"ArtistInput","kind":"input","instanceVars":[],"instances":[{"id":"i2","x":328,"y":60,"w":150,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"LengthLabel","kind":"text","instanceVars":[],"instances":[{"id":"l3","x":492,"y":64,"w":70,"h":36,"text":"Minutes","visible":true,"vars":{}}]},{"name":"LengthInput","kind":"input","instanceVars":[],"instances":[{"id":"i3","x":566,"y":60,"w":70,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"AddButton","kind":"button","instanceVars":[],"instances":[{"id":"b1","x":650,"y":58,"w":130,"h":46,"text":"Add song","visible":true,"vars":{}}]},{"name":"SongTable","kind":"table","instanceVars":[],"instances":[{"id":"T1","x":24,"y":120,"w":560,"h":230,"text":"","visible":true,"vars":{},"source":"Songs","columns":""}]},{"name":"NowText","kind":"text","instanceVars":[],"instances":[{"id":"t1","x":24,"y":360,"w":560,"h":32,"text":"Click a song to play it","visible":true,"vars":{}}]},{"name":"TotalButton","kind":"button","instanceVars":[],"instances":[{"id":"b2","x":600,"y":130,"w":180,"h":46,"text":"Total length","visible":true,"vars":{}}]},{"name":"TotalText","kind":"text","instanceVars":[],"instances":[{"id":"t2","x":600,"y":182,"w":180,"h":32,"text":"","visible":true,"vars":{}}]},{"name":"LongestButton","kind":"button","instanceVars":[],"instances":[{"id":"b3","x":600,"y":230,"w":180,"h":46,"text":"Longest song","visible":true,"vars":{}}]},{"name":"LongestText","kind":"text","instanceVars":[],"instances":[{"id":"t3","x":600,"y":282,"w":180,"h":50,"text":"","visible":true,"vars":{}}]},{"name":"ShortestButton","kind":"button","instanceVars":[],"instances":[{"id":"b4","x":600,"y":340,"w":180,"h":46,"text":"Shortest song","visible":true,"vars":{}}]},{"name":"ShortestText","kind":"text","instanceVars":[],"instances":[{"id":"t4","x":600,"y":392,"w":180,"h":50,"text":"","visible":true,"vars":{}}]}],"events":[{"id":"e1","else":false,"conds":[{"type":"onClicked","target":"AddButton"}],"actions":[{"type":"tableAdd","table":"Songs","values":{"title":"TitleInput.text","artist":"ArtistInput.text","length":"int(LengthInput.text)"}}],"children":[]},{"id":"e2","else":false,"conds":[{"type":"onItemClicked","target":"SongTable"}],"actions":[{"type":"setText","target":"NowText","value":"\"Now playing: \" & ClickedItem.title & \" by \" & ClickedItem.artist"}],"children":[]},{"id":"e3","else":false,"conds":[{"type":"onClicked","target":"TotalButton"}],"actions":[{"type":"setVar","var":"total","value":"0"}],"children":[{"id":"e3a","else":false,"conds":[{"type":"forEachRow","table":"Songs"}],"actions":[{"type":"addTo","var":"total","value":"LoopItem.length"}],"children":[]},{"id":"e3b","else":false,"conds":[],"actions":[{"type":"setText","target":"TotalText","value":"\"Total: \" & total & \" min, average \" & round(total / count(Songs))"}],"children":[]}]},{"id":"e4","else":false,"conds":[{"type":"onClicked","target":"LongestButton"}],"actions":[{"type":"setVar","var":"longest","value":"item(Songs, 1)"}],"children":[{"id":"e4a","else":false,"conds":[{"type":"forEachRow","table":"Songs"},{"type":"compareValues","left":"LoopItem.length","op":">","right":"longest.length"}],"actions":[{"type":"setVar","var":"longest","value":"LoopItem"}],"children":[]},{"id":"e4b","else":false,"conds":[],"actions":[{"type":"setText","target":"LongestText","value":"\"Longest: \" & longest.title"}],"children":[]}]}]}]}
```

**The shortest song:**

```maths
{"version":1,"name":"Playlist records","device":"web","features":{"level":4},"variables":[{"name":"Songs","table":{"fields":[{"name":"title","type":"text"},{"name":"artist","type":"text"},{"name":"length","type":"number"}]},"value":[{"title":"Blue Sky","artist":"Kai","length":3},{"title":"Arc","artist":"Mo","length":5},{"title":"Cove","artist":"Lu","length":4},{"title":"Nova","artist":"Kai","length":2}]},{"name":"total","value":0},{"name":"longest","value":""},{"name":"shortest","value":""}],"screens":[{"id":"home","name":"Home","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"h1","x":24,"y":16,"w":500,"h":40,"text":"My playlist","visible":true,"vars":{}}]},{"name":"TitleLabel","kind":"text","instanceVars":[],"instances":[{"id":"l1","x":24,"y":64,"w":60,"h":36,"text":"Title","visible":true,"vars":{}}]},{"name":"TitleInput","kind":"input","instanceVars":[],"instances":[{"id":"i1","x":84,"y":60,"w":170,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"ArtistLabel","kind":"text","instanceVars":[],"instances":[{"id":"l2","x":268,"y":64,"w":60,"h":36,"text":"Artist","visible":true,"vars":{}}]},{"name":"ArtistInput","kind":"input","instanceVars":[],"instances":[{"id":"i2","x":328,"y":60,"w":150,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"LengthLabel","kind":"text","instanceVars":[],"instances":[{"id":"l3","x":492,"y":64,"w":70,"h":36,"text":"Minutes","visible":true,"vars":{}}]},{"name":"LengthInput","kind":"input","instanceVars":[],"instances":[{"id":"i3","x":566,"y":60,"w":70,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"AddButton","kind":"button","instanceVars":[],"instances":[{"id":"b1","x":650,"y":58,"w":130,"h":46,"text":"Add song","visible":true,"vars":{}}]},{"name":"SongTable","kind":"table","instanceVars":[],"instances":[{"id":"T1","x":24,"y":120,"w":560,"h":230,"text":"","visible":true,"vars":{},"source":"Songs","columns":""}]},{"name":"NowText","kind":"text","instanceVars":[],"instances":[{"id":"t1","x":24,"y":360,"w":560,"h":32,"text":"Click a song to play it","visible":true,"vars":{}}]},{"name":"TotalButton","kind":"button","instanceVars":[],"instances":[{"id":"b2","x":600,"y":130,"w":180,"h":46,"text":"Total length","visible":true,"vars":{}}]},{"name":"TotalText","kind":"text","instanceVars":[],"instances":[{"id":"t2","x":600,"y":182,"w":180,"h":32,"text":"","visible":true,"vars":{}}]},{"name":"LongestButton","kind":"button","instanceVars":[],"instances":[{"id":"b3","x":600,"y":230,"w":180,"h":46,"text":"Longest song","visible":true,"vars":{}}]},{"name":"LongestText","kind":"text","instanceVars":[],"instances":[{"id":"t3","x":600,"y":282,"w":180,"h":50,"text":"","visible":true,"vars":{}}]},{"name":"ShortestButton","kind":"button","instanceVars":[],"instances":[{"id":"b4","x":600,"y":340,"w":180,"h":46,"text":"Shortest song","visible":true,"vars":{}}]},{"name":"ShortestText","kind":"text","instanceVars":[],"instances":[{"id":"t4","x":600,"y":392,"w":180,"h":50,"text":"","visible":true,"vars":{}}]}],"events":[{"id":"e1","else":false,"conds":[{"type":"onClicked","target":"AddButton"}],"actions":[{"type":"tableAdd","table":"Songs","values":{"title":"TitleInput.text","artist":"ArtistInput.text","length":"int(LengthInput.text)"}}],"children":[]},{"id":"e2","else":false,"conds":[{"type":"onItemClicked","target":"SongTable"}],"actions":[{"type":"setText","target":"NowText","value":"\"Now playing: \" & ClickedItem.title & \" by \" & ClickedItem.artist"}],"children":[]},{"id":"e3","else":false,"conds":[{"type":"onClicked","target":"TotalButton"}],"actions":[{"type":"setVar","var":"total","value":"0"}],"children":[{"id":"e3a","else":false,"conds":[{"type":"forEachRow","table":"Songs"}],"actions":[{"type":"addTo","var":"total","value":"LoopItem.length"}],"children":[]},{"id":"e3b","else":false,"conds":[],"actions":[{"type":"setText","target":"TotalText","value":"\"Total: \" & total & \" min\""}],"children":[]}]},{"id":"e4","else":false,"conds":[{"type":"onClicked","target":"LongestButton"}],"actions":[{"type":"setVar","var":"longest","value":"item(Songs, 1)"}],"children":[{"id":"e4a","else":false,"conds":[{"type":"forEachRow","table":"Songs"},{"type":"compareValues","left":"LoopItem.length","op":">","right":"longest.length"}],"actions":[{"type":"setVar","var":"longest","value":"LoopItem"}],"children":[]},{"id":"e4b","else":false,"conds":[],"actions":[{"type":"setText","target":"LongestText","value":"\"Longest: \" & longest.title"}],"children":[]}]},{"id":"e5","else":false,"conds":[{"type":"onClicked","target":"ShortestButton"}],"actions":[{"type":"setVar","var":"shortest","value":"item(Songs, 1)"}],"children":[{"id":"e5a","else":false,"conds":[{"type":"forEachRow","table":"Songs"},{"type":"compareValues","left":"LoopItem.length","op":"<","right":"shortest.length"}],"actions":[{"type":"setVar","var":"shortest","value":"LoopItem"}],"children":[]},{"id":"e5b","else":false,"conds":[],"actions":[{"type":"setText","target":"ShortestText","value":"\"Shortest: \" & shortest.title"}],"children":[]}]}]}]}
```

:::

:::


## Exit ticket

:::keep-together

**A table Scores has a field points. Write the three parts of an event that adds up every row's points into a variable sum.**

{{lines-3}}

:::


:::teacher-note

**Answer:** Set sum to 0 on the event; a sub-event For each row in table Scores that adds LoopItem.points to sum; then a sub-event after it that shows sum.

:::

