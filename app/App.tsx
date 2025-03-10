import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Transacoes from "./src/pages/Transacoes";
import Home from "./src/pages/Home";
import { DespesaProvider } from "./src/Api/Transacoes/Despesa";
import { ReceitaProvider } from "./src/Api/Transacoes/Receita";
import { TransacaoProvider } from "./src/Api/Transacoes";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <TransacaoProvider>
    <DespesaProvider>
      <ReceitaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Transacoes" component={Transacoes} />
          </Stack.Navigator>
        </NavigationContainer>  
      </ReceitaProvider>
    </DespesaProvider>
  </TransacaoProvider>
  );
}