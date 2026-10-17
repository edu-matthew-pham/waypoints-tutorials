// Binary-safe, store-only ZIPs: videos are already compressed. No server or dependency is needed.
const enc = new TextEncoder(), dec = new TextDecoder('utf-8', {fatal: true});
const crcTable = Array.from({length: 256}, (_, n) => {let c=n;for(let k=0;k<8;k++)c=c&1?0xedb88320^(c>>>1):c>>>1;return c>>>0});
const crc32 = bytes => {let c=0xffffffff;for(const b of bytes)c=crcTable[(c^b)&255]^(c>>>8);return (c^0xffffffff)>>>0};
const LIMIT = 512 * 1024 * 1024;
export function safePath(name) {
  if(typeof name!=='string'||!name||name.includes('\\')||name.includes('\0')||name.split('/').some(x=>!x||x==='.'||x==='..')||/^[a-z]:/i.test(name))throw Error('Unsafe package filename');
  return name;
}
export async function zip(entries) {
  if(entries.length>2000)throw Error('Too many package files');
  const parts=[],central=[],seen=new Set();let offset=0;
  const u16=n=>[n&255,(n>>>8)&255],u32=n=>[n&255,(n>>>8)&255,(n>>>16)&255,(n>>>24)&255];
  for(const [name,value] of entries){
    safePath(name);if(seen.has(name))throw Error('Duplicate package filename');seen.add(name);
    const nb=enc.encode(name),data=typeof value==='string'?enc.encode(value):value instanceof Blob?new Uint8Array(await value.arrayBuffer()):new Uint8Array(value);
    if(nb.length>65535||offset+data.length>LIMIT)throw Error('Lesson package exceeds 512 MB');
    const crc=crc32(data),local=new Uint8Array([80,75,3,4,20,0,0,8,0,0,0,0,33,0,...u32(crc),...u32(data.length),...u32(data.length),...u16(nb.length),0,0,...nb]);
    parts.push(local,data);
    central.push(new Uint8Array([80,75,1,2,20,0,20,0,0,8,0,0,0,0,33,0,...u32(crc),...u32(data.length),...u32(data.length),...u16(nb.length),0,0,0,0,0,0,0,0,0,0,0,0,...u32(offset),...nb]));
    offset+=local.length+data.length;
  }
  const size=central.reduce((n,c)=>n+c.length,0);
  return new Blob([...parts,...central,new Uint8Array([80,75,5,6,0,0,0,0,...u16(entries.length),...u16(entries.length),...u32(size),...u32(offset),0,0])],{type:'application/zip'});
}
export async function readZipEntries(file) {
  if(file.size>LIMIT)throw Error('Lesson package exceeds 512 MB');
  const bytes=new Uint8Array(await file.arrayBuffer()),view=new DataView(bytes.buffer),entries=new Map();let offset=0;
  while(offset+4<=bytes.length&&view.getUint32(offset,true)===0x04034b50){
    if(offset+30>bytes.length)throw Error('Truncated ZIP header');
    const flags=view.getUint16(offset+6,true),method=view.getUint16(offset+8,true),size=view.getUint32(offset+18,true),rawSize=view.getUint32(offset+22,true),nameSize=view.getUint16(offset+26,true),extra=view.getUint16(offset+28,true);
    if(method!==0||(flags&9)||size!==rawSize)throw Error('Import a store-only lesson package exported by Create lesson');
    const start=offset+30+nameSize+extra,end=start+size;
    if(end>bytes.length)throw Error('Truncated ZIP entry');
    const name=safePath(dec.decode(bytes.subarray(offset+30,offset+30+nameSize))),data=bytes.subarray(start,end);
    if(entries.has(name)||entries.size>=2000)throw Error('Duplicate or excessive ZIP entries');
    if(crc32(data)!==view.getUint32(offset+14,true))throw Error('Package checksum failed');
    entries.set(name,data);offset=end;
  }
  if(offset+4>bytes.length||view.getUint32(offset,true)!==0x02014b50)throw Error('Invalid lesson package ZIP');
  return entries;
}
function readLesson(entries, root) {
  const data=entries.get(root+'waypoints-lesson.json');
  if(!data)throw Error('Missing lesson manifest');
  const manifest=JSON.parse(dec.decode(data));
  if(manifest.format!=='waypoints-lesson-package-v1'||!Array.isArray(manifest.files)||!manifest.clips||typeof manifest.clips!=='object'||Array.isArray(manifest.clips))throw Error('Invalid lesson package manifest');
  const files=Object.create(null),clips=Object.create(null),names=new Set();
  for(const path of manifest.files){safePath(path);if(names.has(path))throw Error('Duplicate source file');names.add(path);const data=entries.get(root+path);if(!data)throw Error('Missing source file: '+path);files[path]=dec.decode(data)}
  if(typeof files['lesson.md']!=='string')throw Error('Missing lesson.md');
  for(const [id,clip] of Object.entries(manifest.clips)){
    if(!/^step-\d+$|^explain$/.test(id)||!clip||typeof clip.fingerprint!=='string')throw Error('Invalid clip metadata');
    const path=safePath(clip.path);if(path!==`clips/${id}.webm`)throw Error('Invalid video path');
    const data=entries.get(root+path);if(!data||data.length<4||data[0]!==26||data[1]!==69||data[2]!==223||data[3]!==163)throw Error('Missing or invalid WebM: '+id);
    clips[id]={blob:new Blob([data],{type:'video/webm'}),fingerprint:clip.fingerprint,recordedAt:clip.recordedAt};
  }
  return {files,clips,manifest};
}


export async function readPackage(file) {
  const entries=await readZipEntries(file);
  const courses=[...entries.keys()].filter(name=>name.endsWith('/waypoints-course.json'));
  if(courses.length){
    if(courses.length!==1)throw Error('No unique course manifest');
    const name=courses[0],root=name.slice(0,-'waypoints-course.json'.length),course=JSON.parse(dec.decode(entries.get(name)));
    if(course.format!=='waypoints-course-package-v1'||typeof course.title!=='string'||!Array.isArray(course.lessons)||!course.lessons.length||course.lessons.length>100)throw Error('Invalid course manifest');
    const paths=new Set();
    const lessons=course.lessons.map(path=>{safePath(path);if(paths.has(path))throw Error('Duplicate lesson path');paths.add(path);return readLesson(entries,root+path+'/')});
    return {course:{title:course.title,summary:String(course.summary||'')},lessons};
  }
  const manifests=[...entries.keys()].filter(name=>name.endsWith('/waypoints-lesson.json'));
  if(manifests.length!==1)throw Error('No unique lesson package manifest found');
  return readLesson(entries,manifests[0].slice(0,-'waypoints-lesson.json'.length));
}
