import React from 'react';
import {CommentItem} from '../CommentItem';
import {TitleWrapper, Title, CommentList} from './style';
const Comments = () => {
  return (
    <>
      <TitleWrapper>
        <Title>Comments</Title>
      </TitleWrapper>
      <CommentList>
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </CommentList>
    </>
  );
};

export default Comments;
