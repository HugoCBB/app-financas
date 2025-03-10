import { StyleSheet, Text, View, ViewComponent } from "react-native";
import Navegation from "../../components/Navegation";
import { useReceita } from "../../Api/Transacoes/Receita";
import { useDespesa } from "../../Api/Transacoes/Despesa";

export default function Home() {
    const { valorTotalReceita} = useReceita();
    const {valorTotalDespesa} = useDespesa();
    const saldo = {valor: valorTotalReceita - valorTotalDespesa};

    
    return (
        <View style={{flex: 1, backgroundColor: '#363636'}}>

            <View style={styles.container}>
                <View>
                    <Text style={styles.containerText}>
                        Saldo
                    </Text>
                    <Text style={styles.containerText}>
                        R${saldo.valor.toFixed(2)}
                    </Text>
                </View>
                
                
                
                <View style={styles.containerLabel}>
                    <View >
                        <Text style={styles.containerText}>
                            Receitas
                        </Text>
                        
                        <Text style={styles.containerText}>
                            R${valorTotalReceita.toFixed(2)}
                        </Text>
                    </View>
                    <View >
                        <Text style={styles.containerText}>
                            Despesas
                        </Text>
                        <Text style={styles.containerText}>
                            R${valorTotalDespesa.toFixed(2)}
                        </Text>
                    </View>
                    
                </View>
            </View>
            <Navegation />
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
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 10
    }
})