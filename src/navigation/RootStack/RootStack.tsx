import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../../screens/LoginScreen';
import {RegisterScreen} from '../../screens/RegisterScreen';
import {MyDescScreen} from '../../screens/MyDescScreen';
import {PrayersScreen} from '../../screens/PrayersScreen';
import {useDispatch, useSelector} from 'react-redux';
import {localStorage} from '../../store/services/localStorage/localStorage';
import {loading, login} from '../../store/reducers/userSlice';
import {ColumnType, PrayerType} from '../../types/types';
import {selectToken} from '../../store/selectors';
import {PrayerDetailsScreen} from '../../screens/PrayerDetailsScreen';

export type RootStackParams = {
  Login: undefined;
  Register: undefined;
  MyDesc: undefined;
  Prayers: {columnInfo: ColumnType};
  PrayerDetails: {prayer: PrayerType};
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
        // console.log('token in root-stack', token);
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
