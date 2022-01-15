import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  justify-content: space-between;

  .delete-modal {
    inset: 0;
    position: fixed;
    z-index: 100;
    background: rgba(0, 0, 0, 0.4);
  }
  .content {
    position: fixed;
    z-index: 2000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 8px;
    padding: 1rem;

    .btn-container {
      margin-top: 1.5rem;
      display: flex;
      justify-content: flex-end;
      button {
        min-width: 80px;
        font-size: 1rem;
        font-weight: 600;
        color: #fff;
        background-color: #00b2a3;
        text-align: center;
        padding: 0.4rem;
        border-radius: 4px;
        :disabled {
          opacity: 0.8;
        }
      }

      .cancel-btn {
        color: #000;
        background: transparent;
      }
    }
  }

  .left {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 64px;
      aspect-ratio: 1;
      object-fit: contain;
    }

    .info {
      .name {
        font-size: 19px;
        line-height: 1.5rem;
        font-weight: 600;
        color: #31313c;
        margin-bottom: 0.5rem;
      }
      .stars {
        display: flex;
        align-items: center;
        svg {
          color: rgb(242, 199, 26);
        }
      }
    }
  }

  .right {
    position: relative;
    .action-btn {
      display: block;
      display: flex;
      align-items: center;
      gap: 0.2rem;
      color: #31313c;
      border-radius: 4px;
      padding: 0.5rem 1rem;
      font-weight: 600;
      font-size: 1rem;
      background-color: #f5f5f7;
      border: 1px solid rgba(0 0 0 / 0.1);
    }

    .action-menu {
      position: absolute;
      padding: 0.5rem 0;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 3px 4px 0 rgb(0 0 0 / 20%);
      right: 0;
      width: 240px;
      z-index: 10;

      div.action-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.35rem 1rem;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        color: #4a4a54;
        :hover {
          background-color: #21b1ff;
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 475px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    .right {
      .action-btn {
        font-size: 14px;
        padding: 0.25rem 0.5rem;
      }
      .action-menu {
        left: 0;
        right: auto;
      }
    }
    .left {
      .info {
        .name {
          font-size: 16px;
          margin-bottom: 0.25rem;
        }
      }
    }
  }

  @media (min-width: 780px) {
    max-width: 780px;
  }

  & + & {
    border-top: 1px solid rgba(0 0 0 / 0.15);
  }
`;
