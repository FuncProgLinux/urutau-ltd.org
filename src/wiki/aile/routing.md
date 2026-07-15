---
title: Aile v2 - Routing
description: Routes de Aile v2 y como usarlos
wiki_project: Aile
---

Aile no reinventa la rueda, pero si hacemos uso de las mejoras que se
introdujeron en el `http.ServeMux()` de Go 1.22, el mismo formato es usado aquí:

```
"/api/v1/example" "/users/{id}"
```

Aile viene con un pequeño wrapper con un tipo llamado `App` que te permite
controlar tu servidor web en un estilo similar al de Hono JS

## Método GET

```go
package main

import (
	"context"
	"fmt"
	"net/http"
	"net/http/httptest"

	aile "codeberg.org/urutau-ltd/aile/v2"
)

func main() {
	app := aile.MustNew()
	app.GET("/ping", func(w http.ResponseWriter, r *http.Request) {
		aile.Text(w, http.StatusOK, "ok")
	})

	st, err := app.Build(context.Background())
	if err != nil {
		panic(err)
	}

	req := httptest.NewRequest(http.MethodGet, "/ping", nil)
	rec := httptest.NewRecorder()
	st.Handler.ServeHTTP(rec, req)

	fmt.Println(rec.Code, rec.Body.String())
}
```

## Método POST

```go
```

## Método PUT

```go
package main

import (
	"context"
	"fmt"
	"net/http"
	"net/http/httptest"

	aile "codeberg.org/urutau-ltd/aile/v2"
)

func main() {
	app := aile.MustNew()
	app.PUT("/articles/1", func(w http.ResponseWriter, r *http.Request) {
		aile.Text(w, http.StatusOK, "updated")
	})

	st, err := app.Build(context.Background())
	if err != nil {
		panic(err)
	}

	req := httptest.NewRequest(http.MethodPut, "/articles/1", nil)
	rec := httptest.NewRecorder()
	st.Handler.ServeHTTP(rec, req)

	fmt.Println(rec.Body.String())
}
```

## Método DELETE

```go
import (
	"context"
	"fmt"
	"net/http"
	"net/http/httptest"

	aile "codeberg.org/urutau-ltd/aile/v2"
)

func main() {
	app := aile.MustNew()
	app.DELETE("/articles/1", func(w http.ResponseWriter, r *http.Request) {
		aile.Status(w, http.StatusNoContent)
	})

	st, err := app.Build(context.Background())
	if err != nil {
		panic(err)
	}

	req := httptest.NewRequest(http.MethodDelete, "/articles/1", nil)
	rec := httptest.NewRecorder()
	st.Handler.ServeHTTP(rec, req)

	fmt.Println(rec.Code)
}
```
