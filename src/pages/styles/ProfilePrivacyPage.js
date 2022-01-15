import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 1.5rem;
  .privacy-title {
    font-size: 1rem;
    line-height: 24px;
    font-weight: 600;
    color: #65656f;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .intro {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
    color: #31313c;
  }

  .main {
    padding: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.9rem;
    border: 1px solid rgba(0 0 0 / 0.1);
    max-width: 500px;
    border-radius: 4px;
    margin-bottom: 0.75rem;

    img {
      width: 80px;
      aspect-ratio: 1;
      border-radius: 50%;
      object-fit: cover;
      @media (max-width: 475px) {
        width: 64px;
      }
    }

    .info {
      .name {
        font-size: 19px;
        line-height: 28px;
        color: #31313c;
        font-weight: 600;
      }
      line-height: 18px;
      font-size: 14px;
      color: #65656f;
    }
  }

  .edit-link {
    color: #116bf2;
    font-size: 14px;
  }

  .toggle-wrapper {
    display: flex;
    gap: 1rem;
    margin: 2rem 0 1.5rem 0;
    align-items: flex-start;

    .desc {
      font-size: 1rem;
      line-height: 1.5rem;
      color: #31313c;
      @media (max-width: 475px) {
        font-size: 14px;
        line-height: 1.25rem;
      }
    }
  }
  @media (min-width: 780px) {
    max-width: 780px;
  }
`;
