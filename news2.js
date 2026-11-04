/* Orientador Clínico — definición y cálculo de NEWS2 (RCP 2017), escala de SpO₂ 1. */
(function () {
  var PARAMS = [
    { id: 'fr', nombre: 'Frecuencia respiratoria (rpm)', op: [['≤ 8', 3], ['9–11', 1], ['12–20', 0], ['21–24', 2], ['≥ 25', 3]] },
    { id: 'spo2', nombre: 'SpO₂', op: [['≤ 91%', 3], ['92–93%', 2], ['94–95%', 1], ['≥ 96%', 0]] },
    { id: 'o2', nombre: 'O₂ suplementario', op: [['No (aire ambiental)', 0], ['Sí (mascarilla/bigotera)', 2]] },
    { id: 'pas', nombre: 'Presión arterial sistólica', op: [['≤ 90', 3], ['91–100', 2], ['101–110', 1], ['111–219', 0], ['≥ 220', 3]] },
    { id: 'fc', nombre: 'Frecuencia cardíaca (lpm)', op: [['≤ 40', 3], ['41–50', 1], ['51–90', 0], ['91–110', 1], ['111–130', 2], ['≥ 131', 3]] },
    { id: 'conc', nombre: 'Nivel de conciencia', op: [['Alerta', 0], ['Confusión nueva', 3], ['Voz / dolor / no responde', 3]] },
    { id: 'temp', nombre: 'Temperatura (°C)', op: [['≤ 35,0', 3], ['35,1–36,0', 1], ['36,1–38,0', 0], ['38,1–39,0', 1], ['≥ 39,1', 2]] }
  ];

  // resp: { idParámetro: índice de la opción elegida }. Se guarda el índice y no el
  // puntaje porque opciones distintas de un mismo parámetro pueden valer lo mismo.
  function evaluar(resp) {
    var total = 0, llenos = 0, rojo = false;
    PARAMS.forEach(function (p) {
      if (resp[p.id] == null) return;
      var s = p.op[resp[p.id]][1];
      total += s; llenos++;
      if (s === 3) rojo = true;
    });
    var nivel = total >= 7 ? 'muy-alto' : total >= 5 ? 'alto' : 'bajo';
    return { total: total, llenos: llenos, completo: llenos === PARAMS.length, rojo: rojo, nivel: nivel };
  }

  // Para pasar lo ya ingresado a otra página, en el hash: «i0.i1.…» (x = sin dato).
  function codificar(resp) {
    return PARAMS.map(function (p) { return resp[p.id] == null ? 'x' : resp[p.id]; }).join('.');
  }
  function decodificar(str) {
    if (!/^[\dx.]+$/.test(str || '')) return null;
    var partes = str.split('.');
    if (partes.length !== PARAMS.length) return null;
    var resp = {};
    for (var i = 0; i < PARAMS.length; i++) {
      if (partes[i] === 'x') continue;
      var k = parseInt(partes[i], 10);
      if (!(k >= 0 && k < PARAMS[i].op.length)) return null;
      resp[PARAMS[i].id] = k;
    }
    return resp;
  }

  window.NEWS2 = { PARAMS: PARAMS, evaluar: evaluar, codificar: codificar, decodificar: decodificar, UMBRAL: 5 };
})();
