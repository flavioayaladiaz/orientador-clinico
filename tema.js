/* Orientador Clínico — el tema claro/oscuro elegido se mantiene en todas las páginas.
   Se carga en el <head> para aplicar el tema antes de pintar. El botón ◐ de cada página guarda la
   elección en localStorage ('oc-theme'); aquí solo se lee y se vuelve a aplicar cuando una página
   se restaura al volver atrás (el navegador la guarda en memoria con el tema que tenía entonces).

   Además corrige el contraste del modo claro: los colores de texto de las páginas fueron pensados
   para fondo oscuro (blanco y tonos pastel), y sobre fondo claro no se leen. Se recorren las reglas
   de las hojas de estilo y, para cada una cuyo color de texto es de esa paleta, se agrega la misma
   regla acotada a :root[data-theme="light"] con el tono oscuro equivalente. Se inserta ANTES de las
   hojas de la página, así los ajustes propios de cada página (más abajo en el cascado) siguen mandando. */
(function () {
  var KEY = 'oc-theme', root = document.documentElement;

  function aplicar() {
    try {
      var t = localStorage.getItem(KEY);
      if (t === 'light' || t === 'dark') {
        if (root.getAttribute('data-theme') !== t) root.setAttribute('data-theme', t);
      }
    } catch (e) {}
  }
  aplicar();
  window.addEventListener('pageshow', aplicar);              // volver atrás (página restaurada de memoria)
  window.addEventListener('storage', aplicar);               // el tema cambió en otra pestaña
  document.addEventListener('visibilitychange', function () { if (!document.hidden) aplicar(); });

  // ── Contraste del modo claro ──────────────────────────────────────
  var BLANCO = 'rgb(255, 255, 255)';
  var MAPA = {
    'rgb(255, 255, 255)': '#0f172a',
    'rgb(252, 165, 165)': '#b91c1c', 'rgb(254, 202, 202)': '#b91c1c',          // rojos
    'rgb(252, 211, 77)':  '#b45309', 'rgb(253, 230, 138)': '#92400e',          // ámbar
    'rgb(245, 158, 11)':  '#b45309',
    'rgb(96, 165, 250)':  '#1d4ed8', 'rgb(147, 197, 253)': '#1d4ed8',          // azules
    'rgb(191, 219, 254)': '#1e40af',
    'rgb(110, 231, 183)': '#047857', 'rgb(167, 243, 208)': '#047857',          // verdes
    'rgb(16, 185, 129)':  '#047857',
    'rgb(94, 234, 212)':  '#0f766e', 'rgb(153, 246, 228)': '#0f766e',          // turquesas
    'rgb(20, 184, 166)':  '#0f766e',
    'rgb(165, 180, 252)': '#4338ca', 'rgb(199, 210, 254)': '#4338ca',          // índigos
    'rgba(165, 180, 252, 0.4)': 'rgba(67, 56, 202, 0.95)',
    // colores de marca usados como texto (en el cascado quedan como var(--…))
    'var(--emerald)': '#047857', 'var(--amber)': '#b45309', 'var(--teal)': '#0f766e',
    'var(--red)': '#b91c1c', 'var(--indigo)': '#4338ca', 'var(--blue)': '#1d4ed8',
    // acento de cada camino/bloque (cambia según el elemento): se oscurece el que corresponda
    'var(--tab-accent)': 'color-mix(in srgb, var(--tab-accent) 62%, #000)',
    'var(--accent)': 'color-mix(in srgb, var(--accent) 62%, #000)'
  };
  var PREFIJO = ':root[data-theme="light"] ';

  function dividir(sel) {                                    // separa por comas del nivel superior
    var out = [], prof = 0, ini = 0;
    for (var i = 0; i < sel.length; i++) {
      var c = sel.charAt(i);
      if (c === '(' || c === '[') prof++;
      else if (c === ')' || c === ']') prof--;
      else if (c === ',' && prof === 0) { out.push(sel.slice(ini, i).trim()); ini = i + 1; }
    }
    out.push(sel.slice(ini).trim());
    return out;
  }
  function fondoPropio(st) {                                 // regla que fija su propio fondo (botones, badges)
    var bg = st.backgroundColor, im = st.backgroundImage;
    return (/^rgb\(/.test(bg || '')) || (im && /gradient\(/.test(im));
  }
  function reglas(lista, out) {
    for (var i = 0; i < lista.length; i++) {
      var r = lista[i];
      if (r.type === 1) {                                    // regla de estilo
        var col = r.style && r.style.color, nuevo = col && MAPA[col];
        if (!nuevo) continue;
        if (col === BLANCO && fondoPropio(r.style)) continue;
        var sels = dividir(r.selectorText).filter(function (s) {
          return s && s.indexOf('data-theme') < 0 && !/^(:root|html)\b/.test(s);
        });
        if (sels.length) out.push(sels.map(function (s) { return PREFIJO + s; }).join(',') + '{color:' + nuevo + '}');
      } else if (r.type === 4 && r.cssRules) {              // @media
        var sub = []; reglas(r.cssRules, sub);
        if (sub.length) out.push('@media ' + r.conditionText + '{' + sub.join('') + '}');
      }
    }
  }
  function adaptar() {
    var out = [];
    for (var i = 0; i < document.styleSheets.length; i++) {
      try { reglas(document.styleSheets[i].cssRules, out); } catch (e) {}   // hojas de otro origen no se pueden leer
    }
    if (!out.length) return;
    var st = document.createElement('style');
    st.id = 'oc-contraste-claro';
    st.textContent = out.join('\n');
    var primera = document.head.querySelector('style, link[rel~="stylesheet"]');
    document.head.insertBefore(st, primera);
  }
  function inline() {                                        // colores escritos directamente en el HTML (style="color:…")
    var extra = {};
    var nodos = document.querySelectorAll('[style*="color"]');
    for (var i = 0; i < nodos.length; i++) {
      var c = nodos[i].style.color, n = c && MAPA[c.replace(/#fff\b/i, BLANCO)];
      if (!n) continue;
      if (c === BLANCO && /background/.test(nodos[i].getAttribute('style'))) continue;
      var k = n.replace(/[^a-z0-9]/gi, '');
      nodos[i].setAttribute('data-oc-c', k);
      extra[k] = n;
    }
    var css = Object.keys(extra).map(function (k) {
      return PREFIJO + '[data-oc-c="' + k + '"]{color:' + extra[k] + ' !important}';
    }).join('\n');
    if (css) { var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st); }
  }
  adaptar();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inline);
  else inline();
})();
