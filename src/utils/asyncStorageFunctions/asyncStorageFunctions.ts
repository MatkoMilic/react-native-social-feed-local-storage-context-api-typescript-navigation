import AsyncStorage from "@react-native-async-storage/async-storage";
import { IPost } from "../../types";

export const getStoragePosts = async (): Promise<IPost[]> => {
  const allPosts = await AsyncStorage.getItem("posts");
  if (!allPosts) {
    return [];
  }
  return JSON.parse(allPosts);
};

export const setStoragePosts = async (posts: IPost[]): Promise<void> => {
  try {
    await AsyncStorage.setItem("posts", JSON.stringify(posts));
  } catch (error) {
    console.log(error);
  }
};
