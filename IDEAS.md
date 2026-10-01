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
- [x] Toracotomía de reanimación (clamshell y clasica izquierda), con enfasis en las indicaciones, la temporalidad, el instrumental específico con fotos de referencia, intubación monobronquial para aislar el pulmon izquierdo y tubo pleural al lado derecho. —
      `checklist-toracotomia-reanimacion.html` (checklist con cronómetro e hitos).
      El instrumental va con **esquemas vectoriales, no fotografías**, para que la
      página siga funcionando sin conexión y sin imágenes de terceros; la página
      recomienda fotografiar la caja real del servicio. Pendiente de validación:
      metas de tiempo del cronómetro, energías de desfibrilación interna, contenido
      de la caja disponible, tiempo tolerable de clampeo aórtico y criterios locales
      de suspensión. La intubación monobronquial derecha se presenta como adjunto
      de exposición basado en opinión de expertos, sin evidencia de desenlace.
- [x] Histerotomía de reanimación (cesárea perimortem) —
      `checklist-histerotomia-reanimacion.html` (checklist con cronómetro e hitos).
      Se presenta como **maniobra de reanimación materna**, no fetal: indicación por
      altura uterina (fondo en el ombligo o por encima), desplazamiento uterino manual
      izquierdo en lugar de inclinación lateral, accesos sobre el diafragma, incisión
      vertical media e histerotomía clásica con esquemas vectoriales, causas reversibles
      A–H de la declaración AHA 2015, y manejo posterior de la madre y del recién nacido.
      La regla de los 4 minutos se explicita como recomendación basada en opinión experta
      (Katz 1986/2005) y se contrasta con CAPS 2017, Einav 2012, la revisión de paro
      extrahospitalario de Leech 2024 y el metaanálisis de Rajendran, para desarmar el
      «ya pasaron más de cinco minutos» como motivo para no hacerla. Pendiente de
      validación: todas las metas de tiempo del cronómetro salvo la de 4–5 minutos, los
      esquemas de uterotónicos y antibióticos, el umbral local de viabilidad neonatal,
      los criterios de hipotermia terapéutica neonatal, el contenido de la caja y los
      criterios de suspensión (sin criterio validado en esta población).
- [x] Pericardiocentesis de emergencia (ecoguiada usando transductor de alta frecuencia en
      visión paraesternal larga con aguja en plano) — `checklist-pericardiocentesis.html`
      (checklist con cronómetro e hitos). La técnica sigue el abordaje **paraesternal
      medial-lateral con aguja en plano y transductor lineal de alta frecuencia** de Osman
      2018 (Eur J Emerg Med), con sus ocho pasos, el umbral de derrame > 1 cm, el mapeo de
      la arteria torácica interna con Doppler color y el test de microburbujas («llamarada»)
      como confirmación. Se insiste en dos desvíos que salvan vidas: **no puncionar el
      taponamiento traumático** (es toracotomía) y **no intubar antes de drenar**. Incluye el
      drenaje controlado de la disección tipo A (Hayashi 2012: 40 ± 31 mL, 10/18 con ≤ 30 mL)
      y el síndrome de descompresión pericárdica. Esquemas vectoriales, sin imágenes de
      terceros. Pendiente de validación: todas las metas de tiempo del cronómetro salvo el
      total de 309 ± 76 s de la serie original; el calibre y largo de aguja y catéter del kit
      real del servicio; dosis máxima del anestésico local; esquema de fluidos y vasopresor;
      límite de volumen por sesión de drenaje y umbral de débito para retirar el catéter;
      panel de muestras del líquido; política de radiografía posprocedimiento; manejo de la
      coagulopatía previa; y la conducta local en taponamiento traumático y por disección.
      Nota de certeza: el abordaje descrito se apoya en una serie retrospectiva de 11
      pacientes y un reporte de caso — es prometedor, no un estándar comparado con las rutas
      subxifoidea y apical.
