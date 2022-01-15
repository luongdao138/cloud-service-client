import { Container } from './Cloud.styles';
import { MdOutlineStar, MdOutlineStarHalf, MdStarOutline } from 'react-icons/md';
import { convertAverageRating, convertRatingDistribution } from '../../helpers/convertNumber';
import { Link } from 'react-router-dom';
import RatingDistribution from '../RatingDistribution';

const Cloud = ({ name, logo, vendor, stats, _id }) => {
  const average_rating = convertAverageRating(stats.rating_average);
  const rating_distribution = convertRatingDistribution(stats.rating_distribution);

  return (
    <Container>
      <div className='top'>
        {logo && <img src={logo} alt='' className='avatar' />}
        <div className='info'>
          <Link to={`/clouds/${_id}/reviews`} className='name'>
            {name}
          </Link>
          {vendor.name && <span>by {vendor.name}</span>}
        </div>
      </div>
      <div className='bottom'>
        <div className='overview'>
          <span className='average'>{stats.rating_average.toFixed(1)}</span>
          <div className='stars'>
            {[...new Array(5)].map((_, index) => {
              if (index + 1 <= Number(average_rating)) {
                return <MdOutlineStar key={index} />;
              } else {
                if (average_rating.toString().endsWith('5') && index + 1 - average_rating === 0.5) {
                  return <MdOutlineStarHalf key={index} />;
                } else {
                  return <MdStarOutline key={index} />;
                }
              }
            })}
          </div>
          <Link to={`/clouds/${_id}/reviews`} className='number'>
            {stats.review_count} {stats.review_count > 1 ? 'Ratings' : 'Rating'}
          </Link>
        </div>
        <RatingDistribution rating_distribution={rating_distribution} />
      </div>
    </Container>
  );
};

export default Cloud;
