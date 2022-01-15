import React from 'react';
import { Container } from './Cloud.styles';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const CloudSkeleton = () => {
  return (
    <SkeletonTheme>
      <Container>
        <div className='top'>
          <Skeleton className='avatar' />
          <div className='info'>
            <Skeleton className='name' height={15} width='90%' style={{ marginBottom: '.5rem' }} />
            <Skeleton width='50%' height={10} />
            {/* <span>by Amazon Web Services (AWS)</span> */}
          </div>
        </div>
        <div className='bottom'>
          <Skeleton className='overview' width='100%' height={10} />
          {[...new Array(5)].map((_, index) => (
            <Skeleton key={index} height={10} className='rating-skeleton' />
          ))}
        </div>
      </Container>
    </SkeletonTheme>
  );
};

export default CloudSkeleton;
