import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { USER_STORAGE } from "../utils/constants";

export async function getUserAsyncStorage() {
  try {
    const response = await AsyncStorage.getItem(USER_STORAGE);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function addUserAsyncStorage(userObject) {
  try {
    // const user = [];
    // user.push(username);
    const user = userObject;
    await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
  } catch (error) {
    throw error;
  }
}

export async function removeUserAsyncStorage() {
    try {
      await AsyncStorage.removeItem(USER_STORAGE)
    } catch (error) {
      throw error;
    }
  }