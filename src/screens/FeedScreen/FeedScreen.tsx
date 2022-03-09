import React from "react";
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  View,
  Text,
} from "react-native";
import { Header, PostListItem, ScreenContainer } from "../../components";
import { checkPostsContext } from "../../stores";
import { IMainNavScreenProps, IPost } from "../../types";
import { styles } from "./style";

interface FeedScreenProps extends IMainNavScreenProps {}

const FeedScreen: React.FC<FeedScreenProps> = ({ navigation }) => {
  const { postsSortedByDate } = checkPostsContext();
  const navigateToCreatePostScreen = async () => {
    navigation.navigate("CreatePostScreen");
  };

  const renderPost: ListRenderItem<IPost> = ({ item }) => (
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
      {postsSortedByDate.length === 0 ? (
        <View style={styles.noPostsContainer}>
          <Text>
            No posts exist at the moment, please create one by tapping on the
            image icon in the header. In the meantime, as indicated by the
            spinner below, we will continue to try to fetch posts in case some
            do exist but are just loading slowly.
          </Text>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList
          data={postsSortedByDate}
          renderItem={renderPost}
          keyExtractor={(item: IPost) => item.uniquePostID}
        />
      )}
    </ScreenContainer>
  );
};

export default FeedScreen;
