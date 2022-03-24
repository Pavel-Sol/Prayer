import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParams} from '../../navigation/RootStack/RootStack';
import {loginUserAction, registerUserAction} from './../../store/actions';
import {Loader} from '../../ui/Loader';
import {Input} from '../../ui/Input';
import {MainBtn} from '../../ui/MainBtn';
import {selectUserLoading} from '../../store/selectors';
import {BtnWrap, Container} from './style';

type LoginScreenProps = NativeStackScreenProps<RootStackParams, 'Login'>;
const LoginScreen = ({navigation}: LoginScreenProps) => {
  const isLoading = useSelector(selectUserLoading);
  const dispatch = useDispatch();

  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const handleSubmitLogin = () => {
    dispatch(loginUserAction({email: emailLogin, password: passwordLogin}));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <View>
        <Text>LOGIN-BLOCK</Text>
        <View>
          <Input
            placeholder="введите email"
            value={emailLogin}
            onChangeText={setEmailLogin}
          />

          <Input
            placeholder="введите пароль"
            value={passwordLogin}
            onChangeText={setPasswordLogin}
          />
        </View>

        <BtnWrap>
          <MainBtn onPress={handleSubmitLogin}>--- LOGIN ---</MainBtn>
        </BtnWrap>
        <BtnWrap>
          <Button
            onPress={() => navigation.push('Register')}
            title="SWITCH TO SIGN-UP"
          />
        </BtnWrap>
      </View>
    </Container>
  );
};

export default LoginScreen;
