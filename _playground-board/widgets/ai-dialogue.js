// Scripted AI conversation laboratory for AI Foundations.
// This is NOT an AI model: prepared illustrative responses expose the effects
// of specifying and refining requests without requiring an account or network.
// mode: specify — build a request; every setting (context, format, kind of help) changes the prepared reply.
// mode: refine — each situation's first reply has one clear problem, and one follow-up fixes it best.
//   Reports t (follow-ups tried), b (situations where the best follow-up was found).
(function(B){
'use strict';
// A student's click, choice or typing counts as a move (B.moved), so board checks can tick.
function touch(el){if(el.dataset.wpTouch)return;el.dataset.wpTouch='1';['click','change','input'].forEach(function(t){el.addEventListener(t,function(){B.moved=true;},true);});}
var panel,spec,mode,choice,detail,form,help,tests,changes,history,found;
var topics={
  maths:{title:'Understanding fractions',vague:'Help me with fractions.',task:'Learn why fractions need a common denominator before adding.',context:'I am in Year 7 and can add fractions with the same denominator.',
    general:'Fractions show parts of a whole. You can add, subtract, multiply and divide them. What would you like to know?',
    generalSteps:'1. Learn what the top and bottom numbers mean. 2. Practise some fraction questions. 3. Check your answers.',
    generalAsk:'What would you like help with in fractions?',
    generalHint:'A general hint, since I don\'t know your task: draw the fractions as pieces of the same shape.',
    sample:'Consider 1/2 + 1/4. Rewrite 1/2 as 2/4, then add: 2/4 + 1/4 = 3/4. The parts must be the same size before you add them.',
    steps:'1. Pick a denominator both fractions can use (for 1/2 + 1/4, use 4). 2. Rewrite 1/2 as 2/4. 3. Add the tops: 2/4 + 1/4 = 3/4.',
    ask:'Before I explain: what do you think would go wrong if you added 1/2 + 1/4 by adding the tops and the bottoms?',
    hint:'Hint: halves and quarters are different-sized pieces. How many quarters make one half?'},
  science:{title:'Investigating plant growth',vague:'Tell me about plants.',task:'Plan a fair test of how light affects seedling growth.',context:'I have two seedlings, a ruler and seven days to observe.',
    general:'Plants make food from sunlight, water and air. They grow from seeds and need the right conditions. What do you want to know?',
    generalSteps:'1. Plants need light. 2. Plants need water. 3. Plants need soil or nutrients.',
    generalAsk:'What would you like to know about plants?',
    generalHint:'A general hint, since I don\'t know your task: think about what a plant needs to grow.',
    sample:'Put one seedling in a sunny window and one in a dim spot. Keep the water, soil and pot the same. Measure both heights each day for seven days.',
    steps:'1. Put one seedling in light and one in a dim spot. 2. Give both the same water, soil and pot. 3. Measure both heights each day for seven days. 4. Compare the totals.',
    ask:'Before I explain: if you change the light, which other things should stay the same for both seedlings?',
    hint:'Hint: a fair test changes only one thing. Which one thing are you changing?'},
  planning:{title:'Planning a school event',vague:'Help me with an event.',task:'Plan an inclusive lunchtime activity for a school club.',context:'We have 20 students, a 30-minute lunch break and no budget.',
    general:'Events need a purpose, a time, a place and people to run them. What kind of event is it?',
    generalSteps:'1. Choose a date. 2. Book a room. 3. Invite people.',
    generalAsk:'What kind of event are you planning, and who is it for?',
    generalHint:'A general hint, since I don\'t know your event: start with who is coming and how long you have.',
    sample:'Start with a quick welcome, then run two no-cost activities people can choose between, and finish with a two-minute share.',
    steps:'1. Welcome everyone (3 minutes). 2. Two no-cost activities to choose from (20 minutes). 3. Quick share and pack up (7 minutes).',
    ask:'Before I plan: what does your club enjoy doing, and is there anyone who might find a loud game hard to join?',
    hint:'Hint: with 30 minutes, leave time to welcome people and to pack up. How long does that leave for the activity itself?'}
};
// Refine situations: a goal, a first prompt, a first reply with one problem, and a prepared reply to each follow-up.
var strategies=['Give more context','Ask for a hint','Ask for a simpler explanation','Question an assumption'];
var prompts=['Here is what I have and what I need. Please use it.','Do not finish it for me. Give me one hint so I can take the next step.','Please use everyday words and one small example.','What have you assumed here, and how sure are you?'];
var situations=[
  {title:'Adding fractions',goal:'You want to learn how to add 1/2 + 1/4 yourself.',first:'How do I add 1/2 + 1/4?',reply:'1/2 + 1/4 = 3/4. Next question?',problem:'It did the thinking for you: you wanted to learn the method.',best:1,
   replies:['Thanks for the detail. 1/2 + 1/4 = 3/4.','Try this first: how many quarters make one half? Then add the quarters.','Simply: a half and a quarter make three quarters, 3/4.','I assumed you wanted the answer, and I am sure it is right: 3/4.'],
   notes:['More context, but it still hands you the answer.','This leaves the next step to you, which is what you wanted.','Simpler words, but it still gives the answer away.','It names its assumption, but still gives you the answer instead of the method.']},
  {title:'A fair test with seedlings',goal:'You want to test whether light affects plant growth. You have two seedlings, a ruler and seven days.',first:'How do I test if light affects how plants grow?',reply:'Grow 30 seedlings under a grow lamp, measure them with a light meter every day for six weeks, and graph the results.',problem:'It assumed equipment and time you do not have.',best:0,
   replies:['With two seedlings and a ruler: put one in a sunny window and one in a dim spot. Give both the same water and soil. Measure both every day for seven days.','Try this first: which things should stay the same for all 30 seedlings under the lamp?','Simply: grow lots of seedlings under a lamp and measure them for six weeks.','I assumed you have a lab with a grow lamp and six weeks. Tell me what you actually have.'],
   notes:['This fixes the problem: the plan now fits what you have.','A good question, but it is still about 30 seedlings and a lamp you do not have.','Simpler words, same impossible plan.','Closer: it spots its assumption, but you still have to give it the context.']},
  {title:'A lunchtime club activity',goal:'You want a plan you can actually use: 20 students, 30 minutes, no money.',first:'Plan a lunchtime activity for our club. 20 students, 30 minutes, no budget.',reply:'Run a facilitated ideation charrette with breakout cohorts, then a plenary synthesis.',problem:'It used words you do not understand.',best:2,
   replies:['Thanks. With 20 students and 30 minutes, run a facilitated ideation charrette with breakout cohorts.','Try this first: what would a charrette look like for 20 people?','Put people in groups of four. Each group has 10 minutes to invent a game. Then each group shows theirs in one minute. It costs nothing.','I assumed your club likes design workshops.'],
   notes:['You gave more context, but the words are still confusing.','A hint does not help when you do not know what the words mean.','This fixes the problem: plain words and a plan you can use.','True, but the words are still confusing.']},
  {title:'Studying for a test',goal:'You want a good way to study for a science test next week.',first:'What is the best way to study for my science test?',reply:'Everyone has a learning style. Find out if you are a visual, auditory or hands-on learner, and only study that way.',problem:'It made a confident claim that is not well supported.',best:3,
   replies:['Thanks. Since your test is next week, find your learning style first, then study only that way.','Try this first: are you a visual learner?','Simply: some people learn by seeing, some by hearing. Pick yours.','I assumed that studying in your "learning style" helps. Researchers have not found good evidence for that. Testing yourself with practice questions, spread over several days, has much better support. Check this with your teacher.'],
   notes:['More context, but the shaky claim is still there.','The hint builds on the shaky claim.','Simpler, but just as shaky.','This fixes the problem: questioning the claim showed it was not well supported. You can check the new advice too.']}
];
function el(tag,text,to){var n=document.createElement(tag);if(text!==undefined)n.textContent=text;(to||panel).appendChild(n);return n;}
function button(label,cb,to){var b=el('button',label,to);b.type='button';b.addEventListener('click',cb);return b;}
function menu(parent,label,opts,val,cb){var wrap=el('div',undefined,parent);el('label',label,wrap);var s=el('select',undefined,wrap);s.setAttribute('aria-label',label);opts.forEach(function(o){var p=el('option',o.label,s);p.value=o.value;});s.value=val;s.addEventListener('change',function(){cb(s.value);});return s;}
function nFound(){return Object.keys(found).length;}
function report(){B.say('Compared '+tests+' example responses; changes: '+changes);B.save({choice:choice,detail:detail,form:form,help:help,tests:tests,changes:changes,history:history,found:found});B.post({scope:{vars:{t:tests,c:changes,f:history.length,b:nFound()},points:{}}},'Compared '+tests+' responses.');}
function prompt(topic){
 var t=topics[topic];var chunks=[t.vague];
 if(detail)chunks=[t.task,t.context];
 if(form==='steps')chunks.push('Present a short numbered plan.');
 if(form==='questions')chunks.push('Ask me a question before explaining.');
 if(help==='hint')chunks.push('Give one hint rather than the finished answer.');
 return chunks.join(' ');
}
// Every setting changes the reply. A hint request wins over the format, because it changes the kind of help.
function response(topic){
 var t=topics[topic];
 if(!detail){
  if(help==='hint')return t.generalHint;
  if(form==='questions')return t.generalAsk;
  if(form==='steps')return t.generalSteps;
  return t.general;
 }
 if(help==='hint')return t.hint;
 if(form==='questions')return t.ask;
 if(form==='steps')return t.steps;
 return t.sample;
}
function frame(name,content){var box=el('section');box.style.border='1px solid #9aa8b6';box.style.borderRadius='8px';box.style.padding='12px';box.style.margin='10px 0';el('strong',name,box);el('p',content,box);return box;}
function specify(){
 el('h2','Write a useful request');
 el('p','This is a scripted comparison, not a live AI. The prepared replies show what different requests might lead to, not what any chatbot is guaranteed to say.');
 menu(panel,'Choose a context',Object.keys(topics).map(function(k){return {value:k,label:topics[k].title};}),choice,function(v){choice=v;changes++;draw();});
 var row=el('div'),check=el('input',undefined,row);check.type='checkbox';check.checked=detail;check.id='prompt-context';check.addEventListener('change',function(){detail=check.checked;changes++;draw();});
 var lab=el('label',' Include my goal and relevant context',row);lab.htmlFor='prompt-context';
 menu(panel,'How should the answer be presented?',[
 {value:'open',label:'No format specified'},{value:'steps',label:'Short steps'},{value:'questions',label:'Start with a question'}],form,function(v){form=v;changes++;draw();});
 menu(panel,'What kind of assistance?',[
 {value:'answer',label:'An explanation or plan'},{value:'hint',label:'A hint, not the finished answer'}],help,function(v){help=v;changes++;draw();});
 frame('Your constructed prompt',prompt(choice));
 button('Compare example response',function(){tests++;history.push({prompt:prompt(choice),reply:response(choice)});draw();});
 if(history.length){var h=history[history.length-1];frame('Prepared example response',h.reply);if(history.length>1){var prev=history[history.length-2];frame('Previous response (for comparison)',prev.reply);}}
 el('p','Compare: Did specifying context, response format or type of help improve the response for your purpose? Could a different type of help be better for learning?');
}
function refine(){
 var t=situations[choice];
 el('h2','Fix an AI reply');
 el('p','This is a scripted conversation, not a live AI. Each first reply has one clear problem. Find it, then choose the follow-up that fixes it.');
 menu(panel,'Choose a situation',situations.map(function(x,i){return {value:String(i),label:x.title};}),String(choice),function(v){choice=Number(v);history=[];changes++;draw();});
 frame('Your goal',t.goal);
 frame('First prompt',t.first);frame('First prepared reply',t.reply);
 el('h3','What would you ask next?');
 strategies.forEach(function(label,i){button(label,function(){history=[i];tests++;changes++;if(i===t.best)found[choice]=1;draw();});});
 if(history.length){
  var i=history[0];
  frame('Your follow-up',prompts[i]);
  frame('Prepared example reply',t.replies[i]);
  var verdict=el('p');verdict.setAttribute('role','status');
  var strong=el('strong',i===t.best?'Fixed. ':'Not fixed yet. ',verdict);strong.style.color=i===t.best?'#1a6e2e':'#9a3412';
  verdict.appendChild(document.createTextNode(t.notes[i]+(i===t.best?' The problem was: '+t.problem.charAt(0).toLowerCase()+t.problem.slice(1):' Look at the first reply again: what is wrong with it?')));
  button('Try another follow-up',function(){history=[];draw();});
 }
 el('p','Situations where you found the best follow-up: '+nFound()+' of '+situations.length+'. A follow-up cannot guarantee accuracy: check important claims yourself.');
}
function draw(){panel.replaceChildren();if(mode==='specify')specify();else refine();report();}
B.widget('ai-dialogue',{
 sections:['gpanel'],label:function(){return 'Scripted AI interaction comparison';},
 parse:function(s){s.mode=s.mode||'specify';if(!/^(specify|refine)$/.test(s.mode))throw Error('mode: specify or refine');},
 start:function(fresh){panel=B.el('gpanel');touch(panel);spec=B.spec;mode=spec.mode;var v=fresh?null:B.saved();
  if(mode==='specify')choice=v&&topics[v.choice]?v.choice:'maths';else choice=v&&Number.isInteger(v.choice)&&situations[v.choice]?v.choice:0;
  detail=v&&typeof v.detail==='boolean'?v.detail:false;form=v&&['open','steps','questions'].includes(v.form)?v.form:'open';help=v&&['answer','hint'].includes(v.help)?v.help:'answer';tests=v&&Number.isInteger(v.tests)?v.tests:0;changes=v&&Number.isInteger(v.changes)?v.changes:0;history=v&&Array.isArray(v.history)?v.history:[];found=v&&v.found&&typeof v.found==='object'?v.found:{};
  if(mode==='refine')history=history.filter(function(i){return Number.isInteger(i)&&i>=0&&i<4;}).slice(-1);
  draw();},
 redraw:function(){if(panel)draw();}
});
})(WPB);
