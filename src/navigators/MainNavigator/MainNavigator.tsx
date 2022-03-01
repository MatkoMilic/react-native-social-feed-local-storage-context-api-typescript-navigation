import React, { FC } from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { FeedScreen, CreatePostScreen } from "../../screens";
import {
  MainStackParamList,
  FEED_SCREEN,
  CREATEPOST_SCREEN,
} from "../../constants";

interface MainNavigatorProps {
  navigation: NativeStackNavigationProp<MainStackParamList>;
}

const MainStack = createNativeStackNavigator();

const MainNavigator: FC<MainNavigatorProps> = ({ navigation }) => {
  return (
    <MainStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={FEED_SCREEN}
    >
      <MainStack.Screen name={FEED_SCREEN} component={FeedScreen} />
      <MainStack.Screen name={CREATEPOST_SCREEN} component={CreatePostScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
