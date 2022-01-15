import styled, { css } from 'styled-components';

export const Content = styled.div`
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1001;
  transition: all 0.25s ease-in-out;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-150px);
  display: grid;
  grid-template-rows: 1fr auto 1fr;

  .header,
  .footer {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .label {
      font-size: 19px;
      color: #002269;
      line-height: 28px;
      font-weight: 600;
    }
  }

  .header {
    border-bottom: 1px solid rgb(0 0 0 / 10%);
    svg {
      font-size: 26px;
      color: #ccc;
      cursor: pointer;
    }
  }

  .footer {
    border-top: 1px solid rgb(0 0 0 / 10%);
    .label {
      cursor: pointer;
    }
    button {
      border-radius: 4px;
      font-weight: 600;
      background-color: #d1287a;
      padding: 0.5rem 1rem;
      color: #fff;
      font-size: 1rem;
    }
  }

  .main {
    overflow-y: auto;
    padding: 0 1rem;

    .group {
      padding: 1.25rem 0;
      .view-all {
        background-color: transparent;
        margin-top: 0.75rem;
        font-weight: 600;
        color: #1b3ab5;
      }
      .title {
        font-size: 1.5rem;
        line-height: 28px;
        color: #1b3ab5;
        font-weight: 600;
        margin-bottom: 1.25rem;
      }

      .label {
        font-size: 14px;
        line-height: 24px;
        color: #31313c;
      }
      .options {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(2, 1fr);

        .option {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        @media (max-width: 650px) {
          grid-template-columns: 1fr;
        }
      }
      .search {
        position: relative;
        margin-bottom: 1.25rem;
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
    }

    .group + .group {
      border-top: 0.5px solid rgb(0 0 0 / 10%);
    }

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 40px;
      background-color: rgb(0 0 0 / 20%);
    }
    &::-webkit-scrollbar-track {
      border-radius: 40px;
      background-color: rgb(0 0 0 / 10%);
    }
  }

  @media (min-width: 650px) {
    width: 100%;
    max-width: 670px;
    max-height: 78vh;
    border-radius: 4px;
    box-shadow: 0 3px 9px rgb(0 0 0 / 50%);
    top: 50%;
    left: 50%;
    transform: translateY(calc(-65%)) translateX(-50%);
  }

  ${(props) =>
    props.open &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      @media (min-width: 650px) {
        transform: translate(-50%, -50%);
      }
    `}
`;

export const Progress = styled.div`
  flex-grow: 1;
  height: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 40px;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(90deg, #21b1ff, #0be5c1);
    border-radius: 40px;
    width: ${(props) => `${props.percent}%`};
  }
`;
