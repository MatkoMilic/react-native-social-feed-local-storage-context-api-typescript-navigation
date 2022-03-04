import React from "react";
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  View,
  Text,
} from "react-native";
import {
  Header,
  PostListItem,
  ScreenContainer,
  checkPostsContext,
} from "../../components";
import { IMainNavScreenProps, IPostValues } from "../../types";
import { styles } from "./style";

interface FeedScreenProps extends IMainNavScreenProps {}

const FeedScreen: React.FC<FeedScreenProps> = ({ navigation }) => {
  const { postValues } = checkPostsContext();
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
      {postValues.length === 0 ? (
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
          data={postValues}
          renderItem={renderPost}
          keyExtractor={(item) => {
            return item.uniquePostID;
          }}
        />
      )}
    </ScreenContainer>
  );
};

export default FeedScreen;
