import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../../api"
import { AxiosResponse } from "axios";

interface Receita {
    valor: number
    tipo: string
}


interface ReceitaContextData {
    receita: Receita[]
    valorTotalReceita: number
    getReceita: () => void
}

const ReceitaContext = createContext<ReceitaContextData>({} as ReceitaContextData);


export const ReceitaProvider: React.FC<React.PropsWithChildren<{}>>  = ({ children }) => {

    const [receita, setReceita] = useState<Receita[]>([])
    const [valorTotalReceita, setValorTotalReceita] = useState(0)

    const getReceita = async () => {
        try {
            const response = await api.get('/transacoes')
            // Seta os valores de acordo com o tipo de transacao
            const receita = response.data.filter((transacao: any) => transacao.tipo === 'receita')
            setReceita(receita)
            totalReceita(receita)
        } catch (error) {
            console.error(error)
        }
    }

    const totalReceita = (receitas: Receita[]) => {
            let total = 0
            receitas.forEach(receitas => {
                total += receitas.valor
            })
            setValorTotalReceita(total)
        }

    useEffect(() => {
        getReceita();
    }, []);

    return (
        <ReceitaContext.Provider value={{ receita, valorTotalReceita, getReceita }}>
            {children}
        </ReceitaContext.Provider>
    )

}

export const useReceita = () => {
    return useContext(ReceitaContext);
};