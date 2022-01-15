import styled from 'styled-components';
import { Content } from '../../shared';

export const Container = styled.div`
  background-color: #002269;
`;

export const FooterContent = styled(Content)`
  color: #fff;
  padding: 2rem 0;

  .logo {
    display: flex;
    align-items: center;
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

  .footer-item {
    .label {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    margin-top: 1.5rem;
  }
  .footer-item a,
  .links a {
    color: rgba(100%, 100%, 100%, 0.8);
    font-size: 1rem;
    display: inline-block;
    padding: 0.2rem 0;
    line-height: 24px;
    transition: all 0.25s ease-in-out;
    &:hover {
      color: rgba(100%, 100%, 100%, 1);
    }
  }

  .divider {
    width: 100%;
    height: 1px;
    margin: 2rem 0;
    background-color: #21b1ff4d;
  }

  .socials {
    display: flex;
    gap: 1rem;
    .social-item {
      display: flex;
      width: 2rem;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: #fff;
      opacity: 0.8;
      transition: all 0.25s ease-in-out;
      &:hover {
        opacity: 1;
      }

      svg {
        color: #002269;
        margin: auto;
        font-size: 18px;
      }
    }
  }

  .links {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
  }

  .footer {
    margin-top: 0.5rem;
    color: rgba(100%, 100%, 100%, 0.8);
  }

  @media (min-width: 780px) {
    .list {
      display: flex;
      .footer-item {
        flex: 1;
      }
    }
  }

  @media (min-width: 1050px) {
    .logo {
      display: flex;
      align-items: center;
      img {
        width: 80px;
      }
      span {
        font-size: 2.5rem;
      }
    }
    .list {
      display: flex;
      .footer-item {
        flex: none;
        margin-right: 4rem;
      }
    }

    .links {
      flex-direction: row;
      gap: 1.5rem;
      margin: 0;

      a.link-item + a.link-item {
        position: relative;
        &::before {
          content: '/';
          position: absolute;
          left: -15px;
        }
      }
    }

    .bottom {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }
`;
