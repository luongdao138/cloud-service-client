import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 25%);
  padding: 1rem;
  border-top: 3px solid #21b1ff;

  .top {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    .avatar {
      width: 90px;
      aspect-ratio: 1;
      object-fit: contain;
      margin-right: 0.75rem;
      font-size: 1.5rem;
      line-height: 28px;
      color: #31313c;
    }
    .info {
      flex-grow: 1;
      .name {
        display: block;
        font-size: 1.5rem;
        font-weight: 600;
        color: #31313c;
        &:hover {
          color: #21b1ff;
          text-decoration: underline;
        }
      }
    }

    @media (max-width: 475px) {
      .avatar {
        width: 50px;
      }

      .info {
        .name {
          font-size: 1.2rem;
        }
        span {
          font-size: 14px;
          line-height: 24px;
        }
      }
    }
  }

  .bottom {
    .rating-skeleton {
      width: 65%;
    }
    .number {
      :hover {
        text-decoration: underline;
      }
    }
    @media (max-width: 475px) {
      .rating-skeleton {
        width: 100%;
      }
    }
    .overview {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;

      .average {
        font-weight: 700;
        font-size: 1rem;
      }

      .stars {
        margin: 0 0.5rem;
        display: flex;
        align-items: center;
        svg {
          color: rgb(242, 199, 26);
        }
      }

      .number {
        color: #21b1ff;
        font-weight: 500;
      }
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    .top,
    .bottom {
      flex: 1;
      margin-bottom: 0;
    }
  }
`;
