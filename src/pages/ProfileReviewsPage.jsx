import { useQuery } from 'react-query';
import { getReviewsOfUser } from '../api/review';
import { UserReviewItem } from '../components';
import { useAuthContext } from '../context/AuthContext';
import { Container } from './styles/ProfileReviews.styles';

const ProfileReviewsPage = () => {
  const { user } = useAuthContext();
  const { data } = useQuery(['reviews', 'list', { user: user?._id }], getReviewsOfUser, {
    enabled: !!user,
    staleTime: 60 * 1000,
    notifyOnChangeProps: 'tracked',
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return (
    <Container>
      <h1 className='title'>My Reviews</h1>
      <div className='main'>
        {data?.reviews?.map((review) => {
          return <UserReviewItem review={review} key={review._id} />;
        })}
      </div>
    </Container>
  );
};

export default ProfileReviewsPage;
