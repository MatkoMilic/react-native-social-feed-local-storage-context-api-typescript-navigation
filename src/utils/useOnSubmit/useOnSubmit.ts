import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { IPostValues, MainNavigationType } from "../../types";
import { navigatorNames, FEED_SCREEN } from "../../constants";
import { checkPostsContext } from "../../components";

const useOnSubmit = (navigation: MainNavigationType) => {
  const { setNewPost } = checkPostsContext();

  const createPost = async (postImage: string, postDescription: string) => {
    const posts = await AsyncStorage.getItem("posts");
    if (posts) {
      const parsedPosts: IPostValues[] = JSON.parse(posts);
      try {
        const postDetails: IPostValues = {
          postImage,
          postDescription,
          uniquePostID: uuid.v4().toString(),
        };
        parsedPosts.push(postDetails);
        if (postImage == "" && postDescription.trim() == "") {
          Alert.alert("You cannot post an empty post.");
        } else {
          setNewPost(parsedPosts);
          await AsyncStorage.setItem(
            "posts",
            JSON.stringify(parsedPosts)
          ).catch((error) => {
            console.log(error);
          });
          navigation.replace(navigatorNames.MAIN_NAVIGATOR, {
            screen: FEED_SCREEN,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return { createPost };
};

export default useOnSubmit;
