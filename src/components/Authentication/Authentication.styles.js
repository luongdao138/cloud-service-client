import styled, { css } from 'styled-components';

export const Container = styled.div`
  .header {
    background-color: ${(props) => (!props.authPage ? 'rgb(236, 244, 255)' : '#fff')};
    padding-top: ${(props) => (!props.authPage ? '2rem' : '0')};
    .title {
      font-size: 1.5rem;
      line-height: 28px;
      color: #31313c;
      text-align: center;
      margin-bottom: 1.5rem;
      padding: 0 1rem;
    }

    .mode-container {
      /* display: flex;
      flex-direction: column; */
      @media (min-width: 780px) {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
      }
    }
  }
  .main {
    padding: ${(props) => (props.authPage ? '1rem' : '2rem')};
  }

  .main-linkedin {
    .linkedin-button {
      width: 100%;
      background-color: #0078b7;
      border-radius: 4px;
      font-size: 1rem;
      color: #fff;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.6rem 0;

      svg {
        color: #fff;
        font-size: 28px;
        margin-right: 0.5rem;
      }
    }

    .footer {
      margin-top: 1.5rem;
      font-size: 14px;
      line-height: 18px;
      color: #65656f;

      a {
        color: #116bf2;
        margin: 0 0.25rem;
      }
    }
  }

  @media (max-width: 475px) {
    .header {
      .title {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }
    }

    .main-linkedin {
      .linkedin-button {
        font-size: 14px;
        svg {
          font-size: 22px;
        }
      }
      .footer {
        font-size: 12px;
      }
    }

    .main {
      padding: 1.5rem 1rem;
    }
  }
`;

export const ModeItem = styled.button`
  width: 100%;
  background-color: transparent;
  text-align: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(0 0 0 / 0.05);
  color: #31313c;
  font-size: 1rem;
  font-weight: 600;
  border-left: 4px solid transparent;
  transition: all 0.25s ease-in-out;

  ${(props) =>
    props.active &&
    css`
      border-left-color: rgb(33, 177, 255);
    `}

  @media (min-width: 780px) {
    width: auto;
    border-left: none;
    padding-left: 2rem;
    padding-right: 2rem;
    border-bottom: 4px solid transparent;

    ${(props) =>
      props.active &&
      css`
        border-bottom-color: rgb(33, 177, 255);
      `}
  }
`;
