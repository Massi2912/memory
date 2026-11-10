(() => {
  'use strict';

  /* ---------- Symbole (Bauhaus-Stil, als SVG) ---------- */
  const R = '#e0442e', Y = '#f2b52c', B = '#2f5bd3', T = '#1e9c8a', K = '#1a1f2b', P = '#ef8fb0';

  const checker = (() => {
    let s = '';
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        s += `<rect x="${16 + c * 23}" y="${16 + r * 23}" width="23" height="23" fill="${(r + c) % 2 ? T : K}"/>`;
      }
    }
    return s;
  })();

  const BODIES = [
    ['Sonne', `<circle cx="50" cy="50" r="17" fill="${Y}"/><circle cx="50" cy="50" r="31" fill="none" stroke="${R}" stroke-width="7" stroke-dasharray="4 8.17"/>`],
    ['Mond', `<path d="M48 22.07A30 30 0 1 0 72.8 65.47A25 25 0 1 1 48 22.07Z" fill="${B}"/><circle cx="73" cy="32" r="5" fill="${Y}"/>`],
    ['Welle', `<g fill="none" stroke-width="7" stroke-linecap="round"><path d="M14 34q9-12 18 0t18 0 18 0 18 0" stroke="${T}"/><path d="M14 52q9-12 18 0t18 0 18 0 18 0" stroke="${B}"/><path d="M14 70q9-12 18 0t18 0 18 0 18 0" stroke="${T}"/></g>`],
    ['Berg', `<polygon points="10,78 42,30 74,78" fill="${B}"/><polygon points="44,78 68,44 92,78" fill="${R}"/><circle cx="76" cy="26" r="8" fill="${Y}"/>`],
    ['Blume', `<g fill="${R}"><circle cx="50" cy="31" r="14"/><circle cx="69" cy="50" r="14"/><circle cx="50" cy="69" r="14"/><circle cx="31" cy="50" r="14"/></g><circle cx="50" cy="50" r="10" fill="${Y}"/>`],
    ['Pfeil', `<rect x="14" y="41" width="46" height="18" fill="${B}"/><polygon points="56,22 90,50 56,78" fill="${R}"/>`],
    ['Raute', `<polygon points="50,12 88,50 50,88 12,50" fill="${T}"/><polygon points="50,32 68,50 50,68 32,50" fill="${Y}"/>`],
    ['Tor', `<path fill-rule="evenodd" fill="${B}" d="M14 78V54a36 36 0 0 1 72 0v24zM34 78V58a16 16 0 0 1 32 0v20z"/><rect x="8" y="78" width="84" height="8" fill="${R}"/>`],
    ['Turm', `<rect x="24" y="62" width="52" height="24" fill="${B}"/><rect x="34" y="42" width="32" height="20" fill="${R}"/><rect x="44" y="24" width="12" height="18" fill="${Y}"/>`],
    ['Auge', `<path d="M8 50Q50 10 92 50Q50 90 8 50Z" fill="${B}"/><circle cx="50" cy="50" r="17" fill="${Y}"/><circle cx="50" cy="50" r="8" fill="${K}"/>`],
    ['Stern', `<circle cx="50" cy="50" r="38" fill="${B}"/><polygon points="50,18 58.2,40.7 82.3,41.5 63.3,56.3 70,79.5 50,66 30,79.5 36.7,56.3 17.7,41.5 41.8,40.7" fill="${Y}"/>`],
    ['Leiter', `<rect x="28" y="12" width="8" height="76" fill="${K}"/><rect x="64" y="12" width="8" height="76" fill="${K}"/><g fill="${R}"><rect x="36" y="24" width="28" height="7"/><rect x="36" y="40" width="28" height="7"/><rect x="36" y="56" width="28" height="7"/><rect x="36" y="72" width="28" height="7"/></g>`],
    ['Regenbogen', `<g fill="none" stroke-width="8" transform="translate(0 -2)"><path d="M14 78A36 36 0 0 1 86 78" stroke="${R}"/><path d="M26 78A24 24 0 0 1 74 78" stroke="${Y}"/><path d="M38 78A12 12 0 0 1 62 78" stroke="${B}"/></g>`],
    ['Spirale', `<path transform="translate(-6 3)" d="M50 50a6 6 0 0 1 12 0a12 12 0 0 1-24 0a18 18 0 0 1 36 0a24 24 0 0 1-48 0a30 30 0 0 1 60 0" fill="none" stroke="${R}" stroke-width="5" stroke-linecap="round"/>`],
    ['Schachbrett', checker],
    ['Kompass', `<circle cx="50" cy="50" r="35" fill="none" stroke="${K}" stroke-width="6"/><g transform="rotate(35 50 50)"><polygon points="50,18 59,50 41,50" fill="${R}"/><polygon points="50,82 59,50 41,50" fill="${B}"/></g><circle cx="50" cy="50" r="4.5" fill="${Y}"/>`],
    ['Segel', `<polygon points="47,14 47,66 14,66" fill="${R}"/><polygon points="53,26 53,66 82,66" fill="${Y}"/><path d="M14 72h72l-10 14H24z" fill="${K}"/>`],
    ['Tropfen', `<path d="M50 12C50 12 24 44 24 60a26 26 0 0 0 52 0C76 44 50 12 50 12z" fill="${B}"/><ellipse cx="40" cy="62" rx="4.5" ry="9" fill="#ffffff" opacity="0.45" transform="rotate(20 40 62)"/>`]
  ];

  const SYMBOLS = BODIES.map(([name, body]) => ({
    name,
    svg: `<svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">${body}</svg>`
  }));

  const STAR_POINTS = '50,18 58.2,40.7 82.3,41.5 63.3,56.3 70,79.5 50,66 30,79.5 36.7,56.3 17.7,41.5 41.8,40.7';

  /* ---------- Einstellungen ---------- */
  const SIZES = {
    '4x3': { cols: 4, rows: 3, index: 0 },
    '4x4': { cols: 4, rows: 4, index: 1 },
    '6x6': { cols: 6, rows: 6, index: 2 }
  };

  const PLAYER_COLORS = [R, B, T, Y];
  const MISMATCH_DELAY = 850;

  /* ---------- Elemente ---------- */
  const $ = (id) => document.getElementById(id);
  const appEl = $('app');
  const boardEl = $('board');
  const movesEl = $('moves');
  const timeEl = $('time');
  const pairsEl = $('pairs');
  const bestEl = $('best');
  const progressEl = $('progress');
  const scoreboardEl = $('scoreboard');
  const sizesEl = $('sizes');
  const playersEl = $('players');
  const statusEl = $('status');
  const restartBtn = $('restart');
  const soundBtn = $('sound');
  const namesBtn = $('names-btn');
  const namesDialog = $('names');
  const nameFieldsEl = $('name-fields');
  const namesCancel = $('names-cancel');
  const winDialog = $('win');
  const winTitleEl = $('win-title');
  const winText = $('win-text');
  const winScoresEl = $('win-scores');
  const winRecord = $('win-record');
  const starsEl = $('stars');
  const confettiCanvas = $('confetti');
  const sizeBtns = document.querySelectorAll('[data-size]');
  const playerBtns = document.querySelectorAll('[data-players]');

  /* ---------- Zustand ---------- */
  let size = '4x4';
  let players = 1;
  let current = 0;
  let scores = [0];
  let first = null;
  let second = null;
  let locked = false;
  let moves = 0;
  let matched = 0;
  let pairs = 0;
  let started = false;
  let finished = false;
  let startTime = 0;
  let pausedMs = 0;
  let elapsed = 0;
  let timerId = null;
  let mismatchId = null;
  let winId = null;
  let confettiRaf = 0;

  /* ---------- Speicher ---------- */
  const bestKey = (s) => 'memory-rekord-' + s;
  const SOUND_KEY = 'memory-ton';

  function readBest(s) {
    try { return JSON.parse(localStorage.getItem(bestKey(s))); }
    catch (e) { return null; }
  }

  function writeBest(s, value) {
    try { localStorage.setItem(bestKey(s), JSON.stringify(value)); }
    catch (e) { /* Speicher nicht verfügbar */ }
  }

  let soundOn = (() => {
    try { return localStorage.getItem(SOUND_KEY) !== 'aus'; }
    catch (e) { return true; }
  })();

  /* ---------- Spielernamen ---------- */
  const NAMES_KEY = 'memory-namen';

  function cleanName(v) {
    return String(v || '').replace(/\s+/g, ' ').trim().slice(0, 12);
  }

  function readNames() {
    try {
      const v = JSON.parse(localStorage.getItem(NAMES_KEY));
      if (Array.isArray(v)) return [0, 1, 2, 3].map((i) => cleanName(v[i]));
    } catch (e) { /* ignorieren */ }
    return ['', '', '', ''];
  }

  function saveNames() {
    try { localStorage.setItem(NAMES_KEY, JSON.stringify(names)); }
    catch (e) { /* Speicher nicht verfügbar */ }
  }

  function nameOf(i) {
    return names[i] || 'Spieler ' + (i + 1);
  }

  function esc(text) {
    return String(text).replace(/[&<>"']/g, (ch) => (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]
    ));
  }

  let names = readNames();

  /* ---------- Ton ---------- */
  let audio = null;

  function tone(freq, delay, dur, type, gain) {
    const t = audio.currentTime + delay;
    const osc = audio.createOscillator();
    const amp = audio.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    amp.gain.setValueAtTime(0.0001, t);
    amp.gain.exponentialRampToValueAtTime(gain, t + 0.01);
    amp.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(amp).connect(audio.destination);
    osc.start(t);
    osc.stop(t + dur + 0.05);
  }

  function play(kind) {
    if (!soundOn) return;
    try {
      audio = audio || new (window.AudioContext || window.webkitAudioContext)();
      if (audio.state === 'suspended') audio.resume();
      switch (kind) {
        case 'flip':
          tone(520, 0, 0.08, 'triangle', 0.05);
          break;
        case 'match':
          tone(660, 0, 0.18, 'sine', 0.09);
          tone(990, 0.09, 0.28, 'sine', 0.08);
          break;
        case 'miss':
          tone(220, 0, 0.18, 'sine', 0.07);
          tone(175, 0.09, 0.24, 'sine', 0.06);
          break;
        case 'win':
          [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.12, 0.45, 'sine', 0.08));
          break;
      }
    } catch (e) { /* Ton nicht verfügbar */ }
  }

  function renderSound() {
    soundBtn.setAttribute('aria-pressed', String(soundOn));
  }

  /* ---------- Hilfsfunktionen ---------- */
  function shuffle(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function formatTime(sec) {
    return Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0');
  }

  function announce(text) {
    statusEl.textContent = text;
  }

  /* ---------- Anzeige ---------- */
  function updateStats() {
    movesEl.textContent = moves;
    timeEl.textContent = formatTime(elapsed);
    pairsEl.textContent = matched + '/' + pairs;
    progressEl.style.setProperty('--p', pairs ? matched / pairs : 0);
    progressEl.setAttribute('aria-valuenow', matched);
    progressEl.setAttribute('aria-valuemax', pairs);
  }

  function updateBest() {
    const best = readBest(size);
    bestEl.textContent = best ? best.moves : '–';
  }

  function buildScoreboard() {
    if (players < 2) {
      scoreboardEl.hidden = true;
      scoreboardEl.replaceChildren();
      return;
    }
    scoreboardEl.hidden = false;
    scoreboardEl.innerHTML = Array.from({ length: players }, (_, i) =>
      '<li class="player" style="--c:' + PLAYER_COLORS[i] + '">' +
        '<span class="p-name"><span class="dot"></span><span class="n"></span></span>' +
        '<span class="p-row"><span class="p-score">0</span><span class="p-turn">am Zug</span></span>' +
      '</li>'
    ).join('');
  }

  function updateScoreboard() {
    if (players < 2) return;
    Array.from(scoreboardEl.children).forEach((li, i) => {
      li.classList.toggle('is-active', i === current);
      if (i === current) li.setAttribute('aria-current', 'true');
      else li.removeAttribute('aria-current');
      li.querySelector('.n').textContent = nameOf(i);
      li.querySelector('.p-score').textContent = scores[i];
    });
  }

  /* ---------- Timer ---------- */
  function tick() {
    elapsed = Math.floor((Date.now() - startTime) / 1000);
    updateStats();
  }

  function runTimer() {
    clearInterval(timerId);
    timerId = setInterval(tick, 250);
  }

  function startTimer() {
    started = true;
    startTime = Date.now();
    runTimer();
  }

  function stopTimer() {
    clearInterval(timerId);
    timerId = null;
  }

  document.addEventListener('visibilitychange', () => {
    if (!started || finished) return;
    if (document.hidden) {
      pausedMs = Date.now() - startTime;
      stopTimer();
    } else {
      startTime = Date.now() - pausedMs;
      runTimer();
    }
  });

  /* ---------- Karten ---------- */
  function createCard(symbol) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'card';
    card.dataset.name = symbol.name;
    card.setAttribute('aria-label', 'Verdeckte Karte');
    card.innerHTML =
      '<span class="card-inner">' +
        '<span class="face back"></span>' +
        '<span class="face front" aria-hidden="true">' + symbol.svg + '</span>' +
      '</span>';
    card.addEventListener('click', () => flip(card));
    return card;
  }

  function reveal(card) {
    card.classList.add('is-flipped');
    card.setAttribute('aria-label', card.dataset.name + ', aufgedeckt');
  }

  function hide(card) {
    card.classList.remove('is-flipped', 'is-miss');
    card.setAttribute('aria-label', 'Verdeckte Karte');
  }

  function flip(card) {
    if (locked || card === first || card.classList.contains('is-flipped')) return;
    if (!started) startTimer();

    reveal(card);
    play('flip');
    announce(card.dataset.name);

    if (!first) {
      first = card;
      return;
    }

    second = card;
    moves++;
    updateStats();

    if (first.dataset.name === second.dataset.name) onMatch();
    else onMismatch();
  }

  function onMatch() {
    const name = first.dataset.name;
    [first, second].forEach((c) => {
      c.classList.add('is-matched');
      c.setAttribute('aria-disabled', 'true');
      if (players > 1) c.style.setProperty('--mc', PLAYER_COLORS[current]);
    });
    first = null;
    second = null;
    matched++;
    scores[current]++;
    updateStats();
    updateScoreboard();
    setTimeout(() => play('match'), 200);
    announce((players > 1 ? nameOf(current) + ': ' : '') + 'Paar gefunden: ' + name);
    if (matched === pairs) win();
  }

  function onMismatch() {
    locked = true;
    first.classList.add('is-miss');
    second.classList.add('is-miss');
    setTimeout(() => play('miss'), 350);
    announce('Kein Paar.');
    mismatchId = setTimeout(() => {
      hide(first);
      hide(second);
      first = null;
      second = null;
      locked = false;
      mismatchId = null;
      if (players > 1) {
        current = (current + 1) % players;
        updateScoreboard();
        announce(nameOf(current) + ' ist dran.');
      }
    }, MISMATCH_DELAY);
  }

  /* ---------- Konfetti ---------- */
  function launchConfetti() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = confettiCanvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = window.innerWidth;
    const H = window.innerHeight;
    confettiCanvas.width = W * dpr;
    confettiCanvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const colors = [R, Y, B, T, P, '#faf7f0', '#d9b25e'];
    const parts = Array.from({ length: 140 }, () => ({
      x: Math.random() * W,
      y: -20 - Math.random() * H * 0.6,
      w: 6 + Math.random() * 8,
      h: 8 + Math.random() * 10,
      vx: (Math.random() - 0.5) * 2.2,
      vy: 2 + Math.random() * 3.2,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.25,
      sway: Math.random() * Math.PI * 2,
      round: Math.random() < 0.35,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));

    const t0 = performance.now();

    function frame(now) {
      ctx.clearRect(0, 0, W, H);
      let alive = 0;
      for (const p of parts) {
        p.sway += 0.05;
        p.x += p.vx + Math.sin(p.sway) * 0.6;
        p.y += p.vy;
        p.rot += p.vr;
        if (p.y < H + 30) alive++;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        if (p.round) {
          ctx.beginPath();
          ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        }
        ctx.restore();
      }
      if (alive && now - t0 < 6000) {
        confettiRaf = requestAnimationFrame(frame);
      } else {
        ctx.clearRect(0, 0, W, H);
      }
    }

    confettiRaf = requestAnimationFrame(frame);
  }

  /* ---------- Spielende ---------- */
  function rating() {
    if (moves <= pairs * 1.6) return 3;
    if (moves <= pairs * 2.4) return 2;
    return 1;
  }

  function showSoloResult() {
    const best = readBest(size);
    const isRecord = !best ||
      moves < best.moves ||
      (moves === best.moves && elapsed < best.time);

    if (isRecord) {
      writeBest(size, { moves: moves, time: elapsed });
      updateBest();
    }

    const stars = rating();
    starsEl.hidden = false;
    starsEl.innerHTML = [1, 2, 3].map((n) =>
      '<svg class="star' + (n <= stars ? ' on' : '') + '" style="--n:' + n + '" viewBox="0 0 100 100">' +
      '<polygon points="' + STAR_POINTS + '"/></svg>'
    ).join('');

    winTitleEl.textContent = 'Geschafft!';
    winText.textContent = 'In ' + moves + ' Zügen und ' + formatTime(elapsed) +
      '. ' + stars + ' von 3 Sternen.';
    winScoresEl.hidden = true;
    winScoresEl.replaceChildren();
    winRecord.hidden = !isRecord;
    announce('Alle Paare gefunden.');
  }

  function showMultiResult() {
    const max = Math.max(...scores);
    const winners = scores.map((s, i) => (s === max ? i : -1)).filter((i) => i >= 0);
    const order = scores.map((_, i) => i).sort((a, b) => scores[b] - scores[a]);

    winTitleEl.textContent = winners.length === 1
      ? nameOf(winners[0]) + ' gewinnt!'
      : 'Unentschieden!';
    winText.textContent = pairs + ' Paare in ' + moves + ' Zügen, Zeit ' + formatTime(elapsed) + '.';

    starsEl.hidden = true;
    starsEl.replaceChildren();
    winRecord.hidden = true;

    winScoresEl.hidden = false;
    winScoresEl.innerHTML = order.map((i) =>
      '<li class="' + (scores[i] === max ? 'is-winner' : '') + '">' +
        '<span class="dot" style="--c:' + PLAYER_COLORS[i] + '"></span>' +
        '<span class="s-name">' + esc(nameOf(i)) + '</span>' +
        '<b>' + scores[i] + '</b>' +
      '</li>'
    ).join('');

    announce(winTitleEl.textContent);
  }

  function win() {
    finished = true;
    stopTimer();
    elapsed = Math.floor((Date.now() - startTime) / 1000);
    updateStats();

    if (players > 1) showMultiResult();
    else showSoloResult();

    winId = setTimeout(() => {
      winId = null;
      winDialog.showModal();
      launchConfetti();
      play('win');
    }, 650);
  }

  /* ---------- Neues Spiel ---------- */
  function newGame() {
    stopTimer();
    clearTimeout(mismatchId);
    clearTimeout(winId);
    cancelAnimationFrame(confettiRaf);
    mismatchId = null;
    winId = null;
    first = null;
    second = null;
    locked = false;
    moves = 0;
    matched = 0;
    elapsed = 0;
    pausedMs = 0;
    started = false;
    finished = false;
    current = 0;
    scores = new Array(players).fill(0);

    const { cols, rows, index } = SIZES[size];
    pairs = (cols * rows) / 2;

    const picks = shuffle(SYMBOLS).slice(0, pairs);
    const deck = shuffle(picks.concat(picks));

    appEl.dataset.mode = players > 1 ? 'multi' : 'solo';
    boardEl.style.setProperty('--cols', cols);
    boardEl.style.setProperty('--rows', rows);
    sizesEl.style.setProperty('--i', index);
    playersEl.style.setProperty('--i', players - 1);
    boardEl.replaceChildren(...deck.map(createCard));

    buildScoreboard();
    updateScoreboard();
    updateStats();
    updateBest();
    announce('Neues Spiel mit ' + pairs + ' Paaren' +
      (players > 1 ? ', ' + players + ' Spieler. ' + nameOf(0) + ' beginnt.' : '.'));
  }

  /* ---------- Events ---------- */
  sizeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.dataset.size === size) return;
      size = btn.dataset.size;
      sizeBtns.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      newGame();
    });
  });

  playerBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const n = Number(btn.dataset.players);
      if (n === players) return;
      players = n;
      playerBtns.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      newGame();
    });
  });

  restartBtn.addEventListener('click', newGame);

  soundBtn.addEventListener('click', () => {
    soundOn = !soundOn;
    renderSound();
    try { localStorage.setItem(SOUND_KEY, soundOn ? 'an' : 'aus'); } catch (e) { /* ignorieren */ }
    if (soundOn) play('flip');
  });

  boardEl.addEventListener('keydown', (e) => {
    const cards = Array.from(boardEl.children);
    const i = cards.indexOf(document.activeElement);
    if (i < 0) return;
    const { cols } = SIZES[size];
    let n = i;
    switch (e.key) {
      case 'ArrowRight': n = i + 1; break;
      case 'ArrowLeft': n = i - 1; break;
      case 'ArrowDown': n = i + cols; break;
      case 'ArrowUp': n = i - cols; break;
      case 'Home': n = 0; break;
      case 'End': n = cards.length - 1; break;
      default: return;
    }
    if (n < 0 || n >= cards.length) return;
    e.preventDefault();
    cards[n].focus();
  });

  namesBtn.addEventListener('click', () => {
    nameFieldsEl.innerHTML = Array.from({ length: players }, (_, i) =>
      '<label class="name-row">' +
        '<span class="dot" style="--c:' + PLAYER_COLORS[i] + '"></span>' +
        '<input type="text" maxlength="12" autocomplete="off" data-i="' + i + '"' +
        ' placeholder="Spieler ' + (i + 1) + '" aria-label="Name von Spieler ' + (i + 1) + '">' +
      '</label>'
    ).join('');
    nameFieldsEl.querySelectorAll('input').forEach((input) => {
      input.value = names[Number(input.dataset.i)];
    });
    namesDialog.returnValue = '';
    namesDialog.showModal();
  });

  namesCancel.addEventListener('click', () => namesDialog.close('cancel'));

  namesDialog.addEventListener('close', () => {
    if (namesDialog.returnValue !== 'save') return;
    nameFieldsEl.querySelectorAll('input').forEach((input) => {
      names[Number(input.dataset.i)] = cleanName(input.value);
    });
    saveNames();
    updateScoreboard();
  });

  namesDialog.addEventListener('click', (e) => {
    if (e.target === namesDialog) namesDialog.close('cancel');
  });

  winDialog.addEventListener('close', () => {
    cancelAnimationFrame(confettiRaf);
    newGame();
  });

  winDialog.addEventListener('click', (e) => {
    if (e.target === winDialog) winDialog.close();
  });

  renderSound();
  newGame();
})();