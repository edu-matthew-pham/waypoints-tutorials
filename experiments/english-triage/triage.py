# English triage: every Kit English node into a thread, with the modes that suit it.
# Run: python3 .render-tmp/eng/triage.py  -> writes data/curriculum/english-triage.yml and a review dump.
import json, re, collections

D = json.load(open('data/curriculum/english.json'))['descriptors']
BY = {v['code']: v for v in D}

# ---------------- threads ----------------
THREADS = [
  # id, title, strand group, plain one-liner
  ('relationships', 'Language for people and situations', 'Language', 'How we change our language for who we are talking to: formality, roles, identity, and including or excluding people.'),
  ('evaluative', 'Judging, persuading and positioning', 'Language and Literacy', 'The words that carry opinions and values, from "I like it because" to bias, evidence and the hidden values in word choice.'),
  ('structure', 'How texts are built for a purpose', 'Language and Literacy', 'Each kind of text has stages that do a job: recount, report, explanation, argument, review, and the hybrids and twists writers make.'),
  ('cohesion', 'Holding writing together', 'Language', 'What makes writing easy to follow: pointing words, joining words, sentence starts, word chains, paragraphs, overviews and conclusions.'),
  ('sentences', 'Building sentences', 'Language', 'From one complete idea to clauses, noun groups, complex and compound-complex sentences, and sentences shaped for effect.'),
  ('expert', 'Writing like a subject expert', 'Language', 'Specialist and academic words, nominalisation, quoting and referencing: the voice of writing in science, history and English essays.'),
  ('vocabulary', 'Choosing words', 'Language', 'Building vocabulary and choosing the word that fits: topic words, synonyms, word history, figurative language, tone and mood.'),
  ('punctuation', 'Punctuation for meaning', 'Language', 'From full stops to commas, apostrophes, colons, semicolons and dashes, and how authors bend the rules.'),
  ('images', 'Images and multimodal texts', 'Language', 'How pictures, diagrams, framing, angle, symbols and film choices make meaning alongside words.'),
  ('contexts', 'Texts and their contexts', 'Literature and Literacy', 'How a text reflects when, where and by whom it was made, and how people and places are represented, including First Nations and world literature.'),
  ('response', 'Responding to literature', 'Literature', 'Forming, justifying and comparing opinions and interpretations of literature, and judging its value.'),
  ('craft', 'How authors craft literature', 'Literature', 'Character, setting, plot, point of view, style, literary devices and voice, and the effects they create.'),
  ('poetry', 'Sound, rhythm and imagery', 'Literature', 'Rhyme, rhythm, sound devices and imagery in poems, songs and stories.'),
  ('creating', 'Creating literary texts', 'Literature', 'Retelling, adapting and writing stories and poems, experimenting with devices, and editing for effect.'),
  ('reading', 'Reading and understanding', 'Literacy', 'Comprehension strategies: predicting, inferring, summarising, evaluating and comparing ideas, and finding your way around a text.'),
  ('writing', 'Planning, writing and editing', 'Literacy', 'The writing process for any purpose: plan for purpose and audience, draft with deliberate choices, edit and publish.'),
  ('talk', 'Talking and listening', 'Literacy', 'Taking part in discussion: listening, building on others, questioning, and supporting or challenging what is said.'),
  ('presenting', 'Speaking to an audience', 'Literacy', 'Planning, rehearsing and delivering spoken and multimodal presentations, with voice and visual features chosen for the audience.'),
  ('spelling', 'Spelling and word parts', 'Literacy', 'Spelling through word parts, roots, generalisations and patterns, and spelling bent for effect.'),
  ('early', 'Early reading, phonics and handwriting', 'Literacy', 'Foundation to Year 2 decoding, phonological awareness, letter-sound knowledge, high-frequency words and handwriting.'),
]
TITLE = {t[0]: t[1] for t in THREADS}

def T(prefix, years):
    return {f'AC9E{"F" if y == 0 else y}{prefix}': None for y in years}

