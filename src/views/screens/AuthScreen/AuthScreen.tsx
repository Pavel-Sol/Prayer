import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/RootStack';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {loginUserAction, registerUserAction} from '../../../redux/user/actions';
import {Loader} from '../../UIcomponents/Loader';
import {Input} from '../../UIcomponents/Input';
import {Button} from './../../UIcomponents/Button';

type AuthScreenProps = NativeStackScreenProps<RootStackParams, 'Auth'>;
const AuthScreen = ({navigation}: AuthScreenProps) => {
  const isLoading = useSelector((state: RootState) => state.user.isLoading);
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
    <View style={styles.container}>
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

        <View style={styles.btnWrap}>
          <Button onPress={handleSubmitLogin}>--- LOGIN ---</Button>
        </View>
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
        <View style={styles.btnWrap}>
          <Button onPress={handleSubmitSignUp}>--- SIGN-UP ---</Button>
        </View>
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
  btnWrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default AuthScreen;
