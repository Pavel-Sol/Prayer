import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../App';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {loginUserAction} from '../../../redux/actions';

type AuthScreenProps = NativeStackScreenProps<RootStackParams, 'Auth'>;
const AuthScreen = ({navigation}: AuthScreenProps) => {
  const auth = useSelector((state: RootState) => state.user.isAuth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNavigate = () => {
    navigation.navigate('MyDesc');
  };

  const handleSubmit = () => {
    dispatch(loginUserAction({email, password}));
  };

  useEffect(() => {
    // console.log('auth --- ', auth);
    if (auth) {
      navigation.push('MyDesc');
    }
  }, [auth]);
  return (
    <View>
      <Text>AuthScreen</Text>
      <TouchableOpacity onPress={handleNavigate}>
        <Text>LOGIN====</Text>
      </TouchableOpacity>
      <View>
        <TextInput
          placeholder="введите email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="введите пароль"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View>
        <Button title="проверка" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default AuthScreen;
