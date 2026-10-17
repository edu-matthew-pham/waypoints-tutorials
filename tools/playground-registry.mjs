// Shared, data-only definitions. Rendering and Create consume the same playground addresses.
const entry=(id,dir,title,language,options={})=>({id,dir,title,label:title,language,recording:'automatic',editor:'#code',run:'#run',...options});
export const PLAYGROUND_REGISTRY=[
 entry('turtle','_playground','Python Turtle','python',{title:'Python turtle playground',label:'Python Turtle',draftApp:'turtle',sample:'from turtle import *\nforward(100)\nright(90)\nforward(100)\n',file:'shape.py',runLabel:'Run'}),
 entry('python','_playground-py','Python console and apps','python',{title:'Python playground',sample:'print(2 + 3)\n',file:'program.py',runLabel:'Run',note:'The Python runtime must finish loading before preview can run.'}),
 entry('html','_playground-html','HTML and CSS','html',{title:'HTML and CSS playground',sample:'<!doctype html>\n<h1>Hello</h1>\n<p>Change this paragraph.</p>\n',file:'page.html',run:null,note:'Live preview. Interactions inside its sandboxed page use manual recording.'}),
 entry('dom','_playground-dom','Web page and JavaScript','html',{title:'Web page and JavaScript playground',sample:'<h1>Hello</h1>\n<button onclick="this.textContent=\'Clicked\'">Try me</button>\n',file:'page.html',runLabel:'Run ▶',note:'Run/outer controls are automated; interactions inside the page use manual recording.'}),
 entry('p5','_playground-p5','p5.js','javascript',{title:'p5.js playground',sample:'function setup() { createCanvas(400, 300); }\nfunction draw() { background(240); circle(200, 150, 80); }\n',file:'sketch.js',runLabel:'Run ▶',note:'A running sketch is ready, rather than finished. Canvas interactions use manual recording.'}),
 entry('board','_playground-board','Shared maths and science boards','maths',{title:'Board',draftApp:'physics',editor:null,run:null,sample:'widget: balance\nleft: x + 2\nright: 5\n',file:'board.yml',note:'Local board controls can be automated. Choose a widget supported by the board.'}),
 entry('science','_playground-science','Science particle simulations','science',{title:'Science board',editor:null,run:null,sample:'widget: heat\n',file:'science.yml',note:'Local simulation controls can be automated. A model illustrates an idea; it is not experimental evidence.'}),
 entry('microstudio','_playground-microstudio','microStudio game (play only)','python',{title:'Example game (play only)',height:400,editor:null,run:null,recording:'manual',sample:'def update():\n    pass\n\ndef draw():\n    screen.clear("#102030")\n',file:'game.py',note:'The game starts itself. Record its interactions manually; this is not the microStudio authoring editor.'}),
 entry('microbit','_playground-makecode','micro:bit MakeCode','makecode',{title:'micro:bit MakeCode editor',height:640,editor:null,run:null,recording:'manual',sample:'basic.showIcon(IconNames.Heart)\n',file:'main.ts',note:'Requires the external MakeCode service. Record the editor/simulator manually.'}),
 entry('arcade','_playground-makecode','MakeCode Arcade','arcade',{title:'MakeCode Arcade editor',height:640,editor:null,run:null,recording:'manual',sample:'game.splash("Hello")\n',file:'main.ts',note:'Requires the external MakeCode service. Record the editor/simulator manually.'}),
];
export function playground(id){return PLAYGROUND_REGISTRY.find(p=>p.id===({physics:'board',maths:'board'}[id]||id))||null}
export const PLAYGROUNDS=Object.fromEntries([...PLAYGROUND_REGISTRY.map(p=>[p.id,{dir:p.dir,title:p.title,...(p.height?{height:p.height}:{})}]),['maths',{dir:'_playground-board',title:'Board'}]]);
export function inferPlayground(lesson,step=null){
 const command=String(lesson.app?.command||'');
 if(command){
  const match=PLAYGROUND_REGISTRY.find(p=>new RegExp('(?:^|/)'+p.dir+'(?:[\\s"\']|$)').test(command));
  if(match)return match.id==='microbit'&&(step?.config.try?.playground==='arcade'||lesson.language==='arcade')?'arcade':match.id;
  if(/\/_playground-maths(?:[\s"']|$)/.test(command))return 'board';
  return null;
 }
 if(step?.config.try?.playground)return playground(step.config.try.playground)?.id||null;
 if(!step&&!lesson.steps?.some(s=>s.config.try||s.config.code||s.config.clip))return null;
 const first=lesson.steps?.find(s=>s.config.try?.playground);if(first)return playground(first.config.try.playground)?.id||null;
 return ({maths:'board',science:'science',html:'html',javascript:'p5',makecode:'microbit',arcade:'arcade',python:'turtle'}[lesson.language])||null;
}
export function playgroundURL(id,siteRoot,query={}){
 const p=playground(id);if(!p)throw Error('Unknown playground: '+id);
 const url=new URL(p.dir+'/index.html',siteRoot);
 for(const [k,v]of Object.entries(query))url.searchParams.set(k,String(v));
 if(p.id==='microbit'||p.id==='arcade')url.searchParams.set('target',p.id);
 return url.href;
}
export function appSettings(id){const p=playground(id);if(!p)throw Error('Unknown playground');return {command:`node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/${p.dir}" 8123`,url:'http://127.0.0.1:8123/index.html',layout:'full'}}
export const LESSON_PROFILES={
 coding:{label:'Coding: PRIMM',language:'python',shape:'',sequence:[['predict','Predict'],['run','Run'],['investigate','Investigate'],['modify','Modify'],['make','Make']]},
 maths:{label:'Maths: predict, try and reason',language:'maths',shape:'',sequence:[['predict','Predict'],['run','Try'],['investigate','Worked example'],['modify','Vary'],['practise','Practise'],['make','Make']]},
 science:{label:'Science: 5E inquiry',language:'science',shape:'5e',sequence:[['predict','Engage'],['run','Explore'],['investigate','Explain'],['modify','Elaborate'],['info','Evaluate']]},
 design:{label:'Design cycle',language:'python',shape:'design',sequence:[['predict','Inquire'],['investigate','Develop'],['make','Create'],['modify','Test'],['practise','Evaluate']]},
 inquiry:{label:'Concept inquiry: 5E',language:'science',shape:'5e',sequence:[['predict','Engage'],['run','Explore'],['investigate','Explain'],['modify','Elaborate'],['info','Evaluate']]},
 reading:{label:'Reading / explanation',language:'python',shape:'',sequence:[['info','Read'],['info','Check your understanding']]},
};
