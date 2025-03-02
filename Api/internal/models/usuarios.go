package models

type Usuario struct {
	ID         int         `json:"id"`
	Nome       string      `json:"nome"`
	Email      string      `json:"email"`
	Senha      string      `json:"senha"`
	Saldo      float64     `json:"saldo"`
	Transacoes []Transacao `json:"transacoes" gorm:"foreignKey:UsuarioID"`
}
