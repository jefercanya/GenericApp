import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import WebView from "../screens/WebView";
import LoginForm from "../screens/LoginForm";
import useAuth from "../hooks/useAuth";
import NewUserScreen from "../screens/Account/NewUserScreen";


const Stack = createStackNavigator();

export default function NavigationStack() {

  const { auth } = useAuth();
  return (
    //initialRouteName es para definir por defecto la pagina inicial
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      {
        (!auth)
          ? (
            <>
              <Stack.Screen name="Login" component={LoginForm} />
              <Stack.Screen name="NewUser" component={NewUserScreen} options={{headerShown: true, title: 'Nuevo Usuario',}}/>
            </>
          )
          : (
            <>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerShown: true,
                  title: 'My home',
                  headerStyle: {
                    backgroundColor: '#f4511e',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown: true}} />
            </>
          )
      }
    </Stack.Navigator>

  );
}