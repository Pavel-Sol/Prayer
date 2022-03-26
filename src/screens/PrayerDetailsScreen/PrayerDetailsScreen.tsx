import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {RootStackParams} from '../../navigation/RootStack/RootStack';

type PrayerDetailsScreenProps = NativeStackScreenProps<
  RootStackParams,
  'PrayerDetails'
>;
const PrayerDetailsScreen = ({navigation, route}: PrayerDetailsScreenProps) => {
  useEffect(() => {
    console.log(route.params.prayer);
  }, []);
  return (
    <View>
      <Text>PrayerDetailsScreen</Text>
    </View>
  );
};

export default PrayerDetailsScreen;
