import React, { FC, useContext, useEffect, useState } from "react";
import { IPost } from "../../types";
import { getID, getStoragePosts, setStoragePosts } from "../../utils";

interface PostsProviderProps {
  children?: React.ReactNode;
}

interface PostsContextProps {
  posts: IPost[];
  postsSortedByDate: IPost[];
  createPost: (postImage: string, postDescription: string) => Promise<void>;
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
  const [posts, setPosts] = useState<IPost[]>([]);

  const setDefaultPosts = async () => {
    const allPosts = await getStoragePosts();

    setPosts(allPosts);
  };

  const postsSortedByDate = posts
    .slice()
    .sort((dateTimeOfPost: IPost, currentDateTime: IPost) => {
      return (
        Date.parse(currentDateTime.dateAndTime) -
        Date.parse(dateTimeOfPost.dateAndTime)
      );
    });

  const createPost = async (postImage: string, postDescription: string) => {
    try {
      const postDetails: IPost = {
        postImage,
        postDescription,
        uniquePostID: getID(),
        dateAndTime: new Date().toLocaleString(),
      };

      const updatedPosts = [...posts, postDetails];
      setPosts(updatedPosts);

      await setStoragePosts(updatedPosts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setDefaultPosts();
  }, []);

  const providerValues = React.useMemo(
    () => ({
      posts,
      postsSortedByDate,
      createPost,
    }),
    [posts]
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
