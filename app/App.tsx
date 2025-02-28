import { Text, View } from "react-native";
import Navegation from "./src/components/Navegation";
import Home from "./src/components/Home";

export default function App() {
  return (
    <View style={{flex: 2, backgroundColor: '#363636'}}>
      <Home />
      <Navegation />
    </View>
  );
}