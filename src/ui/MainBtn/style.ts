import styled from 'styled-components';
import {TouchableOpacity, Text} from 'react-native';

export const BtnWrapper = styled(TouchableOpacity)`
  width: 209px;
  height: 30px;
  border-radius: 15px;
  background-color: rgba(191, 179, 147, 1);
  align-items: center;
  justify-content: center;
`;

export const BtnText = styled(Text)`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
`;
