import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { IPostValues, MainNavigationType } from "../../types";
import {
  navigatorNames,
  FEED_SCREEN,
  getAllAsyncStorageData,
} from "../../constants";

const useOnSubmit = (navigation: MainNavigationType) => {
  const createPost = async (postImage: string, postDescription: string) => {
    try {
      const postDetails: IPostValues = {
        postImage,
        postDescription,
      };
      if (!postImage && !postDescription) {
        Alert.alert("You cannot post empty post.");
      } else {
        await AsyncStorage.setItem(
          uuid.v4().toString(),
          JSON.stringify(postDetails)
        ).catch((error) => {
          console.log(error);
        });
        //calling of getAllAsyncStorageData console.logs out important
        //data for us to see how the app works so for now I will leave it here
        getAllAsyncStorageData();
        navigation.replace(navigatorNames.MAIN_NAVIGATOR, {
          screen: FEED_SCREEN,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return { createPost };
};

export default useOnSubmit;
