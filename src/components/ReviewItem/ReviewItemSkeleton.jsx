import React from 'react';
import { Container } from './ReviewItem.styles';
import Skeleton from 'react-loading-skeleton';

const ReviewItemSkeleton = () => {
  return (
    <Container>
      <div className='reviewer'>
        <div className='avatar-big-wrapper'>
          <Skeleton className='avatar avatar-big' />
        </div>
        <div className='info'>
          <Skeleton className='time item-skeleton' height={10} width={200} />
          <Skeleton className='time item-skeleton' height={14} width={200} />
          <div className='reviewer-detail'>
            <div to='/' className='avatar-small-wrapper'>
              <Skeleton className='avatar avatar-small' />
            </div>
            <div className='right'>
              <Skeleton height={50} className='info-skeleton' />
            </div>
          </div>
        </div>
      </div>
      <div className='rating-container'>
        <Skeleton width={150} height={12} />
      </div>
      <div className='review-desc'>
        <Skeleton width='100%' height={50} />
      </div>
    </Container>
  );
};

export default ReviewItemSkeleton;
