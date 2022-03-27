import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParams} from '../../navigation/RootStack/RootStack';
import {Header} from './components/Header';
import {DetailsInfo} from './components/DetailsInfo';
import {Content, Decor, LastPrayed, LastPrayedWrapper} from './style';
import {Members} from './components/Members';
import {Comments} from './components/Comments';
import {AddCommentForm} from './components/AddCommentForm';

type PrayerDetailsScreenProps = NativeStackScreenProps<
  RootStackParams,
  'PrayerDetails'
>;
const PrayerDetailsScreen = ({navigation, route}: PrayerDetailsScreenProps) => {
  const prayer = route.params.prayer;
  return (
    <>
      <Header title={prayer.title} />
      <Content>
        <LastPrayedWrapper>
          <Decor />
          <LastPrayed>Last prayed 8 min ago</LastPrayed>
        </LastPrayedWrapper>
        <DetailsInfo />
        <Members />
        <Comments />
        <AddCommentForm />
      </Content>
    </>
  );
};

export default PrayerDetailsScreen;
