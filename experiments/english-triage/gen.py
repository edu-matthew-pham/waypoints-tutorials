# Writes data/curriculum/english-triage.yml and the plan doc from triage.json + courses.json.
import json, collections, yaml

d = json.load(open('.render-tmp/eng/triage.json'))
courses = json.load(open('.render-tmp/eng/courses.json'))
rows, THREADS, MAP = d['rows'], d['threads'], d['map']

# What ACARA expects as students move up, in plain words (drawn from the Kit descriptors, not a sequence to follow).
STAGES = {
 'relationships': {
  'F-2': 'Notice that we talk differently at home and at school, and with friends and teachers.',
  '3-4': 'Take turns and cooperate; spot formal and informal language and inclusive words.',
  '5-6': 'See how language signals roles; move along a scale from slang to formal and choose the right level.',
  '7-8': 'Language shows and builds who we are, and puts people in roles: leader, peer, outsider.',
  '9-10': 'Language can include or exclude, empower or disempower; spot the devices that do it.'},
 'evaluative': {
  'F-2': 'Say what you like and why, and move beyond "I liked it".',
  '3-4': 'Words that show certainty and feeling; opinion words versus factual reporting.',
  '5-6': 'Back up a claim instead of just asserting it; tell objective from subjective; spot bias.',
  '7-8': 'The vocabulary of judgement; back a judgement with the text; irony and hyperbole; language that shifts with audience.',
  '9-10': 'Judgement hidden in word choice, metaphor and allusion; the values behind the words; how fairly a perspective is shown.'},
 'structure': {
  'F-2': 'Texts have purposes and shapes: stories, information, instructions, persuasion.',
  '3-4': 'Stages of recounts, reports, explanations and arguments, and the language each uses.',
  '5-6': 'Stages and phases; features that serve the purpose; how structure and language work together on a reader.',
  '7-8': 'Purpose drives structure; idea patterns such as cause and effect; hybrid texts.',
  '9-10': 'How and why writers bend or break the usual structure, and how well a structure works.'},
 'cohesion': {
  'F-2': 'Pronouns that point back to someone already named.',
  '3-4': 'Paragraphs group ideas; joining words link sentences and order events.',
  '5-6': 'Sentence starts guide the reader; repetition and word chains hold a text together.',
  '7-8': 'Topic sentences, overviews and conclusions; claim, evidence and explanation inside a paragraph.',
  '9-10': 'Nominalisation and connectives as a system; varying paragraph shape; joining paragraphs and images.'},
 'sentences': {
  'F-2': 'A sentence is a complete idea; word classes; simple and compound sentences.',
  '3-4': 'Clauses, subject-verb agreement, verb types and tense, complex sentences, phrases that add detail.',
  '5-6': 'Dependent clauses and their order, expanded noun groups, embedded clauses, precise verbs.',
  '7-8': 'Compound-complex sentences, tense consistency, sentence shape as a deliberate choice.',
  '9-10': 'Fragments and breaks for effect; judging which sentence structures work; syntax and style.'},
 'expert': {
  '7-8': 'Technical words, words with everyday and technical meanings, academic vocabulary, nominalisation.',
  '9-10': 'Nouns that sum up and carry an argument; quoting and referencing; precise academic vocabulary.'},
 'vocabulary': {
  'F-2': 'Topics have their own words; choose words on purpose.',
  '3-4': 'Technical words, words with more than one meaning, synonyms and antonyms.',
  '5-6': 'Specialist words, Greek and Latin roots, figurative and emotive language, words to talk about texts.',
  '7-8': 'Technical and academic words: see Writing like a subject expert.',
  '9-10': 'How word choice builds tone, mood and style.'},
 'punctuation': {
  'F-2': 'Capital letters and full stops, question marks, commas in lists.',
  '3-4': 'Apostrophes, and punctuating dialogue.',
  '5-6': 'Commas after an opening phrase and between clauses, apostrophes for plural and joint ownership.',
  '7-8': 'Colons, brackets, semicolons and dashes to support meaning.',
  '9-10': 'How authors use and bend punctuation for effect.'},
 'images': {
  'F-2': 'Pictures tell us things the words do not.',
  '3-4': 'Gaze, angle, distance and framing set up a relationship with the viewer.',
  '5-6': 'Image sequence and juxtaposition; diagrams, tables, maps and graphs; cultural sensitivity of images.',
  '7-8': 'Vectors, angle and social distance build a perspective; visual allusion in adverts.',
  '9-10': 'Symbols in still and moving images; evaluating visual choices in representations.'},
 'contexts': {
  'F-2': 'Stories from many places and peoples, including First Nations Australian stories, connected to our own lives.',
  '3-4': 'The same story told differently; texts from different times; themes.',
  '5-6': 'What a text shows about its time and place; how context shapes a reader\'s response.',
  '7-8': 'Ideas, issues and values in texts from different contexts; how technology changes reading and writing.',
  '9-10': 'Representations of people and places as constructed, and judged against their context.'},
 'response': {
  'F-2': 'Share feelings about a story and connect it to your own life.',
  '3-4': 'Opinions grounded in experience; the effect of structure and language on a reader.',
  '5-6': 'An opinion backed with literary terms and evidence; comparing two texts; other people\'s views.',
  '7-8': 'Form and justify an opinion, weigh others\' opinions; aesthetic and social value; opinions about style.',
  '9-10': 'From first response to whole-text analysis; extending others\' interpretations; ethical positions and world views.'},
 'craft': {
  'F-2': 'Characters, settings and plots, and the words that create them.',
  '3-4': 'Character techniques, setting and mood, plot tension, figurative language and word play.',
  '5-6': 'Point of view and what it hides; an author\'s individual style.',
  '7-8': 'Devices that create character and layers of meaning; how elements combine; tone through sentence patterns; positioning readers.',
  '9-10': 'Extended metaphor, allegory, symbolism and intertextuality; voice as a device.'},
 'poetry': {
  'F-2': 'Rhythm, rhyme and alliteration; invent your own sound patterns.',
  '3-4': 'Imagery, sound devices, figurative language and word play, and their effect on the reader.',
  '5-6': 'Simile, metaphor, personification, assonance and onomatopoeia; ballad rhythm.',
  '7-10': 'Poetry continues inside How authors craft literature: layers of meaning, imagery, voice.'},
 'creating': {
  'F-2': 'Retell and adapt a familiar story.',
  '3-4': 'Plan and write stories using techniques from what you have read; edit with feedback.',
  '5-6': 'Read as a writer, experiment with figurative language, adapt a source.',
  '7-8': 'Experiment with devices for a purpose, then edit for effect.',
  '9-10': 'Experimental and hybrid texts; a sustained voice.'},
 'reading': {
  'F-2': 'Predict, connect, retell and question while reading together.',
  '3-4': 'Main idea and detail, inference, monitoring; navigating print and online texts.',
  '5-6': 'Skim and scan, summarise, infer with evidence, judge sources, compare sources.',
  '7-8': 'Infer beyond the literal, summarise extended texts, interpret and evaluate ideas and credibility.',
  '9-10': 'Compare ideas between texts; interpret complex and abstract ideas.'},
 'writing': {
  'F-2': 'Write short texts with growing control, guided in class.',
  '3-4': 'Plan, write, edit and publish with paragraphs, complex sentences and linked ideas.',
  '5-6': 'Plan for purpose and audience; develop ideas with connectives and noun groups; edit against criteria.',
  '7-8': 'Choose structures, language and devices on purpose; revise purposefully; publish for an audience.',
  '9-10': 'Critical and analytical texts; experimenting with structure; reflecting on choices.'},
 'talk': {
  'F-2': 'Listen, take turns, speak clearly, respond to others.',
  '3-4': 'Build on others\' ideas and acknowledge other opinions.',
  '5-6': 'Paraphrase and question to clarify; present and justify an opinion; formality in talk.',
  '7-8': 'Evaluate spoken texts; support or challenge stated and implied meanings.',
  '9-10': 'Analyse how a speaker positions listeners; discuss and present opinions on spoken texts.'},
 'presenting': {
  'F-2': 'Short talks with an opening, middle and end, and a voice the room can hear.',
  '3-4': 'Plan, rehearse with feedback, and deliver structured presentations.',
  '5-6': 'Elaborated ideas, technical vocabulary, voice and visual features chosen on purpose.',
  '7-8': 'Presentations for a purpose and audience, crafted and rehearsed for effect.',
  '9-10': 'Analytical presentations; rhetorical devices with a rationale.'},
 'spelling': {
  '3-4': 'Prefixes, suffixes, word families, homophones and spelling generalisations.',
  '5-6': 'Base words, Greek and Latin roots, less common plurals, spelling generalisations.',
  '7-8': 'Word parts and roots as a spelling tool; accurate spelling of complex words; correct sources for First Nations words.',
  '9-10': 'Spelling bent for characterisation, humour and effect.'},
 'early': {'F-2': 'Phonological awareness, phonics, decoding, high-frequency words and handwriting.'},
}

