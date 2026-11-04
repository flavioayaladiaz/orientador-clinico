/* Orientador Clínico — el enlace «Volver» regresa a la página de la que se vino
   (p. ej. Reanimador › Paro) y no siempre al índice. Si no hay página anterior del
   sitio (enlace directo, acceso desde la app instalada), se usa el href: index.html. */
(function () {
  var saltos = 0;   // cambios de #ancla dentro de esta página: cada uno suma una entrada al historial
  window.addEventListener('hashchange', function () { saltos++; });

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a.back-link, a.backbtn');
    if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (!/(^|\/)index\.html$/.test(a.getAttribute('href') || '')) return;
    try {
      var ref = document.referrer;
      if (!ref || new URL(ref).origin !== location.origin) return;
      e.preventDefault();
      history.go(-(saltos + 1));
    } catch (err) {}
  });
})();
