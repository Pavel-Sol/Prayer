import React, {useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/RootStack';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {logout} from '../../../redux/user/userSlice';
import {localStorage} from '../../../services/localStorage';
import {getColumnsAction} from '../../../redux/column/actions';
import AddIcon from '../../icons/AddIcon';

type MyDescScreenProps = NativeStackScreenProps<RootStackParams, 'MyDesc'>;

const MyDescScreen = ({navigation}: MyDescScreenProps) => {
  const token = useSelector((state: RootState) => state.user.userToken);
  const dispatch = useDispatch();
  const columns = useSelector((state: RootState) => state.column.columns);

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
    <View style={styles.container}>
      <Text>token : {token}</Text>
      <View>
        {/* для теста, позже уберу */}
        <Button title="ВЫЙТИ" onPress={handleLogOut} />
      </View>
      {/* -------------------------------------- */}

      <View>
        {columns.map(el => {
          return (
            <TouchableOpacity
              key={el.id}
              onPress={() => navigation.navigate('Prayers', {columnInfo: el})}>
              <View style={styles.columnItem}>
                <Text style={styles.columnItemText}>{el.title}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
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

  columnItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 59,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 4,
    paddingHorizontal: 15,
    marginBottom: 10,
  },

  columnItemText: {
    fontSize: 17,
    color: '#514D47',
  },
});

export default MyDescScreen;
