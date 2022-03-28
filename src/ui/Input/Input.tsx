import React from 'react';
import {StyleProp, TextInputProps, TextStyle, ViewStyle} from 'react-native';

import {Container, StyledInput} from './style';

type InputPropsType = {
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
} & TextInputProps;

const Input: React.FC<InputPropsType> = ({children, ...props}) => {
  return (
    <Container style={props.containerStyle}>
      {children}
      <StyledInput {...props} />
    </Container>
  );
};

export default Input;
