import React from 'react';
import {format} from 'timeago.js';
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
} from './style';

type CommentItemPropsType = {
  commentData: CommentType;
};
const CommentItem: React.FC<CommentItemPropsType> = ({commentData}) => {
  return (
    <Container>
      <AvatarWrapper>
        <Avatar source={require('./../../../../assets/images/ava3.jpg')} />
      </AvatarWrapper>
      <CommentDesc>
        <CommentDescTop>
          <UserName>Anna Barber</UserName>
          <Date>{format(commentData.created)}</Date>
        </CommentDescTop>
        <CommentText>{commentData.body}</CommentText>
      </CommentDesc>
    </Container>
  );
};

export default CommentItem;
