---
title: Add a search and a filter to your list
summary: "Pick a category, type a few letters, and only the matching items stay: on a web page, in a Gradio app or at the command line."
courses: [code/dom, code/gradio, code/console]
keywords: "search filter dropdown select category list as you type includes lower find recipes"
switch: "My project is"
contexts:
  - { id: web, label: "A web page" }
  - { id: gradio, label: "A Gradio app" }
  - { id: console, label: "Command line" }
---
Your list has grown, and finding one thing means scrolling through all of it. This page adds a search: pick a category, type a few letters, and only the matching items stay. The examples use recipes from different cuisines; swap in whatever your project lists.

Choose Japanese, type `su`, and you're left with just Sushi.

## How it works

For each recipe, your program asks two questions:

1. Is it the cuisine that was picked? (Or was "All cuisines" picked?)
2. Does its name have the typed letters in it, anywhere?

If the answer to both is yes, the recipe stays. If either is no, it's left out. That's the whole idea, and it's the same in all three kinds of project: only how you type and see the results changes.

::: for web

You'll need a page that reacts when someone types ([Inputs](../../code/dom/dom-input/)) and builds a list from an array ([Building a list](../../code/dom/dom-list/)).

## Try it here

Have a go before you build it. This is the finished filter, running on this page:

<p><label>Cuisine <select id="wpt-ht-cuisine"><option value="all">All cuisines</option><option>Japanese</option><option>Italian</option><option>Mexican</option></select></label> <label>Search <input id="wpt-ht-search" placeholder="Type a few letters"></label></p>
<ul id="wpt-ht-results"></ul>

<script>
(function () {
  const recipes = [
    { name: "Sushi", cuisine: "Japanese" }, { name: "Ramen", cuisine: "Japanese" }, { name: "Miso soup", cuisine: "Japanese" },
    { name: "Pizza", cuisine: "Italian" }, { name: "Risotto", cuisine: "Italian" }, { name: "Spaghetti", cuisine: "Italian" },
    { name: "Tacos", cuisine: "Mexican" }, { name: "Quesadilla", cuisine: "Mexican" }, { name: "Guacamole", cuisine: "Mexican" },
  ];
  const cuisineBox = document.getElementById("wpt-ht-cuisine"), searchBox = document.getElementById("wpt-ht-search"), results = document.getElementById("wpt-ht-results");
  function showRecipes() {
    const cuisine = cuisineBox.value, letters = searchBox.value.toLowerCase();
    results.innerHTML = "";
    for (const recipe of recipes) {
      if ((cuisine === "all" || recipe.cuisine === cuisine) && recipe.name.toLowerCase().includes(letters)) {
        const li = document.createElement("li"); li.textContent = recipe.name; results.append(li);
      }
    }
    if (results.children.length === 0) { const li = document.createElement("li"); li.textContent = "No recipes match."; results.append(li); }
  }
  searchBox.addEventListener("input", showRecipes);
  cuisineBox.addEventListener("change", showRecipes);
  showRecipes();
})();
</script>

## Store your recipes

Each recipe is an **object** that holds its own name and its own cuisine, so the two can never get mixed up. The square brackets make a list of them:

```javascript
const recipes = [
  { name: "Sushi", cuisine: "Japanese" },
  { name: "Ramen", cuisine: "Japanese" },
  { name: "Miso soup", cuisine: "Japanese" },
  { name: "Pizza", cuisine: "Italian" },
  { name: "Risotto", cuisine: "Italian" },
  { name: "Spaghetti", cuisine: "Italian" },
  { name: "Tacos", cuisine: "Mexican" },
  { name: "Quesadilla", cuisine: "Mexican" },
  { name: "Guacamole", cuisine: "Mexican" },
];
```

`recipe.name` gives you a recipe's name, and `recipe.cuisine` its cuisine.

**Stored yours differently?** If you have one list of cuisines and a list of lists of recipes (a 2D array), keep it. Follow the steps below, and at the end use this loop in place of the one in `showRecipes`. The outer loop counts through the cuisines by number; the inner loop goes through that cuisine's recipes:

