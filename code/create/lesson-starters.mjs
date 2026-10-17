import {playground,appSettings,LESSON_PROFILES} from './playground-registry.mjs?v=3b8bfd6780';
export function starterFiles({title='My lesson',profile='coding',playgroundId='turtle',board=null}={}){
 const p=playground(playgroundId),shape=LESSON_PROFILES[profile]||LESSON_PROFILES.coding;
 const language=['maths','science','inquiry'].includes(profile)?shape.language:p?.language||shape.language;
 const metadata={title,summary:'Predict, explore and explain one idea.',language,...(shape.shape?{shape:shape.shape}:{})};
 if(p)metadata.app=appSettings(p.id);
 const header=Object.entries(metadata).map(([k,v])=>typeof v==='object'?`${k}:\n${Object.entries(v).map(([a,b])=>`  ${a}: ${JSON.stringify(b)}`).join('\n')}`:`${k}: ${JSON.stringify(v)}`).join('\n');
 const ref=p?p.file+'#start':null;
 const steps=shape.sequence.map(([stage,label])=>{
  const activity=p&&(stage==='run'||(profile==='design'&&stage==='make')||(profile==='reading'&&label==='Read'));
  const config=`stage: ${stage}`+(activity?`\ntry: { starter: "${ref}", height: 420${p.id==='turtle'?'':`, playground: ${p.id}`} }`:'');
  const text=stage==='predict'?'Commit to a prediction before opening the activity. What would you expect, and why?':stage==='investigate'?'Explain what changed and why. Refer to specific observations or steps.':stage==='modify'?'Change one thing. Predict its effect and check what happens.':stage==='make'?'Apply the idea to a new example and explain how you checked it.':stage==='practise'?'Try a new example independently, then explain your reasoning.':activity?'Run the activity and compare it with your prediction.':'What did you learn? What would you check next?';
  return `## ${label}\n\n\`\`\`step\n${config}\n\`\`\`\n\n${text}\n`;
 }).join('\n');
 const files={'lesson.md':`---\n${header}\n---\nOne idea to investigate. Replace this introduction with the topic and learning goal.\n\n${steps}`};
 if(p){const marker=p.file.endsWith('.html')?['<!-- region: start -->','<!-- endregion -->']:p.file.endsWith('.py')||p.file.endsWith('.yml')?['# region: start','# endregion']:['// region: start','// endregion'];files[p.file]=`${marker[0]}\n${board?.playground===p.id?board.example:p.sample}${marker[1]}\n`}
 return files;
}
