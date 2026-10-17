import {readFileSync,readdirSync,writeFileSync,mkdirSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {zip} from '../create/lesson-package.mjs';
const root=join(dirname(fileURLToPath(import.meta.url)),'..');
export async function buildValidator(dest) {
  const entries=[];
  const add=(name,body)=>entries.push(['waypoints-validator/'+name,body]);
  for(const file of ['validate-lesson.mjs','lesson-validation.mjs','lesson-core.mjs','modules-scan.mjs','math-expr.mjs']) {
    let text=readFileSync(join(root,'tools',file),'utf8');
    if(file==='lesson-core.mjs')text=text.replace("from 'yaml'","from './vendor/yaml/index.js'");
    add(file,text);
  }
  const snippets={},shared={};
  for(const kind of ['turtle','html','microbit','arcade','robot','p5'])snippets[kind]=JSON.parse(readFileSync(join(root,'snippets',kind+'.json'),'utf8'));
  for(const file of readdirSync(join(root,'modules')).sort())if(file.endsWith('.py'))shared[file.slice(0,-3)]=readFileSync(join(root,'modules',file),'utf8');
  const reference=JSON.stringify({snippets,shared});
  add('validator-reference.json',reference);
  add('README.md',readFileSync(join(root,'tools/validator-readme.md'),'utf8'));
  const yaml=join(root,'node_modules/yaml');
  const walk=(dir,rel='')=>{for(const entry of readdirSync(dir,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name))){const p=join(dir,entry.name),name=rel+entry.name;if(entry.isDirectory())walk(p,name+'/');else if(/\.(js|json)$/.test(entry.name))add('vendor/yaml/'+name,readFileSync(p))}};
  walk(join(yaml,'browser'));
  add('vendor/yaml/LICENSE',readFileSync(join(yaml,'LICENSE')));
  const hash=createHash('sha256');for(const [name,body]of entries)hash.update(name).update(body);
  const version=hash.digest('hex');
  add('validator-build.json',JSON.stringify({version,yaml:JSON.parse(readFileSync(join(yaml,'package.json'),'utf8')).version}));
  mkdirSync(dest,{recursive:true});
  writeFileSync(join(dest,'validator-reference.json'),reference);
  writeFileSync(join(dest,'validator.zip'),new Uint8Array(await(await zip(entries)).arrayBuffer()));
  return version;
}
