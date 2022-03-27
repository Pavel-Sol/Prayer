import styled from 'styled-components';
import {View, Text, Image} from 'react-native';

export const Container = styled(View)`
  width: 100%;
  min-height: 100px;
  padding: 15px;
`;

export const Title = styled(Text)`
  text-transform: uppercase;
  color: rgba(114, 168, 188, 1);
  font-size: 13px;
`;

export const MemberList = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const ImgWrapper = styled(View)`
  width: 33px;
  height: 33px;
  margin-right: 7px;
`;

export const Avatar = styled(Image)`
  width: 33px;
  height: 33px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const AddMemberBtn = styled(View)`
  width: 33px;
  height: 33px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(191, 179, 147, 1);
  border-radius: 20px;
`;
