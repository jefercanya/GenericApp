import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import WebView from "../screens/WebView";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    //initialRouteName es para definir por defecto la pagina inicial
    <Stack.Navigator initialRouteName="Home"> 
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="WebView" component={WebView} />
    </Stack.Navigator>
  );
}