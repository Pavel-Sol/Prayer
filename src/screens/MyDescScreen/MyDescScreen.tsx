import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, TouchableOpacity, ScrollView} from 'react-native';

import {RootStackParams} from '../../navigation';
import {getColumnsAction} from '../../store/actions';
import {AddIcon} from '../../icons';
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

  return (
    <Container>
      <View>{addColumnMode && <AddColumnForm />}</View>

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
