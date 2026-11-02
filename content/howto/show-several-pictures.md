---
title: Show a picture for every word in a list
summary: "Type several words, look each one up, and show all the matching pictures in your Gradio app: as a grid or one at a time."
courses: [code/gradio]
keywords: "gallery images pictures carousel slideshow lookup dictionary list loop split"
switch: "I've learnt"
default: dict
contexts:
  - { id: lists, label: "Parallel lists" }
  - { id: dict, label: "Dictionaries" }
  - { id: class, label: "A class" }
---
This is a how-to, not a lesson: a recipe for your own project. Read it, copy what you need, change it to fit.

## What you'll end up with

Type `cat bird dog fish`, press Submit, and every matching picture appears, each with its word underneath. Words with no picture are listed below, so nothing silently goes missing.

![The Picture finder app: four pictures in a grid, each labelled with its word](grid.png)

**What you should already know:** making an app from a function with `gr.Interface` ([Your first app](../../code/gradio/intro/)), a `for` loop over a list, and `if`. Choose above how your pictures are stored: only that part of the code changes.

## Get some pictures

Make a folder called `images` next to your program and put your pictures in it. No pictures yet? Save these four test pictures into it: [cat.png](images/cat.png), [dog.png](images/dog.png), [bird.png](images/bird.png), [fish.png](images/fish.png).

## 1. Find the picture for one word

