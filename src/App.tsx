import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen} from './views/screens/AuthScreen';
import {MyDescScreen} from './views/screens/MyDescScreen';
import {Alert} from 'react-native';
import {Button} from './views/UIcomponents/Button';
import AddIcon from './views/icons/AddIcon';

export type RootStackParams = {
  Auth: undefined;
  MyDesc: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();
const App = () => {
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
              <Button onPress={() => Alert.alert('This is a button!!!!!')}>
                <AddIcon />
              </Button>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
