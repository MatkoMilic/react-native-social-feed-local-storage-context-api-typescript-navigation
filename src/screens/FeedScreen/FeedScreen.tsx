import React, { useState } from "react";
import { Button, Image, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { Header, ScreenContainer } from "../../components";
import { IMainNavScreenProps } from "../../types";
import { styles } from "./style";

interface FeedScreenProps extends IMainNavScreenProps {}

const FeedScreen: React.FC<FeedScreenProps> = ({ navigation }) => {
  const [image, setImage] = useState<any>();

  const navigateToCreatePostScreen = async () => {
    navigation.navigate("CreatePostScreen");
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
          headerTitle="Factory X Feed"
          rightIcon="add-photo-alternate"
          onPressRightIcon={navigateToCreatePostScreen}
        />
      </SafeAreaProvider>
      <View style={styles.imageAndTextContainer}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
    </ScreenContainer>
  );
};

export default FeedScreen;
