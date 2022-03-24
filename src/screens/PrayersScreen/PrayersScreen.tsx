import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity, Alert} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParams} from '../../navigation/RootStack/RootStack';
import {Settings} from '../../icons/Settings';
import {getPrayersAction} from '../../store/actions';
import {selectPrayers} from '../../store/selectors';
import {SelectController} from './components/SelectController';
import {AddPrayerForm} from './components/AddPrayerForm';
import {PrayerList} from './components/PrayerList';
import {Container} from './style';

type PrayersScreenProps = NativeStackScreenProps<RootStackParams, 'Prayers'>;
const PrayersScreen = ({navigation, route}: PrayersScreenProps) => {
  const dispatch = useDispatch();
  const currentColumnId = route.params.columnInfo.id;
  const prayers = useSelector(selectPrayers(currentColumnId));
  const [prayersMode, setPrayersMode] = useState<'MY_PRAYERS' | 'SUBSCRIBED'>(
    'MY_PRAYERS',
  );

  const selectPrayersMode = (mode: 'MY_PRAYERS' | 'SUBSCRIBED') => {
    setPrayersMode(mode);
  };

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
    <>
      <SelectController
        OnSelectPrayersMode={selectPrayersMode}
        mode={prayersMode}
      />
      <Container>
        {prayersMode === 'MY_PRAYERS' && <AddPrayerForm />}
        <PrayerList data={prayers} />
        {/* <Text> инфа по колонке: {route.params.columnInfo.title}</Text> */}
      </Container>
    </>
  );
};

export default PrayersScreen;
