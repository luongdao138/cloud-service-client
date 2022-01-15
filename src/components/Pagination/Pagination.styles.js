import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  .limit-wrapper {
    margin-top: 0.5rem;
    position: relative;
    width: 100%;
    button.limit-btn {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.4rem 0.5rem;
      border: 1px solid #c3c3ca;
      background-color: transparent;
      border-radius: 4px;
      font-size: 1rem;
      :focus {
        box-shadow: 0 0 4px #21b1ff;
        border-color: #21b1ff;
      }
      svg {
        font-size: 1.5rem;
        color: #ccc;
      }
    }
    .menu {
      position: absolute;
      width: 100%;
      overflow: hidden;
      z-index: 10;
      border: 1px solid rgba(0 0 0 /30%);
      border-radius: 8px;
      background-color: #fff;
      top: 42px;
    }

    @media (min-width: 475px) {
      max-width: 225px;
    }
  }
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    .item {
      cursor: pointer;

      a {
        width: 36px;
        aspect-ratio: 1;
        display: block;
        box-sizing: border-box;
        display: flex;
        color: #116bf2;
        font-weight: 600;
        align-items: center;
        justify-content: center;
        border: 1px solid #dddde2;
        :hover {
          color: #333;
          background-color: rgba(0, 0, 0, 0.1);
        }
        svg {
          font-size: 20px;
        }

        @media (max-width: 475px) {
          width: 24px;
          font-size: 12px;
        }
      }

      &.disabled {
        display: none;
      }
      &.selected {
        a {
          color: #fff;
          background-color: #0593ff;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-end;
  }
  @media (max-width: 475px) {
    .limit-wrapper {
      width: 100%;
      button.limit-btn {
        font-size: 14px;
        padding: 0 0.5rem;
      }
    }
  }
`;

// #116bf2
export const LimitItem = styled.li`
  padding: 0.5rem;
  cursor: pointer;
  width: 100%;
  :hover {
    color: #fff;
    background-color: #21b1ff;
  }

  ${(props) =>
    props.active &&
    css`
      color: #fff;
      background-color: #21b1ff;
    `}
`;
