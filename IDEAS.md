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
- [x] Aspiración e irrigación intracavernosa para priapismo isquémico —
      `checklist-priapismo-aspiracion-intracavernosa.html` (checklist con cronómetro e hitos). Se presenta
      como lo que es: el **síndrome compartimental de un órgano**, y como un procedimiento de box que hace el
      médico de urgencia, no una derivación —la guía AUA/SMSNA 2021 recomienda **fenilefrina intracavernosa con
      aspiración, con o sin irrigación, antes de cualquier intervención quirúrgica**—. Tres desvíos la organizan:
      **el reloj no es retórico** (Spycher y Hauri 1986: necrosis extensa del músculo liso sobre las 24 h y coágulo
      con destrucción del endotelio sobre las 48; Zacharakis 2013: resolución del 100 % bajo 24 h contra 30 % sobre
      48 h, IIEF-5 de 24 a 7,7 y disfunción eréctil en la mitad incluso bajo 24 h; Scarberry 2022: 8,8 ± 5,6 h en
      los que resolvieron contra 57,3 ± 37,1 h en los que no); **no todo priapismo se punciona** —el arterial no es
      emergencia, se reconoce por el dolor ausente, el trauma perineal, el signo de *piesis* de Hatzichristou 2002,
      el aspirado rojo brillante de Bastuba 1994 y el Doppler, y en manejo expectante los pacientes de Hakim 1996 se
      mantuvieron potentes hasta 31 años—; y **la fenilefrina se monitoriza**, con la tensión honesta entre Sidhu
      2018 (mediana de 1000 µg, 91 % de detumescencia, sin cambios hemodinámicos) y Scarberry 2022 (4,1 % con
      suspensión del fármaco, mucho más entre los de riesgo, y los autores advirtiendo que esos cambios están
      subreportados). Incluye la tabla de dilución desde la ampolla de 10 mg/mL con la advertencia de que el error
      de dilución es el más fácil y más peligroso de la página (Lee 1995), los esquemas vectoriales del corte
      transversal leído como un reloj —objetivo lateral en 3 o 9 en punto, paquete dorsal y uretra como zonas
      prohibidas— y de los cuatro gestos, el algoritmo de «no cede» de afuera hacia adentro, la escalera de
      escalada hasta la prótesis precoz (El-Achkar 2026: 66,7 % contra 10,4 % de reintervención sobre 36 h;
      Barham 2023: 0 % contra 40,5 % de complicaciones según el momento del implante; Baumgarten 2020), el estudio
      de la causa (Sidhu: 62 % inducido por fármacos; Borrell 2025: 54,8 % por inyección intracavernosa y 30 h de
      mediana en el uso recreativo; Idris 2020: 32,6 % de prevalencia en enfermedad falciforme y casi la mitad que
      nunca consultó) y la advertencia del síndrome ASPEN de Siegel 1993 sobre la transfusión de intercambio.
      Esquemas vectoriales, sin imágenes de terceros. Pendiente de validación: todas las metas de tiempo del
      cronómetro y el «techo de 60 minutos» de la fase farmacológica (no hay referencia publicada de tiempos para
      este procedimiento); la concentración de la ampolla realmente disponible, la dilución, el volumen por alícuota
      y la dosis máxima acumulada de fenilefrina, además del valor vigente del techo horario de la EAU; la
      disponibilidad, presentación y dilución de etilefrina o adrenalina intracavernosa en Chile; el calibre y tipo
      de aguja; la técnica, concentración, volumen y dosis máxima del anestésico local; los volúmenes de aspiración
      e irrigación; el tiempo de compresión y el tipo de vendaje; el período mínimo de observación antes del alta;
      la política de imagen posprocedimiento; el panel de exámenes de causa; los esquemas de analgesia y de
      antibióticos; la conducta ante coagulopatía o anticoagulación plena; los umbrales de suspensión por cambios
      hemodinámicos; y la indicación, el tipo y el momento de la transfusión en enfermedad falciforme. El contenido
      es para adultos.
