import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from "./src/navigation/NavigationStack";
import NavigationStack2 from "./src/navigation/NavigationStack2";

export default function App() {
  if(2 == 1){
    console.log("Si funciona");
    return (
      <NavigationContainer>
        <NavigationStack2/>
      </NavigationContainer>
    );
  }else{
    return (
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
