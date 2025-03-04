package controllers

import (
	"net/http"
	"time"

	"github.com/HugoCBB/api/internal/database"
	"github.com/HugoCBB/api/internal/models"
	"github.com/gin-gonic/gin"
)

func GetTransacao(c *gin.Context) {
	var t []models.Transacao
	database.DB.Find(&t)
	c.JSON(http.StatusOK, t)
}

func PostTransacao(c *gin.Context) {
	var t models.Transacao
	var u models.Usuario

	// Pega o JSON e preenche a struct
	if err := c.ShouldBindJSON(&t); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Valida se o usuario_id foi enviado
	if t.UsuarioID == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "usuario_id inexistente"})
		return
	}

	// Busca o usuário no banco antes de atualizar o saldo
	if err := database.DB.First(&u, t.UsuarioID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Usuário não encontrado"})
		return
	}
	t.Data = time.Now()

	// Verifica o tipo da transação e atualiza o saldo corretamente
	switch t.Tipo {
	case models.ReceitaTipo:
		database.DB.Create(&t)
		u.Saldo += t.Valor
	case models.DespesaTipo:
		database.DB.Create(&t)
		u.Saldo -= t.Valor
	default:
		c.JSON(http.StatusBadRequest, gin.H{"error": "tipo de transação inválido"})
		return
	}

	// Salva o usuário atualizado com o novo saldo
	database.DB.Save(&u)

	// Retorna a transação criada
	c.JSON(http.StatusOK, t)
}

func DeleteTransacao(c *gin.Context) {
	var t models.Transacao
	var u models.Usuario

	id := c.Param("id")

	// Busca a transação antes de deletar
	if err := database.DB.First(&t, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Transação não encontrada"})
		return
	}

	// Busca o usuário da transação
	if err := database.DB.First(&u, t.UsuarioID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Usuário não encontrado"})
		return
	}

	// Atualiza o saldo do usuário antes de deletar a transação
	switch t.Tipo {
	case models.ReceitaTipo:
		u.Saldo -= t.Valor
	case models.DespesaTipo:
		u.Saldo += t.Valor
	}

	// Salva o usuário atualizado
	database.DB.Save(&u)

}

func GetSaldo(c *gin.Context) {
	var u models.Usuario

	if err := database.DB.First(&u).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Usuário não encontrado"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"saldo": u.Saldo})

}
