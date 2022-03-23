import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {Input} from '../../../UIcomponents/Input';

const AddPrayerForm = () => {
  const [prayerTitle, setPrayerTitle] = useState('');
  const addNewPrayer = () => {
    console.log(prayerTitle);
  };
  return (
    <View style={styles.container}>
      <Input
        isIconLeft
        onChangeText={setPrayerTitle}
        placeholder="Add prayer"
        value={prayerTitle}
        onIconPress={addNewPrayer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
  },
});
export default AddPrayerForm;
