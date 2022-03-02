import React, { useState } from "react";
import { Button, Image, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header, ScreenContainer } from "../../components";
import { IMainNavScreenProps } from "../../types";
import { styles } from "./style";

interface FeedScreenProps extends IMainNavScreenProps {}

const FeedScreen: React.FC<FeedScreenProps> = ({ navigation }) => {
  const [image, setImage] = useState<string>();

  const navigateToCreatePostScreen = async () => {
    navigation.navigate("CreatePostScreen");
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
        {/* {image && <Image source={{ uri: image }} style={styles.image} />} */}
      </View>
    </ScreenContainer>
  );
};

export default FeedScreen;
