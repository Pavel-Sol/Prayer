import React from 'react';
import {BtnText, BtnWrapper} from './style';

type ButtonPropsType = {
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonPropsType> = ({
  children,
  onPress,
  disabled,
}: ButtonPropsType) => {
  return (
    <BtnWrapper onPress={onPress} disabled={disabled}>
      <BtnText>{children}</BtnText>
    </BtnWrapper>
  );
};

export default Button;
