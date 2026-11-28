---
title: "Build around a simulation"
subtitle: "Data apps · Build around a simulation · Lesson 9"
---

# Build around a simulation

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Someone has already made a pendulum simulation. Your job is the app around it: buttons that change it, and a table that records what it does.


:::teacher-note

**In one sentence:** Optional extension: an Embed shows a ready-made pendulum simulation (one web page, pendulum.html in this folder). The page sends period and length; the app sends gravity. Students build the app around it: Sim sends period shows the period (Build 1), planet buttons send gravity (Build 2), Record adds a row to Readings (Build 3). The Check shows that only the names in Sends get through. Then students use the lab to answer a science question and add a Clear button.

**Students should be able to say:** I can use a value an embedded simulation sends, with an event and its value. I can send a value to an embedded simulation from an event. I can record a simulation's results in a table and use them to answer a question.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Try the finished app

This is the app you'll build, open on the **Run** tab. Drag **Length** in the simulation and watch *Period* on the right change. Click **Moon**, then **Record reading**: a row goes into the table.

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Check: what gets through?


:::keep-together

**The pendulum page also sends a message called angle. Sim's Sends box says only period, length. What happens when angle arrives?**

☐ Sim sends period runs

☐ Nothing: the app ignores it

☐ Sim.angle now holds it

☐ The app shows an error

:::


:::teacher-note

**Answer:** Nothing: the app ignores it

The Embed only lets through the names in its Sends box, and only one plain value each: a number, some text, true or false. To use angle, add it to Sends; then there's a Sim sends angle event and a Sim.angle value.

:::


## Use your lab

Record two lengths on Earth, then the same two lengths on the Moon. Look at your table:

- What makes the period **longer**?
- If you could change the bob's weight, would it change the period? (The simulation doesn't let you, because it wouldn't.)


:::typical

## Make it yours: start again


**Clear the readings.** There's a **Clear** button. Make it clear the *Readings* table.

**One more idea.** Add a **Jupiter** button: duplicate a Planet and set its *g* to 24.8. Or show how many readings there are with `count(Readings)`.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible answer.** Other correct answers are fine; check that each one does what the task asks.

**Clear the readings:**

