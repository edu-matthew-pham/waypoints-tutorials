// A pretend Linux terminal over a small pretend filesystem (nothing here touches a real computer).
//   widget: shell
//   fs: school | hunt | empty        the starting files (see FS below)
//   file: /home/sam/a.txt | line one\nline two      add or replace a file (\n starts a new line)
//   dir: /home/sam/new                add a folder
//   start: /home/sam                  the starting folder (default /home/sam)
//   tree: on | all                    a folder tree beside the terminal (all shows hidden files too)
//   run: ls; cd projects              commands run (silently) before the student starts
// Commands: help, pwd, ls [-a] [-l] [path], cd [path], cat, grep [-i] [-c] [-v] [-n], wc [-l] [-w], sort, uniq,
// head [-n N], echo, touch, mkdir, cp, mv, rm [-r], chmod (644 or u+x, o-r, a+w…), whoami, clear, history; pipes
// (a | b) and > or >> after echo or any command. Files have an owner and read/write/run permissions for the
// owner and for everyone else; the user is sam.
// System layer (fs: pi | laptop, or sys: on; the Pi lessons of System admin): the same terminal as a Raspberry Pi with owners
// and groups, sudo (only for users in the sudo group), apt (a pretend software source), systemctl and journalctl, adduser
// and groups, su, chown and chgrp, tee (so `echo x | sudo tee -a file` works and `sudo echo x >> file` does not, as on a real Pi),
// crontab, tar, df and du, ssh from a pretend laptop (from: laptop), ping and ss, ufw and samba. Setup options:
//   fs: pi | laptop       login: pi        which user is logged in at the start
//   from: laptop          start on a laptop that can ssh to raspberrypi.local (the Pi is built when first reached)
//   net: on | off         whether apt can reach a software source (default on)    pending: 12   packages apt upgrade will install
//   updated: on           package lists already downloaded (default off: apt install needs sudo apt update first)
//   pkgs: samba tree      packages already installed       users: alex:class, bob    extra users (user:group)
//   stopped: ssh          services that start out stopped  ufw: on      firewall already on
// Security lab (course Security lab; fs: kali, from: kali or lab: on): a pretend Kali laptop (10.0.0.5, user kali) and a target Pi
// (target, 10.0.0.2, admin account `admin`) on an isolated switch with no internet; apt reads a local mirror. The target runs ssh
// (old), vsftpd, telnet and apache2 (old), a loose sshd_config and an auth.log with a run of failed logins. nmap (-sn, -sV, -p) works
// from Kali on the target only and refuses anything off the lab sheet; apt upgrade installs the fixed versions; a service reads
// sshd_config when it is restarted. Extra values: open_n (reachable open ports on the target), risky_n (telnet or ftp reachable),
// old_n (reachable services with old versions), pw_login and root_login (ssh settings in force), sv_used (nmap -sV used).
// More checks (names with an underscore, for the board's when: conditions):
//   on_pi (on the Pi, not the laptop)      as_user (the logged-in user is [as:])    pkg_in ([pkg:] is installed)
//   svc_up / svc_boot ([svc:] is running / starts at boot)      port_up / port_reach ([port:] has a service / can be reached)
//   user_ok ([who:] exists)   in_group ([member: alex sudo])   conf_has ([has: /path | text] is in the file)
//   cron_n (lines in this user's crontab)      cron_has ([cron: 30 2 * * *] is scheduled)      can_read ([access: user /path] could read it)
//   can_write ([writes: user /path] could change it)   blocked ([nowrite: user /path] could not)   grp_is ([group: /path | class])
//   ran_it (every command in [ran: a b] has been used)   pend_n (packages apt upgrade would install)   sudoers_n   fw_up   disk_pct   usb_pct
//   conf_has / conf_live ([has: /path | text | more text] is in the file / has been read by the service)
// Checks read these (setup options in brackets):
//   w: 1 when the current folder is [at: path]      s: 1 once [find: path]'s contents have been shown
//   x: 1 when [exists: path] exists                  z: 1 when [gone: path] no longer exists
//   m: [watch: path]'s permissions as digits (644)   k: 1 if everyone else may read [watch:]
//   o: the last output as a number (−1 if not one)   l: lines in the last output    u: 1 if the last command used |
//   e: 1 if the last command failed                  n: commands run    h: different commands used
//   a: 1 once ls -a has been used                    g: 1 once grep has been used    d: how deep the current folder is
//   p: 1 if the last command used > or >>
(function (B) {
  'use strict';
  var spec = null, ui = {}, st = null, USER = 'sam', HOME = '/home/sam', HOST = 'school';
  var FS = {
    school: {
      dirs: ['/home', '/home/sam', '/home/sam/projects', '/home/sam/projects/game', '/home/sam/photos', '/home/lee', '/tmp', '/etc'],
      files: {
        '/home/sam/notes.txt': 'Bring a calculator\nRobot club on Friday\nFinish maths homework',
        '/home/sam/pets.txt': 'cat\ndog\ncatfish\nparrot\ncat\nhamster',
        '/home/sam/.plans.txt': 'Surprise party for Lee on Friday. Do not tell!',
        '/home/sam/projects/robot.py': "print('beep')",
        '/home/sam/projects/game/level1.txt': 'Start at the door. Find the key.',
        '/home/sam/photos/beach.jpg': '(a photo of a beach)',
        '/home/sam/photos/dog.jpg': '(a photo of a dog)',
        '/home/lee/timetable.txt': 'Monday: Year 8 Digital Technologies\nTuesday: Year 9 Digital Technologies',
        '/home/lee/marks.txt': 'Sam 18/20\nAva 17/20\nNoah 19/20',
        '/etc/hostname': 'school',
      },
      owner: { '/home/lee': 'lee', '/home/lee/timetable.txt': 'lee', '/home/lee/marks.txt': 'lee', '/etc': 'root', '/etc/hostname': 'root', '/home': 'root', '/tmp': 'root' },
      mode: { '/home/lee/marks.txt': 0o600, '/home/lee': 0o755 },
    },
    hunt: {
      dirs: ['/home', '/home/sam', '/home/sam/hunt', '/home/sam/hunt/library', '/home/sam/hunt/library/shelf2', '/home/sam/hunt/gym', '/home/sam/hunt/gym/.locker', '/home/sam/hunt/office'],
      files: {
        '/home/sam/hunt/start.txt': 'Welcome to the hunt.\nYour first clue is in the library, on shelf 2.',
        '/home/sam/hunt/library/shelf1.txt': 'Nothing here but dust.',
        '/home/sam/hunt/library/shelf2/book.txt': 'Chapter 1\nChapter 2\nThe next clue is in the gym, somewhere hidden.\nChapter 3',
        '/home/sam/hunt/gym/notice.txt': 'Gym closed on Monday.',
        '/home/sam/hunt/gym/.locker/clue.txt': 'Last clue: the office has a list of codes.\nThe right one is the only line with the word GOLD in it.',
        '/home/sam/hunt/office/codes.txt': 'silver 4471\nbronze 9902\ntin 1186\ngold 5530\nlead 7745\ncopper 3317\nGOLD 2468\nsilver 6612',
      },
      owner: { '/home': 'root' }, mode: {},
    },
    empty: { dirs: ['/home', '/home/sam'], files: {}, owner: { '/home': 'root' }, mode: {} },
    pi: {
      sys: true, user: 'pi',
      dirs: ['/home', '/home/pi', '/home/pi/Documents', '/home/pi/Videos', '/etc', '/etc/samba', '/var', '/var/log', '/var/lib', '/srv', '/srv/media', '/srv/class', '/media', '/media/usb', '/tmp', '/root'],
      files: {
        '/home/pi/Documents/readme.txt': 'Welcome to your Raspberry Pi.\nThis is the Documents folder.',
        '/home/pi/Videos/holiday.mp4': '(a video)',
        '/etc/hostname': 'raspberrypi',
        '/etc/os-release': 'PRETTY_NAME="Raspberry Pi OS (64-bit)"',
        '/srv/media/film.mp4': '(a Creative Commons film)',
        '/srv/media/song.mp3': '(a Creative Commons song)',
        '/var/log/auth.log': 'Oct 25 09:58:41 raspberrypi sshd[611]: Accepted password for pi from 192.168.1.20 port 50122 ssh2\nOct 25 09:59:03 raspberrypi sshd[640]: Failed password for pi from 192.168.1.50 port 51234 ssh2\nOct 25 09:59:09 raspberrypi sshd[640]: Failed password for pi from 192.168.1.50 port 51236 ssh2\nOct 25 09:59:15 raspberrypi sshd[644]: Failed password for invalid user admin from 192.168.1.50 port 51240 ssh2\nOct 25 09:59:21 raspberrypi sshd[644]: Failed password for invalid user admin from 192.168.1.50 port 51244 ssh2\nOct 25 09:59:40 raspberrypi sshd[651]: Accepted password for pi from 192.168.1.50 port 51250 ssh2',
      },
      owner: { '/home': 'root', '/etc': 'root', '/etc/samba': 'root', '/etc/hostname': 'root', '/etc/os-release': 'root', '/var': 'root', '/var/log': 'root', '/var/lib': 'root', '/var/log/auth.log': 'root', '/srv': 'root', '/srv/media': 'root', '/srv/media/film.mp4': 'root', '/srv/media/song.mp3': 'root', '/srv/class': 'root', '/media': 'root', '/media/usb': 'pi', '/tmp': 'root', '/root': 'root' },
      mode: { '/home/pi': 0o700, '/var/log/auth.log': 0o640, '/root': 0o700 },
      group: { '/var/log/auth.log': 'adm' },
      size: { '/home/pi/Videos/holiday.mp4': 1.4e9, '/srv/media/film.mp4': 3.1e9, '/srv/media/song.mp3': 5e6 },
    },
    laptop: {
      sys: true, user: 'sam',
      dirs: ['/home', '/home/sam', '/home/sam/Documents', '/etc'],
      files: { '/home/sam/Documents/notes.txt': 'Pi password: written on a sticky note, not here.\nLab switch: port 4', '/etc/hostname': 'laptop' },
      owner: { '/home': 'root', '/etc': 'root', '/etc/hostname': 'root' }, mode: {}, group: {}, size: {},
    },
  };
  // The security lab (course Security lab): a pretend Kali laptop and a pretend target Pi on an isolated switch (10.0.0.x).
  FS.kali = {
    sys: true, user: 'kali',
    dirs: ['/home', '/home/kali', '/etc'],
    files: {
      '/home/kali/lab-rules.txt': 'LAB RULES\n1. Only scan and test the computers named in the lab sheet: the target at 10.0.0.2.\n2. Never plug the lab switch into the school network.\n3. Write down what you change. Your teacher signs off before you start.\n4. Anything you find is reported and fixed, not used.\n5. The administrator account on the target account is admin (your teacher gives its password).',
      '/home/kali/advisories.txt': 'LAB ADVISORY SHEET (offline copy, your teacher made it)\nOpenSSH below 8.0: old, upgrade it.\nvsftpd below 3.0: old, upgrade it.\nApache httpd below 2.4.50: old, upgrade it.\ntelnet: sends everything, including passwords, as readable text. Replace it with ssh.\nssh: allow password login only if you must; keys are stronger.',
      '/etc/hostname': 'kali',
    },
    owner: { '/home': 'root', '/etc': 'root', '/etc/hostname': 'root' }, mode: {}, group: {}, size: {},
  };
  var SYSFS = { pi: 1, laptop: 1, kali: 1 };
  var LAB_HOSTS = { target: 'pi', 'target.local': 'pi', '10.0.0.2': 'pi' };

  function parse(s) {
    s.fs0 = String(s.fs || 'school').toLowerCase();
    if (!FS[s.fs0]) throw new Error('fs: school, hunt, empty, pi, laptop or kali.');
    s.fromLaptop = /^(laptop|kali)$/.test(String(s.from || '').toLowerCase());
    s.lab = s.fs0 === 'kali' || String(s.from || '').toLowerCase() === 'kali' || /^(on|yes|true)$/i.test(String(s.lab || ''));
    s.sys = !!SYSFS[s.fs0] || s.fromLaptop || /^(on|yes|true)$/i.test(String(s.system || ''));
    s.kind0 = s.fromLaptop ? 'laptop' : (SYSFS[s.fs0] ? (s.fs0 === 'kali' ? 'laptop' : s.fs0) : 'pi');
    s.net0 = !/^(off|no|false)$/i.test(String(s.net || 'on'));  // in the lab, apt reads a local mirror, never the internet
    s.updated0 = /^(on|yes|true)$/i.test(String(s.updated || ''));
    s.pending0 = s.pending !== undefined ? Math.max(0, +s.pending || 0) : 12;
    s.pkgs0 = String(s.pkgs || '').split(/[\s,]+/).filter(Boolean);
    s.users0 = String(s.users || '').split(',').map(function (x) { return x.trim(); }).filter(Boolean);
    s.stopped0 = String(s.stopped || '').split(/[\s,]+/).filter(Boolean);
    s.disabled0 = String(s.disabled || '').split(/[\s,]+/).filter(Boolean);
    s.ufw0 = /^(on|yes|true)$/i.test(String(s.ufw || ''));
    s.login0 = s.login || '';
    s.extraFiles = s.items.filter(function (i) { return i.kind === 'file' && !i.name; }).map(function (i) {
      var k = i.value.indexOf('|'); if (k < 0) throw new Error('file: /path | contents');
      return [i.value.slice(0, k).trim(), i.value.slice(k + 1).trim().replace(/\\n/g, '\n')];
    });
    s.extraDirs = s.items.filter(function (i) { return i.kind === 'dir' && !i.name; }).map(function (i) { return i.value.trim(); });
    s.start0 = s.start || '';
    s.tree0 = /^(on|all)$/i.test(s.tree || '') ? String(s.tree).toLowerCase() : '';
    s.run0 = s.run ? String(s.run).split(';').map(function (x) { return x.trim(); }).filter(Boolean) : [];
  }

  // ---------- the filesystem ----------
  function fresh(name) {
    var f = FS[name || spec.fs0], nodes = {}, own = f.user || USER, sys = !!f.sys;
    var grp = function (p, o) { return sys ? ((f.group && f.group[p]) || (o === 'root' ? 'root' : o)) : undefined; };
    var put = function (p, n) { if (sys) { n.group = grp(p, n.owner); if (f.size && f.size[p] !== undefined) n.size = f.size[p]; } nodes[p] = n; };
    f.dirs.forEach(function (d) { put(d, { dir: true, owner: f.owner[d] || own, mode: f.mode[d] || 0o755 }); });
    put('/', { dir: true, owner: 'root', mode: 0o755 });
    Object.keys(f.files).forEach(function (p) { put(p, { dir: false, text: f.files[p], owner: f.owner[p] || own, mode: f.mode[p] || 0o644 }); });
    spec.extraDirs.forEach(function (d) { mkdirs(nodes, d, own, sys); });
    spec.extraFiles.forEach(function (x) { mkdirs(nodes, parent(x[0]), own, sys); put(x[0], { dir: false, text: x[1], owner: own, mode: 0o644 }); });
    return nodes;
  }
  function mkdirs(nodes, d, own, sys) { var parts = d.split('/').filter(Boolean), p = ''; parts.forEach(function (x) { p += '/' + x; if (!nodes[p]) { nodes[p] = { dir: true, owner: own || USER, mode: 0o755 }; if (sys) nodes[p].group = own || USER; } }); }
  var parent = function (p) { var i = p.lastIndexOf('/'); return i <= 0 ? '/' : p.slice(0, i); };
  var base = function (p) { return p === '/' ? '/' : p.slice(p.lastIndexOf('/') + 1); };
  function resolve(p) {
    if (!p) return st.cwd;
    if (p === '~') p = HOME; else if (p.indexOf('~/') === 0) p = HOME + p.slice(1);
    var parts = (p.charAt(0) === '/' ? p : st.cwd + '/' + p).split('/'), out = [];
    parts.forEach(function (x) { if (!x || x === '.') return; if (x === '..') out.pop(); else out.push(x); });
    return '/' + out.join('/');
  }
  var kids = function (d) { var pre = d === '/' ? '/' : d + '/'; return Object.keys(st.fs).filter(function (p) { return p !== d && p.indexOf(pre) === 0 && p.slice(pre.length).indexOf('/') < 0; }).sort(); };
  function isRoot() { return !!(st && st.root) || USER === 'root'; }
  function isOwner(n) { return isRoot() || n.owner === USER; }
  function inGroup(u, g) { var m = st && st.m; if (!m) return false; if (u === g && (m.users[u] || u === 'root')) return true; var x = m.users[u]; return !!(x && x.groups.indexOf(g) >= 0); }
  function can(node, what) {
    if (isRoot()) return true;
    var sh = node.owner === USER ? 6 : (st && st.m && node.group && inGroup(USER, node.group) ? 3 : 0);
    return !!(((node.mode >> sh) & 7) & { r: 4, w: 2, x: 1 }[what]);
  }
  var sizeOf = function (n) { return n.size !== undefined ? n.size : (n.dir ? 0 : n.text.length); };
  function hum(b) { var u = ['B', 'K', 'M', 'G'], i = 0; while (b >= 1000 && i < 3) { b /= 1000; i++; } return (i === 0 ? String(Math.round(b)) : (b >= 10 ? String(Math.round(b)) : String(Math.round(b * 10) / 10))) + u[i]; }
  function newNode(dir, text, mode) { var n = { dir: dir, owner: USER, mode: mode || (dir ? 0o755 : 0o644) }; if (!dir) n.text = text || ''; if (st.m) n.group = USER; return n; }
  var homeOf = function (u) { return u === 'root' ? '/root' : '/home/' + u; };
  function setUser(u) { USER = u; HOME = homeOf(u); }
  var modeStr = function (n) { var s = n.dir ? 'd' : '-'; [6, 3, 0].forEach(function (sh) { var b = (n.mode >> sh) & 7; s += (b & 4 ? 'r' : '-') + (b & 2 ? 'w' : '-') + (b & 1 ? 'x' : '-'); }); return s; };

  // ---------- commands ----------
  function Err(m) { this.m = m; }
  // On the Pi layer, every folder on the way to a file must be enterable (x) by you, as on a real system.
  function pathOpen(full) {
    if (!(st && st.m) || isRoot()) return true;
    var parts = full.split('/').filter(Boolean), q = '';
    for (var i = 0; i < parts.length - 1; i++) { q += '/' + parts[i]; var d = st.fs[q]; if (d && d.dir && !can(d, 'x')) return false; }
    return true;
  }
  function getFile(cmd, p) {
    var full = resolve(p), n = st.fs[full];
    if (!n) throw new Err(cmd + ': ' + p + ': No such file or folder');
    if (n.dir) throw new Err(cmd + ': ' + p + ': Is a folder');
    if (!pathOpen(full) || !can(n, 'r')) throw new Err(cmd + ': ' + p + ': Permission denied');
    st.read[full] = 1;
    return n.text;
  }
  function flags(args) { var f = {}, rest = []; args.forEach(function (a) { if (/^-[a-zA-Z]+$/.test(a)) a.slice(1).split('').forEach(function (c) { f[c] = true; }); else rest.push(a); }); return [f, rest]; }
  var lines = function (t) { return t === '' ? [] : t.replace(/\n$/, '').split('\n'); };

  var CMDS = {
    help: function () { return 'Commands: pwd, ls, cd, cat, grep, wc, sort, uniq, head, echo, touch, mkdir, cp, mv, rm, chmod, whoami, history, clear\nJoin commands with | (a pipe). Save output with > file.'; },
    pwd: function () { return st.cwd; },
    whoami: function () { return USER; },
    clear: function () { st.lines = []; return ''; },
    history: function () { return st.hist.map(function (h, i) { return (i + 1) + '  ' + h; }).join('\n'); },
    echo: function (a) { return a[0] === '-e' ? a.slice(1).join(' ').replace(/\\n/g, '\n') : a.join(' '); },
    ls: function (a) {
      var fr = flags(a), f = fr[0], paths = fr[1].length ? fr[1] : [''];
      if (f.a) st.usedA = 1;
      return paths.map(function (p) {
        var full = resolve(p), n = st.fs[full];
        if (!n) throw new Err('ls: ' + p + ': No such file or folder');
        var list = n.dir && !f.d ? kids(full) : [full];
        if (n.dir && !f.d && (!pathOpen(full) || !can(n, 'r'))) throw new Err('ls: ' + (p || '.') + ': Permission denied');
        list = list.filter(function (k) { return f.a || base(k).charAt(0) !== '.'; });
        var show = function (k) {
          var m = st.fs[k], nm = f.d ? (p || '.') : base(k) + (m.dir ? '/' : '');
          if (!f.l) return nm;
          if (!spec.sys) return modeStr(m) + '  ' + (m.owner + '    ').slice(0, 5) + ' ' + ('     ' + (m.dir ? 0 : m.text.length)).slice(-5) + '  ' + base(k) + (m.dir ? '/' : '');
          var sz = sizeOf(m);
          return modeStr(m) + '  ' + (m.owner + '    ').slice(0, 5) + ' ' + ((m.group || m.owner) + '    ').slice(0, 5) + ' ' + ('      ' + (f.h ? hum(sz) : sz)).slice(-6) + '  ' + nm;
        };
        return (paths.length > 1 ? p + ':\n' : '') + list.map(show).join(f.l ? '\n' : '  ');
      }).join('\n');
    },
    cd: function (a) {
      var full = resolve(a[0] || '~'), n = st.fs[full];
      if (!n) throw new Err('cd: ' + a[0] + ': No such folder');
      if (!n.dir) throw new Err('cd: ' + a[0] + ': Not a folder');
      if (!pathOpen(full) || !can(n, 'x')) throw new Err('cd: ' + a[0] + ': Permission denied');
      st.cwd = full; st.cds++; return '';
    },
    cat: function (a, input) { if (!a.length) return input; return a.map(function (p) { return getFile('cat', p); }).join('\n'); },
    grep: function (a, input) {
      st.usedGrep = 1;
      var fr = flags(a), f = fr[0], r = fr[1]; if (!r.length) throw new Err('grep: what should I look for? Try grep word file');
      var pat = r[0], files = r.slice(1), test = function (line) { var hit = f.i ? line.toLowerCase().indexOf(pat.toLowerCase()) >= 0 : line.indexOf(pat) >= 0; return f.v ? !hit : hit; };
      var src = files.length ? files.map(function (p) { return [p, getFile('grep', p)]; }) : [['', input]];
      var out = [], count = 0;
      src.forEach(function (s) { lines(s[1]).forEach(function (line, i) { if (test(line)) { count++; out.push((files.length > 1 ? s[0] + ':' : '') + (f.n ? (i + 1) + ':' : '') + line); } }); });
      return f.c ? String(count) : out.join('\n');
    },
    wc: function (a, input) {
      var fr = flags(a), f = fr[0], files = fr[1], one = function (t, name) {
        var l = lines(t).length, w = (t.match(/\S+/g) || []).length, c = t.length;
        var parts = f.l || f.w || f.c ? [f.l ? l : null, f.w ? w : null, f.c ? c : null].filter(function (x) { return x !== null; }) : [l, w, c];
        return parts.join(' ') + (name ? ' ' + name : '');
      };
      return files.length ? files.map(function (p) { return one(getFile('wc', p), p); }).join('\n') : one(input, '');
    },
    sort: function (a, input) { var t = a.length ? a.map(function (p) { return getFile('sort', p); }).join('\n') : input; return lines(t).sort().join('\n'); },
    uniq: function (a, input) { var t = a.length ? getFile('uniq', a[0]) : input, out = []; lines(t).forEach(function (l) { if (out[out.length - 1] !== l) out.push(l); }); return out.join('\n'); },
    head: function (a, input) { var n = 10, r = []; for (var i = 0; i < a.length; i++) { if (a[i] === '-n') n = +a[++i]; else if (/^-\d+$/.test(a[i])) n = +a[i].slice(1); else r.push(a[i]); } var t = r.length ? getFile('head', r[0]) : input; return lines(t).slice(0, n).join('\n'); },
    touch: function (a) { a.forEach(function (p) { var full = resolve(p); if (!st.fs[full]) { writable(parent(full), 'touch'); st.fs[full] = newNode(false, ''); } }); return ''; },
    mkdir: function (a) {
      if (!a.length) throw new Err('mkdir: which folder? Try mkdir name');
      a.forEach(function (p) { var full = resolve(p); if (st.fs[full]) throw new Err('mkdir: ' + p + ': Already exists'); if (!st.fs[parent(full)]) throw new Err('mkdir: ' + p + ': No such folder to make it in'); writable(parent(full), 'mkdir'); st.fs[full] = newNode(true); });
      return '';
    },
    cp: function (a) {
      var fr = flags(a), f = fr[0]; a = fr[1];
      if (a.length < 2) throw new Err('cp: copy what, to where? Try cp file newname');
      var src = resolve(a[0]), sn = st.fs[src];
      if (sn && sn.dir) {
        if (!f.r && !f.R) throw new Err('cp: ' + a[0] + ': Is a folder (cp -r copies a folder and everything in it)');
        var to2 = dest(a[0], a[1], 'cp');
        Object.keys(st.fs).filter(function (q) { return q === src || q.indexOf(src + '/') === 0; }).sort().forEach(function (q) {
          var o = st.fs[q], c = newNode(o.dir, o.text, o.mode); if (o.size !== undefined) c.size = o.size; st.fs[to2 + q.slice(src.length)] = c;
        });
        return '';
      }
      var text = getFile('cp', a[0]), to = dest(a[0], a[1], 'cp'), cn = newNode(false, text); if (sn && sn.size !== undefined) cn.size = sn.size;
      st.fs[to] = cn; return '';
    },
    mv: function (a) {
      if (a.length < 2) throw new Err('mv: move what, to where? Try mv file folder');
      var from = resolve(a[0]); if (!st.fs[from]) throw new Err('mv: ' + a[0] + ': No such file or folder');
      writable(parent(from), 'mv');
      var to = dest(a[0], a[1], 'mv');
      Object.keys(st.fs).filter(function (p) { return p === from || p.indexOf(from + '/') === 0; }).forEach(function (p) { st.fs[to + p.slice(from.length)] = st.fs[p]; delete st.fs[p]; });
      if (st.cwd === from || st.cwd.indexOf(from + '/') === 0) st.cwd = to + st.cwd.slice(from.length);
      return '';
    },
    rm: function (a) {
      var fr = flags(a), f = fr[0];
      if (!fr[1].length) throw new Err('rm: remove what? Try rm file');
      fr[1].forEach(function (p) {
        var full = resolve(p), n = st.fs[full];
        if (!n) throw new Err('rm: ' + p + ': No such file or folder');
        if (n.dir && !f.r) throw new Err('rm: ' + p + ': Is a folder (rm -r removes a folder and everything in it)');
        if (!isRoot() && ((!spec.sys && n.owner !== USER) || !can(st.fs[parent(full)], 'w'))) throw new Err('rm: ' + p + ': Permission denied');
        Object.keys(st.fs).filter(function (q) { return q === full || q.indexOf(full + '/') === 0; }).forEach(function (q) { delete st.fs[q]; });
        if (st.cwd === full || st.cwd.indexOf(full + '/') === 0) st.cwd = parent(full);
      });
      return '';
    },
    chmod: function (a) {
      var rec = false; if (a[0] === '-R' || a[0] === '-r') { rec = true; a = a.slice(1); }
      if (a.length < 2) throw new Err('chmod: try chmod 600 file or chmod o-r file');
      var m = a[0], full = resolve(a[1]), n = st.fs[full];
      if (!n) throw new Err('chmod: ' + a[1] + ': No such file or folder');
      if (!isOwner(n)) throw new Err('chmod: ' + a[1] + ': Only its owner (' + n.owner + ') or an administrator can change its permissions');
      var digits = /^[0-7]{3}$/.test(m), mm = digits ? null : /^([ugoa]*)([+\-=])([rwx]+)$/.exec(m);
      if (!digits && !mm) throw new Err('chmod: ' + m + ': try 644, u+x, o-r or a+r');
      var targets = rec ? Object.keys(st.fs).filter(function (q) { return q === full || q.indexOf(full + '/') === 0; }) : [full];
      targets.forEach(function (q) {
        var t = st.fs[q];
        if (digits) { t.mode = parseInt(m, 8); return; }
        var who = mm[1] || 'a', bits = (mm[3].indexOf('r') >= 0 ? 4 : 0) | (mm[3].indexOf('w') >= 0 ? 2 : 0) | (mm[3].indexOf('x') >= 0 ? 1 : 0);
        [['u', 6], ['g', 3], ['o', 0]].forEach(function (w) {
          if (who.indexOf('a') < 0 && who.indexOf(w[0]) < 0) return;
          var mask = bits << w[1];
          if (mm[2] === '+') t.mode |= mask; else if (mm[2] === '-') t.mode &= ~mask; else t.mode = (t.mode & ~(7 << w[1])) | mask;
        });
      });
      return '';
    },
    sudo: function () { throw new Err('sudo: not allowed here. Only an administrator can use sudo, and that is the point.'); },
  };
  function writable(dir, cmd) { var n = st.fs[dir]; if (n && !can(n, 'w')) throw new Err(cmd + ': ' + dir + ': Permission denied'); }
  function dest(src, d, cmd) {
    var full = resolve(d), n = st.fs[full];
    var to = n && n.dir ? (full === '/' ? '' : full) + '/' + base(resolve(src)) : full;
    if (!st.fs[parent(to)]) throw new Err(cmd + ': ' + d + ': No such folder');
    writable(parent(to), cmd);
    if (st.fs[to] && !isOwner(st.fs[to])) throw new Err(cmd + ': ' + d + ': Permission denied');
    return to;
  }

  // ---------- the system layer ----------
  var CATALOG = {
    samba: 'File sharing with Windows, Mac and Linux computers (SMB)',
    jellyfin: 'A media server for your own films and music (free, open source)',
    ufw: 'A simple firewall',
    tree: 'Show folders as a tree',
    cowsay: 'A talking cow, handy for checking an install worked',
    'unattended-upgrades': 'Install security updates automatically',
    vim: 'A text editor'
  };
  var PRE = { nano: 1, 'openssh-server': 1, cron: 1 };
  var SVC = {
    ssh: { desc: 'OpenBSD Secure Shell server', ports: [22] },
    cron: { desc: 'Regular background program processing daemon', ports: [] },
    smbd: { desc: 'Samba SMB Daemon', ports: [445, 139], pkg: 'samba' },
    jellyfin: { desc: 'Jellyfin Media Server', ports: [8096], pkg: 'jellyfin' },
    'unattended-upgrades': { desc: 'Unattended Upgrades Shutdown', ports: [], pkg: 'unattended-upgrades' },
    vsftpd: { desc: 'vsftpd FTP server', ports: [21] },
    telnet: { desc: 'Telnet server', ports: [23] },
    apache2: { desc: 'The Apache HTTP Server', ports: [80] }
  };
  var NEWVER = { ssh: 'OpenSSH 9.2p1', vsftpd: 'vsftpd 3.0.5', apache2: 'Apache httpd 2.4.62' };
  var SVCNAME = { 21: 'ftp', 22: 'ssh', 23: 'telnet', 80: 'http', 139: 'netbios-ssn', 445: 'microsoft-ds', 8096: 'unknown' };
  var PKGSVC = { samba: 'smbd', jellyfin: 'jellyfin', 'unattended-upgrades': 'unattended-upgrades' };
  var PKGCMD = { tree: 'tree', cowsay: 'cowsay', ufw: 'ufw', smbclient: 'samba', vim: 'vim' };
  var LAPTOP_NO = { apt: 1, 'apt-get': 1, systemctl: 1, journalctl: 1, adduser: 1, deluser: 1, usermod: 1, groupadd: 1, addgroup: 1, crontab: 1, ufw: 1, smbclient: 1, ss: 1, reboot: 1, shutdown: 1 };
  var GIDS = { root: 0, adm: 4, sudo: 27, users: 100 };
  var KNOWN_HOSTS = { 'raspberrypi.local': 'pi', raspberrypi: 'pi', '192.168.1.23': 'pi' };

  function khost(h) { return spec.lab ? LAB_HOSTS[h] : KNOWN_HOSTS[h]; }
  function clock(extra) { var mins = 600 + (st.count || 0) + (extra || 0), h = Math.floor(mins / 60) % 24, m = mins % 60; return { h: h, m: m, hms: (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m + ':' + (10 + (st.count || 0) % 50) }; }
  function stamp() { return 'Oct 25 ' + clock().hms + ' ' + st.m.host; }
  function logAuth(text) { var n = st.fs['/var/log/auth.log']; if (n && !n.dir) n.text += '\n' + stamp() + ' ' + text; }
  function logSvc(name, text) { var j = st.m.journal; (j[name] = j[name] || []).push(stamp() + ' ' + name + '[' + (400 + (st.count || 0)) + ']: ' + text); }
  var hasPkg = function (p) { return !!(st.m && (st.m.pkgs[p] || PRE[p])); };
  function nextUid() { var u = 1000; Object.keys(st.m.users).forEach(function (k) { if (!st.m.users[k].system && st.m.users[k].uid >= u) u = st.m.users[k].uid + 1; }); return u; }
  function syncAccounts() {
    var m = st.m, pw = ['root:x:0:0:root:/root:/bin/bash'], gr = ['root:x:0:'], names = Object.keys(m.users);
    names.forEach(function (u) { var x = m.users[u]; pw.push(u + ':x:' + x.uid + ':' + x.uid + '::' + (x.system ? '/var/lib/' + u + ':/usr/sbin/nologin' : '/home/' + u + ':/bin/bash')); });
    var all = {}; names.forEach(function (u) { m.users[u].groups.forEach(function (g) { all[g] = 1; }); }); Object.keys(m.groups).forEach(function (g) { all[g] = 1; });
    Object.keys(all).forEach(function (g) { var mem = names.filter(function (u) { return m.users[u].groups.indexOf(g) >= 0; }); gr.push(g + ':x:' + (GIDS[g] !== undefined ? GIDS[g] : m.groups[g]) + ':' + mem.join(',')); });
    names.forEach(function (u) { gr.push(u + ':x:' + m.users[u].uid + ':'); });
    [['/etc/passwd', pw], ['/etc/group', gr]].forEach(function (x) { var n = st.fs[x[0]]; if (n) n.text = x[1].join('\n'); else { n = { dir: false, text: x[1].join('\n'), owner: 'root', mode: 0o644, group: 'root' }; st.fs[x[0]] = n; } });
  }
  function addUser(name, groups, system) {
    st.m.users[name] = { uid: system ? 990 + Object.keys(st.m.users).length : nextUid(), groups: groups || [], system: !!system };
    if (!system) { var h = '/home/' + name; st.fs[h] = { dir: true, owner: name, group: name, mode: 0o700 }; }
    syncAccounts();
  }
  function newMachine(kind) {
    var pi = kind === 'pi';
    var lab = !!spec.lab;
    var m = { kind: kind, host: lab ? (pi ? 'target' : 'kali') : (pi ? 'raspberrypi' : 'laptop'), ip: lab ? (pi ? '10.0.0.2' : '10.0.0.5') : (pi ? '192.168.1.23' : '192.168.1.20'), cfgLoaded: {}, pkgs: {}, svc: {}, users: {}, groups: {}, cron: {}, ufw: { on: false, rules: [] },
      aptUpdated: spec.updated0, net: spec.net0, pending: spec.pending0, journal: {}, boot: 0, locked: false, smbLoaded: '', started: 0 };
    return m;
  }
  function installPkg(p) {
    var m = st.m; m.pkgs[p] = 1;
    if (p === 'samba') {
      st.fs['/etc/samba/smb.conf'] = { dir: false, text: '[global]\nworkgroup = WORKGROUP\nserver role = standalone server', owner: 'root', group: 'root', mode: 0o644 };
      m.smbLoaded = st.fs['/etc/samba/smb.conf'].text;
    }
    if (p === 'jellyfin') { addUser('jellyfin', [], true); st.fs['/var/lib/jellyfin'] = { dir: true, owner: 'jellyfin', group: 'jellyfin', mode: 0o755 }; }
    var sv = PKGSVC[p];
    if (sv) { m.svc[sv] = { on: true, boot: true }; logSvc(sv, 'Started ' + SVC[sv].desc + '.'); }
  }
  function removePkg(p) { var m = st.m; delete m.pkgs[p]; var sv = PKGSVC[p]; if (sv) delete m.svc[sv]; }
  // The lab's target: an old, over-open Pi. Services, versions, a loose ssh config and a log with a guessing run in it.
  function labTarget(m) {
    addUser('admin', ['sudo']);
    ['vsftpd', 'telnet', 'apache2'].forEach(function (n) { m.svc[n] = { on: true, boot: true }; logSvc(n, 'Started ' + SVC[n].desc + '.'); });
    m.ver = { ssh: { v: 'OpenSSH 7.2p2', old: true }, vsftpd: { v: 'vsftpd 2.0.8', old: true }, apache2: { v: 'Apache httpd 2.4.18', old: true }, telnet: { v: 'Linux telnetd', old: false } };
    var conf = 'Port 22\nPermitRootLogin yes\nPasswordAuthentication yes';
    st.fs['/etc/ssh'] = { dir: true, owner: 'root', group: 'root', mode: 0o755 };
    st.fs['/etc/ssh/sshd_config'] = { dir: false, text: conf, owner: 'root', group: 'root', mode: 0o644 };
    m.cfgLoaded['/etc/ssh/sshd_config'] = conf;
    var log = st.fs['/var/log/auth.log'], lines = [];
    for (var i = 0; i < 14; i++) lines.push('Oct 25 09:' + (10 + i) + ':0' + (i % 10) + ' target sshd[5' + (10 + i) + ']: Failed password for ' + (i % 4 === 3 ? 'invalid user admin1' : 'root') + ' from 10.0.0.9 port 5' + (4000 + i * 7) + ' ssh2');
    lines.push('Oct 25 09:24:41 target sshd[540]: Accepted password for admin from 10.0.0.7 port 51022 ssh2');
    if (log) log.text = lines.join('\n');
  }
  function buildMachine(kind) {
    var back = snapNow(), m;
    var fsn = spec.lab && kind === 'laptop' ? 'kali' : kind;
    st.fs = fresh(fsn); st.m = m = newMachine(kind); st.root = false;
    var login = (kind === spec.kind0 && spec.login0) || FS[fsn].user;
    setUser('root'); HOST = m.host;
    if (kind === 'pi') {
      m.users.pi = { uid: 1000, groups: ['sudo', 'users'], system: false };
      m.svc.ssh = { on: true, boot: true }; m.svc.cron = { on: true, boot: true };
      logSvc('ssh', 'Server listening on 0.0.0.0 port 22.'); logSvc('cron', 'Started Regular background program processing daemon.');
      syncAccounts();
      spec.pkgs0.forEach(function (p) { if (CATALOG[p]) installPkg(p); });
      if (spec.lab) labTarget(m);
    } else { m.users[spec.lab ? 'kali' : 'sam'] = { uid: 1000, groups: ['sudo'], system: false }; syncAccounts(); }
    spec.users0.forEach(function (x) { var i = x.indexOf(':'), u = i < 0 ? x : x.slice(0, i), g = i < 0 ? '' : x.slice(i + 1).trim(); if (!m.users[u]) addUser(u, []); if (g) { if (!m.groups[g] && GIDS[g] === undefined) m.groups[g] = 1001 + Object.keys(m.groups).length; if (m.users[u].groups.indexOf(g) < 0) m.users[u].groups.push(g); } });
    spec.stopped0.forEach(function (n) { if (m.svc[n]) m.svc[n].on = false; });
    spec.disabled0.forEach(function (n) { if (m.svc[n]) m.svc[n].boot = false; });
    if (spec.ufw0 && kind === 'pi') { m.pkgs.ufw = 1; m.ufw.on = true; m.ufw.rules.push({ port: 22, act: 'allow' }); }
    syncAccounts();
    setUser(m.users[login] ? login : FS[fsn].user);
    st.cwd = HOME;
    var mach = snapNow(); restore(back); return mach;
  }
  function snapNow() { return { fs: st.fs, cwd: st.cwd, user: USER, m: st.m }; }
  function restore(o) { st.fs = o.fs; st.cwd = o.cwd; setUser(o.user); st.m = o.m; st.root = false; HOST = o.m ? o.m.host : 'school'; }

  var human = function (n) { return hum(n); };
  function used(prefixTest) { var t = 0; Object.keys(st.fs).forEach(function (q) { if (prefixTest(q)) t += sizeOf(st.fs[q]); }); return t; }
  function diskLine(dev, size, base, mount, test) {
    var u = base + used(test), pct = Math.min(100, Math.round(u / size * 100));
    return { pct: pct, row: (dev + '              ').slice(0, 15) + ('     ' + human(size)).slice(-5) + ('      ' + human(u)).slice(-6) + ('      ' + human(Math.max(0, size - u))).slice(-6) + ('    ' + pct + '%').slice(-5) + ' ' + mount };
  }
  var onUsb = function (q) { return q === '/media/usb' || q.indexOf('/media/usb/') === 0; };
  function disk() { return diskLine('/dev/mmcblk0p2', 8e9, 2.1e9, '/', function (q) { return !onUsb(q) && q !== '/'; }); }
  function usb() { return diskLine('/dev/sda1', 16e9, 0.1e9, '/media/usb', onUsb); }

  function portListening(port) { var m = st.m, hit = false; Object.keys(m.svc).forEach(function (n) { if (m.svc[n].on && SVC[n] && SVC[n].ports.indexOf(port) >= 0) hit = true; }); return hit; }
  function portReachable(port) { var u = st.m.ufw; if (!portListening(port)) return false; if (!u.on) return true; return u.rules.some(function (r) { return r.port === port && r.act === 'allow'; }); }
  function cronLines(u) { return (st.m && st.m.cron[u]) || []; }
  function cronFieldOk(v, lo, hi) {
    return v.split(',').every(function (p) {
      var m;
      if (p === '*') return true;
      if ((m = /^\*\/(\d+)$/.exec(p))) return +m[1] >= 1 && +m[1] <= hi;
      if ((m = /^(\d+)-(\d+)$/.exec(p))) return +m[1] >= lo && +m[2] <= hi && +m[1] <= +m[2];
      return /^\d+$/.test(p) && +p >= lo && +p <= hi;
    });
  }
  function canAccess(u, path, what) {
    var keepU = USER, keepR = st.root, ok = true; USER = u; st.root = false;
    try {
      var parts = path.split('/').filter(Boolean), p = '';
      for (var i = 0; i < parts.length - 1; i++) { p += '/' + parts[i]; var d = st.fs[p]; if (!d || !can(d, 'x')) { ok = false; break; } }
      var n = st.fs[path]; if (ok && (!n || !can(n, what))) ok = false;
    } finally { USER = keepU; st.root = keepR; }
    return ok;
  }
  function needRoot(cmd, hint) { if (!isRoot()) throw new Err(hint || (cmd + ': only an administrator can do that. Try sudo ' + cmd)); }
  function execArgs(argv, input) { var name = argv[0], fn = lookup(name); st.used[name] = 1; return fn(argv.slice(1), input) || ''; }

  var SYS = {
    help: function () { return 'Commands: pwd, ls, cd, cat, grep, wc, sort, uniq, head, echo, touch, mkdir, cp, mv, rm, chmod, whoami, history, clear\nAdmin: sudo, apt, systemctl, journalctl, adduser, usermod, groups, id, su, chown, chgrp, tee, crontab, tar, df, du, ss, hostname, ping, ssh, date\nJoin commands with | (a pipe). Save output with > file.'; },
    sudo: function (a, input) {
      if (!a.length) throw new Err('sudo: usage: sudo command (runs the command as the administrator)');
      if (!isRoot() && !inGroup(USER, 'sudo')) { logAuth('sudo: ' + USER + ' : user NOT in sudoers ; COMMAND=' + a.join(' ')); throw new Err(USER + ' is not in the sudoers file. This incident will be reported.'); }
      logAuth('sudo: ' + USER + ' : TTY=pts/0 ; PWD=' + st.cwd + ' ; USER=root ; COMMAND=' + (spec.lab ? '/usr/bin/' + a[0] : a.join(' ')));
      var was = st.root; st.root = true;
      try { return execArgs(a, input); } finally { st.root = was; }
    },
    apt: function (a) {
      var fr = flags(a), r = fr[1], sub = r[0], pk = r.slice(1), m = st.m;
      if (!sub) throw new Err('apt: try apt update, apt install name, apt remove name or apt search word');
      var lock = function () { if (!isRoot()) throw new Err('E: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied)\nE: Unable to acquire the dpkg frontend lock, are you root? Try: sudo apt ' + r.join(' ')); };
      if (sub === 'search') {
        if (!pk[0]) throw new Err('apt search: search for what? Try apt search samba');
        if (!m.aptUpdated) return '(nothing found: the package lists are empty, so run sudo apt update first)';
        var term = pk[0].toLowerCase(), hits = Object.keys(CATALOG).filter(function (n) { return n.indexOf(term) >= 0 || CATALOG[n].toLowerCase().indexOf(term) >= 0; });
        return hits.length ? hits.map(function (n) { return n + '/stable' + (m.pkgs[n] ? ' [installed]' : '') + '\n  ' + CATALOG[n]; }).join('\n\n') : '(nothing found)';
      }
      if (sub === 'list') {
        if (pk.indexOf('--installed') >= 0) return Object.keys(PRE).concat(Object.keys(m.pkgs)).map(function (n) { return n + '/stable,now [installed]'; }).join('\n');
        return Object.keys(CATALOG).map(function (n) { return n + '/stable'; }).join('\n');
      }
      lock();
      var noNet = 'W: Failed to fetch the software lists: no internet and no local software mirror on this network (ask your teacher)';
      if (sub === 'update') {
        if (!m.net) throw new Err("Err:1 http://deb.debian.org/debian stable InRelease\n  Temporary failure resolving 'deb.debian.org'\n" + noNet);
        m.aptUpdated = true;
        if (spec.lab) return 'Get:1 http://mirror.lab/debian stable InRelease [151 kB]\n(The lab has no internet: this is the lab\'s own local software mirror.)\nReading package lists... Done\n' + (m.pending ? m.pending + " packages can be upgraded." : 'All packages are up to date.');
        return 'Get:1 http://deb.debian.org/debian stable InRelease [151 kB]\nGet:2 http://archive.raspberrypi.com/debian stable InRelease [23 kB]\nFetched 174 kB in 2s\nReading package lists... Done\n' + (m.pending ? m.pending + " packages can be upgraded. Run 'apt list --upgradable' to see them." : 'All packages are up to date.');
      }
      if (sub === 'upgrade' || sub === 'full-upgrade') {
        if (!m.net) throw new Err(noNet);
        var n = m.aptUpdated ? m.pending : 0; m.pending = m.aptUpdated ? 0 : m.pending;
        if (n && m.ver) Object.keys(NEWVER).forEach(function (k) { if (m.ver[k]) m.ver[k] = { v: NEWVER[k], old: false }; });
        return 'Reading package lists... Done\nCalculating upgrade... Done\n' + n + ' upgraded, 0 newly installed, 0 to remove and 0 not upgraded.' + (n ? '\nSetting up ' + n + ' packages... Done' : '') + (m.aptUpdated ? '' : '\n(Nothing was found to upgrade: run sudo apt update first so apt knows what is new.)');
      }
      if (sub === 'install') {
        if (!pk.length) throw new Err('apt install: install what? Try sudo apt install tree');
        var out = [];
        pk.forEach(function (p) {
          if (hasPkg(p)) { out.push(p + ' is already the newest version.'); return; }
          if (!CATALOG[p] || !m.aptUpdated) throw new Err('E: Unable to locate package ' + p + (CATALOG[p] && !m.aptUpdated ? '\n(The package lists are empty on a fresh system: run sudo apt update first.)' : ''));
          if (!m.net) throw new Err('E: Failed to fetch ' + p + '\n' + noNet);
          installPkg(p);
          out.push('Reading package lists... Done\nThe following NEW packages will be installed:\n  ' + p + '\nFetched ' + (p === 'jellyfin' ? '96' : p === 'samba' ? '4.1' : '0.4') + ' MB in 3s\nSetting up ' + p + ' ...' + (PKGSVC[p] ? '\n' + PKGSVC[p] + '.service is now running and set to start at boot.' : ''));
        });
        return out.join('\n');
      }
      if (sub === 'remove' || sub === 'purge') {
        if (!pk.length) throw new Err('apt remove: remove what? Try sudo apt remove tree');
        return pk.map(function (p) { if (!m.pkgs[p]) return p + ' is not installed, so it cannot be removed.'; removePkg(p); return 'Removing ' + p + ' ...' + (PKGSVC[p] ? '\n' + PKGSVC[p] + '.service stopped.' : ''); }).join('\n');
      }
      throw new Err('apt: ' + sub + ': try update, upgrade, install, remove, search or list');
    },
    systemctl: function (a) {
      var fr = flags(a), r = fr[1], sub = r[0], name = (r[1] || '').replace(/\.service$/, ''), m = st.m;
      if (sub === 'list-units') return Object.keys(m.svc).filter(function (n) { return m.svc[n].on; }).map(function (n) { return n + '.service  loaded active running  ' + SVC[n].desc; }).join('\n');
      if (!sub || !name) throw new Err('systemctl: try systemctl status name (for example systemctl status ssh)');
      var sv = m.svc[name];
      if (!sv) throw new Err('Unit ' + name + '.service could not be found.' + (SVC[name] && SVC[name].pkg ? ' (It comes with the ' + SVC[name].pkg + ' package: is that installed?)' : ''));
      if (sub === 'status') {
        var lines = (m.journal[name] || []).slice(-3);
        return (sv.on ? '● ' : '○ ') + name + '.service - ' + SVC[name].desc + '\n     Loaded: loaded (' + (sv.boot ? 'enabled' : 'disabled') + ')\n     Active: ' + (sv.on ? 'active (running)' : 'inactive (dead)') + (lines.length ? '\n\n' + lines.join('\n') : '');
      }
      if (sub === 'is-active') return sv.on ? 'active' : 'inactive';
      if (sub === 'is-enabled') return sv.boot ? 'enabled' : 'disabled';
      if (['start', 'stop', 'restart', 'reload', 'enable', 'disable'].indexOf(sub) < 0) throw new Err('systemctl: ' + sub + ': try status, start, stop, restart, enable or disable');
      if (!isRoot()) throw new Err('Failed to ' + sub + ' ' + name + '.service: Interactive authentication required.\n(Changing services needs an administrator: try sudo systemctl ' + sub + ' ' + name + ')');
      var loadCfg = function () { if (name === 'ssh' && st.fs['/etc/ssh/sshd_config']) { m.cfgLoaded = m.cfgLoaded || {}; m.cfgLoaded['/etc/ssh/sshd_config'] = st.fs['/etc/ssh/sshd_config'].text; } };
      if (sub === 'start') { loadCfg(); sv.on = true; if (name === 'smbd') m.smbLoaded = (st.fs['/etc/samba/smb.conf'] || {}).text || ''; logSvc(name, 'Started ' + SVC[name].desc + '.'); return ''; }
      if (sub === 'stop') { sv.on = false; logSvc(name, 'Stopped ' + SVC[name].desc + '.'); return ''; }
      if (sub === 'restart' || sub === 'reload') { loadCfg(); sv.on = true; if (name === 'smbd') m.smbLoaded = (st.fs['/etc/samba/smb.conf'] || {}).text || ''; logSvc(name, (sub === 'restart' ? 'Restarted ' : 'Reloaded ') + SVC[name].desc + ' (settings read again).'); return ''; }
      if (sub === 'enable') { sv.boot = true; return 'Created symlink /etc/systemd/system/multi-user.target.wants/' + name + '.service.'; }
      sv.boot = false; return 'Removed /etc/systemd/system/multi-user.target.wants/' + name + '.service.';
    },
    journalctl: function (a) {
      var u = null, n = 10;
      for (var i = 0; i < a.length; i++) { if (a[i] === '-u') u = (a[++i] || '').replace(/\.service$/, ''); else if (a[i] === '-n') n = +a[++i] || 10; }
      if (!u) throw new Err('journalctl: try journalctl -u name (for example journalctl -u ssh)');
      var l = st.m.journal[u];
      if (!st.m.svc[u] && !l) throw new Err('journalctl: no logs for ' + u + ' (is it installed?)');
      return l && l.length ? l.slice(-n).join('\n') : '-- No entries --';
    },
    adduser: function (a) {
      needRoot('adduser', 'adduser: only an administrator can add users. Try sudo adduser name');
      var r = flags(a)[1], u = r[0], g = r[1], m = st.m;
      if (!u) throw new Err('adduser: add which user? Try sudo adduser alex');
      if (!/^[a-z][a-z0-9_-]*$/.test(u)) throw new Err('adduser: names use lowercase letters and digits, such as alex');
      if (g) {
        if (!m.users[u]) throw new Err("adduser: The user `" + u + "' does not exist.");
        if (GIDS[g] === undefined && !m.groups[g]) throw new Err("adduser: The group `" + g + "' does not exist. Make it first: sudo groupadd " + g);
        if (m.users[u].groups.indexOf(g) < 0) m.users[u].groups.push(g);
        syncAccounts(); return "Adding user `" + u + "' to group `" + g + "' ...\nDone.";
      }
      if (m.users[u]) throw new Err("adduser: The user `" + u + "' already exists.");
      addUser(u, []);
      return "Adding user `" + u + "' ...\nAdding new group `" + u + "' (" + m.users[u].uid + ") ...\nAdding new user `" + u + "' (" + m.users[u].uid + ") with group `" + u + "' ...\nCreating home directory `/home/" + u + "' ...\n(A real Pi now asks you to choose a password for " + u + ".)";
    },
    deluser: function (a) {
      needRoot('deluser', 'deluser: only an administrator can remove users. Try sudo deluser name');
      var fr = flags(a), u = fr[1][0], m = st.m;
      if (!u || !m.users[u]) throw new Err("deluser: The user `" + (u || '') + "' does not exist.");
      if (u === 'pi' && USER === 'pi') throw new Err("deluser: you are logged in as " + u + ": you cannot remove yourself.");
      delete m.users[u]; var rm = a.indexOf('--remove-home') >= 0;
      if (rm) Object.keys(st.fs).filter(function (q) { return q === '/home/' + u || q.indexOf('/home/' + u + '/') === 0; }).forEach(function (q) { delete st.fs[q]; });
      syncAccounts(); return "Removing user `" + u + "' ...\n" + (rm ? 'Removing their home folder too.' : 'Their files stay behind in /home/' + u + ' (use --remove-home to remove them).') + '\nDone.';
    },
    groupadd: function (a) {
      needRoot('groupadd', 'groupadd: only an administrator can make groups. Try sudo groupadd name');
      var g = flags(a)[1][0], m = st.m;
      if (!g || !/^[a-z][a-z0-9_-]*$/.test(g)) throw new Err('groupadd: make which group? Try sudo groupadd class');
      if (m.groups[g] || GIDS[g] !== undefined) throw new Err("groupadd: group '" + g + "' already exists");
      m.groups[g] = 1001 + Object.keys(m.groups).length; syncAccounts(); return '';
    },
    usermod: function (a) {
      needRoot('usermod', 'usermod: only an administrator can change users. Try sudo usermod -aG group user');
      var hasA = a.some(function (x) { return /^-[a-zA-Z]*a/.test(x); }), gi = -1;
      a.forEach(function (x, i) { if (/^-[a-zA-Z]*G/.test(x)) gi = i; });
      var rest = a.filter(function (x) { return !/^-/.test(x); });
      if (gi < 0 || rest.length < 2) throw new Err('usermod: try sudo usermod -aG group user (the -a matters: it adds to the groups the user is in already)');
      var g = rest[0], u = rest[1], m = st.m;
      if (!m.users[u]) throw new Err("usermod: user '" + u + "' does not exist");
      if (GIDS[g] === undefined && !m.groups[g]) throw new Err("usermod: group '" + g + "' does not exist. Make it first: sudo groupadd " + g);
      if (!hasA) m.users[u].groups = [];
      if (m.users[u].groups.indexOf(g) < 0) m.users[u].groups.push(g);
      syncAccounts();
      return hasA ? '' : '(Without -a, ' + u + ' was taken out of every other group: this is the classic slip. Use -aG.)';
    },
    id: function (a) {
      var u = a[0] || USER, m = st.m;
      if (u !== 'root' && !m.users[u]) throw new Err("id: '" + u + "': no such user");
      if (u === 'root') return 'uid=0(root) gid=0(root) groups=0(root)';
      var x = m.users[u], gs = [x.uid + '(' + u + ')'];
      x.groups.forEach(function (g) { gs.push((GIDS[g] !== undefined ? GIDS[g] : m.groups[g]) + '(' + g + ')'); });
      return 'uid=' + x.uid + '(' + u + ') gid=' + x.uid + '(' + u + ') groups=' + gs.join(',');
    },
    groups: function (a) {
      var u = a[0] || USER, m = st.m;
      if (u === 'root') return 'root';
      if (!m.users[u]) throw new Err("groups: '" + u + "': no such user");
      return [u].concat(m.users[u].groups).join(' ');
    },
    su: function (a) {
      var r = a.filter(function (x) { return x !== '-'; }), u = r[0];
      if (!u || u === 'root') throw new Err('su: Authentication failure. (The root account has no password on Raspberry Pi OS: use sudo instead.)');
      if (!st.m.users[u]) throw new Err("su: user " + u + " does not exist");
      st.stack.push({ kind: 'su', user: USER, cwd: st.cwd });
      setUser(u); st.cwd = st.fs[HOME] ? HOME : '/';
      return '(Pretend: no password needed here. On a real Pi you would type ' + u + "'s password. Type exit to go back.)";
    },
    exit: function () {
      var top = st.stack.pop();
      if (!top) throw new Err('exit: this is the only session. (On a real Pi, exit logs you out.)');
      if (top.kind === 'su') { setUser(top.user); st.cwd = top.cwd; return ''; }
      st.pi = snapNow(); restore(top.back);
      return 'Connection to ' + st.pi.m.host + ' closed. You are back on ' + (spec.lab ? 'Kali' : 'your laptop') + '.';
    },
    chown: function (a) {
      needRoot('chown', 'chown: only an administrator can give a file to someone else. Try sudo chown user file');
      var fr = flags(a), rec = fr[0].R || fr[0].r, r = fr[1];
      if (r.length < 2) throw new Err('chown: try sudo chown alex file or sudo chown alex:class file');
      var parts = r[0].split(':'), u = parts[0], g = parts[1], full = resolve(r[1]);
      if (!st.fs[full]) throw new Err('chown: ' + r[1] + ': No such file or folder');
      if (u && u !== 'root' && !st.m.users[u]) throw new Err("chown: invalid user: '" + u + "'");
      Object.keys(st.fs).filter(function (q) { return q === full || (rec && q.indexOf(full + '/') === 0); }).forEach(function (q) { if (u) st.fs[q].owner = u; if (g) st.fs[q].group = g; });
      return '';
    },
    chgrp: function (a) {
      var fr = flags(a), rec = fr[0].R || fr[0].r, r = fr[1];
      if (r.length < 2) throw new Err('chgrp: try sudo chgrp class folder');
      var full = resolve(r[1]), n = st.fs[full];
      if (!n) throw new Err('chgrp: ' + r[1] + ': No such file or folder');
      if (!isOwner(n)) throw new Err('chgrp: ' + r[1] + ': Only the owner or an administrator can change the group');
      if (GIDS[r[0]] === undefined && !st.m.groups[r[0]] && !st.m.users[r[0]]) throw new Err("chgrp: invalid group: '" + r[0] + "'");
      Object.keys(st.fs).filter(function (q) { return q === full || (rec && q.indexOf(full + '/') === 0); }).forEach(function (q) { st.fs[q].group = r[0]; });
      return '';
    },
    tee: function (a, input) {
      var fr = flags(a), app = fr[0].a, files = fr[1];
      if (!files.length) throw new Err('tee: save into which file? Try echo hello | tee file');
      files.forEach(function (p) {
        var full = resolve(p), n = st.fs[full];
        if (n && n.dir) throw new Err('tee: ' + p + ': Is a folder');
        if (n && !can(n, 'w')) throw new Err('tee: ' + p + ': Permission denied (tee runs as you unless you use sudo tee)');
        if (!n) { if (!st.fs[parent(full)]) throw new Err('tee: ' + p + ': No such folder'); writable(parent(full), 'tee'); n = st.fs[full] = newNode(false, ''); if (isRoot()) { n.owner = 'root'; n.group = 'root'; } }
        n.text = app && n.text ? n.text + '\n' + input : input;
      });
      return input;
    },
    nano: function () { throw new Err('nano: a text editor opens here on a real Pi, but this pretend computer cannot show one. Use echo "text" > file, or echo "text" | tee -a file.'); },
    vim: function () { throw new Err('vim: a text editor opens here on a real Pi, but this pretend computer cannot show one. Use echo "text" > file, or echo "text" | tee -a file.'); },
    crontab: function (a, input) {
      var m = st.m, f = a[0];
      if (f === '-l') { var l = cronLines(USER); if (!l.length) throw new Err('no crontab for ' + USER); return l.join('\n'); }
      if (f === '-r') { delete m.cron[USER]; return ''; }
      if (f === '-e') return 'On a real Pi this opens an editor (nano) on your schedule. This pretend one cannot, so install a whole schedule from a pipe instead:\n  echo "30 2 * * * /home/pi/backup.sh" | crontab -\n(That replaces the old schedule, so put every line you want to keep in it.)';
      if (f === '-') {
        var lines = String(input || '').split('\n').filter(function (x) { return x.trim() && x.trim().charAt(0) !== '#'; }), ok = [], bad = '';
        lines.forEach(function (x, i) {
          if (bad) return;
          var t = x.trim().split(/\s+/);
          if (t.length < 6) { bad = '"-":' + (i + 1) + ': bad command (a schedule line is five time fields, then the command)'; return; }
          var names = ['minute', 'hour', 'day-of-month', 'month', 'day-of-week'], lo = [0, 0, 1, 1, 0], hi = [59, 23, 31, 12, 7];
          for (var k = 0; k < 5; k++) if (!cronFieldOk(t[k], lo[k], hi[k])) { bad = '"-":' + (i + 1) + ': bad ' + names[k]; return; }
          ok.push(x.trim());
        });
        if (bad) throw new Err(bad + "\nerrors in crontab file, can't install.");
        m.cron[USER] = ok; return '';
      }
      throw new Err('crontab: try crontab -l (list), crontab -e (edit) or echo "line" | crontab -');
    },
    date: function () { var c = clock(); return 'Sun 25 Oct 2026 ' + c.hms + ' AEDT'; },
    uptime: function () { return ' ' + clock().hms + ' up ' + (st.count || 0) + ' min,  1 user,  load average: 0.03, 0.02, 0.00'; },
    hostname: function (a) { return a[0] === '-I' ? st.m.ip : st.m.host; },
    ip: function () { return '1: lo: <LOOPBACK,UP>\n    inet 127.0.0.1/8\n2: eth0: <BROADCAST,MULTICAST,UP>\n    inet ' + st.m.ip + '/24 brd ' + st.m.ip.replace(/\.\d+$/, '.255'); },
    ping: function (a) {
      var h = flags(a)[1].filter(function (x) { return !/^\d+$/.test(x); })[0], m = st.m;
      if (!h) throw new Err('ping: ping which computer? Try ping ' + (spec.lab ? 'target' : 'raspberrypi.local'));
      var self = [m.host, m.host + '.local', m.ip, 'localhost', '127.0.0.1'], peer = khost(h) === 'pi' || (spec.lab ? (h === 'kali' || h === 'kali.local' || h === '10.0.0.5') : (h === '192.168.1.20' || h === 'laptop' || h === 'laptop.local' || h === '192.168.1.50'));
      var reach = self.indexOf(h) >= 0 || peer || (h.indexOf('.') >= 0 && !/\.local$/.test(h) && m.net && !spec.lab);
      if (!reach) throw new Err(/^[\d.]+$/.test(h) ? 'ping: connect: Network is unreachable' : (/\.local$/.test(h) ? 'ping: ' + h + ': Name or service not known' : 'ping: ' + h + ': Temporary failure in name resolution (no internet on this network)'));
      var ip = /^[\d.]+$/.test(h) ? h : spec.lab ? (khost(h) === 'pi' ? '10.0.0.2' : '10.0.0.5') : (khost(h) === 'pi' ? '192.168.1.23' : '192.168.1.23');
      var out = ['PING ' + h + ' (' + ip + ') 56 bytes of data.']; for (var i = 1; i <= 3; i++) out.push('64 bytes from ' + ip + ': icmp_seq=' + i + ' ttl=64 time=0.' + (3 + i) + ' ms');
      out.push('3 packets transmitted, 3 received, 0% packet loss'); return out.join('\n');
    },
    nmap: function (a) {
      if (!spec.lab) throw new Err('nmap: command not found.');
      if (st.m.kind === 'pi') throw new Err('nmap: command not found. (Scanning is done from Kali, the other computer. Type exit to go back.)');
      var fr = flags(a), f = fr[0], r = fr[1], pi = null, host = '', ports = null;
      for (var i = 0; i < a.length; i++) { if (a[i] === '-p') { ports = String(a[i + 1] || '').split(',').map(Number).filter(Boolean); i++; } else if (a[i].charAt(0) !== '-') host = a[i]; }
      if (!host) throw new Err('nmap: scan which computer? Try nmap target (or nmap -sV target for versions)');
      if (!st.pi) st.pi = buildMachine('pi'); pi = st.pi.m;
      st.used.nmap = 1; if (a.indexOf('-sV') >= 0) st.usedSV = 1;
      var head = 'Starting Nmap 7.94 ( https://nmap.org )\n';
      if (a.indexOf('-sn') >= 0) {
        if (!/^10\.0\.0\./.test(host)) throw new Err('nmap: ' + host + ': only the lab network, 10.0.0.0/24, is on the lab sheet. Scan only what you are allowed to.');
        return head + 'Nmap scan report for kali (10.0.0.5)\nHost is up.\nNmap scan report for target (10.0.0.2)\nHost is up (0.0004s latency).\nNmap done: 256 IP addresses (2 hosts up) scanned in 2.1 seconds';
      }
      var tgt = LAB_HOSTS[host] === 'pi';
      if (host === 'kali' || host === 'localhost' || host === '10.0.0.5' || host === '127.0.0.1') return head + 'Nmap scan report for ' + host + '\nAll 1000 scanned ports on ' + host + ' are in ignored states.\n(Nothing is listening on this Kali computer.)';
      if (!tgt) throw new Err('nmap: ' + host + ': not on the lab sheet, or not reachable. (' + (/^[\d.]+$/.test(host) ? 'Note: Host seems down.' : 'Failed to resolve.') + ' Scan only the target, 10.0.0.2.)');
      var rows = [], fw = pi.ufw.on, shown = {};
      Object.keys(pi.svc).forEach(function (n) { if (pi.svc[n].on && SVC[n]) SVC[n].ports.forEach(function (pt) { if (!shown[pt] && (!ports || ports.indexOf(pt) >= 0)) { shown[pt] = { n: n, open: !fw || pi.ufw.rules.some(function (x) { return x.port === pt && x.act === 'allow'; }) }; } }); });
      Object.keys(shown).map(Number).sort(function (x, y) { return x - y; }).forEach(function (pt) {
        var sh = shown[pt], ver = f.s || a.indexOf('-sV') >= 0 ? ((pi.ver && pi.ver[sh.n] && pi.ver[sh.n].v) || '') : '';
        rows.push((pt + '/tcp      ').slice(0, 9) + ((sh.open ? 'open' : 'filtered') + '     ').slice(0, 9) + ((SVCNAME[pt] || sh.n) + '        ').slice(0, 9) + (sh.open ? ver : ''));
      });
      if (!rows.length) return head + 'Nmap scan report for target (10.0.0.2)\nHost is up (0.0004s latency).\nAll ports are closed or hidden.';
      return head + 'Nmap scan report for target (10.0.0.2)\nHost is up (0.0004s latency).\nPORT     STATE    SERVICE  ' + (a.indexOf('-sV') >= 0 ? 'VERSION' : '') + '\n' + rows.join('\n') + '\nNmap done: 1 IP address (1 host up) scanned in 1.4 seconds';
    },
    ss: function () {
      var m = st.m, rows = ['State   Local Address:Port    Process'];
      var seen = {};
      Object.keys(m.svc).forEach(function (n) { if (m.svc[n].on && SVC[n]) SVC[n].ports.forEach(function (p) { if (!seen[p]) { seen[p] = 1; rows.push('LISTEN  0.0.0.0:' + (p + '        ').slice(0, 8) + '      ' + n); } }); });
      return rows.join('\n');
    },
    ssh: function (a) {
      var t = flags(a)[1][0];
      if (!t) throw new Err('ssh: connect to what? Try ssh pi@raspberrypi.local (user@computer)');
      if (st.m.kind === 'pi') throw new Err('ssh: you are already on the ' + (spec.lab ? 'target' : 'Pi') + '. Try this from ' + (spec.lab ? 'Kali (a board that starts there)' : 'your laptop (a board that starts on a laptop)') + '.');
      var at = t.indexOf('@'), user = at < 0 ? USER : t.slice(0, at), host = at < 0 ? t : t.slice(at + 1);
      if (!khost(host)) throw new Err('ssh: Could not resolve hostname ' + host + ': Name or service not known');
      if (!st.pi) st.pi = buildMachine('pi');
      var pm = st.pi.m;
      if (pm.locked) throw new Err('ssh: connect to host ' + host + ' port 22: Connection timed out (the Pi has locked everyone out: its firewall blocks ssh. Only someone at its keyboard can fix that.)');
      if (!pm.svc.ssh || !pm.svc.ssh.on) throw new Err('ssh: connect to host ' + host + ' port 22: Connection refused (nothing is listening for ssh on the Pi: has the ssh service been stopped?)');
      if (!pm.users[user]) throw new Err(user + '@' + host + ': Permission denied (publickey,password). (You need an account on the Pi: it has no ' + user + '. Try ssh pi@' + host + ')');
      st.stack.push({ kind: 'ssh', back: snapNow() });
      var pi = st.pi; st.pi = null; st.fs = pi.fs; st.m = pm; st.root = false; HOST = pm.host; setUser(user); st.cwd = st.fs[HOME] ? HOME : '/';
      logAuth('sshd[700]: Accepted password for ' + user + ' from ' + (spec.lab ? '10.0.0.5' : '192.168.1.20') + ' port 50' + (200 + st.count) + ' ssh2');
      return '(Pretend: password accepted. On a real Pi you type ' + user + "'s password.)\nWelcome to Raspberry Pi OS. Type exit to come back to " + (spec.lab ? 'Kali' : 'your laptop') + '.';
    },
    reboot: function () { return SYS.shutdown(['-r']); },
    shutdown: function (a) {
      needRoot('shutdown', 'Failed to power off: Interactive authentication required. (Try sudo ' + (a[0] === '-r' ? 'reboot' : 'shutdown -h now') + ')');
      var m = st.m, restart = a[0] === '-r';
      Object.keys(m.svc).forEach(function (n) { m.svc[n].on = m.svc[n].boot; });
      m.boot++; st.root = false;
      var top = st.stack[st.stack.length - 1], msg = restart ? 'The Pi restarts. Services set to start at boot are running again; the others stay stopped.' : 'The Pi powers off. (On a real one, wait for the green light to stop flashing before you pull the power.) Press start again to turn it back on.';
      if (top && top.kind === 'ssh') { st.stack.pop(); st.pi = snapNow(); restore(top.back); return msg + '\nConnection to ' + st.pi.m.host + ' closed by remote host: you are back on ' + (spec.lab ? 'Kali' : 'your laptop') + '.'; }
      return msg;
    },
    df: function () {
      var d = disk(), rows = ['Filesystem      Size  Used Avail Use% Mounted on', d.row];
      if (st.fs['/media/usb']) rows.push(usb().row);
      return rows.join('\n');
    },
    du: function (a) {
      var fr = flags(a), r = fr[1], full = resolve(r[0] || '.');
      if (!st.fs[full]) throw new Err('du: ' + (r[0] || '.') + ': No such file or folder');
      var t = used(function (q) { return q === full || q.indexOf((full === '/' ? '' : full) + '/') === 0; });
      return hum(t) + '  ' + (r[0] || '.');
    },
    tar: function (a) {
      var mode = '', f = [], rest = [], C = null;
      for (var i = 0; i < a.length; i++) { if (a[i] === '-C') C = a[++i]; else if (/^-?[czxtvf]+$/.test(a[i]) && !mode) mode = a[i].replace(/^-/, ''); else rest.push(a[i]); }
      if (!mode || mode.indexOf('f') < 0 || !rest.length) throw new Err('tar: try tar -czf backup.tar.gz folder (make), tar -tzf backup.tar.gz (list) or tar -xzf backup.tar.gz (restore)');
      var arc = rest[0], files = rest.slice(1), afull = resolve(arc);
      if (mode.indexOf('c') >= 0) {
        if (!files.length) throw new Err('tar: nothing to put in the archive. Try tar -czf ' + arc + ' folder');
        var members = {}, total = 0;
        files.forEach(function (p) {
          var full = resolve(p), n = st.fs[full]; if (!n) throw new Err('tar: ' + p + ': No such file or folder');
          Object.keys(st.fs).filter(function (q) { return q === full || q.indexOf(full + '/') === 0; }).forEach(function (q) {
            var o = st.fs[q]; if (!o.dir && !can(o, 'r')) throw new Err('tar: ' + q + ': Cannot open: Permission denied');
            var rel = p.charAt(0) === '/' ? q.replace(/^\//, '') : (p.replace(/^\.\//, '').replace(/\/$/, '') + q.slice(full.length)); if (p === '.') rel = q.slice(full.length + 1) || '.';
            members[rel] = { dir: o.dir, text: o.text, size: o.size, mode: o.mode }; total += sizeOf(o);
          });
        });
        writable(parent(afull), 'tar');
        var an = newNode(false, '(an archive of ' + Object.keys(members).length + ' items)'); an.members = members; an.size = Math.round(total * 0.6); st.fs[afull] = an;
        return '';
      }
      var an2 = st.fs[afull]; if (!an2 || !an2.members) throw new Err('tar: ' + arc + ': Cannot open: No such archive');
      if (mode.indexOf('t') >= 0) return Object.keys(an2.members).join('\n');
      var base0 = C ? resolve(C) : st.cwd; writable(base0, 'tar');
      Object.keys(an2.members).sort().forEach(function (rel) {
        var o = an2.members[rel], to = (base0 === '/' ? '' : base0) + '/' + rel; mkdirs(st.fs, parent(to), USER, true);
        var n = newNode(o.dir, o.text, o.mode); if (o.size !== undefined) n.size = o.size; st.fs[to] = n;
      });
      return '';
    },
    tree: function (a) {
      var full = resolve(a[0] || '.'), out = [a[0] || '.'];
      if (!st.fs[full] || !st.fs[full].dir) throw new Err('tree: ' + (a[0] || '.') + ': not a folder');
      var walk = function (d, pre) { var ks = kids(d).filter(function (k) { return base(k).charAt(0) !== '.'; }); ks.forEach(function (k, i) { var last = i === ks.length - 1; out.push(pre + (last ? '└── ' : '├── ') + base(k)); if (st.fs[k].dir) walk(k, pre + (last ? '    ' : '│   ')); }); };
      walk(full, ''); return out.join('\n');
    },
    cowsay: function (a) { var t = a.join(' ') || 'moo'; return ' ' + new Array(t.length + 3).join('_') + '\n< ' + t + ' >\n ' + new Array(t.length + 3).join('-') + '\n        \\   ^__^\n         \\  (oo)\\_______\n            (__)\\       )\\/\\\n                ||----w |\n                ||     ||'; },
    ufw: function (a) {
      var u = st.m.ufw, sub = a[0];
      if (sub === 'status') return u.on ? 'Status: active\n\nTo          Action\n--          ------\n' + (u.rules.length ? u.rules.map(function (r) { return (r.port + '/tcp        ').slice(0, 12) + r.act.toUpperCase(); }).join('\n') : '(no rules: everything incoming is blocked)') : 'Status: inactive';
      needRoot('ufw ' + a.join(' '), 'ERROR: you need to be root to run this. Try sudo ufw ' + a.join(' '));
      if (sub === 'allow' || sub === 'deny') {
        var pn = a[1] === 'ssh' ? 22 : a[1] === 'samba' ? 445 : +String(a[1] || '').replace(/\/tcp$/, '');
        if (!pn) throw new Err('ufw: ' + sub + ' which port? Try sudo ufw allow 22 (or ufw allow ssh)');
        u.rules = u.rules.filter(function (r) { return r.port !== pn; }); u.rules.push({ port: pn, act: sub });
        return 'Rule ' + (sub === 'allow' ? 'added' : 'added (blocked)') + ': ' + pn + '/tcp';
      }
      if (sub === 'delete') { var pd = +String(a[2] || '').replace(/\/tcp$/, ''); u.rules = u.rules.filter(function (r) { return r.port !== pd; }); return 'Rule deleted'; }
      if (sub === 'enable') {
        var viaSsh = st.stack.some(function (x) { return x.kind === 'ssh'; }), has22 = u.rules.some(function (r) { return r.port === 22 && r.act === 'allow'; });
        u.on = true;
        if (viaSsh && !has22) {
          st.m.locked = true; var top = st.stack.pop(); st.pi = snapNow(); restore(top.back);
          return 'Command may disrupt existing ssh connections.\nFirewall is active and enabled on system startup.\n...your ssh session freezes and drops. You are back on your laptop. The Pi now blocks ssh, and nobody can reach it from here: only someone at its keyboard can fix it.\n(Next time: sudo ufw allow ssh first, then enable.)';
        }
        return 'Firewall is active and enabled on system startup.';
      }
      if (sub === 'disable') { u.on = false; st.m.locked = false; return 'Firewall stopped and disabled on system startup.'; }
      throw new Err('ufw: try ufw status, ufw allow 22, ufw deny 8096, ufw enable or ufw disable');
    },
    smbclient: function (a) {
      var m = st.m;
      if (a.indexOf('-L') < 0) throw new Err('smbclient: try smbclient -L localhost (list the shares this computer offers)');
      if (!m.svc.smbd || !m.svc.smbd.on) throw new Err('smbclient: connection to localhost failed (nothing is listening: is the smbd service running?)');
      var shares = [], re = /^\[([^\]]+)\]/;
      String(m.smbLoaded || '').split('\n').forEach(function (l) { var x = re.exec(l.trim()); if (x && x[1] !== 'global') shares.push(x[1]); });
      return '\tSharename       Type      Comment\n\t---------       ----      -------\n' + shares.map(function (s) { return '\t' + (s + '               ').slice(0, 16) + 'Disk'; }).join('\n') + (shares.length ? '\n' : '(no shares yet: smbd has not read a share from smb.conf)\n') + '\nSMB1 disabled -- no workgroup available';
    }
  };
  SYS['apt-get'] = SYS.apt;
  SYS.addgroup = SYS.groupadd;
  function lookup(name) {
    if (spec.sys && SYS[name]) {
      var pk = PKGCMD[name]; if (pk && !hasPkg(pk)) throw new Err(name + ': command not found.' + (CATALOG[pk] ? ' It comes with a package: try sudo apt install ' + pk : ''));
      if (st.m.kind === 'laptop' && LAPTOP_NO[name]) throw new Err(name + ': not on your laptop. That is a Raspberry Pi command: connect with ssh first.');
      return SYS[name];
    }
    if (CMDS[name]) return CMDS[name];
    throw new Err(name + ': command not found. Type help for the list.');
  }

  function tokens(s) { var out = [], m, re = /"([^"]*)"|'([^']*)'|(\S+)/g; while ((m = re.exec(s))) out.push(m[1] !== undefined ? m[1] : m[2] !== undefined ? m[2] : m[3]); return out; }
  function splitPipes(line) { var parts = [], cur = '', q = ''; for (var i = 0; i < line.length; i++) { var c = line[i]; if (q) { if (c === q) q = ''; cur += c; } else if (c === '"' || c === "'") { q = c; cur += c; } else if (c === '|') { parts.push(cur); cur = ''; } else cur += c; } parts.push(cur); return parts; }

  function run(line, quiet) {
    line = line.trim(); if (!line) return;
    var shown = prompt() + line;
    st.hist.push(line); st.count++;
    var out = '', err = '', pipe = 0, redir = 0;
    try {
      var segs = splitPipes(line); pipe = segs.length > 1 ? 1 : 0;
      var last = segs[segs.length - 1], rm = /\s(>>?)\s*(\S+)\s*$/.exec(' ' + last), target = null, append = false;
      if (rm) { redir = 1; target = rm[2]; append = rm[1] === '>>'; segs[segs.length - 1] = (' ' + last).slice(0, rm.index); }
      var input = '';
      segs.forEach(function (seg) {
        var t = tokens(seg); if (!t.length) throw new Err('Nothing before or after the |');
        var name = t[0], fn = lookup(name);
        st.used[name] = 1;
        input = String(fn(t.slice(1), input) || '');
      });
      if (target) {
        var full = resolve(target), n = st.fs[full];
        if (n && n.dir) throw new Err(target + ': Is a folder');
        if (n && !can(n, 'w')) throw new Err(target + ': Permission denied' + (spec.sys && /\bsudo\b/.test(line) ? '\n(The > is done by you, not by sudo, so you are still refused. Try: ... | sudo tee ' + target + ' (or tee -a to add to the end).)' : ''));
        if (!n) { if (!st.fs[parent(full)]) throw new Err(target + ': No such folder'); writable(parent(full), 'save'); st.fs[full] = newNode(false, ''); }
        st.fs[full].text = append && st.fs[full].text ? st.fs[full].text + '\n' + input : input;
        input = '';
      }
      out = input;
    } catch (e) { if (e instanceof Err) err = e.m; else throw e; }
    st.last = { out: out, err: err, pipe: pipe, redir: redir };
    if (quiet) return;
    st.lines.push({ cls: 'cmd', text: shown });
    if (out) st.lines.push({ cls: '', text: out });
    if (err) st.lines.push({ cls: 'err', text: err });
    if (st.lines.length > 400) st.lines = st.lines.slice(-400);
    if (spec.find) { var f = st.fs[resolve(spec.find)]; if (f && !f.dir && f.text && (out.indexOf(lines(f.text)[0]) >= 0 || out.indexOf(lines(f.text).slice(-1)[0]) >= 0)) st.found = 1; }
  }
  var prompt = function () { return USER + '@' + HOST + ':' + (st.cwd === HOME ? '~' : st.cwd.indexOf(HOME + '/') === 0 ? '~' + st.cwd.slice(HOME.length) : st.cwd) + '$ '; };

  // ---------- drawing ----------
  function draw() {
    var host = B.el('board'); host.replaceChildren();
    var wrap = document.createElement('div'); wrap.className = 'shwrap' + (spec.tree0 ? ' withtree' : '');
    if (spec.tree0) {
      var tree = document.createElement('div'); tree.className = 'shtree'; tree.setAttribute('aria-label', 'Folders and files');
      var h = document.createElement('div'); h.className = 'shhead'; h.textContent = 'Folders'; tree.appendChild(h);
      var walk = function (d, depth) {
        kids(d).forEach(function (k) {
          var n = st.fs[k], nm = base(k);
          if (nm.charAt(0) === '.' && spec.tree0 !== 'all') return;
          var row = document.createElement('div'); row.className = 'shnode' + (n.dir ? ' dir' : '') + (k === st.cwd ? ' here' : '') + (nm.charAt(0) === '.' ? ' hidden' : '');
          row.style.paddingLeft = (depth * 14 + 4) + 'px'; row.textContent = (n.dir ? '▸ ' : '') + nm + (k === st.cwd ? '   ← you are here' : '');
          tree.appendChild(row);
          if (n.dir && (st.cwd === k || st.cwd.indexOf(k + '/') === 0 || depth < 2)) walk(k, depth + 1);
        });
      };
      var top = document.createElement('div'); top.className = 'shnode dir' + (st.cwd === HOME ? ' here' : ''); top.textContent = '▸ ' + HOME + (st.cwd === HOME ? '   ← you are here' : ''); tree.appendChild(top);
      walk(HOME, 1);
      wrap.appendChild(tree);
    }
    var term = document.createElement('div'); term.className = 'shterm';
    var outEl = document.createElement('div'); outEl.className = 'shout'; outEl.setAttribute('aria-live', 'polite');
    if (!st.lines.length) { var hi = document.createElement('div'); hi.className = 'shline note'; hi.textContent = 'A pretend computer. Type a command and press Enter (try help).'; outEl.appendChild(hi); }
    st.lines.forEach(function (l) { var d = document.createElement('div'); d.className = 'shline ' + l.cls; d.textContent = l.text; outEl.appendChild(d); });
    var row = document.createElement('div'); row.className = 'shrow';
    var pr = document.createElement('span'); pr.className = 'shprompt'; pr.textContent = prompt();
    var inp = document.createElement('input'); inp.type = 'text'; inp.className = 'shin'; inp.setAttribute('aria-label', 'Command'); inp.autocomplete = 'off'; inp.spellcheck = false; inp.autocapitalize = 'off';
    var hidx = st.hist.length;
    inp.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { var v = inp.value; B.moved = true; run(v); draw(); report(); var ni = B.el('board').querySelector('.shin'); if (ni) ni.focus(); }
      else if (e.key === 'ArrowUp') { if (hidx > 0) { hidx--; inp.value = st.hist[hidx]; } e.preventDefault(); }
      else if (e.key === 'ArrowDown') { if (hidx < st.hist.length) { hidx++; inp.value = st.hist[hidx] || ''; } e.preventDefault(); }
      else if (e.key === 'Tab') { e.preventDefault(); complete(inp); }
    });
    row.append(pr, inp);
    term.append(outEl, row);
    term.addEventListener('click', function (e) { if (e.target === term || e.target === outEl) inp.focus(); });
    wrap.appendChild(term);
    host.appendChild(wrap);
    outEl.scrollTop = outEl.scrollHeight;
  }
  function complete(inp) {
    var v = inp.value, m = /(\S*)$/.exec(v), word = m[1], dir = word.indexOf('/') >= 0 ? word.slice(0, word.lastIndexOf('/') + 1) : '', stem = word.slice(dir.length);
    var d = resolve(dir || '.'); if (!st.fs[d] || !st.fs[d].dir) return;
    var opts = kids(d).map(base).filter(function (n) { return n.indexOf(stem) === 0 && (stem.charAt(0) === '.' || n.charAt(0) !== '.'); });
    if (opts.length === 1) inp.value = v.slice(0, v.length - word.length) + dir + opts[0] + (st.fs[d === '/' ? '/' + opts[0] : d + '/' + opts[0]].dir ? '/' : '');
  }

  function paintPanel() {
    var panel = B.el('gpanel'); panel.replaceChildren();
    ui.work = document.createElement('p'); ui.work.className = 'rulework'; ui.work.id = 'gsum'; panel.appendChild(ui.work);
    var bar = document.createElement('div'); bar.className = 'gbar bbar';
    var again = document.createElement('button'); again.type = 'button'; again.textContent = 'Start again'; again.className = 'quiet'; again.addEventListener('click', B.restart);
    bar.appendChild(again); panel.appendChild(bar);
  }

  function report() {
    var L = st.last || { out: '', err: '', pipe: 0, redir: 0 }, outLines = lines(L.out);
    var num = /^\s*-?\d+\s*$/.test(L.out) ? +L.out : (/^\s*(\d+)\s/.test(L.out) && outLines.length === 1 ? +/^\s*(\d+)/.exec(L.out)[1] : -1);
    var w = spec.watch ? st.fs[resolve(spec.watch)] : null;
    var text = 'In ' + st.cwd + '. Commands run: ' + st.count + (L.err ? '. Last command failed' : '');
    ui.work.textContent = text; B.say(st.lines.length ? (L.err || (outLines.length ? outLines.length + ' line' + (outLines.length === 1 ? '' : 's') + ' of output' : 'Done')) : 'Type a command and press Enter');
    B.save({ st: { fs: st.fs, cwd: st.cwd, hist: st.hist, lines: st.lines.slice(-120), count: st.count, used: st.used, usedA: st.usedA, usedGrep: st.usedGrep, usedSV: st.usedSV, found: st.found, cds: st.cds, read: st.read, existed: st.existed, user: USER, m: st.m, stack: st.stack, pi: st.pi } });
    if (spec.gone && st.fs[resolve(spec.gone)]) st.existed = 1;
    var sv = {};
    if (spec.sys && st.m) {
      var m = st.m, nm = function (x) { return String(x || '').trim(); };
      var hasText = function (n, t) { return !!(n && !n.dir && n.text.indexOf(t) >= 0) ? 1 : 0; };
      var lab = { open: 0, risky: 0, old: 0, pw: 0, root: 0 };
      if (spec.lab) { if (m.kind === 'laptop' && !st.pi) st.pi = buildMachine('pi'); var tm = m.kind === 'pi' ? m : st.pi.m, fwx = tm.ufw.on;
        Object.keys(tm.svc).forEach(function (n) { var sv = tm.svc[n]; if (!sv.on || !SVC[n]) return; SVC[n].ports.forEach(function (pt) { var open = !fwx || tm.ufw.rules.some(function (x) { return x.port === pt && x.act === 'allow'; }); if (!open) return; lab.open++; if (pt === 21 || pt === 23) lab.risky++; if (tm.ver && tm.ver[n] && tm.ver[n].old) lab.old++; }); });
        var sc = (tm.cfgLoaded || {})['/etc/ssh/sshd_config'] || '', sshUp = tm.svc.ssh && tm.svc.ssh.on; lab.pw = sshUp && /PasswordAuthentication yes/.test(sc) ? 1 : 0; lab.root = sshUp && /PermitRootLogin yes/.test(sc) ? 1 : 0; }
      var hp = spec.has ? String(spec.has).split('|').map(nm) : null, gp = spec.group ? String(spec.group).split('|').map(nm) : null, wr = spec.writes ? nm(spec.writes).split(/\s+/) : null, nw = spec.nowrite ? nm(spec.nowrite).split(/\s+/) : null, ck = spec.cron ? nm(spec.cron).split(/\s+/) : null, mem = spec.member ? nm(spec.member).split(/\s+/) : null, acc = spec.access ? nm(spec.access).split(/\s+/) : null;
      sv = {
        on_pi: m.kind === 'pi' ? 1 : 0, as_user: spec.as && USER === spec.as ? 1 : 0,
        pkg_in: spec.pkg && hasPkg(spec.pkg) ? 1 : 0,
        svc_up: spec.svc && m.svc[spec.svc] && m.svc[spec.svc].on ? 1 : 0, svc_boot: spec.svc && m.svc[spec.svc] && m.svc[spec.svc].boot ? 1 : 0,
        port_up: spec.port && portListening(+spec.port) ? 1 : 0, port_reach: spec.port && portReachable(+spec.port) ? 1 : 0,
        user_ok: spec.who && m.users[nm(spec.who)] ? 1 : 0,
        in_group: mem && m.users[mem[0]] && (mem[0] === mem[1] || m.users[mem[0]].groups.indexOf(mem[1]) >= 0) ? 1 : 0,
        conf_has: hp && hp.slice(1).every(function (t) { return hasText(st.fs[hp[0]], t); }) ? 1 : 0,
        conf_live: hp && hp.length > 1 && hp.slice(1).every(function (t) { return String(hp[0] === '/etc/samba/smb.conf' ? m.smbLoaded : ((m.cfgLoaded || {})[hp[0]] || '')).indexOf(t) >= 0; }) ? 1 : 0,
        grp_is: gp && st.fs[gp[0]] && st.fs[gp[0]].group === gp[1] ? 1 : 0,
        can_write: wr && canAccess(wr[0], wr[1], 'w') ? 1 : 0, blocked: nw && !canAccess(nw[0], nw[1], 'w') ? 1 : 0,
        cron_has: ck && cronLines(USER).some(function (l) { return l.split(/\s+/).slice(0, 5).join(' ') === ck.join(' '); }) ? 1 : 0,
        pend_n: m.pending, open_n: lab.open, risky_n: lab.risky, old_n: lab.old, pw_login: lab.pw, root_login: lab.root, sv_used: st.usedSV ? 1 : 0, sudoers_n: Object.keys(m.users).filter(function (u) { return m.users[u].groups.indexOf('sudo') >= 0; }).length,
        ran_it: spec.ran && String(spec.ran).split(/[\s,]+/).filter(Boolean).every(function (c) { return st.used[c]; }) ? 1 : 0,
        cron_n: cronLines(USER).length, can_read: acc && canAccess(acc[0], acc[1], 'r') ? 1 : 0,
        fw_up: m.ufw.on ? 1 : 0, disk_pct: disk().pct, usb_pct: st.fs['/media/usb'] ? usb().pct : 0,
      };
    }
    B.post({ scope: { vars: Object.assign(sv, {
      w: spec.at && st.cwd === resolve(spec.at) ? 1 : 0, s: st.found ? 1 : 0,
      x: spec.exists && String(spec.exists).split(',').every(function (q) { return st.fs[resolve(q.trim())]; }) ? 1 : 0, z: spec.gone && !st.fs[resolve(spec.gone)] && st.existed ? 1 : 0,
      m: w ? +w.mode.toString(8) : -1, k: w && (w.mode & 4) ? 1 : 0,
      o: num, l: outLines.length, u: L.pipe, e: L.err ? 1 : 0, p: L.redir, n: st.count, h: Object.keys(st.used).length,
      a: st.usedA ? 1 : 0, g: st.usedGrep ? 1 : 0, d: st.cwd.split('/').filter(Boolean).length, c: st.cds,
    }), points: {} } }, text + (L.out ? '\n' + L.out : '') + (L.err ? '\n' + L.err : ''));
  }

  B.widget('shell', {
    sections: ['board', 'gpanel'],
    label: function () { return 'A pretend Linux terminal'; },
    parse: parse,
    redraw: function () { if (spec) { draw(); report(); } },
    start: function (freshStart) {
      spec = B.spec;
      var sv = freshStart ? null : B.saved(), s0 = sv && sv.st;
      if (s0 && s0.fs && s0.cwd && (!spec.sys || s0.m)) {
        st = Object.assign({ lines: [], hist: [], used: {}, read: {}, stack: [], root: false, pi: null }, s0); st.root = false;
        if (spec.sys) { setUser(st.user || FS[spec.kind0].user); HOST = st.m.host; } else { setUser('sam'); HOST = 'school'; }
      } else {
        st = { fs: null, cwd: '/', hist: [], lines: [], count: 0, used: {}, usedA: 0, usedGrep: 0, found: 0, cds: 0, read: {}, existed: 0, last: null, stack: [], root: false, m: null, pi: null };
        if (spec.sys) { var mach = buildMachine(spec.kind0); st.fs = mach.fs; st.m = mach.m; st.cwd = mach.cwd; setUser(mach.user); HOST = mach.m.host; }
        else { setUser('sam'); HOST = 'school'; st.fs = fresh(); }
        if (!spec.sys || spec.start0) { st.cwd = resolve(spec.start0 || HOME); if (!st.fs[st.cwd] || !st.fs[st.cwd].dir) st.cwd = HOME; }
        spec.run0.forEach(function (c) { run(c, true); });
        st.hist = []; st.count = 0; st.used = {}; st.usedA = 0; st.usedGrep = 0; st.usedSV = 0; st.cds = 0; st.last = null;
        if (spec.gone && st.fs[resolve(spec.gone)]) st.existed = 1;
      }
      paintPanel(); draw(); report();
    },
  });
})(WPB);
