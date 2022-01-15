import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.75rem;
  background-color: rgb(253, 239, 244);
  margin-bottom: 1.5rem;

  .errors-header {
    display: flex;
    align-items: center;
    margin-bottom: 0.4rem;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #ed3755;
      span {
        font-size: 14px;
        font-weight: 700;
      }
    }
    > svg {
      color: rgba(0 0 0 / 0.2);
      cursor: pointer;
    }
  }

  .errors-main {
    padding-left: 1.5rem;

    li {
      list-style: inside;
      font-size: 14px;
      color: #4a4a54;
      line-height: 18px;
    }
  }
`;
