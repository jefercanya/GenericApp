import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewUserScreen(props) {
  console.log(props);
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <SafeAreaView>
      <Text>Crear Nuevo Usuario</Text>
      
      
      <Button onPress={goToSettings} title="Ir a Ajustes" />
      <View></View>
      
    </SafeAreaView>
  );
}