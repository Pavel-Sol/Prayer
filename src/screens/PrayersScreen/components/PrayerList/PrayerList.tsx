import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

import {PrayerType} from '../../../../types/types';
import {RowBack, RowFront} from './style';
type PraterListPropsType = {
  data: PrayerType[];
};
const PrayerList: React.FC<PraterListPropsType> = ({data}) => {
  // console.log(data);
  return (
    <SwipeListView
      useFlatList
      data={data}
      disableRightSwipe
      renderItem={(data, rowMap) => (
        <TouchableHighlight>
          <RowFront>
            <Text>{data.item.title}</Text>
          </RowFront>
        </TouchableHighlight>
      )}
      renderHiddenItem={(data, rowMap) => (
        <RowBack>
          <TouchableHighlight
            onPress={() => console.log('delete ', data.item.id)}>
            <Text>delete</Text>
          </TouchableHighlight>
        </RowBack>
      )}
      leftOpenValue={75}
      rightOpenValue={-75}
    />
  );
};

export default PrayerList;
