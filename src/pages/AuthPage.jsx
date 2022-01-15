import { useEffect } from 'react';
import styled from 'styled-components';
import Authentication from '../components/Authentication';
import { useAuthContext } from '../context/AuthContext';
import { useRouter } from '../hooks';
import { Content } from '../shared';

const Container = styled.div`
  padding: 2rem 0;
  @media (min-width: 650px) {
    max-width: 480px;
    margin: auto;
  }

  @media (max-width: 780px) {
    padding-bottom: 0.5rem;
  }
`;

const AuthPage = () => {
  const { user, isLoading, redirect_url } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push(router.query.next_url || '/');
    }
  }, [user, isLoading, router, redirect_url]);

  return (
    <Content>
      <Container>
        <Authentication authPage />
      </Container>
    </Content>
  );
};

export default AuthPage;
