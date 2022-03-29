import React from 'react';
import {Form, Field} from 'react-final-form';
import {useDispatch} from 'react-redux';
import {AddIcon} from '../../../../icons/AddIcon';

import {createPrayerAction} from '../../../../store/actions';
import {Input} from '../../../../ui/Input';
import {Container, IconBtn} from './style';

type AddPrayerFormPropsType = {
  columnId: number;
};

const AddPrayerForm: React.FC<AddPrayerFormPropsType> = ({columnId}) => {
  const dispatch = useDispatch();

  type PrayerValuesType = {
    title: string;
  };

  const handleSubmitPrayer = (values: PrayerValuesType) => {
    const newPrayer = {
      columnId: columnId,
      title: values.title,
      description: 'some desc',
      checked: false,
    };
    dispatch(createPrayerAction(newPrayer));
    values.title = '';
  };
  return (
    <Container>
      <Form
        onSubmit={handleSubmitPrayer}
        render={({form, values}) => (
          <>
            <Field name="title">
              {({input}) => (
                <Input
                  onChangeText={input.onChange}
                  value={input.value}
                  placeholder="Add prayer...">
                  <IconBtn onPress={form.submit} disabled={!values.title}>
                    <AddIcon />
                  </IconBtn>
                </Input>
              )}
            </Field>
          </>
        )}
      />
    </Container>
  );
};

export default AddPrayerForm;
