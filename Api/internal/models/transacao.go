package models

import (
	"time"
)

type TipoTransacao string

const (
	ReceitaTipo TipoTransacao = "receita"
	DespesaTipo TipoTransacao = "despesa"
)

type Transacao struct {
	ID        int           `json:"id"`
	Valor     float64       `json:"valor"`
	Data      time.Time     `json:"data"`
	Categoria string        `json:"categoria"`
	Tipo      TipoTransacao `json:"tipo"`
	UsuarioID int           `json:"usuario_id"`
	Usuario   Usuario       `json:"usuario" gorm:"foreignKey:UsuarioID"`
}
