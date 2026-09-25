# Backlog — Orientador Clínico

Backlog de contenido para el proyecto **Orientador Clínico** (antes "UrgenCheck").
El objetivo ya no es solo checklists: es orientar a médicos con menos experiencia y
sistematizar procesos clínicos, en el formato que mejor sirva a cada tema
(checklist paso a paso, algoritmo/árbol de decisión, guía rápida de orientación
diagnóstica, calculadora, etc).

## Cómo trabaja el agente diario

1. Toma el **primer ítem sin marcar** de este archivo, en el orden en que aparece
   (primero "Rebranding", luego "Motivos de consulta", luego "Patologías complejas",
   luego "Procedimientos HALO", luego "Síntomas cardinales" y al final la "Cola final").
2. Antes de crear contenido nuevo, revisa si el tema ya está cubierto (total o
   parcialmente) por una página existente (`checklist-*`, `guia-*`, `algoritmo-*`,
   `sintoma-*.html`). Si ya existe,
   mejórala o complétala en vez de duplicar.
3. Elige la modalidad más adecuada para el contenido:
   - **Checklist con cronómetro** para procedimientos y códigos con secuencia de
     pasos y tiempos críticos (útil para HALO y patologías con "bundle" de manejo).
   - **Algoritmo / árbol de decisión** para patologías complejas con ramificaciones
     según presentación clínica.
   - **Página de síntoma cardinal** (`sintoma-*.html`) para los síntomas de
     consulta frecuente: formato de acción orientado a bajar el tiempo en el box
     (ver la sección "Síntomas cardinales" más abajo). Reemplaza a la guía de
     orientación como puerta de entrada.
   - **Guía de orientación** (`guia-*.html`; diagnóstico diferencial, red flags,
     estudio inicial). Formato anterior: las guías existentes se conservan como
     material de referencia y se enlazan desde su página de síntoma.
4. Sigue las convenciones visuales existentes: mismo tema oscuro, tipografías
   (Syne / DM Sans / DM Mono), paleta de variables CSS (`--teal`, `--red`,
   `--indigo`, `--amber`, `--emerald`), estilo de tarjetas de `index.html`.
5. Toda página nueva debe:
   - Tener una flecha de regreso arriba a la izquierda que lleve a `index.html`
     (convención ya establecida en las páginas existentes).
   - Agregarse como tarjeta nueva en `index.html`, dentro de la sección
     correspondiente (crea la sección si no existe todavía).
   - Incluir el disclaimer de uso clínico (no reemplaza el juicio clínico ni los
     protocolos vigentes; verificar dosis y contraindicaciones).
   - Registrarse en `sw.js` (lista de cache) y subir `CACHE_VERSION`, para que
     funcione sin conexión.
   - Excepción: cuando se crea la página de síntoma de un tema que ya tenía guía,
     la tarjeta de `index.html` pasa a apuntar a `sintoma-*.html`; la guía sale del
     index y queda accesible solo desde el enlace "Profundizar →" de esa página.
6. Marca el ítem como hecho (`[x]`) en este archivo, en el mismo commit.
7. Un commit por día, mensaje claro (ej: `feat: guía de orientación — dolor torácico`).
8. Push directo a `main` (no se usan PRs en este proyecto).

Puedes agregar ideas nuevas a este archivo en cualquier momento; el agente las
tomará en orden la próxima vez que corra.

---

## 0. Rebranding

- [x] Renombrar el proyecto de "UrgenCheck" a "**Orientador Clínico**" en todo el
      repo: `index.html` (title, h1, meta description, disclaimer, footer),
      `manifest.json` (name, short_name), `sw.js` (comentario de cabecera y nombre
      de cache si incluye "urgencheck"). Mantener el tono y estructura visual
      actual; solo cambia el nombre/identidad, no la funcionalidad.

## 1. Motivos de consulta frecuentes

Formato anterior (guías de orientación). Se mantienen como referencia; cada una
será reemplazada en el index por su página de la sección "Síntomas cardinales".

- [x] Infección urinaria — `guia-infeccion-urinaria.html`
- [x] Gastroenteritis (síndrome diarreico agudo) — `guia-gastroenteritis.html`
- [x] Dolor torácico — `guia-dolor-toracico.html`
- [x] Lumbago agudo — `guia-lumbago-agudo.html`
- [x] Dolor abdominal — `guia-dolor-abdominal.html`
- [x] Cefalea — `guia-cefalea.html`
- [x] Policontusiones — `guia-policontusiones.html`

