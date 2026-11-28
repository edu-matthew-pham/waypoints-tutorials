---
title: "Saving between visits"
subtitle: "Data apps · Saving between visits · Lesson 4"
---

# Saving between visits

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Close a notes app and open it tomorrow: your notes are still there. An app that forgets everything when it closes isn't much use for keeping a list.


:::teacher-note

**In one sentence:** Students make the playlist remember its songs between visits with App Builder's Remember toggle (💾) on the Songs table, test return visits with Restart and first visits with Forget saved data, and greet the user differently on each with count(Songs) in an On start of screen event with Else. The Check separates what the browser keeps from the project file and from other computers.

**Students should be able to say:** I can make an app remember a table or variable between visits, and test it. I can make an app behave differently on a first visit and a return visit. I can explain where remembered data is kept, and what that means on a shared computer.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Try the finished app

This is the app you'll build, open on the **Run** tab. Add a song, then press **↻ Restart**: the app starts again, and your song is still there. Now press **Forget saved data**: it's like opening the app for the first time.

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Check: where is it kept?


:::keep-together

### Another computer

**Kai's playlist remembers Songs. Kai adds five songs at home, then opens the same app on a school computer. What does the table show?**

☐ Only the five songs

☐ Only the starting rows

☐ Nothing at all

☐ All five songs

:::


:::teacher-note

**Answer:** Only the starting rows

Remember between visits keeps the songs in the browser the app ran in, on that computer. Another computer has nothing saved, so the app starts from its starting rows.

:::


:::keep-together

### What does Save keep?

**Kai presses Save at the top and hands in the project file. Which songs are in it?**

☐ The starting rows typed in the sidebar

☐ The songs added while the app ran

☐ None: tables aren't saved

☐ Both

:::


:::teacher-note

**Answer:** The starting rows typed in the sidebar

The project file holds how the app is built, including the rows it starts with. What a user adds while it runs is kept by the browser, separately.

:::


:::typical

## Make it yours: remember the last song


**The last song added.** There's a variable *LastAdded*.

1. Click its **💾** so it's remembered too.
2. In the AddButton event, add **Set variable LastAdded to** `TitleInput.text`.
3. Add it to the welcome back message, such as `& ". Last added: " & LastAdded`.

**On a shared computer.** Anyone who uses this browser next will see what the app remembered. Write down one thing a user should know about that, and where in your app you'd tell them.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible answer.** Other correct answers are fine; check that each one does what the task asks.

**The last song added:**

```maths
{"version":1,"name":"Saved playlist","device":"web","features":{"level":4},"variables":[{"name":"Songs","table":{"fields":[{"name":"title","type":"text"},{"name":"artist","type":"text"},{"name":"length","type":"number"}]},"value":[{"title":"Blue Sky","artist":"Kai","length":3}],"remember":true},{"name":"LastAdded","value":"","remember":true}],"screens":[{"id":"home","name":"Home","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"h1","x":24,"y":16,"w":500,"h":40,"text":"My playlist","visible":true,"vars":{}}]},{"name":"TitleLabel","kind":"text","instanceVars":[],"instances":[{"id":"l1","x":24,"y":64,"w":60,"h":36,"text":"Title","visible":true,"vars":{}}]},{"name":"TitleInput","kind":"input","instanceVars":[],"instances":[{"id":"i1","x":84,"y":60,"w":170,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"ArtistLabel","kind":"text","instanceVars":[],"instances":[{"id":"l2","x":268,"y":64,"w":60,"h":36,"text":"Artist","visible":true,"vars":{}}]},{"name":"ArtistInput","kind":"input","instanceVars":[],"instances":[{"id":"i2","x":328,"y":60,"w":150,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"LengthLabel","kind":"text","instanceVars":[],"instances":[{"id":"l3","x":492,"y":64,"w":70,"h":36,"text":"Minutes","visible":true,"vars":{}}]},{"name":"LengthInput","kind":"input","instanceVars":[],"instances":[{"id":"i3","x":566,"y":60,"w":70,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"AddButton","kind":"button","instanceVars":[],"instances":[{"id":"b1","x":650,"y":58,"w":130,"h":46,"text":"Add song","visible":true,"vars":{}}]},{"name":"SongTable","kind":"table","instanceVars":[],"instances":[{"id":"T1","x":24,"y":160,"w":560,"h":280,"text":"","visible":true,"vars":{},"source":"Songs","columns":""}]},{"name":"WelcomeText","kind":"text","instanceVars":[],"instances":[{"id":"t1","x":24,"y":116,"w":560,"h":36,"text":"","visible":true,"vars":{}}]}],"events":[{"id":"e1","else":false,"conds":[{"type":"onClicked","target":"AddButton"}],"actions":[{"type":"tableAdd","table":"Songs","values":{"title":"TitleInput.text","artist":"ArtistInput.text","length":"int(LengthInput.text)"}},{"type":"setVar","var":"LastAdded","value":"TitleInput.text"}],"children":[]},{"id":"e2","else":false,"conds":[{"type":"onStart"}],"actions":[],"children":[{"id":"e2a","else":false,"conds":[{"type":"compareValues","left":"count(Songs)","op":"=","right":"0"}],"actions":[{"type":"setText","target":"WelcomeText","value":"\"Add your first song\""}],"children":[]},{"id":"e2b","else":true,"conds":[],"actions":[{"type":"setText","target":"WelcomeText","value":"\"Welcome back. Songs saved: \" & count(Songs) & \". Last added: \" & LastAdded"}],"children":[]}]}]}]}
```

:::

:::


## Exit ticket

:::keep-together

**Your app remembers a table of scores. A friend opens it on their own laptop. What will they see, and why?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Only the starting rows: remembered data is kept in the browser where it was added, not in the project or online.

:::

