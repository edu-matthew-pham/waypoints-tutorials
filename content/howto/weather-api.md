---
title: Add live weather to your project
summary: "Ask a free weather service for the weather right now, and show it in your app or web page."
courses: [code/gradio, code/data, code/dom]
keywords: "api open-meteo weather fetch json requests live data"
contexts:
  - { id: gradio, label: "Gradio (Python)" }
  - { id: web, label: "HTML and JavaScript" }
---
Want your app or page to know what the weather's doing right now? By the end of this page it will show something like:

> Canberra: 18.4 °C, wind 12.6 km/h

The numbers come live from **Open-Meteo**, a free weather service. You don't need to sign up or get a key, so there's nothing secret to keep out of your code. Choose at the top whether you're building a Gradio app or a web page.

::: for gradio

You'll need an app made with `gr.Interface` ([Your first app](../../code/gradio/intro/)). If you'd like the longer version of the idea, [Ask an API](../../code/data/data-api/) is a whole lesson on it, but you don't need it first.

This runs on your own computer, not in the tutorials' playground, and needs two libraries. Install them once:

```text
pip install requests gradio
```

:::

::: for web

You'll need a page you can change with JavaScript (`querySelector` and `textContent`). If you'd like the longer version of the idea, [Data from the web: fetch](../../code/dom/dom-fetch/) is a whole lesson on it, but you don't need it first.

:::

## Find your place

Open-Meteo doesn't know place names. It wants a **latitude and longitude**: two numbers that pin a spot on the map. Search for your town's name followed by "latitude longitude", or right-click a spot on an online map. Anywhere south of the equator, the latitude has a minus sign: Canberra is about -35.28, 149.13.

::: for gradio

## Ask for the weather

Start by just asking and printing whatever comes back. `requests.get` sends your question to Open-Meteo, and `.json()` turns its reply into Python dictionaries you can read.

```python
import requests

URL = "https://api.open-meteo.com/v1/forecast"
details = {"latitude": -35.28, "longitude": 149.13, "current": "temperature_2m,wind_speed_10m"}

reply = requests.get(URL, params=details, timeout=10).json()
print(reply)
```

Run it. You should see a long dictionary printed out. Somewhere in it is `'current'`, with the temperature and wind inside. That's the part you want.

## Pick out the temperature and wind

```python
now = reply["current"]
print(str(now["temperature_2m"]) + " °C, wind " + str(now["wind_speed_10m"]) + " km/h")
```

Add these lines under the others and run it again: you should see one tidy line, like `18.4 °C, wind 12.6 km/h`. Read the square brackets left to right: the reply, then its `"current"` part, then the value inside that.

## Turn it into a function

Gradio runs a function when someone presses Submit, so the weather needs to be one: a place name goes in, a line of text comes out. A dictionary keeps the latitude and longitude for each place you want to offer.

```python
PLACES = {
    "Canberra": {"latitude": -35.28, "longitude": 149.13},
    "Sydney": {"latitude": -33.87, "longitude": 151.21},
    "Darwin": {"latitude": -12.46, "longitude": 130.84},
}

def weather(place_name):
    place = PLACES[place_name]
    details = {"latitude": place["latitude"], "longitude": place["longitude"], "current": "temperature_2m,wind_speed_10m"}
    now = requests.get(URL, params=details, timeout=10).json()["current"]
    return place_name + ": " + str(now["temperature_2m"]) + " °C, wind " + str(now["wind_speed_10m"]) + " km/h"
```

## Put it in your app

Use your function in an Interface. A Dropdown lets people pick a place:

```python
import gradio as gr

gr.Interface(
    fn=weather,
    inputs=gr.Dropdown(["Canberra", "Sydney", "Darwin"], value="Canberra", label="Place"),
    outputs=gr.Textbox(label="Weather now"),
    title="Weather now",
    article="Weather data by Open-Meteo.com (CC BY 4.0)",
).launch()
```

Run it, pick a place and press Submit: you should see that place's weather right now. The `article` line puts a small credit to Open-Meteo under your app, which is the one thing they ask for in return.

## Cope when the internet drops out

