import React from 'react';
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
          <Date>2 days ago</Date>
        </CommentDescTop>
        <CommentText>{commentData.body}</CommentText>
      </CommentDesc>
    </Container>
  );
};

export default CommentItem;
