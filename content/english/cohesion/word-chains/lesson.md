---
order: 5
unit: words
title: Word chains
summary: "A general word can stand in for a specific one the reader has already met: a kelpie becomes the dog, then the animal. Readers link them without being told, which keeps a text moving without repeating the same word. It only works if the specific word comes first."
language: maths
node: [AC9E6LA04 n2, AC9E6LA04 n3]
hook: "'Look at those apples. Granny Smiths are my favourite.' The second sentence never says apple. How do you know it is still about them?"
---
A text can talk about the same thing with different words. A **general** word (dog, animal, boat, place) can stand in for a **specific** one the reader met earlier (a kelpie called Biscuit, a red kayak, Hobart). It works the other way too: Granny Smiths are a kind of apple. Together these words make a **word chain**.

## Predict: is it the same thing?

```step
stage: predict
insight: "Committing to whether 'the vehicle' is the same as 'the tractor' shows students already link general and specific words without noticing."
check:
  type: predict
  q: "'Dad drove the tractor into the shed. The vehicle was covered in mud.' What is the vehicle?"
  options: ["The tractor", "A different vehicle in the shed", "The shed", "You can't tell"]
  actual: "The tractor. Vehicle is a general word, and the only vehicle the reader has met is the tractor, so the reader links them without being told."
```

## Try: colour the word chains

```step
stage: run
insight: "Colouring the specific and general words for the same thing makes a word chain visible, including words that look nothing alike."
try: { playground: board, starter: "text.yml#run", height: 330 }
hint: ["Chain 1 is everything that means Biscuit. Chain 2 is everything that means the sheep.", "The dog and this clever animal are both Biscuit. The flock and the mob are both the sheep."]
smaller:
  check: { type: question, q: "Every morning, the dog rounds up the sheep. Which dog is it?", options: ["Biscuit, the kelpie", "A different dog", "You can't tell"], answer: 0, feedback: [null, "Only one dog has been named so far.", "The only dog the reader has met is Biscuit."], explain: "The dog is a general word for Biscuit, the kelpie the reader already met." }
check: { type: board, text: "Colour two word chains: every word or phrase for Biscuit, and every word or phrase for the sheep.", when: "chains_ok = 2 and n_stray = 0", explain: "Biscuit, a kelpie, the dog and this clever animal are one chain. Sheep, the flock and the mob are another. The words change but the thing doesn't." }
```

Were you right about the tractor? Here the dog and this clever animal worked the same way.

## Worked example: general for specific

```step
stage: investigate
insight: "Modelling 'what specific thing could this general word mean?' gives the method. Nib's slip is using the general word before the specific one."
tasks:
  - check:
      type: match
      q: "Match each specific word to a general word that could stand in for it later."
      pairs:
        - ["Granny Smiths", "apples"]
        - ["a kelpie", "the dog"]
        - ["Hobart", "the city"]
        - ["a hammer", "the tool"]
      explain: "Each general word names the group the specific one belongs to, so a reader can link them."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's paragraph, one sentence per line. Click the first line where a general word comes before the reader knows what it stands for."
      answer: 1
      fault: logic
      misconception: general-before-specific
      explain: "Line 1: 'The vehicle' comes before the reader knows what it is. A reader can only link a general word to a specific one they have already met. Start with the minibus, then call it the vehicle."
  - check:
      type: question
      q: "Why do writers swap a specific word for a general one?"
      options: ["To keep talking about the same thing without repeating the same word", "To make the reader guess what it is", "Because specific words are less correct", "To start a new topic"]
      answer: 0
      feedback: [null, "A good word chain never makes the reader guess.", "Specific words are often better. The general one gives variety later.", "The general word stays on the same topic."]
      explain: "A word chain keeps the reader on the same thing with a little variety, as long as the specific word came first."
```

### Linking a general word

```worked
\text{Spot a general word} :: Look for a word for a group: dog, animal, vehicle, city, tool, team.
\text{Look back} :: Find the specific thing it could stand for: a kelpie, the tractor, Hobart.
\text{Check it's the only one} :: If two things could fit (two dogs), the reader can't tell. Use the name instead.
\text{Check the order} :: The specific word must come first, or the general word has nothing to link to.
```

Now match some specific words to the general words that could stand in for them.

### Find Nib's slip

### Why swap?

## Vary: draw the link

```step
stage: modify
insight: "Tracing a general word back with an arrow joins this lesson to the pointing words from the warm-up: both point back."
try: { playground: board, starter: "text.yml#vary", height: 300 }
hint: ["Click the dotted words, then click what each one stands for.", "The boat is the red kayak. This small craft is the same kayak."]
check: { type: board, text: "Draw an arrow from each dotted general word back to the specific thing it stands for.", when: "n_right = 3 and n_wrong = 0", explain: "The boat and this small craft both point back to the red kayak, and the water points back to Lake Burley Griffin. General words point back just like it and they." }
```

## Practise: three chains

```step
stage: practise
insight: "Three chains mixing names, repeats, synonyms and general words make students use every kind of link from the unit."
try: { playground: board, starter: "text.yml#practise", height: 340 }
hint: ["The paragraph is about a scientist, a robot and the caves it explores. Use one chain for each.", "The engineer is the scientist. The rover and the machine are the robot. The tunnels are the caves."]
check: { type: board, text: "Colour three chains: the scientist, the robot and the caves.", when: "chains_ok = 3 and n_stray = 0", explain: "Dr Amira Hassan, the engineer and Hassan; Kestrel, the rover and the machine; caves, the tunnels and these dark places. Each chain mixes a name, a general word and a repeat." }
```

## Make: your own chain

```step
stage: make
insight: "Writing a paragraph with a deliberate word chain, including a general word, is the node's production step."
try: { playground: board, starter: "text.yml#make", height: 340 }
hint: ["Press Write your own and write four sentences about a specific thing: your pet, a favourite place, a team.", "Name it first, then use a general word for it at least once (the dog, the town, the team). Then colour two chains."]
check: { type: board, text: "Write at least four sentences, then colour a word chain of at least three words, plus a second chain.", when: "is_written = 1 and max_chain >= 3 and n_colours_used >= 2", explain: "Your chains show the reader how your paragraph stays on track. Does every general word come after the specific one?" }
```

## In your own writing

```step
stage: make
tier: typical
insight: "Checking class writing for general words with nothing to link to applies the move where it counts."
check: { type: reflect, text: "In a piece of my own writing, I found a place where I repeated the same word too many times and swapped one for a general word or a word that means the same. I checked the specific word came first." }
```
