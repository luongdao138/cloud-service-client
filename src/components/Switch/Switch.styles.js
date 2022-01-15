import styled from 'styled-components';

export const Container = styled.label`
  position: relative;
`;

export const Input = styled.input`
  position: fixed;
  left: -9999px;
  top: -9999px;

  &:checked + span {
    background-color: #88d68f;
    &:before {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }
`;

export const Slider = styled.span`
  display: inline-flex;
  cursor: pointer;
  width: 45px;
  height: 25px;
  border-radius: 100px;
  background-color: rgb(221, 221, 221);
  position: relative;
  transition: all 0.2s;

  &:before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    border-radius: 45px;
    transition: all 0.2s;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0 0 0 / 0.1);
  }

  &:active::before {
    width: 28px;
  }
`;
