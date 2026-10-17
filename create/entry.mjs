// Entry routes only; lesson/course state continues to belong to the workspace.
export function setupEntry({hasSaved, addFiles, example}) {
  const $ = id => document.getElementById(id);
  const start = $('createStart'), workspace = $('createWorkspace');
  const showWorkspace = () => {
    start.hidden = true; workspace.hidden = false;
    $('workspaceTitle').focus(); window.scrollTo(0, 0);
  };
  const showStart = () => {
    workspace.hidden = true; start.hidden = false;
    $('startTitle').focus(); window.scrollTo(0, 0);
  };
  function panel(id) {
    for (const [button, section] of [['startPrompt','promptRoute'],['startOpen','openRoute']]) {
      const open = section === id;
      $(section).hidden = !open;
      $(button).setAttribute('aria-expanded', String(open));
    }
    $(id === 'promptRoute' ? 'promptRouteTitle' : 'openRouteTitle').focus();
  }
  async function openFiles(list) {
    if (!list.length) return;
    const files = {};
    for (const file of list) {
      if (file.name.endsWith('.zip')) throw Error('Use “Import lesson / course ZIP” for a package.');
      if (Object.hasOwn(files, file.name)) throw Error('Select files from one lesson, with unique filenames.');
      files[file.name] = await file.text();
    }
    if (!Object.hasOwn(files, 'lesson.md')) throw Error('Select a lesson.md along with any supporting files.');
    await addFiles(files); showWorkspace();
  }
  $('startPrompt').onclick = async () => {
    panel('promptRoute');
    if ($('startPromptText').value) return;
    $('copyStartPrompt').disabled = true;
    try {
      const response = await fetch(new URL('start-prompt.md', import.meta.url), {cache:'no-cache'});
      if (!response.ok) throw Error('The starter prompt could not be loaded. Please try again.');
      $('startPromptText').value = await response.text();
      $('startCopyStatus').textContent = '';
    } catch (error) { $('startCopyStatus').textContent = error.message; }
    finally { $('copyStartPrompt').disabled = !$('startPromptText').value; }
  };
  $('copyStartPrompt').onclick = async () => {
    try {
      await navigator.clipboard.writeText($('startPromptText').value);
      $('startCopyStatus').textContent = 'Prompt copied. Paste it into your preferred AI assistant.';
    } catch {
      $('startPromptText').focus(); $('startPromptText').select();
      $('startCopyStatus').textContent = 'Select and copy the prompt above.';
    }
  };
  $('startOpen').onclick = () => panel('openRoute');
  $('promptOpenFiles').onclick = () => panel('openRoute');
  $('startImportPackage').onclick = () => $('importPackage').click();
  $('startImportSource').onclick = () => $('startSourceFiles').click();
  $('startSourceFiles').onchange = async event => {
    try { await openFiles([...event.target.files]); }
    catch (error) { $('startStatus').textContent = error.message; }
    finally { event.target.value = ''; }
  };
  // Reveal import progress/errors in the workspace; cancelling the chooser stays on Start.
  $('importPackage').addEventListener('change', event => {
    if (event.target.files.length) showWorkspace();
  });
  $('startExample').onclick = async () => {
    $('startExample').disabled = true;
    try { await addFiles({...example}); showWorkspace(); }
    catch (error) { $('startStatus').textContent = error.message; }
    finally { $('startExample').disabled = false; }
  };
  $('startResume').hidden = !hasSaved;
  $('startResume').onclick = $('promptWorkspace').onclick = showWorkspace;
  $('backToStart').onclick = () => {
    $('startResume').hidden = false;
    showStart();
  };
  for (const id of ['startPrompt','startOpen','startExample']) $(id).disabled = false;
  $('startStatus').textContent = '';
  // Recorder returns and shared lessons open directly in their existing editing context.
  const url = new URL(location.href);
  if (url.searchParams.has('lesson') || url.hash.startsWith('#l=') || url.searchParams.get('workspace') === '1') showWorkspace();
}
