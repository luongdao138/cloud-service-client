import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  label {
    font-size: 16px;
    line-height: 18px;
    font-weight: 600;
    color: #31313c;
  }

  .control-container {
    position: relative;
    textarea {
      width: 100%;
      border: 1px solid #c3c3ca;
      border-radius: 3px;
      box-shadow: none;
      color: #151521;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.6px;
      line-height: 1.5;
      transition: all 0.2s ease-in-out;
      padding: 8px;
      resize: none;
      &:focus {
        box-shadow: 0 0 2px #2ab0fc;
        border-color: #2ab0fc;
        & + .tooltip-container {
          --scale: 1;
          &::after {
            --scale: 1;
          }
        }
      }
    }
    .tooltip-container {
      --bg-color: #fff;
      --scale: 0;
      --border-color: rgba(0 0 0 / 0.2);
      position: absolute;
      z-index: 10;
      top: calc(-0.5rem - 10px);
      transform: translateX(-50%) translateY(-100%) scale(var(--scale));
      left: 50%;
      width: max-content;
      max-width: 300px;
      border-radius: 4px;
      transition: all 0.15s ease-in-out;
      transform-origin: bottom center;
      border: 1px solid var(--border-color);
      box-shadow: 0 3px 5px var(--border-color);
      background-color: var(--bg-color);
      color: #151521;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  .tooltip-container::after {
    --scale: 1;
    --border-size: 13px;

    position: absolute;
    content: '';
    left: 50%;
    transform: translateX(-50%) translateY(-100%) scale(var(--scale));
    border: var(--border-size) solid transparent;
    border-top-color: rgba(0 0 0 / 0.1);
    bottom: calc(-4 * var(--border-size));
  }

  .error-message {
    font-size: 12px;
    font-weight: 600;
    color: red;
    line-height: 18px;
    margin-top: -3px;
  }

  ${(props) =>
    props.error &&
    css`
      label {
        color: #ed3755;
      }
      .control-container {
        input {
          border-color: #ed3755;
          :focus {
            border-color: #ed3755;
            box-shadow: 0 0 2px #ed3755;
          }
        }
      }
    `}
`;
