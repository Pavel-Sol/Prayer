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

type RegisterScreenProps = NativeStackScreenProps<RootStackParams, 'Register'>;
const RegisterScreen = ({navigation}: RegisterScreenProps) => {
  const isLoading = useSelector(selectUserLoading);
  const dispatch = useDispatch();

  const [emailSignUp, setEmailSignUp] = useState('');
  const [passwordSignUp, setPasswordSignUp] = useState('');
  const [nameSignUp, setNameSignUp] = useState('');

  const handleSubmitSignUp = () => {
    dispatch(
      registerUserAction({
        email: emailSignUp,
        password: passwordSignUp,
        name: nameSignUp,
      }),
    );
    navigation.push('Login');
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <View>
        <Text>SIGNUP-BLOCK</Text>
        <View>
          <Input
            placeholder="введите email"
            value={emailSignUp}
            onChangeText={setEmailSignUp}
          />

          <Input
            placeholder="введите имя"
            value={nameSignUp}
            onChangeText={setNameSignUp}
          />

          <Input
            placeholder="введите пароль"
            value={passwordSignUp}
            onChangeText={setPasswordSignUp}
          />
        </View>
        <BtnWrap>
          <MainBtn onPress={handleSubmitSignUp}>--- SIGN-UP ---</MainBtn>
        </BtnWrap>
        <BtnWrap>
          <Button
            onPress={() => navigation.push('Login')}
            title="SWITCH TO LOGIN"
          />
        </BtnWrap>
      </View>
    </Container>
  );
};

export default RegisterScreen;
