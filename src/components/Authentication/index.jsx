import { FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { actions, useAuthContext } from '../../context/AuthContext';
import AuthForm from '../AuthForm';
import { ModeItem, Container } from './Authentication.styles';
import GoogleLogin from 'react-google-login';
import { useMutation } from 'react-query';
import { googleLogin } from '../../api/auth';
import { toast } from 'react-toastify';
import { useRouter } from '../../hooks';

const Authentication = ({ authPage }) => {
  const { mode, dispatch, redirect_url } = useAuthContext();
  const { router } = useRouter();

  const { mutate } = useMutation(googleLogin, {
    onSuccess: (data) => {
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

  const googleLoginSuccess = (response) => {
    mutate({ idToken: response.tokenObj.id_token });
  };

  const googleLoginFail = (response) => {
    console.log(response);
  };

  return (
    <Container authPage={authPage}>
      <div className='header'>
        <h2 className='title'>Read reviews. Write reivews. Get rewards</h2>
        <div className='mode-container'>
          <ModeItem
            active={mode === 'linkedin'}
            onClick={() => {
              dispatch({ type: actions.TOGGLE_MODE, payload: 'linkedin' });
            }}
          >
            Google
          </ModeItem>
          <ModeItem
            onClick={() => {
              dispatch({ type: actions.TOGGLE_MODE, payload: 'email' });
            }}
            active={mode === 'email'}
          >
            Email
          </ModeItem>
        </div>
      </div>
      <div
        className='main main-linkedin'
        style={{ display: mode === 'linkedin' ? 'block' : 'none' }}
      >
        {/* <button className='linkedin-button'>
          <FaLinkedinIn />
          <span>Sign in with LinkedIn</span>
        </button> */}
        <GoogleLogin
          clientId='290912695082-5v9jqpb177cvnvtcpv3q30sb29s1flal.apps.googleusercontent.com'
          onSuccess={googleLoginSuccess}
          onFailure={googleLoginFail}
          cookiePolicy={'single_host_origin'}
          render={(props) => (
            <button {...props} className='linkedin-button'>
              <FaLinkedinIn />
              <span>Sign in with Google</span>
            </button>
          )}
        />
        <div className='footer'>
          By signing in, you agree to the TrustRadius
          <Link to='/'>Privacy Policy</Link>and
          <Link to='/'>Terms of Use</Link>
        </div>
      </div>
      <div className='main main-email' style={{ display: mode === 'email' ? 'block' : 'none' }}>
        <AuthForm />
      </div>
    </Container>
  );
};

export default Authentication;
