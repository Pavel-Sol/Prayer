import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Comment} from '../../../../icons/Comment';
import {createCommentAction} from '../../../../store/actions';
import {Input} from '../../../../ui/Input';
import {Container} from './style';

type AddCommentFormPropsType = {
  prayerId: number;
};

const AddCommentForm: React.FC<AddCommentFormPropsType> = ({prayerId}) => {
  const [commentText, setCommentText] = useState('');
  const dispatch = useDispatch();

  const addNewComment = () => {
    const newComment = {
      body: commentText,
      prayerId: prayerId,
    };
    dispatch(createCommentAction(newComment));
    setCommentText('');
  };
  return (
    <Container>
      <Input
        containerStyle={{borderWidth: 0}}
        onChangeText={setCommentText}
        placeholder="Add comment..."
        value={commentText}
        onIconPress={addNewComment}
        Icon={<Comment />}
      />
    </Container>
  );
};

export default AddCommentForm;
