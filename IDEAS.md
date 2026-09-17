# Backlog — Orientador Clínico

Backlog de contenido para el proyecto **Orientador Clínico** (antes "UrgenCheck").
El objetivo ya no es solo checklists: es orientar a médicos con menos experiencia y
sistematizar procesos clínicos, en el formato que mejor sirva a cada tema
(checklist paso a paso, algoritmo/árbol de decisión, guía rápida de orientación
diagnóstica, calculadora, etc).

## Cómo trabaja el agente diario

1. Toma el **primer ítem sin marcar** de este archivo, en el orden en que aparece
   (primero "Rebranding", luego "Motivos de consulta", luego "Patologías complejas",
   luego "Procedimientos HALO").
2. Antes de crear contenido nuevo, revisa si el tema ya está cubierto (total o
   parcialmente) por una página existente (`checklist-*.html`). Si ya existe,
   mejórala o complétala en vez de duplicar.
3. Elige la modalidad más adecuada para el contenido:
   - **Checklist con cronómetro** para procedimientos y códigos con secuencia de
     pasos y tiempos críticos (útil para HALO y patologías con "bundle" de manejo).
   - **Algoritmo / árbol de decisión** para patologías complejas con ramificaciones
     según presentación clínica.
   - **Guía de orientación** (diagnóstico diferencial, red flags, estudio inicial)
     para motivos de consulta frecuentes.
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
   - Registrarse en `sw.js` (lista de cache) para que funcione sin conexión.
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
- [ ] Status asmático grave con hiperinsuflación dinámica y riesgo de colapso
      hemodinámico a la intubación
- [ ] Tormenta tiroidea o crisis tirotoxicósica con inestabilidad hemodinámica
      y arritmias complejas
- [ ] Traumatismo craneoencefálico grave con hipertensión endocraneal
      refractaria y compromiso multisistémico
- [ ] Cetoacidosis diabética o estado hiperosmolar severo con shock refractario
      y desequilibrios electrolíticos extremos
- [ ] Hemorragia digestiva alta masiva por várices esofágicas con shock
      hemorrágico y falla hepática aguda sobre crónica
- [ ] Intoxicaciones graves por bloqueadores de canales de calcio o
      betabloqueadores con shock vasopléjico y cardiogénico

## 3. Procedimientos HALO

- [ ] Cricotiroidotomía percutánea usando kit con aguja
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

## 4. Cola final

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
