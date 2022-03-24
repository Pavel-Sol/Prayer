import styled from 'styled-components';
import {View} from 'react-native';

export const RowFront = styled(View)`
  background-color: green;
  height: 40px;
`;

export const RowBack = styled(View)`
  background-color: red;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
