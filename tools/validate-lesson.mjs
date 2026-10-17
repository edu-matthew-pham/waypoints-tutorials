// Node 20+; works in the repository and in the self-contained validator download.
import {readFileSync,existsSync,readdirSync,realpathSync,statSync} from 'node:fs';
import {resolve,dirname,join,relative,isAbsolute,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import {validateLessonSource,validationReport} from './lesson-validation.mjs';
import {snippetId,FEATURES} from './lesson-core.mjs';
const home=dirname(fileURLToPath(import.meta.url));
const usage='Usage: node validate-lesson.mjs <lesson.md | folder> [--json] [--root <source-folder>]';
function references() {
  const bundled=join(home,'validator-reference.json');
  if(existsSync(bundled))return JSON.parse(readFileSync(bundled,'utf8'));
  const snippets={},shared={};
  for(const kind of ['turtle','html','microbit','arcade','robot','p5']) {
    const file=join(home,'../snippets',kind+'.json');
    if(existsSync(file))snippets[kind]=JSON.parse(readFileSync(file,'utf8'));
  }
  const modules=join(home,'../modules');
  if(existsSync(modules))for(const file of readdirSync(modules))if(file.endsWith('.py'))shared[file.slice(0,-3)]=readFileSync(join(modules,file),'utf8');
  return {snippets,shared};
}
function inside(root,path) {const rel=relative(root,path);return !isAbsolute(rel)&&rel!=='..'&&!rel.startsWith('..'+sep)}
let json=process.argv.includes('--json');
try {
  if(Number(process.versions.node.split('.')[0])<20)throw Error('Node.js 20 or newer is required.');
  const args=process.argv.slice(2);let target,rootArg;
  for(let i=0;i<args.length;i++) {
    if(args[i]==='--json')continue;
    if(args[i]==='--help'||args[i]==='-h'){console.log(usage);process.exit(0)}
    if(args[i]==='--root'){if(!args[i+1]||args[i+1].startsWith('--'))throw Error('--root needs a folder');rootArg=args[++i];continue}
    if(args[i].startsWith('-')||target)throw Error(usage);
    target=args[i];
  }
  if(!target)throw Error(usage);
  const path=realpathSync(resolve(target)),directory=statSync(path).isDirectory();
  const root=realpathSync(resolve(rootArg||(directory?path:dirname(path))));
  if(!statSync(root).isDirectory()||!inside(root,path))throw Error('Input must be inside --root.');
  const files=[];
  function walk(dir) {
    for(const entry of readdirSync(dir,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name))) {
      if(['node_modules','.git','clips'].includes(entry.name)||entry.isSymbolicLink())continue;
      const p=join(dir,entry.name);
      if(entry.isDirectory())walk(p);
      else if(entry.isFile()&&entry.name==='lesson.md')files.push(p);
    }
  }
  if(directory)walk(path);else files.push(path);
  if(!files.length)throw Error('No lesson.md files found in the input folder.');
  const {snippets,shared}=references();
  const known=Object.fromEntries(Object.entries(snippets).map(([kind,data])=>[kind,new Set(data.groups.flatMap(g=>g.items.map(i=>snippetId(i.label))))]));
  if(known.turtle)for(const feature of FEATURES)known.turtle.add(feature.id);
  const results=files.map(file=>{
    const source=relative(root,file).split(sep).join('/');
    const read=name=>{
      const p=resolve(dirname(file),name);
      if(!inside(root,p))throw Error(`Reference outside source folder: ${name}. Use --root for shared source files.`);
      if(!existsSync(p))return undefined;
      const real=realpathSync(p);
      if(!inside(root,real))throw Error(`Reference outside source folder: ${name}`);
      return statSync(real).isFile()?readFileSync(real,'utf8'):undefined;
    };
    return validateLessonSource(readFileSync(file,'utf8'),{source,read,known,shared}).result;
  });
  const report=validationReport(results);
  if(json)console.log(JSON.stringify(report,null,2));
  else for(const result of results) {
    console.log(`${result.valid?'PASS':'FAIL'} ${result.source}${result.valid?` (${result.steps} steps)`:''}`);
    for(const error of result.errors)console.log('  '+error);
  }
  process.exitCode=report.valid?0:1;
} catch(error) {
  if(json)console.log(JSON.stringify({format:'waypoints-validation-report-v1',scope:'lesson-format',valid:false,error:error.message},null,2));
  else console.error(error.message);
  process.exitCode=2;
}