- [x] Artrocentesis diagnóstica de grandes articulaciones en sospecha de
      artritis séptica (guiada por ecografía) — `checklist-artrocentesis.html`
      (checklist con cronómetro e hitos). Se presenta como lo que es: **la pregunta que solo responde el
      líquido sinovial**, con una prevalencia del 27 % (IC 17–38 %) en el adulto que consulta por una
      articulación aguda dolorosa y un **umbral de prueba del 5 %** calculado por Carpenter, de modo que
      *la duda razonable ya es indicación*. Tres desvíos la organizan: **ningún examen de sangre descarta
      la artritis séptica** —ni la historia, ni el examen, ni los leucocitos, la VHS o la PCR mueven la
      probabilidad posprueba en la revisión de Carpenter, salvo la cirugía articular reciente (LR+ 6,9) y la
      celulitis sobre prótesis (LR+ 15,0), y la VHS y la PCR solo son sensibles con umbrales muy bajos
      (Hariharan: 98 % con VHS ≥ 10 mm/h)—; **el recuento sinovial tampoco la descarta** —el corte clásico de
      50.000 tiene sensibilidad de 56 % (Carpenter) a 61 % (McGillicuddy: 19 de 49 cultivos positivos por
      debajo, y 55 % con Gram negativo), con la tabla completa de razones de verosimilitud de Margaretten
      (0,32 / 2,9 / 7,7 / 28,0 y 3,4 para PMN ≥ 90 %) y el **umbral de tratamiento del 39 %**—; y **la
      ecografía no sirve para lo que se suele decir** —en el ensayo de Wiler no mejoró el éxito en la rodilla
      (37/39 contra 25/27) pero bajó el dolor y el tiempo, y en el modelo cadavérico de Berona tampoco hubo
      diferencia significativa; su valor demostrado está en el escenario de Balint, donde la aspiración pasó
      de **10 de 32 (32 %) a 31 de 32 (97 %)**—. Incluye además que **anticoagular en rango no contraindica
      la punción** (Ahmed: 1 sangrado significativo en 640 procedimientos, 456 con INR ≥ 2,0; Yui: 0 en 1050
      con anticoagulantes orales directos), que **los cristales no descartan infección** (Shah 1,5 %,
      Papanicolas 5 %, con la única combinación tranquilizadora de Gram negativo + PCR < 100 + recuento
      < 10.000), el rendimiento del **frasco de hemocultivo** para líquido sinovial (Hughes: 62 patógenos
      contra 51, y 1 contaminante contra 11), el orden de prioridad de las muestras cuando el volumen es
      escaso, el mapa de abordajes de rodilla, tobillo, hombro, codo, muñeca y cadera con la estructura que no
      se toca en cada uno, el algoritmo de la **punción seca** de afuera hacia adentro —que termina en escalar,
      no en cerrar el caso—, y la discusión honesta del drenaje definitivo (Harada sin diferencia a 12 meses,
      Weston con el drenaje abierto como predictor de morbilidad, Abdelmalek con más reoperación tras
      artroscopia de hombro y Sharoff sosteniendo lo contrario: **no hay evidencia aleatorizada que decida la
      ruta**). Esquemas vectoriales, sin imágenes de terceros. Pendiente de validación: todas las metas de
      tiempo del cronómetro (no hay referencia publicada de tiempos para este procedimiento); los calibres,
      largos y tipos de aguja y los tamaños de jeringa por articulación; el antiséptico y su tiempo de
      contacto; la concentración, el volumen y la dosis máxima del anestésico local; el volumen a evacuar; el
      tubo correcto para la búsqueda de cristales y el circuito y los horarios del laboratorio; la conducta del
      lavado con suero para recuperar material de cultivo; el plazo para repetir una punción seca; **el esquema
      antimicrobiano empírico, sus dosis y su duración, que los define el PROA local** (la tabla de la sección
      08 es explícitamente orientativa); el manejo de la coagulopatía grave; el régimen de inmovilización,
      reposo y carga; la política de imagen y el período de observación posprocedimiento; los umbrales de
      recuento y el circuito de la articulación protésica; y **quién punciona la cadera en el servicio, con qué
      apoyo de imagen y en qué horario**. El contenido es para adultos con articulación nativa.
