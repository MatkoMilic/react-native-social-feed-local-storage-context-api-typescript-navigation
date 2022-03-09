import { Alert } from "react-native";
import { checkPostsContext } from "../../stores";
import { MainNavigationType } from "../../types";

export const useOnSubmitPost = (navigation: MainNavigationType) => {
  const { createPost } = checkPostsContext();
  const createNewPost = async (postImage: string, postDescription: string) => {
    try {
      if (postImage == "") {
        Alert.alert(
          "Notice",
          "Unfortunately you cannot post without an image as this is an image sharing social media."
        );
        return;
      }
      createPost(postImage, postDescription);
      navigation.replace("FeedScreen");
    } catch (err) {
      console.log(err);
    }
  };
  return { createNewPost };
};