## 2. Patologías complejas de urgencia

- [x] Disección aórtica aguda (especialmente Stanford A o con presentaciones
      atípicas y malperfusión) — `algoritmo-diseccion-aortica.html`
- [x] Shock cardiogénico con falla ventricular derecha o biventricular aguda
      (e infarto de ventrículo derecho) — `algoritmo-shock-cardiogenico.html`
- [x] Status asmático grave con hiperinsuflación dinámica y riesgo de colapso
      hemodinámico a la intubación — `algoritmo-status-asmatico.html`
- [x] Tormenta tiroidea o crisis tirotoxicósica con inestabilidad hemodinámica
      y arritmias complejas — `algoritmo-tormenta-tiroidea.html`
- [x] Traumatismo craneoencefálico grave con hipertensión endocraneal
      refractaria y compromiso multisistémico — `algoritmo-tec-grave.html`
- [x] Cetoacidosis diabética o estado hiperosmolar severo con shock refractario
      y desequilibrios electrolíticos extremos — `algoritmo-cad-ehh.html`
- [x] Hemorragia digestiva alta masiva por várices esofágicas con shock
      hemorrágico y falla hepática aguda sobre crónica —
      `algoritmo-hda-variceal.html`
- [x] Intoxicaciones graves por bloqueadores de canales de calcio o
      betabloqueadores con shock vasopléjico y cardiogénico —
      `algoritmo-intoxicacion-ccb-betabloqueadores.html`

## 3. Procedimientos HALO

Cada checklist HALO nuevo se agrega automáticamente como tarjeta en
`index.html`, dentro de la sección "Procedimientos HALO" (crear la sección
si aún no existe). Esto ya está cubierto por la regla general del paso 5 de
"Cómo trabaja el agente diario", pero se deja explícito aquí porque es la
sección con más ítems pendientes: ningún checklist de este bloque se da por
terminado sin su tarjeta correspondiente en el index.

- [x] Cricotiroidotomía percutánea usando kit con aguja —
      `checklist-cricotiroidotomia.html` (checklist con cronómetro e hitos).
      Incluye la conversión a bisturí-bougie-tubo, que es la técnica de rescate
      preferente según la DAS 2015. Pendiente de validación: metas de tiempo del
      cronómetro, umbral de edad pediátrica, tamaños del kit disponible en el
      servicio y plazo de conversión a vía aérea definitiva.
- [ ] Toracotomía de reanimación (clamshell y clasica izquierda), con enfasis en las indicaciones, la temporalidad, el instrumental específico con fotos de referencia, intubación monobronquial para aislar el pulmon izquierdo y tubo pleural al lado derecho.
- [ ] Histerotomía de reanimación (cesárea perimortem)
- [ ] Pericardiocentesis de emergencia (ecoguiada usando transductor de alta frecuencia en visión paraesternal larga con aguja en plano)
- [ ] Cantotomía lateral y cantólisis
- [ ] Instalación de sonda de taponamiento esofagogástrico (balón de
      Sengstaken-Blakemore)
- [ ] Colocación de marcapasos transvenoso de emergencia
- [ ] Toracostomía simple (a dedo) y colocación de tubo pleural en paro o
      shock traumático
- [ ] Aspiración e irrigación intracavernosa para priapismo isquémico
- [ ] Artrocentesis diagnóstica de grandes articulaciones en sospecha de
      artritis séptica (guiada por ecografía)
- [ ] Cistostomía por punción suprapúbica de urgencia (usando CistoFix)

## 4. Síntomas cardinales

Rediseño de los motivos de consulta en páginas de acción (`sintoma-*.html`),
con un objetivo prioritario: **reducir el tiempo de atención en el box**
(sobreestudio, órdenes escalonadas, demora en la redacción del alta).
La plantilla es `sintoma-disuria.html`: toda página nueva copia su estructura.

Estructura de cada página:

- **Bifurcación en los minutos 0–3:** banderas rojas agrupadas por gravedad,
  donde manda el grupo más grave. El camino rápido exige confirmarlo
  explícitamente ("Ninguna"); no se llega a él por omisión.
