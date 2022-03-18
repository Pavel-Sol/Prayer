import React from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../App';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {logout} from '../../../redux/user/userSlice';

import AsyncStorage from '@react-native-async-storage/async-storage';

type MyDescScreenProps = NativeStackScreenProps<RootStackParams, 'Auth'>;

const MyDescScreen = ({navigation}: MyDescScreenProps) => {
  const userName = useSelector((state: RootState) => state.user.userName);
  const userId = useSelector((state: RootState) => state.user.userId);
  const dispatch = useDispatch();
  // console.log('userName ====', userName);

  const handleLogOut = () => {
    // для теста
    dispatch(logout());
    navigation.push('Auth');

    const removeToken = async () => {
      try {
        AsyncStorage.removeItem('token');
      } catch (error) {
        console.log('error removeToken ', error);
      }
    };
    removeToken();
  };
  return (
    <View>
      <Text>MyDescScreen</Text>
      <Text>userName : {userName}</Text>
      <Text>userId : {userId}</Text>
      <View>
        {/* для теста, позже уберу */}
        <Button title="ВЫЙТИ" onPress={handleLogOut} />
      </View>
    </View>
  );
};

export default MyDescScreen;
