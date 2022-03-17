import React from 'react';
import {TouchableOpacity} from 'react-native';

type ButtonPropsType = {
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonPropsType> = ({
  onPress,
  children,
  disabled,
}: ButtonPropsType) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
