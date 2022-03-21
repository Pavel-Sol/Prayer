import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen} from '../views/screens/AuthScreen';
import {MyDescScreen} from '../views/screens/MyDescScreen';
import {PrayersScreen} from './../views/screens/PrayersScreen';
import {Alert, TouchableOpacity} from 'react-native';
import AddIcon from '../views/icons/AddIcon';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {localStorage} from '../services/localStorage';
import {loading, login} from '../redux/user/userSlice';
import {ColumnType} from '../types/types';

export type RootStackParams = {
  Auth: undefined;
  MyDesc: undefined;
  Prayers: {columnInfo: ColumnType};
};

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStack = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.user.userToken);

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
            <Stack.Screen
              name="MyDesc"
              component={MyDescScreen}
              options={() => ({
                title: 'My Desc',
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => Alert.alert('This is a button!!!!!')}>
                    <AddIcon />
                  </TouchableOpacity>
                ),
              })}
            />
            <Stack.Screen
              name="Prayers"
              component={PrayersScreen}
              options={() => ({
                title: 'Prayers',
              })}
            />
          </>
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={({navigation, route}) => ({
              title: 'Auth',
            })}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
