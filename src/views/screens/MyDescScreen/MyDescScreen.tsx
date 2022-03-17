import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../App';

type MyDescScreenProps = NativeStackScreenProps<RootStackParams, 'Auth'>;

const MyDescScreen = ({navigation}: MyDescScreenProps) => {
  return (
    <View>
      <Text>MyDescScreen</Text>
    </View>
  );
};

export default MyDescScreen;
