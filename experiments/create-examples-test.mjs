// Each "Explore an example" lesson on Create's start page parses, passes validation and carries a full design: block.
import assert from 'node:assert/strict';
import YAML from 'yaml';
import {EXAMPLES,EXAMPLE,newLessonFiles,starterFiles} from '../create/lesson-starters.mjs';
import {parseLessonText,validateLessonCore} from '../tools/lesson-core.mjs';
import {validateLessonSource} from '../tools/lesson-validation.mjs';
import {DESIGN} from '../create/design-decisions.mjs';
assert.deepEqual(Object.keys(EXAMPLES),['coding','maths','science']);
assert.equal(EXAMPLES.coding.files,EXAMPLE);
for(const [id,{files}] of Object.entries(EXAMPLES)){
  const lesson=parseLessonText(files['lesson.md'],'example-'+id);
  assert.deepEqual(validateLessonCore(lesson,n=>files[n]),[],id);
  const {result}=validateLessonSource(files['lesson.md'],{slug:'example-'+id,read:n=>files[n]});
  assert.equal(result.valid,true,id+': '+JSON.stringify(result.errors));
  const block=files['lesson.md'].match(/^```teacher[ \t]*\n([\s\S]*?)\n```[ \t]*$/m);
  assert.ok(block,id+' has a teacher block');
  const design=YAML.parse(block[1]).design;
  for(const d of DESIGN) assert.ok(design?.[d.key],`${id} design.${d.key}`);
  if(id!=='coding') assert.ok(lesson.steps.some(s=>s.config.try?.playground==='board'),id+' uses the shared board');
}
const added=newLessonFiles('Lesson 2');
assert.deepEqual(validateLessonCore(parseLessonText(added['lesson.md'],'added'),n=>added[n]),[]);
assert.ok(starterFiles());
console.log('Create examples (coding, maths, science) and the add-lesson starter validate, with design decisions');
