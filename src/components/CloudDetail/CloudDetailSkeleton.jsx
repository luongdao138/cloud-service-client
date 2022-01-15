import React from 'react';
import { Container } from './CloudDetail.styles';
import Skeleton from 'react-loading-skeleton';

const CloudDetailSkeleton = () => {
  return (
    <Container>
      <div className='top'>
        <div className='avatar'>
          <Skeleton width={100} height={100} />
        </div>
        <div className='info'>
          <Skeleton
            count={4}
            containerClassName='skeleton-container'
          />
        </div>
      </div>
      <div className='bottom'>
        <Skeleton
          count={5}
          height={12}
          style={{
            width: '100%',
            maxWidth: '400px',
          }}
        />
      </div>
    </Container>
  );
};

export default CloudDetailSkeleton;
