import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type NavigationProp = StackNavigationProp<RootStackParamList>;

type RootStackParamList = {
    Home: undefined;
    Transacoes: undefined;
  };

export default function Navegation() {
    const navigation = useNavigation<NavigationProp>();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Image style={styles.iconbutton} source={require('../../assets//icon/botao-home.png')}/>
                <Text >Home</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Transacoes')}>
                <Image style={styles.iconbutton} source={require('../../assets//icon/botao-transacao.png')}/>
                <Text >Transacoes</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}>
                <Image style={styles.iconbutton} source={require('../../assets//icon/botao-planejamento.png')}/>
                <Text>Planejamento</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#737373',
        alignItems: 'center',
        justifyContent: 'space-around',
        textAlign: 'center',
        borderRadius: 30,
        flexDirection: 'row',
        padding: 12,
        width: "80%",
        height: 60, 
        position: 'absolute',
        bottom: 25,
        left: "10%",
        paddingVertical: 12,

    },
    button: {
        padding: 10,
        alignItems: 'center',
        
    },
    iconbutton: {
        width: 30,
        height: 30,
        
    }
})