M = {}
def put(thread, codes):
    for c in codes:
        assert c in BY, c
        assert c not in M, (c, M.get(c))
        M[c] = thread
yrs = lambda a, b: range(a, b + 1)
code = lambda y, s: f'AC9E{"F" if y == 0 else y}{s}'

put('relationships', [code(y, 'LA01') for y in yrs(0, 10)])
put('evaluative', [code(y, 'LA02') for y in yrs(0, 10)] + [code(y, 'LY03') for y in yrs(7, 10)])
put('structure', [code(y, 'LA03') for y in yrs(0, 10)] + [code(y, 'LY03') for y in yrs(0, 6)] + [code(y, 'LY01') for y in yrs(0, 3)] + [code(y, 'LY04') for y in yrs(7, 10)])
put('cohesion', [code(y, 'LA04') for y in yrs(2, 10)])
put('sentences', [code(0, 'LA05')] + [code(y, 'LA05') for y in yrs(5, 10)] + [code(y, 'LA06') for y in yrs(0, 7)] + [code(10, 'LA06')]
    + [code(y, 'LA07') for y in yrs(1, 4)] + [code(3, 'LA08'), code(4, 'LA08'), code(4, 'LA09')])
put('expert', [code(8, 'LA06'), code(9, 'LA06'), code(7, 'LA08'), code(8, 'LA08'), code(10, 'LA08'), code(9, 'LA09')])
put('vocabulary', [code(0, 'LA08'), code(5, 'LA08'), code(6, 'LA08'), code(9, 'LA08'), code(1, 'LA09'), code(2, 'LA09'), code(3, 'LA10'), code(4, 'LA11')])
put('punctuation', [code(0, 'LA09')] + [code(y, 'LA09') for y in (5, 6, 7, 8, 10)] + [code(1, 'LA10'), code(2, 'LA10'), code(3, 'LA11'), code(4, 'LA12')])
put('images', [code(0, 'LA07')] + [code(y, 'LA07') for y in yrs(5, 10)] + [code(1, 'LA08'), code(2, 'LA08'), code(3, 'LA09'), code(4, 'LA10')])
put('contexts', [code(y, 'LE01') for y in yrs(0, 10)] + [code(y, 'LY01') for y in yrs(4, 10)])
put('response', [code(y, 'LE02') for y in yrs(0, 10)] + [code(7, 'LE04'), code(10, 'LE04'), code(9, 'LE03'), code(10, 'LE03'), code(10, 'LE07')])
put('craft', [code(y, 'LE03') for y in yrs(0, 8)] + [code(8, 'LE04'), code(9, 'LE04')]
    + [code(y, 'LE05') for y in yrs(7, 10)] + [code(7, 'LE06'), code(10, 'LE06')])
put('poetry', [code(y, 'LE04') for y in (0, 1, 2, 3, 4, 5, 6)] + [code(1, 'LA04')])
put('creating', [code(y, 'LE05') for y in yrs(0, 6)] + [code(8, 'LE06'), code(9, 'LE06'), code(7, 'LE07'), code(10, 'LE08')])
put('reading', [code(y, 'LY05') for y in yrs(0, 10)] + [code(y, 'LY04') for y in yrs(4, 6)] + [code(y, 'LA05') for y in yrs(1, 4)] + [code(0, 'LA04')])
put('writing', [code(y, 'LY06') for y in yrs(0, 10)])
put('talk', [code(y, 'LY02') for y in yrs(0, 10)])
put('presenting', [code(y, 'LY07') for y in yrs(0, 10)])
put('spelling', [code(y, 'LY08') for y in yrs(5, 10)] + [code(y, 'LY09') for y in yrs(3, 6)] + [code(y, 'LY10') for y in yrs(3, 5)] + [code(4, 'LY11'), code(3, 'LY12'), code(2, 'LY12'), code(2, 'LY11')])
put('early', [code(y, 'LY04') for y in yrs(0, 3)] + [code(y, 'LY08') for y in yrs(0, 4)] + [code(y, 'LY09') for y in yrs(0, 2)]
    + [code(y, 'LY10') for y in yrs(0, 2)] + [code(0, 'LY11'), code(1, 'LY11'), code(3, 'LY11'), code(0, 'LY12'), code(1, 'LY12')]
    + [code(y, s) for y in (0, 1) for s in ('LY13', 'LY14', 'LY15')])
