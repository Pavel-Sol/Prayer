import React, {useEffect, useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity, Alert} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {MyPrayersScreen} from './components/MyPrayersScreen';
import {SubscribedScreen} from './components/SubscribedScreen';
import {RootStackParams} from '../../navigation/RootStack/RootStack';
import {Settings} from '../../icons/Settings';
import {getPrayersAction} from '../../store/actions';
import {selectOneColumn} from '../../store/selectors';

const Tab = createMaterialTopTabNavigator();

type PrayersScreenProps = NativeStackScreenProps<RootStackParams, 'Prayers'>;
const PrayersScreen = ({navigation, route}: PrayersScreenProps) => {
  const dispatch = useDispatch();
  const currentColumnId = route.params.columnId;
  const curColumn = useSelector(selectOneColumn(route.params.columnId));

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
      title: curColumn?.title,
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
    <Tab.Navigator
      screenOptions={{
        tabBarPressColor: 'transparent',
        tabBarLabelStyle: {color: 'rgba(114, 168, 188, 1)'},
        swipeEnabled: false,
      }}>
      <Tab.Screen
        name={'MyPrayers'}
        children={() => <MyPrayersScreen columnId={currentColumnId} />}
      />
      <Tab.Screen
        name={'Subscribed'}
        children={() => <SubscribedScreen columnId={currentColumnId} />}
      />
    </Tab.Navigator>
  );
};

export default PrayersScreen;
