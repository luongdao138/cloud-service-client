import { useCallback } from 'react';
import { useState } from 'react';

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const toggle = useCallback((value) => {
    if (value !== undefined) {
      setState(value);
    } else {
      setState((prev) => !prev);
    }
  }, []);

  return [state, toggle];
};

export default useToggle;