```javascript
const cuisines = ["Japanese", "Italian", "Mexican"];
const recipes = [
  ["Sushi", "Ramen", "Miso soup"],
  ["Pizza", "Risotto", "Spaghetti"],
  ["Tacos", "Quesadilla", "Guacamole"],
];

// inside showRecipes, in place of the for loop:
for (let i = 0; i < cuisines.length; i++) {
  for (const name of recipes[i]) {
    const rightCuisine = cuisine === "all" || cuisines[i] === cuisine;
    const hasLetters = name.toLowerCase().includes(letters);
    if (rightCuisine && hasLetters) {
      const li = document.createElement("li");
      li.textContent = name;
      results.append(li);
    }
  }
}
```

## Show every recipe

Give your page a list to fill, and a function that fills it:

```html
<ul id="results"></ul>
```

```javascript
const results = document.querySelector("#results");

function showRecipes() {
  results.innerHTML = "";
  for (const recipe of recipes) {
    const li = document.createElement("li");
    li.textContent = recipe.name;
    results.append(li);
  }
}

showRecipes();
```

`results.innerHTML = ""` empties the list first. That matters later: every time someone types, the list is rebuilt from scratch, and without it you'd get the old list plus the new one.

Open your page: you should see all nine recipes.

## Keep only the ones with those letters

Add a search box:

```html
<input id="search" placeholder="Type a few letters">
```

Then change `showRecipes` so it only adds a recipe when its name has the typed letters in it, and run it again every time someone types:

```javascript
const searchBox = document.querySelector("#search");

function showRecipes() {
  const letters = searchBox.value.toLowerCase();
  results.innerHTML = "";
  for (const recipe of recipes) {
    if (recipe.name.toLowerCase().includes(letters)) {
      const li = document.createElement("li");
      li.textContent = recipe.name;
      results.append(li);
    }
  }
}

searchBox.addEventListener("input", showRecipes);
showRecipes();
```

- **`.includes(letters)`** is true when the name has those letters in it, anywhere. With nothing typed, every name counts, so the whole list shows.
- **`.toLowerCase()`** on both sides means `SU`, `Su` and `su` all find Sushi.
- **The `"input"` event** happens every time the box changes, so the list updates with each letter.

Type `su`: you should see only Sushi. Type `pa`: Spaghetti, because `pa` is in the middle of it.

## Add the cuisine dropdown

Add a dropdown. The first choice, "All cuisines", gets the value `all`; the others use their own words, which must match the cuisines in your recipes exactly:

```html
<select id="cuisine">
  <option value="all">All cuisines</option>
  <option>Japanese</option>
  <option>Italian</option>
  <option>Mexican</option>
</select>
```

Now a recipe has to pass both questions to stay:

```javascript
const cuisineBox = document.querySelector("#cuisine");

function showRecipes() {
  const cuisine = cuisineBox.value;
  const letters = searchBox.value.toLowerCase();
  results.innerHTML = "";
  for (const recipe of recipes) {
    const rightCuisine = cuisine === "all" || recipe.cuisine === cuisine;
    const hasLetters = recipe.name.toLowerCase().includes(letters);
    if (rightCuisine && hasLetters) {
      const li = document.createElement("li");
      li.textContent = recipe.name;
      results.append(li);
    }
  }
}

searchBox.addEventListener("input", showRecipes);
cuisineBox.addEventListener("change", showRecipes);
showRecipes();
```

`||` means "or": the cuisine is right if "All cuisines" is picked, or if it matches. `&&` means "and": the recipe stays only if both are true. A dropdown fires `"change"`, not `"input"`, when someone picks something.

Pick Mexican: you should see Tacos, Quesadilla and Guacamole. Type `qu`: just Quesadilla.

## Say when nothing matches

An empty list looks like something broke. After the loop, check whether anything was added:

```javascript
  if (results.children.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No recipes match.";
    results.append(li);
  }
```

