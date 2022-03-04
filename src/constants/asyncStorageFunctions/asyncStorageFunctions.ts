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
    const result = Object.keys(allItemsFromAS);
    return (
      //Useful console.log for displaying all items from Async Storage so I will leave it here
      console.log("All items: ", allItemsFromAS)
    );
  } catch (error) {
    alert(error);
  }
};

export const getAllPosts = async () => {
  const allPosts = await AsyncStorage.getItem("posts");
  return allPosts;
};

export const clearEntireAsyncStorage = async () => {
  await AsyncStorage.clear();
};
