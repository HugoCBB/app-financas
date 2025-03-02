package main

import (
	"fmt"

	"github.com/HugoCBB/api/internal/database"
	"github.com/HugoCBB/api/internal/routers"
)

func main() {
	database.ConnectDataBase()
	routers.HandleRequest()
	fmt.Println("Server running on port 8080")
}
