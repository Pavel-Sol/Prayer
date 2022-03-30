import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginScreen,
  RegisterScreen,
  MyDescScreen,
  PrayersScreen,
  PrayerDetailsScreen,
} from '../../screens';
import {useDispatch, useSelector} from 'react-redux';
import {localStorage} from '../../store/services/localStorage';
import {loading, login} from '../../store/reducers';
import {selectToken} from '../../store/selectors';

export type RootStackParams = {
  Login: undefined;
  Register: undefined;
  MyDesc: undefined;
  Prayers: {columnId: number};
  PrayerDetails: {prayerId: number};
};

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStack = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(loading(true));
    localStorage
      .getToken()
      .then(token => {
        if (token) {
          dispatch(login({userToken: token}));
        }
      })
      .finally(() => dispatch(loading(false)));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        {token ? (
          <>
            <Stack.Screen name="MyDesc" component={MyDescScreen} />
            <Stack.Screen name="Prayers" component={PrayersScreen} />
            <Stack.Screen
              name="PrayerDetails"
              component={PrayerDetailsScreen}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
