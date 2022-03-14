import React from "react";
import { Image, Text, View, Dimensions } from "react-native";
import Lightbox from "react-native-lightbox-v2";
import { defaultPostDescription } from "./PostListItemConsts";
import { IPost } from "../../types";
import { hashtagFormatter } from "../../utils";
import { styles } from "./styles";

interface PostItemProps {
  post: IPost;
}

const { height, width } = Dimensions.get("window");

const PostListItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <View style={styles.container}>
      {post.postImage ? (
        <Lightbox
          renderContent={() => {
            return (
              <Image
                source={{ uri: post.postImage }}
                resizeMode="cover"
                style={[
                  styles.imageInLightbox,
                  {
                    width: width,
                    height: height,
                  },
                ]}
              />
            );
          }}
        >
          <Image
            source={{ uri: post.postImage }}
            resizeMode="contain"
            style={styles.image}
          />
        </Lightbox>
      ) : null}
      {post.postDescription ? (
        <Text style={styles.textStyle}>
          {hashtagFormatter(post.postDescription)}
        </Text>
      ) : (
        <Text style={styles.textStyle}>{defaultPostDescription}</Text>
      )}
    </View>
  );
};

export default PostListItem;
