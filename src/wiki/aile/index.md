---
title: Aile v2
description: Biblioteca para crear servidores http en Go.
wiki_project: Aile
---

<img style="width: 100px; height: 100px;"
    src="/img/aile.png"
    alt="Aile from Megaman ZX"
    loading="lazy"/>

Aile es una micro biblioteca para Go, escrita encima de `net/http`. Su diseño
busca parecerse a `hono` y `chi`, pero sin intentar convertirse en un framework
grande. La meta es mantener una capa pequeña y predecible encima de
`http.NewServeMux(...)`.

<!-- Urutaú Aile -->

<small>La imágen del proyecto no es nuestra. Por favor refiere a la página de
<a href="/libre-licenses">Licencias</a> para leer acerca del copyright de la
misma.</small>

> Licencia: AGPLv3.0+

> Desarrollo:
> <chip class="ok">Público en
> <a href="https://codeberg.org/urutau-ltd/aile">Codeberg</a></chip>
> <chip class="info">Espejo en:
> <a href="https://github.com/urutau-ltd/aile">GitHub</a></chip>

## Instalación

```bash
$ go get -u codeberg.org/urutau-ltd/aile/v2
```

## Ejemplo mínimo

```go
package main

import (
    "context"
    "log"
    "net/http"

    "codeberg.org/urutau-ltd/aile/v2"
)

func main() {
    app, err := aile.New()
    if err != nil {
        log.Fatal(err)
    }

    app.Use(aile.Recovery())

    app.GET("/ping", func(w http.ResponseWriter, r *http.Request) {
        aile.Text(w, http.StatusOK, "ok")
    })

    if err := app.Run(context.Background()); err != nil {
        log.Fatal(err)
    }
}
```

Ahora puedes probar tu API con `curl http://localhost:8080/ping`; debería
responder con `ok`.