- [x] Cantotomía lateral y cantólisis — `checklist-cantotomia-cantolisis.html`
      (checklist con cronómetro e hitos). El énfasis está en tres cosas: el diagnóstico es
      **clínico y no espera la tomografía**; la **cantotomía sola no descomprime** —en el
      modelo cadavérico de Haubner 2014 solo la cantólisis inferior bajó la presión bajo
      20 mmHg, y en 2 de 8 órbitas hizo falta también la superior—; y el **globo abierto es
      la única contraindicación real**. Se desarma además el «ya pasaron 90 minutos»: la
      ventana clásica viene del modelo de oclusión arterial en primates de Hayreh 1980
      (daño irreparable a los 105 min, recuperación a los 97), mientras que en la serie
      clínica de Bailey 2019 más de la mitad de los intervenidos después de 3 horas
      recuperaron visión, con mejoría documentada hasta las 9 horas, y los autores
      recomiendan hacerla siempre. Incluye las alternativas publicadas (división vertical
      del párpado, paracantal «de un solo corte», canthal cutdown) como rescate de certeza
      baja, y esquemas vectoriales de la anatomía del tendón cantal lateral, de los dos
      gestos y de la orientación de la tijera. Pendiente de validación: todas las metas de
      tiempo del cronómetro; la dosis máxima de lidocaína con epinefrina y la
      disponibilidad de acetazolamida endovenosa en el servicio; los esquemas de manitol,
      timolol y corticoides; el esquema de reversión de anticoagulación; el umbral de
      presión intraocular para indicar y para dar por exitoso el procedimiento; el
      antiséptico periocular y la profilaxis antibiótica; la frecuencia de los controles
      posteriores; los umbrales ecográficos del polo posterior y de la vaina del nervio
      óptico; el instrumental realmente disponible; y la conducta local ante globo abierto
      concurrente.
- [x] Instalación de sonda de taponamiento esofagogástrico (balón de
      Sengstaken-Blakemore) — `checklist-balon-taponamiento.html` (checklist con
      cronómetro e hitos). Cubre las tres sondas (Sengstaken-Blakemore, Minnesota y
      Linton-Nachlas) y se presenta como lo que es: un **puente de 24 horas como máximo**
      hacia endoscopia, *stent* esofágico, TIPS o traslado, con las cifras modernas por
      delante (metaanálisis de Rodrigues 2019: fracaso en el control del sangrado 35,5 %,
      eventos adversos > 20 % y 9,7 % de ellos mortales). Dos desvíos organizan la página:
      **intubar antes de instalar** —aspiración del 10 % en la serie de 151 episodios de
      Panés 1988, asociada a la encefalopatía y prevenida por la intubación previa— y
      **no inflar nunca el balón gástrico sin confirmar que está bajo el diafragma**
      (Chojkier y Conn 1980: 3 muertes por rotura esofágica en 50 episodios, 8 %). Incluye
      el bougie como estilete externo (Whitford 2023), el inflado escalonado con tracción,
      el balón esofágico como segundo tiempo, la tijera en la cabecera y el desinflado
      planificado junto al tratamiento definitivo (hemostasia permanente de solo 47,7 %).
      Esquemas vectoriales, sin imágenes de terceros. Pendiente de validación: todas las
      metas de tiempo del cronómetro salvo el máximo de 24 horas de Baveno VII (la única
      referencia temporal citada, 3 min 49 s de inserción, viene de simulación); los
      volúmenes del balón gástrico, la presión del esofágico, la magnitud y duración de la
      tracción, el uso de aire o líquido, los esquemas de desinflado intermitente y los
      tiempos del retiro, todos dependientes del kit real del servicio; la conducta cuando
      no hay radiografía disponible; el manejo local de la coagulopatía; y la conducta ante
      contraindicaciones relativas y ante hemorragia no variceal.
- [x] Colocación de marcapasos transvenoso de emergencia —
      `checklist-marcapasos-transvenoso.html` (checklist con cronómetro e hitos). Se presenta como el
      escalón que viene después de que atropina, cronotropos y marcapasos transcutáneo no alcanzaron, y no
      como un trámite previo al definitivo: en la encuesta regional de Betts 2003, **31,9 % de las
      instalaciones tuvo alguna complicación** y estas retrasaron el implante definitivo en 22,9 % de los
      pacientes, mientras que en la comparación de Birkhahn 2004 urgenciólogos y cardiólogos tuvieron éxito y
      complicaciones equivalentes. Tres desvíos organizan la página: **la captura del transcutáneo suele ser
      falsa** (Kimbrell 2024: 19 de 23 pacientes con captura eléctrica falsa pese a pulso palpado; +40 mmHg
      con captura verdadera vs −1 mmHg con la falsa), **el catéter se navega mirando algo** —ECG
      intracavitario con la elevación del ST como señal de contacto endocárdico, o ecografía subxifoidea
      (Aguilera 2000: éxito en 8/9 y mala posición detectada en 3; Blanco 2014: catéter enrollado en la cava
      inferior pese a morfología de BRI)— y **la captura eléctrica no es el final**: umbral medido, margen de
      seguridad, sensado comprobado y captura mecánica confirmada. Incluye las dos reglas del balón, el
      algoritmo de «no captura» de afuera hacia adentro y el reloj de las 48 horas (Betts: infección 17/86
      sobre 48 h vs 2/55). Esquemas vectoriales, sin imágenes de terceros. Pendiente de validación: todas las
      metas de tiempo del cronómetro salvo la mediana de 30 min de Betts; los calibres del introductor y del
      catéter y el volumen del balón del kit real; las profundidades en centímetros; el umbral aceptable, el
      múltiplo de seguridad de la salida y los valores de sensibilidad del generador disponible; la
      frecuencia de sobremarcha en torsades; la disponibilidad y dosis de isoproterenol; el régimen de reposo
      y anticoagulación mientras el electrodo está puesto; la conducta ante coagulopatía o trombólisis
      prevista, hipotermia grave e intoxicación digitálica; y la técnica y observación al retirar.
