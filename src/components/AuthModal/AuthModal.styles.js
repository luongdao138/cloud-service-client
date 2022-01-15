import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 64px);
  overflow: auto;
  padding-left: 8px;
  padding-right: 8px;
  z-index: 1060;
  margin: 10px;
  position: relative;
  width: auto;
`;

export const Content = styled.div`
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  box-shadow: 0 3px 9px rgb(0 0 0 / 50%);
  outline: 0;
  position: relative;
  transition: all 0.25s ease-in-out;

  opacity: 0;
  visibility: hidden;
  transform: translateY(-150px);

  ${(props) =>
    props.open &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    `}

  .close-icon {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }

  @media (min-width: 650px) {
    max-width: 450px;
    margin: auto;
  }
`;
