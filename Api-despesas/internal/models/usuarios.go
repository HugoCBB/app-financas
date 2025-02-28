package models

type Usuario struct {
	ID       int       `json:"id"`
	Nome     string    `json:"nome"`
	Email    string    `json:"email"`
	Senha    string    `json:"senha"`
	Saldo    float64   `json:"saldo"`
	Despesas []Despesa `json:"despesas" gorm:"foreignKey:UsuarioID"`
	Receitas []Receita `json:"receitas" gorm:"foreignKey:UsuarioID"`
}
