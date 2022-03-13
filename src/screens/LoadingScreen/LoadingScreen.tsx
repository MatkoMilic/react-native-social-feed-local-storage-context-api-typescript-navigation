import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { IOnboardingNavScreenProps } from "../../types";
import { ScreenContainer } from "../../components";

interface LoadingScreenProps extends IOnboardingNavScreenProps {}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ navigation }) => {
  const chooseNavigator = async () => {
    // if we add autentification system here is where logic for re routing will be,
    // or some other check before starting the app, for now users will be automatically
    // sent to login screen where they can press a button to go to app FEED.
    navigation.navigate("LoginScreen");
  };

  useEffect(() => {
    chooseNavigator();
  }, []);

  return (
    <ScreenContainer>
      <StatusBar />
      <View>
        <Text>
          Loading Factory X app text...a loading icon here would be nice to add
          in the app update.
        </Text>
      </View>
    </ScreenContainer>
  );
};

export default LoadingScreen;
