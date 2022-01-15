import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Item = styled.div`
  width: 100%;
  max-width: 320px;
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
  span {
    font-size: 14px;
    color: #333;
    font-weight: 500;
  }
  div {
    margin: 0 0.5rem;
    flex-grow: 1;
    height: 8px;
    border-radius: 40px;
    position: relative;
    background-color: rgba(0, 0, 0, 0.05);

    &::after {
      border-radius: 40px;
      content: '';
      background-color: #21b1ff;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: ${(props) => `${props.percent}%`};
    }
  }

  @media (min-width: 780px) {
    ${(props) =>
      props.big &&
      css`
        width: 100%;
        max-width: 400px;
        margin-bottom: 0.6rem;
        span {
          font-size: 1rem;
        }
        div {
          height: 12px;
        }
      `}
  }
`;
