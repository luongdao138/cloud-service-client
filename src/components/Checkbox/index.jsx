import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { Container } from './Checkbox.styles';

const Checkbox = ({ checked, handleClick }) => {
  return (
    <Container onClick={handleClick} checked={checked}>
      <FaCheck />
    </Container>
  );
};

export default Checkbox;
