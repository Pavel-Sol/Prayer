import React from 'react';
import {Form, Field} from 'react-final-form';
import {useDispatch} from 'react-redux';

import {Comment} from '../../../../icons';
import {createCommentAction} from '../../../../store/actions';
import {Input} from '../../../../ui';
import {Container, IconBtn} from './style';

type AddCommentFormPropsType = {
  prayerId: number;
};

const AddCommentForm: React.FC<AddCommentFormPropsType> = ({prayerId}) => {
  const dispatch = useDispatch();

  type CommentValuesType = {
    text: string;
  };
  const handleSubmitComment = (values: CommentValuesType) => {
    const newComment = {
      body: values.text,
      prayerId: prayerId,
    };
    dispatch(createCommentAction(newComment));
    values.text = '';
  };

  return (
    <Container>
      <Form
        onSubmit={handleSubmitComment}
        render={({form, values}) => (
          <>
            <Field name="text">
              {({input}) => (
                <Input
                  containerStyle={{borderWidth: 0}}
                  onChangeText={input.onChange}
                  value={input.value}
                  placeholder="Add comment...">
                  <IconBtn onPress={form.submit} disabled={!values.text}>
                    <Comment />
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

export default AddCommentForm;