- **Caminos definidos por síntoma** (2, 3 o más; disuria usa A / B1 / B2 / C):
  - **Rápido (fast-track):** recuadro rojo "NO pedir" con los criterios que
    validan no estudiar, tratamiento sintomático con dosis fijas, checklist de
    alta y copiado de indicaciones.
  - **Dirigido / complejo:** bundle de órdenes simultáneas (laboratorio, imagen y
    tratamiento pedidos juntos al ingreso), lo que no se debe pedir y criterios
    de destino (alta, hospitalización, pabellón, UPC).
- **Metas de tiempo** solo como texto (sin cronómetro ni estado guardado).
- **Copiar indicaciones al paciente:** texto armado según lo seleccionado en
  pantalla (fármaco, analgesia, escenario), en lenguaje simple, con "consulte
  de inmediato si…" y una línea de comprensión de las indicaciones. No se guarda
  ningún dato del paciente.
- Desvío temprano "puede que no sea X" cuando corresponda, y enlace
  "Profundizar →" a la guía de referencia si existe.

Reglas de contenido:

- Solo adultos (la pediatría tendrá contenido propio).
- Referencias: si existe un protocolo local del HUAP para el tema, sus esquemas
  y dosis prevalecen, y se nombra en el disclaimer y en las referencias. Si no,
  primero guías GES/MINSAL y luego guías internacionales.
- Usar solo fármacos disponibles en Chile (por ejemplo, **no hay
  fenazopiridina**).
- Si la página se basa en un borrador de un colaborador, agradecerlo al final de
  la página.

Ítems:

- [x] Disuria — `sintoma-disuria.html` (piloto; reemplaza en el index a
      `guia-infeccion-urinaria.html`). Basado en el borrador de Jaime Carril.
      Esquemas antimicrobianos y epidemiología según el Protocolo clínico del
      manejo empírico de ITU del HUAP (PROA, 12/2024). Pendiente de validación:
      solo las metas de tiempo propuestas.
- [ ] Diarrea / vómitos — base: `guia-gastroenteritis.html`
- [ ] Dolor torácico — base: `guia-dolor-toracico.html`
- [ ] Dolor lumbar — base: `guia-lumbago-agudo.html`
- [ ] Dolor abdominal — base: `guia-dolor-abdominal.html`
- [ ] Cefalea — base: `guia-cefalea.html`
- [ ] Contusión / trauma menor — base: `guia-policontusiones.html`
- [ ] Disnea (nueva)
- [ ] Fiebre (nueva; enlazar al checklist de sepsis)
- [ ] Mareo / vértigo (nueva; HINTS, VPPB en el camino rápido)
- [ ] Dolor / trauma de extremidades (nueva; reglas de Ottawa de tobillo y
      rodilla como criterio "NO pedir imagen")

## 5. Cola final

Ítems que deben tomarse **al final**, después de todo lo anterior. Van aquí, y no
en su sección temática, porque el agente recorre el archivo en orden.

- [ ] Síncope — *motivo de consulta* (guía de orientación: diferenciar síncope
      reflejo, ortostático y cardiogénico; red flags de causa arrítmica o
      estructural; estudio inicial y criterios de hospitalización). Incluir el
      **Canadian Syncope Risk Score** como calculadora interactiva dentro de la
      misma página, en la sección de estratificación de riesgo: puntaje que
      predice eventos adversos graves a 30 días en pacientes que consultan por
      síncope, para apoyar la decisión de alta versus observación. Implementarlo
      con sus variables y bandas de riesgo tomadas de la publicación original
      (Thiruganasambandamoorthy V, et al. CMAJ 2016), dejando explícito que el
      score complementa —no reemplaza— el juicio clínico, que no aplica a
      pacientes con causa grave ya identificada en la evaluación inicial, y que
      el umbral de alta se ajusta al protocolo institucional.
- [ ] Trabajo de parto (de término y pretérmino)
- [ ] Reanimación neonatal
- [ ] Reanimación pediátrica (trauma y no trauma)
- [ ] Sedación en el paciente agitado - Combinando la escala BARS para el tratamiento sugerido y sugiriendo ketamina im en casos de agitación peligrosa, haciendo énfasis en aportar oxígeno a alta concentración tras sedar al paciente.
- [ ] Parocardiorespiratorio (PCR) traumático
- [ ] Pancreatitis - Desde el leve al grave con necesidad de UCI. Biliar, Hipercalcemia, por alcohol y trigliceridos. Integrado con calculadora APACHE 
