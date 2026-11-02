---
title: Add a starting page (and more pages) to your Gradio app
summary: "Give your app a welcome page, plus About or Help pages if you want them, without writing any HTML."
courses: [code/gradio]
switch: "I want"
contexts:
  - { id: sections, label: "One page with sections" }
  - { id: tabs, label: "Tabs" }
  - { id: pages, label: "Separate pages" }
---
This is a how-to, not a lesson: a recipe for your own project. Read it, copy what you need, change it to fit.

## What you'll end up with

Your app opens on a starting page that says what it is and how to use it, with a way to get to the app itself. The same steps add more pages, such as **About** or **Help**.

**What you should already know:** making an app from a function with `gr.Interface` ([Your first app](../../code/gradio/intro/)). You'll keep that app exactly as it is.

## Just a title and some text?

If you only want words above and below your app, you don't need any of the layouts below. `gr.Interface` has its own spots for them, in the same app:

```python
demo = gr.Interface(
    fn=greet,
    inputs=[gr.Textbox(label="Name"), gr.Checkbox(label="Excited?")],
    outputs=gr.Textbox(label="Greeting"),
    title="Greeter",
    description="Type a name and get a greeting. **Markdown** works here.",
    article="Made by Sam for Digital Technologies.",
)
```

`title` goes at the top, `description` under it and `article` below the app. Both `description` and `article` take Markdown. Want pictures, more pages or more room? Read on.

## Write the words in Markdown

You don't need HTML. Gradio pages take **Markdown**: plain text with a few marks.

```text
# Big heading
## Smaller heading
**bold** and *italic*
- a list item
1. a numbered step
[a link](https://example.com)
```

**Line breaks matter.** Each heading needs its own line, and a blank line starts a new paragraph. In Python there are two ways to get them:

```python
description="""
# Welcome
## How it works
Type a name and get a greeting.

This is a new paragraph.
"""
```

Three quote marks (`"""`) let the text run over several lines, just as you'd see it. Or keep it on one line and write `\n` wherever you want a new line:

```python
description="# Welcome\n## How it works\nType a name and get a greeting."
```

Two things that catch people out:

- `# Welcome ## How it works` on one line is one heading. A heading only counts at the start of a line.
- One line break inside ordinary text is ignored: the lines join into one paragraph. Leave a blank line between paragraphs, or use `gr.Markdown("...", line_breaks=True)` to keep every line break.

A good starting page says three things: **what it does**, **how to use it**, and **who made it**. A screenshot helps too.

## Three ways to lay it out

Choose one at the top of the page:

- **One page with sections:** everything on one long page, with links at the top that jump down to each part. Simplest.
- **Tabs:** a row of tabs (Welcome, App, About). One page, but only one part shows at a time.
- **Separate pages:** each page has its own address, and Gradio adds a menu at the top. The closest to a real website.

All three use `gr.Blocks`, which lets you put Markdown, pictures and your app together. `with` lines say what goes inside what, so **indentation matters**, like `if` and `for`.

::: for sections

## 1. Start from your app

Keep your app, but don't `.launch()` it any more. Give it a name instead:

```python
import gradio as gr

def greet(name, excited):
    message = "Hello, " + name
    if excited:
        return message + "!!!"
    return message + "."

app = gr.Interface(
    fn=greet,
    inputs=[gr.Textbox(label="Name"), gr.Checkbox(label="Excited?")],
    outputs=gr.Textbox(label="Greeting"),
)
```

## 2. Add the starting section

`gr.Blocks` holds the whole page. `gr.Markdown` shows your words; `app.render()` puts your app where it is written.

```python
with gr.Blocks(title="Greeter") as site:
    gr.Markdown("""
# Greeter
**Type a name, get a greeting.** Made by Sam for Digital Technologies.
""")

    gr.Markdown("## Try it")
    app.render()

site.launch()
```

Three quote marks (`"""`) let your Markdown run over several lines.

## 3. Add another section

More sections are more Markdown, after the app or before it:

```python
    gr.Markdown("""
## About
I made this to learn how apps turn a function into buttons and boxes.

## Help
1. Type a name in the box.
2. Tick **Excited?** if you want more energy.
3. Press **Submit**.
""")
```

## 4. Add links that jump down

Add `header_links=True` to each `gr.Markdown` that has headings. Gradio then gives every heading an address: `h-` and the heading in lower case, with dashes for spaces. So `## Try it` becomes `#h-try-it`.

