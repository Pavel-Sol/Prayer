import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/RootStack';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {logout} from '../../../redux/user/userSlice';
import {localStorage} from '../../../services/localStorage';
import {getColumnsAction} from '../../../redux/column/actions';

type MyDescScreenProps = NativeStackScreenProps<RootStackParams, 'Auth'>;

const MyDescScreen = ({navigation}: MyDescScreenProps) => {
  const token = useSelector((state: RootState) => state.user.userToken);
  const dispatch = useDispatch();

  const columns = useSelector((state: RootState) => state.column.columns);
  // console.log('columns ', columns);

  useEffect(() => {
    dispatch(getColumnsAction());
  }, []);

  const handleLogOut = () => {
    // для теста
    dispatch(logout());
    localStorage.removeToken();
  };
  return (
    <View>
      <Text>MyDescScreen</Text>
      <Text>token : {token}</Text>
      <View>
        {/* для теста, позже уберу */}
        <Button title="ВЫЙТИ" onPress={handleLogOut} />
      </View>

      <View>
        {columns.map(el => {
          return (
            <View key={el.id}>
              <Text> title : {el.title}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default MyDescScreen;
