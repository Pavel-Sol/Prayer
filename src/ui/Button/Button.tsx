import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

type ButtonPropsType = {
  children: React.ReactNode;
  // label: 'text';
  onPress?: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonPropsType> = ({
  children,
  onPress,
  disabled,
}: // label,
ButtonPropsType) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={styles.btn}>
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 209,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(191, 179, 147, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnText: {
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
  },
});

export default Button;
