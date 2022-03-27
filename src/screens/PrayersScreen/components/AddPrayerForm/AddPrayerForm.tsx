import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {AddIcon} from '../../../../icons/AddIcon';

import {createPrayerAction} from '../../../../store/actions';
import {Input} from '../../../../ui/Input';
import {Container} from './style';

type AddPrayerFormPropsType = {
  currentColumnId: number;
};

const AddPrayerForm: React.FC<AddPrayerFormPropsType> = ({currentColumnId}) => {
  const dispatch = useDispatch();
  const [prayerTitle, setPrayerTitle] = useState('');
  const addNewPrayer = () => {
    const newPrayer = {
      columnId: currentColumnId,
      title: prayerTitle,
      description: 'some desc',
      checked: false,
    };
    dispatch(createPrayerAction(newPrayer));
  };
  return (
    <Container>
      <Input
        onChangeText={setPrayerTitle}
        placeholder="Add prayer"
        value={prayerTitle}
        onIconPress={addNewPrayer}
        Icon={<AddIcon />}
      />
    </Container>
  );
};

export default AddPrayerForm;
