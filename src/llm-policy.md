---
title: Política de uso de LLM's
description: >
    Política de uso de LLMs
layout: layout.tsx
type: page
---

## Política de uso de robots generadores de texto

> Términos: "Generador de basura"/"Robot" = LLM/Chatbot/Agente/Cualquier sistema
> de "IA" generativa.
>
> Ver
> [GNU: words to avoid](https://www.gnu.org/philosophy/words-to-avoid.html#ArtificialIntelligence).

## 0. Prohibiciones

NO ESTÁ PERMITIDO BAJO NINGUNA CIRCUNSTANCIA, SIN EXCEPCIONES, USAR GENERADORES
DE TEXTO PARA ESCRIBIR LOS ARTÍCULOS DE BLOG. LATAS/CHATARRAS, FUERA DE MI
BASURA!

## 1. Propósito y alcance

Regular el uso de generadores de basura en el código, documentación,
comunicación y medios de este proyecto. Esta fase de adopción es condicional y
está sujeta a revisión.

Principio: El _bullshit generator_ asiste al razonamiento humano, **NUNCA** lo
sustituye. Quien firma el commit responde, sin excepciones.

## 2. Contribuciones de Código en Urutaú Limited

### 2.1 Responsabilidad humana

Ya que una máquina nunca puede asumir responsabilidades, se usará la misma
lógica que los automóviles, es decir, la responsabilidad recae sobre quien usa
la herramienta, incluso si la misma falla.

La/El hacker es responsable de:

- Responder por todo lo que llegue a producción o a un _"release"_.
- Responder por todos los parches que envíe, sean generados por sus manos o por
  el robot.
- El robot **NO** es un sujeto legal, no firma DCO, no recibe crédito de
  autoría. Ref: Política del kernel linux donde `Signed-off-by` es exclusiva del
  humano.

  La herramienta se declara por separado y sin efecto legal.

### 2.2 Declaración obligatoria

- Todo commit o _merge request_ debe llevar la siguiente línea en el mensaje del
  commit:

  ```
  Assisted-by: Ollama
  ```

- Omitir esta línea cuando aplica se tomará como una contribución engañosa. Se
  revertirá sin previo aviso.

Esto solo aplica para todo lo que sea más allá de autocompletado trivial o
linting.

### 2.3 Comprensión obligatoria

No aceptaremos código generado donde el hacker no sea capaz de explicar línea
por línea, depurar **SIN** la herramienta o sostener bajo revisión. Si este
filtro no se pasa, lo sentimos mucho pero es probable que _"vibraste"_ de más.

Si alguien no puede explicar _por que_ su código funciona, no puede mantenerlo o
arreglarlo cuando falle en entornos productivos y ese costo recae sobre
proyectos enteros, no solo sobre quien le ordena al robot escribir.

### 2.4 Robots autónomos

Mejor conocidos como _"Agentes autónomos"_ (en corpospeak), están
terminantemente prohibidos, no es ideal tener a un robot generador de texto
abriendo issues, merge requests o commits sin aprobación humana por acción.

### 2.5 Origen y licencias

Todo el código de procedencia dudosa (por ejemplo una posible copia _verbatim_
de material bajo licencia incompatible, sin atribución rastreable) no se
aceptará, ya sea generado por un robot o escrito a mano. Esto, aunque nos
desagrade, es necesario ya que los modelos de lenguaje entrenan con código de
licencias mixtas y a veces producen fragmentos casi textuales sin indicar de
donde demonios salieron ni bajo qué licencia estaban.

El riesgo en concreto lo tomamos de la comunidad del kernel de Linux como
"Escenario SCO" (en Inglés _SCO Scenario_) referenciando al litigio SCO vs IBM
(2003-2010): SCO Group demandó a IBM alegando que el código privativo de Unix
System V había sido copiado en el kernel Linux sin autorización, lo cual puso en
duda legal la procedencia del código del kernel durante años, aunque el caso
terminó siendo desestimado.

La lección que nos quedó (no a todos, pero si a muchos) de eso, es que la
procedencia no verificable puede generar años de litigio, incluso cuando, al
final el ~~circo~~, digo, sistema judicial prueba que al final no hubo una
infracción real.

## 3. Comunicación e interacción con humanos

Un _"Issue"_ debe estar descrito con las palabras de quien lo abre, no debe ser
un copypasta del generador, de lo ocntrario el mantenedor perdería la
posibilidad de hacer preguntas, pues el autor original parecería no entender el
problema.

Lo mismo aplica para los merge requests. Sin embargo, si necesitas citar al
robot generador de texto, hazlo con un bloque de cita de Markdown:

> Texto generado por el robot, verbatim.

Para quienes no son hablantes nativos de Español, existen 20,000 traductores y
otras herramientas online, normalmente somos nosotros los hispanoablantes
quienes debemos adaptarnos al idioma Inglés, pero _"No, ningún 'afternoon', ni
ningún 'hello'. Ninguno, Aquí tu hablas Español."_

## 4. Generación de multimedia

Imágenes, audio, video o diapositivas generadas por IA se permiten si cumplen
dos condiciones: no son ilegales,y no infringen copyright de terceros (si se usó
material de un tercero para generar el medio, se acredita), y se verifican como
correctas antes de publicarse.

## 5. Reporte y resolución

Si ves una posible violación de esta política, reporta por favor el commit o
merge request a los mantenedores del sitio.

La cadena de resolución es la siguiente:

Aviso -> Ban temporal -> Exclusión permanente.

> Según severidad y reincidencia. Nos reservamos el derecho a aplicarlo como se
> nos de la gana porque, de todos modos nadie usa nuestros programas XD