missing = [c for c in BY if c not in M]
assert not missing, missing

# ---------------- modes ----------------
# learn   = a tutorial on the board (planted examples, checked by the board)
# write   = use it in their own writing on the site (board write mode or an unmarked reasoning check; self-checked)
# respond = an open answer: write an interpretation or judgement, then compare with model answers and a self-check
# discuss = a workshop: a prompt, pair and class talk (class plan), often then an open answer
# speak   = the speech shape: plan and script on the site, rehearse and deliver in class, self-check after
# class   = class only: the site adds little (performance, reading aloud, sustained drafting, live discussion behaviour)
# specialist = early literacy programmes (phonics, decoding, handwriting): not planned for this site
ORDER = ['learn', 'write', 'respond', 'discuss', 'speak', 'class', 'specialist']
RX = {
  'write': r"\b(construct|create|write|compose|deploy|experiment(ing)? with|invent|imitate|plan an?|planning|edit|editing)\b|in (their|her|his) own (writing|texts?|literary|academic)|own writing",
  'respond': r"\b(evaluat|judgement|opinion|preference|personal response|world views?|ethical|interpretation|aesthetic|making (a )?supported)",
  'discuss': r"\b(discussion|others' (opinions|viewpoints|interpretations)|agreement and difference|conversations?\b|turn-taking|active listening|paraphras|collaborative)",
  'speak': r"\b(presentation|deliver|rehears|voice features|volume|pitch|gesture)\b",
  'class': r"\b(perform|role-play|role play|read(ing)? aloud|intonation|orally|oral sharing)\b",
}
SPEAK_THREADS = ('presenting', 'talk')
THREAD_BASE = {
  'relationships': ['learn'], 'evaluative': ['learn'], 'structure': ['learn'], 'cohesion': ['learn'], 'sentences': ['learn'],
  'expert': ['learn'], 'vocabulary': ['learn'], 'punctuation': ['learn'], 'images': ['learn'], 'contexts': ['respond', 'discuss'],
  'response': ['discuss', 'respond'], 'craft': ['learn'], 'poetry': ['learn'], 'creating': ['write'], 'reading': ['learn'],
  'writing': ['write'], 'talk': ['discuss', 'class'], 'presenting': ['speak'], 'spelling': ['learn'], 'early': ['specialist'],
}

def modes_for(v, n):
    th = M[v['code']]
    if th == 'early':
        return ['specialist']
    text = (n['label'] + ' :: ' + n['checkpoint']).lower()
    ms = set(THREAD_BASE[th])
    for m, rx in RX.items():
        if re.search(rx, text):
            ms.add(m)
    if th not in SPEAK_THREADS: ms.discard('speak')
    if th in ('punctuation', 'spelling') and 'write' in ms and not re.search(r'own writing|extended writing', text): ms.discard('write')
    if th in ('presenting',):
        ms.discard('discuss'); ms.discard('respond')
        if re.search(r'\bdeliver', text): ms.add('class')
    if th == 'talk':
        ms.discard('speak'); ms.discard('write'); ms.discard('respond')
        if re.search(r'identify|explain|analys|evaluat', text) and re.search(r'spoken text|language features|positions', text): ms.add('learn')
    if th in ('writing', 'creating'):
        ms.discard('speak')
        if re.search(r'plan|structur|selecting|select', text): ms.add('write')
        if re.search(r'identify|noticing|adaptation works|reading as a writer', text): ms.add('learn')
        if re.search(r'extended|publish|peer feedback|own and others', text): ms.add('class')
    if th in ('response', 'contexts'):
        ms.discard('write'); ms.discard('speak')
        if re.search(r'^\w[^:]*::.*(identify|explain)', text) and not re.search(r'opinion|preference|evaluat|interpret|respon', n['label'].lower()): ms.add('learn')
    if th in ('craft', 'images', 'evaluative', 'structure', 'relationships') and re.search(r'evaluat|judgement|world view|values', text):
        ms.add('respond')
    if 'discuss' in ms and th in ('craft', 'poetry', 'vocabulary', 'sentences', 'images', 'structure') and v['year'] <= 3:
        ms.add('class')
    return [m for m in ORDER if m in ms]

