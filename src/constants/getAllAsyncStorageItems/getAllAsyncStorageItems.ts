import AsyncStorage from "@react-native-async-storage/async-storage";
import { IPostValues, initialPostValues } from "../../types";

export const getAllAsyncStorageData = async () => {
  try {
    const allItemsFromAS: IPostValues = initialPostValues();
    const keys = await AsyncStorage.getAllKeys();
    for (const key of keys) {
      const val = await AsyncStorage.getItem(key);
      if (val) {
        allItemsFromAS[key as keyof IPostValues] = val;
      }
    }
    //important console.log as it shows all the items stored in Async Storage so for now I will leave it
    return console.log("All items: ", allItemsFromAS);
  } catch (error) {
    alert(error);
  }
};
