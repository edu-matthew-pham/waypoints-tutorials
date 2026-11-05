/* pattern-model.js: a web page uses a model made in the Pattern Trainer (tools.learningwaypoints.com/trainer/).
   Made for Learning Waypoints tutorials; free to copy. The JavaScript twin of the starters' pattern_model.py:
   same file, same checks, same answers. Load it beside your page: <script src="pattern-model.js"></script>

     const model = await PatternModel.open(fileInput.files[0]);   // the my_model.json a student downloaded
     // or: await PatternModel.load("my_model.json")              // a file beside the page
     model.classes                       // ["Cat", "Coffee"]
     await model.predict(img)            // { Cat: 0.93, Coffee: 0.07 }   (an <img>, <video> or <canvas>)
     await model.top(img)                // ["Cat", 0.93]

   Pictures only for now (body-pose and sound models open, but predict() says it can't run them yet).
   The picture model (MobileNetV2, about 9 MB) and MediaPipe (about 26 MB) load once, from the Pattern Trainer's
   site, the first time predict() runs; set PatternModel.runtime before that to load them from somewhere else.
   Problems throw a PatternModel.Error with a plain message and a `code`:
     not-json, project, not-model, version, preprocess, type, damaged, check (the file);
     not-yet (pose or sound model), not-ready (a video with no picture yet), too-big, runtime (MediaPipe didn't load). */
