import styled from 'styled-components';
import {View, ScrollView, Text} from 'react-native';

export const Content = styled(ScrollView)`
  background-color: #fff;
  width: 100%;
`;

export const LastPrayedWrapper = styled(View)`
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 10px;
`;

export const LastPrayed = styled(Text)`
  font-size: 17px;
  color: #000;
`;
export const Decor = styled(View)`
  height: 24px;
  width: 2px;
  background-color: rgba(172, 82, 83, 1);
  margin-right: 10px;
`;
