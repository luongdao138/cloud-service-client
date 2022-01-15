import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  padding: 2rem 0;
  .content {
    max-width: 1000px;
  }
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;
    span {
      font-size: 1.5rem;
      line-height: 1.5rem;
      color: #31313c;
    }
    strong {
      color: #d1287a;
      font-size: 28px;
      line-height: 36px;
    }
  }
  .desc {
    color: #31313c;
    line-height: 28px;
    font-size: 19px;
  }

  .main {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;

    .item {
      display: flex;
      gap: 0.75rem;
      align-items: flex-start;
      .info {
        .title {
          margin-bottom: 0.25rem;
          font-size: 19px;
          line-height: 28px;
          font-weight: 600;
        }
      }
    }
  }

  .footer {
    text-align: center;
  }

  button {
    margin-top: 2rem;
    display: block;
    margin: 2rem auto 0 auto;
    width: 100%;
    padding: 0.6rem;
    font-size: 19px;
    line-height: 28px;
    color: #fff;
    background-color: rgb(30, 80, 229);
    font-weight: 600;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
    :hover {
      background-color: rgb(8 53 190);
    }
  }

  @media (max-width: 475px) {
    .header {
      span {
        font-size: 1.2rem;
      }
      strong {
        font-size: 24px;
      }
    }
    .desc {
      color: #31313c;
      line-height: 22px;
      font-size: 16px;
    }
  }

  @media (min-width: 700px) {
    .header {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .main {
      grid-template-columns: repeat(2, 1fr);
    }

    .bottom {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
      align-items: center;

      button {
        margin: 0;
        width: 200px;
      }
    }
  }

  @media (min-width: 1024px) {
    .header {
      margin-bottom: 4rem;
    }
    .main {
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: 5rem;
    }
  }
`;
