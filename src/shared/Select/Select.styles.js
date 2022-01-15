import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .label {
    font-size: 16px;
    line-height: 18px;
    font-weight: 600;
    color: #31313c;
  }

  .select {
    &__control {
      width: 100%;
      border: 1px solid #c3c3ca;
      border-radius: 3px;
      box-shadow: none;
      color: #151521;
      font-size: 16px;
      font-weight: 500;
      height: 36px;
      letter-spacing: -0.6px;
      line-height: 1.5;
      display: flex;
      align-items: center;
      &--is-focused {
        box-shadow: 0 0 2px #2ab0fc;
        border-color: #2ab0fc;

        svg {
          transform: rotate(180deg);
        }
      }
    }
    &__indicator-separator {
      display: none;
    }

    &__placeholder {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      svg {
        font-size: 1.25rem;
        color: rgba(0 0 0 / 0.25);
        transition: all 0.2s ease-in-out;
      }
    }

    &__menu {
      border: 1px solid #c3c3ca;
      border-radius: 3px;
      box-shadow: 0 3px 4px 0 rgb(0 0 0 / 20%);
      background-color: #fff;
    }

    &__option {
      padding: 4px 8px;
      font-size: 14px;
      color: #31313c;
      transition: all 0.1s ease-in-out;
      &:hover,
      &--is-selected,
      &--is-focused {
        background-color: #21b1ff;
        color: #fff;
      }
    }
  }
`;
