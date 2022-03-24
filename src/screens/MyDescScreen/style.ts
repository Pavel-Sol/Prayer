import styled from 'styled-components';
import {View, Text} from 'react-native';

export const Container = styled(View)`
  height: 100%;
  background-color: #ffffff;
  padding-horizontal: 15px;
  padding-vertical: 15px;
`;

export const ColumnItem = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 59px;
  border-width: 1px;
  border-color: #e5e5e5;
  border-radius: 4px;
  padding-horizontal: 15px;
  margin-bottom: 10px;
`;

export const ColumnItemText = styled(Text)`
  font-size: 17px;
  color: #514d47;
`;