```python
    gr.Markdown("""
# Greeter
**Type a name, get a greeting.** Made by Sam for Digital Technologies.

[Try it](#h-try-it) · [About](#h-about) · [Help](#h-help)
""", header_links=True)
```

Another section later? Add a heading, then add its link to that top line.

::: full

```python
import gradio as gr

def greet(name, excited):
    message = "Hello, " + name
    if excited:
        return message + "!!!"
    return message + "."

app = gr.Interface(
    fn=greet,
    inputs=[gr.Textbox(label="Name"), gr.Checkbox(label="Excited?")],
    outputs=gr.Textbox(label="Greeting"),
)

with gr.Blocks(title="Greeter") as site:
    gr.Markdown("""
# Greeter
**Type a name, get a greeting.** Made by Sam for Digital Technologies.

[Try it](#h-try-it) · [About](#h-about) · [Help](#h-help)
""", header_links=True)

    gr.Markdown("## Try it", header_links=True)
    app.render()

    gr.Markdown("""
## About
I made this to learn how apps turn a function into buttons and boxes.

## Help
1. Type a name in the box.
2. Tick **Excited?** if you want more energy.
3. Press **Submit**.
""", header_links=True)

site.launch()
```

:::

:::

::: for tabs

## 1. Start from your app

Keep your app, but don't `.launch()` it any more. Give it a name instead:

```python
import gradio as gr

def greet(name, excited):
    message = "Hello, " + name
    if excited:
        return message + "!!!"
    return message + "."

app = gr.Interface(
    fn=greet,
    inputs=[gr.Textbox(label="Name"), gr.Checkbox(label="Excited?")],
    outputs=gr.Textbox(label="Greeting"),
)
```

## 2. Make a Welcome tab and an App tab

`gr.Blocks` holds the whole page and `gr.Tabs` holds the tabs. Each `gr.Tab` is one tab; what's indented under it goes inside. `app.render()` puts your app in its tab.

```python
with gr.Blocks(title="Greeter") as site:
    with gr.Tabs() as tabs:
        with gr.Tab("Welcome", id="welcome"):
            gr.Markdown("""
# Greeter
**Type a name, get a greeting.** Made by Sam for Digital Technologies.
""")
        with gr.Tab("App", id="app"):
            app.render()

site.launch()
```

The tab names are the navigation: Gradio draws them, and clicking one switches page.

## 3. Add a "Try it" button

A button on the Welcome tab that jumps to the App tab. Put the button inside the Welcome tab, and the `.click` line at the end, inside `gr.Blocks` but outside the tabs. Copy this shape as it is:

```python
            start = gr.Button("Try it")
```

```python
    start.click(lambda: gr.Tabs(selected="app"), outputs=tabs)
```

`selected="app"` is the `id` of the tab to open.

## 4. Add another tab

Another tab is another `with gr.Tab(...)`, at the same indent as the others:

```python
        with gr.Tab("About", id="about"):
            gr.Markdown("I made this to learn how apps turn a function into buttons and boxes.")
```

Help, Credits or anything else: the same again.

::: full

```python
import gradio as gr

def greet(name, excited):
    message = "Hello, " + name
    if excited:
        return message + "!!!"
    return message + "."

app = gr.Interface(
    fn=greet,
    inputs=[gr.Textbox(label="Name"), gr.Checkbox(label="Excited?")],
    outputs=gr.Textbox(label="Greeting"),
)

with gr.Blocks(title="Greeter") as site:
    with gr.Tabs() as tabs:
        with gr.Tab("Welcome", id="welcome"):
            gr.Markdown("""
# Greeter
**Type a name, get a greeting.** Made by Sam for Digital Technologies.
""")
            start = gr.Button("Try it")
        with gr.Tab("App", id="app"):
            app.render()
        with gr.Tab("About", id="about"):
            gr.Markdown("I made this to learn how apps turn a function into buttons and boxes.")

    start.click(lambda: gr.Tabs(selected="app"), outputs=tabs)

site.launch()
```

:::

:::

::: for pages

## 1. Start from your app

Keep your app, but don't `.launch()` it any more. Give it a name instead:

```python
import gradio as gr

def greet(name, excited):
    message = "Hello, " + name
    if excited:
        return message + "!!!"
    return message + "."

app = gr.Interface(
    fn=greet,
    inputs=[gr.Textbox(label="Name"), gr.Checkbox(label="Excited?")],
    outputs=gr.Textbox(label="Greeting"),
)
```

## 2. Make the starting page

