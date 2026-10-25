---
title: My path
summary: Pick lessons, put them in your own order, add a note for your class and copy one link. No account; the whole path is inside the link.
---
<!--wpt-search-css-->
<div id="wpt-path" data-root="../">
<p id="wpt-path-off" class="lede" hidden>My path needs JavaScript.</p>
<section id="wpt-path-view" hidden>
<h2 id="wpt-path-vtitle"></h2>
<p id="wpt-path-vnote" class="wpt-path-note"></p>
<ol id="wpt-path-vlist" class="wpt-path-list"></ol>
<p><button type="button" id="wpt-path-copyview">Make my own copy of this path</button></p>
<p class="lede">Each lesson opens as normal and saves progress in this browser, so a student can leave and come back.</p>
</section>
<section id="wpt-path-edit" hidden>
<p><label for="wpt-path-title"><b>Name of the path</b></label><br><input id="wpt-path-title" maxlength="80" placeholder="For example: Year 7 loops, week 3"></p>
<p><label for="wpt-path-note"><b>Note for your class</b></label><br><textarea id="wpt-path-note" rows="3" maxlength="600" placeholder="What to do, in what order, what to skip"></textarea></p>
<ol id="wpt-path-list" class="wpt-path-list"></ol>
<p id="wpt-path-empty" class="lede">No lessons yet. Search below and press "Add to my path", or press that button on a lesson page.</p>
<form class="wp-search" role="search" data-root="../" data-subject="" hidden><label for="wpt-path-q">Add a lesson</label><input id="wpt-path-q" type="search" autocomplete="off" placeholder="Try fractions, Python loops, spreadsheets" aria-describedby="wpt-path-q-r"><ul class="wp-results" id="wpt-path-q-r" aria-live="polite"></ul></form>
<h2>Link for students</h2>
<p><input id="wpt-path-link" readonly aria-label="Link for students"> <button type="button" id="wpt-path-copy">Copy link</button> <button type="button" id="wpt-path-clear">Start again</button></p>
<p class="lede" id="wpt-path-size"></p>
<p class="lede">The path is stored in the link itself, so it cannot be changed later: to change it, edit here and share the new link. Nothing is sent to us. Your draft is kept in this browser only.</p>
</section>
</div>
<style>
.wpt-path-list{padding-left:1.4rem}.wpt-path-list li{margin:.4rem 0}.wpt-path-list li span{display:block;color:var(--muted);font-size:.85rem}
.wpt-path-row{display:flex;gap:.4rem;align-items:center;flex-wrap:wrap}.wpt-path-row a{flex:1 1 14rem;font-weight:600}.wpt-path-row button{font:inherit;padding:.15rem .5rem;border:1px solid var(--line,#ddd);border-radius:6px;background:transparent;color:inherit;cursor:pointer}
#wpt-path input,#wpt-path textarea{font:inherit;width:100%;max-width:680px;box-sizing:border-box;padding:.5rem;border:1px solid var(--line,#ddd);border-radius:8px;background:var(--card,#fff);color:inherit}
#wpt-path-link{max-width:520px;width:70%}#wpt-path section button{font:inherit;padding:.4rem .8rem;border:1px solid currentColor;border-radius:8px;background:transparent;color:inherit;cursor:pointer}
.wpt-path-note{white-space:pre-wrap;max-width:680px}.wpt-path-add{margin-top:.3rem;font:inherit;font-size:.85rem;padding:.2rem .6rem;border:1px solid var(--line,#ddd);border-radius:6px;background:transparent;color:inherit;cursor:pointer}
@media print{.wpt-path-row button,#wpt-path-copyview{display:none}}
</style>
<script src="../search.js" defer></script>
<script src="../my-path.js" defer></script>
