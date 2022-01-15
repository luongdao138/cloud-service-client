import { Content } from '../shared';
import { Container } from './styles/AddReview.styles';
import AsyncSelect from 'react-select/async';
import { useState } from 'react';
import { getClouds } from '../api/cloud';
import { toast } from 'react-toastify';
import { Form, Formik } from 'formik';
import Textarea from '../shared/Textarea';
import { MdOutlineStar, MdStarOutline } from 'react-icons/md';
import { useMutation, useQueryClient } from 'react-query';
import { addNewReview } from '../api/review';
import { useAuth, useRouter } from '../hooks';

const initialValues = {
  heading: '',
  overall: '',
};

const ratingOptions = [1, 2, 3, 4, 5];

const AddReviewPage = () => {
  const { query, push, pathname, location } = useRouter();
  const [cloud_id, setCloudId] = useState(query.cloud_id || null);
  const [rating, setRating] = useState(null);
  const queryClient = useQueryClient();

  console.log(location);

  useAuth(pathname + location.search || '');

  const asyncOptions = async (value) => {
    if (!value) return [];

    const data = await getClouds({ search: value, limit: 20, fields: '_id,name' });
    const options = data.clouds.map((x) => ({ label: x.name, value: x._id }));
    return options;
  };

  const { mutate } = useMutation(addNewReview, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['reviews', 'list']);
      toast.success('Write review success!');
      push('/profile/reviews');
    },
    onError: (error) => {
      // console.log({ ...error });
      toast.error(error.message);
    },
  });

  const handleSubmit = (values) => {
    const body = {
      cloud_platform: cloud_id,
      review_detail: { ...values, rating },
    };
    mutate(body);
  };

  return (
    <Container>
      <Content>
        <div className='wrapper'>
          <h1 className='title'>Write a review</h1>
          <div className='main'>
            <div className='review-cloud'>
              <h3>I'd like to review</h3>
              <div className='cloud-form'>
                <AsyncSelect
                  cacheOptions
                  defaultOptions
                  loadOptions={asyncOptions}
                  onChange={(e) => {
                    setCloudId(e.value);
                  }}
                  defaultValue={cloud_id ? { label: '', value: cloud_id } : null}
                />
              </div>
            </div>

            {!!cloud_id && (
              <div className='review-form'>
                <Formik initialValues={initialValues} enableReinitialize onSubmit={handleSubmit}>
                  {(formik) => {
                    return (
                      <Form style={{ marginTop: '1rem' }}>
                        <Textarea label='Review heading' name='heading' id='heading' />
                        <Textarea name='overall' label='Review overall' id='overall' />
                        <div className='ratings'>
                          <div className='rating-label'>Review rating</div>
                          {ratingOptions.map((x) =>
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
                          )}
                        </div>
                        <button type='submit' className='submit-btn'>
                          Save
                        </button>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            )}
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default AddReviewPage;
