import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/RootStack';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {loginUserAction, registerUserAction} from '../../../redux/actions';
import {localStorage} from '../../../services/localStorage';
import {loading} from '../../../redux/user/userSlice';
import {Loader} from '../../UIcomponents/Loader';

type AuthScreenProps = NativeStackScreenProps<RootStackParams, 'Auth'>;
const AuthScreen = ({navigation}: AuthScreenProps) => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
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

  useEffect(() => {
    dispatch(loading(true));
    localStorage.getToken().then(token => {
      console.log('token', token);
      if (token) {
        navigation.push('MyDesc');
      }
      dispatch(loading(false));
    });
  }, [isAuth]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <View>
        <Text>LOGIN-BLOCK</Text>
        <View>
          <TextInput
            placeholder="введите email"
            value={emailLogin}
            onChangeText={setEmailLogin}
          />

          <TextInput
            placeholder="введите пароль"
            value={passwordLogin}
            onChangeText={setPasswordLogin}
          />
        </View>

        <View>
          <Button title="---login----" onPress={handleSubmitLogin} />
        </View>
      </View>
      {/* ----------------------------- */}
      <View>
        <Text>SIGNUP-BLOCK</Text>
        <View>
          <TextInput
            placeholder="введите email"
            value={emailSignUp}
            onChangeText={setEmailSignUp}
          />

          <TextInput
            placeholder="введите имя"
            value={nameSignUp}
            onChangeText={setNameSignUp}
          />

          <TextInput
            placeholder="введите пароль"
            value={passwordSignUp}
            onChangeText={setPasswordSignUp}
          />
        </View>

        <View>
          <Button title="---SIGN-UP----" onPress={handleSubmitSignUp} />
        </View>
      </View>
    </>
  );
};

export default AuthScreen;
