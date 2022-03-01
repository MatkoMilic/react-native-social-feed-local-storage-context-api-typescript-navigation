import React, { useState } from "react";
import { Button, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Header, ScreenContainer } from "../../components";
import { IMainNavScreenProps } from "../../types";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./style";

interface CreatePostScreenProps extends IMainNavScreenProps {}

const CreatePostScreen: React.FC<CreatePostScreenProps> = ({ navigation }) => {
  const [image, setImage] = useState<any>();

  const navigateToFeedScreen = async () => {
    navigation.replace("FeedScreen");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScreenContainer>
      <SafeAreaProvider>
        <Header
          headerTitle="Create your new post!"
          leftIcon="arrow-back"
          onPressLeftIcon={navigateToFeedScreen}
        />
      </SafeAreaProvider>
      <View style={styles.imageAndTextContainer}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
    </ScreenContainer>
  );
};

export default CreatePostScreen;
