---
title: Vexilo - Request State
description: Biblioteca HTMX para vistas partida lista/editor
wiki_project: Vexilo
---

El paquete `requeststate` parsea los parámetros de petición compartidos por las
vistas de lista.

Solo lee los campos `q` y `limit` que las páginas de lista HTML-first comparten
entre query strings GET y bodies `application/x-www-form-urlencoded`.

---

## Tipos

### `ListState`

```go
type ListState struct {
    Query string
    Limit int
}
```

- `Query` proviene del campo de formulario `q` después de `strings.TrimSpace`.
- `Limit` proviene del campo `limit` después de aplicar el default y el máximo
  del llamador.

---

## Funciones

### `Parse`

```go
func Parse(r *http.Request, defaultLimit, maxLimit int) ListState
```

Lee `q` y `limit` de `r.Form` después de llamar a `r.ParseForm`.

Soporta tanto query string como body `application/x-www-form-urlencoded`. Cuando
ambos están presentes en la misma petición POST, el body de formulario tiene
prioridad sobre la query string.

#### Comportamiento de límites

| Caso                                              | Resultado      |
| ------------------------------------------------- | -------------- |
| `limit` ausente                                   | `defaultLimit` |
| `limit` no es un entero válido                    | `defaultLimit` |
| `limit` es `0` o negativo                         | `defaultLimit` |
| `limit` supera `maxLimit` (cuando `maxLimit > 0`) | `maxLimit`     |
| `limit` válido dentro del rango                   | valor parseado |

#### Comportamiento con `r == nil`

Devuelve `ListState{Limit: defaultLimit}` con `Query` vacío.

---

## Ejemplo

```go
// GET /providers?q=++Acme++&limit=250
// defaultLimit=25, maxLimit=100
state := requeststate.Parse(r, 25, 100)
// state.Query == "Acme"
// state.Limit == 100  (clamped)
```

```go
// POST con body: q=abc&limit=20
// Content-Type: application/x-www-form-urlencoded
state := requeststate.Parse(r, 10, 100)
// state.Query == "abc"
// state.Limit == 20
```
