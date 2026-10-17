import assert from 'node:assert/strict';
import {mkdtempSync,writeFileSync,readFileSync,mkdirSync,existsSync,symlinkSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join,resolve} from 'node:path';
import {spawnSync} from 'node:child_process';
import {buildValidator} from '../tools/build-validator.mjs';
import {validateLessonSource} from '../tools/lesson-validation.mjs';
const temp=mkdtempSync(join(tmpdir(),'waypoints-validator-'));
try {
  await buildValidator(temp);
  const extracted=join(temp,'sandbox');mkdirSync(extracted);
  // Use an independent standard ZIP reader, outside the checkout and its node_modules.
  const unpack=spawnSync('python3',['-c','import sys,zipfile; zipfile.ZipFile(sys.argv[1]).extractall(sys.argv[2])',join(temp,'validator.zip'),extracted],{encoding:'utf8'});
  assert.equal(unpack.status,0,unpack.stderr);
  const cli=join(extracted,'waypoints-validator/validate-lesson.mjs');
  assert.ok(existsSync(join(extracted,'waypoints-validator/vendor/yaml/LICENSE')));
  const source=join(temp,'lessons');mkdirSync(source);
  const file=join(source,'lesson.md');
  const board='ROWS = 6\nCOLUMNS = 7\nboard = [[0 for column in range(COLUMNS)] for row in range(ROWS)]\nprint(board)';
  const headings=['Predict: how many positions?','Run: create an empty board','Investigate: how is the board created?','Modify: place a piece','Investigate: why does the index matter?','Make: model two moves','Check your understanding','Looking ahead'];
  const stages=['predict','run','investigate','modify','investigate','make','info','info'];
  const header='---\ntitle: Plan Connect 4 and Represent the Board\nsummary: Store rows and columns.\nlanguage: python\n---\n';
  function lesson(wired) {
    return header+headings.map((title,i)=>'\n## '+title+'\n\n'+(wired?'```step\nstage: '+stages[i]+(i===1?'\ntry: { playground: python, starter: "lesson.py#board" }':i===3?'\ntry: { playground: python, starter: "lesson.py#place_piece" }':'')+'\n```\n\n':'')+(i===1?'```code lesson.py#board\n'+board+'\n```\n':i===3?'```code lesson.py#place_piece\n'+board+'\nboard[5][3] = 1\n```\n':'')+'Explain your prediction.\n').join('');
  }
  function run(path=file,args=[]) {
    const result=spawnSync(process.execPath,[cli,path,'--json',...args],{cwd:extracted,encoding:'utf8',timeout:15000,env:{...process.env,NODE_PATH:''}});
    assert.equal(result.error,undefined,String(result.error));
    return {status:result.status,report:JSON.parse(result.stdout)};
  }
  writeFileSync(file,lesson(false));let result=run();
  assert.equal(result.status,1);assert.equal(result.report.valid,false);
  assert.equal(result.report.results[0].errors.filter(e=>e.includes('stage must be')).length,8,'Missing wiring in every Connect 4 section is reported');
  assert.deepEqual(result.report.results[0].errors,validateLessonSource(lesson(false)).result.errors,'Browser and portable checks agree');
  assert.deepEqual(result.report.results[0].errors,validateLessonSource(lesson(false),{slug:'draft/example'}).result.errors,'Reports name the source file rather than a browser draft id');
  writeFileSync(file,lesson(true));result=run();assert.equal(result.status,0);assert.equal(result.report.valid,true,'Corrected inline references work without separate source files');
  writeFileSync(file,lesson(true).replace('lesson.py#board"','lesson.py#missing"'));assert.match(run().report.results[0].errors.join('\n'),/missing/);
  writeFileSync(file,lesson(true).replace('playground: python','playground: invented'));assert.equal(run().status,1);
  writeFileSync(file,'---\ntitle: [\n---\n## Run\n');assert.equal(run().status,1);
  writeFileSync(file,header+'## Read\n\n```step\nstage: info\ncode: missing.py#start\n```\n');assert.equal(run().status,1);
  writeFileSync(join(temp,'shared.py'),'# region: start\nprint(42)\n# endregion\n');
  writeFileSync(file,header+'## Run\n\n```step\nstage: run\ntry: { playground: python, starter: "../shared.py#start" }\n```\n');
  assert.equal(run().status,1);assert.equal(run(file,['--root',temp]).status,0,'Shared files use an explicit common root');
  symlinkSync(join(temp,'shared.py'),join(source,'linked.py'));
  writeFileSync(file,header+'## Read\n\n```step\nstage: info\ncode: linked.py#start\n```\n');assert.equal(run().status,1,'References cannot escape the selected source root via symlinks');
  const marker=join(temp,'should-not-exist');
  writeFileSync(file,header+'## Run\n\n```step\nstage: run\ntry: { playground: python, starter: "danger.py#start" }\n```\n\n```code danger.py#start\nopen('+JSON.stringify(marker)+', "w").write("executed")\n```\n');
  assert.equal(run().status,0);assert.equal(existsSync(marker),false,'Validation does not execute Python');
  const empty=join(temp,'empty');mkdirSync(empty);assert.equal(run(empty).status,2,'Empty input does not count as a pass');
  const nested=join(source,'second');mkdirSync(nested);writeFileSync(join(nested,'lesson.md'),lesson(false));
  result=run(source);assert.equal(result.status,1);assert.equal(result.report.results.length,2);
  const zip2=join(temp,'second-build');await buildValidator(zip2);
  assert.deepEqual(readFileSync(join(temp,'validator.zip')),readFileSync(join(zip2,'validator.zip')),'The portable download is reproducible');
  const repo=spawnSync(process.execPath,[resolve('tools/validate-lesson.mjs'),file,'--json'],{encoding:'utf8',cwd:extracted});
  assert.equal(repo.status,0,repo.stderr);
  console.log('Portable offline validator: Connect 4 failure/fix, browser parity, missing regions/files, invalid YAML/playgrounds, explicit shared roots, symlinks, no code execution, batch exit codes and reproducible ZIP passed');
} finally {rmSync(temp,{recursive:true,force:true})}
