---
title: Add a starting page (and more pages) to your Gradio app
summary: "Give your app a welcome page, plus About or Help pages if you want them, without writing any HTML."
courses: [code/gradio]
keywords: "landing page home page welcome tabs navigation menu about help markdown blocks"
switch: "I want"
contexts:
  - { id: sections, label: "One page with sections" }
  - { id: tabs, label: "Tabs" }
  - { id: pages, label: "Separate pages" }
---
Your app works. Now you want it to feel finished: a welcome that says what it is, how to use it, and who made it, and maybe an About or Help page too. You can do all of it without any HTML, and without changing the app you've already built.

You'll need an app made with `gr.Interface` ([Your first app](../../code/gradio/intro/)). The examples use a small greeting app; swap in yours.

## Just a title and some text?

If all you want is a heading and a few words, you might not need a starting page at all. `gr.Interface` already has spots for them:

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

Run it: `title` sits at the top, `description` just under it, and `article` below the app. If that's enough, you're done. Want pictures, more pages or more room? Keep going.

## Write the words in Markdown

Gradio pages take **Markdown**: ordinary text with a few marks for headings, bold and lists. It's much quicker to learn than HTML.

```text
# Big heading
## Smaller heading
**bold** and *italic*
- a list item
1. a numbered step
[a link](https://example.com)
```

**Line breaks matter.** Each heading needs its own line, and a blank line starts a new paragraph. Inside Python there are two ways to get them. Three quote marks let your text run over several lines, just as it'll look:

```python
description="""
# Welcome
## How it works
Type a name and get a greeting.

This is a new paragraph.
"""
```

Or keep it on one line and write `\n` wherever you want a new line:

```python
description="# Welcome\n## How it works\nType a name and get a greeting."
```

Two things that catch people out:

- `# Welcome ## How it works` on one line is one heading, not two. A heading only counts at the start of a line.
- A single line break inside ordinary text disappears: the lines join into one paragraph. Leave a blank line between paragraphs, or use `gr.Markdown("...", line_breaks=True)` to keep every line break.

Stuck on what to write? A good starting page says **what your app does**, **how to use it**, and **who made it**. A screenshot of it working helps too.

## Choose your layout

There are three ways to arrange it. Pick one at the top of this page:

- **One page with sections:** everything on one long page, with links at the top that jump down to each part. The simplest.
- **Tabs:** a row of tabs (Welcome, App, About), showing one part at a time.
- **Separate pages:** each page gets its own address, and Gradio adds a menu at the top. The closest to a real website.

All three use `gr.Blocks`, which lets you put Markdown, pictures and your app together on one page. `with` lines say what goes inside what, so **indentation matters**, just like with `if` and `for`.

## Get your app ready

Take the `.launch()` off the end of your app and give it a name instead, like `app`. You'll launch the whole site later, with your app inside it.

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

::: for sections

## Add your welcome

`gr.Blocks` holds the whole page. Inside it, `gr.Markdown` shows your words, and `app.render()` drops your app in wherever you write it.

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

Run it: you should see your welcome at the top, then "Try it", then your app working just as before.

## Add About and Help

Another section is just more Markdown. Put this inside the `with` block, after `app.render()`:

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

Run it again: About and Help now sit under your app.

## Add links that jump down

On a long page, links at the top save scrolling. First add `header_links=True` to each `gr.Markdown` that has headings. That gives every heading its own address: `h-`, then the heading in lower case with dashes for spaces. So `## Try it` becomes `#h-try-it`, and you can link to it:

```python
    gr.Markdown("""
# Greeter
**Type a name, get a greeting.** Made by Sam for Digital Technologies.

[Try it](#h-try-it) · [About](#h-about) · [Help](#h-help)
""", header_links=True)
```

Run it and click **Help**: the page should jump straight down to it. Add a section later? Give it a heading, then add its link to that top line.

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

## Make a Welcome tab and an App tab

`gr.Blocks` holds the whole page, and `gr.Tabs` holds the row of tabs. Each `gr.Tab` is one tab, and whatever is indented under it goes inside. `app.render()` drops your app into its tab.

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

Run it: you should see two tabs, Welcome and App. Click **App** and your app is there, working as before. The tabs are your navigation, and Gradio draws them for you.

## Add a "Try it" button

A button on the Welcome tab that jumps straight to your app is a nice touch. It takes two lines in two places. The button goes inside the Welcome tab, under your Markdown:

```python
            start = gr.Button("Try it")
```

And this line goes at the very end, still inside `gr.Blocks` but not inside the tabs (four spaces in):

```python
    start.click(lambda: gr.Tabs(selected="app"), outputs=tabs)
```

