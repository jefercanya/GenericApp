import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen(props) {
  console.log(props);
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  const goToWebView = () => {
    navigation.navigate("WebView");
  };

  return (
    <View>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Button onPress={goToSettings} title="Ir a Ajustes" />
      <View></View>
      <Button onPress={goToWebView} title="Ir a Chat" />
    </View>
  );
}