# Hand overrides where the rules misread a node (code, n) -> modes. Reasons in REASON.
OVR = {}
REASON = {}
def o(c, n, ms, why):
    OVR[(c, n)] = ms; REASON[(c, n)] = why

# relationships: identity and power are discussion-heavy in 7-10
o('AC9E7LA01', 2, ['learn', 'discuss'], 'Language creating identity is best argued about, after a board on examples.')
o('AC9E9LA01', 3, ['learn', 'discuss'], 'Empowerment as a mechanism: examples on the board, then discussion.')
o('AC9E10LA01', 3, ['learn', 'respond', 'discuss'], 'Marginalising language: identify on planted examples, then judge and discuss.')
o('AC9E4LA01', 4, ['learn', 'discuss'], 'Cultural greeting conventions: learn the idea, discuss with the class; avoid stating any one community\'s protocols on the site.')
o('AC9E5LA01', 3, ['learn', 'discuss'], 'Cultural communication norms: as above.')
o('AC9E1LA01', 4, ['learn', 'class'], 'Gesture and expression are seen and done in class.')
o('AC9E1LA01', 1, ['learn', 'class'], 'Body language is seen and done in class.')
o('AC9E3LA01', 1, ['learn', 'class'], 'Turn-taking is practised in class.')
o('AC9E3LA01', 2, ['learn', 'class'], 'Body language is practised in class.')
o('AC9EFLA01', 3, ['learn', 'class'], 'Foundation: asking and requesting is oral, in class.')
o('AC9E6LA01', 3, ['learn', 'write'], 'Apply register in own writing, self-checked.')
# evaluative
o('AC9EFLA02', 2, ['class'], 'Gesture and speech together: oral, Foundation.')
o('AC9EFLA02', 1, ['learn', 'class'], 'Foundation: mostly oral.')
o('AC9E7LA02', 2, ['learn', 'write'], 'Substantiation: see it on a model, then substantiate own evaluation (links to Inside a paragraph).')
o('AC9E10LA02', 1, ['learn', 'respond'], 'Values revealed by word choice: board examples, then a written judgement.')
o('AC9E10LA02', 2, ['learn', 'respond'], 'Implied values: board examples, then a written judgement.')
o('AC9E8LY03', 1, ['learn', 'respond'], 'Evaluate language choices for purpose: learn on models, then justify a view.')
o('AC9E8LY03', 2, ['learn', 'respond'], 'Evaluate use of sources: learn on models, then justify a view.')
o('AC9E9LY03', 2, ['learn', 'respond', 'discuss'], 'Judging fairness of a representation: contested, so discussion too.')
o('AC9E10LY03', 2, ['learn', 'respond', 'discuss'], 'Judging how language represents values: contested, so discussion too.')
# structure
o('AC9E10LA03', 2, ['learn', 'respond'], 'Evaluate effectiveness: a supported judgement compared with models.')
o('AC9E6LY03', 3, ['learn', 'respond'], 'Evaluate text effectiveness and suggest improvements.')
o('AC9EFLA03', 3, ['learn', 'class'], 'Oral and image-based First Nations texts: experienced in class with community-appropriate texts; the site states the idea only.')
o('AC9E9LY04', 2, ['learn', 'respond'], 'Evaluate impact of organisation: supported judgement.')
o('AC9E10LY04', 2, ['learn', 'respond'], 'Evaluate effectiveness of organisation: supported judgement.')
# cohesion (built course)
o('AC9E2LA04', 3, ['learn'], 'Ellipsis: identify omitted words on the board.')
o('AC9E10LA04', 2, ['learn'], 'Paragraph and image integration: board with a layout.')
# sentences
o('AC9E10LA05', 2, ['learn', 'respond'], 'Evaluate effectiveness of sentence structures: supported judgement.')
o('AC9E1LA06', 4, ['learn'], 'The clause as a unit: board.')
# images
o('AC9E5LA07', 3, ['learn', 'class'], 'Sound and image in film: needs audio and film; done in class with the class film, the site gives the idea with stills.')
o('AC9E6LA07', 3, ['learn', 'discuss'], 'Cultural sensitivity of images and maps for First Nations Australians: the principle on the site, judgement discussed in class with local guidance.')
o('AC9E9LA07', 2, ['learn', 'class'], 'Moving images: film in class; the site uses stills and sequences.')
o('AC9E10LA07', 2, ['learn', 'respond'], 'Evaluate visual choices in representations: supported judgement.')
o('AC9E8LA07', 2, ['learn', 'respond'], 'Advertisement allusion: board on made-up adverts, then explain the layering.')
# contexts
for c in ('AC9EFLE01', 'AC9E1LE01', 'AC9E2LE01', 'AC9E3LE01'):
    for n in BY[c]['nodes']:
        o(c, n['n'], ['discuss', 'class'], 'F–3 literature discussion happens around read-alouds in class.')
