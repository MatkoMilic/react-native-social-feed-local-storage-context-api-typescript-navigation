import React, { FC, useContext, useEffect, useState } from "react";
import { IPost } from "../../types";
import { getID, getStoragePosts, setStoragePosts } from "../../utils";

interface PostsProviderProps {
  children?: React.ReactNode;
}

interface PostsContextProps {
  posts: IPost[];
  hasPosts: boolean;
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

  const hasPosts = posts.length > 0;

  const postsSortedByDate = posts
    .slice()
    .sort((dateTimeOfPost: IPost, currentDateTime: IPost) => {
      return (
        currentDateTime.postCreationDateAndTime.getTime() -
        dateTimeOfPost.postCreationDateAndTime.getTime()
      );
    });

  const setDefaultPosts = async () => {
    const allPosts = await getStoragePosts();

    setPosts(allPosts);
  };

  const createPost = async (postImage: string, postDescription: string) => {
    try {
      const postDetails: IPost = {
        postImage,
        postDescription,
        uniquePostID: getID(),
        postCreationDateAndTime: new Date(),
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
      hasPosts,
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
