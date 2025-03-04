import { StyleSheet, Text, View } from "react-native";


interface receita{
    valor: number;
}
interface despesa{
    valor: number;
}

interface saldo{
    saldo: number;
}

interface HomeProps {
    receita: receita[]
    despesa: despesa[]
    saldo: saldo
}

export default function Home({receita, despesa,saldo}: HomeProps) {

    
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.containerText}>
                    Saldo
                </Text>
                <Text style={styles.containerText}>
                    R${saldo.saldo.toFixed(2)}
                </Text>
            </View>
            
            
            
            <View style={styles.containerLabel}>
                <View >
                    <Text style={styles.containerText}>
                        Receitas
                    </Text>
                    
                    <View>
                        {receita.length > 0 && 
                            receita.map((Receita, index) => (
                                <Text style={styles.containerText} key={index}>R$ {Receita.valor.toFixed(2)}</Text>
                            ))
                        }
                    </View>
                </View>
                <View >
                    <Text style={styles.containerText}>
                        Despesas
                    </Text>
                    <View>
                        {despesa.map((despesa, index) => (
                        <Text style={styles.containerText} key={index}>R${despesa.valor.toFixed(2)}</Text>
                        ))}
                    </View>
                </View>
                
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#737373',
        height: '40%',
        alignItems: 'center',
        flexDirection: 'column',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    containerLabel: {
        height: '60%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    containerText: {
        fontSize: 20,
    }
})