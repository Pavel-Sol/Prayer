import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import {ArrowLeft, Palms} from '../../../../icons';
import {HeaderWrapper, TopRow, BottomRow, HeaderTitle} from './style';

type HeaderPropsType = {
  title: string;
};
const Header: React.FC<HeaderPropsType> = ({title}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <HeaderWrapper>
      <TopRow>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft fill="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Palms fill="#fff" />
        </TouchableOpacity>
      </TopRow>
      <BottomRow>
        <HeaderTitle>{title}</HeaderTitle>
      </BottomRow>
    </HeaderWrapper>
  );
};

export default Header;
