import { MdOutlineStar, MdOutlineStarHalf, MdStarOutline } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container } from './CloudDetail.styles';
import RatingDistribution from '../RatingDistribution';
import { useReviewContext } from '../../context/ReviewActions';
import { useQuery } from 'react-query';
import { getCloudDetail } from '../../api/cloud';
import { convertAverageRating, convertRatingDistribution } from '../../helpers/convertNumber';
import CloudDetailSkeleton from './CloudDetailSkeleton';
import { BsFillHeartFill } from 'react-icons/bs';
import { useRouter } from '../../hooks';
import { useEffect } from 'react';

const CloudDetail = () => {
  const { setCloudId } = useReviewContext();
  const {
    query: { cloudId },
  } = useRouter();
  const {
    data: cloud,
    isLoading,
    isError,
    error,
  } = useQuery(['clouds', 'detail', cloudId], () => getCloudDetail(cloudId), {
    staleTime: 60 * 1000,
    retry: 1,
    select: (data) => data.cloud,
    notifyOnChangeProps: 'tracked',
  });

  useEffect(() => {
    setCloudId(cloudId);
  }, [cloudId]);

  if (isLoading) {
    return <CloudDetailSkeleton />;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  const average_rating = convertAverageRating(cloud.stats?.rating_average);
  const rating_distribution = convertRatingDistribution(cloud.stats?.rating_distribution);

  return (
    <Container>
      <div className='top'>
        <div className='avatar'>
          <img src={cloud.logo} alt='' />
        </div>
        <div className='info'>
          <h2 className='name'>{cloud.name}</h2>
          <div className='overview'>
            <span className='average'>{cloud.stats.rating_average.toFixed(1)}</span>
            <div className='stars'>
              {[...new Array(5)].map((_, index) => {
                if (index + 1 <= Number(average_rating)) {
                  return <MdOutlineStar key={index} />;
                } else {
                  if (
                    average_rating.toString().endsWith('5') &&
                    index + 1 - average_rating === 0.5
                  ) {
                    return <MdOutlineStarHalf key={index} />;
                  } else {
                    return <MdStarOutline key={index} />;
                  }
                }
              })}
            </div>
            <span className='number'>
              {cloud.stats.review_count} {cloud.stats.review_count > 1 ? 'Ratings' : 'Rating'}
            </span>
          </div>
          <div className='new'>
            <Link to={`/reviews/new?cloud_id=${cloud._id}`} className='write-review'>
              <FiEdit />
              <span>Write a Reivew</span>
            </Link>
            <BsFillHeartFill className='heart' />
          </div>
          <div className='vendor'>
            <span>Do you work for this company?</span>
            <Link to='/'>Learn how we help vendors</Link>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <RatingDistribution big rating_distribution={rating_distribution} />
      </div>
    </Container>
  );
};

export default CloudDetail;
