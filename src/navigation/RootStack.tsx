import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen} from '../views/screens/AuthScreen';
import {MyDescScreen} from '../views/screens/MyDescScreen';
import {Alert, TouchableOpacity} from 'react-native';
import AddIcon from '../views/icons/AddIcon';

export type RootStackParams = {
  Auth: undefined;
  MyDesc: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStack = () => {
  return (
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
              <TouchableOpacity
                onPress={() => Alert.alert('This is a button!!!!!')}>
                <AddIcon />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
