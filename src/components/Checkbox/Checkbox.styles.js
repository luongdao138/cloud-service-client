import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0 0 0 / 10%);
  padding: 0.3rem;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => (props.checked ? 'rgb(0,178,163)' : 'transparent')};
  cursor: pointer;
  border-radius: 4px;
  svg {
    transition: all 0.2s ease-in-out;
    font-size: 14px;
    color: ${(props) => (props.checked ? '#fff' : 'transparent')};
  }
`;
