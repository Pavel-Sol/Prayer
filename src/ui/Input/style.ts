import {View, TextInput} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50px;
  border-width: 1px;
  border-radius: 10px;
  border-color: #e5e5e5;
  padding-horizontal: 5px;
  margin-bottom: 16px;
`;

export const StyledInput = styled(TextInput)`
  font-size: 17px;
  width: 90%;
`;
