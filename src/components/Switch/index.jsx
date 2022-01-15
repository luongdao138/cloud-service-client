import React from 'react';
import { Container, Input, Slider } from './Switch.styles';

const Switch = ({ onChange }) => {
  return (
    <Container>
      <Input type='checkbox' onChange={onChange} />
      <Slider />
    </Container>
  );
};

export default Switch;
