import React from 'react';
import {BtnText, BtnWrapper} from './style';

type MainBtnPropsType = {
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
};

const MainBtn: React.FC<MainBtnPropsType> = ({
  children,
  onPress,
  disabled,
}: MainBtnPropsType) => {
  return (
    <BtnWrapper onPress={onPress} disabled={disabled}>
      <BtnText>{children}</BtnText>
    </BtnWrapper>
  );
};

export default MainBtn;
