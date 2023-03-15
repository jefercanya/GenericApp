import React from "react";
import {Alert} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import { removeUserAsyncStorage } from "../api/userAsyncStorage";
import { NativeModules } from "react-native";

export default function ExitButton() {
  //const { id } = props;

  const removeUserExitApp = async () => {
    await removeUserAsyncStorage();
    //TODO: mejorar la recarga de la app o navegar hacia el Login
    NativeModules.DevSettings.reload()
  }

  const exitApp = async () => {
    //await addPokemonFavoriteApi(id);
    console.log("Saliendo wacho");
    Alert.alert('Alert Title', 'My Alert Msg', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: (() => removeUserExitApp())},
      ]);
  };

  return (
    <Icon
      name="sign-out-alt"
      color="#fff"
      size={20}
      onPress={exitApp}
      style={{ marginRight: 20 }}
    />
  );
}