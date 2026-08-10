---
title: Software
description: Catálogo resumido del software mantenido por Urutaú Limited con enlaces a la wiki de cada proyecto.
layout: layout.tsx
type: page
---

# Software Libre

En esta página encontrarás una lista de software que vive bajo el ala de esta
organización. Sea a nivel de código, financieramente o simplemente como un
proyecto para _devolver_ algo a la comunidad que tanto nos ha dado por tantos
años.

Los repositorios públicos tienen un espejo en nuestro servidor
[Soft Serve](https://github.com/charmbracelet/soft-serve) (`sl.urutau-ltd.org`).
Puedes explorar los repositorios disponibles desde la terminal:

```bash
$ ssh sl.urutau-ltd.org
```

O clonar cualquier repositorio por HTTPS o SSH:

```bash
$ git clone https://sl.urutau-ltd.org/.git

# O por SSH

$ git clone git@sl.urutau-ltd.org:.git
```

La documentación viva de cada proyecto se mantiene ahora en la [wiki](/wiki/).
Esta página queda como catálogo resumido.

## Nyctibius

<!-- Guix Nyctibius Channel Logo -->

<img style="width: 100px; height: 100px;"
    src="/img/urutau.png"
    alt="Guix Nyctibius Channel logo"
    loading="lazy"/>

> Licencia: GPLv3.0+

> Desarrollo:
> <chip>Privado</chip>

Nyctibius es el canal privado de Urutaú Limited para GNU Guix. La documentación
viva de este proyecto ahora vive en su [wiki dedicada](/wiki/nyctibius/).

## Aile

<!-- Urutaú Aile -->

<img style="width: 100px; height: 100px;"
    src="/img/aile.png"
    alt="Aile from Megaman ZX"
    loading="lazy"/>

<small>La imágen del proyecto no es nuestra. Por favor refiere a la página de
<a href="/libre-licenses">Licencias</a> para leer acerca del copyright de la
misma.</small>

> Licencia: AGPLv3.0+

> Desarrollo:
> <chip class="ok">Público en
> <a href="https://codeberg.org/urutau-ltd/aile">Codeberg</a></chip>
> <chip class="info">Espejo en:
> <a href="https://github.com/urutau-ltd/aile">GitHub</a></chip>

Aile es una micro biblioteca para Go, escrita encima de `net/http`, con una idea
cercana a `hono` y `chi` pero sin intentar convertirse en un framework grande.

La documentación viva de este proyecto ahora vive en su
[wiki dedicada](/wiki/aile/).

## Vexilo

<!-- Urutaú Vexilo -->

<img style="width: 100px; height: 100px;"
    src="/img/vexilo.png"
    alt="A group of feathers"
    loading="lazy"/>

> Licencia: AGPLv3.0+

> Desarrollo:
> <chip class="ok">Público en
> <a href="https://codeberg.org/urutau-ltd/vexilo">Codeberg</a></chip>
> <chip class="info">Espejo en:
> <a href="https://github.com/urutau-ltd/vexilo">GitHub</a></chip>

Vexilo es una biblioteca de mecánicas para escribir aplicaciones web con `aile`
y [HTMX](https://htmx.org/), enfocada en paneles CRUD con vista partida de lista
y editor.

La documentación viva de este proyecto ahora vive en su
[wiki dedicada](/wiki/vexilo/).

## Gavia

<!-- Urutaú Gavia -->

<img style="width: 100px; height: 100px;"
    src="/img/gavia.png"
    alt="A loon"
    loading="lazy"/>

> Licencia: AGPLv3.0+

> Desarrollo:
> <chip class="ok">Público en
> <a href="https://github.com/urutau-ltd/gavia">GitHub</a></chip>
> <chip class="info">Espejo en:
> <a href="https://codeberg.org/urutau-ltd/gavia">Codeberg</a></chip>
> <chip class="info">Espejo en:
> <a href="https://sl.urutau-ltd.org/urutau-ltd/gavia">SL</a></chip>

Gavia es una aplicación web de inventario y monitoreo de activos de
infraestructura, similar a [My Idlers](https://github.com/cp6/my-idlers), con
menos características pero suficientemente completo para poder ser de utilidad
en infraestructura personal/familiar/pequeño emprendimiento.

La documentación viva de este proyecto ahora vive en su
[wiki dedicada](/wiki/gavia/).

## Bellbird

<!-- Urutaú Vexilo -->

<img style="width: 100px; height: 100px;"
    src="/img/bellbird.png"
    alt="A group of feathers"
    loading="lazy"/>

> Licencia: GPLv3.0+

> Desarrollo:
> <chip class="ok">Público en
> <a href="https://codeberg.org/urutau-ltd/bellbird">Codeberg</a></chip>
> <chip class="info">Espejo en:
> <a href="https://github.com/urutau-ltd/bellbird">GitHub</a></chip>

Bellbird es un proxy SOCKS5 que usa criptografía postcuántica, incluye un
jitter, inyección de paquetes dummy, y normalización de tamaño de frames para
resistir el análisis de tráfico. La idea está inspirada en `DAITA` de Mullvad.

La documentación viva de este proyecto ahora vive en su
[wiki dedicada](/wiki/bellbird/).

---

## Archivo

Aquí se listan los proyectos descontinuados. No volverán a recibir soporte o
atención de nuestra parte.

## `guix-tuta-mail`

<!-- Guix Tuta AppImage Wrapper Logo -->

<img style="width: 100px; height: 100px;"
    src="/img/guix-tuta.png"
    alt="Guix Tutanota AppImage wrapper logo"
    loading="lazy"/>

> Licencia: GPLv3.0+

> Desarrollo:
> <chip class="bad">DESCONTINUADO</chip>

Este proyecto ha sido descontinuado. Tuta ahora permite usar extensiones de
Thunderbird para tener todos tus correos en un solo programa.

En GNU Guix puedes instalar `icedove`, compilar Thunderbird desde fuentes o
instalar Thunderbird desde flatpak.

---

## Guix MATE

<!-- Guix MATE Channel Logo -->

<img style="width: 100px; height: 100px;"
    src="/img/guix-mate.png"
    alt="Guix MATE Channel logo"
    loading="lazy"/>

> Licencia: GPLv3.0+

> Desarrollo:
> <chip class="bad">DESCONTINUADO</chip>

Las contribuciones se prueban en Nyctibius y ahora contribuimos directamente con
los paquetes en `gnu/packages/mate.scm` en la distribución GNU Guix, este canal
ya no es necesario.

---
