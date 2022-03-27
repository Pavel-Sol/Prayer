import React from 'react';
import {StyleProp, TextInputProps, ViewStyle} from 'react-native';

import {AddBtn, Container, StyledInput} from './style';

type InputPropsType = {
  containerStyle? : StyleProp<ViewStyle>
  Icon?: React.ReactNode;
  onIconPress?: () => void;
} & TextInputProps;

const Input: React.FC<InputPropsType> = props => {
  return (
    <Container style={props.containerStyle}>
      {props.Icon ? (
        <AddBtn onPress={props.onIconPress}>{props.Icon}</AddBtn>
      ) : null}
      <StyledInput {...props} />
    </Container>
  );
};

export default Input;