MODE_WORDS = {'learn': 'tutorial', 'write': 'own writing', 'respond': 'open answer', 'discuss': 'workshop', 'speak': 'speech shape',
              'class': 'class only', 'specialist': 'early literacy programme'}
band = lambda y: 'F-2' if y <= 2 else '3-5' if y <= 5 else '6-8' if y <= 8 else '9-10'
owner = {}
for c in courses:
    for part in ('nodes', 'warm', 'ext'):
        for k in c[part]:
            owner[tuple(k)] = (c['id'], part)

# ---------- data file ----------
data = {
 'note': 'Every Kit English node (data/curriculum/english.json) sorted into a thread and the ways the site can support it. Made 27 Oct 2026 from the English master plan (Project doc claude/english-master-plan.md). Modes: learn = a tutorial on the board; write = the student uses it in their own writing on the site, self-checked; respond = an open answer compared with model answers; discuss = a workshop (prompt, pair and class talk); speak = the speech shape (plan on the site, deliver in class); class = class only; specialist = early literacy programmes, not planned for this site. Courses are drop-in skill sets, not a sequence; part says whether a node is the course core (nodes), a warm-up from earlier years (warm) or an extension (ext).',
 'threads': [{'id': t[0], 'title': t[1], 'strands': t[2], 'summary': t[3], 'stages': STAGES.get(t[0], {}),
              'codes': sorted([c for c, th in MAP.items() if th == t[0]], key=lambda c: (0 if c[4] == 'F' else int(''.join(ch for ch in c[4:6] if ch.isdigit())), c))} for t in THREADS],
 'courses': [{k: c[k] for k in ('id', 'title', 'pathway', 'years', 'status', 'wave', 'board', 'summary')} for c in courses],
 'nodes': [{'node': f"{r['code']} n{r['n']}", 'thread': r['thread'], 'modes': r['modes'],
            **({'course': owner[(r['code'], r['n'])][0], 'part': owner[(r['code'], r['n'])][1]} if (r['code'], r['n']) in owner else {}),
            **({'note': r['why']} if r['why'] else {})} for r in rows],
}
class D(yaml.SafeDumper): pass
D.add_representer(list, lambda dm, v: dm.represent_sequence('tag:yaml.org,2002:seq', v, flow_style=all(isinstance(x, str) and len(x) < 20 for x in v)))
with open('data/curriculum/english-triage.yml', 'w') as f:
    f.write('# ' + data['note'] + '\n')
    yaml.dump({k: v for k, v in data.items() if k != 'note'}, f, Dumper=D, sort_keys=False, allow_unicode=True, width=120)

# ---------- numbers for the plan ----------
stats = {}
for b in ('F-2', '3-5', '6-8', '9-10'):
    rs = [r for r in rows if band(r['year']) == b]
    stats[b] = dict(n=len(rs), site=sum(1 for r in rs if set(r['modes']) - {'class', 'specialist'}),
                    course=sum(1 for r in rs if (r['code'], r['n']) in owner),
                    **{m: sum(1 for r in rs if m in r['modes']) for m in MODE_WORDS})
json.dump(stats, open('.render-tmp/eng/stats.json', 'w'), indent=1)
print(stats)
