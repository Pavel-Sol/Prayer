import React, {useState} from 'react';
import {Comment} from '../../../../icons/Comment';
import {Input} from '../../../../ui/Input';
import {Container} from './style';

const AddCommentForm = () => {
  const [commentText, setCommentText] = useState('');
  const addNewComment = () => {
    console.log(commentText);
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
