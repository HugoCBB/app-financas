
import { useEffect, useState } from "react"
import Home from "../pages/Home"
import api from "./api"
import axios from "axios"

export default function Api () {

    const [receita, setReceita] = useState([{
        valor: 0
    }])
    const [despesa, setDespesa] = useState([{
            valor: 0
        }])
    
    const getReceita = async () => {
        try {
            const response = await api.get('/receita', {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            setReceita(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getDespesa = async () => {
        try {
            const response = await api.get('/despesa', {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            setDespesa(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getReceita()
        getDespesa()
    }, [])
    return (
        <Home
        receita={receita}
        despesa={despesa}
        />
    )
}