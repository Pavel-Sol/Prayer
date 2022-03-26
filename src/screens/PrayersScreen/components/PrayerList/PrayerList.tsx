import React from 'react';
import {TouchableHighlight, View} from 'react-native';
import {SwipeRow} from 'react-native-swipe-list-view';
import {useDispatch} from 'react-redux';
import {deletePrayerAction} from '../../../../store/actions';

import {PrayerType} from '../../../../types/types';
import {FrontItem} from '../FrontItem';
import {RowBack, RowBackText} from './style';
type PraterListPropsType = {
  prayerList: PrayerType[];
};
const PrayerList: React.FC<PraterListPropsType> = ({prayerList}) => {
  // console.log('prayerList', prayerList);
  const dispatch = useDispatch();
  const handleDelPrayer = (id: number) => {
    dispatch(deletePrayerAction(id));
  };

  return (
    <View>
      {prayerList.map(el => {
        return (
          <SwipeRow disableRightSwipe rightOpenValue={-80} key={el.id}>
            <TouchableHighlight onPress={() => handleDelPrayer(el.id)}>
              <RowBack>
                <RowBackText>delete</RowBackText>
              </RowBack>
            </TouchableHighlight>
            <FrontItem data={el} />
          </SwipeRow>
        );
      })}
    </View>
  );
};

export default PrayerList;
