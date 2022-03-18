import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen} from './views/screens/AuthScreen';
import {MyDescScreen} from './views/screens/MyDescScreen';
import {Alert} from 'react-native';
import {Button} from './views/UIcomponents/Button';
import AddIcon from './views/icons/AddIcon';
import {Provider} from 'react-redux';
import store from './redux/store';

import AsyncStorage from '@react-native-async-storage/async-storage';

export type RootStackParams = {
  Auth: undefined;
  MyDesc: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();
const App = () => {
  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        console.log('token == ', token);
      } catch (error) {
        console.log('error getToken ', error);
      }
    };
    getToken();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={({navigation, route}) => ({
              title: 'Auth',
            })}
          />
          <Stack.Screen
            name="MyDesc"
            component={MyDescScreen}
            options={() => ({
              title: 'My Desc',
              headerRight: () => (
                <Button onPress={() => Alert.alert('This is a button!!!!!')}>
                  <AddIcon />
                </Button>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
