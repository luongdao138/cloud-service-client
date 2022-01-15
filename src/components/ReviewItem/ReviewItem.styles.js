import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.25rem 0;
  border-top: 1px solid rgba(0 0 0 / 5%);
  .info-skeleton {
    width: 200px;
    @media (max-width: 475px) {
      width: 120px;
    }
  }
  .reviewer {
    display: flex;
    gap: 1rem;
    .avatar-big-wrapper {
      @media (max-width: 780px) {
        display: none;
      }
    }
    .avatar-small-wrapper {
      @media (min-width: 780px) {
        display: none;
      }
    }
    .avatar {
      aspect-ratio: 1;
      border-radius: 50%;
      object-fit: cover;
    }
    .avatar-big {
      width: 85px;
    }
    .avatar-small {
      width: 60px;
    }

    .info {
      .time {
        font-size: 14px;
        text-transform: uppercase;
        color: #65656f;
        margin-bottom: 4px;
      }
      .heading {
        font-size: 1.5rem;
        line-height: 28px;
        color: #31313c;
        margin-bottom: 0.5rem;
      }
      .reviewer-detail {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        .right {
          display: flex;
          flex-direction: column;
          font-size: 14px;
          line-height: 18px;
          color: #31313c;
        }
      }
    }
  }

  .rating-container {
    margin-top: 0.75rem;
    display: flex;
    align-items: center;
    .rating {
      color: #31313c;
      font-weight: 600;
    }
    .stars {
      display: flex;
      align-items: center;
      margin-left: 0.5rem;
      svg {
        color: rgb(242, 199, 26);
      }
    }
  }

  .review-desc {
    margin-top: 0.75rem;
    font-size: 1rem;
    color: #31313c;
    line-height: 1.5rem;
  }

  @media (max-width: 475px) {
    .reviewer {
      .info {
        .time {
          font-size: 13px;
          margin-bottom: 0.5rem;
        }
        .heading {
          line-height: 26px;
          font-size: 1.2rem;
        }
      }
    }
    .review-desc {
      line-height: 22px;
      font-size: 14px;
    }
  }
`;
