import { Alert } from "react-native";
import uuid from "react-native-uuid";
import { checkPostsContext } from "../../stores";
import { IPostValues, MainNavigationType } from "../../types";

const useOnSubmit = (navigation: MainNavigationType) => {
  const { setNewPost } = checkPostsContext();
  const createPost = async (postImage: string, postDescription: string) => {
    try {
      const postDetails: IPostValues = {
        postImage,
        postDescription,
        uniquePostID: uuid.v4().toString(),
      };
      if (postImage == "" && postDescription.trim() == "") {
        Alert.alert("You cannot post an empty post.");
      } else {
        setNewPost(postDetails);
        navigation.replace("FeedScreen");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return { createPost };
};

export default useOnSubmit;
