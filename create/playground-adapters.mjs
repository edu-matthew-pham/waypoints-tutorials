// Parent-side adapters leave the production playgrounds and their clip cache inputs unchanged.
import {playground,playgroundURL} from './playground-registry.mjs';
const delay=ms=>new Promise(r=>setTimeout(r,ms));
export function manualReason(verb,value,p){
 if(p.recording==='manual')return p.note;
 if(verb==='press')return 'Key-driven interactions need manual tab recording.';
 if(value&&typeof value==='object'&&(value.preview||value.at))return 'Sandboxed page interactions and canvas gestures need manual tab recording.';
 if(['show','clear'].includes(verb)&&!p.editor)return 'The separate production code panel is not reproduced in this board recorder.';
 return null;
}
export function createAdapter(iframe,id,siteRoot,query={}){
 const p=playground(id);if(!p)throw Error('Unknown playground: '+id);
 const win=()=>iframe.contentWindow,doc=()=>win().document;
 function health(){const state=win().__playground,err=doc().querySelector('#error');if(state?.error)throw Error(typeof state.error==='string'?state.error:state.error.message||JSON.stringify(state.error));if(err&&!err.hidden&&err.textContent.trim())throw Error(err.textContent.trim());}
 async function until(test,message,ms=30000){const end=Date.now()+ms;while(Date.now()<end){health();if(test())return;await delay(80)}throw Error(message)}
 function target(value){
  const spec=typeof value==='object'?value:{field:value};
  if(spec.preview||spec.at)throw Error('This interaction requires manual recording');
  if(spec.selector){const el=doc().querySelector(spec.selector);if(!el)throw Error('Target not found: '+spec.selector);return el}
  const name=String(spec.into||spec.field||value).trim();
  const visible=e=>!e.hidden&&e.getClientRects().length;
  const controls=[...doc().querySelectorAll('button,input,textarea,select,a,[role=button],label')].filter(visible);
  const el=controls.find(e=>[e.getAttribute('aria-label'),e.getAttribute('title'),e.textContent?.trim(),e.labels?.[0]?.textContent?.trim()].includes(name));
  if(!el)throw Error('Target not found: '+name);
  return el.tagName==='LABEL'?(el.control||el.querySelector('input,textarea,select')||el):el;
 }
 async function setCode(text){if(!p.editor)throw Error('This playground has no code editor');const el=doc().querySelector(p.editor);if(!el)throw Error('Code editor missing');el.value=text;el.dispatchEvent(new (win().Event)('input',{bubbles:true}));if(p.id==='html'){const updates=win().__playground?.updates||0;await until(()=>win().__playground?.updates>updates,'HTML preview did not update')}}
 async function run(){if(!p.run){if(p.id==='html')return;throw Error('This playground has no Run control')}await until(()=>!doc().querySelector(p.run)?.disabled,'Run control not ready',60000);doc().querySelector(p.run).click();await delay(50);await until(()=>win().__playground?.status==='done','Playground did not complete or start successfully',60000);}
 async function load(){
  const url=playgroundURL(p.id,siteRoot,{code:p.sample,fresh:1,...query});
  await new Promise((resolve,reject)=>{const timer=setTimeout(()=>{iframe.removeEventListener('load',loaded);reject(Error('Playground load timed out'))},60000);function loaded(){clearTimeout(timer);resolve()}iframe.addEventListener('load',loaded,{once:true});iframe.src=url});
  if(p.recording==='manual')return;
  await until(()=>p.editor?doc().querySelector(p.editor)&&(!p.run||!doc().querySelector(p.run)?.disabled):doc().querySelector('#board svg,#gpanel:not([hidden])'),'Playground is not ready',60000);await delay(150);health();
 }
 async function action(step){
  if(step.type==='caption')return;
  if(step.type==='wait'){const n=Number(step.value);if(!Number.isFinite(n)||n<0||n>30000)throw Error('Wait must be between 0 and 30000 ms');await delay(n);health();return}
  if(step.type==='code'){await setCode(step.value);return}
  if(step.type==='run'){await run();return}
  if(step.type==='force'){const el=doc().querySelector('input[type=range]');if(!el)throw Error('Force slider missing');el.value=step.value;el.dispatchEvent(new (win().Event)('input',{bubbles:true}));el.dispatchEvent(new (win().Event)('change',{bubbles:true}));return}
  if(step.type!=='action')throw Error('Unsupported action type: '+step.type);
  const spec=JSON.parse(step.value),[verb,value]=Object.entries(spec)[0]||[];
  if(manualReason(verb,value,p))throw Error(manualReason(verb,value,p));
  if(verb==='run')return; // Frontmatter run reveals the app; it does not execute its code.
  if(verb==='show'||verb==='clear'){await setCode(verb==='clear'?'':value);return}
  if(verb==='click'){const el=target(value);if(p.run&&el===doc().querySelector(p.run))await run();else {if(el.disabled)throw Error('Control is disabled');el.click();await delay(100);health()}return}
  if(verb==='type'){
   const el=target(value);if(!('value'in el))throw Error('Target is not editable');let text=String(value.text??'');
   if(value.after!==undefined){const index=el.value.indexOf(value.after);if(index<0)throw Error('Insertion text not found');const at=index+String(value.after).length;text=el.value.slice(0,at)+text+el.value.slice(at)}else if(value.append)text=el.value+text;
   el.value=text;for(const name of ['input','change'])el.dispatchEvent(new (win().Event)(name,{bubbles:true}));await delay(200);health();return;
  }
  if(verb==='expect'){
   await until(()=>{let el;try{el=target(value)}catch{return false}const actual='value'in el?el.value:el.textContent;return value.contains!==undefined?String(actual).includes(String(value.contains)):String(actual)===String(value.value)},'Expectation failed: '+JSON.stringify(value));return;
  }
  throw Error('Unsupported clip verb: '+verb);
 }
 return {load,action,health,reset(){iframe.src=playgroundURL(p.id,siteRoot,{code:p.sample,fresh:1,...query})}};
}
