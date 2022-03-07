import React, { FC, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllPosts } from "../../constants";
import { IPostValues } from "../../types";

interface PostsProviderProps {
  children?: React.ReactNode;
}

interface PostsContextProps {
  postValues: IPostValues[];
  setNewPost: (newPost: IPostValues) => Promise<void>;
}

const PostsContext = React.createContext<PostsContextProps | undefined>(
  undefined
);

export const checkPostsContext = () => {
  const postsContext = useContext(PostsContext);
  if (postsContext === undefined) {
    throw new Error("PostsContext must be within PostsProvider");
  }
  return postsContext;
};

export const PostsProvider: FC<PostsProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<IPostValues[]>([]);

  const setDefaultPostsState = async () => {
    const allPosts = await getAllPosts();
    setPosts(allPosts);
  };

  const savePost = async (newPost: IPostValues) => {
    const oldAndNewPosts = [...posts, newPost];
    setPosts(oldAndNewPosts);
    await AsyncStorage.setItem("posts", JSON.stringify(oldAndNewPosts)).catch(
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    setDefaultPostsState();
  }, []);

  const providerValues = React.useMemo(
    () => ({
      postValues: posts,
      setNewPost: savePost,
    }),
    [posts, savePost]
  );

  return (
    <PostsContext.Provider value={providerValues}>
      {children}
    </PostsContext.Provider>
  );
};

PostsProvider.defaultProps = {
  children: undefined,
};
