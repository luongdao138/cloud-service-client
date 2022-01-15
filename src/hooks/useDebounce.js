import { useEffect } from 'react';
import { useState } from 'react';

const useDebounce = (value, debounceTime = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, debounceTime);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, debounceTime]);

  return debouncedValue;
};

export default useDebounce;
