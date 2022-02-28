import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { ScreenContainer } from "../../components";
import { IOnboardingNavScreenProps } from "../../types";

interface LoginScreenProps extends IOnboardingNavScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Welcome to Factory X Login Page!</Text>
      <View>
        <Button
          title={<CustomButtonTitle />}
          titleStyle={{ fontWeight: "bold", fontSize: 18 }}
          linearGradientProps={{
            colors: ["#FF9800", "#F44336"],
            start: [1, 0],
            end: [0.2, 0],
          }}
          buttonStyle={{
            borderWidth: 0,
            borderColor: "transparent",
            borderRadius: 20,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          icon={{
            name: "arrow-right",
            type: "font-awesome",
            size: 15,
            color: "white",
          }}
          iconRight
          iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
        />
      </View>
    </ScreenContainer>
  );
};

const CustomButtonTitle = () => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>Factory X</Text>
      <Text style={{ fontStyle: "italic", fontSize: 12 }}>
        RN FacX Demo App
      </Text>
    </View>
  );
};

export default LoginScreen;
