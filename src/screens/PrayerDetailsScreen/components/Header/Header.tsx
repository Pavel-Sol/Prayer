import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import {ArrowLeft} from '../../../../icons/ArrowLeft';
import {Palms} from '../../../../icons/Palms';
import {HeaderWrapper, TopRow, BottomRow, HeaderTitle} from './style';
import {PrayerType} from '../../../../types/types';

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
