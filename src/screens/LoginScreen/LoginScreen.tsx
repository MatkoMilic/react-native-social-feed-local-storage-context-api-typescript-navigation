import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { ScreenContainer } from "../../components";
import { FEED_SCREEN, navigatorNames } from "../../constants";
import { IOnboardingNavScreenProps } from "../../types";
import { styles } from "./style";

interface LoginScreenProps extends IOnboardingNavScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const goToFeed = () => {
    navigation.replace(navigatorNames.MAIN_NAVIGATOR, { screen: FEED_SCREEN });
  };
  return (
    <ScreenContainer style={styles.loginContainer}>
      <Text>Welcome to Factory X Login Page!</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Feed"
          onPress={goToFeed}
          titleStyle={styles.titleStyle}
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainerStyle}
        />
      </View>
    </ScreenContainer>
  );
};

export default LoginScreen;
