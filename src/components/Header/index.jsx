import { Link } from 'react-router-dom';
import logo from '../../assets/header_logo.png';
import { IoMdHeart, IoMdSearch } from 'react-icons/io';
import { Container, MenuButton } from './Header.styles';
import { useToggle, useLockScreen, useRouter } from '../../hooks';
import { actions, useAuthContext } from '../../context/AuthContext';
import HeaderUser from '../HeaderUser';
import { useState } from 'react';

const Header = () => {
  const router = useRouter();
  const { user, dispatch } = useAuthContext();
  const [openMenu, toggle] = useToggle();
  const [value, setValue] = useState('');
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

  const handleSearch = (e) => {
    e.preventDefault();
    if (!value) return;
    router.push(`/clouds?search=${value}`);
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
            {router.pathname !== '/' && (
              <form className='search' onSubmit={handleSearch}>
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  type='text'
                  placeholder='Search...'
                />
                <IoMdSearch />
              </form>
            )}
            {user?._id && (
              <div className='saved-products'>
                <span className='label'>Saved Products</span>
                <span className='heart'>
                  <IoMdHeart />
                  <span>{user?.favorite_products?.length}</span>
                </span>
              </div>
            )}
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
