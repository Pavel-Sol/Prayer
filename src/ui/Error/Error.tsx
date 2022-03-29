import React from 'react';
import {Container, ErrorMsg} from './style';

type ErrorPropsType = {
  error: string;
};
const Error: React.FC<ErrorPropsType> = ({error}) => {
  return (
    <Container>
      <ErrorMsg>{error}</ErrorMsg>
    </Container>
  );
};

export default Error;