o('AC9E5LE01', 1, ['learn', 'respond'], 'Literary details carry context: identify on an extract, then explain.')
o('AC9E5LE01', 3, ['learn', 'respond'], 'Ballads (public-domain Australian ballads fit), then explain the context shown.')
o('AC9E7LE01', 1, ['learn', 'respond'], 'Identify ideas and issues in context: on an extract, then explain.')
o('AC9E7LE01', 2, ['respond', 'discuss'], 'Compare one idea across texts and contexts.')
o('AC9E9LE01', 1, ['learn'], 'Representation is constructed: a board on made-up and public-domain examples.')
o('AC9E9LE01', 2, ['respond', 'discuss'], 'How context shapes representation: interpretation.')
o('AC9E10LE01', 1, ['learn', 'respond'], 'Analyse representations: identify choices, then explain.')
o('AC9E10LE01', 2, ['respond', 'discuss'], 'Evaluate representations against context: interpretation.')
o('AC9E8LE01', 2, ['respond', 'discuss', 'class'], 'First Nations ways of being, knowing, thinking and doing: taught through the class text and local guidance, not stated by the site.')
o('AC9E5LE01', 2, ['discuss', 'class'], 'First Nations literary contexts: through texts chosen by the school, with community guidance.')
o('AC9E6LE01', 2, ['discuss', 'class'], 'Reading across diverse authors: the class text does this.')
o('AC9E7LY01', 1, ['learn', 'discuss'], 'Technology and reading: explain on examples, discuss own habits.')
o('AC9E7LY01', 2, ['learn', 'discuss'], 'Technology and creating texts: examples, then discussion (links to Learning with AI).')
o('AC9E8LY01', 1, ['learn', 'respond'], 'Features reflecting context: identify, then explain.')
o('AC9E4LY01', 1, ['learn', 'respond'], 'Compare two texts from different times: board with two short texts, then explain.')
o('AC9E5LY01', 1, ['learn'], 'Vocabulary that marks time and place: board.')
o('AC9E6LY01', 2, ['learn', 'respond'], 'Media texts and context: made-up adverts and news, then explain (links to ICT judging information).')
# response
o('AC9E4LE02', 1, ['learn'], 'Name structure and language choices with metalanguage: board.')
o('AC9E4LE02', 2, ['learn', 'respond'], 'Describe the effect of a choice: model answers.')
o('AC9E5LE02', 2, ['learn', 'respond'], 'Literary terms in an opinion.')
o('AC9E6LE02', 1, ['learn'], 'Compare features of two texts: a board with two extracts.')
o('AC9E6LE02', 2, ['learn', 'respond'], 'How differences in narrator and voice affect readers.')
o('AC9E8LE02', 1, ['learn', 'respond'], 'Style as the sum of choices: identify, then judge.')
o('AC9E9LE03', 2, ['discuss'], 'Collaborative criteria for literary value: a workshop.')
o('AC9E9LE02', 2, ['respond', 'class'], 'Whole-text analysis needs the whole class text; the site scaffolds the write-up.')
o('AC9E10LE03', 1, ['learn', 'respond'], 'Trace aesthetic qualities to features.')
o('AC9E10LE07', 1, ['learn', 'respond'], 'Identify aesthetic qualities with metalanguage.')
o('AC9E10LE04', 1, ['learn', 'respond', 'discuss'], 'Identify ethical positions: contested, so discussion.')
o('AC9EFLE02', 2, ['class'], 'Foundation response through drawing or talk.')
o('AC9EFLE02', 1, ['discuss', 'class'], 'Foundation: feelings about a story, in class.')
o('AC9E1LE02', 3, ['learn', 'discuss'], 'Who is telling the story: an early point-of-view idea.')
# craft
o('AC9E9LE04', 2, ['learn', 'respond'], 'Evaluate an author\'s style: supported judgement.')
o('AC9E8LE04', 2, ['learn', 'respond'], 'Intertextuality and aesthetic quality: explain in an open answer.')
o('AC9E10LE06', 2, ['learn', 'respond'], 'Compare and evaluate voice across poetry, novels and film.')
o('AC9EFLE03', 1, ['learn', 'class'], 'Foundation: features of a read-aloud story.')
o('AC9EFLE03', 2, ['learn', 'class'], 'Foundation: kinds of story, in class.')
o('AC9E1LE03', 4, ['learn', 'discuss'], 'Plot, character and setting together: discussion.')
# poetry
o('AC9EFLE04', 3, ['class'], 'Performing a rhyme: class.')
o('AC9E2LE04', 2, ['class'], 'Reproducing a rhythm aloud: class.')
o('AC9E6LE04', 3, ['learn', 'class'], 'Ballad rhythm: board marks the stresses on a public-domain ballad; reading aloud in class.')
o('AC9E1LE04', 4, ['write', 'class'], 'Inventing sound patterns: write and share.')
# creating
o('AC9EFLE05', 2, ['class'], 'Role-play: class.')
o('AC9E1LE05', 1, ['class'], 'Oral retelling: class.')
o('AC9E4LE05', 3, ['write', 'class'], 'Peer feedback and revision: a feedback card on the site, done in class.')
o('AC9E10LE08', 1, ['write', 'class'], 'Sustained voice across a whole text: drafted over weeks in class; the site gives short exercises.')
# reading
o('AC9EFLA04', 1, ['specialist'], 'Print direction: early reading.')
o('AC9EFLA04', 2, ['specialist'], 'Book handling: early reading.')
o('AC9EFLA04', 3, ['learn', 'class'], 'Digital navigation basics: class with real devices.')
o('AC9E5LY04', 1, ['learn'], 'Skimming and scanning: a timed board on a made-up page.')
o('AC9E6LY04', 3, ['learn', 'class'], 'Selecting texts for research: links to ICT judging information; real research in class.')
o('AC9E5LY05', 3, ['learn'], 'Evaluate sources: covered by ICT judging information; link there.')
o('AC9E8LY05', 2, ['learn', 'respond'], 'Evaluate credibility, including images: board, then a supported judgement.')
o('AC9E9LY05', 2, ['learn', 'respond'], 'Compare ideas between texts: two short texts on a board, then an open answer.')
o('AC9E10LY05', 2, ['learn', 'respond'], 'Interpret abstract ideas: open answer with models.')
for c in ('AC9EFLY05', 'AC9E1LY05', 'AC9E2LY05'):
    for n in BY[c]['nodes']:
        o(c, n['n'], ['discuss', 'class'], 'F–2 comprehension happens around shared reading in class.')
