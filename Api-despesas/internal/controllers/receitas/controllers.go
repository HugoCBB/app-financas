package receitas

import (
	"net/http"
	"time"

	"github.com/HugoCBB/api-despesas/internal/database"
	"github.com/HugoCBB/api-despesas/internal/models"
	"github.com/gin-gonic/gin"
)

func Receita(c *gin.Context) {
	var r []models.Receita
	database.DB.Find(&r)
	c.JSON(http.StatusOK, gin.H{"receitas": r})
}

func PostReceita(c *gin.Context) {
	var r models.Receita
	var u models.Usuario

	if err := c.ShouldBindJSON(&r); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	r.Data = time.Now()
	database.DB.Create(&r)

	// Atualizar saldo do usuario
	u.Saldo += r.Valor
	database.DB.Save(&u)

	c.JSON(http.StatusOK, gin.H{"receita": r})
}

func DeleteReceita(c *gin.Context) {
	var r models.Receita
	id := c.Param("id")
	database.DB.Delete(&r, id)
	c.JSON(http.StatusOK, gin.H{"message": "Receita deletada com sucesso"})
}
