import React, {useEffect, useLayoutEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/RootStack';
import Settings from '../../icons/Settings';
import {useDispatch, useSelector} from 'react-redux';
import {getPrayersAction} from '../../../redux/prayer/actions';
import {selectPrayers} from '../../../redux/prayer/selectors';

type MyDescScreenProps = NativeStackScreenProps<RootStackParams, 'Prayers'>;
const PrayersScreen = ({navigation, route}: MyDescScreenProps) => {
  const dispatch = useDispatch();
  const currentColumnId = route.params.columnInfo.id;
  const prayers = useSelector(selectPrayers(currentColumnId));

  // console.log('prayers ', prayers);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
      title: route.params.columnInfo.title,
      headerRight: () => (
        <TouchableOpacity onPress={() => Alert.alert('This is a settings')}>
          <Settings />
        </TouchableOpacity>
      ),
    });
  }, []);

  useEffect(() => {
    dispatch(getPrayersAction());
  }, []);

  return (
    <View style={styles.container}>
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