- [x] Cistostomía por punción suprapúbica de urgencia (usando CistoFix) —
      `checklist-cistostomia-suprapubica.html` (checklist con cronómetro e hitos).
      La página se organiza alrededor de la única complicación que mata, la **lesión
      intestinal**, y del supuesto anatómico del que depende toda la técnica: que la
      vejiga distendida desplaza el peritoneo y deja un corredor extraperitoneal
      —explícito en la revisión de Jacob, que cita el riesgo histórico de **hasta
      2,4 % con mortalidad del 1,8 %** en la punción a ciegas—. Las cifras se
      presentan juntas y sin aplanarlas: **0,7 %** en el metaanálisis de la auditoría
      nacional británica de Hall sobre **11.473 inserciones**, con la recomendación
      de informar **< 0,25 %** al paciente de bajo riesgo, y **ninguna lesión
      intestinal** en las 1.000 inserciones electivas guiadas de Hobbs; la diferencia
      entre esos extremos es la selección y la imagen. Sigue la guía **BAUS** (2010 y
      su revisión de 2020), con su recomendación de usar ecografía *siempre que sea
      posible* y su exigencia de explicar el riesgo de muerte en el consentimiento.
      Incluye la contraindicación que define el procedimiento (**vejiga que no se
      ve**), la estratificación que decide box contra urología o radiología —con
      laparotomía previa, radioterapia pelviana (caso fatal de Verma), cáncer vesical
      por siembra del trayecto, retención por coágulos y embarazo fuera del box—, las
      **tres medidas ecográficas** antes de pinchar (piel→pared anterior, piel→pared
      posterior y altura de la cúpula sobre la sínfisis), la advertencia de kit sobre
      los sets **sin balón**, la secuencia con trocar y camisa divisible y la variante
      de Seldinger, la confirmación en tres niveles, la **diuresis postobstructiva**
      con su definición (≥ 200 mL/h por 2 h o > 3 L/24 h) y sus factores de riesgo
      (creatinina > 105 µmol/L, OR 4,83; volumen vesical, OR 1,21 por 100 mL), el
      desacuerdo honesto entre Nyman y el ensayo de Odeyemi sobre vaciar rápido o
      despacio, y el reconocimiento de la lesión intestinal en sus cuatro formas con
      la regla de **no retirar el catéter sospechoso**. Esquemas vectoriales, sin
      imágenes de terceros. Pendiente de validación: todas las metas de tiempo del
      cronómetro (no hay referencia publicada de tiempos para este procedimiento); el
      punto de entrada y su distancia a la sínfisis, la angulación y la profundidad de
      avance; los calibres, el largo del catéter y el sistema de fijación, que son del
      set y cuyas instrucciones de fabricante prevalecen sobre la página; el
      antiséptico y su tiempo de contacto; la concentración, el volumen y la dosis
      máxima del anestésico local; el esquema de profilaxis antibiótica, que lo define
      el PROA local; la política de vaciamiento rápido o escalonado; el esquema de
      reposición de la diuresis postobstructiva y la frecuencia de sus controles; el
      número aceptable de intentos; los umbrales de coagulación y de transfusión; y
      los plazos de maduración del trayecto y de recambio del catéter. El contenido es
      para adultos; la paciente embarazada, la pediatría y el cáncer vesical conocido
      quedan explícitamente fuera.

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
- [x] Diarrea / vómitos — `sintoma-diarrea-vomitos.html` (reemplaza en el index a
      `guia-gastroenteritis.html`, que queda accesible desde «Profundizar →»).
      Caminos A / B1 / B2 / C más un camino D de desvío («probablemente no es una
      gastroenteritis»), que manda sobre B2 y B1. Incluye estimador de reposición
      (déficit, plan B y plan C de la OMS, pérdidas mantenidas) y tabla de incubación.
      Pendiente de validación: las metas de tiempo propuestas y el esquema de
      reposición que usa el servicio (plan B de la OMS, 75 mL/kg en 4 h, frente a los
      ≈ 50 mL/kg en 4 h que recoge la guía previa).
