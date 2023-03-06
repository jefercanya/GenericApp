import React from "react";
import { View, Text, Button } from "react-native";
import { WebView } from 'react-native-webview';

export default function SettingsScreen(props) {

    return (
        <WebView
        source={{
          uri: 'https://micontadorbot.azurewebsites.net',
        }}
        style={{marginTop: 0}}
      />
    );
}