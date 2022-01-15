import styled from 'styled-components';
import { Content } from '../../shared';

export const Container = styled.div`
  width: 100%;
  background: #1b3ab5;
  background-image: linear-gradient(-187deg, rgba(0, 34, 105, 0) 10%, rgba(0, 34, 105, 0.5) 99%);
`;

export const SearchContent = styled(Content)`
  padding: 3rem 0;
  color: #fff;

  .title {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .search {
    position: relative;
    /* overflow: hidden; */
    margin-bottom: 2rem;
    input {
      width: 100%;
      padding: 0.75rem 0.85rem;
      padding-right: calc(0.73rem + 53px);
      border-radius: 4px;
      background-color: #fff;
      border: 1px solid #ccc;
      font-size: 1.2rem;

      &:focus {
        box-shadow: 0 0 2px #2ab0fc;
        border-color: #2ab0fc;
      }
    }

    button {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
      width: 53px;
      background-color: #00b2a3;
      display: flex;
      svg {
        margin: auto;
        font-size: 1.5rem;
        color: #fff;
      }
    }
  }

  .desc,
  .value p {
    font-size: 1.5rem;
    color: #8cd7ff;
    line-height: 28px;
    text-align: center;
  }

  .value {
    margin-top: 2rem;
    text-align: center;
  }

  .features {
    margin-top: 4rem;
    .feature {
      margin-bottom: 1.2rem;
      display: flex;
      gap: 1rem;
      align-items: flex-start;
      font-size: 19px;
      .feature-desc {
        line-height: 1.5rem;
        color: #8cd7ff;
      }
      .feature-label {
        line-height: 28px;
        margin-bottom: 0.5rem;
        font-weight: 600;
      }
    }
  }

  .promise-btn {
    width: 100%;
    margin-top: 3rem;
    border: 1px solid #21b1ff;
    padding: 0.75rem;
    color: #21b1ff;
    border-radius: 4px;
    background-color: transparent;
    transition: all 0.25s ease-in-out;
    font-size: 19px;
    font-weight: 600;
  }

  @media (max-width: 475px) {
    .title {
      font-size: 1.5rem;
    }
    .desc,
    .value p {
      font-size: 1.2rem;
    }

    .search {
      input {
        font-size: 14px;
      }
    }

    .features {
      margin-top: 2rem;
      .feature {
        font-size: 16px;
      }
    }
    .value h2 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }

    .promise-btn {
      margin-top: 1.5rem;
    }
  }

  @media (min-width: 780px) {
    max-width: 1000px;
    padding-bottom: 8rem;

    .title {
      font-size: 45px;
    }

    .search {
      max-width: 670px;
      margin-left: auto;
      margin-right: auto;
    }

    .features {
      display: flex;
      gap: 1.2rem;
    }

    .value {
      margin-top: 7rem;
    }

    .promise-btn {
      max-width: 220px;
    }
  }
`;

export const MenuContainer = styled.div`
  position: absolute;
  z-index: 10;
  background-color: #fff;
  left: 0;
  right: 0;
  color: #4a4a54;
  top: 55px;
  border-radius: 4px;
  padding: 1rem 0;
  max-height: 400px;
  overflow-y: auto;

  a {
    display: block;
    padding: 0.5rem 1rem;
    font-weight: 500;
    font-size: 1rem;
    line-height: 22px;
    color: #4a4a54;
    transition: all 0.15s ease-in-out;
    &:hover {
      background-color: rgba(0 0 0 / 5%);
    }
  }
`;
