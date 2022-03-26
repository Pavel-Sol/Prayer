import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Palms} from '../../../../icons/Palms';
import {User} from '../../../../icons/User';
import {PrayerType} from '../../../../types/types';
import {
  Counter,
  IconWrapper,
  RowBackWrapper,
  RowFrontTitle,
  RowFrontTitleWrapper,
} from './style';
import {RowFront} from './style';

type FrontItemPropsType = {
  data: PrayerType;
};

const FrontItem: React.FC<FrontItemPropsType> = ({data}) => {
  // console.log(data);
  return (
    <RowBackWrapper>
      <RowFront>
        <BouncyCheckbox
          style={{borderRadius: 2}}
          isChecked={true}
          size={22}
          iconStyle={{
            borderColor: 'rgba(81, 77, 71, 1)',
            borderRadius: 4,
          }}
          fillColor="rgba(81, 77, 71, 1)"
        />

        <RowFrontTitleWrapper
          onPress={() => console.log('переход к DetailScreen')}>
          <RowFrontTitle>{data.title}</RowFrontTitle>
        </RowFrontTitleWrapper>
        <IconWrapper>
          <User />
          <Counter>5</Counter>
        </IconWrapper>
        <IconWrapper>
          <Palms />
          <Counter>123</Counter>
        </IconWrapper>
      </RowFront>
    </RowBackWrapper>
  );
};

export default FrontItem;
