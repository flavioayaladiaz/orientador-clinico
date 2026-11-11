/* Catálogo de Orientador Clínico — única fuente de verdad de la navegación.
   Cada página tiene una ubicación principal (ubic[0]) y, si corresponde, entradas
   adicionales. Para clasificar una página nueva basta agregarla a paginas. */
window.CATALOGO = {
 "areas": [
  {
   "id": "ambulatorio",
   "nombre": "Ambulatorio",
   "color": "teal",
   "desc": "Consulta frecuente de la urgencia: del síntoma de entrada a la decisión de alta, estudio o derivación.",
   "grupos": [
    {
     "id": "sintomas",
     "nombre": "Síntomas cardinales"
    },
    {
     "id": "cuadros",
     "nombre": "Cuadros específicos"
    },
    {
     "id": "conductual",
     "nombre": "Sedación del agitado"
    }
   ],
   "entrada": "news2"
  },
  {
   "id": "reanimador",
   "nombre": "Reanimador",
   "color": "red",
   "desc": "Paciente crítico en el box: paro, procedimientos de alto riesgo y patología compleja.",
   "grupos": [
    {
     "id": "paro",
     "nombre": "Paro cardiorrespiratorio",
     "subs": [
      {
       "id": "adulto",
       "nombre": "Adulto",
       "directo": true
      },
      {
       "id": "pediatrico",
       "nombre": "Pediátrico",
       "directo": true
      },
      {
       "id": "neonatal",
       "nombre": "Neonatal",
       "directo": true
      },
      {
       "id": "embarazada",
       "nombre": "Embarazada",
       "directo": true
      }
     ],
     "desc": "Reanimación del paro cardiorrespiratorio según la población: adulto, pediátrico, neonatal y embarazada."
    },
    {
     "id": "procedimientos",
     "nombre": "Procedimientos",
     "desc": "Procedimientos de alto riesgo y baja frecuencia (HALO), paso a paso y con control de tiempos."
    },
    {
     "id": "obstetricia",
     "nombre": "Obstetricia",
     "desc": "Urgencias obstétricas: trabajo de parto de término y pretérmino."
    }
   ],
   "nav": "botones"
  },
  {
   "id": "paciente-critico",
   "nombre": "Paciente Crítico",
   "color": "amber",
   "nav": "botones",
   "desc": "Cuadros críticos complejos, ordenados por sistema, más intoxicaciones.",
   "grupos": [
    {
     "id": "cardiovascular",
     "nombre": "Cardiovascular",
     "directo": false
    },
    {
     "id": "respiratorio",
     "nombre": "Respiratorio",
     "directo": false
    },
    {
     "id": "neurologico",
     "nombre": "Neurológico",
     "directo": false
    },
    {
     "id": "endocrino",
     "nombre": "Endocrino y metabólico",
     "directo": false
    },
    {
     "id": "digestivo",
     "nombre": "Digestivo",
     "directo": false
    },
    {
     "id": "infeccioso",
     "nombre": "Infeccioso",
     "directo": false
    },
    {
     "id": "oncologico",
     "nombre": "Oncológico",
     "directo": false
    },
    {
     "id": "trauma",
     "nombre": "Trauma",
     "directo": false
    },
    {
     "id": "intoxicaciones",
     "nombre": "Intoxicaciones",
     "directo": false
    }
   ]
  },
  {
   "id": "coordinacion",
   "nombre": "Coordinación",
   "color": "indigo",
   "desc": "",
   "grupos": [
    {
     "id": "respuesta",
     "nombre": "Respuesta hospitalaria"
    }
   ]
  }
 ],
 "tipos": {
  "procedimiento": "Procedimiento HALO",
  "algoritmo": "Algoritmo",
  "checklist": "Checklist",
  "sintoma": "Síntoma cardinal",
  "plan": "Plan"
 },
 "paginas": [
  {
   "id": "plan-imv",
   "href": "plan-imv.html",
   "titulo": "Incidente de múltiples víctimas",
   "tag": "Respuesta hospitalaria",
   "desc": "Qué hacer cuando SAMU anuncia un incidente con múltiples víctimas: activar, liberar la urgencia, asignar el mando, clasificar y dar destino, en orden de ejecución.",
   "meta": [
    "Activación",
    "Mando y roles",
    "Triage"
   ],
   "accent": "amber",
   "tipo": "plan",
   "kw": "IMV plan IMV incidente múltiples víctimas SAMU catástrofe triage mando desastre",
   "ubic": [
    {
     "area": "coordinacion",
     "grupo": "respuesta"
    }
   ],
   "simple": true
  },
  {
   "id": "sintoma-dolor-abdominal",
   "href": "sintoma-dolor-abdominal.html",
   "titulo": "Dolor abdominal",
   "tag": "Síntoma cardinal",
   "desc": "Bifurcación en los primeros 3 minutos: los tres gestos que se olvidan (electrocardiograma, prueba de embarazo y examen de genitales y hernias), alta del dolor de bajo riesgo sin tomografía, bundle del abdomen que se estudia hoy, puntaje de Alvarado e indicaciones al alta listas para copiar.",
   "meta": [
    "Fast-track",
    "Stop workup",
    "Puntaje de Alvarado",
    "Copiar indicaciones"
   ],
   "accent": "teal",
   "tipo": "sintoma",
   "kw": "abdomen dolor de guata apendicitis cólico peritonitis",
   "ubic": [
    {
     "area": "ambulatorio",
     "grupo": "sintomas"
    }
   ]
  },
  {
   "id": "sintoma-dolor-toracico",
   "href": "sintoma-dolor-toracico.html",
   "titulo": "Dolor torácico",
   "tag": "Síntoma cardinal",
   "desc": "Bifurcación en los primeros 3 minutos: electrocardiograma en menos de 10 minutos, alta del dolor de pared sin laboratorio, bundle de las causas letales con sus reglas de decisión, puntaje HEART e indicaciones al alta listas para copiar.",
   "meta": [
    "Fast-track",
    "Stop workup",
    "Puntaje HEART",
    "Copiar indicaciones"
   ],
   "accent": "red",
   "tipo": "sintoma",
   "kw": "pecho dolor precordial angina infarto SCA",
   "ubic": [
    {
     "area": "ambulatorio",
     "grupo": "sintomas"
    }
   ]
  },
  {
   "id": "sintoma-cefalea",
   "href": "sintoma-cefalea.html",
   "titulo": "Cefalea",
   "tag": "Síntoma cardinal",
   "desc": "Bifurcación en los primeros 3 minutos: cuánto tardó el dolor en llegar al máximo, alta de la cefalea primaria sin tomografía, bundle de la bandera roja que la tomografía no descarta, regla de Ottawa e indicaciones al alta listas para copiar.",
   "meta": [
    "Fast-track",
    "Stop workup",
    "Regla de Ottawa",
    "Copiar indicaciones"
   ],
   "accent": "indigo",
   "tipo": "sintoma",
   "kw": "dolor de cabeza migraña hemorragia subaracnoidea ACV",
   "ubic": [
    {
     "area": "ambulatorio",
     "grupo": "sintomas"
    }
   ]
  },
  {
   "id": "sintoma-disnea",
   "href": "sintoma-disnea.html",
   "titulo": "Disnea",
   "tag": "Síntoma cardinal",
   "desc": "Bifurcación en los primeros 3 minutos: oxígeno con objetivo y no «al máximo», el patrón de la ecografía a pie de cama, alta de la disnea benigna sin exámenes, bundles de la causa cardiogénica, obstructiva y vascular, calculadoras de Wells con PERC y de CURB-65 e indicaciones al alta listas para copiar.",
   "meta": [
    "Fast-track",
    "Stop workup",
    "Wells · PERC · CURB-65",
    "Copiar indicaciones"
   ],
   "accent": "teal",
   "tipo": "sintoma",
   "kw": "falta de aire ahogo dificultad respiratoria",
   "ubic": [
    {
     "area": "ambulatorio",
     "grupo": "sintomas"
    }
   ]
  },
  {
   "id": "sintoma-fiebre",
   "href": "sintoma-fiebre.html",
   "titulo": "Fiebre",
   "tag": "Síntoma cardinal",
   "desc": "Bifurcación en los primeros 3 minutos: el huésped antes que el foco, alta del foco benigno sin exámenes, bundle de la primera hora, fiebre sin foco, neutropenia febril, el desvío de la hipertermia y calculadoras de qSOFA, MASCC y McIsaac.",
   "meta": [
    "Fast-track",
    "Stop workup",
    "qSOFA · MASCC · McIsaac",
    "Copiar indicaciones"
   ],
   "accent": "red",
   "tipo": "sintoma",
   "kw": "temperatura febril infección foco",
   "ubic": [
    {
     "area": "ambulatorio",
     "grupo": "sintomas"
    }
   ]
  },
  {
   "id": "sintoma-diarrea-vomitos",
   "href": "sintoma-diarrea-vomitos.html",
   "titulo": "Diarrea y vómitos",
   "tag": "Síntoma cardinal",
   "desc": "Bifurcación en los primeros 3 minutos: gastroenteritis con alta sin exámenes, estimador de reposición, bundle del paciente complicado, shock, el desvío de «no es una gastroenteritis» e indicaciones al alta listas para copiar.",
   "meta": [
    "Fast-track",
    "Stop workup",
    "Estimador de reposición",
    "Copiar indicaciones"
   ],
   "accent": "amber",
   "tipo": "sintoma",
   "kw": "gastroenteritis deshidratación náuseas",
   "ubic": [
    {
     "area": "ambulatorio",
     "grupo": "sintomas"
    }
   ]
  },
  {
   "id": "sintoma-disuria",
   "href": "sintoma-disuria.html",
   "titulo": "Disuria",
   "tag": "Síntoma cardinal",
   "desc": "Bifurcación en los primeros 3 minutos: cistitis con alta sin exámenes, ITU complicada con órdenes simultáneas, urosepsis e indicaciones al alta listas para copiar.",
   "meta": [
    "Fast-track",
    "Stop workup",
    "Copiar indicaciones"
   ],
   "accent": "emerald",
   "tipo": "sintoma",
   "kw": "infección urinaria ITU orina ardor cistitis pielonefritis",
   "ubic": [
    {
     "area": "ambulatorio",
     "grupo": "sintomas"
    }
   ]
  },
  {
   "id": "sintoma-dolor-lumbar",
   "href": "sintoma-dolor-lumbar.html",
   "titulo": "Dolor lumbar",
   "tag": "Síntoma cardinal",
   "desc": "Bifurcación en los primeros 3 minutos: las cuatro preguntas de la cauda equina, alta del lumbago mecánico sin imagen ni laboratorio, bundle de la bandera roja, criterios ASAS e indicaciones al alta listas para copiar.",
   "meta": [
    "Fast-track",
    "Stop workup",
    "Cauda equina",
    "Copiar indicaciones"
   ],
   "accent": "indigo",
   "tipo": "sintoma",
   "kw": "lumbago espalda ciática cólico renal",
   "ubic": [
    {
     "area": "ambulatorio",
     "grupo": "sintomas"
    }
   ]
  },
  {
   "id": "sintoma-mareo-vertigo",
   "href": "sintoma-mareo-vertigo.html",
   "titulo": "Mareo y vértigo",
   "tag": "Síntoma cardinal",
   "desc": "Bifurcación por tiempo y desencadenante, no por «qué tipo de mareo»: VPPB con Dix-Hallpike y Epley en el box sin imagen, examen oculomotor STANDING y HINTS+ con su advertencia, el patrón central que la TAC no descarta, el mareo que nunca fue vestibular e indicaciones al alta listas para copiar.",
   "meta": [
    "Fast-track",
    "Stop workup",
    "STANDING · HINTS+",
    "Epley",
    "Copiar indicaciones"
   ],
   "accent": "indigo",
   "tipo": "sintoma",
   "kw": "vértigo inestabilidad vestibular HINTS",
   "ubic": [
    {
     "area": "ambulatorio",
     "grupo": "sintomas"
    }
   ]
  },
  {
   "id": "sintoma-sincope",
   "href": "sintoma-sincope.html",
   "titulo": "Síncope",
   "tag": "Síntoma cardinal",
   "desc": "Lo que se decide no es la causa sino el destino: tres preguntas en orden —¿fue un síncope?, ¿hay causa grave evidente?, ¿cuánto riesgo tiene a 30 días?—, el electrocardiograma y la presión de pie como los dos exámenes que rinden, lo que no hay que pedir, Canadian Syncope Risk Score, puntaje de Sheldon para síncope frente a convulsión e indicaciones al alta listas para copiar.",
   "meta": [
    "Fast-track",
    "Stop workup",
    "CSRS",
    "Sheldon",
    "Ortostatismo",
    "Copiar indicaciones"
   ],
   "accent": "indigo",
   "tipo": "sintoma",
   "kw": "desmayo pérdida de conciencia lipotimia",
   "ubic": [
    {
     "area": "ambulatorio",
     "grupo": "sintomas"
    }
   ]
  },
  {
   "id": "sintoma-dolor-extremidades",
   "href": "sintoma-dolor-extremidades.html",
   "titulo": "Dolor y trauma de extremidades",
   "tag": "Síntoma cardinal",
   "desc": "Primero lo que amenaza la extremidad —compartimento, isquemia, fractura expuesta, infección necrotizante— y después la pregunta por la imagen: reglas de Ottawa de tobillo, mediopié y rodilla como criterio para NO pedir radiografía, fracturas que la primera placa no muestra, la extremidad dolorosa sin trauma e indicaciones al alta listas para copiar.",
   "meta": [
    "Fast-track",
    "Stop workup",
    "Ottawa",
    "Wells TVP",
    "Rutherford",
    "Copiar indicaciones"
   ],
   "accent": "emerald",
   "tipo": "sintoma",
   "kw": "fractura esguince luxación brazo pierna trauma",
   "ubic": [
    {
     "area": "ambulatorio",
     "grupo": "sintomas"
    }
   ]
  },
  {
   "id": "sintoma-contusion",
   "href": "sintoma-contusion.html",
   "titulo": "Contusión y trauma menor",
   "tag": "Síntoma cardinal",
   "desc": "Bifurcación en los primeros 3 minutos: desvestir, girar y preguntar por qué se cayó, alta de la contusión simple sin radiografía, bundle del paciente contuso que sí se estudia hoy, reglas canadienses de cerebro y de columna cervical e indicaciones al alta listas para copiar.",
   "meta": [
    "Fast-track",
    "Stop workup",
    "Reglas canadienses",
    "Copiar indicaciones"
   ],
   "accent": "amber",
   "tipo": "sintoma",
   "kw": "golpe policontusiones trauma menor traumatismo",
   "ubic": [
    {
     "area": "ambulatorio",
     "grupo": "sintomas"
    }
   ]
  },
  {
   "id": "algoritmo-malaria",
   "href": "algoritmo-malaria.html",
   "titulo": "Malaria en el adulto",
   "tag": "Algoritmo de decisión",
   "desc": "Malaria importada según las Orientaciones Técnicas del MINSAL 2026: la ventana de sospecha de 12 meses en el febril que viajó, gota gruesa y frotis el mismo día, criterios de malaria grave de la OMS, artesunato intravenoso, esquemas orales por especie y peso, primaquina y G6PD, notificación inmediata y dónde están los antimaláricos en Chile.",
   "meta": [
    "Árbol de decisión",
    "Criterios de gravedad",
    "Dosis por peso"
   ],
   "accent": "indigo",
   "tipo": "algoritmo",
   "kw": "paludismo plasmodium artesunato viaje fiebre tropical",
   "ubic": [
    {
     "area": "ambulatorio",
     "grupo": "cuadros"
    }
   ]
  },
  {
   "id": "checklist-epistaxis",
   "href": "checklist-epistaxis.html",
   "titulo": "Epistaxis",
   "tag": "Otorrinolaringología de urgencia",
   "desc": "Casi todo taponamiento nasal es la consecuencia de una compresión mal hecha y de una nariz que nunca se miró. La escalera completa en orden: compresión correcta sobre la parte blanda y no sobre el hueso, algodón empapado con vasoconstrictor, anestésico y ácido tranexámico —con lo que dicen de verdad NoPAC y los ensayos que lo contradicen—, cauterización con nitrato de plata sobre el punto y los dos «no» que evitan la perforación septal, taponamiento anterior con Merocel o Rapid Rhino y cuál duele menos al retirar, taponamiento posterior con sonda Foley paso a paso, por qué el antibiótico de rutina no tiene respaldo, orientador de destino, el anticoagulado al que se trata la nariz antes que la sangre, y cuándo esto ya es del otorrino.",
   "meta": [
    "Checklist",
    "Cronómetro",
    "¿Qué toca ahora?",
    "Merocel vs Rapid Rhino",
    "Foley posterior",
    "¿Hospitalizar?",
    "Registro para copiar"
   ],
   "accent": "red",
   "tipo": "checklist",
   "kw": "sangrado nasal hemorragia nariz taponamiento nasal ORL",
   "ubic": [
    {
     "area": "ambulatorio",
     "grupo": "cuadros"
    }
   ]
  },
  {
   "id": "checklist-pcr-traumatico",
   "href": "checklist-pcr-traumatico.html",
   "titulo": "Paro traumático del adulto",
   "tag": "Reanimación",
   "desc": "El algoritmo médico no sirve acá: el corazón no está enfermo, está vacío o comprimido, y lo que salva es deshacer la causa mecánica con varias manos a la vez. El periparo y los estados de bajo flujo, a quién no se reanima, las cuatro causas HOTT en paralelo, descompresión bilateral sin imagen previa, sangre en vez de cristaloide, orientador de decisión con el rendimiento de la toracotomía por mecanismo y signos de vida, por qué la adrenalina y la intubación precoz bajan de prioridad, los desvíos que invierten el algoritmo —asfixia, ahogamiento, hipotermia y la causa médica disfrazada de trauma—, criterios de suspensión y registro listo para copiar.",
   "meta": [
    "Checklist",
    "Cronómetro",
    "HOTT",
    "¿Toracotomía?",
    "Registro para copiar"
   ],
   "accent": "amber",
   "tipo": "checklist",
   "kw": "PCR paro cardiorrespiratorio trauma HOTT RCP",
   "ubic": [
    {
     "area": "reanimador",
     "grupo": "paro",
     "sub": "adulto"
    }
   ],
   "etiqueta": "Traumático"
  },
  {
   "id": "checklist-reanimacion-pediatrica",
   "href": "checklist-reanimacion-pediatrica.html",
   "titulo": "Reanimación pediátrica · trauma y no trauma",
   "tag": "Pediatría de urgencia",
   "desc": "El paro del niño casi nunca empieza en el corazón: por eso la mejor reanimación es la que se evita y, cuando ya ocurrió, ventilar es la mitad del tratamiento. Reconocer al niño que se deteriora con el triángulo de evaluación pediátrica, la bradicardia como preparo, la bifurcación de los primeros 60 segundos entre el paro médico y el traumático, técnica de compresiones por edad y 15:2, calculadora de peso, dosis, energía y calibres —con la advertencia de que estimar el peso es el eslabón más débil—, umbrales de signos vitales por edad, las ocho causas reversibles con sus desvíos, el algoritmo invertido del paro traumático con las cuatro causas HOTT, y dónde está el límite de la toracotomía en el niño.",
   "meta": [
    "Checklist",
    "Cronómetro",
    "Trauma / no trauma",
    "¿Qué toca ahora?",
    "Dosis por peso",
    "Signos vitales por edad",
    "Registro para copiar"
   ],
   "accent": "red",
   "tipo": "checklist",
   "kw": "niño PALS RCP pediátrico paro lactante",
   "ubic": [
    {
     "area": "reanimador",
     "grupo": "paro",
     "sub": "pediatrico"
    }
   ]
  },
  {
   "id": "checklist-reanimacion-neonatal",
   "href": "checklist-reanimacion-neonatal.html",
   "titulo": "Reanimación neonatal",
   "tag": "Neonatología de urgencia",
   "desc": "El recién nacido que no arranca casi nunca necesita un fármaco: necesita que alguien le mueva el pecho. Preparación antes del nacimiento, las tres preguntas al nacer, manejo del cordón, el minuto de oro, la ventilación con presión positiva y los pasos correctores MR SOPA, metas de saturación minuto a minuto, compresiones 3:1, adrenalina con calculadora de dosis por peso, lo que cambia en el prematuro y la ventana de 6 horas de la hipotermia terapéutica.",
   "meta": [
    "Checklist",
    "Cronómetro",
    "Minuto de oro",
    "¿Qué toca ahora?",
    "Dosis por peso",
    "Metas de saturación",
    "Registro para copiar"
   ],
   "accent": "teal",
   "tipo": "checklist",
   "kw": "recién nacido RN NRP apgar parto asfixia",
   "ubic": [
    {
     "area": "reanimador",
     "grupo": "paro",
     "sub": "neonatal"
    }
   ]
  },
  {
   "id": "checklist-cricotiroidotomia",
   "href": "checklist-cricotiroidotomia.html",
   "titulo": "Cricotiroidotomía percutánea con kit de aguja",
   "tag": "Procedimiento HALO",
   "desc": "Cuándo declarar el «no intubo, no oxigeno», roles y cronómetro con hitos, localización de la membrana cricotiroidea, técnica de Seldinger paso a paso, confirmación con capnografía y conversión a bisturí-bougie-tubo cuando el kit falla.",
   "meta": [
    "Checklist",
    "Cronómetro",
    "Plan de rescate"
   ],
   "accent": "red",
   "tipo": "procedimiento",
   "kw": "vía aérea quirúrgica cricotirotomía no puedo intubar no puedo ventilar CICO",
   "ubic": [
    {
     "area": "reanimador",
     "grupo": "procedimientos"
    }
   ]
  },
  {
   "id": "checklist-toracotomia-reanimacion",
   "href": "checklist-toracotomia-reanimacion.html",
   "titulo": "Toracotomía de reanimación",
   "tag": "Procedimiento HALO",
   "desc": "A quién sí y a quién no se le abre el tórax, ventanas de tiempo, la caja de instrumental, la anterolateral izquierda y la conversión a clamshell, clampeo aórtico y masaje interno, intubación monobronquial derecha y el tubo pleural derecho que se olvida.",
   "meta": [
    "Checklist",
    "Cronómetro",
    "Clamshell"
   ],
   "accent": "amber",
   "tipo": "procedimiento",
   "kw": "toracotomía de emergencia paro traumático taponamiento clampeo aórtico",
   "ubic": [
    {
     "area": "reanimador",
     "grupo": "procedimientos"
    }
   ]
  },
  {
   "id": "checklist-histerotomia-reanimacion",
   "href": "checklist-histerotomia-reanimacion.html",
   "titulo": "Histerotomía de reanimación (cesárea perimortem)",
   "tag": "Procedimiento HALO",
   "desc": "Se hace por la madre, no por el feto: indicación por altura uterina, desplazamiento uterino manual izquierdo, la regla de los 4 minutos y qué dicen los datos cuando ya se pasó, instrumental mínimo, incisión vertical media e histerotomía clásica paso a paso, causas reversibles A–H y manejo posterior de las dos pacientes.",
   "meta": [
    "Checklist",
    "Cronómetro",
    "Paro materno"
   ],
   "accent": "indigo",
   "tipo": "procedimiento",
   "kw": "cesárea perimortem embarazada paro materno",
   "ubic": [
    {
     "area": "reanimador",
     "grupo": "procedimientos"
    },
    {
     "area": "reanimador",
     "grupo": "paro",
     "sub": "embarazada"
    }
   ]
  },
  {
   "id": "checklist-pericardiocentesis",
   "href": "checklist-pericardiocentesis.html",
   "titulo": "Pericardiocentesis de emergencia ecoguiada",
   "tag": "Procedimiento HALO",
   "desc": "Taponamiento confirmado con ecografía, a quién no se le punciona (trauma, disección, rotura de pared libre), por qué intubar antes de drenar mata, mapeo del corredor paraesternal con Doppler color, aguja en plano con transductor lineal en ocho pasos, test de microburbujas, cuánto drenar y síndrome de descompresión pericárdica.",
   "meta": [
    "Checklist",
    "Cronómetro",
    "Aguja en plano"
   ],
   "accent": "teal",
   "tipo": "procedimiento",
   "kw": "taponamiento cardíaco derrame pericárdico ecografía",
   "ubic": [
    {
     "area": "reanimador",
     "grupo": "procedimientos"
    }
   ]
  },
  {
   "id": "checklist-cantotomia-cantolisis",
   "href": "checklist-cantotomia-cantolisis.html",
   "titulo": "Cantotomía lateral y cantólisis",
   "tag": "Procedimiento HALO",
   "desc": "El síndrome compartimental orbitario se reconoce sin tomografía y se resuelve con una tijera: signos al lado de la camilla, cómo descartar el globo abierto antes de cortar, anatomía del tendón cantal lateral, los siete pasos, por qué la cantotomía sola no descomprime y qué hacer cuando la presión no baja.",
   "meta": [
    "Checklist",
    "Cronómetro",
    "Rescate visual"
   ],
   "accent": "emerald",
   "tipo": "procedimiento",
   "kw": "hematoma retrobulbar síndrome compartimental orbitario ojo trauma ocular",
   "ubic": [
    {
     "area": "reanimador",
     "grupo": "procedimientos"
    }
   ]
  },
  {
   "id": "checklist-balon-taponamiento",
   "href": "checklist-balon-taponamiento.html",
   "titulo": "Sonda de balón esofagogástrico",
   "tag": "Procedimiento HALO",
   "desc": "Taponamiento con sonda de Sengstaken-Blakemore, Minnesota o Linton-Nachlas en la hemorragia variceal masiva refractaria: cuándo es el momento del balón, por qué se intuba antes, prueba de balones y armado de la mesa, inserción con laringoscopio y bougie, inflado escalonado con tracción, el balón esofágico, las 24 horas de reloj y el retiro.",
   "meta": [
    "Checklist",
    "Cronómetro",
    "Puente a terapia definitiva"
   ],
   "accent": "red",
   "tipo": "procedimiento",
   "kw": "Sengstaken Minnesota várices esofágicas hemorragia digestiva",
   "ubic": [
    {
     "area": "reanimador",
     "grupo": "procedimientos"
    }
   ]
  },
  {
   "id": "checklist-marcapasos-transvenoso",
   "href": "checklist-marcapasos-transvenoso.html",
   "titulo": "Marcapasos transvenoso de emergencia",
   "tag": "Procedimiento HALO",
   "desc": "Bradicardia que ya no responde a atropina, cronotropos ni al transcutáneo: por qué la captura del transcutáneo suele ser falsa, elección del acceso venoso, navegación del catéter con balón guiada por ECG intracavitario y ecografía, umbral y programación del generador, confirmación de la posición por morfología del QRS, radiografía y eco, qué hacer cuando deja de capturar y por qué no debe quedarse puesto.",
   "meta": [
    "Checklist",
    "Cronómetro",
    "Captura y umbral"
   ],
   "accent": "amber",
   "tipo": "procedimiento",
   "kw": "bradicardia bloqueo AV estimulación eléctrica",
   "ubic": [
    {
     "area": "reanimador",
     "grupo": "procedimientos"
    }
   ]
  },
  {
   "id": "checklist-toracostomia-tubo-pleural",
   "href": "checklist-toracostomia-tubo-pleural.html",
   "titulo": "Toracostomía simple y tubo pleural",
   "tag": "Procedimiento HALO",
   "desc": "Descompresión del tórax en el paro y el shock traumático: por qué la aguja falla y el dedo no, el triángulo de seguridad, incisión y disección roma paso a paso, cuándo se convierte en tubo pleural y con qué calibre, confirmación con trampa de agua, ecografía y radiografía, el algoritmo de «no mejora» de afuera hacia adentro, el débito que manda al pabellón y el hemotórax retenido.",
   "meta": [
    "Checklist",
    "Cronómetro",
    "Paro traumático"
   ],
   "accent": "indigo",
   "tipo": "procedimiento",
   "kw": "neumotórax hemotórax drenaje pleural descompresión pulmón",
   "ubic": [
    {
     "area": "reanimador",
     "grupo": "procedimientos"
    }
   ]
  },
  {
   "id": "checklist-priapismo-aspiracion-intracavernosa",
   "href": "checklist-priapismo-aspiracion-intracavernosa.html",
   "titulo": "Aspiración e irrigación intracavernosa (priapismo)",
   "tag": "Procedimiento HALO",
   "desc": "El síndrome compartimental del cuerpo cavernoso: cómo separar el priapismo isquémico del arterial y de la erección prolongada postinyección, qué pasa dentro del pene con las horas, anestesia del pene, punción lateral en 3 o 9 en punto, aspiración hasta sangre roja, dilución y dosis de fenilefrina con monitorización de presión y frecuencia, el algoritmo de «no cede», la escalada a shunt y prótesis precoz, y el estudio de la causa.",
   "meta": [
    "Checklist",
    "Cronómetro",
    "Dilución de fenilefrina"
   ],
   "accent": "teal",
   "tipo": "procedimiento",
   "kw": "erección prolongada pene urología",
   "ubic": [
    {
     "area": "reanimador",
     "grupo": "procedimientos"
    }
   ]
  },
  {
   "id": "checklist-artrocentesis",
   "href": "checklist-artrocentesis.html",
   "titulo": "Artrocentesis diagnóstica ecoguiada",
   "tag": "Procedimiento HALO",
   "desc": "La articulación aguda, caliente y dolorosa es una pregunta que solo responde el líquido sinovial: por qué ningún examen de sangre descarta la artritis séptica y el recuento tampoco, cuándo no se punciona, material y tubos rotulados antes de pinchar, cómo encontrar y marcar el derrame y distinguirlo de la sinovitis, abordajes de rodilla, tobillo, hombro, codo y cadera con la estructura que no se toca, qué se manda y en qué orden, lectura del recuento con razones de verosimilitud, el algoritmo de la punción seca y quién decide el drenaje definitivo.",
   "meta": [
    "Checklist",
    "Cronómetro",
    "Ecoguiado"
   ],
   "accent": "emerald",
   "tipo": "procedimiento",
   "kw": "artritis séptica articulación líquido sinovial monoartritis",
   "ubic": [
    {
     "area": "reanimador",
     "grupo": "procedimientos"
    }
   ]
  },
  {
   "id": "checklist-cistostomia-suprapubica",
   "href": "checklist-cistostomia-suprapubica.html",
   "titulo": "Cistostomía suprapúbica de urgencia",
   "tag": "Procedimiento HALO",
   "desc": "Vejiga llena y uretra impasable: la única indicación, por qué la punción a ciegas termina en intestino y qué paciente no se punciona en el box, las tres medidas ecográficas antes de pinchar, el kit y el catéter que no tiene balón, la punción con trocar y con Seldinger paso a paso, cómo confirmar que quedó dentro, diuresis postobstructiva y hematuria posdescompresión, y cómo se reconoce a tiempo la lesión intestinal.",
   "meta": [
    "Checklist",
    "Cronómetro",
    "Ventana ecográfica"
   ],
   "accent": "red",
   "tipo": "procedimiento",
   "kw": "retención urinaria sondaje imposible vejiga globo vesical",
   "ubic": [
    {
     "area": "reanimador",
     "grupo": "procedimientos"
    }
   ]
  },
  {
   "id": "algoritmo-diseccion-aortica",
   "href": "algoritmo-diseccion-aortica.html",
   "titulo": "Disección aórtica aguda",
   "tag": "Algoritmo de decisión",
   "desc": "Síndrome aórtico agudo en urgencia: presentaciones atípicas, ADD-RS con dímero D, imagen, control anti-impulso con dosis, malperfusión y el paciente hipotenso.",
   "meta": [
    "Árbol de decisión",
    "ADD-RS",
    "Stanford A"
   ],
   "accent": "red",
   "tipo": "algoritmo",
   "kw": "aorta dolor torácico desgarro Stanford",
   "ubic": [
    {
     "area": "paciente-critico",
     "grupo": "cardiovascular"
    }
   ]
  },
  {
   "id": "algoritmo-shock-cardiogenico",
   "href": "algoritmo-shock-cardiogenico.html",
   "titulo": "Shock cardiogénico y falla derecha",
   "tag": "Algoritmo de decisión",
   "desc": "Reconocerlo antes de la hipotensión con los estadios SCAI, falla ventricular derecha y biventricular, infarto de ventrículo derecho, vasoactivos con dosis por peso e intubación de alto riesgo.",
   "meta": [
    "Árbol de decisión",
    "Estadios SCAI",
    "Dosis por peso"
   ],
   "accent": "indigo",
   "tipo": "algoritmo",
   "kw": "falla cardíaca bomba infarto hipotensión ventrículo derecho",
   "ubic": [
    {
     "area": "paciente-critico",
     "grupo": "cardiovascular"
    }
   ]
  },
  {
   "id": "checklist-fibrinolisis",
   "href": "checklist-fibrinolisis.html",
   "titulo": "Fibrinólisis",
   "tag": "IAMCEST",
   "desc": "Criterios de reperfusión, contraindicaciones, dosis y monitorización post-trombólisis.",
   "meta": [
    "Contraindicaciones",
    "Dosificación",
    "Tiempo puerta-aguja"
   ],
   "accent": "indigo",
   "tipo": "checklist",
   "kw": "IAMCEST infarto trombólisis tenecteplase reperfusión SCACEST",
   "ubic": [
    {
     "area": "paciente-critico",
     "grupo": "cardiovascular"
    }
   ]
  },
  {
   "id": "algoritmo-status-asmatico",
   "href": "algoritmo-status-asmatico.html",
   "titulo": "Status asmático grave",
   "tag": "Algoritmo de decisión",
   "desc": "Crisis con riesgo vital y casi fatal, tratamiento de la primera hora con dosis, hiperinsuflación dinámica, intubación de alto riesgo, ventilación con hipercapnia permisiva y colapso posintubación.",
   "meta": [
    "Árbol de decisión",
    "Peso predicho",
    "DOPES"
   ],
   "accent": "teal",
   "tipo": "algoritmo",
   "kw": "asma crisis broncoespasmo salbutamol broncodilatador",
   "ubic": [
    {
     "area": "paciente-critico",
     "grupo": "respiratorio"
    }
   ]
  },
  {
   "id": "algoritmo-tec-grave",
   "href": "algoritmo-tec-grave.html",
   "titulo": "TEC grave e hipertensión endocraneal",
   "tag": "Algoritmo de decisión",
   "desc": "Evitar la lesión secundaria: reconocer la herniación y tratarla antes de la imagen, intubación neuroprotectora, criterios quirúrgicos, osmoterapia de rescate, escalonamiento por niveles y el paciente que además sangra.",
   "meta": [
    "Árbol de decisión",
    "Glasgow y GCS-P",
    "Calculadora de PPC"
   ],
   "accent": "indigo",
   "tipo": "algoritmo",
   "kw": "traumatismo encéfalo craneano hipertensión intracraneana HIC cabeza",
   "ubic": [
    {
     "area": "paciente-critico",
     "grupo": "neurologico"
    }
   ]
  },
  {
   "id": "algoritmo-cad-ehh",
   "href": "algoritmo-cad-ehh.html",
   "titulo": "Cetoacidosis y estado hiperosmolar",
   "tag": "Algoritmo de decisión",
   "desc": "El orden que no se negocia —volumen, potasio, insulina—, criterios del consenso 2024, cetoacidosis euglicémica por inhibidores de SGLT2, shock refractario, electrolitos extremos y la trampa de intubar al paciente con acidosis grave.",
   "meta": [
    "Árbol de decisión",
    "Osmolalidad y brecha aniónica",
    "Dosis por peso"
   ],
   "accent": "emerald",
   "tipo": "algoritmo",
   "kw": "diabetes cetoacidosis hiperosmolar hiperglicemia insulina",
   "ubic": [
    {
     "area": "paciente-critico",
     "grupo": "endocrino"
    }
   ]
  },
  {
   "id": "algoritmo-tormenta-tiroidea",
   "href": "algoritmo-tormenta-tiroidea.html",
   "titulo": "Tormenta tiroidea",
   "tag": "Algoritmo de decisión",
   "desc": "Diagnóstico clínico con la escala de Burch-Wartofsky, el bundle en el orden correcto (la tionamida antes que el yodo), betabloqueo sin precipitar el colapso, fibrilación auricular, shock de alto gasto y terapias de rescate.",
   "meta": [
    "Árbol de decisión",
    "Burch-Wartofsky",
    "Dosis por peso"
   ],
   "accent": "amber",
   "tipo": "algoritmo",
   "kw": "tirotoxicosis hipertiroidismo Burch Wartofsky",
   "ubic": [
    {
     "area": "paciente-critico",
     "grupo": "endocrino"
    }
   ]
  },
  {
   "id": "algoritmo-hda-variceal",
   "href": "algoritmo-hda-variceal.html",
   "titulo": "Hemorragia digestiva alta variceal",
   "tag": "Algoritmo de decisión",
   "desc": "Vasoactivo y antibiótico antes de la endoscopia, transfusión restrictiva y lo que no hay que corregir, vía aérea en la hematemesis masiva, balón y stent como puente, TIPS preventivo y falla hepática aguda sobre crónica.",
   "meta": [
    "Árbol de decisión",
    "Child-Pugh",
    "Dosis por peso"
   ],
   "accent": "red",
   "tipo": "algoritmo",
   "kw": "hemorragia digestiva alta várices cirrosis hematemesis",
   "ubic": [
    {
     "area": "paciente-critico",
     "grupo": "digestivo"
    }
   ]
  },
  {
   "id": "algoritmo-pancreatitis-aguda",
   "href": "algoritmo-pancreatitis-aguda.html",
   "titulo": "Pancreatitis aguda",
   "tag": "Algoritmo de decisión",
   "desc": "De la leve a la que necesita unidad crítica: criterios de Atlanta 2012 y falla orgánica, reposición moderada tras WATERFALL, realimentación precoz, las cuatro causas que cambian el manejo —biliar, alcohol, triglicéridos y calcio—, CPRE solo con colangitis y necrosis infectada con abordaje escalonado.",
   "meta": [
    "Árbol de decisión",
    "APACHE II y BISAP",
    "Volumen por peso"
   ],
   "accent": "teal",
   "tipo": "algoritmo",
   "kw": "páncreas lipasa dolor epigástrico",
   "ubic": [
    {
     "area": "paciente-critico",
     "grupo": "digestivo"
    }
   ]
  },
  {
   "id": "checklist-sepsis_4",
   "href": "checklist-sepsis_4.html",
   "titulo": "Sepsis y shock séptico",
   "tag": "Código Sepsis",
   "desc": "Calculadora NEWS2, activación del código y paquete de la primera hora con control de tiempos.",
   "meta": [
    "NEWS2",
    "Bundle 1 h",
    "Cronómetro"
   ],
   "accent": "teal",
   "tipo": "checklist",
   "kw": "shock séptico NEWS2 qSOFA bundle antibiótico código sepsis",
   "ubic": [
    {
     "area": "paciente-critico",
     "grupo": "infeccioso"
    }
   ]
  },
  {
   "id": "checklist-politrauma_2",
   "href": "checklist-politrauma_2.html",
   "titulo": "Politrauma",
   "tag": "Reanimación",
   "desc": "Preparación del box, secuencia ABCDE, control de hemorragia y decisiones de destino.",
   "meta": [
    "ABCDE",
    "Equipo de trauma",
    "Cronómetro"
   ],
   "accent": "red",
   "tipo": "checklist",
   "kw": "accidente trauma ABCDE hemorragia box de reanimación",
   "ubic": [
    {
     "area": "paciente-critico",
     "grupo": "trauma"
    }
   ]
  },
  {
   "id": "algoritmo-intoxicacion-ccb-betabloqueadores",
   "href": "algoritmo-intoxicacion-ccb-betabloqueadores.html",
   "titulo": "Intoxicación por bloqueadores de calcio y betabloqueadores",
   "tag": "Algoritmo de decisión",
   "desc": "Shock vasopléjico y cardiogénico por cardiotóxicos: cómo distinguirlos, calcio y atropina, insulina en altas dosis con euglicemia, vasopresores, glucagón y emulsión lipídica, descontaminación de preparados de liberación prolongada y cuándo llamar al equipo de ECMO.",
   "meta": [
    "Árbol de decisión",
    "Insulina en altas dosis",
    "Dosis por peso"
   ],
   "accent": "amber",
   "tipo": "algoritmo",
   "kw": "envenenamiento sobredosis verapamilo amlodipino propranolol calcio insulina",
   "ubic": [
    {
     "area": "paciente-critico",
     "grupo": "intoxicaciones"
    }
   ]
  },
  {
   "id": "checklist-parto-urgencia",
   "href": "checklist-parto-urgencia.html",
   "titulo": "Trabajo de parto de término y pretérmino",
   "tag": "Obstetricia de urgencia",
   "desc": "Tres preguntas en orden: ¿hay una emergencia que amenaza ahora?, ¿este parto ocurre acá?, ¿es de término o pretérmino? Lo que llega como «contracciones» y no lo es, calculadora de edad gestacional, orientador de traslado, el paquete del pretérmino —corticoide, sulfato de magnesio, antibiótico y traslado in utero—, atención del parto en el box paso a paso, y las cuatro emergencias del expulsivo: distocia de hombros, prolapso de cordón, podálica y hemorragia posparto.",
   "meta": [
    "Checklist",
    "Cronómetro",
    "Edad gestacional",
    "¿Traslado?",
    "Índice de shock",
    "Registro para copiar"
   ],
   "accent": "indigo",
   "tipo": "checklist",
   "kw": "embarazo parto expulsivo trabajo de parto prematuro pretérmino",
   "ubic": [
    {
     "area": "reanimador",
     "grupo": "obstetricia"
    }
   ],
   "etiqueta": "Trabajo de parto"
  },
  {
   "id": "checklist-sedacion-agitacion",
   "href": "checklist-sedacion-agitacion.html",
   "titulo": "Sedación del paciente agitado",
   "tag": "Urgencia conductual",
   "desc": "La agitación es un signo y no un diagnóstico, la meta es un paciente tranquilo y despertable —no dormido—, y el momento de mayor riesgo es el silencio que viene después de la inyección. Escala BARS como calculadora con la conducta para cada nivel, las causas médicas que se descartan antes de llamarlo psiquiátrico, de-escalación verbal, contención sin prono, elección del fármaco según la causa, dosis parenterales y orales, ketamina intramuscular con calculadora por peso, y el cuidado post-sedación con oxígeno a alta concentración, posición, monitor y cronómetro con hitos.",
   "meta": [
    "Escala BARS",
    "De-escalación",
    "Dosis",
    "Ketamina IM",
    "Post-sedación",
    "Cronómetro",
    "Nota para copiar"
   ],
   "accent": "indigo",
   "tipo": "checklist",
   "kw": "agitación psicomotora contención ketamina BARS haloperidol midazolam",
   "ubic": [
    {
     "area": "ambulatorio",
     "grupo": "conductual"
    }
   ]
  },
  {
   "id": "algoritmo-lisis-tumoral",
   "href": "algoritmo-lisis-tumoral.html",
   "titulo": "Síndrome de lisis tumoral",
   "tag": "Algoritmo de decisión",
   "desc": "Del laboratorio al riñón protegido: criterios de laboratorio y clínicos de Cairo-Bishop con calculadora, grado de gravedad, estratificación de riesgo, hidratación y rasburicasa con calculadora de dosis y metas, manejo de la hiperkalemia, el fósforo y el calcio, criterios de diálisis y seguridad con rasburicasa: G6PD y muestra en hielo.",
   "meta": [
    "Árbol de decisión",
    "Criterios y grado de Cairo-Bishop",
    "Dosis por peso y talla"
   ],
   "accent": "amber",
   "tipo": "algoritmo",
   "kw": "SLT lisis tumoral quimioterapia leucemia linfoma Burkitt hiperuricemia hiperkalemia hiperfosfatemia hipocalcemia rasburicasa alopurinol G6PD Cairo-Bishop oncológica urgencia oncohematológica",
   "ubic": [
    {
     "area": "paciente-critico",
     "grupo": "oncologico"
    }
   ]
  },
  {
   "id": "gestion-ueh",
   "href": "https://francolinaresf-sys.github.io/gestion-UEH/",
   "titulo": "Gestión UEH",
   "tag": "Enlace externo",
   "desc": "",
   "meta": [],
   "accent": "indigo",
   "tipo": "plan",
   "simple": true,
   "kw": "gestión UEH unidad de emergencia hospitalaria coordinación enlace externo",
   "ubic": [
    {
     "area": "coordinacion",
     "grupo": "respuesta"
    }
   ]
  }
 ]
};
