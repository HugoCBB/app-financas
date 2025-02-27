package routers

import (
	"github.com/HugoCBB/api-despesas/internal/controllers/usuario"
	"github.com/gin-gonic/gin"
)

func HandleRequest() {
	r := gin.Default()

	v1 := r.Group("/api/usuarios")
	{
		v1.GET("/", usuario.Usuarios)
	}

	r.Run()

}