# writing
for c in ('AC9EFLY06', 'AC9E1LY06'):
    for n in BY[c]['nodes']:
        o(c, n['n'], ['class'], 'F–1 writing is guided in class.')
# talk: discussion behaviour is class; a few nodes have something to learn first
o('AC9E5LY02', 3, ['discuss', 'speak'], 'Present and justify an opinion: a short speech or a discussion turn.')
o('AC9E6LY02', 3, ['discuss', 'class'], 'Develop arguments in discussion.')
o('AC9E8LY02', 1, ['learn', 'discuss'], 'Stated and implied meaning in a spoken text: a transcript on the board, then discussion.')
o('AC9E9LY02', 1, ['learn', 'discuss'], 'How a spoken text positions listeners: a transcript on the board.')
o('AC9E10LY02', 1, ['learn', 'discuss'], 'Purposes and effects in spoken texts: transcript on the board.')
o('AC9E7LY02', 2, ['learn', 'discuss'], 'Evaluate features of spoken texts: transcript and a checklist.')
o('AC9E3LY02', 2, ['learn', 'class'], 'Adjust language for the audience: examples, then class.')
o('AC9E9LY02', 2, ['discuss', 'speak'], 'Present and discuss opinions on a spoken text.')
o('AC9E10LY02', 2, ['discuss', 'speak'], 'Present a developed opinion on a spoken text.')
# presenting: F-2 is class
for c in ('AC9EFLY07', 'AC9E1LY07', 'AC9E2LY07'):
    for n in BY[c]['nodes']:
        o(c, n['n'], ['class'], 'F–2 presentations are guided in class.')
