import React, {useEffect, useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text, Button, TouchableOpacity, Alert} from 'react-native';

import {RootStackParams} from '../../navigation/RootStack/RootStack';
import {logout} from '../../store/reducers';
import {localStorage} from '../../store/services/localStorage';
import {getColumnsAction} from '../../store/actions';
import {AddIcon} from '../../icons/AddIcon';
import {selectColumns, selectToken} from '../../store/selectors';
import {ColumnItem, ColumnItemText, Container} from './style';

type MyDescScreenProps = NativeStackScreenProps<RootStackParams, 'MyDesc'>;

const MyDescScreen = ({navigation}: MyDescScreenProps) => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const columns = useSelector(selectColumns);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => Alert.alert('This is a Add func')}>
          <AddIcon />
        </TouchableOpacity>
      ),
    });
  }, []);

  useEffect(() => {
    dispatch(getColumnsAction());
  }, []);

  const handleLogOut = () => {
    // для теста
    dispatch(logout());
    localStorage.removeToken();
  };
  return (
    <Container>
      {/* для теста, позже уберу */}
      <Text>token : {token}</Text>
      <View>
        <Button title="ВЫЙТИ" onPress={handleLogOut} />
      </View>
      {/* -------------------------------------- */}

      <View>
        {columns.map(el => {
          return (
            <TouchableOpacity
              key={el.id}
              onPress={() => navigation.navigate('Prayers', {columnInfo: el})}>
              <ColumnItem>
                <ColumnItemText>{el.title}</ColumnItemText>
              </ColumnItem>
            </TouchableOpacity>
          );
        })}
      </View>
    </Container>
  );
};

export default MyDescScreen;
