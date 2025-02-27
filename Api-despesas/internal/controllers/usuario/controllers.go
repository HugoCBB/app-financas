package usuario

import (
	"net/http"

	"github.com/HugoCBB/api-despesas/internal/models"
	"github.com/gin-gonic/gin"
)

func Usuarios(c *gin.Context) {
	u := models.Usuarios
	c.JSON(http.StatusOK, gin.H{"usuarios": u})
}
