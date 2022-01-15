import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth, useRouter } from '../hooks';
import { Content } from '../shared';
import { Container, NavItem } from './styles/ProfilePage.styles';

const navOptions = [
  {
    id: 1,
    label: 'About Me',
    isActive: true,
    link: ['/profile/profile', '/profile'],
  },
  {
    id: 2,
    label: 'My Reviews and Ratings',
    isActive: false,
    link: '/profile/reviews',
  },
  {
    id: 3,
    label: 'Privacy',
    isActive: false,
    link: '/profile/privacy',
  },
];

const ProfilePage = () => {
  const [currentRoute, setCurrentRoute] = useState();
  const { pathname } = useRouter();

  useAuth(pathname);

  useEffect(() => {
    if (pathname.endsWith('/')) {
      setCurrentRoute(pathname.slice(0, -1));
    } else {
      setCurrentRoute(pathname);
    }
  }, [pathname]);

  return (
    <Container>
      <Content>
        <div className='wrapper'>
          <h2 className='title'>Profile</h2>
          <div className='nav'>
            {navOptions.map((t) => {
              return (
                <NavItem
                  active={
                    Array.isArray(t.link) ? t.link.includes(currentRoute) : t.link === currentRoute
                  }
                  to={Array.isArray(t.link) ? t.link[0] : t.link}
                  key={t.id}
                >
                  {t.label}
                </NavItem>
              );
            })}
          </div>
          <Outlet />
        </div>
      </Content>
    </Container>
  );
};

export default ProfilePage;
