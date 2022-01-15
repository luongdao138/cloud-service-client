import { Link } from 'react-router-dom';
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

    .nav {
      display: flex;
      flex-direction: column;

      @media (min-width: 780px) {
        flex-direction: row;
        gap: 1rem;
        border-bottom: 1.5px solid rgba(0 0 0 / 0.05);
      }
    }
    @media (min-width: 780px) {
      padding: 2rem;
    }
  }
`;

export const NavItem = styled(Link)`
  display: block;
  padding: 0.65rem;
  color: #31313c;
  line-height: 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  border-bottom: 1.5px solid rgba(0 0 0 / 0.05);
  :first-child {
    border-top: 1.5px solid rgba(0 0 0 / 0.05);
  }
  :hover {
    color: #31313cad;
  }
  border-left: 4px solid transparent;

  ${(props) =>
    props.active &&
    css`
      border-left-color: #21b1ff;
    `}

  @media (min-width: 780px) {
    flex-direction: row;
    border: none;
    padding: 0.5rem;
    :first-child {
      border-top: none;
    }
    border-bottom: 4px solid transparent;

    ${(props) =>
      props.active &&
      css`
        border-bottom-color: #21b1ff;
      `}
  }
`;
