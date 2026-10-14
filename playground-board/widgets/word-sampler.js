// Shared six-face word sampler for manual and automated lessons.
(function(B){
'use strict';
var s,panel,rolls=[],manual=0,auto=0;
function node(t,v){var e=document.createElement(t);if(v!==undefined)e.textContent=v;return e;}
function add(t,v,to){var e=node(t,v);(to||panel).appendChild(e);return e;}
function draw(){
panel.replaceChildren();
add('h2',s.mode==='manual'?'Roll a word':'Automate word sampling');
add('p','The cat sat on the … Each die face is equally likely.');
var table=add('table');s.words.forEach(function(w,i){var row=add('tr',undefined,table);add('td',String(i+1),row);add('td',w,row);});
function button(label,n){var b=add('button',label);b.type='button';b.onclick=function(){for(var i=0;i<n;i++)rolls.push(Math.floor(Math.random()*6));if(n===1)manual++;else auto+=n;B.moved=true;draw();};}
button('Roll once',1);
if(s.mode==='automatic'){button('Run 10',10);button('Run 100',100);button('Run 1000',1000);}
var reset=add('button','Clear');reset.onclick=function(){rolls=[];manual=0;auto=0;B.moved=true;draw();};
add('p','Total: '+rolls.length+'; manual: '+manual+'; automated: '+auto);
var counts={};s.words.forEach(function(w){counts[w]=0;});rolls.forEach(function(i){counts[s.words[i]]++;});
var result=add('table');Object.keys(counts).forEach(function(w){var tr=add('tr',undefined,result);add('td',w,tr);add('td',String(counts[w]),tr);add('td',rolls.length?(100*counts[w]/rolls.length).toFixed(1)+'%':'—',tr);});
add('p','Compare observed results with the fixed die-face mapping.');
B.say(rolls.length+' rolls');B.save({rolls:rolls,manual:manual,auto:auto});
B.post({scope:{vars:{u:rolls.length,c:manual,a:auto},points:{}}},rolls.length+' rolls');
}
B.widget('word-sampler',{sections:['gpanel'],label:function(){return 'Word sampling';},
parse:function(x){x.words=x.items.filter(function(i){return i.kind==='ending';}).map(function(i){return i.value.trim();});if(x.words.length!==6)throw Error('Exactly six endings required');x.mode=x.mode||'manual';if(!/^(manual|automatic)$/.test(x.mode))throw Error('Invalid mode');},
start:function(fresh){s=B.spec;panel=B.el('gpanel');var v=fresh?null:B.saved();rolls=v&&Array.isArray(v.rolls)?v.rolls.filter(function(i){return Number.isInteger(i)&&i>=0&&i<6;}).slice(0,10000):[];manual=v&&Number.isInteger(v.manual)?v.manual:0;auto=v&&Number.isInteger(v.auto)?v.auto:0;draw();},
redraw:function(){if(panel)draw();}
});
})(WPB);
