import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Transacoes() {
    return (
        <View>
            <View style={styles.nav}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>Transacoes</Text>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false}>

            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={require('../../assets/icon/botao-transacao.png')}/>
                </View>
                
                <View style={styles.textContainer}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>Categoria</Text>
                    <Text style={{fontSize: 15}}>Data</Text>
                </View>

                <View style={styles.valor}>
                    <Text style={styles.valorText}>R$ 00,00</Text>
                </View>
            </View>

            </ScrollView>
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
        backgroundColor: 'blue', 
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
        color: '#b80404',
        fontWeight: 'bold',
    }
});
