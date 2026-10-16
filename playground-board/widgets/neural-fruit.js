// Small genuinely trainable 2-2-1 neural network for AI Foundations.
// Two binary inputs, two sigmoid hidden units, one sigmoid output.
// Training uses online backpropagation (gradient descent), NOT scripted outcomes.
(function (B) {
'use strict';
var panel, spec, state;
var defaultData=[
  {x:[0,0],label:0,name:'green, round apple'},
  {x:[0,1],label:0,name:'green, long apple'},
  {x:[1,0],label:0,name:'yellow, round apple'},
  {x:[1,1],label:1,name:'yellow, long banana'}
];
function elt(tag,txt,parent){var e=document.createElement(tag);if(txt!==undefined)e.textContent=txt;(parent||panel).appendChild(e);return e;}
function btn(txt,fn,parent){var e=elt('button',txt,parent);e.type='button';e.addEventListener('click',fn);return e;}
function sigmoid(x){return 1/(1+Math.exp(-Math.max(-40,Math.min(40,x))));}
function initWeights(){return {ih:[[0.35,-0.45],[-0.25,0.30]],hb:[0.10,-0.10],ho:[0.40,-0.35],ob:-0.80};}  // starts by calling every fruit Apple (about 32% banana)
function forward(x) {
 var w=state.w;
 var h=[0,1].map(function(j){return sigmoid(w.hb[j]+x[0]*w.ih[0][j]+x[1]*w.ih[1][j]);});
 return {h:h,p:sigmoid(w.ob+h[0]*w.ho[0]+h[1]*w.ho[1])};
}
function trainingRow(i) {var d=state.data[i],f=forward(d.x),w=state.w,rate=2;
 // Binary cross-entropy gradient: output delta is predicted probability minus label.
 var delta=f.p-d.label,old=w.ho.slice(),hidden=[0,1].map(function(j){return delta*old[j]*f.h[j]*(1-f.h[j]);});
 for(var j=0;j<2;j++){w.ho[j]-=rate*delta*f.h[j];w.hb[j]-=rate*hidden[j];for(var k=0;k<2;k++)w.ih[k][j]-=rate*hidden[j]*d.x[k];}
 w.ob-=rate*delta;
 state.updates++;state.latest='Trained on '+d.name+'. Before: '+Math.round(f.p*100)+'% banana; after: '+Math.round(forward(d.x).p*100)+'% banana.';
}
function train(n) {
 if(!state.data.length){state.latest='Select at least one training example.';draw();return;}
 for(var a=0;a<n;a++){trainingRow(state.next%state.data.length);state.next++;}
 state.rounds+=n;B.moved=true;draw();
}
function svgNode(tag,attrs,parent){var e=document.createElementNS('http://www.w3.org/2000/svg',tag);Object.keys(attrs).forEach(function(k){e.setAttribute(k,attrs[k]);});parent.appendChild(e);return e;}
function network(where,x){
 var s=svgNode('svg',{viewBox:'0 0 330 206',role:'img','aria-label':'Two input nodes connect to two hidden neurons, then to one output neuron. Lines change thickness when training adjusts weights.'},where);
 var a=[[66,62],[66,145]],h=[[169,62],[169,145]],o=[272,103],w=state.w;
 function edge(p,q,weight){svgNode('line',{x1:p[0],y1:p[1],x2:q[0],y2:q[1],stroke:weight<0?'#BB7861':'#3C8F89','stroke-width':(1.3+Math.min(5,Math.abs(weight)*2.5)).toFixed(2),'stroke-linecap':'round'},s);}
 for(var k=0;k<2;k++)for(var j=0;j<2;j++)edge(a[k],h[j],w.ih[k][j]);
 for(var j=0;j<2;j++)edge(h[j],o,w.ho[j]);
 var f=forward(x);
 a.forEach(function(p,i){svgNode('circle',{cx:p[0],cy:p[1],r:16,fill:'#DCE9F8',stroke:'#5B86B4','stroke-width':2},s);});
 h.forEach(function(p,i){svgNode('circle',{cx:p[0],cy:p[1],r:17,fill:'#CEEBDF',stroke:'#388675','stroke-width':2,opacity:(0.4+0.6*f.h[i]).toFixed(2)},s);});
 svgNode('circle',{cx:o[0],cy:o[1],r:19,fill:'#F5E0B8',stroke:'#BA873C','stroke-width':2},s);
 function label(str,x0,y0){var t=svgNode('text',{x:x0,y:y0,'text-anchor':'middle',fill:'currentColor','font-size':12},s);t.textContent=str;}
 label('Colour',66,29);label('Shape',66,185);label('Hidden layer',169,29);label('Banana score',272,157);
 if(state.showWeights){
   var t=elt('p',undefined,where);t.style.fontFamily='monospace';t.style.fontSize='0.84rem';
   t.textContent='Input → hidden: ['+w.ih[0].map(function(v){return v.toFixed(2);}).join(', ')+'] colour; ['+w.ih[1].map(function(v){return v.toFixed(2);}).join(', ')+'] shape. Hidden → output: ['+w.ho.map(function(v){return v.toFixed(2);}).join(', ')+']. Biases: '+w.hb.map(function(v){return v.toFixed(2);}).join(', ')+', '+w.ob.toFixed(2)+'.';
 }
}
function dataRow(d,i,table){
 var tr=elt('tr',undefined,table),td=elt('td',undefined,tr),box=elt('input',undefined,td);box.type='checkbox';box.checked=state.selected[i];box.setAttribute('aria-label','Include '+d.name);
 box.addEventListener('change',function(){state.selected[i]=box.checked;state.data=defaultData.filter(function(_,j){return state.selected[j];}).map(function(v,j){return {x:v.x.slice(),label:state.badLabel&&defaultData.indexOf(v)===3?0:v.label,name:v.name};});state.next=0;state.latest='Training set changed. Reset and retrain to compare fairly.';B.moved=true;draw();});
 elt('td',d.name,tr);
 elt('td',i===3&&state.badLabel?'Apple (incorrect)':d.label?'Banana':'Apple',tr);
}
function draw(){
 panel.replaceChildren();
 elt('h2','Can a network learn from examples?');
 elt('p','Choose labelled training examples, train a tiny network, and test its decisions. The network actually updates its connections; the answers are not pre-programmed.');
 elt('h3','1. Choose training examples');
 var table=elt('table');var tr=elt('tr',undefined,table);
 ['Use','Example','Training label'].forEach(function(v){elt('th',v,tr);});
 defaultData.forEach(function(d,i){dataRow(d,i,table);});
 var row=elt('div');
 btn('Use all examples',function(){state.selected=[true,true,true,true];state.badLabel=false;syncData();B.moved=true;draw();},row);
 btn('Only yellow bananas',function(){state.selected=[false,false,false,true];state.badLabel=false;syncData();B.moved=true;draw();},row);
 var bad=elt('label',undefined,panel),check=elt('input',undefined,bad);check.type='checkbox';check.checked=state.badLabel;
 check.addEventListener('change',function(){state.badLabel=check.checked;syncData();B.moved=true;draw();});
 elt('span',' Give the yellow, long banana an incorrect Apple label (investigation)',bad);
 elt('h3','2. Train');
 var actions=elt('div');
 btn('Train one example',function(){train(1);},actions);
 btn('Train 20 examples',function(){train(20);},actions);
 btn('Train 100 examples',function(){train(100);},actions);
 btn('Train 300 examples',function(){train(300);},actions);
 btn('Reset network',function(){state.w=initWeights();state.updates=0;state.rounds=0;state.next=0;state.latest='Network reset to its starting weights. The selected examples remain.';B.moved=true;draw();},actions);
 elt('p','Training steps: '+state.rounds+'. '+state.latest);
 elt('h3','3. Test a fruit');
 var choose=elt('div');
 var colour=elt('select',undefined,choose),shape=elt('select',undefined,choose);
 colour.setAttribute('aria-label','Fruit colour');shape.setAttribute('aria-label','Fruit shape');
 [['Green','Yellow'],['Round','Long']].forEach(function(opts,i){var s=i?shape:colour;opts.forEach(function(v,j){var op=elt('option',v,s);op.value=String(j);});s.value=String(state.test[i]);s.addEventListener('change',function(){state.test[i]=Number(s.value);draw();});});
 var f=forward(state.test);
 btn('Record this prediction',function(){state.tests++;state.latest='Tested '+(state.test[0]?'yellow':'green')+', '+(state.test[1]?'long':'round')+'.';B.moved=true;draw();},choose);
 elt('p','Predicted label: '+(f.p>=0.5?'Banana':'Apple')+'. Banana output score: '+Math.round(f.p*100)+'%. This is a model score, not proof of correctness.');
 elt('p','Training examples used: '+state.data.length+'. Predictions tested: '+state.tests+'.');
 network(elt('div'),state.test);
 var toggle=btn(state.showWeights?'Hide internal numbers':'Show internal numbers (extension)',function(){state.showWeights=!state.showWeights;draw();});
 elt('p','Connections change during training. Positive and negative numbers are multipliers, not percentages. You do not need to calculate them.');
 elt('p','Challenge: Compare the same input before and after training. Then change the examples, reset the network and try again. Does success on training examples guarantee success on unfamiliar fruit?');
 B.say('Training steps: '+state.rounds+'; recorded tests: '+state.tests);
 B.save({w:state.w,selected:state.selected,badLabel:state.badLabel,test:state.test,updates:state.updates,rounds:state.rounds,next:state.next,tests:state.tests,showWeights:state.showWeights,latest:state.latest});
 B.post({scope:{vars:{n:state.data.length,t:state.tests,r:state.rounds,c:state.updates},points:{}}},'Training steps: '+state.rounds+'; tests: '+state.tests);
}
function syncData(){state.data=defaultData.filter(function(_,i){return state.selected[i];}).map(function(d){return {x:d.x.slice(),label:state.badLabel&&d===defaultData[3]?0:d.label,name:d.name};});state.next=0;state.latest='Training examples changed. Reset the network to compare training runs.';}
B.widget('neural-fruit',{
 sections:['gpanel'],label:function(){return 'Tiny trainable neural network';},
 parse:function(s){if(s.items.some(function(i){return i.kind==='widget'&&i.value!=='neural-fruit';}))throw Error('Wrong widget');},
 start:function(fresh){panel=B.el('gpanel');var old=fresh?null:B.saved();state={w:old&&old.w||initWeights(),selected:old&&old.selected||[true,true,true,true],badLabel:!!(old&&old.badLabel),test:old&&old.test||[1,1],updates:old&&old.updates||0,rounds:old&&old.rounds||0,next:old&&old.next||0,tests:old&&old.tests||0,showWeights:!!(old&&old.showWeights),latest:old&&old.latest||'Untrained network ready.'};syncData();if(old&&old.latest)state.latest=old.latest;draw();},
 redraw:function(){if(panel)draw();}
});
})(WPB);
