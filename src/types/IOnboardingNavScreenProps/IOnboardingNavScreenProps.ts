import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  OnboardingStackParamList,
  RootNavigatorParamsList,
} from '../../constants';

export type OnboardingNavigationType = CompositeNavigationProp<
  NativeStackNavigationProp<OnboardingStackParamList>,
  NativeStackNavigationProp<RootNavigatorParamsList>
>;
export interface IOnboardingNavScreenProps {
  navigation: OnboardingNavigationType;
}
