import { TouchableOpacity, StyleSheet, Text, View } from "react-native";


export default function Navegation() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text>Home</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}>
                <Text>Transacoes</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}>
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
    
    }
})