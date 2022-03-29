import styled from 'styled-components';
import {View, Text} from 'react-native';

export const Container = styled(View)`
  width: 100%;
  height: 60px;
  background-color: rgb(236, 134, 51);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-vertical: 30px;
  border-radius: 7px;
`;

export const ErrorMsg = styled(Text)`
  font-size: 15px;
  color: #fff;
  font-weight: 600;
`;
