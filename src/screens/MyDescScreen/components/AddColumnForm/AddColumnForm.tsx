import React from 'react';
import {Form, Field} from 'react-final-form';
import {useDispatch} from 'react-redux';
import {AddIcon} from '../../../../icons';
import {createColumnAction} from '../../../../store/actions';

import {Input} from '../../../../ui/Input';
import {Container, IconBtn} from './style';

const AddColumnForm = () => {
  const dispatch = useDispatch();

  type ColumnValuesType = {
    title: string;
  };

  const handleSubmitColumn = (values: ColumnValuesType) => {
    const newColumn = {
      title: values.title,
      description: 'some desc',
    };

    dispatch(createColumnAction(newColumn));
    values.title = '';
  };
  return (
    <Container>
      <Form
        onSubmit={handleSubmitColumn}
        render={({form, values}) => (
          <>
            <Field name="title">
              {({input}) => (
                <Input
                  onChangeText={input.onChange}
                  value={input.value}
                  placeholder="Add column...">
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

export default AddColumnForm;
