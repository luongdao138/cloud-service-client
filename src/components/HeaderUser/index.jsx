import { Container, UserMenu, MobileList } from './HeaderUser.styles';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useClickOutside, useRouter, useToggle } from '../../hooks';
import { useRef } from 'react';
import { actions, useAuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const HeaderUser = ({ closeMenu }) => {
  const [open, toggle] = useToggle(false);
  const [openMobile, toggleMobile] = useToggle(false);
  const menuRef = useRef();
  const imageRef = useRef();
  const { push, replace } = useRouter();
  const { user, dispatch } = useAuthContext();

  const handleLogout = () => {
    dispatch({
      type: actions.LOG_OUT,
    });
    localStorage.removeItem('cloud_token');
    replace('/');
    toast.success(`${user.name}, you are logged out!`);
  };

  useClickOutside(menuRef, (e) => {
    if (!imageRef.current?.contains(e.target)) {
      toggle(false);
    }
  });

  const handleRedirect = (url) => {
    closeMenu();
    toggle(false);
    push(url);
  };

  return (
    <>
      <Container onClick={() => toggleMobile()}>
        <div className='header-user-left'>
          <img
            ref={imageRef}
            onClick={() => toggle()}
            src={
              user.picture_url ||
              'https://www.clipartmax.com/png/middle/424-4242023_fa-user-circle-icon.png'
            }
            alt=''
          />
          <span className='last-name'>{user.name}</span>
          <UserMenu open={open} ref={menuRef}>
            <span className='name'>{user.name}</span>
            <ul>
              <li>
                <Link
                  to='/profile'
                  onClick={(e) => {
                    e.preventDefault();
                    handleRedirect('/profile');
                  }}
                >
                  My Profile
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link
                  to='/profile/reviews'
                  onClick={(e) => {
                    e.preventDefault();
                    handleRedirect('/profile/reviews');
                  }}
                >
                  My Reviews
                </Link>
              </li>
              <div className='divider'></div>
              <button onClick={handleLogout}>Logout</button>
            </ul>
          </UserMenu>
        </div>
        <div className='right'>
          <FiChevronDown
            style={{
              transform: openMobile && 'rotate(180deg)',
            }}
          />
        </div>
      </Container>
      {openMobile && (
        <MobileList>
          <ul>
            <li>
              <Link
                to='/profile'
                onClick={(e) => {
                  e.preventDefault();
                  handleRedirect('/profile');
                }}
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to='/profile/reviews'
                onClick={(e) => {
                  e.preventDefault();
                  handleRedirect('/profile/reviews');
                }}
              >
                My Reviews
              </Link>
            </li>
            <div className='divider'></div>
            <button onClick={handleLogout}>Logout</button>
          </ul>
        </MobileList>
      )}
    </>
  );
};

export default HeaderUser;
