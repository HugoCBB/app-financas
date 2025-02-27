package models

type Usuario struct {
	Nome  string `json:"nome"`
	Email string `json:"email"`
	Senha string `json:"senha"`
}

var Usuarios []Usuario
