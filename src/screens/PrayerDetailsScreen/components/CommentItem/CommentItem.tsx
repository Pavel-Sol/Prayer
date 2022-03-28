import React, {useState} from 'react';
import {format} from 'timeago.js';
import {Form, Field} from 'react-final-form';

import {CommentType} from '../../../../types/types';
import {
  Container,
  AvatarWrapper,
  Avatar,
  CommentDesc,
  UserName,
  Date,
  CommentText,
  CommentDescTop,
  IconBtn,
  DeleteBtnWrap,
  DeleteBtn,
} from './style';
import {Input} from '../../../../ui/Input';
import {TouchableOpacity, View} from 'react-native';
import {Comment} from '../../../../icons/Comment';
import {useDispatch} from 'react-redux';
import {
  updateCommentAction,
  deleteCommentAction,
} from '../../../../store/actions';

type CommentItemPropsType = {
  commentData: CommentType;
};

type CommentValuesType = {
  body: string;
};

const CommentItem: React.FC<CommentItemPropsType> = ({commentData}) => {
  const [isChangeComment, setIsChangeComment] = useState(false);
  const dispatch = useDispatch();

  const handleSubmitComment = (values: CommentValuesType) => {
    dispatch(updateCommentAction({body: values.body, id: commentData.id}));
  };

  const handleDelete = () => {
    dispatch(deleteCommentAction(commentData.id));
  };

  return (
    <Container>
      {isChangeComment ? (
        <Form
          initialValues={{body: commentData.body}}
          onSubmit={handleSubmitComment}
          render={({form, values}) => (
            <>
              <Field name="body">
                {({input}) => (
                  <Input
                    containerStyle={{
                      borderWidth: 0,
                    }}
                    onChangeText={input.onChange}
                    value={input.value}>
                    <IconBtn
                      onPress={() => {
                        form.submit();
                        setIsChangeComment(false);
                      }}
                      disabled={!values.body}>
                      <Comment />
                    </IconBtn>
                  </Input>
                )}
              </Field>
            </>
          )}
        />
      ) : (
        <>
          <AvatarWrapper>
            <Avatar source={require('./../../../../assets/images/ava3.jpg')} />
          </AvatarWrapper>
          <CommentDesc>
            <CommentDescTop>
              <UserName>Anna Barber</UserName>
              <Date>{format(commentData.created)}</Date>
              <DeleteBtnWrap onPress={handleDelete}>
                <DeleteBtn>удалить</DeleteBtn>
              </DeleteBtnWrap>
            </CommentDescTop>
            <TouchableOpacity onPress={() => setIsChangeComment(true)}>
              <CommentText>{commentData.body}</CommentText>
            </TouchableOpacity>
          </CommentDesc>
        </>
      )}
    </Container>
  );
};

export default CommentItem;
