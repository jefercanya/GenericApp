import React from "react";
import { View, Text, Button } from "react-native";
import {WebView} from 'react-native';

export default function SettingsScreen(props) {

    return (
        <WebView
        source={{
          uri: 'https://github.com/facebook/react-native',
        }}
        style={{marginTop: 20}}
      />
    );
}