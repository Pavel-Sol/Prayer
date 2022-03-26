import React from 'react';
import {TouchableHighlight} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
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
    <SwipeListView
      useFlatList
      data={prayerList}
      disableRightSwipe
      renderItem={(data, rowMap) => <FrontItem data={data.item} />}
      renderHiddenItem={(data, rowMap) => (
        <TouchableHighlight onPress={() => handleDelPrayer(data.item.id)}>
          <RowBack>
            <RowBackText>delete</RowBackText>
          </RowBack>
        </TouchableHighlight>
      )}
      leftOpenValue={80}
      rightOpenValue={-80}
    />
  );
};

export default PrayerList;
