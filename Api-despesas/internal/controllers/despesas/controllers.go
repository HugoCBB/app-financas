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

func AdicionarDespesa(c *gin.Context) {
	var d models.Despesa
	if err := c.ShouldBindJSON(&d); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	d.Data = time.Now()
	database.DB.Create(&d)
	c.JSON(http.StatusOK, gin.H{"despesa": d})
}
