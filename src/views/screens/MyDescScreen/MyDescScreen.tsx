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
  const token = useSelector((state: RootState) => state.user.userToken);
  const dispatch = useDispatch();

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
    </View>
  );
};

export default MyDescScreen;
