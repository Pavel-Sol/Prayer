import React from 'react';
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
const CommentItem = () => {
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
        <CommentText>Hey, Hey!</CommentText>
      </CommentDesc>
    </Container>
  );
};

export default CommentItem;