```maths
{"version":1,"name":"Pendulum lab","device":"web","features":{"level":4},"variables":[{"name":"Gravity","value":9.8},{"name":"Readings","table":{"fields":[{"name":"length","type":"number"},{"name":"gravity","type":"number"},{"name":"period","type":"number"}]},"value":[]}],"screens":[{"id":"home","name":"Lab","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"p0","x":20,"y":12,"w":760,"h":32,"text":"Pendulum lab: what changes the period?","visible":true,"vars":{}}]},{"name":"Sim","kind":"embed","instanceVars":[],"instances":[{"id":"p1","x":20,"y":52,"w":460,"h":300,"text":"A pendulum: drag Length to change it","visible":true,"vars":{},"page":"pendulum","sends":"period, length","listens":"gravity"}]},{"name":"Planet","kind":"button","instanceVars":[{"name":"g","value":0}],"instances":[{"id":"p20","x":500,"y":52,"w":130,"h":40,"text":"Earth","visible":true,"vars":{"g":9.8}},{"id":"p21","x":500,"y":100,"w":130,"h":40,"text":"Moon","visible":true,"vars":{"g":1.6}},{"id":"p22","x":500,"y":148,"w":130,"h":40,"text":"Mars","visible":true,"vars":{"g":3.7}}]},{"name":"GravityText","kind":"text","instanceVars":[],"instances":[{"id":"p3","x":500,"y":200,"w":280,"h":26,"text":"Gravity: 9.8 m/s²","visible":true,"vars":{}}]},{"name":"PeriodText","kind":"text","instanceVars":[],"instances":[{"id":"p4","x":500,"y":230,"w":280,"h":26,"text":"Period: ","visible":true,"vars":{}}]},{"name":"Record","kind":"button","instanceVars":[],"instances":[{"id":"p5","x":500,"y":270,"w":160,"h":44,"text":"Record reading","visible":true,"vars":{}}]},{"name":"ReadingsView","kind":"table","instanceVars":[],"instances":[{"id":"p6","x":20,"y":368,"w":460,"h":210,"text":"","visible":true,"vars":{},"source":"Readings","columns":""}]},{"name":"Question","kind":"text","instanceVars":[],"instances":[{"id":"p7","x":500,"y":368,"w":280,"h":140,"text":"Record two lengths on Earth, then the same lengths on the Moon. What makes the period longer? What doesn’t change it?","visible":true,"vars":{}}]},{"name":"ClearButton","kind":"button","instanceVars":[],"instances":[{"id":"p8","x":670,"y":270,"w":110,"h":44,"text":"Clear","visible":true,"vars":{}}]}],"events":[{"id":"s1","else":false,"conds":[{"type":"onEmbedSends","target":"Sim","message":"period"}],"actions":[{"type":"setText","target":"PeriodText","value":"\"Period: \" & Sim.period & \" s\""}],"children":[]},{"id":"s2","else":false,"conds":[{"type":"onClicked","target":"Planet"}],"actions":[{"type":"setVar","var":"Gravity","value":"Planet.g"},{"type":"sendToEmbed","target":"Sim","message":"gravity","value":"Gravity"},{"type":"setText","target":"GravityText","value":"\"Gravity: \" & Gravity & \" m/s²\""}],"children":[]},{"id":"s3","else":false,"conds":[{"type":"onClicked","target":"Record"}],"actions":[{"type":"tableAdd","table":"Readings","values":{"length":"Sim.length","gravity":"Gravity","period":"Sim.period"}}],"children":[]},{"id":"s4","else":false,"conds":[{"type":"onClicked","target":"ClearButton"}],"actions":[{"type":"tableClear","table":"Readings"}],"children":[]}]}],"pages":[{"name":"pendulum","data":"data:text/html;charset=utf-8;base64,PCFET0NUWVBFIGh0bWw+CjxodG1sPjxoZWFkPjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij48dGl0bGU+UGVuZHVsdW08L3RpdGxlPgo8c3R5bGU+Ym9keXttYXJnaW46MDtmb250OjE0cHggc3lzdGVtLXVpLHNhbnMtc2VyaWY7YmFja2dyb3VuZDojZjRmN2ZmO292ZXJmbG93OmhpZGRlbn0KI2N7ZGlzcGxheTpibG9jazt3aWR0aDoxMDB2dztoZWlnaHQ6Y2FsYygxMDB2aCAtIDQ0cHgpfQouYmFye2hlaWdodDo0NHB4O2Rpc3BsYXk6ZmxleDtnYXA6OHB4O2FsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nOjAgMTBweDtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXRvcDoxcHggc29saWQgI2RkZX0KaW5wdXR7ZmxleDoxfTwvc3R5bGU+PC9oZWFkPgo8Ym9keT48Y2FudmFzIGlkPSJjIj48L2NhbnZhcz4KPGRpdiBjbGFzcz0iYmFyIj48bGFiZWwgZm9yPSJsZW4iPkxlbmd0aDwvbGFiZWw+PGlucHV0IGlkPSJsZW4iIHR5cGU9InJhbmdlIiBtaW49IjAuMiIgbWF4PSIyIiBzdGVwPSIwLjEiIHZhbHVlPSIxIj48c3BhbiBpZD0ibHYiPjEuMCBtPC9zcGFuPiA8c3BhbiBpZD0iZ3YiPjwvc3Bhbj48L2Rpdj4KPHNjcmlwdD4KLy8gQSBwZW5kdWx1bS4gVGVsbHMgdGhlIGFwcCBpdHMgcGVyaW9kIGFuZCBsZW5ndGg7IGxpc3RlbnMgZm9yIGdyYXZpdHkuCmxldCBMID0gMSwgZyA9IDkuOCwgdCA9IDA7CmNvbnN0IGMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYycpLCB4ID0gYy5nZXRDb250ZXh0KCcyZCcpOwpjb25zdCBzZW5kID0gKG5hbWUsIHZhbHVlKSA9PiBwYXJlbnQucG9zdE1lc3NhZ2UoeyBuYW1lLCB2YWx1ZSB9LCAnKicpOwpjb25zdCBwZXJpb2QgPSAoKSA9PiBNYXRoLnJvdW5kKDIgKiBNYXRoLlBJICogTWF0aC5zcXJ0KEwgLyBnKSAqIDEwMCkgLyAxMDA7CmNvbnN0IHRlbGwgPSAoKSA9PiB7IHNlbmQoJ2xlbmd0aCcsIEwpOyBzZW5kKCdwZXJpb2QnLCBwZXJpb2QoKSk7IH07CmNvbnN0IHNob3cgPSAoKSA9PiB7IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndicpLnRleHRDb250ZW50ID0gJ2cgPSAnICsgZyArICcgbS9zwrInOyB9Owpkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVuJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4gewogIEwgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpOwogIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsdicpLnRleHRDb250ZW50ID0gTC50b0ZpeGVkKDEpICsgJyBtJzsKICB0ZWxsKCk7Cn0pOwphZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGUpID0+IHsKICBjb25zdCBkID0gZS5kYXRhIHx8IHt9OwogIGlmIChkLm5hbWUgPT09ICdncmF2aXR5JyAmJiB0eXBlb2YgZC52YWx1ZSA9PT0gJ251bWJlcicgJiYgZC52YWx1ZSA+IDApIHsgZyA9IGQudmFsdWU7IHNob3coKTsgdGVsbCgpOyB9Cn0pOwpmdW5jdGlvbiBkcmF3KCkgewogIGNvbnN0IHcgPSBjLndpZHRoID0gYy5jbGllbnRXaWR0aCwgaCA9IGMuaGVpZ2h0ID0gYy5jbGllbnRIZWlnaHQ7CiAgdCArPSAxIC8gNjA7CiAgY29uc3QgYSA9IDAuNSAqIE1hdGguY29zKE1hdGguc3FydChnIC8gTCkgKiB0KTsKICBjb25zdCBsZW4gPSBMICogKGggLSAzMCkgLyAyLjEsIG94ID0gdyAvIDIsIG95ID0gMTA7CiAgY29uc3QgYnggPSBveCArIGxlbiAqIE1hdGguc2luKGEpLCBieSA9IG95ICsgbGVuICogTWF0aC5jb3MoYSk7CiAgeC5jbGVhclJlY3QoMCwgMCwgdywgaCk7CiAgeC5zdHJva2VTdHlsZSA9ICcjNDQ1JzsgeC5saW5lV2lkdGggPSAyOwogIHguYmVnaW5QYXRoKCk7IHgubW92ZVRvKG94IC0gNDAsIG95KTsgeC5saW5lVG8ob3ggKyA0MCwgb3kpOyB4LnN0cm9rZSgpOwogIHguYmVnaW5QYXRoKCk7IHgubW92ZVRvKG94LCBveSk7IHgubGluZVRvKGJ4LCBieSk7IHguc3Ryb2tlKCk7CiAgeC5maWxsU3R5bGUgPSAnIzM1NjNlOSc7IHguYmVnaW5QYXRoKCk7IHguYXJjKGJ4LCBieSwgMTIsIDAsIDcpOyB4LmZpbGwoKTsKICB4LmZpbGxTdHlsZSA9ICcjMjIzJzsgeC5maWxsVGV4dCgnUGVyaW9kOiAnICsgcGVyaW9kKCkgKyAnIHMnLCAxMCwgaCAtIDEwKTsKICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7Cn0Kc2hvdygpOyB0ZWxsKCk7IGRyYXcoKTsKPC9zY3JpcHQ+PC9ib2R5PjwvaHRtbD4K"}]}
```

:::

:::


## Exit ticket

:::keep-together

**A climate simulation page sends temperature and listens for co2. Name the event and the action you would use in App Builder.**

{{lines-3}}

:::


:::teacher-note

**Answer:** The event Sim sends temperature (with Sim.temperature as the value), and the action Send co2 = … to Sim.

:::

