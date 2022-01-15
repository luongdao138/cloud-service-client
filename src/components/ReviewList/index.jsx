import { Container } from './ReviewList.styles';
import ReviewItem from '../ReviewItem';
import { actions, useReviewContext } from '../../context/ReviewActions';
import ReviewItemSkeleton from '../ReviewItem/ReviewItemSkeleton';
import Pagination from '../Pagination';
import Loading from '../Loading';

const ReviewList = () => {
  const { reviews, isLoading, error, pagination, dispatch, isPreviousData } = useReviewContext();

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Container>
      {isPreviousData && (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <Loading width={40} />
        </div>
      )}
      {isLoading
        ? [...new Array(5)].map((_, index) => {
            return <ReviewItemSkeleton key={index} />;
          })
        : reviews.map((review) => <ReviewItem key={review._id} review={review} />)}
      {!isLoading && (
        <Pagination
          onPageChange={({ selected }) => {
            dispatch({
              type: actions.CHANGE_PAGINATION,
              payload: { pagination: { ...pagination, page: selected + 1 } },
            });
          }}
          pageCount={Math.ceil(pagination.total_results / pagination.limit)}
          pageRange={0}
          limit={pagination.limit}
          onLimitChange={(l) => {
            dispatch({
              type: actions.CHANGE_PAGINATION,
              payload: { pagination: { ...pagination, limit: l } },
            });
          }}
        />
      )}
    </Container>
  );
};

export default ReviewList;
