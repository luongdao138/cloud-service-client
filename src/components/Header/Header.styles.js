import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: #002269;
  color: #fff;
  top: 0;

  .content {
    width: 92%;
    max-width: 1150px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 65px;
  }

  .logo {
    display: flex;
    align-items: center;
    /* flex-grow: 1; */
    img {
      width: 50px;
      margin-right: 0.25rem;
    }
    span {
      letter-spacing: -0.5px;
      font-size: 1.75rem;
      color: #fff;
      font-weight: 600;
    }

    @media (max-width: 475px) {
      img {
        width: 40px;
      }
      span {
        font-size: 1.5rem;
      }
    }
  }

  .header-left,
  .heart,
  .saved-products {
    display: flex;
    align-items: center;
  }

  .saved-products {
    margin-left: 1rem;
    @media (max-width: 780px) {
      margin-left: 0;
    }
  }

  .heart {
    margin-left: 0.5rem;
    padding: 0.35rem 0.5rem;
    border-radius: 3px;
    border: 1px solid hsla(0, 0%, 100%, 0.2);
    svg {
      margin-right: 0.25rem;
      font-size: 20px;
    }
  }

  .nav {
    margin-left: 1rem;
    display: flex;
    align-items: center;
    > a {
      color: #fff;
      display: inline-block;
      font-weight: 700;
      padding: 0.75rem;
    }
  }

  .header-left {
    .search {
      position: relative;
      input {
        width: 200px;
        padding: 0.25rem 0.65rem;
        padding-right: calc(0.73rem + 33px);
        border-radius: 4px;
        background-color: #fff;
        border: 1px solid #ccc;
        font-size: 1.2rem;
        transition: all 0.25s ease-in-out;

        &:focus {
          box-shadow: 0 0 2px #2ab0fc;
          border-color: #2ab0fc;
        }

        &:focus {
          width: 400px;
        }
      }
      & > svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        /* right: 10px; */
        z-index: 100;
        right: 10px;
        font-size: 19px;
        color: #000;
      }

      @media (max-width: 780px) {
        display: none;
      }
    }

    @media (max-width: 780px) {
      background-color: #002269;
      position: fixed;
      inset: 65px 0 0 0;
      z-index: 10;
      transition: all 0.3s ease-in-out;
      transform-origin: 0 0;
      transform: scaleY(0.9);
      opacity: 0;
      visibility: hidden;
      display: block;
      padding: 1rem;
      .saved-products {
        margin-bottom: 0.5rem;
        flex-direction: row-reverse;
        width: max-content;

        .heart {
          margin: 0;
        }
        .label {
          margin-left: 0.5rem;
        }
      }

      .nav {
        margin-left: 0;
        display: flex;
        flex-direction: column;
        align-items: unset;

        > a {
          padding: 0.9rem 0;
          opacity: 0.6;
          transition: all 0.2s ease-in-out;
          :hover {
            opacity: 1;
          }

          & + a {
            border-top: 1px solid hsla(0, 0%, 100%, 0.2);
          }
        }
      }

      ${(props) =>
        props.open &&
        css`
          transform: scaleY(1);
          opacity: 1;
          visibility: visible;
        `}
    }
  }
`;

export const MenuButton = styled.div`
  cursor: pointer;
  height: 20px;
  display: flex;
  align-items: center;
  span,
  span::after,
  span::before {
    height: 2.5px;
    width: 32px;
    border-radius: 65px;
    background-color: #fff;
    transition: all 0.1s ease-out;
  }
  span {
    display: block;
    position: relative;
    border-radius: 65px;
    background-color: ${(props) => (!props.open ? '#fff' : 'transparent')};

    ::before,
    ::after {
      content: '';
      position: absolute;
    }

    ::before {
      top: -7px;
      ${(props) =>
        props.open &&
        css`
          top: 0px;
          transform: rotate(45deg);
        `}
    }
    ::after {
      bottom: -7px;
      ${(props) =>
        props.open &&
        css`
          top: 0px;
          transform: rotate(-45deg);
        `}
    }
  }

  @media (min-width: 780px) {
    display: none;
  }
`;

export const SmallMenu = styled.div`
  background-color: #002269;
  position: fixed;
  inset: 65px 0 0 0;
  z-index: 10;
  transition: all 0.3s ease-in-out;
  /* transform-origin: 65px; */
  transform: scaleY(0.9);
  opacity: 0;
  visibility: hidden;

  ${(props) =>
    props.open &&
    css`
      transform: scaleY(1);
      opacity: 1;
      visibility: visible;
    `}
`;
