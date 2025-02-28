package usuario

import (
	"net/http"

	"github.com/HugoCBB/api-despesas/internal/database"
	"github.com/HugoCBB/api-despesas/internal/models"
	"github.com/gin-gonic/gin"
)

func Usuarios(c *gin.Context) {
	var u []models.Usuario
	database.DB.Find(&u)
	c.JSON(http.StatusOK, gin.H{"usuarios": u})
}
