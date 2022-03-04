import React from "react";
import { SafeAreaView, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Formik } from "formik";
import { Header, ScreenContainer, PostForm } from "../../components";
import { IMainNavScreenProps } from "../../types";
import { postSchema } from "../../validation";
import { useOnSubmit } from "../../utils";
import { styles } from "./style";

interface CreatePostScreenProps extends IMainNavScreenProps {}

const CreatePostScreen: React.FC<CreatePostScreenProps> = ({ navigation }) => {
  const { createPost } = useOnSubmit(navigation);

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
            createPost(values.postImage, values.postDescription.trim());
          }}
          validationSchema={postSchema}
          component={PostForm}
        />
      </View>
    </ScreenContainer>
  );
};

export default CreatePostScreen;
