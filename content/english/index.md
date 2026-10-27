---
title: English
order: 2.5
map: true
trail: units
summary: "Short lessons on how English works: what makes writing hold together, how texts are built for a purpose, how sentences are built and how word choices change meaning. Each one is a text to mark up on the screen, a worked example and a few checks, then the same move in your own writing. They are Language-strand drop-ins: pull one into your own unit at the point your students need it. Reading and responding to texts, and writing whole pieces, are taught in your units, beside these lessons and not instead of them."
pathways:
  - id: language
    title: How writing works
    summary: "The Language strand, one move at a time: how a text holds together, how sentences are built, and how word choices change meaning and tone."
    fit: "Start here to see what makes writing easy to follow, and to use the same moves in your own."
    about: "**How writing works** follows the Language strand of the Australian Curriculum: English (Version 9). The first course, **Holding writing together**, follows the cohesion thread through the years: pronoun links and connectives (AC9E4LA04), sentence openers (AC9E5LA04), repetition and word associations (AC9E6LA04), topic sentences, overviews and conclusions (AC9E7LA04), and claims, evidence and explanation inside a paragraph (AC9E8LA04). The Years 4–5 lessons are an optional warm-up unit. Every text on the screen is written for the lesson, so nothing is copyrighted and the planted links are exactly where the lesson needs them. Nothing is marked by AI: the board checks what can be checked (where a word points, which joining word fits) and the rest is the student's own writing, checked against a model or by you."
    courses:
      - { path: english/cohesion, id: cohesion, stage: foundations, tagline: "Make your writing easy to follow, sentence to sentence and paragraph to paragraph." }
      - { path: english/sentences, id: sentences, stage: foundations, tagline: "Build sentences that say exactly what you mean." }
      - { path: english/punctuation, id: punctuation, stage: foundations, after: [sentences], tagline: "Choose the mark that makes your meaning clear." }
      - { path: english/words, id: words, stage: foundations, after: [cohesion], tagline: "Pick the words that fit the reader and the job." }
      - { path: english/persuade, id: persuade, stage: foundations, after: [words], tagline: "Spot how words nudge a reader, and choose your own." }
      - { title: Writing like a subject expert, stage: extensions, summary: "Nominalisation, academic and technical vocabulary, and the voice of writing in science and humanities.", after: [cohesion], tagline: "Sound like a scientist, a historian or a reviewer." }
  - id: texts
    title: How texts work
    summary: "Purpose and structure: how persuasive, explanation, analytical and narrative texts are put together, and how images and layout make meaning."
    fit: "See the plan inside a text: take a model apart, build one together, then write your own."
    about: "**How texts work** follows the text-structure thread of the Australian Curriculum: English (Version 9), across the Language and Literacy strands. The first course, **How texts are built**, covers stages and phases (AC9E4LA03 to AC9E8LA03), the features of each kind of text (AC9E4LY03, AC9E5LY03, AC9E6LY03) and how ideas are organised (AC9E7LY04, AC9E8LY04): recounts, reports, explanations, reviews and arguments, patterns such as cause and effect, what a structure puts first, texts built for a reader, and hybrids. Each lesson takes a model apart on the screen, then the student builds their own, ending with a challenge that follows the genre teaching and learning cycle. The Years 4–5 lessons are an optional warm-up; the Years 9–10 descriptors are left for later Years 9–10 work. Every text is written for the lesson, and nothing is marked by AI: the board checks the planted stages, and the student's own writing is checked against a checklist, by a partner or by you."
    courses:
      - { path: english/texts, id: texts, stage: foundations, tagline: "See the plan inside a text, then use it." }
      - { title: Images and layout, stage: foundations, after: [texts], summary: "How images, diagrams and layout make meaning in visual and multimodal texts.", tagline: "Read a picture as closely as a paragraph." }
  - id: speaking
    title: Speaking and listening
    summary: "Preparing a talk and judging a spoken text: purpose and audience, a plan, a script written for the ear, cue cards, register, voice, visuals and feedback."
    fit: "Use these before a class talk: plan it, script it, cut it to cards, then rehearse and give it in class."
    about: "**Speaking and listening** follows the presenting thread of the Australian Curriculum: English (Version 9), from planning through rehearsing to delivering (AC9E4LY07 to AC9E8LY07), and the evaluation of spoken texts (AC9E7LY02). The first course, **Speaking to an audience**, plans, scripts and checks. **Rehearsing and presenting happen in class.** Nothing on the site listens to a talk or judges how anyone sounds; a partner or you do that, and each step says so. Spoken texts are judged from made-up transcripts."
    courses:
      - { path: english/speaking, id: speaking, stage: foundations, tagline: "Plan a talk, write it to be heard, and keep your voice in charge." }
purposes:
  - id: analytical
    title: Analytical
    units: "Interpreting and analysing: novel, short story or poetry study; analytical essay."
    note: "Reading and responding to a text is taught in your own unit, starting from the text. These lessons support the writing."
    courses:
      - { path: english/cohesion, note: "claim, evidence, explanation" }
      - { path: english/texts, note: "argument" }
  - id: imaginative
    title: Imaginative
    units: "Narrative and creative writing; poetry writing."
    note: "Whole stories and poems are written in your own unit. These lessons support the sentences and dialogue."
    courses:
      - { path: english/sentences }
      - { path: english/punctuation, note: "dialogue" }
  - id: persuasive
    title: Persuasive
    units: "Persuasive essay, speeches, debate."
    courses:
      - { path: english/persuade }
      - { path: english/texts, note: "argument" }
      - { path: english/words }
      - { path: english/speaking }
  - id: informative
    title: Informative
    units: "Reports and explanations, often in other subjects."
    courses:
      - { path: english/texts }
      - { path: english/cohesion }
      - { path: english/sentences }
      - { title: Writing like a subject expert }
      - { title: Images and multimodal texts }
  - id: reflective
    title: Reflective
    units: "Journals, personal response, reflecting on your own writing."
    note: "Reflective writing is taught in your own unit. These lessons support the language."
    courses:
      - { path: english/words, note: "voice and tone" }
      - { path: english/sentences }
  - id: critical
    title: Critical (Years 9-10)
    units: "Media, representation and perspective."
    note: "Our built courses are Years 6-8. The Years 9-10 extensions are planned."
    courses:
      - { path: english/persuade, note: "Years 6-8 start" }
      - { title: Images and multimodal texts }
start:
  text: "A first set that covers most units:"
  courses:
    - { path: english/cohesion }
    - { path: english/texts }
    - { path: english/sentences }
    - { path: english/persuade }
  after: "This is a suggestion, not a sequence. Paragraph skills run through every unit, which is why Holding writing together is first."
---