Put it inside `showRecipes`, after the loop. Pick Mexican and type `pa`: you should see "No recipes match."

::: full

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Recipe finder</title>
</head>
<body>
  <h1>Recipe finder</h1>

  <label>Cuisine
    <select id="cuisine">
      <option value="all">All cuisines</option>
      <option>Japanese</option>
      <option>Italian</option>
      <option>Mexican</option>
    </select>
  </label>
  <label>Search
    <input id="search" placeholder="Type a few letters">
  </label>

  <ul id="results"></ul>

  <script>
    const recipes = [
      { name: "Sushi", cuisine: "Japanese" },
      { name: "Ramen", cuisine: "Japanese" },
      { name: "Miso soup", cuisine: "Japanese" },
      { name: "Pizza", cuisine: "Italian" },
      { name: "Risotto", cuisine: "Italian" },
      { name: "Spaghetti", cuisine: "Italian" },
      { name: "Tacos", cuisine: "Mexican" },
      { name: "Quesadilla", cuisine: "Mexican" },
      { name: "Guacamole", cuisine: "Mexican" },
    ];

    const cuisineBox = document.querySelector("#cuisine");
    const searchBox = document.querySelector("#search");
    const results = document.querySelector("#results");

    function showRecipes() {
      const cuisine = cuisineBox.value;
      const letters = searchBox.value.toLowerCase();
      results.innerHTML = "";

      for (const recipe of recipes) {
        const rightCuisine = cuisine === "all" || recipe.cuisine === cuisine;
        const hasLetters = recipe.name.toLowerCase().includes(letters);
        if (rightCuisine && hasLetters) {
          const li = document.createElement("li");
          li.textContent = recipe.name;
          results.append(li);
        }
      }

      if (results.children.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No recipes match.";
        results.append(li);
      }
    }

    searchBox.addEventListener("input", showRecipes);
    cuisineBox.addEventListener("change", showRecipes);
    showRecipes();
  </script>
</body>
</html>
```

:::

:::

::: for gradio

You'll need an app made with `gr.Interface` ([Your first app](../../code/gradio/intro/)), and to have met dictionaries ([A quiz app](../../code/gradio/gradio-quiz/)). This runs on your own computer: `pip install gradio` once if you haven't already.

:::

::: for console

You'll need to ask with `input()` ([Ask and store](../../code/console/console-input/)) and keep a program going with `while True` and `break` ([A menu that keeps showing](../../code/console/console-menu/)).

:::

::: for gradio,console

## Store your recipes

A dictionary pairs each cuisine with its list of recipes:

```python
recipes = {
    "Japanese": ["Sushi", "Ramen", "Miso soup"],
    "Italian": ["Pizza", "Risotto", "Spaghetti"],
    "Mexican": ["Tacos", "Quesadilla", "Guacamole"],
}
```

`recipes["Italian"]` gives you the Italian list, and `for cuisine in recipes:` goes through the cuisine names one by one.

**Stored yours differently?** If you have a list of cuisines and a list of lists of recipes (a 2D list), keep them, and use this version of the function in the next step. The outer loop counts through the cuisines by number, so `cuisines[i]` is a cuisine's name and `recipes[i]` is its list:

```python
cuisines = ["Japanese", "Italian", "Mexican"]
recipes = [
    ["Sushi", "Ramen", "Miso soup"],
    ["Pizza", "Risotto", "Spaghetti"],
    ["Tacos", "Quesadilla", "Guacamole"],
]

def find_recipes(cuisine, letters):
    found = []
    for i in range(len(cuisines)):
        if cuisine == "All cuisines" or cuisine.lower() == cuisines[i].lower():
            for name in recipes[i]:
                if letters.lower() in name.lower():
                    found.append(name)
    return found
```

## Find the matching recipes

This function does the two questions from "How it works". Give it a cuisine and some letters, and it hands back a list of the recipes that match:

```python
def find_recipes(cuisine, letters):
    found = []
    for this_cuisine in recipes:
        if cuisine == "All cuisines" or cuisine.lower() == this_cuisine.lower():
            for name in recipes[this_cuisine]:
                if letters.lower() in name.lower():
                    found.append(name)
    return found
