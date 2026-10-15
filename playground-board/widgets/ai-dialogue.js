// Scripted AI conversation laboratory for AI Foundations.
// This is NOT an AI model: prepared illustrative responses expose the effects
// of specifying and refining requests without requiring an account or network.
(function(B){
'use strict';
var panel,spec,mode,choice,detail,form,help,tests,changes,history;
var topics={
  maths:{title:'Understanding fractions',vague:'Help me with fractions.',task:'Learn why fractions need a common denominator before adding.',context:'I am in Year 7 and can add fractions with the same denominator.',sample:'Consider 1/2 + 1/4. Rewrite 1/2 as 2/4, then add 2/4 + 1/4.',question:'What denominator could both halves and quarters use?'},
  science:{title:'Investigating plant growth',vague:'Tell me about plants.',task:'Plan a fair test of how light affects seedling growth.',context:'I have two seedlings, a ruler and seven days to observe.',sample:'Use similar seedlings and keep water and soil the same. Vary light and record height daily.',question:'If you change the light, what else should stay the same?'},
  planning:{title:'Planning a school event',vague:'Help me with an event.',task:'Plan an inclusive lunchtime activity for a school club.',context:'We have 20 students, a 30-minute lunch break and no budget.',sample:'Start with a quick welcome, offer two no-cost activities, and finish with a brief reflection.',question:'Who is attending, and what time and resources do you have?'}
};
var followups=[
  {label:'Give more context',prompt:'Here is what I already know and what I need. Please use it.',reply:'Thanks. I can tailor the explanation to your starting point and constraints.',note:'Useful when the first response assumed the wrong situation.'},
  {label:'Ask for a hint',prompt:'Do not finish the task for me. Ask one question to help me take the next step.',reply:'Try this first: ',note:'Useful when you are learning and need to practise your own thinking.'},
  {label:'Ask for a simpler explanation',prompt:'Use everyday words and one small example.',reply:'Here is one small example: ',note:'Useful if the first response used language you do not understand.'},
  {label:'Question an assumption',prompt:'What have you assumed about my task, and what should I check?',reply:'I may have assumed details not included in the question. Check the actual requirements and evidence.',note:'Useful when the answer sounds confident but lacks enough information.'}
];
function el(tag,text,to){var n=document.createElement(tag);if(text!==undefined)n.textContent=text;(to||panel).appendChild(n);return n;}
function button(label,cb,to){var b=el('button',label,to);b.type='button';b.addEventListener('click',cb);return b;}
function menu(parent,label,opts,val,cb){var wrap=el('div',undefined,parent);el('label',label,wrap);var s=el('select',undefined,wrap);s.setAttribute('aria-label',label);opts.forEach(function(o){var p=el('option',o.label,s);p.value=o.value;});s.value=val;s.addEventListener('change',function(){cb(s.value);});return s;}
function report(){B.say('Compared '+tests+' example responses; changes: '+changes);B.save({choice:choice,detail:detail,form:form,help:help,tests:tests,changes:changes,history:history});B.post({scope:{vars:{t:tests,c:changes,f:history.length},points:{}}},'Compared '+tests+' responses.');}
function prompt(topic){
 var t=topics[topic];var chunks=[t.vague];
 if(detail)chunks=[t.task,t.context];
 if(form==='steps')chunks.push('Present a short numbered plan.');
 if(form==='questions')chunks.push('Ask me a question before explaining.');
 if(help==='hint')chunks.push('Give one hint rather than the finished answer.');
 return chunks.join(' ');
}
function response(topic){
 var t=topics[topic];
 if(!detail)return 'Here is some general information about '+t.title.toLowerCase()+'. What would you like to know?';
 if(help==='hint'||form==='questions')return t.question;
 if(form==='steps')return '1. '+t.sample+' 2. Check the result against the original goal.';
 return t.sample;
}
function frame(name,content){var box=el('section');box.style.border='1px solid #9aa8b6';box.style.borderRadius='8px';box.style.padding='12px';box.style.margin='10px 0';el('strong',name,box);el('p',content,box);}
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
 var t=topics[choice];
 el('h2','Improve an AI conversation');
 el('p','This is a scripted conversation. You choose a follow-up strategy and inspect a prepared example response; a real AI might react differently.');
 menu(panel,'Choose a situation',Object.keys(topics).map(function(k){return {value:k,label:topics[k].title};}),choice,function(v){choice=v;history=[];changes++;draw();});
 frame('First prompt',t.vague);frame('First prepared answer','Here is some general advice about '+t.title.toLowerCase()+'.');
 el('h3','What would you ask next?');
 followups.forEach(function(f,i){button(f.label,function(){history.push(i);tests++;changes++;draw();});});
 if(history.length){
 var last=followups[history[history.length-1]];
 frame('Your follow-up',last.prompt);
 frame('Prepared example reply',last.reply+(history[history.length-1]===1||history[history.length-1]===2?(history[history.length-1]===1?t.question:t.sample):''));
 el('p','Why this might help: '+last.note);
 button('Try another follow-up',function(){history=[];draw();});
 }
 el('p','A follow-up cannot guarantee accuracy. Check important claims against independent evidence. Choose assistance that supports your purpose, not just a polished answer.');
}
function draw(){panel.replaceChildren();if(mode==='specify')specify();else refine();report();}
B.widget('ai-dialogue',{
 sections:['gpanel'],label:function(){return 'Scripted AI interaction comparison';},
 parse:function(s){s.mode=s.mode||'specify';if(!/^(specify|refine)$/.test(s.mode))throw Error('mode: specify or refine');},
 start:function(fresh){panel=B.el('gpanel');spec=B.spec;mode=spec.mode;var v=fresh?null:B.saved();choice=v&&topics[v.choice]?v.choice:'maths';detail=v&&typeof v.detail==='boolean'?v.detail:false;form=v&&['open','steps','questions'].includes(v.form)?v.form:'open';help=v&&['answer','hint'].includes(v.help)?v.help:'answer';tests=v&&Number.isInteger(v.tests)?v.tests:0;changes=v&&Number.isInteger(v.changes)?v.changes:0;history=v&&Array.isArray(v.history)?v.history:[];draw();},
 redraw:function(){if(panel)draw();}
});
})(WPB);
