import React from "react";
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  SafeAreaView,
} from "react-native";
import { Header, PostListItem, ScreenContainer } from "../../components";
import { IMainNavScreenProps, IPostValues } from "../../types";
import { usePosts } from "../../utils";
import { styles } from "./style";

interface FeedScreenProps extends IMainNavScreenProps {}

const FeedScreen: React.FC<FeedScreenProps> = ({ navigation }) => {
  const { posts } = usePosts();
  const navigateToCreatePostScreen = async () => {
    navigation.navigate("CreatePostScreen");
  };

  const renderPost: ListRenderItem<IPostValues> = ({ item }) => (
    <PostListItem post={item} key={item.uniquePostID} />
  );

  return (
    <ScreenContainer>
      <SafeAreaView>
        <Header
          containerStyle={styles.containerStyleHeader}
          headerTitle="Factory X Feed"
          rightIcon="add-photo-alternate"
          onPressRightIcon={navigateToCreatePostScreen}
        />
      </SafeAreaView>
      {!posts ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item) => item.uniquePostID}
        />
      )}
    </ScreenContainer>
  );
};

export default FeedScreen;