Right now, if the connection drops, your app shows a red Error and nothing useful. `try` and `except` catch that problem so your app can say what happened instead. Put them around the line that asks for the weather:

```python
def weather(place_name):
    place = PLACES[place_name]
    details = {"latitude": place["latitude"], "longitude": place["longitude"], "current": "temperature_2m,wind_speed_10m"}
    try:
        now = requests.get(URL, params=details, timeout=10).json()["current"]
    except requests.RequestException:
        return "Couldn't reach the weather service. Check the internet and try again."
    return place_name + ": " + str(now["temperature_2m"]) + " °C, wind " + str(now["wind_speed_10m"]) + " km/h"
```

::: full

```python
import requests
import gradio as gr

URL = "https://api.open-meteo.com/v1/forecast"

PLACES = {
    "Canberra": {"latitude": -35.28, "longitude": 149.13},
    "Sydney": {"latitude": -33.87, "longitude": 151.21},
    "Darwin": {"latitude": -12.46, "longitude": 130.84},
}

def weather(place_name):
    place = PLACES[place_name]
    details = {"latitude": place["latitude"], "longitude": place["longitude"], "current": "temperature_2m,wind_speed_10m"}
    try:
        now = requests.get(URL, params=details, timeout=10).json()["current"]
    except requests.RequestException:
        return "Couldn't reach the weather service. Check the internet and try again."
    return place_name + ": " + str(now["temperature_2m"]) + " °C, wind " + str(now["wind_speed_10m"]) + " km/h"


gr.Interface(
    fn=weather,
    inputs=gr.Dropdown(["Canberra", "Sydney", "Darwin"], value="Canberra", label="Place"),
    outputs=gr.Textbox(label="Weather now"),
    title="Weather now",
    article="Weather data by Open-Meteo.com (CC BY 4.0)",
).launch()
```

:::

:::

::: for web

## Ask for the weather

Start by just asking and logging whatever comes back. Your question goes in the address, after the `?`. `fetch` sends it, and `.json()` turns the reply into JavaScript objects. Both take a moment to arrive, so they go inside an `async` function with `await` in front.

```javascript
const URL = "https://api.open-meteo.com/v1/forecast?latitude=-35.28&longitude=149.13&current=temperature_2m,wind_speed_10m";

async function load() {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
}
load();
```

Open your page, then the browser's console. You should see an object you can click to open up. Inside it, `current` holds the temperature and wind. That's the part you want.

## Pick out the temperature and wind

Put these lines inside `load`, under the `console.log(data)` line:

```javascript
const now = data.current;
console.log(now.temperature_2m + " °C, wind " + now.wind_speed_10m + " km/h");
```

Reload: the console should now show one tidy line, like `18.4 °C, wind 12.6 km/h`.

## Show it on your page

The console is only for you. To put the weather on the page, give it somewhere to go:

```html
<p id="weather">Loading the weather…</p>
<p><small>Weather data by Open-Meteo.com (CC BY 4.0)</small></p>
```

Then change `load` so it fills that paragraph in:

```javascript
async function load() {
  const response = await fetch(URL);
  const now = (await response.json()).current;
  document.querySelector("#weather").textContent = "Canberra: " + now.temperature_2m + " °C, wind " + now.wind_speed_10m + " km/h";
}
load();
```

The small line credits Open-Meteo, which is the one thing they ask for in return.

Reload your page: "Loading the weather…" should change to the weather after a moment.

## Cope when the internet drops out

If the connection drops, `fetch` fails and your page is stuck on "Loading the weather…" forever. `try` and `catch` let it say what happened instead:

```javascript
async function load() {
  const box = document.querySelector("#weather");
  try {
    const response = await fetch(URL);
    const now = (await response.json()).current;
    box.textContent = "Canberra: " + now.temperature_2m + " °C, wind " + now.wind_speed_10m + " km/h";
  } catch (error) {
    box.textContent = "Couldn't reach the weather service. Check the internet and try again.";
  }
}
load();
```

## Try it here

Not sure the weather service works on your school's network? This button runs the same code right here. If it shows the weather, your network is fine, and any problem is in your code.

