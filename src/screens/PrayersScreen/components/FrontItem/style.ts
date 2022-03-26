import styled from 'styled-components';
import {View, Text, TouchableOpacity} from 'react-native';

export const RowBackWrapper = styled(View)`
  height: 68px;
  border-bottom-width: 2px;
  border-color: rgba(229, 229, 229, 1);
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RowFront = styled(View)`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-left-width: 2px;
  border-color: rgba(172, 82, 83, 1);
  padding-left: 10px;
  padding-right: 10px;
`;
export const RowFrontTitleWrapper = styled(TouchableOpacity)`
  flex: 1 0 auto;
`;

export const RowFrontTitle = styled(Text)<{
  isChecked?: boolean;
}>`
  ${props => (props.isChecked ? `text-decoration: line-through` : `none`)};
  font-size: 17px;
  color: #514d47;
`;

export const IconWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 17px;
`;
export const Counter = styled(Text)`
  margin-left: 3px;
`;
