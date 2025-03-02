package controllers

import (
	"net/http"
	"time"

	"github.com/HugoCBB/api-despesas/internal/database"
	"github.com/HugoCBB/api-despesas/internal/models"
	"github.com/gin-gonic/gin"
)

func GetReceita(c *gin.Context) {
	var t []models.Transacao
	database.DB.Where("tipo = ?", models.ReceitaTipo).Find(&t)
	c.JSON(http.StatusOK, t)
}

func PostReceita(c *gin.Context) {
	var t models.Transacao
	t.Tipo = models.ReceitaTipo
	t.Data = time.Now()
	if err := c.ShouldBindJSON(&t); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if t.UsuarioID == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "usuario_id inexistente"})
		return
	}

	database.DB.Create(&t)
	c.JSON(http.StatusOK, t)
}

func GetDespesa(c *gin.Context) {
	var t []models.Transacao
	database.DB.Where("tipo = ?", models.DespesaTipo).Find(&t)
	c.JSON(http.StatusOK, t)
}

func PostDespesa(c *gin.Context) {
	var t models.Transacao
	t.Tipo = models.DespesaTipo
	t.Data = time.Now()

	if err := c.ShouldBindJSON(&t); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if t.UsuarioID == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "usuario_id inexistente"})
		return
	}

	database.DB.Create(&t)
	c.JSON(http.StatusOK, t)
}
