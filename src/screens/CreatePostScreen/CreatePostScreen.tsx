import React, { useState } from "react";
import { View } from "react-native";
import { Header, ScreenContainer } from "../../components";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Formik } from "formik";
import { styles } from "./style";
import { IMainNavScreenProps } from "../../types";
import { postSchema } from "../../validation";
import { PostForm } from "../../components";
import { useOnSubmit } from "../../utils";

interface CreatePostScreenProps extends IMainNavScreenProps {}

const CreatePostScreen: React.FC<CreatePostScreenProps> = ({ navigation }) => {
  const { createPost } = useOnSubmit(navigation);

  const navigateToFeedScreen = async () => {
    navigation.replace("FeedScreen");
  };

  return (
    <ScreenContainer>
      <SafeAreaProvider>
        <Header
          headerTitle="Do new post!"
          leftIcon="arrow-back"
          onPressLeftIcon={navigateToFeedScreen}
        />
      </SafeAreaProvider>
      <View style={styles.imageAndTextContainer}>
        {/* <Button
          title="Pick an image from camera roll"
          onPress={() => pickImage(setImage)}
        /> */}
        {/* {image && <Image source={{ uri: image }} style={styles.image} />} */}
        <Formik
          initialValues={{ postImage: "", postDescription: "" }}
          onSubmit={(values) => {
            createPost(values.postImage, values.postDescription);
          }}
          validationSchema={postSchema}
          component={PostForm}
        />
      </View>
    </ScreenContainer>
  );
};

export default CreatePostScreen;
