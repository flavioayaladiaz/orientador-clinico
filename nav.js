/* Orientador Clínico — lógica compartida de navegación (landing y áreas) */
(function () {
  var C = window.CATALOGO;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function norm(s) {
    return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }
  function area(id) { return C.areas.filter(function (a) { return a.id === id; })[0]; }
  function grupo(a, id) { return a.grupos.filter(function (g) { return g.id === id; })[0]; }
  function enArea(p, aid) { return p.ubic.some(function (u) { return u.area === aid; }); }

  // ── Tarjeta de página ────────────────────────────────────────────
  // opts.crumb: migas de pan (resultados de búsqueda); opts.also: texto «también en»
  // Enlace de una página: relativo al sitio o, si es una URL completa, externo (pestaña nueva)
  function linkAttrs(p) {
    return /^https?:\/\//.test(p.href)
      ? 'href="' + esc(p.href) + '" target="_blank" rel="noopener noreferrer"'
      : 'href="./' + esc(p.href) + '"';
  }
  function cardHTML(p, i, opts) {
    opts = opts || {};
    if (p.simple && !opts.crumb) {      // tarjeta mínima: solo el título
      return '<a class="card" ' + linkAttrs(p) + ' style="--accent:var(--' + esc(p.accent) +
        '); animation-delay:' + Math.min(i * 0.03, 0.4).toFixed(2) + 's;"><div class="card-inner"><div class="card-main">' +
        '<div class="card-title">' + esc(p.titulo) + '</div></div><div class="card-arrow">' + (/^https?:/.test(p.href) ? '↗' : '→') + '</div></div></a>';
    }
    var pills = (p.meta || []).map(function (m) { return '<span class="pill">' + esc(m) + '</span>'; });
    if (opts.also) pills.push('<span class="pill link">También en ' + esc(opts.also) + '</span>');
    return '<a class="card" ' + linkAttrs(p) + ' style="--accent:var(--' + esc(p.accent) +
      '); animation-delay:' + Math.min(i * 0.03, 0.4).toFixed(2) + 's;">' +
      '<div class="card-inner"><div class="card-main">' +
      (opts.crumb ? '<div class="crumb">' + esc(opts.crumb) + '</div>' : '') +
      '<span class="card-tag">' + esc(p.tag) + '</span>' +
      '<div class="card-title">' + esc(p.titulo) + '</div>' +
      '<div class="card-desc">' + esc(p.desc) + '</div>' +
      (pills.length ? '<div class="card-meta">' + pills.join('') + '</div>' : '') +
      '</div><div class="card-arrow">→</div></div></a>';
  }

  // ── Búsqueda: todas las palabras deben aparecer; el título pesa más ──
  function buscar(q) {
    var toks = norm(q).split(/\s+/).filter(Boolean);
    if (!toks.length) return [];
    var res = [];
    C.paginas.forEach(function (p) {
      var t = norm(p.titulo), k = norm(p.kw + ' ' + p.tag + ' ' + (C.tipos[p.tipo] || '')), d = norm(p.desc);
      var score = 0, ok = true;
      toks.forEach(function (w) {
        if (t.indexOf(w) >= 0) score += 6;
        else if (k.indexOf(w) >= 0) score += 3;
        else if (d.indexOf(w) >= 0) score += 1;
        else ok = false;
      });
      if (ok) res.push({ p: p, score: score });
    });
    res.sort(function (a, b) { return b.score - a.score || a.p.titulo.localeCompare(b.p.titulo, 'es'); });
    return res.map(function (r) { return r.p; });
  }

  function miga(p) {
    var u = p.ubic[0], a = area(u.area), g = grupo(a, u.grupo), s = '';
    if (u.sub && g.subs) s = g.subs.filter(function (x) { return x.id === u.sub; })[0].nombre;
    return [a.nombre, g.nombre, s].filter(Boolean).join(' › ');
  }

  // ── Tema claro / oscuro ──────────────────────────────────────────
  function initTema() {
    var root = document.documentElement, KEY = 'oc-theme';
    try { var t = localStorage.getItem(KEY); if (t) root.setAttribute('data-theme', t); } catch (e) {}
    var btn = document.getElementById('themeBtn');
    if (btn) btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
  }

  // ── Estado de conexión, service worker e instalación PWA ─────────
  function initEstado() {
    var netChip = document.getElementById('netChip'), netText = document.getElementById('netText');
    if (netChip) {
      var upd = function () {
        var on = navigator.onLine;
        netChip.classList.toggle('offline', !on);
        netText.textContent = on ? 'En línea' : 'Sin conexión';
      };
      window.addEventListener('online', upd);
      window.addEventListener('offline', upd);
      upd();
    }
    var swChip = document.getElementById('swChip');
    function sw(t) { if (swChip) swChip.textContent = t; }
    if (location.protocol === 'file:') sw('Modo archivo local');
    else if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
        .then(function () { sw('Listo para uso offline'); })
        .catch(function () { sw('Offline no disponible'); });
    } else sw('Offline no disponible');

    var installBtn = document.getElementById('installBtn'), deferred = null;
    if (installBtn) {
      window.addEventListener('beforeinstallprompt', function (e) {
        e.preventDefault(); deferred = e; installBtn.style.display = 'inline-flex';
      });
      installBtn.addEventListener('click', function () {
        if (!deferred) return;
        deferred.prompt();
        deferred.userChoice.then(function () { deferred = null; installBtn.style.display = 'none'; });
      });
      window.addEventListener('appinstalled', function () { installBtn.style.display = 'none'; });
    }
    var lu = document.getElementById('lastUpdate');
    if (lu) lu.textContent = 'Actualizado ' + new Date(document.lastModified).toLocaleDateString('es-CL');
  }

  window.OC = { C: C, esc: esc, area: area, grupo: grupo, enArea: enArea, cardHTML: cardHTML, buscar: buscar, miga: miga };
  initTema();
  initEstado();
})();
