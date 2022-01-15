import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 25%);
  padding: 1rem;
  border-top: 3px solid #21b1ff;

  .top {
    display: flex;
    flex-direction: column;

    .avatar {
      display: flex;
      justify-content: center;
      margin-bottom: 0.5rem;
      img {
        aspect-ratio: 1;
        object-fit: contain;
        box-shadow: inset 0 0 0 1px #dddde2;
        width: 100px;
        padding: 6px;
        border: 0.5px solid rgb(0 0 0 / 5%);
        border-radius: 4px;
      }
    }
    .info {
      color: #31313c;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: center;
      gap: 0.5rem;
      .skeleton-container {
        width: 100%;
        span {
          margin-bottom: 0.5rem;
          height: 16px;
          width: 100%;
          max-width: 400px;
        }
      }
      .name {
        font-size: 2.1rem;
        line-height: 40px;
      }
      .overview {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        .average {
          font-weight: 700;
          font-size: 1.2rem;
        }
        .number {
          color: #21b1ff;
          font-weight: 500;
        }
        .stars {
          display: flex;
          gap: 0.1rem;
          align-items: center;
          svg {
            color: rgb(242, 199, 26);
          }
        }
      }
      .write-review {
        display: flex;
        align-items: center;
        font-size: 1rem;
        font-weight: 600;
        color: #116bf2;
        svg {
          margin-right: 0.5rem;
          font-size: 1.5rem;
        }
      }
      .vendor {
        margin-top: 0.75rem;
        width: 100%;
        padding: 0.75rem;
        background-color: #e8ebf7;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 0.2rem;
        border-radius: 4px;
        a {
          color: #116bf2;
          :hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .bottom {
    margin-top: 1.5rem;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 475px) {
    .top {
      .avatar {
        margin-bottom: 1rem;
      }
      .info {
        .name {
          font-size: 1.5rem;
          line-height: 28px;
        }
        .vendor {
          font-size: 14px;
        }
      }
    }
  }

  @media (min-width: 780px) {
    .top {
      flex-direction: row;
      align-items: flex-start;
      gap: 1rem;
      .avatar {
        img {
          padding: 10px;
          width: 120px;
        }
      }
      .info {
        display: block;
        .name,
        .overview {
          margin-bottom: 0.25rem;
        }
        .vendor {
          display: block;
          padding: 0;
          background-color: transparent;
          a {
            margin-left: 0.25rem;
          }
        }
      }
    }
    .bottom {
      & > div {
        align-items: flex-start;
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;
