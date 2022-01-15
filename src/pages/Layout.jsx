import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { getUser } from '../api/user';
import { AuthModal, Footer, Header } from '../components';
import { actions, useAuthContext } from '../context/AuthContext';
import { useLockScreen } from '../hooks';
import useAuthQuery from '../hooks/useAuthQuery';

const Container = styled.div`
  display: grid;
  min-height: 100vh;
`;

const Content = styled.div`
  margin-top: 65px;
  grid-template-rows: auto;
`;

const Layout = () => {
  const { openAuthModal, dispatch, user, isLoading } = useAuthContext();
  useLockScreen(openAuthModal);

  useAuthQuery(['auth', 'getUser'], () => getUser({}), {
    select: (data) => data.user,
    onSuccess: (data) => {
      dispatch({ type: actions.LOGIN_SUCCESS, payload: { user: data } });
      dispatch({ type: actions.TOGGLE_LOADING, payload: false });
    },
    onError: (error) => {
      if (error.status === 401) {
        dispatch({ type: actions.LOG_OUT });
        dispatch({ type: actions.TOGGLE_LOADING, payload: false });
      }
    },
    enabled: !!localStorage.getItem('cloud_token'),
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!user && !isLoading) {
        dispatch({ type: actions.TOGGLE_MODAL, payload: true });
      }
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch, user, isLoading]);

  return (
    <Container>
      <Header />
      <Content>
        <Outlet />
        <AuthModal open={openAuthModal} />
      </Content>
      <Footer />
    </Container>
  );
};

export default Layout;