It says: when `start` is clicked, switch `tabs` to the tab whose `id` is `"app"`. You can copy it as it is; just change `"app"` if your tab has a different `id`. Run it and press **Try it**: you should land on the App tab.

## Add an About tab

Another tab is another `with gr.Tab(...)`, lined up with the others:

```python
        with gr.Tab("About", id="about"):
            gr.Markdown("I made this to learn how apps turn a function into buttons and boxes.")
```

Run it: a third tab appears. Help, Credits or anything else works the same way.

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

## Make the starting page

Whatever you put inside `gr.Blocks` becomes your first page: the one people see when they open your app.

```python
with gr.Blocks(title="Greeter") as site:
    gr.Markdown("""
# Greeter
**Type a name, get a greeting.** Made by Sam for Digital Technologies.

Choose **App** at the top to try it.
""")
```

## Put your app on its own page

`site.route("App")` makes a new page called App, with its own address ending in `/app`. `app.render()` puts your app on it. Then launch the whole site:

```python
with site.route("App"):
    app.render()

site.launch()
```

Run it: you should see your welcome, with a small menu in the top right corner, **Home** and **App**. Gradio made that menu for you. Click **App** and there's your app.

## Add an About page

Another page is another `with site.route(...)`, written before `site.launch()`:

```python
with site.route("About"):
    gr.Markdown("I made this to learn how apps turn a function into buttons and boxes.")
```

Run it: About appears in the menu straight away. Help, Credits or anything else works the same way.

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

- **Want a screenshot or logo on your welcome?** Put the picture file next to your program and add `gr.Image("screenshot.png", show_label=False)` where you want it to appear.
- **Want a picture beside your words?** `with gr.Row():` puts whatever is indented under it side by side.
- **Want a different look?** Gradio has ready-made themes. Try `site.launch(theme=gr.themes.Soft())`, or swap `Soft` for `Glass` or `Monochrome`.
- **Want different names on your tabs or pages?** Change the words in `gr.Tab("...")` or `site.route("...")`.

## When it goes wrong

- **`IndentationError`, or something shows up on the wrong tab or page.** Everything that belongs inside a `with` must be indented one step further than its `with` line. Line them up carefully.
- **Your app is missing.** Check `app.render()` is where you want the app, and that `app = gr.Interface(...)` doesn't still have `.launch()` on the end.
- **Your app opens on its own, without your welcome.** There's an old `.launch()` left over. Only `site.launch()` should be in your program.
- **A jump link does nothing.** Check that the `gr.Markdown` with that heading has `header_links=True`, and that the link is `#h-` plus the heading in lower case with dashes: `## Try it` is `#h-try-it`.
- **`TypeError: ... unexpected keyword argument 'theme'`.** Your Gradio is older than version 6. Move the theme into `gr.Blocks(theme=...)` instead, or update Gradio with `pip install --upgrade gradio`.
- **An error saying `Blocks` has no attribute `route`.** Separate pages need a recent Gradio. Run `pip install --upgrade gradio`, or use tabs instead.
- **A blank space where your picture should be.** The picture file must be in the same folder as your program, with exactly the same name, including `.png` and any capitals.

::: teacher

**Which layout to suggest.** One page with sections suits most students: it's Markdown plus one new idea (`render`). Tabs suit apps with a few distinct parts. Separate pages suit students who want it to feel like a website, or who will move to HTML later (the idea of pages with their own addresses carries over). Send the link with `?for=sections`, `?for=tabs` or `?for=pages`; students can switch on the page.

**What this is.** A recipe for a project, not a lesson: nothing is checked or recorded. The steps come first and the full code is folded under "Show the full code". All three versions keep the student's `gr.Interface` unchanged and drop it in with `.render()`, so a working app stays working.

**Common sticking points.**
- Indentation inside `with` blocks, especially the Try it button's `.click` line in the tabs version (inside `gr.Blocks`, outside the tabs).
- Leaving `.launch()` on the old app as well as the new site.
- Section links in the one-page version: Gradio prefixes heading addresses with `h-`.
- Gradio versions: written and tested against Gradio 6 on 3 Nov 2026. Themes moved from `gr.Blocks(...)` to `launch(...)` in Gradio 6 (Gradio 6 warns if it's left in `gr.Blocks`; older versions reject it in `launch`), and separate pages need a recent version, so a school laptop with an older Gradio may need `pip install --upgrade gradio`. The in-browser stand-in in the Gradio course doesn't run these: they run on the student's computer (`pip install gradio`, then `python app.py`).

**Markdown.** This is the one new thing for students who haven't met HTML, and it's enough for a landing page. The site has no Markdown lesson yet; the short cheat sheet above covers what's needed.

:::
