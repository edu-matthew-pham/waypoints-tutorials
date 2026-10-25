# Code: real-world examples register (25 Oct 2026)

Every place a Code lesson uses a real situation, in one table, so new examples (project briefs first) fill gaps instead of repeating. Not a maths-style library: in Code the thing a student makes is already the point, so lessons don't need a vetted "why" for each idea. What's missing is joining up the examples that already exist. Summary and recommendations are in `roadmap/code.md` › Proposed; this file is the evidence.

Real situations turn up in five places, each written on its own: the `hook:` (every lesson), the Make task's context, a "Change a …" Modify step after Make (CLAUDE.md: "Real-world content is a small complete example students Modify"), "Where this leads" (extensions: how professionals use the tool), and project briefs.

## Findings

**Coverage is uneven by pathway.**
- MakeCode does it everywhere: almost every micro:bit, talk and play, Arcade and Arcade advanced lesson ends with a "Change a …" step (fridge alarm, desk lamp, lunch menu, team picker, doorbell, egg timer, lift, conveyor belt, sheepdog).
- Python has eight, and six are buildings or streets (room plan, tiled floor, house plan, floor plan, extend a street, vary a street; the street is also lesson 6 and a project). The lessons whose ideas most need a situation have none: If and else, Every other, Lists and For each make abstract spirals and coloured sides, while their micro:bit twins have a fridge alarm, a desk lamp, a lunch menu and a team picker.
- Console's Make tasks carry the situations well (ticket machine, receipt, password door, points counter, till tests) and need no Modify step.
- Web had no "Change a …" steps at all (25 Oct: four added: Tables bus timetable, Lists recipe, Boxes price tag, Inputs bill splitter; more could follow in Forms, Flexbox and Images). Its Make tasks lean on one context: "club" appears 175 times and "concert"/"event" 35 times across HTML and CSS. The club page is the deliberate through-line (good: one situation the course returns to), but most other Make tasks are a club or event too (notices, sign-up forms, galleries, heroes, cards), so the course has one situation, not one through-line plus variety.
- DOM, Vue and p5 Make tasks are varied (tip calculator, shopping list, pancakes, sleep chart, name badge).
- Extensions (Data, Deeper, Objects, Gradio, ML, Flask, Games) use "Where this leads" instead, which is the right kind of real for them: how the same code is used outside school.

**Repeats.**
- "Change a firework show" in both Arcade Foundations (projectiles) and Arcade advanced (every one of a kind).
- "Change a fishing game" in two consecutive Arcade advanced lessons (levels, a list per level): deliberate continuation, fine.
- Ticket machine in two consecutive Console lessons (text into numbers, check first): deliberate, fine.
- My draft Bootstrap brief "A landing page for an event" would add one more event page.

**Hooks follow one template.** At least 59 of 206 open "Every X, Y and Z …" or "X, Y and Z all do the same thing"; read in a row they sound generated. A voice issue as much as a cohesion one.

**The pathways teach the same ideas with no shared thread.** Scores and totals appear in every pathway (micro:bit scoreboard, Console points counter and till, DOM clicker, Vue pancakes, Python Count the clicks) and alarms and thresholds in two (fridge alarm, desk lamp; Console password door), but no lesson names the link, so a student moving between pathways never hears "this is the scoreboard you built on the micro:bit".

**Domains.** Games and play (all of Arcade, most projects), school life (clubs, events, notices, canteen, class vote, quiet signal), shops and ordering (tickets, café, till, bake sale), gadgets at home (alarms, lamps, doorbell, timers). Thin: sport and health tracking (one fitness log, one sleep chart), the environment and science data (rainfall, weather fetch, plant monitor), money beyond a till (budgets, saving), transport and maps, community and accessibility outside Your site.

## Register

One row per lesson, in pathway order. "Make" is the first sentence of the Make task; "Real-world Modify" lists the steps after Make (setup and hardware steps left out); "Project" is any brief that comes after that lesson. Hooks are not listed (every lesson has one).

