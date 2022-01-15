import { Link } from 'react-router-dom';
import logo from '../../assets/header_logo.png';
import { IoMdHeart } from 'react-icons/io';
import { Container, MenuButton } from './Header.styles';
import { useToggle, useLockScreen, useRouter } from '../../hooks';
import { actions, useAuthContext } from '../../context/AuthContext';
import HeaderUser from '../HeaderUser';

const Header = () => {
  const router = useRouter();
  const { user, dispatch } = useAuthContext();
  const [openMenu, toggle] = useToggle();
  useLockScreen(openMenu);

  const handleWriteReview = (e) => {
    e.preventDefault();
    if (!user) {
      dispatch({
        type: actions.TOGGLE_MODE,
        payload: 'linkedin',
      });
      dispatch({
        type: actions.TOGGLE_MODAL,
        payload: true,
        redirect_url: '/reviews/new',
      });
    } else {
      // redirect to write review page
      router.push('/reviews/new');
    }
  };

  const handleAuth = (type) => {
    dispatch({
      type: actions.TOGGLE_TYPE,
      payload: type,
    });
    dispatch({
      type: actions.TOGGLE_MODAL,
      payload: true,
    });
  };

  return (
    <>
      <Container open={openMenu}>
        <div className='content'>
          <Link to='/' className='logo'>
            <img src={logo} alt='' />
            <span>TrustRadius</span>
          </Link>
          <div style={{ flexGrow: 1 }}></div>
          <div className='header-left'>
            <div className='saved-products'>
              <span className='label'>Saved Products</span>
              <span className='heart'>
                <IoMdHeart />
                <span>4</span>
              </span>
            </div>
            <div className='nav'>
              <Link to='/reviews/new' onClick={handleWriteReview}>
                Write a Review
              </Link>
              {user ? (
                <HeaderUser closeMenu={() => toggle(false)} />
              ) : (
                <>
                  <Link
                    to='/'
                    onClick={(e) => {
                      e.preventDefault();
                      handleAuth('signup');
                    }}
                  >
                    Sign Up
                  </Link>
                  <Link
                    to='/'
                    onClick={(e) => {
                      e.preventDefault();
                      handleAuth('login');
                    }}
                  >
                    Log In
                  </Link>
                </>
              )}
            </div>
          </div>
          <MenuButton onClick={() => toggle()} className='menu-btn' open={openMenu}>
            <span></span>
          </MenuButton>
        </div>
      </Container>
    </>
  );
};

export default Header;
