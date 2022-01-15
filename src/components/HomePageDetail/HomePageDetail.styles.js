import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.5rem 0;
  background-image: linear-gradient(135deg, #fff, #dafef8);

  .content {
    max-width: 1000px;
  }
  .title {
    font-size: 1.5rem;
    line-height: 28px;
    color: #31313c;
    text-align: center;
  }

  .top {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin-bottom: 5rem;

    .title {
      color: #991a6a;
    }

    .desc {
      font-size: 19px;
      line-height: 28px;
      color: #31313c;
    }
  }

  .bottom {
    .title {
      margin-bottom: 2rem;
    }

    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 0.75rem;
      column-gap: 2rem;

      a {
        :hover {
          text-decoration: underline;
        }
        color: #1e50e5;
      }
    }
  }

  @media (min-width: 780px) {
    .top {
      max-width: 550px;
      margin-left: auto;
      margin-right: auto;
      .title {
        font-size: 28px;
      }

      .desc {
        text-align: center;
      }
    }
    .bottom {
      ul {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
  @media (max-width: 474px) {
    .top {
      .title {
        font-size: 22px;
      }

      .desc {
        font-size: 1rem;
      }
    }
    .bottom {
      ul {
        grid-template-columns: 1fr;
      }
    }
  }
`;
