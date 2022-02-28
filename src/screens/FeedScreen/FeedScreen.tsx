import React, { useState } from 'react';
import { View } from 'react-native';
import { IMainNavScreenProps } from '../../types/IMainNavScreenProps/IMainNavScreenProps';
import { ScreenContainer } from '../../components';
import { styles } from './style';

interface FeedScreenProps extends IMainNavScreenProps {}

const FeedScreen: React.FC<FeedScreenProps> = ({ navigation }) => {
  return (
    <ScreenContainer>
      <View></View>
    </ScreenContainer>
  );
};

export default FeedScreen;
