import styled from 'styled-components';
import {View, Text} from 'react-native';

export const RowBack = styled(View)`
  background-color: red;
  height: 68px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 26px;
`;

export const RowBackText = styled(Text)`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;
