import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../App';

const auth = true;

type AuthScreenProps = NativeStackScreenProps<RootStackParams, 'Auth'>;
const AuthScreen = ({navigation}: AuthScreenProps) => {
  const handleNavigate = () => {
    navigation.navigate('MyDesc');
  };

  useEffect(() => {
    if (auth) {
      navigation.push('MyDesc');
    }
  }, [auth]);
  return (
    <View>
      <Text>AuthScreen</Text>
      <TouchableOpacity onPress={handleNavigate}>
        <Text>LOGIN====</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthScreen;
