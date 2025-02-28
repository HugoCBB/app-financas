package main

import (
	"fmt"

	"github.com/HugoCBB/api-despesas/internal/database"
	"github.com/HugoCBB/api-despesas/internal/models"
	"github.com/HugoCBB/api-despesas/internal/routers"
)

func main() {

	models.Usuarios = []models.Usuario{
		{Nome: "Hugo", Email: "hugo@hugo", Senha: "1234"},
	}
	database.ConnectDataBase()
	routers.HandleRequest()
	fmt.Println("Server running on port 8080")
}
