import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  cursor: pointer;

  .header-user-left {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    img {
      width: 36px;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 50%;
    }
    span.last-name {
      color: #fff;
      font-weight: 700;
      opacity: 0.6;
      transition: all 0.2s ease-in-out;
      display: none;
      @media (max-width: 780px) {
        display: block;
      }
    }
  }

  @media (max-width: 780px) {
    margin-left: 0;
    padding-top: 0.9rem;
    border-top: 1px solid hsla(0, 0%, 100%, 0.2);
    justify-content: space-between;

    :hover {
      .header-user-left {
        span.last-name {
          opacity: 1;
        }
      }
    }
  }

  .right {
    display: none;
    svg {
      color: rgba(255 255 255 / 0.7);
      font-size: 1.5rem;
      transition: all 0.2s ease-in-out;
    }
    @media (max-width: 780px) {
      display: block;
    }
  }
`;

export const UserMenu = styled.div`
  position: absolute;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 25%);
  z-index: 10;
  overflow: hidden;
  top: 42px;
  border-radius: 4px;
  right: 0;
  background-color: #fff;
  width: 250px;
  transition: all 0.25s ease-in-out;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);

  span.name {
    color: #a1a1a9;
    cursor: default;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    display: block;
    padding: 0.75rem;
    box-shadow: 0 2px 5px rgba(0 0 0 / 0.4);
  }

  a,
  button {
    display: block;
    padding: 0.25rem 0.75rem;
    width: 100%;
    background-color: #fff;
    text-align: left;
    color: #4a4a54;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
    :hover {
      background-color: #07a8ff;
      color: #fff;
    }
  }
  .divider {
    width: 100%;
    height: 1px;
    background-color: rgba(0 0 0 / 0.1);
  }
  li {
    :last-child {
      margin-bottom: 1rem;
    }
  }
  button {
    margin: 0.5rem 0;
  }

  ${(props) =>
    props.open &&
    css`
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    `}

  @media (max-width: 780px) {
    display: none;
  }
`;

export const MobileList = styled.div`
  display: none;
  margin-top: 1rem;

  a,
  button {
    display: block;
    width: 100%;
    text-align: left;
    color: rgba(255 255 255 / 0.6);
    font-size: 1rem;
    background-color: transparent;
    transition: all 0.2s ease-in-out;
    padding: 0.5rem 0.75rem;
    :hover {
      color: rgba(255 255 255/ 1);
    }
  }

  @media (max-width: 780px) {
    display: block;
  }
`;
