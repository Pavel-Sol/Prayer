import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../App';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {loginUserAction, registerUserAction} from '../../../redux/actions';

type AuthScreenProps = NativeStackScreenProps<RootStackParams, 'Auth'>;
const AuthScreen = ({navigation}: AuthScreenProps) => {
  const auth = useSelector((state: RootState) => state.user.isAuth);
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
    // console.log('auth --- ', auth);
    if (auth) {
      navigation.push('MyDesc');
    }
  }, [auth]);
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
