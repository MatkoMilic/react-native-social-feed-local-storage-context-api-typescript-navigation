import React from "react";
import { SafeAreaView, View } from "react-native";
import { Formik } from "formik";
import { Header, ScreenContainer, PostForm } from "../../components";
import { IMainNavScreenProps } from "../../types";
import { postSchema } from "../../validation";
import { useOnSubmitPost } from "./useOnSubmitPost";
import { styles } from "./style";

interface CreatePostScreenProps extends IMainNavScreenProps {}

const CreatePostScreen: React.FC<CreatePostScreenProps> = ({ navigation }) => {
  const { createNewPost } = useOnSubmitPost(navigation);

  const navigateToFeedScreen = async () => {
    navigation.replace("FeedScreen");
  };

  return (
    <ScreenContainer>
      <SafeAreaView>
        <Header
          containerStyle={styles.containerStyleHeader}
          headerTitle="Make a post!"
          leftIcon="arrow-back"
          onPressLeftIcon={navigateToFeedScreen}
        />
      </SafeAreaView>
      <View style={styles.imageAndTextContainer}>
        <Formik
          initialValues={{ postImage: "", postDescription: "" }}
          onSubmit={(values) => {
            createNewPost(values.postImage, values.postDescription.trim());
          }}
          validationSchema={postSchema}
          component={PostForm}
        />
      </View>
    </ScreenContainer>
  );
};

export default CreatePostScreen;
