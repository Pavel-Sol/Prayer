import styled from 'styled-components';
import {View, Text} from 'react-native';

export const Container = styled(View)`
  width: 100%;
  min-height: 216px;
  border-bottom-width: 2px;
  border-top-width: 2px;
  border-color: rgba(229, 229, 229, 1);
`;

export const DetailRow = styled(View)`
  width: 100%;
  height: 108px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DetailItem = styled(View)`
  height: 100%;
  flex: 50%;
  padding-top: 26px;
  padding-left: 15px;
`;

export const DetailData = styled(Text)`
  color: #bfb393;
  font-size: 22px;
  line-height: 26px;
`;

export const DetailDesc = styled(Text)`
  font-size: 13px;
  color: rgba(81, 77, 71, 1);
`;

export const DetailLink = styled(Text)`
  font-size: 13px;
  color: rgba(114, 168, 188, 1);
`;

export const DetailCount = styled(Text)`
  font-size: 32px;
  color: rgba(191, 179, 147, 1);
`;
