# Courses (drop-in skill sets) mapped to nodes, and coverage. Reads triage.json.
import json, collections
d = json.load(open('.render-tmp/eng/triage.json'))
rows = d['rows']
ROW = {(r['code'], r['n']): r for r in rows}
code = lambda y, s: f'AC9E{"F" if y == 0 else y}{s}'

def all_nodes(*codes):
    return [(c, r['n']) for c in codes for r in rows if r['code'] == c]
def nodes(c, *ns):
    return [(c, n) for n in ns]

# id, title, pathway, years, status, wave, board, nodes, summary
COURSES = []
def course(cid, title, pathway, years, status, wave, board, ns, summary, warm=(), ext=()):
    COURSES.append(dict(id=cid, title=title, pathway=pathway, years=years, status=status, wave=wave, board=board,
                        nodes=ns, warm=list(warm), ext=list(ext), summary=summary))

course('cohesion', 'Holding writing together', 'How writing works', '6-8', 'built', 0, 'cohesion (link, chain, parts)',
       all_nodes(code(6, 'LA04'), code(7, 'LA04'), code(8, 'LA04')),
       'Pointing words, joining words, sentence starts, repetition and word chains, topic sentences, overviews and conclusions, claim-evidence-explanation; repair-the-report challenge.',
       warm=all_nodes(code(4, 'LA04'), code(5, 'LA04')), ext=nodes(code(9, 'LA04'), 1) + nodes(code(10, 'LA04'), 1))

course('sentences', 'Building sentences', 'How writing works', '6-8', 'built', 1, 'sentence (build, punct, write) with cohesion parts, chain and gaps',
       all_nodes(code(6, 'LA05'), code(7, 'LA05'), code(8, 'LA05'), code(6, 'LA06'), code(7, 'LA06')),
       'Clauses and how they join, clause order and emphasis, noun groups, precise verbs and adverb groups, embedded clauses, compound-complex sentences, tense consistency, and choosing a sentence shape on purpose.',
       warm=all_nodes(code(4, 'LA06'), code(5, 'LA05'), code(5, 'LA06'), code(4, 'LA07')),
       ext=all_nodes(code(9, 'LA05'), code(10, 'LA05'), code(10, 'LA06')))

course('punctuation', 'Punctuation for meaning', 'How writing works', '6-8', 'built', 1, 'sentence (punct, build, write) with cohesion parts and gaps',
       all_nodes(code(6, 'LA09'), code(7, 'LA09'), code(8, 'LA09')),
       'Commas that change meaning, colons, brackets, semicolons and dashes, each tried on sentences where the mark matters.',
       warm=all_nodes(code(5, 'LA09'), code(3, 'LA11'), code(4, 'LA12')), ext=all_nodes(code(10, 'LA09')))

course('words', 'Language for people and situations', 'How writing works', '6-8', 'built', 1, 'wordchoice (scale, swap) with cohesion chain and parts',
       all_nodes(code(6, 'LA01'), code(7, 'LA01'), code(8, 'LA01')),
       'Formality and register, language and identity, language that builds group roles, and words with shades of meaning (formal, intense, positive or negative).',
       warm=all_nodes(code(4, 'LA01'), code(5, 'LA01'), code(4, 'LA11')) + nodes(code(5, 'LA08'), 1),
       ext=all_nodes(code(9, 'LA01'), code(10, 'LA01')))

course('persuade', 'Judging and persuading', 'How writing works', '6-8', 'planned', 1, 'cohesion chain mode (colour the opinion words) + word choice board',
       all_nodes(code(6, 'LA02'), code(7, 'LA02'), code(8, 'LA02'), code(7, 'LY03'), code(8, 'LY03')),
       'Fact or opinion, emotive language and bias, the vocabulary of evaluation, backing up a judgement, irony and hyperbole, and how language choices shift with audience and purpose.',
       warm=all_nodes(code(4, 'LA02'), code(5, 'LA02')),
       ext=all_nodes(code(9, 'LA02'), code(10, 'LA02'), code(9, 'LY03'), code(10, 'LY03')))

course('expert', 'Writing like a subject expert', 'How writing works', '8-10', 'planned', 3, 'sentence board (turn a process into a thing) + cohesion link mode',
       all_nodes(code(7, 'LA08'), code(8, 'LA08'), code(8, 'LA06')),
       'Technical and academic words, nominalisation, abstract nouns that sum up, quoting and referencing. Cross-linked from Science and humanities.',
       ext=all_nodes(code(9, 'LA06'), code(9, 'LA09'), code(10, 'LA08')) + nodes(code(9, 'LA04'), 2, 3))

