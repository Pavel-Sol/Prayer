import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCommentsAction} from '../../../../store/actions';
import {selectComments} from '../../../../store/selectors';

import {CommentItem} from '../CommentItem';
import {TitleWrapper, Title, CommentList} from './style';

type CommentsPropsType = {
  prayerId: number;
};
const Comments: React.FC<CommentsPropsType> = ({prayerId}) => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments(prayerId));

  useEffect(() => {
    dispatch(getCommentsAction());
  }, []);
  return (
    <>
      <TitleWrapper>
        <Title>Comments</Title>
      </TitleWrapper>
      <CommentList>
        {comments.map(comment => {
          return (
            <View key={comment.id}>
              <CommentItem commentData={comment} />
            </View>
          );
        })}
      </CommentList>
    </>
  );
};

export default Comments;