```

- **The outer loop** goes through each cuisine, and only looks inside the ones that were picked (or all of them, for "All cuisines").
- **The inner loop** goes through that cuisine's recipes.
- **`letters in name`** is true when the name has those letters in it, anywhere. With no letters typed, every name counts.
- **`.lower()`** on both sides means `SU`, `Su` and `su` all find Sushi, and `japanese` matches `Japanese`.

Check it before you go on. Add these lines at the bottom and run it:

```python
print(find_recipes("Japanese", "su"))
print(find_recipes("All cuisines", "pa"))
print(find_recipes("Mexican", "pa"))
```

You should see `['Sushi']`, then `['Spaghetti']` (`pa` is in the middle of it), then `[]`, an empty list, because no Mexican recipe has `pa` in it. Once all three are right, take the prints out.

:::

::: for gradio

## Put it in your app

Gradio needs a function that turns the matches into text to show, with "No recipes match." when there aren't any:

```python
import gradio as gr

def show_recipes(cuisine, letters):
    found = find_recipes(cuisine, letters)
    if len(found) == 0:
        return "No recipes match."
    return "\n".join(found)


gr.Interface(
    fn=show_recipes,
    inputs=[
        gr.Dropdown(["All cuisines", "Japanese", "Italian", "Mexican"], value="All cuisines", label="Cuisine"),
        gr.Textbox(label="Search", placeholder="Type a few letters"),
    ],
    outputs=gr.Textbox(label="Recipes"),
    title="Recipe finder",
    live=True,
).launch()
```

- **`"\n".join(found)`** turns the list into text with each recipe on its own line. You can copy it as it is.
- **`live=True`** runs your function every time the dropdown or the search box changes, so there's no Submit button: the list updates as you type.

Run it and type `su`: you should see Sushi. Pick Mexican and type `pa`: "No recipes match."

::: full

```python
import gradio as gr

recipes = {
    "Japanese": ["Sushi", "Ramen", "Miso soup"],
    "Italian": ["Pizza", "Risotto", "Spaghetti"],
    "Mexican": ["Tacos", "Quesadilla", "Guacamole"],
}

def find_recipes(cuisine, letters):
    found = []
    for this_cuisine in recipes:
        if cuisine == "All cuisines" or cuisine.lower() == this_cuisine.lower():
            for name in recipes[this_cuisine]:
                if letters.lower() in name.lower():
                    found.append(name)
    return found


def show_recipes(cuisine, letters):
    found = find_recipes(cuisine, letters)
    if len(found) == 0:
        return "No recipes match."
    return "\n".join(found)


gr.Interface(
    fn=show_recipes,
    inputs=[
        gr.Dropdown(["All cuisines", "Japanese", "Italian", "Mexican"], value="All cuisines", label="Cuisine"),
        gr.Textbox(label="Search", placeholder="Type a few letters"),
    ],
    outputs=gr.Textbox(label="Recipes"),
    title="Recipe finder",
    live=True,
).launch()
```

:::

:::

::: for console

## Ask, search, repeat

At the command line, the program asks for a cuisine and some letters, prints the matches, then asks again until you type `quit`. It can't update as you type, but the searching is exactly the same.

```python
print("Recipe finder")
print("Cuisines: Japanese, Italian, Mexican")

while True:
    cuisine = input("Cuisine (press Enter for all, or type quit): ")
    if cuisine == "quit":
        break
    if cuisine == "":
        cuisine = "All cuisines"

    letters = input("Search: ")
    found = find_recipes(cuisine, letters)

    if len(found) == 0:
        print("No recipes match.")
    for name in found:
        print("-", name)
    print()
