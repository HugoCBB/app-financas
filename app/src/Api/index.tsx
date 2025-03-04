import { useEffect, useState } from "react"
import Home from "../pages/Home"
import api from "./api"

export default function Api () {

    const [receita, setReceita] = useState([{valor: 0}])
    const [despesa, setDespesa] = useState([{valor: 0}])
    const [saldo, setSaldo] = useState({saldo: 0})

    const [transacoes, setTransacoes] = useState([])

    const getTransacao = async () => {
        try {
            const response = await api.get('/transacoes', {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            setTransacoes(response.data)
            // Seta os valores de acordo com o tipo de transacao
            setDespesa(response.data.filter((transacao: any) => transacao.tipo === 'despesa'))
            setReceita(response.data.filter((transacao: any) => transacao.tipo === 'receita'))

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
    useEffect(() => {
        getTransacao()
        getSaldo()
    }, [])
    return (
        <Home
        saldo={saldo}
        receita={receita}
        despesa={despesa}
        />
    )
}