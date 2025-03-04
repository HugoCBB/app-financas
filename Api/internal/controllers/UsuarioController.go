package controllers

import (
	"net/http"

	"github.com/HugoCBB/api/internal/database"
	"github.com/HugoCBB/api/internal/models"
	"github.com/gin-gonic/gin"
)

func Usuarios(c *gin.Context) {
	var u []models.Usuario

	// Busca os usuários com suas transações
	database.DB.Preload("Transacoes").Find(&u)
	c.JSON(http.StatusOK, u)
}

func PostUsuario(c *gin.Context) {
	var u models.Usuario

	if err := c.ShouldBindJSON(&u); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	database.DB.Create(&u)
	c.JSON(http.StatusOK, u)
}

func DeleteUsuario(c *gin.Context) {
	var u models.Usuario
	id := c.Param("id")
	database.DB.Delete(&u, id)
	c.JSON(http.StatusOK, gin.H{"message": "Usuário deletado com sucesso"})
}
