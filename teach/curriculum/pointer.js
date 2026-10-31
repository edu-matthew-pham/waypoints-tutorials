/*wp-nav-js*/(function(){var n=document.querySelector('.sitenav');if(!n)return;var K='wp-from',here=n.dataset.here;
// Sticky navbar: publish its height as --nav (course bar, step pills and anchors sit below it).
var nh=function(){document.documentElement.style.setProperty('--nav',n.offsetHeight+'px')};nh();if(window.ResizeObserver)new ResizeObserver(nh).observe(n);else window.addEventListener('resize',nh);
var mb=n.querySelector('.sn-menu');if(mb)mb.addEventListener('click',function(){var o=n.classList.toggle('open');mb.setAttribute('aria-expanded',String(o))});
[].forEach.call(n.querySelectorAll('.sn-caret'),function(c){var d=c.parentNode;c.addEventListener('click',function(){var o=d.classList.toggle('open');c.setAttribute('aria-expanded',String(o))})});
document.addEventListener('click',function(e){[].forEach.call(n.querySelectorAll('.sn-dd.open'),function(d){if(!d.contains(e.target)){d.classList.remove('open');d.querySelector('.sn-caret').setAttribute('aria-expanded','false')}})});
document.addEventListener('keydown',function(e){if(e.key==='Escape')[].forEach.call(n.querySelectorAll('.sn-dd.open'),function(d){d.classList.remove('open')})});
if(here==='lesson'){var h=document.querySelector('h1'),worked=null;
// The step to come back to is the last one the student worked in (clicked, typed, used its playground), not the
// one in view (the student may scroll elsewhere before using the navbar). Before any work, the step in view.
function pill(id){var a=id?document.querySelector('nav.steps a[href="#'+id+'"]'):(document.querySelector('nav.steps a.here')||document.querySelector('nav.steps a')),t='';if(a)[].forEach.call(a.childNodes,function(c){if(c.nodeType===3)t+=c.textContent});return {a:a,t:t.trim()}}
var save=function(){var s=pill(worked);try{sessionStorage.setItem(K,JSON.stringify({href:location.pathname+(s.a?s.a.getAttribute('href'):''),title:h?h.textContent:document.title,step:s.t}))}catch(e){}};
function mark(el){var sec=el&&el.closest&&el.closest('section.step');if(sec&&sec.id){worked=sec.id;save()}}
['click','input','focusin'].forEach(function(ev){document.addEventListener(ev,function(e){if(!(e.target.closest&&e.target.closest('.sitenav,.coursebar,nav.steps')))mark(e.target)},true)});
window.addEventListener('blur',function(){setTimeout(function(){var f=document.activeElement;if(f&&f.tagName==='IFRAME')mark(f)},0)});
try{var prev=JSON.parse(sessionStorage.getItem(K));if(prev&&prev.href&&prev.href.split('#')[0]===location.pathname&&prev.href.indexOf('#')>0)worked=prev.href.split('#')[1]}catch(e){}
save();window.addEventListener('pagehide',save);return}
var b=n.querySelector('.sn-back'),f=null;try{f=JSON.parse(sessionStorage.getItem(K))}catch(e){}
if(f&&f.href){b.href=f.href;b.textContent='\u2190 Back to '+f.title+(f.step?' \u203a '+f.step:'');b.title=b.textContent;b.hidden=false;return}
if(here==='playground'||here==='reference'){try{var l=JSON.parse(localStorage.getItem('wp-last-lesson'));if(l&&l.href){b.href=l.href;b.textContent='Continue: '+(l.title||'your lesson');b.hidden=false}}catch(e){}}})();/*wp-nav-js-end*/