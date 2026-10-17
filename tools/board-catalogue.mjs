// Catalogue derives examples from existing lessons and settings from the actual widget documentation.
// No playground source or production clip cache input is changed.
import {readFileSync} from 'node:fs';
import {loadLessons,getSnippet} from './lesson.mjs';
import {inferPlayground} from './playground-registry.mjs';
const scienceTitles={zoom:'Particle zoom lens',identify:'Identify states of matter',build:'Build a particle model',syringe:'Compress solids, liquids and gases',diffusion:'Diffusion',jar:'States of matter in a jar',heat:'Heat water from ice to steam',dissolve:'Dissolving salt',bench:'Separation workbench',filter:'Filtration',evaporate:'Evaporation',distil:'Distillation',chroma:'Chromatography',box:'Particle box',windows:'Compare particle diagrams',quiz:'Particle classification quiz',atoms:'Atoms and molecules',reaction:'Chemical reactions',cooling:'Cooling magma and crystals',convection:'Heat transfer and convection',selection:'Natural selection'};
const scienceDescriptions={zoom:'Compare particle arrangements and motion in familiar materials.',identify:'Identify solids, liquids and gases from their particle models.',build:'Choose particle spacing and motion to model each state.',syringe:'Compress materials and compare how particles occupy space.',diffusion:'Watch two substances mix through particle motion.',jar:'Compare how solids, liquids and gases behave when a container is removed.',heat:'Change temperature and compare ice, liquid water and steam.',dissolve:'Add salt and observe how its particles spread through water.',bench:'Choose tools to separate a mixture of water, salt, sand and iron.',filter:'Separate an insoluble solid from a liquid using filtration.',evaporate:'Recover dissolved salt by evaporating the water.',distil:'Separate and collect water by heating and condensing it.',chroma:'Separate dyes as water moves up chromatography paper.',box:'Inspect a particle model without a marked task.',windows:'Compare equal volumes using static particle diagrams.',quiz:'Classify particle diagrams and compare explanations.',atoms:'Inspect molecules to distinguish elements, compounds and mixtures.',reaction:'Compare collisions, reactions, temperature and catalysts in a particle model.',cooling:'Compare crystal growth at different cooling speeds.',convection:'Follow particles to investigate heat transfer and convection.',selection:'Explore how survival and reproduction change a population over generations.'};
const boardTitles={breadboard:'Arduino breadboard',shell:'Linux terminal',arduino:'Arduino Uno',encode:'Encoding and encryption',lever:'Levers and pulleys',motor:'Motors, drivers and batteries','neural-fruit':'Train a small neural network','ai-learning-choices':'Learning with AI: decision labs',source:'What a web page reveals'};
const clean=text=>text.replace(/`/g,'').replace(/\s+/g,' ').trim();
function header(source){return source.match(/^(?:\/\/[^\n]*\n|\s*\n)+/)?.[0].replace(/^\/\/ ?/gm,'').trim()||''}
export function buildBoardCatalogue(lessons=loadLessons()){
 const authoring=readFileSync('AUTHORING.md','utf8');
 const blocks=[...authoring.matchAll(/^  - `widget: ([\w-]+)`[^\n]*[\s\S]*?(?=^  - `widget:|^## |$(?![\s\S]))/gm)];
 const docs=new Map(blocks.map(m=>[m[1],m[0].trim()]));
 const entries=[];
 const html=readFileSync('playground-board/index.html','utf8');
 for(const match of html.matchAll(/src="(widgets\/[^"?]+\.js)"/g)){
  const sourcePath='playground-board/'+match[1],source=readFileSync(sourcePath,'utf8'),guide=header(source);
  for(const widget of source.matchAll(/B\.widget\(['"]([\w-]+)['"]/g)){
   const name=widget[1],line=guide.split('\n')[0]||name;
   entries.push({id:'board:'+name,playground:'board',widget:name,title:boardTitles[name]||clean(line.split(':')[0].split('. ')[0]).slice(0,85),description:clean(line).slice(0,240),reference:[docs.get(name),guide].filter(Boolean).join('\n\n'),sourcePath});
  }
 }
 const scienceSource=readFileSync('playground-science/main.js','utf8');
 for(const m of scienceSource.matchAll(/W\.([\w]+) = function/g)){
  const widget=m[1],intro=scienceSource.split('\n').find(l=>new RegExp('^//   widget: '+widget+'(?:\\s|$)').test(l));
  entries.push({id:'science:'+widget,playground:'science',widget,title:scienceTitles[widget]||widget,description:scienceDescriptions[widget]||clean((intro||'').replace(/^\/\/\s*widget:\s*\w+\s*/,''))||scienceTitles[widget]||widget,reference:docs.get(widget)||'',sourcePath:'playground-science/main.js'});
 }
 const lookup=new Map(entries.map(e=>[e.id,{...e,examples:[],subjects:new Set()}]));
 const add=(family,text,lesson,ref)=>{
  const widget=/^\s*widget:\s*([\w-]+)/m.exec(text)?.[1]||'balance',entry=lookup.get(family+':'+widget);if(!entry)return;
  entry.subjects.add(lesson.slug.split('/')[0]);
  if(!entry.examples.some(e=>e.code===text))entry.examples.push({code:text,lesson:lesson.slug,ref});
 };
 for(const lesson of lessons){
  for(const step of [...lesson.steps,...(lesson.explainStep?[lesson.explainStep]:[])]){
   for(const item of [step,...(step.tasks||[])]){
    const config=item.config||{},kind=config.try?.playground||inferPlayground(lesson,step),family=kind==='maths'?'board':kind;
    if(!['board','science'].includes(family))continue;
    for(const ref of [config.try?.starter,config.code,typeof config.query?.code==='string'&&config.query.code.startsWith('@')?config.query.code.slice(1):null].filter(Boolean)){
     try{add(family,getSnippet(lesson.dir,ref),lesson,ref)}catch{ /* Another source reference may provide this widget's example. */ }
    }
    if(config.query?.code&&!String(config.query.code).startsWith('@'))add(family,String(config.query.code),lesson,'clip query');
   }
  }
 }
 return [...lookup.values()].map(({examples,subjects,...entry})=>{
  const example=examples.sort((a,b)=>a.code.length-b.code.length)[0]||(['evaporate','distil','chroma','filter'].includes(entry.widget)&&entry.playground==='science'?{code:'widget: '+entry.widget+'\n',lesson:null,ref:'AUTHORING.md section 12'}:null);
  if(!example)throw Error('Board catalogue needs an existing lesson example for '+entry.id);
  if(entry.playground==='science'){
   // Include the dedicated science section: several settings are documented in grouped widget descriptions.
   entry.reference=authoring.split('## 12. Science lessons')[1].split(/^## \d+\./m)[0].trim();
  }
  return {...entry,subjects:[...subjects].sort(),example:example.code,exampleSource:{lesson:example.lesson,ref:example.ref}};
 }).sort((a,b)=>a.title.localeCompare(b.title));
}
