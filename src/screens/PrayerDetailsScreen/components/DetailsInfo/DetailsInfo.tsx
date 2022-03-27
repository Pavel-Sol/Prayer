import React from 'react';
import {
  DetailRow,
  Container,
  DetailItem,
  DetailData,
  DetailDesc,
  DetailLink,
  DetailCount,
} from './style';
const DetailsInfo = () => {
  return (
    <Container>
      <DetailRow
        style={{borderBottomWidth: 2, borderColor: 'rgba(229, 229, 229, 1)'}}>
        <DetailItem
          style={{
            borderRightWidth: 2,
            borderColor: 'rgba(229, 229, 229, 1)',
            paddingTop: 32,
          }}>
          <DetailData>July 25 2017</DetailData>
          <DetailDesc>Date Added</DetailDesc>
          <DetailLink>Opened for 4 days</DetailLink>
        </DetailItem>
        <DetailItem>
          <DetailCount>123</DetailCount>
          <DetailDesc>Times Prayed Total</DetailDesc>
        </DetailItem>
      </DetailRow>
      <DetailRow>
        <DetailItem
          style={{borderRightWidth: 2, borderColor: 'rgba(229, 229, 229, 1)'}}>
          <DetailCount>63</DetailCount>
          <DetailDesc>Times Prayed Total</DetailDesc>
        </DetailItem>
        <DetailItem>
          <DetailCount>60</DetailCount>
          <DetailDesc>Times Prayed Total</DetailDesc>
        </DetailItem>
      </DetailRow>
    </Container>
  );
};

export default DetailsInfo;
