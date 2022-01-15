import styled, { css } from 'styled-components';

export const ModalContainer = styled.div`
  inset: 0;
  position: fixed;
  z-index: 1000;
  background-color: rgba(0 0 0 / 30%);
  transition: all 0.25s ease-in-out;
  opacity: 0;
  visibility: hidden;
  overflow-x: hidden;
  overflow-y: auto;

  ${(props) =>
    props.open &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

export const Content = styled.div`
  width: 92%;
  max-width: 1150px;
  margin: 0 auto;
`;

export const SubmitButton = styled.button`
  width: 120px;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #00b2a3;
  text-align: center;
  padding: 0.5rem 0;
  border-radius: 4px;
  cursor: pointer;
  :disabled {
    opacity: 0.8;
  }
`;
