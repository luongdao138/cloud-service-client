import Input from '../shared/Input';
import { Container } from './styles/EditProfilePage.styles';
import { Formik, Form } from 'formik';
import Select from '../shared/Select';
import { userProfileSchema } from '../helpers/validationSchema';
import ErrorMenu from '../shared/ErrorMenu';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { SubmitButton } from '../shared';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getDistricts, getProvinces, getWards } from '../api/location';
import { useRef } from 'react';
import { getFilters } from '../api/stats';
import { updateUser, uploadUserImage } from '../api/user';
import { Loading } from '../components';
import { toast } from 'react-toastify';

const initialValues = {
  name: '',
  job_title: '',
  job_role: '',
  company: {
    name: '',
    size: '',
    industry: '',
  },
  location: {
    province: '',
    district: '',
    ward: '',
  },
};

const EditProfilePage = () => {
  const [forceCloseError, setForceCloseError] = useState(false);
  const { user } = useAuthContext();
  const [provinceId, setProvinceId] = useState('');
  const [districtId, setDistrictId] = useState('');
  const formikRef = useRef();
  const queryClient = useQueryClient();
  const inputFileRef = useRef();
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(
    user?.picture_url || 'https://www.clipartmax.com/png/middle/424-4242023_fa-user-circle-icon.png'
  );

  const { mutate, isLoading } = useMutation(updateUser, {
    onSuccess: (data) => {
      toast.success('Update user profile successfully!');
      queryClient.invalidateQueries(['auth', 'getUser']);
    },
  });

  const { mutate: mutateImage, isLoading: loadingImage } = useMutation(uploadUserImage, {
    onSuccess: (data) => {
      toast.success('Update user avatar successfully!');
      setPreviewUrl(data.picture_url);
      queryClient.invalidateQueries(['auth', 'getUser']);
    },
  });

  const { data: filtersData } = useQuery(['stats', 'filters'], getFilters, {
    staleTime: 5 * 60 * 1000,
    retry: 1,
    notifyOnChangeProps: 'tracked',
  });

  const { data: provinces } = useQuery(['provinces', 'list'], getProvinces, {
    staleTime: Infinity,
    select: (data) => data.provinces,
  });

  const { data: districts } = useQuery(
    ['districts', 'list', { provinceId }],
    () => getDistricts(provinceId),
    {
      staleTime: Infinity,
      select: (data) => data.districts,
      enabled: !!provinceId,
    }
  );

  const { data: wards } = useQuery(['wards', 'list', { districtId }], () => getWards(districtId), {
    staleTime: Infinity,
    select: (data) => data.wards,
    enabled: !!districtId,
  });

  useEffect(() => {
    if (user) {
      setProvinceId(user.location?.province);
      setDistrictId(user.location?.district);
      setPreviewUrl(user.picture_url);
    }
  }, [user]);

  const onProvinceChange = ({ selected }) => {
    setProvinceId(selected);
    setDistrictId('');
    formikRef.current?.setFieldValue('location.district', '');
    formikRef.current?.setFieldValue('location.ward', '');
  };

  const onDistrictChange = ({ selected }) => {
    setDistrictId(selected);
    formikRef.current?.setFieldValue('location.ward', '');
  };

  const handleSubmit = (values, helpers) => {
    mutate({ ...values, _id: user._id });
  };

  useEffect(() => {
    if (image) {
      let formData = new FormData();
      formData.append('image', image);

      mutateImage({ id: user._id, data: formData });
    }
  }, [image]);

  return (
    <Container>
      {loadingImage && (
        <div className='loading-container'>
          <Loading />
        </div>
      )}
      <Formik
        initialValues={{ ...initialValues, ...user } || initialValues}
        enableReinitialize
        onSubmit={handleSubmit}
        validationSchema={userProfileSchema}
        validateOnBlur={false}
        validateOnChange={false}
        innerRef={formikRef}
      >
        {(formik) => {
          const errors = Object.keys(formik.errors).reduce(
            (acc, current) => [...acc, formik.errors[current]],
            []
          );
          return (
            <>
              <Form style={{ marginTop: '1rem' }}>
                <ErrorMenu
                  errors={errors}
                  open={errors.length > 0 && !forceCloseError}
                  setForceCloseError={setForceCloseError}
                  title={'Please fix the following errors'}
                />
                <div className='group'>
                  <h3 className='title'>Your information</h3>
                  <div className='name'>
                    <Input name='name' label='Name' id='username' />
                  </div>
                  <div className='location'>
                    <Select
                      placeholder=''
                      name='location.province'
                      label='Province/City'
                      options={provinces?.map((x) => ({ label: x.name, value: x.crawl_id })) || []}
                      id='location_province'
                      onChangeCb={onProvinceChange}
                    />
                    <Select
                      placeholder=''
                      name='location.district'
                      label='District'
                      options={districts?.map((x) => ({ label: x.name, value: x.crawl_id })) || []}
                      id='location_district'
                      onChangeCb={onDistrictChange}
                    />
                    <Select
                      placeholder=''
                      name='location.ward'
                      label='Ward/Commune'
                      options={wards?.map((x) => ({ label: x.name, value: x.crawl_id })) || []}
                      id='location_commune'
                    />
                  </div>
                </div>
                <div className='group avatar-group'>
                  <h3 className='title'>Your photo</h3>
                  <div className='main'>
                    <div className='avatar'>
                      <img src={previewUrl} alt='' />
                    </div>
                    <div className='right'>
                      <p className='upload-title'>Upload a different picture of yourself</p>
                      <p className='pixel'>80 pixels x 80 pixels</p>
                      <p className='upload'>Upload a File</p>
                      <button type='button' onClick={() => inputFileRef?.current.click()}>
                        Choose a File
                      </button>
                      <input
                        onChange={(e) => {
                          e.preventDefault();
                          setImage(e.target.files[0]);
                        }}
                        type='file'
                        hidden
                        ref={inputFileRef}
                      />
                    </div>
                  </div>
                </div>
                <div className='group'>
                  <h3 className='title'>Your company's information</h3>
                  <div className='name'>
                    <Input name='company.name' label='Company Name' id='company-name' />
                    <Select
                      placeholder=''
                      name='company.industry'
                      label='Industry'
                      options={
                        filtersData?.industries?.map((x) => ({ label: x.title, value: x._id })) ||
                        []
                      }
                      id='company_industry'
                    />
                    <Select
                      placeholder=''
                      name='company.size'
                      label='Company Size'
                      options={
                        filtersData?.companySizes?.map((x) => ({ label: x.title, value: x._id })) ||
                        []
                      }
                      id='company_size'
                    />
                    <Input name='job_title' label='Job Title' id='job_title' />
                    <Select
                      placeholder=''
                      name='job_role'
                      label='Job Role'
                      options={
                        filtersData?.jobRoles?.map((x) => ({ label: x.title, value: x._id })) || []
                      }
                      id='job_role'
                    />
                  </div>
                </div>
                <SubmitButton
                  onClick={() => setForceCloseError(false)}
                  className='save-btn'
                  type='submit'
                  disabled={isLoading}
                >
                  {isLoading ? <Loading width={20} /> : 'Save'}
                </SubmitButton>
              </Form>
            </>
          );
        }}
      </Formik>
    </Container>
  );
};

export default EditProfilePage;
