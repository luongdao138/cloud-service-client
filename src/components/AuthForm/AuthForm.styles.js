import styled from 'styled-components';

export const Container = styled.div`
  .submit-btn {
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    background-color: #00b2a3;
    text-align: center;
    padding: 0.5rem;
    border-radius: 4px;
    margin-bottom: 1.25rem;
    :disabled {
      opacity: 0.8;
    }
  }

  .footer {
    text-align: center;
    font-size: 14px;
    color: #65656f;
    line-height: 18px;
  }

  .message {
    line-height: 1.5rem;
    font-size: 16px;
    color: #31313c;
    margin-bottom: 1rem;
  }

  a {
    color: #116bf2;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const Tooltip = styled.div`
  .tooltip-header {
    padding: 1rem;
    background-color: rgba(0 0 0 / 0.03);
    border-bottom: 1px solid rgba(0 0 0 / 0.05);
  }

  .tooltip-desc {
    padding: 1rem;
  }
`;
