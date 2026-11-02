---
title: Add live weather to your project
summary: "Ask a free weather service for the weather right now, and show it in your app or web page."
courses: [code/gradio, code/data, code/dom]
contexts:
  - { id: gradio, label: "Gradio (Python)" }
  - { id: web, label: "HTML and JavaScript" }
---
This is a how-to, not a lesson: a recipe for your own project. Read it, copy what you need, change it to fit.

## What you'll end up with

Your app or page shows the weather for a place right now, something like:

> Canberra: 18.4 °C, wind 12.6 km/h

The numbers come live from **Open-Meteo**, a free weather service. It needs no sign-up and no key, so there is nothing secret to keep out of your code.

::: for gradio

**What you should already know:** making an app from a function with `gr.Interface` ([Your first app](../../code/gradio/intro/)). Reading data from a web service helps but isn't needed: [Ask an API](../../code/data/data-api/) is the full lesson.

This runs on your own computer, not in the tutorials' playground. Install the two libraries once:

```text
pip install requests gradio
```

:::

::: for web

**What you should already know:** changing a page with JavaScript (`querySelector`, `textContent`). Using `fetch` helps but isn't needed: [Data from the web: fetch](../../code/dom/dom-fetch/) is the full lesson.

:::

## Find your place

Open-Meteo works from a place's **latitude and longitude**, not its name. Search for your place's name followed by "latitude longitude", or right-click a spot on an online map. South of the equator, latitude is negative: Canberra is about -35.28, 149.13.

::: for gradio

## 1. Ask for the weather

`requests.get` sends the address and the details; `.json()` turns the reply into Python dictionaries.

```python
import requests

URL = "https://api.open-meteo.com/v1/forecast"
details = {"latitude": -35.28, "longitude": 149.13, "current": "temperature_2m,wind_speed_10m"}

reply = requests.get(URL, params=details, timeout=10).json()
print(reply)
```

Run it and look at what comes back. The part you want is inside `"current"`.

## 2. Pull out what you need

```python
now = reply["current"]
print(str(now["temperature_2m"]) + " °C, wind " + str(now["wind_speed_10m"]) + " km/h")
```

Follow the square brackets from left to right: the reply, then `"current"`, then the value.

## 3. Put it in a function

Gradio needs a function: a place name in, a line of text out. A dictionary keeps each place's latitude and longitude.

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

## 4. Show it in Gradio

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

The `article` line credits Open-Meteo, which is the one thing their free use asks for.

## 5. Cope with no internet

If the connection drops, `requests.get` stops the program with an error. `try` and `except` catch it so your app says something useful instead. Copy this shape as it is:

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

## 1. Ask for the weather

The details go in the address after the `?`. `fetch` asks, and `.json()` turns the reply into JavaScript objects. Both take a moment, so they need `await` inside an `async` function.

```javascript
const URL = "https://api.open-meteo.com/v1/forecast?latitude=-35.28&longitude=149.13&current=temperature_2m,wind_speed_10m";

async function load() {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
}
load();
```

Open the console and look at what comes back. The part you want is inside `current`.

## 2. Pull out what you need

```javascript
const now = data.current;
console.log(now.temperature_2m + " °C, wind " + now.wind_speed_10m + " km/h");
```

## 3. Show it on your page

Give your page somewhere for the weather to go, then fill it in.

```html
<p id="weather">Loading the weather…</p>
<p><small>Weather data by Open-Meteo.com (CC BY 4.0)</small></p>
```

```javascript
async function load() {
  const response = await fetch(URL);
  const now = (await response.json()).current;
  document.querySelector("#weather").textContent = "Canberra: " + now.temperature_2m + " °C, wind " + now.wind_speed_10m + " km/h";
}
load();
```

The small line credits Open-Meteo, which is the one thing their free use asks for.

## 4. Cope with no internet

If the connection drops, `fetch` fails and nothing changes on the page. `try` and `catch` let you say so instead:

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

This button runs the same code on this page.

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

- **Another place:** change the latitude and longitude.
- **°F instead of °C:** add `temperature_unit=fahrenheit` to the details.
- **Something other than temperature:** add names to `current`, separated by commas, such as `relative_humidity_2m` or `precipitation`. Open-Meteo's documentation lists them all.
- **Sunny, cloudy or rain:** add `weather_code` to `current`. It's a number: 0 is clear sky, 61 is light rain, and the documentation lists the rest. An `if` can turn it into words or an icon.
- **The week ahead:** ask for `daily` instead of `current`. You get lists, one value per day, so you need a loop.

## When it goes wrong

- **Nothing comes back, or a connection error.** Your school's network may block the weather service. Try at home or on another network; your code may be fine.
- **An error about `current`** (a `KeyError` in Python, `undefined` in JavaScript). Print or log the whole reply first. If it says `"error": true`, its `"reason"` tells you what's wrong, often a typo in the address or a latitude that isn't between -90 and 90.
- **The wrong numbers.** Check your latitude isn't missing its minus sign: without it, Canberra lands in the sea off Japan.
- **It worked, then stopped.** Ask only when someone clicks or loads the page, never in a loop that runs every second. The free service has a daily limit, far above what a class needs, unless a program asks nonstop.

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
