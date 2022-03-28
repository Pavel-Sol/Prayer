import styled from 'styled-components';
import {View, Image, Text, TouchableOpacity} from 'react-native';

export const Container = styled(View)`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: row;
  border-bottom-width: 2px;
  border-color: rgba(229, 229, 229, 1);
`;

export const AvatarWrapper = styled(View)`
  width: 43px;
  height: 43px;
  border-radius: 20px;
  margin-right: 9px;
`;

export const Avatar = styled(Image)`
  width: 43px;
  height: 43px;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
`;

export const CommentDesc = styled(View)`
  width: 100%;
`;

export const CommentDescTop = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const UserName = styled(Text)`
  font-size: 17px;
  font-weight: 500;
  color: #514d47;
  margin-right: 7px;
`;

export const Date = styled(Text)`
  padding-top: 5px;
  font-size: 13px;
  color: rgba(156, 156, 156, 1);
`;

export const CommentText = styled(Text)`
  margin-top: 5px;
  font-size: 17px;
  color: rgba(156, 156, 156, 1);
`;

export const IconBtn = styled(TouchableOpacity)`
  margin-horizontal: 10px;
`;
