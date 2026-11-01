---
order: 6
unit: apis
optional: true
introduces: [default-arg]
title: The same API in FastAPI
summary: "Build the club API again in FastAPI, where each input's type is checked and converted for you, and wrong input gets a clear error reply."
language: python
hook: "FastAPI is a newer Python library for APIs, used by companies big and small. Its trick: the types you write are checked for you."
---
In Flask, a number in the address arrives as text, and you check and convert it yourself. **FastAPI** reads the **type** you give each input (`age: int`) and does it for you: it turns `"12"` into 12, and replies with an error explaining the problem when someone sends `twelve`. Routes are written `@api.get("/address")`, and `uvicorn.run(api)` starts the app (here, in the App tab).

## Predict

```step
stage: predict
code: api.py#predict
check:
  type: predict
  q: "Someone visits /next-year?age=twelve. What do they get?"
  options: ["An error reply (422) saying age should be a whole number", "{\"next\": \"twelve1\"}", "A crash: 500 Internal Server Error", "{\"next\": 13}"]
  actual: "A 422 error reply. age: int tells FastAPI to check and convert age; \"twelve\" is not a whole number, so FastAPI replies with what is wrong, and next_year never runs."
```

`age: int` says what type `age` must be. What happens to a value that is not a whole number?

## Run

```step
stage: run
code: api.py#run
try: { playground: python, starter: "api.py#run", files: [members.csv], height: 540 }
check: { type: reflect, text: "I tried /members, /members?name=ad and /members/Players, and compared them with the Flask API." }
unlocks: [a-fastapi-route]
```

Run it (FastAPI takes a moment to load the first time) and try the addresses on the home page. In `members(name: str = "")`, a parameter that is not in the route's address comes from the **query string**, and `= ""` makes it optional. In `/members/{group}`, curly brackets mark the part that changes (Flask uses angle brackets).

## Investigate

```step
stage: investigate
code: api.py#run
insight: "In FastAPI the function's parameters and their types are the API: FastAPI reads them from the address, converts them, and rejects bad input before your code runs."
tasks:
  - check:
      type: question
      q: "Where does name come from in members(name: str = \"\")?"
      options: ["The query string, such as ?name=ad", "The route's address, /members", "A form box called name", "A column in members.csv"]
      answer: 0
      feedback: [null, "Only parameters written in the route's pattern, like {group}, come from the address itself.", "There is no form here. FastAPI reads name from the address's query string.", "The CSV holds the members; name is what the visitor asked for."]
      explain: "If there is no query string, name is \"\", its default. Parameters that are not in the address pattern are read from the query string. The default makes it optional."
  - check:
      type: question
      q: "Compared with Flask's request.args.get(\"name\", \"\"), what did FastAPI save you?"
      options: ["Reading the query string yourself", "Writing the loop over members", "Opening the members file", "Nothing: it is the same code"]
      answer: 0
      feedback: [null, "The loop is still there, written by you.", "Your code still opens the file.", "Look at how name arrives: you no longer call request.args.get."]
      explain: "The parameter is filled in from the query string. FastAPI matches parameters with the address and query string by name, and converts them to their types. The rest of the code is the same Python."
  - check:
      type: bug
      code: api.py#bug
      text: "/next-year?age=12 gives 500 Internal Server Error instead of {\"next\": 13}. Click the line that is wrong."
      answer: 8
      fault: runtime
      misconception: query-text
      explain: "Without a type, age is the text \"12\", and \"12\" + 1 is an error. age: int makes FastAPI convert it (and reject anything that is not a whole number)."
```

### From the query string

Where an input comes from.

### What FastAPI did for you

Compared with Flask.

### Spot the bug

A number that arrived as text.

## Modify

```step
stage: modify
insight: "A typed parameter with a default is an optional, checked input; a new question is a new route."
try: { playground: python, starter: "api.py#results", files: [results.csv], height: 540 }
tasks:
  - hint: "def results(min_wins: int = 0):, and only add rows whose wins are at least min_wins. Try /results?min_wins=3, then /results?min_wins=lots."
    check: { type: code, text: "Let /results?min_wins=3 send only players with at least 3 wins (checked as a whole number).", rules: { contains: ["min_wins: int"] } }
  - hint: "@api.get(\"/leader\"), with the biggest-so-far loop from Data detective or Lesson 5."
    check: { type: code, text: "Add /leader, which sends the player with the most wins.", rules: { contains: ["@api.get(\"/leader\")"] } }
```

### At least some wins

Add an optional `min_wins` input that FastAPI checks as a whole number. Try `/results?min_wins=lots` too.

### The leader

Add `/leader`, which sends the player with the most wins.

## Make: an API of your own

```step
stage: make
insight: "Goals only: an API whose inputs are typed, so FastAPI checks them for you."
try: { playground: python, starter: "api.py#make", height: 540 }
check: { type: code, text: "Make an API of your own with at least one int or float input, and test it with a wrong value.", rules: { contains: ["@api.get("], defs: 1 } }
```

Make a small API with at least one `int` or `float` input: minutes to seconds, a times table, a dice roller with a number of sides. Test it with a good value and a wrong one.

## Where this leads

```step
stage: info
check:
  type: question
  q: "Which would you choose for a website with pages and forms, and which for an API that apps use?"
  options: ["Flask for pages; FastAPI for an API", "Always FastAPI, for everything", "Always Flask, for everything", "Neither: use plain HTML"]
  answer: 0
  feedback: [null, "FastAPI can make pages, but Flask's templates make pages and forms simpler.", "Flask can make an API, but FastAPI checks inputs and writes the documentation for you.", "Plain HTML cannot read a form or answer an app: it needs a program behind it."]
  explain: "Both can do either. Flask is simple and good at pages and templates. FastAPI shines at APIs: checked inputs and automatic documentation. Both are real tools used every day."
```

On a computer, FastAPI also makes a documentation page at `/docs` from your types, where you can try every route (it needs a computer: the playground cannot show it). The checks come from a library called **Pydantic**, which can also check whole JSON bodies sent to an API.
