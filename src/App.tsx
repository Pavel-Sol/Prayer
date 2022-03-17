import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen} from './views/screens/AuthScreen';
import {MyDescScreen} from './views/screens/MyDescScreen';

export type RootStackParams = {
  Auth: undefined;
  MyDesc: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="MyDesc" component={MyDescScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
