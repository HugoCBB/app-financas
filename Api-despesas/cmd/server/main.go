package main

import (
	"fmt"

	"github.com/HugoCBB/api-despesas/internal/models"
	"github.com/HugoCBB/api-despesas/internal/routers"
)

func main() {

	models.Usuarios = []models.Usuario{
		{Nome: "Hugo", Email: "hugo@hugo", Senha: "1234"},
	}
	routers.HandleRequest()
	fmt.Println("Server running on port 8080")
}
