import { useEffect, useState } from "react"
import Home from "../pages/Home"
import api from "./api"

export default function Api () {

    const [receita, setReceita] = useState([{valor: 0}])
    const [despesa, setDespesa] = useState([{valor: 0}])
    const [saldo, setSaldo] = useState({saldo: 0})
    const [transacoes, setTransacoes] = useState([])

    const [valorTotalReceita, setValorTotalReceita] = useState(0)
    const [valorTotalDespesa, setValorTotalDespesa] = useState(0)

    const getTransacao = async () => {
        try {
            const response = await api.get('/transacoes', {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            setTransacoes(response.data)
            // Seta os valores de acordo com o tipo de transacao
            const despesas = response.data.filter((transacao: any) => transacao.tipo === 'despesa')
            const receitas = response.data.filter((transacao: any) => transacao.tipo === 'receita')
            setDespesa(despesas)
            setReceita(receitas)
            totalReceita(receitas)
            totalDespesa(despesas)
        } catch (error) {
            console.log(error)
        }
    }

    const getSaldo = async () => {
        try {
            const response = await api.get('/transacoes/saldo', {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            setSaldo(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const totalReceita = (receitas: any[]) => {
        let total = 0
        receitas.forEach(receita => {
            total += receita.valor
        })
        setValorTotalReceita(total)
    }

    const totalDespesa = (despesas: any[]) => {
        let total = 0
        despesas.forEach(despesa => {
            total += despesa.valor
        })
        setValorTotalDespesa(total)
    }

    useEffect(() => {
        getTransacao()
        getSaldo()
    }, [])

    return (
        <Home
            saldo={saldo}
            receita={valorTotalReceita}
            despesa={valorTotalDespesa}
        />
    )
}