import React from 'react';
import { Container } from './AuthForm.styles';
import { useAuthContext } from '../../context/AuthContext';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthForm = () => {
  const { type } = useAuthContext();

  return (
    <Container>
      <LoginForm open={type === 'login'} />
      <SignupForm open={type === 'signup'} />
    </Container>
  );
};

export default AuthForm;
