import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../App';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';

type MyDescScreenProps = NativeStackScreenProps<RootStackParams, 'Auth'>;

const MyDescScreen = ({navigation}: MyDescScreenProps) => {
  const userName = useSelector((state: RootState) => state.user.userName);
  const userId = useSelector((state: RootState) => state.user.userId);
  // console.log('userName ====', userName);
  return (
    <View>
      <Text>MyDescScreen</Text>
      <Text>userName : {userName}</Text>
      <Text>userId : {userId}</Text>
    </View>
  );
};

export default MyDescScreen;
