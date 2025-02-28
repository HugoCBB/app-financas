import { StyleSheet, Text, View } from "react-native";
import Navegation from "../Navegation";


export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.containerText}>Saldo</Text>
            <Text style={styles.containerText}>R$00,00</Text>
            <View style={styles.containerLabel}>
                <Text style={styles.containerText}>Receitas</Text>
                <Text style={styles.containerText}>Despesas</Text>
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