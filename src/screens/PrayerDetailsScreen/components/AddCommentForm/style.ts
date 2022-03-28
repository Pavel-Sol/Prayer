import styled from 'styled-components';
import {View, TouchableOpacity} from 'react-native';

export const Container = styled(View)`
  width: 100%;
  padding: 15px;
  min-height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconBtn = styled(TouchableOpacity)`
  margin-horizontal: 10px;
`;
