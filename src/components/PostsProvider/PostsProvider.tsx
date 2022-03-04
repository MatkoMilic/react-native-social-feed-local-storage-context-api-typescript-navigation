import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { IPostValues } from "../../types";

//UNUSED CONTEXT

interface UserDetailsProviderProps {
  children?: React.ReactNode;
}

interface PostContextValues {
  posts: [];
  setPosts: React.Dispatch<React.SetStateAction<[]>>;
  findPosts: () => Promise<void>;
}

export const PostContext = React.createContext<PostContextValues>(
  {} as PostContextValues
);

export const PostProvider: FC<UserDetailsProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<[]>([]);

  const findPosts = async () => {
    const result = await AsyncStorage.getItem("posts");
    if (result !== null) {
      setPosts(JSON.parse(result));
    }
  };

  useEffect(() => {
    findPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts, findPosts }}>
      {children}
    </PostContext.Provider>
  );
};

PostProvider.defaultProps = {
  children: undefined,
};
