import React from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  View,
  Text,
} from "react-native";
import { Header, PostListItem, ScreenContainer } from "../../components";
import { checkPostsContext } from "../../stores";
import { IMainNavScreenProps } from "../../types";
import { styles } from "./style";

interface FeedScreenProps extends IMainNavScreenProps {}

const FeedScreen: React.FC<FeedScreenProps> = ({ navigation }) => {
  const { postsSortedByDate, hasPosts } = checkPostsContext();

  const navigateToCreatePostScreen = async () => {
    navigation.navigate("CreatePostScreen");
  };

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
      {!hasPosts ? (
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
          renderItem={({ item }) => <PostListItem post={item} />}
          keyExtractor={(item) => item.uniquePostID}
        />
      )}
    </ScreenContainer>
  );
};

export default FeedScreen;
