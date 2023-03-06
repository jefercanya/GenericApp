import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/SettingsScreen";
import WebView from "../screens/WebView";

const Stack = createStackNavigator();

export default function NavigationStack2() {
  return (
    //initialRouteName es para definir por defecto la pagina inicial
    <Stack.Navigator initialRouteName="Settings"> 
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="WebView" component={WebView} />
    </Stack.Navigator>
  );
}