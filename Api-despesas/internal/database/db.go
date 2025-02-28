package database

import (
	"fmt"

	"github.com/HugoCBB/api-despesas/internal/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var (
	DB  *gorm.DB
	err error
)

func ConnectDataBase() {
	dsn := "root:hugo00028922@tcp(127.0.0.1:3306)/appdespesas?charset=utf8mb4&parseTime=True&loc=Local"
	DB, err = gorm.Open(mysql.Open(dsn))

	if err != nil {
		fmt.Println("Erro ao se conectar com o banco de dados\n", err)
	}
	fmt.Println("Conectado ao banco de dados")
	DB.AutoMigrate(&models.Despesa{}, &models.Usuario{})

}
