package routers

import (
	"github.com/HugoCBB/api/internal/controllers"
	"github.com/HugoCBB/api/internal/middleware"
	"github.com/gin-gonic/gin"
)

func HandleRequest() {
	r := gin.Default()
	r.Use(middleware.ContentTypeMiddleware(), middleware.CORSMiddleware())

	Usuarios := r.Group("/api/usuarios")
	{
		Usuarios.GET("/", controllers.Usuarios)
		Usuarios.POST("/adicionar", controllers.PostUsuario)
		Usuarios.DELETE("/deletar/:id", controllers.DeleteUsuario)
	}

	Transacoes := r.Group("/api/transacoes")
	{
		Transacoes.GET("/", controllers.GetTransacao)
		Transacoes.POST("/adicionar", controllers.PostTransacao)
		Transacoes.DELETE("/deletar/:id", controllers.DeleteTransacao)
		Transacoes.GET("/saldo", controllers.GetSaldo)
	}

	r.Run()
}