- [x] Dolor torácico — `sintoma-dolor-toracico.html` (reemplaza en el index a
      `guia-dolor-toracico.html`, que queda accesible desde «Profundizar →»).
      Caminos A / B1 / B2 / C más un camino D de desvío («puede que no sea ninguna de
      las seis»). El camino A es el único *fast-track* del repo que **sí** exige un
      examen: el electrocardiograma en menos de 10 minutos es innegociable, y el recuadro
      «NO pedir» apunta a la troponina, al dímero D sin regla de decisión previa y a la
      prueba de esfuerzo desde el box. El camino B2 agrupa las causas letales no
      coronarias con su regla de decisión (ADD-RS, Wells/PERC/YEARS, dímero D ajustado por
      edad) y con los dos desvíos que matan: **no antiagregar ni anticoagular una
      disección** y **no esperar troponinas en una rotura esofágica**. Incluye la
      calculadora del puntaje HEART, que empuja la banda al camino B1, y el camino B1 entra
      **por defecto en riesgo intermedio**: solo baja a bajo riesgo con HEART ≤ 3,
      troponina seriada negativa, electrocardiograma no isquémico y paciente sin dolor
      (el texto de alta no se arma en las otras bandas). Pendiente de validación: todas las
      metas de tiempo propuestas; los umbrales y deltas de troponina del ensayo del
      laboratorio y el umbral local de alta con HEART; los esquemas de inhibidor P2Y12,
      anticoagulación y reperfusión de la red local y los plazos garantizados por el GES;
      la titulación de esmolol o labetalol en el síndrome aórtico; el esquema de
      anticoagulación y de fibrinólisis en el tromboembolismo; el antibiótico y el
      antifúngico de la rotura esofágica; la conducta local en el neumotórax espontáneo
      estable y en la pericarditis de manejo ambulatorio; y la disponibilidad de
      diclofenaco gel en el servicio.
- [x] Dolor lumbar — `sintoma-dolor-lumbar.html` (reemplaza en el index a
      `guia-lumbago-agudo.html`, que queda accesible desde «Profundizar →»).
      Caminos A / B1 / B2 / C más un camino D de desvío («puede que no venga de la
      columna»). La bifurcación la mandan **las cuatro preguntas de la cauda equina**
      —micción y defecación, sensibilidad perineal, debilidad de las piernas y las
      banderas rojas sistémicas—, que se preguntan dirigidamente porque casi ninguna
      aparece sola en el relato espontáneo. El camino A es el primer *fast-track* del
      repo **sin ningún examen**: el recuadro «NO pedir» apunta a la radiografía de
      rutina, a la resonancia, al laboratorio, al reposo en cama y a la pregabalina, y
      explica por qué la imagen precoz empeora el pronóstico percibido (hallazgos
      degenerativos casi universales, Brinjikji 2015). El camino B1 trata la ciática
      como lo que es —curso natural favorable, resonancia **diferida** a las 4–6
      semanas— con el mapa radicular L3–S1, la advertencia sobre el valor real del
      Lasègue y el recordatorio de que un compromiso de S2–S4 no es radiculopatía sino
      camino C. El camino B2 agrupa las cinco banderas rojas que sí se estudian hoy
      (infección espinal, malignidad, fractura, hematoma del anticoagulado y causa
      visceral o vascular) con su bundle simultáneo, y el camino C reúne las cuatro
      emergencias en que manda la sospecha y no la confirmación: cauda equina,
      compresión medular, absceso epidural y aneurisma aórtico roto. Incluye la
      calculadora de los **criterios ASAS** de dolor lumbar inflamatorio (Sieper 2009),
      acotada de forma explícita al dolor de más de tres meses y a la decisión de
      derivar, no a la del alta de hoy. Pendiente de validación: todas las metas de
      tiempo propuestas; el umbral local de residuo postmiccional (la literatura usa
      100 a 200 mL); los plazos quirúrgicos y de resonancia y las vías de derivación a
      columna; el esquema de corticoides de la compresión medular; el antibiótico
      empírico de la infección espinal según el PROA local; los agentes de reversión de
      la anticoagulación; el esquema escalonado de analgesia parenteral del servicio y
      su disponibilidad (ketoprofeno, ketorolaco, metamizol, opioides); la
      disponibilidad de ciclobenzaprina y sus alternativas; y la cobertura garantizada
      que corresponda al caso.
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