| Pathway | Course | Lesson | Introduces | Make | Real-world Modify | Project |
|---|---|---|---|---|---|---|
| Python | Python Foundations with Turtle | Drawing with a turtle |  | Draw a 4 like the one on a calculator: |  |  |
| Python | Python Foundations with Turtle | Repeat with a loop | repeat | A loop works for any pattern, not only shapes. |  |  |
| Python | Python Foundations with Turtle | Name a value | variable, arithmetic | Make your own shape generator. | Resize a room plan |  |
| Python | Python Foundations with Turtle | Use the counter | loop-index |  |  |  |
| Python | Python Foundations with Turtle | A value that grows | variable-update | Make the spiral grow and get thicker on every pass. |  |  |
| Python | Python Foundations with Turtle | A street of houses |  | Add something new after the houses: | Lay a tiled floor |  |
| Python | Python Foundations with Turtle | If and else | if, else, compare | The spiral grows by 10 every pass. |  |  |
| Python | Python Foundations with Turtle | Every other | remainder, elif |  |  | Pattern maker |
| Python | Python Foundations with Turtle | Lists | list, list-index, length |  |  |  |
| Python | Python Foundations with Turtle | For each item | for-of | Draw a bar chart: |  |  |
| Python | Python Foundations with Turtle | Challenge: a tile |  | Make a tile of your own. |  |  |
| Python | Python functions and events | Read a program |  |  |  |  |
| Python | Python functions and events | Functions | function | Write a function that draws any shape you like (a rectangle, a hexagon, a star), then ca… | Extend the house plan |  |
| Python | Python functions and events | Functions with parameters | param | Write def pattern(sides, copies): | Rearrange a floor plan | A street of your own |
| Python | Python functions and events | Functions that give answers | return-value | This time there is no starter. | Vary a street of houses |  |
| Python | Python functions and events | Functions that decide |  | Draw a bar for each score, as tall as the score, coloured by a function you write: |  | Chart your data |
| Python | Python functions and events | Modules | import-from, import-star | Create a module of your own with at least three related functions. | Extend a street |  |
| Python | Python functions and events | Events | callback, global | Steer the turtle with the keys: | Count the clicks | Click-and-key art |
| Python | Python functions and events | Build a button | and-or | Build a counter with two buttons: | Pick a background colour |  |
| Python | Python functions and events | Catch the turtle | bool-value, random |  |  | Your own game |
| Python | Python functions and events | Power-ups |  | Invent a power-up of your own. |  |  |
| Python | Python functions and events | Optional: Control panel |  | Add a row of controls you design. |  |  |
| Python | Python functions and events | Optional: Game levels |  | Add a rule that makes the game your own. |  |  |
| Python | Console bridge: text in, text out | Print text | print, string, text-join | Make a four-line sign for your classroom door. |  |  |
| Python | Console bridge: text in, text out | Ask and store | input | Write a program that asks two questions (for example a name and a favourite animal) and … |  |  |
| Python | Console bridge: text in, text out | Numbers into text | to-text | A café sells cups of hot chocolate. |  |  |
| Python | Console bridge: text in, text out | Text into numbers |  | Tickets to the school play cost $12 each. |  |  |
| Python | Console bridge: text in, text out | Check first | dotted-call | Tickets to the school play cost $12 each. |  |  |
| Python | Console bridge: text in, text out | Repeat until | while | Write a password door. |  |  |
| Python | Console bridge: text in, text out | Running total |  | Make a points counter. |  |  |
| Python | Console bridge: text in, text out | Guess the number |  | Make a dice game with the same parts. |  |  |
| Python | Console bridge: text in, text out | A menu that keeps showing | break | Make your own menu app: |  |  |
| Python | Console bridge: text in, text out | Test with a table |  | Here is a till function. |  |  |
| Python | Console bridge: text in, text out | Challenge: a console app |  | Make a console app of your own. |  |  |
| Python | Objects with turtles | Many turtles | object | Add a rock: |  |  |
| Python | Objects with turtles | Lists of stars | list-change | Make the first star a bad star: |  |  |
| Python | Objects with turtles | One dictionary per star | dict | Make the first star a bad star again, this time with a "bad" key in each dictionary (Tru… |  |  |
| Python | Objects with turtles | A Star class | class, attribute | Add a Rock class: |  |  |
| Python | Objects with turtles | Stars that move themselves | method | Add a Rock class with the same three methods as Star (move, restart, touches). |  |  |
| Python | Data detective | Rows of data | csv, dict | Ask which genre to look for, list each of its songs with its year, and finish with how m… |  |  |
| Python | Data detective | Totals and the biggest |  | Ask for a genre, then print how many songs it has, their average length and its shortest… |  |  |
| Python | Data detective | A bar chart in text |  | Add up the minutes of each genre, then draw a bar for each genre with one # for every 5 … |  |  |
| Python | Data detective | Clean it, test it | try, assert, none | Draw a bar chart of the class's favourite genres, as in Lesson 3. |  |  |
| Python | Data detective | A data dashboard | pandas |  |  |  |
| Python | Data detective | Ask an API | json | Compare the week ahead in two places of your choice: |  |  |
| Python | Deeper Python in the console | Working with text |  | Ask for someone's full name. |  |  |
| Python | Deeper Python in the console | A bag that grows | list-change | Write a shopping list app. |  |  |
| Python | Deeper Python in the console | A map of rooms | dict | Ask for a sentence and print how many times each word appears, such as the: |  |  |
| Python | Deeper Python in the console | When things go wrong | try | Ask for two whole numbers and print the first divided by the second. |  |  |
| Python | Deeper Python in the console | A text adventure | not |  |  |  |
| Python | Deeper Python in the console | Save the game | file, json |  |  |  |
| Python | Apps with Gradio | Your first app |  | Build a small tool of your own. |  |  |
| Python | Apps with Gradio | More inputs, more outputs | tuple-assign | Make a calculator of your own with at least three inputs of different kinds and two outp… |  |  |
| Python | Apps with Gradio | A quiz app | dict, list-change |  |  |  |
| Python | Apps with Gradio | A class for questions | class, method, attribute, object | Rebuild your quiz from last lesson with Question objects, and add something of your own … |  |  |
| Python | Machine learning with Gradio | Rules by hand | list-change | Add bill_depth_mm to each penguin when it is read, write rules that use it (Gentoos have… |  |  |
| Python | Machine learning with Gradio | The nearest penguin | power | Guess the species of each of the five mystery penguins, and print each guess with its di… |  |  |
| Python | Machine learning with Gradio | A fair test |  | Bring back the rules from Lesson 1 as guess(bill, flipper) and test them on the same tes… |  |  |
| Python | Machine learning with Gradio | The same model in scikit-learn |  | Which measurements make the best model? |  |  |
| Python | Machine learning with Gradio | A model behind an app |  | Build an app around a model of your own: |  |  |
| Python | Machine learning with Gradio | What models get wrong |  | Write a model card for your app from the last lesson (in a comment at the top of the pro… |  |  |
| Python | Games with microStudio | A game loop |  | Start from this empty game in microStudio and make at least two things move in different… |  |  |
| Python | Games with microStudio | Keys and movement |  | Make a player you can move all four ways, then add one thing of your own: |  |  |
| Python | Games with microStudio | Stars as objects |  | Add a class of your own, with its own __init__, move() and draw(): |  |  |
| Python | Games with microStudio | Catch and score |  | Add a power-up: |  |  |
| Python | Games with microStudio | Make it yours |  | Make a game of your own, starting from your catching game or from an empty project: |  |  |
| Python | Web apps with Flask | A page from Python | decorator | Make a small site for a club, a team or a hobby: |  |  |
| Python | Web apps with Flask | Pages from data | dict | Add a /leaders page: |  |  |
| Python | Web apps with Flask | Join the club | list-change | Add a form under the results table: |  |  |
| Python | Web apps with Flask | Keep the sign-ups | file, csv | The Add a win form is there, but win() does nothing yet. |  |  |
| Python | Web apps with Flask | An API for the club |  | Make an API for results.csv: |  |  |
| Python | Web apps with Flask | The same API in FastAPI | default-arg | Make a small API with at least one int or float input: |  |  |
| Web | Structure and style a page | Tags label text | heading, paragraph | Write a notice for an event at your school (a concert, a fair, a match): |  |  |
| Web | Structure and style a page | Tags inside tags | emphasis | Finish this school trip notice. |  |  |
| Web | Structure and style a page | Rules and selectors | style-block, css-rule, text-colour, font | The <style> block is ready at the top of this concert notice, with no rules. |  |  |
| Web | Structure and style a page | Lists | list | Make a page with your top 5 (books, games, places, songs): |  |  |
| Web | Structure and style a page | Attributes and links | attribute, link | Here is a top 5 list. |  |  |
| Web | Structure and style a page | Pictures | image | Make a page for a school club: |  | A page about something you love |
| Web | Structure and style a page | Pick some with a class | class, class-selector | This is a results page. |  |  |
| Web | Structure and style a page | Fix the newsletter |  |  |  |  |
| Web | Structure and style a page | Tables | table | Make a table of your own: |  |  |
| Web | Structure and style a page | Name the parts of a page | semantic | This club homepage is all plain text. |  |  |
| Web | Structure and style a page | A place on the page | id, link-in-page | This page has three parts but no menu. |  |  |
| Web | Structure and style a page | Forms | form, button | Make a sign-up form for a school club or event: |  | An order form |
| Web | Structure and style a page | Challenge: a club page |  | Turn the page into one for a club or event you care about: |  |  |
| Web | Layout and components | Which rule wins |  | Restyle the club notice. |  |  |
| Web | Layout and components | Style the links in the menu | descendant-selector | Style this club page: |  |  |
| Web | Layout and components | Block and inline boxes | div-span, display | Highlight the most important phrase in this concert notice. |  |  |
| Web | Layout and components | Boxes | box | Make a card for a house or a club: |  | A recipe card |
| Web | Layout and components | Turn the newsletter into cards |  |  |  |  |
| Web | Layout and components | A row with Flexbox | flex | Make the top of the club page: |  |  |
| Web | Layout and components | Space out a row | flex-options | The club's header has a name and a menu, one above the other. |  |  |
| Web | Layout and components | Fit any width |  | Make a gallery for a school event: |  |  |
| Web | Layout and components | A hero and a row of cards |  | Make a hero and three cards for a club or event you know: |  | An event page |
| Web | Layout and components | Challenge: lay out the club page |  | Turn the page into one for a club or event you care about: |  |  |
| Web | Layout and components | Page layout with Grid | grid, css-units | Make a page for an event with two columns: | Lay out the photo gallery |  |
| Web | Layout and components | Make it react |  | This sign-up box is not connected to anything. |  |  |
| Web | Pages with Bootstrap | Style by class names | bootstrap | A concert, a bake sale, a match: |  |  |
| Web | Pages with Bootstrap | Navbar, cards and a grid | bs-component, bs-grid | Finish the club page: |  |  |
| Web | Pages with Bootstrap | Make Bootstrap yours |  | Make the page look like your club: |  |  |
| Web | Drawing and animation with p5.js | Shapes on a canvas | setup | Draw a picture of your own: |  |  |
| Web | Drawing and animation with p5.js | Making it move | draw-loop, variable, variable-update, arithmetic | Make at least two things move in different ways: |  |  |
| Web | Drawing and animation with p5.js | Deciding what to do | if, else, compare, and-or | Make a mini bouncing game. |  |  |
| Web | Drawing and animation with p5.js | Lists and loops | array, array-index, length, for-count, push, random | Draw a chart of your own from a list of numbers: |  |  |
| Web | Drawing and animation with p5.js | Objects and stars | object, property, for-of | Add a second kind of thing with its own list and its own loop: |  |  |
| Web | Drawing and animation with p5.js | Functions of your own | function, param, return | Write a function that draws something of your own (a tree, a house, a robot, a face) wit… |  |  |
| Web | Drawing and animation with p5.js | Final challenge: Catch the circle | event, text-join | Add a power-up: |  |  |
| Web | Drawing and animation with p5.js | Moving art | math | Make a moving pattern of your own: |  |  |
| Web | The DOM and the browser console | Find and change | script, js-query, text-content, style-prop, console-log | Find three elements and change something about each: |  |  |
| Web | The DOM and the browser console | Click events | js-event | Start from the two buttons and make a page where each button changes something different: |  |  |
| Web | The DOM and the browser console | Classes and themes | class-list | Write two or more classes of your own in the CSS (an ocean theme, spaced-out letters, a … |  |  |
| Web | The DOM and the browser console | Inputs | input-value | Make a small tool that reads a number from a box and shows an answer: |  |  |
| Web | The DOM and the browser console | Building a list | create-element, append-element | Make a list of your own that grows as someone types: |  |  |
| Web | The DOM and the browser console | A page that keeps score |  | Make a small game: |  |  |
| Web | The DOM and the browser console | Final challenge: a quiz page |  | Make your own quiz on a topic you know well, with at least five questions, a score, feed… |  |  |
| Web | The DOM and the browser console | The real browser console |  | Use console.log to find four facts about the page: |  |  |
| Web | The DOM and the browser console | Data from the web: fetch | fetch, async-await, json-data, try-catch | Find the hottest day in the data (a loop that remembers the best so far, and an if that … |  |  |
| Web | The DOM and the browser console | Saving between visits | local-storage | The clicker keeps a best score, but it is lost on every visit. |  |  |
| Web | Apps with Vue | Data on the page | vue-app, vue-ref, vue-text | Lives and level, likes and dislikes, goals for two teams: |  |  |
| Web | Apps with Vue | Lists and choices: v-for and v-if | vue-for, vue-if | Show the songs as a list with v-for, a message with v-if when there are none, and button… |  |  |
| Web | Apps with Vue | Events and inputs | vue-on, vue-model | Make a name badge: |  |  |
| Web | Apps with Vue | Values worked out from data: computed | vue-computed | One pancake needs 25 g of flour and 40 ml of milk. |  |  |
| Web | Apps with Vue | Components and props | vue-component, vue-props | Make a pet-card component with two props (name and kind) and a template of your own desi… |  |  |
| Web | Apps with Vue | Final challenge: a to-do app |  | Add one feature of your own. |  |  |
| Web | Apps with Vue | Same app, three frameworks | preact, svelte | Add a Remove one button to all three apps. |  |  |
| Web | Your site, for real | Pages for everyone |  | Paste in a page you have made, from any course. |  |  |
| Web | Your site, for real | Put it online |  | Publish the page you checked in Pages for everyone: |  |  |
| Web | Web apps with Flask | A page from Python | decorator | Make a small site for a club, a team or a hobby: |  |  |
| Web | Web apps with Flask | Pages from data | dict | Add a /leaders page: |  |  |
| Web | Web apps with Flask | Join the club | list-change | Add a form under the results table: |  |  |
| Web | Web apps with Flask | Keep the sign-ups | file, csv | The Add a win form is there, but win() does nothing yet. |  |  |
| Web | Web apps with Flask | An API for the club |  | Make an API for results.csv: |  |  |
| Web | Web apps with Flask | The same API in FastAPI | default-arg | Make a small API with at least one int or float input: |  |  |
| MakeCode | micro:bit Foundations | Pictures in order |  | Make a name badge. | Change a door sign |  |
| MakeCode | micro:bit Foundations | Again and again |  | Make an animation of three or more pictures that plays forever. | Run a shop sign |  |
| MakeCode | micro:bit Foundations | Wait for a press |  | Build a signal board for a bike rider: | Change a bike indicator |  |
| MakeCode | micro:bit Foundations | Count with a variable | variable, variable-update | Build a step counter. | Change a scoreboard |  |
| MakeCode | micro:bit Foundations | Sensors are numbers |  | Make a thermometer. | Change a light meter |  |
| MakeCode | micro:bit Foundations | If | if | Make a weather warning. | Change a fridge alarm |  |
| MakeCode | micro:bit Foundations | If and else | else | Make a bike light with one if … else: | Change a desk lamp |  |
| MakeCode | micro:bit Foundations | The first true question wins |  | Make a comfort meter for a classroom, in one if block with three parts: | Change a spirit level | Plant monitor |
| MakeCode | micro:bit Foundations | Lists | list, list-index | Make a mood chooser. | Change a lunch menu |  |
| MakeCode | micro:bit Foundations | Pick from a list | random, length | Make rock, paper, scissors. | Change a team picker | The answer machine |
| MakeCode | micro:bit Foundations | Pocket pet |  | Give your pet a life of its own. |  |  |
| MakeCode | micro:bit: talk and play | Name a job | function | Make a stick-figure dance. | Change an alarm |  |
| MakeCode | micro:bit: talk and play | Send and receive | radio, radio-number | Make a doorbell. | Change a quiet signal |  |
| MakeCode | micro:bit: talk and play | Which message? | radio-string | Make bike signals by radio: | Change a doorbell |  |
| MakeCode | micro:bit: talk and play | A shared code |  | Make a mood check-in for the start of class. | Change a quiz buzzer |  |
| MakeCode | micro:bit: talk and play | Time between | running-time | Press B and a heart appears after a random wait. | Change an egg timer |  |
| MakeCode | micro:bit: talk and play | True or false | bool-value | Fix the cheat. | Change a class vote |  |
| MakeCode | micro:bit: talk and play | Reaction timer |  |  |  |  |
| MakeCode | micro:bit: talk and play | Radio duel |  |  |  | Quiz buzzer; Your own micro:bit game |
| MakeCode | micro:bit: talk and play | Fake-outs and levels |  | Change the rules to make it your game. |  |  |
| MakeCode | micro:bit: talk and play | Tournament |  |  |  |  |
| MakeCode | Arcade Foundations | Sprites on the screen | variable | Make a scene at the pond (or anywhere you like): | Change a start screen |  |
| MakeCode | Arcade Foundations | Move with the controller |  | Make a ship for a space game: | Change a goalkeeper |  |
| MakeCode | Arcade Foundations | Speed |  | Make a sky game: | Change a conveyor belt |  |
| MakeCode | Arcade Foundations | Overlaps and kinds |  | Make a collector game: | Change a fruit stall game |  |
| MakeCode | Arcade Foundations | Score and lives |  | The rocks fly already. | Change a dodgeball game |  |
| MakeCode | Arcade Foundations | Timers | random | Make a 30-second dodge game (bats in a cave, asteroids, traffic): | Change a rain dodger |  |
| MakeCode | Arcade Foundations | If, every frame | if | Make a safe zone at the top of the screen. | Change a lift | Treasure hunt |
| MakeCode | Arcade Foundations | Else and chasing | else | Make a guard that patrols. | Change a sheepdog | Escape |
| MakeCode | Arcade Foundations | Projectiles |  | The aliens fall already. | Change a firework show |  |
| MakeCode | Arcade Foundations | Read a game |  | Add one new job to the game: |  |  |
| MakeCode | Arcade Foundations | Space dodger |  |  |  |  |
| MakeCode | Arcade advanced skills | Every one of a kind | for-of | The aliens come twice as fast now. | Change a firework show | Defender |
| MakeCode | Arcade advanced skills | Functions | function | Make a coin collector that never runs out of coins: | Change a snow globe |  |
| MakeCode | Arcade advanced skills | Parameters | param | Make two kinds of bug from one function: | Change an aquarium |  |
| MakeCode | Arcade advanced skills | Gravity |  | Make an apple drop. | Change a trampoline |  |
| MakeCode | Arcade advanced skills | Jump from the ground |  | Make a runner. | Change a kangaroo |  |
| MakeCode | Arcade advanced skills | Level up | variable-update | This is your runner from last lesson. | Change a fishing game |  |
| MakeCode | Arcade advanced skills | A list per level | list, list-index | This dodger scores a point for every rock. | Change a fishing game | Your own Arcade game |
| MakeCode | Arcade advanced skills | True or false | bool-value | A ghost chases you. | Change a key and a door |  |
| MakeCode | Arcade advanced skills | Run out |  | The shield from last lesson. | Change a sprint boost |  |
| MakeCode | Arcade advanced skills | Power-ups |  |  |  |  |
| MakeCode | Arcade advanced skills | Will it work in Arcade? |  |  | Change a car that turns |  |
| MakeCode | Arcade advanced skills | Your own game |  |  |  |  |
| MakeCode | Robotics challenges | Drive and stop |  | Make the robot drive a square, like a delivery trolley going round the four sides of a r… |  |  |
| MakeCode | Robotics challenges | Moves as functions |  | Make a dance routine for a robot show: |  |  |
| MakeCode | Robotics challenges | Stop before you crash |  | Make a parking robot, like a car easing into a parking space: |  |  |
| MakeCode | Robotics challenges | Avoid and explore |  | A robot that always turns the same way can get stuck going round the same corner. |  |  |
| MakeCode | Robotics challenges | Follow the line | and-or | Make a delivery robot: |  |  |
| MakeCode | Robotics challenges | One robot, many jobs | text-compare | Add a guard mode, like a security robot watching a doorway: |  |  |
| MakeCode | Robotics challenges | Remote control |  | Make a remote for a rescue robot that moves in small, careful steps: |  |  |
| MakeCode | Robotics challenges | Conductor and dancers |  | Make your own robot show to a tune you know (or make one up): |  |  |
| MakeCode | Robotics challenges | Report back | not | Make a snake spotter for a bush track. |  |  |
| MakeCode | Robotics challenges | Showcase |  |  |  |  |
| MakeCode | Robotics challenges | Patrol and alert |  |  |  |  |
| MakeCode | Robotics challenges | Tripwire |  |  |  |  |
| MakeCode | micro:bit and the computer | Send data to the computer | serial-write | Make a tilt logger: |  |  |
| MakeCode | micro:bit and the computer | Commands from the computer | serial-read, text-compare | Make a desk lamp the computer controls. |  | A live dashboard |
| MakeCode | micro:bit and the computer | A radio bridge | radio-value, value-name-limit | Make a room monitor: |  |  |
| MakeCode | micro:bit and the computer | Train a recycling sorter |  | Use what you found: |  |  |
| MakeCode | micro:bit and the computer | A model drives a micro:bit |  | Build a sorting flap: |  |  |
| MakeCode | micro:bit and the computer | Train movements |  | Finish an activity model that recognises still, walking, running and jumping for someone… |  |  |
| MakeCode | micro:bit and the computer | Code with ML blocks |  | Make an activity tracker: |  |  |
| MakeCode | micro:bit and the computer | Capstone: your own AI sorter |  |  |  |  |
| MakeCode | AI robots | Drive with gestures |  | Make a gesture robot with four moves (Forward, Left, Right, Spin) that stops for any oth… |  |  |
| MakeCode | AI robots | A wrist remote |  | Make a full wrist remote: |  |  |
| MakeCode | AI robots | When the model is unsure |  | This starter has no watchdog. |  |  |
| MakeCode | AI robots | Signs: some mistakes cost more |  | Make a careful sign robot: |  |  |
| MakeCode | AI robots | Delivery robot |  |  |  |  |
| MakeCode | Secret messages | Everyone in the group hears |  | Make a doorbell. |  |  |
| MakeCode | Secret messages | Scrambling is not a secret | param, return-value, loop-index, text-char | Invent a scrambling method of your own as two functions, scramble and unscramble, and se… |  |  |
| MakeCode | Secret messages | The Caesar cipher | index-of, remainder | Make a secret messenger. |  |  |
| MakeCode | Secret messages | Breaking a Caesar cipher |  |  |  |  |
| MakeCode | Secret messages | One key to lock and unlock | xor |  |  |  |
| MakeCode | Secret messages | Agreeing a key in the open | radio-value, value-name-limit, text-compare | Put it together: |  |  |
| MakeCode | Secret messages | Has the message changed? |  | Make a message checker: |  |  |
| MakeCode | Secret messages | Prove it with a challenge |  | Make the lock safer. |  |  |
| MakeCode | Secret messages | Capture the flag |  | Make a puzzle for a partner: |  |  |
| MakeCode | Secret messages | Defend the door lock |  |  |  |  |
