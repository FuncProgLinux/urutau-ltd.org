---
title: Vexilo
description: Biblioteca HTMX para vistas partida lista/editor
wiki_project: Vexilo
---

Vexilo es una librería Go para aplicaciones HTML-first construidas con
[`aile`](https://codeberg.org/urutau-ltd/aile) y [HTMX](https://htmx.org).

Cubre un subconjunto deliberadamente estrecho de mecánicas de UI del lado del
servidor:

- Parseo de estado compartido de listas (`q`, `limit`) — paquete `requeststate`
- Detección de intención de peticiones HTMX — paquete `htmx`
- Escritura de respuestas HTML con `text/html; charset=utf-8` y composición de
  fragmentos OOB — paquete `fragment`
- Composición de respuestas CRUD en vista dividida lista/editor — paquete
  `panelcrud`

## Reglas de diseño

- Superficie de API pequeña
- Comportamiento explícito
- Contratos HTML exactos donde se necesitan
- Sin clases CSS específicas de la aplicación
- Sin helpers de presentación ni UI de aplicación generada

## Uso previsto

Usar `aile` para routing y middleware. Usar `vexilo` para las mecánicas de HTMX
y HTML. Templates, CSS, lógica de dominio, persistencia, auth y layout
pertenecen a la aplicación.

```go
state := requeststate.Parse(r, 10, 100)
if htmx.IsListRequest(r, "providers-body", []string{"provider-search"}, nil) {
    _ = fragment.WriteHTML(w, fragment.Page{
        Main: renderList(state),
        OOB: [][]byte{
            fragment.OOB("tbody", "providers-body", "innerHTML", renderRows(state)),
        },
    })
}
```

## Propiedad del HTML

- `fragment.Page.Main` y `fragment.Page.OOB` son HTML provisto por el llamador
- `fragment.OOB(...)` inserta el HTML interno literalmente en el wrapper que
  emite
- Vexilo no escapa ni sanitiza markup
- La aplicación es responsable del HTML que pasa a Vexilo
