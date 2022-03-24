import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParams} from '../../navigation/RootStack/RootStack';
import {loginUserAction, registerUserAction} from './../../store/actions';
import {Loader} from '../../ui/Loader';
import {Input} from '../../ui/Input';
import {Button} from '../../ui/Button';
import {selectUserLoading} from '../../store/selectors';
import {BtnWrap, Container} from './style';

type AuthScreenProps = NativeStackScreenProps<RootStackParams, 'Auth'>;
const AuthScreen = ({navigation}: AuthScreenProps) => {
  const isLoading = useSelector(selectUserLoading);
  const dispatch = useDispatch();

  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const [emailSignUp, setEmailSignUp] = useState('');
  const [passwordSignUp, setPasswordSignUp] = useState('');
  const [nameSignUp, setNameSignUp] = useState('');

  const handleSubmitLogin = () => {
    dispatch(loginUserAction({email: emailLogin, password: passwordLogin}));
  };

  const handleSubmitSignUp = () => {
    dispatch(
      registerUserAction({
        email: emailSignUp,
        password: passwordSignUp,
        name: nameSignUp,
      }),
    );
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
          <Button onPress={handleSubmitLogin}>--- LOGIN ---</Button>
        </BtnWrap>
      </View>
      {/* ----------------------------- */}
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
          <Button onPress={handleSubmitSignUp}>--- SIGN-UP ---</Button>
        </BtnWrap>
      </View>
    </Container>
  );
};

export default AuthScreen;