# spelling
o('AC9E8LY08', 2, ['learn', 'class'], 'Spelling Aboriginal and Torres Strait Islander words: point to the right sources (AIATSIS map, local community); the site does not supply spellings.')
o('AC9E9LY08', 1, ['learn'], 'Spelling as characterisation: board on made-up dialogue.')
o('AC9E10LY08', 2, ['learn', 'write'], 'Bending spelling for effect in own writing.')
for c in ('AC9E3LY09', 'AC9E3LY12', 'AC9E2LY11'):
    for n in BY[c]['nodes']:
        o(c, n['n'], ['specialist'], 'Phonics-based spelling: early literacy programme.')
o('AC9E4LY09', 1, ['specialist'], 'Complex vowel patterns: phonics programme.')
o('AC9E6LY08', 3, ['class'], 'Decoding while reading independently: class reading.')


# ---- review fixes (27 Oct, fresh-eyes review) ----
FN = 'First Nations content: the site states the idea and points to the right sources and the class text; it never supplies protocols, spellings or interpretations itself.'
def fix(c, n, ms, why=''):
    OVR[(c, n)] = ms
    if why: REASON[(c, n)] = why
fix('AC9E6LA09', 3, ['learn', 'write', 'class'], 'Commas across extended writing: practise on the site, check in class drafts.')
fix('AC9E4LA11', 3, ['learn', 'write'], 'New words in own writing. ' + FN)
fix('AC9E8LA04', 1, ['learn', 'write'])
fix('AC9E8LA04', 2, ['learn', 'write'])
for n in (1, 2, 3): fix('AC9E5LA02', n, ['learn', 'write'])
fix('AC9E7LY05', 2, ['learn', 'write'], 'A written summary, compared with a model; extended texts need the class text or bring-your-own-text.')
for c, n in [('AC9E3LA09', 2), ('AC9E4LA10', 2), ('AC9E7LA07', 2)]: fix(c, n, ['learn', 'respond'])
for c, n in [('AC9E4LY03', 1), ('AC9E3LA07', 2), ('AC9E6LY05', 1)]: fix(c, n, ['learn'])
fix('AC9E7LY05', 1, ['learn', 'respond'])
fix('AC9E7LE06', 2, ['learn', 'respond'])
fix('AC9E7LE06', 3, ['learn', 'respond'])
fix('AC9E6LE03', 2, ['learn', 'respond', 'class'], 'Style across two or more texts by one author needs real texts: the class reading, or bring-your-own-text.')
fix('AC9E6LE03', 3, ['learn', 'respond'])
fix('AC9E8LY04', 2, ['learn', 'respond'])
fix('AC9E7LY03', 2, ['learn', 'respond'])
fix('AC9E8LA06', 2, ['learn', 'discuss'])
for n in (1, 2, 3): fix('AC9E10LA06', n, ['learn', 'respond'])
fix('AC9E8LE03', 2, ['learn', 'discuss', 'class'], 'Film: watched in class; the site uses stills.')
fix('AC9E8LY08', 1, ['learn', 'write'], 'Practice pages, then accurate spelling in own writing.')
fix('AC9E10LY08', 1, ['learn', 'write'], 'Practice pages, then accurate spelling in own writing.')
fix('AC9E4LY04', 1, ['specialist'], 'Fluent reading: reading programme and class reading.')
fix('AC9E4LY04', 2, ['specialist'], 'Self-correction while reading: reading programme and class reading.')
fix('AC9E6LA05', 2, ['learn', 'write'])
fix('AC9E6LA03', 2, ['learn'])
fix('AC9E3LY12', 2, ['learn'], 'Homophones in context: a board, as in Year 4.')
fix('AC9E6LY08', 1, ['learn'], 'Year 6 word study on complex words (not a phonics programme).')
fix('AC9E6LY08', 2, ['learn'], 'Year 6 word study on complex words (not a phonics programme).')
fix('AC9E8LY08', 2, ['learn', 'class'], 'Spelling Aboriginal and Torres Strait Islander words: point to the right sources (AIATSIS map, local community); ' + FN)
for c in ('AC9E4LE01', 'AC9E7LE01', 'AC9E9LE01', 'AC9E10LE01', 'AC9E6LE01', 'AC9E8LE01', 'AC9E5LE01', 'AC9EFLE01', 'AC9E1LE01', 'AC9E2LE01', 'AC9E3LE01'):
    for nd in BY[c]['nodes']:
        k = (c, nd['n'])
        REASON[k] = (REASON.get(k, '') + ' ' + FN).strip()
