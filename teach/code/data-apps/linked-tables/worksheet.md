---
title: "Two tables that link"
subtitle: "Data apps · Linked tables · Lesson 8"
---

# Two tables that link

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** A music app has playlists, and every playlist has songs. Behind the screen, the playlists and the songs are usually kept in two separate tables.


:::teacher-note

**In one sentence:** Optional extension: students keep playlists and songs in two flat tables linked by a shared value (each song's playlist field names its playlist). Clicking a playlist sets Chosen and copies the songs whose playlist = Chosen into a Shown table: a join, built with the filter pattern from lesson 5. The Check shows the link breaking when a name changes in one table only. Make it yours: add a song to the open playlist.

**Students should be able to say:** I can keep two kinds of record in two tables linked by a shared value. I can show the records of one table that belong to a chosen record of another. I can explain why changing the shared value in one table breaks the link.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Try the finished app

This is the app you'll build, open on the **Run** tab. Click each playlist. On the left, open the **{ } JSON** view of Songs: two flat lists of records, linked only by the playlist's name. In the Songs table, click a playlist cell: it's a dropdown of the names in Playlists.

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Check: what links them?


:::keep-together

**In Playlists, Gym is renamed Workout. The Songs table isn't changed. What happens when Workout is clicked?**

☐ No songs show: the songs still say Gym

☐ Every song shows

☐ Gym's songs show, under the new name

☐ The app shows an error

:::


:::teacher-note

**Answer:** No songs show: the songs still say Gym

The only link between the tables is the name they share. Change it in one table and the songs no longer match. When you rename a playlist in the tables on the left, App Builder changes the songs' playlist field for you, because it's a linked field; an event in your app changing a name doesn't. Real databases give each playlist a number that never changes, and link by that.

:::


## Look at it nested

On the left, open **{ } JSON** under **Playlists**, and choose **Songs grouped by playlist**. Now each playlist has its songs *inside* it, the way an app often sends data to another app.

You can't edit this view: App Builder builds it from the two flat tables each time. The app keeps the tables flat because then each song is stored once, in one place. Change a song's artist and every view of it changes too.


:::typical

## Make it yours: add to a playlist


**Add a song.** There are boxes for a title and an artist, and an **Add to playlist** button. Make it add a row to *Songs*, with `Chosen` as the playlist. Then click the playlist again: is the new song there?

**Check it stays put.** Add a song to one playlist, click another playlist, then click back. Is the song still in the right one?

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible answer.** Other correct answers are fine; check that each one does what the task asks.

**Add a song:**

```maths
{"version":1,"name":"Linked playlists","device":"web","features":{"level":4},"variables":[{"name":"Playlists","table":{"fields":[{"name":"name","type":"text"}]},"value":[{"name":"Study"},{"name":"Gym"},{"name":"Chill"}]},{"name":"Songs","table":{"fields":[{"name":"title","type":"text"},{"name":"artist","type":"text"},{"name":"playlist","type":"link","to":"Playlists"}]},"value":[{"title":"Blue Sky","artist":"Kai","playlist":"Study"},{"title":"Arc","artist":"Mo","playlist":"Gym"},{"title":"Cove","artist":"Lu","playlist":"Chill"},{"title":"Nova","artist":"Kai","playlist":"Study"},{"title":"Tidal","artist":"Rae","playlist":"Gym"},{"title":"Lanterns","artist":"Mo","playlist":"Study"}]},{"name":"Shown","table":{"fields":[{"name":"title","type":"text"},{"name":"artist","type":"text"},{"name":"playlist","type":"text"}]},"value":[]},{"name":"Chosen","value":""}],"screens":[{"id":"home","name":"Home","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"h1","x":24,"y":16,"w":500,"h":40,"text":"Playlists","visible":true,"vars":{}}]},{"name":"PlaylistTable","kind":"table","instanceVars":[],"instances":[{"id":"T1","x":24,"y":70,"w":200,"h":200,"text":"","visible":true,"vars":{},"source":"Playlists","columns":""}]},{"name":"Heading","kind":"text","instanceVars":[],"instances":[{"id":"t1","x":250,"y":70,"w":520,"h":36,"text":"Click a playlist","visible":true,"vars":{}}]},{"name":"ShownTable","kind":"table","instanceVars":[],"instances":[{"id":"T2","x":250,"y":112,"w":520,"h":260,"text":"","visible":true,"vars":{},"source":"Shown","columns":"title, artist"}]},{"name":"AllLabel","kind":"text","instanceVars":[],"instances":[{"id":"l1","x":24,"y":290,"w":200,"h":30,"text":"Every song is in Songs.","visible":true,"vars":{}}]},{"name":"TitleInput","kind":"input","instanceVars":[],"instances":[{"id":"i1","x":250,"y":390,"w":200,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"ArtistInput","kind":"input","instanceVars":[],"instances":[{"id":"i2","x":462,"y":390,"w":150,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"AddButton","kind":"button","instanceVars":[],"instances":[{"id":"b1","x":624,"y":388,"w":146,"h":46,"text":"Add to playlist","visible":true,"vars":{}}]}],"events":[{"id":"e1","else":false,"conds":[{"type":"onItemClicked","target":"PlaylistTable"}],"actions":[{"type":"setVar","var":"Chosen","value":"ClickedItem.name"},{"type":"tableClear","table":"Shown"}],"children":[{"id":"e1a","else":false,"conds":[{"type":"forEachRow","table":"Songs"},{"type":"compareValues","left":"LoopItem.playlist","op":"=","right":"Chosen"}],"actions":[{"type":"tableAdd","table":"Shown","values":{"title":"LoopItem.title","artist":"LoopItem.artist","playlist":"LoopItem.playlist"}}],"children":[]},{"id":"e1b","else":false,"conds":[],"actions":[{"type":"setText","target":"Heading","value":"Chosen & \" (\" & count(Shown) & \" songs)\""}],"children":[]}]},{"id":"e2","else":false,"conds":[{"type":"onClicked","target":"AddButton"}],"actions":[{"type":"tableAdd","table":"Songs","values":{"title":"TitleInput.text","artist":"ArtistInput.text","playlist":"Chosen"}}],"children":[]}]}]}
```

:::

:::


## Exit ticket

:::keep-together

**A school app has a Classes table and a Students table. What field would link each student to their class, and how would you show one class's students?**

{{lines-3}}

:::


:::teacher-note

**Answer:** A class field on each student. For each student, if their class is the chosen class, add them to a results table.

:::

