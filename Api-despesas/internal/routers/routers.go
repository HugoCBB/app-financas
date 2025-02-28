package routers

import (
	"github.com/HugoCBB/api-despesas/internal/controllers/despesas"
	"github.com/HugoCBB/api-despesas/internal/controllers/usuario"
	"github.com/gin-gonic/gin"
)

func HandleRequest() {
	r := gin.Default()

	v1 := r.Group("/api/usuarios")
	{
		v1.GET("/", usuario.Usuarios)
	}

	v2 := r.Group("/api/despesas")
	{
		v2.GET("/", despesas.Despesas)
		v2.POST("/adicionar", despesas.AdicionarDespesa)
	}

	r.Run()

}
