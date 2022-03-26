import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {RootStackParams} from '../../navigation/RootStack/RootStack';
import {Header} from './components/Header';

type PrayerDetailsScreenProps = NativeStackScreenProps<
  RootStackParams,
  'PrayerDetails'
>;
const PrayerDetailsScreen = ({navigation, route}: PrayerDetailsScreenProps) => {
  const prayer = route.params.prayer;
  return (
    <>
      <Header title={prayer.title} />
      <Text>PrayerDetailsScreen</Text>
    </>
  );
};

export default PrayerDetailsScreen;
