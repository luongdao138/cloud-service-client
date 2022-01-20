import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: #f5f5f7;
  padding: 2rem 0;

  .wrapper {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 25%);
    padding: 1rem;
    border-top: 3px solid #21b1ff;

    .title {
      color: #31313c;
      margin-bottom: 0.5rem;
      @media (min-width: 780px) {
        margin-bottom: 1rem;
      }
    }

    @media (min-width: 780px) {
      padding: 2rem;
    }

    .review-cloud {
      width: 100%;
      max-width: 600px;

      h3 {
        color: #31313c;
        margin-bottom: 0.5rem;
      }
    }

    .review-form {
      width: 100%;
      max-width: 600px;
      .submit-btn {
        min-width: 100px;
        font-size: 1rem;
        font-weight: 600;
        color: #fff;
        background-color: #00b2a3;
        margin-top: 1rem;
        text-align: center;
        padding: 0.5rem 0;
        border-radius: 4px;
      }

      .rating-label {
        font-size: 16px;
        line-height: 18px;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #31313c;
      }
      .ratings {
        svg {
          font-size: 1.5rem;
          color: rgb(242, 199, 26);
        }
      }
    }
  }
`;

export const Content = styled.div`
  width: 92%;
  max-width: 1150px;
  margin: 0 auto;
`;
