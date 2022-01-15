import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { MdOutlineStar, MdStarOutline } from 'react-icons/md';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { getReview, updateReview } from '../api/review';
import { useAuthContext } from '../context/AuthContext';
import { useAuth, useRouter } from '../hooks';
import { Content } from '../shared';
import Textarea from '../shared/Textarea';
import { Container } from './styles/EditReview.styles';

const initialValues = {
  heading: '',
  overall: '',
};

const ratingOptions = [1, 2, 3, 4, 5];

const EditReviewPage = () => {
  const { push, query, pathname } = useRouter();
  const { user } = useAuthContext();

  useAuth(pathname);

  const { mutate, isLoading } = useMutation(updateReview, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['reviews', 'detail', query.id]);
      queryClient.invalidateQueries(['reviews', 'list', { user: user._id }]);
      toast.success('Update review success!');
      push('/profile/reviews');
    },
    onError: (error) => {
      // console.log({ ...error });
      toast.error(error.message);
    },
  });

  const { data: review } = useQuery(['reviews', 'detail', query.id], () => getReview(query.id), {
    staleTime: 60 * 1000,
    select: (data) => data.review,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const [rating, setRating] = useState(review?.review_detail.rating);
  const queryClient = useQueryClient();
  const handleSubmit = (values) => {
    const body = {
      id: query.id,
      review_detail: { ...values, rating },
    };
    mutate(body);
  };

  useEffect(() => {
    if (review) {
      setRating(review.review_detail.rating);
    }
  }, [review]);

  return (
    <Container>
      <Content>
        <div className='wrapper'>
          <h1 className='title'>Edit Review </h1>

          <div className='review-form'>
            <Formik
              initialValues={
                review
                  ? {
                      heading: review.review_detail.heading,
                      overall: review.review_detail.overall,
                    }
                  : initialValues
              }
              enableReinitialize
              onSubmit={handleSubmit}
            >
              {(formik) => {
                return (
                  <Form style={{ marginTop: '1rem' }}>
                    <Textarea label='Review heading' name='heading' id='heading' />
                    <Textarea name='overall' label='Review overall' id='overall' />
                    <div className='ratings'>
                      <div className='rating-label'>Review rating</div>
                      {ratingOptions.map(
                        (x) =>
                          rating >= x ? (
                            <MdOutlineStar
                              onMouseOver={() => {
                                setRating(x);
                              }}
                              key={x}
                            />
                          ) : (
                            <MdStarOutline
                              onMouseOver={() => {
                                setRating(x);
                              }}
                              key={x}
                            />
                          )
                        // <MdStarOutline key={x} />
                      )}
                    </div>
                    <button disabled={isLoading} type='submit' className='submit-btn'>
                      Save
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default EditReviewPage;