<p><button type="button" id="wpt-ht-try">Get Canberra's weather now</button></p>
<p class="wpt-ht-out" id="wpt-ht-try-out">Nothing yet.</p>

<script>
document.getElementById('wpt-ht-try').addEventListener('click', async function () {
  const box = document.getElementById('wpt-ht-try-out');
  box.textContent = 'Asking…';
  try {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-35.28&longitude=149.13&current=temperature_2m,wind_speed_10m');
    const now = (await response.json()).current;
    box.textContent = 'Canberra: ' + now.temperature_2m + ' °C, wind ' + now.wind_speed_10m + ' km/h';
  } catch (error) {
    box.textContent = "Couldn't reach the weather service. Your network may block it: the code is still right.";
  }
});
</script>

::: full

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Weather now</title>
</head>
<body>
  <h1>Weather now</h1>
  <p id="weather">Loading the weather…</p>
  <p><small>Weather data by Open-Meteo.com (CC BY 4.0)</small></p>

  <script>
    const URL = "https://api.open-meteo.com/v1/forecast?latitude=-35.28&longitude=149.13&current=temperature_2m,wind_speed_10m";

    async function load() {
      const box = document.querySelector("#weather");
      try {
        const response = await fetch(URL);
        const now = (await response.json()).current;
        box.textContent = "Canberra: " + now.temperature_2m + " °C, wind " + now.wind_speed_10m + " km/h";
      } catch (error) {
        box.textContent = "Couldn't reach the weather service. Check the internet and try again.";
      }
    }
    load();
  </script>
</body>
</html>
```

:::

:::

## Make it yours

- **Your own town?** Swap in its latitude and longitude.
- **Want °F?** Add `temperature_unit=fahrenheit` to your details.
- **Want rain or humidity too?** Add more names to `current`, with commas between, like `precipitation` or `relative_humidity_2m`. Open-Meteo's documentation lists every one.
- **Want "sunny" or "raining" instead of numbers?** Add `weather_code` to `current`. It's a number (0 is clear sky, 61 is light rain; the documentation has the rest), and an `if` can turn it into words or a picture.
- **Want the week ahead?** Ask for `daily` instead of `current`. You get a list of values, one per day, so you'll need a loop to show them.

## When it goes wrong

- **"Couldn't reach the weather service", or a connection error.** Your school's network might block Open-Meteo. Try it at home or on another network: your code may be fine.
- **`KeyError: 'current'` in Python, or `undefined` in JavaScript.** Print or log the whole reply. If it says `"error": true`, the `"reason"` next to it tells you what's wrong: often a typo in the address, or a latitude that isn't between -90 and 90.
- **The numbers look wrong for your town.** Check the minus sign on your latitude. Without it, Canberra ends up in the Pacific Ocean, east of Japan.
- **It worked, then stopped.** Only ask when someone presses a button or opens the page, never in a loop that asks every second. The free service has a daily limit that a class won't get near, unless a program asks nonstop.

::: teacher

**Which version to send.** Students who know Gradio get `?for=gradio` on the link; students building a web page get `?for=web`. They can switch on the page, so a wrong guess costs nothing. "Copy link to this version" copies the address with their version in it.

**What this is.** A recipe for a project, not a lesson: nothing is checked or recorded. The steps come first and the full code is folded under "Show the full code". It's worth noticing whether students work through the steps or open the full code straight away: either is fine, and it tells us whether the steps are useful for a task like this.

**Common sticking points.**
- The school network blocks `api.open-meteo.com`. Check from a student laptop before the lesson; if it's blocked, the lessons linked at the top use a saved copy of a forecast instead.
- Gradio students run this on their own computer, so they need `pip install requests gradio` first.
- Reading nested data (`reply["current"]["temperature_2m"]`, `data.current.temperature_2m`). Printing or logging the whole reply first helps.
- A missing minus sign on a southern latitude.

**Why Open-Meteo.** It needs no account and no API key, so students never handle a secret, and it allows calls from a web page. It is free for non-commercial use with credit (CC BY 4.0); check the current terms at open-meteo.com before using it beyond class. If a student moves to a service that needs a key, the key must never go in shared code or a public web page.

:::