A function that takes one word and gives back its picture, or `None` (Python's "nothing") if there isn't one.

::: for lists

Two lists in the same order: the name at position 2 goes with the picture at position 2.

```python
import gradio as gr

names = ["cat", "dog", "bird", "fish"]
pictures = ["images/cat.png", "images/dog.png", "images/bird.png", "images/fish.png"]

def find_picture(word):
    if word in names:
        return pictures[names.index(word)]
    return None
```

`word in names` checks the word is in the list; `names.index(word)` says which position it is at. Copy those two as they are.

:::

::: for dict

A dictionary looks a picture up by its name, so there are no positions to keep in step.

```python
import gradio as gr

pictures = {
    "cat": "images/cat.png",
    "dog": "images/dog.png",
    "bird": "images/bird.png",
    "fish": "images/fish.png",
}

def find_picture(word):
    if word in pictures:
        return pictures[word]
    return None
```

`word in pictures` checks the dictionary has that name as a key.

:::

::: for class

Each animal is an object that knows its own name and picture. The function loops through them until one matches.

```python
import gradio as gr

class Animal:
    def __init__(self, name, picture):
        self.name = name
        self.picture = picture

animals = [
    Animal("cat", "images/cat.png"),
    Animal("dog", "images/dog.png"),
    Animal("bird", "images/bird.png"),
    Animal("fish", "images/fish.png"),
]

def find_picture(word):
    for animal in animals:
        if animal.name == word:
            return animal.picture
    return None
```

You can also write the class with `from dataclasses import dataclass` and `@dataclass`, which writes `__init__` for you. The version above works the same and needs nothing new.

:::

Test it before going on: `print(find_picture("cat"))` should print `images/cat.png`, and `print(find_picture("unicorn"))` should print `None`.

## 2. Loop through the words

`.split()` turns `"cat bird dog"` into the list `["cat", "bird", "dog"]`, and `.lower()` first makes `Cat` and `cat` the same. Then a loop looks each word up and keeps the pictures it finds.

```python
def show_pictures(text):
    found = []
    for word in text.lower().split():
        picture = find_picture(word)
        if picture is not None:
            found.append(picture)
    return found
```

## 3. Show them in a Gallery

`gr.Gallery` shows a whole list of pictures. Use it as the output:

```python
demo = gr.Interface(
    fn=show_pictures,
    inputs=gr.Textbox(label="Words", placeholder="cat bird dog"),
    outputs=gr.Gallery(label="Pictures", columns=4),
    title="Picture finder",
)

demo.launch()
```

`columns=4` sets how many pictures fit across.

## 4. Put each word under its picture

Give the Gallery a pair for each picture, `(picture, caption)`, instead of just the picture. Change one line in the loop:

```python
            found.append((picture, word))
```

The extra round brackets matter: they make the pair.

## 5. Say which words had no picture

Keep a second list for the misses, and return both. Two things come back, so the Interface needs two outputs.

```python
def show_pictures(text):
    found = []
    missing = []
    for word in text.lower().split():
        picture = find_picture(word)
        if picture is None:
            missing.append(word)
        else:
            found.append((picture, word))
    if missing:
        message = "No picture for: " + ", ".join(missing)
    else:
        message = "Found them all."
    return found, message
```

```python
    outputs=[
        gr.Gallery(label="Pictures", columns=4),
        gr.Textbox(label="Not found"),
    ],
```

`", ".join(missing)` joins the list into one piece of text with commas between. Copy it as it is.

## 6. One at a time, like a carousel

Want one big picture at a time, with the others as small pictures to click underneath? Add two settings to the Gallery:

```python
        gr.Gallery(label="Pictures", preview=True, selected_index=0),
```

![The same app showing the cat picture large, with four small pictures to choose from underneath](carousel.png)

`selected_index=0` opens on the first picture. Leave both out to go back to the grid.

::: for lists

::: full

```python
import gradio as gr

names = ["cat", "dog", "bird", "fish"]
pictures = ["images/cat.png", "images/dog.png", "images/bird.png", "images/fish.png"]

def find_picture(word):
    if word in names:
        return pictures[names.index(word)]
    return None


def show_pictures(text):
    found = []
    missing = []
    for word in text.lower().split():
        picture = find_picture(word)
        if picture is None:
            missing.append(word)
        else:
            found.append((picture, word))
    if missing:
        message = "No picture for: " + ", ".join(missing)
    else:
        message = "Found them all."
    return found, message


demo = gr.Interface(
    fn=show_pictures,
    inputs=gr.Textbox(label="Words", placeholder="cat bird dog"),
    outputs=[
        gr.Gallery(label="Pictures", columns=4),
        gr.Textbox(label="Not found"),
    ],
    title="Picture finder",
)

demo.launch()
```

:::

:::

::: for dict

::: full

```python
import gradio as gr

pictures = {
    "cat": "images/cat.png",
    "dog": "images/dog.png",
    "bird": "images/bird.png",
    "fish": "images/fish.png",
}

def find_picture(word):
    if word in pictures:
        return pictures[word]
    return None


def show_pictures(text):
    found = []
    missing = []
    for word in text.lower().split():
        picture = find_picture(word)
        if picture is None:
            missing.append(word)
        else:
            found.append((picture, word))
    if missing:
        message = "No picture for: " + ", ".join(missing)
    else:
        message = "Found them all."
    return found, message


demo = gr.Interface(
    fn=show_pictures,
    inputs=gr.Textbox(label="Words", placeholder="cat bird dog"),
    outputs=[
        gr.Gallery(label="Pictures", columns=4),
        gr.Textbox(label="Not found"),
    ],
    title="Picture finder",
)

demo.launch()
```

:::

:::

::: for class

::: full

```python
import gradio as gr

class Animal:
    def __init__(self, name, picture):
        self.name = name
        self.picture = picture

animals = [
    Animal("cat", "images/cat.png"),
    Animal("dog", "images/dog.png"),
    Animal("bird", "images/bird.png"),
    Animal("fish", "images/fish.png"),
]

def find_picture(word):
    for animal in animals:
        if animal.name == word:
            return animal.picture
    return None


def show_pictures(text):
    found = []
    missing = []
    for word in text.lower().split():
        picture = find_picture(word)
        if picture is None:
            missing.append(word)
        else:
            found.append((picture, word))
    if missing:
        message = "No picture for: " + ", ".join(missing)
    else:
        message = "Found them all."
    return found, message


demo = gr.Interface(
    fn=show_pictures,
    inputs=gr.Textbox(label="Words", placeholder="cat bird dog"),
    outputs=[
        gr.Gallery(label="Pictures", columns=4),
        gr.Textbox(label="Not found"),
    ],
    title="Picture finder",
)

demo.launch()
```

:::

:::

## Make it yours

- **Letters instead of words:** loop over the letters of a word with `for letter in word:`, with a picture for each letter. A word then shows as a row of letter pictures, in order.
- **Your own pictures:** any `.png`, `.jpg` or `.gif` in your `images` folder. Add each one to your lists, dictionary or objects.
- **Repeats:** `cat cat dog` shows the cat twice. To show each picture once, check `if (picture, word) not in found:` before adding it.
- **Grid or carousel:** change `columns`, or use `preview=True` (step 6).
- **A title and some words above the app:** see [Add a starting page to your Gradio app](../gradio-landing-page/?for=sections).

## When it goes wrong

- **Nothing shows, or a "file not found" error.** The `images` folder must be next to your program, and each name must match exactly, including `.png` and capital letters. Run your program from that folder.
- **Every word says "No picture".** Your names have capitals or spaces (`"Cat "`) but the words are made lower case. Keep the names lower case with no spaces.
- **Captions are missing.** Check the pair has its own brackets: `found.append((picture, word))`.
- **"too many values" or the wrong box gets the pictures.** The function returns two things, so `outputs` needs two components, in the same order.
- **In the lists version, the wrong picture shows.** The two lists are out of step: count along both to check that the same position matches.

::: teacher

**Which version to send.** Send `?for=lists` to students who know lists but not dictionaries (Python Foundations), `?for=dict` after the Gradio quiz lesson, and `?for=class` after the optional class lesson. Only step 1 and the full code change; the loop, the Gallery and the captions are the same in all three. Students can switch to compare, which is a good conversation about why dictionaries suit lookups: parallel lists work but break quietly when they fall out of step.

**What this is.** A recipe for a project, not a lesson: nothing is checked or recorded. Steps first, full code folded.

**Adapting it.** The same shape fits any project that turns a list of things into pictures: words to pictures, letters to pictures (spelling a word), ingredients to photos, a sequence of moves to diagrams. The test pictures are simple drawings made for this page, free to use.

**Common sticking points.**
- Picture paths: the program must run from the folder that holds `images`.
- `find_picture` returning `None`: worth testing it on its own (step 1) before building the loop.
- The `(picture, word)` pair and two return values both need a moment of explanation.
- Written and tested against Gradio 6 on 3 Nov 2026 (the grid, the captions, the "Not found" box and the carousel). The in-browser stand-in in the Gradio course doesn't run these: they run on the student's computer (`pip install gradio`, then `python app.py`).

:::
