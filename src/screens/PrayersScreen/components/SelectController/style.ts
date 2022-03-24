import styled from 'styled-components';
import {View, TouchableOpacity, Text} from 'react-native';

export const Container = styled(View)`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Item = styled(TouchableOpacity)<{
  active?: boolean;
}>`
  flex: 0.5;
  border-bottom-width: 1px;
  ${props =>
    props.active
      ? `border-bottom-color: #72A8BC`
      : `border-bottom-color: rgba(200, 200, 200, 1)`};
`;

export const ItemTextWrap = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-vertical: 16px;
`;

export const ItemText = styled(Text)<{
  active?: boolean;
}>`
  ${props =>
    props.active ? `color: #72A8BC` : `color: rgba(200, 200, 200, 1)`};
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 600;
`;
