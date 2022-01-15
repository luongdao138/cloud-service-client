import { FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { actions, useAuthContext } from '../../context/AuthContext';
import AuthForm from '../AuthForm';
import { ModeItem, Container } from './Authentication.styles';

const Authentication = ({ authPage }) => {
  const { mode, dispatch } = useAuthContext();

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
            LinkedIn
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
        <button className='linkedin-button'>
          <FaLinkedinIn />
          <span>Sign in with LinkedIn</span>
        </button>
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
