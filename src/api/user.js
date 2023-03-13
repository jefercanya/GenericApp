import { API_HOST_USER } from "../utils/constants";

export async function getLoginUser(username, password) {
    try {
        console.log("API => Nombre usuario: " + username + " --- Password: " + password);
        console.log(API_HOST_USER);
        //const url = `${API_HOST_USER}/api/`;
        const url = `${API_HOST_USER}`;
        console.log(`esta es la url final => ${API_HOST_USER}/Login`);
        //const response = await fetch(url);
        //const response = await fetch(url + "?email=correo@hotmail.com&telephone=123456789");
        
        const response = await fetch(`${API_HOST_USER}/Login?` + new URLSearchParams({
            email: username,
            telephone: password
        }))
    
        console.log(response);
        const result = await response.json();
        console.log("ESTE ES EL CUSTOMER");
        console.log(response);
        console.log(result);
        console.log("RESULTADO =>>>>>");    
        console.log(result[0]);
        return result[0];
    } catch (error) {
        throw error;
    }
}