import { Formik, Form } from 'formik';
import { actions, useAuthContext } from '../../context/AuthContext';
import Input from '../../shared/Input';
import { Link } from 'react-router-dom';
import { signupValidationSchema } from '../../helpers/validationSchema';
import ErrorMenu from '../../shared/ErrorMenu';
import { Tooltip } from './AuthForm.styles';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { signup } from '../../api/auth';
import Loading from '../Loading';
import { useRouter } from '../../hooks';

const initialSignupValues = {
  email: '',
  password: '',
  name: '',
};

const TooltipContent = ({ title, desc }) => {
  return (
    <Tooltip>
      <div className='tooltip-header'>{title}</div>
      <div className='tooltip-desc'>
        <p>{desc}</p>
      </div>
    </Tooltip>
  );
};

const SignupForm = ({ open }) => {
  const { redirect_url, dispatch, openAuthModal } = useAuthContext();
  const formRef = useRef();
  const router = useRouter();
  const [forceCloseError, setForceCloseError] = useState(false);

  const { mutate, isLoading, isError, error } = useMutation(signup, {
    onError: (error, variables, context) => {
      console.log({ error: error.message, variables });
    },
    onSuccess: (data, variables, context) => {
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
        initialValues={initialSignupValues}
        validationSchema={signupValidationSchema}
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
              <Input
                haveTooltip
                toolTipContent={
                  <TooltipContent title='Enter your work email' desc='Ex: user@gmail.com' />
                }
                name='email'
                label='Email'
                id='signup-email'
              />
              <Input
                haveTooltip
                toolTipContent={
                  <TooltipContent
                    title='Password must be between 8 and 30 characters long'
                    desc='Including 1 lowercase, 1 uppercase and 1 numeral'
                  />
                }
                name='password'
                type='password'
                label='Password'
                id='signup-password'
              />
              <Input name='name' label='User name' id='name' />
              <p className='message'>
                By creating an account, you agree to the TrustRadius{' '}
                <Link to='/'>Privacy Policy</Link> and <Link to='/'>Terms of Use</Link>
              </p>
              <button
                type='submit'
                className='submit-btn'
                onClick={() => setForceCloseError(false)}
                disabled={isLoading}
              >
                {isLoading ? <Loading width={20} /> : 'Create Account'}
              </button>
              <div className='footer'>
                Already have an account{' '}
                <Link
                  to='/'
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch({
                      type: actions.TOGGLE_TYPE,
                      payload: 'login',
                    });
                    formik.setErrors({});
                  }}
                >
                  Sign In
                </Link>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignupForm;
