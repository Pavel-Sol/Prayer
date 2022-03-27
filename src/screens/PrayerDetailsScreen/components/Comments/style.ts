import styled from 'styled-components';
import {View, Text} from 'react-native';

export const TitleWrapper = styled(View)`
  width: 100%;
  padding-left: 15px;
`;

export const Title = styled(Text)`
  text-transform: uppercase;
  color: rgba(114, 168, 188, 1);
  font-size: 13px;
  margin-bottom: 15px;
`;

export const CommentList = styled(View)`
  width: 100%;
  border-top-width: 2px;
  border-color: rgba(229, 229, 229, 1);
`;
