import React, {useEffect} from "react";
import { View, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import ExitButton from "../components/ExitButton";

export default function HomeScreen(props) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <ExitButton/>,
      // headerLeft: () => (
      //   <Icon
      //     name="arrow-left"
      //     color="#fff"
      //     size={20}
      //     style={{ marginLeft: 20 }}
      //     onPress={navigation.goBack}
      //   />
      // ),
    });
  }, []);

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
      <Text>Login</Text>
      <Button onPress={goToSettings} title="Ir a Ajustes" />
      <View></View>
      <Button onPress={goToWebView} title="Ir a Chat" />
    </View>
  );
}