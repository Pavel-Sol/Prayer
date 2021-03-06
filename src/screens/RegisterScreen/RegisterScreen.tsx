import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Form, Field} from 'react-final-form';

import {RootStackParams} from '../../navigation';
import {registerUserAction} from './../../store/actions';
import {Loader, Input, MainBtn, Error} from '../../ui';
import {selectUserError, selectUserLoading} from '../../store/selectors';
import {BtnWrap, Container} from './style';

type RegisterScreenProps = NativeStackScreenProps<RootStackParams, 'Register'>;
const RegisterScreen = ({navigation}: RegisterScreenProps) => {
  const isLoading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);
  const dispatch = useDispatch();

  type RegisterValuesType = {
    email: string;
    name: string;
    password: string;
  };

  const handleSubmitSignUp = (values: RegisterValuesType) => {
    dispatch(
      registerUserAction({
        email: values.email,
        password: values.password,
        name: values.name,
      }),
    );
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      {error && <Error error={error} />}
      <Form
        onSubmit={handleSubmitSignUp}
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
            <Field name="name">
              {({input}) => (
                <View>
                  <Input
                    onChangeText={input.onChange}
                    value={input.value}
                    placeholder="введите имя"
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
                    secureTextEntry={true}
                  />
                </View>
              )}
            </Field>
            <BtnWrap>
              <MainBtn
                onPress={form.submit}
                disabled={!values.email || !values.password || !values.name}>
                --- SIGN-UP ---
              </MainBtn>
            </BtnWrap>
          </>
        )}
      />

      <BtnWrap>
        <Button
          onPress={() => navigation.push('Login')}
          title="SWITCH TO LOGIN"
        />
      </BtnWrap>
    </Container>
  );
};

export default RegisterScreen;
