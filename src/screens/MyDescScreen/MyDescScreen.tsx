import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Button, TouchableOpacity, ScrollView} from 'react-native';

import {RootStackParams} from '../../navigation/RootStack/RootStack';
import {logout} from '../../store/reducers';
import {localStorage} from '../../store/services/localStorage';
import {getColumnsAction} from '../../store/actions';
import {AddIcon} from '../../icons/AddIcon';
import {selectColumns} from '../../store/selectors';
import {ColumnItem, ColumnItemText, Container} from './style';
import {AddColumnForm} from './components/AddColumnForm';

type MyDescScreenProps = NativeStackScreenProps<RootStackParams, 'MyDesc'>;

const MyDescScreen = ({navigation}: MyDescScreenProps) => {
  const dispatch = useDispatch();
  const columns = useSelector(selectColumns);
  const [addColumnMode, setAddColumnMode] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setAddColumnMode(true)}>
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
      <View>
        <Button title="ВЫЙТИ" onPress={handleLogOut} />
        {addColumnMode && <AddColumnForm />}
      </View>

      <ScrollView>
        {columns.map(el => {
          return (
            <TouchableOpacity
              key={el.id}
              onPress={() => navigation.navigate('Prayers', {columnId: el.id})}>
              <ColumnItem>
                <ColumnItemText>{el.title}</ColumnItemText>
              </ColumnItem>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default MyDescScreen;
