package models

import (
	"time"
)

type Receita struct {
	ID        int       `json:"id"`
	Valor     float64   `json:"valor"`
	Data      time.Time `json:"data"`
	Categoria string    `json:"categoria"`
	UsuarioID int       `json:"usuario_id"`
	Usuario   Usuario   `json:"usuario" gorm:"foreignKey:UsuarioID"`
}
