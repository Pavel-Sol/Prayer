import React from 'react';
import {TextInputProps} from 'react-native';

import AddIcon from '../../icons/AddIcon/AddIcon';
import {AddBtn, Container, StyledInput} from './style';

type InputPropsType = {
  isIconLeft?: boolean;
  onIconPress?: () => void;
} & TextInputProps;

const Input: React.FC<InputPropsType> = props => {
  return (
    <Container>
      {props.isIconLeft ? (
        <AddBtn onPress={props.onIconPress}>
          <AddIcon />
        </AddBtn>
      ) : null}
      <StyledInput {...props} />
    </Container>
  );
};

export default Input;
