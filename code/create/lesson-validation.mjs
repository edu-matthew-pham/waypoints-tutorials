// The same format check for Create and the portable sandbox command. Never runs lesson code.
import {parseLessonText, validateLessonCore} from './lesson-core.mjs?v=3b8bfd6780';
export function validateLessonSource(raw, {source='lesson.md', slug=source, read=()=>undefined, known, shared={}}={}) {
  let lesson=null, errors=[];
  try {
    lesson=parseLessonText(raw,slug);
    errors=validateLessonCore(lesson,name=>read(name)??lesson.inline?.[name],known,shared)
      .map(error=>error.startsWith(slug+' › ')?source+error.slice(slug.length):error);
  } catch(error) {lesson=null;errors=[`${source}: ${error.message}`];}
  return {lesson,result:{source,valid:errors.length===0,errors,...(lesson?{title:lesson.title,steps:lesson.steps.length}:{})}};
}
export function validationReport(results) {
  return {format:'waypoints-validation-report-v1',scope:'lesson-format',valid:results.length>0&&results.every(r=>r.valid),results};
}
