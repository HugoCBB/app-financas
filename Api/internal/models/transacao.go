package models

import "time"

type TipoTransacao string

const (
	ReceitaTipo TipoTransacao = "receita"
	DespesaTipo TipoTransacao = "despesa"
)

type Transacao struct {
	ID        uint          `json:"id" gorm:"primaryKey"`
	Valor     float64       `json:"valor"`
	Data      time.Time     `json:"data"`
	Categoria string        `json:"categoria"`
	Tipo      TipoTransacao `json:"tipo"`
	UsuarioID uint          `json:"usuario_id"`
}
