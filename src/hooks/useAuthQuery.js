import { useRef } from 'react';
import { useQuery } from 'react-query';
import { actions, useAuthContext } from '../context/AuthContext';

const useAuthQuery = (queryKey, queryFunction, options) => {
  const queryFunctionRef = useRef(queryFunction);
  const { dispatch } = useAuthContext();

  const result = useQuery(queryKey, queryFunctionRef.current, {
    onError: (error) => {
      console.log(error.status);
      if (error.status === 401) {
        dispatch({ type: actions.LOG_OUT });
      }
    },
    notifyOnChangeProps: 'tracked',
    retry: 1,
    staleTime: 30 * 1000,
    ...options,
  });

  return result;
};

export default useAuthQuery;