for c, n in [('AC9E4LA01', 4), ('AC9E5LA01', 3), ('AC9E6LA07', 3), ('AC9EFLA03', 3), ('AC9E1LA09', 3)]:
    REASON[(c, n)] = (REASON.get((c, n), '') + ' ' + FN).strip()

def band(y):
    return 'F-2' if y <= 2 else '3-5' if y <= 5 else '6-8' if y <= 8 else '9-10'

rows = []
for v in sorted(D, key=lambda v: (THREADS.index(next(t for t in THREADS if t[0] == M[v['code']])), v['year'], v['code'])):
    for n in v['nodes']:
        ms = OVR.get((v['code'], n['n'])) or modes_for(v, n)
        rows.append({'code': v['code'], 'n': n['n'], 'year': v['year'], 'thread': M[v['code']], 'label': n['label'], 'modes': ms,
                     'why': REASON.get((v['code'], n['n']), '')})
unused = [k for k in OVR if not any(r['code'] == k[0] and r['n'] == k[1] for r in rows)]
assert not unused, unused

json.dump({'threads': THREADS, 'map': M, 'rows': rows}, open('.render-tmp/eng/triage.json', 'w'), indent=1)
with open('.render-tmp/eng/review.txt', 'w') as f:
    for t in THREADS:
        f.write(f'\n######## {t[0]}: {t[1]}\n')
        for r in rows:
            if r['thread'] == t[0]:
                f.write(f"{r['code']} n{r['n']} Y{r['year']} {'+'.join(r['modes']):28s} {r['label']}{'   [' + r['why'] + ']' if r['why'] else ''}\n")
c = collections.Counter('+'.join(r['modes']) for r in rows)
print(len(rows), 'nodes'); print(c.most_common(40))
