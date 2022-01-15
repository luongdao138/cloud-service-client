import { MdOutlineStar, MdStarOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container } from './ReviewItem.styles';
import moment from 'moment';

const ReviewItem = ({ review }) => {
  return (
    <Container>
      <div className='reviewer'>
        <Link to='/' className='avatar-big-wrapper'>
          <img
            className='avatar avatar-big'
            src={
              review.user.is_private
                ? 'https://www.clipartmax.com/png/middle/424-4242023_fa-user-circle-icon.png'
                : review.user.picture_url ||
                  'https://www.clipartmax.com/png/middle/424-4242023_fa-user-circle-icon.png'
            }
            alt=''
          />
        </Link>
        <div className='info'>
          <p className='time'>{moment(review.published_at).format('LL')}</p>
          <h2 className='heading'>{review.review_detail.heading}</h2>
          <div className='reviewer-detail'>
            <Link to='/' className='avatar-small-wrapper'>
              <img
                className='avatar avatar-small'
                src={
                  review.user.is_private
                    ? 'https://www.clipartmax.com/png/middle/424-4242023_fa-user-circle-icon.png'
                    : review.user.picture_url ||
                      'https://www.clipartmax.com/png/middle/424-4242023_fa-user-circle-icon.png'
                }
                alt=''
              />
            </Link>
            <div className='right'>
              <span>
                {review.user.is_private
                  ? review.user.job_role.title
                  : review.user.name
                  ? review.user.name
                  : 'Verified User'}
              </span>
              <span>
                {review.user.is_private
                  ? `${review.user?.company?.industry.title} company`
                  : review.user.job_role.title}
              </span>
              <span>
                {review.user.is_private
                  ? `with ${review.user?.company?.size.title}`
                  : `${review.user.company.industry.title} Company, ${review.user.company.size.title}`}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='rating-container'>
        <span className='rating'>{review.review_detail.rating}.0</span>
        <div className='stars'>
          {[1, 2, 3, 4, 5].map((x) => {
            if (x <= review.review_detail.rating) {
              return <MdOutlineStar key={x} />;
            } else {
              return <MdStarOutline key={x} />;
            }
          })}
        </div>
      </div>
      <div className='review-desc'>{review.review_detail.overall}</div>
    </Container>
  );
};

export default ReviewItem;
