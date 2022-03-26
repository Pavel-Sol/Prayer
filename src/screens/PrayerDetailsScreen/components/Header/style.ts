import styled from 'styled-components';
import {View, Text} from 'react-native';

export const HeaderWrapper = styled(View)`
  width: 100%;
  min-height: 130px;
  background-color: rgba(191, 179, 147, 1);
  padding-horizontal: 15px;
  padding-vertical: 20px;
`;

export const TopRow = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BottomRow = styled(View)`
  width: 100%;
  margin-top: 17px;
`;

export const HeaderTitle = styled(Text)`
  font-size: 17px;
  color: #fff;
  font-weight: 600;
`;
