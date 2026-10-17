import assert from 'node:assert/strict';
import {buildBoardCatalogue} from '../tools/board-catalogue.mjs';
import {starterFiles} from '../create/lesson-starters.mjs';
import {authoringPrompt} from '../create/authoring-prompt.mjs';
import {parseLessonText,validateLessonCore,snippetFrom} from '../tools/lesson-core.mjs';
const entries=buildBoardCatalogue();assert.ok(entries.length>=115);assert.equal(new Set(entries.map(e=>e.id)).size,entries.length);
for(const board of entries){
 assert.ok(board.title&&board.description&&board.reference&&board.example);
 assert.match(board.example,new RegExp('^\\s*widget:\\s*'+board.widget+'(?:\\s|$)','m'),board.id+' has a matching widget');
 const settings={title:'Selected activity',profile:board.subjects.includes('maths')?'maths':'science',playgroundId:board.playground,board,boardCatalogue:entries,scope:'lesson'};
 const files=starterFiles(settings),lesson=parseLessonText(files['lesson.md'],'test');assert.deepEqual(validateLessonCore(lesson,n=>files[n]),[],board.id);
 assert.equal(snippetFrom(n=>files[n],board.playground==='board'?'board.yml#start':'science.yml#start'),board.example.trimEnd()+'\n');
 const prompt=authoringPrompt(settings,{common:'Schema',maths:'Maths',science:'Science',design:'Method'});
 assert.ok(prompt.includes(board.example));assert.ok(prompt.includes(board.reference));assert.ok(prompt.includes('SELECTED BOARD ACTIVITY: '+board.title));assert.ok(prompt.includes('science:heat')&&prompt.includes('board:forces'));
}
console.log(entries.length,'board definitions, starter schemas and matching prompt references passed');
