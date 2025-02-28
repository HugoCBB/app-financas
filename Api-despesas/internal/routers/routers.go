package routers

import (
	"github.com/HugoCBB/api-despesas/internal/controllers/despesas"
	"github.com/HugoCBB/api-despesas/internal/controllers/receitas"
	"github.com/HugoCBB/api-despesas/internal/controllers/usuario"
	"github.com/gin-gonic/gin"
)

func HandleRequest() {
	r := gin.Default()

	Usuarios := r.Group("/api/usuarios")
	{
		Usuarios.GET("/", usuario.Usuarios)
		Usuarios.POST("/adicionar", usuario.PostUsuario)
		Usuarios.DELETE("/deletar/:id", usuario.DeleteUsuario)
	}

	Despesa := r.Group("/api/despesa")
	{
		Despesa.GET("/", despesas.Despesas)
		Despesa.POST("/adicionar", despesas.PostDespesa)
		Despesa.DELETE("/deletar/:id", despesas.DeleteDespesa)
	}

	Receita := r.Group("/api/receita")
	{
		Receita.GET("/", receitas.Receita)
		Receita.POST("/adicionar", receitas.PostReceita)
		Receita.DELETE("/deletar/:id", receitas.DeleteReceita)
	}

	r.Run()
}