- [x] Toracostomía simple (a dedo) y colocación de tubo pleural en paro o
      shock traumático — `checklist-toracostomia-tubo-pleural.html` (checklist con cronómetro
      e hitos). Separa los dos procedimientos que suelen confundirse: la **toracostomía simple**
      —incisión, disección roma y dedo dentro de la pleura, sin tubo— como gesto del paro y del
      paciente con ventilación a presión positiva, y el **tubo pleural** como lo que viene después.
      Tres desvíos la organizan: **la aguja falla seguido** (metaanálisis de Laan 2016: pared de
      42,8 mm en el 2.º EIC línea medioclavicular contra 34,3 mm en el 4.º–5.º EIC línea axilar
      anterior, con fracaso de la aguja de 5 cm de 38 % contra 13 %; serie de Lesperance: entre
      39 % y 76 % de las agujas prehospitalarias no alcanzó la pleura y al menos el 39 % no tenía
      neumotórax); **la aguja no drena sangre** (serie de autopsias de von Vopelius-Feldt 2025:
      hemotórax en el 70 % de los paros traumáticos y fracaso de la aguja en el 42 % de los
      hemotórax masivos); y **la toracostomía abierta solo se mantiene abierta mientras haya
      ventilación a presión positiva**, de modo que el tubo no es opcional cuando el paciente
      vuelve a ventilar solo, se traslada o recupera circulación. Incluye el triángulo de seguridad
      y la advertencia del diafragma, los cuatro gestos de la técnica con esquemas vectoriales, la
      discusión del calibre con los tres ensayos aleatorizados de 14 Fr contra 28–32 Fr —señalando
      que **todos excluyeron a los pacientes in extremis**, que son los de esta página—, el
      algoritmo de «no mejora» de afuera hacia adentro, y una sección explícita de grado de certeza
      que dice que **ningún estudio ha mostrado mejoría de sobrevida al aumentar la descompresión
      torácica en el paro traumático** (Alqudah 2021, Benhamed 2023, Harris 2022). Esquemas
      vectoriales, sin imágenes de terceros. Pendiente de validación: todas las metas de tiempo del
      cronómetro (no hay referencia publicada de tiempos para este procedimiento); el calibre del
      tubo en el paciente inestable; el tamaño de la incisión y el instrumental real de la bandeja
      del servicio; el anestésico local y su dosis máxima; el nivel de aspiración; los umbrales de
      débito que indican cirugía (≈ 1500 mL inmediatos o ≈ 200 mL/h) y la conducta asociada; el
      esquema y la duración de los antibióticos (EAST: evidencia insuficiente en ambos sentidos);
      el esquema de analgesia y los bloqueos disponibles; la política de radiografía
      posprocedimiento; el uso de autotransfusión y de ácido tranexámico; la técnica de fijación y
      de cierre; la frecuencia con que se revisa una toracostomía abierta y el plazo máximo para
      convertirla en tubo; los criterios y la técnica de retiro; y el material pediátrico.
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
- [ ] Epistaxis - Taponamiento anterior con "burrito" de algodon empapado con acido tranexamico + lidocaina + adrenalina, taponamiento con merocell y rapidrhino, además de cauterización con nitrato de plata; y taponamiento posterior con Sonda Foley. Con indicaciones de cuando hospitalizar y/o ineicar antibioticos y cuando no.