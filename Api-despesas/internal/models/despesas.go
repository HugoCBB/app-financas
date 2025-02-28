package models

import "time"

type Despesa struct {
	ID        int       `json:"id"`
	Valor     float64   `json:"valor"`
	Data      time.Time `json:"data"`
	Categoria string    `json:"categoria"`
	UsuarioID int       `json:"usuario_id"`
}