```

Pressing Enter without typing gives `""`, an empty answer, which the program turns into "All cuisines". The `print()` on its own leaves a blank line between searches.

Run it: type `japanese`, then `su`, and you should see `- Sushi`. Press Enter for all cuisines and type `pa`: `- Spaghetti`. Type `quit` to stop.

::: full

```python
recipes = {
    "Japanese": ["Sushi", "Ramen", "Miso soup"],
    "Italian": ["Pizza", "Risotto", "Spaghetti"],
    "Mexican": ["Tacos", "Quesadilla", "Guacamole"],
}

def find_recipes(cuisine, letters):
    found = []
    for this_cuisine in recipes:
        if cuisine == "All cuisines" or cuisine.lower() == this_cuisine.lower():
            for name in recipes[this_cuisine]:
                if letters.lower() in name.lower():
                    found.append(name)
    return found


print("Recipe finder")
print("Cuisines: Japanese, Italian, Mexican")

while True:
    cuisine = input("Cuisine (press Enter for all, or type quit): ")
    if cuisine == "quit":
        break
    if cuisine == "":
        cuisine = "All cuisines"

    letters = input("Search: ")
    found = find_recipes(cuisine, letters)

    if len(found) == 0:
        print("No recipes match.")
    for name in found:
        print("-", name)
    print()
```

:::

:::

## Make it yours

- **Only match the start of a name?** Swap `.includes(letters)` for `.startsWith(letters)` in JavaScript, or `letters in name` for `name.startswith(letters)` in Python. Now `pa` finds nothing, but `pi` finds Pizza.
- **Want the cuisine shown next to each result?** Add it to the text you show, like `Sushi (Japanese)`.
- **Want the results in alphabetical order?** Sort them before you show them: `.sort()` works on lists in both languages.
- **Want to search more than the name?** Store more about each recipe, such as its main ingredients, and check those for the letters too.

## When it goes wrong

- **Typing `Sushi` with a capital finds nothing.** One side is lower case and the other isn't. Check `.toLowerCase()` (or `.lower()`) is on both the letters and the name.
- **Picking a cuisine changes nothing** (web page). Check you added the `"change"` listener to the dropdown, and that each `<option>`'s words match the cuisines in your recipes exactly, capitals included.
- **The list keeps getting longer as you type** (web page). The old list isn't being cleared. Check `results.innerHTML = ""` is at the start of `showRecipes`.
- **Nothing happens until you press Submit** (Gradio). Add `live=True` to your `gr.Interface`.
- **`KeyError: 'All cuisines'`** (Python). Your code is looking up `recipes[cuisine]` straight away, and there's no "All cuisines" in the dictionary. Use the loop from "Find the matching recipes", which checks for "All cuisines" first.

::: teacher

**Which version to send.** `?for=web` for students building a web page (after the DOM course's Inputs and Building a list lessons), `?for=gradio` for Gradio apps (after the quiz lesson, which introduces dictionaries), `?for=console` for command-line programs (after the console course's menu lesson). With no `?for=`, students choose at the top.

**One idea, three ways.** "How it works" is the same for all three: two questions per item, kept only if both are yes. The Gradio and command-line versions share the same `find_recipes` function word for word, which is a useful conversation about why logic goes in its own function: only the code around it changed.

**Other ways of storing the data.** Each version uses the structure its course teaches (an array of objects on the web; a dictionary in Python). The "Stored yours differently?" notes show the loop change for a list of cuisines plus a list of lists (a 2D array), so students who started that way don't have to rebuild their data.

**Common sticking points.**
- Case: forgetting `.toLowerCase()` / `.lower()` on one side.
- Web: the dropdown fires `change`, not `input`; and `<option>` text must match the data exactly.
- Python: looking up `recipes[cuisine]` directly breaks on "All cuisines".
- Logic: `||` / `or` for the cuisine, `&&` / `and` to combine the two questions.

**Tested** 3 to 4 Nov 2026: the web page in Chromium (typing, case, the dropdown, no matches), the Gradio version on Gradio 6.31 with `live=True` (updates as you type, no Submit), the command-line version with typed input, and both "Stored yours differently?" loops.

:::
