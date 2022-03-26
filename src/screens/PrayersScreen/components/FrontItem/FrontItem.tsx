import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch} from 'react-redux';
import {Palms} from '../../../../icons/Palms';
import {User} from '../../../../icons/User';
import {updatePrayerAction} from '../../../../store/actions';
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
  isChecked: boolean;
};

const FrontItem: React.FC<FrontItemPropsType> = ({data, isChecked}) => {
  // console.log('data!!!', data);
  const dispatch = useDispatch();

  const handleCheckBox = () => {
    const updatedPrayer = {
      id: data.id,
      title: data.title,
      description: data.description,
      checked: !data.checked,
    };

    dispatch(updatePrayerAction(updatedPrayer));
  };
  return (
    <RowBackWrapper>
      <RowFront>
        <BouncyCheckbox
          onPress={handleCheckBox}
          style={{borderRadius: 2}}
          isChecked={data.checked}
          size={22}
          iconStyle={{
            borderColor: 'rgba(81, 77, 71, 1)',
            borderRadius: 4,
          }}
          fillColor="rgba(81, 77, 71, 1)"
        />

        <RowFrontTitleWrapper
          onPress={() => console.log('переход к DetailScreen')}>
          <RowFrontTitle isChecked={isChecked}>{data.title}</RowFrontTitle>
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