(function () {
  'use strict';
  var VERSION = 1, TOLERANCE = 1e-4, MAX_SQUARE = 4096;
  var PREPROCESS = {
    image: 'mediapipe-image-embedder-centre-crop-v1',
    pose: 'mediapipe-pose-lite-xy-centred-v1',
    audio: 'mediapipe-yamnet-windows-v1',
  };
  var KIND = { image: 'picture', pose: 'body-pose', audio: 'sound' };

  function PatternModelError(message, code) {
    var e = new Error(message); e.name = 'PatternModelError'; e.code = code;
    Object.setPrototypeOf(e, PatternModelError.prototype);
    return e;
  }
  PatternModelError.prototype = Object.create(Error.prototype);
  PatternModelError.prototype.constructor = PatternModelError;
  function fail(code, message) { throw PatternModelError(message, code); }

  var ACTIVATIONS = {
    relu: function (z) { for (var i = 0; i < z.length; i++) if (z[i] < 0) z[i] = 0; return z; },
    linear: function (z) { return z; },
    softmax: function (z) {
      var m = -Infinity, s = 0, i;
      for (i = 0; i < z.length; i++) if (z[i] > m) m = z[i];
      for (i = 0; i < z.length; i++) { z[i] = Math.exp(z[i] - m); s += z[i]; }
      for (i = 0; i < z.length; i++) z[i] /= s;
      return z;
    },
  };

  /** The fixed test input for the self-check (ramp-v1). Same formula in the trainer and pattern_model.py. */
  function ramp(dim) { var x = new Float32Array(dim); for (var i = 0; i < dim; i++) x[i] = ((i * 37) % 100) / 100; return x; }

  function isNums(a) { return Array.isArray(a) && a.every(function (v) { return typeof v === 'number' && isFinite(v); }); }

  /** The same checks as pattern_model.py, in the same order, so a file is refused for the same reason on both sides. */
  function checkSpec(spec) {
    if (!spec || typeof spec !== 'object') fail('not-model', "This file wasn't made by the Pattern Trainer.");
    if (spec.format === 'pattern-trainer-project')
      fail('project', "That's a project file (for carrying on in the Pattern Trainer), not a model. In the trainer, train your model and click Download to get the model file.");
    if (spec.format !== 'pattern-trainer-head') fail('not-model', "This file wasn't made by the Pattern Trainer.");
    if (spec.version !== VERSION)
      fail('version', 'This model file is version ' + spec.version + ', but this page understands version ' + VERSION + '. Ask your teacher for the latest pattern-model.js.');
    var inp = spec.input || {};
    if (!PREPROCESS[inp.type]) fail('type', "Unknown input type '" + inp.type + "'.");
    if (inp.preprocess !== PREPROCESS[inp.type])
      fail('preprocess', 'This model expects ' + KIND[inp.type] + "s prepared as '" + inp.preprocess + "', which this page doesn't know. Ask your teacher for the latest pattern-model.js.");
    var width = inp.embedding && inp.embedding.dim;
    if (!(width > 0) || !Array.isArray(spec.layers) || !spec.layers.length || !Array.isArray(spec.classes))
      fail('damaged', 'The model file is missing parts; it may be damaged. Download it again from the Pattern Trainer.');
    spec.layers.forEach(function (layer, i) {
      var k = layer && layer.kernel, b = layer && layer.bias, shape = k && k.shape;
      if (!Array.isArray(shape) || shape.length !== 2 || shape[0] !== width || !b || !Array.isArray(b.shape) || b.shape.length !== 1 || b.shape[0] !== shape[1])
        fail('damaged', 'Layer ' + (i + 1) + ' has the wrong shape; the file may be damaged.');
      if (!isNums(k.data) || k.data.length !== shape[0] * shape[1] || !isNums(b.data) || b.data.length !== shape[1])
        fail('damaged', 'Layer ' + (i + 1) + ' is missing numbers; the file may be damaged.');
      if (!ACTIVATIONS[layer.activation]) fail('damaged', "Unknown activation '" + layer.activation + "'.");
      width = shape[1];
    });
    if (width !== spec.classes.length) fail('damaged', "The number of class names doesn't match the model's outputs.");
  }

  // ---------------------------------------------------------------- MediaPipe (loaded once, when first needed)
  var runtimes = {};
  function base() { var r = String(PatternModel.runtime || ''); return r.replace(/\/?$/, '/'); }
  function imageEmbedder() {
    var at = base();
    if (runtimes[at]) return runtimes[at];
    var p = import(at + 'vendor/mediapipe/vision_bundle.mjs').then(function (mp) {
      return mp.FilesetResolver.forVisionTasks(at + 'vendor/mediapipe/wasm').then(function (files) {
        return mp.ImageEmbedder.createFromOptions(files, {
          baseOptions: { modelAssetPath: at + 'models/mobilenet_v2_embedder.tflite', delegate: 'CPU' },
          runningMode: 'IMAGE',   // default settings: l2Normalize and quantize off, as in the trainer and Python
        });
      });
    }).catch(function (e) {
      delete runtimes[at];
      if (window.console) console.warn('pattern-model: MediaPipe did not load from', at, e);
      throw PatternModelError("The picture model didn't load. Check this computer can reach " + at + ' and try again.', 'runtime');
    });
    return runtimes[at] = p;
  }

  /** The centre square of a picture at its own size, on white (see-through pixels count as white), as the trainer does. */
  function centreSquare(source) {
    var w = source.videoWidth || source.naturalWidth || source.width;
    var h = source.videoHeight || source.naturalHeight || source.height;
    if (!(w > 0 && h > 0)) fail('not-ready', "The picture isn't ready yet.");
    var s = Math.min(w, h);
    if (s > MAX_SQUARE) fail('too-big', 'That picture is too big (over ' + MAX_SQUARE + ' pixels across). Use a smaller copy.');
    var c = document.createElement('canvas');
    c.width = s; c.height = s;
    var g = c.getContext('2d');
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, s, s);
    g.drawImage(source, Math.floor((w - s) / 2), Math.floor((h - s) / 2), s, s, 0, 0, s, s);
    return c;
  }

  // ---------------------------------------------------------------- the model
  function Model(spec) {
    checkSpec(spec);
    this.spec = spec;
    this.classes = spec.classes.slice();
    this.type = spec.input.type;
    this.dim = spec.input.embedding.dim;
    this.layers = spec.layers.map(function (l) {
      return { k: Float32Array.from(l.kernel.data), b: Float32Array.from(l.bias.data), n: l.kernel.shape[0], m: l.kernel.shape[1], act: ACTIVATIONS[l.activation] };
    });
    var check = spec.check;
    if (check && check.output) {
      var got = this.scores(ramp(this.dim)), want = check.output, bad = !isNums(want) || want.length !== this.classes.length;
      for (var i = 0; !bad && i < want.length; i++) if (!(Math.abs(got[i] - want[i]) <= TOLERANCE)) bad = true;
      if (bad) fail('check', "The model's numbers didn't load correctly (self-check failed). Download the file again from the Pattern Trainer.");
    }
  }

  /** The trained part only: numbers in (1280 for a picture), a confidence for every class out. */
  Model.prototype.predictNumbers = function (vec) {
    var x = this.scores(vec), out = {};
    this.classes.forEach(function (name, i) { out[name] = x[i]; });
    return out;
  };
  /** The same, as a list in the order of model.classes. */
  Model.prototype.scores = function (vec) {
    var x = vec;
    if (x.length !== this.dim) fail('damaged', 'Expected ' + this.dim + ' numbers but got ' + x.length + '.');
    this.layers.forEach(function (L) {
      var y = new Float64Array(L.m), i, j, xi, row;
      for (j = 0; j < L.m; j++) y[j] = L.b[j];
      for (i = 0; i < L.n; i++) { xi = x[i]; if (!xi) continue; row = i * L.m; for (j = 0; j < L.m; j++) y[j] += xi * L.k[row + j]; }
      x = L.act(y);
    });
    return Array.from(x);
  };

  /** The numbers the trained part sees for this picture (1280 of them), for looking inside. */
  Model.prototype.embed = function (source) {
    var self = this;
    if (this.type !== 'image')
      return Promise.reject(PatternModelError('This is a ' + KIND[this.type] + " model. This page can't run those yet: in the Pattern Trainer choose Pictures.", 'not-yet'));
    var square;
    try { square = centreSquare(source); } catch (e) { return Promise.reject(e); }
    return imageEmbedder().then(function (embedder) {
      var v = embedder.embed(square).embeddings[0].floatEmbedding;
      if (v.length !== self.dim)
        fail('damaged', 'The picture model gave ' + v.length + ' numbers but this model expects ' + self.dim + '. Check you have the right model file.');
      return v;
    });
  };

  /** A confidence for every class, such as { Cat: 0.93, Coffee: 0.07 }. */
  Model.prototype.predict = function (source) {
    var self = this;
    return this.embed(source).then(function (v) { return self.predictNumbers(v); });
  };

  /** [the most likely class, its confidence], such as ["Cat", 0.93]. */
  Model.prototype.top = function (source) {
    return this.predict(source).then(function (p) {
      var best = null;
      Object.keys(p).forEach(function (k) { if (best === null || p[k] > p[best]) best = k; });
      return [best, p[best]];
    });
  };

  // ---------------------------------------------------------------- opening a file
  var PatternModel = {
    runtime: 'https://tools.learningwaypoints.com/trainer/',
    Error: PatternModelError,
    fromJSON: function (spec) { return new Model(spec); },
    fromText: function (text) {
      var spec;
      try { spec = JSON.parse(text); } catch (e) { fail('not-json', "That isn't a model file. Download it again from the Pattern Trainer."); }
      return new Model(spec);
    },
    /** A File from <input type="file">, or a drag and drop. */
    open: function (file) {
      return new Promise(function (ok, no) {
        var r = new FileReader();
        r.onload = function () { try { ok(PatternModel.fromText(r.result)); } catch (e) { no(e); } };
        r.onerror = function () { no(PatternModelError("That file couldn't be read.", 'not-json')); };
        r.readAsText(file);
      });
    },
    /** A model file at an address, such as "my_model.json" beside the page. */
    load: function (url) {
      return fetch(url, { cache: 'no-cache' }).then(function (r) {
        if (!r.ok) fail('not-json', "Can't find '" + url + "'. Is the model file beside your page?");
        return r.text();
      }).then(PatternModel.fromText);
    },
    /** Start loading MediaPipe and the picture model now, so the first predict() is quick. */
    ready: function () { return imageEmbedder().then(function () {}); },
    centreSquare: centreSquare,
  };
  window.PatternModel = PatternModel;
})();
