import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../utils/userDB";
import useAuth from "../hooks/useAuth";
import { getLoginUser } from "../api/user";


export default function LoginForm(props) {

  const { navigation } = props;

  const goToPage = (pageName) => {
    console.log(pageName);
    navigation.navigate(pageName);
  };
  
  const [error, setError] = useState("");
  const { login } = useAuth();

  //quitar
  console.log(useAuth());

  const getUser = async (username, password) => {
    try {
      console.log("Nombre usuario: "+ username + " --- Password: " + password);
      console.log("Antes de la API");
      const response = await getLoginUser(username, password);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      setError("");
      const { username, password } = formValue;
      console.log("Antes de la funcion GetUser");
      const response = await getUser(username, password);

      console.log(response.legalName);
      console.log(response.whatsappNumber);
      console.log(response);


      /* if (username !== user.username || password !== user.password) {
        setError("El usuario o la contraseña no son correctos");
      } else {
        login(userDetails);
        console.log("Login correcto");
        console.log(userDetails);
      } */

      if (response.response === "0") {
        setError("El usuario o la contraseña no son correctos");
      } else {
        login(response);
        console.log("Login correcto");
        //console.log(userDetails);
      } 
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Button title="Entrar" onPress={formik.handleSubmit} />

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>

      <Text style={styles.error}>{error}</Text>
      <Button onPress={()=> goToPage("NewUser")} title="Crear Usuario" />
    </View>
  );
}

function initialValues() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  };
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
});