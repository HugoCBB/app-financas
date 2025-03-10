import React, {  useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Navegation from "../../components/Navegation";
import { useTransacoes } from "../../Api/Transacoes";

export default function Transacoes() {
    const { transacoes, getTransacoes } = useTransacoes();

    return (
        <View style={{ flex: 1, backgroundColor: '#363636' }}>
            <View style={styles.nav}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Transacoes</Text>
            </View>
            <ScrollView scrollEnabled={false}>

                {transacoes.map((transacao) => (
                    <View style={styles.container} key={transacao.id}>
                        <View style={styles.imgContainer}>
                            <Image style={styles.img} source={require('../../assets/icon/botao-transacao.png')} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={{ fontSize: 15 }}>{transacao.categoria}</Text>
                            <Text>{new Date(transacao.data).toLocaleDateString()}</Text>
                        </View>
                        <View style={styles.valor}>
                            <Text style={styles.valorText}>R$ {transacao.valor.toFixed(2)}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <Navegation />
        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        backgroundColor: '#737373',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 10,
        borderBottomWidth: 1,
        padding: 16,
        justifyContent: 'space-between',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    imgContainer: {
        borderRadius: 50,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        marginRight: 10,
        marginLeft: 10,
    },
    img: {
        width: 30,
        height: 30,
    },
    valor: {
        padding: 10,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginRight: 10,
    },
    valorText: {
        fontSize: 15,
        color: '#737373',
        fontWeight: 'bold',
    }
});