course('texts', 'How texts are built', 'How texts work', '6-8', 'built', 0, 'cohesion (parts, chain, gaps)',
       all_nodes(code(6, 'LA03'), code(7, 'LA03'), code(8, 'LA03'), code(6, 'LY03'), code(7, 'LY04'), code(8, 'LY04')),
       'Stages and phases of recounts, reports, explanations, reviews and arguments; features by purpose; purpose drives structure; idea patterns (cause and effect, compare and contrast, problem and solution, claim and support); what comes first; built for a reader; hybrids; build-an-argument challenge (genre cycle). Years 9-10 nodes wait for the Years 9-10 phase (not wider steps).',
       warm=all_nodes(code(4, 'LA03'), code(5, 'LA03'), code(4, 'LY03'), code(5, 'LY03')),
       ext=all_nodes(code(9, 'LA03'), code(10, 'LA03'), code(9, 'LY04'), code(10, 'LY04')))

course('reading', 'Reading closely', 'How texts work', '6-8', 'planned', 2, 'highlighter (cohesion chain mode) + parts mode for summaries',
       all_nodes(code(6, 'LY05'), code(7, 'LY05'), code(8, 'LY05'), code(6, 'LY04')),
       'Main idea and summary, inferring beyond the literal, skimming and scanning, using a text\'s signposts, comparing sources and judging credibility. Strategies on short texts, never test drill; links to ICT judging information.',
       warm=all_nodes(code(5, 'LY05'), code(5, 'LY04'), code(4, 'LY05')),
       ext=all_nodes(code(9, 'LY05'), code(10, 'LY05')))

course('images', 'Images and multimodal texts', 'How texts work', '6-8', 'planned', 2, 'new: image board (drawn scenes with angle, distance, gaze and framing; panel sequences)',
       all_nodes(code(6, 'LA07'), code(7, 'LA07'), code(8, 'LA07')),
       'How diagrams, tables and maps carry meaning; vectors, angle and social distance; image sequence and juxtaposition; visual allusion in made-up adverts.',
       warm=all_nodes(code(5, 'LA07'), code(4, 'LA10'), code(3, 'LA09')),
       ext=all_nodes(code(9, 'LA07'), code(10, 'LA07')) + nodes(code(10, 'LA04'), 2))

course('editing', 'Plan, draft and edit', 'How texts work', '6-8', 'planned', 3, 'cohesion write mode + reasoning check (self-check against criteria)',
       all_nodes(code(6, 'LY06'), code(7, 'LY06'), code(8, 'LY06')),
       'The writing process as drop-in moves: plan for purpose and audience, draft with deliberate choices, and edit Nib\'s draft then your own against a checklist. Extended drafting stays in class.',
       warm=all_nodes(code(5, 'LY06'), code(4, 'LY06')), ext=all_nodes(code(9, 'LY06'), code(10, 'LY06')))

course('craft', 'How authors craft stories', 'Reading literature', '6-8', 'planned', 2, 'cohesion chain and link modes on extracts + open answer',
       all_nodes(code(6, 'LE03'), code(7, 'LE03'), code(8, 'LE03'), code(7, 'LE05'), code(8, 'LE05'), code(7, 'LE06'), code(6, 'LA08'), code(8, 'LE04')),
       'Figurative and emotive language and the words to talk about it, character techniques, setting and mood, point of view, an author\'s style, devices that build character and layers of meaning, tone through sentence patterns, and how texts position readers. Extracts written for the site or public domain.',
       warm=all_nodes(code(4, 'LE03'), code(5, 'LE03')),
       ext=all_nodes(code(9, 'LE05'), code(10, 'LE05'), code(9, 'LE04'), code(10, 'LE06'), code(9, 'LA08')))

course('poetry', 'Poetry: sound and imagery', 'Reading literature', '5-6', 'planned', 2, 'cohesion chain mode (colour sound devices) + a stress-marking mode later',
       all_nodes(code(5, 'LE04'), code(6, 'LE04')),
       'Simile, metaphor and personification, alliteration, assonance and onomatopoeia, imagery that builds feeling, and ballad rhythm on public-domain Australian ballads.',
       warm=all_nodes(code(3, 'LE04'), code(4, 'LE04')))

