import React from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/RootStack';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {logout} from '../../../redux/user/userSlice';
import {localStorage} from '../../../services/localStorage';

type MyDescScreenProps = NativeStackScreenProps<RootStackParams, 'Auth'>;

const MyDescScreen = ({navigation}: MyDescScreenProps) => {
  const userName = useSelector((state: RootState) => state.user.userName);
  const userId = useSelector((state: RootState) => state.user.userId);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    // для теста
    dispatch(logout());
    localStorage.removeToken();
    navigation.push('Auth');
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
