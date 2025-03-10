import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../../api"

interface Despesa {
    valor: number
    tipo: string
}


interface DespesaContextData {
    despesa: Despesa[]
    valorTotalDespesa: number
    getDespesa: () => void
}

const DespesaContext = createContext<DespesaContextData>({} as DespesaContextData);


export const DespesaProvider: React.FC<React.PropsWithChildren<{}>>  = ({ children }) => {

    const [despesa, setDespesa] = useState<Despesa[]>([])
    const [valorTotalDespesa, setValorTotalDespesa] = useState(0)

    const getDespesa = async () => {
        try {
            const response = await api.get('/transacoes', {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            // Seta os valores de acordo com o tipo de transacao
            const despesas = response.data.filter((transacao: any) => transacao.tipo === 'despesa')
            
            setDespesa(despesas)
            totalDespesa(despesas)
        } catch (error) {
            console.error(error)
        }
    }

    const totalDespesa = (despesas: Despesa[]) => {
            let total = 0
            despesas.forEach(despesa => {
                total += despesa.valor
            })
            setValorTotalDespesa(total)
        }

    useEffect(() => {
        getDespesa();
    }, []);
    return (
        <DespesaContext.Provider value={{ despesa, valorTotalDespesa, getDespesa }}>
            {children}
        </DespesaContext.Provider>
    )

}

export const useDespesa = () => {
    return useContext(DespesaContext);
};