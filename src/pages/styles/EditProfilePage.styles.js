import styled from 'styled-components';

export const Container = styled.div`
  .loading-container {
    inset: 0;
    position: fixed;
    z-index: 10000;
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .group {
    width: 100%;
    padding: 1.5rem 0;
    .title {
      text-transform: uppercase;
      font-size: 1rem;
      line-height: 1.5rem;
      color: #65656f;
      font-weight: 600;
      margin-bottom: 1rem;

      @media (max-width: 475px) {
        font-size: 14px;
      }
    }
  }

  .group + .group {
    border-top: 1px solid rgba(0 0 0 / 0.1);
  }

  .avatar-group {
    .main {
      display: flex;
      gap: 1rem;
      .avatar {
        img {
          width: 64px;
          aspect-ratio: 1;
          border-radius: 50%;
          object-fit: cover;

          @media (min-width: 780px) {
            width: 80px;
          }
        }
      }
      .right {
        flex-grow: 1;
        color: #31313c;
        .upload-title,
        .upload,
        button {
          font-size: 1rem;
          line-height: 1.5rem;
        }

        .pixel {
          font-size: 14px;
          line-height: 18px;
          color: #65656f;
          margin-bottom: 1rem;
        }

        .upload,
        button {
          font-weight: 600;
        }

        button {
          display: block;
          width: 150px;
          max-width: 200px;
          color: #31313c;
          border-radius: 4px;
          padding: 0.3rem 0;
          background-color: #f5f5f7;
          border: 1px solid rgba(0 0 0 / 0.1);
          margin-top: 0.5rem;

          @media (max-width: 475px) {
            width: 100%;
          }
        }
      }
    }
  }

  @media (min-width: 780px) {
    .group {
      max-width: 780px;
    }
    .name {
      display: grid;
      gap: 1.5rem;
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 0.75rem;
    }

    .location {
      display: grid;
      gap: 1.5rem;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .save-btn {
    min-width: 120px;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    background-color: #00b2a3;
    text-align: center;
    padding: 0.5rem 0;
    border-radius: 4px;
    :disabled {
      opacity: 0.8;
    }
  }
`;