What's inside `gr.Blocks` is your first page, the one people see when they open your app.

```python
with gr.Blocks(title="Greeter") as site:
    gr.Markdown("""
# Greeter
**Type a name, get a greeting.** Made by Sam for Digital Technologies.

Choose **App** at the top to try it.
""")
```

## 3. Put your app on its own page

`site.route("App")` makes a new page called App, with its own address (`/app`). `app.render()` puts your app on it. Then launch the whole site.

```python
with site.route("App"):
    app.render()

site.launch()
```

Gradio adds a menu at the top right (Home, App) by itself: that's your navigation.

## 4. Add another page

Another page is another `with site.route(...)`, before `site.launch()`:

```python
with site.route("About"):
    gr.Markdown("I made this to learn how apps turn a function into buttons and boxes.")
```

It appears in the menu straight away. Help, Credits or anything else: the same again.

::: full

```python
import gradio as gr

def greet(name, excited):
    message = "Hello, " + name
    if excited:
        return message + "!!!"
    return message + "."

app = gr.Interface(
    fn=greet,
    inputs=[gr.Textbox(label="Name"), gr.Checkbox(label="Excited?")],
    outputs=gr.Textbox(label="Greeting"),
)

with gr.Blocks(title="Greeter") as site:
    gr.Markdown("""
# Greeter
**Type a name, get a greeting.** Made by Sam for Digital Technologies.

Choose **App** at the top to try it.
""")

with site.route("App"):
    app.render()

with site.route("About"):
    gr.Markdown("I made this to learn how apps turn a function into buttons and boxes.")

site.launch()
```

:::

:::

## Make it yours

- **A screenshot or logo:** put the picture file beside your program and add `gr.Image("screenshot.png", show_label=False)` where you want it.
- **Side by side:** `with gr.Row():` puts the things indented under it next to each other, such as a picture beside your welcome words.
- **A different look:** Gradio has ready-made themes. Try `site.launch(theme=gr.themes.Soft())`, or `Glass()` or `Monochrome()`.
- **Your own words for the tab or page names:** change the text in `gr.Tab("...")` or `site.route("...")`.

## When it goes wrong

- **`IndentationError`, or things on the wrong page.** Everything that belongs inside a `with` is indented one step further than that `with` line. Line them up carefully.
- **Your app doesn't appear.** Check for `app.render()` where you want it, and that `app` no longer has `.launch()` on the end.
- **Two apps open, or an error about launching.** Only `site.launch()` should be in your program.
- **A jump link does nothing.** Check `header_links=True` is on the `gr.Markdown` with the heading, and the link is `#h-` plus the heading in lower case with dashes: `## Try it` is `#h-try-it`.
- **An error about `theme`.** Older versions of Gradio put it in `gr.Blocks(theme=...)` instead of `launch`. Try it there.
- **An error about `route`.** Separate pages need a recent Gradio: run `pip install --upgrade gradio`, or use tabs instead.
- **Picture not found.** The picture file must be in the same folder as your program, with exactly the same name.

::: teacher

**Which layout to suggest.** One page with sections suits most students: it's Markdown plus one new idea (`render`). Tabs suit apps with a few distinct parts. Separate pages suit students who want it to feel like a website, or who will move to HTML later (the idea of pages with their own addresses carries over). Send the link with `?for=sections`, `?for=tabs` or `?for=pages`; students can switch on the page.

**What this is.** A recipe for a project, not a lesson: nothing is checked or recorded. The steps come first and the full code is folded under "Show the full code". All three versions keep the student's `gr.Interface` unchanged and drop it in with `.render()`, so a working app stays working.

**Common sticking points.**
- Indentation inside `with` blocks, especially the Try it button's `.click` line in the tabs version (inside `gr.Blocks`, outside the tabs).
- Leaving `.launch()` on the old app as well as the new site.
- Section links in the one-page version: Gradio prefixes heading addresses with `h-`.
- Gradio versions: written and tested against Gradio 6 on 3 Nov 2026. Themes moved from `gr.Blocks(...)` to `launch(...)` in Gradio 6, and separate pages need a recent version, so a school laptop with an older Gradio may need `pip install --upgrade gradio`. The in-browser stand-in in the Gradio course doesn't run these: they run on the student's computer (`pip install gradio`, then `python app.py`).

**Markdown.** This is the one new thing for students who haven't met HTML, and it's enough for a landing page. The site has no Markdown lesson yet; the short cheat sheet above covers what's needed.

:::
