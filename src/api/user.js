import { API_HOST_USER } from "../utils/constants";

export async function getUserByCredentials(username, password) {
    try {
        console.log("API => Nombre usuario: " + username + " --- Password: " + password);
        console.log(API_HOST_USER);
        //const url = `${API_HOST_USER}/api/`;
        const url = `${API_HOST_USER}`;
        const response = await fetch(url);
        //const response = await fetch(url + "?email=jefercanya@hotmail.com&telephone=3206279569");
        //const response = fetch(url + new URLSearchParams({
          //  email: username,
           // telephone: password,
        //}).toString());
        console.log(response);
        const result = await response.json();
        console.log("ESTE ES EL CUSTOMER");
        console.log(response);
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}