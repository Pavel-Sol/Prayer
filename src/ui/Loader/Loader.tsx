import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Container} from './style';

const Loader = () => {
  return (
    <Container>
      <ActivityIndicator size="large" />
    </Container>
  );
};

export default Loader;
