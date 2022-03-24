import React, {useState} from 'react';
import {Input} from '../../../../ui/Input';
import {Container} from './style';

const AddPrayerForm = () => {
  const [prayerTitle, setPrayerTitle] = useState('');
  const addNewPrayer = () => {
    console.log(prayerTitle);
  };
  return (
    <Container>
      <Input
        isIconLeft
        onChangeText={setPrayerTitle}
        placeholder="Add prayer"
        value={prayerTitle}
        onIconPress={addNewPrayer}
      />
    </Container>
  );
};

export default AddPrayerForm;
