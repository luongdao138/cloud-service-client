import { Formik, Form } from 'formik';
import { actions, useAuthContext } from '../../context/AuthContext';
import Input from '../../shared/Input';
import { Link } from 'react-router-dom';
import { loginValidationSchema } from '../../helpers/validationSchema';
import ErrorMenu from '../../shared/ErrorMenu';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useMutation } from 'react-query';
import { login } from '../../api/auth';
import { useRouter } from '../../hooks';
import Loading from '../Loading';
import { toast } from 'react-toastify';

const initialLoginValues = {
  email: '',
  password: '',
};

const LoginForm = ({ open }) => {
  const { dispatch, openAuthModal, redirect_url } = useAuthContext();
  const formRef = useRef();
  const router = useRouter();
  const [forceCloseError, setForceCloseError] = useState(false);

  const { mutate, isLoading, isError, error } = useMutation(login, {
    onError: (error, variables, context) => {
      console.log({ error: error.message, variables });
    },
    onSuccess: (data, variables, context) => {
      toast.success(`Welcome back, ${data.user?.name}`);
      localStorage.setItem('cloud_token', data.token);
      dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: data,
      });
      if (redirect_url) {
        router.push(redirect_url);
      }
      dispatch({
        type: actions.TOGGLE_MODAL,
        payload: false,
      });
    },
  });

  const handleSubmit = (values, helpers) => {
    mutate(values);
  };

  useEffect(() => {
    if (!openAuthModal) {
      formRef.current?.resetForm();
      setForceCloseError(true);
    }
  }, [openAuthModal]);

  return (
    <div style={{ display: open ? 'block' : 'none' }}>
      <Formik
        initialValues={initialLoginValues}
        validationSchema={loginValidationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        innerRef={formRef}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          const errors = Object.keys(formik.errors).reduce(
            (acc, current) => [...acc, formik.errors[current]],
            []
          );

          return (
            <Form>
              <ErrorMenu
                setForceCloseError={setForceCloseError}
                open={(errors.length > 0 || isError) && !forceCloseError}
                errors={errors}
                title={error?.message || 'Please fix the following errors'}
              />
              <Input name='email' label='Email' id='email' />
              <Input name='password' type='password' label='Password' id='password' />
              <button
                type='submit'
                className='submit-btn'
                onClick={() => setForceCloseError(false)}
                disabled={isLoading}
              >
                {isLoading ? <Loading width={20} /> : 'Sign In'}
              </button>
              <div className='footer'>
                Don't have an account?{' '}
                <Link
                  to='/'
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch({
                      type: actions.TOGGLE_TYPE,
                      payload: 'signup',
                    });
                    formik.setErrors({});
                  }}
                >
                  Create Account
                </Link>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
