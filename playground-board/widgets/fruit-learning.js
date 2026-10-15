// Transparent Year 7 classifier: nearest examples or an inspectable weighted decision.
// Features are yellow colour (0/1) and long shape (0/1). This is NOT a neural network.
(function(B){
'use strict';
var spec,root,examples=[],tested=0,edits=0,weights=[1,1],mode='examples';
function el(tag,text,parent){var e=document.createElement(tag);if(text!==undefined)e.textContent=text;(parent||root).appendChild(e);return e;}
function button(text,action,parent){var b=el('button',text,parent);b.type='button';b.addEventListener('click',action);return b;}
function predict(x,y){
 if(mode==='weights'){var score=weights[0]*(x-.5)+weights[1]*(y-.5);return {label:score>0?'banana':'apple',detail:'Score: '+score.toFixed(2)};}
 var best=[],dist=Infinity;
 examples.forEach(function(e){var d=Math.abs(x-e.x)+Math.abs(y-e.y);if(d<dist){dist=d;best=[e];}else if(d===dist)best.push(e);});
 var a=best.filter(function(e){return e.label==='apple';}).length,b=best.length-a;
 return {label:b>a?'banana':a>b?'apple':'unsure',detail:'Closest examples: '+best.length+'; distance: '+dist};
}
function report(){B.say('Training examples: '+examples.length+'. Tests: '+tested+'.');B.save({examples:examples,weights:weights,tested:tested,edits:edits});B.post({scope:{vars:{n:examples.length,t:tested,c:edits,w:Math.round(weights[1]*10)},points:{}}},'Model tested '+tested+' times');}
function render(){
 root.replaceChildren();el('h2','Teach a fruit sorter');
 el('p','A yellow colour and a long shape are two clues. Real fruit varies, so neither clue is a rule.');
 if(mode==='weights'){
  el('p','A single decision unit combines two clues. Change how strongly each clue matters. These weights are chosen by you, not learned by a neural network.');
  ['Yellow colour','Long shape'].forEach(function(name,i){var line=el('div');el('strong',name+': '+weights[i].toFixed(1)+' ',line);button('Less',function(){weights[i]=Math.max(-3,Math.round((weights[i]-.5)*10)/10);edits++;render();},line);button('More',function(){weights[i]=Math.min(3,Math.round((weights[i]+.5)*10)/10);edits++;render();},line);});
 }else{
  el('p','Training examples (the label is the answer the model is taught):');
  var table=el('table'),h=el('tr',undefined,table);['Colour','Shape','Label',''].forEach(function(t){el('th',t,h);});
  examples.forEach(function(e,i){var tr=el('tr',undefined,table);el('td',e.x?'yellow':'green',tr);el('td',e.y?'long':'round',tr);el('td',e.label,tr);var td=el('td',undefined,tr);button('Remove',function(){examples.splice(i,1);edits++;render();},td);});
  var form=el('div');el('strong','Add a training example: ',form);
  var x=el('select',undefined,form),y=el('select',undefined,form),label=el('select',undefined,form);
  [['green','yellow'],['round','long'],['apple','banana']].forEach(function(opts,i){var s=[x,y,label][i];s.setAttribute('aria-label',['Colour','Shape','Correct label'][i]);opts.forEach(function(o){var op=el('option',o,s);op.value=o;});});
  button('Add example',function(){examples.push({x:Number(x.value==='yellow'),y:Number(y.value==='long'),label:label.value});edits++;render();},form);
  button('Restore original examples',function(){examples=spec.examples.map(function(e){return {x:e.x,y:e.y,label:e.label};});edits++;render();});
 }
 var area=el('div');el('h3','Test a new fruit',area);
 var tx=el('select',undefined,area),ty=el('select',undefined,area);
 [['green','yellow'],['round','long']].forEach(function(opts,i){var sel=i?ty:tx;sel.setAttribute('aria-label',i?'Test shape':'Test colour');opts.forEach(function(o){var op=el('option',o,sel);op.value=o;});});
 button('Predict label',function(){var p=predict(Number(tx.value==='yellow'),Number(ty.value==='long'));tested++;var msg=root.querySelector('#fruit-result');msg.textContent='Prediction: '+p.label+'. '+p.detail+'. Check it against what you know; a label is not proof.';report();},area);
 var output=el('p','Choose two clues and test the prediction.',area);output.id='fruit-result';output.setAttribute('role','status');
 el('p','Investigate: Does a wrong or missing example change the output? Can the same clues describe different real fruits?');
 report();
}
B.widget('fruit-learning',{sections:['gpanel'],label:function(){return 'Fruit classifier';},
 parse:function(s){s.mode=s.mode||'examples';if(!/^(examples|weights)$/.test(s.mode))throw Error('mode must be examples or weights');s.examples=s.items.filter(function(i){return i.kind==='example';}).map(function(i){var a=i.value.split('|').map(function(v){return v.trim().toLowerCase();});if(a.length!==3||!['green','yellow'].includes(a[0])||!['round','long'].includes(a[1])||!['apple','banana'].includes(a[2]))throw Error('example: green | round | apple');return {x:Number(a[0]==='yellow'),y:Number(a[1]==='long'),label:a[2]};});if(!s.examples.length)throw Error('At least one example is needed');},
 start:function(fresh){spec=B.spec;root=B.el('gpanel');mode=spec.mode;var v=fresh?null:B.saved();examples=v&&Array.isArray(v.examples)?v.examples.map(function(e){return {x:e.x,y:e.y,label:e.label};}):spec.examples.map(function(e){return {x:e.x,y:e.y,label:e.label};});weights=v&&Array.isArray(v.weights)?v.weights.slice(0,2):[1,1];tested=v&&Number.isInteger(v.tested)?v.tested:0;edits=v&&Number.isInteger(v.edits)?v.edits:0;render();},
 redraw:function(){if(root)render();}
});
})(WPB);
