package despesas

import (
	"net/http"
	"time"

	"github.com/HugoCBB/api-despesas/internal/database"
	"github.com/HugoCBB/api-despesas/internal/models"
	"github.com/gin-gonic/gin"
)

func Despesas(c *gin.Context) {
	var d []models.Despesa
	database.DB.Find(&d)
	c.JSON(http.StatusOK, gin.H{"despesas": d})
}

func PostDespesa(c *gin.Context) {
	var d models.Despesa
	var u models.Usuario

	// Verificar se o corpo da requisição contém dados válidos para a despesa
	if err := c.ShouldBindJSON(&d); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Procurar o usuário com o ID passado na requisição
	if err := database.DB.First(&u, d.UsuarioID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Usuário não encontrado"})
		return
	}

	// Adicionar a despesa e atualizar o saldo do usuário
	d.Data = time.Now()
	database.DB.Create(&d)

	u.Saldo -= d.Valor
	database.DB.Save(&u)

	c.JSON(http.StatusOK, gin.H{"despesa": d})
}

func DeleteDespesa(c *gin.Context) {
	var d models.Despesa
	id := c.Param("id")
	database.DB.Delete(&d, id)
	c.JSON(http.StatusOK, gin.H{"message": "Despesa deletada com sucesso"})
}
