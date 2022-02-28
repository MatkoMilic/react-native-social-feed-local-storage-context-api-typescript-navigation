import { NavigatorScreenParams } from '@react-navigation/native';

export type OnboardingStackParamList = {
  LoadingScreen: undefined;
  LoginScreen: undefined;
};
export type MainStackParamList = {
  FeedScreen: undefined;
};
export type RootNavigatorParamsList = {
  MainNavigator: NavigatorScreenParams<MainStackParamList>;
  OnboardingNavigator: NavigatorScreenParams<OnboardingStackParamList>;
};
export type RootNavigatorNameType = keyof RootNavigatorParamsList;
export type MainStackNameType = keyof MainStackParamList;
export type OnboardingStackNameType = keyof OnboardingStackParamList;