course('stories', 'Writing stories and poems', 'Reading literature', '6-8', 'planned', 3, 'cohesion write mode + model texts',
       all_nodes(code(6, 'LE05'), code(7, 'LE07'), code(8, 'LE06')),
       'Reading as a writer, experimenting with devices, adapting a source text, and editing for effect, in short pieces. Longer drafting in class.',
       warm=all_nodes(code(5, 'LE05')), ext=all_nodes(code(9, 'LE06'), code(10, 'LE08')))

course('respond', 'Responding to literature', 'Reading literature', '6-8', 'second pass', 3, 'workshop format + open-answer mode (model range, highlight your evidence)',
       all_nodes(code(6, 'LE02'), code(7, 'LE02'), code(8, 'LE02'), code(6, 'LE01'), code(7, 'LE01'), code(8, 'LE01'), code(7, 'LE04'), code(6, 'LY01'), code(7, 'LY01'), code(8, 'LY01')),
       'Forming and justifying an opinion, engaging with others\' views, context and values, aesthetic and social value. Works on the class text; the site scaffolds the talk and the write-up.',
       warm=all_nodes(code(5, 'LE02'), code(5, 'LE01'), code(5, 'LY01')),
       ext=all_nodes(code(9, 'LE02'), code(10, 'LE02'), code(9, 'LE01'), code(10, 'LE01'), code(9, 'LE03'), code(10, 'LE03'), code(10, 'LE04'), code(10, 'LE07'), code(9, 'LY01'), code(10, 'LY01')))

course('speaking', 'Speaking to an audience', 'Speaking and listening', '6-8', 'planned', 2, 'speech shape + cohesion cue mode',
       all_nodes(code(6, 'LY07'), code(7, 'LY07'), code(8, 'LY07')) + nodes(code(7, 'LY02'), 2),
       'Purpose and audience, structure, script to cue cards, voice and visuals, rehearsal, and judging spoken texts from transcripts. Delivery in class.',
       warm=all_nodes(code(4, 'LY07'), code(5, 'LY07')), ext=all_nodes(code(9, 'LY07'), code(10, 'LY07')))

course('talk', 'Discussion moves', 'Speaking and listening', '6-8', 'second pass', 3, 'workshop format; transcript boards',
       all_nodes(code(6, 'LY02'), code(8, 'LY02')) + nodes(code(7, 'LY02'), 1),
       'Paraphrasing, questioning, building on and challenging others, and hearing stated and implied meaning. Talk moves on cards, practised in class workshops.',
       warm=all_nodes(code(5, 'LY02')), ext=all_nodes(code(9, 'LY02'), code(10, 'LY02')))

course('spelling', 'Spelling through word parts', 'Words and spelling', '5-8', 'planned', 3, 'new: word builder board + practice pages (new words each time)',
       nodes(code(6, 'LY08'), 1, 2) + all_nodes(code(6, 'LY09'), code(7, 'LY08'), code(8, 'LY08')) + nodes(code(5, 'LA08'), 2, 3),
       'Base words, prefixes and suffixes, Greek and Latin roots, spelling generalisations and word families, with endless practice. Spelling for effect at 9-10.',
       warm=all_nodes(code(5, 'LY08'), code(5, 'LY09'), code(5, 'LY10'), code(4, 'LY10'), code(4, 'LY11')),
       ext=all_nodes(code(9, 'LY08'), code(10, 'LY08')))

# coverage
own = collections.defaultdict(list)
for c in COURSES:
    for part in ('nodes', 'warm', 'ext'):
        for k in c[part]:
            assert k in ROW, (c['id'], k)
            own[k].append((c['id'], part))
dups = {k: v for k, v in own.items() if len(v) > 1}
band = lambda y: 'F-2' if y <= 2 else '3-5' if y <= 5 else '6-8' if y <= 8 else '9-10'
for b in ('3-5', '6-8', '9-10'):
    rs = [r for r in rows if band(r['year']) == b]
    siteable = [r for r in rs if set(r['modes']) - {'class', 'specialist'}]
    cov = [r for r in siteable if (r['code'], r['n']) in own]
    print(b, 'nodes', len(rs), 'site can help', len(siteable), 'in a course', len(cov))
    miss = [r for r in siteable if (r['code'], r['n']) not in own]
    for r in miss: print('   not in a course:', r['code'], 'n%d' % r['n'], r['thread'], '+'.join(r['modes']), r['label'])
print('dups', dups)
json.dump(COURSES, open('.render-tmp/eng/courses.json', 'w'), indent=1)
