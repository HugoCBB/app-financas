import { Text, View } from "react-native";
import Navegation from "./src/components/Navegation";
import Home from "./src/pages/Home";
import Api from "./src/Api";


export default function App() {
  return (
    <View style={{flex: 2, backgroundColor: '#363636'}}>
      <Api />
      <Navegation />
    </View>
  );
}