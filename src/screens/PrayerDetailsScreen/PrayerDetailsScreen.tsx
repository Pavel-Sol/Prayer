import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParams} from '../../navigation';
import {Header} from './components/Header';
import {DetailsInfo} from './components/DetailsInfo';
import {Content, Decor, LastPrayed, LastPrayedWrapper} from './style';
import {Members} from './components/Members';
import {Comments} from './components/Comments';
import {AddCommentForm} from './components/AddCommentForm';
import {useSelector} from 'react-redux';
import {selectOnePrayer} from '../../store/selectors';
import {View} from 'react-native';
import {Text} from 'react-native-svg';

type PrayerDetailsScreenProps = NativeStackScreenProps<
  RootStackParams,
  'PrayerDetails'
>;
const PrayerDetailsScreen = ({route}: PrayerDetailsScreenProps) => {
  const prayerId = route.params.prayerId;
  const prayer = useSelector(selectOnePrayer(prayerId));

  if (!prayer) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

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
        <Comments prayerId={prayer.id} />
        <AddCommentForm prayerId={prayer.id} />
      </Content>
    </>
  );
};

export default PrayerDetailsScreen;
