import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/RootStack';

type MyDescScreenProps = NativeStackScreenProps<RootStackParams, 'Prayers'>;
const PrayersScreen = ({navigation, route}: MyDescScreenProps) => {
  return (
    <View>
      <Text>PrayersScreen!!!!!!!!</Text>
      <Text> инфа по колонке: {route.params.columnInfo.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});

export default PrayersScreen;
