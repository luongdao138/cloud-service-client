import { useEffect } from 'react';
import useRouter from './useRouter';
import { useAuthContext } from '../context/AuthContext';

const useAuth = (redirect_url) => {
  console.log(redirect_url);
  const { user, isLoading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!user && !isLoading) {
      router.push(`/auth?next_url=${redirect_url}`);
    }
  }, [user, router, isLoading, redirect_url]);
};

export default useAuth;
