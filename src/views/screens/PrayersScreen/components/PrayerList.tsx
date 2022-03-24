import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

import {PrayerType} from '../../../../types/types';
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
          <View style={styles.rowFront}>
            <Text>{data.item.title}</Text>
          </View>
        </TouchableHighlight>
      )}
      renderHiddenItem={(data, rowMap) => (
        <View style={styles.rowBack}>
          <TouchableHighlight
            onPress={() => console.log('delete ', data.item.id)}>
            <Text>delete</Text>
          </TouchableHighlight>
        </View>
      )}
      leftOpenValue={75}
      rightOpenValue={-75}
    />
  );
};

const styles = StyleSheet.create({
  rowFront: {
    backgroundColor: 'green',
    height: 40,
  },
  rowBack: {
    backgroundColor: 'red',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default PrayerList;
