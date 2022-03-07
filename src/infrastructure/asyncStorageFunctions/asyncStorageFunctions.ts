import AsyncStorage from "@react-native-async-storage/async-storage";
import { IPostValues } from "../../types";

export const getAllPosts = async (): Promise<IPostValues[]> => {
  const allPosts = await AsyncStorage.getItem("posts");
  let everyPost: IPostValues[] = [];
  if (allPosts) {
    return (everyPost = JSON.parse(allPosts));
  } else {
    return everyPost;
  }
};
