import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IPostValues } from "../../types";

interface IPosts {
  posts: IPostValues[] | undefined;
}

const usePosts = (): IPosts => {
  const [posts, setPosts] = useState<IPostValues[]>();

  const findPosts = async () => {
    const result = await AsyncStorage.getItem("posts");
    if (result !== null) {
      setPosts(JSON.parse(result));
    }
  };

  useEffect(() => {
    findPosts();
  }, []);

  return { posts };
};

export default usePosts;
