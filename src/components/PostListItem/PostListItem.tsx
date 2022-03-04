import React from "react";
import { Image, Text, View, Dimensions } from "react-native";
import Lightbox from "react-native-lightbox-v2";
import { HASHTAG_FORMATTER } from "../../constants";
import { IPostValues } from "../../types";
import { styles } from "./styles";

interface PostItemProps {
  post: IPostValues;
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
                resizeMode="stretch"
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
          {HASHTAG_FORMATTER(post.postDescription)}
        </Text>
      ) : null}
    </View>
  );
};

export default PostListItem;
