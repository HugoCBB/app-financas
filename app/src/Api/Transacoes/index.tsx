import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../api";

interface Transacao {
    id: number;
    categoria: string;
    data: string;
    valor: number;
    tipo: string;
}

interface TransacaoContextData {
    transacoes: Transacao[];
    getTransacoes: () => void;
}

const TransacaoContext = createContext<TransacaoContextData>({} as TransacaoContextData);

export const TransacaoProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [transacoes, setTransacoes] = useState<Transacao[]>([]);

    const getTransacoes = async () => {
        try {
            const response = await api.get('/transacoes', {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            setTransacoes(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTransacoes();
    }, []);

    return (
        <TransacaoContext.Provider value={{ transacoes, getTransacoes }}>
            {children}
        </TransacaoContext.Provider>
    );
};

export const useTransacoes = () => {
    return useContext(TransacaoContext);
};