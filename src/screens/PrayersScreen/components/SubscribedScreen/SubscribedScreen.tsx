import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {selectPrayers} from '../../../../store/selectors';
import {MainBtn} from '../../../../ui';
import {PrayerList} from '../PrayerList';
import {BtnWrapper, Container} from './style';

type SubscribedScreenPropsType = {
  columnId: number;
};

const SubscribedScreen: React.FC<SubscribedScreenPropsType> = ({columnId}) => {
  const prayers = useSelector(selectPrayers(columnId));

  const checkedPrayers = prayers.filter(elem => elem.checked === true);
  const nonCheckedPrayers = prayers.filter(elem => elem.checked === false);
  const [isShowCheckedPrayers, setIsShowCheckedPrayers] = useState(false);
  const toggleShowCheckedPrayers = () => {
    setIsShowCheckedPrayers(!isShowCheckedPrayers);
  };

  return (
    <Container>
      <ScrollView>
        <PrayerList prayerList={nonCheckedPrayers} isChecked={false} />
        {prayers.length > 0 && (
          <BtnWrapper>
            <MainBtn onPress={toggleShowCheckedPrayers}>
              {isShowCheckedPrayers
                ? 'hide Answered Prayers'
                : 'Show Answered Prayers'}
            </MainBtn>
          </BtnWrapper>
        )}
        {isShowCheckedPrayers && (
          <PrayerList prayerList={checkedPrayers} isChecked={true} />
        )}
      </ScrollView>
    </Container>
  );
};

export default SubscribedScreen;
