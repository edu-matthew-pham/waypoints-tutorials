// Small, account-free learning decision labs. These are prepared activities, NOT AI outputs.
// Modes: practise (scaffolded hints), verify (inspect independent evidence), delegate (situational judgement).
(function(B){
'use strict';
var root,mode,S;
var cases=[
 {title:'Studying for a maths test',goal:'Learn to add fractions independently',options:['Ask for a hint and attempt the problem','Ask AI to finish every question','Avoid any help, even after getting stuck'],feedback:['Useful: the learner still practises the thinking and can check errors.','A complete answer may finish work without developing this skill.','Independent work is valuable, but a well-chosen hint can help overcome an obstacle.'],strong:0},
 {title:'Preparing a timetable',goal:'Format an already checked list of dates into a table',options:['Re-enter everything manually','Ask AI to format the supplied dates, then check them','Let AI invent the dates from memory'],feedback:['Possible, but repeated formatting is not usually the main learning goal.','Useful delegation: automate presentation while checking that the dates remain accurate.','Unverified, invented dates are not reliable evidence.'],strong:1},
 {title:'Writing an explanation',goal:'Understand why a science experiment needs controlled variables',options:['Ask AI to write the explanation to submit unchanged','Write your own explanation and request feedback','Ask AI for an unrelated summary'],feedback:['This may complete the product without showing or developing understanding.','Useful: your explanation provides evidence of your thinking; feedback can guide revision.','That does not address your learning goal.'],strong:1},
 {title:'Comparing sources',goal:'Decide whether an important claim is supported by evidence',options:['Ask AI whether it is confident','Find relevant evidence and compare it with the claim','Assume a fluent paragraph must be correct'],feedback:['Confidence alone is not an independent check.','Useful: evaluate the claim against evidence that can be inspected.','Fluency cannot establish whether a claim is true.'],strong:1}
];
var evidence=[
 {claim:'Every seedling with eight hours of light grew taller than every seedling with four hours.',source:'Measured height increase after seven days (cm): four hours = 2, 3, 5; eight hours = 3, 4, 6.',answer:'contradicted',why:'A four-hour seedling grew 5 cm, more than two eight-hour seedlings. The word every is not supported.'},
 {claim:'The average recorded growth was higher in the eight-hour group.',source:'Measured height increase after seven days (cm): four hours = 2, 3, 5; eight hours = 3, 4, 6.',answer:'supported',why:'The four-hour average is 10/3 cm; eight-hour average is 13/3 cm. This supports a comparison in these measurements, not a universal rule.'},
 {claim:'Giving seedlings eight hours of light always makes them healthier.',source:'Measured height increase after seven days (cm): four hours = 2, 3, 5; eight hours = 3, 4, 6. No health measures were recorded.',answer:'insufficient',why:'The measurements concern height increase only, not overall health. You would need suitable health evidence.'},
 {claim:'All seedlings in the eight-hour group grew by at least 3 cm.',source:'Measured height increase after seven days (cm): four hours = 2, 3, 5; eight hours = 3, 4, 6.',answer:'supported',why:'The recorded eight-hour values are 3, 4 and 6 cm. This says nothing about unmeasured seedlings.'}
];
var practice={
 maths:{title:'Fractions',challenge:'Try 1/2 + 1/4. Explain why you changed a denominator.',hints:['Look for a denominator shared by halves and quarters.','One half is equivalent to two quarters.'],worked:'1/2 = 2/4, so 2/4 + 1/4 = 3/4. The fractions must name equally sized parts before adding.',transfer:'Try 1/3 + 1/6 independently. Explain your method.'},
 science:{title:'Fair testing',challenge:'You want to investigate whether light affects plant growth. What must stay the same?',hints:['Change one main factor at a time.','Keep water, soil and type of plant comparable when changing light.'],worked:'Change the light exposure and compare plant growth. Keep other relevant conditions as similar as possible. Replicate measurements to reduce uncertainty.',transfer:'Now design a fair test of how water affects plant growth. What changes and what stays the same?'}
};
function el(tag,txt,parent){var e=document.createElement(tag);if(txt!==undefined)e.textContent=txt;(parent||root).appendChild(e);return e;}
function btn(txt,fn,parent){var b=el('button',txt,parent);b.type='button';b.addEventListener('click',fn);return b;}
function box(label,txt){var sec=el('section');sec.style.cssText='padding:12px;border:1px solid #a2acb8;border-radius:8px;margin:10px 0';el('strong',label,sec);el('p',txt,sec);}
function select(label,values,selected,callback){var w=el('div');el('label',label,w);var s=el('select',undefined,w);s.setAttribute('aria-label',label);values.forEach(function(v){var o=el('option',v.name,s);o.value=v.key;});s.value=selected;s.addEventListener('change',function(){callback(s.value);});return s;}
function report(){B.say('Activities completed: '+S.tests+'; choices made: '+S.choices);B.save({state:S});B.post({scope:{vars:{t:S.tests,c:S.choices,h:S.hints},points:{}}},'Completed '+S.tests+' checks.');}
function practise(){
 el('h2','Choose help that helps you learn');
 el('p','This is a prepared practice activity, not a chatbot. It shows how different amounts of help can change what you do.');
 select('Choose a learning challenge',Object.keys(practice).map(function(k){return {key:k,name:practice[k].title};}),S.topic,function(k){S.topic=k;S.level=0;S.attempt='';S.transfer='';S.choices++;render();});
 var q=practice[S.topic];box('First, try independently',q.challenge);
 var input=el('textarea');input.rows=3;input.style.width='100%';input.setAttribute('aria-label','Your own attempt');input.placeholder='Write or explain your attempt here before requesting help.';input.value=S.attempt;input.addEventListener('input',function(){S.attempt=input.value;report();});
 var buttons=el('div');
 btn('One hint',function(){S.level=Math.min(2,Math.max(1,S.level+1));S.hints++;S.choices++;render();},buttons);
 btn('Show worked example',function(){S.level=3;S.choices++;render();},buttons);
 if(S.level>0){box('Help requested',S.level===1?q.hints[0]:S.level===2?q.hints[1]:q.worked);}
 if(S.level===3){
 box('Try a different question',q.transfer);
 var tr=el('textarea');tr.rows=3;tr.style.width='100%';tr.setAttribute('aria-label','Your independent transfer attempt');tr.value=S.transfer;tr.placeholder='Explain the new task without copying the earlier answer.';
 tr.addEventListener('input',function(){S.transfer=tr.value;report();});
 btn('Record my independent attempt',function(){if(!S.transfer.trim()){B.say('Write an attempt before recording it.');return;}S.tests++;S.choices++;render();});
 }
 btn('Start the challenge again',function(){S.level=0;S.attempt='';S.transfer='';S.choices++;render();});
 el('p','Compare: What were you able to do yourself? Did a hint preserve more of the practice than revealing the finished answer?');
}
function verify(){
 el('h2','Check a claim against evidence');
 el('p','These are invented classroom measurements and example AI-style claims. The measurements are available independently of the claim. Read the actual numbers before deciding.');
 select('Choose a claim',evidence.map(function(e,i){return {key:String(i),name:'Claim '+(i+1)};}),String(S.item),function(v){S.item=Number(v);S.choice='';S.result='';S.choices++;render();});
 var e=evidence[S.item];box('Claim to investigate',e.claim);box('Evidence record',e.source);
 select('What does this evidence show?',[
 {key:'',name:'Choose your judgement'},{key:'supported',name:'Supported by this evidence'},{key:'contradicted',name:'Contradicted by this evidence'},{key:'insufficient',name:'Not enough relevant evidence'}],S.choice,function(v){S.choice=v;S.choices++;render();});
 btn('Check my judgement',function(){if(!S.choice){B.say('Choose a judgement first.');return;}S.result=(S.choice===e.answer?'This judgement fits the evidence. ':'Reconsider this evidence. ')+e.why;S.tests++;S.choices++;render();});
 if(S.result)box('Evidence-based feedback',S.result);
 el('p','Important: One dataset may support a narrow claim without justifying a broad claim about every possible situation.');
}
function delegate(){
 el('h2','What should you let AI do?');
 el('p','Consider both the task and the purpose. There is no rule that AI must always be used, or always avoided.');
 select('Choose a situation',cases.map(function(e,i){return {key:String(i),name:e.title};}),String(S.item),function(v){S.item=Number(v);S.choice='';S.result='';S.choices++;render();});
 var a=cases[S.item];box('Your goal',a.goal);
 var opts=a.options.map(function(t,i){return {key:String(i),name:t};});
 select('Your decision', [{key:'',name:'Choose an approach'}].concat(opts),S.choice,function(v){S.choice=v;S.choices++;render();});
 btn('Explore consequences',function(){if(S.choice===''){B.say('Select an approach first.');return;}var i=Number(S.choice);S.result=a.feedback[i]+(i===a.strong?' This is a strong choice for the stated goal.':' A different choice may serve this goal better.');S.tests++;S.choices++;render();});
 if(S.result)box('Consider this',S.result);
 el('p','Ask yourself: What is the goal? Which thinking develops my skill? What can be delegated without losing that learning? How will I check the result?');
}
function render(){root.replaceChildren();if(mode==='practise')practise();else if(mode==='verify')verify();else delegate();report();}
B.widget('ai-learning-choices',{sections:['gpanel'],label:function(){return 'Learning with AI decision activities';},
parse:function(s){s.mode=s.mode||'practise';if(!['practise','verify','delegate'].includes(s.mode))throw Error('Mode must be practise, verify or delegate');},
start:function(fresh){root=B.el('gpanel');mode=B.spec.mode;var saved=fresh?null:B.saved(),v=saved&&saved.state;S={topic:v&&practice[v.topic]?v.topic:'maths',item:v&&Number.isInteger(v.item)?Math.max(0,Math.min(mode==='verify'?evidence.length-1:cases.length-1,v.item)):0,choice:v&&typeof v.choice==='string'?v.choice:'',result:v&&v.result||'',level:v&&Number.isInteger(v.level)?v.level:0,attempt:v&&v.attempt||'',transfer:v&&v.transfer||'',tests:v&&Number.isInteger(v.tests)?v.tests:0,choices:v&&Number.isInteger(v.choices)?v.choices:0,hints:v&&Number.isInteger(v.hints)?v.hints:0};render();},
redraw:function(){if(root)render();}
});
})(WPB);
