package routers

import (
	"github.com/HugoCBB/api-despesas/internal/controllers"
	"github.com/gin-gonic/gin"
)

func HandleRequest() {
	r := gin.Default()

	Usuarios := r.Group("/api/usuarios")
	{
		Usuarios.GET("/", controllers.Usuarios)
		Usuarios.POST("/adicionar", controllers.PostUsuario)
		Usuarios.DELETE("/deletar/:id", controllers.DeleteUsuario)
	}

	Receita := r.Group("/api/receita")
	{
		Receita.GET("/", controllers.GetReceita)
		Receita.POST("/adicionar", controllers.PostReceita)
	}

	Despesa := r.Group("/api/despesa")
	{
		Despesa.GET("/", controllers.GetDespesa)
		Despesa.POST("/adicionar", controllers.PostDespesa)
	}

	r.Run()
}
