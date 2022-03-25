import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Form, Field} from 'react-final-form';

import {RootStackParams} from '../../navigation/RootStack/RootStack';
import {loginUserAction} from './../../store/actions';
import {Loader} from '../../ui/Loader';
import {Input} from '../../ui/Input';
import {MainBtn} from '../../ui/MainBtn';
import {selectUserLoading} from '../../store/selectors';
import {BtnWrap, Container} from './style';

type LoginScreenProps = NativeStackScreenProps<RootStackParams, 'Login'>;
const LoginScreen = ({navigation}: LoginScreenProps) => {
  const isLoading = useSelector(selectUserLoading);
  const dispatch = useDispatch();

  type LoginValuesType = {
    email: string;
    password: string;
  };

  const handleSubmitLogin = (values: LoginValuesType) => {
    dispatch(loginUserAction({email: values.email, password: values.password}));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <View>
        <Text>LOGIN-BLOCK</Text>

        <Form
          onSubmit={handleSubmitLogin}
          render={({form, values}) => (
            <>
              <Field name="email">
                {({input}) => (
                  <View>
                    <Input
                      onChangeText={input.onChange}
                      value={input.value}
                      placeholder="введите email"
                    />
                  </View>
                )}
              </Field>
              <Field name="password">
                {({input}) => (
                  <View>
                    <Input
                      onChangeText={input.onChange}
                      value={input.value}
                      placeholder="введите пароль"
                    />
                  </View>
                )}
              </Field>
              <BtnWrap>
                <MainBtn
                  onPress={form.submit}
                  disabled={!values.email || !values.password}>
                  --- LOGIN ---
                </MainBtn>
              </BtnWrap>
            </>
          )}
        />

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
