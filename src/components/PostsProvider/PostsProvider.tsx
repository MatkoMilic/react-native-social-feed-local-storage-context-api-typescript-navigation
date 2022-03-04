import React, { FC, useContext, useEffect, useState } from "react";
import { getAllPosts } from "../../constants";
import { IPostValues } from "../../types";

interface PostsProviderProps {
  children?: React.ReactNode;
}

interface PostsContextProps {
  postValues: IPostValues[];
  setNewPost: React.Dispatch<React.SetStateAction<IPostValues[]>>;
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
  const [currentPosts, setCurrentPosts] = useState<IPostValues[]>([]);

  const fetchAllPosts = async () => {
    const allPosts = await getAllPosts();
    if (allPosts) {
      setCurrentPosts(JSON.parse(allPosts));
    }
  };

  const updatePosts = async (newPost: IPostValues) => {
    setCurrentPosts([...currentPosts, newPost]);
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  const providerValues = React.useMemo(
    () => ({
      postValues: currentPosts,
      setNewPost: setCurrentPosts,
    }),
    [currentPosts, updatePosts]
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
