import React from 'react';
import {Container, Item, ItemText, ItemTextWrap} from './style';

type SelectControllerPropsType = {
  OnSelectPrayersMode: (mode: 'MY_PRAYERS' | 'SUBSCRIBED') => void;
  mode: 'MY_PRAYERS' | 'SUBSCRIBED';
};
const SelectController: React.FC<SelectControllerPropsType> = ({
  mode,
  OnSelectPrayersMode,
}) => {
  return (
    <Container>
      <Item
        active={mode === 'MY_PRAYERS'}
        onPress={() => OnSelectPrayersMode('MY_PRAYERS')}>
        <ItemTextWrap>
          <ItemText active={mode === 'MY_PRAYERS'}>My prayers</ItemText>
        </ItemTextWrap>
      </Item>
      <Item
        active={mode === 'SUBSCRIBED'}
        onPress={() => OnSelectPrayersMode('SUBSCRIBED')}>
        <ItemTextWrap>
          <ItemText active={mode === 'SUBSCRIBED'}>Subscribed</ItemText>
        </ItemTextWrap>
      </Item>
    </Container>
  );
};

export default SelectController;
