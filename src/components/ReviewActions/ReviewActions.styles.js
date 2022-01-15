import styled, { css } from 'styled-components';

export const Container = styled.div`
  .top {
    margin-bottom: 1rem;
    .title {
      margin-bottom: 1.2rem;
      h2 {
        color: #31313c;
        font-size: 1.5rem;
        line-height: 28px;
      }
      span {
        font-size: 11px;
        color: #65656f;
        font-weight: 600;
      }
    }
    .sort {
      .label {
        font-weight: 600;
      }

      .menu-wrapper {
        margin-top: 0.5rem;
        position: relative;
        width: 100%;
        button.sort-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.4rem 0.5rem;
          border: 1px solid #c3c3ca;
          background-color: transparent;
          border-radius: 4px;
          font-size: 1rem;
          :focus {
            box-shadow: 0 0 4px #21b1ff;
            border-color: #21b1ff;
          }
          svg {
            font-size: 1.5rem;
            color: #ccc;
          }
        }
        .menu {
          position: absolute;
          width: 100%;
          overflow: hidden;
          z-index: 10;
          border: 1px solid rgba(0 0 0 /30%);
          border-radius: 8px;
          background-color: #fff;
          top: 42px;
        }

        @media (min-width: 475px) {
          max-width: 225px;
        }
      }
    }
  }
  .bottom {
    display: flex;
    gap: 1rem;
    .search {
      flex-grow: 1;
      position: relative;

      input {
        border: 1px solid #c3c3ca;
        border-radius: 4px;
        font-size: 1rem;
        font-weight: 500;
        width: 100%;
        padding: 0.5rem 1rem 0.5rem 2.25rem;
        :focus {
          box-shadow: 0 0 4px #21b1ff;
          border-color: #21b1ff;
        }
      }
      svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0.5rem;
        font-size: 24px;
        color: #ccc;
      }
    }
    .filter-container {
      button.filter-btn {
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0.5rem;
        border: 1px solid #c3c3ca;
        border-radius: 4px;
        background-color: transparent;
        font-size: 14px;
        font-weight: 600;
        color: #002269;
        transition: all 0.2s ease-in-out;
        svg {
          font-size: 1.25rem;
          margin-right: 0.5rem;
        }
        &:hover {
          border: 1px solid #333;
          background-color: rgba(0 0 0 / 4%);
        }
      }
    }

    @media (max-width: 475px) {
      flex-direction: column;
      .search {
        svg {
          font-size: 1.2rem;
        }
        input {
          font-size: 14px;
        }
      }
      .filter-container {
        button.filter-btn {
          width: 100%;
          justify-content: center;
        }
      }
    }
    @media (min-width: 1024px) {
      .filter-container {
        button.filter-btn {
          width: 225px;
          justify-content: center;
        }
      }
    }
  }

  @media (min-width: 780px) {
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
      .title {
        margin-bottom: 0;
      }
      .sort {
        min-width: 225px;
      }
    }
  }
`;

export const SortItem = styled.li`
  padding: 0.5rem;
  cursor: pointer;
  :hover {
    color: #fff;
    background-color: #21b1ff;
  }

  ${(props) =>
    props.active &&
    css`
      color: #fff;
      background-color: #21b1ff;
    `}
`;
